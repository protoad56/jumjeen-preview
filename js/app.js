/**
 * Application Main Controller & Coordinator (Smooth 214 Radicals & Anti-Clutter UI)
 * จำจีน (JumJeen) - ฐานข้อมูลและระบบควบคุม
 */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

class HanziMindApp {
  constructor() {
    this.currentRadical = "女";
    this.currentChar = "好";
    this.activeTab = "mindmap";
    this.mindmap = null;
    this.strokeAnimator = null;
    this.fusionGame = null;
    this.srsEngine = null;
    this.currentRadicalCategoryFilter = "ทั้งหมด";
    this.currentStrokeFilter = "ทั้งหมด";
    this.radicalSearchKeyword = "";
    this.currentEtymTab = "char";
    this.init();
  }

  async init() {
    // 1. Initialize Local Database Engine
    if (window.DB) {
      await window.DB.init();
    }

    // 2. Initialize Sub-modules
    const MindmapClass = window.RadicalMindmap || RadicalMindmap;
    this.mindmap = new MindmapClass("mindmap-container", {
      onSelectCharacter: (charId) => this.selectCharacter(charId, false),
      onSelectRadical: (radId) => this.selectRadical(radId, false)
    });

    const AnimatorClass = window.StrokeAnimator || StrokeAnimator;
    this.strokeAnimator = new AnimatorClass("stroke-target-container");

    const FusionClass = window.RadicalFusionGame || RadicalFusionGame;
    this.fusionGame = new FusionClass("fusion-container");
    window.FusionGame = this.fusionGame;
    this.srsEngine = window.SRSEngine;

    // 3. Bind DOM Events
    this.bindUIEvents();

    // 4. Render initial views
    const settings = this.getSettings();
    if (this.mindmap && settings.hskLevel && settings.hskLevel !== "all") {
      this.mindmap.setHskFilter(settings.hskLevel);
    }
    if (settings.theme === "dark") {
      document.body.classList.add("dark-theme");
    }
    this.renderRadicalPills();
    this.renderCharacterViews();
    this.setupSearch();
    this.syncSettingsUI();

    // 5. Init RevenueCat in the background (no-op outside the native app, or
    // before API keys are configured) — re-render lock badges once it
    // resolves, in case the user already owns the entitlement.
    if (window.PremiumGate) {
      window.PremiumGate.init().then(() => {
        this.renderRadicalPills();
        if (this.activeTab === "radicals") this.renderRadicalsLibrary();
      });
    }
  }

  bindUIEvents() {
    // Bottom Tab Bar Navigation
    document.querySelectorAll(".tab-nav-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Etymology Sub-tab Navigation (splits the long etymology page into panes)
    const etymSubtabBar = document.getElementById("etym-subtab-bar");
    if (etymSubtabBar) {
      etymSubtabBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".etym-subtab-btn");
        if (btn) this.switchEtymTab(btn.dataset.etymTab);
      });
    }

    // Viewport Mode (Mobile Frame vs Fullscreen Web)
    const frameBtn = document.getElementById("btn-frame-toggle");
    if (frameBtn) {
      frameBtn.addEventListener("click", () => {
        const appWrapper = document.getElementById("app-viewport-wrapper");
        appWrapper.classList.toggle("full-screen-mode");
        const isFull = appWrapper.classList.contains("full-screen-mode");
        frameBtn.innerHTML = isFull ? "📱 มุมมองมือถือ" : "💻 มุมมองเต็มจอ";
        setTimeout(() => this.mindmap.render(), 200);
      });
    }

    // Stroke Controller
    const strokePlay = document.getElementById("btn-stroke-play");
    const strokePrev = document.getElementById("btn-stroke-prev");
    const strokeNext = document.getElementById("btn-stroke-next");
    const strokeReset = document.getElementById("btn-stroke-reset");

    if (strokePlay) strokePlay.addEventListener("click", () => this.strokeAnimator.play());
    if (strokePrev) strokePrev.addEventListener("click", () => this.strokeAnimator.stepBackward());
    if (strokeNext) strokeNext.addEventListener("click", () => this.strokeAnimator.stepForward());
    if (strokeReset) strokeReset.addEventListener("click", () => this.strokeAnimator.reset());

    this.strokeAnimator.onStepChange = (curr, total, stepInfo) => {
      const stepLbl = document.getElementById("stroke-step-label");
      if (stepLbl) {
        stepLbl.innerHTML = curr === 0 
          ? `พร้อมเริ่มเขียน (ทั้งหมด ${total} ขีด)` 
          : `ขีดที่ ${curr} / ${total}: <strong>${stepInfo ? stepInfo.name : ''}</strong> (${stepInfo ? stepInfo.desc : ''})`;
      }
    };
  }

  switchTab(tabId) {
    this.activeTab = tabId;

    // Close any leftover Eureka modal so it never floats over a different tab
    const eurekaModal = document.querySelector(".eureka-modal-backdrop");
    if (eurekaModal) eurekaModal.remove();

    // Update Tab Navigation Active state
    document.querySelectorAll(".tab-nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });

    // Update Tab Content sections
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `section-${tabId}`);
    });

    // Reset scroll position so every tab opens at the top, not mid-scroll
    const contentArea = document.querySelector(".app-content-area");
    if (contentArea) contentArea.scrollTop = 0;

    // Re-render / update specifics for active tab
    if (tabId === "mindmap") {
      setTimeout(() => this.mindmap.render(), 50);
    } else if (tabId === "etymology") {
      this.renderEtymologyDetail();
      this.strokeAnimator.loadCharacter(this.currentChar);
    } else if (tabId === "pronunciation") {
      this.renderPronunciationStudio();
    } else if (tabId === "srs") {
      if (this.srsEngine) this.srsEngine.startSession();
    } else if (tabId === "fusion") {
      this.fusionGame.render();
    } else if (tabId === "radicals") {
      this.renderRadicalsLibrary();
    }
  }

  selectRadical(radId, updateMindmap = true) {
    if (window.PremiumGate && !window.PremiumGate.canAccessRadical(radId)) {
      window.PaywallUI.show(radId);
      return;
    }

    this.currentRadical = radId;
    const radData = this.mindmap.getRadicalData(radId);
    if (radData && radData.characterIds && radData.characterIds.length > 0) {
      this.currentChar = radData.characterIds[0];
    }

    this.renderRadicalPills();
    if (updateMindmap) {
      this.mindmap.setRadical(radId);
      if (this.activeTab !== "mindmap") {
        this.switchTab("mindmap");
      }
    }
    this.renderCharacterViews();
  }

  /** Called from the 214-radical library grid; selectRadical() already
   *  switches to the mindmap tab once unlocked, and shows the paywall
   *  (without switching tabs) when locked. */
  openRadicalFromLibrary(radChar) {
    this.selectRadical(radChar);
  }

  setMindmapHskFilter(filter, btnElement) {
    document.querySelectorAll(".hsk-pill-btn").forEach(b => {
      b.classList.remove("active");
    });
    if (btnElement) {
      btnElement.classList.add("active");
    }
    if (this.mindmap) {
      this.mindmap.setHskFilter(filter);
    }
  }

  /** Resolve which radical a character belongs to, even for characters that
   *  only have a lightweight HANZI_LEXICON entry (no CHARACTERS_DATA.radical
   *  field) — falls back to scanning RADICALS_DATA.characterIds. */
  findRadicalForCharacter(charId) {
    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[charId] : null;
    if (charData && charData.radical) return charData.radical;

    if (window.RADICALS_DATA) {
      for (const [radKey, radData] of Object.entries(window.RADICALS_DATA)) {
        if (radData.characterIds && radData.characterIds.includes(charId)) {
          return radKey;
        }
      }
    }
    return null;
  }

  selectCharacter(charId, updateMindmap = true) {
    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[charId] : null;

    // Gate by the character's own radical, not just radical-navigation entry
    // points — this closes the search-result bypass (search can jump
    // straight to a character's Etymology tab without ever calling
    // selectRadical()).
    const ownerRadical = this.findRadicalForCharacter(charId);
    if (ownerRadical && window.PremiumGate && !window.PremiumGate.canAccessRadical(ownerRadical)) {
      window.PaywallUI.show(ownerRadical);
      return false;
    }

    this.currentChar = charId;
    if (charData && charData.radical) {
      this.currentRadical = charData.radical;
      this.renderRadicalPills();
    }

    if (updateMindmap) {
      this.mindmap.selectCharacter(charId);
    }
    this.renderCharacterViews();
    return true;
  }

  renderRadicalPills() {
    const list = document.getElementById("radical-pill-list");
    if (!list) return;

    // Set of top high-frequency radicals on top scroll bar + Quick 214 Hub button
    const shortcuts = [
      "女", "氵", "讠", "钅", "辶", "饣", "亻", "心", "木", "日", "口", "火",
      "山", "石", "田", "禾", "土", "月", "目", "手", "足", "车", "门", "雨",
      "艹", "虫", "贝", "鸟", "力", "子", "大", "马", "犬", "刀", "竹", "衣", "走", "穴"
    ];

    if (!shortcuts.includes(this.currentRadical)) {
      shortcuts.unshift(this.currentRadical);
    }

    list.innerHTML = `
      <button class="radical-pill" style="background: var(--c-amber-soft); border-color: var(--c-amber); color: var(--c-amber); font-weight: 700;" onclick="window.App.switchTab('radicals')">
        <div class="pill-top-row"><span>📚 ดูครบ 214 ราก</span></div>
      </button>
    ` + shortcuts.map(radKey => {
      const rad = this.mindmap.getRadicalData(radKey);
      const isSelected = (radKey === this.currentRadical);
      const isLocked = window.PremiumGate && !window.PremiumGate.canAccessRadical(radKey);
      const progress = window.DB ? window.DB.getRadicalMasteryProgress(rad.characterIds || []) : { mastered: 0, total: 0 };
      const pct = progress.total > 0 ? Math.round((progress.mastered / progress.total) * 100) : 0;
      return `
        <button class="radical-pill ${isSelected ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="window.App.selectRadical('${radKey}')" title="จำได้แล้ว ${progress.mastered}/${progress.total} ตัว">
          <div class="pill-top-row">
            <span class="rad-char">${rad.id}</span>
            <span class="rad-name">${rad.pinyin || ''}</span>
            ${isLocked ? '<span class="lock-badge">🔒</span>' : ''}
          </div>
          ${progress.total > 0 ? `<div class="mastery-progress-bar"><div class="mastery-progress-fill" style="width: ${pct}%"></div></div>` : ''}
        </button>
      `;
    }).join("");
  }

  renderCharacterViews() {
    this.updateQuickInspectBar();
    this.renderEtymologyDetail();
    this.renderPronunciationStudio();
    this.strokeAnimator.loadCharacter(this.currentChar);
  }

  updateQuickInspectBar(customItem = null) {
    const hanziEl = document.getElementById("quick-inspect-hanzi");
    const pinyinEl = document.getElementById("quick-inspect-pinyin");
    const thaiEl = document.getElementById("quick-inspect-thai");
    if (!hanziEl) return;

    if (customItem) {
      hanziEl.textContent = customItem.hanzi;
      pinyinEl.textContent = customItem.pinyin;
      thaiEl.textContent = customItem.thai;
      return;
    }

    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[this.currentChar] : null;
    const lexicon = window.HANZI_LEXICON ? window.HANZI_LEXICON[this.currentChar] : null;

    hanziEl.textContent = this.currentChar;
    pinyinEl.textContent = charData ? charData.primaryPinyin : (lexicon ? lexicon.pinyin : this.currentRadical);
    thaiEl.textContent = charData ? charData.thaiMeaningShort : (lexicon ? lexicon.thai : "รากศัพท์ภาษาจีน");
  }

  /**
   * Switch the Etymology tab's internal sub-tab (char / radical / story / vocab).
   * Splitting the once-long page into short panes cuts scrolling dramatically.
   */
  switchEtymTab(tabKey) {
    this.currentEtymTab = tabKey;

    document.querySelectorAll(".etym-subtab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.etymTab === tabKey);
    });
    document.querySelectorAll(".etym-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `etym-pane-${tabKey}`);
    });

    const contentArea = document.querySelector(".app-content-area");
    if (contentArea) contentArea.scrollTop = 0;
  }

  /**
   * Six Writings (六书) Linguistic Classifier
   * Accurately categorizes characters into:
   * 1. 象形 (Pictograph)
   * 2. 指事 (Ideograph / Indicator)
   * 3. 会意 (Compound Ideograph)
   * 4. 形声 (Phono-Semantic: 意符 + 声符)
   * 5. 假借 (Phonetic Loan)
   * 6. 转注 (Mutually Explanatory)
   */
  analyzeSixWritings(charData) {
    if (!charData) {
      return {
        type: "象形",
        categoryKey: "pictograph",
        label: "🖼️ 象形 (อักษรภาพ)",
        desc: "วาดจำลองจากรูปทรงของสิ่งของดั้งเดิมตามธรรมชาติ",
        badgeClass: "six-writings-pictograph",
        isPhonoSemantic: false
      };
    }

    // 1. Direct override if explicit metadata exists
    if (charData.sixWritingsCategory) {
      const explicitMap = {
        "指事": { type: "指事", categoryKey: "ideograph", label: "💡 指事 (อักษรชี้สัญลักษณ์ / นามธรรม)", desc: "ใช้สัญลักษณ์ขีดแต้มชี้ตำแหน่งหรือสิ่งนามธรรม (เช่น '本' ขีดชี้ที่โคนต้นไม้ = รากฐาน)", badgeClass: "six-writings-ideograph", isPhonoSemantic: false },
        "象形": { type: "象形", categoryKey: "pictograph", label: "🖼️ 象形 (อักษรภาพ)", desc: "วาดจำลองจากรูปทรงของสิ่งของดั้งเดิมตามธรรมชาติ (เช่น พระอาทิตย์ 日, ดวงจันทร์ 月, ภูเขา 山)", badgeClass: "six-writings-pictograph", isPhonoSemantic: false },
        "会意": { type: "会意", categoryKey: "compound_ideograph", label: "🧩 会意 (ประสมความหมาย)", desc: "นำความหมายของชิ้นส่วน 2 ชิ้นขึ้นไปมารวมกันเกิดเป็นความหมายใหม่ (เช่น คน 休 พิงต้นไม้ = พักผ่อน)", badgeClass: "six-writings-compound", isPhonoSemantic: false },
        "形声": { type: "形声", categoryKey: "phono_semantic", label: "🗣️ 形声 (อักษรเสียง-ความหมาย)", desc: "อักษรจีนกว่า 80% ใช้วิธีนี้ โดยชิ้นส่วนหนึ่งบอกหมวดความหมาย (意符) และอีกชิ้นส่วนบอกเสียงอ่าน (声符)", badgeClass: "six-writings-phono-semantic", isPhonoSemantic: true },
        "假借": { type: "假借", categoryKey: "phonetic_loan", label: "🔄 假借 (อักษรยืมเสียง)", desc: "ยืมอักษรที่มีเสียงตรงกันมาใช้แทนความหมายใหม่", badgeClass: "six-writings-loan", isPhonoSemantic: false },
        "转注": { type: "转注", categoryKey: "derivative_cognate", label: "🔀 转注 (อักษรสื่อความหมายสัมพันธ์)", desc: "อักษรที่สร้างขึ้นเพื่อขยายหรือสื่อความหมายสัมพันธ์กัน", badgeClass: "six-writings-cognate", isPhonoSemantic: false }
      };
      if (explicitMap[charData.sixWritingsCategory]) return explicitMap[charData.sixWritingsCategory];
    }

    // 2. Authoritative Indicator Characters (指事 - Abstract Pointers & Symbols)
    const ZHISHI_SET = new Set([
      "一", "二", "三", "四", "八", "十", "百", "千",
      "上", "下", "中", "凸", "凹",
      "本", "末", "刃", "寸", "甘", "旦", "立", "天", "亦", "牟", "血", "丹", "井",
      "小", "少", "卜", "丈", "尺", "凶", "区", "贰", "术", "卡"
    ]);
    if (ZHISHI_SET.has(charData.char)) {
      return {
        type: "指事",
        categoryKey: "ideograph",
        label: "💡 指事 (อักษรชี้สัญลักษณ์ / นามธรรม)",
        desc: "ใช้สัญลักษณ์ขีดแต้มชี้ตำแหน่งหรือสิ่งนามธรรม (เช่น '本' ขีดชี้ที่โคนต้นไม้ = รากฐาน, '上/下' ขีดบอกทิศทางบน-ล่าง)",
        badgeClass: "six-writings-ideograph",
        isPhonoSemantic: false
      };
    }

    const components = charData.components || [];

    // 3. Components with Explicit Indicative Role (加体指事)
    if (components.some(c => c.role && (c.role.includes("指事") || c.role.includes("ขีดชี้สัญลักษณ์")))) {
      return {
        type: "指事",
        categoryKey: "ideograph",
        label: "💡 指事 (อักษรชี้สัญลักษณ์ / นามธรรม)",
        desc: "ใช้อักษรภาพเดิมร่วมกับขีดชี้สัญลักษณ์เน้นตำแหน่งหรือความหมายจำเพาะ",
        badgeClass: "six-writings-ideograph",
        isPhonoSemantic: false
      };
    }

    // 4. Classic Compound Ideograph Overrides (会意)
    const HUIYI_OVERRIDE_SET = new Set([
      "休", "明", "信", "男", "初", "友", "相", "取", "劣", "好", "妇", "妥", "委", "保", "集", "解"
    ]);
    if (HUIYI_OVERRIDE_SET.has(charData.char)) {
      return {
        type: "会意",
        categoryKey: "compound_ideograph",
        label: "🧩 会意 (ประสมความหมาย)",
        desc: "นำความหมายของชิ้นส่วน 2 ชิ้นขึ้นไปมารวมกันเกิดเป็นความหมายใหม่ (เช่น คน 休 พิงต้นไม้ = พักผ่อน, อาทิตย์+จันทร์ 明 = สว่าง)",
        badgeClass: "six-writings-compound",
        isPhonoSemantic: false
      };
    }

    // 5. Phono-semantic (形声 - Meaning Component + Sound Component)
    const soundComp = components.find(c => c.role && (c.role.includes("声符") || c.role.includes("เสียง") || c.role.includes("Sound") || c.role.includes("Phonetic")));
    let famInfo = null;
    if (!soundComp && window.PHONETIC_FAMILIES) {
      for (const [key, fam] of Object.entries(window.PHONETIC_FAMILIES)) {
        if (fam.members && fam.members.some(m => m.char === charData.char)) {
          famInfo = { key, fam };
          break;
        }
      }
    }

    if (soundComp || famInfo || charData.char === "普") {
      const meaningComp = components.find(c => c !== soundComp && c.char !== charData.char) || components[0] || { char: charData.radical, meaning: "หมวดความหมาย" };
      return {
        type: "形声",
        categoryKey: "phono_semantic",
        label: "🗣️ 形声 (อักษรเสียง-ความหมาย)",
        desc: "อักษรจีนกว่า 80% ใช้วิธีนี้ โดยชิ้นส่วนหนึ่งบอกหมวดความหมาย (意符) และอีกชิ้นส่วนบอกเสียงอ่าน (声符)",
        badgeClass: "six-writings-phono-semantic",
        isPhonoSemantic: true,
        soundComp: soundComp || (famInfo ? { char: famInfo.key, meaning: "ตระกูลเสียง " + famInfo.key } : (charData.char === "普" ? { char: "并", meaning: "ออกเสียงคล้ายกัน" } : { char: "เสียง", pinyin: "", meaning: "ยืมเสียงอ่าน" })),
        meaningComp: meaningComp || { char: charData.radical, meaning: "หมวดความหมาย" }
      };
    }

    // 6. Compound Structure Fallback -> 会意
    if (components.length >= 2) {
      return {
        type: "会意",
        categoryKey: "compound_ideograph",
        label: "🧩 会意 (ประสมความหมาย)",
        desc: "นำความหมายของชิ้นส่วน 2 ชิ้นขึ้นไปมารวมกันเกิดเป็นความหมายใหม่",
        badgeClass: "six-writings-compound",
        isPhonoSemantic: false
      };
    }

    // 7. Single Character Fallback -> 象形
    return {
      type: "象形",
      categoryKey: "pictograph",
      label: "🖼️ 象形 (อักษรภาพ)",
      desc: "วาดจำลองจากรูปทรงของสิ่งของดั้งเดิมตามธรรมชาติ (เช่น พระอาทิตย์ 日, ดวงจันทร์ 月, ภูเขา 山)",
      badgeClass: "six-writings-pictograph",
      isPhonoSemantic: false
    };
  }

  /**
   * Disambiguate Meat Radical (肉月旁) vs Moon Radical (日月)
   */
  getRadicalLinguisticMeta(charData) {
    if (!charData) return null;
    const meatChars = ["胖", "脸", "腿", "肚", "肝", "胃", "脚", "脑", "胸", "臂", "肌", "背", "腰", "肥", "服", "朋"];
    if (charData.radical === "月" || (charData.components && charData.components.some(c => c.char === "月" || c.char === "肉"))) {
      if (meatChars.includes(charData.char) || !["期", "朝", "明", "朗"].includes(charData.char)) {
        return {
          isMeat: true,
          badge: "🥩 肉月旁 (ròuyuèpáng)",
          desc: "รูปแปลงของ 'เนื้อ (肉)' สื่อถึงอวัยวะร่างกาย ไม่ใช่พระจันทร์"
        };
      } else {
        return {
          isMeat: false,
          badge: "🌙 日月 (yuè)",
          desc: "พระจันทร์ กาลเวลา และดวงดาว"
        };
      }
    }
    return null;
  }

  /**
   * Render Tab 2: Etymology & Mnemonic Storytelling
   * Content is split across 4 short panes (hero+stroke / components / story / vocab)
   */
  renderEtymologyDetail() {
    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[this.currentChar] : null;
    const heroTarget = document.getElementById("etymology-hero-card");
    const componentsTarget = document.getElementById("etymology-components-card");
    const storyTarget = document.getElementById("etymology-story-card");
    const vocabTarget = document.getElementById("etymology-vocab-card");
    if (!heroTarget) return;

    // Keep the active sub-tab pane in sync
    document.querySelectorAll(".etym-subtab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.etymTab === this.currentEtymTab);
    });
    document.querySelectorAll(".etym-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `etym-pane-${this.currentEtymTab}`);
    });

    if (!charData) {
      const lexicon = window.HANZI_LEXICON ? window.HANZI_LEXICON[this.currentChar] : null;
      const displayPinyin = lexicon ? lexicon.pinyin : this.currentRadical;
      const displayThai = lexicon ? lexicon.thai : "รากศัพท์ภาษาจีน";

      heroTarget.innerHTML = `
        <div class="char-hero-header">
          <div class="char-main-box">
            <div class="char-large-hanzi">${this.currentChar}</div>
            <div class="char-meta-row">
              <span class="pinyin-tag">${displayPinyin}</span>
              <span class="hsk-badge">ราก: ${this.currentRadical}</span>
              <button class="audio-speak-btn" onclick="window.AudioEngine.speak('${this.currentChar}')">
                🔊 ฟังเสียง
              </button>
            </div>
          </div>

          <div class="char-meaning-summary">
            <div class="summary-label">ความหมาย</div>
            <div class="summary-val">${displayThai}</div>
          </div>
        </div>
      `;
      if (componentsTarget) componentsTarget.innerHTML = `<div class="etym-empty-notice">✨ ยังไม่มีข้อมูลโครงสร้างสำหรับรากศัพท์นี้</div>`;
      if (storyTarget) storyTarget.innerHTML = `<div class="etym-empty-notice">✨ ยังไม่มีเรื่องราวดั้งเดิมสำหรับรากศัพท์นี้</div>`;
      if (vocabTarget) vocabTarget.innerHTML = `<div class="etym-empty-notice">✨ ยังไม่มีคำศัพท์แตกกิ่งสำหรับรากศัพท์นี้</div>`;
      return;
    }

    const settings = this.getSettings();
    const sixWritings = this.analyzeSixWritings(charData);
    const meatMeta = this.getRadicalLinguisticMeta(charData);
    const tradData = (settings.showTraditional !== false && window.TRADITIONAL_MAP) ? window.TRADITIONAL_MAP[charData.char] : null;
    const showSixWritings = settings.showSixWritings !== false;
    const showSandhi = settings.showSandhi !== false;

    heroTarget.innerHTML = `
      <div class="char-hero-header">
        <div class="char-main-box">
          <div class="char-large-hanzi">
            ${charData.char}
            ${tradData ? `<span class="trad-char-tag" title="อักษรตัวเต็ม">[${tradData.trad}]</span>` : ''}
          </div>
          <div class="char-meta-row">
            <span class="pinyin-tag">${charData.primaryPinyin}</span>
            <span class="hsk-badge">HSK ${charData.hskLevel}</span>
            ${showSixWritings ? `<span class="six-writings-badge ${sixWritings.badgeClass}" title="${sixWritings.desc}">${sixWritings.label}</span>` : ''}
            ${meatMeta ? `<span class="meat-radical-badge" title="${meatMeta.desc}">${meatMeta.badge}</span>` : ''}
            <button class="audio-speak-btn" onclick="window.AudioEngine.speak('${charData.char}')">
              🔊 ฟังเสียง
            </button>
          </div>
        </div>

        <div class="char-meaning-summary">
          <div class="summary-label">ความหมายปัจจุบัน</div>
          <div class="summary-val">${charData.thaiMeaningShort}</div>
        </div>
      </div>
    `;

    // Check Phonetic Family (声旁字族)
    let phoneticFamilyInfo = null;
    let phoneticFamilyKey = null;
    if (window.PHONETIC_FAMILIES) {
      if (window.PHONETIC_FAMILIES[charData.char]) {
        phoneticFamilyKey = charData.char;
        phoneticFamilyInfo = window.PHONETIC_FAMILIES[charData.char];
      } else {
        for (const [key, fam] of Object.entries(window.PHONETIC_FAMILIES)) {
          if (fam.members && fam.members.some(m => m.char === charData.char)) {
            phoneticFamilyKey = key;
            phoneticFamilyInfo = fam;
            break;
          }
        }
      }
    }

    if (componentsTarget) {
      componentsTarget.innerHTML = `
        <!-- Component Breakdown Formula Box -->
        <div class="etymology-box component-fusion-box">
          <div class="box-title">
            <span class="icon">🧩</span>
            <span>โครงสร้าง & การวิเคราะห์ประเภทอักษร</span>
          </div>

          ${showSixWritings ? `
            <div class="six-writings-type-bar">
              <span class="type-pill ${sixWritings.badgeClass}">${sixWritings.label}</span>
              <p class="type-desc">${sixWritings.desc}</p>
            </div>
          ` : ''}

          <div class="components-formula-flow">
            ${(charData.components || []).length <= 1 || (charData.components[0] && charData.components[0].char === charData.char) ? `
              <div class="component-card result-card single-pictograph-card" style="width: 100%; max-width: 320px; margin: 0 auto;">
                <div class="comp-role-badge">${charData.components[0]?.role || '🖼️ อักษรภาพเดี่ยว (独体字)'}</div>
                <div class="c-char">${charData.char}</div>
                <div class="c-pinyin">${charData.primaryPinyin}</div>
                <div class="c-meaning">${charData.thaiMeaningShort}</div>
                <div class="c-desc">${charData.components[0]?.desc || `รากศัพท์หมวด ${charData.radical}`}</div>
              </div>
            ` : `
              ${(charData.components || []).map(c => {
                const isPhonetic = c.role && (c.role.includes("声符") || c.role.includes("เสียง") || c.role.includes("Sound"));
                const isSemantic = c.role && (c.role.includes("意符") || c.role.includes("ความหมาย") || c.role.includes("หมวด"));
                const cardClass = isPhonetic ? 'phonetic-card' : (isSemantic ? 'semantic-card' : '');
                return `
                  <div class="component-card ${cardClass}">
                    <div class="comp-role-badge">${c.role}</div>
                    <div class="c-char">${c.char}</div>
                    ${c.pinyin ? `<div class="c-pinyin">${c.pinyin}</div>` : ''}
                    <div class="c-meaning">${c.meaning}</div>
                    ${c.desc ? `<div class="c-desc">${c.desc}</div>` : ''}
                  </div>
                `;
              }).join('<div class="formula-plus">➕</div>')}
              <div class="formula-equals">➔</div>
              <div class="component-card result-card">
                <div class="comp-role-badge">ตัวอักษรที่สมบูรณ์</div>
                <div class="c-char">${charData.char}</div>
                <div class="c-pinyin">${charData.primaryPinyin}</div>
                <div class="c-meaning">${charData.thaiMeaningShort}</div>
                <div class="c-desc">สังกัดหมวด ${charData.radical}</div>
              </div>
            `}
          </div>

          ${phoneticFamilyInfo ? `
            <div class="phonetic-family-box">
              <div class="fam-header">
                <span class="fam-icon">🔔</span>
                <span class="fam-title">ตระกูลเสียงอ่าน [${phoneticFamilyKey} ${phoneticFamilyInfo.pinyin}]</span>
                <span class="fam-badge">${phoneticFamilyInfo.description}</span>
              </div>
              <p class="fam-desc">อักษรในตระกูลนี้ใช้ตัวช่วยออกเสียงเดียวกัน ทำให้จำคำศัพท์เป็นชุดได้เร็วขึ้น:</p>
              <div class="fam-chips-grid">
                ${phoneticFamilyInfo.members.map(m => `
                  <button class="fam-chip-btn ${m.char === charData.char ? 'active-current' : ''}" onclick="window.App.openEtymologyDetail('${m.char}')">
                    <span class="chip-char">${m.char}</span>
                    <span class="chip-pinyin">${m.pinyin}</span>
                    <span class="chip-thai">${m.thai}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }

    if (storyTarget) {
      storyTarget.innerHTML = `
        <!-- DUAL-CARD 1: Ancient Etymology & Linguistic Fact -->
        <div class="etymology-box origin-story-box">
          <div class="box-title">
            <span class="icon">🏛️</span>
            <span>หลักฐานทางภาษาศาสตร์ & ภาพอักษรโบราณ (甲骨文 / 金文)</span>
          </div>

          ${showSixWritings ? `
            <div class="origin-category-badge-row">
              <span class="six-writings-badge ${sixWritings.badgeClass}" title="${sixWritings.desc}">${sixWritings.label}</span>
              <span class="origin-category-note">${sixWritings.desc}</span>
            </div>
            <div class="myth-dispeller-banner">
              <div class="myth-header">
                <span class="myth-icon">💡</span>
                <strong>ความรู้ภาษาศาสตร์: ลบล้างความเชื่อผิดๆ "อักษรจีนทุกตัวคือภาพวาด"</strong>
              </div>
              <p class="myth-body">
                ผู้เรียนส่วนใหญ่เข้าใจผิดว่าอักษรจีนทั้งหมดเป็นภาพวาด แต่ในความเป็นจริง <strong>อักษรภาพ (象形) มีเพียง ~4%</strong> เท่านั้น ส่วนอักษรจีนมากกว่า <strong>80-90% คืออักษรแบบ 形声 (Phono-Semantic)</strong> ที่ผสมระหว่าง <em>'หมวดนำบอกความหมาย (意符)'</em> + <em>'ตัวช่วยบอกเสียงอ่าน (声符)'</em>
              </p>
            </div>
          ` : ''}

          <div class="oracle-script-quote">
            <strong>${charData.ancientEtymology ? charData.ancientEtymology.oracleScript : ''}</strong>
          </div>
          <p class="origin-story-text">
            ${charData.ancientEtymology ? charData.ancientEtymology.originStory : ''}
          </p>
          <div class="modern-evolution-note">
            <strong>วิวัฒนาการสู่ปัจจุบัน:</strong> ${charData.ancientEtymology ? charData.ancientEtymology.modernEvolution : ''}
          </div>

          ${tradData ? `
            <div class="traditional-insight-box">
              <div class="trad-title">
                <span class="trad-icon">🔀</span>
                <strong>เกร็ดนิรุกติศาสตร์ตัวเต็ม [${tradData.trad}]</strong>
              </div>
              <p class="trad-text">${tradData.insight}</p>
            </div>
          ` : ''}
        </div>

        <!-- DUAL-CARD 2: Mnemonic Hook / Modern Memory Trick -->
        <div class="etymology-box mnemonic-hook-box">
          <div class="box-title">
            <span class="icon">💡</span>
            <span>เทคนิคจำภาพในสมอง (Modern Mnemonic Hook)</span>
          </div>
          <div class="hook-formula-banner">
            ${charData.mnemonicHook ? charData.mnemonicHook.formula : ''}
          </div>
          <p class="hook-story-text">
            ${charData.mnemonicHook ? charData.mnemonicHook.visualStory : ''}
          </p>
        </div>
      `;
    }

    if (vocabTarget) {
      vocabTarget.innerHTML = `
        <!-- Compound Vocabulary List with Tone Sandhi Realization -->
        <div class="etymology-box compounds-box">
          <div class="box-title">
            <span class="icon">🌿</span>
            <span>คำศัพท์ที่แตกกิ่งก้าน ${showSandhi ? '(พร้อมกฎการผันเสียงจริง Tone Sandhi)' : ''}</span>
          </div>
          <div class="compounds-grid">
            ${(charData.compounds || []).map(comp => {
              const sandhi = (showSandhi && window.ToneSandhiEngine) ? window.ToneSandhiEngine.analyzeSandhi(comp.word, comp.pinyin) : { hasSandhi: false };
              return `
                <div class="compound-item" onclick="window.AudioEngine.speak('${(comp.audioText || comp.word).replace(/'/g, "\\'")}')">
                  <div class="comp-header">
                    <span class="comp-word">${comp.word}</span>
                    <span class="comp-pinyin">${comp.pinyin}</span>
                    <span class="comp-hsk">HSK ${comp.hsk}</span>
                  </div>
                  ${sandhi.hasSandhi ? `
                    <div class="sandhi-pill" title="${sandhi.explanation}">
                      <span class="sandhi-badge">🔊 พูดจริง: [${sandhi.spokenPinyin}]</span>
                      <span class="sandhi-rule">${sandhi.ruleName}</span>
                    </div>
                  ` : ''}
                  <div class="comp-thai">${comp.thai}</div>
                  <div class="comp-audio-btn">🔊 ฟังเสียง</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Example Sentences (only rendered when data exists) -->
        ${(charData.exampleSentences && charData.exampleSentences.length > 0) ? `
          <div class="etymology-box sentences-box">
            <div class="box-title">
              <span class="icon">💬</span>
              <span>ประโยคตัวอย่างในชีวิตประจำวัน</span>
            </div>
            <div class="sentences-list">
              ${charData.exampleSentences.map(s => `
                <div class="sentence-item" onclick="window.AudioEngine.speak('${(s.audioText || s.chinese).replace(/'/g, "\\'")}')">
                  <div class="sent-chinese">${s.chinese}</div>
                  <div class="sent-pinyin">${s.pinyin}</div>
                  <div class="sent-thai">${s.thai}</div>
                  <div class="sent-audio-trigger">🔊 แตะเพื่อฟังเสียงเจ้าของภาษา</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      `;
    }
  }

  /**
   * Render Tab 3: Pronunciation & Tone Studio
   */
  renderPronunciationStudio() {
    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[this.currentChar] : null;
    const container = document.getElementById("pronunciation-studio-content");
    if (!container) return;

    if (!charData) {
      const lexicon = window.HANZI_LEXICON ? window.HANZI_LEXICON[this.currentChar] : null;
      const displayPinyin = lexicon ? lexicon.pinyin : this.currentRadical;
      const displayThai = lexicon ? lexicon.thai : "รากศัพท์ภาษาจีน";
      const displayTone = lexicon ? (lexicon.tone || 1) : 1;

      container.innerHTML = `
        <div class="pronounce-hero">
          <div class="pronounce-char">${this.currentChar}</div>
          <div class="pronounce-pinyin-large">${displayPinyin}</div>
          <div class="pronounce-meaning-sub">${displayThai}</div>
          <div class="pronounce-play-controls">
            <button class="btn-play-voice primary" onclick="window.AudioEngine.speak('${this.currentChar}')">
              🔊 ฟังเสียงอ่าน
            </button>
          </div>
        </div>

        <!-- Tone Pitch Curve Visualizer Canvas -->
        <div class="tone-curve-card">
          <div class="tone-card-header">
            <div class="tone-card-title">📈 กราฟระดับเสียงวรรณยุกต์จีน (Mandarin Tone Pitch 55/35/214/51)</div>
            <div class="tone-legend">
              <span class="tone-leg t1">เสียง 1 (55)</span>
              <span class="tone-leg t2">เสียง 2 (35)</span>
              <span class="tone-leg t3">เสียง 3 (214)</span>
              <span class="tone-leg t4">เสียง 4 (51)</span>
            </div>
          </div>
          <div class="pitch-canvas-wrapper">
            <canvas id="tone-pitch-canvas" width="340" height="150"></canvas>
          </div>
          <div class="tone-quick-selector">
            <button class="tone-btn t1 ${displayTone === 1 ? 'active' : ''}" onclick="window.App.inspectTone(1)">เสียง 1 (High 55)</button>
            <button class="tone-btn t2 ${displayTone === 2 ? 'active' : ''}" onclick="window.App.inspectTone(2)">เสียง 2 (Rising 35)</button>
            <button class="tone-btn t3 ${displayTone === 3 ? 'active' : ''}" onclick="window.App.inspectTone(3)">เสียง 3 (Dipping 214)</button>
            <button class="tone-btn t4 ${displayTone === 4 ? 'active' : ''}" onclick="window.App.inspectTone(4)">เสียง 4 (Falling 51)</button>
            ${displayTone === 5 ? `<button class="tone-btn t5 active" onclick="window.App.inspectTone(5)">เสียงเบา (Neutral 31)</button>` : ''}
          </div>
        </div>
      `;

      setTimeout(() => {
        const canvas = document.getElementById("tone-pitch-canvas");
        if (canvas && window.AudioEngine) {
          window.AudioEngine.drawTonePitchCurve(canvas, displayTone);
        }
      }, 100);
      return;
    }

    const activeTone = charData.primaryTone || 1;
    const pinyinItems = charData.pinyinList || [
      { pinyin: charData.primaryPinyin, tone: activeTone, toneDescription: "เสียงหลัก", meaningThai: charData.thaiMeaningShort }
    ];

    container.innerHTML = `
      <div class="pronounce-hero">
        <div class="pronounce-char">${charData.char}</div>
        <div class="pronounce-pinyin-large">${charData.primaryPinyin}</div>
        <div class="pronounce-meaning-sub">${charData.thaiMeaningShort}</div>

        <!-- Audio Speed Control & Play Buttons -->
        <div class="pronounce-play-controls">
          <button class="btn-play-voice primary" onclick="window.AudioEngine.speak('${charData.char}', 0.9)">
            🔊 ฟังเสียงปกติ (1.0x)
          </button>
          <button class="btn-play-voice secondary" onclick="window.AudioEngine.speak('${charData.char}', 0.65)">
            🐢 ฟังเสียงช้า (0.7x)
          </button>
        </div>
      </div>

      <!-- Polyphone Multi-tone Section (多音字) -->
      ${pinyinItems.length > 1 ? `
        <div class="polyphone-alert-card">
          <div class="polyphone-badge">💡 คำหลายเสียง (多音字 - Duōyīnzì)</div>
          <p class="polyphone-intro">
            ตัวอักษร <strong>${charData.char}</strong> สามารถออกเสียงได้มากกว่าหนึ่งวรรณยุกต์ โดยความหมายและหน้าที่ทางไวยากรณ์จะเปลี่ยนตามเสียง:
          </p>
          <div class="polyphone-options-grid">
            ${pinyinItems.map((pi, idx) => `
              <div class="polyphone-card ${idx === 0 ? 'highlight-tone3' : 'highlight-tone4'}" onclick="window.AudioEngine.speak('${charData.char} ${pi.pinyin}')">
                <div class="poly-top">
                  <span class="poly-pinyin tone-${pi.tone}">${pi.pinyin}</span>
                  <span class="poly-ipa">${pi.ipa || ''}</span>
                  <span class="poly-play-icon">🔊</span>
                </div>
                <div class="poly-desc">${pi.toneDescription}</div>
                <div class="poly-meaning"><strong>ความหมาย:</strong> ${pi.meaningThai}</div>
                <div class="poly-usage"><strong>ตัวอย่าง:</strong> ${pi.usageContext}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Tone Pitch Curve Visualizer Canvas -->
      <div class="tone-curve-card">
        <div class="tone-card-header">
          <div class="tone-card-title">📈 กราฟระดับเสียงวรรณยุกต์จีน (Mandarin Tone Pitch 55/35/214/51)</div>
          <div class="tone-legend">
            <span class="tone-leg t1">เสียง 1 (55)</span>
            <span class="tone-leg t2">เสียง 2 (35)</span>
            <span class="tone-leg t3">เสียง 3 (214)</span>
            <span class="tone-leg t4">เสียง 4 (51)</span>
          </div>
        </div>
        <div class="pitch-canvas-wrapper">
          <canvas id="tone-pitch-canvas" width="340" height="150"></canvas>
        </div>
        <div class="tone-quick-selector">
          <button class="tone-btn t1 ${activeTone === 1 ? 'active' : ''}" onclick="window.App.inspectTone(1)">เสียง 1 (High 55)</button>
          <button class="tone-btn t2 ${activeTone === 2 ? 'active' : ''}" onclick="window.App.inspectTone(2)">เสียง 2 (Rising 35)</button>
          <button class="tone-btn t3 ${activeTone === 3 ? 'active' : ''}" onclick="window.App.inspectTone(3)">เสียง 3 (Dipping 214)</button>
          <button class="tone-btn t4 ${activeTone === 4 ? 'active' : ''}" onclick="window.App.inspectTone(4)">เสียง 4 (Falling 51)</button>
          ${activeTone === 5 ? `<button class="tone-btn t5 active" onclick="window.App.inspectTone(5)">เสียงเบา (Neutral 31)</button>` : ''}
        </div>
      </div>

      <!-- Phonetic & Mouth Shape Breakdown -->
      <div class="phonetic-breakdown-card">
        <div class="box-title">
          <span class="icon">👄</span>
          <span>สรีระการออกเสียง (Phonetic Breakdown)</span>
        </div>
        <div class="phonetic-row">
          <div class="ph-col">
            <span class="ph-label">พยัญชนะต้น (Initial):</span>
            <span class="ph-val">${charData.pronunciationGuide ? charData.pronunciationGuide.initial : '-'}</span>
          </div>
          <div class="ph-col">
            <span class="ph-label">สระ (Final):</span>
            <span class="ph-val">${charData.pronunciationGuide ? charData.pronunciationGuide.final : '-'}</span>
          </div>
          <div class="ph-col">
            <span class="ph-label">กฎการผันเสียง:</span>
            <span class="ph-val">${charData.pronunciationGuide ? charData.pronunciationGuide.toneRule : '-'}</span>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const canvas = document.getElementById("tone-pitch-canvas");
      if (canvas && window.AudioEngine) {
        window.AudioEngine.drawTonePitchCurve(canvas, activeTone);
      }
    }, 100);
  }

  inspectTone(toneNum) {
    const canvas = document.getElementById("tone-pitch-canvas");
    if (canvas && window.AudioEngine) {
      window.AudioEngine.drawTonePitchCurve(canvas, toneNum);
      window.AudioEngine.playToneChime(250 + toneNum * 70, 'sine', 0.2);
    }
    document.querySelectorAll(".tone-quick-selector .tone-btn").forEach((b) => {
      b.classList.toggle("active", b.classList.contains(`t${toneNum}`));
    });
  }

  /**
   * Render Tab 6: 214 Radicals Catalog with Search & Stroke Filters
   */
  renderRadicalsLibrary() {
    const container = document.getElementById("radicals-library-content");
    if (!container) return;

    const catalog = window.RADICALS_CATALOG || [];
    const strokeOptions = ["ทั้งหมด", "1-2 ขีด", "3-4 ขีด", "5-6 ขีด", "7-8 ขีด", "9+ ขีด"];

    // Filter by search keyword and stroke count
    let filtered = catalog.filter(r => {
      // 1. Keyword search filter (pinyin normalized so "nu" also matches "nǚ")
      if (this.radicalSearchKeyword) {
        const kw = this.radicalSearchKeyword.toLowerCase();
        const kwNorm = window.DB ? window.DB.normalizePinyin(kw) : kw;
        const pinyinNorm = window.DB ? window.DB.normalizePinyin(r.pinyin) : r.pinyin.toLowerCase();
        const match = r.char.includes(kw) ||
                      r.pinyin.toLowerCase().includes(kw) ||
                      pinyinNorm.includes(kwNorm) ||
                      r.thai.toLowerCase().includes(kw) ||
                      String(r.num) === kw;
        if (!match) return false;
      }

      // 2. Stroke count filter
      if (this.currentStrokeFilter === "1-2 ขีด") return r.strokes <= 2;
      if (this.currentStrokeFilter === "3-4 ขีด") return r.strokes >= 3 && r.strokes <= 4;
      if (this.currentStrokeFilter === "5-6 ขีด") return r.strokes >= 5 && r.strokes <= 6;
      if (this.currentStrokeFilter === "7-8 ขีด") return r.strokes >= 7 && r.strokes <= 8;
      if (this.currentStrokeFilter === "9+ ขีด") return r.strokes >= 9;

      return true;
    });

    container.innerHTML = `
      <div class="radicals-lib-header">
        <h3>คลังรากศัพท์ภาษาจีนครบชุด (214 康熙部首)</h3>
        <p>แสดงทั้งหมด <strong>${filtered.length}</strong> / ${catalog.length} รากศัพท์ (แตะรากศัพท์เพื่อเปิดผัง Mindmap)</p>
      </div>

      <!-- In-library Search Bar -->
      <div class="rad-search-bar" style="margin: 8px 0;">
        <input type="text" id="rad-lib-search-input" 
               placeholder="🔍 ค้นหารากศัพท์ เช่น 女, nǚ, ผู้หญิง, #38..." 
               value="${escapeHtml(this.radicalSearchKeyword)}"
               style="width: 100%; padding: 8px 14px; border-radius: 999px; border: 1px solid var(--ink-border); background: var(--bg-surface); font-size: 12px; outline: none;">
      </div>

      <!-- Stroke Count Filter Pills -->
      <div class="rad-cat-filter-bar" style="display: flex; gap: 6px; overflow-x: auto; padding: 4px 0 10px; scrollbar-width: none;">
        ${strokeOptions.map(st => `
          <button class="rad-cat-btn ${this.currentStrokeFilter === st ? 'active' : ''}" 
                  style="padding: 5px 10px; border-radius: 999px; border: 1px solid var(--ink-border); background: ${this.currentStrokeFilter === st ? 'var(--c-vermilion)' : 'var(--bg-surface)'}; color: ${this.currentStrokeFilter === st ? '#fff' : 'var(--ink-secondary)'}; font-size: 10.5px; font-weight: 600; cursor: pointer; white-space: nowrap;"
                  onclick="window.App.filterRadicalStrokes('${st}')">
            ${st}
          </button>
        `).join('')}
      </div>

      <!-- Compact 214 Cards Grid -->
      <div class="radicals-cards-grid">
        ${filtered.map(rad => {
          const isLocked = window.PremiumGate && !window.PremiumGate.canAccessRadical(rad.char);
          const fullRad = window.RADICALS_DATA ? window.RADICALS_DATA[rad.char] : null;
          const progress = window.DB && fullRad ? window.DB.getRadicalMasteryProgress(fullRad.characterIds || []) : { mastered: 0, total: 0 };
          const pct = progress.total > 0 ? Math.round((progress.mastered / progress.total) * 100) : 0;
          return `
            <div class="rad-lib-card ${isLocked ? 'locked' : ''}" onclick="window.App.openRadicalFromLibrary('${rad.char}')">
              ${isLocked ? '<span class="lock-badge">🔒</span>' : ''}
              <div class="rad-lib-top">
                <div class="rad-lib-hanzi">${rad.char}</div>
                <div class="rad-lib-meta">
                  <span class="rad-lib-pinyin">#${rad.num} · ${rad.pinyin}</span>
                  <span class="rad-lib-cat">${rad.strokes} ขีด · ${rad.cat.split('และ')[0]}</span>
                </div>
              </div>
              <div class="rad-lib-thai">${rad.thai}</div>
              ${progress.total > 0 ? `
                <div class="rad-lib-progress-row">
                  <div class="mastery-progress-bar"><div class="mastery-progress-fill" style="width: ${pct}%"></div></div>
                  <span class="rad-lib-progress-label">${progress.mastered}/${progress.total}</span>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Bind real-time input listener for catalog search
    const radSearchInput = document.getElementById("rad-lib-search-input");
    if (radSearchInput) {
      radSearchInput.addEventListener("input", (e) => {
        this.radicalSearchKeyword = e.target.value.trim();
        this.renderRadicalsLibrary();
        // keep focus
        const nextInput = document.getElementById("rad-lib-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
        }
      });
    }
  }

  filterRadicalStrokes(strokeCategory) {
    this.currentStrokeFilter = strokeCategory;
    this.renderRadicalsLibrary();
  }

  showCharacterDetail(charId) {
    if (charId) {
      const ok = this.selectCharacter(charId, true);
      if (ok === false) return; // paywall shown — don't navigate on top of it
    }
    this.switchTab("etymology");
  }

  // ==========================================
  // Settings & Difficulty Management
  // ==========================================
  openSettingsModal() {
    const modal = document.getElementById("settings-modal");
    if (modal) modal.classList.add("active");
    this.syncSettingsUI();
  }

  closeSettingsModal() {
    const modal = document.getElementById("settings-modal");
    if (modal) modal.classList.remove("active");
  }

  getSettings() {
    try {
      const saved = localStorage.getItem("jumjeen_user_settings");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      hskLevel: "all",
      showSandhi: true,
      autoSpeak: true,
      speechRate: 0.9,
      showTraditional: true,
      showSixWritings: true,
      theme: "light"
    };
  }

  saveSettings(settings) {
    try {
      localStorage.setItem("jumjeen_user_settings", JSON.stringify(settings));
    } catch (e) {}
  }

  setDifficulty(hskLevel) {
    const settings = this.getSettings();
    settings.hskLevel = hskLevel;
    this.saveSettings(settings);

    if (this.mindmap) {
      this.mindmap.setHskFilter(hskLevel);
    }

    document.querySelectorAll(".diff-option-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.hsk === hskLevel);
    });

    this.renderCharacterViews();
  }

  updateSetting(key, val) {
    const settings = this.getSettings();
    settings[key] = val;
    this.saveSettings(settings);
    this.renderCharacterViews();
  }

  updateSpeechRate(rate) {
    const r = parseFloat(rate);
    if (window.AudioEngine) window.AudioEngine.currentRate = r;
    this.updateSetting('speechRate', r);
  }

  setTheme(theme) {
    const settings = this.getSettings();
    settings.theme = theme;
    this.saveSettings(settings);

    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    document.querySelectorAll(".theme-option-card").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });
  }

  syncSettingsUI() {
    const settings = this.getSettings();

    document.querySelectorAll(".diff-option-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.hsk === settings.hskLevel);
    });

    const sandhiToggle = document.getElementById("setting-toggle-sandhi");
    if (sandhiToggle) sandhiToggle.checked = settings.showSandhi !== false;

    const autoSpeakToggle = document.getElementById("setting-toggle-autospeak");
    if (autoSpeakToggle) autoSpeakToggle.checked = settings.autoSpeak !== false;

    const tradToggle = document.getElementById("setting-toggle-trad");
    if (tradToggle) tradToggle.checked = settings.showTraditional !== false;

    const sixToggle = document.getElementById("setting-toggle-sixwritings");
    if (sixToggle) sixToggle.checked = settings.showSixWritings !== false;

    const rateSlider = document.getElementById("setting-speech-rate");
    if (rateSlider) {
      rateSlider.value = settings.speechRate || 0.9;
      const lbl = document.getElementById("lbl-speech-rate");
      if (lbl) lbl.textContent = `${rateSlider.value}x`;
    }

    document.querySelectorAll(".theme-option-card").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === settings.theme);
    });
  }

  setupSearch() {
    const searchInput = document.getElementById("app-search-input");
    const resultsBox = document.getElementById("search-results-dropdown");
    if (!searchInput || !resultsBox) return;

    searchInput.addEventListener("input", async (e) => {
      const q = e.target.value.trim();
      if (!q) {
        resultsBox.classList.remove("show");
        resultsBox.innerHTML = "";
        return;
      }

      // Query local database engine
      const matches = window.DB ? await window.DB.search(q) : [];

      // Also search in 214 Radicals Catalog (pinyin normalized so "nu" also matches "nǚ")
      if (matches.length < 6 && window.RADICALS_CATALOG) {
        const qNorm = window.DB ? window.DB.normalizePinyin(q) : q.toLowerCase();
        const radMatches = window.RADICALS_CATALOG.filter(r =>
          r.char.includes(q) ||
          r.pinyin.toLowerCase().includes(q.toLowerCase()) ||
          (window.DB ? window.DB.normalizePinyin(r.pinyin).includes(qNorm) : false) ||
          r.thai.toLowerCase().includes(q.toLowerCase())
        );
        for (const rm of radMatches) {
          if (!matches.some(m => m.char === rm.char)) {
            matches.push({
              char: rm.char,
              primaryPinyin: rm.pinyin,
              thaiMeaningShort: `รากศัพท์: ${rm.thai}`,
              radical: rm.char
            });
          }
        }
      }

      if (matches.length === 0) {
        resultsBox.innerHTML = `<div class="no-result">ไม่พบคำศัพท์ '${escapeHtml(q)}' ในฐานข้อมูล</div>`;
      } else {
        resultsBox.innerHTML = matches.map(c => `
          <div class="search-result-item" onclick="window.App.selectRadical('${c.radical || c.char}'); window.App.showCharacterDetail('${c.char}'); document.getElementById('search-results-dropdown').classList.remove('show');">
            <span class="res-char">${c.char}</span>
            <span class="res-pinyin">${c.primaryPinyin || ''}</span>
            <span class="res-thai">${c.thaiMeaningShort || ''}</span>
            <span class="res-rad">ราก: ${c.radical || c.char}</span>
          </div>
        `).join('');
      }

      resultsBox.classList.add("show");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".app-search-bar")) {
        resultsBox.classList.remove("show");
      }
    });
  }
}

// Global bootstrap
window.HanziMindApp = HanziMindApp;
window.addEventListener("DOMContentLoaded", () => {
  window.App = new HanziMindApp();
});
