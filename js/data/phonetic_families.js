/**
 * High-Yield Phonetic Radical Families Database (声旁字族)
 * จำจีน (JumJeen) - ฐานข้อมูลตระกูลเสียงอ่านภาษาจีน ช่วยจำอักษรเสียง-ความหมาย (形声字)
 */

const PHONETIC_FAMILIES = {
  "青": {
    pinyin: "qīng",
    thaiMeaning: "เขียวคราม / สีคราม",
    description: "ให้เสียง qīng / qíng / jīng / cāi",
    members: [
      { char: "清", pinyin: "qīng", radical: "水", thai: "สะอาด / ใส" },
      { char: "晴", pinyin: "qíng", radical: "日", thai: "ท้องฟ้าแจ่มใส" },
      { char: "情", pinyin: "qíng", radical: "心", thai: "ความรู้สึก / อารมณ์" },
      { char: "请", pinyin: "qǐng", radical: "言", thai: "เชิญ / ขอร้อง" },
      { char: "精", pinyin: "jīng", radical: "米", thai: "ประณีต / ยอดเยี่ยม" },
      { char: "猜", pinyin: "cāi", radical: "犬", thai: "เดา / คาดคะเน" },
      { char: "静", pinyin: "jìng", radical: "青", thai: "สงบ / เงียบ" }
    ]
  },
  "包": {
    pinyin: "bāo",
    thaiMeaning: "ห่อ / ถุง",
    description: "ให้เสียง bāo / bǎo / bào / pǎo / pào",
    members: [
      { char: "饱", pinyin: "bǎo", radical: "食", thai: "อิ่ม" },
      { char: "抱", pinyin: "bào", radical: "手", thai: "กอด / โอบอุ้ม" },
      { char: "跑", pinyin: "pǎo", radical: "足", thai: "วิ่ง" },
      { char: "泡", pinyin: "pào", radical: "水", thai: "ฟอง / แช่น้ำ" },
      { char: "炮", pinyin: "pào", radical: "火", thai: "ปืนใหญ่ / ดอกไม้ไฟ" }
    ]
  },
  "巴": {
    pinyin: "bā",
    thaiMeaning: "ความหวัง / การเกาะติด",
    description: "ให้เสียง bā / bà / bǎ / pá",
    members: [
      { char: "爸", pinyin: "bà", radical: "父", thai: "คุณพ่อ" },
      { char: "把", pinyin: "bǎ", radical: "手", thai: "จับ / ลักษณนามด้าม" },
      { char: "吧", pinyin: "ba", radical: "口", thai: "เถอะ / ซิ" },
      { char: "爬", pinyin: "pá", radical: "爪", thai: "คลาน / ปีน" }
    ]
  },
  "马": {
    pinyin: "mǎ",
    thaiMeaning: "ม้า",
    description: "ให้เสียง mǎ / mā / ma / mà",
    members: [
      { char: "妈", pinyin: "mā", radical: "女", thai: "คุณแม่" },
      { char: "吗", pinyin: "ma", radical: "口", thai: "ไหม / หรือไม่" },
      { char: "骂", pinyin: "mà", radical: "口", thai: "ด่าว่า" },
      { char: "码", pinyin: "mǎ", radical: "石", thai: "รหัส / เบอร์" }
    ]
  },
  "方": {
    pinyin: "fāng",
    thaiMeaning: "สี่เหลี่ยม / ทิศทาง",
    description: "ให้เสียง fāng / fàng / fáng",
    members: [
      { char: "放", pinyin: "fàng", radical: "攴", thai: "ปล่อย / วาง" },
      { char: "房", pinyin: "fáng", radical: "户", thai: "ห้อง / บ้าน" },
      { char: "防", pinyin: "fáng", radical: "阜", thai: "ป้องกัน" },
      { char: "访", pinyin: "fǎng", radical: "言", thai: "เยี่ยมเยียน / สัมภาษณ์" }
    ]
  },
  "也": {
    pinyin: "yě",
    thaiMeaning: "ก็...เช่นกัน",
    description: "ให้เสียง yě / tā / dì / chí",
    members: [
      { char: "他", pinyin: "tā", radical: "人", thai: "เขา (ผู้ชาย)" },
      { char: "她", pinyin: "tā", radical: "女", thai: "เธอ (ผู้หญิง)" },
      { char: "地", pinyin: "dì", radical: "土", thai: "ดิน / พื้นดิน" },
      { char: "池", pinyin: "chí", radical: "水", thai: "สระน้ำ / บ่อน้ำ" }
    ]
  },
  "少": {
    pinyin: "shǎo",
    thaiMeaning: "น้อย / วัยเยาว์",
    description: "ให้เสียง shǎo / miǎo / miào / shā / chǎo",
    members: [
      { char: "秒", pinyin: "miǎo", radical: "禾", thai: "วินาที" },
      { char: "妙", pinyin: "miào", radical: "女", thai: "ยอดเยี่ยม / มหัศจรรย์" },
      { char: "沙", pinyin: "shā", radical: "水", thai: "ทราย" },
      { char: "吵", pinyin: "chǎo", radical: "口", thai: "เสียงดังรบกวน" }
    ]
  },
  "分": {
    pinyin: "fēn",
    thaiMeaning: "แบ่งแยก / นาที",
    description: "ให้เสียง fēn / fěn / fèn / pàn / pén",
    members: [
      { char: "粉", pinyin: "fěn", radical: "米", thai: "แป้ง / ผง / สีชมพู" },
      { char: "份", pinyin: "fèn", radical: "人", thai: "ส่วน / ชุด" },
      { char: "盼", pinyin: "pàn", radical: "目", thai: "เฝ้ารอคอย" },
      { char: "盆", pinyin: "pén", radical: "皿", thai: "อ่าง / กะละมัง" }
    ]
  },
  "寺": {
    pinyin: "sì",
    thaiMeaning: "วัด / อาราม",
    description: "ให้เสียง sì / tè / chí / děng / shī / dài",
    members: [
      { char: "特", pinyin: "tè", radical: "牛", thai: "พิเศษ" },
      { char: "持", pinyin: "chí", radical: "手", thai: "ถือ / ยึดมั่น" },
      { char: "等", pinyin: "děng", radical: "竹", thai: "รอ / ระดับ" },
      { char: "诗", pinyin: "shī", radical: "言", thai: "บทกวี" },
      { char: "待", pinyin: "dài", radical: "彳", thai: "คอย / ปฏิบัติต่อ" }
    ]
  },
  "占": {
    pinyin: "zhàn",
    thaiMeaning: "ทำนาย / ยึดครอง",
    description: "ให้เสียง zhàn / diàn / diǎn / tiē",
    members: [
      { char: "店", pinyin: "diàn", radical: "广", thai: "ร้านค้า" },
      { char: "点", pinyin: "diǎn", radical: "黑", thai: "จุด / โมง / สั่งอาหาร" },
      { char: "站", pinyin: "zhàn", radical: "立", thai: "สถานี / ยืน" },
      { char: "贴", pinyin: "tiē", radical: "贝", thai: "ติด / แปะ" }
    ]
  },
  "可": {
    pinyin: "kě",
    thaiMeaning: "สามารถ / น่ารัก",
    description: "ให้เสียง kě / hé / gē / ā",
    members: [
      { char: "河", pinyin: "hé", radical: "水", thai: "แม่น้ำ" },
      { char: "何", pinyin: "hé", radical: "人", thai: "อันใด / ไฉน" },
      { char: "歌", pinyin: "gē", radical: "欠", thai: "เพลง / ร้องเพลง" },
      { char: "哥", pinyin: "gē", radical: "口", thai: "พี่ชาย" },
      { char: "阿", pinyin: "ā", radical: "阜", thai: "คำนำหน้าเรียกญาติ" }
    ]
  },
  "艮": {
    pinyin: "gèn",
    thaiMeaning: "เหนียวแน่น / ทิศตะวันออกเฉียงเหนือ",
    description: "ให้เสียง hěn / hèn / yín / gēn / yǎn / tuì",
    members: [
      { char: "很", pinyin: "hěn", radical: "彳", thai: "มาก" },
      { char: "恨", pinyin: "hèn", radical: "心", thai: "เกลียดชัง" },
      { char: "银", pinyin: "yín", radical: "金", thai: "เงิน (โลหะ)" },
      { char: "跟", pinyin: "gēn", radical: "足", thai: "ตาม / ส้นเท้า" },
      { char: "眼", pinyin: "yǎn", radical: "目", thai: "ดวงตา" },
      { char: "根", pinyin: "gēn", radical: "木", thai: "ราก / รากฐาน" },
      { char: "退", pinyin: "tuì", radical: "辵", thai: "ถอย / คืน" }
    ]
  }
};

window.PHONETIC_FAMILIES = PHONETIC_FAMILIES;
