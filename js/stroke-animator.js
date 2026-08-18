/**
 * Hanzi Stroke Order & Calligraphy Engine (HanziWriter Integration)
 * จำจีน (JumJeen) - แสดงลำดับขีดพู่กันจีนมาตรฐานสากล 100% คมชัด สวยงาม ไร้การบิดเบี้ยว
 * 
 * License Note:
 * - HanziWriter is open-source under the MIT License (100% Commercial Permissible).
 * - Stroke order data is derived from MakeMeAHanzi / Arphic PL (Commercial Permissible).
 */

class StrokeAnimator {
  constructor(containerId) {
    this.containerId = containerId || "stroke-target-container";
    this.currentChar = "好";
    this.writer = null;
    this.isPlaying = false;
    this.bindEvents();
  }

  bindEvents() {
    if (typeof document === 'undefined') return;

    const playBtn = document.getElementById("btn-stroke-play");
    if (playBtn) {
      playBtn.onclick = () => this.play();
    }

    const quizBtn = document.getElementById("btn-stroke-quiz");
    if (quizBtn) {
      quizBtn.onclick = () => this.quiz();
    }

    const resetBtn = document.getElementById("btn-stroke-reset");
    if (resetBtn) {
      resetBtn.onclick = () => this.reset();
    }
  }

  loadCharacter(charKey) {
    this.currentChar = charKey || "好";
    if (typeof document === 'undefined') return;

    const container = document.getElementById(this.containerId);
    if (!container) return;

    container.innerHTML = "";

    if (window.HanziWriter) {
      try {
        this.writer = window.HanziWriter.create(this.containerId, this.currentChar, {
          width: 210,
          height: 210,
          padding: 10,
          showOutline: true,
          strokeAnimationSpeed: 1.25,
          delayBetweenStrokes: 180,
          strokeColor: '#1c1c1e',
          outlineColor: '#e2e2e6',
          drawingColor: '#d33828',
          radicalColor: '#2e7d32',
          showCharacter: true
        });

        const label = document.getElementById("stroke-step-label");
        if (label) {
          label.innerHTML = `<span>ลำดับขีดอักษร <strong>${this.currentChar}</strong> (กดเล่นแอนิเมชันหรือแตะฝึกเขียน)</span>`;
        }
      } catch (err) {
        console.warn("HanziWriter init error:", err);
        this.renderFallback(container);
      }
    } else {
      this.renderFallback(container);
    }
  }

  play() {
    if (this.writer) {
      this.isPlaying = true;
      this.writer.animateCharacter({
        onComplete: () => {
          this.isPlaying = false;
        }
      });
      if (window.AudioEngine) {
        window.AudioEngine.playToneChime(440, 'triangle', 0.1);
      }
    }
  }

  quiz() {
    if (this.writer) {
      const label = document.getElementById("stroke-step-label");
      if (label) {
        label.innerHTML = `✍️ <strong>โหมดฝึกเขียน:</strong> ลากเส้นตามลำดับขีดบนกรอบสี่เหลี่ยมได้เลย!`;
      }
      this.writer.quiz({
        onCorrectStroke: (strokeData) => {
          if (window.AudioEngine) {
            window.AudioEngine.playToneChime(520 + strokeData.strokeNum * 40, 'sine', 0.08);
          }
        },
        onComplete: (summary) => {
          if (label) {
            label.innerHTML = `🎉 <strong>ยอดเยี่ยมมาก!</strong> เขียนถูกต้องครบถ้วน (${summary.totalMistakes} ข้อผิดพลาด)`;
          }
          if (window.AudioEngine) {
            window.AudioEngine.playChimeSuccess();
          }
        }
      });
    }
  }

  reset() {
    if (this.writer) {
      this.writer.showCharacter();
      const label = document.getElementById("stroke-step-label");
      if (label) {
        label.innerHTML = `<span>ลำดับขีดอักษร <strong>${this.currentChar}</strong></span>`;
      }
    }
  }

  renderFallback(container) {
    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;width:210px;height:210px;font-size:110px;font-family:var(--font-chinese);color:var(--ink-primary);">
        ${this.currentChar}
      </div>
    `;
  }
}

window.StrokeAnimator = StrokeAnimator;
