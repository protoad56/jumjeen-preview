/**
 * Comprehensive Radical Network Database (214 Kangxi Radicals)
 * จำจีน (JumJeen) - ฐานข้อมูลผังรากศัพท์ 214 หมวดคังซี ครบทุกหมวด 100%
 */

const RADICALS_DATA = {
  "一": {
      "id": "一",
      "name": "一 (yī)",
      "pinyin": "yī",
      "thaiMeaning": "หนึ่ง / เส้นขวาง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 一 สื่อถึง หนึ่ง / เส้นขวาง",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 1,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '一' (หนึ่ง / เส้นขวาง) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 1",
      "characterIds": [
          "三",
          "七",
          "不",
          "上",
          "下",
          "万",
          "世",
          "丈",
          "与",
          "丙",
          "丞"
      ]
  },
  "丨": {
      "id": "丨",
      "name": "丨 (gǔn)",
      "pinyin": "gǔn",
      "thaiMeaning": "เส้นตั้ง / การเชื่อมต่อ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 丨 สื่อถึง เส้นตั้ง / การเชื่อมต่อ",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 1,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '丨' (เส้นตั้ง / การเชื่อมต่อ) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 2",
      "characterIds": [
          "中",
          "串",
          "丰",
          "临"
      ]
  },
  "丶": {
      "id": "丶",
      "name": "丶 (zhǔ)",
      "pinyin": "zhǔ",
      "thaiMeaning": "จุด / หยดน้ำ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 丶 สื่อถึง จุด / หยดน้ำ",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 1,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '丶' (จุด / หยดน้ำ) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 3",
      "characterIds": [
          "主",
          "丸",
          "丹"
      ]
  },
  "丿": {
      "id": "丿",
      "name": "丿 (piě)",
      "pinyin": "piě",
      "thaiMeaning": "เส้นปัดซ้าย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 丿 สื่อถึง เส้นปัดซ้าย",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 1,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '丿' (เส้นปัดซ้าย) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 4",
      "characterIds": [
          "九",
          "久",
          "及",
          "丢",
          "乒",
          "乓"
      ]
  },
  "乙": {
      "id": "乙",
      "name": "乙 (yǐ)",
      "pinyin": "yǐ",
      "thaiMeaning": "ต้นกล้า / อ่อนช้อย (乚)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 乙 สื่อถึง ต้นกล้า / อ่อนช้อย (乚)",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 1,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '乙' (ต้นกล้า / อ่อนช้อย (乚)) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 5",
      "characterIds": [
          "也",
          "买",
          "九",
          "乱",
          "乞"
      ]
  },
  "亅": {
      "id": "亅",
      "name": "亅 (jué)",
      "pinyin": "jué",
      "thaiMeaning": "ขอเบ็ด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 亅 สื่อถึง ขอเบ็ด",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 1,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '亅' (ขอเบ็ด) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 6",
      "characterIds": [
          "了",
          "事",
          "书",
          "予"
      ]
  },
  "二": {
      "id": "二",
      "name": "二 (èr)",
      "pinyin": "èr",
      "thaiMeaning": "สอง / ฟ้าและดิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 二 สื่อถึง สอง / ฟ้าและดิน",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 2,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '二' (สอง / ฟ้าและดิน) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 7",
      "characterIds": [
          "五",
          "些",
          "云",
          "于",
          "互"
      ]
  },
  "亠": {
      "id": "亠",
      "name": "亠 (tóu)",
      "pinyin": "tóu",
      "thaiMeaning": "หลังคา / ฝาครอบ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 亠 สื่อถึง หลังคา / ฝาครอบ",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 2,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '亠' (หลังคา / ฝาครอบ) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 8",
      "characterIds": [
          "六",
          "文",
          "京",
          "高",
          "市",
          "亮",
          "交",
          "夜",
          "亡",
          "充",
          "享"
      ]
  },
  "人": {
      "id": "人",
      "name": "人 (rén)",
      "pinyin": "rén",
      "thaiMeaning": "คน / มนุษย์ (亻)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 人 สื่อถึง คน / มนุษย์ (亻)",
      "category": "มนุษย์และสังคม",
      "strokeCount": 2,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '人' (คน / มนุษย์ (亻)) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 9",
      "characterIds": [
          "会",
          "你",
          "他",
          "们",
          "什",
          "候",
          "休",
          "作",
          "做",
          "从",
          "全",
          "介",
          "体",
          "位",
          "信",
          "众",
          "倒",
          "低",
          "健",
          "借",
          "保",
          "传",
          "价",
          "假",
          "俩",
          "伞",
          "停",
          "供",
          "估",
          "倍",
          "伯",
          "促",
          "份",
          "偶",
          "优",
          "仍",
          "傅"
      ],
      "variants": [
          "亻"
      ],
      "variantName": "单人旁 (คนยืน)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 亻 เช่น 你 他 休"
  },
  "儿": {
      "id": "儿",
      "name": "儿 (ér)",
      "pinyin": "ér",
      "thaiMeaning": "ขาคน / เด็ก / บุตร",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 儿 สื่อถึง ขาคน / เด็ก / บุตร",
      "category": "มนุษย์และสังคม",
      "strokeCount": 2,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '儿' (ขาคน / เด็ก / บุตร) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 10",
      "characterIds": [
          "先",
          "元",
          "光",
          "兄",
          "克"
      ]
  },
  "入": {
      "id": "入",
      "name": "入 (rù)",
      "pinyin": "rù",
      "thaiMeaning": "เข้า / เข้าสู่",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 入 สื่อถึง เข้า / เข้าสู่",
      "category": "การกระทำและอาการ",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '入' (เข้า / เข้าสู่) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 11",
      "characterIds": [
          "全",
          "内"
      ]
  },
  "八": {
      "id": "八",
      "name": "八 (bā)",
      "pinyin": "bā",
      "thaiMeaning": "แปด / การแยกออก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 八 สื่อถึง แปด / การแยกออก",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 2,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '八' (แปด / การแยกออก) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 12",
      "characterIds": [
          "六",
          "关",
          "公",
          "共"
      ]
  },
  "冂": {
      "id": "冂",
      "name": "冂 (jiōng)",
      "pinyin": "jiōng",
      "thaiMeaning": "ขอบเขต / อาณาเขต",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 冂 สื่อถึง ขอบเขต / อาณาเขต",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '冂' (ขอบเขต / อาณาเขต) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 13",
      "characterIds": [
          "同",
          "网",
          "周"
      ]
  },
  "冖": {
      "id": "冖",
      "name": "冖 (mì)",
      "pinyin": "mì",
      "thaiMeaning": "ผ้าคลุม / ปกปิด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 冖 สื่อถึง ผ้าคลุม / ปกปิด",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 2,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '冖' (ผ้าคลุม / ปกปิด) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 14",
      "characterIds": [
          "写",
          "军",
          "冠"
      ]
  },
  "冫": {
      "id": "冫",
      "name": "冫 (bīng)",
      "pinyin": "bīng",
      "thaiMeaning": "น้ำแข็ง (สองหยดน้ำ)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 冫 สื่อถึง น้ำแข็ง (สองหยดน้ำ)",
      "category": "ธรรมชาติและของเหลว",
      "strokeCount": 2,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '冫' (น้ำแข็ง (สองหยดน้ำ)) จัดอยู่ในหมวด ธรรมชาติและของเหลว เป็นรากศัพท์คังซีลำดับที่ 15",
      "characterIds": [
          "冷",
          "净",
          "准",
          "冰",
          "决",
          "况",
          "减"
      ]
  },
  "几": {
      "id": "几",
      "name": "几 (jī)",
      "pinyin": "jī",
      "thaiMeaning": "โต๊ะเล็ก / เก้าอี้ม้านั่ง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 几 สื่อถึง โต๊ะเล็ก / เก้าอี้ม้านั่ง",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '几' (โต๊ะเล็ก / เก้าอี้ม้านั่ง) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 16",
      "characterIds": [
          "凡",
          "凤"
      ]
  },
  "凵": {
      "id": "凵",
      "name": "凵 (qū)",
      "pinyin": "qū",
      "thaiMeaning": "ภาชนะเปิด / หลุม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 凵 สื่อถึง ภาชนะเปิด / หลุม",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '凵' (ภาชนะเปิด / หลุม) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 17",
      "characterIds": [
          "出",
          "击",
          "凶"
      ]
  },
  "刀": {
      "id": "刀",
      "name": "刀 (dāo)",
      "pinyin": "dāo",
      "thaiMeaning": "มีด / คมดาบ (刂)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 刀 สื่อถึง มีด / คมดาบ (刂)",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 2,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '刀' (มีด / คมดาบ (刂)) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 18",
      "characterIds": [
          "分",
          "到",
          "前",
          "刚",
          "别",
          "切",
          "利",
          "初",
          "列",
          "免",
          "判",
          "则",
          "剩"
      ],
      "variants": [
          "刂"
      ],
      "variantName": "竖刀旁 (มีดยืนขวา)",
      "variantNote": "เมื่ออยู่ด้านขวาแปลงเป็น 刂 เช่น 别 分 刻"
  },
  "力": {
      "id": "力",
      "name": "力 (lì)",
      "pinyin": "lì",
      "thaiMeaning": "พละกำลัง / แรงกล้ามเนื้อ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 力 สื่อถึง พละกำลัง / แรงกล้ามเนื้อ",
      "category": "ร่างกายและพลังงาน",
      "strokeCount": 2,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '力' (พละกำลัง / แรงกล้ามเนื้อ) จัดอยู่ในหมวด ร่างกายและพลังงาน เป็นรากศัพท์คังซีลำดับที่ 19",
      "characterIds": [
          "助",
          "动",
          "努",
          "加",
          "功",
          "办",
          "劣"
      ]
  },
  "勹": {
      "id": "勹",
      "name": "勹 (bāo)",
      "pinyin": "bāo",
      "thaiMeaning": "การห่อหุ้ม / โอบอุ้ม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 勹 สื่อถึง การห่อหุ้ม / โอบอุ้ม",
      "category": "การกระทำและอาการ",
      "strokeCount": 2,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '勹' (การห่อหุ้ม / โอบอุ้ม) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 20",
      "characterIds": [
          "包",
          "句"
      ]
  },
  "匕": {
      "id": "匕",
      "name": "匕 (bǐ)",
      "pinyin": "bǐ",
      "thaiMeaning": "ช้อน / กริชสั้น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 匕 สื่อถึง ช้อน / กริชสั้น",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '匕' (ช้อน / กริชสั้น) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 21",
      "characterIds": [
          "北",
          "化",
          "匙"
      ]
  },
  "匚": {
      "id": "匚",
      "name": "匚 (fāng)",
      "pinyin": "fāng",
      "thaiMeaning": "กล่อง / ลังใส่ของ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 匚 สื่อถึง กล่อง / ลังใส่ของ",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '匚' (กล่อง / ลังใส่ของ) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 22",
      "characterIds": [
          "医",
          "区"
      ]
  },
  "匸": {
      "id": "匸",
      "name": "匸 (xì)",
      "pinyin": "xì",
      "thaiMeaning": "การซ่อนของ / หีบมิดชิด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 匸 สื่อถึง การซ่อนของ / หีบมิดชิด",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 2,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '匸' (การซ่อนของ / หีบมิดชิด) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 23",
      "characterIds": [
          "匹"
      ]
  },
  "十": {
      "id": "十",
      "name": "十 (shí)",
      "pinyin": "shí",
      "thaiMeaning": "สิบ / สมบูรณ์พร้อม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 十 สื่อถึง สิบ / สมบูรณ์พร้อม",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 2,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '十' (สิบ / สมบูรณ์พร้อม) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 24",
      "characterIds": [
          "千",
          "午",
          "南",
          "半",
          "单",
          "博"
      ]
  },
  "卜": {
      "id": "卜",
      "name": "卜 (bǔ)",
      "pinyin": "bǔ",
      "thaiMeaning": "การเสี่ยงทาย / รอยแตกกระดูก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 卜 สื่อถึง การเสี่ยงทาย / รอยแตกกระดูก",
      "category": "ความเชื่อและวัฒนธรรม",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '卜' (การเสี่ยงทาย / รอยแตกกระดูก) จัดอยู่ในหมวด ความเชื่อและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 25",
      "characterIds": [
          "卡",
          "占"
      ]
  },
  "卩": {
      "id": "卩",
      "name": "卩 (jié)",
      "pinyin": "jié",
      "thaiMeaning": "ตราประทับ / คนคุกเข่า",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 卩 สื่อถึง ตราประทับ / คนคุกเข่า",
      "category": "มนุษย์และสังคม",
      "strokeCount": 2,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '卩' (ตราประทับ / คนคุกเข่า) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 26",
      "characterIds": [
          "卫",
          "危",
          "印"
      ]
  },
  "厂": {
      "id": "厂",
      "name": "厂 (chǎng)",
      "pinyin": "chǎng",
      "thaiMeaning": "หน้าผา / เพิงพัก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 厂 สื่อถึง หน้าผา / เพิงพัก",
      "category": "ภูมิศาสตร์และสิ่งก่อสร้าง",
      "strokeCount": 2,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '厂' (หน้าผา / เพิงพัก) จัดอยู่ในหมวด ภูมิศาสตร์และสิ่งก่อสร้าง เป็นรากศัพท์คังซีลำดับที่ 27",
      "characterIds": [
          "原",
          "厅",
          "历",
          "厚",
          "厨",
          "厌"
      ]
  },
  "厶": {
      "id": "厶",
      "name": "厶 (sī)",
      "pinyin": "sī",
      "thaiMeaning": "ส่วนตัว / ซ่อนเร้น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 厶 สื่อถึง ส่วนตัว / ซ่อนเร้น",
      "category": "มนุษย์และสังคม",
      "strokeCount": 2,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '厶' (ส่วนตัว / ซ่อนเร้น) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 28",
      "characterIds": [
          "去",
          "台",
          "参"
      ]
  },
  "又": {
      "id": "又",
      "name": "又 (yòu)",
      "pinyin": "yòu",
      "thaiMeaning": "มือขวา / ซ้ำอีกครั้ง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 又 สื่อถึง มือขวา / ซ้ำอีกครั้ง",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 2,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '又' (มือขวา / ซ้ำอีกครั้ง) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 29",
      "characterIds": [
          "友",
          "双",
          "发",
          "变",
          "反",
          "取",
          "叔",
          "受"
      ]
  },
  "口": {
      "id": "口",
      "name": "口 (kǒu)",
      "pinyin": "kǒu",
      "thaiMeaning": "ปาก / ช่อง / การพูด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 口 สื่อถึง ปาก / ช่อง / การพูด",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 3,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '口' (ปาก / ช่อง / การพูด) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 30",
      "characterIds": [
          "吃",
          "喝",
          "叫",
          "听",
          "问",
          "喜",
          "哪",
          "后",
          "同",
          "和",
          "吗",
          "呢",
          "吧",
          "号",
          "名",
          "商",
          "唱",
          "告",
          "哥",
          "向",
          "合",
          "员",
          "尝",
          "各",
          "啊",
          "吵",
          "台",
          "售",
          "否",
          "哲"
      ]
  },
  "囗": {
      "id": "囗",
      "name": "囗 (wéi)",
      "pinyin": "wéi",
      "thaiMeaning": "ล้อมรอบ / กำแพงเมือง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 囗 สื่อถึง ล้อมรอบ / กำแพงเมือง",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '囗' (ล้อมรอบ / กำแพงเมือง) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 31",
      "characterIds": [
          "国",
          "回",
          "四",
          "图",
          "因"
      ]
  },
  "土": {
      "id": "土",
      "name": "土 (tǔ)",
      "pinyin": "tǔ",
      "thaiMeaning": "ดิน / พื้นดิน / แผ่นดิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 土 สื่อถึง ดิน / พื้นดิน / แผ่นดิน",
      "category": "ธรรมชาติและแร่ธาตุ",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '土' (ดิน / พื้นดิน / แผ่นดิน) จัดอยู่ในหมวด ธรรมชาติและแร่ธาตุ เป็นรากศัพท์คังซีลำดับที่ 32",
      "characterIds": [
          "在",
          "块",
          "坐",
          "地",
          "场",
          "城",
          "坏",
          "境",
          "堵",
          "基",
          "坚",
          "圾",
          "塑",
          "填"
      ]
  },
  "士": {
      "id": "士",
      "name": "士 (shì)",
      "pinyin": "shì",
      "thaiMeaning": "ปราชญ์ / นักรบ / ขุนนาง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 士 สื่อถึง ปราชญ์ / นักรบ / ขุนนาง",
      "category": "มนุษย์และสังคม",
      "strokeCount": 3,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '士' (ปราชญ์ / นักรบ / ขุนนาง) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 33",
      "characterIds": [
          "声",
          "壮"
      ]
  },
  "夂": {
      "id": "夂",
      "name": "夂 (zhǐ)",
      "pinyin": "zhǐ",
      "thaiMeaning": "ก้าวเดินช้าๆ / ตามหลัง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 夂 สื่อถึง ก้าวเดินช้าๆ / ตามหลัง",
      "category": "การกระทำและอาการ",
      "strokeCount": 3,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '夂' (ก้าวเดินช้าๆ / ตามหลัง) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 34",
      "characterIds": [
          "条",
          "备",
          "复",
          "处",
          "冬"
      ]
  },
  "夊": {
      "id": "夊",
      "name": "夊 (suī)",
      "pinyin": "suī",
      "thaiMeaning": "เดินลากเท้า",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 夊 สื่อถึง เดินลากเท้า",
      "category": "การกระทำและอาการ",
      "strokeCount": 3,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '夊' (เดินลากเท้า) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 35",
      "characterIds": [
          "夏",
          "复"
      ]
  },
  "夕": {
      "id": "夕",
      "name": "夕 (xī)",
      "pinyin": "xī",
      "thaiMeaning": "ยามเย็น / จันทร์พลบค่ำ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 夕 สื่อถึง ยามเย็น / จันทร์พลบค่ำ",
      "category": "ดาราศาสตร์และกาลเวลา",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '夕' (ยามเย็น / จันทร์พลบค่ำ) จัดอยู่ในหมวด ดาราศาสตร์และกาลเวลา เป็นรากศัพท์คังซีลำดับที่ 36",
      "characterIds": [
          "外",
          "多",
          "夜",
          "够",
          "梦"
      ]
  },
  "大": {
      "id": "大",
      "name": "大 (dà)",
      "pinyin": "dà",
      "thaiMeaning": "ใหญ่ / กว้างขวาง / ผู้ใหญ่",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 大 สื่อถึง ใหญ่ / กว้างขวาง / ผู้ใหญ่",
      "category": "มนุษย์และสังคม",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '大' (ใหญ่ / กว้างขวาง / ผู้ใหญ่) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 37",
      "characterIds": [
          "天",
          "太",
          "头",
          "奇",
          "奖",
          "套"
      ]
  },
  "女": {
      "id": "女",
      "name": "女 (nǚ)",
      "pinyin": "nǚ",
      "thaiMeaning": "ผู้หญิง / แม่ / ความอ่อนโยน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 女 สื่อถึง ผู้หญิง / แม่ / ความอ่อนโยน",
      "category": "มนุษย์และสังคม",
      "strokeCount": 3,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '女' (ผู้หญิง / แม่ / ความอ่อนโยน) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 38",
      "characterIds": [
          "好",
          "妈",
          "她",
          "妹",
          "姐",
          "奶",
          "安",
          "婚",
          "如",
          "姨",
          "妇"
      ]
  },
  "子": {
      "id": "子",
      "name": "子 (zǐ)",
      "pinyin": "zǐ",
      "thaiMeaning": "เด็ก / ลูก / เมล็ดพันธุ์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 子 สื่อถึง เด็ก / ลูก / เมล็ดพันธุ์",
      "category": "มนุษย์และสังคม",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '子' (เด็ก / ลูก / เมล็ดพันธุ์) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 39",
      "characterIds": [
          "字",
          "学",
          "孩",
          "存",
          "孙"
      ]
  },
  "宀": {
      "id": "宀",
      "name": "宀 (mián)",
      "pinyin": "mián",
      "thaiMeaning": "หลังคาบ้าน / ที่อยู่อาศัย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 宀 สื่อถึง หลังคาบ้าน / ที่อยู่อาศัย",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '宀' (หลังคาบ้าน / ที่อยู่อาศัย) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 40",
      "characterIds": [
          "家",
          "客",
          "定",
          "室",
          "宾",
          "完",
          "害",
          "寄",
          "安",
          "容",
          "实",
          "富",
          "寒",
          "宽",
          "密"
      ]
  },
  "寸": {
      "id": "寸",
      "name": "寸 (cùn)",
      "pinyin": "cùn",
      "thaiMeaning": "นิ้ว (มาตราวัด) / ข้อมือ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 寸 สื่อถึง นิ้ว (มาตราวัด) / ข้อมือ",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '寸' (นิ้ว (มาตราวัด) / ข้อมือ) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 41",
      "characterIds": [
          "对",
          "封",
          "导",
          "将"
      ]
  },
  "小": {
      "id": "小",
      "name": "小 (xiǎo)",
      "pinyin": "xiǎo",
      "thaiMeaning": "เล็ก / น้อย / ละเอียด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 小 สื่อถึง เล็ก / น้อย / ละเอียด",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '小' (เล็ก / น้อย / ละเอียด) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 42",
      "characterIds": [
          "少",
          "尖"
      ]
  },
  "尢": {
      "id": "尢",
      "name": "尢 (wāng)",
      "pinyin": "wāng",
      "thaiMeaning": "คนขาพิการ / ขาโก่ง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 尢 สื่อถึง คนขาพิการ / ขาโก่ง",
      "category": "ร่างกายและมนุษย์",
      "strokeCount": 3,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '尢' (คนขาพิการ / ขาโก่ง) จัดอยู่ในหมวด ร่างกายและมนุษย์ เป็นรากศัพท์คังซีลำดับที่ 43",
      "characterIds": [
          "就",
          "尤"
      ]
  },
  "尸": {
      "id": "尸",
      "name": "尸 (shī)",
      "pinyin": "shī",
      "thaiMeaning": "ร่างกาย / ท่านอนเอน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 尸 สื่อถึง ร่างกาย / ท่านอนเอน",
      "category": "ร่างกายและมนุษย์",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '尸' (ร่างกาย / ท่านอนเอน) จัดอยู่ในหมวด ร่างกายและมนุษย์ เป็นรากศัพท์คังซีลำดับที่ 44",
      "characterIds": [
          "尺",
          "局",
          "层",
          "居",
          "展"
      ]
  },
  "屮": {
      "id": "屮",
      "name": "屮 (chè)",
      "pinyin": "chè",
      "thaiMeaning": "ต้นหญ้าผลิใบอ่อน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 屮 สื่อถึง ต้นหญ้าผลิใบอ่อน",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 3,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '屮' (ต้นหญ้าผลิใบอ่อน) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 45",
      "characterIds": [
          "屯"
      ]
  },
  "山": {
      "id": "山",
      "name": "山 (shān)",
      "pinyin": "shān",
      "thaiMeaning": "ภูเขา / เทือกเขา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 山 สื่อถึง ภูเขา / เทือกเขา",
      "category": "ภูมิศาสตร์และธรรมชาติ",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '山' (ภูเขา / เทือกเขา) จัดอยู่ในหมวด ภูมิศาสตร์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 46",
      "characterIds": [
          "岁",
          "岩",
          "峰",
          "岛"
      ]
  },
  "巛": {
      "id": "巛",
      "name": "巛 (chuān)",
      "pinyin": "chuān",
      "thaiMeaning": "แม่น้ำสายยาว / ลำธาร (川)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 巛 สื่อถึง แม่น้ำสายยาว / ลำธาร (川)",
      "category": "ธรรมชาติและของเหลว",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '巛' (แม่น้ำสายยาว / ลำธาร (川)) จัดอยู่ในหมวด ธรรมชาติและของเหลว เป็นรากศัพท์คังซีลำดับที่ 47",
      "characterIds": [
          "巡"
      ]
  },
  "工": {
      "id": "工",
      "name": "工 (gōng)",
      "pinyin": "gōng",
      "thaiMeaning": "งานช่าง / งานฝีมือ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 工 สื่อถึง งานช่าง / งานฝีมือ",
      "category": "เครื่องมือและการงาน",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '工' (งานช่าง / งานฝีมือ) จัดอยู่ในหมวด เครื่องมือและการงาน เป็นรากศัพท์คังซีลำดับที่ 48",
      "characterIds": [
          "左",
          "差",
          "巧"
      ]
  },
  "己": {
      "id": "己",
      "name": "己 (jǐ)",
      "pinyin": "jǐ",
      "thaiMeaning": "ตนเอง / ตัวเอง (已/巳)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 己 สื่อถึง ตนเอง / ตัวเอง (已/巳)",
      "category": "มนุษย์และสังคม",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '己' (ตนเอง / ตัวเอง (已/巳)) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 49",
      "characterIds": [
          "已"
      ]
  },
  "巾": {
      "id": "巾",
      "name": "巾 (jīn)",
      "pinyin": "jīn",
      "thaiMeaning": "ผ้า / ผ้าเช็ดหน้า / ธง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 巾 สื่อถึง ผ้า / ผ้าเช็ดหน้า / ธง",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '巾' (ผ้า / ผ้าเช็ดหน้า / ธง) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 50",
      "characterIds": [
          "师",
          "市",
          "带",
          "帮",
          "常",
          "希",
          "帅"
      ]
  },
  "干": {
      "id": "干",
      "name": "干 (gān)",
      "pinyin": "gān",
      "thaiMeaning": "โล่ป้องกัน / การกระทำ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 干 สื่อถึง โล่ป้องกัน / การกระทำ",
      "category": "เครื่องมือและการงาน",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '干' (โล่ป้องกัน / การกระทำ) จัดอยู่ในหมวด เครื่องมือและการงาน เป็นรากศัพท์คังซีลำดับที่ 51",
      "characterIds": [
          "年",
          "平",
          "并"
      ]
  },
  "幺": {
      "id": "幺",
      "name": "幺 (yāo)",
      "pinyin": "yāo",
      "thaiMeaning": "เล็กจิ๋ว / เส้นด้ายสั้น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 幺 สื่อถึง เล็กจิ๋ว / เส้นด้ายสั้น",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 3,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '幺' (เล็กจิ๋ว / เส้นด้ายสั้น) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 52",
      "characterIds": [
          "么",
          "幼",
          "幽",
          "幻"
      ]
  },
  "广": {
      "id": "广",
      "name": "广 (guǎng)",
      "pinyin": "guǎng",
      "thaiMeaning": "อาคารกว้าง / โรงเรือน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 广 สื่อถึง อาคารกว้าง / โรงเรือน",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '广' (อาคารกว้าง / โรงเรือน) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 53",
      "characterIds": [
          "店",
          "床",
          "度",
          "座",
          "底",
          "库",
          "康"
      ]
  },
  "廴": {
      "id": "廴",
      "name": "廴 (yǐn)",
      "pinyin": "yǐn",
      "thaiMeaning": "การก้าวเดินยาว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 廴 สื่อถึง การก้าวเดินยาว",
      "category": "การกระทำและอาการ",
      "strokeCount": 3,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '廴' (การก้าวเดินยาว) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 54",
      "characterIds": [
          "建",
          "延"
      ]
  },
  "廾": {
      "id": "廾",
      "name": "廾 (gǒng)",
      "pinyin": "gǒng",
      "thaiMeaning": "สองมือประสานยกขึ้น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 廾 สื่อถึง สองมือประสานยกขึ้น",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 3,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '廾' (สองมือประสานยกขึ้น) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 55",
      "characterIds": [
          "开",
          "弄",
          "弃"
      ]
  },
  "弋": {
      "id": "弋",
      "name": "弋 (yì)",
      "pinyin": "yì",
      "thaiMeaning": "ลูกศรผูกเชือก / เสาหลัก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 弋 สื่อถึง ลูกศรผูกเชือก / เสาหลัก",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 3,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '弋' (ลูกศรผูกเชือก / เสาหลัก) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 56",
      "characterIds": [
          "式",
          "贰"
      ]
  },
  "弓": {
      "id": "弓",
      "name": "弓 (gōng)",
      "pinyin": "gōng",
      "thaiMeaning": "คันธนู / เส้นโค้ง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 弓 สื่อถึง คันธนู / เส้นโค้ง",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '弓' (คันธนู / เส้นโค้ง) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 57",
      "characterIds": [
          "张",
          "引",
          "强"
      ]
  },
  "彐": {
      "id": "彐",
      "name": "彐 (jì)",
      "pinyin": "jì",
      "thaiMeaning": "หัวหมูป่า / กรงเล็บ (彑)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 彐 สื่อถึง หัวหมูป่า / กรงเล็บ (彑)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 3,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '彐' (หัวหมูป่า / กรงเล็บ (彑)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 58",
      "characterIds": [
          "当",
          "归",
          "录"
      ]
  },
  "彡": {
      "id": "彡",
      "name": "彡 (shān)",
      "pinyin": "shān",
      "thaiMeaning": "ลวดลาย / ขนยาวสลวย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 彡 สื่อถึง ลวดลาย / ขนยาวสลวย",
      "category": "ความงามและลวดลาย",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '彡' (ลวดลาย / ขนยาวสลวย) จัดอยู่ในหมวด ความงามและลวดลาย เป็นรากศัพท์คังซีลำดับที่ 59",
      "characterIds": [
          "影",
          "形",
          "须",
          "彩"
      ]
  },
  "彳": {
      "id": "彳",
      "name": "彳 (chì)",
      "pinyin": "chì",
      "thaiMeaning": "ก้าวเดินซ้าย / ทางเดินข้างถนน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 彳 สื่อถึง ก้าวเดินซ้าย / ทางเดินข้างถนน",
      "category": "การกระทำและอาการ",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '彳' (ก้าวเดินซ้าย / ทางเดินข้างถนน) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 60",
      "characterIds": [
          "很",
          "后",
          "得",
          "行",
          "往",
          "律",
          "德"
      ]
  },
  "心": {
      "id": "心",
      "name": "心 (xīn)",
      "pinyin": "xīn",
      "thaiMeaning": "หัวใจ / จิตใจ / อารมณ์ (忄)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 心 สื่อถึง หัวใจ / จิตใจ / อารมณ์ (忄)",
      "category": "ร่างกายและจิตใจ",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '心' (หัวใจ / จิตใจ / อารมณ์ (忄)) จัดอยู่ในหมวด ร่างกายและจิตใจ เป็นรากศัพท์คังซีลำดับที่ 61",
      "characterIds": [
          "想",
          "快",
          "忙",
          "意",
          "思",
          "忘",
          "息",
          "懂",
          "慢",
          "急",
          "念",
          "感",
          "必",
          "惯",
          "怀",
          "懒",
          "态"
      ],
      "variants": [
          "忄",
          "⺗"
      ],
      "variantName": "竖心旁 (ใจยืน)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 忄 เช่น 情 快 慢"
  },
  "戈": {
      "id": "戈",
      "name": "戈 (gē)",
      "pinyin": "gē",
      "thaiMeaning": "หอกยาว / อาวุธโบราณ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 戈 สื่อถึง หอกยาว / อาวุธโบราณ",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '戈' (หอกยาว / อาวุธโบราณ) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 62",
      "characterIds": [
          "我",
          "戏",
          "或",
          "成",
          "战",
          "戴"
      ]
  },
  "户": {
      "id": "户",
      "name": "户 (hù)",
      "pinyin": "hù",
      "thaiMeaning": "ประตูบานเดี่ยว / ครัวเรือน (户)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 户 สื่อถึง ประตูบานเดี่ยว / ครัวเรือน (户)",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '户' (ประตูบานเดี่ยว / ครัวเรือน (户)) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 63",
      "characterIds": [
          "房",
          "所",
          "扇"
      ]
  },
  "手": {
      "id": "手",
      "name": "手 (shǒu)",
      "pinyin": "shǒu",
      "thaiMeaning": "มือ / การหยิบจับ (扌)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 手 สื่อถึง มือ / การหยิบจับ (扌)",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '手' (มือ / การหยิบจับ (扌)) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 64",
      "characterIds": [
          "拿",
          "报",
          "才",
          "找",
          "按",
          "搬",
          "掉",
          "择",
          "把",
          "抱",
          "擦",
          "护",
          "换",
          "拉",
          "推",
          "担",
          "挂",
          "掌",
          "摆",
          "搞",
          "技",
          "握",
          "插",
          "拆",
          "拒",
          "扮",
          "扰",
          "折",
          "抽",
          "抬",
          "扔"
      ],
      "variants": [
          "扌",
          "龵"
      ],
      "variantName": "提手旁 (มือข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 扌 เช่น 打 推 拉"
  },
  "支": {
      "id": "支",
      "name": "支 (zhī)",
      "pinyin": "zhī",
      "thaiMeaning": "กิ่งไม้ / ค้ำจุน / แยกย่อย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 支 สื่อถึง กิ่งไม้ / ค้ำจุน / แยกย่อย",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '支' (กิ่งไม้ / ค้ำจุน / แยกย่อย) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 65",
      "characterIds": [
          "枝",
          "肢"
      ]
  },
  "攴": {
      "id": "攴",
      "name": "攴 (pū)",
      "pinyin": "pū",
      "thaiMeaning": "การตี / เคาะเบาๆ (攵)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 攴 สื่อถึง การตี / เคาะเบาๆ (攵)",
      "category": "การกระทำและอาการ",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '攴' (การตี / เคาะเบาๆ (攵)) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 66",
      "characterIds": [
          "教",
          "收",
          "放",
          "改",
          "敢",
          "散"
      ],
      "variants": [
          "攵"
      ],
      "variantName": "反文旁 (มือถือไม้เคาะ)",
      "variantNote": "เมื่ออยู่ด้านขวาแปลงเป็น 攵 เช่น 放 牧 改"
  },
  "文": {
      "id": "文",
      "name": "文 (wén)",
      "pinyin": "wén",
      "thaiMeaning": "อักษร / ลายลักษณ์ / วัฒนธรรม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 文 สื่อถึง อักษร / ลายลักษณ์ / วัฒนธรรม",
      "category": "ความเชื่อและวัฒนธรรม",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '文' (อักษร / ลายลักษณ์ / วัฒนธรรม) จัดอยู่ในหมวด ความเชื่อและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 67",
      "characterIds": [
          "斑",
          "斋"
      ]
  },
  "斗": {
      "id": "斗",
      "name": "斗 (dǒu)",
      "pinyin": "dǒu",
      "thaiMeaning": "กระบวยตัก / ขันตวงข้าว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 斗 สื่อถึง กระบวยตัก / ขันตวงข้าว",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '斗' (กระบวยตัก / ขันตวงข้าว) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 68",
      "characterIds": [
          "料",
          "斜"
      ]
  },
  "斤": {
      "id": "斤",
      "name": "斤 (jīn)",
      "pinyin": "jīn",
      "thaiMeaning": "ขวาน / หน่วยชั่งน้ำหนักจิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 斤 สื่อถึง ขวาน / หน่วยชั่งน้ำหนักจิน",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '斤' (ขวาน / หน่วยชั่งน้ำหนักจิน) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 69",
      "characterIds": [
          "新",
          "近",
          "所",
          "断"
      ]
  },
  "方": {
      "id": "方",
      "name": "方 (fāng)",
      "pinyin": "fāng",
      "thaiMeaning": "สี่เหลี่ยม / ทิศทาง / วิธีการ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 方 สื่อถึง สี่เหลี่ยม / ทิศทาง / วิธีการ",
      "category": "ตัวเลขและสัญลักษณ์",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '方' (สี่เหลี่ยม / ทิศทาง / วิธีการ) จัดอยู่ในหมวด ตัวเลขและสัญลักษณ์ เป็นรากศัพท์คังซีลำดับที่ 70",
      "characterIds": [
          "旅",
          "旁",
          "放",
          "旗"
      ]
  },
  "无": {
      "id": "无",
      "name": "无 (wú)",
      "pinyin": "wú",
      "thaiMeaning": "ไม่มี / ความว่างเปล่า (旡)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 无 สื่อถึง ไม่มี / ความว่างเปล่า (旡)",
      "category": "ปรัชญาและสภาพ",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '无' (ไม่มี / ความว่างเปล่า (旡)) จัดอยู่ในหมวด ปรัชญาและสภาพ เป็นรากศัพท์คังซีลำดับที่ 71",
      "characterIds": [
          "既"
      ]
  },
  "日": {
      "id": "日",
      "name": "日 (rì)",
      "pinyin": "rì",
      "thaiMeaning": "พระอาทิตย์ / กลางวัน / เวลา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 日 สื่อถึง พระอาทิตย์ / กลางวัน / เวลา",
      "category": "ดาราศาสตร์และกาลเวลา",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '日' (พระอาทิตย์ / กลางวัน / เวลา) จัดอยู่ในหมวด ดาราศาสตร์และกาลเวลา เป็นรากศัพท์คังซีลำดับที่ 72",
      "characterIds": [
          "明",
          "早",
          "时",
          "星",
          "是",
          "昨",
          "晴",
          "春",
          "暗",
          "景",
          "普"
      ]
  },
  "曰": {
      "id": "曰",
      "name": "曰 (yuē)",
      "pinyin": "yuē",
      "thaiMeaning": "กล่าวว่า / เอ่ยคำพูด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 曰 สื่อถึง กล่าวว่า / เอ่ยคำพูด",
      "category": "การกระทำและอาการ",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '曰' (กล่าวว่า / เอ่ยคำพูด) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 73",
      "characterIds": [
          "最",
          "曲",
          "更"
      ]
  },
  "月": {
      "id": "月",
      "name": "月 (yuè)",
      "pinyin": "yuè",
      "thaiMeaning": "พระจันทร์ / เนื้อหนังร่างกาย (⺼)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 月 สื่อถึง พระจันทร์ / เนื้อหนังร่างกาย (⺼)",
      "category": "ดาราศาสตร์และร่างกาย",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '月' (พระจันทร์ / เนื้อหนังร่างกาย (⺼)) จัดอยู่ในหมวด ดาราศาสตร์และร่างกาย เป็นรากศัพท์คังซีลำดับที่ 74",
      "characterIds": [
          "期",
          "朋",
          "服",
          "脸",
          "腿",
          "胖",
          "脚",
          "肚",
          "望"
      ]
  },
  "木": {
      "id": "木",
      "name": "木 (mù)",
      "pinyin": "mù",
      "thaiMeaning": "ไม้ / ต้นไม้ / พืชพันธุ์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 木 สื่อถึง ไม้ / ต้นไม้ / พืชพันธุ์",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '木' (ไม้ / ต้นไม้ / พืชพันธุ์) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 75",
      "characterIds": [
          "本",
          "果",
          "样",
          "校",
          "杯",
          "机",
          "来",
          "东",
          "极",
          "条",
          "相",
          "林",
          "森",
          "标",
          "根",
          "格",
          "检",
          "材",
          "查",
          "楼",
          "桥",
          "树",
          "楚",
          "梯",
          "朵",
          "构",
          "榜",
          "棒",
          "桶"
      ]
  },
  "欠": {
      "id": "欠",
      "name": "欠 (qiàn)",
      "pinyin": "qiàn",
      "thaiMeaning": "หาว / ขาดแคลน / อ้าปาก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 欠 สื่อถึง หาว / ขาดแคลน / อ้าปาก",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '欠' (หาว / ขาดแคลน / อ้าปาก) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 76",
      "characterIds": [
          "欢",
          "歌",
          "次",
          "款"
      ]
  },
  "止": {
      "id": "止",
      "name": "止 (zhǐ)",
      "pinyin": "zhǐ",
      "thaiMeaning": "หยุด / เท้ายืนนิ่ง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 止 สื่อถึง หยุด / เท้ายืนนิ่ง",
      "category": "การกระทำและอาการ",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '止' (หยุด / เท้ายืนนิ่ง) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 77",
      "characterIds": [
          "正",
          "此",
          "步"
      ]
  },
  "歹": {
      "id": "歹",
      "name": "歹 (dǎi)",
      "pinyin": "dǎi",
      "thaiMeaning": "ความตาย / กระดูกแตกหัก (歺)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 歹 สื่อถึง ความตาย / กระดูกแตกหัก (歺)",
      "category": "ร่างกายและสภาพ",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '歹' (ความตาย / กระดูกแตกหัก (歺)) จัดอยู่ในหมวด ร่างกายและสภาพ เป็นรากศัพท์คังซีลำดับที่ 78",
      "characterIds": [
          "死",
          "残"
      ]
  },
  "殳": {
      "id": "殳",
      "name": "殳 (shū)",
      "pinyin": "shū",
      "thaiMeaning": "กระบอง / การทุบตี",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 殳 สื่อถึง กระบอง / การทุบตี",
      "category": "เครื่องมือและการกระทำ",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '殳' (กระบอง / การทุบตี) จัดอยู่ในหมวด เครื่องมือและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 79",
      "characterIds": [
          "段",
          "殿"
      ]
  },
  "毋": {
      "id": "毋",
      "name": "毋 (wú)",
      "pinyin": "wú",
      "thaiMeaning": "อย่า / มารดาห้ามปราม (母)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 毋 สื่อถึง อย่า / มารดาห้ามปราม (母)",
      "category": "มนุษย์และสังคม",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '毋' (อย่า / มารดาห้ามปราม (母)) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 80",
      "characterIds": [
          "每",
          "母"
      ]
  },
  "比": {
      "id": "比",
      "name": "比 (bǐ)",
      "pinyin": "bǐ",
      "thaiMeaning": "เปรียบเทียบ / คนยืนเคียงข้าง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 比 สื่อถึง เปรียบเทียบ / คนยืนเคียงข้าง",
      "category": "มนุษย์และสังคม",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '比' (เปรียบเทียบ / คนยืนเคียงข้าง) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 81",
      "characterIds": [
          "毕",
          "毙"
      ]
  },
  "毛": {
      "id": "毛",
      "name": "毛 (máo)",
      "pinyin": "máo",
      "thaiMeaning": "ขนสัตว์ / เส้นผม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 毛 สื่อถึง ขนสัตว์ / เส้นผม",
      "category": "ร่างกายและสัตว์",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '毛' (ขนสัตว์ / เส้นผม) จัดอยู่ในหมวด ร่างกายและสัตว์ เป็นรากศัพท์คังซีลำดับที่ 82",
      "characterIds": [
          "毯",
          "毫"
      ]
  },
  "氏": {
      "id": "氏",
      "name": "氏 (shì)",
      "pinyin": "shì",
      "thaiMeaning": "ตระกูล / แซ่ / ชนเผ่า",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 氏 สื่อถึง ตระกูล / แซ่ / ชนเผ่า",
      "category": "มนุษย์และสังคม",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '氏' (ตระกูล / แซ่ / ชนเผ่า) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 83",
      "characterIds": [
          "民"
      ]
  },
  "气": {
      "id": "气",
      "name": "气 (qì)",
      "pinyin": "qì",
      "thaiMeaning": "อากาศ / ก๊าซ / ลมปราณ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 气 สื่อถึง อากาศ / ก๊าซ / ลมปราณ",
      "category": "ธรรมชาติและพลังงาน",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '气' (อากาศ / ก๊าซ / ลมปราณ) จัดอยู่ในหมวด ธรรมชาติและพลังงาน เป็นรากศัพท์คังซีลำดับที่ 84",
      "characterIds": [
          "氛",
          "氧"
      ]
  },
  "水": {
      "id": "水",
      "name": "水 (shuǐ)",
      "pinyin": "shuǐ",
      "thaiMeaning": "น้ำ / ของเหลว (氵/氺)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 水 สื่อถึง น้ำ / ของเหลว (氵/氺)",
      "category": "ธรรมชาติและของเหลว",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '水' (น้ำ / ของเหลว (氵/氺)) จัดอยู่ในหมวด ธรรมชาติและของเหลว เป็นรากศัพท์คังซีลำดับที่ 85",
      "characterIds": [
          "法",
          "海",
          "洗",
          "游",
          "永",
          "河",
          "活",
          "渴",
          "满",
          "深",
          "汤",
          "消",
          "演",
          "泉",
          "淡",
          "汗",
          "湖",
          "浪",
          "浅",
          "湿",
          "润",
          "涵"
      ],
      "variants": [
          "氵",
          "氺"
      ],
      "variantName": "三点水 (สามขีดน้ำ)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 氵 เช่น 江 河 海"
  },
  "火": {
      "id": "火",
      "name": "火 (huǒ)",
      "pinyin": "huǒ",
      "thaiMeaning": "ไฟ / ความร้อน / ปรุงสุก (灬)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 火 สื่อถึง ไฟ / ความร้อน / ปรุงสุก (灬)",
      "category": "ธรรมชาติและพลังงาน",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '火' (ไฟ / ความร้อน / ปรุงสุก (灬)) จัดอยู่ในหมวด ธรรมชาติและพลังงาน เป็นรากศัพท์คังซีลำดับที่ 86",
      "characterIds": [
          "热",
          "灯",
          "炒",
          "烧",
          "烦",
          "照",
          "烟",
          "炎",
          "烤"
      ],
      "variants": [
          "灬"
      ],
      "variantName": "四点底 (ไฟสี่จุดใต้)",
      "variantNote": "เมื่ออยู่ด้านล่างแปลงเป็น 灬 เช่น 热 点 黑"
  },
  "爪": {
      "id": "爪",
      "name": "爪 (zhǎo)",
      "pinyin": "zhǎo",
      "thaiMeaning": "กรงเล็บ / อุ้งมือ (爫)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 爪 สื่อถึง กรงเล็บ / อุ้งมือ (爫)",
      "category": "สัตว์และร่างกาย",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '爪' (กรงเล็บ / อุ้งมือ (爫)) จัดอยู่ในหมวด สัตว์และร่างกาย เป็นรากศัพท์คังซีลำดับที่ 87",
      "characterIds": [
          "爱",
          "爬"
      ]
  },
  "父": {
      "id": "父",
      "name": "父 (fù)",
      "pinyin": "fù",
      "thaiMeaning": "พ่อ / บิดา / ผู้ทำงานหนัก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 父 สื่อถึง พ่อ / บิดา / ผู้ทำงานหนัก",
      "category": "มนุษย์และสังคม",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '父' (พ่อ / บิดา / ผู้ทำงานหนัก) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 88",
      "characterIds": [
          "爸",
          "爷"
      ]
  },
  "爻": {
      "id": "爻",
      "name": "爻 (yáo)",
      "pinyin": "yáo",
      "thaiMeaning": "เส้นผูกโยง / ยันต์ปากัว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 爻 สื่อถึง เส้นผูกโยง / ยันต์ปากัว",
      "category": "ความเชื่อและวัฒนธรรม",
      "strokeCount": 4,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '爻' (เส้นผูกโยง / ยันต์ปากัว) จัดอยู่ในหมวด ความเชื่อและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 89",
      "characterIds": [
          "爽"
      ]
  },
  "丬": {
      "id": "丬",
      "name": "丬 (qiáng)",
      "pinyin": "qiáng",
      "thaiMeaning": "ท่อนไม้ผ่าซีก / เตียงนอน (丬)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 丬 สื่อถึง ท่อนไม้ผ่าซีก / เตียงนอน (丬)",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 4,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '丬' (ท่อนไม้ผ่าซีก / เตียงนอน (丬)) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 90",
      "characterIds": [
          "将",
          "壮"
      ]
  },
  "片": {
      "id": "片",
      "name": "片 (piàn)",
      "pinyin": "piàn",
      "thaiMeaning": "แผ่นไม้บาง / แผ่นชิ้นส่วน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 片 สื่อถึง แผ่นไม้บาง / แผ่นชิ้นส่วน",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '片' (แผ่นไม้บาง / แผ่นชิ้นส่วน) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 91",
      "characterIds": [
          "版",
          "牌"
      ]
  },
  "牙": {
      "id": "牙",
      "name": "牙 (yá)",
      "pinyin": "yá",
      "thaiMeaning": "ฟันกราม / เขี้ยวสัตว์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 牙 สื่อถึง ฟันกราม / เขี้ยวสัตว์",
      "category": "ร่างกายและสัตว์",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '牙' (ฟันกราม / เขี้ยวสัตว์) จัดอยู่ในหมวด ร่างกายและสัตว์ เป็นรากศัพท์คังซีลำดับที่ 92",
      "characterIds": [
          "雅",
          "芽"
      ]
  },
  "牛": {
      "id": "牛",
      "name": "牛 (niú)",
      "pinyin": "niú",
      "thaiMeaning": "วัว / โค (牜)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 牛 สื่อถึง วัว / โค (牜)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '牛' (วัว / โค (牜)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 93",
      "characterIds": [
          "件",
          "物",
          "特",
          "告",
          "牧"
      ]
  },
  "犬": {
      "id": "犬",
      "name": "犬 (quǎn)",
      "pinyin": "quǎn",
      "thaiMeaning": "สุนัข / สัตว์สี่เท้า (犭)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 犬 สื่อถึง สุนัข / สัตว์สี่เท้า (犭)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '犬' (สุนัข / สัตว์สี่เท้า (犭)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 94",
      "characterIds": [
          "狗",
          "状",
          "猜",
          "狂",
          "猴",
          "狮"
      ],
      "variants": [
          "犭"
      ],
      "variantName": "反犬旁 (หมาข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 犭 เช่น 狗 猫 狂"
  },
  "玄": {
      "id": "玄",
      "name": "玄 (xuán)",
      "pinyin": "xuán",
      "thaiMeaning": "สีดำลึกล้ำ / ปริศนาลี้ลับ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 玄 สื่อถึง สีดำลึกล้ำ / ปริศนาลี้ลับ",
      "category": "ปรัชญาและสภาพ",
      "strokeCount": 5,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '玄' (สีดำลึกล้ำ / ปริศนาลี้ลับ) จัดอยู่ในหมวด ปรัชญาและสภาพ เป็นรากศัพท์คังซีลำดับที่ 95",
      "characterIds": [
          "率"
      ]
  },
  "玉": {
      "id": "玉",
      "name": "玉 (yù)",
      "pinyin": "yù",
      "thaiMeaning": "หยก / อัญมณีล้ำค่า (王/玊)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 玉 สื่อถึง หยก / อัญมณีล้ำค่า (王/玊)",
      "category": "ธรรมชาติและแร่ธาตุ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '玉' (หยก / อัญมณีล้ำค่า (王/玊)) จัดอยู่ในหมวด ธรรมชาติและแร่ธาตุ เป็นรากศัพท์คังซีลำดับที่ 96",
      "characterIds": [
          "玩",
          "现",
          "理",
          "班",
          "球",
          "环"
      ],
      "variants": [
          "王"
      ],
      "variantName": "王字旁 (หยกข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายตัดจุดออกเป็น 王 เช่น 玩 现 环"
  },
  "瓜": {
      "id": "瓜",
      "name": "瓜 (guā)",
      "pinyin": "guā",
      "thaiMeaning": "ผลแตง / พืชเถาเลื้อย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 瓜 สื่อถึง ผลแตง / พืชเถาเลื้อย",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 5,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '瓜' (ผลแตง / พืชเถาเลื้อย) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 97",
      "characterIds": [
          "瓣"
      ]
  },
  "瓦": {
      "id": "瓦",
      "name": "瓦 (wǎ)",
      "pinyin": "wǎ",
      "thaiMeaning": "กระเบื้องดินเผา / ภาชนะดิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 瓦 สื่อถึง กระเบื้องดินเผา / ภาชนะดิน",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 5,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '瓦' (กระเบื้องดินเผา / ภาชนะดิน) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 98",
      "characterIds": [
          "瓶",
          "瓷"
      ]
  },
  "甘": {
      "id": "甘",
      "name": "甘 (gān)",
      "pinyin": "gān",
      "thaiMeaning": "รสหวาน / รื่นรมย์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 甘 สื่อถึง รสหวาน / รื่นรมย์",
      "category": "อาหารและรสชาติ",
      "strokeCount": 5,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '甘' (รสหวาน / รื่นรมย์) จัดอยู่ในหมวด อาหารและรสชาติ เป็นรากศัพท์คังซีลำดับที่ 99",
      "characterIds": [
          "甜",
          "甚"
      ]
  },
  "生": {
      "id": "生",
      "name": "生 (shēng)",
      "pinyin": "shēng",
      "thaiMeaning": "เกิด / เติบโต / ชีวิต",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 生 สื่อถึง เกิด / เติบโต / ชีวิต",
      "category": "ปรัชญาและสภาพ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '生' (เกิด / เติบโต / ชีวิต) จัดอยู่ในหมวด ปรัชญาและสภาพ เป็นรากศัพท์คังซีลำดับที่ 100",
      "characterIds": [
          "产",
          "甥"
      ]
  },
  "用": {
      "id": "用",
      "name": "用 (yòng)",
      "pinyin": "yòng",
      "thaiMeaning": "ใช้สอย / ประโยชน์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 用 สื่อถึง ใช้สอย / ประโยชน์",
      "category": "การกระทำและอาการ",
      "strokeCount": 5,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '用' (ใช้สอย / ประโยชน์) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 101",
      "characterIds": [
          "甩"
      ]
  },
  "田": {
      "id": "田",
      "name": "田 (tián)",
      "pinyin": "tián",
      "thaiMeaning": "ทุ่งนา / ไร่นาเกษตร",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 田 สื่อถึง ทุ่งนา / ไร่นาเกษตร",
      "category": "ภูมิศาสตร์และเกษตรกรรม",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '田' (ทุ่งนา / ไร่นาเกษตร) จัดอยู่ในหมวด ภูมิศาสตร์และเกษตรกรรม เป็นรากศัพท์คังซีลำดับที่ 102",
      "characterIds": [
          "男",
          "电",
          "界",
          "画",
          "留",
          "略"
      ]
  },
  "匹": {
      "id": "匹",
      "name": "匹 (pǐ)",
      "pinyin": "pǐ",
      "thaiMeaning": "ม้วนผ้า / เท้าก้าวเดิน (𤴔)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 匹 สื่อถึง ม้วนผ้า / เท้าก้าวเดิน (𤴔)",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 5,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '匹' (ม้วนผ้า / เท้าก้าวเดิน (𤴔)) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 103",
      "characterIds": [
          "甚"
      ]
  },
  "疒": {
      "id": "疒",
      "name": "疒 (nè)",
      "pinyin": "nè",
      "thaiMeaning": "ความเจ็บป่วย / คนนอนป่วย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 疒 สื่อถึง ความเจ็บป่วย / คนนอนป่วย",
      "category": "ร่างกายและสุขภาพ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '疒' (ความเจ็บป่วย / คนนอนป่วย) จัดอยู่ในหมวด ร่างกายและสุขภาพ เป็นรากศัพท์คังซีลำดับที่ 104",
      "characterIds": [
          "病",
          "疼",
          "瘦",
          "痛"
      ]
  },
  "癶": {
      "id": "癶",
      "name": "癶 (bō)",
      "pinyin": "bō",
      "thaiMeaning": "สองเท้าก้าวแยกออก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 癶 สื่อถึง สองเท้าก้าวแยกออก",
      "category": "การกระทำและอาการ",
      "strokeCount": 5,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '癶' (สองเท้าก้าวแยกออก) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 105",
      "characterIds": [
          "登"
      ]
  },
  "白": {
      "id": "白",
      "name": "白 (bái)",
      "pinyin": "bái",
      "thaiMeaning": "สีขาว / ชัดเจน / บริสุทธิ์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 白 สื่อถึง สีขาว / ชัดเจน / บริสุทธิ์",
      "category": "สีสันและสภาพ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '白' (สีขาว / ชัดเจน / บริสุทธิ์) จัดอยู่ในหมวด สีสันและสภาพ เป็นรากศัพท์คังซีลำดับที่ 106",
      "characterIds": [
          "的",
          "百",
          "皇"
      ]
  },
  "皮": {
      "id": "皮",
      "name": "皮 (pí)",
      "pinyin": "pí",
      "thaiMeaning": "ผิวหนัง / เปลือกไม้",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 皮 สื่อถึง ผิวหนัง / เปลือกไม้",
      "category": "ร่างกายและพืช",
      "strokeCount": 5,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '皮' (ผิวหนัง / เปลือกไม้) จัดอยู่ในหมวด ร่างกายและพืช เป็นรากศัพท์คังซีลำดับที่ 107",
      "characterIds": [
          "破",
          "彼"
      ]
  },
  "皿": {
      "id": "皿",
      "name": "皿 (mǐn)",
      "pinyin": "mǐn",
      "thaiMeaning": "จานชาม / ภาชนะใส่อาหาร",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 皿 สื่อถึง จานชาม / ภาชนะใส่อาหาร",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '皿' (จานชาม / ภาชนะใส่อาหาร) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 108",
      "characterIds": [
          "盘",
          "盆",
          "盒"
      ]
  },
  "目": {
      "id": "目",
      "name": "目 (mù)",
      "pinyin": "mù",
      "thaiMeaning": "ดวงตา / การมองเห็น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 目 สื่อถึง ดวงตา / การมองเห็น",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '目' (ดวงตา / การมองเห็น) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 109",
      "characterIds": [
          "看",
          "睡",
          "眼",
          "睛",
          "省"
      ]
  },
  "矛": {
      "id": "矛",
      "name": "矛 (máo)",
      "pinyin": "máo",
      "thaiMeaning": "หอกโบราณ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 矛 สื่อถึง หอกโบราณ",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 5,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '矛' (หอกโบราณ) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 110",
      "characterIds": [
      "柔"
    ]
  },
  "矢": {
      "id": "矢",
      "name": "矢 (shǐ)",
      "pinyin": "shǐ",
      "thaiMeaning": "ลูกศรธนู / ตรงแน่ว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 矢 สื่อถึง ลูกศรธนู / ตรงแน่ว",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 5,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '矢' (ลูกศรธนู / ตรงแน่ว) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 111",
      "characterIds": [
      "医",
      "知",
      "短",
      "矮"
    ]
  },
  "石": {
      "id": "石",
      "name": "石 (shí)",
      "pinyin": "shí",
      "thaiMeaning": "หิน / ก้อนศิลา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 石 สื่อถึง หิน / ก้อนศิลา",
      "category": "ธรรมชาติและแร่ธาตุ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '石' (หิน / ก้อนศิลา) จัดอยู่ในหมวด ธรรมชาติและแร่ธาตุ เป็นรากศัพท์คังซีลำดับที่ 112",
      "characterIds": [
      "岩",
      "破",
      "确",
      "研",
      "硬",
      "磨",
      "硕"
    ]
  },
  "示": {
      "id": "示",
      "name": "示 (shì)",
      "pinyin": "shì",
      "thaiMeaning": "แท่นบูชา / เทพเจ้า (礻)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 示 สื่อถึง แท่นบูชา / เทพเจ้า (礻)",
      "category": "ความเชื่อและวัฒนธรรม",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '示' (แท่นบูชา / เทพเจ้า (礻)) จัดอยู่ในหมวด ความเชื่อและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 113",
      "characterIds": [
      "社",
      "视",
      "礼",
      "神",
      "票",
      "标",
      "际",
      "禁"
    ],
      "variants": [
          "礻"
      ],
      "variantName": "示字旁 (เทพข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 礻 เช่น 祝 福 神"
  },
  "禸": {
      "id": "禸",
      "name": "禸 (róu)",
      "pinyin": "róu",
      "thaiMeaning": "รอยเท้าสัตว์ป่า",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 禸 สื่อถึง รอยเท้าสัตว์ป่า",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 5,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '禸' (รอยเท้าสัตว์ป่า) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 114",
      "characterIds": [
          "禸"
      ]
  },
  "禾": {
      "id": "禾",
      "name": "禾 (hé)",
      "pinyin": "hé",
      "thaiMeaning": "ต้นข้าว / ธัญพืชรวงทอง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 禾 สื่อถึง ต้นข้าว / ธัญพืชรวงทอง",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '禾' (ต้นข้าว / ธัญพืชรวงทอง) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 115",
      "characterIds": [
      "年",
      "秋",
      "和",
      "种",
      "科",
      "香",
      "私",
      "积",
      "利",
      "秒",
      "秀",
      "租"
    ]
  },
  "穴": {
      "id": "穴",
      "name": "穴 (xué)",
      "pinyin": "xué",
      "thaiMeaning": "ถ้ำ / โพรงดิน / รู",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 穴 สื่อถึง ถ้ำ / โพรงดิน / รู",
      "category": "ภูมิศาสตร์และธรรมชาติ",
      "strokeCount": 5,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '穴' (ถ้ำ / โพรงดิน / รู) จัดอยู่ในหมวด ภูมิศาสตร์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 116",
      "characterIds": [
          "穿",
          "空",
          "突",
          "究",
          "窗",
          "穷"
      ]
  },
  "立": {
      "id": "立",
      "name": "立 (lì)",
      "pinyin": "lì",
      "thaiMeaning": "ยืนตรง / ตั้งมั่น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 立 สื่อถึง ยืนตรง / ตั้งมั่น",
      "category": "การกระทำและอาการ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '立' (ยืนตรง / ตั้งมั่น) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 117",
      "characterIds": [
          "站",
          "童",
          "端",
          "亲",
          "竟"
      ]
  },
  "竹": {
      "id": "竹",
      "name": "竹 (zhú)",
      "pinyin": "zhú",
      "thaiMeaning": "ต้นไผ่ / ไม้ไผ่ (⺮)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 竹 สื่อถึง ต้นไผ่ / ไม้ไผ่ (⺮)",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '竹' (ต้นไผ่ / ไม้ไผ่ (⺮)) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 118",
      "characterIds": [
          "等",
          "第",
          "笔",
          "笑",
          "答",
          "管",
          "简",
          "算",
          "竿",
          "篇",
          "符",
          "策"
      ],
      "variants": [
          "⺮"
      ],
      "variantName": "竹字头 (ไผ่บน)",
      "variantNote": "เมื่ออยู่ด้านบนแปลงเป็น ⺮ เช่น 笑 筷 简"
  },
  "米": {
      "id": "米",
      "name": "米 (mǐ)",
      "pinyin": "mǐ",
      "thaiMeaning": "ข้าวสาร / เมล็ดข้าว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 米 สื่อถึง ข้าวสาร / เมล็ดข้าว",
      "category": "อาหารและพืช",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '米' (ข้าวสาร / เมล็ดข้าว) จัดอยู่ในหมวด อาหารและพืช เป็นรากศัพท์คังซีลำดับที่ 119",
      "characterIds": [
          "粉",
          "糖",
          "类",
          "糕",
          "精",
          "粗"
      ]
  },
  "糸": {
      "id": "糸",
      "name": "糸 (mì)",
      "pinyin": "mì",
      "thaiMeaning": "เส้นด้าย / ผ้าไหม (纟)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 糸 สื่อถึง เส้นด้าย / ผ้าไหม (纟)",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 6,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '糸' (เส้นด้าย / ผ้าไหม (纟)) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 120",
      "characterIds": [
          "累",
          "给",
          "红",
          "经",
          "紫",
          "纪",
          "绝",
          "级",
          "绿",
          "细",
          "紧",
          "编",
          "繁",
          "综"
      ],
      "variants": [
          "纟"
      ],
      "variantName": "绞丝旁 (เส้นไหมข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายในตัวย่อเป็น 纟 เช่น 红 绿 给 细"
  },
  "缶": {
      "id": "缶",
      "name": "缶 (fǒu)",
      "pinyin": "fǒu",
      "thaiMeaning": "ไหดินเผา / หม้อดิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 缶 สื่อถึง ไหดินเผา / หม้อดิน",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 6,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '缶' (ไหดินเผา / หม้อดิน) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 121",
      "characterIds": [
          "缺",
          "罐"
      ]
  },
  "网": {
      "id": "网",
      "name": "网 (wǎng)",
      "pinyin": "wǎng",
      "thaiMeaning": "ตาข่ายดักสัตว์ / ร่างแห (罒/⺳)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 网 สื่อถึง ตาข่ายดักสัตว์ / ร่างแห (罒/⺳)",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '网' (ตาข่ายดักสัตว์ / ร่างแห (罒/⺳)) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 122",
      "characterIds": [
          "罗",
          "置",
          "罪",
          "罚"
      ],
      "variants": [
          "罒",
          "⺲"
      ],
      "variantName": "四字头 (ตาข่ายบน)",
      "variantNote": "เมื่ออยู่ด้านบนแปลงเป็น 罒 เช่น 罗 罚 署"
  },
  "羊": {
      "id": "羊",
      "name": "羊 (yáng)",
      "pinyin": "yáng",
      "thaiMeaning": "แพะ / แกะ / มงคล (⺶/⺷)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 羊 สื่อถึง แพะ / แกะ / มงคล (⺶/⺷)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '羊' (แพะ / แกะ / มงคล (⺶/⺷)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 123",
      "characterIds": [
          "着",
          "美",
          "差",
          "群",
          "鲜"
      ],
      "variants": [
          "⺶",
          "⺷"
      ],
      "variantName": "羊字头 (แพะบน)",
      "variantNote": "เมื่ออยู่ด้านบนแปลงเป็น ⺶ เช่น 美 羡 群"
  },
  "羽": {
      "id": "羽",
      "name": "羽 (yǔ)",
      "pinyin": "yǔ",
      "thaiMeaning": "ขนนก / ปีกบิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 羽 สื่อถึง ขนนก / ปีกบิน",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '羽' (ขนนก / ปีกบิน) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 124",
      "characterIds": [
          "习",
          "翅",
          "翻"
      ]
  },
  "老": {
      "id": "老",
      "name": "老 (lǎo)",
      "pinyin": "lǎo",
      "thaiMeaning": "คนชรา / ผู้อาวุโส (耂)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 老 สื่อถึง คนชรา / ผู้อาวุโส (耂)",
      "category": "มนุษย์และสังคม",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '老' (คนชรา / ผู้อาวุโส (耂)) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 125",
      "characterIds": [
          "考",
          "者"
      ],
      "variants": [
          "耂"
      ],
      "variantName": "老字头 (แก่บน)",
      "variantNote": "เมื่ออยู่ด้านบนตัดส่วนล่างออกเป็น 耂 เช่น 考 者"
  },
  "而": {
      "id": "而",
      "name": "而 (ér)",
      "pinyin": "ér",
      "thaiMeaning": "เคราคาง / และ, แต่",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 而 สื่อถึง เคราคาง / และ, แต่",
      "category": "ร่างกายและภาษา",
      "strokeCount": 6,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '而' (เคราคาง / และ, แต่) จัดอยู่ในหมวด ร่างกายและภาษา เป็นรากศัพท์คังซีลำดับที่ 126",
      "characterIds": [
          "耐",
          "耍"
      ]
  },
  "耒": {
      "id": "耒",
      "name": "耒 (lěi)",
      "pinyin": "lěi",
      "thaiMeaning": "คันไถดิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 耒 สื่อถึง คันไถดิน",
      "category": "เครื่องมือและการงาน",
      "strokeCount": 6,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '耒' (คันไถดิน) จัดอยู่ในหมวด เครื่องมือและการงาน เป็นรากศัพท์คังซีลำดับที่ 127",
      "characterIds": [
          "耕",
          "耗"
      ]
  },
  "耳": {
      "id": "耳",
      "name": "耳 (ěr)",
      "pinyin": "ěr",
      "thaiMeaning": "หู / การได้ยิน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 耳 สื่อถึง หู / การได้ยิน",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '耳' (หู / การได้ยิน) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 128",
      "characterIds": [
          "听",
          "取",
          "联",
          "聪",
          "聊"
      ]
  },
  "聿": {
      "id": "聿",
      "name": "聿 (yù)",
      "pinyin": "yù",
      "thaiMeaning": "พู่กันเขียนหนังสือ (⺻)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 聿 สื่อถึง พู่กันเขียนหนังสือ (⺻)",
      "category": "เครื่องมือและการงาน",
      "strokeCount": 6,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '聿' (พู่กันเขียนหนังสือ (⺻)) จัดอยู่ในหมวด เครื่องมือและการงาน เป็นรากศัพท์คังซีลำดับที่ 129",
      "characterIds": [
          "律"
      ]
  },
  "肉": {
      "id": "肉",
      "name": "肉 (ròu)",
      "pinyin": "ròu",
      "thaiMeaning": "เนื้อสัตว์ / กล้ามเนื้อ (⺼)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 肉 สื่อถึง เนื้อสัตว์ / กล้ามเนื้อ (⺼)",
      "category": "อาหารและร่างกาย",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '肉' (เนื้อสัตว์ / กล้ามเนื้อ (⺼)) จัดอยู่ในหมวด อาหารและร่างกาย เป็นรากศัพท์คังซีลำดับที่ 130",
      "characterIds": [
          "能",
          "腐",
          "脚",
          "胖",
          "脏",
          "肥",
          "脱",
          "脉"
      ],
      "variants": [
          "⺼",
          "月"
      ],
      "variantName": "肉月旁 (ข้างเนื้อ)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 月 แทนอวัยวะร่างกาย เช่น 胖 脸 腿"
  },
  "臣": {
      "id": "臣",
      "name": "臣 (chén)",
      "pinyin": "chén",
      "thaiMeaning": "ข้าราชบริพาร / ก้มคำนับ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 臣 สื่อถึง ข้าราชบริพาร / ก้มคำนับ",
      "category": "มนุษย์และสังคม",
      "strokeCount": 6,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '臣' (ข้าราชบริพาร / ก้มคำนับ) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 131",
      "characterIds": [
          "卧",
          "临"
      ]
  },
  "自": {
      "id": "自",
      "name": "自 (zì)",
      "pinyin": "zì",
      "thaiMeaning": "จมูก / ตนเอง / เริ่มต้น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 自 สื่อถึง จมูก / ตนเอง / เริ่มต้น",
      "category": "ร่างกายและปรัชญา",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '自' (จมูก / ตนเอง / เริ่มต้น) จัดอยู่ในหมวด ร่างกายและปรัชญา เป็นรากศัพท์คังซีลำดับที่ 132",
      "characterIds": [
          "息",
          "臭"
      ]
  },
  "至": {
      "id": "至",
      "name": "至 (zhì)",
      "pinyin": "zhì",
      "thaiMeaning": "มาถึง / ปลายทาง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 至 สื่อถึง มาถึง / ปลายทาง",
      "category": "การกระทำและอาการ",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '至' (มาถึง / ปลายทาง) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 133",
      "characterIds": [
          "倒",
          "致"
      ]
  },
  "臼": {
      "id": "臼",
      "name": "臼 (jiù)",
      "pinyin": "jiù",
      "thaiMeaning": "ครกตำข้าว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 臼 สื่อถึง ครกตำข้าว",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 6,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '臼' (ครกตำข้าว) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 134",
      "characterIds": [
          "舅",
          "旧"
      ]
  },
  "舌": {
      "id": "舌",
      "name": "舌 (shé)",
      "pinyin": "shé",
      "thaiMeaning": "ลิ้น / รสสัมผัสและการพูด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 舌 สื่อถึง ลิ้น / รสสัมผัสและการพูด",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '舌' (ลิ้น / รสสัมผัสและการพูด) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 135",
      "characterIds": [
          "话",
          "甜"
      ]
  },
  "舛": {
      "id": "舛",
      "name": "舛 (chuǎn)",
      "pinyin": "chuǎn",
      "thaiMeaning": "สองเท้าหันตรงข้าม / ขัดแย้ง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 舛 สื่อถึง สองเท้าหันตรงข้าม / ขัดแย้ง",
      "category": "การกระทำและอาการ",
      "strokeCount": 6,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '舛' (สองเท้าหันตรงข้าม / ขัดแย้ง) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 136",
      "characterIds": [
          "舞"
      ]
  },
  "舟": {
      "id": "舟",
      "name": "舟 (zhōu)",
      "pinyin": "zhōu",
      "thaiMeaning": "เรือพาย / นาวา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 舟 สื่อถึง เรือพาย / นาวา",
      "category": "ยานพาหนะและการเดินทาง",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '舟' (เรือพาย / นาวา) จัดอยู่ในหมวด ยานพาหนะและการเดินทาง เป็นรากศัพท์คังซีลำดับที่ 137",
      "characterIds": [
          "船",
          "航"
      ]
  },
  "艮": {
      "id": "艮",
      "name": "艮 (gèn)",
      "pinyin": "gèn",
      "thaiMeaning": "ความเด็ดเดี่ยว / หันหลัง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 艮 สื่อถึง ความเด็ดเดี่ยว / หันหลัง",
      "category": "ปรัชญาและสภาพ",
      "strokeCount": 6,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '艮' (ความเด็ดเดี่ยว / หันหลัง) จัดอยู่ในหมวด ปรัชญาและสภาพ เป็นรากศัพท์คังซีลำดับที่ 138",
      "characterIds": [
          "很",
          "跟",
          "根"
      ]
  },
  "色": {
      "id": "色",
      "name": "色 (sè)",
      "pinyin": "sè",
      "thaiMeaning": "สีสัน / สีหน้า / ความงาม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 色 สื่อถึง สีสัน / สีหน้า / ความงาม",
      "category": "สีสันและสภาพ",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '色' (สีสัน / สีหน้า / ความงาม) จัดอยู่ในหมวด สีสันและสภาพ เป็นรากศัพท์คังซีลำดับที่ 139",
      "characterIds": [
          "艳"
      ]
  },
  "草": {
      "id": "草",
      "name": "草 (cǎo)",
      "pinyin": "cǎo",
      "thaiMeaning": "หญ้า / พืชสมุนไพร (艹)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 草 สื่อถึง หญ้า / พืชสมุนไพร (艹)",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 6,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '草' (หญ้า / พืชสมุนไพร (艹)) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 140",
      "characterIds": [
          "茶",
          "花"
      ]
  },
  "虍": {
      "id": "虍",
      "name": "虍 (hū)",
      "pinyin": "hū",
      "thaiMeaning": "ลายเสือโคร่ง / เสือ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 虍 สื่อถึง ลายเสือโคร่ง / เสือ",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '虍' (ลายเสือโคร่ง / เสือ) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 141",
      "characterIds": [
          "虎",
          "虑"
      ]
  },
  "虫": {
      "id": "虫",
      "name": "虫 (chóng)",
      "pinyin": "chóng",
      "thaiMeaning": "แมลง / หนอน / สัตว์เลื้อยคลาน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 虫 สื่อถึง แมลง / หนอน / สัตว์เลื้อยคลาน",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '虫' (แมลง / หนอน / สัตว์เลื้อยคลาน) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 142",
      "characterIds": [
          "蛋",
          "虽",
          "蛇",
          "蜜",
          "蝶"
      ]
  },
  "血": {
      "id": "血",
      "name": "血 (xiě)",
      "pinyin": "xiě",
      "thaiMeaning": "โลหิต / เลือด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 血 สื่อถึง โลหิต / เลือด",
      "category": "ร่างกายและของเหลว",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '血' (โลหิต / เลือด) จัดอยู่ในหมวด ร่างกายและของเหลว เป็นรากศัพท์คังซีลำดับที่ 143",
      "characterIds": [
          "众"
      ]
  },
  "行": {
      "id": "行",
      "name": "行 (xíng)",
      "pinyin": "xíng",
      "thaiMeaning": "สี่แยกถนน / เดินทาง / ปฏิบัติ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 行 สื่อถึง สี่แยกถนน / เดินทาง / ปฏิบัติ",
      "category": "การกระทำและการเดินทาง",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '行' (สี่แยกถนน / เดินทาง / ปฏิบัติ) จัดอยู่ในหมวด การกระทำและการเดินทาง เป็นรากศัพท์คังซีลำดับที่ 144",
      "characterIds": [
          "街",
          "术",
          "衡"
      ]
  },
  "衣": {
      "id": "衣",
      "name": "衣 (yī)",
      "pinyin": "yī",
      "thaiMeaning": "เสื้อผ้า / เครื่องนุ่งห่ม (衤)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 衣 สื่อถึง เสื้อผ้า / เครื่องนุ่งห่ม (衤)",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '衣' (เสื้อผ้า / เครื่องนุ่งห่ม (衤)) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 145",
      "characterIds": [
          "表",
          "装",
          "被",
          "衬",
          "裤",
          "衫",
          "袋",
          "袜"
      ],
      "variants": [
          "衤"
      ],
      "variantName": "衣字旁 (เสื้อข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 衤 เช่น 裤 袜 被"
  },
  "襾": {
      "id": "襾",
      "name": "襾 (yà)",
      "pinyin": "yà",
      "thaiMeaning": "ฝาครอบ / ทิศตะวันตก (西/覀)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 襾 สื่อถึง ฝาครอบ / ทิศตะวันตก (西/覀)",
      "category": "ดาราศาสตร์และทิศทาง",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '襾' (ฝาครอบ / ทิศตะวันตก (西/覀)) จัดอยู่ในหมวด ดาราศาสตร์และทิศทาง เป็นรากศัพท์คังซีลำดับที่ 146",
      "characterIds": [
          "西",
          "要",
          "票"
      ]
  },
  "见": {
      "id": "见",
      "name": "见 (jiàn)",
      "pinyin": "jiàn",
      "thaiMeaning": "มองเห็น / พบเจอ (见)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 见 สื่อถึง มองเห็น / พบเจอ (见)",
      "category": "การกระทำและอาการ",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '见' (มองเห็น / พบเจอ (见)) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 147",
      "characterIds": [
          "视",
          "观",
          "规",
          "览"
      ]
  },
  "角": {
      "id": "角",
      "name": "角 (jiǎo)",
      "pinyin": "jiǎo",
      "thaiMeaning": "เขาสัตว์ / มุม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 角 สื่อถึง เขาสัตว์ / มุม",
      "category": "สัตว์และร่างกาย",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '角' (เขาสัตว์ / มุม) จัดอยู่ในหมวด สัตว์และร่างกาย เป็นรากศัพท์คังซีลำดับที่ 148",
      "characterIds": [
          "解",
          "触"
      ]
  },
  "言": {
      "id": "言",
      "name": "言 (yán)",
      "pinyin": "yán",
      "thaiMeaning": "คำพูด / ภาษา / วาจา (讠)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 言 สื่อถึง คำพูด / ภาษา / วาจา (讠)",
      "category": "ภาษาและการสื่อสาร",
      "strokeCount": 7,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '言' (คำพูด / ภาษา / วาจา (讠)) จัดอยู่ในหมวด ภาษาและการสื่อสาร เป็นรากศัพท์คังซีลำดับที่ 149",
      "characterIds": [
          "读",
          "话",
          "认",
          "说",
          "语",
          "词",
          "课",
          "警",
          "该",
          "计",
          "记",
          "讲",
          "誓",
          "访",
          "谈",
          "详",
          "讨",
          "论"
      ],
      "variants": [
          "讠"
      ],
      "variantName": "言字旁 (คำพูดข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายในตัวย่อเป็น 讠 เช่น 话 说 读 认"
  },
  "谷": {
      "id": "谷",
      "name": "谷 (gǔ)",
      "pinyin": "gǔ",
      "thaiMeaning": "หุบเขา / ลำธารในเขา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 谷 สื่อถึง หุบเขา / ลำธารในเขา",
      "category": "ภูมิศาสตร์และธรรมชาติ",
      "strokeCount": 7,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '谷' (หุบเขา / ลำธารในเขา) จัดอยู่ในหมวด ภูมิศาสตร์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 150",
      "characterIds": [
          "欲"
      ]
  },
  "豆": {
      "id": "豆",
      "name": "豆 (dòu)",
      "pinyin": "dòu",
      "thaiMeaning": "ถั่ว / ภาชนะบูชาทรงสูง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 豆 สื่อถึง ถั่ว / ภาชนะบูชาทรงสูง",
      "category": "อาหารและพืช",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '豆' (ถั่ว / ภาชนะบูชาทรงสูง) จัดอยู่ในหมวด อาหารและพืช เป็นรากศัพท์คังซีลำดับที่ 151",
      "characterIds": [
          "短"
      ]
  },
  "豕": {
      "id": "豕",
      "name": "豕 (shǐ)",
      "pinyin": "shǐ",
      "thaiMeaning": "หมู / สุกร",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 豕 สื่อถึง หมู / สุกร",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '豕' (หมู / สุกร) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 152",
      "characterIds": [
          "家",
          "象"
      ]
  },
  "豸": {
      "id": "豸",
      "name": "豸 (zhì)",
      "pinyin": "zhì",
      "thaiMeaning": "สัตว์ป่าไร้เขา / สัตว์กินเนื้อ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 豸 สื่อถึง สัตว์ป่าไร้เขา / สัตว์กินเนื้อ",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 7,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '豸' (สัตว์ป่าไร้เขา / สัตว์กินเนื้อ) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 153",
      "characterIds": [
          "貌"
      ]
  },
  "贝": {
      "id": "贝",
      "name": "贝 (bèi)",
      "pinyin": "bèi",
      "thaiMeaning": "เปลือกหอยเบี้ย / เงินตรา (贝)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 贝 สื่อถึง เปลือกหอยเบี้ย / เงินตรา (贝)",
      "category": "การเงินและสิ่งมีค่า",
      "strokeCount": 4,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '贝' (เปลือกหอยเบี้ย / เงินตรา (贝)) จัดอยู่ในหมวด การเงินและสิ่งมีค่า เป็นรากศัพท์คังซีลำดับที่ 154",
      "characterIds": [
          "贵",
          "财",
          "购",
          "费",
          "赚",
          "货",
          "贷",
          "赢"
      ]
  },
  "赤": {
      "id": "赤",
      "name": "赤 (chì)",
      "pinyin": "chì",
      "thaiMeaning": "สีแดงชาด / บริสุทธิ์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 赤 สื่อถึง สีแดงชาด / บริสุทธิ์",
      "category": "สีสันและสภาพ",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '赤' (สีแดงชาด / บริสุทธิ์) จัดอยู่ในหมวด สีสันและสภาพ เป็นรากศัพท์คังซีลำดับที่ 155",
      "characterIds": [
          "赫",
          "赦"
      ]
  },
  "走": {
      "id": "走",
      "name": "走 (zǒu)",
      "pinyin": "zǒu",
      "thaiMeaning": "วิ่ง / เดินทาง (赱)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 走 สื่อถึง วิ่ง / เดินทาง (赱)",
      "category": "การกระทำและการเดินทาง",
      "strokeCount": 7,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '走' (วิ่ง / เดินทาง (赱)) จัดอยู่ในหมวด การกระทำและการเดินทาง เป็นรากศัพท์คังซีลำดับที่ 156",
      "characterIds": [
          "起",
          "超",
          "越",
          "跑",
          "赶"
      ]
  },
  "足": {
      "id": "足",
      "name": "足 (zú)",
      "pinyin": "zú",
      "thaiMeaning": "เท้า / ขา / เพียงพอ (𧾷)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 足 สื่อถึง เท้า / ขา / เพียงพอ (𧾷)",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 7,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '足' (เท้า / ขา / เพียงพอ (𧾷)) จัดอยู่ในหมวด ร่างกายและการกระทำ เป็นรากศัพท์คังซีลำดับที่ 157",
      "characterIds": [
          "路",
          "跑",
          "跳",
          "踢",
          "跟"
      ],
      "variants": [
          "𧾷"
      ],
      "variantName": "足字旁 (เท้าข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายแปลงเป็น 𧾷 เช่น 跑 跳 踢"
  },
  "身": {
      "id": "身",
      "name": "身 (shēn)",
      "pinyin": "shēn",
      "thaiMeaning": "ร่างกาย / ลำตัว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 身 สื่อถึง ร่างกาย / ลำตัว",
      "category": "ร่างกายและมนุษย์",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '身' (ร่างกาย / ลำตัว) จัดอยู่ในหมวด ร่างกายและมนุษย์ เป็นรากศัพท์คังซีลำดับที่ 158",
      "characterIds": [
          "躺",
          "射"
      ]
  },
  "车": {
      "id": "车",
      "name": "车 (chē)",
      "pinyin": "chē",
      "thaiMeaning": "รถ / เกวียนล้อหมุน (车)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 车 สื่อถึง รถ / เกวียนล้อหมุน (车)",
      "category": "ยานพาหนะและการเดินทาง",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '车' (รถ / เกวียนล้อหมุน (车)) จัดอยู่ในหมวด ยานพาหนะและการเดินทาง เป็นรากศัพท์คังซีลำดับที่ 159",
      "characterIds": [
          "辆",
          "转",
          "较",
          "轮",
          "输"
      ]
  },
  "辛": {
      "id": "辛",
      "name": "辛 (xīn)",
      "pinyin": "xīn",
      "thaiMeaning": "รสเผ็ด / ความยากลำบาก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 辛 สื่อถึง รสเผ็ด / ความยากลำบาก",
      "category": "รสชาติและสภาพ",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '辛' (รสเผ็ด / ความยากลำบาก) จัดอยู่ในหมวด รสชาติและสภาพ เป็นรากศัพท์คังซีลำดับที่ 160",
      "characterIds": [
          "辣",
          "辩"
      ]
  },
  "辰": {
      "id": "辰",
      "name": "辰 (chén)",
      "pinyin": "chén",
      "thaiMeaning": "เวลาเช้า / มังกรราศี",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 辰 สื่อถึง เวลาเช้า / มังกรราศี",
      "category": "ดาราศาสตร์และกาลเวลา",
      "strokeCount": 7,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '辰' (เวลาเช้า / มังกรราศี) จัดอยู่ในหมวด ดาราศาสตร์และกาลเวลา เป็นรากศัพท์คังซีลำดับที่ 161",
      "characterIds": [
          "晨"
      ]
  },
  "辵": {
      "id": "辵",
      "name": "辵 (chuò)",
      "pinyin": "chuò",
      "thaiMeaning": "ทางเดิน / การสัญจร (辶)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 辵 สื่อถึง ทางเดิน / การสัญจร (辶)",
      "category": "การกระทำและการเดินทาง",
      "strokeCount": 7,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '辵' (ทางเดิน / การสัญจร (辶)) จัดอยู่ในหมวด การกระทำและการเดินทาง เป็นรากศัพท์คังซีลำดับที่ 162",
      "characterIds": [
          "迎",
          "述"
      ],
      "variants": [
          "辶"
      ],
      "variantName": "走之底 (เดินข้าง)",
      "variantNote": "เมื่อโอบล้อมด้านล่างเป็น 辶 เช่น 这 近 过 运"
  },
  "邑": {
      "id": "邑",
      "name": "邑 (yì)",
      "pinyin": "yì",
      "thaiMeaning": "เมือง / ชุมชน (阝ขวา)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 邑 สื่อถึง เมือง / ชุมชน (阝ขวา)",
      "category": "สิ่งปลูกสร้างและสังคม",
      "strokeCount": 7,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '邑' (เมือง / ชุมชน (阝ขวา)) จัดอยู่ในหมวด สิ่งปลูกสร้างและสังคม เป็นรากศัพท์คังซีลำดับที่ 163",
      "characterIds": [
          "都",
          "那",
          "邮",
          "部",
          "邻"
      ],
      "variants": [
          "阝"
      ],
      "variantName": "右耳旁 (หูขวา/เมือง)",
      "variantNote": "เมื่ออยู่ด้านขวาเป็น 阝 สื่อถึงเมือง เช่น 都 那 邦"
  },
  "酉": {
      "id": "酉",
      "name": "酉 (yǒu)",
      "pinyin": "yǒu",
      "thaiMeaning": "ไหเหล้า / การหมักบ่ม / สุรา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 酉 สื่อถึง ไหเหล้า / การหมักบ่ม / สุรา",
      "category": "อาหารและเครื่องดื่ม",
      "strokeCount": 7,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '酉' (ไหเหล้า / การหมักบ่ม / สุรา) จัดอยู่ในหมวด อาหารและเครื่องดื่ม เป็นรากศัพท์คังซีลำดับที่ 164",
      "characterIds": [
          "酒",
          "酸",
          "配",
          "酷",
          "醒"
      ]
  },
  "釆": {
      "id": "釆",
      "name": "釆 (biàn)",
      "pinyin": "biàn",
      "thaiMeaning": "การแยกแยะ / รอยเท้าสัตว์",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 釆 สื่อถึง การแยกแยะ / รอยเท้าสัตว์",
      "category": "การกระทำและอาการ",
      "strokeCount": 7,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '釆' (การแยกแยะ / รอยเท้าสัตว์) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 165",
      "characterIds": [
          "释"
      ]
  },
  "里": {
      "id": "里",
      "name": "里 (lǐ)",
      "pinyin": "lǐ",
      "thaiMeaning": "หมู่บ้าน / หน่วยระยะทางลี้",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 里 สื่อถึง หมู่บ้าน / หน่วยระยะทางลี้",
      "category": "ภูมิศาสตร์และสิ่งก่อสร้าง",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '里' (หมู่บ้าน / หน่วยระยะทางลี้) จัดอยู่ในหมวด ภูมิศาสตร์และสิ่งก่อสร้าง เป็นรากศัพท์คังซีลำดับที่ 166",
      "characterIds": [
          "重",
          "野",
          "量"
      ]
  },
  "金": {
      "id": "金",
      "name": "金 (jīn)",
      "pinyin": "jīn",
      "thaiMeaning": "ทองคำ / โลหะ (钅)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 金 สื่อถึง ทองคำ / โลหะ (钅)",
      "category": "ธรรมชาติและแร่ธาตุ",
      "strokeCount": 8,
      "frequency": "สูงที่สุด",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '金' (ทองคำ / โลหะ (钅)) จัดอยู่ในหมวด ธรรมชาติและแร่ธาตุ เป็นรากศัพท์คังซีลำดับที่ 167",
      "characterIds": [
          "钱",
          "错",
          "鉴",
          "镜",
          "锁",
          "钥",
          "针"
      ],
      "variants": [
          "钅"
      ],
      "variantName": "金字旁 (โลหะข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายในตัวย่อเป็น 钅 เช่น 钱 银 铜 铁"
  },
  "长": {
      "id": "长",
      "name": "长 (cháng)",
      "pinyin": "cháng",
      "thaiMeaning": "ยาว / เติบโต (长)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 长 สื่อถึง ยาว / เติบโต (长)",
      "category": "สภาพและลักษณะ",
      "strokeCount": 4,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '长' (ยาว / เติบโต (长)) จัดอยู่ในหมวด สภาพและลักษณะ เป็นรากศัพท์คังซีลำดับที่ 168",
      "characterIds": [
          "张"
      ]
  },
  "门": {
      "id": "门",
      "name": "门 (mén)",
      "pinyin": "mén",
      "thaiMeaning": "ประตูคู่บานใหญ่ (门)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 门 สื่อถึง ประตูคู่บานใหญ่ (门)",
      "category": "สิ่งปลูกสร้าง",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '门' (ประตูคู่บานใหญ่ (门)) จัดอยู่ในหมวด สิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 169",
      "characterIds": [
          "开",
          "关",
          "问",
          "间",
          "闪",
          "闭",
          "闹",
          "阅",
          "阐"
      ]
  },
  "阜": {
      "id": "阜",
      "name": "阜 (fù)",
      "pinyin": "fù",
      "thaiMeaning": "เนินเขา / ดินกองสูง (阝ซ้าย)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 阜 สื่อถึง เนินเขา / ดินกองสูง (阝ซ้าย)",
      "category": "ภูมิศาสตร์และธรรมชาติ",
      "strokeCount": 8,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '阜' (เนินเขา / ดินกองสูง (阝ซ้าย)) จัดอยู่ในหมวด ภูมิศาสตร์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 170",
      "characterIds": [
          "院",
          "阳",
          "阴",
          "队",
          "阿",
          "除",
          "陪",
          "防",
          "际",
          "降"
      ],
      "variants": [
          "阝"
      ],
      "variantName": "左耳旁 (หูซ้าย/เนินเขา)",
      "variantNote": "เมื่ออยู่ด้านซ้ายเป็น 阝 สื่อถึงเนินเขา เช่น 阳 院 阿"
  },
  "隶": {
      "id": "隶",
      "name": "隶 (lì)",
      "pinyin": "lì",
      "thaiMeaning": "การเอื้อมจับ / ทาสรับใช้",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 隶 สื่อถึง การเอื้อมจับ / ทาสรับใช้",
      "category": "มนุษย์และสังคม",
      "strokeCount": 8,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '隶' (การเอื้อมจับ / ทาสรับใช้) จัดอยู่ในหมวด มนุษย์และสังคม เป็นรากศัพท์คังซีลำดับที่ 171",
      "characterIds": [
          "康"
      ]
  },
  "隹": {
      "id": "隹",
      "name": "隹 (zhuī)",
      "pinyin": "zhuī",
      "thaiMeaning": "นกหางสั้น / ปักษา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 隹 สื่อถึง นกหางสั้น / ปักษา",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 8,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '隹' (นกหางสั้น / ปักษา) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 172",
      "characterIds": [
          "准",
          "离",
          "难",
          "雅",
          "集"
      ]
  },
  "雨": {
      "id": "雨",
      "name": "雨 (yǔ)",
      "pinyin": "yǔ",
      "thaiMeaning": "ฝน / สภาพอากาศฟ้าฝน (⻗)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 雨 สื่อถึง ฝน / สภาพอากาศฟ้าฝน (⻗)",
      "category": "ดาราศาสตร์และธรรมชาติ",
      "strokeCount": 8,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '雨' (ฝน / สภาพอากาศฟ้าฝน (⻗)) จัดอยู่ในหมวด ดาราศาสตร์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 173",
      "characterIds": [
          "零",
          "雪",
          "雷",
          "需"
      ]
  },
  "靑": {
      "id": "靑",
      "name": "靑 (qīng)",
      "pinyin": "qīng",
      "thaiMeaning": "สีเขียวคราม / วัยเยาว์ (青)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 靑 สื่อถึง สีเขียวคราม / วัยเยาว์ (青)",
      "category": "สีสันและสภาพ",
      "strokeCount": 8,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '靑' (สีเขียวคราม / วัยเยาว์ (青)) จัดอยู่ในหมวด สีสันและสภาพ เป็นรากศัพท์คังซีลำดับที่ 174",
      "characterIds": [
          "静"
      ]
  },
  "非": {
      "id": "非",
      "name": "非 (fēi)",
      "pinyin": "fēi",
      "thaiMeaning": "ปีกนกกางตรงข้าม / ไม่ใช่, ผิด",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 非 สื่อถึง ปีกนกกางตรงข้าม / ไม่ใช่, ผิด",
      "category": "ปรัชญาและสภาพ",
      "strokeCount": 8,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '非' (ปีกนกกางตรงข้าม / ไม่ใช่, ผิด) จัดอยู่ในหมวด ปรัชญาและสภาพ เป็นรากศัพท์คังซีลำดับที่ 175",
      "characterIds": [
          "啡",
          "排",
          "靠"
      ]
  },
  "面": {
      "id": "面",
      "name": "面 (miàn)",
      "pinyin": "miàn",
      "thaiMeaning": "ใบหน้า / ผิวหน้า / ด้าน",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 面 สื่อถึง ใบหน้า / ผิวหน้า / ด้าน",
      "category": "ร่างกายและทิศทาง",
      "strokeCount": 9,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '面' (ใบหน้า / ผิวหน้า / ด้าน) จัดอยู่ในหมวด ร่างกายและทิศทาง เป็นรากศัพท์คังซีลำดับที่ 176",
      "characterIds": [
          "腼"
      ]
  },
  "革": {
      "id": "革",
      "name": "革 (gé)",
      "pinyin": "gé",
      "thaiMeaning": "หนังสัตว์ฟอก / ปฏิรูป",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 革 สื่อถึง หนังสัตว์ฟอก / ปฏิรูป",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 9,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '革' (หนังสัตว์ฟอก / ปฏิรูป) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 177",
      "characterIds": [
          "鞋"
      ]
  },
  "韦": {
      "id": "韦",
      "name": "韦 (wéi)",
      "pinyin": "wéi",
      "thaiMeaning": "หนังฟอกนุ่ม (韦)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 韦 สื่อถึง หนังฟอกนุ่ม (韦)",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 4,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '韦' (หนังฟอกนุ่ม (韦)) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 178",
      "characterIds": [
          "伟",
          "违"
      ]
  },
  "韭": {
      "id": "韭",
      "name": "韭 (jiǔ)",
      "pinyin": "jiǔ",
      "thaiMeaning": "ผักกุยช่าย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 韭 สื่อถึง ผักกุยช่าย",
      "category": "อาหารและพืช",
      "strokeCount": 9,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '韭' (ผักกุยช่าย) จัดอยู่ในหมวด อาหารและพืช เป็นรากศัพท์คังซีลำดับที่ 179",
      "characterIds": [
          "齑"
      ]
  },
  "音": {
      "id": "音",
      "name": "音 (yīn)",
      "pinyin": "yīn",
      "thaiMeaning": "เสียงดนตรี / ทำนอง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 音 สื่อถึง เสียงดนตรี / ทำนอง",
      "category": "ดนตรีและภาษา",
      "strokeCount": 9,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '音' (เสียงดนตรี / ทำนอง) จัดอยู่ในหมวด ดนตรีและภาษา เป็นรากศัพท์คังซีลำดับที่ 180",
      "characterIds": [
          "韵"
      ]
  },
  "页": {
      "id": "页",
      "name": "页 (yè)",
      "pinyin": "yè",
      "thaiMeaning": "ศีรษะ / หน้ากระดาษ (页)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 页 สื่อถึง ศีรษะ / หน้ากระดาษ (页)",
      "category": "ร่างกายและสิ่งของ",
      "strokeCount": 6,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '页' (ศีรษะ / หน้ากระดาษ (页)) จัดอยู่ในหมวด ร่างกายและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 181",
      "characterIds": [
          "题",
          "头",
          "顾",
          "领",
          "预",
          "顶"
      ]
  },
  "风": {
      "id": "风",
      "name": "风 (fēng)",
      "pinyin": "fēng",
      "thaiMeaning": "สายลม / ลมพัด (风)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 风 สื่อถึง สายลม / ลมพัด (风)",
      "category": "ดาราศาสตร์และธรรมชาติ",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '风' (สายลม / ลมพัด (风)) จัดอยู่ในหมวด ดาราศาสตร์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 182",
      "characterIds": [
          "飘"
      ]
  },
  "飞": {
      "id": "飞",
      "name": "飞 (fēi)",
      "pinyin": "fēi",
      "thaiMeaning": "โบยบิน / นกบิน (飞)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 飞 สื่อถึง โบยบิน / นกบิน (飞)",
      "category": "การกระทำและอาการ",
      "strokeCount": 3,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '飞' (โบยบิน / นกบิน (飞)) จัดอยู่ในหมวด การกระทำและอาการ เป็นรากศัพท์คังซีลำดับที่ 183",
      "characterIds": [
          "机"
      ]
  },
  "食": {
      "id": "食",
      "name": "食 (shí)",
      "pinyin": "shí",
      "thaiMeaning": "อาหาร / การกิน (饣)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 食 สื่อถึง อาหาร / การกิน (饣)",
      "category": "อาหารและโภชนาการ",
      "strokeCount": 9,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '食' (อาหาร / การกิน (饣)) จัดอยู่ในหมวด อาหารและโภชนาการ เป็นรากศัพท์คังซีลำดับที่ 184",
      "characterIds": [
          "饭",
          "餐",
          "馆",
          "饱",
          "饼",
          "饿"
      ],
      "variants": [
          "饣"
      ],
      "variantName": "食字旁 (อาหารข้าง)",
      "variantNote": "เมื่ออยู่ด้านซ้ายในตัวย่อเป็น 饣 เช่น 饭 饱 饿 饮"
  },
  "首": {
      "id": "首",
      "name": "首 (shǒu)",
      "pinyin": "shǒu",
      "thaiMeaning": "ศีรษะ / ผู้นำ / บทแรก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 首 สื่อถึง ศีรษะ / ผู้นำ / บทแรก",
      "category": "ร่างกายและสังคม",
      "strokeCount": 9,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '首' (ศีรษะ / ผู้นำ / บทแรก) จัดอยู่ในหมวด ร่างกายและสังคม เป็นรากศัพท์คังซีลำดับที่ 185",
      "characterIds": [
          "道"
      ]
  },
  "香": {
      "id": "香",
      "name": "香 (xiāng)",
      "pinyin": "xiāng",
      "thaiMeaning": "กลิ่นหอม / ข้าวสุกหอม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 香 สื่อถึง กลิ่นหอม / ข้าวสุกหอม",
      "category": "อาหารและรสชาติ",
      "strokeCount": 9,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '香' (กลิ่นหอม / ข้าวสุกหอม) จัดอยู่ในหมวด อาหารและรสชาติ เป็นรากศัพท์คังซีลำดับที่ 186",
      "characterIds": [
          "馨"
      ]
  },
  "马": {
      "id": "马",
      "name": "马 (mǎ)",
      "pinyin": "mǎ",
      "thaiMeaning": "ม้า / ความรวดเร็ว (马)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 马 สื่อถึง ม้า / ความรวดเร็ว (马)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '马' (ม้า / ความรวดเร็ว (马)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 187",
      "characterIds": [
          "骑",
          "验",
          "驾",
          "骗"
      ]
  },
  "骨": {
      "id": "骨",
      "name": "骨 (gǔ)",
      "pinyin": "gǔ",
      "thaiMeaning": "กระดูก / โครงร่าง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 骨 สื่อถึง กระดูก / โครงร่าง",
      "category": "ร่างกายและสุขภาพ",
      "strokeCount": 10,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '骨' (กระดูก / โครงร่าง) จัดอยู่ในหมวด ร่างกายและสุขภาพ เป็นรากศัพท์คังซีลำดับที่ 188",
      "characterIds": [
          "体"
      ]
  },
  "高": {
      "id": "高",
      "name": "高 (gāo)",
      "pinyin": "gāo",
      "thaiMeaning": "สูง / หอคอยสูง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 高 สื่อถึง สูง / หอคอยสูง",
      "category": "สภาพและสิ่งปลูกสร้าง",
      "strokeCount": 10,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '高' (สูง / หอคอยสูง) จัดอยู่ในหมวด สภาพและสิ่งปลูกสร้าง เป็นรากศัพท์คังซีลำดับที่ 189",
      "characterIds": [
          "敲"
      ]
  },
  "髟": {
      "id": "髟",
      "name": "髟 (biāo)",
      "pinyin": "biāo",
      "thaiMeaning": "เส้นผมยาวสลวย",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 髟 สื่อถึง เส้นผมยาวสลวย",
      "category": "ร่างกายและมนุษย์",
      "strokeCount": 10,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '髟' (เส้นผมยาวสลวย) จัดอยู่ในหมวด ร่างกายและมนุษย์ เป็นรากศัพท์คังซีลำดับที่ 190",
      "characterIds": [
          "髦"
      ]
  },
  "鬥": {
      "id": "鬥",
      "name": "鬥 (dòu)",
      "pinyin": "dòu",
      "thaiMeaning": "การต่อสู้ / ประลองกำลัง",
      "ancientPictograph": "ภาพคนสองคนต่อสู้ประจันหน้ากัน",
      "category": "การกระทำและอาการ",
      "strokeCount": 10,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鬥' (การต่อสู้ / ประลองกำลัง) เป็นรากศัพท์คังซีลำดับที่ 191 ซึ่งใช้เฉพาะในอักษรตัวเต็ม — ในภาษาจีนตัวย่อ คำในหมวดนี้ถูกย้ายไปหมวด 门 ทั้งหมด (鬧→闹, 鬮→阄) จึงไม่มีคำตัวย่อที่แตกกิ่งจากหมวดนี้",
      "characterIds": []
  },
  "鬯": {
      "id": "鬯",
      "name": "鬯 (chàng)",
      "pinyin": "chàng",
      "thaiMeaning": "สุราเครื่องหอมบูชา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鬯 สื่อถึง สุราเครื่องหอมบูชา",
      "category": "ความเชื่อและอาหาร",
      "strokeCount": 10,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鬯' (สุราเครื่องหอมบูชา) จัดอยู่ในหมวด ความเชื่อและอาหาร เป็นรากศัพท์คังซีลำดับที่ 192",
      "characterIds": [
          "郁"
      ]
  },
  "鬲": {
      "id": "鬲",
      "name": "鬲 (lì)",
      "pinyin": "lì",
      "thaiMeaning": "หม้อต้มสามขาโบราณ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鬲 สื่อถึง หม้อต้มสามขาโบราณ",
      "category": "เครื่องมือและสิ่งของ",
      "strokeCount": 10,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鬲' (หม้อต้มสามขาโบราณ) จัดอยู่ในหมวด เครื่องมือและสิ่งของ เป็นรากศัพท์คังซีลำดับที่ 193",
      "characterIds": [
          "融"
      ]
  },
  "鬼": {
      "id": "鬼",
      "name": "鬼 (guǐ)",
      "pinyin": "guǐ",
      "thaiMeaning": "ผี / วิญญาณ / สิ่งลี้ลับ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鬼 สื่อถึง ผี / วิญญาณ / สิ่งลี้ลับ",
      "category": "ความเชื่อและวัฒนธรรม",
      "strokeCount": 10,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鬼' (ผี / วิญญาณ / สิ่งลี้ลับ) จัดอยู่ในหมวด ความเชื่อและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 194",
      "characterIds": [
          "魔"
      ]
  },
  "鱼": {
      "id": "鱼",
      "name": "鱼 (yú)",
      "pinyin": "yú",
      "thaiMeaning": "ปลา / สัตว์น้ำ (鱼)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鱼 สื่อถึง ปลา / สัตว์น้ำ (鱼)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 8,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鱼' (ปลา / สัตว์น้ำ (鱼)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 195",
      "characterIds": [
          "鲜",
          "鲁"
      ]
  },
  "鸟": {
      "id": "鸟",
      "name": "鸟 (niǎo)",
      "pinyin": "niǎo",
      "thaiMeaning": "นก / สัตว์ปีก (鸟)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鸟 สื่อถึง นก / สัตว์ปีก (鸟)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鸟' (นก / สัตว์ปีก (鸟)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 196",
      "characterIds": [
          "鸡",
          "鸭",
          "鹅",
          "鸣"
      ]
  },
  "卤": {
      "id": "卤",
      "name": "卤 (lǔ)",
      "pinyin": "lǔ",
      "thaiMeaning": "เกลือสินเธาว์ / ด่าง (卤)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 卤 สื่อถึง เกลือสินเธาว์ / ด่าง (卤)",
      "category": "อาหารและแร่ธาตุ",
      "strokeCount": 7,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '卤' (เกลือสินเธาว์ / ด่าง (卤)) จัดอยู่ในหมวด อาหารและแร่ธาตุ เป็นรากศัพท์คังซีลำดับที่ 197",
      "characterIds": [
          "咸"
      ]
  },
  "鹿": {
      "id": "鹿",
      "name": "鹿 (lù)",
      "pinyin": "lù",
      "thaiMeaning": "กวางป่า / เขาคู่สง่างาม",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鹿 สื่อถึง กวางป่า / เขาคู่สง่างาม",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 11,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鹿' (กวางป่า / เขาคู่สง่างาม) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 198",
      "characterIds": [
          "丽",
          "尘"
      ]
  },
  "麦": {
      "id": "麦",
      "name": "麦 (mài)",
      "pinyin": "mài",
      "thaiMeaning": "ข้าวสาลี / ข้าวบาร์เลย์ (麦)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 麦 สื่อถึง ข้าวสาลี / ข้าวบาร์เลย์ (麦)",
      "category": "อาหารและพืช",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '麦' (ข้าวสาลี / ข้าวบาร์เลย์ (麦)) จัดอยู่ในหมวด อาหารและพืช เป็นรากศัพท์คังซีลำดับที่ 199",
      "characterIds": [
          "面"
      ]
  },
  "麻": {
      "id": "麻",
      "name": "麻 (má)",
      "pinyin": "má",
      "thaiMeaning": "ต้นปอ / ต้นกัญชา / อาการชา",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 麻 สื่อถึง ต้นปอ / ต้นกัญชา / อาการชา",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 11,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '麻' (ต้นปอ / ต้นกัญชา / อาการชา) จัดอยู่ในหมวด ธรรมชาติและพืช เป็นรากศัพท์คังซีลำดับที่ 200",
      "characterIds": [
          "摩",
          "磨"
      ]
  },
  "黄": {
      "id": "黄",
      "name": "黄 (huáng)",
      "pinyin": "huáng",
      "thaiMeaning": "สีเหลืองทอง (黄)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 黄 สื่อถึง สีเหลืองทอง (黄)",
      "category": "สีสันและสภาพ",
      "strokeCount": 12,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '黄' (สีเหลืองทอง (黄)) จัดอยู่ในหมวด สีสันและสภาพ เป็นรากศัพท์คังซีลำดับที่ 201",
      "characterIds": [
          "潢"
      ]
  },
  "黍": {
      "id": "黍",
      "name": "黍 (shǔ)",
      "pinyin": "shǔ",
      "thaiMeaning": "ข้าวฟ่างเหนียว",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 黍 สื่อถึง ข้าวฟ่างเหนียว",
      "category": "อาหารและพืช",
      "strokeCount": 12,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '黍' (ข้าวฟ่างเหนียว) จัดอยู่ในหมวด อาหารและพืช เป็นรากศัพท์คังซีลำดับที่ 202",
      "characterIds": [
          "黎"
      ]
  },
  "黑": {
      "id": "黑",
      "name": "黑 (hēi)",
      "pinyin": "hēi",
      "thaiMeaning": "สีดำ / เขม่าควันไฟ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 黑 สื่อถึง สีดำ / เขม่าควันไฟ",
      "category": "สีสันและสภาพ",
      "strokeCount": 12,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '黑' (สีดำ / เขม่าควันไฟ) จัดอยู่ในหมวด สีสันและสภาพ เป็นรากศัพท์คังซีลำดับที่ 203",
      "characterIds": [
          "点",
          "默",
          "墨"
      ]
  },
  "黹": {
      "id": "黹",
      "name": "黹 (zhǐ)",
      "pinyin": "zhǐ",
      "thaiMeaning": "การปักผ้า / ลวดลายเย็บ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 黹 สื่อถึง การปักผ้า / ลวดลายเย็บ",
      "category": "ศิลปะและงานฝีมือ",
      "strokeCount": 12,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '黹' (การปักผ้า / ลวดลายเย็บ) จัดอยู่ในหมวด ศิลปะและงานฝีมือ เป็นรากศัพท์คังซีลำดับที่ 204",
      "characterIds": [
          "黼"
      ]
  },
  "黾": {
      "id": "黾",
      "name": "黾 (mǐn)",
      "pinyin": "mǐn",
      "thaiMeaning": "คางคก / กบ (黾)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 黾 สื่อถึง คางคก / กบ (黾)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 8,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '黾' (คางคก / กบ (黾)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 205",
      "characterIds": [
          "渑"
      ]
  },
  "鼎": {
      "id": "鼎",
      "name": "鼎 (dǐng)",
      "pinyin": "dǐng",
      "thaiMeaning": "กระถางธูปสามขา / อำนาจรัฐ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鼎 สื่อถึง กระถางธูปสามขา / อำนาจรัฐ",
      "category": "เครื่องมือและวัฒนธรรม",
      "strokeCount": 13,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鼎' (กระถางธูปสามขา / อำนาจรัฐ) จัดอยู่ในหมวด เครื่องมือและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 206",
      "characterIds": [
          "鼐"
      ]
  },
  "鼓": {
      "id": "鼓",
      "name": "鼓 (gǔ)",
      "pinyin": "gǔ",
      "thaiMeaning": "กลองหนัง / การตีกลองศึก",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鼓 สื่อถึง กลองหนัง / การตีกลองศึก",
      "category": "ดนตรีและวัฒนธรรม",
      "strokeCount": 13,
      "frequency": "ปานกลาง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鼓' (กลองหนัง / การตีกลองศึก) จัดอยู่ในหมวด ดนตรีและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 207",
      "characterIds": [
          "瞽"
      ]
  },
  "鼠": {
      "id": "鼠",
      "name": "鼠 (shǔ)",
      "pinyin": "shǔ",
      "thaiMeaning": "หนู / สัตว์ฟันแทะ",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鼠 สื่อถึง หนู / สัตว์ฟันแทะ",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 13,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鼠' (หนู / สัตว์ฟันแทะ) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 208",
      "characterIds": [
          "鼬"
      ]
  },
  "鼻": {
      "id": "鼻",
      "name": "鼻 (bí)",
      "pinyin": "bí",
      "thaiMeaning": "จมูก / การดมกลิ่น",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 鼻 สื่อถึง จมูก / การดมกลิ่น",
      "category": "ร่างกายและสุขภาพ",
      "strokeCount": 14,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '鼻' (จมูก / การดมกลิ่น) จัดอยู่ในหมวด ร่างกายและสุขภาพ เป็นรากศัพท์คังซีลำดับที่ 209",
      "characterIds": [
          "鼾"
      ]
  },
  "齐": {
      "id": "齐",
      "name": "齐 (qí)",
      "pinyin": "qí",
      "thaiMeaning": "เรียบร้อย / สม่ำเสมอ (齐)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 齐 สื่อถึง เรียบร้อย / สม่ำเสมอ (齐)",
      "category": "ปรัชญาและสภาพ",
      "strokeCount": 6,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '齐' (เรียบร้อย / สม่ำเสมอ (齐)) จัดอยู่ในหมวด ปรัชญาและสภาพ เป็นรากศัพท์คังซีลำดับที่ 210",
      "characterIds": [
          "挤",
          "济"
      ]
  },
  "齿": {
      "id": "齿",
      "name": "齿 (chǐ)",
      "pinyin": "chǐ",
      "thaiMeaning": "ฟัน / ซี่ฟัน (齿)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 齿 สื่อถึง ฟัน / ซี่ฟัน (齿)",
      "category": "ร่างกายและสุขภาพ",
      "strokeCount": 8,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '齿' (ฟัน / ซี่ฟัน (齿)) จัดอยู่ในหมวด ร่างกายและสุขภาพ เป็นรากศัพท์คังซีลำดับที่ 211",
      "characterIds": [
          "龄"
      ]
  },
  "龙": {
      "id": "龙",
      "name": "龙 (lóng)",
      "pinyin": "lóng",
      "thaiMeaning": "มังกร / สัตว์มงคลเทพ (龙)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 龙 สื่อถึง มังกร / สัตว์มงคลเทพ (龙)",
      "category": "ความเชื่อและวัฒนธรรม",
      "strokeCount": 5,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '龙' (มังกร / สัตว์มงคลเทพ (龙)) จัดอยู่ในหมวด ความเชื่อและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 212",
      "characterIds": [
          "庞",
          "袭"
      ]
  },
  "龟": {
      "id": "龟",
      "name": "龟 (guī)",
      "pinyin": "guī",
      "thaiMeaning": "เต่า / สัตว์อายุยืน (龟)",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 龟 สื่อถึง เต่า / สัตว์อายุยืน (龟)",
      "category": "สัตว์และธรรมชาติ",
      "strokeCount": 7,
      "frequency": "สูง",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '龟' (เต่า / สัตว์อายุยืน (龟)) จัดอยู่ในหมวด สัตว์และธรรมชาติ เป็นรากศัพท์คังซีลำดับที่ 213",
      "characterIds": [
          "黾"
      ]
  },
  "龠": {
      "id": "龠",
      "name": "龠 (yuè)",
      "pinyin": "yuè",
      "thaiMeaning": "ขลุ่ยโบราณสามรู / ท่วงทำนอง",
      "ancientPictograph": "ภาพอักษรดั้งเดิมของหมวด 龠 สื่อถึง ขลุ่ยโบราณสามรู / ท่วงทำนอง",
      "category": "ดนตรีและวัฒนธรรม",
      "strokeCount": 17,
      "frequency": "ต่ำ",
      "themeColor": "var(--c-vermilion)",
      "themeSoft": "var(--c-vermilion-soft)",
      "description": "รากศัพท์ '龠' (ขลุ่ยโบราณสามรู / ท่วงทำนอง) จัดอยู่ในหมวด ดนตรีและวัฒนธรรม เป็นรากศัพท์คังซีลำดับที่ 214",
      "characterIds": [
          "籥"
      ]
  },
  "氵": {
      "id": "氵",
      "name": "水 / 氵 (shuǐ)",
      "pinyin": "shuǐ",
      "thaiMeaning": "น้ำ / แม่น้ำ / ของเหลว",
      "ancientPictograph": "ภาพสายน้ำสามหยดที่กำลังไหลวนคดเคี้ยวไปตามลำธาร (สามหยดน้ำ)",
      "category": "ธรรมชาติและของเหลว",
      "strokeCount": 3,
      "frequency": "สูงที่สุด (พบในกว่า 500+ ตัวอักษร)",
      "themeColor": "var(--c-indigo)",
      "themeSoft": "var(--c-indigo-soft)",
      "description": "รากศัพท์ '氵' (สามหยดน้ำ) มักพบในคำเกี่ยวกับแม่น้ำ ทะเล การชำระล้าง สภาพของเหลว และการไหล",
      "characterIds": [
          "江",
          "河",
          "海",
          "汉",
          "洗",
          "渴",
          "清",
          "泳"
      ]
  },
  "讠": {
      "id": "讠",
      "name": "言 / 讠 (yán)",
      "pinyin": "yán",
      "thaiMeaning": "คำพูด / ภาษา / วาจา",
      "ancientPictograph": "ภาพปากกำลังเปล่งเสียงโดยมีลิ้นและคลื่นเสียงพุ่งออกมาเป็นลำดับชั้น",
      "category": "ภาษาและการสื่อสาร",
      "strokeCount": 2,
      "frequency": "สูงที่สุด (พบในกว่า 400+ ตัวอักษร)",
      "themeColor": "var(--c-indigo)",
      "themeSoft": "var(--c-indigo-soft)",
      "description": "รากศัพท์ '讠' (ข้างคำพูด) ใช้กับกริยาการสื่อสาร ภาษา การอ่าน การเจรจา และความรู้",
      "characterIds": [
          "说",
          "话",
          "语",
          "读",
          "谢",
          "请",
          "认",
          "课"
      ]
  },
  "钅": {
      "id": "钅",
      "name": "金 / 钅 (jīn)",
      "pinyin": "jīn",
      "thaiMeaning": "โลหะ / ทองคำ / เงินตรา / เครื่องมือ",
      "ancientPictograph": "ภาพก้อนแร่โลหะมีค่าที่ถูกหลอมและฝังอยู่ใต้ชั้นดิน",
      "category": "ธรรมชาติและแร่ธาตุ",
      "strokeCount": 5,
      "frequency": "สูงมาก (พบในกว่า 350+ ตัวอักษร)",
      "themeColor": "var(--c-amber)",
      "themeSoft": "var(--c-amber-soft)",
      "description": "รากศัพท์ '钅' (ข้างทอง/โลหะ) เกี่ยวข้องกับเครื่องมือเหล็ก แร่ธาตุ อาวุธ เงินตรา และนาฬิกา",
      "characterIds": [
          "钱",
          "错",
          "铁",
          "银",
          "针",
          "钟"
      ]
  },
  "辶": {
      "id": "辶",
      "name": "辵 / 辶 (chuò)",
      "pinyin": "chuò",
      "thaiMeaning": "การเดิน / การเดินทาง / ระยะทาง",
      "ancientPictograph": "ภาพรอยเท้าก้าวเดินไปตามสี่แยกถนน บ่งบอกถึงการสัญจรและการเคลื่อนที่",
      "category": "การกระทำและการเดินทาง",
      "strokeCount": 3,
      "frequency": "สูงมาก (พบในกว่า 300+ ตัวอักษร)",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รากศัพท์ '辶' (ข้างเดิน) ปรากฏในคำที่เกี่ยวกับการเคลื่อนไหว ระยะทาง ไกล ใกล้ ผ่าน ส่ง และต้อนรับ",
      "characterIds": [
          "过",
          "进",
          "远",
          "近",
          "边",
          "送",
          "还",
          "迎"
      ]
  },
  "饣": {
      "id": "饣",
      "name": "食 / 饣 (shí)",
      "pinyin": "shí",
      "thaiMeaning": "อาหาร / การกิน / ภัตตาคาร",
      "ancientPictograph": "ภาพภาชนะใส่อาหารทรงโบราณที่มีฝาปิดมิดชิดเพื่อรักษาความร้อน",
      "category": "อาหารและโภชนาการ",
      "strokeCount": 3,
      "frequency": "สูง (พบในกว่า 200+ ตัวอักษร)",
      "themeColor": "var(--c-amber)",
      "themeSoft": "var(--c-amber-soft)",
      "description": "รากศัพท์ '饣' (ข้างอาหาร) มักพบในชื่ออาหาร ภัตตาคาร ความอิ่ม และการดื่มกิน",
      "characterIds": [
          "饭",
          "馆",
          "饮",
          "饱",
          "饼"
      ]
  },
  "亻": {
      "id": "亻",
      "name": "人 / 亻 (rén)",
      "pinyin": "rén",
      "thaiMeaning": "คน / มนุษย์ / พฤติกรรมมนุษย์",
      "ancientPictograph": "ภาพคนยืนก้าวขาและก้มตัวเล็กน้อยในท่าทางธรรมชาติ (ข้างคน)",
      "category": "มนุษย์และสังคม",
      "strokeCount": 2,
      "frequency": "สูงที่สุด (พบในกว่า 600+ ตัวอักษร)",
      "themeColor": "var(--c-indigo)",
      "themeSoft": "var(--c-indigo-soft)",
      "description": "รากศัพท์ '亻' ใช้กับคำที่เกี่ยวกับสรรพนามมนุษย์ ความสัมพันธ์ การกระทำ และคุณธรรม",
      "characterIds": [
          "你",
          "他",
          "休",
          "们",
          "做",
          "住",
          "像",
          "借"
      ]
  },
  "艹": {
      "id": "艹",
      "name": "草 / 艹 (cǎo)",
      "pinyin": "cǎo",
      "thaiMeaning": "หญ้า / พืชสมุนไพร / ดอกไม้ / ใบไม้",
      "ancientPictograph": "ภาพต้นหญ้าสองต้นกำลังแตกหน่อใบอ่อนขึ้นมาจากดิน (ข้างหญ้า)",
      "category": "ธรรมชาติและพืช",
      "strokeCount": 3,
      "frequency": "สูงที่สุด (พบในกว่า 500+ ตัวอักษร)",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รากศัพท์ '艹' (ข้างหญ้า) มักพบในชื่อดอกไม้ พืช ชา ผัก ผลไม้ และยาสมุนไพร",
      "characterIds": [
          "花",
          "茶",
          "草",
          "药",
          "菜",
          "英",
          "蓝",
          "苹"
      ]
  },
  "灬": {
      "id": "灬",
      "name": "灬 (huǒ)",
      "pinyin": "huǒ",
      "thaiMeaning": "ไฟ (รูปย่อ 4 จุดด้านล่างตัวอักษร)",
      "ancientPictograph": "รูปย่อ (บุ๋นเจี๋ยเถา) ของรากศัพท์เดิม ใช้เมื่อรากศัพท์นี้เป็นส่วนประกอบของตัวอักษรอื่น",
      "category": "ธรรมชาติและพลังงาน",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รูปย่อของรากศัพท์ '灬' ที่ใช้เมื่อประกอบเป็นส่วนหนึ่งของตัวอักษรอื่น",
      "characterIds": [
          "热",
          "点",
          "照",
          "然",
          "煮"
      ]
  },
  "忄": {
      "id": "忄",
      "name": "忄 (xīn)",
      "pinyin": "xīn",
      "thaiMeaning": "หัวใจ / จิตใจ (รูปย่อด้านซ้ายตัวอักษร)",
      "ancientPictograph": "รูปย่อ (บุ๋นเจี๋ยเถา) ของรากศัพท์เดิม ใช้เมื่อรากศัพท์นี้เป็นส่วนประกอบของตัวอักษรอื่น",
      "category": "อารมณ์และจิตใจ",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รูปย่อของรากศัพท์ '忄' ที่ใช้เมื่อประกอบเป็นส่วนหนึ่งของตัวอักษรอื่น",
      "characterIds": [
          "情",
          "快",
          "慢",
          "怕",
          "忙",
          "懂"
      ]
  },
  "扌": {
      "id": "扌",
      "name": "扌 (shǒu)",
      "pinyin": "shǒu",
      "thaiMeaning": "มือ (รูปย่อด้านซ้ายตัวอักษร)",
      "ancientPictograph": "รูปย่อ (บุ๋นเจี๋ยเถา) ของรากศัพท์เดิม ใช้เมื่อรากศัพท์นี้เป็นส่วนประกอบของตัวอักษรอื่น",
      "category": "ร่างกายและการกระทำ",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รูปย่อของรากศัพท์ '扌' ที่ใช้เมื่อประกอบเป็นส่วนหนึ่งของตัวอักษรอื่น",
      "characterIds": [
          "打",
          "提",
          "把",
          "找",
          "推",
          "拉",
          "接"
      ]
  },
  "礻": {
      "id": "礻",
      "name": "礻 (shì)",
      "pinyin": "shì",
      "thaiMeaning": "แท่นบูชา / เทพเจ้า (รูปย่อด้านซ้ายตัวอักษร)",
      "ancientPictograph": "รูปย่อ (บุ๋นเจี๋ยเถา) ของรากศัพท์เดิม ใช้เมื่อรากศัพท์นี้เป็นส่วนประกอบของตัวอักษรอื่น",
      "category": "ความเชื่อและพิธีกรรม",
      "strokeCount": 4,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รูปย่อของรากศัพท์ '礻' ที่ใช้เมื่อประกอบเป็นส่วนหนึ่งของตัวอักษรอื่น",
      "characterIds": [
          "社",
          "祖",
          "祈",
          "福",
          "神",
          "祝"
      ]
  },
  "衤": {
      "id": "衤",
      "name": "衤 (yī)",
      "pinyin": "yī",
      "thaiMeaning": "เสื้อผ้า (รูปย่อด้านซ้ายตัวอักษร)",
      "ancientPictograph": "รูปย่อ (บุ๋นเจี๋ยเถา) ของรากศัพท์เดิม ใช้เมื่อรากศัพท์นี้เป็นส่วนประกอบของตัวอักษรอื่น",
      "category": "เครื่องแต่งกาย",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รูปย่อของรากศัพท์ '衤' ที่ใช้เมื่อประกอบเป็นส่วนหนึ่งของตัวอักษรอื่น",
      "characterIds": [
          "被",
          "补",
          "初",
          "衫",
          "衬",
          "袖",
          "裙"
      ]
  },
  "罒": {
      "id": "罒",
      "name": "罒 (wǎng)",
      "pinyin": "wǎng",
      "thaiMeaning": "ตาข่าย (รูปย่อด้านบนตัวอักษร)",
      "ancientPictograph": "รูปย่อ (บุ๋นเจี๋ยเถา) ของรากศัพท์เดิม ใช้เมื่อรากศัพท์นี้เป็นส่วนประกอบของตัวอักษรอื่น",
      "category": "สิ่งของและกฎหมาย",
      "strokeCount": 5,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รูปย่อของรากศัพท์ '罒' ที่ใช้เมื่อประกอบเป็นส่วนหนึ่งของตัวอักษรอื่น",
      "characterIds": [
          "罕",
          "罚",
          "置",
          "罪",
          "署"
      ]
  },
  "犭": {
      "id": "犭",
      "name": "犭 (quǎn)",
      "pinyin": "quǎn",
      "thaiMeaning": "สัตว์สี่เท้า / สุนัข (รูปย่อด้านซ้ายตัวอักษร)",
      "ancientPictograph": "รูปย่อ (บุ๋นเจี๋ยเถา) ของรากศัพท์เดิม ใช้เมื่อรากศัพท์นี้เป็นส่วนประกอบของตัวอักษรอื่น",
      "category": "สัตว์",
      "strokeCount": 3,
      "frequency": "สูงมาก",
      "themeColor": "var(--c-jade)",
      "themeSoft": "var(--c-jade-soft)",
      "description": "รูปย่อของรากศัพท์ '犭' ที่ใช้เมื่อประกอบเป็นส่วนหนึ่งของตัวอักษรอื่น",
      "characterIds": [
          "猫",
          "狗",
          "猪",
          "狼",
          "狐",
          "狸",
          "狂",
          "犯"
      ]
  }
};

window.RADICALS_DATA = RADICALS_DATA;
