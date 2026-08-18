/**
 * Spaced Repetition System (SRS) - SuperMemo SM-2 Algorithm Engine
 * จำจีน (JumJeen) - ระบบช่วยจำระยะยาว
 */

class SRSEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentQueue = [];
    this.currentIndex = 0;
    this.isAnswerRevealed = false;
    this.activeCard = null;
    this.stats = { total: 0, reviewedThisSession: 0, correctStreak: 0 };
    this.showStatsView = false;
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
    this.render();
  }

  revealAnswer() {
    this.isAnswerRevealed = true;
    if (this.activeCard && window.AudioEngine) {
      window.AudioEngine.speak(this.activeCard.character.char);
    }
    this.render();
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

    this.container.innerHTML = `
      <div class="srs-session-wrapper">
        <!-- Progress Bar -->
        <div class="srs-progress-header">
          <span class="srs-counter">คำที่ ${this.currentIndex + 1} / ${this.currentQueue.length}</span>
          <span class="srs-badge ${srs.mastery_level}">ระดับ: ${this.getMasteryLabel(srs.mastery_level)}</span>
          <button class="btn-stats-mini" onclick="window.SRSEngine.toggleStatsView()" title="ดูสถิติแบบละเอียด">📊</button>
        </div>

        <!-- Flip Flashcard -->
        <div class="srs-card ${this.isAnswerRevealed ? 'revealed' : ''}">
          
          <!-- Front Face -->
          <div class="card-face card-front">
            <div class="srs-char-big">${c.char}</div>
            <div class="srs-prompt-text">คุณจำรากศัพท์ ความหมาย และวิธีออกเสียงคำนี้ได้ไหม?</div>
            <button class="btn-reveal-answer" onclick="window.SRSEngine.revealAnswer()">
              👁️ แตะเพื่อเฉลยคำตอบ & เสียงอ่าน
            </button>
          </div>

          <!-- Back Face (Revealed Details) -->
          ${this.isAnswerRevealed ? `
            <div class="card-face card-back">
              <div class="back-top-row">
                <span class="back-char">${c.char}</span>
                <span class="back-pinyin">${c.primaryPinyin}</span>
                <button class="btn-listen-mini" onclick="window.AudioEngine.speak('${c.char}')">🔊 ฟังเสียง</button>
              </div>

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

              <!-- SM-2 Rating Buttons -->
              <div class="srs-rating-row">
                <button class="btn-rate rate-again" onclick="window.SRSEngine.submitAnswer(0)">
                  <span>❌ ลืม</span>
                  <small>ทบทวนใหม่ 1 วัน</small>
                </button>
                <button class="btn-rate rate-hard" onclick="window.SRSEngine.submitAnswer(3)">
                  <span>🤔 พอนึกออก</span>
                  <small>ทบทวนใน 2-3 วัน</small>
                </button>
                <button class="btn-rate rate-good" onclick="window.SRSEngine.submitAnswer(4)">
                  <span>✅ จำได้</span>
                  <small>ทบทวนใน 4-7 วัน</small>
                </button>
                <button class="btn-rate rate-easy" onclick="window.SRSEngine.submitAnswer(5)">
                  <span>⚡ จำแม่นมาก</span>
                  <small>ทบทวนใน 14-21 วัน</small>
                </button>
              </div>
            </div>
          ` : ''}

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
