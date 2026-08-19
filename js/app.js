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
    // When a compound-leaf on the mindmap (e.g. 你好) is tapped, this holds
    // that word so the mastery button / bar can act on the compound itself
    // instead of silently falling back to the base character. Cleared
    // whenever a new base character is selected.
    this.currentQuickWord = null;
    this.activeTab = "mindmap";
    this.mindmap = null;
    this.strokeAnimator = null;
    this.fusionGame = null;
    this.srsEngine = null;
    this.currentRadicalCategoryFilter = "ทั้งหมด";
    this.currentRadicalRankFilter = "ทั้งหมด";
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
    if (settings.hanziFont === "sans") {
      document.body.classList.add("font-sans");
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
        if (!isFull) this.closeSplitView();

        // Re-render once the frame's own resize actually finishes, not at
        // a fixed delay — a magic-number setTimeout either fires too early
        // (canvas pops mid-resize, before the frame has reached its new
        // width) or leaves a stale layout on screen after it's settled.
        // transitionend is the real signal; the setTimeout below is only a
        // safety net for when the transition is skipped (prefers-reduced-
        // motion, or a dropped frame here or there).
        let rerendered = false;
        const rerender = () => {
          if (rerendered) return;
          rerendered = true;
          appWrapper.removeEventListener("transitionend", onTransitionEnd);
          this.mindmap.render();
        };
        const onTransitionEnd = (e) => {
          if (e.target === appWrapper && e.propertyName === "max-width") rerender();
        };
        appWrapper.addEventListener("transitionend", onTransitionEnd);
        setTimeout(rerender, 450);
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

    // A real tab switch always collapses the split story panel (if open) —
    // it's a two-column layout for exactly mindmap+etymology, so leaving it
    // on while navigating elsewhere would try to squeeze a third section
    // into that same row.
    this.closeSplitView();

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
      this.loadStrokeStudioFor(this.currentQuickWord || this.currentChar);
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

  /** Memory-aid emoji for one of the 214 Kangxi radicals — looked up from
   *  RADICALS_CATALOG (js/data/radicals_catalog.js), which is the only
   *  place this is curated. Returns '' for anything that isn't one of the
   *  214 (e.g. an ordinary character component that happens not to be a
   *  radical itself), so callers can just no-op on empty string. */
  getRadicalEmoji(char) {
    if (!char || !window.RADICALS_CATALOG) return "";
    const entry = window.RADICALS_CATALOG.find(r => r.char === char);
    return entry ? entry.emoji || "" : "";
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
    this.currentQuickWord = null;
    if (charData && charData.radical) {
      this.currentRadical = charData.radical;
      this.renderRadicalPills();
    }

    if (updateMindmap) {
      // If this character belongs to a different radical than whatever ring
      // the mindmap is currently showing, switch rings first — otherwise
      // selectCharacter() below just sets an ID that isn't even a node on
      // the visible ring, which looks exactly like "nothing happened" when
      // jumping here from search results or a compound-word breakdown.
      if (charData && charData.radical && this.mindmap.currentRadical !== charData.radical) {
        this.mindmap.setRadical(charData.radical);
      }
      this.mindmap.selectCharacter(charId);
    }
    this.renderCharacterViews();
    return true;
  }

  /** Expands a radical's branch characters into every trackable SRS unit —
   *  each character plus every compound word attached to it (你好, 好看, ...)
   *  — so mastery progress reflects real vocabulary learned, not just bare
   *  characters. Compound words are shared across characters (你好 appears
   *  under both 你 and 好), so dedupe with a Set before counting. */
  buildTrackableIdsForRadical(characterIds) {
    const ids = new Set();
    for (const charId of characterIds) {
      ids.add(charId);
      const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[charId] : null;
      if (charData && charData.compounds) {
        for (const comp of charData.compounds) ids.add(comp.word);
      }
    }
    return Array.from(ids);
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
      const trackableIds = this.buildTrackableIdsForRadical(rad.characterIds || []);
      const progress = window.DB ? window.DB.getRadicalMasteryProgress(trackableIds) : { mastered: 0, total: 0 };
      const pct = progress.total > 0 ? Math.round((progress.mastered / progress.total) * 100) : 0;
      return `
        <button class="radical-pill ${isSelected ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="window.App.selectRadical('${radKey}')" title="จำได้แล้ว ${progress.mastered}/${progress.total} คำ">
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
    this.loadStrokeStudioFor(this.currentChar);
  }

  /** Populates the stroke-order canvas for either a single character or a
   *  compound word. For a compound (2+ characters), also renders a small
   *  chip row so every character's stroke order is reachable — the
   *  HanziWriter canvas below can only ever animate one character at a
   *  time, so a 2-3 character word needs a way to switch between them
   *  instead of silently only ever showing the first one. */
  loadStrokeStudioFor(item) {
    const picker = document.getElementById("stroke-char-picker");
    const chars = item ? Array.from(item) : [];

    if (!picker || chars.length <= 1) {
      if (picker) picker.innerHTML = "";
      this.strokeAnimator.loadCharacter(item);
      return;
    }

    picker.innerHTML = chars.map((ch, i) => `
      <button class="stroke-char-chip ${i === 0 ? 'active' : ''}" onclick="window.App.pickStrokeChar(this, '${ch}')">${ch}</button>
    `).join('');
    this.strokeAnimator.loadCharacter(chars[0]);
  }

  pickStrokeChar(btn, char) {
    document.querySelectorAll(".stroke-char-chip").forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
    this.strokeAnimator.loadCharacter(char);
  }

  updateQuickInspectBar(customItem = null) {
    const hanziEl = document.getElementById("quick-inspect-hanzi");
    const pinyinEl = document.getElementById("quick-inspect-pinyin");
    const thaiEl = document.getElementById("quick-inspect-thai");
    if (!hanziEl) return;

    // Remember the compound word (if any) so the mastery button and story
    // button below can act on/react to what's actually being shown, not
    // silently fall back to the base character.
    this.currentQuickWord = customItem ? customItem.hanzi : null;

    if (customItem) {
      hanziEl.textContent = customItem.hanzi;
      pinyinEl.textContent = customItem.pinyin;
      thaiEl.textContent = customItem.thai;
    } else {
      const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[this.currentChar] : null;
      const lexicon = window.HANZI_LEXICON ? window.HANZI_LEXICON[this.currentChar] : null;

      hanziEl.textContent = this.currentChar;
      pinyinEl.textContent = charData ? charData.primaryPinyin : (lexicon ? lexicon.pinyin : this.currentRadical);
      thaiEl.textContent = charData ? charData.thaiMeaningShort : (lexicon ? lexicon.thai : "รากศัพท์ภาษาจีน");
    }

    this.refreshMasteryButton();
  }

  /** Shared handler for the story button and the tappable hanzi/pinyin area
   *  of the quick-inspect bar. Etymology tab itself branches on
   *  this.currentQuickWord to render a compound breakdown instead of a
   *  single character's page, so this can always navigate safely now.
   *  In fullscreen mode, open it as a docked split panel instead of a full
   *  navigation — see openStorySplitView(). */
  goToStoryPage() {
    const wrapper = document.getElementById("app-viewport-wrapper");
    if (wrapper && wrapper.classList.contains("full-screen-mode")) {
      this.openStorySplitView();
    } else {
      this.switchTab("etymology");
    }
  }

  /** Docks the etymology pane beside the mindmap (fullscreen mode only)
   *  instead of navigating away from it — this.activeTab deliberately
   *  stays "mindmap" so the bottom tab bar keeps showing mindmap as
   *  current. Unlike switchTab("etymology"), #section-etymology is made
   *  visible via the .split-view-active CSS rule in app.css rather than
   *  the .active class, so it can be visible at the same time as
   *  #section-mindmap. */
  openStorySplitView() {
    const wrapper = document.getElementById("app-viewport-wrapper");
    if (!wrapper) { this.switchTab("etymology"); return; }

    wrapper.classList.add("split-view-active");
    document.querySelectorAll(".etym-subtab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.etymTab === this.currentEtymTab);
    });
    document.querySelectorAll(".etym-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `etym-pane-${this.currentEtymTab}`);
    });
    this.renderEtymologyDetail();
    this.loadStrokeStudioFor(this.currentQuickWord || this.currentChar);

    const returnLabel = document.querySelector("#section-etymology .view-return-bar span:last-child");
    if (returnLabel) returnLabel.textContent = "ปิดแผงเรื่องราว";
    const returnArrow = document.querySelector("#section-etymology .return-arrow");
    if (returnArrow) returnArrow.textContent = "✕";

    // The mindmap's own container just halved in width (flex-basis: 50%) —
    // it needs to re-lay-out its nodes for the new size, not just redraw
    // at the old one. Timed to the CSS transition on #section-mindmap
    // above so the canvas settles right as the resize finishes instead of
    // popping mid-animation.
    setTimeout(() => this.mindmap.render(), 340);
  }

  /** Collapses the split story panel back to mindmap-only. Safe to call
   *  even when no split panel is open (switchTab() calls this
   *  unconditionally on every navigation). */
  closeSplitView() {
    const wrapper = document.getElementById("app-viewport-wrapper");
    if (!wrapper || !wrapper.classList.contains("split-view-active")) return;

    wrapper.classList.remove("split-view-active");
    const returnLabel = document.querySelector("#section-etymology .view-return-bar span:last-child");
    if (returnLabel) returnLabel.textContent = "กลับสู่ผังรากศัพท์";
    const returnArrow = document.querySelector("#section-etymology .return-arrow");
    if (returnArrow) returnArrow.textContent = "◀";

    setTimeout(() => this.mindmap.render(), 50);
  }

  /** The etymology pane's own "◀ กลับสู่ผังรากศัพท์" bar: closes the split
   *  panel if that's how we got here, otherwise falls back to a normal
   *  tab switch (non-fullscreen / non-split navigation). */
  backFromEtymology() {
    const wrapper = document.getElementById("app-viewport-wrapper");
    if (wrapper && wrapper.classList.contains("split-view-active")) {
      this.closeSplitView();
    } else {
      this.switchTab("mindmap");
    }
  }

  /** For a compound word (e.g. 你好), find its own {word, pinyin, thai, hsk}
   *  entry by scanning its component characters' .compounds lists — a
   *  compound word isn't independently keyed anywhere, but every compound
   *  is attached to at least one of its own component characters. */
  findCompoundData(word) {
    for (const ch of Array.from(word)) {
      const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[ch] : null;
      if (charData && charData.compounds) {
        const found = charData.compounds.find(c => c.word === word);
        if (found) return found;
      }
    }
    return null;
  }

  /** Jump from a compound-word breakdown straight to one of its component
   *  characters' own radical mindmap. */
  jumpToComponent(charId) {
    if (!window.CHARACTERS_DATA[charId] && !window.HANZI_LEXICON[charId]) return;
    const ok = this.selectCharacter(charId, true);
    if (ok) this.switchTab("mindmap");
  }

  /** Etymology view for a compound word (你好, 好看, ...) instead of a base
   *  character. There's no per-compound etymology data, but every one of
   *  its component characters has real data, so this reuses that instead
   *  of fabricating anything: components card shows each component (clickable
   *  through to its own mindmap), story card stitches together each
   *  component's real origin text, vocab card surfaces other compounds
   *  sharing a component as further reading. */
  renderCompoundBreakdown(word) {
    const heroTarget = document.getElementById("etymology-hero-card");
    const componentsTarget = document.getElementById("etymology-components-card");
    const storyTarget = document.getElementById("etymology-story-card");
    const vocabTarget = document.getElementById("etymology-vocab-card");
    if (!heroTarget) return;

    const compoundData = this.findCompoundData(word);
    const pinyin = compoundData ? compoundData.pinyin : "";
    const thai = compoundData ? compoundData.thai : "";

    const compChars = Array.from(word).map(ch => {
      const cd = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[ch] : null;
      const lex = window.HANZI_LEXICON ? window.HANZI_LEXICON[ch] : null;
      return {
        char: ch,
        pinyin: cd ? cd.primaryPinyin : (lex ? lex.pinyin : ""),
        thai: cd ? cd.thaiMeaningShort : (lex ? lex.thai : ""),
        radical: this.findRadicalForCharacter(ch),
        hasOwnPage: !!(cd || lex)
      };
    });

    heroTarget.innerHTML = `
      <div class="char-hero-header">
        <div class="char-main-box">
          <div class="char-large-hanzi" style="--char-count: ${Array.from(word).length}">${word}</div>
          <div class="char-meta-row">
            <span class="pinyin-tag">${pinyin}</span>
            <span class="hsk-badge">คำผสมจาก ${compChars.length} ตัวอักษร</span>
            <button class="audio-speak-btn" onclick="window.AudioEngine.speak('${compoundData ? compoundData.audioText || word : word}')">
              🔊 ฟังเสียง
            </button>
          </div>
        </div>
        <div class="char-meaning-summary">
          <div class="summary-label">ความหมาย</div>
          <div class="summary-val">${thai}</div>
        </div>
      </div>
    `;

    if (componentsTarget) {
      componentsTarget.innerHTML = `
        <div class="etymology-box component-fusion-box">
          <div class="box-title">
            <span class="icon">🧩</span>
            <span>ตัวอักษรที่ประกอบกันเป็นคำนี้ (แตะเพื่อดูรากศัพท์ของแต่ละตัว)</span>
          </div>
          <div class="components-formula-flow">
            ${compChars.map(c => `
              <div class="component-card ${c.hasOwnPage ? 'clickable-component' : ''}"
                   ${c.hasOwnPage ? `onclick="window.App.jumpToComponent('${c.char}')"` : ''}>
                <div class="comp-role-badge">${c.radical ? `ราก ${c.radical}` : 'อักษร'}</div>
                <div class="c-char">${c.char}</div>
                ${this.getRadicalEmoji(c.char) ? `<div class="c-emoji" title="ตัวช่วยจำ">${this.getRadicalEmoji(c.char)}</div>` : ''}
                <div class="c-pinyin">${c.pinyin}</div>
                <div class="c-meaning">${c.thai}</div>
              </div>
            `).join('<div class="formula-plus">➕</div>')}
            <div class="formula-equals">➔</div>
            <div class="component-card result-card">
              <div class="comp-role-badge">คำผสม</div>
              <div class="c-char">${word}</div>
              <div class="c-pinyin">${pinyin}</div>
              <div class="c-meaning">${thai}</div>
            </div>
          </div>
        </div>
      `;
    }

    if (storyTarget) {
      const storyCards = compChars
        .map(c => ({ c, cd: window.CHARACTERS_DATA ? window.CHARACTERS_DATA[c.char] : null }))
        .filter(({ cd }) => cd && cd.ancientEtymology)
        .map(({ c, cd }) => `
          <div class="etymology-box origin-story-box">
            <div class="box-title">
              <span class="icon">🏛️</span>
              <span>ที่มาของ ${c.char} (${c.pinyin})</span>
            </div>
            <div class="oracle-script-quote"><strong>${cd.ancientEtymology.oracleScript || ''}</strong></div>
            <p class="origin-story-text">${cd.ancientEtymology.originStory || ''}</p>
          </div>
        `);
      storyTarget.innerHTML = storyCards.length
        ? storyCards.join('')
        : `<div class="etym-empty-notice">✨ ยังไม่มีเรื่องราวดั้งเดิมสำหรับตัวอักษรในคำนี้</div>`;
    }

    if (vocabTarget) {
      const otherCompounds = new Map();
      for (const ch of Array.from(word)) {
        const cd = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[ch] : null;
        if (!cd || !cd.compounds) continue;
        for (const comp of cd.compounds) {
          if (comp.word !== word) otherCompounds.set(comp.word, comp);
        }
      }
      const list = Array.from(otherCompounds.values());
      vocabTarget.innerHTML = list.length ? `
        <div class="etymology-box compounds-box">
          <div class="box-title"><span class="icon">🌿</span><span>คำผสมอื่นที่ใช้ตัวอักษรร่วมกัน</span></div>
          <div class="compounds-grid">
            ${list.map(c => `
              <div class="compound-item" onclick="window.AudioEngine.speak('${(c.audioText || c.word).replace(/'/g, "\\'")}')">
                <div class="comp-header">
                  <span class="comp-word">${c.word}</span>
                  <span class="comp-pinyin">${c.pinyin}</span>
                  ${c.hsk ? `<span class="comp-hsk">HSK ${c.hsk}</span>` : ''}
                </div>
                <div class="comp-thai">${c.thai}</div>
                <div class="comp-audio-btn">🔊 ฟังเสียง</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : `<div class="etym-empty-notice">✨ ไม่มีคำผสมอื่นที่ใช้ตัวอักษรร่วมกัน</div>`;
    }
  }

  /** Mastery tracks whatever is currently shown in the quick-inspect bar —
   *  the compound word when one's being previewed, otherwise the base
   *  character. Split out so toggleCurrentMastery() can refresh just the
   *  button without re-deriving (and overwriting) the hanzi/pinyin/thai text. */
  refreshMasteryButton() {
    const trackedId = this.currentQuickWord || this.currentChar;
    const masteryBtn = document.getElementById("quick-mastery-btn");
    const masteryLabel = document.getElementById("quick-mastery-btn-label");
    if (!masteryBtn || !masteryLabel) return;
    const isMastered = window.DB && window.DB.isCharacterMastered(trackedId);
    const isManual = window.DB && window.DB.getMasterySource(trackedId) === "manual";
    masteryBtn.classList.toggle("mastered", isMastered);
    if (!isMastered) {
      masteryLabel.textContent = "☆ จำได้แล้ว";
    } else {
      // ★ = self-reported (tapped this button), ✓ = proven by clearing
      // SM-2 review cycles in the ทบทวน tab — never claim tested recall
      // this word hasn't actually earned.
      masteryLabel.textContent = isManual ? "★ จำได้แล้ว (บันทึกเอง)" : "✓ จำได้แล้ว (ผ่านทบทวน)";
    }
  }

  toggleCurrentMastery() {
    if (!window.DB) return;
    const trackedId = this.currentQuickWord || this.currentChar;
    if (!trackedId) return;
    const isMastered = window.DB.isCharacterMastered(trackedId);

    if (isMastered) {
      window.DB.saveSRSProgress(trackedId, {
        character_id: trackedId,
        repetition_count: 1,
        interval_days: 1,
        ease_factor: 2.5,
        mastery_level: "learning",
        next_review_time: Date.now()
      });
    } else {
      window.DB.saveSRSProgress(trackedId, {
        character_id: trackedId,
        repetition_count: 5,
        interval_days: 21,
        ease_factor: 2.5,
        mastery_level: "mastered",
        // Distinguishes a self-report ("I already know this") from mastery
        // earned by actually clearing SM-2 review cycles — the stats screen
        // and mindmap badge both need to be honest about which is which,
        // since only the latter is actually tested recall.
        mastery_source: "manual",
        last_reviewed_time: Date.now(),
        next_review_time: Date.now() + 21 * 24 * 60 * 60 * 1000
      });
    }

    this.refreshMasteryButton();
    this.mindmap.render();
    this.renderRadicalPills();
    if (this.activeTab === "radicals") this.renderRadicalsLibrary();
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
    // 1. Safety check
    if (!charData) {
      return {
        type: "未定 / 待考",
        categoryKey: "undetermined",
        label: "❓ 未定 / 待考 (ยังไม่ระบุ)",
        desc: "อยู่ระหว่างการศึกษาหลักฐานทางนิรุกติศาสตร์และอักษรโบราณ",
        badgeClass: "six-writings-undetermined",
        isPhonoSemantic: false
      };
    }

    // 2. Explicit metadata check
    if (charData.sixWritingsCategory) {
      const explicitMap = {
        "指事": { type: "指事", categoryKey: "ideograph", label: "💡 指事 (อักษรชี้สัญลักษณ์ / นามธรรม)", desc: "ใช้สัญลักษณ์ขีดแต้มชี้ตำแหน่งหรือสิ่งนามธรรม (เช่น '本' ขีดชี้ที่โคนต้นไม้ = รากฐาน, '上/下' ขีดบอกทิศทางบน-ล่าง)", badgeClass: "six-writings-ideograph", isPhonoSemantic: false },
        "象形": { type: "象形", categoryKey: "pictograph", label: "🖼️ 象形 (อักษรภาพ)", desc: "วาดจำลองจากรูปทรงของสิ่งของดั้งเดิมตามธรรมชาติ (เช่น พระอาทิตย์ 日, ดวงจันทร์ 月, ภูเขา 山)", badgeClass: "six-writings-pictograph", isPhonoSemantic: false },
        "会意": { type: "会意", categoryKey: "compound_ideograph", label: "🧩 会意 (ประสมความหมาย)", desc: "นำความหมายของชิ้นส่วน 2 ชิ้นขึ้นไปมารวมกันเกิดเป็นความหมายใหม่ (เช่น คน 休 พิงต้นไม้ = พักผ่อน, อาทิตย์+จันทร์ 明 = สว่าง)", badgeClass: "six-writings-compound", isPhonoSemantic: false },
        "形声": { type: "形声", categoryKey: "phono_semantic", label: "🗣️ 形声 (อักษรเสียง-ความหมาย)", desc: "อักษรจีนกว่า 80% ใช้วิธีนี้ โดยชิ้นส่วนหนึ่งบอกหมวดความหมาย (意符) และอีกชิ้นส่วนบอกเสียงอ่าน (声符)", badgeClass: "six-writings-phono-semantic", isPhonoSemantic: true },
        "假借": { type: "假借", categoryKey: "phonetic_loan", label: "🔄 假借 (อักษรยืมเสียง)", desc: "ยืมอักษรที่มีเสียงตรงกันมาใช้แทนความหมายใหม่ (เช่น ตัวเลข สรรพนาม และคำช่วยทางไวยากรณ์)", badgeClass: "six-writings-loan", isPhonoSemantic: false },
        "转注": { type: "转注", categoryKey: "derivative_cognate", label: "🔀 转注 (อักษรสื่อความหมายสัมพันธ์)", desc: "อักษรที่สร้างขึ้นเพื่อขยายหรือสื่อความหมายสัมพันธ์กัน", badgeClass: "six-writings-cognate", isPhonoSemantic: false },
        "未定 / 待考": { type: "未定 / 待考", categoryKey: "undetermined", label: "❓ 未定 / 待考 (ยังไม่ระบุ)", desc: "อยู่ระหว่างการศึกษาหลักฐานทางนิรุกติศาสตร์และอักษรโบราณ", badgeClass: "six-writings-undetermined", isPhonoSemantic: false }
      };
      if (explicitMap[charData.sixWritingsCategory]) return explicitMap[charData.sixWritingsCategory];
    }

    const components = charData.components || [];

    // 3. Strict Authoritative ZHISHI_SET (Indicator / Abstract Pointers)
    const ZHISHI_SET = new Set([
      "一", "二", "三", "上", "下", "中", "凸", "凹", "本", "末", "刃", "寸", "甘", "亦", "血", "丹", "凶", "尺", "丈"
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

    // 4. Authoritative XIANGXING_SET (Canonical Physical Pictographs Whitelist)
    const XIANGXING_SET = new Set([
      "日", "月", "山", "水", "木", "火", "土", "田", "石", "雨", "气", "泉", "川",
      "鸟", "鱼", "鹿", "羊", "牛", "犬", "豕", "鼠", "黾", "龟", "虎", "兔", "虫", "龙", "马",
      "角", "爪", "毛", "羽", "皮", "禾", "米", "竹", "瓜", "豆", "韭", "麻", "麦", "黍",
      "人", "大", "女", "子", "目", "耳", "口", "舌", "齿", "手", "又", "足", "止", "身", "自", "面", "首", "骨", "心", "肉", "尸", "儿", "欠",
      "门", "户", "舟", "车", "网", "衣", "巾", "皿", "鼎", "鬲", "缶", "瓦", "壶", "臼",
      "戈", "矛", "矢", "弓", "刀", "斤", "戊", "干", "鼓", "龠",
      "玉", "贝", "串", "井", "卜", "伞", "象", "匕", "几", "凵", "匚", "厂", "卩", "厶", "幺", "屮", "巛", "彡", "攴", "殳", "毋", "爻", "片", "牙", "玄", "疒", "癶", "聿", "襾", "釆", "髟", "鬯", "卤", "黹"
    ]);
    if (XIANGXING_SET.has(charData.char)) {
      return {
        type: "象形",
        categoryKey: "pictograph",
        label: "🖼️ 象形 (อักษรภาพ)",
        desc: "วาดจำลองจากรูปทรงของสิ่งของดั้งเดิมตามธรรมชาติ (เช่น พระอาทิตย์ 日, ดวงจันทร์ 月, ภูเขา 山)",
        badgeClass: "six-writings-pictograph",
        isPhonoSemantic: false
      };
    }

    // 5. Authoritative JIAJIE_SET (Phonetic Loans)
    const JIAJIE_SET = new Set([
      "万", "九", "七", "八", "四", "五", "六", "千", "不", "我", "其", "之", "也", "乃", "而", "莫", "然", "西", "北", "东", "南", "久", "予", "于", "已", "非", "无", "亡"
    ]);
    if (JIAJIE_SET.has(charData.char)) {
      return {
        type: "假借",
        categoryKey: "phonetic_loan",
        label: "🔄 假借 (อักษรยืมเสียง)",
        desc: "ยืมอักษรที่มีเสียงตรงกันมาใช้แทนความหมายใหม่ (เช่น ตัวเลข สรรพนาม และคำช่วยทางไวยากรณ์)",
        badgeClass: "six-writings-loan",
        isPhonoSemantic: false
      };
    }

    // 6. Authoritative HUIYI_SET (Compound Ideographs)
    const HUIYI_SET = new Set([
      "休", "明", "信", "男", "初", "友", "相", "取", "劣", "好", "妇", "妥", "委", "保", "集", "解",
      "卡", "尖", "兵", "戒", "算", "出", "看", "步", "从", "众", "林", "森", "品", "晶", "炎", "双",
      "立", "旦", "早", "家", "安", "武", "析", "伐", "采", "雀", "尘", "灾", "灭", "泪", "歪", "晃",
      "内", "公", "共", "同", "军", "击", "化", "医", "危", "原", "去", "备", "夏", "外", "多", "夜",
      "及", "买", "市", "京", "鸣", "苗"
    ]);
    if (HUIYI_SET.has(charData.char)) {
      return {
        type: "会意",
        categoryKey: "compound_ideograph",
        label: "🧩 会意 (ประสมความหมาย)",
        desc: "นำความหมายของชิ้นส่วน 2 ชิ้นขึ้นไปมารวมกันเกิดเป็นความหมายใหม่ (เช่น คน 休 พิงต้นไม้ = พักผ่อน, อาทิตย์+จันทร์ 明 = สว่าง)",
        badgeClass: "six-writings-compound",
        isPhonoSemantic: false
      };
    }

    // 7. Single-Structure Phono-Semantic Whitelist
    const PHONO_SINGLE_SET = new Set([
      "百", "区", "术", "贰", "牟", "卫", "开", "关", "发", "礼", "云", "头", "华", "产",
      "进", "运", "远", "边", "过", "达", "选", "还", "违", "普", "更", "成", "正", "民",
      "永", "甩", "习", "生", "用", "长", "老", "音", "页", "风", "飞", "食",
      "没", "觉", "住", "桌", "猫", "漂", "苹", "喂", "椅"
    ]);
    if (PHONO_SINGLE_SET.has(charData.char)) {
      const meaningComp = components.find(c => c.char !== charData.char) || { char: charData.radical || "", meaning: "หมวดความหมาย" };
      return {
        type: "形声",
        categoryKey: "phono_semantic",
        label: "🗣️ 形声 (อักษรเสียง-ความหมาย)",
        desc: "อักษรจีนกว่า 80% ใช้วิธีนี้ โดยชิ้นส่วนหนึ่งบอกหมวดความหมาย (意符) และอีกชิ้นส่วนบอกเสียงอ่าน (声符)",
        badgeClass: "six-writings-phono-semantic",
        isPhonoSemantic: true,
        soundComp: { char: charData.char, meaning: "ชิ้นส่วนเสียงในประวัติศาสตร์อักษร" },
        meaningComp: meaningComp
      };
    }

    // 8. Dynamic Phono-Semantic Check (role contains 声符 or found in PHONETIC_FAMILIES)
    const soundComp = components.find(c => c.role && (c.role.includes("声符") || c.role.includes("เสียง") || c.role.includes("Sound") || c.role.includes("Phonetic")));
    let famInfo = null;
    if (!soundComp && typeof window !== "undefined" && window.PHONETIC_FAMILIES) {
      for (const [key, fam] of Object.entries(window.PHONETIC_FAMILIES)) {
        if (fam.members && fam.members.some(m => m.char === charData.char)) {
          famInfo = { key, fam };
          break;
        }
      }
    }

    if (soundComp || famInfo) {
      const meaningComp = components.find(c => c !== soundComp && c.char !== charData.char) || components[0] || { char: charData.radical || "", meaning: "หมวดความหมาย" };
      return {
        type: "形声",
        categoryKey: "phono_semantic",
        label: "🗣️ 形声 (อักษรเสียง-ความหมาย)",
        desc: "อักษรจีนกว่า 80% ใช้วิธีนี้ โดยชิ้นส่วนหนึ่งบอกหมวดความหมาย (意符) และอีกชิ้นส่วนบอกเสียงอ่าน (声符)",
        badgeClass: "six-writings-phono-semantic",
        isPhonoSemantic: true,
        soundComp: soundComp || (famInfo ? { char: famInfo.key, meaning: "ตระกูลเสียง " + famInfo.key } : { char: "เสียง", pinyin: "", meaning: "ยืมเสียงอ่าน" }),
        meaningComp: meaningComp || { char: charData.radical || "", meaning: "หมวดความหมาย" }
      };
    }

    // 9. Components with Explicit Indicative Role
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

    // 10. Multi-Component Fallback -> 会意
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

    // 11. Single Character / Undetermined Fallback -> 未定 / 待考
    return {
      type: "未定 / 待考",
      categoryKey: "undetermined",
      label: "❓ 未定 / 待考 (ยังไม่ระบุ)",
      desc: "อยู่ระหว่างการศึกษาหลักฐานทางนิรุกติศาสตร์และอักษรโบราณ",
      badgeClass: "six-writings-undetermined",
      isPhonoSemantic: false
    };
  }

  /**
   * Disambiguate Meat Radical (肉月旁) vs Moon Radical (日月) vs Boat/Cowrie origins
   */
  getRadicalLinguisticMeta(charData) {
    if (!charData) return null;
    const char = charData.char;

    // Explicit whitelist of authentic meat/body-part characters (肉/⺼)
    const meatChars = new Set([
      "胖", "脸", "腿", "肚", "肝", "肠", "胃", "脖", "膀", "股", "胆", "臂",
      "胸", "脑", "脏", "肌", "肤", "育", "胎", "脂", "肪", "肋", "胳", "膊",
      "胶", "脆", "脱", "膨", "胀", "肿", "脚", "肥", "腐", "脉", "肢", "腰",
      "背", "肩", "肉", "腼", "胰", "脾", "肾", "腑", "腺", "腱", "胚", "脓",
      "胴", "脊", "腩", "腋", "胯", "腮", "腹", "膜", "脯", "腔", "膝", "肺",
      "胡", "肯", "膏", "肴", "肖", "胁", "胭", "胛", "脘", "胫", "脬", "腕",
      "腥", "腴", "膘", "膛", "膳", "膻", "臀", "臃", "臆"
    ]);

    // Check if character contains 月 / 肉 / ⺼ radical or component or is in meat list
    const hasMoonOrMeat = charData.radical === "月" ||
      charData.radical === "肉" ||
      charData.radical === "⺼" ||
      (charData.components && charData.components.some(c => c.char === "月" || c.char === "肉" || c.char === "⺼")) ||
      meatChars.has(char) ||
      ["月", "望", "阴", "朋", "服", "有", "能", "明", "期", "朝", "朗", "朔", "朦", "胧", "钥"].includes(char);

    if (!hasMoonOrMeat) return null;

    // 1. Meat Whitelist (肉月旁)
    if (meatChars.has(char)) {
      return {
        isMeat: true,
        badge: "🥩 肉月旁 (ròuyuèpáng)",
        desc: "รูปแปลงของ 'เนื้อ (肉)' สื่อถึงอวัยวะร่างกาย กล้ามเนื้อ หรือชิ้นเนื้อ"
      };
    }

    // 2. Cowrie currency string origin (贝串)
    if (char === "朋") {
      return {
        isMeat: false,
        badge: "🐚 贝串 (péng)",
        desc: "ร้อยเปลือกหอยเบี้ยโบราณ 2 พวงคู่กัน (สื่อถึงเพื่อน/มิตรสหาย ไม่ใช่เนื้อหรือพระจันทร์)"
      };
    }

    // 3. Boat derivative origin (舟部衍生)
    if (char === "服" || char === "朕" || char === "胜" || char === "俞") {
      return {
        isMeat: false,
        badge: "⛵ 舟部衍生 (fú)",
        desc: "วิวัฒนาการจากรูปเรือ (舟) และมือ (又) สื่อถึงการบังคับเรือ/ยอมจำนน/เครื่องนุ่งห่ม ไม่ใช่เนื้อ"
      };
    }

    // 4. Hand holding sacrificial meat (又+肉)
    if (char === "有") {
      return {
        isMeat: false,
        badge: "✋ 又+肉 (yǒu)",
        desc: "ภาพมือ (又) ถือชิ้นเนื้อเพื่อทำพิธีบวงสรวง สื่อถึงการมีอยู่/ครอบครอง"
      };
    }

    // 5. Bear pictograph derivative (熊形)
    if (char === "能") {
      return {
        isMeat: false,
        badge: "🐻 熊形 (néng)",
        desc: "ภาพหมีโบราณ สื่อถึงพละกำลังและความสามารถ"
      };
    }

    // 6. True Moon / Astronomy / Calendar / Default Moon
    return {
      isMeat: false,
      badge: "🌙 日月 (yuè)",
      desc: "พระจันทร์ แสงจันทร์ กาลเวลา และดวงดาว"
    };
  }

  /**
   * Render Tab 2: Etymology & Mnemonic Storytelling
   * Content is split across 4 short panes (hero+stroke / components / story / vocab)
   */
  renderEtymologyDetail() {
    // Keep the active sub-tab pane in sync (shared by both render paths)
    document.querySelectorAll(".etym-subtab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.etymTab === this.currentEtymTab);
    });
    document.querySelectorAll(".etym-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `etym-pane-${this.currentEtymTab}`);
    });

    if (this.currentQuickWord) {
      this.renderCompoundBreakdown(this.currentQuickWord);
      return;
    }

    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[this.currentChar] : null;
    const heroTarget = document.getElementById("etymology-hero-card");
    const componentsTarget = document.getElementById("etymology-components-card");
    const storyTarget = document.getElementById("etymology-story-card");
    const vocabTarget = document.getElementById("etymology-vocab-card");
    if (!heroTarget) return;

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
              <button class="audio-speak-btn tone-chart-btn" onclick="window.App.switchTab('pronunciation')">
                📈 กราฟเสียงวรรณยุกต์
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
            <button class="audio-speak-btn tone-chart-btn" onclick="window.App.switchTab('pronunciation')">
              📈 กราฟเสียงวรรณยุกต์
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
                ${this.getRadicalEmoji(charData.char) ? `<div class="c-emoji" title="ตัวช่วยจำ">${this.getRadicalEmoji(charData.char)}</div>` : ''}
                <div class="c-pinyin">${charData.primaryPinyin}</div>
                <div class="c-meaning">${charData.thaiMeaningShort}</div>
                <div class="c-desc">${charData.components[0]?.desc || `รากศัพท์หมวด ${charData.radical}`}</div>
              </div>
            ` : `
              ${(charData.components || []).map(c => {
                const isPhonetic = c.role && (c.role.includes("声符") || c.role.includes("เสียง") || c.role.includes("Sound"));
                const isSemantic = c.role && (c.role.includes("意符") || c.role.includes("ความหมาย") || c.role.includes("หมวด"));
                const cardClass = isPhonetic ? 'phonetic-card' : (isSemantic ? 'semantic-card' : '');
                const compEmoji = this.getRadicalEmoji(c.char);
                return `
                  <div class="component-card ${cardClass}">
                    <div class="comp-role-badge">${c.role}</div>
                    <div class="c-char">${c.char}</div>
                    ${compEmoji ? `<div class="c-emoji" title="ตัวช่วยจำ">${compEmoji}</div>` : ''}
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
                <div class="c-desc">สังกัดหมวด ${charData.radical} ${this.getRadicalEmoji(charData.radical)}</div>
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
      const showMythBanner = showSixWritings && !this.hasMythBannerBeenSeen();
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
          ` : ''}

          ${showMythBanner ? `
            <div class="myth-dispeller-banner">
              <button class="myth-dismiss-btn" onclick="window.App.dismissMythBanner()" aria-label="ปิดคำแนะนำนี้" title="ปิด — จะไม่แสดงอีก">✕</button>
              <div class="myth-header">
                <span class="myth-icon">💡</span>
                <strong>ความรู้ภาษาศาสตร์: ลบล้างความเชื่อผิดๆ "อักษรจีนทุกตัวคือภาพวาด"</strong>
              </div>
              <p class="myth-body">
                ผู้เรียนส่วนใหญ่เข้าใจผิดว่าอักษรจีนทั้งหมดเป็นภาพวาด แต่ในความเป็นจริง <strong>อักษรภาพ (象形) มีเพียง ~4%</strong> เท่านั้น ส่วนอักษรจีนมากกว่า <strong>80-90% คืออักษรแบบ 形声 (Phono-Semantic)</strong> ที่ผสมระหว่าง <em>'หมวดนำบอกความหมาย (意符)'</em> + <em>'ตัวช่วยบอกเสียงอ่าน (声符)'</em>
              </p>
            </div>
          ` : ''}

          <div class="origin-subsection">
            <div class="origin-subsection-label"><span>📜</span> ภาพจากอักษรโบราณ</div>
            <div class="oracle-script-quote">
              <strong>${charData.ancientEtymology ? charData.ancientEtymology.oracleScript : ''}</strong>
            </div>
            <p class="origin-story-text">
              ${charData.ancientEtymology ? charData.ancientEtymology.originStory : ''}
            </p>
          </div>

          <div class="origin-subsection">
            <div class="origin-subsection-label"><span>🔄</span> วิวัฒนาการสู่ปัจจุบัน</div>
            <div class="modern-evolution-note">
              ${charData.ancientEtymology ? charData.ancientEtymology.modernEvolution : ''}
            </div>
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

    // container.innerHTML fully replaces the static return-bar markup from
    // index.html on every render, so it's re-added here each time too.
    const returnBar = `
      <div class="view-return-bar" onclick="window.App.switchTab('etymology')">
        <span class="return-arrow">◀</span>
        <span>กลับสู่รายละเอียดตัวอักษร</span>
      </div>
    `;

    if (!charData) {
      const lexicon = window.HANZI_LEXICON ? window.HANZI_LEXICON[this.currentChar] : null;
      const displayPinyin = lexicon ? lexicon.pinyin : this.currentRadical;
      const displayThai = lexicon ? lexicon.thai : "รากศัพท์ภาษาจีน";
      const displayTone = lexicon ? (lexicon.tone || 1) : 1;

      container.innerHTML = `
        ${returnBar}
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
      ${returnBar}
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
    const rankOptions = ["ทั้งหมด", "สูงที่สุด", "สูงมาก", "สูง", "ปานกลาง", "ต่ำ"];
    // Categories in the raw catalog are compound labels like "ร่างกายและพลังงาน"
    // (body-and-energy) — split on "และ" to a broad bucket ("ร่างกาย") so the
    // filter has ~20 options instead of the full ~57 overly-specific pairs.
    const broadCat = (c) => c.split("และ")[0];
    const categoryOptions = ["ทั้งหมด", ...Array.from(new Set(catalog.map(r => broadCat(r.cat)))).sort()];

    // Filter by search keyword, stroke count, category, and rank/frequency
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
      if (this.currentStrokeFilter === "1-2 ขีด" && !(r.strokes <= 2)) return false;
      if (this.currentStrokeFilter === "3-4 ขีด" && !(r.strokes >= 3 && r.strokes <= 4)) return false;
      if (this.currentStrokeFilter === "5-6 ขีด" && !(r.strokes >= 5 && r.strokes <= 6)) return false;
      if (this.currentStrokeFilter === "7-8 ขีด" && !(r.strokes >= 7 && r.strokes <= 8)) return false;
      if (this.currentStrokeFilter === "9+ ขีด" && !(r.strokes >= 9)) return false;

      // 3. Category filter (broad bucket)
      if (this.currentRadicalCategoryFilter !== "ทั้งหมด" && broadCat(r.cat) !== this.currentRadicalCategoryFilter) return false;

      // 4. Rank / frequency filter — doubles as a rough "how essential is this
      // radical to learn first" difficulty proxy, since there's no per-radical
      // HSK level in the data (only individual characters have one).
      if (this.currentRadicalRankFilter !== "ทั้งหมด" && r.rank !== this.currentRadicalRankFilter) return false;

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

      <!-- Category & Frequency Filter Dropdowns -->
      <div class="rad-dropdown-filter-row">
        <select id="rad-lib-category-filter" class="rad-filter-select" onchange="window.App.filterRadicalCategory(this.value)">
          ${categoryOptions.map(c => `<option value="${escapeHtml(c)}" ${this.currentRadicalCategoryFilter === c ? 'selected' : ''}>${c === 'ทั้งหมด' ? 'หมวดหมู่: ทั้งหมด' : c}</option>`).join('')}
        </select>
        <select id="rad-lib-rank-filter" class="rad-filter-select" onchange="window.App.filterRadicalRank(this.value)">
          ${rankOptions.map(r => `<option value="${escapeHtml(r)}" ${this.currentRadicalRankFilter === r ? 'selected' : ''}>${r === 'ทั้งหมด' ? 'ความถี่การใช้งาน: ทั้งหมด' : `ความถี่: ${r}`}</option>`).join('')}
        </select>
      </div>

      <!-- Compact 214 Cards Grid -->
      <div class="radicals-cards-grid">
        ${filtered.map(rad => {
          const isLocked = window.PremiumGate && !window.PremiumGate.canAccessRadical(rad.char);
          const fullRad = window.RADICALS_DATA ? window.RADICALS_DATA[rad.char] : null;
          const trackableIds = fullRad ? this.buildTrackableIdsForRadical(fullRad.characterIds || []) : [];
          const progress = window.DB && fullRad ? window.DB.getRadicalMasteryProgress(trackableIds) : { mastered: 0, total: 0 };
          const pct = progress.total > 0 ? Math.round((progress.mastered / progress.total) * 100) : 0;
          return `
            <div class="rad-lib-card ${isLocked ? 'locked' : ''}" onclick="window.App.openRadicalFromLibrary('${rad.char}')">
              ${isLocked ? '<span class="lock-badge">🔒</span>' : ''}
              <div class="rad-lib-top">
                <div class="rad-lib-hanzi">${rad.char}</div>
                ${rad.emoji ? `<span class="rad-lib-emoji" title="ตัวช่วยจำ">${rad.emoji}</span>` : ''}
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

  filterRadicalCategory(category) {
    this.currentRadicalCategoryFilter = category;
    this.renderRadicalsLibrary();
  }

  filterRadicalRank(rank) {
    this.currentRadicalRankFilter = rank;
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
      theme: "light",
      hanziFont: "serif"
    };
  }

  saveSettings(settings) {
    try {
      localStorage.setItem("jumjeen_user_settings", JSON.stringify(settings));
    } catch (e) {}
  }

  /** The "อักษรจีนทุกตัวคือภาพวาด" myth-dispeller banner is a one-time
   *  linguistic tip, not per-character content — it used to redraw on the
   *  ที่มา pane of every single character, which just reads as the same
   *  paragraph repeating forever. Show it once, remember it was seen. */
  hasMythBannerBeenSeen() {
    try {
      return localStorage.getItem("jumjeen_myth_banner_seen") === "1";
    } catch (e) {
      return false;
    }
  }

  dismissMythBanner() {
    try {
      localStorage.setItem("jumjeen_myth_banner_seen", "1");
    } catch (e) {}
    const banner = document.querySelector(".myth-dispeller-banner");
    if (banner) banner.remove();
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

    // Scoped to [data-theme] specifically — .theme-option-card is reused by
    // the hanzi-font picker below, and an unqualified query would also
    // (incorrectly) toggle "active" on those buttons every time theme changes.
    document.querySelectorAll(".theme-option-card[data-theme]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });
  }

  setHanziFont(mode) {
    const settings = this.getSettings();
    settings.hanziFont = mode;
    this.saveSettings(settings);

    document.body.classList.toggle("font-sans", mode === "sans");

    document.querySelectorAll(".theme-option-card[data-hanzi-font]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.hanziFont === mode);
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

    document.querySelectorAll(".theme-option-card[data-theme]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === settings.theme);
    });

    document.querySelectorAll(".theme-option-card[data-hanzi-font]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.hanziFont === (settings.hanziFont || "serif"));
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
