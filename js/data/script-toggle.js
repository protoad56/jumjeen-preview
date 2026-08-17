/**
 * Simplified / Traditional Display Toggle (for the "214 ราก" catalog + top pill bar)
 * จำจีน (JumJeen) - สลับป้ายแสดงรากศัพท์ระหว่างตัวย่อ/ตัวเต็ม
 *
 * Scope: this only changes which GLYPH is shown as the label for the 25
 * Kangxi radicals whose official (traditional) catalog form differs from
 * modern Simplified Chinese. It does NOT convert the actual vocabulary
 * taught inside each radical's mindmap (好, 妈, 情, 快, ...) — that content
 * stays Simplified always, since there is no traditional-form data for it
 * in this app. Grounded in CC-CEDICT's own traditional/simplified pairing.
 *
 * 8 of the 25 have a fully independent RADICALS_DATA entry on the
 * simplified side too (門/门, 車/车, 貝/贝, 頁/页, 馬/马, 戶/户, 鬥/斗, 鳥/鸟)
 * — toggling to simplified for these actually opens that separate, real
 * entry with its own branches. The other 17 have no separate simplified
 * catalog entry (辵/纟-family exceptions aside); toggling only swaps the
 * displayed glyph/pinyin label, and tapping through still opens the one
 * real (traditional-keyed) entry underneath.
 */

const TRAD_TO_SIMP_RADICAL = {
  "戶": "户", "貝": "贝", "車": "车", "門": "门", "頁": "页", "馬": "马", "鬥": "斗", "鳥": "鸟",
  "爿": "丬", "疋": "匹", "艸": "草", "見": "见", "長": "长", "韋": "韦", "風": "风", "飛": "飞",
  "魚": "鱼", "鹵": "卤", "麥": "麦", "黃": "黄", "黽": "黾", "齊": "齐", "齒": "齿", "龍": "龙", "龜": "龟",
};

const SIMP_TO_TRAD_RADICAL = Object.fromEntries(
  Object.entries(TRAD_TO_SIMP_RADICAL).map(([trad, simp]) => [simp, trad])
);

// Cosmetic-only labels for the 17 radicals with no separate simplified
// RADICALS_DATA entry — {pinyin, thai} shown when toggled, char comes from
// TRAD_TO_SIMP_RADICAL above. Reuses the traditional entry's own pinyin/thai
// since the meaning doesn't change, only the glyph shape does.
const ScriptMode = {
  STORAGE_KEY: "jumjeen_script_mode", // "simplified" | "traditional"

  get() {
    try {
      return localStorage.getItem(this.STORAGE_KEY) || "simplified";
    } catch (e) {
      return this._mode || "simplified";
    }
  },

  set(mode) {
    try {
      localStorage.setItem(this.STORAGE_KEY, mode);
    } catch (e) {
      this._mode = mode;
    }
  },

  toggle() {
    const next = this.get() === "simplified" ? "traditional" : "simplified";
    this.set(next);
    return next;
  },

  /** Given a catalog radical's traditional char, return the char that
   *  should be DISPLAYED right now (label only — does not imply a
   *  separate real entry exists). */
  displayChar(traditionalChar) {
    if (this.get() === "traditional") return traditionalChar;
    return TRAD_TO_SIMP_RADICAL[traditionalChar] || traditionalChar;
  },

  /** Given a catalog radical's traditional char, return which
   *  RADICALS_DATA key should actually be OPENED when tapped — only
   *  redirects to the simplified key if that key truly has its own data. */
  navigationTarget(traditionalChar) {
    if (this.get() === "traditional") return traditionalChar;
    const simp = TRAD_TO_SIMP_RADICAL[traditionalChar];
    if (simp && window.RADICALS_DATA && window.RADICALS_DATA[simp]) return simp;
    return traditionalChar;
  },

  /** For the top pill bar, which already keys by the simplified radical:
   *  when in "traditional" mode, swap to the traditional key if that key
   *  truly has its own RADICALS_DATA entry (车->車, 门->門, etc). */
  pillTarget(simplifiedChar) {
    if (this.get() === "simplified") return simplifiedChar;
    const trad = SIMP_TO_TRAD_RADICAL[simplifiedChar];
    if (trad && window.RADICALS_DATA && window.RADICALS_DATA[trad]) return trad;
    return simplifiedChar;
  },
};

window.TRAD_TO_SIMP_RADICAL = TRAD_TO_SIMP_RADICAL;
window.SIMP_TO_TRAD_RADICAL = SIMP_TO_TRAD_RADICAL;
window.ScriptMode = ScriptMode;
