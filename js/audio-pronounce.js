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

    // Polyphone Context Map (ขยายเพื่อรองรับวรรณยุกต์และบริบทเสียงอ่านมาตรฐาน)
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
      "相 xiàng": "照相",
      "了 le": "吃了",
      "了 liǎo": "了解",
      "一 yī": "第一",
      "一 yí": "一个",
      "一 yì": "一天",
      "不 bù": "不好",
      "不 bú": "不是",
      "不 bu": "对不起",
      "少 shǎo": "多少",
      "少 shào": "少年",
      "差 chà": "差不多",
      "差 chā": "差别",
      "差 chāi": "出差",
      "血 xuè": "血液",
      "血 xiě": "流血"
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
      // Neutral Tone (轻声): Dynamic pitch conditioned by preceding syllable contour
      // Default: short mid-low contour (Chao 31 / 21)
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
 * รองรับ:
 * 1. กฎเสียง 3 ติดกันหลายพยางค์ (3+3 ➔ 2+3, 3+3+3 ➔ 2+2+3, 3+3+3+3 ➔ 2+2+2+3)
 * 2. กฎการผันเสียง "不" ทั่วทั้งวลี (นำหน้าเสียง 4 ➔ bú, เสียงเบา bu ในโครงสร้างคู่กริยา/บอกผล/คำถาม)
 * 3. กฎการผันเสียง "一" พร้อมข้อยกเว้นสมบูรณ์ (ตัวเลขลำดับ 第, เดือน 一月, วัน/สัปดาห์, ตัวเลขโดด, คำซ้ำกริยา 看一看 ➔ yi)
 */
class ToneSandhiEngine {
  /**
   * Extract tone number (1..5) from pinyin syllable
   * @param {string} syllable
   * @returns {number} 1, 2, 3, 4, or 5 (neutral)
   */
  static getTone(syllable) {
    if (!syllable) return 5;
    const s = syllable.toLowerCase();
    if (/[āēīōūǖ]/.test(s)) return 1;
    if (/[áéíóúǘ]/.test(s)) return 2;
    if (/[ǎěǐǒǔǚ]/.test(s)) return 3;
    if (/[àèìòùǜ]/.test(s)) return 4;
    return 5; // neutral tone
  }

  /**
   * Change tone of a syllable to target tone (1..5)
   * @param {string} syllable
   * @param {number} targetTone
   * @returns {string}
   */
  static changeTone(syllable, targetTone) {
    if (!syllable) return "";
    const toneMaps = {
      "a": ["a", "ā", "á", "ǎ", "à"],
      "e": ["e", "ē", "é", "ě", "è"],
      "i": ["i", "ī", "í", "ǐ", "ì"],
      "o": ["o", "ō", "ó", "ǒ", "ò"],
      "u": ["u", "ū", "ú", "ǔ", "ù"],
      "ü": ["ü", "ǖ", "ǘ", "ǚ", "ǜ"],
      "v": ["ü", "ǖ", "ǘ", "ǚ", "ǜ"]
    };

    let base = syllable;
    const vowels = [
      ["ā","a"],["á","a"],["ǎ","a"],["à","a"],
      ["ē","e"],["é","e"],["ě","e"],["è","e"],
      ["ī","i"],["í","i"],["ǐ","i"],["ì","i"],
      ["ō","o"],["ó","o"],["ǒ","o"],["ò","o"],
      ["ū","u"],["ú","u"],["ǔ","u"],["ù","u"],
      ["ǖ","ü"],["ǘ","ü"],["ǚ","ü"],["ǜ","ü"]
    ];

    let matchedBaseVowel = null;
    let matchedDiacritic = null;
    for (const [dia, b] of vowels) {
      if (base.includes(dia)) {
        matchedBaseVowel = b;
        matchedDiacritic = dia;
        break;
      }
    }

    if (!matchedDiacritic) {
      const order = ["a", "o", "e", "iu", "ui", "i", "u", "ü", "v"];
      for (const v of order) {
        if (v === "iu") {
          if (base.includes("iu")) return base.replace("u", toneMaps["u"][targetTone]);
        } else if (v === "ui") {
          if (base.includes("ui")) return base.replace("i", toneMaps["i"][targetTone]);
        } else if (base.includes(v)) {
          return base.replace(v, toneMaps[v][targetTone]);
        }
      }
      return syllable;
    }

    if (targetTone === 5 || targetTone === 0) {
      return base.replace(matchedDiacritic, matchedBaseVowel);
    }

    return base.replace(matchedDiacritic, toneMaps[matchedBaseVowel][targetTone]);
  }

  /**
   * Calculate spoken pinyin and sandhi rules for Chinese words/phrases
   * @param {string} chinese Chinese characters e.g. "我很好", "我不去", "对不起", "一月", "第一"
   * @param {string} rawPinyin Dictionary pinyin e.g. "wǒ hěn hǎo", "wǒ bù qù", "duì bù qǐ", "yī yuè"
   * @returns {Object} { spokenPinyin, hasSandhi, ruleName, explanation }
   */
  static analyzeSandhi(chinese, rawPinyin) {
    if (!chinese || !rawPinyin) return { spokenPinyin: rawPinyin || "", hasSandhi: false, ruleName: "", explanation: "" };

    const chars = Array.from(chinese.trim());
    const syllables = rawPinyin.trim().split(/\s+/);
    if (chars.length !== syllables.length) {
      return { spokenPinyin: rawPinyin, hasSandhi: false, ruleName: "", explanation: "" };
    }

    const tones = syllables.map(s => this.getTone(s));
    const spoken = [...syllables];
    let changed = false;
    let ruleName = "";
    let explanation = "";

    // 1. Neutral tone "bu" in complement / A-not-A patterns (对不起, 差不多, 看不起, 好不好, 是不是, 去不去...)
    const neutralBuPhrases = ["对不起", "差不多", "看不起", "了不起", "买不起", "吃不下", "好不好", "是不是", "去不去", "行不行", "能不能", "会不会", "做不到", "来不及", "说不定"];
    if (neutralBuPhrases.some(p => chinese.includes(p))) {
      chars.forEach((c, idx) => {
        if (c === "不" && idx > 0 && idx < chars.length - 1) {
          spoken[idx] = "bu";
          tones[idx] = 5;
          changed = true;
          ruleName = "กฎเสียงเบา 'bu' ในโครงสร้างคู่กริยา/คำถาม";
          explanation = "'不' ในโครงสร้างบอกผลหรือคำถามคู่กริยาออกเสียงเบา (bu)";
        }
      });
    }

    // 2. Multi-syllable 3rd-tone chains (3+3 -> 2+3, 3+3+3 -> 2+2+3, 3+3+3+3 -> 2+2+2+3)
    let i = 0;
    while (i < tones.length) {
      if (tones[i] === 3) {
        let j = i;
        while (j < tones.length && tones[j] === 3) j++;
        const chainLen = j - i;
        if (chainLen >= 2) {
          for (let k = i; k < j - 1; k++) {
            spoken[k] = this.changeTone(spoken[k], 2);
            tones[k] = 2;
            changed = true;
            ruleName = ruleName || (chainLen === 2 ? "กฎเสียง 3+3 ➔ 2+3" : `กฎเสียง 3 ติดกัน (${chainLen} พยางค์)`);
            explanation = explanation || (chainLen === 2 ? `เสียง 3 สองพยางค์ติดกัน พยางค์แรกเปลี่ยนเป็นเสียง 2 (จาก '${syllables[i]}' ออกเสียงเป็น '${spoken[i]}')` : `เสียง 3 ติดกัน ${chainLen} พยางค์ พยางค์ข้างหน้าเปลี่ยนเป็นเสียง 2`);
          }
        }
        i = j;
      } else {
        i++;
      }
    }

    // 3. "不" (bù) Sandhi: before Tone 4 -> bú anywhere in the phrase
    for (let k = 0; k < chars.length; k++) {
      if (chars[k] === "不" && spoken[k] !== "bu") {
        if (k + 1 < tones.length && tones[k + 1] === 4) {
          spoken[k] = "bú";
          tones[k] = 2;
          changed = true;
          ruleName = ruleName || "กฎการผันเสียง '不' (bù ➔ bú)";
          explanation = explanation || "'不' นำหน้าพยางค์เสียงที่ 4 จะเปลี่ยนเป็นเสียงที่ 2 'bú'";
        }
      }
    }

    // 4. "一" (yī) Sandhi & Exemptions
    for (let k = 0; k < chars.length; k++) {
      if (chars[k] === "一") {
        // Exemptions:
        // - Ordinal: preceded by 第
        const isOrdinal = (k > 0 && chars[k - 1] === "第");
        // - Month: followed by 月 unless preceded by 个 (e.g. 一月 vs 一个月)
        const isMonth = (k + 1 < chars.length && chars[k + 1] === "月" && (k === 0 || chars[k - 1] !== "个"));
        // - Calendar / Digit / Day: preceded by 周, 期, 拜, 初, 十, 百, 千
        const isCalendarOrDigit = (k > 0 && ["周", "期", "拜", "初", "十", "百", "千"].some(x => chars[k - 1] === x));
        // - Trailing composite word: 统一, 专一, 划一, 合一, 唯一
        const isTrailingComposite = (k === chars.length - 1 && chars.length > 1 && ["统", "专", "划", "合", "唯", "第"].some(x => chars[k - 1] === x));

        if (isOrdinal || isMonth || isCalendarOrDigit || isTrailingComposite) {
          spoken[k] = "yī";
          tones[k] = 1;
          continue;
        }

        // Reduplicated verb infix (看一看 kàn yi kàn, 试一试 shì yi shì)
        if (k > 0 && k + 1 < chars.length && chars[k - 1] === chars[k + 1]) {
          spoken[k] = "yi";
          tones[k] = 5;
          changed = true;
          ruleName = ruleName || "กฎแทรก '一' ระหว่างกริยาซ้ำ (เสียงเบา yi)";
          explanation = explanation || "'一' ระหว่างคำกริยาซ้ำสองคำจะออกเสียงเบาเป็น 'yi'";
          continue;
        }

        // Standard 一 sandhi
        if (k + 1 < tones.length) {
          const nextTone = tones[k + 1];
          if (nextTone === 4) {
            spoken[k] = "yí";
            tones[k] = 2;
            changed = true;
            ruleName = ruleName || "กฎการผันเสียง '一' (yī ➔ yí)";
            explanation = explanation || "'一' นำหน้าพยางค์เสียงที่ 4 จะเปลี่ยนเป็นเสียงที่ 2 'yí'";
          } else if (nextTone >= 1 && nextTone <= 3) {
            spoken[k] = "yì";
            tones[k] = 4;
            changed = true;
            ruleName = ruleName || "กฎการผันเสียง '一' (yī ➔ yì)";
            explanation = explanation || "'一' นำหน้าพยางค์เสียงที่ 1, 2, 3 จะเปลี่ยนเป็นเสียงที่ 4 'yì'";
          }
        }
      }
    }

    return {
      spokenPinyin: spoken.join(" "),
      hasSandhi: changed,
      ruleName: ruleName || "",
      explanation: explanation || ""
    };
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
}

if (typeof window !== 'undefined') {
  window.AudioEngine = new AudioPronounceEngine();
  window.ToneSandhiEngine = ToneSandhiEngine;
}

