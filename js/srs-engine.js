/**
 * Spaced Repetition System (SRS) - SuperMemo SM-2 Algorithm Engine
 * จำจีน (JumJeen) - ระบบช่วยจำระยะยาว
 */

const SRS_TUTORIAL_SEEN_KEY = "jumjeen_srs_tutorial_seen";
const SRS_SWIPE_THRESHOLD = 100;
const SRS_TAP_THRESHOLD = 6;

// Line-style action icons (currentColor-driven) so the grading buttons read
// as one visual system with the app's palette instead of mismatched emoji.
const SRS_ICON_FORGOT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
const SRS_ICON_REMEMBER = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6"/></svg>`;
const SRS_ICON_FLIP = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 00-14.9-3.5"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0014.9 3.5"/><path d="M20 20v-5h-5"/></svg>`;

class SRSEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentQueue = [];
    this.currentIndex = 0;
    this.isAnswerRevealed = false;
    this.activeCard = null;
    this.stats = { total: 0, reviewedThisSession: 0, correctStreak: 0 };
    this.showStatsView = false;
    this.showTutorial = false;
    // Guards against the pointerup tap-to-flip handler firing again while
    // a swiped card is still mid fly-off animation and its grade hasn't
    // been persisted yet.
    this.isAnimatingSwipe = false;
    window.SRSEngine = this;
  }

  toggleStatsView() {
    this.showStatsView = !this.showStatsView;
    this.render();
  }

  /**
   * SuperMemo SM-2 Calculation
   * @param {Object} currentSRS Current SRS record
   * @param {number} quality 0: Again, 3: Hard, 4: Good, 5: Easy
   * @returns {Object} Updated SRS state
   */
  calculateNextReview(currentSRS, quality) {
    let rep = currentSRS.repetition_count || 0;
    let interval = currentSRS.interval_days || 0;
    let ef = currentSRS.ease_factor || 2.5;

    // Quality < 3 means forgot (Again)
    if (quality < 3) {
      rep = 0;
      interval = 1; // Review again in 1 day (or next queue cycle)
    } else {
      if (rep === 0) {
        interval = (quality === 5) ? 3 : 1;
      } else if (rep === 1) {
        interval = (quality === 5) ? 7 : 3;
      } else {
        interval = Math.round(interval * ef * (quality === 5 ? 1.3 : 1.0));
      }
      rep++;
    }

    // Update Ease Factor (EF)
    ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ef < 1.3) ef = 1.3;

    // Calculate Next Review Time
    const nextReviewTime = Date.now() + (interval * 24 * 60 * 60 * 1000);

    // Determine Mastery Level
    let mastery = 'learning';
    if (interval >= 21) {
      mastery = 'mastered';
    } else if (interval >= 6) {
      mastery = 'reviewing';
    }

    return {
      character_id: currentSRS.character_id,
      repetition_count: rep,
      interval_days: interval,
      ease_factor: parseFloat(ef.toFixed(2)),
      mastery_level: mastery,
      // Earned through actual tested recall (SM-2), as opposed to the
      // self-report path in App.toggleCurrentMastery() — kept distinct so
      // the mindmap badge and stats screen can be honest about which kind
      // of "mastered" a given word is.
      mastery_source: mastery === 'mastered' ? 'srs' : null,
      next_review_time: nextReviewTime,
      last_reviewed_time: Date.now(),
      total_reviews: (currentSRS.total_reviews || 0) + 1,
      correct_count: (currentSRS.correct_count || 0) + (quality >= 3 ? 1 : 0)
    };
  }

  /**
   * Start or reload Flashcard Review Session
   * @param {boolean} forceCram If true or no due cards, loads all cards for immediate practice
   */
  async startSession(forceCram = false) {
    if (!window.DB) return;
    let queue = await window.DB.getDueSRSReviews();
    if (forceCram || queue.length === 0) {
      queue = await window.DB.getAllSRSReviews();
      // Shuffle for active memory recall
      queue = queue.sort(() => Math.random() - 0.5);
    }
    this.currentQueue = queue;
    this.currentIndex = 0;
    this.isAnswerRevealed = false;
    if (this.currentQueue.length > 0 && !this.hasSeenTutorial()) {
      this.showTutorial = true;
    }
    this.render();
  }

  hasSeenTutorial() {
    try {
      return localStorage.getItem(SRS_TUTORIAL_SEEN_KEY) === "true";
    } catch (e) {
      return false;
    }
  }

  dismissTutorial() {
    this.showTutorial = false;
    try {
      localStorage.setItem(SRS_TUTORIAL_SEEN_KEY, "true");
    } catch (e) {}
    this.render();
  }

  openTutorial() {
    this.showTutorial = true;
    this.render();
  }

  /** Jumps to this card's character on the radical mindmap — reuses
   *  App.jumpToComponent(), the same "see it in context" navigation the
   *  compound-word breakdown view already uses. */
  goToMindmap() {
    if (!this.activeCard || !window.App) return;
    window.App.jumpToComponent(this.activeCard.character.char);
  }

  revealAnswer() {
    this.isAnswerRevealed = true;
    if (this.activeCard && window.AudioEngine) {
      window.AudioEngine.speak(this.activeCard.character.char);
    }
    this.render();
  }

  hideAnswer() {
    this.isAnswerRevealed = false;
    this.render();
  }

  /** Tap-to-flip: front shows the character to test recall, tapping again
   *  flips back. Distinct from swiping, which grades and advances. */
  toggleFlip() {
    if (this.isAnswerRevealed) {
      this.hideAnswer();
    } else {
      this.revealAnswer();
    }
  }

  /** Fallback for the on-screen buttons (non-touch input, or users who
   *  don't want to drag) — grades via the same fly-off animation as a
   *  real swipe so the two interaction paths feel identical. */
  buttonGrade(direction) {
    if (this.isAnimatingSwipe) return;
    const card = this.container.querySelector("#srs-active-card");
    if (!card) return;
    this.flyOutAndGrade(card, direction);
  }

  /** direction: 'left' = ยังจำไม่ได้ (forgot), 'right' = จำได้แล้ว (remembered) */
  flyOutAndGrade(card, direction) {
    if (this.isAnimatingSwipe) return;
    this.isAnimatingSwipe = true;
    const flyX = direction === "left" ? -(window.innerWidth || 500) : (window.innerWidth || 500);
    card.style.transition = "transform 0.35s ease-out, opacity 0.35s ease-out";
    card.style.transform = `translate(${flyX}px, -30px) rotate(${direction === "left" ? -28 : 28}deg)`;
    card.style.opacity = "0";
    // 4 = "Good" (จำได้แล้ว), 0 = "Again" (ยังจำไม่ได้) — reuses the SM-2
    // quality scale calculateNextReview() already expects.
    const quality = direction === "left" ? 0 : 4;
    window.setTimeout(() => {
      this.isAnimatingSwipe = false;
      this.submitAnswer(quality);
    }, 320);
  }

  /** Binds drag-to-swipe + tap-to-flip to the freshly rendered top card.
   *  Called at the end of render() — the card element is rebuilt every
   *  render, so listeners must be reattached each time.
   *
   *  Uses separate mouse + touch handlers (like mindmap.js's pan-drag)
   *  instead of unified Pointer Events — the Capacitor WebViews this app
   *  ships in (older Android System WebView especially) have historically
   *  flaky Pointer Event support, so this app's other drag gesture never
   *  relied on it either. touchmove also calls preventDefault() while a
   *  drag is active so a real finger swipe (which always has some
   *  vertical drift) can't get hijacked as native page scroll partway
   *  through — that hijack is what silently killed the swipe before. */
  attachCardGestures() {
    const card = this.container.querySelector("#srs-active-card");
    if (!card) return;
    const badgeLeft = card.querySelector(".tinder-swipe-badge.left");
    const badgeRight = card.querySelector(".tinder-swipe-badge.right");

    let dragging = false;
    let startX = 0, startY = 0, dx = 0, dy = 0;

    const resetPosition = () => {
      card.style.transition = "transform 0.25s ease";
      card.style.transform = "";
      if (badgeLeft) badgeLeft.style.opacity = 0;
      if (badgeRight) badgeRight.style.opacity = 0;
    };

    const onStart = (clientX, clientY, target) => {
      if (this.isAnimatingSwipe) return;
      // Let in-card buttons (listen, jump-to-mindmap) behave like normal
      // buttons instead of starting a drag / triggering tap-to-flip.
      if (target && target.closest && target.closest(".btn-listen-mini, .btn-goto-mindmap")) return;
      dragging = true;
      startX = clientX;
      startY = clientY;
      dx = 0; dy = 0;
      card.style.transition = "none";
    };

    const onMove = (clientX, clientY) => {
      if (!dragging) return;
      dx = clientX - startX;
      dy = clientY - startY;
      const rotate = dx / 14;
      card.style.transform = `translate(${dx}px, ${dy * 0.15}px) rotate(${rotate}deg)`;
      const progress = Math.min(Math.abs(dx) / SRS_SWIPE_THRESHOLD, 1);
      if (dx < 0) {
        if (badgeLeft) badgeLeft.style.opacity = progress;
        if (badgeRight) badgeRight.style.opacity = 0;
      } else if (dx > 0) {
        if (badgeRight) badgeRight.style.opacity = progress;
        if (badgeLeft) badgeLeft.style.opacity = 0;
      }
    };

    const onEnd = () => {
      if (!dragging) return;
      dragging = false;

      if (Math.abs(dx) < SRS_TAP_THRESHOLD && Math.abs(dy) < SRS_TAP_THRESHOLD) {
        resetPosition();
        this.toggleFlip();
        return;
      }
      if (Math.abs(dx) >= SRS_SWIPE_THRESHOLD) {
        this.flyOutAndGrade(card, dx < 0 ? "left" : "right");
      } else {
        resetPosition();
      }
    };

    // Mouse (desktop / trackpad) — mousemove/mouseup must live on window
    // (a fast drag can leave the card's bounds), but this fires on every
    // card render, so the previous card's listeners must be torn down
    // first or they'd pile up on window for the rest of the session.
    if (this._srsMouseMove) window.removeEventListener("mousemove", this._srsMouseMove);
    if (this._srsMouseUp) window.removeEventListener("mouseup", this._srsMouseUp);
    this._srsMouseMove = (e) => onMove(e.clientX, e.clientY);
    this._srsMouseUp = onEnd;

    card.addEventListener("mousedown", (e) => onStart(e.clientX, e.clientY, e.target));
    window.addEventListener("mousemove", this._srsMouseMove);
    window.addEventListener("mouseup", this._srsMouseUp);

    // Touch (real phones)
    card.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      onStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
    }, { passive: true });

    card.addEventListener("touchmove", (e) => {
      if (!dragging || e.touches.length !== 1) return;
      e.preventDefault();
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });

    card.addEventListener("touchend", onEnd);
    card.addEventListener("touchcancel", onEnd);
  }

  async submitAnswer(qualityRating) {
    if (!this.activeCard) return;

    const oldSRS = this.activeCard.srs;
    const newSRS = this.calculateNextReview(oldSRS, qualityRating);

    // Persist to Database
    await window.DB.saveSRSProgress(this.activeCard.character.char, newSRS);

    if (qualityRating >= 3) {
      this.stats.correctStreak++;
      if (window.AudioEngine) window.AudioEngine.playSuccessSound();
    } else {
      this.stats.correctStreak = 0;
      if (window.AudioEngine) window.AudioEngine.playToneChime(220, 'sawtooth', 0.2);
    }

    this.stats.reviewedThisSession++;
    this.currentIndex++;
    this.isAnswerRevealed = false;

    // Render next card or summary
    this.render();
  }

  async render() {
    if (!this.container) return;

    if (this.showStatsView) {
      this.container.innerHTML = this.renderStatsScreen();
      return;
    }

    const stats = await window.DB.getSRSStatistics();

    // If session finished or no cards due
    if (this.currentIndex >= this.currentQueue.length || this.currentQueue.length === 0) {
      this.container.innerHTML = `
        <div class="srs-dashboard">
          <div class="srs-stat-hero">
            <div class="srs-hero-icon">🏆</div>
            <h3>ทบทวนคำศัพท์ประจำวันครบแล้ว!</h3>
            <p>สมองได้รับการกระตุ้นความจำตามรอบเวลา SM-2 เรียบร้อย</p>
          </div>

          <!-- Retention Stats Matrix -->
          <div class="srs-stats-matrix">
            <div class="srs-stat-box">
              <span class="num">${stats.masteredCount}</span>
              <span class="lbl">จำได้ขึ้นใจ (Mastered)</span>
            </div>
            <div class="srs-stat-box">
              <span class="num">${stats.reviewingCount}</span>
              <span class="lbl">กำลังทบทวน (Reviewing)</span>
            </div>
            <div class="srs-stat-box">
              <span class="num">${stats.learningCount}</span>
              <span class="lbl">กำลังเรียนรู้ (Learning)</span>
            </div>
            <div class="srs-stat-box">
              <span class="num">${stats.newCount}</span>
              <span class="lbl">คำศัพท์ใหม่ (New)</span>
            </div>
          </div>

          <div class="srs-actions-footer">
            <button class="btn-restart-srs" onclick="window.SRSEngine.startSession(true)">
              🔄 ทบทวนอีกครั้ง (ฝึกซ้อมทันที)
            </button>
            <button class="btn-view-stats" onclick="window.SRSEngine.toggleStatsView()">
              📊 ดูสถิติแบบละเอียดตามระดับ HSK
            </button>
          </div>
        </div>
      `;
      return;
    }

    this.activeCard = this.currentQueue[this.currentIndex];
    const c = this.activeCard.character;
    const srs = this.activeCard.srs;
    const nextCard = this.currentQueue[this.currentIndex + 1];

    this.container.innerHTML = `
      <div class="srs-session-wrapper">
        <!-- Progress Bar -->
        <div class="srs-progress-header">
          <div class="srs-progress-header-group">
            <span class="srs-counter">คำที่ ${this.currentIndex + 1} / ${this.currentQueue.length}</span>
            <span class="srs-badge ${srs.mastery_level}">ระดับ: ${this.getMasteryLabel(srs.mastery_level)}</span>
          </div>
          <div class="srs-progress-header-group">
            <button class="btn-stats-mini" onclick="window.SRSEngine.openTutorial()" title="วิธีใช้งานการ์ด">❓</button>
            <button class="btn-stats-mini" onclick="window.SRSEngine.toggleStatsView()" title="ดูสถิติแบบละเอียด">📊</button>
          </div>
        </div>

        <!-- Tinder-style Swipeable Card Stack -->
        <div class="tinder-stack">
          ${nextCard ? `
            <div class="tinder-card tinder-card-behind">
              <div class="tinder-card-behind-char">${nextCard.character.char}</div>
            </div>
          ` : ''}

          <div class="tinder-card tinder-card-top" id="srs-active-card">
            <div class="tinder-swipe-badge left">❌ ยังไม่ได้</div>
            <div class="tinder-swipe-badge right">✅ จำได้</div>

            <div class="tinder-card-flip-inner ${this.isAnswerRevealed ? 'is-flipped' : ''}">
              <!-- Front Face -->
              <div class="tinder-card-face tinder-card-face-front">
                <div class="srs-char-big">${c.char}</div>
                <div class="srs-prompt-text">คุณจำรากศัพท์ ความหมาย และวิธีออกเสียงคำนี้ได้ไหม?</div>
                <div class="tinder-tap-hint">👆 แตะการ์ดเพื่อดูเฉลย</div>
              </div>

              <!-- Back Face (Revealed Details) -->
              <div class="tinder-card-face tinder-card-face-back">
                <div class="back-top-row">
                  <span class="back-char">${c.char}</span>
                  <span class="back-pinyin">${c.primaryPinyin}</span>
                  <button class="btn-listen-mini" onclick="event.stopPropagation(); window.AudioEngine.speak('${c.char}')">🔊 ฟังเสียง</button>
                </div>

                <button class="btn-goto-mindmap" onclick="event.stopPropagation(); window.SRSEngine.goToMindmap()">
                  🌿 ดูตำแหน่งในผังรากศัพท์
                </button>

                <div class="back-meaning">${c.thaiMeaningShort}</div>

                <!-- Component Breakdown -->
                <div class="back-components-pill">
                  <strong>รากศัพท์:</strong> ${c.components.map(cp => `${cp.char} (${cp.meaning})`).join(' + ')}
                </div>

                <!-- Mnemonic Trick -->
                <div class="back-mnemonic-box">
                  <div class="mnemonic-title">💡 สูตรช่วยจำภาพ:</div>
                  <div>${c.mnemonicHook ? c.mnemonicHook.formula : ''}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Swipe / Grade Action Bar -->
        <div class="tinder-action-row">
          <button class="tinder-action-btn action-forgot" onclick="window.SRSEngine.buttonGrade('left')">
            <span class="action-icon-circle">${SRS_ICON_FORGOT}</span>
            <span class="action-label">ยังไม่ได้</span>
          </button>
          <button class="tinder-action-btn action-flip" onclick="window.SRSEngine.toggleFlip()">
            <span class="action-icon-circle">${SRS_ICON_FLIP}</span>
            <span class="action-label">ดูเฉลย</span>
          </button>
          <button class="tinder-action-btn action-remember" onclick="window.SRSEngine.buttonGrade('right')">
            <span class="action-icon-circle">${SRS_ICON_REMEMBER}</span>
            <span class="action-label">จำได้</span>
          </button>
        </div>
      </div>
      ${this.showTutorial ? this.renderTutorialOverlay() : ''}
    `;

    this.attachCardGestures();
  }

  renderTutorialOverlay() {
    return `
      <div class="modal-overlay active srs-tutorial-overlay">
        <div class="settings-modal-card srs-tutorial-card">
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="modal-header-icon">🎴</span>
              <h3 class="modal-heading">วิธีใช้การ์ดทบทวน</h3>
            </div>
            <button class="modal-close-icon-btn" onclick="window.SRSEngine.dismissTutorial()">✕</button>
          </div>
          <div class="settings-modal-body srs-tutorial-body">
            <div class="srs-tutorial-step">
              <span class="srs-tutorial-emoji">👆</span>
              <div>
                <strong>แตะที่การ์ด</strong>
                <p>เพื่อเปิดดูคำอ่าน ความหมาย และสูตรช่วยจำ</p>
              </div>
            </div>
            <div class="srs-tutorial-step">
              <span class="srs-tutorial-emoji">⬅️</span>
              <div>
                <strong>ปัดการ์ดไปทางซ้าย</strong>
                <p>ถ้า<b>ยังจำไม่ได้</b> ระบบจะให้ทบทวนคำนี้อีกครั้งเร็วๆ นี้</p>
              </div>
            </div>
            <div class="srs-tutorial-step">
              <span class="srs-tutorial-emoji">➡️</span>
              <div>
                <strong>ปัดการ์ดไปทางขวา</strong>
                <p>ถ้า<b>จำได้แล้ว</b> ระบบจะเว้นระยะให้ทบทวนครั้งถัดไปนานขึ้น</p>
              </div>
            </div>
            <p class="srs-tutorial-note">💡 ไม่ถนัดการปัดหน้าจอ? ใช้ปุ่มด้านล่างการ์ดแทนได้เช่นกัน</p>
          </div>
          <div class="modal-footer-action">
            <button class="btn-restart-srs" onclick="window.SRSEngine.dismissTutorial()">เข้าใจแล้ว เริ่มทบทวน!</button>
          </div>
        </div>
      </div>
    `;
  }

  getMasteryLabel(level) {
    switch (level) {
      case 'mastered': return 'จำได้ขึ้นใจ ⭐';
      case 'reviewing': return 'กำลังทบทวน 🌿';
      case 'learning': return 'กำลังเรียน 📝';
      default: return 'คำศัพท์ใหม่ ✨';
    }
  }

  /** Full learning-progress breakdown by HSK level, covering every
   *  character and compound word in the app (not just ones already
   *  touched by a review session) — answers "what have I actually
   *  learned so far, and roughly what level am I at." */
  renderStatsScreen() {
    if (!window.DB || !window.DB.getFullMasteryReport) {
      return `<div class="etym-empty-notice">✨ ไม่พบข้อมูลสถิติ</div>`;
    }
    const { byLevel, overallTotal, overallMastered, manualCount, srsVerifiedCount } = window.DB.getFullMasteryReport();
    const overallPct = overallTotal > 0 ? Math.round((overallMastered / overallTotal) * 100) : 0;

    // "Current level" = the highest HSK level reached by unbroken *tested*
    // mastery from level 1 up — deliberately counts only words proven by
    // clearing SM-2 review cycles (srsVerified), not self-tapped "จำได้แล้ว"
    // marks, so this estimate can't be inflated by optimistic self-report.
    const MASTERY_THRESHOLD = 70;
    let estimatedLevel = 0;
    for (let lvl = 1; lvl <= 6; lvl++) {
      const stat = byLevel[lvl];
      if (!stat || stat.total === 0) break;
      const pct = (stat.srsVerified / stat.total) * 100;
      if (pct >= MASTERY_THRESHOLD) estimatedLevel = lvl;
      else break;
    }

    const levelRows = [1, 2, 3, 4, 5, 6].map(lvl => {
      const stat = byLevel[lvl] || { total: 0, mastered: 0 };
      const pct = stat.total > 0 ? Math.round((stat.mastered / stat.total) * 100) : 0;
      return `
        <div class="hsk-level-row">
          <div class="hsk-level-label">
            <span class="hsk-level-tag">HSK ${lvl}</span>
            <span class="hsk-level-count">${stat.mastered}/${stat.total} คำ</span>
          </div>
          <div class="mastery-progress-bar hsk-bar"><div class="mastery-progress-fill" style="width: ${pct}%"></div></div>
        </div>
      `;
    }).join('');

    const ungraded = byLevel[0];
    const ungradedRow = ungraded && ungraded.total > 0 ? `
      <div class="hsk-level-row">
        <div class="hsk-level-label">
          <span class="hsk-level-tag">ไม่ระบุระดับ</span>
          <span class="hsk-level-count">${ungraded.mastered}/${ungraded.total} คำ</span>
        </div>
        <div class="mastery-progress-bar hsk-bar"><div class="mastery-progress-fill" style="width: ${ungraded.total > 0 ? Math.round((ungraded.mastered / ungraded.total) * 100) : 0}%"></div></div>
      </div>
    ` : '';

    return `
      <div class="srs-dashboard stats-screen">
        <div class="stats-screen-header">
          <button class="btn-back-stats" onclick="window.SRSEngine.toggleStatsView()">← กลับ</button>
          <h3>📊 สถิติการเรียนรู้</h3>
        </div>

        <div class="srs-stat-hero">
          <div class="srs-hero-icon">${estimatedLevel > 0 ? '🎓' : '🌱'}</div>
          <h3>${estimatedLevel > 0 ? `ระดับปัจจุบันโดยประมาณ: HSK ${estimatedLevel}` : 'ยังไม่ถึงระดับ HSK 1'}</h3>
          <p>จำได้ขึ้นใจแล้ว ${overallMastered} / ${overallTotal} คำ (${overallPct}%) จากคลังคำศัพท์ทั้งหมดในแอป</p>
          <p class="mastery-source-split">✓ ผ่านทบทวนจริง ${srsVerifiedCount} คำ &nbsp;·&nbsp; ★ บันทึกเอง ${manualCount} คำ</p>
        </div>

        <div class="hsk-breakdown-box">
          <div class="box-title"><span class="icon">📈</span><span>ความคืบหน้าแยกตามระดับ HSK</span></div>
          ${levelRows}
          ${ungradedRow}
        </div>

        <p class="stats-methodology-note">
          * "ระดับปัจจุบันโดยประมาณ" ด้านบนคำนวณจาก<strong>คำที่ผ่านทบทวนจริง (✓) เท่านั้น</strong>
          ไม่นับคำที่กดปุ่ม "จำได้แล้ว" เอง (★) เพื่อไม่ให้ประเมินสูงเกินจริง — แถบความคืบหน้าตามระดับด้านบนนับรวมทั้งสองแบบ
          ทั้งหมดนี้ไม่ได้วัดจากการสอบจริง ใช้เป็นแนวทางคร่าวๆ ก่อนตัดสินใจสอบ HSK จริงควรลองทำข้อสอบเก่า (真题) ประกอบด้วย
        </p>
      </div>
    `;
  }
}

window.SRSEngine = new SRSEngine("srs-container");
