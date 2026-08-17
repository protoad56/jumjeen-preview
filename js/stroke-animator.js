/**
 * Hanzi Stroke Order & Structure Visualizer (Step-by-Step Progressive Engine)
 * จำจีน (JumJeen) - แอนิเมชันและสเต็ปลำดับขีดอักษรจีนแบบเรียลไทม์
 */

class StrokeAnimator {
  constructor(canvasId) {
    this.canvas = typeof document !== 'undefined' && canvasId ? document.getElementById(canvasId) : null;
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.currentChar = "好";
    this.currentStep = 0;
    this.isPlaying = false;
    this.animationTimer = null;
    this.strokes = [];

    // Predefined Stroke Path Libraries for common characters
    this.strokePathLibrary = {
      "好": [
        { path: "M 82 45 C 65 80 42 120 40 132 C 45 142 90 128 102 122", type: "撇点", name: "1. 撇点 (piě diǎn)", desc: "ปัดซ้ายแล้วแต้มลงขวา" },
        { path: "M 104 65 C 84 100 52 138 28 160", type: "撇", name: "2. 撇 (piě)", desc: "ปัดโค้งลงทางซ้าย" },
        { path: "M 22 108 L 115 86", type: "提", name: "3. 提 (tí)", desc: "ตวัดเส้นเฉียงขึ้นขวา" },
        { path: "M 126 55 L 180 55 C 168 74 142 98 132 108", type: "横撇", name: "4. 横撇 (héng piě)", desc: "ขีดขวางแล้วปัดโค้งลงซ้าย" },
        { path: "M 152 106 C 158 126 158 152 156 168 C 152 178 145 180 138 176 C 132 172 134 165 138 162", type: "弯钩", name: "5. 弯钩 (wān gōu)", desc: "ลากโค้งลงมาแล้วตวัดเป็นขอ" },
        { path: "M 110 118 L 198 116", type: "横", name: "6. 横 (héng)", desc: "ขีดเส้นขวางตรงจากซ้ายไปขวา" }
      ],
      "妈": [
        { path: "M 82 45 C 65 80 42 120 40 132 C 45 142 90 128 102 122", type: "撇点", name: "1. 撇点 (piě diǎn)", desc: "ปัดซ้ายแต้มขวา" },
        { path: "M 104 65 C 84 100 52 138 28 160", type: "撇", name: "2. 撇 (piě)", desc: "ปัดโค้งซ้าย" },
        { path: "M 22 108 L 115 86", type: "提", name: "3. 提 (tí)", desc: "ตวัดขึ้นขวา" },
        { path: "M 128 58 L 182 58 L 176 96", type: "横折", name: "4. 横折 (héng zhé)", desc: "ขีดขวางแล้วหักลง" },
        { path: "M 128 96 L 128 132 L 185 132 L 185 168 C 182 178 174 180 165 176", type: "竖折折钩", name: "5. 竖折折钩", desc: "ลากตั้งหักขวางหักตวัดขอ" },
        { path: "M 122 166 L 195 166", type: "横", name: "6. 横 (héng)", desc: "ขีดเส้นขวางปิดท้าย" }
      ],
      "安": [
        { path: "M 110 28 L 110 48", type: "点", name: "1. 点 (diǎn)", desc: "แต้มยอดหลังคา" },
        { path: "M 48 52 L 44 72", type: "点", name: "2. 点 (diǎn)", desc: "แต้มซ้ายหลังคา" },
        { path: "M 48 56 L 172 56 L 160 76", type: "横撇/横钩", name: "3. 横撇/横钩", desc: "ขีดขวางเกี่ยวขอหลังคา" },
        { path: "M 110 95 C 95 118 78 140 76 148 C 82 154 125 144 135 140", type: "撇点", name: "4. 撇点 (piě diǎn)", desc: "ปัดซ้ายแต้มขวาของ 女" },
        { path: "M 136 108 C 118 135 90 162 60 180", type: "撇", name: "5. 撇 (piě)", desc: "ปัดโค้งซ้ายของ 女" },
        { path: "M 35 142 L 185 142", type: "横", name: "6. 横 (héng)", desc: "ขีดขวางยาวตัดฐาน" }
      ],
      "休": [
        { path: "M 75 45 C 60 75 40 110 25 130", type: "撇", name: "1. 撇 (piě)", desc: "ปัดซ้ายของ 亻" },
        { path: "M 58 88 L 58 185", type: "竖", name: "2. 竖 (shù)", desc: "ลากตั้งตรงของ 亻" },
        { path: "M 95 90 L 195 90", type: "横", name: "3. 横 (héng)", desc: "ขีดขวางของ 木" },
        { path: "M 145 42 L 145 190", type: "竖", name: "4. 竖 (shù)", desc: "ลากตั้งกลางของ 木" },
        { path: "M 140 92 C 120 125 98 155 78 178", type: "撇", name: "5. 撇 (piě)", desc: "ปัดซ้ายกิ่งไม้" },
        { path: "M 150 92 C 168 122 188 155 212 180", type: "捺", name: "6. 捺 (nà)", desc: "ลากลงขวากิ่งไม้" }
      ],
      "明": [
        { path: "M 42 70 L 42 160", type: "竖", name: "1. 竖 (shù)", desc: "ลากตั้งซ้าย 日" },
        { path: "M 42 70 L 98 70 L 98 160", type: "横折", name: "2. 横折 (héng zhé)", desc: "ขวางหักลง 日" },
        { path: "M 44 114 L 96 114", type: "横", name: "3. 横 (héng)", desc: "ขวางกลาง 日" },
        { path: "M 44 160 L 96 160", type: "横", name: "4. 横 (héng)", desc: "ขวางปิด 日" },
        { path: "M 132 50 C 130 90 126 140 110 180", type: "撇", name: "5. 撇 (piě)", desc: "ปัดซ้าย 月" },
        { path: "M 132 50 L 192 50 L 192 180 C 190 188 184 190 176 186", type: "横折钩", name: "6. 横折钩", desc: "ขวางหักขอ 月" },
        { path: "M 130 98 L 190 98", type: "横", name: "7. 横 (héng)", desc: "ขวางใน 月 บน" },
        { path: "M 128 140 L 190 140", type: "横", name: "8. 横 (héng)", desc: "ขวางใน 月 ล่าง" }
      ],
      "林": [
        { path: "M 32 90 L 105 90", type: "横", name: "1. 横 (héng)", desc: "ขีดขวาง 木 ซ้าย" },
        { path: "M 75 45 L 75 180", type: "竖", name: "2. 竖 (shù)", desc: "ลากตั้ง 木 ซ้าย" },
        { path: "M 70 92 C 55 122 40 152 25 172", type: "撇", name: "3. 撇 (piě)", desc: "ปัดซ้าย 木 ซ้าย" },
        { path: "M 80 110 L 105 130", type: "点", name: "4. 点 (diǎn)", desc: "แต้มขวา 木 ซ้าย" },
        { path: "M 122 86 L 202 86", type: "横", name: "5. 横 (héng)", desc: "ขีดขวาง 木 ขวา" },
        { path: "M 162 42 L 162 185", type: "竖", name: "6. 竖 (shù)", desc: "ลากตั้ง 木 ขวา" },
        { path: "M 158 88 C 142 120 125 152 108 178", type: "撇", name: "7. 撇 (piě)", desc: "ปัดซ้าย 木 ขวา" },
        { path: "M 166 88 C 180 120 198 152 216 178", type: "捺", name: "8. 捺 (nà)", desc: "ลากลงขวา 木 ขวา" }
      ],
      "吃": [
        { path: "M 38 75 L 38 155", type: "竖", name: "1. 竖 (shù)", desc: "ลากตั้ง 口" },
        { path: "M 38 75 L 95 75 L 95 155", type: "横折", name: "2. 横折 (héng zhé)", desc: "ขวางหัก 口" },
        { path: "M 40 155 L 95 155", type: "横", name: "3. 横 (héng)", desc: "ขวางปิด 口" },
        { path: "M 152 45 C 138 70 122 92 110 106", type: "撇", name: "4. 撇 (piě)", desc: "ปัดซ้าย 乞" },
        { path: "M 115 88 L 195 88", type: "横", name: "5. 横 (héng)", desc: "ขีดขวาง 乞" },
        { path: "M 132 90 L 132 130 L 188 130 L 188 172 C 188 180 180 184 170 180", type: "横折弯钩", name: "6. 横折弯钩", desc: "ขวางหักโค้งขอ 乞" }
      ],
      "炎": [
        { path: "M 75 55 L 65 72", type: "点", name: "1. 点 (diǎn)", desc: "แต้มซ้าย 火 บน" },
        { path: "M 145 55 L 155 72", type: "撇", name: "2. 撇 (piě)", desc: "ปัดขวา 火 บน" },
        { path: "M 110 32 C 105 58 92 88 75 105", type: "撇", name: "3. 撇 (piě)", desc: "ปัดกลางซ้าย 火 บน" },
        { path: "M 115 58 C 128 75 145 95 162 108", type: "捺", name: "4. 捺 (nà)", desc: "ลากลงขวา 火 บน" },
        { path: "M 65 135 L 55 155", type: "点", name: "5. 点 (diǎn)", desc: "แต้มซ้าย 火 ล่าง" },
        { path: "M 160 135 L 172 155", type: "撇", name: "6. 撇 (piě)", desc: "ปัดขวา 火 ล่าง" },
        { path: "M 110 110 C 102 142 85 178 58 198", type: "撇", name: "7. 撇 (piě)", desc: "ปัดกลางซ้าย 火 ล่าง" },
        { path: "M 115 140 C 135 165 165 188 195 200", type: "捺", name: "8. 捺 (nà)", desc: "ลากลงขวา 火 ล่าง" }
      ]
    };
  }

  setCanvas(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
  }

  loadCharacter(charKey) {
    if (!this.canvas && typeof document !== 'undefined') {
      this.canvas = document.getElementById("stroke-canvas");
      if (this.canvas) this.ctx = this.canvas.getContext('2d');
    }
    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[charKey] : null;
    this.currentChar = charKey;

    if (this.strokePathLibrary[charKey]) {
      this.strokes = this.strokePathLibrary[charKey];
    } else if (charData && charData.strokes) {
      this.strokes = charData.strokes.map((s, idx) => ({
        type: s.name,
        name: `${idx + 1}. ${s.name}`,
        desc: s.desc
      }));
    } else {
      // Fallback 4 strokes
      this.strokes = [
        { name: "1. โครงร่างส่วนบน", desc: "เริ่มเขียนจากบนลงล่าง" },
        { name: "2. โครงร่างส่วนกลาง", desc: "เขียนจากซ้ายไปขวา" },
        { name: "3. โครงสร้างฐาน", desc: "ตวัดเส้นฐานปิดท้าย" }
      ];
    }

    this.currentStep = this.strokes.length; // Default to fully completed view
    this.stop();
    this.draw();
  }

  play() {
    this.stop();
    this.isPlaying = true;
    this.currentStep = 0;
    this.draw();
    this.nextStepLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
      this.animationTimer = null;
    }
  }

  stepForward() {
    this.stop();
    if (this.currentStep < this.strokes.length) {
      this.currentStep++;
      if (window.AudioEngine) {
        window.AudioEngine.playToneChime(320 + this.currentStep * 40, 'triangle', 0.08);
      }
      this.draw();
    }
  }

  stepBackward() {
    this.stop();
    if (this.currentStep > 0) {
      this.currentStep--;
      this.draw();
    }
  }

  reset() {
    this.stop();
    this.currentStep = 0;
    this.draw();
  }

  nextStepLoop() {
    if (!this.isPlaying) return;

    this.draw();
    if (this.currentStep < this.strokes.length) {
      this.currentStep++;
      if (window.AudioEngine) {
        window.AudioEngine.playToneChime(320 + this.currentStep * 40, 'triangle', 0.08);
      }
      this.animationTimer = setTimeout(() => this.nextStepLoop(), 850);
    } else {
      this.isPlaying = false;
    }
  }

  draw() {
    if (!this.canvas && typeof document !== 'undefined') {
      this.canvas = document.getElementById("stroke-canvas");
      if (this.canvas) this.ctx = this.canvas.getContext('2d');
    }
    if (!this.canvas || !this.ctx) return;

    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Draw traditional Chinese Calligraphy Grid (米字格 - Mǐzìgé)
    this.drawGrid(ctx, w, h);

    // 2. Draw Ghost Character Watermark in Background
    ctx.save();
    ctx.fillStyle = 'rgba(210, 210, 215, 0.35)';
    ctx.font = `600 ${h * 0.72}px "Noto Serif SC", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.currentChar, w / 2, h / 2 + h * 0.04);
    ctx.restore();

    // 3. Draw Vector Strokes if defined in Library
    const pathStrokes = this.strokePathLibrary[this.currentChar];
    if (pathStrokes && pathStrokes.length > 0) {
      this.drawVectorStrokes(ctx, pathStrokes, w, h);
    } else {
      // 4. Fallback Progressive Progressive Font Drawing
      this.drawProgressiveFallback(ctx, w, h);
    }

    // Trigger UI text update
    if (this.onStepChange) {
      const activeStroke = this.strokes[this.currentStep - 1];
      this.onStepChange(this.currentStep, this.strokes.length, activeStroke);
    }
  }

  drawVectorStrokes(ctx, pathStrokes, w, h) {
    const scaleX = w / 220;
    const scaleY = h / 220;

    pathStrokes.forEach((st, idx) => {
      const stepIdx = idx + 1;
      
      // If stroke is before or at currentStep, draw it
      if (stepIdx <= this.currentStep) {
        ctx.save();
        ctx.scale(scaleX, scaleY);
        
        const path2d = new Path2D(st.path);
        
        ctx.lineWidth = 14;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // If this is the active stroke just drawn, highlight in Vermilion Red!
        if (stepIdx === this.currentStep && this.currentStep < pathStrokes.length) {
          ctx.strokeStyle = '#d33828'; // Vermilion Red highlight
          ctx.shadowColor = 'rgba(211, 56, 40, 0.4)';
          ctx.shadowBlur = 8;
        } else {
          ctx.strokeStyle = '#1c1c1e'; // Solid Ink Black
        }

        ctx.stroke(path2d);
        ctx.restore();
      }
    });
  }

  drawProgressiveFallback(ctx, w, h) {
    if (this.currentStep === 0) return;

    ctx.save();
    const total = this.strokes.length || 1;
    const progress = this.currentStep / total;

    // Progressive clipping mask from top-left to bottom-right
    ctx.beginPath();
    ctx.rect(0, 0, w * Math.min(progress * 1.25, 1.0), h * Math.min(progress * 1.25, 1.0));
    ctx.clip();

    ctx.font = `600 ${h * 0.72}px "Noto Serif SC", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.currentStep === total ? '#1c1c1e' : '#d33828';
    ctx.fillText(this.currentChar, w / 2, h / 2 + h * 0.04);
    ctx.restore();
  }

  drawGrid(ctx, w, h) {
    ctx.save();
    ctx.strokeStyle = 'rgba(211, 56, 40, 0.18)'; // Vermilion red grid lines
    ctx.lineWidth = 1;

    // Outer border
    ctx.strokeRect(2, 2, w - 4, h - 4);

    // Cross dashed lines (+)
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);

    // Diagonal dashed lines (X)
    ctx.moveTo(0, 0);
    ctx.lineTo(w, h);
    ctx.moveTo(w, 0);
    ctx.lineTo(0, h);
    ctx.stroke();

    ctx.restore();
  }
}

window.StrokeAnimator = StrokeAnimator;
