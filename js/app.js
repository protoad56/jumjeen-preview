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
    this.mindmap = new RadicalMindmap("mindmap-container", {
      onSelectCharacter: (charId) => this.selectCharacter(charId, false),
      onSelectRadical: (radId) => this.selectRadical(radId, false)
    });

    this.strokeAnimator = new StrokeAnimator("stroke-canvas");
    this.fusionGame = new RadicalFusionGame("fusion-container");
    window.FusionGame = this.fusionGame;
    this.srsEngine = window.SRSEngine;

    // 3. Bind DOM Events
    this.bindUIEvents();

    // 4. Render initial views
    this.renderRadicalPills();
    this.renderCharacterViews();
    this.setupSearch();

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

    // Theme toggle
    const themeBtn = document.getElementById("btn-theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        themeBtn.innerHTML = isDark ? "☀️" : "🌙";
      });
    }

    // Simplified / Traditional radical-label toggle
    const scriptBtn = document.getElementById("btn-script-toggle");
    if (scriptBtn) {
      scriptBtn.addEventListener("click", () => {
        const mode = window.ScriptMode.toggle();
        scriptBtn.textContent = mode === "traditional" ? "繁" : "简";
        scriptBtn.title = mode === "traditional" ? "กำลังโชว์ตัวเต็ม (แตะเพื่อสลับเป็นตัวย่อ)" : "กำลังโชว์ตัวย่อ (แตะเพื่อสลับเป็นตัวเต็ม)";
        this.renderRadicalPills();
        if (this.activeTab === "radicals") this.renderRadicalsLibrary();
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
        <span>📚 ดูครบ 214 ราก</span>
      </button>
    ` + shortcuts.map(simpKey => {
      const radKey = window.ScriptMode ? window.ScriptMode.pillTarget(simpKey) : simpKey;
      const rad = this.mindmap.getRadicalData(radKey);
      const isSelected = (radKey === this.currentRadical);
      const isLocked = window.PremiumGate && !window.PremiumGate.canAccessRadical(radKey);
      return `
        <button class="radical-pill ${isSelected ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="window.App.selectRadical('${radKey}')">
          <span class="rad-char">${rad.id}</span>
          <span class="rad-name">${rad.pinyin || ''}</span>
          ${isLocked ? '<span class="lock-badge">🔒</span>' : ''}
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
   * Render Tab 2: Etymology & Mnemonic Storytelling
   * Content is split across 4 short panes (hero+stroke / components / story / vocab)
   * instead of one long scrolling card.
   */
  renderEtymologyDetail() {
    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[this.currentChar] : null;
    const heroTarget = document.getElementById("etymology-hero-card");
    const componentsTarget = document.getElementById("etymology-components-card");
    const storyTarget = document.getElementById("etymology-story-card");
    const vocabTarget = document.getElementById("etymology-vocab-card");
    if (!heroTarget) return;

    // Keep the active sub-tab pane in sync (e.g. after switching character)
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

    heroTarget.innerHTML = `
      <div class="char-hero-header">
        <div class="char-main-box">
          <div class="char-large-hanzi">${charData.char}</div>
          <div class="char-meta-row">
            <span class="pinyin-tag">${charData.primaryPinyin}</span>
            <span class="hsk-badge">HSK ${charData.hskLevel}</span>
            <span class="structure-badge">${charData.structure}</span>
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

    if (componentsTarget) {
      componentsTarget.innerHTML = `
        <!-- Component Breakdown Formula Box -->
        <div class="etymology-box component-fusion-box">
          <div class="box-title">
            <span class="icon">🧩</span>
            <span>โครงสร้างรากศัพท์ & การประกอบตัวอักษร</span>
          </div>
          <div class="components-formula-flow">
            ${(charData.components || []).map(c => `
              <div class="component-card">
                <div class="c-char">${c.char}</div>
                <div class="c-pinyin">${c.pinyin}</div>
                <div class="c-role">${c.role}</div>
                <div class="c-meaning">${c.meaning}</div>
                <div class="c-desc">${c.desc}</div>
              </div>
            `).join('<div class="formula-plus">➕</div>')}
            <div class="formula-equals">➔</div>
            <div class="component-card result-card">
              <div class="c-char">${charData.char}</div>
              <div class="c-pinyin">${charData.primaryPinyin}</div>
              <div class="c-role">ตัวอักษรที่สมบูรณ์</div>
              <div class="c-meaning">${charData.thaiMeaningShort}</div>
            </div>
          </div>
        </div>
      `;
    }

    if (storyTarget) {
      storyTarget.innerHTML = `
        <!-- Ancient Etymology & Story -->
        <div class="etymology-box origin-story-box">
          <div class="box-title">
            <span class="icon">📜</span>
            <span>ความเป็นมาดั้งเดิม & ภาพอักษรโบราณ (甲骨文 / 金文)</span>
          </div>
          <div class="oracle-script-quote">
            <strong>${charData.ancientEtymology ? charData.ancientEtymology.oracleScript : ''}</strong>
          </div>
          <p class="origin-story-text">
            ${charData.ancientEtymology ? charData.ancientEtymology.originStory : ''}
          </p>
          <div class="modern-evolution-note">
            <strong>วิวัฒนาการสู่ปัจจุบัน:</strong> ${charData.ancientEtymology ? charData.ancientEtymology.modernEvolution : ''}
          </div>
        </div>

        <!-- Mnemonic Hook / Memory Trick -->
        <div class="etymology-box mnemonic-hook-box">
          <div class="box-title">
            <span class="icon">💡</span>
            <span>สูตรจำภาพในสมอง (Mnemonic Memory Hook)</span>
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
        <!-- Compound Vocabulary List -->
        <div class="etymology-box compounds-box">
          <div class="box-title">
            <span class="icon">🌿</span>
            <span>คำศัพท์ที่แตกกิ่งก้านจากคำนี้ (Compound Words)</span>
          </div>
          <div class="compounds-grid">
            ${(charData.compounds || []).map(comp => `
              <div class="compound-item" onclick="window.AudioEngine.speak('${(comp.audioText || comp.word).replace(/'/g, "\\'")}')">
                <div class="comp-header">
                  <span class="comp-word">${comp.word}</span>
                  <span class="comp-pinyin">${comp.pinyin}</span>
                  <span class="comp-hsk">HSK ${comp.hsk}</span>
                </div>
                <div class="comp-thai">${comp.thai}</div>
                <div class="comp-audio-btn">🔊 ฟังเสียง</div>
              </div>
            `).join('')}
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
      const displayTone = lexicon ? lexicon.tone : 1;

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
      `;
      return;
    }

    const pinyinItems = charData.pinyinList || [
      { pinyin: charData.primaryPinyin, tone: charData.primaryTone, toneDescription: "เสียงหลัก", meaningThai: charData.thaiMeaningShort }
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
          <button class="tone-btn t1" onclick="window.App.inspectTone(1)">เสียง 1 (High 55)</button>
          <button class="tone-btn t2" onclick="window.App.inspectTone(2)">เสียง 2 (Rising 35)</button>
          <button class="tone-btn t3 active" onclick="window.App.inspectTone(3)">เสียง 3 (Dipping 214)</button>
          <button class="tone-btn t4" onclick="window.App.inspectTone(4)">เสียง 4 (Falling 51)</button>
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
        window.AudioEngine.drawTonePitchCurve(canvas, charData.primaryTone || 3);
      }
    }, 100);
  }

  inspectTone(toneNum) {
    const canvas = document.getElementById("tone-pitch-canvas");
    if (canvas && window.AudioEngine) {
      window.AudioEngine.drawTonePitchCurve(canvas, toneNum);
      window.AudioEngine.playToneChime(250 + toneNum * 70, 'sine', 0.2);
    }
    document.querySelectorAll(".tone-quick-selector .tone-btn").forEach((b, idx) => {
      b.classList.toggle("active", (idx + 1) === toneNum);
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
        const displayChar = window.ScriptMode ? window.ScriptMode.displayChar(r.char) : r.char;
        const match = r.char.includes(kw) ||
                      displayChar.includes(kw) ||
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
        <p>แสดงทั้งหมด <strong>${filtered.length}</strong> / 214 รากศัพท์ (แตะรากศัพท์เพื่อเปิดผัง Mindmap)</p>
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
          const navTarget = window.ScriptMode ? window.ScriptMode.navigationTarget(rad.char) : rad.char;
          const displayChar = window.ScriptMode ? window.ScriptMode.displayChar(rad.char) : rad.char;
          const isLocked = window.PremiumGate && !window.PremiumGate.canAccessRadical(navTarget);
          return `
            <div class="rad-lib-card ${isLocked ? 'locked' : ''}" onclick="window.App.openRadicalFromLibrary('${navTarget}')">
              ${isLocked ? '<span class="lock-badge">🔒</span>' : ''}
              <div class="rad-lib-top">
                <div class="rad-lib-hanzi">${displayChar}</div>
                <div class="rad-lib-meta">
                  <span class="rad-lib-pinyin">#${rad.num} · ${rad.pinyin}</span>
                  <span class="rad-lib-cat">${rad.strokes} ขีด · ${rad.cat.split('และ')[0]}</span>
                </div>
              </div>
              <div class="rad-lib-thai">${rad.thai}</div>
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

  openCharacterSheet(charId) {
    this.showCharacterDetail(charId);
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
window.addEventListener("DOMContentLoaded", () => {
  window.App = new HanziMindApp();
});
