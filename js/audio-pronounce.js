/**
 * Audio Pronunciation & Tone Visualizer Engine (Rock-Solid Multi-Tab Stability)
 * จำจีน (JumJeen) - ระบบเสียงอ่านภาษาจีนกลางมาตรฐาน ป้องกันการค้างข้ามแท็บ 100%
 */

class AudioPronounceEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.mandarinVoice = null;
    this.audioCtx = null;
    this.currentRate = 0.9;
    this.activeUtterances = new Set(); // Prevent browser garbage collection bug

    // Radical Pronunciation Map (สำหรับรูปข้างและรากศัพท์ที่ระบบ TTS ทั่วไปอ่านไม่ออก)
    this.radicalPronounceMap = {
      "氵": "水",
      "讠": "言",
      "钅": "金",
      "辶": "走",
      "饣": "食",
      "亻": "人",
      "忄": "心",
      "扌": "手",
      "犭": "犬",
      "灬": "火",
      "艹": "草",
      "⺮": "竹",
      "衤": "衣",
      "冫": "冰",
      "冖": "密",
      "宀": "宝",
      "冂": "同",
      "勹": "包",
      "匚": "方",
      "匸": "系",
      "丨": "滚",
      "丶": "主",
      "丿": "撇",
      "亅": "决",
      "亠": "头",
      "彳": "赤",
      "彡": "衫",
      "彐": "继",
      "尢": "汪",
      "尸": "尸",
      "屮": "彻",
      "幺": "腰",
      "广": "广",
      "廴": "引",
      "廾": "拱",
      "弋": "意",
      "攴": "扑",
      "殳": "书",
      "毋": "母",
      "爿": "墙",
      "片": "片",
      "疋": "匹",
      "疒": "病",
      "癶": "播",
      "皿": "敏",
      "矛": "矛",
      "矢": "矢",
      "示": "示",
      "礻": "示",
      "禸": "柔",
      "缶": "否",
      "罒": "网",
      "耂": "老",
      "耒": "磊",
      "聿": "玉",
      "臣": "臣",
      "臼": "就",
      "舛": "喘",
      "艮": "根",
      "虍": "呼",
      "豕": "史",
      "豸": "治",
      "釆": "变",
      "隹": "追",
      "韋": "韦",
      "韦": "韦",
      "韭": "九",
      "鬯": "唱",
      "鬲": "立",
      "鹵": "卤",
      "卤": "卤",
      "黍": "鼠",
      "黹": "纸",
      "黽": "黾",
      "黾": "黾",
      "鼎": "顶",
      "鼓": "鼓",
      "齊": "齐",
      "齐": "齐",
      "齒": "齿",
      "齿": "齿",
      "龍": "龙",
      "龙": "龙",
      "龜": "龟",
      "龟": "龟",
      "龠": "月"
    };

    // Polyphone Context Map
    this.polyphoneContextMap = {
      "好 hǎo": "很好",
      "好 hào": "爱好",
      "得 dé": "得到",
      "得 de": "走得快",
      "得 děi": "你得去",
      "行 xíng": "可以行",
      "行 háng": "银行",
      "地 dì": "土地",
      "地 de": "慢慢地",
      "重 zhòng": "重量",
      "重 chóng": "重新",
      "长 cháng": "长江",
      "长 zhǎng": "长大",
      "着 zhe": "看着",
      "着 zháo": "着急",
      "着 zhuó": "着手",
      "没 méi": "没有",
      "没 mò": "淹没",
      "发 fā": "发现",
      "发 fà": "头发",
      "相 xiāng": "互相",
      "相 xiàng": "照相"
    };

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;
    
    const updateVoices = () => {
      this.voices = this.synth.getVoices();
      
      const mandarinVoices = this.voices.filter(v => {
        const lang = (v.lang || '').replace('_', '-');
        const isChinese = lang.startsWith('zh');
        const isCantonese = lang.includes('HK') || lang.includes('yue') || 
          (v.name && (v.name.includes('Cantonese') || v.name.includes('Hong Kong') || v.name.includes('Sin-ji')));
        return isChinese && !isCantonese;
      });

      this.mandarinVoice = mandarinVoices.find(v => v.name.includes('Tingting') || v.name.includes('Xiaoxiao') || v.name.includes('Natural')) 
        || mandarinVoices.find(v => v.lang === 'zh-CN' || v.lang === 'zh-Hans') 
        || mandarinVoices[0] 
        || this.voices.find(v => (v.lang || '').startsWith('zh')) 
        || null;
    };

    updateVoices();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = updateVoices;
    }
  }

  getAudioContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  /**
   * Speak Chinese text with guaranteed browser stability & unfreezing
   */
  speak(text, rate = null, onEnd = null) {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    // Unfreeze speech synthesis engine if browser locked it
    if (this.synth.paused) {
      this.synth.resume();
    }
    this.synth.cancel();

    // Resolve target text
    let targetText = String(text || '').trim();

    if (this.polyphoneContextMap[targetText]) {
      targetText = this.polyphoneContextMap[targetText];
    } else if (this.radicalPronounceMap[targetText]) {
      targetText = this.radicalPronounceMap[targetText];
    } else {
      // Remove Latin Pinyin if mixed to prevent spelling letters
      const chineseOnly = targetText.match(/[\u4e00-\u9fa5]+/g);
      if (chineseOnly && chineseOnly.length > 0) {
        targetText = chineseOnly.join('');
      }
    }

    if (!targetText) {
      if (onEnd) onEnd();
      return;
    }

    // Refresh voices if list was empty initially
    if (!this.mandarinVoice && this.voices.length === 0) {
      this.initVoices();
    }

    const utterance = new SpeechSynthesisUtterance(targetText);
    utterance.lang = 'zh-CN';
    
    if (this.mandarinVoice) {
      utterance.voice = this.mandarinVoice;
    }
    
    utterance.rate = rate || this.currentRate;
    utterance.pitch = 1.0;

    // Retain strong reference to prevent GC freeze bug
    this.activeUtterances.add(utterance);

    const cleanup = () => {
      this.activeUtterances.delete(utterance);
      if (onEnd) onEnd();
    };

    utterance.onend = cleanup;
    utterance.onerror = (e) => {
      console.warn("Speech synthesis notice:", e);
      cleanup();
    };

    try {
      this.synth.speak(utterance);
      this.playToneChime(120);
    } catch (err) {
      console.warn("Audio speech error:", err);
      cleanup();
    }
  }

  playToneChime(freq = 440, type = 'sine', duration = 0.12) {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  playSuccessSound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.frequency.setValueAtTime(523.25, now);
      osc1.frequency.setValueAtTime(659.25, now + 0.1);
      osc2.frequency.setValueAtTime(783.99, now + 0.2);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.2);
      osc2.start(now + 0.2);
      osc2.stop(now + 0.4);
    } catch (e) {}
  }

  drawTonePitchCurve(canvas, toneNumber, activeProgress = 1.0) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    const padX = 24;
    const padY = 16;
    const drawW = w - padX * 2;
    const drawH = h - padY * 2;

    const pitchToY = (level) => padY + drawH * (1 - (level - 1) / 4);

    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 4]);

    for (let level = 1; level <= 5; level++) {
      const y = pitchToY(level);
      ctx.beginPath();
      ctx.moveTo(padX, y);
      ctx.lineTo(w - padX, y);
      ctx.stroke();

      ctx.fillStyle = '#9ca3af';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(level.toString(), padX - 6, y);
    }
    ctx.setLineDash([]);

    const toneColors = {
      1: '#e11d48',
      2: '#059669',
      3: '#2563eb',
      4: '#d97706',
      5: '#6b7280'
    };
    const color = toneColors[toneNumber] || '#2563eb';

    let points = [];
    if (toneNumber === 1) {
      points = [
        { x: padX, y: pitchToY(5) },
        { x: padX + drawW * 0.5, y: pitchToY(5) },
        { x: padX + drawW, y: pitchToY(5) }
      ];
    } else if (toneNumber === 2) {
      points = [
        { x: padX, y: pitchToY(3.2) },
        { x: padX + drawW * 0.45, y: pitchToY(3.6) },
        { x: padX + drawW, y: pitchToY(5) }
      ];
    } else if (toneNumber === 3) {
      points = [
        { x: padX, y: pitchToY(2.1) },
        { x: padX + drawW * 0.4, y: pitchToY(1.0) },
        { x: padX + drawW * 0.7, y: pitchToY(1.8) },
        { x: padX + drawW, y: pitchToY(4.0) }
      ];
    } else if (toneNumber === 4) {
      points = [
        { x: padX, y: pitchToY(5.0) },
        { x: padX + drawW * 0.35, y: pitchToY(3.2) },
        { x: padX + drawW, y: pitchToY(1.0) }
      ];
    } else {
      // Neutral Tone (轻声 Chao 31): short light falling contour
      points = [
        { x: padX + drawW * 0.35, y: pitchToY(3.0) },
        { x: padX + drawW * 0.65, y: pitchToY(1.5) }
      ];
    }

    if (points.length < 2) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(points[0].x, points[0].y, 6, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev.x + curr.x) / 2;
      const cy = (prev.y + curr.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
    }
    const last = points[points.length - 1];
    ctx.lineTo(last.x, last.y);

    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.arc(points[0].x, points[0].y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(last.x, last.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

/**
 * Mandarin Tone Sandhi Realization Engine (ระบบคำนวณการผันเสียงวรรณยุกต์ตามสัทศาสตร์จริง)
 */
class ToneSandhiEngine {
  /**
   * Calculate spoken pinyin and sandhi rules for Chinese words/phrases
   * @param {string} chinese Chinese characters e.g. "你好", "不是", "一个"
   * @param {string} rawPinyin Dictionary pinyin e.g. "nǐ hǎo", "bù shì", "yī gè"
   * @returns {Object} { spokenPinyin, hasSandhi, ruleName, explanation }
   */
  static analyzeSandhi(chinese, rawPinyin) {
    if (!chinese || !rawPinyin) return { spokenPinyin: rawPinyin || "", hasSandhi: false };

    const syllables = rawPinyin.trim().split(/\s+/);
    const chars = Array.from(chinese.trim());

    // 1. Double 3rd tone rule (เสียง 3 + 3 ➔ 2 + 3) e.g. 你好 (nǐ hǎo ➔ ní hǎo), 很好 (hěn hǎo ➔ hén hǎo)
    if (syllables.length === 2 && this.getTone(syllables[0]) === 3 && this.getTone(syllables[1]) === 3) {
      const changedSyllable = this.changeTone(syllables[0], 2);
      const spoken = `${changedSyllable} ${syllables[1]}`;
      return {
        spokenPinyin: spoken,
        hasSandhi: true,
        ruleName: "กฎเสียง 3+3 ➔ 2+3",
        explanation: `เสียง 3 สองพยางค์ติดกัน พยางค์แรกเปลี่ยนเป็นเสียง 2 (จาก '${syllables[0]}' ออกเสียงเป็น '${changedSyllable}')`
      };
    }

    // 2. "不" (bù) rule: Before Tone 4, "不" changes from 4th tone to 2nd tone (bú)
    if (chars.length >= 2 && chars[0] === "不" && syllables.length >= 2) {
      const secondTone = this.getTone(syllables[1]);
      if (secondTone === 4) {
        const spoken = syllables.map((s, idx) => idx === 0 ? "bú" : s).join(" ");
        return {
          spokenPinyin: spoken,
          hasSandhi: true,
          ruleName: "กฎการผันเสียง '不' (bù ➔ bú)",
          explanation: "'不' นำหน้าพยางค์เสียงที่ 4 จะเปลี่ยนเป็นเสียงที่ 2 'bú' (เช่น 不是 ➔ bú shì)"
        };
      }
    }

    // 3. "一" (yī) rule:
    // Before Tone 4: "一" becomes 2nd tone (yí) e.g. 一个 ➔ yí gè, 一样 ➔ yí yàng
    // Before Tone 1, 2, 3: "一" becomes 4th tone (yì) e.g. 一天 ➔ yì tiān, 一起 ➔ yì qǐ
    if (chars.length >= 2 && chars[0] === "一" && syllables.length >= 2) {
      const secondTone = this.getTone(syllables[1]);
      if (secondTone === 4) {
        const spoken = syllables.map((s, idx) => idx === 0 ? "yí" : s).join(" ");
        return {
          spokenPinyin: spoken,
          hasSandhi: true,
          ruleName: "กฎการผันเสียง '一' (yī ➔ yí)",
          explanation: "'一' นำหน้าพยางค์เสียงที่ 4 จะเปลี่ยนเป็นเสียงที่ 2 'yí' (เช่น 一个 ➔ yí gè)"
        };
      } else if (secondTone >= 1 && secondTone <= 3) {
        const spoken = syllables.map((s, idx) => idx === 0 ? "yì" : s).join(" ");
        return {
          spokenPinyin: spoken,
          hasSandhi: true,
          ruleName: "กฎการผันเสียง '一' (yī ➔ yì)",
          explanation: `'一' นำหน้าพยางค์เสียง 1, 2 หรือ 3 จะเปลี่ยนเป็นเสียงที่ 4 'yì' (เช่น 一起 ➔ yì qǐ)`
        };
      }
    }

    return { spokenPinyin: rawPinyin, hasSandhi: false, ruleName: "", explanation: "" };
  }

  /**
   * Convenience wrapper to get spoken pinyin directly
   * @param {string} chinese
   * @param {string} rawPinyin
   * @returns {string}
   */
  static calculateSpokenPinyin(chinese, rawPinyin) {
    const res = this.analyzeSandhi(chinese, rawPinyin);
    return res ? res.spokenPinyin : (rawPinyin || "");
  }

  static getTone(syllable) {
    if (!syllable) return 0;
    if (/[āēīōūǖ]/.test(syllable)) return 1;
    if (/[áéíóúǘ]/.test(syllable)) return 2;
    if (/[ǎěǐǒǔǚ]/.test(syllable)) return 3;
    if (/[àèìòùǜ]/.test(syllable)) return 4;
    return 0; // neutral tone
  }

  static changeTone(syllable, targetTone) {
    const toneMaps = {
      'ǎ': ['a', 'ā', 'á', 'ǎ', 'à'],
      'ě': ['e', 'ē', 'é', 'ě', 'è'],
      'ǐ': ['i', 'ī', 'í', 'ǐ', 'ì'],
      'ǒ': ['o', 'ō', 'ó', 'ǒ', 'ò'],
      'ǔ': ['u', 'ū', 'ú', 'ǔ', 'ù'],
      'ǚ': ['ü', 'ǖ', 'ǘ', 'ǚ', 'ǜ']
    };
    for (const [t3Char, forms] of Object.entries(toneMaps)) {
      if (syllable.includes(t3Char)) {
        return syllable.replace(t3Char, forms[targetTone]);
      }
    }
    return syllable;
  }
}

if (typeof window !== 'undefined') {
  window.AudioEngine = new AudioPronounceEngine();
  window.ToneSandhiEngine = ToneSandhiEngine;
}
