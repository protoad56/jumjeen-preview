/**
 * Radical Fusion Workshop & Memory Alchemy Game
 * จำจีน (JumJeen) - ห้องทดลองปรุงอักษรจีนจากรากศัพท์
 */

class RadicalFusionGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.slot1 = null;
    this.slot2 = null;
    this.currentCategory = "popular";
    this.searchKeyword = "";
    this.unlockedChars = new Set(["好", "明"]); // Default unlocked

    // Comprehensive Fusion Recipes Database (70+ Combinations)
    this.recipes = [
      // 女 (Woman / Female)
      { comp1: "女", comp2: "子", result: "好", story: "แม่ (女) + ลูก (子) = ความสุขและความดีงาม (好)" },
      { comp1: "女", comp2: "马", result: "妈", story: "ผู้หญิง (女) + ม้า (马 mǎ) = คุณแม่ (妈 mā)" },
      { comp1: "宀", comp2: "女", result: "安", story: "หลังคาบ้าน (宀) + ผู้หญิง (女) = ปลอดภัยและสงบสุข (安)" },
      { comp1: "女", comp2: "少", result: "妙", story: "ผู้หญิง (女) + อ่อนวัย (少) = มหัศจรรย์/ยอดเยี่ยม (妙)" },
      { comp1: "女", comp2: "生", result: "姓", story: "ผู้หญิง (女) + ให้กำเนิด (生) = นามสกุล/แซ่ (姓)" },
      { comp1: "女", comp2: "且", result: "姐", story: "ผู้หญิง (女) + เสาบรรพบุรุษ (且) = พี่สาว (姐)" },
      { comp1: "女", comp2: "未", result: "妹", story: "ผู้หญิง (女) + ยังไม่โต (未) = น้องสาว (妹)" },
      { comp1: "女", comp2: "口", result: "如", story: "ผู้หญิง (女) + ปาก (口) = ดั่งเช่น/เป็นไปตาม (如)" },

      // 亻 / 人 (Human / Person)
      { comp1: "亻", comp2: "木", result: "休", story: "คน (亻) + พิงต้นไม้ (木) = พักผ่อน (休)" },
      { comp1: "亻", comp2: "也", result: "他", story: "คน (亻) + สิ่งอื่น (也) = เขา (他)" },
      { comp1: "亻", comp2: "门", result: "们", story: "คน (亻) + ประตู (门) = พวกเรา/พวกเขา (们)" },
      { comp1: "亻", comp2: "尔", result: "你", story: "คน (亻) + เธอ (尔) = เธอ/คุณ (你)" },
      { comp1: "亻", comp2: "故", result: "做", story: "คน (亻) + กิจธุระ (故) = ลงมือทำ (做)" },
      { comp1: "亻", comp2: "乍", result: "作", story: "คน (亻) + มีดตัด (乍) = ประดิษฐ์/ทำงาน (作)" },
      { comp1: "亻", comp2: "牛", result: "件", story: "คน (亻) + ผ่าชิ้นเนื้อวัว (牛) = ชิ้น/เรื่อง (件)" },
      { comp1: "人", comp2: "王", result: "全", story: "คน (人) + กษัตริย์ (王) = สมบูรณ์/ทั้งหมด (全)" },

      // 日 & 月 (Sun & Moon)
      { comp1: "日", comp2: "月", result: "明", story: "พระอาทิตย์ (日) + พระจันทร์ (月) = สว่างไสวแจ่มแจ้ง (明)" },
      { comp1: "日", comp2: "十", result: "早", story: "พระอาทิตย์ (日) + สิบ (十) = ยามเช้า (早)" },
      { comp1: "日", comp2: "生", result: "星", story: "พระอาทิตย์ (日) + ให้กำเนิด (生) = ดวงดาว (星)" },
      { comp1: "日", comp2: "日", result: "晶", story: "พระอาทิตย์ 3 ดวงส่องประกาย (日+日) = ผลึกแก้วระยิบระยับ (晶)" },

      // 木 (Tree / Wood)
      { comp1: "木", comp2: "木", result: "林", story: "ต้นไม้ (木) + ต้นไม้ (木) = ป่าไม้ (林)" },
      { comp1: "木", comp2: "林", result: "森", story: "ต้นไม้ (木) + ป่าไม้ (林) = ป่าดงดิบทึบ (森)" },
      { comp1: "木", comp2: "寸", result: "村", story: "ต้นไม้ (木) + ก้าวเดิน (寸) = หมู่บ้าน (村)" },
      { comp1: "木", comp2: "反", result: "板", story: "ต้นไม้ (木) + แผ่นเรียบ (反) = ไม้กระดาน (板)" },
      { comp1: "木", comp2: "果", result: "棵", story: "ต้นไม้ (木) + ผลไม้ (果) = ต้น (棵)" },
      { comp1: "木", comp2: "不", result: "杯", story: "ไม้ (木) + ไม่คว่ำ (不) = ถ้วย/แก้วน้ำ (杯)" },

      // 火 / 灬 (Fire)
      { comp1: "火", comp2: "火", result: "炎", story: "เปลวไฟ (火) + เปลวไฟ (火) = ร้อนจัดลุกโชน (炎)" },
      { comp1: "火", comp2: "丁", result: "灯", story: "ไฟ (火) + ปักหมุด (丁) = ตะเกียง/โคมไฟ (灯)" },
      { comp1: "火", comp2: "因", result: "烟", story: "ไฟ (火) + ล้อมกรอบ (因) = ควันไฟ (烟)" },
      { comp1: "火", comp2: "少", result: "炒", story: "ไฟ (火) + เล็กน้อย (少) = ผัดอาหาร (炒)" },
      { comp1: "火", comp2: "包", result: "炮", story: "ไฟ (火) + ห่อหุ้ม (包) = ปืนใหญ่/ประทัด (炮)" },
      { comp1: "禾", comp2: "火", result: "秋", story: "รวงข้าว (禾) + สีเปลวไฟ (火) = ฤดูใบไม้ร่วง (秋)" },

      // 口 (Mouth)
      { comp1: "口", comp2: "乞", result: "吃", story: "อ้าปาก (口) + ขอกลืน (乞) = กินอาหาร (吃)" },
      { comp1: "口", comp2: "十", result: "古", story: "ปากบอกเล่า (口) + สิบรุ่น (十) = โบราณกาล (古)" },
      { comp1: "口", comp2: "鸟", result: "鸣", story: "ปาก (口) + นก (鸟) = นกร้องขับขาน (鸣)" },
      { comp1: "口", comp2: "天", result: "吞", story: "อ้าปาก (口) + ใหญ่เท่าฟ้า (天) = กลืนกิน (吞)" },
      { comp1: "门", comp2: "口", result: "问", story: "หน้าประตู (门) + เอ่ยปาก (口) = ถามไถ่ (问)" },

      // 氵 (Water)
      { comp1: "氵", comp2: "水", result: "淼", story: "สายน้ำ (氵) + น้ำ (水) = ผืนน้ำเวิ้งว้าง (淼)" },
      { comp1: "氵", comp2: "青", result: "清", story: "สายน้ำ (氵) + เขียวสด (青) = ใสสะอาดบริสุทธิ์ (清)" },
      { comp1: "氵", comp2: "每", result: "海", story: "สายน้ำ (氵) + ทุกๆ แหล่ง (每) = ทะเลกว้างใหญ่ (海)" },
      { comp1: "氵", comp2: "工", result: "江", story: "สายน้ำ (氵) + งานขุด (工) = แม่น้ำแยงซีเกียง (江)" },
      { comp1: "氵", comp2: "可", result: "河", story: "สายน้ำ (氵) + ลำธาร (可) = แม่น้ำฮวงโห (河)" },

      // 讠 (Speech / Language)
      { comp1: "讠", comp2: "舌", result: "话", story: "คำพูด (讠) + ลิ้น (舌) = คำพูด/บทสนทนา (话)" },
      { comp1: "讠", comp2: "吾", result: "语", story: "คำพูด (讠) + ตัวเรา (吾) = ภาษา (语)" },
      { comp1: "讠", comp2: "十", result: "计", story: "คำพูด (讠) + ตัวเลขสิบ (十) = วางแผน/คำนวณ (计)" },
      { comp1: "讠", comp2: "兑", result: "说", story: "คำพูด (讠) + รอยยิ้มเบิกบาน (兑) = พูดจา (说)" },
      { comp1: "讠", comp2: "卖", result: "读", story: "คำพูด (讠) + ต่อเนื่อง (卖) = อ่านหนังสือ (读)" },

      // 钅 (Metal / Gold)
      { comp1: "钅", comp2: "戋", result: "钱", story: "โลหะ (钅) + หอกเล็กมีค่า (戋) = เงินตรา/ทอง (钱)" },
      { comp1: "钅", comp2: "童", result: "钟", story: "โลหะ (钅) + เสียงดังก้อง (童) = ระฆัง/นาฬิกา (钟)" },
      { comp1: "钅", comp2: "昔", result: "错", story: "โลหะ (钅) + รอยสลักเก่า (昔) = ผิดพลาด (错)" },
      { comp1: "钅", comp2: "艮", result: "银", story: "โลหะ (钅) + ดวงตาแวววาว (艮) = แร่เงินบริสุทธิ์ (银)" },
      { comp1: "钅", comp2: "十", result: "针", story: "โลหะ (钅) + ปลายแหลมสิบ (十) = เข็มเย็บผ้า (针)" },

      // 辶 (Walking / Movement)
      { comp1: "辶", comp2: "斤", result: "近", story: "ก้าวเดิน (辶) + ขวานตัดระยะ (斤) = ใกล้ชิด (近)" },
      { comp1: "辶", comp2: "井", result: "进", story: "ก้าวเดิน (辶) + ขอบบ่อ (井) = ก้าวหน้า/เข้าสู่ (进)" },
      { comp1: "辶", comp2: "寸", result: "过", story: "ก้าวเดิน (辶) + นิ้ววัด (寸) = ข้ามผ่าน/เคย (过)" },
      { comp1: "辶", comp2: "元", result: "远", story: "ก้าวเดิน (辶) + ขอบฟ้ากว้าง (元) = ห่างไกล (远)" },

      // 饣 (Food / Eat)
      { comp1: "饣", comp2: "包", result: "饱", story: "อาหาร (饣) + ห่อหุ้ม (包) = อิ่มท้อง (饱)" },
      { comp1: "饣", comp2: "反", result: "饭", story: "อาหาร (饣) + กลับด้านบนเตา (反) = ข้าว (饭)" },
      { comp1: "饣", comp2: "官", result: "馆", story: "อาหาร (饣) + อาคารใหญ่ (官) = โรงเตี๊ยม/ร้านอาหาร (馆)" },
      { comp1: "饣", comp2: "我", result: "饿", story: "อาหาร (饣) + ตัวเราขาด (我) = หิวโหย (饿)" },

      // 心 (Heart / Mind)
      { comp1: "心", comp2: "亡", result: "忘", story: "หัวใจ (心) + สาบสูญ (亡) = ลืมเลือน (忘)" },
      { comp1: "心", comp2: "相", result: "想", story: "หัวใจ (心) + สายตามองต้นไม้ (相) = คิดถึง/จินตนาการ (想)" },
      { comp1: "心", comp2: "田", result: "思", story: "หัวใจ (心) + ทุ่งนาเพาะปลูก (田) = ครุ่นคิด/พินิจ (思)" },

      // 月 (Body / Flesh)
      { comp1: "月", comp2: "半", result: "胖", story: "เนื้อตัว (月) + ผ่าครึ่ง (半) = อ้วนท้วน (胖)" },
      { comp1: "月", comp2: "旦", result: "胆", story: "ร่างกาย (月) + แสงรุ่งอรุณ (旦) = ความกล้าหาญ/ถุงน้ำดี (胆)" },
      { comp1: "月", comp2: "要", result: "腰", story: "ร่างกาย (月) + สิ่งสำคัญ (要) = บั้นเอว (腰)" },

      // Other Fun Fusions
      { comp1: "田", comp2: "力", result: "男", story: "ทุ่งนา (田) + พละกำลัง (力) = ผู้ชาย (男)" },
      { comp1: "小", comp2: "大", result: "尖", story: "เล็ก (小) + ใหญ่ (大) = แหลมคม (尖)" },
      { comp1: "山", comp2: "石", result: "岩", story: "ภูเขา (山) + ก้อนหิน (石) = โขดหินผา (岩)" }
    ];

    // Popular and Combinable Core Pieces Inventory
    this.popularPieces = [
      { char: "女", pinyin: "nǚ", label: "ผู้หญิง/แม่", cat: "human" },
      { char: "子", pinyin: "zǐ", label: "เด็ก/ลูก", cat: "human" },
      { char: "马", pinyin: "mǎ", label: "ม้า", cat: "animal" },
      { char: "宀", pinyin: "mián", label: "หลังคาบ้าน", cat: "object" },
      { char: "亻", pinyin: "rén", label: "คน/มนุษย์", cat: "human" },
      { char: "木", pinyin: "mù", label: "ต้นไม้", cat: "nature" },
      { char: "日", pinyin: "rì", label: "พระอาทิตย์", cat: "nature" },
      { char: "月", pinyin: "yuè", label: "พระจันทร์/เนื้อ", cat: "nature" },
      { char: "火", pinyin: "huǒ", label: "ไฟ", cat: "nature" },
      { char: "口", pinyin: "kǒu", label: "ปาก/ช่อง", cat: "human" },
      { char: "乞", pinyin: "qǐ", label: "ขอกลืน", cat: "object" },
      { char: "氵", pinyin: "shuǐ", label: "สายน้ำ", cat: "nature" },
      { char: "讠", pinyin: "yán", label: "คำพูด", cat: "object" },
      { char: "钅", pinyin: "jīn", label: "โลหะ/ทอง", cat: "object" },
      { char: "辶", pinyin: "chuò", label: "ก้าวเดิน", cat: "object" },
      { char: "饣", pinyin: "shí", label: "อาหาร", cat: "object" },
      { char: "心", pinyin: "xīn", label: "หัวใจ", cat: "human" },
      { char: "禾", pinyin: "hé", label: "รวงข้าว", cat: "nature" },
      { char: "田", pinyin: "tián", label: "ทุ่งนา", cat: "nature" },
      { char: "力", pinyin: "lì", label: "พลังแรง", cat: "human" },
      { char: "青", pinyin: "qīng", label: "เขียวสด", cat: "nature" },
      { char: "舌", pinyin: "shé", label: "ลิ้น", cat: "human" },
      { char: "十", pinyin: "shí", label: "สิบ/สมบูรณ์", cat: "object" },
      { char: "少", pinyin: "shǎo", label: "เล็กน้อย", cat: "nature" },
      { char: "生", pinyin: "shēng", label: "กำเนิด", cat: "human" },
      { char: "门", pinyin: "mén", label: "ประตู", cat: "object" },
      { char: "包", pinyin: "bāo", label: "ห่อหุ้ม", cat: "object" },
      { char: "反", pinyin: "fǎn", label: "กลับด้าน", cat: "object" },
      { char: "寸", pinyin: "cùn", label: "นิ้ววัด", cat: "object" },
      { char: "鸟", pinyin: "niǎo", label: "นก", cat: "animal" },
      { char: "山", pinyin: "shān", label: "ภูเขา", cat: "nature" },
      { char: "石", pinyin: "shí", label: "หิน", cat: "nature" },
      { char: "王", pinyin: "wáng", label: "ราชา", cat: "human" },
      { char: "小", pinyin: "xiǎo", label: "เล็ก", cat: "nature" },
      { char: "大", pinyin: "dà", label: "ใหญ่", cat: "human" }
    ];

    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  /**
   * Get filtered pieces according to category and search query
   */
  getFilteredPieces() {
    let pieces = [];

    if (this.currentCategory === "popular") {
      pieces = [...this.popularPieces];
    } else if (this.currentCategory === "214") {
      if (window.RADICALS_CATALOG) {
        pieces = window.RADICALS_CATALOG.map(r => ({
          char: r.char,
          pinyin: r.pinyin,
          label: r.thai.split('/')[0].trim(),
          cat: "214"
        }));
      } else {
        pieces = [...this.popularPieces];
      }
    } else if (this.currentCategory === "human") {
      const p = this.popularPieces.filter(x => x.cat === "human");
      if (window.RADICALS_CATALOG) {
        const rads = window.RADICALS_CATALOG.filter(r => r.cat && (r.cat.includes("มนุษย์") || r.cat.includes("ร่างกาย") || r.cat.includes("สังคม")));
        rads.forEach(r => {
          if (!p.some(x => x.char === r.char)) p.push({ char: r.char, pinyin: r.pinyin, label: r.thai.split('/')[0].trim(), cat: "human" });
        });
      }
      pieces = p;
    } else if (this.currentCategory === "nature") {
      const p = this.popularPieces.filter(x => x.cat === "nature");
      if (window.RADICALS_CATALOG) {
        const rads = window.RADICALS_CATALOG.filter(r => r.cat && (r.cat.includes("ธรรมชาติ") || r.cat.includes("ของเหลว") || r.cat.includes("พืช") || r.cat.includes("แร่ธาตุ") || r.cat.includes("ภูมิศาสตร์")));
        rads.forEach(r => {
          if (!p.some(x => x.char === r.char)) p.push({ char: r.char, pinyin: r.pinyin, label: r.thai.split('/')[0].trim(), cat: "nature" });
        });
      }
      pieces = p;
    } else if (this.currentCategory === "object") {
      const p = this.popularPieces.filter(x => x.cat === "object");
      if (window.RADICALS_CATALOG) {
        const rads = window.RADICALS_CATALOG.filter(r => r.cat && (r.cat.includes("เครื่องมือ") || r.cat.includes("สิ่งของ") || r.cat.includes("สิ่งปลูกสร้าง") || r.cat.includes("การกระทำ")));
        rads.forEach(r => {
          if (!p.some(x => x.char === r.char)) p.push({ char: r.char, pinyin: r.pinyin, label: r.thai.split('/')[0].trim(), cat: "object" });
        });
      }
      pieces = p;
    } else if (this.currentCategory === "animal") {
      const p = this.popularPieces.filter(x => x.cat === "animal");
      if (window.RADICALS_CATALOG) {
        const rads = window.RADICALS_CATALOG.filter(r => r.cat && r.cat.includes("สัตว์"));
        rads.forEach(r => {
          if (!p.some(x => x.char === r.char)) p.push({ char: r.char, pinyin: r.pinyin, label: r.thai.split('/')[0].trim(), cat: "animal" });
        });
      }
      pieces = p;
    } else {
      pieces = [...this.popularPieces];
    }

    if (this.searchKeyword) {
      const q = this.searchKeyword.toLowerCase().trim();
      pieces = pieces.filter(p => 
        p.char.includes(q) || 
        p.pinyin.toLowerCase().includes(q) || 
        p.label.toLowerCase().includes(q)
      );
    }

    return pieces;
  }

  /**
   * Get valid partner characters for the currently selected slot 1
   */
  getValidPartnersForSlot1() {
    if (!this.slot1) return new Set();
    const c1 = this.slot1.char;
    const partners = new Set();

    this.recipes.forEach(r => {
      if (r.comp1 === c1) partners.add(r.comp2);
      if (r.comp2 === c1) partners.add(r.comp1);
    });

    return partners;
  }

  render() {
    if (!this.container) return;

    const filteredPieces = this.getFilteredPieces();
    const validPartners = this.getValidPartnersForSlot1();
    const hasSlot1 = !!this.slot1;
    const hasSlot2 = !!this.slot2;

    this.container.innerHTML = `
      <div class="fusion-workshop">
        <div class="workshop-header">
          <div class="workshop-title">
            <span class="icon">⚗️</span>
            <h3>ห้องทดลองปรุงอักษรจีน (Radical Fusion)</h3>
          </div>
          <p class="workshop-desc">เลือกลากรากศัพท์ 2 ตัวมาวางในช่องหลอมรวม เพื่อค้นพบตัวอักษรจีนและความหมายโบราณ</p>
        </div>

        <!-- Fusion Cauldron Slots -->
        <div class="fusion-altar">
          <div class="fusion-slot ${this.slot1 ? 'filled' : 'empty'}" id="fusion-slot-1" onclick="window.FusionGame.clearSlot(1)" title="แตะเพื่อล้างช่องที่ 1">
            ${this.slot1 ? `
              <span class="slot-char">${this.slot1.char}</span>
              <span class="slot-lbl">${this.slot1.pinyin}</span>
              <span class="slot-remove-icon">✕</span>
            ` : '<span class="slot-placeholder">+ ชิ้นส่วนที่ 1</span>'}
          </div>

          <div class="fusion-symbol">➕</div>

          <div class="fusion-slot ${this.slot2 ? 'filled' : 'empty'}" id="fusion-slot-2" onclick="window.FusionGame.clearSlot(2)" title="แตะเพื่อล้างช่องที่ 2">
            ${this.slot2 ? `
              <span class="slot-char">${this.slot2.char}</span>
              <span class="slot-lbl">${this.slot2.pinyin}</span>
              <span class="slot-remove-icon">✕</span>
            ` : '<span class="slot-placeholder">+ ชิ้นส่วนที่ 2</span>'}
          </div>

          <div class="fusion-symbol">➔</div>

          <button class="fusion-fuse-btn ${hasSlot1 && hasSlot2 ? 'ready' : ''}" onclick="window.FusionGame.attemptFuse()">
            <span>✨ หลอมรวม</span>
          </button>
        </div>

        <!-- Result Banner / Feedback -->
        <div class="fusion-feedback" id="fusion-feedback-box"></div>

        <!-- Available Pieces Inventory & Category Filter Bar -->
        <div class="fusion-inventory-section">
          <div class="fusion-filter-bar">
            <div class="section-sub-title">
              <span>คลังรากศัพท์ & ส่วนประกอบ (${filteredPieces.length} ตัว)</span>
              ${hasSlot1 ? `
                <span class="fusion-hint-badge">
                  <span class="dot green"></span> <strong style="color: #059669;">สีเขียว = ผสมกับ ${this.slot1.char} ได้</strong>
                  <span class="dot gray" style="margin-left: 6px;"></span> <span style="color: var(--ink-tertiary);">สีเทา = ไม่เข้ากัน</span>
                </span>
              ` : '<span class="fusion-hint-badge">แตะเลือกชิ้นส่วนตัวแรก</span>'}
            </div>

            <!-- Instant Search Input -->
            <div class="fusion-search-wrapper">
              <span class="fusion-search-icon">🔍</span>
              <input type="text" class="fusion-search-input" id="fusion-search-box" 
                     placeholder="ค้นหารากศัพท์/ส่วนประกอบ (เช่น 女, ma, ไม้, ม้า)..." 
                     value="${this.searchKeyword}" 
                     oninput="window.FusionGame.handleSearch(this.value)">
            </div>

            <!-- Category Pills Row -->
            <div class="fusion-categories-row">
              <button class="fusion-cat-pill ${this.currentCategory === 'popular' ? 'active' : ''}" onclick="window.FusionGame.setCategory('popular')">
                🌟 ตัวผสมยอดนิยม
              </button>
              <button class="fusion-cat-pill ${this.currentCategory === 'human' ? 'active' : ''}" onclick="window.FusionGame.setCategory('human')">
                👤 มนุษย์ & ร่างกาย
              </button>
              <button class="fusion-cat-pill ${this.currentCategory === 'nature' ? 'active' : ''}" onclick="window.FusionGame.setCategory('nature')">
                🌿 ธรรมชาติ & ธาตุ
              </button>
              <button class="fusion-cat-pill ${this.currentCategory === 'object' ? 'active' : ''}" onclick="window.FusionGame.setCategory('object')">
                🛠️ วัตถุ & การกระทำ
              </button>
              <button class="fusion-cat-pill ${this.currentCategory === 'animal' ? 'active' : ''}" onclick="window.FusionGame.setCategory('animal')">
                🐾 สัตว์
              </button>
              <button class="fusion-cat-pill ${this.currentCategory === '214' ? 'active' : ''}" onclick="window.FusionGame.setCategory('214')">
                📚 214 รากครบชุด
              </button>
            </div>
          </div>

          <!-- Dynamic Color-Coded Grid -->
          <div class="fusion-pieces-grid">
            ${filteredPieces.map(piece => {
              const isSelected1 = this.slot1 && this.slot1.char === piece.char;
              const isSelected2 = this.slot2 && this.slot2.char === piece.char;
              const isSelected = isSelected1 || isSelected2;

              let statusClass = "";
              let statusPill = "";

              if (isSelected) {
                statusClass = "selected-in-slot";
                statusPill = `<span class="fuse-status-pill can">✓ ในช่อง</span>`;
              } else if (hasSlot1 && !hasSlot2) {
                if (validPartners.has(piece.char)) {
                  statusClass = "can-fuse";
                  statusPill = `<span class="fuse-status-pill can">✨ ผสมได้</span>`;
                } else {
                  statusClass = "cannot-fuse";
                  statusPill = `<span class="fuse-status-pill cannot">✕</span>`;
                }
              }

              return `
                <div class="fusion-piece-card ${statusClass}" 
                     onclick="window.FusionGame.selectPiece('${piece.char}', '${piece.pinyin}', '${piece.label.replace(/'/g, "\\'")}')"
                     title="${statusClass === 'cannot-fuse' ? `ตัวนี้ไม่สามารถผสมกับ ${this.slot1.char} ได้` : `แตะเพื่อเลือก ${piece.char}`}">
                  ${statusPill}
                  <div class="piece-char">${piece.char}</div>
                  <div class="piece-pinyin">${piece.pinyin}</div>
                  <div class="piece-label">${piece.label}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Discovered Codex -->
        <div class="discovered-codex-section">
          <div class="section-sub-title">
            <span>สมุดบันทึกอักษรที่ค้นพบแล้ว</span>
            <span class="codex-count">${this.unlockedChars.size} / ${this.recipes.length}</span>
          </div>
          <div class="codex-list">
            ${this.recipes.map(r => {
              const isUnlocked = this.unlockedChars.has(r.result);
              return `
                <div class="codex-item ${isUnlocked ? 'unlocked' : 'locked'}" onclick="${isUnlocked ? `window.App.showCharacterDetail('${r.result}')` : ''}">
                  <div class="codex-char">${isUnlocked ? r.result : '❓'}</div>
                  <div class="codex-info">
                    <div class="codex-name">${isUnlocked ? `${r.result} (${r.comp1} + ${r.comp2})` : 'ยังไม่ถูกค้นพบ'}</div>
                    <div class="codex-story">${isUnlocked ? r.story : 'ผสมรากศัพท์เพื่อปลดล็อกเรื่องราว'}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  setCategory(cat) {
    this.currentCategory = cat;
    this.render();
  }

  handleSearch(query) {
    this.searchKeyword = query;
    this.render();
    const input = document.getElementById("fusion-search-box");
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }

  selectPiece(char, pinyin, label) {
    // If piece is incompatible when slot 1 is chosen
    if (this.slot1 && !this.slot2) {
      const validPartners = this.getValidPartnersForSlot1();
      if (!validPartners.has(char) && this.slot1.char !== char) {
        if (window.AudioEngine) {
          window.AudioEngine.playToneChime(200, 'sawtooth', 0.15);
        }
        this.showFeedback(`⚠️ ชิ้นส่วน '${char}' ไม่สามารถผสมกับ '${this.slot1.char}' ได้ (สังเกตกรอบสีเขียวทองสำหรับตัวที่ผสมได้)`, "warning");
        return;
      }
    }

    if (window.AudioEngine) {
      window.AudioEngine.playToneChime(440, 'sine', 0.08);
      window.AudioEngine.speak(char);
    }

    if (!this.slot1) {
      this.slot1 = { char, pinyin, label };
    } else if (!this.slot2) {
      this.slot2 = { char, pinyin, label };
    } else {
      // Replace slot 2
      this.slot2 = { char, pinyin, label };
    }
    this.render();
  }

  clearSlot(slotNum) {
    if (slotNum === 1) this.slot1 = null;
    if (slotNum === 2) this.slot2 = null;
    this.render();
  }

  attemptFuse() {
    if (!this.slot1 || !this.slot2) {
      this.showFeedback("กรุณาเลือกรากศัพท์ใส่ให้ครบทั้ง 2 ช่องก่อนทำการหลอมรวม", "warning");
      return;
    }

    const c1 = this.slot1.char;
    const c2 = this.slot2.char;

    // Check recipe (order independent)
    const match = this.recipes.find(r => 
      (r.comp1 === c1 && r.comp2 === c2) || (r.comp1 === c2 && r.comp2 === c1)
    );

    if (match) {
      this.unlockedChars.add(match.result);
      if (window.AudioEngine) {
        window.AudioEngine.playSuccessSound();
        setTimeout(() => window.AudioEngine.speak(match.result), 300);
      }

      this.showEurekaModal(match);
      this.slot1 = null;
      this.slot2 = null;
      this.render();
    } else {
      if (window.AudioEngine) {
        window.AudioEngine.playToneChime(220, 'sawtooth', 0.2);
      }
      this.showFeedback(`รากศัพท์ ${c1} + ${c2} ยังไม่สามารถรวมกันเป็นคำในคลังได้ ลองจับคู่ใหม่อีกครั้ง!`, "error");
    }
  }

  showFeedback(msg, type = "info") {
    const box = document.getElementById("fusion-feedback-box");
    if (!box) return;
    box.className = `fusion-feedback show ${type}`;
    box.innerHTML = msg;
    setTimeout(() => {
      if (box) box.className = "fusion-feedback";
    }, 3500);
  }

  showEurekaModal(recipe) {
    const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[recipe.result] : null;
    const modal = document.createElement("div");
    modal.className = "eureka-modal-backdrop";
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove();
    });
    modal.innerHTML = `
      <div class="eureka-modal-card">
        <div class="eureka-confetti">🎉</div>
        <div class="eureka-badge">ค้นพบอักษรใหม่!</div>
        <div class="eureka-char-hero">${recipe.result}</div>
        <div class="eureka-pinyin">${charData ? charData.primaryPinyin : ''} · ${charData ? charData.thaiMeaningShort : ''}</div>

        <div class="eureka-recipe-pill">
          <span>${recipe.comp1}</span> + <span>${recipe.comp2}</span> ➔ <strong>${recipe.result}</strong>
        </div>

        <div class="eureka-story-box">
          <div class="story-title">💡 เคล็ดลับเรื่องราวดั้งเดิม:</div>
          <p>${recipe.story}</p>
        </div>

        <div class="eureka-actions">
          <button class="btn-listen" onclick="window.AudioEngine.speak('${recipe.result}')">
            🔊 ฟังเสียงอ่าน
          </button>
          <button class="btn-detail" onclick="document.body.removeChild(this.closest('.eureka-modal-backdrop')); window.App.showCharacterDetail('${recipe.result}')">
            📖 ดูรายละเอียดคำศัพท์
          </button>
          <button class="btn-close-eureka" onclick="document.body.removeChild(this.closest('.eureka-modal-backdrop'))">
            ✕ ปิด
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
}

window.RadicalFusionGame = RadicalFusionGame;
