/**
 * Premium Entitlement Gate (Freemium: 10 free radicals, one-time unlock for all 214)
 * จำจีน (JumJeen) - ระบบล็อกเนื้อหาพรีเมียม + RevenueCat In-App Purchase
 *
 * SETUP CHECKLIST before this actually charges real money:
 *   1. Create the In-App Purchase product in App Store Connect AND the
 *      In-App Product in Google Play Console (non-consumable / one-time).
 *   2. Create a RevenueCat project (revenuecat.com), attach both apps,
 *      attach the two store products to an Offering as its "lifetime"
 *      package, and create an Entitlement (see ENTITLEMENT_ID below).
 *   3. Paste the two RevenueCat *public* SDK API keys below.
 *   4. Rebuild the native apps: `npm run cap:sync`.
 * Nothing else in the codebase needs to change — gating, the paywall UI,
 * and unlock persistence already work end to end against this module.
 */

// ---- RevenueCat setup (fill in once you've done the steps above) ----
// These are RevenueCat *public* SDK keys. They are designed to be shipped
// inside the client app — they can only start a purchase and read the
// current device's own entitlements. Never put a secret key (sk_...) or the
// App Store .p8 here; those are server-side credentials and belong only in
// the RevenueCat dashboard.
const REVENUECAT_API_KEYS = {
  ios: "appl_oCTlzvOfYWsKatlQFyrOfxPDZhx",
  android: "goog_FHpobgwgtrAsAMWpQqJWeJXWukS",
};
const ENTITLEMENT_ID = "premium"; // must match the Entitlement identifier in the RevenueCat dashboard

const FREE_RADICALS = ["女", "氵", "讠", "辶", "日", "口", "心", "亻", "火", "木"];

const PremiumGate = {
  STORAGE_KEY: "jumjeen_premium_unlocked",
  // MUST stay false in any build that ships to the App Store / Play Store —
  // when true it short-circuits isUnlocked() and canAccessRadical() for
  // everyone, so every user gets all 214 radicals free and the in-app
  // purchase becomes unsellable. Only flip to true for local system testing.
  // (The jumjeen-preview tester build unlocks via its own inline script
  // instead, so it does not need this flag.)
  DEV_PREVIEW_ALL_UNLOCKED: false,
  _ready: false,

  isFreeRadical(radChar) {
    return FREE_RADICALS.includes(radChar);
  },

  isUnlocked() {
    if (this.DEV_PREVIEW_ALL_UNLOCKED) return true;
    try {
      return localStorage.getItem(this.STORAGE_KEY) === "true";
    } catch (e) {
      return !!this._memoryUnlock;
    }
  },

  canAccessRadical(radChar) {
    if (this.DEV_PREVIEW_ALL_UNLOCKED) return true;
    return this.isUnlocked() || this.isFreeRadical(radChar);
  },

  unlock() {
    try {
      localStorage.setItem(this.STORAGE_KEY, "true");
    } catch (e) {
      this._memoryUnlock = true;
    }
  },

  lock() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {
      this._memoryUnlock = false;
    }
  },

  /** True only inside the native Capacitor app (iOS/Android), never on
   *  plain mobile/desktop web — In-App Purchase only exists there. */
  _plugin() {
    return (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Purchases) || null;
  },

  /** Call once on app startup (see app.js init()). Configures the SDK and
   *  syncs any entitlement the user already owns (e.g. reinstalled the app,
   *  or is signed into the same Apple/Google account on another device). */
  async init() {
    const plugin = this._plugin();
    if (!plugin) {
      console.info("[PremiumGate] Not running inside the native app — purchases disabled (this is normal on web).");
      return;
    }
    const platform = window.Capacitor.getPlatform ? window.Capacitor.getPlatform() : "ios";
    const apiKey = platform === "android" ? REVENUECAT_API_KEYS.android : REVENUECAT_API_KEYS.ios;

    if (apiKey.startsWith("REPLACE_WITH_")) {
      console.warn("[PremiumGate] RevenueCat API key not configured yet — see js/data/premium-config.js.");
      return;
    }

    try {
      await plugin.configure({ apiKey });
      this._ready = true;
      await this._syncEntitlementFromCustomerInfo();
    } catch (e) {
      console.error("[PremiumGate] RevenueCat configure() failed:", e);
    }
  },

  async _syncEntitlementFromCustomerInfo() {
    const plugin = this._plugin();
    if (!plugin) return;
    try {
      const { customerInfo } = await plugin.getCustomerInfo();
      if (customerInfo && customerInfo.entitlements && customerInfo.entitlements.active[ENTITLEMENT_ID]) {
        this.unlock();
      } else {
        this.lock();
      }
    } catch (e) {
      console.error("[PremiumGate] Failed to read customer info:", e);
    }
  },

  /** Runs the real purchase flow. Returns true on success. */
  async purchasePremium() {
    const plugin = this._plugin();
    if (!plugin || !this._ready) {
      console.warn("[PremiumGate] Purchases not available (missing native app, or RevenueCat not configured).");
      return false;
    }
    try {
      const offerings = await plugin.getOfferings();
      const lifetimePackage = offerings.current && offerings.current.lifetime;
      if (!lifetimePackage) {
        console.error("[PremiumGate] No 'lifetime' package found on the current Offering in RevenueCat.");
        return false;
      }
      const { customerInfo } = await plugin.purchasePackage({ aPackage: lifetimePackage });
      const active = customerInfo && customerInfo.entitlements && customerInfo.entitlements.active[ENTITLEMENT_ID];
      if (active) {
        this.unlock();
        return true;
      }
      return false;
    } catch (e) {
      if (e && e.userCancelled) return false; // user backed out — not an error
      console.error("[PremiumGate] Purchase failed:", e);
      return false;
    }
  },

  /** Required by Apple App Review: a way to recover a purchase without
   *  paying again (new device, reinstall, etc). Wire a "กู้คืนการซื้อ" button
   *  to this in the paywall or a settings screen. */
  async restorePurchases() {
    const plugin = this._plugin();
    if (!plugin || !this._ready) return false;
    try {
      const { customerInfo } = await plugin.restorePurchases();
      const active = customerInfo && customerInfo.entitlements && customerInfo.entitlements.active[ENTITLEMENT_ID];
      if (active) {
        this.unlock();
        return true;
      }
      return false;
    } catch (e) {
      console.error("[PremiumGate] Restore failed:", e);
      return false;
    }
  },
};

window.FREE_RADICALS = FREE_RADICALS;
window.PremiumGate = PremiumGate;
