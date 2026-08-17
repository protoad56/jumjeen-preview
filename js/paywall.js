/**
 * Paywall Modal UI
 * จำจีน (JumJeen) - หน้าต่างชวนซื้อปลดล็อกรากศัพท์ครบ 214 ราก
 */

const PaywallUI = {
  show(lockedRadicalChar) {
    this.close();

    const modal = document.createElement("div");
    modal.className = "paywall-modal-backdrop";
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove();
    });

    modal.innerHTML = `
      <div class="paywall-modal-card">
        <div class="paywall-lock-icon">🔒</div>
        <div class="paywall-title">ปลดล็อกรากศัพท์ครบ 214 ราก</div>
        <p class="paywall-desc">
          เวอร์ชันฟรีเปิดให้ใช้ 10 รากศัพท์พื้นฐาน (${(window.FREE_RADICALS || []).join(" ")})
          ${lockedRadicalChar ? `<br>รากศัพท์ <strong>${lockedRadicalChar}</strong> อยู่ในแพ็กพรีเมียม` : ""}
        </p>
        <ul class="paywall-benefits">
          <li>✅ รากศัพท์คังซีครบทั้ง 214 ราก</li>
          <li>✅ ผังคำศัพท์แตกกิ่งไม่จำกัด</li>
          <li>✅ ปลดล็อกตลอดชีพ จ่ายครั้งเดียว</li>
        </ul>
        <button class="btn-unlock-premium" id="paywall-buy-btn">
          🔓 ปลดล็อกตลอดชีพ
        </button>
        <button class="btn-restore-purchase" id="paywall-restore-btn">กู้คืนการซื้อ (เคยซื้อแล้ว)</button>
        <button class="btn-close-paywall" id="paywall-close-btn">ยังไม่ตอนนี้</button>
      </div>
    `;

    document.body.appendChild(modal);

    const refreshLocks = () => {
      if (window.App) {
        window.App.renderRadicalPills();
        if (window.App.activeTab === "radicals") window.App.renderRadicalsLibrary();
      }
    };

    document.getElementById("paywall-close-btn").addEventListener("click", () => modal.remove());

    document.getElementById("paywall-buy-btn").addEventListener("click", async () => {
      const btn = document.getElementById("paywall-buy-btn");
      btn.disabled = true;
      btn.textContent = "กำลังดำเนินการ...";
      const success = await window.PremiumGate.purchasePremium();
      if (success) {
        modal.remove();
        refreshLocks();
      } else {
        btn.disabled = false;
        btn.textContent = "🔓 ปลดล็อกตลอดชีพ";
        alert("ไม่สามารถซื้อได้ในขณะนี้ ลองใหม่อีกครั้ง หรือระบบชำระเงินยังไม่เปิดใช้งานในเวอร์ชันนี้");
      }
    });

    document.getElementById("paywall-restore-btn").addEventListener("click", async () => {
      const btn = document.getElementById("paywall-restore-btn");
      btn.disabled = true;
      btn.textContent = "กำลังตรวจสอบ...";
      const restored = await window.PremiumGate.restorePurchases();
      if (restored) {
        modal.remove();
        refreshLocks();
      } else {
        btn.disabled = false;
        btn.textContent = "กู้คืนการซื้อ (เคยซื้อแล้ว)";
        alert("ไม่พบการซื้อก่อนหน้านี้ในบัญชีนี้");
      }
    });
  },

  close() {
    const existing = document.querySelector(".paywall-modal-backdrop");
    if (existing) existing.remove();
  },
};

window.PaywallUI = PaywallUI;
