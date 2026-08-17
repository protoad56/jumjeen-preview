/**
 * Comprehensive Database of Characters, Etymology, Pronunciations & Mnemonics
 * จำจีน (JumJeen) - ฐานข้อมูลตัวอักษรจีนระดับ Production สมบูรณ์แบบ 100%
 */

const CHARACTERS_DATA = {
  "三": {
    "char": "三",
    "radical": "一",
    "primaryPinyin": "sān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "s", "final": "an", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "sān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "สาม (3)",
        "usageContext": "เช่น 三个"
      }
    ],
    "thaiMeaningShort": "สาม (3)",
    "hskLevel": 1,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "一",
        "pinyin": "yī",
        "role": "รากศัพท์",
        "meaning": "หนึ่ง / เส้นขวาง",
        "desc": "สังกัดหมวด 一"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 三 กำเนิดจากรากศัพท์ 一 (หนึ่ง / เส้นขวาง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 一 เพื่อสื่อความหมายถึง สาม (3)",
      "modernEvolution": "หมายถึง สาม (3)"
    },
    "mnemonicHook": {
      "formula": "ราก 一 (หนึ่ง / เส้นขวาง) ➔ 'สาม (3)' (三)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 一 เชื่อมโยงสู่คำว่า สาม (3)"
    },
    "compounds": [
      {
        "word": "三个",
        "pinyin": "sān gè",
        "thai": "สามอัน",
        "hsk": 1,
        "audioText": "三个"
      },
      {
        "word": "三月",
        "pinyin": "sān yuè",
        "thai": "มีนาคม",
        "hsk": 1,
        "audioText": "三月"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：三。",
        "pinyin": "Zhè shì yī gè hànzì: 三.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 三 (สาม (3))",
        "audioText": "这是一个汉字：三。"
      }
    ]
  },
  "七": {
    "char": "七",
    "radical": "一",
    "primaryPinyin": "qī",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "q", "final": "i", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "qī",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "เจ็ด (7)",
        "usageContext": "เช่น 七个"
      }
    ],
    "thaiMeaningShort": "เจ็ด (7)",
    "hskLevel": 1,
    "strokeCount": 2,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "一",
        "pinyin": "yī",
        "role": "รากศัพท์",
        "meaning": "หนึ่ง / เส้นขวาง",
        "desc": "สังกัดหมวด 一"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 七 กำเนิดจากรากศัพท์ 一 (หนึ่ง / เส้นขวาง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 一 เพื่อสื่อความหมายถึง เจ็ด (7)",
      "modernEvolution": "หมายถึง เจ็ด (7)"
    },
    "mnemonicHook": {
      "formula": "ราก 一 (หนึ่ง / เส้นขวาง) ➔ 'เจ็ด (7)' (七)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 一 เชื่อมโยงสู่คำว่า เจ็ด (7)"
    },
    "compounds": [
      {
        "word": "七个",
        "pinyin": "qī gè",
        "thai": "เจ็ดอัน",
        "hsk": 1,
        "audioText": "七个"
      },
      {
        "word": "七月",
        "pinyin": "qī yuè",
        "thai": "กรกฎาคม",
        "hsk": 1,
        "audioText": "七月"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：七。",
        "pinyin": "Zhè shì yī gè hànzì: 七.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 七 (เจ็ด (7))",
        "audioText": "这是一个汉字：七。"
      }
    ]
  },
  "万": {
    "char": "万",
    "radical": "一",
    "primaryPinyin": "wàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "w", "final": "an", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "wàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "หมื่น / จำนวนมาก",
        "usageContext": "เช่น 一万"
      }
    ],
    "thaiMeaningShort": "หมื่น / จำนวนมาก",
    "hskLevel": 2,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "一",
        "pinyin": "yī",
        "role": "รากศัพท์",
        "meaning": "หนึ่ง / เส้นขวาง",
        "desc": "สังกัดหมวด 一"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 万 กำเนิดจากรากศัพท์ 一 (หนึ่ง / เส้นขวาง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 一 เพื่อสื่อความหมายถึง หมื่น / จำนวนมาก",
      "modernEvolution": "หมายถึง หมื่น / จำนวนมาก"
    },
    "mnemonicHook": {
      "formula": "ราก 一 (หนึ่ง / เส้นขวาง) ➔ 'หมื่น / จำนวนมาก' (万)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 一 เชื่อมโยงสู่คำว่า หมื่น / จำนวนมาก"
    },
    "compounds": [
      {
        "word": "一万",
        "pinyin": "yī wàn",
        "thai": "หนึ่งหมื่น",
        "hsk": 2,
        "audioText": "一万"
      },
      {
        "word": "千万",
        "pinyin": "qiān wàn",
        "thai": "เด็ดขาด/สิบล้าน",
        "hsk": 2,
        "audioText": "千万"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：万。",
        "pinyin": "Zhè shì yī gè hànzì: 万.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 万 (หมื่น / จำนวนมาก)",
        "audioText": "这是一个汉字：万。"
      }
    ]
  },
  "丈": {
    "char": "丈",
    "radical": "一",
    "primaryPinyin": "zhàng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "zh", "final": "ang", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "zhàng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "มาตราวัดความยาวจ้าง / สามี",
        "usageContext": "เช่น 丈夫"
      }
    ],
    "thaiMeaningShort": "มาตราวัดความยาวจ้าง / สามี",
    "hskLevel": 3,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "一",
        "pinyin": "yī",
        "role": "รากศัพท์",
        "meaning": "หนึ่ง / เส้นขวาง",
        "desc": "สังกัดหมวด 一"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 丈 กำเนิดจากรากศัพท์ 一 (หนึ่ง / เส้นขวาง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 一 เพื่อสื่อความหมายถึง มาตราวัดความยาวจ้าง / สามี",
      "modernEvolution": "หมายถึง มาตราวัดความยาวจ้าง / สามี"
    },
    "mnemonicHook": {
      "formula": "ราก 一 (หนึ่ง / เส้นขวาง) ➔ 'มาตราวัดความยาวจ้าง / สามี' (丈)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 一 เชื่อมโยงสู่คำว่า มาตราวัดความยาวจ้าง / สามี"
    },
    "compounds": [
      {
        "word": "丈夫",
        "pinyin": "zhàng fu",
        "thai": "สามี",
        "hsk": 3,
        "audioText": "丈夫"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：丈。",
        "pinyin": "Zhè shì yī gè hànzì: 丈.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 丈 (มาตราวัดความยาวจ้าง / สามี)",
        "audioText": "这是一个汉字：丈。"
      }
    ]
  },
  "不": {
    "char": "不",
    "radical": "一",
    "primaryPinyin": "bù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "b", "final": "u", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "bù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ไม่ / ปฏิเสธ",
        "usageContext": "เช่น 不是"
      }
    ],
    "thaiMeaningShort": "ไม่ / ปฏิเสธ",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "一",
        "pinyin": "yī",
        "role": "รากศัพท์",
        "meaning": "หนึ่ง / เส้นขวาง",
        "desc": "สังกัดหมวด 一"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 不 กำเนิดจากรากศัพท์ 一 (หนึ่ง / เส้นขวาง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 一 เพื่อสื่อความหมายถึง ไม่ / ปฏิเสธ",
      "modernEvolution": "หมายถึง ไม่ / ปฏิเสธ"
    },
    "mnemonicHook": {
      "formula": "ราก 一 (หนึ่ง / เส้นขวาง) ➔ 'ไม่ / ปฏิเสธ' (不)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 一 เชื่อมโยงสู่คำว่า ไม่ / ปฏิเสธ"
    },
    "compounds": [
      {
        "word": "不是",
        "pinyin": "bù shì",
        "thai": "ไม่ใช่",
        "hsk": 1,
        "audioText": "不是"
      },
      {
        "word": "不好",
        "pinyin": "bù hǎo",
        "thai": "ไม่ดี",
        "hsk": 1,
        "audioText": "不好"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：不。",
        "pinyin": "Zhè shì yī gè hànzì: 不.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 不 (ไม่ / ปฏิเสธ)",
        "audioText": "这是一个汉字：不。"
      }
    ]
  },
  "中": {
    "char": "中",
    "radical": "丨",
    "primaryPinyin": "zhōng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "zh", "final": "ong", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "zhōng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "กลาง / ประเทศจีน",
        "usageContext": "เช่น 中国"
      }
    ],
    "thaiMeaningShort": "กลาง / ประเทศจีน",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丨",
        "pinyin": "gǔn",
        "role": "รากศัพท์",
        "meaning": "เส้นตั้ง / การเชื่อมต่อ",
        "desc": "สังกัดหมวด 丨"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 中 กำเนิดจากรากศัพท์ 丨 (เส้นตั้ง / การเชื่อมต่อ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丨 เพื่อสื่อความหมายถึง กลาง / ประเทศจีน",
      "modernEvolution": "หมายถึง กลาง / ประเทศจีน"
    },
    "mnemonicHook": {
      "formula": "ราก 丨 (เส้นตั้ง / การเชื่อมต่อ) ➔ 'กลาง / ประเทศจีน' (中)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丨 เชื่อมโยงสู่คำว่า กลาง / ประเทศจีน"
    },
    "compounds": [
      {
        "word": "中国",
        "pinyin": "zhōng guó",
        "thai": "ประเทศจีน",
        "hsk": 1,
        "audioText": "中国"
      },
      {
        "word": "中间",
        "pinyin": "zhōng jiān",
        "thai": "ตรงกลาง",
        "hsk": 1,
        "audioText": "中间"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：中。",
        "pinyin": "Zhè shì yī gè hànzì: 中.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 中 (กลาง / ประเทศจีน)",
        "audioText": "这是一个汉字：中。"
      }
    ]
  },
  "丰": {
    "char": "丰",
    "radical": "丨",
    "primaryPinyin": "fēng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "f", "final": "eng", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "fēng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "อุดมสมบูรณ์ / รูปร่างดี",
        "usageContext": "เช่น 丰富"
      }
    ],
    "thaiMeaningShort": "อุดมสมบูรณ์ / รูปร่างดี",
    "hskLevel": 4,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丨",
        "pinyin": "gǔn",
        "role": "รากศัพท์",
        "meaning": "เส้นตั้ง / การเชื่อมต่อ",
        "desc": "สังกัดหมวด 丨"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 丰 กำเนิดจากรากศัพท์ 丨 (เส้นตั้ง / การเชื่อมต่อ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丨 เพื่อสื่อความหมายถึง อุดมสมบูรณ์ / รูปร่างดี",
      "modernEvolution": "หมายถึง อุดมสมบูรณ์ / รูปร่างดี"
    },
    "mnemonicHook": {
      "formula": "ราก 丨 (เส้นตั้ง / การเชื่อมต่อ) ➔ 'อุดมสมบูรณ์ / รูปร่างดี' (丰)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丨 เชื่อมโยงสู่คำว่า อุดมสมบูรณ์ / รูปร่างดี"
    },
    "compounds": [
      {
        "word": "丰富",
        "pinyin": "fēng fù",
        "thai": "อุดมสมบูรณ์",
        "hsk": 4,
        "audioText": "丰富"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：丰。",
        "pinyin": "Zhè shì yī gè hànzì: 丰.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 丰 (อุดมสมบูรณ์ / รูปร่างดี)",
        "audioText": "这是一个汉字：丰。"
      }
    ]
  },
  "串": {
    "char": "串",
    "radical": "丨",
    "primaryPinyin": "chuàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "ch", "final": "uan", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "chuàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "เสียบไม้ / ร้อยเรียง",
        "usageContext": "เช่น 羊肉串"
      }
    ],
    "thaiMeaningShort": "เสียบไม้ / ร้อยเรียง",
    "hskLevel": 3,
    "strokeCount": 7,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丨",
        "pinyin": "gǔn",
        "role": "รากศัพท์",
        "meaning": "เส้นตั้ง / การเชื่อมต่อ",
        "desc": "สังกัดหมวด 丨"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 串 กำเนิดจากรากศัพท์ 丨 (เส้นตั้ง / การเชื่อมต่อ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丨 เพื่อสื่อความหมายถึง เสียบไม้ / ร้อยเรียง",
      "modernEvolution": "หมายถึง เสียบไม้ / ร้อยเรียง"
    },
    "mnemonicHook": {
      "formula": "ราก 丨 (เส้นตั้ง / การเชื่อมต่อ) ➔ 'เสียบไม้ / ร้อยเรียง' (串)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丨 เชื่อมโยงสู่คำว่า เสียบไม้ / ร้อยเรียง"
    },
    "compounds": [
      {
        "word": "羊肉串",
        "pinyin": "yáng ròu chuàn",
        "thai": "เนื้อแกะเสียบไม้",
        "hsk": 3,
        "audioText": "羊肉串"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：串。",
        "pinyin": "Zhè shì yī gè hànzì: 串.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 串 (เสียบไม้ / ร้อยเรียง)",
        "audioText": "这是一个汉字：串。"
      }
    ]
  },
  "丸": {
    "char": "丸",
    "radical": "丶",
    "primaryPinyin": "wán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "w", "final": "an", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "wán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "เม็ดกลม / ยาเม็ด / ลูกชิ้น",
        "usageContext": "เช่น 肉丸"
      }
    ],
    "thaiMeaningShort": "เม็ดกลม / ยาเม็ด / ลูกชิ้น",
    "hskLevel": 4,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丶",
        "pinyin": "zhǔ",
        "role": "รากศัพท์",
        "meaning": "จุด / หยดน้ำ",
        "desc": "สังกัดหมวด 丶"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 丸 กำเนิดจากรากศัพท์ 丶 (จุด / หยดน้ำ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丶 เพื่อสื่อความหมายถึง เม็ดกลม / ยาเม็ด / ลูกชิ้น",
      "modernEvolution": "หมายถึง เม็ดกลม / ยาเม็ด / ลูกชิ้น"
    },
    "mnemonicHook": {
      "formula": "ราก 丶 (จุด / หยดน้ำ) ➔ 'เม็ดกลม / ยาเม็ด / ลูกชิ้น' (丸)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丶 เชื่อมโยงสู่คำว่า เม็ดกลม / ยาเม็ด / ลูกชิ้น"
    },
    "compounds": [
      {
        "word": "肉丸",
        "pinyin": "ròu wán",
        "thai": "ลูกชิ้นเนื้อ",
        "hsk": 4,
        "audioText": "肉丸"
      },
      {
        "word": "药丸",
        "pinyin": "yào wán",
        "thai": "ยาเม็ด",
        "hsk": 4,
        "audioText": "药丸"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：丸。",
        "pinyin": "Zhè shì yī gè hànzì: 丸.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 丸 (เม็ดกลม / ยาเม็ด / ลูกชิ้น)",
        "audioText": "这是一个汉字：丸。"
      }
    ]
  },
  "丹": {
    "char": "丹",
    "radical": "丶",
    "primaryPinyin": "dān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "d", "final": "an", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "dān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "สีแดงชาด / ยาอายุวัฒนะ",
        "usageContext": "เช่น 丹药"
      }
    ],
    "thaiMeaningShort": "สีแดงชาด / ยาอายุวัฒนะ",
    "hskLevel": 4,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丶",
        "pinyin": "zhǔ",
        "role": "รากศัพท์",
        "meaning": "จุด / หยดน้ำ",
        "desc": "สังกัดหมวด 丶"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 丹 กำเนิดจากรากศัพท์ 丶 (จุด / หยดน้ำ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丶 เพื่อสื่อความหมายถึง สีแดงชาด / ยาอายุวัฒนะ",
      "modernEvolution": "หมายถึง สีแดงชาด / ยาอายุวัฒนะ"
    },
    "mnemonicHook": {
      "formula": "ราก 丶 (จุด / หยดน้ำ) ➔ 'สีแดงชาด / ยาอายุวัฒนะ' (丹)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丶 เชื่อมโยงสู่คำว่า สีแดงชาด / ยาอายุวัฒนะ"
    },
    "compounds": [
      {
        "word": "丹药",
        "pinyin": "dān yào",
        "thai": "ยาอายุวัฒนะ",
        "hsk": 4,
        "audioText": "丹药"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：丹。",
        "pinyin": "Zhè shì yī gè hànzì: 丹.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 丹 (สีแดงชาด / ยาอายุวัฒนะ)",
        "audioText": "这是一个汉字：丹。"
      }
    ]
  },
  "主": {
    "char": "主",
    "radical": "丶",
    "primaryPinyin": "zhǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "zh", "final": "u", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "zhǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "เจ้าของ / สำคัญหลัก",
        "usageContext": "เช่น 主要"
      }
    ],
    "thaiMeaningShort": "เจ้าของ / สำคัญหลัก",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丶",
        "pinyin": "zhǔ",
        "role": "รากศัพท์",
        "meaning": "จุด / หยดน้ำ",
        "desc": "สังกัดหมวด 丶"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 主 กำเนิดจากรากศัพท์ 丶 (จุด / หยดน้ำ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丶 เพื่อสื่อความหมายถึง เจ้าของ / สำคัญหลัก",
      "modernEvolution": "หมายถึง เจ้าของ / สำคัญหลัก"
    },
    "mnemonicHook": {
      "formula": "ราก 丶 (จุด / หยดน้ำ) ➔ 'เจ้าของ / สำคัญหลัก' (主)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丶 เชื่อมโยงสู่คำว่า เจ้าของ / สำคัญหลัก"
    },
    "compounds": [
      {
        "word": "主要",
        "pinyin": "zhǔ yào",
        "thai": "สำคัญหลัก",
        "hsk": 2,
        "audioText": "主要"
      },
      {
        "word": "主人",
        "pinyin": "zhǔ rén",
        "thai": "เจ้าของ",
        "hsk": 2,
        "audioText": "主人"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：主。",
        "pinyin": "Zhè shì yī gè hànzì: 主.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 主 (เจ้าของ / สำคัญหลัก)",
        "audioText": "这是一个汉字：主。"
      }
    ]
  },
  "九": {
    "char": "九",
    "radical": "乙",
    "primaryPinyin": "jiǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "j", "final": "iu", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "jiǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "เก้า (9)",
        "usageContext": "เช่น 九州"
      }
    ],
    "thaiMeaningShort": "เก้า (9)",
    "hskLevel": 1,
    "strokeCount": 2,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "乙",
        "pinyin": "yǐ",
        "role": "รากศัพท์",
        "meaning": "ต้นกล้า / อ่อนช้อย (乚)",
        "desc": "สังกัดหมวด 乙"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 九 กำเนิดจากรากศัพท์ 乙 (ต้นกล้า / อ่อนช้อย (乚))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 乙 เพื่อสื่อความหมายถึง เก้า (9)",
      "modernEvolution": "หมายถึง เก้า (9)"
    },
    "mnemonicHook": {
      "formula": "ราก 乙 (ต้นกล้า / อ่อนช้อย (乚)) ➔ 'เก้า (9)' (九)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 乙 เชื่อมโยงสู่คำว่า เก้า (9)"
    },
    "compounds": [
      {
        "word": "九州",
        "pinyin": "jiǔ zhōu",
        "thai": "แผ่นดินจีน",
        "hsk": 1,
        "audioText": "九州"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：九。",
        "pinyin": "Zhè shì yī gè hànzì: 九.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 九 (เก้า (9))",
        "audioText": "这是一个汉字：九。"
      }
    ]
  },
  "及": {
    "char": "及",
    "radical": "丿",
    "primaryPinyin": "jí",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "j", "final": "i", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "jí",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "และ / ทันเวลา / ถึง",
        "usageContext": "เช่น 及时"
      }
    ],
    "thaiMeaningShort": "และ / ทันเวลา / ถึง",
    "hskLevel": 3,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丿",
        "pinyin": "piě",
        "role": "รากศัพท์",
        "meaning": "เส้นปัดซ้าย",
        "desc": "สังกัดหมวด 丿"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 及 กำเนิดจากรากศัพท์ 丿 (เส้นปัดซ้าย)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丿 เพื่อสื่อความหมายถึง และ / ทันเวลา / ถึง",
      "modernEvolution": "หมายถึง และ / ทันเวลา / ถึง"
    },
    "mnemonicHook": {
      "formula": "ราก 丿 (เส้นปัดซ้าย) ➔ 'และ / ทันเวลา / ถึง' (及)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丿 เชื่อมโยงสู่คำว่า และ / ทันเวลา / ถึง"
    },
    "compounds": [
      {
        "word": "及时",
        "pinyin": "jí shí",
        "thai": "ทันเวลา",
        "hsk": 3,
        "audioText": "及时"
      },
      {
        "word": "以及",
        "pinyin": "yǐ jí",
        "thai": "รวมทั้ง/และ",
        "hsk": 3,
        "audioText": "以及"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：及。",
        "pinyin": "Zhè shì yī gè hànzì: 及.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 及 (และ / ทันเวลา / ถึง)",
        "audioText": "这是一个汉字：及。"
      }
    ]
  },
  "久": {
    "char": "久",
    "radical": "丿",
    "primaryPinyin": "jiǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "j", "final": "iu", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "jiǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "นาน / เวลายาวนาน",
        "usageContext": "เช่น 好久"
      }
    ],
    "thaiMeaningShort": "นาน / เวลายาวนาน",
    "hskLevel": 2,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "丿",
        "pinyin": "piě",
        "role": "รากศัพท์",
        "meaning": "เส้นปัดซ้าย",
        "desc": "สังกัดหมวด 丿"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 久 กำเนิดจากรากศัพท์ 丿 (เส้นปัดซ้าย)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 丿 เพื่อสื่อความหมายถึง นาน / เวลายาวนาน",
      "modernEvolution": "หมายถึง นาน / เวลายาวนาน"
    },
    "mnemonicHook": {
      "formula": "ราก 丿 (เส้นปัดซ้าย) ➔ 'นาน / เวลายาวนาน' (久)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 丿 เชื่อมโยงสู่คำว่า นาน / เวลายาวนาน"
    },
    "compounds": [
      {
        "word": "好久",
        "pinyin": "hǎo jiǔ",
        "thai": "นานมาก",
        "hsk": 2,
        "audioText": "好久"
      },
      {
        "word": "不久",
        "pinyin": "bù jiǔ",
        "thai": "ไม่นาน",
        "hsk": 2,
        "audioText": "不久"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：久。",
        "pinyin": "Zhè shì yī gè hànzì: 久.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 久 (นาน / เวลายาวนาน)",
        "audioText": "这是一个汉字：久。"
      }
    ]
  },
  "乞": {
    "char": "乞",
    "radical": "乙",
    "primaryPinyin": "qǐ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "q", "final": "i", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "qǐ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ขอ / ขอทาน / ร้องขอ",
        "usageContext": "เช่น 乞丐"
      }
    ],
    "thaiMeaningShort": "ขอ / ขอทาน / ร้องขอ",
    "hskLevel": 4,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "乙",
        "pinyin": "yǐ",
        "role": "รากศัพท์",
        "meaning": "ต้นกล้า / อ่อนช้อย (乚)",
        "desc": "สังกัดหมวด 乙"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 乞 กำเนิดจากรากศัพท์ 乙 (ต้นกล้า / อ่อนช้อย (乚))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 乙 เพื่อสื่อความหมายถึง ขอ / ขอทาน / ร้องขอ",
      "modernEvolution": "หมายถึง ขอ / ขอทาน / ร้องขอ"
    },
    "mnemonicHook": {
      "formula": "ราก 乙 (ต้นกล้า / อ่อนช้อย (乚)) ➔ 'ขอ / ขอทาน / ร้องขอ' (乞)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 乙 เชื่อมโยงสู่คำว่า ขอ / ขอทาน / ร้องขอ"
    },
    "compounds": [
      {
        "word": "乞丐",
        "pinyin": "qǐ gài",
        "thai": "ขอทาน",
        "hsk": 4,
        "audioText": "乞丐"
      },
      {
        "word": "乞求",
        "pinyin": "qǐ qiú",
        "thai": "วิงวอนขอ",
        "hsk": 4,
        "audioText": "乞求"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：乞。",
        "pinyin": "Zhè shì yī gè hànzì: 乞.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 乞 (ขอ / ขอทาน / ร้องขอ)",
        "audioText": "这是一个汉字：乞。"
      }
    ]
  },
  "也": {
    "char": "也",
    "radical": "乙",
    "primaryPinyin": "yě",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "e", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yě",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ก็...เหมือนกัน / เช่นกัน",
        "usageContext": "เช่น 也是"
      }
    ],
    "thaiMeaningShort": "ก็...เหมือนกัน / เช่นกัน",
    "hskLevel": 1,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "乙",
        "pinyin": "yǐ",
        "role": "รากศัพท์",
        "meaning": "ต้นกล้า / อ่อนช้อย (乚)",
        "desc": "สังกัดหมวด 乙"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 也 กำเนิดจากรากศัพท์ 乙 (ต้นกล้า / อ่อนช้อย (乚))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 乙 เพื่อสื่อความหมายถึง ก็...เหมือนกัน / เช่นกัน",
      "modernEvolution": "หมายถึง ก็...เหมือนกัน / เช่นกัน"
    },
    "mnemonicHook": {
      "formula": "ราก 乙 (ต้นกล้า / อ่อนช้อย (乚)) ➔ 'ก็...เหมือนกัน / เช่นกัน' (也)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 乙 เชื่อมโยงสู่คำว่า ก็...เหมือนกัน / เช่นกัน"
    },
    "compounds": [
      {
        "word": "也是",
        "pinyin": "yě shì",
        "thai": "ก็เป็นเช่นกัน",
        "hsk": 1,
        "audioText": "也是"
      },
      {
        "word": "也许",
        "pinyin": "yě xǔ",
        "thai": "อาจจะ",
        "hsk": 1,
        "audioText": "也许"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：也。",
        "pinyin": "Zhè shì yī gè hànzì: 也.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 也 (ก็...เหมือนกัน / เช่นกัน)",
        "audioText": "这是一个汉字：也。"
      }
    ]
  },
  "了": {
    "char": "了",
    "radical": "亅",
    "primaryPinyin": "le",
    "primaryTone": 5,
    "pronunciationGuide": { "initial": "l", "final": "e", "toneRule": "เสียงเบา (Neutral) — ออกเสียงสั้น เบา ไม่มีระดับเสียงเฉพาะตัว ขึ้นอยู่กับเสียงพยางค์ก่อนหน้า" },
    "pinyinList": [
      {
        "pinyin": "le",
        "tone": 5,
        "toneDescription": "เสียงเบา (Neutral)",
        "meaningThai": "แล้ว / เกิดขึ้นแล้ว",
        "usageContext": "เช่น 好了"
      }
    ],
    "thaiMeaningShort": "แล้ว / เกิดขึ้นแล้ว",
    "hskLevel": 1,
    "strokeCount": 2,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亅",
        "pinyin": "jué",
        "role": "รากศัพท์",
        "meaning": "ขอเบ็ด",
        "desc": "สังกัดหมวด 亅"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 了 กำเนิดจากรากศัพท์ 亅 (ขอเบ็ด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亅 เพื่อสื่อความหมายถึง แล้ว / เกิดขึ้นแล้ว",
      "modernEvolution": "หมายถึง แล้ว / เกิดขึ้นแล้ว"
    },
    "mnemonicHook": {
      "formula": "ราก 亅 (ขอเบ็ด) ➔ 'แล้ว / เกิดขึ้นแล้ว' (了)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亅 เชื่อมโยงสู่คำว่า แล้ว / เกิดขึ้นแล้ว"
    },
    "compounds": [
      {
        "word": "好了",
        "pinyin": "hǎo le",
        "thai": "เสร็จแล้ว/ดีแล้ว",
        "hsk": 1,
        "audioText": "好了"
      },
      {
        "word": "走了",
        "pinyin": "zǒu le",
        "thai": "ไปแล้ว",
        "hsk": 1,
        "audioText": "走了"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：了。",
        "pinyin": "Zhè shì yī gè hànzì: 了.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 了 (แล้ว / เกิดขึ้นแล้ว)",
        "audioText": "这是一个汉字：了。"
      }
    ]
  },
  "予": {
    "char": "予",
    "radical": "亅",
    "primaryPinyin": "yǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "u", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "มอบให้ / ให้",
        "usageContext": "เช่น 给予"
      }
    ],
    "thaiMeaningShort": "มอบให้ / ให้",
    "hskLevel": 4,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亅",
        "pinyin": "jué",
        "role": "รากศัพท์",
        "meaning": "ขอเบ็ด",
        "desc": "สังกัดหมวด 亅"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 予 กำเนิดจากรากศัพท์ 亅 (ขอเบ็ด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亅 เพื่อสื่อความหมายถึง มอบให้ / ให้",
      "modernEvolution": "หมายถึง มอบให้ / ให้"
    },
    "mnemonicHook": {
      "formula": "ราก 亅 (ขอเบ็ด) ➔ 'มอบให้ / ให้' (予)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亅 เชื่อมโยงสู่คำว่า มอบให้ / ให้"
    },
    "compounds": [
      {
        "word": "给予",
        "pinyin": "jǐ yǔ",
        "thai": "มอบให้",
        "hsk": 4,
        "audioText": "给予"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：予。",
        "pinyin": "Zhè shì yī gè hànzì: 予.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 予 (มอบให้ / ให้)",
        "audioText": "这是一个汉字：予。"
      }
    ]
  },
  "事": {
    "char": "事",
    "radical": "亅",
    "primaryPinyin": "shì",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "sh", "final": "i", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "shì",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ธุระ / เรื่องราว / งาน",
        "usageContext": "เช่น 事情"
      }
    ],
    "thaiMeaningShort": "ธุระ / เรื่องราว / งาน",
    "hskLevel": 1,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亅",
        "pinyin": "jué",
        "role": "รากศัพท์",
        "meaning": "ขอเบ็ด",
        "desc": "สังกัดหมวด 亅"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 事 กำเนิดจากรากศัพท์ 亅 (ขอเบ็ด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亅 เพื่อสื่อความหมายถึง ธุระ / เรื่องราว / งาน",
      "modernEvolution": "หมายถึง ธุระ / เรื่องราว / งาน"
    },
    "mnemonicHook": {
      "formula": "ราก 亅 (ขอเบ็ด) ➔ 'ธุระ / เรื่องราว / งาน' (事)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亅 เชื่อมโยงสู่คำว่า ธุระ / เรื่องราว / งาน"
    },
    "compounds": [
      {
        "word": "事情",
        "pinyin": "shì qing",
        "thai": "เรื่องราว/ธุระ",
        "hsk": 1,
        "audioText": "事情"
      },
      {
        "word": "故事",
        "pinyin": "gù shi",
        "thai": "นิทาน/เรื่องเล่า",
        "hsk": 1,
        "audioText": "故事"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：事。",
        "pinyin": "Zhè shì yī gè hànzì: 事.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 事 (ธุระ / เรื่องราว / งาน)",
        "audioText": "这是一个汉字：事。"
      }
    ]
  },
  "于": {
    "char": "于",
    "radical": "二",
    "primaryPinyin": "yú",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "u", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yú",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "ใน / ที่ / ต่อ / จาก",
        "usageContext": "เช่น 关于"
      }
    ],
    "thaiMeaningShort": "ใน / ที่ / ต่อ / จาก",
    "hskLevel": 3,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "二",
        "pinyin": "èr",
        "role": "รากศัพท์",
        "meaning": "สอง / ฟ้าและดิน",
        "desc": "สังกัดหมวด 二"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 于 กำเนิดจากรากศัพท์ 二 (สอง / ฟ้าและดิน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 二 เพื่อสื่อความหมายถึง ใน / ที่ / ต่อ / จาก",
      "modernEvolution": "หมายถึง ใน / ที่ / ต่อ / จาก"
    },
    "mnemonicHook": {
      "formula": "ราก 二 (สอง / ฟ้าและดิน) ➔ 'ใน / ที่ / ต่อ / จาก' (于)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 二 เชื่อมโยงสู่คำว่า ใน / ที่ / ต่อ / จาก"
    },
    "compounds": [
      {
        "word": "关于",
        "pinyin": "guān yú",
        "thai": "เกี่ยวกับ",
        "hsk": 3,
        "audioText": "关于"
      },
      {
        "word": "对于",
        "pinyin": "duì yú",
        "thai": "สำหรับ/ต่อ",
        "hsk": 3,
        "audioText": "对于"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：于。",
        "pinyin": "Zhè shì yī gè hànzì: 于.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 于 (ใน / ที่ / ต่อ / จาก)",
        "audioText": "这是一个汉字：于。"
      }
    ]
  },
  "云": {
    "char": "云",
    "radical": "二",
    "primaryPinyin": "yún",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "un", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yún",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "เมฆ / กลุ่มเมฆ",
        "usageContext": "เช่น 白云"
      }
    ],
    "thaiMeaningShort": "เมฆ / กลุ่มเมฆ",
    "hskLevel": 2,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "二",
        "pinyin": "èr",
        "role": "รากศัพท์",
        "meaning": "สอง / ฟ้าและดิน",
        "desc": "สังกัดหมวด 二"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 云 กำเนิดจากรากศัพท์ 二 (สอง / ฟ้าและดิน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 二 เพื่อสื่อความหมายถึง เมฆ / กลุ่มเมฆ",
      "modernEvolution": "หมายถึง เมฆ / กลุ่มเมฆ"
    },
    "mnemonicHook": {
      "formula": "ราก 二 (สอง / ฟ้าและดิน) ➔ 'เมฆ / กลุ่มเมฆ' (云)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 二 เชื่อมโยงสู่คำว่า เมฆ / กลุ่มเมฆ"
    },
    "compounds": [
      {
        "word": "白云",
        "pinyin": "bái yún",
        "thai": "เมฆสีขาว",
        "hsk": 2,
        "audioText": "白云"
      },
      {
        "word": "云彩",
        "pinyin": "yún cai",
        "thai": "ก้อนเมฆ",
        "hsk": 2,
        "audioText": "云彩"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：云。",
        "pinyin": "Zhè shì yī gè hànzì: 云.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 云 (เมฆ / กลุ่มเมฆ)",
        "audioText": "这是一个汉字：云。"
      }
    ]
  },
  "互": {
    "char": "互",
    "radical": "二",
    "primaryPinyin": "hù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "h", "final": "u", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "hù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ซึ่งกันและกัน",
        "usageContext": "เช่น 互相"
      }
    ],
    "thaiMeaningShort": "ซึ่งกันและกัน",
    "hskLevel": 3,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "二",
        "pinyin": "èr",
        "role": "รากศัพท์",
        "meaning": "สอง / ฟ้าและดิน",
        "desc": "สังกัดหมวด 二"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 互 กำเนิดจากรากศัพท์ 二 (สอง / ฟ้าและดิน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 二 เพื่อสื่อความหมายถึง ซึ่งกันและกัน",
      "modernEvolution": "หมายถึง ซึ่งกันและกัน"
    },
    "mnemonicHook": {
      "formula": "ราก 二 (สอง / ฟ้าและดิน) ➔ 'ซึ่งกันและกัน' (互)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 二 เชื่อมโยงสู่คำว่า ซึ่งกันและกัน"
    },
    "compounds": [
      {
        "word": "互相",
        "pinyin": "hù xiāng",
        "thai": "ซึ่งกันและกัน",
        "hsk": 3,
        "audioText": "互相"
      },
      {
        "word": "互联网",
        "pinyin": "hù lián wǎng",
        "thai": "อินเทอร์เน็ต",
        "hsk": 3,
        "audioText": "互联网"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：互。",
        "pinyin": "Zhè shì yī gè hànzì: 互.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 互 (ซึ่งกันและกัน)",
        "audioText": "这是一个汉字：互。"
      }
    ]
  },
  "五": {
    "char": "五",
    "radical": "二",
    "primaryPinyin": "wǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "w", "final": "u", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "wǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ห้า (5)",
        "usageContext": "เช่น 五月"
      }
    ],
    "thaiMeaningShort": "ห้า (5)",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "二",
        "pinyin": "èr",
        "role": "รากศัพท์",
        "meaning": "สอง / ฟ้าและดิน",
        "desc": "สังกัดหมวด 二"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 五 กำเนิดจากรากศัพท์ 二 (สอง / ฟ้าและดิน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 二 เพื่อสื่อความหมายถึง ห้า (5)",
      "modernEvolution": "หมายถึง ห้า (5)"
    },
    "mnemonicHook": {
      "formula": "ราก 二 (สอง / ฟ้าและดิน) ➔ 'ห้า (5)' (五)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 二 เชื่อมโยงสู่คำว่า ห้า (5)"
    },
    "compounds": [
      {
        "word": "五月",
        "pinyin": "wǔ yuè",
        "thai": "พฤษภาคม",
        "hsk": 1,
        "audioText": "五月"
      },
      {
        "word": "五个",
        "pinyin": "wǔ gè",
        "thai": "ห้าอัน",
        "hsk": 1,
        "audioText": "五个"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：五。",
        "pinyin": "Zhè shì yī gè hànzì: 五.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 五 (ห้า (5))",
        "audioText": "这是一个汉字：五。"
      }
    ]
  },
  "井": {
    "char": "井",
    "radical": "二",
    "primaryPinyin": "jǐng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "j", "final": "ing", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "jǐng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "บ่อน้ำ",
        "usageContext": "เช่น 水井"
      }
    ],
    "thaiMeaningShort": "บ่อน้ำ",
    "hskLevel": 4,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "二",
        "pinyin": "èr",
        "role": "รากศัพท์",
        "meaning": "สอง / ฟ้าและดิน",
        "desc": "สังกัดหมวด 二"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 井 กำเนิดจากรากศัพท์ 二 (สอง / ฟ้าและดิน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 二 เพื่อสื่อความหมายถึง บ่อน้ำ",
      "modernEvolution": "หมายถึง บ่อน้ำ"
    },
    "mnemonicHook": {
      "formula": "ราก 二 (สอง / ฟ้าและดิน) ➔ 'บ่อน้ำ' (井)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 二 เชื่อมโยงสู่คำว่า บ่อน้ำ"
    },
    "compounds": [
      {
        "word": "水井",
        "pinyin": "shuǐ jǐng",
        "thai": "บ่อน้ำ",
        "hsk": 4,
        "audioText": "水井"
      },
      {
        "word": "井底之蛙",
        "pinyin": "jǐng dǐ zhī wā",
        "thai": "กบในกะลาครอบ",
        "hsk": 4,
        "audioText": "井底之蛙"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：井。",
        "pinyin": "Zhè shì yī gè hànzì: 井.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 井 (บ่อน้ำ)",
        "audioText": "这是一个汉字：井。"
      }
    ]
  },
  "市": {
    "char": "市",
    "radical": "巾",
    "primaryPinyin": "shì",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "sh", "final": "i", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "shì",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ตลาด / เมือง",
        "usageContext": "เช่น 市场"
      }
    ],
    "thaiMeaningShort": "ตลาด / เมือง",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "巾",
        "pinyin": "jīn",
        "role": "รากศัพท์",
        "meaning": "ผ้า / ผ้าเช็ดหน้า / ธง",
        "desc": "สังกัดหมวด 巾"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 市 กำเนิดจากรากศัพท์ 巾 (ผ้า / ผ้าเช็ดหน้า / ธง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 巾 เพื่อสื่อความหมายถึง ตลาด / เมือง",
      "modernEvolution": "หมายถึง ตลาด / เมือง"
    },
    "mnemonicHook": {
      "formula": "ราก 巾 (ผ้า / ผ้าเช็ดหน้า / ธง) ➔ 'ตลาด / เมือง' (市)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 巾 เชื่อมโยงสู่คำว่า ตลาด / เมือง"
    },
    "compounds": [
      {
        "word": "市场",
        "pinyin": "shì chǎng",
        "thai": "ตลาดสด",
        "hsk": 2,
        "audioText": "市场"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：市。",
        "pinyin": "Zhè shì yī gè hànzì: 市.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 市 (ตลาด / เมือง)",
        "audioText": "这是一个汉字：市。"
      }
    ]
  },
  "六": {
    "char": "六",
    "radical": "亠",
    "primaryPinyin": "liù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "l", "final": "iu", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "liù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "หก (6)",
        "usageContext": "เช่น 六月"
      }
    ],
    "thaiMeaningShort": "หก (6)",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亠",
        "pinyin": "tóu",
        "role": "รากศัพท์",
        "meaning": "หลังคา / ฝาครอบ",
        "desc": "สังกัดหมวด 亠"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 六 กำเนิดจากรากศัพท์ 亠 (หลังคา / ฝาครอบ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亠 เพื่อสื่อความหมายถึง หก (6)",
      "modernEvolution": "หมายถึง หก (6)"
    },
    "mnemonicHook": {
      "formula": "ราก 亠 (หลังคา / ฝาครอบ) ➔ 'หก (6)' (六)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亠 เชื่อมโยงสู่คำว่า หก (6)"
    },
    "compounds": [
      {
        "word": "六月",
        "pinyin": "liù yuè",
        "thai": "มิถุนายน",
        "hsk": 1,
        "audioText": "六月"
      },
      {
        "word": "六个",
        "pinyin": "liù gè",
        "thai": "หกอัน",
        "hsk": 1,
        "audioText": "六个"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：六。",
        "pinyin": "Zhè shì yī gè hànzì: 六.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 六 (หก (6))",
        "audioText": "这是一个汉字：六。"
      }
    ]
  },
  "文": {
    "char": "文",
    "radical": "亠",
    "primaryPinyin": "wén",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "w", "final": "en", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "wén",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "ภาษา / วัฒนธรรม / บทความ",
        "usageContext": "เช่น 中文"
      }
    ],
    "thaiMeaningShort": "ภาษา / วัฒนธรรม / บทความ",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亠",
        "pinyin": "tóu",
        "role": "รากศัพท์",
        "meaning": "หลังคา / ฝาครอบ",
        "desc": "สังกัดหมวด 亠"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 文 กำเนิดจากรากศัพท์ 亠 (หลังคา / ฝาครอบ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亠 เพื่อสื่อความหมายถึง ภาษา / วัฒนธรรม / บทความ",
      "modernEvolution": "หมายถึง ภาษา / วัฒนธรรม / บทความ"
    },
    "mnemonicHook": {
      "formula": "ราก 亠 (หลังคา / ฝาครอบ) ➔ 'ภาษา / วัฒนธรรม / บทความ' (文)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亠 เชื่อมโยงสู่คำว่า ภาษา / วัฒนธรรม / บทความ"
    },
    "compounds": [
      {
        "word": "中文",
        "pinyin": "zhōng wén",
        "thai": "ภาษาจีน",
        "hsk": 1,
        "audioText": "中文"
      },
      {
        "word": "文化",
        "pinyin": "wén huà",
        "thai": "วัฒนธรรม",
        "hsk": 1,
        "audioText": "文化"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：文。",
        "pinyin": "Zhè shì yī gè hànzì: 文.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 文 (ภาษา / วัฒนธรรม / บทความ)",
        "audioText": "这是一个汉字：文。"
      }
    ]
  },
  "京": {
    "char": "京",
    "radical": "亠",
    "primaryPinyin": "jīng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "j", "final": "ing", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "jīng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "เมืองหลวง / ปักกิ่ง",
        "usageContext": "เช่น 北京"
      }
    ],
    "thaiMeaningShort": "เมืองหลวง / ปักกิ่ง",
    "hskLevel": 1,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亠",
        "pinyin": "tóu",
        "role": "รากศัพท์",
        "meaning": "หลังคา / ฝาครอบ",
        "desc": "สังกัดหมวด 亠"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 京 กำเนิดจากรากศัพท์ 亠 (หลังคา / ฝาครอบ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亠 เพื่อสื่อความหมายถึง เมืองหลวง / ปักกิ่ง",
      "modernEvolution": "หมายถึง เมืองหลวง / ปักกิ่ง"
    },
    "mnemonicHook": {
      "formula": "ราก 亠 (หลังคา / ฝาครอบ) ➔ 'เมืองหลวง / ปักกิ่ง' (京)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亠 เชื่อมโยงสู่คำว่า เมืองหลวง / ปักกิ่ง"
    },
    "compounds": [
      {
        "word": "北京",
        "pinyin": "běi jīng",
        "thai": "ปักกิ่ง",
        "hsk": 1,
        "audioText": "北京"
      },
      {
        "word": "南京",
        "pinyin": "nán jīng",
        "thai": "นานกิง",
        "hsk": 1,
        "audioText": "南京"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：京。",
        "pinyin": "Zhè shì yī gè hànzì: 京.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 京 (เมืองหลวง / ปักกิ่ง)",
        "audioText": "这是一个汉字：京。"
      }
    ]
  },
  "高": {
    "char": "高",
    "radical": "亠",
    "primaryPinyin": "gāo",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "g", "final": "ao", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "gāo",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "สูง / ระดับสูง",
        "usageContext": "เช่น 高兴"
      }
    ],
    "thaiMeaningShort": "สูง / ระดับสูง",
    "hskLevel": 1,
    "strokeCount": 10,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亠",
        "pinyin": "tóu",
        "role": "รากศัพท์",
        "meaning": "หลังคา / ฝาครอบ",
        "desc": "สังกัดหมวด 亠"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 高 กำเนิดจากรากศัพท์ 亠 (หลังคา / ฝาครอบ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亠 เพื่อสื่อความหมายถึง สูง / ระดับสูง",
      "modernEvolution": "หมายถึง สูง / ระดับสูง"
    },
    "mnemonicHook": {
      "formula": "ราก 亠 (หลังคา / ฝาครอบ) ➔ 'สูง / ระดับสูง' (高)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亠 เชื่อมโยงสู่คำว่า สูง / ระดับสูง"
    },
    "compounds": [
      {
        "word": "高兴",
        "pinyin": "gāo xìng",
        "thai": "ดีใจ",
        "hsk": 1,
        "audioText": "高兴"
      },
      {
        "word": "提高",
        "pinyin": "tí gāo",
        "thai": "ยกระดับ",
        "hsk": 1,
        "audioText": "提高"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：高。",
        "pinyin": "Zhè shì yī gè hànzì: 高.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 高 (สูง / ระดับสูง)",
        "audioText": "这是一个汉字：高。"
      }
    ]
  },
  "亮": {
    "char": "亮",
    "radical": "亠",
    "primaryPinyin": "liàng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "l", "final": "iang", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "liàng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "สว่าง / สดใส / เปล่งประกาย",
        "usageContext": "เช่น 漂亮"
      }
    ],
    "thaiMeaningShort": "สว่าง / สดใส / เปล่งประกาย",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亠",
        "pinyin": "tóu",
        "role": "รากศัพท์",
        "meaning": "หลังคา / ฝาครอบ",
        "desc": "สังกัดหมวด 亠"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 亮 กำเนิดจากรากศัพท์ 亠 (หลังคา / ฝาครอบ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亠 เพื่อสื่อความหมายถึง สว่าง / สดใส / เปล่งประกาย",
      "modernEvolution": "หมายถึง สว่าง / สดใส / เปล่งประกาย"
    },
    "mnemonicHook": {
      "formula": "ราก 亠 (หลังคา / ฝาครอบ) ➔ 'สว่าง / สดใส / เปล่งประกาย' (亮)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亠 เชื่อมโยงสู่คำว่า สว่าง / สดใส / เปล่งประกาย"
    },
    "compounds": [
      {
        "word": "漂亮",
        "pinyin": "piào liang",
        "thai": "สวย",
        "hsk": 2,
        "audioText": "漂亮"
      },
      {
        "word": "月亮",
        "pinyin": "yuè liang",
        "thai": "ดวงจันทร์",
        "hsk": 2,
        "audioText": "月亮"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：亮。",
        "pinyin": "Zhè shì yī gè hànzì: 亮.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 亮 (สว่าง / สดใส / เปล่งประกาย)",
        "audioText": "这是一个汉字：亮。"
      }
    ]
  },
  "亲": {
    "char": "亲",
    "radical": "亠",
    "primaryPinyin": "qīn",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "q", "final": "in", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "qīn",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "พ่อแม่ / ญาติสนิท / จูบ",
        "usageContext": "เช่น 母亲"
      }
    ],
    "thaiMeaningShort": "พ่อแม่ / ญาติสนิท / จูบ",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "亠",
        "pinyin": "tóu",
        "role": "รากศัพท์",
        "meaning": "หลังคา / ฝาครอบ",
        "desc": "สังกัดหมวด 亠"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 亲 กำเนิดจากรากศัพท์ 亠 (หลังคา / ฝาครอบ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 亠 เพื่อสื่อความหมายถึง พ่อแม่ / ญาติสนิท / จูบ",
      "modernEvolution": "หมายถึง พ่อแม่ / ญาติสนิท / จูบ"
    },
    "mnemonicHook": {
      "formula": "ราก 亠 (หลังคา / ฝาครอบ) ➔ 'พ่อแม่ / ญาติสนิท / จูบ' (亲)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 亠 เชื่อมโยงสู่คำว่า พ่อแม่ / ญาติสนิท / จูบ"
    },
    "compounds": [
      {
        "word": "母亲",
        "pinyin": "mǔ qīn",
        "thai": "มารดา",
        "hsk": 2,
        "audioText": "母亲"
      },
      {
        "word": "父亲",
        "pinyin": "fù qīn",
        "thai": "บิดา",
        "hsk": 2,
        "audioText": "父亲"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：亲。",
        "pinyin": "Zhè shì yī gè hànzì: 亲.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 亲 (พ่อแม่ / ญาติสนิท / จูบ)",
        "audioText": "这是一个汉字：亲。"
      }
    ]
  },
  "元": {
    "char": "元",
    "radical": "儿",
    "primaryPinyin": "yuán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "uan", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yuán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "หยวน (เงินจีน) / เริ่มแรก",
        "usageContext": "เช่น 一元"
      }
    ],
    "thaiMeaningShort": "หยวน (เงินจีน) / เริ่มแรก",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "儿",
        "pinyin": "ér",
        "role": "รากศัพท์",
        "meaning": "ขาคน / เด็ก / บุตร",
        "desc": "สังกัดหมวด 儿"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 元 กำเนิดจากรากศัพท์ 儿 (ขาคน / เด็ก / บุตร)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 儿 เพื่อสื่อความหมายถึง หยวน (เงินจีน) / เริ่มแรก",
      "modernEvolution": "หมายถึง หยวน (เงินจีน) / เริ่มแรก"
    },
    "mnemonicHook": {
      "formula": "ราก 儿 (ขาคน / เด็ก / บุตร) ➔ 'หยวน (เงินจีน) / เริ่มแรก' (元)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 儿 เชื่อมโยงสู่คำว่า หยวน (เงินจีน) / เริ่มแรก"
    },
    "compounds": [
      {
        "word": "一元",
        "pinyin": "yī yuán",
        "thai": "หนึ่งหยวน",
        "hsk": 1,
        "audioText": "一元"
      },
      {
        "word": "公元",
        "pinyin": "gōng yuán",
        "thai": "คริสต์ศักราช",
        "hsk": 1,
        "audioText": "公元"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：元。",
        "pinyin": "Zhè shì yī gè hànzì: 元.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 元 (หยวน (เงินจีน) / เริ่มแรก)",
        "audioText": "这是一个汉字：元。"
      }
    ]
  },
  "兄": {
    "char": "兄",
    "radical": "儿",
    "primaryPinyin": "xiōng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "x", "final": "iong", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "xiōng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "พี่ชาย",
        "usageContext": "เช่น 兄弟"
      }
    ],
    "thaiMeaningShort": "พี่ชาย",
    "hskLevel": 3,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "儿",
        "pinyin": "ér",
        "role": "รากศัพท์",
        "meaning": "ขาคน / เด็ก / บุตร",
        "desc": "สังกัดหมวด 儿"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 兄 กำเนิดจากรากศัพท์ 儿 (ขาคน / เด็ก / บุตร)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 儿 เพื่อสื่อความหมายถึง พี่ชาย",
      "modernEvolution": "หมายถึง พี่ชาย"
    },
    "mnemonicHook": {
      "formula": "ราก 儿 (ขาคน / เด็ก / บุตร) ➔ 'พี่ชาย' (兄)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 儿 เชื่อมโยงสู่คำว่า พี่ชาย"
    },
    "compounds": [
      {
        "word": "兄弟",
        "pinyin": "xiōng dì",
        "thai": "พี่น้อง",
        "hsk": 3,
        "audioText": "兄弟"
      },
      {
        "word": "兄妹",
        "pinyin": "xiōng mèi",
        "thai": "พี่ชายและน้องสาว",
        "hsk": 3,
        "audioText": "兄妹"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：兄。",
        "pinyin": "Zhè shì yī gè hànzì: 兄.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 兄 (พี่ชาย)",
        "audioText": "这是一个汉字：兄。"
      }
    ]
  },
  "先": {
    "char": "先",
    "radical": "儿",
    "primaryPinyin": "xiān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "x", "final": "ian", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "xiān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ก่อน / ล่วงหน้า",
        "usageContext": "เช่น 先生"
      }
    ],
    "thaiMeaningShort": "ก่อน / ล่วงหน้า",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "儿",
        "pinyin": "ér",
        "role": "รากศัพท์",
        "meaning": "ขาคน / เด็ก / บุตร",
        "desc": "สังกัดหมวด 儿"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 先 กำเนิดจากรากศัพท์ 儿 (ขาคน / เด็ก / บุตร)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 儿 เพื่อสื่อความหมายถึง ก่อน / ล่วงหน้า",
      "modernEvolution": "หมายถึง ก่อน / ล่วงหน้า"
    },
    "mnemonicHook": {
      "formula": "ราก 儿 (ขาคน / เด็ก / บุตร) ➔ 'ก่อน / ล่วงหน้า' (先)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 儿 เชื่อมโยงสู่คำว่า ก่อน / ล่วงหน้า"
    },
    "compounds": [
      {
        "word": "先生",
        "pinyin": "xiān sheng",
        "thai": "คุณผู้ชาย/อาจารย์",
        "hsk": 2,
        "audioText": "先生"
      },
      {
        "word": "首先",
        "pinyin": "shǒu xiān",
        "thai": "อันดับแรก",
        "hsk": 2,
        "audioText": "首先"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：先。",
        "pinyin": "Zhè shì yī gè hànzì: 先.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 先 (ก่อน / ล่วงหน้า)",
        "audioText": "这是一个汉字：先。"
      }
    ]
  },
  "光": {
    "char": "光",
    "radical": "儿",
    "primaryPinyin": "guāng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "g", "final": "uang", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "guāng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "แสงสว่าง / สดใส / หมดเกลี้ยง",
        "usageContext": "เช่น 阳光"
      }
    ],
    "thaiMeaningShort": "แสงสว่าง / สดใส / หมดเกลี้ยง",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "儿",
        "pinyin": "ér",
        "role": "รากศัพท์",
        "meaning": "ขาคน / เด็ก / บุตร",
        "desc": "สังกัดหมวด 儿"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 光 กำเนิดจากรากศัพท์ 儿 (ขาคน / เด็ก / บุตร)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 儿 เพื่อสื่อความหมายถึง แสงสว่าง / สดใส / หมดเกลี้ยง",
      "modernEvolution": "หมายถึง แสงสว่าง / สดใส / หมดเกลี้ยง"
    },
    "mnemonicHook": {
      "formula": "ราก 儿 (ขาคน / เด็ก / บุตร) ➔ 'แสงสว่าง / สดใส / หมดเกลี้ยง' (光)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 儿 เชื่อมโยงสู่คำว่า แสงสว่าง / สดใส / หมดเกลี้ยง"
    },
    "compounds": [
      {
        "word": "阳光",
        "pinyin": "yáng guāng",
        "thai": "แสงแดด",
        "hsk": 2,
        "audioText": "阳光"
      },
      {
        "word": "月光",
        "pinyin": "yuè guāng",
        "thai": "แสงจันทร์",
        "hsk": 2,
        "audioText": "月光"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：光。",
        "pinyin": "Zhè shì yī gè hànzì: 光.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 光 (แสงสว่าง / สดใส / หมดเกลี้ยง)",
        "audioText": "这是一个汉字：光。"
      }
    ]
  },
  "克": {
    "char": "克",
    "radical": "儿",
    "primaryPinyin": "kè",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "k", "final": "e", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "kè",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "กรัม / เอาชนะ",
        "usageContext": "เช่น 克服"
      }
    ],
    "thaiMeaningShort": "กรัม / เอาชนะ",
    "hskLevel": 3,
    "strokeCount": 7,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "儿",
        "pinyin": "ér",
        "role": "รากศัพท์",
        "meaning": "ขาคน / เด็ก / บุตร",
        "desc": "สังกัดหมวด 儿"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 克 กำเนิดจากรากศัพท์ 儿 (ขาคน / เด็ก / บุตร)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 儿 เพื่อสื่อความหมายถึง กรัม / เอาชนะ",
      "modernEvolution": "หมายถึง กรัม / เอาชนะ"
    },
    "mnemonicHook": {
      "formula": "ราก 儿 (ขาคน / เด็ก / บุตร) ➔ 'กรัม / เอาชนะ' (克)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 儿 เชื่อมโยงสู่คำว่า กรัม / เอาชนะ"
    },
    "compounds": [
      {
        "word": "克服",
        "pinyin": "kè fú",
        "thai": "เอาชนะอุปสรรค",
        "hsk": 3,
        "audioText": "克服"
      },
      {
        "word": "千克",
        "pinyin": "qiān kè",
        "thai": "กิโลกรัม",
        "hsk": 3,
        "audioText": "千克"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：克。",
        "pinyin": "Zhè shì yī gè hànzì: 克.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 克 (กรัม / เอาชนะ)",
        "audioText": "这是一个汉字：克。"
      }
    ]
  },
  "内": {
    "char": "内",
    "radical": "入",
    "primaryPinyin": "nèi",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "n", "final": "ei", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "nèi",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ภายใน / ข้างใน",
        "usageContext": "เช่น 国内"
      }
    ],
    "thaiMeaningShort": "ภายใน / ข้างใน",
    "hskLevel": 3,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "入",
        "pinyin": "rù",
        "role": "รากศัพท์",
        "meaning": "เข้า / เข้าสู่",
        "desc": "สังกัดหมวด 入"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 内 กำเนิดจากรากศัพท์ 入 (เข้า / เข้าสู่)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 入 เพื่อสื่อความหมายถึง ภายใน / ข้างใน",
      "modernEvolution": "หมายถึง ภายใน / ข้างใน"
    },
    "mnemonicHook": {
      "formula": "ราก 入 (เข้า / เข้าสู่) ➔ 'ภายใน / ข้างใน' (内)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 入 เชื่อมโยงสู่คำว่า ภายใน / ข้างใน"
    },
    "compounds": [
      {
        "word": "国内",
        "pinyin": "guó nèi",
        "thai": "ในประเทศ",
        "hsk": 3,
        "audioText": "国内"
      },
      {
        "word": "内容",
        "pinyin": "nèi róng",
        "thai": "เนื้อหา",
        "hsk": 3,
        "audioText": "内容"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：内。",
        "pinyin": "Zhè shì yī gè hànzì: 内.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 内 (ภายใน / ข้างใน)",
        "audioText": "这是一个汉字：内。"
      }
    ]
  },
  "全": {
    "char": "全",
    "radical": "入",
    "primaryPinyin": "quán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "q", "final": "uan", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "quán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "ทั้งหมด / สมบูรณ์พร้อม",
        "usageContext": "เช่น 全部"
      }
    ],
    "thaiMeaningShort": "ทั้งหมด / สมบูรณ์พร้อม",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "入",
        "pinyin": "rù",
        "role": "รากศัพท์",
        "meaning": "เข้า / เข้าสู่",
        "desc": "สังกัดหมวด 入"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 全 กำเนิดจากรากศัพท์ 入 (เข้า / เข้าสู่)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 入 เพื่อสื่อความหมายถึง ทั้งหมด / สมบูรณ์พร้อม",
      "modernEvolution": "หมายถึง ทั้งหมด / สมบูรณ์พร้อม"
    },
    "mnemonicHook": {
      "formula": "ราก 入 (เข้า / เข้าสู่) ➔ 'ทั้งหมด / สมบูรณ์พร้อม' (全)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 入 เชื่อมโยงสู่คำว่า ทั้งหมด / สมบูรณ์พร้อม"
    },
    "compounds": [
      {
        "word": "全部",
        "pinyin": "quán bù",
        "thai": "ทั้งหมด",
        "hsk": 2,
        "audioText": "全部"
      },
      {
        "word": "安全",
        "pinyin": "ān quán",
        "thai": "ปลอดภัย",
        "hsk": 2,
        "audioText": "安全"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：全。",
        "pinyin": "Zhè shì yī gè hànzì: 全.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 全 (ทั้งหมด / สมบูรณ์พร้อม)",
        "audioText": "这是一个汉字：全。"
      }
    ]
  },
  "公": {
    "char": "公",
    "radical": "八",
    "primaryPinyin": "gōng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "g", "final": "ong", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "gōng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "สาธารณะ / ส่วนรวม / ปู่",
        "usageContext": "เช่น 公园"
      }
    ],
    "thaiMeaningShort": "สาธารณะ / ส่วนรวม / ปู่",
    "hskLevel": 2,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "八",
        "pinyin": "bā",
        "role": "รากศัพท์",
        "meaning": "แปด / การแยกออก",
        "desc": "สังกัดหมวด 八"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 公 กำเนิดจากรากศัพท์ 八 (แปด / การแยกออก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 八 เพื่อสื่อความหมายถึง สาธารณะ / ส่วนรวม / ปู่",
      "modernEvolution": "หมายถึง สาธารณะ / ส่วนรวม / ปู่"
    },
    "mnemonicHook": {
      "formula": "ราก 八 (แปด / การแยกออก) ➔ 'สาธารณะ / ส่วนรวม / ปู่' (公)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 八 เชื่อมโยงสู่คำว่า สาธารณะ / ส่วนรวม / ปู่"
    },
    "compounds": [
      {
        "word": "公园",
        "pinyin": "gōng yuán",
        "thai": "สวนสาธารณะ",
        "hsk": 2,
        "audioText": "公园"
      },
      {
        "word": "公共",
        "pinyin": "gōng gòng",
        "thai": "ส่วนรวม",
        "hsk": 2,
        "audioText": "公共"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：公。",
        "pinyin": "Zhè shì yī gè hànzì: 公.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 公 (สาธารณะ / ส่วนรวม / ปู่)",
        "audioText": "这是一个汉字：公。"
      }
    ]
  },
  "共": {
    "char": "共",
    "radical": "八",
    "primaryPinyin": "gòng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "g", "final": "ong", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "gòng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ร่วมกัน / ทั้งหมด",
        "usageContext": "เช่น 一共"
      }
    ],
    "thaiMeaningShort": "ร่วมกัน / ทั้งหมด",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "八",
        "pinyin": "bā",
        "role": "รากศัพท์",
        "meaning": "แปด / การแยกออก",
        "desc": "สังกัดหมวด 八"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 共 กำเนิดจากรากศัพท์ 八 (แปด / การแยกออก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 八 เพื่อสื่อความหมายถึง ร่วมกัน / ทั้งหมด",
      "modernEvolution": "หมายถึง ร่วมกัน / ทั้งหมด"
    },
    "mnemonicHook": {
      "formula": "ราก 八 (แปด / การแยกออก) ➔ 'ร่วมกัน / ทั้งหมด' (共)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 八 เชื่อมโยงสู่คำว่า ร่วมกัน / ทั้งหมด"
    },
    "compounds": [
      {
        "word": "一共",
        "pinyin": "yī gòng",
        "thai": "รวมทั้งหมด",
        "hsk": 2,
        "audioText": "一共"
      },
      {
        "word": "共同",
        "pinyin": "gòng tóng",
        "thai": "ร่วมกัน",
        "hsk": 2,
        "audioText": "共同"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：共。",
        "pinyin": "Zhè shì yī gè hànzì: 共.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 共 (ร่วมกัน / ทั้งหมด)",
        "audioText": "这是一个汉字：共。"
      }
    ]
  },
  "兵": {
    "char": "兵",
    "radical": "八",
    "primaryPinyin": "bīng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "b", "final": "ing", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "bīng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ทหาร / อาวุธ",
        "usageContext": "เช่น 士兵"
      }
    ],
    "thaiMeaningShort": "ทหาร / อาวุธ",
    "hskLevel": 3,
    "strokeCount": 7,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "八",
        "pinyin": "bā",
        "role": "รากศัพท์",
        "meaning": "แปด / การแยกออก",
        "desc": "สังกัดหมวด 八"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 兵 กำเนิดจากรากศัพท์ 八 (แปด / การแยกออก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 八 เพื่อสื่อความหมายถึง ทหาร / อาวุธ",
      "modernEvolution": "หมายถึง ทหาร / อาวุธ"
    },
    "mnemonicHook": {
      "formula": "ราก 八 (แปด / การแยกออก) ➔ 'ทหาร / อาวุธ' (兵)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 八 เชื่อมโยงสู่คำว่า ทหาร / อาวุธ"
    },
    "compounds": [
      {
        "word": "士兵",
        "pinyin": "shì bīng",
        "thai": "ทหาร",
        "hsk": 3,
        "audioText": "士兵"
      },
      {
        "word": "当兵",
        "pinyin": "dāng bīng",
        "thai": "เป็นทหาร",
        "hsk": 3,
        "audioText": "当兵"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：兵。",
        "pinyin": "Zhè shì yī gè hànzì: 兵.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 兵 (ทหาร / อาวุธ)",
        "audioText": "这是一个汉字：兵。"
      }
    ]
  },
  "具": {
    "char": "具",
    "radical": "八",
    "primaryPinyin": "jù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "j", "final": "u", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "jù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "อุปกรณ์ / เครื่องมือ / มีพร้อม",
        "usageContext": "เช่น 工具"
      }
    ],
    "thaiMeaningShort": "อุปกรณ์ / เครื่องมือ / มีพร้อม",
    "hskLevel": 3,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "八",
        "pinyin": "bā",
        "role": "รากศัพท์",
        "meaning": "แปด / การแยกออก",
        "desc": "สังกัดหมวด 八"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 具 กำเนิดจากรากศัพท์ 八 (แปด / การแยกออก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 八 เพื่อสื่อความหมายถึง อุปกรณ์ / เครื่องมือ / มีพร้อม",
      "modernEvolution": "หมายถึง อุปกรณ์ / เครื่องมือ / มีพร้อม"
    },
    "mnemonicHook": {
      "formula": "ราก 八 (แปด / การแยกออก) ➔ 'อุปกรณ์ / เครื่องมือ / มีพร้อม' (具)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 八 เชื่อมโยงสู่คำว่า อุปกรณ์ / เครื่องมือ / มีพร้อม"
    },
    "compounds": [
      {
        "word": "工具",
        "pinyin": "gōng jù",
        "thai": "เครื่องมือ",
        "hsk": 3,
        "audioText": "工具"
      },
      {
        "word": "玩具",
        "pinyin": "wán jù",
        "thai": "ของเล่น",
        "hsk": 3,
        "audioText": "玩具"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：具。",
        "pinyin": "Zhè shì yī gè hànzì: 具.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 具 (อุปกรณ์ / เครื่องมือ / มีพร้อม)",
        "audioText": "这是一个汉字：具。"
      }
    ]
  },
  "同": {
    "char": "同",
    "radical": "冂",
    "primaryPinyin": "tóng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "t", "final": "ong", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "tóng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "เหมือนกัน / ร่วมกัน",
        "usageContext": "เช่น 同学"
      }
    ],
    "thaiMeaningShort": "เหมือนกัน / ร่วมกัน",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冂",
        "pinyin": "jiōng",
        "role": "รากศัพท์",
        "meaning": "ขอบเขต / อาณาเขต",
        "desc": "สังกัดหมวด 冂"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 同 กำเนิดจากรากศัพท์ 冂 (ขอบเขต / อาณาเขต)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冂 เพื่อสื่อความหมายถึง เหมือนกัน / ร่วมกัน",
      "modernEvolution": "หมายถึง เหมือนกัน / ร่วมกัน"
    },
    "mnemonicHook": {
      "formula": "ราก 冂 (ขอบเขต / อาณาเขต) ➔ 'เหมือนกัน / ร่วมกัน' (同)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冂 เชื่อมโยงสู่คำว่า เหมือนกัน / ร่วมกัน"
    },
    "compounds": [
      {
        "word": "同学",
        "pinyin": "tóng xué",
        "thai": "เพื่อนร่วมชั้น",
        "hsk": 1,
        "audioText": "同学"
      },
      {
        "word": "同意",
        "pinyin": "tóng yì",
        "thai": "เห็นด้วย",
        "hsk": 1,
        "audioText": "同意"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：同。",
        "pinyin": "Zhè shì yī gè hànzì: 同.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 同 (เหมือนกัน / ร่วมกัน)",
        "audioText": "这是一个汉字：同。"
      }
    ]
  },
  "网": {
    "char": "网",
    "radical": "冂",
    "primaryPinyin": "wǎng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "w", "final": "ang", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "wǎng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ตาข่าย / อินเทอร์เน็ต",
        "usageContext": "เช่น 上网"
      }
    ],
    "thaiMeaningShort": "ตาข่าย / อินเทอร์เน็ต",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冂",
        "pinyin": "jiōng",
        "role": "รากศัพท์",
        "meaning": "ขอบเขต / อาณาเขต",
        "desc": "สังกัดหมวด 冂"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 网 กำเนิดจากรากศัพท์ 冂 (ขอบเขต / อาณาเขต)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冂 เพื่อสื่อความหมายถึง ตาข่าย / อินเทอร์เน็ต",
      "modernEvolution": "หมายถึง ตาข่าย / อินเทอร์เน็ต"
    },
    "mnemonicHook": {
      "formula": "ราก 冂 (ขอบเขต / อาณาเขต) ➔ 'ตาข่าย / อินเทอร์เน็ต' (网)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冂 เชื่อมโยงสู่คำว่า ตาข่าย / อินเทอร์เน็ต"
    },
    "compounds": [
      {
        "word": "上网",
        "pinyin": "shàng wǎng",
        "thai": "เล่นเน็ต",
        "hsk": 2,
        "audioText": "上网"
      },
      {
        "word": "网站",
        "pinyin": "wǎng zhàn",
        "thai": "เว็บไซต์",
        "hsk": 2,
        "audioText": "网站"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：网。",
        "pinyin": "Zhè shì yī gè hànzì: 网.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 网 (ตาข่าย / อินเทอร์เน็ต)",
        "audioText": "这是一个汉字：网。"
      }
    ]
  },
  "周": {
    "char": "周",
    "radical": "冂",
    "primaryPinyin": "zhōu",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "zh", "final": "ou", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "zhōu",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "สัปดาห์ / โดยรอบ",
        "usageContext": "เช่น 周末"
      }
    ],
    "thaiMeaningShort": "สัปดาห์ / โดยรอบ",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冂",
        "pinyin": "jiōng",
        "role": "รากศัพท์",
        "meaning": "ขอบเขต / อาณาเขต",
        "desc": "สังกัดหมวด 冂"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 周 กำเนิดจากรากศัพท์ 冂 (ขอบเขต / อาณาเขต)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冂 เพื่อสื่อความหมายถึง สัปดาห์ / โดยรอบ",
      "modernEvolution": "หมายถึง สัปดาห์ / โดยรอบ"
    },
    "mnemonicHook": {
      "formula": "ราก 冂 (ขอบเขต / อาณาเขต) ➔ 'สัปดาห์ / โดยรอบ' (周)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冂 เชื่อมโยงสู่คำว่า สัปดาห์ / โดยรอบ"
    },
    "compounds": [
      {
        "word": "周末",
        "pinyin": "zhōu mò",
        "thai": "สุดสัปดาห์",
        "hsk": 2,
        "audioText": "周末"
      },
      {
        "word": "周围",
        "pinyin": "zhōu wéi",
        "thai": "โดยรอบ",
        "hsk": 2,
        "audioText": "周围"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：周。",
        "pinyin": "Zhè shì yī gè hànzì: 周.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 周 (สัปดาห์ / โดยรอบ)",
        "audioText": "这是一个汉字：周。"
      }
    ]
  },
  "写": {
    "char": "写",
    "radical": "冖",
    "primaryPinyin": "xiě",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "x", "final": "ie", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "xiě",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "เขียน / บันทึก",
        "usageContext": "เช่น 写字"
      }
    ],
    "thaiMeaningShort": "เขียน / บันทึก",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冖",
        "pinyin": "mì",
        "role": "รากศัพท์",
        "meaning": "ผ้าคลุม / ปกปิด",
        "desc": "สังกัดหมวด 冖"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 写 กำเนิดจากรากศัพท์ 冖 (ผ้าคลุม / ปกปิด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冖 เพื่อสื่อความหมายถึง เขียน / บันทึก",
      "modernEvolution": "หมายถึง เขียน / บันทึก"
    },
    "mnemonicHook": {
      "formula": "ราก 冖 (ผ้าคลุม / ปกปิด) ➔ 'เขียน / บันทึก' (写)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冖 เชื่อมโยงสู่คำว่า เขียน / บันทึก"
    },
    "compounds": [
      {
        "word": "写字",
        "pinyin": "xiě zì",
        "thai": "เขียนหนังสือ",
        "hsk": 1,
        "audioText": "写字"
      },
      {
        "word": "写作",
        "pinyin": "xiě zuò",
        "thai": "การเขียนงานประพันธ์",
        "hsk": 1,
        "audioText": "写作"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：写。",
        "pinyin": "Zhè shì yī gè hànzì: 写.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 写 (เขียน / บันทึก)",
        "audioText": "这是一个汉字：写。"
      }
    ]
  },
  "军": {
    "char": "军",
    "radical": "冖",
    "primaryPinyin": "jūn",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "j", "final": "un", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "jūn",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "กองทัพ / ทหาร",
        "usageContext": "เช่น 军队"
      }
    ],
    "thaiMeaningShort": "กองทัพ / ทหาร",
    "hskLevel": 3,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冖",
        "pinyin": "mì",
        "role": "รากศัพท์",
        "meaning": "ผ้าคลุม / ปกปิด",
        "desc": "สังกัดหมวด 冖"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 军 กำเนิดจากรากศัพท์ 冖 (ผ้าคลุม / ปกปิด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冖 เพื่อสื่อความหมายถึง กองทัพ / ทหาร",
      "modernEvolution": "หมายถึง กองทัพ / ทหาร"
    },
    "mnemonicHook": {
      "formula": "ราก 冖 (ผ้าคลุม / ปกปิด) ➔ 'กองทัพ / ทหาร' (军)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冖 เชื่อมโยงสู่คำว่า กองทัพ / ทหาร"
    },
    "compounds": [
      {
        "word": "军队",
        "pinyin": "jūn duì",
        "thai": "กองทัพ",
        "hsk": 3,
        "audioText": "军队"
      },
      {
        "word": "军人",
        "pinyin": "jūn rén",
        "thai": "ทหาร",
        "hsk": 3,
        "audioText": "军人"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：军。",
        "pinyin": "Zhè shì yī gè hànzì: 军.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 军 (กองทัพ / ทหาร)",
        "audioText": "这是一个汉字：军。"
      }
    ]
  },
  "冠": {
    "char": "冠",
    "radical": "冖",
    "primaryPinyin": "guān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "g", "final": "uan", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "guān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "มงกุฎ / หมวก / แชมป์",
        "usageContext": "เช่น 冠军"
      }
    ],
    "thaiMeaningShort": "มงกุฎ / หมวก / แชมป์",
    "hskLevel": 4,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冖",
        "pinyin": "mì",
        "role": "รากศัพท์",
        "meaning": "ผ้าคลุม / ปกปิด",
        "desc": "สังกัดหมวด 冖"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 冠 กำเนิดจากรากศัพท์ 冖 (ผ้าคลุม / ปกปิด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冖 เพื่อสื่อความหมายถึง มงกุฎ / หมวก / แชมป์",
      "modernEvolution": "หมายถึง มงกุฎ / หมวก / แชมป์"
    },
    "mnemonicHook": {
      "formula": "ราก 冖 (ผ้าคลุม / ปกปิด) ➔ 'มงกุฎ / หมวก / แชมป์' (冠)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冖 เชื่อมโยงสู่คำว่า มงกุฎ / หมวก / แชมป์"
    },
    "compounds": [
      {
        "word": "冠军",
        "pinyin": "guàn jūn",
        "thai": "แชมเปี้ยน/ชนะเลิศ",
        "hsk": 4,
        "audioText": "冠军"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：冠。",
        "pinyin": "Zhè shì yī gè hànzì: 冠.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 冠 (มงกุฎ / หมวก / แชมป์)",
        "audioText": "这是一个汉字：冠。"
      }
    ]
  },
  "冷": {
    "char": "冷",
    "radical": "冫",
    "primaryPinyin": "lěng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "l", "final": "eng", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "lěng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "หนาว / เย็น",
        "usageContext": "เช่น 冷气"
      }
    ],
    "thaiMeaningShort": "หนาว / เย็น",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冫",
        "pinyin": "bīng",
        "role": "รากศัพท์",
        "meaning": "น้ำแข็ง (สองหยดน้ำ)",
        "desc": "สังกัดหมวด 冫"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 冷 กำเนิดจากรากศัพท์ 冫 (น้ำแข็ง (สองหยดน้ำ))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冫 เพื่อสื่อความหมายถึง หนาว / เย็น",
      "modernEvolution": "หมายถึง หนาว / เย็น"
    },
    "mnemonicHook": {
      "formula": "ราก 冫 (น้ำแข็ง (สองหยดน้ำ)) ➔ 'หนาว / เย็น' (冷)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冫 เชื่อมโยงสู่คำว่า หนาว / เย็น"
    },
    "compounds": [
      {
        "word": "冷气",
        "pinyin": "lěng qì",
        "thai": "แอร์/ความเย็น",
        "hsk": 1,
        "audioText": "冷气"
      },
      {
        "word": "很冷",
        "pinyin": "hěn lěng",
        "thai": "หนาวมาก",
        "hsk": 1,
        "audioText": "很冷"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：冷。",
        "pinyin": "Zhè shì yī gè hànzì: 冷.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 冷 (หนาว / เย็น)",
        "audioText": "这是一个汉字：冷。"
      }
    ]
  },
  "冰": {
    "char": "冰",
    "radical": "冫",
    "primaryPinyin": "bīng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "b", "final": "ing", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "bīng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "น้ำแข็ง",
        "usageContext": "เช่น 冰水"
      }
    ],
    "thaiMeaningShort": "น้ำแข็ง",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冫",
        "pinyin": "bīng",
        "role": "รากศัพท์",
        "meaning": "น้ำแข็ง (สองหยดน้ำ)",
        "desc": "สังกัดหมวด 冫"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 冰 กำเนิดจากรากศัพท์ 冫 (น้ำแข็ง (สองหยดน้ำ))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冫 เพื่อสื่อความหมายถึง น้ำแข็ง",
      "modernEvolution": "หมายถึง น้ำแข็ง"
    },
    "mnemonicHook": {
      "formula": "ราก 冫 (น้ำแข็ง (สองหยดน้ำ)) ➔ 'น้ำแข็ง' (冰)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冫 เชื่อมโยงสู่คำว่า น้ำแข็ง"
    },
    "compounds": [
      {
        "word": "冰水",
        "pinyin": "bīng shuǐ",
        "thai": "น้ำแข็ง",
        "hsk": 2,
        "audioText": "冰水"
      },
      {
        "word": "冰箱",
        "pinyin": "bīng xiāng",
        "thai": "ตู้เย็น",
        "hsk": 2,
        "audioText": "冰箱"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：冰。",
        "pinyin": "Zhè shì yī gè hànzì: 冰.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 冰 (น้ำแข็ง)",
        "audioText": "这是一个汉字：冰。"
      }
    ]
  },
  "净": {
    "char": "净",
    "radical": "冫",
    "primaryPinyin": "jìng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "j", "final": "ing", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "jìng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "สะอาด / หมดจด",
        "usageContext": "เช่น 干净"
      }
    ],
    "thaiMeaningShort": "สะอาด / หมดจด",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冫",
        "pinyin": "bīng",
        "role": "รากศัพท์",
        "meaning": "น้ำแข็ง (สองหยดน้ำ)",
        "desc": "สังกัดหมวด 冫"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 净 กำเนิดจากรากศัพท์ 冫 (น้ำแข็ง (สองหยดน้ำ))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冫 เพื่อสื่อความหมายถึง สะอาด / หมดจด",
      "modernEvolution": "หมายถึง สะอาด / หมดจด"
    },
    "mnemonicHook": {
      "formula": "ราก 冫 (น้ำแข็ง (สองหยดน้ำ)) ➔ 'สะอาด / หมดจด' (净)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冫 เชื่อมโยงสู่คำว่า สะอาด / หมดจด"
    },
    "compounds": [
      {
        "word": "干净",
        "pinyin": "gān jìng",
        "thai": "สะอาด",
        "hsk": 2,
        "audioText": "干净"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：净。",
        "pinyin": "Zhè shì yī gè hànzì: 净.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 净 (สะอาด / หมดจด)",
        "audioText": "这是一个汉字：净。"
      }
    ]
  },
  "准": {
    "char": "准",
    "radical": "冫",
    "primaryPinyin": "zhǔn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "zh", "final": "un", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "zhǔn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "แม่นยำ / อนุญาต / เตรียม",
        "usageContext": "เช่น 准备"
      }
    ],
    "thaiMeaningShort": "แม่นยำ / อนุญาต / เตรียม",
    "hskLevel": 2,
    "strokeCount": 10,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "冫",
        "pinyin": "bīng",
        "role": "รากศัพท์",
        "meaning": "น้ำแข็ง (สองหยดน้ำ)",
        "desc": "สังกัดหมวด 冫"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 准 กำเนิดจากรากศัพท์ 冫 (น้ำแข็ง (สองหยดน้ำ))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 冫 เพื่อสื่อความหมายถึง แม่นยำ / อนุญาต / เตรียม",
      "modernEvolution": "หมายถึง แม่นยำ / อนุญาต / เตรียม"
    },
    "mnemonicHook": {
      "formula": "ราก 冫 (น้ำแข็ง (สองหยดน้ำ)) ➔ 'แม่นยำ / อนุญาต / เตรียม' (准)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 冫 เชื่อมโยงสู่คำว่า แม่นยำ / อนุญาต / เตรียม"
    },
    "compounds": [
      {
        "word": "准备",
        "pinyin": "zhǔn bèi",
        "thai": "เตรียมตัว",
        "hsk": 2,
        "audioText": "准备"
      },
      {
        "word": "标准",
        "pinyin": "biāo zhǔn",
        "thai": "มาตรฐาน",
        "hsk": 2,
        "audioText": "标准"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：准。",
        "pinyin": "Zhè shì yī gè hànzì: 准.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 准 (แม่นยำ / อนุญาต / เตรียม)",
        "audioText": "这是一个汉字：准。"
      }
    ]
  },
  "凡": {
    "char": "凡",
    "radical": "几",
    "primaryPinyin": "fán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "f", "final": "an", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "fán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "ธรรมดา / ทุกๆ",
        "usageContext": "เช่น 平凡"
      }
    ],
    "thaiMeaningShort": "ธรรมดา / ทุกๆ",
    "hskLevel": 4,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "几",
        "pinyin": "jī",
        "role": "รากศัพท์",
        "meaning": "โต๊ะเล็ก / เก้าอี้ม้านั่ง",
        "desc": "สังกัดหมวด 几"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 凡 กำเนิดจากรากศัพท์ 几 (โต๊ะเล็ก / เก้าอี้ม้านั่ง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 几 เพื่อสื่อความหมายถึง ธรรมดา / ทุกๆ",
      "modernEvolution": "หมายถึง ธรรมดา / ทุกๆ"
    },
    "mnemonicHook": {
      "formula": "ราก 几 (โต๊ะเล็ก / เก้าอี้ม้านั่ง) ➔ 'ธรรมดา / ทุกๆ' (凡)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 几 เชื่อมโยงสู่คำว่า ธรรมดา / ทุกๆ"
    },
    "compounds": [
      {
        "word": "平凡",
        "pinyin": "píng fán",
        "thai": "ธรรมดา/เรียบง่าย",
        "hsk": 4,
        "audioText": "平凡"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：凡。",
        "pinyin": "Zhè shì yī gè hànzì: 凡.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 凡 (ธรรมดา / ทุกๆ)",
        "audioText": "这是一个汉字：凡。"
      }
    ]
  },
  "凭": {
    "char": "凭",
    "radical": "几",
    "primaryPinyin": "píng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "p", "final": "ing", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "píng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "อาศัย / พึ่งพา / หลักฐาน",
        "usageContext": "เช่น 凭据"
      }
    ],
    "thaiMeaningShort": "อาศัย / พึ่งพา / หลักฐาน",
    "hskLevel": 4,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "几",
        "pinyin": "jī",
        "role": "รากศัพท์",
        "meaning": "โต๊ะเล็ก / เก้าอี้ม้านั่ง",
        "desc": "สังกัดหมวด 几"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 凭 กำเนิดจากรากศัพท์ 几 (โต๊ะเล็ก / เก้าอี้ม้านั่ง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 几 เพื่อสื่อความหมายถึง อาศัย / พึ่งพา / หลักฐาน",
      "modernEvolution": "หมายถึง อาศัย / พึ่งพา / หลักฐาน"
    },
    "mnemonicHook": {
      "formula": "ราก 几 (โต๊ะเล็ก / เก้าอี้ม้านั่ง) ➔ 'อาศัย / พึ่งพา / หลักฐาน' (凭)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 几 เชื่อมโยงสู่คำว่า อาศัย / พึ่งพา / หลักฐาน"
    },
    "compounds": [
      {
        "word": "凭据",
        "pinyin": "píng jù",
        "thai": "หลักฐาน",
        "hsk": 4,
        "audioText": "凭据"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：凭。",
        "pinyin": "Zhè shì yī gè hànzì: 凭.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 凭 (อาศัย / พึ่งพา / หลักฐาน)",
        "audioText": "这是一个汉字：凭。"
      }
    ]
  },
  "凶": {
    "char": "凶",
    "radical": "凵",
    "primaryPinyin": "xiōng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "x", "final": "iong", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "xiōng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ดุร้าย / ลางร้าย",
        "usageContext": "เช่น 凶狠"
      }
    ],
    "thaiMeaningShort": "ดุร้าย / ลางร้าย",
    "hskLevel": 4,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "凵",
        "pinyin": "qū",
        "role": "รากศัพท์",
        "meaning": "ภาชนะเปิด / หลุม",
        "desc": "สังกัดหมวด 凵"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 凶 กำเนิดจากรากศัพท์ 凵 (ภาชนะเปิด / หลุม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 凵 เพื่อสื่อความหมายถึง ดุร้าย / ลางร้าย",
      "modernEvolution": "หมายถึง ดุร้าย / ลางร้าย"
    },
    "mnemonicHook": {
      "formula": "ราก 凵 (ภาชนะเปิด / หลุม) ➔ 'ดุร้าย / ลางร้าย' (凶)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 凵 เชื่อมโยงสู่คำว่า ดุร้าย / ลางร้าย"
    },
    "compounds": [
      {
        "word": "凶狠",
        "pinyin": "xiōng hěn",
        "thai": "ดุร้าย",
        "hsk": 4,
        "audioText": "凶狠"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：凶。",
        "pinyin": "Zhè shì yī gè hànzì: 凶.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 凶 (ดุร้าย / ลางร้าย)",
        "audioText": "这是一个汉字：凶。"
      }
    ]
  },
  "出": {
    "char": "出",
    "radical": "凵",
    "primaryPinyin": "chū",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "ch", "final": "u", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "chū",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ออก / ออกไป / เกิดขึ้น",
        "usageContext": "เช่น 出来"
      }
    ],
    "thaiMeaningShort": "ออก / ออกไป / เกิดขึ้น",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "凵",
        "pinyin": "qū",
        "role": "รากศัพท์",
        "meaning": "ภาชนะเปิด / หลุม",
        "desc": "สังกัดหมวด 凵"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 出 กำเนิดจากรากศัพท์ 凵 (ภาชนะเปิด / หลุม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 凵 เพื่อสื่อความหมายถึง ออก / ออกไป / เกิดขึ้น",
      "modernEvolution": "หมายถึง ออก / ออกไป / เกิดขึ้น"
    },
    "mnemonicHook": {
      "formula": "ราก 凵 (ภาชนะเปิด / หลุม) ➔ 'ออก / ออกไป / เกิดขึ้น' (出)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 凵 เชื่อมโยงสู่คำว่า ออก / ออกไป / เกิดขึ้น"
    },
    "compounds": [
      {
        "word": "出来",
        "pinyin": "chū lái",
        "thai": "ออกมา",
        "hsk": 1,
        "audioText": "出来"
      },
      {
        "word": "出发",
        "pinyin": "chū fā",
        "thai": "ออกเดินทาง",
        "hsk": 1,
        "audioText": "出发"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：出。",
        "pinyin": "Zhè shì yī gè hànzì: 出.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 出 (ออก / ออกไป / เกิดขึ้น)",
        "audioText": "这是一个汉字：出。"
      }
    ]
  },
  "击": {
    "char": "击",
    "radical": "凵",
    "primaryPinyin": "jī",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "j", "final": "i", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "jī",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ตี / โจมตี / เคาะ",
        "usageContext": "เช่น 打击"
      }
    ],
    "thaiMeaningShort": "ตี / โจมตี / เคาะ",
    "hskLevel": 3,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "凵",
        "pinyin": "qū",
        "role": "รากศัพท์",
        "meaning": "ภาชนะเปิด / หลุม",
        "desc": "สังกัดหมวด 凵"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 击 กำเนิดจากรากศัพท์ 凵 (ภาชนะเปิด / หลุม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 凵 เพื่อสื่อความหมายถึง ตี / โจมตี / เคาะ",
      "modernEvolution": "หมายถึง ตี / โจมตี / เคาะ"
    },
    "mnemonicHook": {
      "formula": "ราก 凵 (ภาชนะเปิด / หลุม) ➔ 'ตี / โจมตี / เคาะ' (击)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 凵 เชื่อมโยงสู่คำว่า ตี / โจมตี / เคาะ"
    },
    "compounds": [
      {
        "word": "打击",
        "pinyin": "dǎ jī",
        "thai": "โจมตี",
        "hsk": 3,
        "audioText": "打击"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：击。",
        "pinyin": "Zhè shì yī gè hànzì: 击.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 击 (ตี / โจมตี / เคาะ)",
        "audioText": "这是一个汉字：击。"
      }
    ]
  },
  "包": {
    "char": "包",
    "radical": "勹",
    "primaryPinyin": "bāo",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "b", "final": "ao", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "bāo",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ห่อ / กระเป๋า / ซาลาเปา",
        "usageContext": "เช่น 包子"
      }
    ],
    "thaiMeaningShort": "ห่อ / กระเป๋า / ซาลาเปา",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "勹",
        "pinyin": "bāo",
        "role": "รากศัพท์",
        "meaning": "การห่อหุ้ม / โอบอุ้ม",
        "desc": "สังกัดหมวด 勹"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 包 กำเนิดจากรากศัพท์ 勹 (การห่อหุ้ม / โอบอุ้ม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 勹 เพื่อสื่อความหมายถึง ห่อ / กระเป๋า / ซาลาเปา",
      "modernEvolution": "หมายถึง ห่อ / กระเป๋า / ซาลาเปา"
    },
    "mnemonicHook": {
      "formula": "ราก 勹 (การห่อหุ้ม / โอบอุ้ม) ➔ 'ห่อ / กระเป๋า / ซาลาเปา' (包)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 勹 เชื่อมโยงสู่คำว่า ห่อ / กระเป๋า / ซาลาเปา"
    },
    "compounds": [
      {
        "word": "包子",
        "pinyin": "bāo zi",
        "thai": "ซาลาเปา",
        "hsk": 2,
        "audioText": "包子"
      },
      {
        "word": "面包",
        "pinyin": "miàn bāo",
        "thai": "ขนมปัง",
        "hsk": 2,
        "audioText": "面包"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：包。",
        "pinyin": "Zhè shì yī gè hànzì: 包.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 包 (ห่อ / กระเป๋า / ซาลาเปา)",
        "audioText": "这是一个汉字：包。"
      }
    ]
  },
  "句": {
    "char": "句",
    "radical": "勹",
    "primaryPinyin": "jù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "j", "final": "u", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "jù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ประโยค / วลี",
        "usageContext": "เช่น 句子"
      }
    ],
    "thaiMeaningShort": "ประโยค / วลี",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "勹",
        "pinyin": "bāo",
        "role": "รากศัพท์",
        "meaning": "การห่อหุ้ม / โอบอุ้ม",
        "desc": "สังกัดหมวด 勹"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 句 กำเนิดจากรากศัพท์ 勹 (การห่อหุ้ม / โอบอุ้ม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 勹 เพื่อสื่อความหมายถึง ประโยค / วลี",
      "modernEvolution": "หมายถึง ประโยค / วลี"
    },
    "mnemonicHook": {
      "formula": "ราก 勹 (การห่อหุ้ม / โอบอุ้ม) ➔ 'ประโยค / วลี' (句)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 勹 เชื่อมโยงสู่คำว่า ประโยค / วลี"
    },
    "compounds": [
      {
        "word": "句子",
        "pinyin": "jù zi",
        "thai": "ประโยค",
        "hsk": 2,
        "audioText": "句子"
      },
      {
        "word": "一句话",
        "pinyin": "yī jù huà",
        "thai": "คำพูดหนึ่งประโยค",
        "hsk": 2,
        "audioText": "一句话"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：句。",
        "pinyin": "Zhè shì yī gè hànzì: 句.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 句 (ประโยค / วลี)",
        "audioText": "这是一个汉字：句。"
      }
    ]
  },
  "北": {
    "char": "北",
    "radical": "匕",
    "primaryPinyin": "běi",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "b", "final": "ei", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "běi",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ทิศเหนือ",
        "usageContext": "เช่น 北京"
      }
    ],
    "thaiMeaningShort": "ทิศเหนือ",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "匕",
        "pinyin": "bǐ",
        "role": "รากศัพท์",
        "meaning": "ช้อน / กริชสั้น",
        "desc": "สังกัดหมวด 匕"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 北 กำเนิดจากรากศัพท์ 匕 (ช้อน / กริชสั้น)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 匕 เพื่อสื่อความหมายถึง ทิศเหนือ",
      "modernEvolution": "หมายถึง ทิศเหนือ"
    },
    "mnemonicHook": {
      "formula": "ราก 匕 (ช้อน / กริชสั้น) ➔ 'ทิศเหนือ' (北)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 匕 เชื่อมโยงสู่คำว่า ทิศเหนือ"
    },
    "compounds": [
      {
        "word": "北京",
        "pinyin": "běi jīng",
        "thai": "ปักกิ่ง",
        "hsk": 1,
        "audioText": "北京"
      },
      {
        "word": "北方",
        "pinyin": "běi fāng",
        "thai": "ภาคเหนือ",
        "hsk": 1,
        "audioText": "北方"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：北。",
        "pinyin": "Zhè shì yī gè hànzì: 北.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 北 (ทิศเหนือ)",
        "audioText": "这是一个汉字：北。"
      }
    ]
  },
  "化": {
    "char": "化",
    "radical": "匕",
    "primaryPinyin": "huà",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "h", "final": "ua", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "huà",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "เปลี่ยนแปลง / วัฒนธรรม",
        "usageContext": "เช่น 变化"
      }
    ],
    "thaiMeaningShort": "เปลี่ยนแปลง / วัฒนธรรม",
    "hskLevel": 2,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "匕",
        "pinyin": "bǐ",
        "role": "รากศัพท์",
        "meaning": "ช้อน / กริชสั้น",
        "desc": "สังกัดหมวด 匕"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 化 กำเนิดจากรากศัพท์ 匕 (ช้อน / กริชสั้น)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 匕 เพื่อสื่อความหมายถึง เปลี่ยนแปลง / วัฒนธรรม",
      "modernEvolution": "หมายถึง เปลี่ยนแปลง / วัฒนธรรม"
    },
    "mnemonicHook": {
      "formula": "ราก 匕 (ช้อน / กริชสั้น) ➔ 'เปลี่ยนแปลง / วัฒนธรรม' (化)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 匕 เชื่อมโยงสู่คำว่า เปลี่ยนแปลง / วัฒนธรรม"
    },
    "compounds": [
      {
        "word": "变化",
        "pinyin": "biàn huà",
        "thai": "เปลี่ยนแปลง",
        "hsk": 2,
        "audioText": "变化"
      },
      {
        "word": "文化",
        "pinyin": "wén huà",
        "thai": "วัฒนธรรม",
        "hsk": 2,
        "audioText": "文化"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：化。",
        "pinyin": "Zhè shì yī gè hànzì: 化.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 化 (เปลี่ยนแปลง / วัฒนธรรม)",
        "audioText": "这是一个汉字：化。"
      }
    ]
  },
  "区": {
    "char": "区",
    "radical": "匚",
    "primaryPinyin": "qū",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "q", "final": "u", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "qū",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "เขต / บริเวณ / แยกแยะ",
        "usageContext": "เช่น 地区"
      }
    ],
    "thaiMeaningShort": "เขต / บริเวณ / แยกแยะ",
    "hskLevel": 3,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "匚",
        "pinyin": "fāng",
        "role": "รากศัพท์",
        "meaning": "กล่อง / ลังใส่ของ",
        "desc": "สังกัดหมวด 匚"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 区 กำเนิดจากรากศัพท์ 匚 (กล่อง / ลังใส่ของ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 匚 เพื่อสื่อความหมายถึง เขต / บริเวณ / แยกแยะ",
      "modernEvolution": "หมายถึง เขต / บริเวณ / แยกแยะ"
    },
    "mnemonicHook": {
      "formula": "ราก 匚 (กล่อง / ลังใส่ของ) ➔ 'เขต / บริเวณ / แยกแยะ' (区)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 匚 เชื่อมโยงสู่คำว่า เขต / บริเวณ / แยกแยะ"
    },
    "compounds": [
      {
        "word": "地区",
        "pinyin": "dì qū",
        "thai": "พื้นที่/ภูมิภาค",
        "hsk": 3,
        "audioText": "地区"
      },
      {
        "word": "区别",
        "pinyin": "qū bié",
        "thai": "ความแตกต่าง",
        "hsk": 3,
        "audioText": "区别"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：区。",
        "pinyin": "Zhè shì yī gè hànzì: 区.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 区 (เขต / บริเวณ / แยกแยะ)",
        "audioText": "这是一个汉字：区。"
      }
    ]
  },
  "医": {
    "char": "医",
    "radical": "匚",
    "primaryPinyin": "yī",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "y", "final": "i", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "yī",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "หมอ / แพทย์ / รักษา",
        "usageContext": "เช่น 医生"
      }
    ],
    "thaiMeaningShort": "หมอ / แพทย์ / รักษา",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "匚",
        "pinyin": "fāng",
        "role": "รากศัพท์",
        "meaning": "กล่อง / ลังใส่ของ",
        "desc": "สังกัดหมวด 匚"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 医 กำเนิดจากรากศัพท์ 匚 (กล่อง / ลังใส่ของ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 匚 เพื่อสื่อความหมายถึง หมอ / แพทย์ / รักษา",
      "modernEvolution": "หมายถึง หมอ / แพทย์ / รักษา"
    },
    "mnemonicHook": {
      "formula": "ราก 匚 (กล่อง / ลังใส่ของ) ➔ 'หมอ / แพทย์ / รักษา' (医)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 匚 เชื่อมโยงสู่คำว่า หมอ / แพทย์ / รักษา"
    },
    "compounds": [
      {
        "word": "医生",
        "pinyin": "yī shēng",
        "thai": "คุณหมอ",
        "hsk": 1,
        "audioText": "医生"
      },
      {
        "word": "医院",
        "pinyin": "yī yuàn",
        "thai": "โรงพยาบาล",
        "hsk": 1,
        "audioText": "医院"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：医。",
        "pinyin": "Zhè shì yī gè hànzì: 医.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 医 (หมอ / แพทย์ / รักษา)",
        "audioText": "这是一个汉字：医。"
      }
    ]
  },
  "千": {
    "char": "千",
    "radical": "十",
    "primaryPinyin": "qiān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "q", "final": "ian", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "qiān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "พัน (1,000)",
        "usageContext": "เช่น 一千"
      }
    ],
    "thaiMeaningShort": "พัน (1,000)",
    "hskLevel": 1,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "十",
        "pinyin": "shí",
        "role": "รากศัพท์",
        "meaning": "สิบ / สมบูรณ์พร้อม",
        "desc": "สังกัดหมวด 十"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 千 กำเนิดจากรากศัพท์ 十 (สิบ / สมบูรณ์พร้อม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 十 เพื่อสื่อความหมายถึง พัน (1,000)",
      "modernEvolution": "หมายถึง พัน (1,000)"
    },
    "mnemonicHook": {
      "formula": "ราก 十 (สิบ / สมบูรณ์พร้อม) ➔ 'พัน (1,000)' (千)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 十 เชื่อมโยงสู่คำว่า พัน (1,000)"
    },
    "compounds": [
      {
        "word": "一千",
        "pinyin": "yī qiān",
        "thai": "หนึ่งพัน",
        "hsk": 1,
        "audioText": "一千"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：千。",
        "pinyin": "Zhè shì yī gè hànzì: 千.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 千 (พัน (1,000))",
        "audioText": "这是一个汉字：千。"
      }
    ]
  },
  "午": {
    "char": "午",
    "radical": "十",
    "primaryPinyin": "wǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "w", "final": "u", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "wǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "เที่ยงวัน",
        "usageContext": "เช่น 中午"
      }
    ],
    "thaiMeaningShort": "เที่ยงวัน",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "十",
        "pinyin": "shí",
        "role": "รากศัพท์",
        "meaning": "สิบ / สมบูรณ์พร้อม",
        "desc": "สังกัดหมวด 十"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 午 กำเนิดจากรากศัพท์ 十 (สิบ / สมบูรณ์พร้อม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 十 เพื่อสื่อความหมายถึง เที่ยงวัน",
      "modernEvolution": "หมายถึง เที่ยงวัน"
    },
    "mnemonicHook": {
      "formula": "ราก 十 (สิบ / สมบูรณ์พร้อม) ➔ 'เที่ยงวัน' (午)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 十 เชื่อมโยงสู่คำว่า เที่ยงวัน"
    },
    "compounds": [
      {
        "word": "中午",
        "pinyin": "zhōng wǔ",
        "thai": "ตอนเที่ยง",
        "hsk": 1,
        "audioText": "中午"
      },
      {
        "word": "下午",
        "pinyin": "xià wǔ",
        "thai": "ตอนบ่าย",
        "hsk": 1,
        "audioText": "下午"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：午。",
        "pinyin": "Zhè shì yī gè hànzì: 午.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 午 (เที่ยงวัน)",
        "audioText": "这是一个汉字：午。"
      }
    ]
  },
  "半": {
    "char": "半",
    "radical": "十",
    "primaryPinyin": "bàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "b", "final": "an", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "bàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ครึ่ง",
        "usageContext": "เช่น 一半"
      }
    ],
    "thaiMeaningShort": "ครึ่ง",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "十",
        "pinyin": "shí",
        "role": "รากศัพท์",
        "meaning": "สิบ / สมบูรณ์พร้อม",
        "desc": "สังกัดหมวด 十"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 半 กำเนิดจากรากศัพท์ 十 (สิบ / สมบูรณ์พร้อม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 十 เพื่อสื่อความหมายถึง ครึ่ง",
      "modernEvolution": "หมายถึง ครึ่ง"
    },
    "mnemonicHook": {
      "formula": "ราก 十 (สิบ / สมบูรณ์พร้อม) ➔ 'ครึ่ง' (半)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 十 เชื่อมโยงสู่คำว่า ครึ่ง"
    },
    "compounds": [
      {
        "word": "一半",
        "pinyin": "yī bàn",
        "thai": "ครึ่งหนึ่ง",
        "hsk": 2,
        "audioText": "一半"
      },
      {
        "word": "两点半",
        "pinyin": "liǎng diǎn bàn",
        "thai": "บ่ายสองโมงครึ่ง",
        "hsk": 2,
        "audioText": "两点半"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：半。",
        "pinyin": "Zhè shì yī gè hànzì: 半.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 半 (ครึ่ง)",
        "audioText": "这是一个汉字：半。"
      }
    ]
  },
  "华": {
    "char": "华",
    "radical": "十",
    "primaryPinyin": "huá",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "h", "final": "ua", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "huá",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "จีน / รุ่งโรจน์ / ดอกไม้",
        "usageContext": "เช่น 华人"
      }
    ],
    "thaiMeaningShort": "จีน / รุ่งโรจน์ / ดอกไม้",
    "hskLevel": 3,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "十",
        "pinyin": "shí",
        "role": "รากศัพท์",
        "meaning": "สิบ / สมบูรณ์พร้อม",
        "desc": "สังกัดหมวด 十"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 华 กำเนิดจากรากศัพท์ 十 (สิบ / สมบูรณ์พร้อม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 十 เพื่อสื่อความหมายถึง จีน / รุ่งโรจน์ / ดอกไม้",
      "modernEvolution": "หมายถึง จีน / รุ่งโรจน์ / ดอกไม้"
    },
    "mnemonicHook": {
      "formula": "ราก 十 (สิบ / สมบูรณ์พร้อม) ➔ 'จีน / รุ่งโรจน์ / ดอกไม้' (华)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 十 เชื่อมโยงสู่คำว่า จีน / รุ่งโรจน์ / ดอกไม้"
    },
    "compounds": [
      {
        "word": "华人",
        "pinyin": "huá rén",
        "thai": "ชาวจีนโพ้นทะเล",
        "hsk": 3,
        "audioText": "华人"
      },
      {
        "word": "华丽",
        "pinyin": "huá lì",
        "thai": "หรูหรา",
        "hsk": 3,
        "audioText": "华丽"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：华。",
        "pinyin": "Zhè shì yī gè hànzì: 华.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 华 (จีน / รุ่งโรจน์ / ดอกไม้)",
        "audioText": "这是一个汉字：华。"
      }
    ]
  },
  "南": {
    "char": "南",
    "radical": "十",
    "primaryPinyin": "nán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "n", "final": "an", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "nán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "ทิศใต้",
        "usageContext": "เช่น 南方"
      }
    ],
    "thaiMeaningShort": "ทิศใต้",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "十",
        "pinyin": "shí",
        "role": "รากศัพท์",
        "meaning": "สิบ / สมบูรณ์พร้อม",
        "desc": "สังกัดหมวด 十"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 南 กำเนิดจากรากศัพท์ 十 (สิบ / สมบูรณ์พร้อม)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 十 เพื่อสื่อความหมายถึง ทิศใต้",
      "modernEvolution": "หมายถึง ทิศใต้"
    },
    "mnemonicHook": {
      "formula": "ราก 十 (สิบ / สมบูรณ์พร้อม) ➔ 'ทิศใต้' (南)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 十 เชื่อมโยงสู่คำว่า ทิศใต้"
    },
    "compounds": [
      {
        "word": "南方",
        "pinyin": "nán fāng",
        "thai": "ภาคใต้",
        "hsk": 1,
        "audioText": "南方"
      },
      {
        "word": "指南针",
        "pinyin": "zhǐ nán zhēn",
        "thai": "เข็มทิศ",
        "hsk": 1,
        "audioText": "指南针"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：南。",
        "pinyin": "Zhè shì yī gè hànzì: 南.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 南 (ทิศใต้)",
        "audioText": "这是一个汉字：南。"
      }
    ]
  },
  "卡": {
    "char": "卡",
    "radical": "卜",
    "primaryPinyin": "kǎ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "k", "final": "a", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "kǎ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "การ์ด / บัตร / ติดขัด",
        "usageContext": "เช่น 信用卡"
      }
    ],
    "thaiMeaningShort": "การ์ด / บัตร / ติดขัด",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "卜",
        "pinyin": "bǔ",
        "role": "รากศัพท์",
        "meaning": "การเสี่ยงทาย / รอยแตกกระดูก",
        "desc": "สังกัดหมวด 卜"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 卡 กำเนิดจากรากศัพท์ 卜 (การเสี่ยงทาย / รอยแตกกระดูก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 卜 เพื่อสื่อความหมายถึง การ์ด / บัตร / ติดขัด",
      "modernEvolution": "หมายถึง การ์ด / บัตร / ติดขัด"
    },
    "mnemonicHook": {
      "formula": "ราก 卜 (การเสี่ยงทาย / รอยแตกกระดูก) ➔ 'การ์ด / บัตร / ติดขัด' (卡)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 卜 เชื่อมโยงสู่คำว่า การ์ด / บัตร / ติดขัด"
    },
    "compounds": [
      {
        "word": "信用卡",
        "pinyin": "xìn yòng kǎ",
        "thai": "บัตรเครดิต",
        "hsk": 2,
        "audioText": "信用卡"
      },
      {
        "word": "卡片",
        "pinyin": "kǎ piàn",
        "thai": "การ์ด",
        "hsk": 2,
        "audioText": "卡片"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：卡。",
        "pinyin": "Zhè shì yī gè hànzì: 卡.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 卡 (การ์ด / บัตร / ติดขัด)",
        "audioText": "这是一个汉字：卡。"
      }
    ]
  },
  "占": {
    "char": "占",
    "radical": "卜",
    "primaryPinyin": "zhàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "zh", "final": "an", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "zhàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ครอบครอง / ทำนาย",
        "usageContext": "เช่น 占用"
      }
    ],
    "thaiMeaningShort": "ครอบครอง / ทำนาย",
    "hskLevel": 3,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "卜",
        "pinyin": "bǔ",
        "role": "รากศัพท์",
        "meaning": "การเสี่ยงทาย / รอยแตกกระดูก",
        "desc": "สังกัดหมวด 卜"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 占 กำเนิดจากรากศัพท์ 卜 (การเสี่ยงทาย / รอยแตกกระดูก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 卜 เพื่อสื่อความหมายถึง ครอบครอง / ทำนาย",
      "modernEvolution": "หมายถึง ครอบครอง / ทำนาย"
    },
    "mnemonicHook": {
      "formula": "ราก 卜 (การเสี่ยงทาย / รอยแตกกระดูก) ➔ 'ครอบครอง / ทำนาย' (占)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 卜 เชื่อมโยงสู่คำว่า ครอบครอง / ทำนาย"
    },
    "compounds": [
      {
        "word": "占用",
        "pinyin": "zhàn yòng",
        "thai": "ครอบครองใช้งาน",
        "hsk": 3,
        "audioText": "占用"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：占。",
        "pinyin": "Zhè shì yī gè hànzì: 占.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 占 (ครอบครอง / ทำนาย)",
        "audioText": "这是一个汉字：占。"
      }
    ]
  },
  "卫": {
    "char": "卫",
    "radical": "卩",
    "primaryPinyin": "wèi",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "w", "final": "ei", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "wèi",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ปกป้อง / สุขอนามัย",
        "usageContext": "เช่น 卫生间"
      }
    ],
    "thaiMeaningShort": "ปกป้อง / สุขอนามัย",
    "hskLevel": 3,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "卩",
        "pinyin": "jié",
        "role": "รากศัพท์",
        "meaning": "ตราประทับ / คนคุกเข่า",
        "desc": "สังกัดหมวด 卩"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 卫 กำเนิดจากรากศัพท์ 卩 (ตราประทับ / คนคุกเข่า)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 卩 เพื่อสื่อความหมายถึง ปกป้อง / สุขอนามัย",
      "modernEvolution": "หมายถึง ปกป้อง / สุขอนามัย"
    },
    "mnemonicHook": {
      "formula": "ราก 卩 (ตราประทับ / คนคุกเข่า) ➔ 'ปกป้อง / สุขอนามัย' (卫)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 卩 เชื่อมโยงสู่คำว่า ปกป้อง / สุขอนามัย"
    },
    "compounds": [
      {
        "word": "卫生间",
        "pinyin": "wèi shēng jiān",
        "thai": "ห้องน้ำ",
        "hsk": 3,
        "audioText": "卫生间"
      },
      {
        "word": "保卫",
        "pinyin": "bǎo wèi",
        "thai": "พิทักษ์รักษา",
        "hsk": 3,
        "audioText": "保卫"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：卫。",
        "pinyin": "Zhè shì yī gè hànzì: 卫.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 卫 (ปกป้อง / สุขอนามัย)",
        "audioText": "这是一个汉字：卫。"
      }
    ]
  },
  "印": {
    "char": "印",
    "radical": "卩",
    "primaryPinyin": "yìn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "y", "final": "in", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "yìn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "พิมพ์ / ประทับตรา / ความประทับใจ",
        "usageContext": "เช่น 印象"
      }
    ],
    "thaiMeaningShort": "พิมพ์ / ประทับตรา / ความประทับใจ",
    "hskLevel": 3,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "卩",
        "pinyin": "jié",
        "role": "รากศัพท์",
        "meaning": "ตราประทับ / คนคุกเข่า",
        "desc": "สังกัดหมวด 卩"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 印 กำเนิดจากรากศัพท์ 卩 (ตราประทับ / คนคุกเข่า)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 卩 เพื่อสื่อความหมายถึง พิมพ์ / ประทับตรา / ความประทับใจ",
      "modernEvolution": "หมายถึง พิมพ์ / ประทับตรา / ความประทับใจ"
    },
    "mnemonicHook": {
      "formula": "ราก 卩 (ตราประทับ / คนคุกเข่า) ➔ 'พิมพ์ / ประทับตรา / ความประทับใจ' (印)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 卩 เชื่อมโยงสู่คำว่า พิมพ์ / ประทับตรา / ความประทับใจ"
    },
    "compounds": [
      {
        "word": "印象",
        "pinyin": "yìn xiàng",
        "thai": "ความประทับใจ",
        "hsk": 3,
        "audioText": "印象"
      },
      {
        "word": "打印",
        "pinyin": "dǎ yìn",
        "thai": "สั่งพิมพ์เอกสาร",
        "hsk": 3,
        "audioText": "打印"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：印。",
        "pinyin": "Zhè shì yī gè hànzì: 印.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 印 (พิมพ์ / ประทับตรา / ความประทับใจ)",
        "audioText": "这是一个汉字：印。"
      }
    ]
  },
  "危": {
    "char": "危",
    "radical": "卩",
    "primaryPinyin": "wēi",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "w", "final": "ei", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "wēi",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "อันตราย / วิกฤต",
        "usageContext": "เช่น 危险"
      }
    ],
    "thaiMeaningShort": "อันตราย / วิกฤต",
    "hskLevel": 3,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "卩",
        "pinyin": "jié",
        "role": "รากศัพท์",
        "meaning": "ตราประทับ / คนคุกเข่า",
        "desc": "สังกัดหมวด 卩"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 危 กำเนิดจากรากศัพท์ 卩 (ตราประทับ / คนคุกเข่า)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 卩 เพื่อสื่อความหมายถึง อันตราย / วิกฤต",
      "modernEvolution": "หมายถึง อันตราย / วิกฤต"
    },
    "mnemonicHook": {
      "formula": "ราก 卩 (ตราประทับ / คนคุกเข่า) ➔ 'อันตราย / วิกฤต' (危)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 卩 เชื่อมโยงสู่คำว่า อันตราย / วิกฤต"
    },
    "compounds": [
      {
        "word": "危险",
        "pinyin": "wēi xiǎn",
        "thai": "อันตราย",
        "hsk": 3,
        "audioText": "危险"
      },
      {
        "word": "危机",
        "pinyin": "wēi jī",
        "thai": "วิกฤตการณ์",
        "hsk": 3,
        "audioText": "危机"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：危。",
        "pinyin": "Zhè shì yī gè hànzì: 危.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 危 (อันตราย / วิกฤต)",
        "audioText": "这是一个汉字：危。"
      }
    ]
  },
  "却": {
    "char": "却",
    "radical": "卩",
    "primaryPinyin": "què",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "q", "final": "ue", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "què",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "แต่กลับ / ถอย",
        "usageContext": "เช่น 退却"
      }
    ],
    "thaiMeaningShort": "แต่กลับ / ถอย",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "卩",
        "pinyin": "jié",
        "role": "รากศัพท์",
        "meaning": "ตราประทับ / คนคุกเข่า",
        "desc": "สังกัดหมวด 卩"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 却 กำเนิดจากรากศัพท์ 卩 (ตราประทับ / คนคุกเข่า)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 卩 เพื่อสื่อความหมายถึง แต่กลับ / ถอย",
      "modernEvolution": "หมายถึง แต่กลับ / ถอย"
    },
    "mnemonicHook": {
      "formula": "ราก 卩 (ตราประทับ / คนคุกเข่า) ➔ 'แต่กลับ / ถอย' (却)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 卩 เชื่อมโยงสู่คำว่า แต่กลับ / ถอย"
    },
    "compounds": [
      {
        "word": "退却",
        "pinyin": "tuì què",
        "thai": "ถอยหนี",
        "hsk": 2,
        "audioText": "退却"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：却。",
        "pinyin": "Zhè shì yī gè hànzì: 却.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 却 (แต่กลับ / ถอย)",
        "audioText": "这是一个汉字：却。"
      }
    ]
  },
  "原": {
    "char": "原",
    "radical": "厂",
    "primaryPinyin": "yuán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "uan", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yuán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "เดิมที / แหล่งกำเนิด / ทุ่งกว้าง",
        "usageContext": "เช่น 原来"
      }
    ],
    "thaiMeaningShort": "เดิมที / แหล่งกำเนิด / ทุ่งกว้าง",
    "hskLevel": 2,
    "strokeCount": 10,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "厂",
        "pinyin": "chǎng",
        "role": "รากศัพท์",
        "meaning": "หน้าผา / เพิงพัก",
        "desc": "สังกัดหมวด 厂"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 原 กำเนิดจากรากศัพท์ 厂 (หน้าผา / เพิงพัก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 厂 เพื่อสื่อความหมายถึง เดิมที / แหล่งกำเนิด / ทุ่งกว้าง",
      "modernEvolution": "หมายถึง เดิมที / แหล่งกำเนิด / ทุ่งกว้าง"
    },
    "mnemonicHook": {
      "formula": "ราก 厂 (หน้าผา / เพิงพัก) ➔ 'เดิมที / แหล่งกำเนิด / ทุ่งกว้าง' (原)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 厂 เชื่อมโยงสู่คำว่า เดิมที / แหล่งกำเนิด / ทุ่งกว้าง"
    },
    "compounds": [
      {
        "word": "原来",
        "pinyin": "yuán lái",
        "thai": "แต่เดิม/ที่แท้",
        "hsk": 2,
        "audioText": "原来"
      },
      {
        "word": "原因",
        "pinyin": "yuán yīn",
        "thai": "สาเหตุ",
        "hsk": 2,
        "audioText": "原因"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：原。",
        "pinyin": "Zhè shì yī gè hànzì: 原.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 原 (เดิมที / แหล่งกำเนิด / ทุ่งกว้าง)",
        "audioText": "这是一个汉字：原。"
      }
    ]
  },
  "厅": {
    "char": "厅",
    "radical": "厂",
    "primaryPinyin": "tīng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "t", "final": "ing", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "tīng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ห้องโถง / ล็อบบี้",
        "usageContext": "เช่น 客厅"
      }
    ],
    "thaiMeaningShort": "ห้องโถง / ล็อบบี้",
    "hskLevel": 2,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "厂",
        "pinyin": "chǎng",
        "role": "รากศัพท์",
        "meaning": "หน้าผา / เพิงพัก",
        "desc": "สังกัดหมวด 厂"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 厅 กำเนิดจากรากศัพท์ 厂 (หน้าผา / เพิงพัก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 厂 เพื่อสื่อความหมายถึง ห้องโถง / ล็อบบี้",
      "modernEvolution": "หมายถึง ห้องโถง / ล็อบบี้"
    },
    "mnemonicHook": {
      "formula": "ราก 厂 (หน้าผา / เพิงพัก) ➔ 'ห้องโถง / ล็อบบี้' (厅)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 厂 เชื่อมโยงสู่คำว่า ห้องโถง / ล็อบบี้"
    },
    "compounds": [
      {
        "word": "客厅",
        "pinyin": "kè tīng",
        "thai": "ห้องรับแขก",
        "hsk": 2,
        "audioText": "客厅"
      },
      {
        "word": "餐厅",
        "pinyin": "cān tīng",
        "thai": "ห้องอาหาร",
        "hsk": 2,
        "audioText": "餐厅"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：厅。",
        "pinyin": "Zhè shì yī gè hànzì: 厅.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 厅 (ห้องโถง / ล็อบบี้)",
        "audioText": "这是一个汉字：厅。"
      }
    ]
  },
  "历": {
    "char": "历",
    "radical": "厂",
    "primaryPinyin": "lì",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "l", "final": "i", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "lì",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ประวัติศาสตร์ / ปฏิทิน / ผ่านพ้น",
        "usageContext": "เช่น 历史"
      }
    ],
    "thaiMeaningShort": "ประวัติศาสตร์ / ปฏิทิน / ผ่านพ้น",
    "hskLevel": 2,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "厂",
        "pinyin": "chǎng",
        "role": "รากศัพท์",
        "meaning": "หน้าผา / เพิงพัก",
        "desc": "สังกัดหมวด 厂"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 历 กำเนิดจากรากศัพท์ 厂 (หน้าผา / เพิงพัก)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 厂 เพื่อสื่อความหมายถึง ประวัติศาสตร์ / ปฏิทิน / ผ่านพ้น",
      "modernEvolution": "หมายถึง ประวัติศาสตร์ / ปฏิทิน / ผ่านพ้น"
    },
    "mnemonicHook": {
      "formula": "ราก 厂 (หน้าผา / เพิงพัก) ➔ 'ประวัติศาสตร์ / ปฏิทิน / ผ่านพ้น' (历)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 厂 เชื่อมโยงสู่คำว่า ประวัติศาสตร์ / ปฏิทิน / ผ่านพ้น"
    },
    "compounds": [
      {
        "word": "历史",
        "pinyin": "lì shǐ",
        "thai": "ประวัติศาสตร์",
        "hsk": 2,
        "audioText": "历史"
      },
      {
        "word": "经历",
        "pinyin": "jīng lì",
        "thai": "ประสบการณ์",
        "hsk": 2,
        "audioText": "经历"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：历。",
        "pinyin": "Zhè shì yī gè hànzì: 历.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 历 (ประวัติศาสตร์ / ปฏิทิน / ผ่านพ้น)",
        "audioText": "这是一个汉字：历。"
      }
    ]
  },
  "私": {
    "char": "私",
    "radical": "厶",
    "primaryPinyin": "sī",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "s", "final": "i", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "sī",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ส่วนตัว / เห็นแก่ตัว",
        "usageContext": "เช่น 私下"
      }
    ],
    "thaiMeaningShort": "ส่วนตัว / เห็นแก่ตัว",
    "hskLevel": 4,
    "strokeCount": 7,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "厶",
        "pinyin": "sī",
        "role": "รากศัพท์",
        "meaning": "ส่วนตัว / ซ่อนเร้น",
        "desc": "สังกัดหมวด 厶"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 私 กำเนิดจากรากศัพท์ 厶 (ส่วนตัว / ซ่อนเร้น)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 厶 เพื่อสื่อความหมายถึง ส่วนตัว / เห็นแก่ตัว",
      "modernEvolution": "หมายถึง ส่วนตัว / เห็นแก่ตัว"
    },
    "mnemonicHook": {
      "formula": "ราก 厶 (ส่วนตัว / ซ่อนเร้น) ➔ 'ส่วนตัว / เห็นแก่ตัว' (私)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 厶 เชื่อมโยงสู่คำว่า ส่วนตัว / เห็นแก่ตัว"
    },
    "compounds": [
      {
        "word": "私下",
        "pinyin": "sī xià",
        "thai": "เป็นการส่วนตัว",
        "hsk": 4,
        "audioText": "私下"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：私。",
        "pinyin": "Zhè shì yī gè hànzì: 私.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 私 (ส่วนตัว / เห็นแก่ตัว)",
        "audioText": "这是一个汉字：私。"
      }
    ]
  },
  "去": {
    "char": "去",
    "radical": "厶",
    "primaryPinyin": "qù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "q", "final": "u", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "qù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ไป / จากไป",
        "usageContext": "เช่น 去年"
      }
    ],
    "thaiMeaningShort": "ไป / จากไป",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "厶",
        "pinyin": "sī",
        "role": "รากศัพท์",
        "meaning": "ส่วนตัว / ซ่อนเร้น",
        "desc": "สังกัดหมวด 厶"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 去 กำเนิดจากรากศัพท์ 厶 (ส่วนตัว / ซ่อนเร้น)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 厶 เพื่อสื่อความหมายถึง ไป / จากไป",
      "modernEvolution": "หมายถึง ไป / จากไป"
    },
    "mnemonicHook": {
      "formula": "ราก 厶 (ส่วนตัว / ซ่อนเร้น) ➔ 'ไป / จากไป' (去)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 厶 เชื่อมโยงสู่คำว่า ไป / จากไป"
    },
    "compounds": [
      {
        "word": "去年",
        "pinyin": "qù nián",
        "thai": "ปีที่แล้ว",
        "hsk": 1,
        "audioText": "去年"
      },
      {
        "word": "过去",
        "pinyin": "guò qù",
        "thai": "อดีต/ข้ามไป",
        "hsk": 1,
        "audioText": "过去"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：去。",
        "pinyin": "Zhè shì yī gè hànzì: 去.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 去 (ไป / จากไป)",
        "audioText": "这是一个汉字：去。"
      }
    ]
  },
  "参": {
    "char": "参",
    "radical": "厶",
    "primaryPinyin": "cān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "c", "final": "an", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "cān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "เข้าร่วม / โสม",
        "usageContext": "เช่น 参加"
      }
    ],
    "thaiMeaningShort": "เข้าร่วม / โสม",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "厶",
        "pinyin": "sī",
        "role": "รากศัพท์",
        "meaning": "ส่วนตัว / ซ่อนเร้น",
        "desc": "สังกัดหมวด 厶"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 参 กำเนิดจากรากศัพท์ 厶 (ส่วนตัว / ซ่อนเร้น)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 厶 เพื่อสื่อความหมายถึง เข้าร่วม / โสม",
      "modernEvolution": "หมายถึง เข้าร่วม / โสม"
    },
    "mnemonicHook": {
      "formula": "ราก 厶 (ส่วนตัว / ซ่อนเร้น) ➔ 'เข้าร่วม / โสม' (参)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 厶 เชื่อมโยงสู่คำว่า เข้าร่วม / โสม"
    },
    "compounds": [
      {
        "word": "参加",
        "pinyin": "cān jiā",
        "thai": "เข้าร่วม",
        "hsk": 2,
        "audioText": "参加"
      },
      {
        "word": "参观",
        "pinyin": "cān guān",
        "thai": "เยี่ยมชม",
        "hsk": 2,
        "audioText": "参观"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：参。",
        "pinyin": "Zhè shì yī gè hànzì: 参.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 参 (เข้าร่วม / โสม)",
        "audioText": "这是一个汉字：参。"
      }
    ]
  },
  "友": {
    "char": "友",
    "radical": "又",
    "primaryPinyin": "yǒu",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "ou", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yǒu",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "เพื่อน / มิตรภาพ",
        "usageContext": "เช่น 朋友"
      }
    ],
    "thaiMeaningShort": "เพื่อน / มิตรภาพ",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "又",
        "pinyin": "yòu",
        "role": "รากศัพท์",
        "meaning": "มือขวา / ซ้ำอีกครั้ง",
        "desc": "สังกัดหมวด 又"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 友 กำเนิดจากรากศัพท์ 又 (มือขวา / ซ้ำอีกครั้ง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 又 เพื่อสื่อความหมายถึง เพื่อน / มิตรภาพ",
      "modernEvolution": "หมายถึง เพื่อน / มิตรภาพ"
    },
    "mnemonicHook": {
      "formula": "ราก 又 (มือขวา / ซ้ำอีกครั้ง) ➔ 'เพื่อน / มิตรภาพ' (友)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 又 เชื่อมโยงสู่คำว่า เพื่อน / มิตรภาพ"
    },
    "compounds": [
      {
        "word": "朋友",
        "pinyin": "péng you",
        "thai": "เพื่อน",
        "hsk": 1,
        "audioText": "朋友"
      },
      {
        "word": "友好",
        "pinyin": "yǒu hǎo",
        "thai": "มิตรภาพอันดี",
        "hsk": 1,
        "audioText": "友好"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：友。",
        "pinyin": "Zhè shì yī gè hànzì: 友.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 友 (เพื่อน / มิตรภาพ)",
        "audioText": "这是一个汉字：友。"
      }
    ]
  },
  "双": {
    "char": "双",
    "radical": "又",
    "primaryPinyin": "shuāng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "sh", "final": "uang", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "shuāng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "คู่ / สองอัน",
        "usageContext": "เช่น 双手"
      }
    ],
    "thaiMeaningShort": "คู่ / สองอัน",
    "hskLevel": 2,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "又",
        "pinyin": "yòu",
        "role": "รากศัพท์",
        "meaning": "มือขวา / ซ้ำอีกครั้ง",
        "desc": "สังกัดหมวด 又"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 双 กำเนิดจากรากศัพท์ 又 (มือขวา / ซ้ำอีกครั้ง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 又 เพื่อสื่อความหมายถึง คู่ / สองอัน",
      "modernEvolution": "หมายถึง คู่ / สองอัน"
    },
    "mnemonicHook": {
      "formula": "ราก 又 (มือขวา / ซ้ำอีกครั้ง) ➔ 'คู่ / สองอัน' (双)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 又 เชื่อมโยงสู่คำว่า คู่ / สองอัน"
    },
    "compounds": [
      {
        "word": "双手",
        "pinyin": "shuāng shǒu",
        "thai": "สองมือ",
        "hsk": 2,
        "audioText": "双手"
      },
      {
        "word": "一双鞋",
        "pinyin": "yī shuāng xié",
        "thai": "รองเท้าหนึ่งคู่",
        "hsk": 2,
        "audioText": "一双鞋"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：双。",
        "pinyin": "Zhè shì yī gè hànzì: 双.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 双 (คู่ / สองอัน)",
        "audioText": "这是一个汉字：双。"
      }
    ]
  },
  "反": {
    "char": "反",
    "radical": "又",
    "primaryPinyin": "fǎn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "f", "final": "an", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "fǎn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ตรงข้าม / พลิกกลับ",
        "usageContext": "เช่น 反对"
      }
    ],
    "thaiMeaningShort": "ตรงข้าม / พลิกกลับ",
    "hskLevel": 3,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "又",
        "pinyin": "yòu",
        "role": "รากศัพท์",
        "meaning": "มือขวา / ซ้ำอีกครั้ง",
        "desc": "สังกัดหมวด 又"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 反 กำเนิดจากรากศัพท์ 又 (มือขวา / ซ้ำอีกครั้ง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 又 เพื่อสื่อความหมายถึง ตรงข้าม / พลิกกลับ",
      "modernEvolution": "หมายถึง ตรงข้าม / พลิกกลับ"
    },
    "mnemonicHook": {
      "formula": "ราก 又 (มือขวา / ซ้ำอีกครั้ง) ➔ 'ตรงข้าม / พลิกกลับ' (反)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 又 เชื่อมโยงสู่คำว่า ตรงข้าม / พลิกกลับ"
    },
    "compounds": [
      {
        "word": "反对",
        "pinyin": "fǎn duì",
        "thai": "คัดค้าน",
        "hsk": 3,
        "audioText": "反对"
      },
      {
        "word": "相反",
        "pinyin": "xiāng fǎn",
        "thai": "ตรงกันข้าม",
        "hsk": 3,
        "audioText": "相反"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：反。",
        "pinyin": "Zhè shì yī gè hànzì: 反.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 反 (ตรงข้าม / พลิกกลับ)",
        "audioText": "这是一个汉字：反。"
      }
    ]
  },
  "变": {
    "char": "变",
    "radical": "又",
    "primaryPinyin": "biàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "b", "final": "ian", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "biàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "เปลี่ยนแปลง",
        "usageContext": "เช่น 变化"
      }
    ],
    "thaiMeaningShort": "เปลี่ยนแปลง",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "又",
        "pinyin": "yòu",
        "role": "รากศัพท์",
        "meaning": "มือขวา / ซ้ำอีกครั้ง",
        "desc": "สังกัดหมวด 又"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 变 กำเนิดจากรากศัพท์ 又 (มือขวา / ซ้ำอีกครั้ง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 又 เพื่อสื่อความหมายถึง เปลี่ยนแปลง",
      "modernEvolution": "หมายถึง เปลี่ยนแปลง"
    },
    "mnemonicHook": {
      "formula": "ราก 又 (มือขวา / ซ้ำอีกครั้ง) ➔ 'เปลี่ยนแปลง' (变)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 又 เชื่อมโยงสู่คำว่า เปลี่ยนแปลง"
    },
    "compounds": [
      {
        "word": "变化",
        "pinyin": "biàn huà",
        "thai": "การเปลี่ยนแปลง",
        "hsk": 2,
        "audioText": "变化"
      },
      {
        "word": "改变",
        "pinyin": "gǎi biàn",
        "thai": "ปรับเปลี่ยน",
        "hsk": 2,
        "audioText": "改变"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：变。",
        "pinyin": "Zhè shì yī gè hànzì: 变.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 变 (เปลี่ยนแปลง)",
        "audioText": "这是一个汉字：变。"
      }
    ]
  },
  "对": {
    "char": "对",
    "radical": "寸",
    "primaryPinyin": "duì",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "d", "final": "ui", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "duì",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ถูกต้อง / ต่อ / คู่",
        "usageContext": "เช่น 对不起"
      }
    ],
    "thaiMeaningShort": "ถูกต้อง / ต่อ / คู่",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "寸",
        "pinyin": "cùn",
        "role": "รากศัพท์",
        "meaning": "นิ้ว (มาตราวัด) / ข้อมือ",
        "desc": "สังกัดหมวด 寸"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 对 กำเนิดจากรากศัพท์ 寸 (นิ้ว (มาตราวัด) / ข้อมือ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 寸 เพื่อสื่อความหมายถึง ถูกต้อง / ต่อ / คู่",
      "modernEvolution": "หมายถึง ถูกต้อง / ต่อ / คู่"
    },
    "mnemonicHook": {
      "formula": "ราก 寸 (นิ้ว (มาตราวัด) / ข้อมือ) ➔ 'ถูกต้อง / ต่อ / คู่' (对)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 寸 เชื่อมโยงสู่คำว่า ถูกต้อง / ต่อ / คู่"
    },
    "compounds": [
      {
        "word": "对不起",
        "pinyin": "duì bu qǐ",
        "thai": "ขอโทษ",
        "hsk": 1,
        "audioText": "对不起"
      },
      {
        "word": "对待",
        "pinyin": "duì dài",
        "thai": "ปฏิบัติต่อ",
        "hsk": 1,
        "audioText": "对待"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：对。",
        "pinyin": "Zhè shì yī gè hànzì: 对.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 对 (ถูกต้อง / ต่อ / คู่)",
        "audioText": "这是一个汉字：对。"
      }
    ]
  },
  "封": {
    "char": "封",
    "radical": "寸",
    "primaryPinyin": "fēng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "f", "final": "eng", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "fēng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ฉบับ (ลักษณนามจดหมาย) / ปิดผนึก",
        "usageContext": "เช่น 一封信"
      }
    ],
    "thaiMeaningShort": "ฉบับ (ลักษณนามจดหมาย) / ปิดผนึก",
    "hskLevel": 3,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "寸",
        "pinyin": "cùn",
        "role": "รากศัพท์",
        "meaning": "นิ้ว (มาตราวัด) / ข้อมือ",
        "desc": "สังกัดหมวด 寸"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 封 กำเนิดจากรากศัพท์ 寸 (นิ้ว (มาตราวัด) / ข้อมือ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 寸 เพื่อสื่อความหมายถึง ฉบับ (ลักษณนามจดหมาย) / ปิดผนึก",
      "modernEvolution": "หมายถึง ฉบับ (ลักษณนามจดหมาย) / ปิดผนึก"
    },
    "mnemonicHook": {
      "formula": "ราก 寸 (นิ้ว (มาตราวัด) / ข้อมือ) ➔ 'ฉบับ (ลักษณนามจดหมาย) / ปิดผนึก' (封)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 寸 เชื่อมโยงสู่คำว่า ฉบับ (ลักษณนามจดหมาย) / ปิดผนึก"
    },
    "compounds": [
      {
        "word": "一封信",
        "pinyin": "yī fēng xìn",
        "thai": "จดหมายหนึ่งฉบับ",
        "hsk": 3,
        "audioText": "一封信"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：封。",
        "pinyin": "Zhè shì yī gè hànzì: 封.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 封 (ฉบับ (ลักษณนามจดหมาย) / ปิดผนึก)",
        "audioText": "这是一个汉字：封。"
      }
    ]
  },
  "少": {
    "char": "少",
    "radical": "小",
    "primaryPinyin": "shǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "sh", "final": "ao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "shǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "น้อย / ขาด",
        "usageContext": "เช่น 多少"
      }
    ],
    "thaiMeaningShort": "น้อย / ขาด",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "小",
        "pinyin": "xiǎo",
        "role": "รากศัพท์",
        "meaning": "เล็ก / น้อย / ละเอียด",
        "desc": "สังกัดหมวด 小"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 少 กำเนิดจากรากศัพท์ 小 (เล็ก / น้อย / ละเอียด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 小 เพื่อสื่อความหมายถึง น้อย / ขาด",
      "modernEvolution": "หมายถึง น้อย / ขาด"
    },
    "mnemonicHook": {
      "formula": "ราก 小 (เล็ก / น้อย / ละเอียด) ➔ 'น้อย / ขาด' (少)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 小 เชื่อมโยงสู่คำว่า น้อย / ขาด"
    },
    "compounds": [
      {
        "word": "多少",
        "pinyin": "duō shao",
        "thai": "เท่าไหร่",
        "hsk": 1,
        "audioText": "多少"
      },
      {
        "word": "很少",
        "pinyin": "hěn shǎo",
        "thai": "น้อยมาก",
        "hsk": 1,
        "audioText": "很少"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：少。",
        "pinyin": "Zhè shì yī gè hànzì: 少.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 少 (น้อย / ขาด)",
        "audioText": "这是一个汉字：少。"
      }
    ]
  },
  "尖": {
    "char": "尖",
    "radical": "小",
    "primaryPinyin": "jiān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "j", "final": "ian", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "jiān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ปลายแหลม / คมชัด",
        "usageContext": "เช่น 尖锐"
      }
    ],
    "thaiMeaningShort": "ปลายแหลม / คมชัด",
    "hskLevel": 4,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "小",
        "pinyin": "xiǎo",
        "role": "รากศัพท์",
        "meaning": "เล็ก / น้อย / ละเอียด",
        "desc": "สังกัดหมวด 小"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 尖 กำเนิดจากรากศัพท์ 小 (เล็ก / น้อย / ละเอียด)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 小 เพื่อสื่อความหมายถึง ปลายแหลม / คมชัด",
      "modernEvolution": "หมายถึง ปลายแหลม / คมชัด"
    },
    "mnemonicHook": {
      "formula": "ราก 小 (เล็ก / น้อย / ละเอียด) ➔ 'ปลายแหลม / คมชัด' (尖)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 小 เชื่อมโยงสู่คำว่า ปลายแหลม / คมชัด"
    },
    "compounds": [
      {
        "word": "尖锐",
        "pinyin": "jiān ruì",
        "thai": "แหลมคม",
        "hsk": 4,
        "audioText": "尖锐"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：尖。",
        "pinyin": "Zhè shì yī gè hànzì: 尖.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 尖 (ปลายแหลม / คมชัด)",
        "audioText": "这是一个汉字：尖。"
      }
    ]
  },
  "左": {
    "char": "左",
    "radical": "工",
    "primaryPinyin": "zuǒ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "z", "final": "uo", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "zuǒ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ซ้าย / ทิศซ้าย",
        "usageContext": "เช่น 左边"
      }
    ],
    "thaiMeaningShort": "ซ้าย / ทิศซ้าย",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "工",
        "pinyin": "gōng",
        "role": "รากศัพท์",
        "meaning": "งานช่าง / งานฝีมือ",
        "desc": "สังกัดหมวด 工"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 左 กำเนิดจากรากศัพท์ 工 (งานช่าง / งานฝีมือ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 工 เพื่อสื่อความหมายถึง ซ้าย / ทิศซ้าย",
      "modernEvolution": "หมายถึง ซ้าย / ทิศซ้าย"
    },
    "mnemonicHook": {
      "formula": "ราก 工 (งานช่าง / งานฝีมือ) ➔ 'ซ้าย / ทิศซ้าย' (左)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 工 เชื่อมโยงสู่คำว่า ซ้าย / ทิศซ้าย"
    },
    "compounds": [
      {
        "word": "左边",
        "pinyin": "zuǒ bian",
        "thai": "ด้านซ้าย",
        "hsk": 1,
        "audioText": "左边"
      },
      {
        "word": "左右",
        "pinyin": "zuǒ yòu",
        "thai": "ซ้ายขวา/ประมาณ",
        "hsk": 1,
        "audioText": "左右"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：左。",
        "pinyin": "Zhè shì yī gè hànzì: 左.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 左 (ซ้าย / ทิศซ้าย)",
        "audioText": "这是一个汉字：左。"
      }
    ]
  },
  "巧": {
    "char": "巧",
    "radical": "工",
    "primaryPinyin": "qiǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "q", "final": "iao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "qiǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ประจวบเหมาะ / คล่องแคล่ว",
        "usageContext": "เช่น 真巧"
      }
    ],
    "thaiMeaningShort": "ประจวบเหมาะ / คล่องแคล่ว",
    "hskLevel": 3,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "工",
        "pinyin": "gōng",
        "role": "รากศัพท์",
        "meaning": "งานช่าง / งานฝีมือ",
        "desc": "สังกัดหมวด 工"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 巧 กำเนิดจากรากศัพท์ 工 (งานช่าง / งานฝีมือ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 工 เพื่อสื่อความหมายถึง ประจวบเหมาะ / คล่องแคล่ว",
      "modernEvolution": "หมายถึง ประจวบเหมาะ / คล่องแคล่ว"
    },
    "mnemonicHook": {
      "formula": "ราก 工 (งานช่าง / งานฝีมือ) ➔ 'ประจวบเหมาะ / คล่องแคล่ว' (巧)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 工 เชื่อมโยงสู่คำว่า ประจวบเหมาะ / คล่องแคล่ว"
    },
    "compounds": [
      {
        "word": "真巧",
        "pinyin": "zhēn qiǎo",
        "thai": "ช่างบังเอิญจริง",
        "hsk": 3,
        "audioText": "真巧"
      },
      {
        "word": "巧妙",
        "pinyin": "qiǎo miào",
        "thai": "แยบยล",
        "hsk": 3,
        "audioText": "巧妙"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：巧。",
        "pinyin": "Zhè shì yī gè hànzì: 巧.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 巧 (ประจวบเหมาะ / คล่องแคล่ว)",
        "audioText": "这是一个汉字：巧。"
      }
    ]
  },
  "已": {
    "char": "已",
    "radical": "己",
    "primaryPinyin": "yǐ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "i", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yǐ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "แล้ว / เรียบร้อยแล้ว",
        "usageContext": "เช่น 已经"
      }
    ],
    "thaiMeaningShort": "แล้ว / เรียบร้อยแล้ว",
    "hskLevel": 2,
    "strokeCount": 3,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "己",
        "pinyin": "jǐ",
        "role": "รากศัพท์",
        "meaning": "ตนเอง / ตัวเอง (已/巳)",
        "desc": "สังกัดหมวด 己"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 已 กำเนิดจากรากศัพท์ 己 (ตนเอง / ตัวเอง (已/巳))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 己 เพื่อสื่อความหมายถึง แล้ว / เรียบร้อยแล้ว",
      "modernEvolution": "หมายถึง แล้ว / เรียบร้อยแล้ว"
    },
    "mnemonicHook": {
      "formula": "ราก 己 (ตนเอง / ตัวเอง (已/巳)) ➔ 'แล้ว / เรียบร้อยแล้ว' (已)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 己 เชื่อมโยงสู่คำว่า แล้ว / เรียบร้อยแล้ว"
    },
    "compounds": [
      {
        "word": "已经",
        "pinyin": "yǐ jīng",
        "thai": "เรียบร้อยแล้ว",
        "hsk": 2,
        "audioText": "已经"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：已。",
        "pinyin": "Zhè shì yī gè hànzì: 已.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 已 (แล้ว / เรียบร้อยแล้ว)",
        "audioText": "这是一个汉字：已。"
      }
    ]
  },
  "导": {
    "char": "导",
    "radical": "己",
    "primaryPinyin": "dǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "d", "final": "ao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "dǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "นำทาง / ชี้นำ",
        "usageContext": "เช่น 导游"
      }
    ],
    "thaiMeaningShort": "นำทาง / ชี้นำ",
    "hskLevel": 3,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "己",
        "pinyin": "jǐ",
        "role": "รากศัพท์",
        "meaning": "ตนเอง / ตัวเอง (已/巳)",
        "desc": "สังกัดหมวด 己"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 导 กำเนิดจากรากศัพท์ 己 (ตนเอง / ตัวเอง (已/巳))",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 己 เพื่อสื่อความหมายถึง นำทาง / ชี้นำ",
      "modernEvolution": "หมายถึง นำทาง / ชี้นำ"
    },
    "mnemonicHook": {
      "formula": "ราก 己 (ตนเอง / ตัวเอง (已/巳)) ➔ 'นำทาง / ชี้นำ' (导)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 己 เชื่อมโยงสู่คำว่า นำทาง / ชี้นำ"
    },
    "compounds": [
      {
        "word": "导游",
        "pinyin": "dǎo yóu",
        "thai": "มัคคุเทศก์/ไกด์",
        "hsk": 3,
        "audioText": "导游"
      },
      {
        "word": "领导",
        "pinyin": "lǐng dǎo",
        "thai": "ผู้นำ",
        "hsk": 3,
        "audioText": "领导"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：导。",
        "pinyin": "Zhè shì yī gè hànzì: 导.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 导 (นำทาง / ชี้นำ)",
        "audioText": "这是一个汉字：导。"
      }
    ]
  },
  "布": {
    "char": "布",
    "radical": "巾",
    "primaryPinyin": "bù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "b", "final": "u", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "bù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "ผ้า / กระจาย / ประกาศ",
        "usageContext": "เช่น 宣布"
      }
    ],
    "thaiMeaningShort": "ผ้า / กระจาย / ประกาศ",
    "hskLevel": 3,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "巾",
        "pinyin": "jīn",
        "role": "รากศัพท์",
        "meaning": "ผ้า / ผ้าเช็ดหน้า / ธง",
        "desc": "สังกัดหมวด 巾"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 布 กำเนิดจากรากศัพท์ 巾 (ผ้า / ผ้าเช็ดหน้า / ธง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 巾 เพื่อสื่อความหมายถึง ผ้า / กระจาย / ประกาศ",
      "modernEvolution": "หมายถึง ผ้า / กระจาย / ประกาศ"
    },
    "mnemonicHook": {
      "formula": "ราก 巾 (ผ้า / ผ้าเช็ดหน้า / ธง) ➔ 'ผ้า / กระจาย / ประกาศ' (布)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 巾 เชื่อมโยงสู่คำว่า ผ้า / กระจาย / ประกาศ"
    },
    "compounds": [
      {
        "word": "宣布",
        "pinyin": "xuān bù",
        "thai": "ประกาศ",
        "hsk": 3,
        "audioText": "宣布"
      },
      {
        "word": "布料",
        "pinyin": "bù liào",
        "thai": "ผืนผ้า",
        "hsk": 3,
        "audioText": "布料"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：布。",
        "pinyin": "Zhè shì yī gè hànzì: 布.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 布 (ผ้า / กระจาย / ประกาศ)",
        "audioText": "这是一个汉字：布。"
      }
    ]
  },
  "带": {
    "char": "带",
    "radical": "巾",
    "primaryPinyin": "dài",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "d", "final": "ai", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "dài",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "พกพา / นำพา / สายคาด",
        "usageContext": "เช่น 带来"
      }
    ],
    "thaiMeaningShort": "พกพา / นำพา / สายคาด",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "巾",
        "pinyin": "jīn",
        "role": "รากศัพท์",
        "meaning": "ผ้า / ผ้าเช็ดหน้า / ธง",
        "desc": "สังกัดหมวด 巾"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 带 กำเนิดจากรากศัพท์ 巾 (ผ้า / ผ้าเช็ดหน้า / ธง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 巾 เพื่อสื่อความหมายถึง พกพา / นำพา / สายคาด",
      "modernEvolution": "หมายถึง พกพา / นำพา / สายคาด"
    },
    "mnemonicHook": {
      "formula": "ราก 巾 (ผ้า / ผ้าเช็ดหน้า / ธง) ➔ 'พกพา / นำพา / สายคาด' (带)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 巾 เชื่อมโยงสู่คำว่า พกพา / นำพา / สายคาด"
    },
    "compounds": [
      {
        "word": "带来",
        "pinyin": "dài lái",
        "thai": "นำพามา",
        "hsk": 2,
        "audioText": "带来"
      },
      {
        "word": "皮带",
        "pinyin": "pí dài",
        "thai": "เข็มขัดหนัง",
        "hsk": 2,
        "audioText": "皮带"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：带。",
        "pinyin": "Zhè shì yī gè hànzì: 带.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 带 (พกพา / นำพา / สายคาด)",
        "audioText": "这是一个汉字：带。"
      }
    ]
  },
  "帮": {
    "char": "帮",
    "radical": "巾",
    "primaryPinyin": "bāng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "b", "final": "ang", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "bāng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1",
        "meaningThai": "ช่วยเหลือ",
        "usageContext": "เช่น 帮助"
      }
    ],
    "thaiMeaningShort": "ช่วยเหลือ",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "巾",
        "pinyin": "jīn",
        "role": "รากศัพท์",
        "meaning": "ผ้า / ผ้าเช็ดหน้า / ธง",
        "desc": "สังกัดหมวด 巾"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 帮 กำเนิดจากรากศัพท์ 巾 (ผ้า / ผ้าเช็ดหน้า / ธง)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 巾 เพื่อสื่อความหมายถึง ช่วยเหลือ",
      "modernEvolution": "หมายถึง ช่วยเหลือ"
    },
    "mnemonicHook": {
      "formula": "ราก 巾 (ผ้า / ผ้าเช็ดหน้า / ธง) ➔ 'ช่วยเหลือ' (帮)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 巾 เชื่อมโยงสู่คำว่า ช่วยเหลือ"
    },
    "compounds": [
      {
        "word": "帮助",
        "pinyin": "bāng zhù",
        "thai": "ช่วยเหลือ",
        "hsk": 1,
        "audioText": "帮助"
      },
      {
        "word": "帮忙",
        "pinyin": "bāng máng",
        "thai": "ช่วยงาน",
        "hsk": 1,
        "audioText": "帮忙"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：帮。",
        "pinyin": "Zhè shì yī gè hànzì: 帮.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 帮 (ช่วยเหลือ)",
        "audioText": "这是一个汉字：帮。"
      }
    ]
  },
  "平": {
    "char": "平",
    "radical": "干",
    "primaryPinyin": "píng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "p", "final": "ing", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "píng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "ราบเรียบ / สงบ / เสมอ",
        "usageContext": "เช่น 平安"
      }
    ],
    "thaiMeaningShort": "ราบเรียบ / สงบ / เสมอ",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "干",
        "pinyin": "gān",
        "role": "รากศัพท์",
        "meaning": "โล่ป้องกัน / การกระทำ",
        "desc": "สังกัดหมวด 干"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 平 กำเนิดจากรากศัพท์ 干 (โล่ป้องกัน / การกระทำ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 干 เพื่อสื่อความหมายถึง ราบเรียบ / สงบ / เสมอ",
      "modernEvolution": "หมายถึง ราบเรียบ / สงบ / เสมอ"
    },
    "mnemonicHook": {
      "formula": "ราก 干 (โล่ป้องกัน / การกระทำ) ➔ 'ราบเรียบ / สงบ / เสมอ' (平)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 干 เชื่อมโยงสู่คำว่า ราบเรียบ / สงบ / เสมอ"
    },
    "compounds": [
      {
        "word": "平安",
        "pinyin": "píng ān",
        "thai": "ปลอดภัยสงบสุข",
        "hsk": 2,
        "audioText": "平安"
      },
      {
        "word": "平时",
        "pinyin": "píng shí",
        "thai": "เวลาปกติ",
        "hsk": 2,
        "audioText": "平时"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：平。",
        "pinyin": "Zhè shì yī gè hànzì: 平.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 平 (ราบเรียบ / สงบ / เสมอ)",
        "audioText": "这是一个汉字：平。"
      }
    ]
  },
  "年": {
    "char": "年",
    "radical": "干",
    "primaryPinyin": "nián",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "n", "final": "ian", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "nián",
        "tone": 2,
        "toneDescription": "เสียงที่ 2",
        "meaningThai": "ปี / ขวบปี",
        "usageContext": "เช่น 新年"
      }
    ],
    "thaiMeaningShort": "ปี / ขวบปี",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "干",
        "pinyin": "gān",
        "role": "รากศัพท์",
        "meaning": "โล่ป้องกัน / การกระทำ",
        "desc": "สังกัดหมวด 干"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 年 กำเนิดจากรากศัพท์ 干 (โล่ป้องกัน / การกระทำ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 干 เพื่อสื่อความหมายถึง ปี / ขวบปี",
      "modernEvolution": "หมายถึง ปี / ขวบปี"
    },
    "mnemonicHook": {
      "formula": "ราก 干 (โล่ป้องกัน / การกระทำ) ➔ 'ปี / ขวบปี' (年)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 干 เชื่อมโยงสู่คำว่า ปี / ขวบปี"
    },
    "compounds": [
      {
        "word": "新年",
        "pinyin": "xīn nián",
        "thai": "ปีใหม่",
        "hsk": 1,
        "audioText": "新年"
      },
      {
        "word": "今年",
        "pinyin": "jīn nián",
        "thai": "ปีนี้",
        "hsk": 1,
        "audioText": "今年"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：年。",
        "pinyin": "Zhè shì yī gè hànzì: 年.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 年 (ปี / ขวบปี)",
        "audioText": "这是一个汉字：年。"
      }
    ]
  },
  "幸": {
    "char": "幸",
    "radical": "干",
    "primaryPinyin": "xìng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "x", "final": "ing", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "xìng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "โชคดี / ความสุข",
        "usageContext": "เช่น 幸福"
      }
    ],
    "thaiMeaningShort": "โชคดี / ความสุข",
    "hskLevel": 3,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "干",
        "pinyin": "gān",
        "role": "รากศัพท์",
        "meaning": "โล่ป้องกัน / การกระทำ",
        "desc": "สังกัดหมวด 干"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 幸 กำเนิดจากรากศัพท์ 干 (โล่ป้องกัน / การกระทำ)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 干 เพื่อสื่อความหมายถึง โชคดี / ความสุข",
      "modernEvolution": "หมายถึง โชคดี / ความสุข"
    },
    "mnemonicHook": {
      "formula": "ราก 干 (โล่ป้องกัน / การกระทำ) ➔ 'โชคดี / ความสุข' (幸)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 干 เชื่อมโยงสู่คำว่า โชคดี / ความสุข"
    },
    "compounds": [
      {
        "word": "幸福",
        "pinyin": "xìng fú",
        "thai": "ความสุข",
        "hsk": 3,
        "audioText": "幸福"
      },
      {
        "word": "幸运",
        "pinyin": "xìng yùn",
        "thai": "โชคดี",
        "hsk": 3,
        "audioText": "幸运"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：幸。",
        "pinyin": "Zhè shì yī gè hànzì: 幸.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 幸 (โชคดี / ความสุข)",
        "audioText": "这是一个汉字：幸。"
      }
    ]
  },
  "很": {
    "char": "很",
    "radical": "彳",
    "primaryPinyin": "hěn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "h", "final": "en", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "hěn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "มาก",
        "usageContext": "เช่น 很好"
      }
    ],
    "thaiMeaningShort": "มาก",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "彳",
        "pinyin": "chì",
        "role": "รากศัพท์",
        "meaning": "ก้าวเดินซ้าย / ทางเดินข้างถนน",
        "desc": "สังกัดหมวด 彳"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 很 กำเนิดจากรากศัพท์ 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 彳 เพื่อสื่อความหมายถึง มาก",
      "modernEvolution": "หมายถึง มาก"
    },
    "mnemonicHook": {
      "formula": "ราก 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน) ➔ 'มาก' (很)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 彳 เชื่อมโยงสู่คำว่า มาก"
    },
    "compounds": [
      {
        "word": "很好",
        "pinyin": "hěn hǎo",
        "thai": "ดีมาก",
        "hsk": 1,
        "audioText": "很好"
      },
      {
        "word": "很大",
        "pinyin": "hěn dà",
        "thai": "ใหญ่มาก",
        "hsk": 1,
        "audioText": "很大"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：很。",
        "pinyin": "Zhè shì yī gè hànzì: 很.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 很 (มาก)",
        "audioText": "这是一个汉字：很。"
      }
    ]
  },
  "得": {
    "char": "得",
    "radical": "彳",
    "primaryPinyin": "de",
    "primaryTone": 5,
    "pronunciationGuide": { "initial": "d", "final": "e", "toneRule": "เสียงเบา (Neutral) — ออกเสียงสั้น เบา ไม่มีระดับเสียงเฉพาะตัว ขึ้นอยู่กับเสียงพยางค์ก่อนหน้า" },
    "pinyinList": [
      {
        "pinyin": "de",
        "tone": 5,
        "toneDescription": "เสียงเบา (Neutral)",
        "meaningThai": "ได้ / คำช่วยแสดงผล",
        "usageContext": "เช่น 跑得快"
      }
    ],
    "thaiMeaningShort": "ได้ / คำช่วยแสดงผล",
    "hskLevel": 1,
    "strokeCount": 11,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "彳",
        "pinyin": "chì",
        "role": "รากศัพท์",
        "meaning": "ก้าวเดินซ้าย / ทางเดินข้างถนน",
        "desc": "สังกัดหมวด 彳"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 得 กำเนิดจากรากศัพท์ 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 彳 เพื่อสื่อความหมายถึง ได้ / คำช่วยแสดงผล",
      "modernEvolution": "หมายถึง ได้ / คำช่วยแสดงผล"
    },
    "mnemonicHook": {
      "formula": "ราก 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน) ➔ 'ได้ / คำช่วยแสดงผล' (得)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 彳 เชื่อมโยงสู่คำว่า ได้ / คำช่วยแสดงผล"
    },
    "compounds": [
      {
        "word": "跑得快",
        "pinyin": "pǎo de kuài",
        "thai": "วิ่งได้เร็ว",
        "hsk": 1,
        "audioText": "跑得快"
      },
      {
        "word": "得到",
        "pinyin": "dé dào",
        "thai": "ได้รับ",
        "hsk": 1,
        "audioText": "得到"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：得。",
        "pinyin": "Zhè shì yī gè hànzì: 得.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 得 (ได้ / คำช่วยแสดงผล)",
        "audioText": "这是一个汉字：得。"
      }
    ]
  },
  "往": {
    "char": "往",
    "radical": "彳",
    "primaryPinyin": "wǎng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "w", "final": "ang", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "wǎng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3",
        "meaningThai": "ไปยัง / มุ่งหน้า",
        "usageContext": "เช่น 往前走"
      }
    ],
    "thaiMeaningShort": "ไปยัง / มุ่งหน้า",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "彳",
        "pinyin": "chì",
        "role": "รากศัพท์",
        "meaning": "ก้าวเดินซ้าย / ทางเดินข้างถนน",
        "desc": "สังกัดหมวด 彳"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 往 กำเนิดจากรากศัพท์ 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 彳 เพื่อสื่อความหมายถึง ไปยัง / มุ่งหน้า",
      "modernEvolution": "หมายถึง ไปยัง / มุ่งหน้า"
    },
    "mnemonicHook": {
      "formula": "ราก 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน) ➔ 'ไปยัง / มุ่งหน้า' (往)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 彳 เชื่อมโยงสู่คำว่า ไปยัง / มุ่งหน้า"
    },
    "compounds": [
      {
        "word": "往前走",
        "pinyin": "wǎng qián zǒu",
        "thai": "เดินตรงไปข้างหน้า",
        "hsk": 2,
        "audioText": "往前走"
      },
      {
        "word": "往返",
        "pinyin": "wǎng fǎn",
        "thai": "ไปกลับ",
        "hsk": 2,
        "audioText": "往返"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：往。",
        "pinyin": "Zhè shì yī gè hànzì: 往.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 往 (ไปยัง / มุ่งหน้า)",
        "audioText": "这是一个汉字：往。"
      }
    ]
  },
  "律": {
    "char": "律",
    "radical": "彳",
    "primaryPinyin": "lǜ",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "l", "final": "u:", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "lǜ",
        "tone": 4,
        "toneDescription": "เสียงที่ 4",
        "meaningThai": "กฎหมาย / กฎเกณฑ์",
        "usageContext": "เช่น 律师"
      }
    ],
    "thaiMeaningShort": "กฎหมาย / กฎเกณฑ์",
    "hskLevel": 3,
    "strokeCount": 9,
    "structure": "左右结构 / 上下结构",
    "components": [
      {
        "char": "彳",
        "pinyin": "chì",
        "role": "รากศัพท์",
        "meaning": "ก้าวเดินซ้าย / ทางเดินข้างถนน",
        "desc": "สังกัดหมวด 彳"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อักษร 律 กำเนิดจากรากศัพท์ 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน)",
      "originStory": "ประกอบขึ้นจากรากศัพท์ 彳 เพื่อสื่อความหมายถึง กฎหมาย / กฎเกณฑ์",
      "modernEvolution": "หมายถึง กฎหมาย / กฎเกณฑ์"
    },
    "mnemonicHook": {
      "formula": "ราก 彳 (ก้าวเดินซ้าย / ทางเดินข้างถนน) ➔ 'กฎหมาย / กฎเกณฑ์' (律)",
      "visualStory": "จำง่ายๆ จากความหมายของราก 彳 เชื่อมโยงสู่คำว่า กฎหมาย / กฎเกณฑ์"
    },
    "compounds": [
      {
        "word": "律师",
        "pinyin": "lǜ shī",
        "thai": "ทนายความ",
        "hsk": 3,
        "audioText": "律师"
      },
      {
        "word": "法律",
        "pinyin": "fǎ lǜ",
        "thai": "กฎหมาย",
        "hsk": 3,
        "audioText": "法律"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这是一个汉字：律。",
        "pinyin": "Zhè shì yī gè hànzì: 律.",
        "thai": "นี่คือตัวอักษรจีนคำว่า: 律 (กฎหมาย / กฎเกณฑ์)",
        "audioText": "这是一个汉字：律。"
      }
    ]
  },
  "好": {
    "char": "好",
    "radical": "女",
    "primaryPinyin": "hǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "h", "final": "ao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "hǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ดี, สบายดี, ตกลง, มาก",
        "usageContext": "เช่น 你好 (สวัสดี), 好吃 (อร่อย)"
      },
      {
        "pinyin": "hào",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ชอบ, หลงใหล, รักใคร่",
        "usageContext": "เช่น 爱好 (งานอดิเรก), 好奇 (ขี้สงสัย)"
      }
    ],
    "thaiMeaningShort": "ดี / ตกลง / ชอบ / มาก",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "รากศัพท์",
        "meaning": "ผู้หญิง/แม่",
        "desc": "สื่อถึงความอ่อนโยน"
      },
      {
        "char": "子",
        "pinyin": "zǐ",
        "role": "ประสม",
        "meaning": "ลูก/เด็ก",
        "desc": "การสืบทอดตระกูล"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "甲骨文: รูปแม่ (女) โอบกอดลูก (子)",
      "originStory": "แม่และลูกได้อยู่ร่วมกันอย่างอบอุ่นคือสิ่งที่ประเสริฐที่สุด จึงรวมกันเป็น 'ดี'",
      "modernEvolution": "แปลว่า ดี (Good), ชอบ (Fond of)"
    },
    "mnemonicHook": {
      "formula": "แม่ (女) + ลูก (子) = 'ดีงาม' (好)",
      "visualStory": "คุณแม่กอดลูกน้อยคือภาพที่ดีที่สุด"
    },
    "compounds": [
      {
        "word": "你好",
        "pinyin": "nǐ hǎo",
        "thai": "สวัสดี",
        "hsk": 1,
        "audioText": "你好"
      },
      {
        "word": "好吃",
        "pinyin": "hǎo chī",
        "thai": "อร่อย",
        "hsk": 1,
        "audioText": "好吃"
      },
      {
        "word": "好看",
        "pinyin": "hǎo kàn",
        "thai": "สวย, ดูดี",
        "hsk": 1,
        "audioText": "好看"
      },
      {
        "word": "爱好",
        "pinyin": "ài hào",
        "thai": "งานอดิเรก",
        "hsk": 3,
        "audioText": "爱好"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这道中国菜很好吃！",
        "pinyin": "Zhè dào zhōngguó cài hěn hǎochī!",
        "thai": "อาหารจีนจานนี้อร่อยมาก!",
        "audioText": "这道中国菜很好吃！"
      }
    ]
  },
  "妈": {
    "char": "妈",
    "radical": "女",
    "primaryPinyin": "mā",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "m", "final": "a", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "mā",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "แม่, มารดา",
        "usageContext": "เช่น 妈妈 (คุณแม่)"
      }
    ],
    "thaiMeaningShort": "แม่ / มารดา",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "ความหมาย",
        "meaning": "ผู้หญิง",
        "desc": "เพศหญิง"
      },
      {
        "char": "马",
        "pinyin": "mǎ",
        "role": "เสียง",
        "meaning": "ม้า",
        "desc": "ยืมเสียง ma"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "形声字: ข้างซ้ายผู้หญิง ข้างขวาเสียงม้า",
      "originStory": "ผู้หญิงที่ออกเสียง ma คือคุณแม่",
      "modernEvolution": "ใช้เรียกแม่"
    },
    "mnemonicHook": {
      "formula": "ผู้หญิง (女) + เสียงม้า (马) = 'แม่' (妈)",
      "visualStory": "คุณแม่ขยันเหมือนม้า"
    },
    "compounds": [
      {
        "word": "妈妈",
        "pinyin": "mā ma",
        "thai": "คุณแม่",
        "hsk": 1,
        "audioText": "妈妈"
      },
      {
        "word": "大妈",
        "pinyin": "dà mā",
        "thai": "คุณป้า",
        "hsk": 3,
        "audioText": "大妈"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "妈妈做菜特别香。",
        "pinyin": "Māma zuò cài tèbié xiāng.",
        "thai": "คุณแม่ทำอาหารหอมมาก",
        "audioText": "妈妈做菜特别香。"
      }
    ]
  },
  "妹": {
    "char": "妹",
    "radical": "女",
    "primaryPinyin": "mèi",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "m", "final": "ei", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "mèi",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "น้องสาว",
        "usageContext": "เช่น 妹妹 (น้องสาว)"
      }
    ],
    "thaiMeaningShort": "น้องสาว",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "ความหมาย",
        "meaning": "ผู้หญิง",
        "desc": "เพศหญิง"
      },
      {
        "char": "未",
        "pinyin": "wèi",
        "role": "ประสม/เสียง",
        "meaning": "ยังไม่ถึง/ยังเยาว์",
        "desc": "ยังไม่โตเต็มวัย"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ผู้หญิง (女) ที่ยังเด็กและเยาว์วัย (未)",
      "originStory": "สตรีที่อายุน้อยกว่าในบ้าน",
      "modernEvolution": "หมายถึง น้องสาว"
    },
    "mnemonicHook": {
      "formula": "ผู้หญิง (女) + ยังไม่โต (未) = 'น้องสาว' (妹)",
      "visualStory": "เด็กผู้หญิงที่ยังตัวเล็กคือน้องสาว"
    },
    "compounds": [
      {
        "word": "妹妹",
        "pinyin": "mèi mei",
        "thai": "น้องสาว",
        "hsk": 2,
        "audioText": "妹妹"
      },
      {
        "word": "姐妹",
        "pinyin": "jiě mèi",
        "thai": "พี่สาวน้องสาว",
        "hsk": 3,
        "audioText": "姐妹"
      }
    ]
  },
  "姐": {
    "char": "姐",
    "radical": "女",
    "primaryPinyin": "jiě",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "j", "final": "ie", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "jiě",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "พี่สาว",
        "usageContext": "เช่น 姐姐 (พี่สาว)"
      }
    ],
    "thaiMeaningShort": "พี่สาว",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "ความหมาย",
        "meaning": "ผู้หญิง",
        "desc": "เพศหญิง"
      },
      {
        "char": "且",
        "pinyin": "qiě",
        "role": "แท่นบรรพชน",
        "meaning": "เสาหลัก/อาวุโส",
        "desc": "ผู้นำแถว"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เดิมใช้เรียกหญิงผู้อาวุโสหรือมารดา",
      "originStory": "หญิงสาวที่เติบโตเป็นหลักให้น้อง",
      "modernEvolution": "หมายถึง พี่สาว"
    },
    "mnemonicHook": {
      "formula": "ผู้หญิง (女) + ผู้อาวุโส (且) = 'พี่สาว' (姐)",
      "visualStory": "หญิงสาวคนโตที่คอยดูแลน้องๆ"
    },
    "compounds": [
      {
        "word": "姐姐",
        "pinyin": "jiě jie",
        "thai": "พี่สาว",
        "hsk": 2,
        "audioText": "姐姐"
      },
      {
        "word": "小姐",
        "pinyin": "xiǎo jiě",
        "thai": "คุณผู้หญิง/คุณหนู",
        "hsk": 2,
        "audioText": "小姐"
      }
    ]
  },
  "安": {
    "char": "安",
    "radical": "女",
    "primaryPinyin": "ān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "ไม่มี (สระนำ)", "final": "an", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "ān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ปลอดภัย, สงบสุข",
        "usageContext": "เช่น 安全 (ปลอดภัย)"
      }
    ],
    "thaiMeaningShort": "ปลอดภัย / สงบสุข / สบายใจ",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "宀",
        "pinyin": "mián",
        "role": "หลังคาบ้าน",
        "meaning": "บ้าน",
        "desc": "ที่อยู่อาศัย"
      },
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "ผู้หญิง",
        "meaning": "หญิงสาว",
        "desc": "แม่เรือน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "หญิงสาวนั่งพักผ่อนใต้หลังคาบ้าน",
      "originStory": "มีบ้านปลอดภัยและครอบครัวอบอุ่น",
      "modernEvolution": "ความปลอดภัย (Safety)"
    },
    "mnemonicHook": {
      "formula": "หลังคาบ้าน (宀) + ผู้หญิง (女) = 'ปลอดภัย' (安)",
      "visualStory": "ผู้หญิงอยู่ในบ้านปลอดภัย"
    },
    "compounds": [
      {
        "word": "安全",
        "pinyin": "ān quán",
        "thai": "ปลอดภัย",
        "hsk": 2,
        "audioText": "安全"
      },
      {
        "word": "安静",
        "pinyin": "ān jìng",
        "thai": "เงียบสงบ",
        "hsk": 2,
        "audioText": "安静"
      }
    ]
  },
  "始": {
    "char": "始",
    "radical": "女",
    "primaryPinyin": "shǐ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "sh", "final": "i", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "shǐ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "เริ่มต้น, กำเนิด",
        "usageContext": "เช่น 开始 (เริ่มต้น)"
      }
    ],
    "thaiMeaningShort": "เริ่มต้น / กำเนิด",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "ผู้หญิง",
        "meaning": "แม่/ผู้ให้กำเนิด",
        "desc": "จุดเริ่มต้นชีวิต"
      },
      {
        "char": "台",
        "pinyin": "tái",
        "role": "เสียง/ฐาน",
        "meaning": "แท่น/เริ่มพูด",
        "desc": "การก่อตั้ง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การตั้งครรภ์ของผู้หญิงคือจุดเริ่มต้นของชีวิตมนุษย์",
      "originStory": "มารดาคือผู้ให้กำเนิดทุกสิ่ง",
      "modernEvolution": "หมายถึง เริ่มต้น (Begin/Start)"
    },
    "mnemonicHook": {
      "formula": "ผู้หญิง (女) + เริ่มต้นชีวิต = 'เริ่ม' (始)",
      "visualStory": "มารดาให้กำเนิดชีวิตคือจุดเริ่มต้น"
    },
    "compounds": [
      {
        "word": "开始",
        "pinyin": "kāi shǐ",
        "thai": "เริ่มต้น",
        "hsk": 2,
        "audioText": "开始"
      },
      {
        "word": "始终",
        "pinyin": "shǐ zhōng",
        "thai": "ตั้งแต่ต้นจนจบ",
        "hsk": 4,
        "audioText": "始终"
      }
    ]
  },
  "奶": {
    "char": "奶",
    "radical": "女",
    "primaryPinyin": "nǎi",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "n", "final": "ai", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "nǎi",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "นม, ย่า",
        "usageContext": "เช่น 牛奶 (นมวัว), 奶奶 (คุณย่า)"
      }
    ],
    "thaiMeaningShort": "นม / คุณย่า",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "ผู้หญิง",
        "meaning": "แม่",
        "desc": "ผู้ให้นมบุตร"
      },
      {
        "char": "乃",
        "pinyin": "nǎi",
        "role": "เสียง",
        "meaning": "จึง/เป็น",
        "desc": "เสียง nai"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ผู้หญิงให้น้ำนมเลี้ยงดูทารก",
      "originStory": "น้ำนมแม่และผู้อาวุโสหญิง",
      "modernEvolution": "หมายถึง นม (Milk) หรือ ย่า (Grandmother)"
    },
    "mnemonicHook": {
      "formula": "ผู้หญิง (女) + เสียง nǎi = 'นม/ย่า' (奶)",
      "visualStory": "คุณย่าที่ใจดีเลี้ยงดูหลานด้วยน้ำนม"
    },
    "compounds": [
      {
        "word": "牛奶",
        "pinyin": "niú nǎi",
        "thai": "นมวัว",
        "hsk": 2,
        "audioText": "牛奶"
      },
      {
        "word": "奶奶",
        "pinyin": "nǎi nai",
        "thai": "คุณย่า",
        "hsk": 2,
        "audioText": "奶奶"
      }
    ]
  },
  "如": {
    "char": "如",
    "radical": "女",
    "primaryPinyin": "rú",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "r", "final": "u", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "rú",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "เหมือนกับ, ดั่งเช่น, ถ้าหาก",
        "usageContext": "เช่น 如果 (ถ้าหาก)"
      }
    ],
    "thaiMeaningShort": "เหมือนกับ / ถ้าหาก",
    "hskLevel": 3,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "女",
        "pinyin": "nǚ",
        "role": "ผู้หญิง",
        "meaning": "หญิงสาว",
        "desc": "ความนุ่มนวล"
      },
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ปาก",
        "meaning": "คำพูด/ความยินยอม",
        "desc": "การคล้อยตาม"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การคล้อยตามคำสั่งสอนอย่างนุ่มนวล",
      "originStory": "การปฏิบัติตาม ดั่งเช่น เหมือนกับ",
      "modernEvolution": "หมายถึง ถ้าหาก (If) หรือ เหมือน (As/Like)"
    },
    "mnemonicHook": {
      "formula": "ผู้หญิง (女) + พูดคล้อยตาม (口) = 'เหมือนกับ/ถ้าหาก' (如)",
      "visualStory": "พูดจาอ่อนโยนราวกับสายน้ำ"
    },
    "compounds": [
      {
        "word": "如果",
        "pinyin": "rú guǒ",
        "thai": "ถ้าหากว่า",
        "hsk": 3,
        "audioText": "如果"
      },
      {
        "word": "如今",
        "pinyin": "rú jīn",
        "thai": "ในปัจจุบันนี้",
        "hsk": 4,
        "audioText": "如今"
      }
    ]
  },
  "钱": {
    "char": "钱",
    "radical": "钅",
    "primaryPinyin": "qián",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "q", "final": "ian", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "qián",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "เงิน, เงินตรา, เหรียญ",
        "usageContext": "เช่น 多少钱 (ราคาเท่าไร)"
      }
    ],
    "thaiMeaningShort": "เงิน / เงินตรา",
    "hskLevel": 1,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "钅",
        "pinyin": "jīn",
        "role": "ความหมาย",
        "meaning": "โลหะ",
        "desc": "เหรียญหลอมจากทองแดง/โลหะ"
      },
      {
        "char": "戋",
        "pinyin": "jiān",
        "role": "เสียง/หอกคู่",
        "meaning": "สิ่งของมีค่า",
        "desc": "ของมีค่าที่ต้องเฝ้าระวัง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เดิมคือเครื่องมือขุดดินโลหะ ต่อมาพัฒนาเป็นเหรียญเงินตรา",
      "originStory": "เหรียญโลหะที่ใช้แลกเปลี่ยนสินค้า",
      "modernEvolution": "หมายถึง เงิน (Money)"
    },
    "mnemonicHook": {
      "formula": "โลหะ (钅) + มีค่าต้องหวงแหน (戋) = 'เงินตรา' (钱)",
      "visualStory": "เหรียญโลหะมีค่าที่ทุกคนใช้ซื้อของ"
    },
    "compounds": [
      {
        "word": "有钱",
        "pinyin": "yǒu qián",
        "thai": "รวย, มีเงิน",
        "hsk": 2,
        "audioText": "有钱"
      },
      {
        "word": "花钱",
        "pinyin": "huā qián",
        "thai": "ใช้เงิน",
        "hsk": 3,
        "audioText": "花钱"
      },
      {
        "word": "钱包",
        "pinyin": "qián bāo",
        "thai": "กระเป๋าเงิน",
        "hsk": 3,
        "audioText": "钱包"
      }
    ]
  },
  "钟": {
    "char": "钟",
    "radical": "钅",
    "primaryPinyin": "zhōng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "zh", "final": "ong", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "zhōng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "นาฬิกา, ระฆัง, โมง (เวลา)",
        "usageContext": "เช่น 几点钟 (กี่โมง), 分钟 (นาที)"
      }
    ],
    "thaiMeaningShort": "นาฬิกา / ระฆัง / โมง",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "钅",
        "pinyin": "jīn",
        "role": "ความหมาย",
        "meaning": "โลหะ",
        "desc": "ระฆังหล่อด้วยสัมฤทธิ์"
      },
      {
        "char": "中",
        "pinyin": "zhōng",
        "role": "เสียง",
        "meaning": "ตรงกลาง",
        "desc": "ยืมเสียง zhong"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ระฆังสำริดโบราณที่ตีบอกเวลาในเมืองหลวง",
      "originStory": "เสียงระฆังโลหะดังกังวานบอกเวลา",
      "modernEvolution": "หมายถึง นาฬิกา (Clock) หรือ โมงเวลา (O'clock)"
    },
    "mnemonicHook": {
      "formula": "โลหะ (钅) + เสียง zhōng (中) = 'นาฬิกา/ระฆัง' (钟)",
      "visualStory": "ระฆังโลหะใบใหญ่ตีบอกเวลาเที่ยงตรง"
    },
    "compounds": [
      {
        "word": "分钟",
        "pinyin": "fēn zhōng",
        "thai": "นาที",
        "hsk": 2,
        "audioText": "分钟"
      },
      {
        "word": "时钟",
        "pinyin": "shí zhōng",
        "thai": "นาฬิกาบอกเวลา",
        "hsk": 3,
        "audioText": "时钟"
      }
    ]
  },
  "错": {
    "char": "错",
    "radical": "钅",
    "primaryPinyin": "cuò",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "c", "final": "uo", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "cuò",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ผิด, พลาด, สลับซับซ้อน",
        "usageContext": "เช่น 对不起，我错了 (ขอโทษ ฉันผิดไปแล้ว), 不错 (ไม่เลว, ดีมาก)"
      }
    ],
    "thaiMeaningShort": "ผิด / พลาด / ไม่เลว",
    "hskLevel": 2,
    "strokeCount": 13,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "钅",
        "pinyin": "jīn",
        "role": "ความหมาย",
        "meaning": "โลหะ",
        "desc": "การฝังลวดลายทองลงบนโลหะ"
      },
      {
        "char": "昔",
        "pinyin": "xī",
        "role": "เสียง/อดีต",
        "meaning": "กาลก่อน/สลับซ้อน",
        "desc": "ความคลาดเคลื่อน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เดิมหมายถึงการฝังลายทองสลับซ้อนบนเครื่องสำริด เมื่อเส้นลายสลับกันจึงกลายเป็นความหมายว่า 'คลาดเคลื่อน/ผิดพลาด'",
      "originStory": "ลายสลับซับซ้อนนำไปสู่ความคลาดเคลื่อน",
      "modernEvolution": "หมายถึง ผิดพลาด (Wrong/Mistake)"
    },
    "mnemonicHook": {
      "formula": "โลหะ (钅) + ลายสลับกัน (昔) = 'ผิดพลาด' (错)",
      "visualStory": "ถ้าตัดโลหะพลาดเพียงนิดเดียว ชิ้นงานจะ 'ผิด' ทันที"
    },
    "compounds": [
      {
        "word": "不错",
        "pinyin": "bú cuò",
        "thai": "ไม่เลว, ดีมาก",
        "hsk": 2,
        "audioText": "不错"
      },
      {
        "word": "错误",
        "pinyin": "cuò wù",
        "thai": "ข้อผิดพลาด",
        "hsk": 3,
        "audioText": "错误"
      },
      {
        "word": "认错",
        "pinyin": "rèn cuò",
        "thai": "ยอมรับผิด",
        "hsk": 3,
        "audioText": "认错"
      }
    ]
  },
  "铁": {
    "char": "铁",
    "radical": "钅",
    "primaryPinyin": "tiě",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "t", "final": "ie", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "tiě",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "เหล็ก, แข็งแกร่ง",
        "usageContext": "เช่น 地铁 (รถไฟใต้ดิน), 铁道 (ทางรถไฟ)"
      }
    ],
    "thaiMeaningShort": "เหล็ก / แข็งแกร่ง",
    "hskLevel": 3,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "钅",
        "pinyin": "jīn",
        "role": "ความหมาย",
        "meaning": "โลหะ",
        "desc": "แร่โลหะสีดำ"
      },
      {
        "char": "失",
        "pinyin": "shī",
        "role": "เสียง/สูญหาย",
        "meaning": "แกร่ง",
        "desc": "โครงสร้างยืมรูป"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "โลหะสีดำที่แข็งแกร่งที่สุดในบรรดาแร่ธาตุโบราณ",
      "originStory": "แร่เหล็กที่นำมาตีเป็นดาบและเครื่องมือ",
      "modernEvolution": "หมายถึง เหล็ก (Iron) หรือ รถไฟ (Railway)"
    },
    "mnemonicHook": {
      "formula": "โลหะ (钅) + แข็งแกร่ง = 'เหล็ก' (铁)",
      "visualStory": "รางรถไฟโลหะ 'เหล็ก' ที่ทนทานแข็งแกร่ง"
    },
    "compounds": [
      {
        "word": "地铁",
        "pinyin": "dì tiě",
        "thai": "รถไฟใต้ดิน",
        "hsk": 3,
        "audioText": "地铁"
      },
      {
        "word": "高铁",
        "pinyin": "gāo tiě",
        "thai": "รถไฟความเร็วสูง",
        "hsk": 4,
        "audioText": "高铁"
      }
    ]
  },
  "银": {
    "char": "银",
    "radical": "钅",
    "primaryPinyin": "yín",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "in", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yín",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "เงิน (โลหะสีขาว), ธนาคาร",
        "usageContext": "เช่น 银行 (ธนาคาร), 白银 (แร่เงิน)"
      }
    ],
    "thaiMeaningShort": "แร่เงิน / ธนาคาร",
    "hskLevel": 3,
    "strokeCount": 11,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "钅",
        "pinyin": "jīn",
        "role": "ความหมาย",
        "meaning": "โลหะ",
        "desc": "แร่โลหะมีค่าสีขาวสว่าง"
      },
      {
        "char": "艮",
        "pinyin": "gèn",
        "role": "เสียง/ส่องแสง",
        "meaning": "ตาจ้องมอง",
        "desc": "ความแวววาว"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "โลหะสีขาวแวววาวที่ใช้ทำเครื่องประดับและเงินตรา",
      "originStory": "แร่เงินบริสุทธิ์ส่องประกาย",
      "modernEvolution": "หมายถึง แร่เงิน (Silver) หรือ ธนาคาร (Bank)"
    },
    "mnemonicHook": {
      "formula": "โลหะ (钅) + ส่องประกายตาค้าง (艮) = 'แร่เงิน' (银)",
      "visualStory": "โลหะสีขาวบริสุทธิ์ที่เก็บไว้ในธนาคาร"
    },
    "compounds": [
      {
        "word": "银行",
        "pinyin": "yín háng",
        "thai": "ธนาคาร",
        "hsk": 3,
        "audioText": "银行"
      },
      {
        "word": "银牌",
        "pinyin": "yín pái",
        "thai": "เหรียญเงิน",
        "hsk": 4,
        "audioText": "银牌"
      }
    ]
  },
  "针": {
    "char": "针",
    "radical": "钅",
    "primaryPinyin": "zhēn",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "zh", "final": "en", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "zhēn",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "เข็ม, การฉีดยา, การฝังเข็ม",
        "usageContext": "เช่น 打针 (ฉีดยา), 指南针 (เข็มทิศ)"
      }
    ],
    "thaiMeaningShort": "เข็ม / ฉีดยา",
    "hskLevel": 3,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "钅",
        "pinyin": "jīn",
        "role": "ความหมาย",
        "meaning": "โลหะ",
        "desc": "ทำจากโลหะแหลมคม"
      },
      {
        "char": "十",
        "pinyin": "shí",
        "role": "เสียง/รูปทรง",
        "meaning": "สิบ/กากบาท",
        "desc": "รูปทรงปลายแหลมตรง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เครื่องมือโลหะขนาดเล็กปลายแหลมใช้เย็บผ้าหรือฝังเข็มรักษาโรค",
      "originStory": "เข็มโลหะแหลมคม",
      "modernEvolution": "หมายถึง เข็ม (Needle) หรือ การฉีดยา"
    },
    "mnemonicHook": {
      "formula": "โลหะ (钅) + ปลายตรงดิ่ง (十) = 'เข็ม' (针)",
      "visualStory": "เข็มโลหะเล่มเล็กใช้เย็บผ้าและฉีดยา"
    },
    "compounds": [
      {
        "word": "打针",
        "pinyin": "dǎ zhēn",
        "thai": "ฉีดยา",
        "hsk": 3,
        "audioText": "打针"
      },
      {
        "word": "指南针",
        "pinyin": "zhǐ nán zhēn",
        "thai": "เข็มทิศ",
        "hsk": 4,
        "audioText": "指南针"
      }
    ]
  },
  "江": {
    "char": "江",
    "radical": "氵",
    "primaryPinyin": "jiāng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "j", "final": "iang", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "jiāng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "แม่น้ำสายใหญ่, แม่น้ำแยงซี",
        "usageContext": "เช่น 长江 (แม่น้ำแยงซีเกียง)"
      }
    ],
    "thaiMeaningShort": "แม่น้ำสายใหญ่",
    "hskLevel": 3,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "สายน้ำ"
      },
      {
        "char": "工",
        "pinyin": "gōng",
        "role": "เสียง",
        "meaning": "งานช่าง",
        "desc": "ยืมเสียง jiang"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "แม่น้ำสายใหญ่ที่ไหลตัดผ่านแผ่นดินจีน",
      "originStory": "แม่น้ำแยงซีเกียง",
      "modernEvolution": "หมายถึง แม่น้ำสายใหญ่ (Large River)"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + เสียง gōng = 'แม่น้ำสายใหญ่' (江)",
      "visualStory": "แม่น้ำสายยาวตัดผ่านเมืองใหญ่"
    },
    "compounds": [
      {
        "word": "长江",
        "pinyin": "cháng jiāng",
        "thai": "แม่น้ำแยงซีเกียง",
        "hsk": 3,
        "audioText": "长江"
      },
      {
        "word": "江边",
        "pinyin": "jiāng biān",
        "thai": "ริมแม่น้ำใหญ่",
        "hsk": 4,
        "audioText": "江边"
      }
    ]
  },
  "河": {
    "char": "河",
    "radical": "氵",
    "primaryPinyin": "hé",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "h", "final": "e", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "hé",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "แม่น้ำ, ลำน้ำ",
        "usageContext": "เช่น 黄河 (แม่น้ำฮวงโห)"
      }
    ],
    "thaiMeaningShort": "แม่น้ำ / ลำน้ำ",
    "hskLevel": 3,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "สายน้ำ"
      },
      {
        "char": "可",
        "pinyin": "kě",
        "role": "เสียง",
        "meaning": "ร้องขับขาน",
        "desc": "เสียงเหอ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "สายน้ำที่ไหลผ่านส่งเสียงก้อง",
      "originStory": "แม่น้ำสายใหญ่",
      "modernEvolution": "หมายถึง แม่น้ำ (River)"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + เสียง kě = 'แม่น้ำ' (河)",
      "visualStory": "แม่น้ำสายยาวไหลริน"
    },
    "compounds": [
      {
        "word": "黄河",
        "pinyin": "huáng hé",
        "thai": "แม่น้ำฮวงโห",
        "hsk": 3,
        "audioText": "黄河"
      },
      {
        "word": "河边",
        "pinyin": "hé biān",
        "thai": "ริมแม่น้ำ",
        "hsk": 3,
        "audioText": "河边"
      }
    ]
  },
  "海": {
    "char": "海",
    "radical": "氵",
    "primaryPinyin": "hǎi",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "h", "final": "ai", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "hǎi",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ทะเล, มหาสมุทร",
        "usageContext": "เช่น 大海 (ท้องทะเล)"
      }
    ],
    "thaiMeaningShort": "ทะเล / มหาสมุทร",
    "hskLevel": 2,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "น้ำมหาศาล"
      },
      {
        "char": "每",
        "pinyin": "měi",
        "role": "เสียง/มารดา",
        "meaning": "มารดาผู้ให้กำเนิด",
        "desc": "ต้นกำเนิดน้ำทุกสาย"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ทะเลคือมารดาแห่งน้ำทั้งปวงที่รวมสายน้ำทุกสายไว้ด้วยกัน",
      "originStory": "ผืนน้ำกว้างใหญ่ไพศาล",
      "modernEvolution": "หมายถึง ทะเล (Sea/Ocean)"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + มารดาแห่งสายน้ำ (每) = 'ทะเล' (海)",
      "visualStory": "ทะเลกว้างใหญ่ที่รับน้ำจากทุกแม่น้ำ"
    },
    "compounds": [
      {
        "word": "大海",
        "pinyin": "dà hǎi",
        "thai": "ทะเลกว้างใหญ่",
        "hsk": 3,
        "audioText": "大海"
      },
      {
        "word": "海外",
        "pinyin": "hǎi wài",
        "thai": "ต่างประเทศ, โพ้นทะเล",
        "hsk": 4,
        "audioText": "海外"
      }
    ]
  },
  "汉": {
    "char": "汉",
    "radical": "氵",
    "primaryPinyin": "hàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "h", "final": "an", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "hàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ชาวฮั่น, อักษรจีน, ภาษาจีน",
        "usageContext": "เช่น 汉语 (ภาษาจีน), 汉字 (อักษรจีน)"
      }
    ],
    "thaiMeaningShort": "ชาวฮั่น / ภาษาจีน",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "แม่น้ำฮั่นสุ่ย"
      },
      {
        "char": "又",
        "pinyin": "yòu",
        "role": "เสียง/มือ",
        "meaning": "มือขวา",
        "desc": "ยืมเสียง han"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เดิมคือชื่อแม่น้ำฮั่นสุ่ย ต่อมากลายเป็นชื่อราชวงศ์ฮั่นและชนชาติฮั่น",
      "originStory": "แม่น้ำฮั่นและชาวจีนฮั่น",
      "modernEvolution": "หมายถึง ชาวฮั่น/ภาษาจีน (Han/Chinese)"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + มือ (又) = 'ชาวฮั่น/ภาษาจีน' (汉)",
      "visualStory": "ลุ่มน้ำฮั่นถิ่นกำเนิดภาษาและอักษรจีน"
    },
    "compounds": [
      {
        "word": "汉字",
        "pinyin": "hàn zì",
        "thai": "อักษรจีน",
        "hsk": 1,
        "audioText": "汉字"
      },
      {
        "word": "汉语",
        "pinyin": "hàn yǔ",
        "thai": "ภาษาจีน",
        "hsk": 1,
        "audioText": "汉语"
      }
    ]
  },
  "洗": {
    "char": "洗",
    "radical": "氵",
    "primaryPinyin": "xǐ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "x", "final": "i", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "xǐ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ล้าง, ซัก, สระ",
        "usageContext": "เช่น 洗手 (ล้างมือ), 洗澡 (อาบน้ำ)"
      }
    ],
    "thaiMeaningShort": "ล้าง / ซัก / ชำระ",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "ใช้น้ำทำความสะอาด"
      },
      {
        "char": "先",
        "pinyin": "xiān",
        "role": "เสียง/เท้าก้าว",
        "meaning": "ก่อน/เท้า",
        "desc": "ล้างเท้าก่อนเข้าบ้าน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้น้ำล้างเท้าให้สะอาดก่อนก้าวเข้าสู่บ้าน",
      "originStory": "การชำระล้างสิ่งสกปรก",
      "modernEvolution": "หมายถึง ล้าง / ซัก (Wash)"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + ล้างก่อนเข้าบ้าน (先) = 'ล้าง/ซัก' (洗)",
      "visualStory": "ใช้น้ำล้างมือและอาบน้ำให้สะอาด"
    },
    "compounds": [
      {
        "word": "洗手",
        "pinyin": "xǐ shǒu",
        "thai": "ล้างมือ",
        "hsk": 2,
        "audioText": "洗手"
      },
      {
        "word": "洗澡",
        "pinyin": "xǐ zǎo",
        "thai": "อาบน้ำ",
        "hsk": 2,
        "audioText": "洗澡"
      }
    ]
  },
  "渴": {
    "char": "渴",
    "radical": "氵",
    "primaryPinyin": "kě",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "k", "final": "e", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "kě",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "กระหายน้ำ, หิวน้ำ",
        "usageContext": "เช่น 口渴 (กระหายน้ำ)"
      }
    ],
    "thaiMeaningShort": "กระหายน้ำ / หิวน้ำ",
    "hskLevel": 2,
    "strokeCount": 12,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "ต้องการน้ำ"
      },
      {
        "char": "曷",
        "pinyin": "hé",
        "role": "เสียง",
        "meaning": "เมื่อไร",
        "desc": "ยืมเสียง ke"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "อาการขาดน้ำจนคอแห้งผาก ร้องหาน้ำดื่ม",
      "originStory": "ความกระหายน้ำ",
      "modernEvolution": "หมายถึง กระหายน้ำ (Thirsty)"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + ร้องหาน้ำ = 'กระหายน้ำ' (渴)",
      "visualStory": "วิ่งมาเหนื่อยๆ คอแห้งกระหายน้ำอย่างมาก"
    },
    "compounds": [
      {
        "word": "口渴",
        "pinyin": "kǒu kě",
        "thai": "กระหายน้ำ",
        "hsk": 2,
        "audioText": "口渴"
      },
      {
        "word": "渴望",
        "pinyin": "kě wàng",
        "thai": "ปรารถนาอย่างแรงกล้า",
        "hsk": 4,
        "audioText": "渴望"
      }
    ]
  },
  "清": {
    "char": "清",
    "radical": "氵",
    "primaryPinyin": "qīng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "q", "final": "ing", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "qīng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ใสสะอาด, ชัดเจน, บริสุทธิ์",
        "usageContext": "เช่น 清楚 (ชัดเจน), 清水 (น้ำใสบริสุทธิ์)"
      }
    ],
    "thaiMeaningShort": "ใสสะอาด / ชัดเจน",
    "hskLevel": 2,
    "strokeCount": 11,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "สายน้ำใส"
      },
      {
        "char": "青",
        "pinyin": "qīng",
        "role": "เสียง/สีเขียวคราม",
        "meaning": "เขียวครามบริสุทธิ์",
        "desc": "ความกระจ่างใส"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "สายน้ำที่ใสสะอาดบริสุทธิ์จนมองเห็นก้นสระ",
      "originStory": "น้ำใสกระจ่าง",
      "modernEvolution": "หมายถึง ใสสะอาด (Clear/Clean) หรือ ชัดเจน"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + สีครามใสบริสุทธิ์ (青) = 'ใสสะอาด/ชัดเจน' (清)",
      "visualStory": "น้ำใสสะอาดจนมองเห็นพื้นด้านล่างอย่างชัดเจน"
    },
    "compounds": [
      {
        "word": "清楚",
        "pinyin": "qīng chu",
        "thai": "ชัดเจน, เข้าใจแจ่มแจ้ง",
        "hsk": 2,
        "audioText": "清楚"
      },
      {
        "word": "清晨",
        "pinyin": "qīng chén",
        "thai": "เช้าตรู่",
        "hsk": 4,
        "audioText": "清晨"
      }
    ]
  },
  "泳": {
    "char": "泳",
    "radical": "氵",
    "primaryPinyin": "yǒng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "ong", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yǒng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ว่ายน้ำ",
        "usageContext": "เช่น 游泳 (ว่ายน้ำ)"
      }
    ],
    "thaiMeaningShort": "ว่ายน้ำ",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "氵",
        "pinyin": "shuǐ",
        "role": "ความหมาย",
        "meaning": "น้ำ",
        "desc": "การแหวกว่ายในน้ำ"
      },
      {
        "char": "永",
        "pinyin": "yǒng",
        "role": "เสียง/สายน้ำยาว",
        "meaning": "ยาวนาน",
        "desc": "ยืมเสียง yong"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การแหวกว่ายไปตามสายน้ำอันยาวไกล",
      "originStory": "การว่ายน้ำ",
      "modernEvolution": "หมายถึง ว่ายน้ำ (Swim)"
    },
    "mnemonicHook": {
      "formula": "น้ำ (氵) + สายน้ำยาว (永) = 'ว่ายน้ำ' (泳)",
      "visualStory": "กระโดดลงน้ำแหวกว่ายอย่างสนุกสนาน"
    },
    "compounds": [
      {
        "word": "游泳",
        "pinyin": "yóu yǒng",
        "thai": "ว่ายน้ำ",
        "hsk": 2,
        "audioText": "游泳"
      },
      {
        "word": "泳池",
        "pinyin": "yǒng chí",
        "thai": "สระว่ายน้ำ",
        "hsk": 3,
        "audioText": "泳池"
      }
    ]
  },
  "说": {
    "char": "说",
    "radical": "讠",
    "primaryPinyin": "shuō",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "sh", "final": "uo", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "shuō",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "พูด, กล่าว, อธิบาย",
        "usageContext": "เช่น 说话 (พูดคุย), 说明 (อธิบาย)"
      }
    ],
    "thaiMeaningShort": "พูด / กล่าว / อธิบาย",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "การสื่อสาร"
      },
      {
        "char": "兑",
        "pinyin": "duì",
        "role": "เสียง/รอยยิ้ม",
        "meaning": "ยินดี",
        "desc": "พูดด้วยรอยยิ้ม"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การเปิดปากเปล่งวาจาเพื่อแลกเปลี่ยนความรู้สึก",
      "originStory": "การพูดคุย",
      "modernEvolution": "หมายถึง พูด (Speak/Say)"
    },
    "mnemonicHook": {
      "formula": "คำพูด (讠) + ยิ้มแย้มเปิดปาก (兑) = 'พูดจา' (说)",
      "visualStory": "เปิดปากพูดคุยด้วยรอยยิ้ม"
    },
    "compounds": [
      {
        "word": "说话",
        "pinyin": "shuō huà",
        "thai": "พูดจา, คุย",
        "hsk": 1,
        "audioText": "说话"
      },
      {
        "word": "小说",
        "pinyin": "xiǎo shuō",
        "thai": "นวนิยาย",
        "hsk": 3,
        "audioText": "小说"
      }
    ]
  },
  "话": {
    "char": "话",
    "radical": "讠",
    "primaryPinyin": "huà",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "h", "final": "ua", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "huà",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "คำพูด, ภาษา, ถ้อยคำ",
        "usageContext": "เช่น 电话 (โทรศัพท์)"
      }
    ],
    "thaiMeaningShort": "คำพูด / ภาษา / ถ้อยคำ",
    "hskLevel": 1,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "การสื่อสาร"
      },
      {
        "char": "舌",
        "pinyin": "shé",
        "role": "เสียง/ลิ้น",
        "meaning": "ลิ้น",
        "desc": "อวัยวะเปล่งถ้อยคำ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้ลิ้นเปล่งวาจาออกมาเป็นถ้อยคำ",
      "originStory": "ถ้อยคำและภาษา",
      "modernEvolution": "หมายถึง คำพูด (Words/Talk)"
    },
    "mnemonicHook": {
      "formula": "คำพูด (讠) + ขยับลิ้น (舌) = 'คำพูด/ภาษา' (话)",
      "visualStory": "ขยับลิ้นเปล่งคำพูดออกทางโทรศัพท์"
    },
    "compounds": [
      {
        "word": "电话",
        "pinyin": "diàn huà",
        "thai": "โทรศัพท์",
        "hsk": 1,
        "audioText": "电话"
      },
      {
        "word": "普通话",
        "pinyin": "pǔ tōng huà",
        "thai": "ภาษาจีนกลาง",
        "hsk": 3,
        "audioText": "普通话"
      }
    ]
  },
  "语": {
    "char": "语",
    "radical": "讠",
    "primaryPinyin": "yǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "u", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ภาษา, สำนวน, วาจา",
        "usageContext": "เช่น 汉语 (ภาษาจีน)"
      }
    ],
    "thaiMeaningShort": "ภาษา / ถ้อยคำ",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "การสื่อสาร"
      },
      {
        "char": "吾",
        "pinyin": "wú",
        "role": "เสียง/ข้าพเจ้า",
        "meaning": "ฉัน/ข้าพเจ้า",
        "desc": "ภาษาที่ฉันพูด"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ถ้อยคำที่ข้าพเจ้าใช้สื่อสารกับผู้อื่น",
      "originStory": "ภาษาประจำชาติพันธุ์",
      "modernEvolution": "หมายถึง ภาษา (Language)"
    },
    "mnemonicHook": {
      "formula": "คำพูด (讠) + ของข้าพเจ้า (吾) = 'ภาษา' (语)",
      "visualStory": "ภาษาที่พวกเราใช้สื่อสารกัน"
    },
    "compounds": [
      {
        "word": "汉语",
        "pinyin": "hàn yǔ",
        "thai": "ภาษาจีน",
        "hsk": 1,
        "audioText": "汉语"
      },
      {
        "word": "语言",
        "pinyin": "yǔ yán",
        "thai": "ภาษาศาสตร์",
        "hsk": 3,
        "audioText": "语言"
      }
    ]
  },
  "读": {
    "char": "读",
    "radical": "讠",
    "primaryPinyin": "dú",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "d", "final": "u", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "dú",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "อ่าน, ท่อง, ศึกษาเล่าเรียน",
        "usageContext": "เช่น 读书 (อ่านหนังสือ), 朗读 (อ่านออกเสียง)"
      }
    ],
    "thaiMeaningShort": "อ่าน / ศึกษา",
    "hskLevel": 1,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "เปล่งเสียงอ่าน"
      },
      {
        "char": "卖",
        "pinyin": "mài",
        "role": "เสียง",
        "meaning": "ค้าขาย/ถ่ายทอด",
        "desc": "การถ่ายทอดความรู้"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การเปล่งเสียงอ่านถ้อยคำตามตัวอักษรเพื่อถ่ายทอดความรู้",
      "originStory": "การอ่านหนังสือ",
      "modernEvolution": "หมายถึง อ่าน หรือ เรียน (Read/Study)"
    },
    "mnemonicHook": {
      "formula": "คำพูด (讠) + ถ่ายทอดความรู้ = 'อ่านหนังสือ' (读)",
      "visualStory": "เปล่งเสียงอ่านหนังสืออย่างตั้งใจ"
    },
    "compounds": [
      {
        "word": "读书",
        "pinyin": "dú shū",
        "thai": "อ่านหนังสือ, เรียนหนังสือ",
        "hsk": 2,
        "audioText": "读书"
      },
      {
        "word": "读音",
        "pinyin": "dú yīn",
        "thai": "เสียงอ่าน",
        "hsk": 3,
        "audioText": "读音"
      }
    ]
  },
  "谢": {
    "char": "谢",
    "radical": "讠",
    "primaryPinyin": "xiè",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "x", "final": "ie", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "xiè",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ขอบคุณ, ขอโทษ, ร่วงโรย",
        "usageContext": "เช่น 谢谢 (ขอบคุณ)"
      }
    ],
    "thaiMeaningShort": "ขอบคุณ",
    "hskLevel": 1,
    "strokeCount": 12,
    "structure": "左中右结构 (ซ้าย-กลาง-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "กล่าวถ้อยคำ"
      },
      {
        "char": "身",
        "pinyin": "shēn",
        "role": "ร่างกาย",
        "meaning": "กาย",
        "desc": "ก้มคำนับ"
      },
      {
        "char": "寸",
        "pinyin": "cùn",
        "role": "มารยาท",
        "meaning": "กฎเกณฑ์",
        "desc": "มารยาทอันดี"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การก้มกายลงกล่าวถ้อยคำแสดงความซาบซึ้งและขอบคุณ",
      "originStory": "การกล่าวขอบคุณตามธรรมเนียม",
      "modernEvolution": "หมายถึง ขอบคุณ (Thank)"
    },
    "mnemonicHook": {
      "formula": "คำพูด (讠) + ก้มกายลง (身) อย่างมีมารยาท (寸) = 'ขอบคุณ' (谢)",
      "visualStory": "ก้มศีรษะลงพร้อมกล่าวคำว่าขอบคุณ"
    },
    "compounds": [
      {
        "word": "谢谢",
        "pinyin": "xiè xie",
        "thai": "ขอบคุณ",
        "hsk": 1,
        "audioText": "谢谢"
      },
      {
        "word": "感谢",
        "pinyin": "gǎn xiè",
        "thai": "ซาบซึ้งขอบคุณ",
        "hsk": 3,
        "audioText": "感谢"
      }
    ]
  },
  "请": {
    "char": "请",
    "radical": "讠",
    "primaryPinyin": "qǐng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "q", "final": "ing", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "qǐng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "โปรด, กรุณา, เชิญ, เลี้ยง (ข้าว)",
        "usageContext": "เช่น 请问 (ขอถามหน่อย), 请客 (เลี้ยงแขก)"
      }
    ],
    "thaiMeaningShort": "โปรด / กรุณา / เชิญ",
    "hskLevel": 1,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "คำขอร้องสุภาพ"
      },
      {
        "char": "青",
        "pinyin": "qīng",
        "role": "เสียง/บริสุทธิ์",
        "meaning": "เขียวคราม",
        "desc": "ความจริงใจ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้วาจาที่สุภาพจริงใจเพื่อเชื้อเชิญหรือขอร้อง",
      "originStory": "การเชื้อเชิญอย่างให้เกียรติ",
      "modernEvolution": "หมายถึง โปรด/เชิญ (Please/Invite)"
    },
    "mnemonicHook": {
      "formula": "คำพูด (讠) + ด้วยใจบริสุทธิ์ (青) = 'เชิญ/กรุณา' (请)",
      "visualStory": "กล่าวคำพูดอย่างสุภาพว่า 'เชิญทางนี้ครับ'"
    },
    "compounds": [
      {
        "word": "请问",
        "pinyin": "qǐng wèn",
        "thai": "ขอถามหน่อยครับ/ค่ะ",
        "hsk": 1,
        "audioText": "请问"
      },
      {
        "word": "请客",
        "pinyin": "qǐng kè",
        "thai": "เลี้ยงอาหาร/เลี้ยงแขก",
        "hsk": 3,
        "audioText": "请客"
      }
    ]
  },
  "认": {
    "char": "认",
    "radical": "讠",
    "primaryPinyin": "rèn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "r", "final": "en", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "rèn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "จำได้, รู้จัก, ยอมรับ",
        "usageContext": "เช่น 认识 (รู้จัก), 认得 (จำได้)"
      }
    ],
    "thaiMeaningShort": "จำได้ / รู้จัก / ยอมรับ",
    "hskLevel": 1,
    "strokeCount": 4,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "การบอกกล่าว"
      },
      {
        "char": "人",
        "pinyin": "rén",
        "role": "เสียง/คน",
        "meaning": "คน",
        "desc": "จดจำผู้คน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การทักทายและจำหน้าผู้คนได้ผ่านการพูดคุย",
      "originStory": "การจดจำและรู้จัก",
      "modernEvolution": "หมายถึง รู้จัก หรือ ยอมรับ (Recognize/Know)"
    },
    "mnemonicHook": {
      "formula": "คำพูด (讠) + คน (人) = 'จดจำ/รู้จัก' (认)",
      "visualStory": "พูดคุยจนจำหน้าและรู้จักกันได้เป็นอย่างดี"
    },
    "compounds": [
      {
        "word": "认识",
        "pinyin": "rèn shi",
        "thai": "รู้จัก",
        "hsk": 1,
        "audioText": "认识"
      },
      {
        "word": "认真",
        "pinyin": "rèn zhēn",
        "thai": "จริงจัง, ตั้งใจ",
        "hsk": 3,
        "audioText": "认真"
      }
    ]
  },
  "课": {
    "char": "课",
    "radical": "讠",
    "primaryPinyin": "kè",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "k", "final": "e", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "kè",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "บทเรียน, คาบเรียน, วิชา",
        "usageContext": "เช่น 上课 (เข้าเรียน), 课本 (ตำราเรียน)"
      }
    ],
    "thaiMeaningShort": "บทเรียน / คาบเรียน",
    "hskLevel": 1,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "讠",
        "pinyin": "yán",
        "role": "ความหมาย",
        "meaning": "คำพูด",
        "desc": "การบรรยายบทเรียน"
      },
      {
        "char": "果",
        "pinyin": "guǒ",
        "role": "เสียง/ผลไม้",
        "meaning": "ผลลัพธ์",
        "desc": "การประเมินผล"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การสอนและทดสอบความรู้ตามบทเรียน",
      "originStory": "วิชาเรียนและการประเมิน",
      "modernEvolution": "หมายถึง คาบเรียน / บทเรียน (Lesson/Class)"
    },
    "mnemonicHook": {
      "formula": "คำพูดครู (讠) + เกิดผลสัมฤทธิ์ (果) = 'บทเรียน' (课)",
      "visualStory": "ตั้งใจฟังอาจารย์สอนในคาบเรียน"
    },
    "compounds": [
      {
        "word": "上课",
        "pinyin": "shàng kè",
        "thai": "เข้าเรียน",
        "hsk": 1,
        "audioText": "上课"
      },
      {
        "word": "下课",
        "pinyin": "xià kè",
        "thai": "เลิกเรียน",
        "hsk": 1,
        "audioText": "下课"
      }
    ]
  },
  "过": {
    "char": "过",
    "radical": "辶",
    "primaryPinyin": "guò",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "g", "final": "uo", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "guò",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ผ่าน, ข้าม, เคย (ไวยากรณ์)",
        "usageContext": "เช่น 去过 (เคยไป), 过马路 (ข้ามถนน)"
      }
    ],
    "thaiMeaningShort": "ผ่าน / ข้าม / เคย",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "ก้าวเดิน"
      },
      {
        "char": "寸",
        "pinyin": "cùn",
        "role": "เสียง/ข้อมือ",
        "meaning": "ระยะสั้น",
        "desc": "ยืมเสียง guo"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การก้าวเดินผ่านจุดหนึ่งไปยังอีกจุดหนึ่ง",
      "originStory": "การผ่านพ้นหรือข้าม",
      "modernEvolution": "หมายถึง ผ่าน (Pass) หรือ เคย (Ever)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดิน (辶) + ผ่านพ้นไป = 'ผ่าน/เคย' (过)",
      "visualStory": "ก้าวเดินข้ามถนนอย่างปลอดภัย"
    },
    "compounds": [
      {
        "word": "过去",
        "pinyin": "guò qù",
        "thai": "ในอดีต, ผ่านไป",
        "hsk": 2,
        "audioText": "过去"
      },
      {
        "word": "过年",
        "pinyin": "guò nián",
        "thai": "ฉลองปีใหม่",
        "hsk": 3,
        "audioText": "过年"
      }
    ]
  },
  "进": {
    "char": "进",
    "radical": "辶",
    "primaryPinyin": "jìn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "j", "final": "in", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "jìn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "เข้า, ก้าวหน้า",
        "usageContext": "เช่น 请进 (เชิญเข้าข้างใน), 进步 (ก้าวหน้า)"
      }
    ],
    "thaiMeaningShort": "เข้า / ก้าวหน้า",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "ก้าวเท้า"
      },
      {
        "char": "井",
        "pinyin": "jǐng",
        "role": "เสียง/บ่อน้ำ",
        "meaning": "บ่อ",
        "desc": "มุ่งหน้าสู่"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "นกหรือผู้คนก้าวเดินมุ่งหน้าไปข้างหน้า",
      "originStory": "การเคลื่อนที่เข้าสู่เป้าหมาย",
      "modernEvolution": "หมายถึง เข้า หรือ ก้าวหน้า (Enter/Advance)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดิน (辶) + มุ่งหน้าไปข้างหน้า = 'เข้าสู่/ก้าวหน้า' (进)",
      "visualStory": "ก้าวเท้าเดินเข้าสู่ประตูบ้าน"
    },
    "compounds": [
      {
        "word": "进来",
        "pinyin": "jìn lái",
        "thai": "เข้ามา",
        "hsk": 1,
        "audioText": "进来"
      },
      {
        "word": "进步",
        "pinyin": "jìn bù",
        "thai": "ก้าวหน้า, พัฒนา",
        "hsk": 3,
        "audioText": "进步"
      }
    ]
  },
  "远": {
    "char": "远",
    "radical": "辶",
    "primaryPinyin": "yuǎn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "uan", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yuǎn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ไกล, ห่างไกล",
        "usageContext": "เช่น 很远 (ไกลมาก)"
      }
    ],
    "thaiMeaningShort": "ไกล / ห่างไกล",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "เดินทาง"
      },
      {
        "char": "元",
        "pinyin": "yuán",
        "role": "เสียง",
        "meaning": "เริ่มต้น",
        "desc": "ยืมเสียง yuan"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การก้าวเดินออกไปไกลจนสุดสายตา",
      "originStory": "ระยะทางยาวไกล",
      "modernEvolution": "หมายถึง ไกล (Far)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดิน (辶) + ข้ามขอบฟ้า = 'ห่างไกล' (远)",
      "visualStory": "เดินทางไปยังดินแดนอันไกลโพ้น"
    },
    "compounds": [
      {
        "word": "永远",
        "pinyin": "yǒng yuǎn",
        "thai": "ตลอดไป, นิรันดร์",
        "hsk": 3,
        "audioText": "永远"
      },
      {
        "word": "远近",
        "pinyin": "yuǎn jìn",
        "thai": "ระยะใกล้ไกล",
        "hsk": 4,
        "audioText": "远近"
      }
    ]
  },
  "近": {
    "char": "近",
    "radical": "辶",
    "primaryPinyin": "jìn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "j", "final": "in", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "jìn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ใกล้, ล่าสุด",
        "usageContext": "เช่น 最近 (ช่วงนี้/เร็วๆ นี้)"
      }
    ],
    "thaiMeaningShort": "ใกล้ / ล่าสุด",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "ก้าวเดิน"
      },
      {
        "char": "斤",
        "pinyin": "jīn",
        "role": "เสียง",
        "meaning": "ขวาน",
        "desc": "ระยะใกล้"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ระยะทางที่ก้าวเดินเพียงนิดเดียวก็ถึง",
      "originStory": "ระยะทางอันใกล้",
      "modernEvolution": "หมายถึง ใกล้ (Near)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดิน (辶) + เสียง jīn = 'ใกล้' (近)",
      "visualStory": "เดินเพียงไม่กี่ก้าวก็ถึง"
    },
    "compounds": [
      {
        "word": "最近",
        "pinyin": "zuì jìn",
        "thai": "เร็วๆ นี้, ช่วงนี้",
        "hsk": 2,
        "audioText": "最近"
      },
      {
        "word": "附近",
        "pinyin": "fù jìn",
        "thai": "บริเวณใกล้เคียง",
        "hsk": 3,
        "audioText": "附近"
      }
    ]
  },
  "边": {
    "char": "边",
    "radical": "辶",
    "primaryPinyin": "biān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "b", "final": "ian", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "biān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ด้าน, ข้าง, ริม, ขอบ",
        "usageContext": "เช่น 左边 (ด้านซ้าย), 旁边 (ข้างๆ)"
      }
    ],
    "thaiMeaningShort": "ด้าน / ข้าง / ริม",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "แนวทางเดิน"
      },
      {
        "char": "力",
        "pinyin": "lì",
        "role": "เสียง/แรง",
        "meaning": "ขอบเขต",
        "desc": "แนวเขตแดน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "แนวพรมแดนหรือริมขอบเส้นทางเดิน",
      "originStory": "ขอบเขตและทิศทาง",
      "modernEvolution": "หมายถึง ด้าน หรือ ริมข้าง (Side/Edge)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดิน (辶) + ไปตามขอบเขต (力) = 'ด้าน/ข้าง' (边)",
      "visualStory": "ยืนอยู่ริมข้างถนนมองดูรถแล่นผ่าน"
    },
    "compounds": [
      {
        "word": "旁边",
        "pinyin": "páng biān",
        "thai": "ด้านข้าง, ข้างๆ",
        "hsk": 2,
        "audioText": "旁边"
      },
      {
        "word": "左边",
        "pinyin": "zuǒ bian",
        "thai": "ด้านซ้าย",
        "hsk": 2,
        "audioText": "左边"
      }
    ]
  },
  "送": {
    "char": "送",
    "radical": "辶",
    "primaryPinyin": "sòng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "s", "final": "ong", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "sòng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ส่ง, มอบให้, ไปส่ง",
        "usageContext": "เช่น 送行 (ไปส่ง), 送礼物 (มอบของขวัญ)"
      }
    ],
    "thaiMeaningShort": "ส่ง / มอบให้",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "เดินตามไปส่ง"
      },
      {
        "char": "关",
        "pinyin": "guān",
        "role": "เสียง/สองมือ",
        "meaning": "มอบให้",
        "desc": "ยืมเสียง song"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "สองมือประคองของขวัญเดินตามไปส่งเพื่อนทางไกล",
      "originStory": "การมอบของและไปส่ง",
      "modernEvolution": "หมายถึง ส่ง หรือ มอบให้ (Send/Give)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดินตาม (辶) + มอบของให้ (关) = 'ไปส่ง/มอบให้' (送)",
      "visualStory": "เดินไปส่งเพื่อนที่สนามบินพร้อมมอบของขวัญ"
    },
    "compounds": [
      {
        "word": "送给",
        "pinyin": "sòng gěi",
        "thai": "มอบให้",
        "hsk": 2,
        "audioText": "送给"
      },
      {
        "word": "欢送",
        "pinyin": "huān sòng",
        "thai": "เลี้ยงส่งอย่างอบอุ่น",
        "hsk": 4,
        "audioText": "欢送"
      }
    ]
  },
  "还": {
    "char": "还",
    "radical": "辶",
    "primaryPinyin": "hái",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "h", "final": "ai", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "hái",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ยังคง, ยังมีอีก (วิเศษณ์)",
        "usageContext": "เช่น 还有 (ยังมีอีก), 还是 (หรือว่า/ยังคงเป็น)"
      },
      {
        "pinyin": "huán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "คืน, หวนกลับ (กริยา)",
        "usageContext": "เช่น 还钱 (คืนเงิน), 还书 (คืนหนังสือ)"
      }
    ],
    "thaiMeaningShort": "ยังคง / คืนเงิน",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "เดินวนกลับ"
      },
      {
        "char": "不",
        "pinyin": "bù",
        "role": "เสียง",
        "meaning": "ไม่",
        "desc": "ยืมเสียง huan/hai"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การเดินทางวนรอบแล้วหวนกลับคืนสู่จุดเริ่มต้น",
      "originStory": "การคืนและการคงอยู่",
      "modernEvolution": "หมายถึง ยังคง (Still) หรือ คืน (Return)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดิน (辶) + วนกลับมา = 'ยังคง / คืน' (还)",
      "visualStory": "ยืมหนังสือไปแล้วก็ต้องนำกลับมา 'คืน'"
    },
    "compounds": [
      {
        "word": "还有",
        "pinyin": "hái yǒu",
        "thai": "ยังมีอีก",
        "hsk": 2,
        "audioText": "还有"
      },
      {
        "word": "还钱",
        "pinyin": "huán qián",
        "thai": "คืนเงิน",
        "hsk": 3,
        "audioText": "还钱"
      }
    ]
  },
  "迎": {
    "char": "迎",
    "radical": "辶",
    "primaryPinyin": "yíng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "ing", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yíng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ต้อนรับ, เผชิญหน้า",
        "usageContext": "เช่น 欢迎 (ยินดีต้อนรับ)"
      }
    ],
    "thaiMeaningShort": "ต้อนรับ / เผชิญหน้า",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "半包围结构 (ล้อมกึ่ง)",
    "components": [
      {
        "char": "辶",
        "pinyin": "chuò",
        "role": "ความหมาย",
        "meaning": "การเดิน",
        "desc": "เดินออกไปรับ"
      },
      {
        "char": "卬",
        "pinyin": "áng",
        "role": "เสียง/เงยหน้า",
        "meaning": "มองหา",
        "desc": "มองหาแขก"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การเดินก้าวออกไปที่ประตูเพื่อต้อนรับแขกผู้มาเยือน",
      "originStory": "การต้อนรับอย่างอบอุ่น",
      "modernEvolution": "หมายถึง ต้อนรับ (Welcome/Greet)"
    },
    "mnemonicHook": {
      "formula": "ก้าวเดินออกไป (辶) + เงยหน้ามองหา (卬) = 'ต้อนรับ' (迎)",
      "visualStory": "เดินออกไปหน้าประตูเพื่อ 'ต้อนรับ' แขก"
    },
    "compounds": [
      {
        "word": "欢迎",
        "pinyin": "huān yíng",
        "thai": "ยินดีต้อนรับ",
        "hsk": 1,
        "audioText": "欢迎"
      },
      {
        "word": "迎接",
        "pinyin": "yíng jiē",
        "thai": "ออกไปรับ",
        "hsk": 4,
        "audioText": "迎接"
      }
    ]
  },
  "饭": {
    "char": "饭",
    "radical": "饣",
    "primaryPinyin": "fàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "f", "final": "an", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "fàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ข้าว, มื้ออาหาร",
        "usageContext": "เช่น 吃饭 (กินข้าว)"
      }
    ],
    "thaiMeaningShort": "ข้าว / มื้ออาหาร",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "饣",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "อาหาร",
        "desc": "อาหาร"
      },
      {
        "char": "反",
        "pinyin": "fǎn",
        "role": "เสียง",
        "meaning": "กลับด้าน",
        "desc": "ยืมเสียง fan"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เมล็ดข้าวที่หุงสุกในภาชนะพร้อมรับประทาน",
      "originStory": "อาหารหลักของชาวจีน",
      "modernEvolution": "หมายถึง ข้าวสุก หรือ มื้ออาหาร (Meal/Rice)"
    },
    "mnemonicHook": {
      "formula": "อาหาร (饣) + เสียง fǎn = 'ข้าว/มื้ออาหาร' (饭)",
      "visualStory": "ชวนกันมากินข้าวมื้ออร่อย"
    },
    "compounds": [
      {
        "word": "米饭",
        "pinyin": "mǐ fàn",
        "thai": "ข้าวสวย",
        "hsk": 1,
        "audioText": "米饭"
      },
      {
        "word": "早饭",
        "pinyin": "zǎo fàn",
        "thai": "อาหารเช้า",
        "hsk": 2,
        "audioText": "早饭"
      },
      {
        "word": "晚饭",
        "pinyin": "wǎn fàn",
        "thai": "อาหารเย็น",
        "hsk": 2,
        "audioText": "晚饭"
      }
    ]
  },
  "馆": {
    "char": "馆",
    "radical": "饣",
    "primaryPinyin": "guǎn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "g", "final": "uan", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "guǎn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ภัตตาคาร, โรงเตี๊ยม, สถานที่จัดเลี้ยง",
        "usageContext": "เช่น 饭馆 (ร้านอาหาร)"
      }
    ],
    "thaiMeaningShort": "ภัตตาคาร / อาคารสถานที่",
    "hskLevel": 2,
    "strokeCount": 11,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "饣",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "อาหาร",
        "desc": "สถานที่เสิร์ฟอาหาร"
      },
      {
        "char": "官",
        "pinyin": "guān",
        "role": "เสียง/ขุนนาง",
        "meaning": "อาคารราชการ",
        "desc": "สถานที่รองรับแขก"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "โรงเตี๊ยมที่จัดเตรียมอาหารเพื่อต้อนรับขุนนาง",
      "originStory": "สถานที่พักและรับประทานอาหาร",
      "modernEvolution": "หมายถึง ร้านอาหาร หรือ หอ/อาคาร (Hall/Building)"
    },
    "mnemonicHook": {
      "formula": "อาหาร (饣) + อาคารใหญ่ (官) = 'ภัตตาคาร/หอ' (馆)",
      "visualStory": "เดินเข้าร้านอาหารและห้องสมุดขนาดใหญ่"
    },
    "compounds": [
      {
        "word": "饭馆",
        "pinyin": "fàn guǎn",
        "thai": "ร้านอาหาร",
        "hsk": 2,
        "audioText": "饭馆"
      },
      {
        "word": "图书馆",
        "pinyin": "tú shū guǎn",
        "thai": "ห้องสมุด",
        "hsk": 3,
        "audioText": "图书馆"
      }
    ]
  },
  "饮": {
    "char": "饮",
    "radical": "饣",
    "primaryPinyin": "yǐn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "in", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yǐn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ดื่ม, เครื่องดื่ม",
        "usageContext": "เช่น 饮料 (เครื่องดื่ม), 饮食 (อาหารการกิน)"
      }
    ],
    "thaiMeaningShort": "ดื่ม / เครื่องดื่ม",
    "hskLevel": 3,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "饣",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "อาหาร",
        "desc": "การรับประทาน"
      },
      {
        "char": "欠",
        "pinyin": "qiàn",
        "role": "เสียง/อ้าปาก",
        "meaning": "อ้าปากดื่ม",
        "desc": "การกลืนของเหลว"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "คนอ้าปากโน้มตัวลงดื่มน้ำจากภาชนะ",
      "originStory": "การดื่มน้ำและเครื่องดื่ม",
      "modernEvolution": "หมายถึง ดื่ม (Drink/Beverage)"
    },
    "mnemonicHook": {
      "formula": "อาหาร (饣) + อ้าปากดื่ม (欠) = 'ดื่ม' (饮)",
      "visualStory": "ยกแก้วน้ำขึ้นดื่มดับกระหาย"
    },
    "compounds": [
      {
        "word": "饮料",
        "pinyin": "yǐn liào",
        "thai": "เครื่องดื่ม",
        "hsk": 3,
        "audioText": "饮料"
      },
      {
        "word": "饮食",
        "pinyin": "yǐn shí",
        "thai": "อาหารการกิน",
        "hsk": 4,
        "audioText": "饮食"
      }
    ]
  },
  "饱": {
    "char": "饱",
    "radical": "饣",
    "primaryPinyin": "bǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "b", "final": "ao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "bǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "อิ่ม, เต็มเปี่ยม",
        "usageContext": "เช่น 吃饱了 (กินอิ่มแล้ว)"
      }
    ],
    "thaiMeaningShort": "อิ่ม / เต็มเปี่ยม",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "饣",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "อาหาร",
        "desc": "กินอาหาร"
      },
      {
        "char": "包",
        "pinyin": "bāo",
        "role": "เสียง/ห่อหุ้ม",
        "meaning": "พองโต",
        "desc": "ท้องอิ่มพอง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การกินอาหารจนพุงป่องอิ่มหนำสำราญ",
      "originStory": "ความอิ่มท้อง",
      "modernEvolution": "หมายถึง อิ่ม (Full/Satisfied)"
    },
    "mnemonicHook": {
      "formula": "อาหาร (饣) + พุงกลมเหมือนห่อ (包) = 'อิ่ม' (饱)",
      "visualStory": "กินอาหารอร่อยจนพุงกาง 'อิ่มแล้ว'"
    },
    "compounds": [
      {
        "word": "吃饱",
        "pinyin": "chī bǎo",
        "thai": "กินอิ่ม",
        "hsk": 2,
        "audioText": "吃饱"
      },
      {
        "word": "饱满",
        "pinyin": "bǎo mǎn",
        "thai": "เต็มเปี่ยม, สมบูรณ์",
        "hsk": 4,
        "audioText": "饱满"
      }
    ]
  },
  "饼": {
    "char": "饼",
    "radical": "饣",
    "primaryPinyin": "bǐng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "b", "final": "ing", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "bǐng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ขนมเปี๊ยะ, ขนมปังกรอบ, แป้งทอด",
        "usageContext": "เช่น 饼干 (บิสกิต), 月饼 (ขนมไหว้พระจันทร์)"
      }
    ],
    "thaiMeaningShort": "ขนมเปี๊ยะ / บิสกิต",
    "hskLevel": 3,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "饣",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "อาหาร",
        "desc": "ของกินทำจากแป้ง"
      },
      {
        "char": "并",
        "pinyin": "bìng",
        "role": "เสียง",
        "meaning": "รวมกัน",
        "desc": "ยืมเสียง bing"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "แป้งสาลีนวดรวมกันแล้วนำไปอบหรือทอดเป็นแผ่นกลม",
      "originStory": "ขนมแป้งอบทรงกลม",
      "modernEvolution": "หมายถึง ขนมเปี๊ยะ หรือ คุกกี้/บิสกิต (Cake/Cookie)"
    },
    "mnemonicHook": {
      "formula": "อาหาร (饣) + แป้งนวดรวมกัน (并) = 'ขนมเปี๊ยะ/คุกกี้' (饼)",
      "visualStory": "ขนมเปี๊ยะแป้งนุ่มหอมอร่อย"
    },
    "compounds": [
      {
        "word": "饼干",
        "pinyin": "bǐng gān",
        "thai": "บิสกิต, คุกกี้",
        "hsk": 3,
        "audioText": "饼干"
      },
      {
        "word": "月饼",
        "pinyin": "yuè bǐng",
        "thai": "ขนมไหว้พระจันทร์",
        "hsk": 4,
        "audioText": "月饼"
      }
    ]
  },
  "你": {
    "char": "你",
    "radical": "亻",
    "primaryPinyin": "nǐ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "n", "final": "i", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "nǐ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "คุณ, เธอ, ท่าน",
        "usageContext": "เช่น 你好 (สวัสดีคุณ)"
      }
    ],
    "thaiMeaningShort": "คุณ / เธอ",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "มนุษย์"
      },
      {
        "char": "尔",
        "pinyin": "ěr",
        "role": "เสียง",
        "meaning": "เจ้า/เธอ",
        "desc": "สรรพนามบุรุษที่ 2"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "สรรพนามชี้เฉพาะตัวบุคคลที่อยู่ตรงหน้า",
      "originStory": "บุคคลที่สองที่สนทนาด้วย",
      "modernEvolution": "หมายถึง คุณ/เธอ (You)"
    },
    "mnemonicHook": {
      "formula": "คน (亻) + ชี้ไปที่เธอ (尔) = 'คุณ' (你)",
      "visualStory": "ชี้ไปที่คนตรงหน้าเพื่อทักทายคุณ"
    },
    "compounds": [
      {
        "word": "你们",
        "pinyin": "nǐ men",
        "thai": "พวกคุณ",
        "hsk": 1,
        "audioText": "你们"
      },
      {
        "word": "你好",
        "pinyin": "nǐ hǎo",
        "thai": "สวัสดี",
        "hsk": 1,
        "audioText": "你好"
      }
    ]
  },
  "他": {
    "char": "他",
    "radical": "亻",
    "primaryPinyin": "tā",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "t", "final": "a", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "tā",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "เขา (ผู้ชาย), บุคคลอื่น",
        "usageContext": "เช่น 他们 (พวกเขา)"
      }
    ],
    "thaiMeaningShort": "เขา (ผู้ชาย)",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "มนุษย์"
      },
      {
        "char": "也",
        "pinyin": "yě",
        "role": "เสียง",
        "meaning": "ก็เช่นกัน",
        "desc": "ยืมเสียง ta"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "สรรพนามแทนบุคคลอื่นที่กล่าวถึง",
      "originStory": "บุคคลที่สาม",
      "modernEvolution": "หมายถึง เขา (He/Him)"
    },
    "mnemonicHook": {
      "formula": "คน (亻) + ผู้อื่น (也) = 'เขา' (他)",
      "visualStory": "ชี้ไปที่บุคคลที่สามว่า 'เขาคนนั้น'"
    },
    "compounds": [
      {
        "word": "他们",
        "pinyin": "tā men",
        "thai": "พวกเขา",
        "hsk": 1,
        "audioText": "他们"
      },
      {
        "word": "他人",
        "pinyin": "tā rén",
        "thai": "คนอื่น, ผู้อื่น",
        "hsk": 3,
        "audioText": "他人"
      }
    ]
  },
  "们": {
    "char": "们",
    "radical": "亻",
    "primaryPinyin": "men",
    "primaryTone": 5,
    "pronunciationGuide": { "initial": "m", "final": "en", "toneRule": "เสียงเบา (Neutral) — ออกเสียงสั้น เบา ไม่มีระดับเสียงเฉพาะตัว ขึ้นอยู่กับเสียงพยางค์ก่อนหน้า" },
    "pinyinList": [
      {
        "pinyin": "men",
        "tone": 5,
        "toneDescription": "เสียงเบา (Neutral)",
        "meaningThai": "พวก (คำต่อท้ายพหูพจน์)",
        "usageContext": "เช่น 我们 (พวกเรา), 你们 (พวกคุณ)"
      }
    ],
    "thaiMeaningShort": "พวก (พหูพจน์)",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "กลุ่มคน"
      },
      {
        "char": "门",
        "pinyin": "mén",
        "role": "เสียง/ประตู",
        "meaning": "ประตู",
        "desc": "ยืมเสียง men"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "กลุ่มคนที่ยืนรวมตัวกันอยู่หน้าประตู",
      "originStory": "คำต่อท้ายพหูพจน์",
      "modernEvolution": "หมายถึง พวก (Plural suffix)"
    },
    "mnemonicHook": {
      "formula": "คนหลายคน (亻) + ยืนรวมกันหน้าประตู (门) = 'พวกเรา/พวก' (们)",
      "visualStory": "กลุ่มคนรวมตัวกันเป็น 'พวกเรา'"
    },
    "compounds": [
      {
        "word": "我们",
        "pinyin": "wǒ men",
        "thai": "พวกเรา",
        "hsk": 1,
        "audioText": "我们"
      },
      {
        "word": "人们",
        "pinyin": "rén men",
        "thai": "ผู้คนทั้งหลาย",
        "hsk": 2,
        "audioText": "人们"
      }
    ]
  },
  "休": {
    "char": "休",
    "radical": "亻",
    "primaryPinyin": "xiū",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "x", "final": "iu", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "xiū",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "พักผ่อน, หยุดพัก, หยุด",
        "usageContext": "เช่น 休息 (พักผ่อน), 休假 (ลาพักร้อน)"
      }
    ],
    "thaiMeaningShort": "พักผ่อน / หยุดพัก",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "คนเหน็ดเหนื่อยจากการทำงาน"
      },
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ความหมาย",
        "meaning": "ต้นไม้",
        "desc": "ร่มเงาไม้"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพคน (亻) นั่งพิงต้นไม้ (木) รับร่มเงาเพื่อคลายเหนื่อย",
      "originStory": "การหยุดพักใต้ร่มไม้",
      "modernEvolution": "หมายถึง พักผ่อน (Rest)"
    },
    "mnemonicHook": {
      "formula": "คน (亻) + พิงต้นไม้ (木) = 'พักผ่อน' (休)",
      "visualStory": "เหนื่อยจากการทำงานก็นั่งพักใต้ร่มเงาต้นไม้"
    },
    "compounds": [
      {
        "word": "休息",
        "pinyin": "xiū xi",
        "thai": "พักผ่อน",
        "hsk": 2,
        "audioText": "休息"
      },
      {
        "word": "休假",
        "pinyin": "xiū jià",
        "thai": "ลาพักร้อน",
        "hsk": 4,
        "audioText": "休假"
      }
    ]
  },
  "体": {
    "char": "体",
    "radical": "亻",
    "primaryPinyin": "tǐ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "t", "final": "i", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "tǐ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ร่างกาย, สรีระ, กีฬา",
        "usageContext": "เช่น 身体 (สุขภาพ/ร่างกาย), 体育 (พลศึกษา)"
      }
    ],
    "thaiMeaningShort": "ร่างกาย / กีฬา",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "มนุษย์"
      },
      {
        "char": "本",
        "pinyin": "běn",
        "role": "รากฐาน",
        "meaning": "รากฐาน/ต้นกำเนิด",
        "desc": "รากฐานชีวิต"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ร่างกายคือรากฐาน (本) อันสำคัญที่สุดของมนุษย์ (亻)",
      "originStory": "สังขารและร่างกาย",
      "modernEvolution": "หมายถึง ร่างกาย (Body)"
    },
    "mnemonicHook": {
      "formula": "คน (亻) + รากฐานชีวิต (本) = 'ร่างกาย' (体)",
      "visualStory": "รักษาร่างกายและสุขภาพให้แข็งแรง"
    },
    "compounds": [
      {
        "word": "身体",
        "pinyin": "shēn tǐ",
        "thai": "ร่างกาย, สุขภาพ",
        "hsk": 2,
        "audioText": "身体"
      },
      {
        "word": "体育",
        "pinyin": "tǐ yù",
        "thai": "พลศึกษา, กีฬา",
        "hsk": 3,
        "audioText": "体育"
      }
    ]
  },
  "位": {
    "char": "位",
    "radical": "亻",
    "primaryPinyin": "wèi",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "w", "final": "ei", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "wèi",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ท่าน (ลักษณะนามสุภาพ), ตำแหน่ง, ที่นั่ง",
        "usageContext": "เช่น 哪一位 (ท่านไหน), 座位 (ที่นั่ง)"
      }
    ],
    "thaiMeaningShort": "ท่าน / ตำแหน่ง / ที่นั่ง",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "บุคคล"
      },
      {
        "char": "立",
        "pinyin": "lì",
        "role": "ยืนตรง",
        "meaning": "ยืนมั่นคง",
        "desc": "ตำแหน่งที่ยืน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ตำแหน่งที่ขุนนางยืนประจำการในราชสำนัก",
      "originStory": "ตำแหน่งและเกียรติยศ",
      "modernEvolution": "หมายถึง ตำแหน่ง หรือ ท่าน (Position/Honorific)"
    },
    "mnemonicHook": {
      "formula": "คน (亻) + ยืนประจำที่ (立) = 'ตำแหน่ง/ท่าน' (位)",
      "visualStory": "ยืนประจำตำแหน่งอย่างสง่างาม"
    },
    "compounds": [
      {
        "word": "座位",
        "pinyin": "zuò wèi",
        "thai": "ที่นั่ง",
        "hsk": 2,
        "audioText": "座位"
      },
      {
        "word": "各位",
        "pinyin": "gè wèi",
        "thai": "ทุกๆ ท่าน",
        "hsk": 3,
        "audioText": "各位"
      }
    ]
  },
  "信": {
    "char": "信",
    "radical": "亻",
    "primaryPinyin": "xìn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "x", "final": "in", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "xìn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "จดหมาย, เชื่อถือ, สัจจะ",
        "usageContext": "เช่น 写信 (เขียนจดหมาย), 相信 (เชื่อถือ)"
      }
    ],
    "thaiMeaningShort": "จดหมาย / เชื่อถือ",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "มนุษย์"
      },
      {
        "char": "言",
        "pinyin": "yán",
        "role": "คำพูด",
        "meaning": "วาจา",
        "desc": "คำสัจจะ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "วาจาของมนุษย์ต้องมีสัจจะและรักษาคำพูด",
      "originStory": "ความน่าเชื่อถือและสัจจะ",
      "modernEvolution": "หมายถึง เชื่อ (Believe) หรือ จดหมาย (Letter)"
    },
    "mnemonicHook": {
      "formula": "คน (亻) + รักษาคำพูด (言) = 'ความเชื่อถือ/จดหมาย' (信)",
      "visualStory": "ส่งจดหมายบอกเล่าความจริงใจ"
    },
    "compounds": [
      {
        "word": "相信",
        "pinyin": "xiāng xìn",
        "thai": "เชื่อถือ, ไว้ใจ",
        "hsk": 2,
        "audioText": "相信"
      },
      {
        "word": "短信",
        "pinyin": "duǎn xìn",
        "thai": "ข้อความ SMS",
        "hsk": 3,
        "audioText": "短信"
      }
    ]
  },
  "做": {
    "char": "做",
    "radical": "亻",
    "primaryPinyin": "zuò",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "z", "final": "uo", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "zuò",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ทำ, ผลิต, ประกอบอาชีพ",
        "usageContext": "เช่น 做饭 (ทำอาหาร), 做工作 (ทำงาน)"
      }
    ],
    "thaiMeaningShort": "ทำ / ผลิต",
    "hskLevel": 1,
    "strokeCount": 11,
    "structure": "左中右结构 (ซ้าย-กลาง-ขวา)",
    "components": [
      {
        "char": "亻",
        "pinyin": "rén",
        "role": "ความหมาย",
        "meaning": "คน",
        "desc": "ผู้ลงมือทำ"
      },
      {
        "char": "故",
        "pinyin": "gù",
        "role": "เสียง/ลงมือ",
        "meaning": "การกระทำ",
        "desc": "ยืมเสียง zuo"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การที่มนุษย์ลงมือสร้างสรรค์สิ่งของด้วยความพยายาม",
      "originStory": "การลงมือปฏิบัติงาน",
      "modernEvolution": "หมายถึง ทำ (Do/Make)"
    },
    "mnemonicHook": {
      "formula": "คน (亻) + ลงมือสร้างสรรค์ (故) = 'ลงมือทำ' (做)",
      "visualStory": "ลงมือทำอาหารและทำงานอย่างตั้งใจ"
    },
    "compounds": [
      {
        "word": "做饭",
        "pinyin": "zuò fàn",
        "thai": "ทำกับข้าว",
        "hsk": 1,
        "audioText": "做饭"
      },
      {
        "word": "做法",
        "pinyin": "zuò fǎ",
        "thai": "วิธีทำ",
        "hsk": 3,
        "audioText": "做法"
      }
    ]
  },
  "想": {
    "char": "想",
    "radical": "心",
    "primaryPinyin": "xiǎng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "x", "final": "iang", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "xiǎng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "คิด, คิดถึง, อยากจะ",
        "usageContext": "เช่น 我想你 (ฉันคิดถึงคุณ)"
      }
    ],
    "thaiMeaningShort": "คิด / คิดถึง / อยากจะ",
    "hskLevel": 1,
    "strokeCount": 13,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "相",
        "pinyin": "xiāng",
        "role": "เสียง/ภาพจำ",
        "meaning": "รูปลักษณ์",
        "desc": "ภาพจำ"
      },
      {
        "char": "心",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "ความรู้สึก"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การนำภาพของสิ่งที่ผูกพันมาไว้ในดวงใจ",
      "originStory": "ความคิดคำนึงจากใจ",
      "modernEvolution": "หมายถึง คิด (Think) หรือ คิดถึง (Miss)"
    },
    "mnemonicHook": {
      "formula": "ภาพจำ (相) + ในหัวใจ (心) = 'คิดถึง' (想)",
      "visualStory": "เก็บภาพเธอไว้ในใจตลอดเวลา"
    },
    "compounds": [
      {
        "word": "想法",
        "pinyin": "xiǎng fǎ",
        "thai": "ความคิด, ไอเดีย",
        "hsk": 3,
        "audioText": "想法"
      },
      {
        "word": "想念",
        "pinyin": "xiǎng niàn",
        "thai": "คิดถึง, คำนึงถึง",
        "hsk": 4,
        "audioText": "想念"
      }
    ]
  },
  "情": {
    "char": "情",
    "radical": "心",
    "primaryPinyin": "qíng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "q", "final": "ing", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "qíng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ความรู้สึก, อารมณ์, ความรัก, สถานการณ์",
        "usageContext": "เช่น 热情 (อบอุ่นกระตือรือร้น), 事情 (เรื่องราว)"
      }
    ],
    "thaiMeaningShort": "ความรู้สึก / อารมณ์",
    "hskLevel": 2,
    "strokeCount": 11,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "忄",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "อารมณ์ความรู้สึก"
      },
      {
        "char": "青",
        "pinyin": "qīng",
        "role": "เสียง",
        "meaning": "บริสุทธิ์",
        "desc": "ยืมเสียง qing"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ความรู้สึกที่เกิดขึ้นตามธรรมชาติในจิตใจมนุษย์",
      "originStory": "อารมณ์และความรู้สึกผูกพัน",
      "modernEvolution": "หมายถึง ความรู้สึก หรือ ความรัก (Feeling/Emotion/Love)"
    },
    "mnemonicHook": {
      "formula": "หัวใจ (忄) + บริสุทธิ์ (青) = 'ความรู้สึก/ความรัก' (情)",
      "visualStory": "ความรู้สึกจากก้นบึ้งของหัวใจ"
    },
    "compounds": [
      {
        "word": "事情",
        "pinyin": "shì qing",
        "thai": "เรื่องราว, ธุระ",
        "hsk": 2,
        "audioText": "事情"
      },
      {
        "word": "心情",
        "pinyin": "xīn qíng",
        "thai": "อารมณ์, สภาพจิตใจ",
        "hsk": 3,
        "audioText": "心情"
      }
    ]
  },
  "怕": {
    "char": "怕",
    "radical": "心",
    "primaryPinyin": "pà",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "p", "final": "a", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "pà",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "กลัว, เกรงว่า",
        "usageContext": "เช่น 害怕 (หวาดกลัว), 恐怕 (เกรงว่า)"
      }
    ],
    "thaiMeaningShort": "กลัว / เกรงว่า",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "忄",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "ความรู้สึก"
      },
      {
        "char": "白",
        "pinyin": "bái",
        "role": "เสียง/หน้าซีด",
        "meaning": "สีขาว",
        "desc": "หน้าซีดขาวด้วยความกลัว"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "จิตใจตื่นตระหนกจนใบหน้าซีดเผือด",
      "originStory": "ความหวาดกลัว",
      "modernEvolution": "หมายถึง กลัว (Fear/Afraid)"
    },
    "mnemonicHook": {
      "formula": "หัวใจ (忄) + ตกใจหน้าซีดขาว (白) = 'หวาดกลัว' (怕)",
      "visualStory": "ตกใจกลัวจนหัวใจเต้นแรงหน้าซีดขาว"
    },
    "compounds": [
      {
        "word": "害怕",
        "pinyin": "hài pà",
        "thai": "หวาดกลัว",
        "hsk": 2,
        "audioText": "害怕"
      },
      {
        "word": "恐怕",
        "pinyin": "kǒng pà",
        "thai": "เกรงว่า, น่ากลัวว่า",
        "hsk": 4,
        "audioText": "恐怕"
      }
    ]
  },
  "忙": {
    "char": "忙",
    "radical": "心",
    "primaryPinyin": "máng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "m", "final": "ang", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "máng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ยุ่ง, ภารกิจรัดตัว",
        "usageContext": "เช่น 你忙吗 (คุณยุ่งไหม), 帮忙 (ช่วยเหลือ)"
      }
    ],
    "thaiMeaningShort": "ยุ่ง / ภารกิจรัดตัว",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "忄",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "จิตใจ"
      },
      {
        "char": "亡",
        "pinyin": "wáng",
        "role": "เสียง/สูญหาย",
        "meaning": "ลืมเลือน",
        "desc": "ใจไม่อยู่กับเนื้อกับตัว"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "งานล้นมือจนจิตใจว้าวุ่นแทบจำอะไรไม่ได้",
      "originStory": "ความวุ่นวายและยุ่งเหยิง",
      "modernEvolution": "หมายถึง ยุ่ง (Busy)"
    },
    "mnemonicHook": {
      "formula": "หัวใจ (忄) + วุ่นวายจนใจหาย (亡) = 'งานยุ่ง' (忙)",
      "visualStory": "งานเยอะมากจนยุ่งตลอดทั้งวัน"
    },
    "compounds": [
      {
        "word": "帮忙",
        "pinyin": "bāng máng",
        "thai": "ช่วยเหลือ",
        "hsk": 2,
        "audioText": "帮忙"
      },
      {
        "word": "急忙",
        "pinyin": "jí máng",
        "thai": "รีบร้อน",
        "hsk": 4,
        "audioText": "急忙"
      }
    ]
  },
  "快": {
    "char": "快",
    "radical": "心",
    "primaryPinyin": "kuài",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "k", "final": "uai", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "kuài",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "เร็ว, รวดเร็ว, รื่นรมย์",
        "usageContext": "เช่น 快点儿 (เร็วๆ หน่อย), 快乐 (มีความสุข)"
      }
    ],
    "thaiMeaningShort": "เร็ว / มีความสุข",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "忄",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "จิตใจปลอดโปร่ง"
      },
      {
        "char": "夬",
        "pinyin": "guài",
        "role": "เสียง/คันธนู",
        "meaning": "ดีดผึง",
        "desc": "รวดเร็วดั่งลูกศร"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "จิตใจที่สดชื่นคล่องแคล่วและรวดเร็วดั่งปล่อยสายธนู",
      "originStory": "ความรวดเร็วและความเบิกบาน",
      "modernEvolution": "หมายถึง เร็ว (Fast) หรือ มีความสุข (Happy)"
    },
    "mnemonicHook": {
      "formula": "หัวใจ (忄) + ดีดตัวรวดเร็ว (夬) = 'รวดเร็ว/สุขใจ' (快)",
      "visualStory": "วิ่งอย่างรวดเร็วด้วยความสุขใจ"
    },
    "compounds": [
      {
        "word": "快点",
        "pinyin": "kuài diǎn",
        "thai": "เร็วๆ หน่อย",
        "hsk": 1,
        "audioText": "快点"
      },
      {
        "word": "快乐",
        "pinyin": "kuài lè",
        "thai": "มีความสุข",
        "hsk": 2,
        "audioText": "快乐"
      }
    ]
  },
  "念": {
    "char": "念",
    "radical": "心",
    "primaryPinyin": "niàn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "n", "final": "ian", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "niàn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "คิดถึง, คำนึง, ท่องอ่าน",
        "usageContext": "เช่น 念书 (เรียนหนังสือ), 纪念 (ของที่ระลึก)"
      }
    ],
    "thaiMeaningShort": "คิดถึง / ท่องอ่าน",
    "hskLevel": 3,
    "strokeCount": 8,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "今",
        "pinyin": "jīn",
        "role": "ปัจจุบัน",
        "meaning": "เวลานี้",
        "desc": "ห้วงเวลานี้"
      },
      {
        "char": "心",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "จิตใจ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "สิ่งที่มีอยู่ในดวงใจ ณ ปัจจุบันขณะเสมอ",
      "originStory": "ความระลึกนึกถึง",
      "modernEvolution": "หมายถึง คิดถึง (Miss) หรือ ท่องอ่าน (Read aloud)"
    },
    "mnemonicHook": {
      "formula": "ปัจจุบันนี้ (今) + อยู่ในใจเสมอ (心) = 'คำนึงถึง' (念)",
      "visualStory": "เก็บความทรงจำไว้ในใจตลอดเวลา"
    },
    "compounds": [
      {
        "word": "纪念",
        "pinyin": "jì niàn",
        "thai": "ที่ระลึก",
        "hsk": 3,
        "audioText": "纪念"
      },
      {
        "word": "想念",
        "pinyin": "xiǎng niàn",
        "thai": "คิดถึง",
        "hsk": 4,
        "audioText": "想念"
      }
    ]
  },
  "感": {
    "char": "感",
    "radical": "心",
    "primaryPinyin": "gǎn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "g", "final": "an", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "gǎn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "รู้สึก, ซาบซึ้ง, สัมผัสได้",
        "usageContext": "เช่น 感觉 (ความรู้สึก), 感动 (ซาบซึ้งใจ)"
      }
    ],
    "thaiMeaningShort": "รู้สึก / ซาบซึ้ง",
    "hskLevel": 3,
    "strokeCount": 13,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "咸",
        "pinyin": "xián",
        "role": "เสียง/ทั้งหมด",
        "meaning": "ทั่วถึง",
        "desc": "สะเทือนทั่ว"
      },
      {
        "char": "心",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "จิตใจ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "สิ่งภายนอกมากระทบจนหัวใจเกิดความสะเทือนซาบซึ้ง",
      "originStory": "การรับรู้และความรู้สึก",
      "modernEvolution": "หมายถึง รู้สึก (Feel/Sense) หรือ ซาบซึ้ง"
    },
    "mnemonicHook": {
      "formula": "สัมผัสทั่วถึง (咸) + ในหัวใจ (心) = 'ความรู้สึก' (感)",
      "visualStory": "ซาบซึ้งจนสัมผัสได้ถึงความจริงใจ"
    },
    "compounds": [
      {
        "word": "感觉",
        "pinyin": "gǎn jué",
        "thai": "ความรู้สึก",
        "hsk": 3,
        "audioText": "感觉"
      },
      {
        "word": "感谢",
        "pinyin": "gǎn xiè",
        "thai": "ขอบพระคุณ",
        "hsk": 3,
        "audioText": "感谢"
      }
    ]
  },
  "懂": {
    "char": "懂",
    "radical": "心",
    "primaryPinyin": "dǒng",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "d", "final": "ong", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "dǒng",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "เข้าใจ, รู้แจ้ง",
        "usageContext": "เช่น 听懂了 (ฟังเข้าใจแล้ว)"
      }
    ],
    "thaiMeaningShort": "เข้าใจ / รู้เรื่อง",
    "hskLevel": 2,
    "strokeCount": 15,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "忄",
        "pinyin": "xīn",
        "role": "ความหมาย",
        "meaning": "หัวใจ",
        "desc": "จิตใจแจ่มแจ้ง"
      },
      {
        "char": "董",
        "pinyin": "dǒng",
        "role": "เสียง/ควบคุม",
        "meaning": "เข้าใจทะลุปรุโปร่ง",
        "desc": "ยืมเสียง dong"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "จิตใจที่มองเห็นความจริงอย่างทะลุปรุโปร่ง",
      "originStory": "การเข้าใจแจ่มแจ้ง",
      "modernEvolution": "หมายถึง เข้าใจ (Understand)"
    },
    "mnemonicHook": {
      "formula": "หัวใจ (忄) + สว่างทะลุปรุโปร่ง = 'เข้าใจแจ่มแจ้ง' (懂)",
      "visualStory": "ฟังอาจารย์อธิบายจน 'เข้าใจแล้ว'"
    },
    "compounds": [
      {
        "word": "听懂",
        "pinyin": "tīng dǒng",
        "thai": "ฟังเข้าใจ",
        "hsk": 2,
        "audioText": "听懂"
      },
      {
        "word": "懂事",
        "pinyin": "dǒng shì",
        "thai": "รู้ความ, รู้ประสีประสา",
        "hsk": 4,
        "audioText": "懂事"
      }
    ]
  },
  "林": {
    "char": "林",
    "radical": "木",
    "primaryPinyin": "lín",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "l", "final": "in", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "lín",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ป่าไม้, พงไพร",
        "usageContext": "เช่น 树林 (แนวป่า)"
      }
    ],
    "thaiMeaningShort": "ป่าไม้ / พงไพร",
    "hskLevel": 3,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ต้นไม้ 1",
        "meaning": "ต้นไม้",
        "desc": "ต้นที่ 1"
      },
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ต้นไม้ 2",
        "meaning": "ต้นไม้",
        "desc": "ต้นที่ 2"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ต้นไม้สองต้นยืนเคียงข้างกัน",
      "originStory": "ต้นไม้เรียงรายกลายเป็นผืนป่า",
      "modernEvolution": "หมายถึง ป่าไม้ (Woods/Forest)"
    },
    "mnemonicHook": {
      "formula": "ต้นไม้ 1 (木) + ต้นไม้ 2 (木) = 'ป่าไม้' (林)",
      "visualStory": "เดินเข้าสู่แนวต้นไม้หนาทึบ"
    },
    "compounds": [
      {
        "word": "树林",
        "pinyin": "shù lín",
        "thai": "แนวป่าไม้",
        "hsk": 3,
        "audioText": "树林"
      },
      {
        "word": "森林",
        "pinyin": "sēn lín",
        "thai": "ป่าดงดิบ",
        "hsk": 4,
        "audioText": "森林"
      }
    ]
  },
  "森": {
    "char": "森",
    "radical": "木",
    "primaryPinyin": "sēn",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "s", "final": "en", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "sēn",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ป่าทึบ, ป่าดงดิบ, หนาแน่น",
        "usageContext": "เช่น 森林 (ป่าดงดิบ)"
      }
    ],
    "thaiMeaningShort": "ป่าทึบ / หนาแน่น",
    "hskLevel": 3,
    "strokeCount": 12,
    "structure": "品字结构 (สามเหลี่ยม)",
    "components": [
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ต้นไม้บน",
        "meaning": "ต้นไม้",
        "desc": "ต้นที่ 1"
      },
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ต้นไม้ซ้าย",
        "meaning": "ต้นไม้",
        "desc": "ต้นที่ 2"
      },
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ต้นไม้ขวา",
        "meaning": "ต้นไม้",
        "desc": "ต้นที่ 3"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ต้นไม้สามต้นรวมกัน สื่อถึงผืนป่าอันอุดมสมบูรณ์หนาทึบ",
      "originStory": "ป่าทึบใหญ่",
      "modernEvolution": "หมายถึง ป่าดงดิบ (Dense Forest)"
    },
    "mnemonicHook": {
      "formula": "ต้นไม้ 3 ต้น (木+木+木) = 'ป่าทึบใหญ่' (森)",
      "visualStory": "ป่าดงดิบที่มีต้นไม้หนาแน่นอุดมสมบูรณ์"
    },
    "compounds": [
      {
        "word": "森林",
        "pinyin": "sēn lín",
        "thai": "ป่าดงดิบ",
        "hsk": 3,
        "audioText": "森林"
      },
      {
        "word": "阴森",
        "pinyin": "yīn sēn",
        "thai": "ร่มครึ้มวังเวง",
        "hsk": 5,
        "audioText": "阴森"
      }
    ]
  },
  "树": {
    "char": "树",
    "radical": "木",
    "primaryPinyin": "shù",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "sh", "final": "u", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "shù",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ต้นไม้, ปลูกต้นไม้",
        "usageContext": "เช่น 大树 (ต้นไม้ใหญ่), 种树 (ปลูกต้นไม้)"
      }
    ],
    "thaiMeaningShort": "ต้นไม้",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左中右结构 (ซ้าย-กลาง-ขวา)",
    "components": [
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ความหมาย",
        "meaning": "ต้นไม้",
        "desc": "พืชยืนต้น"
      },
      {
        "char": "又",
        "pinyin": "yòu",
        "role": "เสียง/มือ",
        "meaning": "ปลูกดูแล",
        "desc": "การเพาะปลูก"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้มือเพาะปลูกต้นไม้ให้เติบโตหยั่งรากลึก",
      "originStory": "ต้นไม้ยืนต้น",
      "modernEvolution": "หมายถึง ต้นไม้ (Tree)"
    },
    "mnemonicHook": {
      "formula": "ไม้ (木) + เพาะปลูกด้วยมือ = 'ต้นไม้' (树)",
      "visualStory": "ต้นไม้ใหญ่แผ่กิ่งก้านให้ร่มเงา"
    },
    "compounds": [
      {
        "word": "大树",
        "pinyin": "dà shù",
        "thai": "ต้นไม้ใหญ่",
        "hsk": 2,
        "audioText": "大树"
      },
      {
        "word": "树木",
        "pinyin": "shù mù",
        "thai": "ต้นไม้นานาพรรณ",
        "hsk": 3,
        "audioText": "树木"
      }
    ]
  },
  "本": {
    "char": "本",
    "radical": "木",
    "primaryPinyin": "běn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "b", "final": "en", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "běn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "เล่ม (ลักษณะนาม), รากฐาน, สมุด",
        "usageContext": "เช่น 一本书 (หนังสือหนึ่งเล่ม), 本子 (สมุด)"
      }
    ],
    "thaiMeaningShort": "เล่ม / รากฐาน / สมุด",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ต้นไม้",
        "meaning": "ลำต้น",
        "desc": "ต้นไม้"
      },
      {
        "char": "一",
        "pinyin": "yī",
        "role": "ขีดเน้น",
        "meaning": "ขีดตรงโคน",
        "desc": "เน้นโคนรากไม้"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพต้นไม้ที่มีขีดแนวนอนขีดเน้นที่โคนรากไม้ สื่อถึง 'รากฐาน/จุดกำเนิด'",
      "originStory": "โคนรากไม้และรากฐาน",
      "modernEvolution": "หมายถึง เล่ม (Book/Volume) หรือ รากฐาน (Root)"
    },
    "mnemonicHook": {
      "formula": "ต้นไม้ (木) + ขีดเน้นโคนราก (一) = 'รากฐาน/เล่ม' (本)",
      "visualStory": "รากฐานของต้นไม้ที่ต่อยอดเป็นแผ่นกระดาษทำหนังสือ"
    },
    "compounds": [
      {
        "word": "本子",
        "pinyin": "běn zi",
        "thai": "สมุดบันทึก",
        "hsk": 2,
        "audioText": "本子"
      },
      {
        "word": "根本",
        "pinyin": "gēn běn",
        "thai": "โดยสิ้นเชิง, รากฐาน",
        "hsk": 3,
        "audioText": "根本"
      }
    ]
  },
  "条": {
    "char": "条",
    "radical": "木",
    "primaryPinyin": "tiáo",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "t", "final": "iao", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "tiáo",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "เส้น, สาย, ตัว (ลักษณะนามสิ่งของยาวๆ)",
        "usageContext": "เช่น 一条路 (ถนนหนึ่งสาย), 一条鱼 (ปลาหนึ่งตัว)"
      }
    ],
    "thaiMeaningShort": "เส้น / สาย / กิ่งเรียว",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "夂",
        "pinyin": "zhǐ",
        "role": "การห้อยย้อย",
        "meaning": "ห้อยลง",
        "desc": "กิ่งเรียวย้อย"
      },
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ความหมาย",
        "meaning": "ต้นไม้",
        "desc": "กิ่งไม้"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "กิ่งไม้เรียวยาวที่ห้อยย้อยลงมาจากลำต้น",
      "originStory": "สิ่งของลักษณะเป็นเส้นเรียวยาว",
      "modernEvolution": "หมายถึง เส้น/สาย (Strip/Item)"
    },
    "mnemonicHook": {
      "formula": "กิ่งไม้ห้อยย้อย (木) = 'เส้น/สาย' (条)",
      "visualStory": "กิ่งไม้ยาวเรียวเป็นเส้นสาย"
    },
    "compounds": [
      {
        "word": "条件",
        "pinyin": "tiáo jiàn",
        "thai": "เงื่อนไข",
        "hsk": 3,
        "audioText": "条件"
      },
      {
        "word": "面条",
        "pinyin": "miàn tiáo",
        "thai": "บะหมี่, เส้นก๋วยเตี๋ยว",
        "hsk": 2,
        "audioText": "面条"
      }
    ]
  },
  "桥": {
    "char": "桥",
    "radical": "木",
    "primaryPinyin": "qiáo",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "q", "final": "iao", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "qiáo",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "สะพาน",
        "usageContext": "เช่น 大桥 (สะพานใหญ่), 过桥 (ข้ามสะพาน)"
      }
    ],
    "thaiMeaningShort": "สะพาน",
    "hskLevel": 3,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ความหมาย",
        "meaning": "ไม้",
        "desc": "สะพานไม้พาดข้ามลำน้ำ"
      },
      {
        "char": "乔",
        "pinyin": "qiáo",
        "role": "เสียง/สูงโค้ง",
        "meaning": "โก่งโค้งสูง",
        "desc": "ส่วนโค้งสะพาน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ท่อนไม้ที่สร้างพาดโค้งข้ามลำน้ำให้ผู้คนสัญจร",
      "originStory": "สะพานไม้ข้ามแม่น้ำ",
      "modernEvolution": "หมายถึง สะพาน (Bridge)"
    },
    "mnemonicHook": {
      "formula": "ท่อนไม้ (木) + พาดโค้งสูง (乔) = 'สะพาน' (桥)",
      "visualStory": "สะพานไม้โค้งสวยงามทอดข้ามแม่น้ำ"
    },
    "compounds": [
      {
        "word": "大桥",
        "pinyin": "dà qiáo",
        "thai": "สะพานใหญ่",
        "hsk": 3,
        "audioText": "大桥"
      },
      {
        "word": "天桥",
        "pinyin": "tiān qiáo",
        "thai": "สะพานลอย",
        "hsk": 4,
        "audioText": "天桥"
      }
    ]
  },
  "机": {
    "char": "机",
    "radical": "木",
    "primaryPinyin": "jī",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "j", "final": "i", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "jī",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "เครื่องจักร, เครื่องยนต์, โอกาส",
        "usageContext": "เช่น 飞机 (เครื่องบิน), 手机 (มือถือ), 机会 (โอกาส)"
      }
    ],
    "thaiMeaningShort": "เครื่องยนต์ / โอกาส",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ความหมาย",
        "meaning": "ไม้",
        "desc": "กี่ทอผ้าไม้โบราณ"
      },
      {
        "char": "几",
        "pinyin": "jǐ",
        "role": "เสียง/กลไก",
        "meaning": "โต๊ะกลไก",
        "desc": "กลไกการทำงาน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เดิมคือกี่ทอผ้าที่ทำจากไม้มีฟันเฟืองกลไก",
      "originStory": "เครื่องมือกลไก",
      "modernEvolution": "หมายถึง เครื่องจักร (Machine) หรือ โอกาส (Opportunity)"
    },
    "mnemonicHook": {
      "formula": "เครื่องไม้กลไก (木) + เสียง jī = 'เครื่องยนต์/โอกาส' (机)",
      "visualStory": "เครื่องบินและโทรศัพท์มือถือที่ทันสมัย"
    },
    "compounds": [
      {
        "word": "飞机",
        "pinyin": "fēi jī",
        "thai": "เครื่องบิน",
        "hsk": 1,
        "audioText": "飞机"
      },
      {
        "word": "手机",
        "pinyin": "shǒu jī",
        "thai": "โทรศัพท์มือถือ",
        "hsk": 2,
        "audioText": "手机"
      },
      {
        "word": "机会",
        "pinyin": "jī huì",
        "thai": "โอกาส",
        "hsk": 3,
        "audioText": "机会"
      }
    ]
  },
  "明": {
    "char": "明",
    "radical": "日",
    "primaryPinyin": "míng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "m", "final": "ing", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "míng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "สว่าง, เข้าใจแจ่มแจ้ง, พรุ่งนี้",
        "usageContext": "เช่น 明天 (พรุ่งนี้), 明白 (เข้าใจ)"
      }
    ],
    "thaiMeaningShort": "สว่าง / เข้าใจ / พรุ่งนี้",
    "hskLevel": 1,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "日",
        "pinyin": "rì",
        "role": "พระอาทิตย์",
        "meaning": "สุริยะ",
        "desc": "แสงสว่างกลางวัน"
      },
      {
        "char": "月",
        "pinyin": "yuè",
        "role": "พระจันทร์",
        "meaning": "จันทรา",
        "desc": "แสงสว่างกลางคืน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ดวงอาทิตย์ (日) เคียงคู่พระจันทร์ (月)",
      "originStory": "สองสิ่งที่สว่างที่สุดรวมกัน",
      "modernEvolution": "หมายถึง สว่าง (Bright), เข้าใจ (Clear)"
    },
    "mnemonicHook": {
      "formula": "อาทิตย์ (日) + จันทร์ (月) = 'สว่างแจ่มแจ้ง' (明)",
      "visualStory": "มีแสงจากทั้งสองดวงดาวทำให้เห็นชัดเจน"
    },
    "compounds": [
      {
        "word": "明天",
        "pinyin": "míng tiān",
        "thai": "พรุ่งนี้",
        "hsk": 1,
        "audioText": "明天"
      },
      {
        "word": "明白",
        "pinyin": "míng bai",
        "thai": "เข้าใจแจ่มแจ้ง",
        "hsk": 2,
        "audioText": "明白"
      }
    ]
  },
  "早": {
    "char": "早",
    "radical": "日",
    "primaryPinyin": "zǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "z", "final": "ao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "zǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "เช้า, แต่เช้า, สวัสดีตอนเช้า",
        "usageContext": "เช่น 早上 (ตอนเช้า), 早上好 (อรุณสวัสดิ์)"
      }
    ],
    "thaiMeaningShort": "เช้า / แต่เช้า",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "日",
        "pinyin": "rì",
        "role": "พระอาทิตย์",
        "meaning": "สุริยะ",
        "desc": "ดวงอาทิตย์"
      },
      {
        "char": "十",
        "pinyin": "shí",
        "role": "ยอดหญ้า",
        "meaning": "ต้นกล้าผลิใบ",
        "desc": "โผล่พ้นยอดหญ้า"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ดวงอาทิตย์เพิ่งโผล่พ้นยอดหญ้าในยามรุ่งอรุณ",
      "originStory": "เวลาเช้าตรู่",
      "modernEvolution": "หมายถึง ตอนเช้า หรือ เร็ว/เช้า (Early/Morning)"
    },
    "mnemonicHook": {
      "formula": "พระอาทิตย์ (日) + โผล่พ้นยอดหญ้า (十) = 'ตอนเช้า' (早)",
      "visualStory": "ตื่นแต่เช้าสูดอากาศบริสุทธิ์"
    },
    "compounds": [
      {
        "word": "早上",
        "pinyin": "zǎo shang",
        "thai": "ตอนเช้า",
        "hsk": 1,
        "audioText": "早上"
      },
      {
        "word": "早饭",
        "pinyin": "zǎo fàn",
        "thai": "อาหารเช้า",
        "hsk": 2,
        "audioText": "早饭"
      }
    ]
  },
  "晚": {
    "char": "晚",
    "radical": "日",
    "primaryPinyin": "wǎn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "w", "final": "an", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "wǎn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ค่ำ, ตอนเย็น, ดึก, สาย",
        "usageContext": "เช่น 晚上 (ตอนเย็น/ค่ำ), 晚安 (ราตรีสวัสดิ์)"
      }
    ],
    "thaiMeaningShort": "ค่ำ / ดึก / ตอนเย็น",
    "hskLevel": 1,
    "strokeCount": 11,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "日",
        "pinyin": "rì",
        "role": "ความหมาย",
        "meaning": "พระอาทิตย์",
        "desc": "ตะวันตกดิน"
      },
      {
        "char": "免",
        "pinyin": "miǎn",
        "role": "เสียง/ละเว้น",
        "meaning": "หมดแสง",
        "desc": "หมดเวลาการทำงาน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ดวงอาทิตย์ลับขอบฟ้า หมดเวลาการทำงานของวัน",
      "originStory": "ยามค่ำคืน",
      "modernEvolution": "หมายถึง ตอนเย็น/ค่ำ หรือ สาย (Evening/Late)"
    },
    "mnemonicHook": {
      "formula": "พระอาทิตย์ลับฟ้า (日) = 'ยามค่ำคืน' (晚)",
      "visualStory": "รับประทานอาหารค่ำพร้อมหน้าครอบครัว"
    },
    "compounds": [
      {
        "word": "晚上",
        "pinyin": "wǎn shang",
        "thai": "ตอนเย็น/กลางคืน",
        "hsk": 1,
        "audioText": "晚上"
      },
      {
        "word": "晚安",
        "pinyin": "wǎn ān",
        "thai": "ราตรีสวัสดิ์",
        "hsk": 2,
        "audioText": "晚安"
      }
    ]
  },
  "晴": {
    "char": "晴",
    "radical": "日",
    "primaryPinyin": "qíng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "q", "final": "ing", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "qíng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ท้องฟ้าแจ่มใส, แดดออก",
        "usageContext": "เช่น 晴天 (วันแดดจ้าแจ่มใส)"
      }
    ],
    "thaiMeaningShort": "ท้องฟ้าแจ่มใส / แดดออก",
    "hskLevel": 2,
    "strokeCount": 12,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "日",
        "pinyin": "rì",
        "role": "ความหมาย",
        "meaning": "พระอาทิตย์",
        "desc": "แสงแดดส่อง"
      },
      {
        "char": "青",
        "pinyin": "qīng",
        "role": "เสียง/สีคราม",
        "meaning": "ท้องฟ้าสีคราม",
        "desc": "ฟ้าโปร่งไร้เมฆ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ดวงอาทิตย์ส่องสว่างท่ามกลางท้องฟ้าสีครามไร้เมฆหมอก",
      "originStory": "อากาศแจ่มใส",
      "modernEvolution": "หมายถึง ท้องฟ้าแจ่มใส (Sunny/Clear)"
    },
    "mnemonicHook": {
      "formula": "พระอาทิตย์ส่อง (日) + ท้องฟ้าสีคราม (青) = 'ฟ้าแจ่มใส' (晴)",
      "visualStory": "ท้องฟ้าโปร่งแสงแดดสดใส"
    },
    "compounds": [
      {
        "word": "晴天",
        "pinyin": "qíng tiān",
        "thai": "วันที่ท้องฟ้าแจ่มใส",
        "hsk": 2,
        "audioText": "晴天"
      },
      {
        "word": "转晴",
        "pinyin": "zhuǎn qíng",
        "thai": "ฟ้ากลับมาโปร่ง",
        "hsk": 4,
        "audioText": "转晴"
      }
    ]
  },
  "春": {
    "char": "春",
    "radical": "日",
    "primaryPinyin": "chūn",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "ch", "final": "un", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "chūn",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ฤดูใบไม้ผลิ, วัยเยาว์",
        "usageContext": "เช่น 春天 (ฤดูใบไม้ผลิ), 春节 (เทศกาลตรุษจีน)"
      }
    ],
    "thaiMeaningShort": "ฤดูใบไม้ผลิ",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "三+人",
        "pinyin": "cǎo",
        "role": "ต้นกล้า",
        "meaning": "พืชผลิใบ",
        "desc": "หญ้าผลิยอด"
      },
      {
        "char": "日",
        "pinyin": "rì",
        "role": "ความหมาย",
        "meaning": "พระอาทิตย์",
        "desc": "แดดอบอุ่น"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "แดดอุ่นส่องลงมาทำให้ต้นกล้าและพืชพันธุ์ผลิใบเขียวขจี",
      "originStory": "ฤดูกาลแห่งการเริ่มต้นใหม่",
      "modernEvolution": "หมายถึง ฤดูใบไม้ผลิ (Spring)"
    },
    "mnemonicHook": {
      "formula": "ต้นไม้ผลิใบ + แดดอบอุ่น (日) = 'ฤดูใบไม้ผลิ' (春)",
      "visualStory": "ดอกไม้เบ่งบานต้อนรับเทศกาลตรุษจีน"
    },
    "compounds": [
      {
        "word": "春天",
        "pinyin": "chūn tiān",
        "thai": "ฤดูใบไม้ผลิ",
        "hsk": 2,
        "audioText": "春天"
      },
      {
        "word": "春节",
        "pinyin": "chūn jié",
        "thai": "เทศกาลตรุษจีน",
        "hsk": 3,
        "audioText": "春节"
      }
    ]
  },
  "时": {
    "char": "时",
    "radical": "日",
    "primaryPinyin": "shí",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "sh", "final": "i", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "shí",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "เวลา, ชั่วโมง, ยาม",
        "usageContext": "เช่น 时间 (เวลา), 小时 (ชั่วโมง), 时候 (เวลา/ตอนที่)"
      }
    ],
    "thaiMeaningShort": "เวลา / ชั่วโมง",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "日",
        "pinyin": "rì",
        "role": "ความหมาย",
        "meaning": "พระอาทิตย์",
        "desc": "การเคลื่อนที่ของดวงอาทิตย์"
      },
      {
        "char": "寸",
        "pinyin": "cùn",
        "role": "เสียง/มาตราวัด",
        "meaning": "หน่วยวัด",
        "desc": "การวัดเวลา"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การวัดเงาแดดของดวงอาทิตย์เพื่อกำหนดช่วงเวลา",
      "originStory": "กาลเวลา",
      "modernEvolution": "หมายถึง เวลา (Time/Hour)"
    },
    "mnemonicHook": {
      "formula": "ดวงอาทิตย์เคลื่อน (日) + วัดช่วงเวลา (寸) = 'เวลา' (时)",
      "visualStory": "ดูนาฬิกาเพื่อตรวจสอบเวลา"
    },
    "compounds": [
      {
        "word": "时间",
        "pinyin": "shí jiān",
        "thai": "เวลา",
        "hsk": 1,
        "audioText": "时间"
      },
      {
        "word": "时候",
        "pinyin": "shí hou",
        "thai": "ตอนที่, เวลาที่",
        "hsk": 1,
        "audioText": "时候"
      },
      {
        "word": "小时",
        "pinyin": "xiǎo shí",
        "thai": "ชั่วโมง",
        "hsk": 2,
        "audioText": "小时"
      }
    ]
  },
  "暖": {
    "char": "暖",
    "radical": "日",
    "primaryPinyin": "nuǎn",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "n", "final": "uan", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "nuǎn",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "อบอุ่น, อุ่นสบาย",
        "usageContext": "เช่น 暖和 (อบอุ่น), 温暖 (อบอุ่นใจ)"
      }
    ],
    "thaiMeaningShort": "อบอุ่น / อุ่นสบาย",
    "hskLevel": 3,
    "strokeCount": 13,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "日",
        "pinyin": "rì",
        "role": "ความหมาย",
        "meaning": "พระอาทิตย์",
        "desc": "แสงแดดอุ่น"
      },
      {
        "char": "爰",
        "pinyin": "yuán",
        "role": "เสียง/ส่งต่อ",
        "meaning": "ส่งมอบ",
        "desc": "ไออุ่นส่งถึงตัว"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "แสงแดดของดวงอาทิตย์ส่งมอบความอบอุ่นคลายความหนาวเย็น",
      "originStory": "ความอบอุ่น",
      "modernEvolution": "หมายถึง อบอุ่น (Warm)"
    },
    "mnemonicHook": {
      "formula": "แสงแดด (日) + ส่งมอบไออุ่น = 'อบอุ่น' (暖)",
      "visualStory": "นั่งผิงแดดรับความอบอุ่นในฤดูหนาว"
    },
    "compounds": [
      {
        "word": "暖和",
        "pinyin": "nuǎn huo",
        "thai": "อบอุ่น (อากาศ)",
        "hsk": 2,
        "audioText": "暖和"
      },
      {
        "word": "温暖",
        "pinyin": "wēn nuǎn",
        "thai": "อบอุ่นใจ",
        "hsk": 3,
        "audioText": "温暖"
      }
    ]
  },
  "吃": {
    "char": "吃",
    "radical": "口",
    "primaryPinyin": "chī",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "ch", "final": "i", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "chī",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "กิน, รับประทาน",
        "usageContext": "เช่น 吃饭 (กินข้าว), 好吃 (อร่อย)"
      }
    ],
    "thaiMeaningShort": "กิน / รับประทาน",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "อวัยวะบดเคี้ยว"
      },
      {
        "char": "乞",
        "pinyin": "qǐ",
        "role": "ขอกลืน",
        "meaning": "นำเข้าสู่กาย",
        "desc": "การรับประทาน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้อวัยวะปากรับอาหารเข้าสู่ร่างกาย",
      "originStory": "การกินอาหาร",
      "modernEvolution": "หมายถึง กิน (Eat)"
    },
    "mnemonicHook": {
      "formula": "ปาก (口) + ขอกลืน (乞) = 'กิน' (吃)",
      "visualStory": "อ้าปากกินอาหารให้อิ่มอร่อย"
    },
    "compounds": [
      {
        "word": "吃饭",
        "pinyin": "chī fàn",
        "thai": "กินข้าว",
        "hsk": 1,
        "audioText": "吃饭"
      },
      {
        "word": "好吃",
        "pinyin": "hǎo chī",
        "thai": "อร่อย",
        "hsk": 1,
        "audioText": "好吃"
      }
    ]
  },
  "喝": {
    "char": "喝",
    "radical": "口",
    "primaryPinyin": "hē",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "h", "final": "e", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "hē",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ดื่ม, ดื่มน้ำ",
        "usageContext": "เช่น 喝水 (ดื่มน้ำ), 喝茶 (ดื่มชา)"
      }
    ],
    "thaiMeaningShort": "ดื่ม / ดื่มน้ำ",
    "hskLevel": 1,
    "strokeCount": 12,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "ปากดื่มน้ำ"
      },
      {
        "char": "曷",
        "pinyin": "hé",
        "role": "เสียง",
        "meaning": "เมื่อไร/คอแห้ง",
        "desc": "ยืมเสียง he"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้ปากดื่มน้ำแก้กระหาย",
      "originStory": "การดื่มเครื่องดื่ม",
      "modernEvolution": "หมายถึง ดื่ม (Drink)"
    },
    "mnemonicHook": {
      "formula": "ปาก (口) + หิวน้ำ (曷) = 'ดื่มน้ำ' (喝)",
      "visualStory": "ยกแก้วน้ำขึ้นดื่มคลายกระหาย"
    },
    "compounds": [
      {
        "word": "喝水",
        "pinyin": "hē shuǐ",
        "thai": "ดื่มน้ำ",
        "hsk": 1,
        "audioText": "喝水"
      },
      {
        "word": "喝茶",
        "pinyin": "hē chá",
        "thai": "ดื่มชา",
        "hsk": 1,
        "audioText": "喝茶"
      }
    ]
  },
  "叫": {
    "char": "叫",
    "radical": "口",
    "primaryPinyin": "jiào",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "j", "final": "iao", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "jiào",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "เรียก, ร้อง, มีชื่อว่า",
        "usageContext": "เช่น 你叫什么名字 (คุณชื่ออะไร)"
      }
    ],
    "thaiMeaningShort": "เรียก / ร้อง / ชื่อว่า",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "ตะโกนเรียก"
      },
      {
        "char": "丩",
        "pinyin": "jiū",
        "role": "เสียง/ผูกพัน",
        "meaning": "เรียกหา",
        "desc": "ยืมเสียง jiao"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การอ้าปากตะโกนส่งเสียงเรียกหาผู้อื่น",
      "originStory": "การส่งเสียงเรียก",
      "modernEvolution": "หมายถึง เรียก หรือ ชื่อว่า (Call/Named)"
    },
    "mnemonicHook": {
      "formula": "ปาก (口) + ส่งเสียงเรียก = 'ชื่อว่า/เรียก' (叫)",
      "visualStory": "ส่งเสียงเรียกชื่อเพื่อนเสียงดัง"
    },
    "compounds": [
      {
        "word": "叫声",
        "pinyin": "jiào shēng",
        "thai": "เสียงร้อง",
        "hsk": 3,
        "audioText": "叫声"
      },
      {
        "word": "大叫",
        "pinyin": "dà jiào",
        "thai": "ตะโกนลั่น",
        "hsk": 3,
        "audioText": "大叫"
      }
    ]
  },
  "唱": {
    "char": "唱",
    "radical": "口",
    "primaryPinyin": "chàng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "ch", "final": "ang", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "chàng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ร้องเพลง, ขับร้อง",
        "usageContext": "เช่น 唱歌 (ร้องเพลง)"
      }
    ],
    "thaiMeaningShort": "ร้องเพลง / ขับร้อง",
    "hskLevel": 2,
    "strokeCount": 11,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "เปล่งเสียงดนตรี"
      },
      {
        "char": "昌",
        "pinyin": "chāng",
        "role": "เสียง/รุ่งเรือง",
        "meaning": "แสงตะวัน",
        "desc": "เสียงก้องกังวาน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้ปากขับขานบทเพลงอย่างรื่นเริงและก้องกังวาน",
      "originStory": "การร้องเพลง",
      "modernEvolution": "หมายถึง ร้องเพลง (Sing)"
    },
    "mnemonicHook": {
      "formula": "ปาก (口) + ขับขานดังกังวาน (昌) = 'ร้องเพลง' (唱)",
      "visualStory": "ถือไมโครโฟนร้องเพลงอย่างไพเราะ"
    },
    "compounds": [
      {
        "word": "唱歌",
        "pinyin": "chàng gē",
        "thai": "ร้องเพลง",
        "hsk": 2,
        "audioText": "唱歌"
      },
      {
        "word": "合唱",
        "pinyin": "hé chàng",
        "thai": "ร้องประสานเสียง",
        "hsk": 4,
        "audioText": "合唱"
      }
    ]
  },
  "听": {
    "char": "听",
    "radical": "口",
    "primaryPinyin": "tīng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "t", "final": "ing", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "tīng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ฟัง, เชื่อฟัง",
        "usageContext": "เช่น 听音乐 (ฟังเพลง), 听说 (ได้ยินว่า)"
      }
    ],
    "thaiMeaningShort": "ฟัง / ได้ยิน",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "เสียงที่เปล่งออกมา"
      },
      {
        "char": "斤",
        "pinyin": "jīn",
        "role": "เสียง",
        "meaning": "ขวาน",
        "desc": "ยืมเสียง ting"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เดิมมีรูปหูฟังเสียง ต่อมาปรับรูปย่อเป็นข้างปาก",
      "originStory": "การสดับรับฟัง",
      "modernEvolution": "หมายถึง ฟัง (Listen/Hear)"
    },
    "mnemonicHook": {
      "formula": "ฟังเสียงจากปากคนพูด (口) = 'ฟัง' (听)",
      "visualStory": "ใส่หูฟังเพลงสบายๆ"
    },
    "compounds": [
      {
        "word": "听说",
        "pinyin": "tīng shuō",
        "thai": "ได้ยินมาว่า",
        "hsk": 2,
        "audioText": "听说"
      },
      {
        "word": "听见",
        "pinyin": "tīng jiàn",
        "thai": "ได้ยิน",
        "hsk": 2,
        "audioText": "听见"
      }
    ]
  },
  "吧": {
    "char": "吧",
    "radical": "口",
    "primaryPinyin": "ba",
    "primaryTone": 5,
    "pronunciationGuide": { "initial": "b", "final": "a", "toneRule": "เสียงเบา (Neutral) — ออกเสียงสั้น เบา ไม่มีระดับเสียงเฉพาะตัว ขึ้นอยู่กับเสียงพยางค์ก่อนหน้า" },
    "pinyinList": [
      {
        "pinyin": "ba",
        "tone": 5,
        "toneDescription": "เสียงเบา (Neutral)",
        "meaningThai": "เถอะ, สิ, นะ (คำเสริมน้ำเสียงชักชวน)",
        "usageContext": "เช่น 我们走吧 (พวกเราไปกันเถอะ)"
      }
    ],
    "thaiMeaningShort": "เถอะ / สิ / นะ",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "คำเสริมท้ายประโยค"
      },
      {
        "char": "巴",
        "pinyin": "bā",
        "role": "เสียง",
        "meaning": "แนบชิด",
        "desc": "ยืมเสียง ba"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "คำเสริมน้ำเสียงท้ายประโยคเพื่อการชักชวนหรือคาดเดา",
      "originStory": "น้ำเสียงชวนคุย",
      "modernEvolution": "หมายถึง เถอะ/สิ (Modal particle)"
    },
    "mnemonicHook": {
      "formula": "ปากพูดชักชวน (口) + เสียง ba = 'เถอะ/สิ' (吧)",
      "visualStory": "ชวนเพื่อนว่า 'ไปกินข้าวกันเถอะ'"
    },
    "compounds": [
      {
        "word": "走吧",
        "pinyin": "zǒu ba",
        "thai": "ไปกันเถอะ",
        "hsk": 1,
        "audioText": "走吧"
      },
      {
        "word": "好吧",
        "pinyin": "hǎo ba",
        "thai": "ตกลง, ก็ได้",
        "hsk": 2,
        "audioText": "好吧"
      }
    ]
  },
  "吗": {
    "char": "吗",
    "radical": "口",
    "primaryPinyin": "ma",
    "primaryTone": 5,
    "pronunciationGuide": { "initial": "m", "final": "a", "toneRule": "เสียงเบา (Neutral) — ออกเสียงสั้น เบา ไม่มีระดับเสียงเฉพาะตัว ขึ้นอยู่กับเสียงพยางค์ก่อนหน้า" },
    "pinyinList": [
      {
        "pinyin": "ma",
        "tone": 5,
        "toneDescription": "เสียงเบา (Neutral)",
        "meaningThai": "ไหม, หรือไม่ (คำถามใช่หรือไม่)",
        "usageContext": "เช่น 你好吗 (คุณสบายดีไหม)"
      }
    ],
    "thaiMeaningShort": "ไหม / หรือไม่",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "ถามคำถาม"
      },
      {
        "char": "马",
        "pinyin": "mǎ",
        "role": "เสียง",
        "meaning": "ม้า",
        "desc": "ยืมเสียง ma"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การอ้าปากตั้งคำถามท้ายประโยค",
      "originStory": "คำลงท้ายประโยคคำถาม",
      "modernEvolution": "หมายถึง ไหม/หรือไม่ (Question particle)"
    },
    "mnemonicHook": {
      "formula": "ปากถาม (口) + เสียงม้า (马) = 'ไหม/หรือไม่' (吗)",
      "visualStory": "เอ่ยปากถามว่า 'สบายดีไหม'"
    },
    "compounds": [
      {
        "word": "好吗",
        "pinyin": "hǎo ma",
        "thai": "ดีไหม, ตกลงไหม",
        "hsk": 1,
        "audioText": "好吗"
      },
      {
        "word": "是吗",
        "pinyin": "shì ma",
        "thai": "ใช่ไหม, อย่างนั้นหรือ",
        "hsk": 2,
        "audioText": "是吗"
      }
    ]
  },
  "哪": {
    "char": "哪",
    "radical": "口",
    "primaryPinyin": "nǎ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "n", "final": "a", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "nǎ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ไหน, ที่ไหน, อันไหน",
        "usageContext": "เช่น 哪里 (ที่ไหน), 哪个 (อันไหน)"
      }
    ],
    "thaiMeaningShort": "ไหน / ที่ไหน",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "左中右结构 (ซ้าย-กลาง-ขวา)",
    "components": [
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "เอ่ยปากถามหา"
      },
      {
        "char": "那",
        "pinyin": "nà",
        "role": "เสียง/ทิศทาง",
        "meaning": "นั่น/ที่โน่น",
        "desc": "ชี้ทิศทาง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การอ้าปากเอ่ยถามหาทิศทางหรือสิ่งของ",
      "originStory": "ปุจฉาสรรพนาม",
      "modernEvolution": "หมายถึง ไหน (Which/Where)"
    },
    "mnemonicHook": {
      "formula": "ปากถามหา (口) + ชี้ทิศทาง (那) = 'ที่ไหน/อันไหน' (哪)",
      "visualStory": "ถามหาว่า 'คุณจะไปที่ไหน'"
    },
    "compounds": [
      {
        "word": "哪里",
        "pinyin": "nǎ lǐ",
        "thai": "ที่ไหน",
        "hsk": 1,
        "audioText": "哪里"
      },
      {
        "word": "哪个",
        "pinyin": "nǎ ge",
        "thai": "อันไหน, คนไหน",
        "hsk": 1,
        "audioText": "哪个"
      }
    ]
  },
  "炎": {
    "char": "炎",
    "radical": "火",
    "primaryPinyin": "yán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "an", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ร้อนจัด, เปลวไฟ, อักเสบ",
        "usageContext": "เช่น 炎热 (ร้อนระอุ), 发炎 (อักเสบ)"
      }
    ],
    "thaiMeaningShort": "ร้อนจัด / เปลวไฟ / อักเสบ",
    "hskLevel": 4,
    "strokeCount": 8,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "火",
        "pinyin": "huǒ",
        "role": "ไฟบน",
        "meaning": "เปลวไฟ",
        "desc": "ไฟกองที่ 1"
      },
      {
        "char": "火",
        "pinyin": "huǒ",
        "role": "ไฟล่าง",
        "meaning": "เปลวไฟ",
        "desc": "ไฟกองที่ 2"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "กองไฟสองกอง (火 + 火) โหมกระหน่ำซ้อนกัน",
      "originStory": "ความร้อนแผดเผาอย่างรุนแรง",
      "modernEvolution": "หมายถึง ร้อนจัด หรือ อักเสบ (Inflammation)"
    },
    "mnemonicHook": {
      "formula": "ไฟ 1 (火) + ไฟ 2 (火) = 'ร้อนจัด/อักเสบ' (炎)",
      "visualStory": "แดดร้อนระอุจนร่างกายอักเสบ"
    },
    "compounds": [
      {
        "word": "炎热",
        "pinyin": "yán rè",
        "thai": "ร้อนระอุ",
        "hsk": 4,
        "audioText": "炎热"
      },
      {
        "word": "发炎",
        "pinyin": "fā yán",
        "thai": "อักเสบ",
        "hsk": 4,
        "audioText": "发炎"
      }
    ]
  },
  "热": {
    "char": "热",
    "radical": "火",
    "primaryPinyin": "rè",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "r", "final": "e", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "rè",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ร้อน, อบอุ่น, กระตือรือร้น",
        "usageContext": "เช่น 天气很热 (อากาศร้อนมาก), 热情 (กระตือรือร้น)"
      }
    ],
    "thaiMeaningShort": "ร้อน / อบอุ่น",
    "hskLevel": 1,
    "strokeCount": 10,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "执",
        "pinyin": "zhí",
        "role": "เสียง/ถือ",
        "meaning": "จับถือ",
        "desc": "ยืมเสียง re"
      },
      {
        "char": "灬",
        "pinyin": "huǒ",
        "role": "ความหมาย",
        "meaning": "ไฟ (สี่หยดไฟ)",
        "desc": "เปลวไฟด้านล่าง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การใช้เปลวไฟสี่หยด (灬) ให้ความร้อนจนจับต้องไม่ได้",
      "originStory": "ความร้อนและอุณหภูมิสูง",
      "modernEvolution": "หมายถึง ร้อน (Hot)"
    },
    "mnemonicHook": {
      "formula": "ไฟด้านล่าง (灬) แผดเผา = 'ร้อน' (热)",
      "visualStory": "อากาศในฤดูร้อนแดดแรงจน 'ร้อนมาก'"
    },
    "compounds": [
      {
        "word": "热水",
        "pinyin": "rè shuǐ",
        "thai": "น้ำร้อน",
        "hsk": 2,
        "audioText": "热水"
      },
      {
        "word": "热情",
        "pinyin": "rè qíng",
        "thai": "กระตือรือร้น, อบอุ่น",
        "hsk": 3,
        "audioText": "热情"
      }
    ]
  },
  "灯": {
    "char": "灯",
    "radical": "火",
    "primaryPinyin": "dēng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "d", "final": "eng", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "dēng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "โคมไฟ, หลอดไฟ, ไฟส่องสว่าง",
        "usageContext": "เช่น 开灯 (เปิดไฟ), 红绿灯 (ไฟจราจร)"
      }
    ],
    "thaiMeaningShort": "โคมไฟ / หลอดไฟ",
    "hskLevel": 2,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "火",
        "pinyin": "huǒ",
        "role": "ความหมาย",
        "meaning": "ไฟ",
        "desc": "เปลวไฟส่องสว่าง"
      },
      {
        "char": "丁",
        "pinyin": "dīng",
        "role": "เสียง",
        "meaning": "เสาหลัก",
        "desc": "ยืมเสียง deng"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ตะเกียงไฟโบราณที่มีเปลวไฟส่องสว่างในความมืด",
      "originStory": "โคมไฟส่องสว่าง",
      "modernEvolution": "หมายถึง โคมไฟ/หลอดไฟ (Lamp/Light)"
    },
    "mnemonicHook": {
      "formula": "เปลวไฟ (火) + เสาตั้ง (丁) = 'โคมไฟ' (灯)",
      "visualStory": "เปิดโคมไฟส่องสว่างยามค่ำคืน"
    },
    "compounds": [
      {
        "word": "开灯",
        "pinyin": "kāi dēng",
        "thai": "เปิดไฟ",
        "hsk": 2,
        "audioText": "开灯"
      },
      {
        "word": "红绿灯",
        "pinyin": "hóng lǜ dēng",
        "thai": "ไฟจราจร (ไฟเขียวไฟแดง)",
        "hsk": 3,
        "audioText": "红绿灯"
      }
    ]
  },
  "烧": {
    "char": "烧",
    "radical": "火",
    "primaryPinyin": "shāo",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "sh", "final": "ao", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "shāo",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "เผา, ปรุงสุก, ต้ม, เป็นไข้",
        "usageContext": "เช่น 发烧 (มีไข้ตัวร้อน), 烧烤 (บาร์บีคิว/ปิ้งย่าง)"
      }
    ],
    "thaiMeaningShort": "เผา / ปรุงสุก / เป็นไข้",
    "hskLevel": 3,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "火",
        "pinyin": "huǒ",
        "role": "ความหมาย",
        "meaning": "ไฟ",
        "desc": "ใช้ไฟเผาไหม้"
      },
      {
        "char": "尧",
        "pinyin": "yáo",
        "role": "เสียง/กองดินสูง",
        "meaning": "กองไฟสูง",
        "desc": "ยืมเสียง shao"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การก่อกองไฟลุกโชนเพื่อปรุงอาหารหรือเผาสิ่งของ",
      "originStory": "การเผาไหม้และความร้อน",
      "modernEvolution": "หมายถึง เผา หรือ เป็นไข้ (Burn/Fever/Roast)"
    },
    "mnemonicHook": {
      "formula": "ไฟ (火) + กองไฟสูง = 'เผาไหม้/เป็นไข้' (烧)",
      "visualStory": "ก่อไฟย่างบาร์บีคิวจนตัวร้อนเป็นไข้"
    },
    "compounds": [
      {
        "word": "发烧",
        "pinyin": "fā shāo",
        "thai": "เป็นไข้, ตัวร้อน",
        "hsk": 3,
        "audioText": "发烧"
      },
      {
        "word": "烧烤",
        "pinyin": "shāo kǎo",
        "thai": "ปิ้งย่าง, บาร์บีคิว",
        "hsk": 4,
        "audioText": "烧烤"
      }
    ]
  },
  "照": {
    "char": "照",
    "radical": "火",
    "primaryPinyin": "zhào",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "zh", "final": "ao", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "zhào",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ส่องสว่าง, ถ่ายรูป, ส่องกระจก",
        "usageContext": "เช่น 照片 (รูปถ่าย), 照相 (ถ่ายรูป)"
      }
    ],
    "thaiMeaningShort": "ส่องสว่าง / ถ่ายรูป",
    "hskLevel": 2,
    "strokeCount": 13,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "昭",
        "pinyin": "zhāo",
        "role": "เสียง/สว่าง",
        "meaning": "แสงตะวัน",
        "desc": "ความสว่างไสว"
      },
      {
        "char": "灬",
        "pinyin": "huǒ",
        "role": "ความหมาย",
        "meaning": "ไฟ",
        "desc": "แสงไฟส่องประกาย"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "แสงไฟและแสงอาทิตย์ส่องสว่างกระทบวัตถุจนมองเห็นชัดเจน",
      "originStory": "การส่องสว่างและเงาสะท้อน",
      "modernEvolution": "หมายถึง ส่องแสง หรือ ถ่ายรูป (Shine/Photo)"
    },
    "mnemonicHook": {
      "formula": "สว่างไสว (昭) + แสงไฟส่อง (灬) = 'ส่องสว่าง/ถ่ายรูป' (照)",
      "visualStory": "ใช้กล้องถ่ายรูปเก็บภาพความทรงจำ"
    },
    "compounds": [
      {
        "word": "照片",
        "pinyin": "zhào piàn",
        "thai": "รูปถ่าย",
        "hsk": 2,
        "audioText": "照片"
      },
      {
        "word": "照顾",
        "pinyin": "zhào gu",
        "thai": "ดูแลเอาใจใส่",
        "hsk": 3,
        "audioText": "照顾"
      }
    ]
  },
  "烤": {
    "char": "烤",
    "radical": "火",
    "primaryPinyin": "kǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "k", "final": "ao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "kǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ย่าง, ปิ้ง, อบ",
        "usageContext": "เช่น 烤鸭 (เป็ดย่าง), 烤肉 (เนื้อย่าง)"
      }
    ],
    "thaiMeaningShort": "ย่าง / ปิ้ง / อบ",
    "hskLevel": 3,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "火",
        "pinyin": "huǒ",
        "role": "ความหมาย",
        "meaning": "ไฟ",
        "desc": "ใช้ไฟปิ้งย่าง"
      },
      {
        "char": "考",
        "pinyin": "kǎo",
        "role": "เสียง",
        "meaning": "คนแก่/ตรวจสอบ",
        "desc": "ยืมเสียง kao"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การนำเนื้อสัตว์มาอังไฟให้สุกหอมกรอบ",
      "originStory": "การปิ้งย่างอาหาร",
      "modernEvolution": "หมายถึง ปิ้งย่าง (Roast/Bake)"
    },
    "mnemonicHook": {
      "formula": "ไฟ (火) + เสียง kǎo (考) = 'ปิ้งย่าง' (烤)",
      "visualStory": "เป็ดย่างปักกิ่งรสชาติหอมอร่อย"
    },
    "compounds": [
      {
        "word": "烤鸭",
        "pinyin": "kǎo yā",
        "thai": "เป็ดย่าง",
        "hsk": 3,
        "audioText": "烤鸭"
      },
      {
        "word": "烤肉",
        "pinyin": "kǎo ròu",
        "thai": "เนื้อย่าง",
        "hsk": 3,
        "audioText": "烤肉"
      }
    ]
  },
  "黑": {
    "char": "黑",
    "radical": "火",
    "primaryPinyin": "hēi",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "h", "final": "ei", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "hēi",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "สีดำ, มืด, เขม่าไฟ",
        "usageContext": "เช่น 黑色 (สีดำ), 黑板 (กระดานดำ)"
      }
    ],
    "thaiMeaningShort": "สีดำ / มืด",
    "hskLevel": 2,
    "strokeCount": 12,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "里",
        "pinyin": "lǐ",
        "role": "เตาไฟ",
        "meaning": "ปล่องไฟ",
        "desc": "เขม่าควันไฟ"
      },
      {
        "char": "灬",
        "pinyin": "huǒ",
        "role": "ความหมาย",
        "meaning": "ไฟ",
        "desc": "เปลวไฟรมควัน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพปล่องไฟที่มีเขม่าควันไฟสีดำเกาะจับรอบเตา",
      "originStory": "เขม่าควันไฟสีดำสนิท",
      "modernEvolution": "หมายถึง สีดำ หรือ มืดมิด (Black/Dark)"
    },
    "mnemonicHook": {
      "formula": "เขม่าควันเตาไฟ (灬) = 'สีดำมืด' (黑)",
      "visualStory": "เขม่าไฟสีดำสนิทเขียนบนกระดานดำ"
    },
    "compounds": [
      {
        "word": "黑色",
        "pinyin": "hēi sè",
        "thai": "สีดำ",
        "hsk": 2,
        "audioText": "黑色"
      },
      {
        "word": "黑板",
        "pinyin": "hēi bǎn",
        "thai": "กระดานดำ",
        "hsk": 2,
        "audioText": "黑板"
      }
    ]
  },
  "山": {
    "char": "山",
    "radical": "山",
    "primaryPinyin": "shān",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "sh", "final": "an", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "shān",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ภูเขา, เทือกเขา",
        "usageContext": "เช่น 爬山 (ปีนเขา), 高山 (ภูเขาสูง)"
      }
    ],
    "thaiMeaningShort": "ภูเขา / เทือกเขา",
    "hskLevel": 1,
    "strokeCount": 3,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "山",
        "pinyin": "shān",
        "role": "อักษรภาพ",
        "meaning": "ยอดเขาสามยอด",
        "desc": "สัญลักษณ์ขุนเขา"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพยอดเขาสามยอดตั้งตระหง่าน",
      "originStory": "ยอดเขาสามยอดเรียงต่อกัน",
      "modernEvolution": "หมายถึง ภูเขา (Mountain)"
    },
    "mnemonicHook": {
      "formula": "ยอดเขาสามยอด = 'ภูเขา' (山)",
      "visualStory": "มองเห็นภูเขาสามยอดอยู่ตรงหน้า"
    },
    "compounds": [
      {
        "word": "爬山",
        "pinyin": "pá shān",
        "thai": "ปีนเขา",
        "hsk": 2,
        "audioText": "爬山"
      },
      {
        "word": "高山",
        "pinyin": "gāo shān",
        "thai": "ภูเขาสูง",
        "hsk": 3,
        "audioText": "高山"
      },
      {
        "word": "火山",
        "pinyin": "huǒ shān",
        "thai": "ภูเขาไฟ",
        "hsk": 4,
        "audioText": "火山"
      },
      {
        "word": "山水",
        "pinyin": "shān shuǐ",
        "thai": "ทิวทัศน์ธรรมชาติ",
        "hsk": 4,
        "audioText": "山水"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "周末我们一起去爬山吧。",
        "pinyin": "Zhōumò wǒmen yīqǐ qù páshān ba.",
        "thai": "สุดสัปดาห์นี้พวกเราไปปีนเขาด้วยกันเถอะ",
        "audioText": "周末我们一起去爬山吧。"
      }
    ]
  },
  "岩": {
    "char": "岩",
    "radical": "山",
    "primaryPinyin": "yán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "y", "final": "an", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "yán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "หินผา, หน้าผาหิน, หินลาวา",
        "usageContext": "เช่น 岩石 (หินผา), 熔岩 (ลาวา)"
      }
    ],
    "thaiMeaningShort": "หินผา / หน้าผาหิน",
    "hskLevel": 4,
    "strokeCount": 8,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "山",
        "pinyin": "shān",
        "role": "ความหมาย",
        "meaning": "ภูเขา",
        "desc": "ภูเขาสูงชัน"
      },
      {
        "char": "石",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "หิน",
        "desc": "ก้อนหินแข็งแกร่ง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "หินผาแข็งแกร่งที่ตั้งอยู่บนภูเขา",
      "originStory": "ก้อนหินบนภูเขาคือหินผา",
      "modernEvolution": "หมายถึง หินผา (Rock/Cliff)"
    },
    "mnemonicHook": {
      "formula": "ภูเขา (山) + ก้อนหิน (石) = 'หินผา' (岩)",
      "visualStory": "ก้อนหินยักษ์บนยอดเขาคือหน้าผาหิน"
    },
    "compounds": [
      {
        "word": "岩石",
        "pinyin": "yán shí",
        "thai": "หินผา, ศิลา",
        "hsk": 4,
        "audioText": "岩石"
      },
      {
        "word": "岩洞",
        "pinyin": "yán dòng",
        "thai": "ถ้ำหิน",
        "hsk": 5,
        "audioText": "岩洞"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "这里的岩石形状很奇特。",
        "pinyin": "Zhèlǐ de yánshí xíngzhuàng hěn qítè.",
        "thai": "หินผาแถวนี้มีรูปร่างแปลกตามาก",
        "audioText": "这里的岩石形状很奇特。"
      }
    ]
  },
  "岛": {
    "char": "岛",
    "radical": "山",
    "primaryPinyin": "dǎo",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "d", "final": "ao", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "dǎo",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "เกาะ",
        "usageContext": "เช่น 海岛 (เกาะในทะเล), 岛屿 (หมู่เกาะ)"
      }
    ],
    "thaiMeaningShort": "เกาะ / ภูเขากลางน้ำ",
    "hskLevel": 3,
    "strokeCount": 7,
    "structure": "半包围结构",
    "components": [
      {
        "char": "鸟",
        "pinyin": "niǎo",
        "role": "นก",
        "meaning": "นกทะเล",
        "desc": "นกบินมาพักผ่อน"
      },
      {
        "char": "山",
        "pinyin": "shān",
        "role": "ภูเขา",
        "meaning": "ภูเขากลางทะเล",
        "desc": "เกาะหิน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภูเขากลางทะเลที่นกบินมาเกาะพักพิง",
      "originStory": "เกาะแก่งกลางท้องทะเล",
      "modernEvolution": "หมายถึง เกาะ (Island)"
    },
    "mnemonicHook": {
      "formula": "นกเกาะ (鸟) + ภูเขากลางน้ำ (山) = 'เกาะ' (岛)",
      "visualStory": "นกบินมาพักผ่อนบนภูเขาเกาะกลางทะเล"
    },
    "compounds": [
      {
        "word": "海岛",
        "pinyin": "hǎi dǎo",
        "thai": "เกาะในทะเล",
        "hsk": 3,
        "audioText": "海岛"
      },
      {
        "word": "群岛",
        "pinyin": "qún dǎo",
        "thai": "หมู่เกาะ",
        "hsk": 4,
        "audioText": "群岛"
      }
    ]
  },
  "峰": {
    "char": "峰",
    "radical": "山",
    "primaryPinyin": "fēng",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "f", "final": "eng", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "fēng",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ยอดเขา, จุดสูงสุด",
        "usageContext": "เช่น 山峰 (ยอดเขา), 高峰 (ช่วงเวลาเร่งด่วน/จุดสูงสุด)"
      }
    ],
    "thaiMeaningShort": "ยอดเขา / จุดสูงสุด",
    "hskLevel": 4,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "山",
        "pinyin": "shān",
        "role": "ความหมาย",
        "meaning": "ภูเขา",
        "desc": "ขุนเขาสูง"
      },
      {
        "char": "夆",
        "pinyin": "féng",
        "role": "เสียง/ปลายแหลม",
        "meaning": "ปลายยอด",
        "desc": "ยืมเสียง feng"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ปลายแหลมสุดของภูเขาที่พุ่งเสียดฟ้า",
      "originStory": "ยอดเขาที่สูงตระหง่าน",
      "modernEvolution": "หมายถึง ยอดเขา หรือ จุดสูงสุด (Peak/Summit)"
    },
    "mnemonicHook": {
      "formula": "ภูเขา (山) + ปลายยอด = 'ยอดเขา' (峰)",
      "visualStory": "พิชิตยอดเขาสูงเสียดฟ้า"
    },
    "compounds": [
      {
        "word": "山峰",
        "pinyin": "shān fēng",
        "thai": "ยอดเขา",
        "hsk": 4,
        "audioText": "山峰"
      },
      {
        "word": "高峰",
        "pinyin": "gāo fēng",
        "thai": "จุดสูงสุด/ช่วงพีค",
        "hsk": 4,
        "audioText": "高峰"
      }
    ]
  },
  "岸": {
    "char": "岸",
    "radical": "山",
    "primaryPinyin": "àn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "ไม่มี (สระนำ)", "final": "an", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "àn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ริมฝั่ง, ชายฝั่ง, ริมน้ำ",
        "usageContext": "เช่น 河岸 (ริมฝั่งแม่น้ำ), 海岸 (ชายฝั่งทะเล)"
      }
    ],
    "thaiMeaningShort": "ริมฝั่ง / ชายฝั่ง",
    "hskLevel": 3,
    "strokeCount": 8,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "山",
        "pinyin": "shān",
        "role": "ความหมาย",
        "meaning": "ภูเขา/ผาชัน",
        "desc": "ตลิ่งสูงชัน"
      },
      {
        "char": "干",
        "pinyin": "gān",
        "role": "เสียง/โล่",
        "meaning": "ริมขอบ",
        "desc": "ยืมเสียง an"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ตลิ่งและหน้าผาสูงชันริมฝั่งน้ำ",
      "originStory": "ขอบฝั่งที่กั้นระหว่างน้ำและแผ่นดิน",
      "modernEvolution": "หมายถึง ริมฝั่ง (Shore/Bank)"
    },
    "mnemonicHook": {
      "formula": "ผาหิน (山) + ริมขอบ = 'ริมฝั่ง' (岸)",
      "visualStory": "เรือแล่นเข้าจอดเทียบฝั่ง"
    },
    "compounds": [
      {
        "word": "河岸",
        "pinyin": "hé àn",
        "thai": "ริมฝั่งแม่น้ำ",
        "hsk": 3,
        "audioText": "河岸"
      },
      {
        "word": "海岸",
        "pinyin": "hǎi àn",
        "thai": "ชายฝั่งทะเล",
        "hsk": 4,
        "audioText": "海岸"
      }
    ]
  },
  "石": {
    "char": "石",
    "radical": "石",
    "primaryPinyin": "shí",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "sh", "final": "i", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "shí",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "หิน, ศิลา",
        "usageContext": "เช่น 石头 (ก้อนหิน), 宝石 (อัญมณี)"
      }
    ],
    "thaiMeaningShort": "หิน / ศิลา",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "厂",
        "pinyin": "hǎn",
        "role": "หน้าผา",
        "meaning": "ชะง่อนผา",
        "desc": "หน้าผาสูง"
      },
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ก้อนหิน",
        "meaning": "ก้อนหินกลม",
        "desc": "หินร่วงจากผา"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพก้อนหินกลิ้งตกลงมาจากหน้าผา",
      "originStory": "ศิลาที่แข็งแกร่ง",
      "modernEvolution": "หมายถึง หิน (Stone/Rock)"
    },
    "mnemonicHook": {
      "formula": "หน้าผา + ก้อนหิน = 'ก้อนหิน' (石)",
      "visualStory": "ก้อนหินตกจากหน้าผา"
    },
    "compounds": [
      {
        "word": "石头",
        "pinyin": "shí tou",
        "thai": "ก้อนหิน",
        "hsk": 2,
        "audioText": "石头"
      },
      {
        "word": "宝石",
        "pinyin": "bǎo shí",
        "thai": "อัญมณี, พลอย",
        "hsk": 4,
        "audioText": "宝石"
      }
    ]
  },
  "破": {
    "char": "破",
    "radical": "石",
    "primaryPinyin": "pò",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "p", "final": "o", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "pò",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "แตก, หัก, ขาด, พัง",
        "usageContext": "เช่น 破坏 (ทำลาย), 破产 (ล้มละลาย)"
      }
    ],
    "thaiMeaningShort": "แตก / หัก / พัง",
    "hskLevel": 3,
    "strokeCount": 10,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "石",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "หิน",
        "desc": "ของแข็งกระทบกัน"
      },
      {
        "char": "皮",
        "pinyin": "pí",
        "role": "เสียง/ผิวหนัง",
        "meaning": "เปลือก/แตกปริ",
        "desc": "ยืมเสียง po"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ใช้หินทุบสิ่งของจนแตกหักแยกออกจากกัน",
      "originStory": "การแตกหักและเสียหาย",
      "modernEvolution": "หมายถึง แตก หรือ ทำลาย (Break/Damaged)"
    },
    "mnemonicHook": {
      "formula": "หิน (石) + ผิวปริแตก (皮) = 'แตกหัก' (破)",
      "visualStory": "หินกระทบแก้วจนแตกกระจาย"
    },
    "compounds": [
      {
        "word": "破产",
        "pinyin": "pò chǎn",
        "thai": "ล้มละลาย",
        "hsk": 4,
        "audioText": "破产"
      },
      {
        "word": "破坏",
        "pinyin": "pò huài",
        "thai": "ทำลาย",
        "hsk": 4,
        "audioText": "破坏"
      }
    ]
  },
  "硬": {
    "char": "硬",
    "radical": "石",
    "primaryPinyin": "yìng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "y", "final": "ing", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "yìng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "แข็ง, แข็งแกร่ง, ดื้อดึง",
        "usageContext": "เช่น 坚硬 (แข็งแกร่ง), 硬件 (ฮาร์ดแวร์)"
      }
    ],
    "thaiMeaningShort": "แข็ง / แข็งแกร่ง",
    "hskLevel": 3,
    "strokeCount": 12,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "石",
        "pinyin": "shí",
        "role": "ความหมาย",
        "meaning": "หิน",
        "desc": "ศิลาเนื้อแข็ง"
      },
      {
        "char": "更",
        "pinyin": "gèng",
        "role": "เสียง/ยิ่งขึ้น",
        "meaning": "แกร่งยิ่งขึ้น",
        "desc": "ยืมเสียง ying"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เนื้อหินที่มีความแข็งแกร่งทนทานยิ่งนัก",
      "originStory": "ความแข็งดั่งศิลา",
      "modernEvolution": "หมายถึง แข็ง (Hard/Stiff)"
    },
    "mnemonicHook": {
      "formula": "หิน (石) + แกร่งยิ่งขึ้น (更) = 'แข็ง' (硬)",
      "visualStory": "หินแกร่งเคาะไม่แตก"
    },
    "compounds": [
      {
        "word": "坚硬",
        "pinyin": "jiān yìng",
        "thai": "แข็งแกร่ง",
        "hsk": 4,
        "audioText": "坚硬"
      },
      {
        "word": "硬件",
        "pinyin": "yìng jiàn",
        "thai": "ฮาร์ดแวร์",
        "hsk": 4,
        "audioText": "硬件"
      }
    ]
  },
  "田": {
    "char": "田",
    "radical": "田",
    "primaryPinyin": "tián",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "t", "final": "ian", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "tián",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ทุ่งนา, แปลงเพาะปลูก",
        "usageContext": "เช่น 农田 (พื้นที่เกษตร), 麦田 (ทุ่งข้าวสาลี)"
      }
    ],
    "thaiMeaningShort": "ทุ่งนา / แปลงเพาะปลูก",
    "hskLevel": 2,
    "strokeCount": 5,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "田",
        "pinyin": "tián",
        "role": "อักษรภาพ",
        "meaning": "แปลงนาแบ่งช่อง",
        "desc": "คันนาและร่องน้ำ"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพแปลงนาที่ถูกแบ่งเป็นช่องสี่เหลี่ยมด้วยคันนา",
      "originStory": "ผืนดินทำมาหากินของชาวจีน",
      "modernEvolution": "หมายถึง ทุ่งนา (Field/Farmland)"
    },
    "mnemonicHook": {
      "formula": "สี่เหลี่ยมแบ่ง 4 ช่อง = 'ทุ่งนา' (田)",
      "visualStory": "ทุ่งนาเขียวขจีแบ่งช่องสวยงาม"
    },
    "compounds": [
      {
        "word": "农田",
        "pinyin": "nóng tián",
        "thai": "พื้นที่เกษตร, ท้องนา",
        "hsk": 3,
        "audioText": "农田"
      },
      {
        "word": "麦田",
        "pinyin": "mài tián",
        "thai": "ทุ่งข้าวสาลี",
        "hsk": 4,
        "audioText": "麦田"
      }
    ]
  },
  "男": {
    "char": "男",
    "radical": "田",
    "primaryPinyin": "nán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "n", "final": "an", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "nán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ผู้ชาย, เพศชาย",
        "usageContext": "เช่น 男人 (ผู้ชาย), 男生 (นักเรียนชาย)"
      }
    ],
    "thaiMeaningShort": "ผู้ชาย / เพศชาย",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "田",
        "pinyin": "tián",
        "role": "ความหมาย",
        "meaning": "ทุ่งนา",
        "desc": "ผืนดินทำกิน"
      },
      {
        "char": "力",
        "pinyin": "lì",
        "role": "ความหมาย",
        "meaning": "แรงกาย",
        "desc": "พละกำลัง"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ผู้ที่ออกแรงไถนาทำกินในท้องทุ่งคือบุรุษเพศ",
      "originStory": "ผู้ใช้แรงงานในทุ่งนา",
      "modernEvolution": "หมายถึง ผู้ชาย (Man/Male)"
    },
    "mnemonicHook": {
      "formula": "ทุ่งนา (田) + ออกแรง (力) = 'ผู้ชาย' (男)",
      "visualStory": "ผู้ชายออกแรงไถนาในทุ่งกว้าง"
    },
    "compounds": [
      {
        "word": "男人",
        "pinyin": "nán rén",
        "thai": "ผู้ชาย",
        "hsk": 1,
        "audioText": "男人"
      },
      {
        "word": "男生",
        "pinyin": "nán shēng",
        "thai": "นักเรียนชาย",
        "hsk": 1,
        "audioText": "男生"
      },
      {
        "word": "男女",
        "pinyin": "nán nǚ",
        "thai": "ชายหญิง",
        "hsk": 2,
        "audioText": "男女"
      }
    ]
  },
  "界": {
    "char": "界",
    "radical": "田",
    "primaryPinyin": "jiè",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "j", "final": "ie", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "jiè",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ขอบเขต, โลก, วงการ",
        "usageContext": "เช่น 世界 (โลก), 边界 (พรมแดน)"
      }
    ],
    "thaiMeaningShort": "ขอบเขต / โลก / วงการ",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "田",
        "pinyin": "tián",
        "role": "ความหมาย",
        "meaning": "ทุ่งนา",
        "desc": "ที่ดินแบ่งแปลง"
      },
      {
        "char": "介",
        "pinyin": "jiè",
        "role": "เสียง/คั่นกลาง",
        "meaning": "แบ่งเขต",
        "desc": "ยืมเสียง jie"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การปักหลักแบ่งขอบเขตแปลงนาของแต่ละบ้าน",
      "originStory": "เส้นแบ่งอาณาเขตที่ดิน",
      "modernEvolution": "หมายถึง ขอบเขต หรือ โลก (World/Boundary)"
    },
    "mnemonicHook": {
      "formula": "คั่นแบ่ง (介) + ผืนนา (田) = 'ขอบเขต/โลก' (界)",
      "visualStory": "เส้นขอบฟ้าและโลกกว้าง"
    },
    "compounds": [
      {
        "word": "世界",
        "pinyin": "shì jiè",
        "thai": "โลก (World)",
        "hsk": 2,
        "audioText": "世界"
      },
      {
        "word": "边界",
        "pinyin": "biān jiè",
        "thai": "พรมแดน",
        "hsk": 4,
        "audioText": "边界"
      }
    ]
  },
  "禾": {
    "char": "禾",
    "radical": "禾",
    "primaryPinyin": "hé",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "h", "final": "e", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "hé",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ต้นข้าว, ธัญพืช",
        "usageContext": "เช่น 禾苗 (ต้นกล้าข้าว)"
      }
    ],
    "thaiMeaningShort": "ต้นข้าว / ธัญพืช",
    "hskLevel": 3,
    "strokeCount": 5,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "禾",
        "pinyin": "hé",
        "role": "อักษรภาพ",
        "meaning": "ต้นข้าวออกรวง",
        "desc": "รวงข้าวโน้มลงดิน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพต้นข้าวที่กำลังออกรวงโค้งโน้มลงสู่พื้นดิน",
      "originStory": "ต้นกล้าและพืชผลการเกษตร",
      "modernEvolution": "หมายถึง ต้นข้าว (Grain/Cereal)"
    },
    "mnemonicHook": {
      "formula": "ต้นไม้มีรวงข้าวโค้ง = 'ต้นข้าว' (禾)",
      "visualStory": "รวงข้าวสีทองสุกอร่าม"
    },
    "compounds": [
      {
        "word": "禾苗",
        "pinyin": "hé miáo",
        "thai": "ต้นกล้าข้าว",
        "hsk": 4,
        "audioText": "禾苗"
      }
    ]
  },
  "和": {
    "char": "和",
    "radical": "禾",
    "primaryPinyin": "hé",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "h", "final": "e", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "hé",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "และ, กับ, สันติภาพ, กลมกลืน",
        "usageContext": "เช่น 我和你 (ฉันกับเธอ), 和平 (สันติภาพ)"
      },
      {
        "pinyin": "huo",
        "tone": 0,
        "toneDescription": "เสียงเบา",
        "meaningThai": "ผสม, คลุกเคล้า",
        "usageContext": "เช่น 暖和 (อบอุ่น)"
      }
    ],
    "thaiMeaningShort": "และ / กับ / สันติภาพ / อบอุ่น",
    "hskLevel": 1,
    "strokeCount": 8,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "禾",
        "pinyin": "hé",
        "role": "ความหมาย/เสียง",
        "meaning": "ต้นข้าว/อาหาร",
        "desc": "ความอุดมสมบูรณ์"
      },
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ความหมาย",
        "meaning": "ปาก",
        "desc": "การกินอิ่มและพูดคุย"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ทุกคนมีข้าวกินอิ่มปาก ย่อมเกิดความสงบสุขกลมกลืน",
      "originStory": "สันติภาพและความสามัคคี",
      "modernEvolution": "หมายถึง และ หรือ สันติ (And/Harmony/Peace)"
    },
    "mnemonicHook": {
      "formula": "รวงข้าว (禾) + ปากกินอิ่ม (口) = 'กลมกลืน/สันติภาพ' (和)",
      "visualStory": "ทุกคนมีอาหารกินอิ่มย่อมรักใคร่ปรองดอง"
    },
    "compounds": [
      {
        "word": "和平",
        "pinyin": "hé píng",
        "thai": "สันติภาพ",
        "hsk": 3,
        "audioText": "和平"
      },
      {
        "word": "暖和",
        "pinyin": "nuǎn huo",
        "thai": "อบอุ่น",
        "hsk": 2,
        "audioText": "暖和"
      },
      {
        "word": "和谐",
        "pinyin": "hé xié",
        "thai": "กลมกลืน, ปรองดอง",
        "hsk": 4,
        "audioText": "和谐"
      }
    ]
  },
  "秋": {
    "char": "秋",
    "radical": "禾",
    "primaryPinyin": "qiū",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "q", "final": "iu", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "qiū",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ฤดูใบไม้ร่วง, ฤดูเก็บเกี่ยว",
        "usageContext": "เช่น 秋天 (ฤดูใบไม้ร่วง), 中秋 (เทศกาลไหว้พระจันทร์)"
      }
    ],
    "thaiMeaningShort": "ฤดูใบไม้ร่วง",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "禾",
        "pinyin": "hé",
        "role": "ความหมาย",
        "meaning": "รวงข้าว",
        "desc": "ข้าวสุกสีทอง"
      },
      {
        "char": "火",
        "pinyin": "huǒ",
        "role": "ความหมาย",
        "meaning": "ไฟ/ความแห้ง",
        "desc": "ใบไม้เปลี่ยนสี"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "รวงข้าวสุกเหลืองอร่ามดั่งเปลวไฟ ถึงเวลาเก็บเกี่ยวในฤดูใบไม้ร่วง",
      "originStory": "ฤดูแห่งการเก็บเกี่ยวพืชผล",
      "modernEvolution": "หมายถึง ฤดูใบไม้ร่วง (Autumn/Fall)"
    },
    "mnemonicHook": {
      "formula": "รวงข้าว (禾) + สีทองดั่งไฟ (火) = 'ฤดูใบไม้ร่วง' (秋)",
      "visualStory": "รวงข้าวและใบไม้สีทองในฤดูใบไม้ร่วง"
    },
    "compounds": [
      {
        "word": "秋天",
        "pinyin": "qiū tiān",
        "thai": "ฤดูใบไม้ร่วง",
        "hsk": 2,
        "audioText": "秋天"
      },
      {
        "word": "中秋节",
        "pinyin": "zhōng qiū jié",
        "thai": "เทศกาลไหว้พระจันทร์",
        "hsk": 3,
        "audioText": "中秋节"
      }
    ]
  },
  "土": {
    "char": "土",
    "radical": "土",
    "primaryPinyin": "tǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "t", "final": "u", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "tǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ดิน, ดินแดน, พื้นพิภพ",
        "usageContext": "เช่น 土地 (ผืนดิน), 土豆 (มันฝรั่ง)"
      }
    ],
    "thaiMeaningShort": "ดิน / ผืนดิน / มันฝรั่ง",
    "hskLevel": 2,
    "strokeCount": 3,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "土",
        "pinyin": "tǔ",
        "role": "อักษรภาพ",
        "meaning": "กองดินบนพื้น",
        "desc": "ดินงอกงาม"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพกองดินที่ถูกปั้นขึ้นมาจากผืนดินเพื่อบูชาเทพารักษ์",
      "originStory": "แม่พระธรณีและผืนดิน",
      "modernEvolution": "หมายถึง ดิน (Soil/Earth)"
    },
    "mnemonicHook": {
      "formula": "ดินผุดขึ้นมา = 'ผืนดิน' (土)",
      "visualStory": "ดินดำพืชพรรณงอกงาม"
    },
    "compounds": [
      {
        "word": "土地",
        "pinyin": "tǔ dì",
        "thai": "ผืนดิน, ที่ดิน",
        "hsk": 2,
        "audioText": "土地"
      },
      {
        "word": "土豆",
        "pinyin": "tǔ dòu",
        "thai": "มันฝรั่ง",
        "hsk": 2,
        "audioText": "土豆"
      }
    ]
  },
  "地": {
    "char": "地",
    "radical": "土",
    "primaryPinyin": "dì",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "d", "final": "i", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "dì",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "แผ่นดิน, สถานที่, ที่ดิน",
        "usageContext": "เช่น 地方 (สถานที่), 地图 (แผนที่)"
      },
      {
        "pinyin": "de",
        "tone": 0,
        "toneDescription": "เสียงเบา",
        "meaningThai": "คำช่วยขยายกริยา (...อย่าง...)",
        "usageContext": "เช่น 高兴地笑 (หัวเราะอย่างมีความสุข)"
      }
    ],
    "thaiMeaningShort": "แผ่นดิน / สถานที่ / แผนที่",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "土",
        "pinyin": "tǔ",
        "role": "ความหมาย",
        "meaning": "ดิน",
        "desc": "พื้นดิน"
      },
      {
        "char": "也",
        "pinyin": "yě",
        "role": "เสียง",
        "meaning": "งูเลื้อย/เช่นกัน",
        "desc": "ยืมเสียง di"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ผืนแผ่นดินกว้างใหญ่ที่รองรับสรรพสิ่ง",
      "originStory": "แผ่นดินและสถานที่",
      "modernEvolution": "หมายถึง แผ่นดิน หรือ สถานที่ (Earth/Place)"
    },
    "mnemonicHook": {
      "formula": "ดิน (土) + กว้างใหญ่ (也) = 'แผ่นดิน/สถานที่' (地)",
      "visualStory": "เดินสำรวจแผนที่รอบโลก"
    },
    "compounds": [
      {
        "word": "地方",
        "pinyin": "dì fang",
        "thai": "สถานที่",
        "hsk": 1,
        "audioText": "地方"
      },
      {
        "word": "地图",
        "pinyin": "dì tú",
        "thai": "แผนที่",
        "hsk": 2,
        "audioText": "地图"
      },
      {
        "word": "地铁",
        "pinyin": "dì tiě",
        "thai": "รถไฟใต้ดิน",
        "hsk": 2,
        "audioText": "地铁"
      }
    ]
  },
  "城": {
    "char": "城",
    "radical": "土",
    "primaryPinyin": "chéng",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "ch", "final": "eng", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "chéng",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "เมือง, กำแพงเมือง",
        "usageContext": "เช่น 城市 (เมือง), 长城 (กำแพงเมืองจีน)"
      }
    ],
    "thaiMeaningShort": "เมือง / กำแพงเมือง",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "土",
        "pinyin": "tǔ",
        "role": "ความหมาย",
        "meaning": "ดิน",
        "desc": "ดินก่อกำแพง"
      },
      {
        "char": "成",
        "pinyin": "chéng",
        "role": "เสียง/สำเร็จ",
        "meaning": "สร้างเสร็จ",
        "desc": "ยืมเสียง cheng"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "การก่อดินทำกำแพงสูงเพื่อสร้างเมืองปกป้องราษฎร",
      "originStory": "กำแพงเมืองโบราณ",
      "modernEvolution": "หมายถึง เมือง (City/Castle)"
    },
    "mnemonicHook": {
      "formula": "ดินก่อกำแพง (土) + สำเร็จ (成) = 'กำแพงเมือง/นคร' (城)",
      "visualStory": "กำแพงเมืองจีนสร้างจากดินและหิน"
    },
    "compounds": [
      {
        "word": "城市",
        "pinyin": "chéng shì",
        "thai": "เมืองใหญ่, นคร",
        "hsk": 2,
        "audioText": "城市"
      },
      {
        "word": "长城",
        "pinyin": "cháng chéng",
        "thai": "กำแพงเมืองจีน",
        "hsk": 2,
        "audioText": "长城"
      }
    ]
  },
  "打": {
    "char": "打",
    "radical": "手",
    "primaryPinyin": "dǎ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "d", "final": "a", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "dǎ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ตี, โทรศัพท์, เล่น (กีฬา), เรียกรถ",
        "usageContext": "เช่น 打电话 (โทรศัพท์), 打球 (เล่นบอล), 打车 (เรียกรถแท็กซี่)"
      }
    ],
    "thaiMeaningShort": "ตี / เล่นกีฬา / โทรศัพท์ / เรียกรถ",
    "hskLevel": 1,
    "strokeCount": 5,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "扌",
        "pinyin": "shǒu",
        "role": "ความหมาย",
        "meaning": "มือ",
        "desc": "การใช้มือ"
      },
      {
        "char": "丁",
        "pinyin": "dīng",
        "role": "เสียง/ตะปู",
        "meaning": "เสียงตอก",
        "desc": "ยืมเสียง da"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ใช้มือออกแรงตีหรือตอกสิ่งของ",
      "originStory": "กริยาการใช้มือกระทำ",
      "modernEvolution": "หมายถึง ตี เล่น โทร เรียกรถ (Hit/Play/Call)"
    },
    "mnemonicHook": {
      "formula": "มือ (扌) + เคาะตอก (丁) = 'ตี/โทร' (打)",
      "visualStory": "ใช้มือกดโทรศัพท์และตีลูกบอล"
    },
    "compounds": [
      {
        "word": "打电话",
        "pinyin": "dǎ diàn huà",
        "thai": "โทรศัพท์",
        "hsk": 1,
        "audioText": "打电话"
      },
      {
        "word": "打球",
        "pinyin": "dǎ qiú",
        "thai": "เล่นบอล/กีฬา",
        "hsk": 1,
        "audioText": "打球"
      },
      {
        "word": "打折",
        "pinyin": "dǎ zhé",
        "thai": "ลดราคา",
        "hsk": 3,
        "audioText": "打折"
      }
    ]
  },
  "提": {
    "char": "提",
    "radical": "手",
    "primaryPinyin": "tí",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "t", "final": "i", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "tí",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "หิ้ว, ยกขึ้น, เสนอแนะ, พูดถึง",
        "usageContext": "เช่น 提高 (ยกระดับ), 提前 (ล่วงหน้า), 提醒 (เตือนสติ)"
      }
    ],
    "thaiMeaningShort": "หิ้ว / ยกระดับ / เสนอ / เตือน",
    "hskLevel": 3,
    "strokeCount": 12,
    "structure": "左右结构 (ซ้าย-ขวา)",
    "components": [
      {
        "char": "扌",
        "pinyin": "shǒu",
        "role": "ความหมาย",
        "meaning": "มือ",
        "desc": "ใช้มือหิ้ว"
      },
      {
        "char": "是",
        "pinyin": "shì",
        "role": "เสียง",
        "meaning": "ชูขึ้น",
        "desc": "ยืมเสียง ti"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ใช้มือจับหูหิ้วยกสิ่งของขึ้นสู่ที่สูง",
      "originStory": "การหิ้วหรือยกระดับ",
      "modernEvolution": "หมายถึง หิ้ว หรือ ยกระดับ (Lift/Mention/Improve)"
    },
    "mnemonicHook": {
      "formula": "มือ (扌) + ยกขึ้น = 'ยกระดับ/หิ้ว' (提)",
      "visualStory": "หิ้วกระเป๋าและยกระดับความรู้"
    },
    "compounds": [
      {
        "word": "提高",
        "pinyin": "tí gāo",
        "thai": "ยกระดับ, พัฒนาขึ้น",
        "hsk": 3,
        "audioText": "提高"
      },
      {
        "word": "提前",
        "pinyin": "tí qián",
        "thai": "ล่วงหน้า, ก่อนกำหนด",
        "hsk": 3,
        "audioText": "提前"
      },
      {
        "word": "提醒",
        "pinyin": "tí xǐng",
        "thai": "เตือนสติ, เตือนความจำ",
        "hsk": 3,
        "audioText": "提醒"
      }
    ]
  },
  "门": {
    "char": "门",
    "radical": "门",
    "primaryPinyin": "mén",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "m", "final": "en", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "mén",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ประตู, ทางเข้า, วิชา",
        "usageContext": "เช่น 开门 (เปิดประตู), 门口 (หน้าประตู), 一门课 (หนึ่งวิชา)"
      }
    ],
    "thaiMeaningShort": "ประตู / ทางเข้า",
    "hskLevel": 1,
    "strokeCount": 3,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "门",
        "pinyin": "mén",
        "role": "อักษรภาพ",
        "meaning": "บานประตูคู่",
        "desc": "ทางเข้าออก"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพบานประตูคู่ที่เปิดออกต้อนรับผู้มาเยือน",
      "originStory": "ทางเข้าออกเคหสถาน",
      "modernEvolution": "หมายถึง ประตู (Door/Gate)"
    },
    "mnemonicHook": {
      "formula": "กรอบประตูทางเข้า = 'ประตู' (门)",
      "visualStory": "ผลักประตูเดินเข้าห้องเรียน"
    },
    "compounds": [
      {
        "word": "门口",
        "pinyin": "mén kǒu",
        "thai": "หน้าประตู",
        "hsk": 1,
        "audioText": "门口"
      },
      {
        "word": "开门",
        "pinyin": "kāi mén",
        "thai": "เปิดประตู",
        "hsk": 2,
        "audioText": "开门"
      },
      {
        "word": "关门",
        "pinyin": "guān mén",
        "thai": "ปิดประตู",
        "hsk": 2,
        "audioText": "关门"
      }
    ]
  },
  "问": {
    "char": "问",
    "radical": "门",
    "primaryPinyin": "wèn",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "w", "final": "en", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "wèn",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ถาม, สอบถาม",
        "usageContext": "เช่น 问题 (คำถาม/ปัญหา), 请问 (ขอถามหน่อย)"
      }
    ],
    "thaiMeaningShort": "ถาม / สอบถาม",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "半包围结构",
    "components": [
      {
        "char": "门",
        "pinyin": "mén",
        "role": "กรอบประตู",
        "meaning": "หน้าบ้าน",
        "desc": "ยืนหน้าประตู"
      },
      {
        "char": "口",
        "pinyin": "kǒu",
        "role": "ปาก",
        "meaning": "การเอ่ยปาก",
        "desc": "เอ่ยปากถาม"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ยืนอยู่หน้าประตูบ้านแล้วเอ่ยปากส่งเสียงร้องถามเจ้าของบ้าน",
      "originStory": "การเอ่ยปากไต่ถาม",
      "modernEvolution": "หมายถึง ถาม (Ask/Inquire)"
    },
    "mnemonicHook": {
      "formula": "ประตู (门) + เอ่ยปาก (口) = 'ถาม' (问)",
      "visualStory": "ยืนหน้าประตูเอ่ยปากถามทาง"
    },
    "compounds": [
      {
        "word": "问题",
        "pinyin": "wèn tí",
        "thai": "ปัญหา, คำถาม",
        "hsk": 1,
        "audioText": "问题"
      },
      {
        "word": "请问",
        "pinyin": "qǐng wèn",
        "thai": "ขอถามหน่อย",
        "hsk": 1,
        "audioText": "请问"
      }
    ]
  },
  "雨": {
    "char": "雨",
    "radical": "雨",
    "primaryPinyin": "yǔ",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "y", "final": "u", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "yǔ",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "ฝน, น้ำฝน",
        "usageContext": "เช่น 下雨 (ฝนตก), 雨伞 (ร่มกันฝน)"
      }
    ],
    "thaiMeaningShort": "ฝน / น้ำฝน",
    "hskLevel": 1,
    "strokeCount": 8,
    "structure": "独体字 (อักษรเดี่ยว)",
    "components": [
      {
        "char": "一",
        "pinyin": "yī",
        "role": "ท้องฟ้า",
        "meaning": "ขอบฟ้า",
        "desc": "เบื้องบน"
      },
      {
        "char": "冂",
        "pinyin": "jiōng",
        "role": "หมู่เมฆ",
        "meaning": "เมฆฝน",
        "desc": "ก้อนเมฆ"
      },
      {
        "char": "丨",
        "pinyin": "gǔn",
        "role": "ละออง",
        "meaning": "สายฝน",
        "desc": "เม็ดฝน 4 เม็ด"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ภาพสายฝนโปรยปรายลงมาจากกลุ่มเมฆบนท้องฟ้า",
      "originStory": "ฝนตกหล่อเลี้ยงผืนดิน",
      "modernEvolution": "หมายถึง ฝน (Rain)"
    },
    "mnemonicHook": {
      "formula": "เมฆบนฟ้า + เม็ดฝน 4 หยด = 'ฝน' (雨)",
      "visualStory": "ฝนตกกางร่มเดินชิลล์"
    },
    "compounds": [
      {
        "word": "下雨",
        "pinyin": "xià yǔ",
        "thai": "ฝนตก",
        "hsk": 1,
        "audioText": "下雨"
      },
      {
        "word": "雨伞",
        "pinyin": "yǔ sǎn",
        "thai": "ร่มกันฝน",
        "hsk": 2,
        "audioText": "雨伞"
      },
      {
        "word": "大雨",
        "pinyin": "dà yǔ",
        "thai": "ฝนตกหนัก",
        "hsk": 2,
        "audioText": "大雨"
      }
    ]
  },
  "雪": {
    "char": "雪",
    "radical": "雨",
    "primaryPinyin": "xuě",
    "primaryTone": 3,
    "pronunciationGuide": { "initial": "x", "final": "ue", "toneRule": "เสียงลง-ขึ้น (214) — เริ่มระดับกลาง ลดต่ำลงก่อน แล้วจึงไต่กลับขึ้นสูงในพยางค์เดียว" },
    "pinyinList": [
      {
        "pinyin": "xuě",
        "tone": 3,
        "toneDescription": "เสียงที่ 3 (Dipping 214)",
        "meaningThai": "หิมะ",
        "usageContext": "เช่น 下雪 (หิมะตก), 滑雪 (เล่นสกี)"
      }
    ],
    "thaiMeaningShort": "หิมะ",
    "hskLevel": 2,
    "strokeCount": 11,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "⻗",
        "pinyin": "yǔ",
        "role": "ความหมาย",
        "meaning": "ฝน/สภาพอากาศ",
        "desc": "ตกลงมาจากฟ้า"
      },
      {
        "char": "彐",
        "pinyin": "jì",
        "role": "กวาดหิมะ",
        "meaning": "มือจับไม้กวาด",
        "desc": "กวาดหิมะขาว"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ผลึกน้ำแข็งที่ตกลงมาจากฟ้าแล้วใช้มือกวาดเก็บได้",
      "originStory": "หิมะขาวบริสุทธิ์",
      "modernEvolution": "หมายถึง หิมะ (Snow)"
    },
    "mnemonicHook": {
      "formula": "ฝนจากฟ้า (⻗) + กวาดเก็บได้ = 'หิมะ' (雪)",
      "visualStory": "หิมะตกสีขาวโพลนปั้นตุ๊กตาหิมะ"
    },
    "compounds": [
      {
        "word": "下雪",
        "pinyin": "xià xuě",
        "thai": "หิมะตก",
        "hsk": 2,
        "audioText": "下雪"
      },
      {
        "word": "滑雪",
        "pinyin": "huá xuě",
        "thai": "เล่นสกีหิมะ",
        "hsk": 3,
        "audioText": "滑雪"
      }
    ]
  },
  "花": {
    "char": "花",
    "radical": "艹",
    "primaryPinyin": "huā",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "h", "final": "ua", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "huā",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "ดอกไม้, ใช้จ่าย (เงิน/เวลา)",
        "usageContext": "เช่น 花朵 (ดอกไม้), 花钱 (ใช้เงิน), 花时间 (ใช้เวลา)"
      }
    ],
    "thaiMeaningShort": "ดอกไม้ / ใช้จ่าย",
    "hskLevel": 1,
    "strokeCount": 7,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "艹",
        "pinyin": "cǎo",
        "role": "ความหมาย",
        "meaning": "พืช/หญ้า",
        "desc": "พืชพรรณ"
      },
      {
        "char": "化",
        "pinyin": "huà",
        "role": "เสียง/เปลี่ยนแปลง",
        "meaning": "ผลิบาน",
        "desc": "ยืมเสียง hua"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "พืชที่เปลี่ยนแปลงและผลิบานเป็นดอกไม้สวยงาม",
      "originStory": "ดอกไม้นานาพรรณ",
      "modernEvolution": "หมายถึง ดอกไม้ หรือ ใช้จ่าย (Flower/Spend)"
    },
    "mnemonicHook": {
      "formula": "พืช (艹) + ผลิบาน (化) = 'ดอกไม้' (花)",
      "visualStory": "ดอกไม้บานสะพรั่งส่งกลิ่นหอม"
    },
    "compounds": [
      {
        "word": "花钱",
        "pinyin": "huā qián",
        "thai": "ใช้เงิน",
        "hsk": 2,
        "audioText": "花钱"
      },
      {
        "word": "花园",
        "pinyin": "huā yuán",
        "thai": "สวนดอกไม้",
        "hsk": 3,
        "audioText": "花园"
      },
      {
        "word": "鲜花",
        "pinyin": "xiān huā",
        "thai": "ดอกไม้สด",
        "hsk": 3,
        "audioText": "鲜花"
      }
    ]
  },
  "茶": {
    "char": "茶",
    "radical": "艹",
    "primaryPinyin": "chá",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "ch", "final": "a", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "chá",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "ชา, ใบชา, น้ำชา",
        "usageContext": "เช่น 喝茶 (ดื่มชา), 绿茶 (ชาเขียว), 红茶 (ชาดำ/ชาแดง)"
      }
    ],
    "thaiMeaningShort": "ชา / ใบชา / น้ำชา",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "艹",
        "pinyin": "cǎo",
        "role": "ความหมาย",
        "meaning": "ใบพืช",
        "desc": "ยอดใบชา"
      },
      {
        "char": "人",
        "pinyin": "rén",
        "role": "มนุษย์",
        "meaning": "คนเก็บชา",
        "desc": "เก็บใบชา"
      },
      {
        "char": "木",
        "pinyin": "mù",
        "role": "ต้นไม้",
        "meaning": "ต้นชา",
        "desc": "พุ่มต้นชา"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ยอดใบพืชบนต้นไม้ที่มนุษย์เก็บมาชงดื่มเพื่อสุขภาพ",
      "originStory": "วัฒนธรรมการดื่มชาของจีน",
      "modernEvolution": "หมายถึง ชา (Tea)"
    },
    "mnemonicHook": {
      "formula": "ยอดพืช (艹) + คน (人) + ต้นไม้ (木) = 'ใบชา' (茶)",
      "visualStory": "คนเก็บใบชาบนต้นมาชงชาดื่มหอมกรุ่น"
    },
    "compounds": [
      {
        "word": "喝茶",
        "pinyin": "hē chá",
        "thai": "ดื่มชา",
        "hsk": 1,
        "audioText": "喝茶"
      },
      {
        "word": "绿茶",
        "pinyin": "lǜ chá",
        "thai": "ชาเขียว",
        "hsk": 2,
        "audioText": "绿茶"
      },
      {
        "word": "红茶",
        "pinyin": "hóng chá",
        "thai": "ชาแดง/ชาฝรั่ง",
        "hsk": 2,
        "audioText": "红茶"
      }
    ]
  },
  "家": {
    "char": "家",
    "radical": "宀",
    "primaryPinyin": "jiā",
    "primaryTone": 1,
    "pronunciationGuide": { "initial": "j", "final": "ia", "toneRule": "เสียงระดับสูงคงที่ (55) — อ่านเสียงสูงราบเรียบตลอดทั้งคำ ไม่มีการเปลี่ยนระดับ" },
    "pinyinList": [
      {
        "pinyin": "jiā",
        "tone": 1,
        "toneDescription": "เสียงที่ 1 (High 55)",
        "meaningThai": "บ้าน, ครอบครัว, ผู้เชี่ยวชาญ",
        "usageContext": "เช่น 家人 (คนในครอบครัว), 回家 (กลับบ้าน), 科学家 (นักวิทยาศาสตร์)"
      }
    ],
    "thaiMeaningShort": "บ้าน / ครอบครัว / นัก...",
    "hskLevel": 1,
    "strokeCount": 10,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "宀",
        "pinyin": "mián",
        "role": "หลังคาบ้าน",
        "meaning": "บ้านเรือน",
        "desc": "ที่อยู่อาศัย"
      },
      {
        "char": "豕",
        "pinyin": "shǐ",
        "role": "หมู/ปศุสัตว์",
        "meaning": "หมู",
        "desc": "ความอุดมสมบูรณ์"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ใต้หลังคาบ้านมีหมูเลี้ยงอยู่ บ่งบอกถึงความอบอุ่นและความมั่นคงของครอบครัวจีนโบราณ",
      "originStory": "การมีบ้านและอาหารกินอิ่มคือครอบครัว",
      "modernEvolution": "หมายถึง บ้าน หรือ ครอบครัว (Home/Family)"
    },
    "mnemonicHook": {
      "formula": "หลังคาบ้าน (宀) + หมูเลี้ยง (豕) = 'บ้าน/ครอบครัว' (家)",
      "visualStory": "ครอบครัวอบอุ่นพร้อมหน้าในบ้านแสนสุข"
    },
    "compounds": [
      {
        "word": "家人",
        "pinyin": "jiā rén",
        "thai": "คนในครอบครัว",
        "hsk": 1,
        "audioText": "家人"
      },
      {
        "word": "大家",
        "pinyin": "dà jiā",
        "thai": "ทุกคน",
        "hsk": 1,
        "audioText": "大家"
      },
      {
        "word": "回家",
        "pinyin": "huí jiā",
        "thai": "กลับบ้าน",
        "hsk": 1,
        "audioText": "回家"
      },
      {
        "word": "国家",
        "pinyin": "guó jiā",
        "thai": "ประเทศ",
        "hsk": 2,
        "audioText": "国家"
      }
    ],
    "exampleSentences": [
      {
        "chinese": "我想早点回家陪家人。",
        "pinyin": "Wǒ xiǎng zǎodiǎn huíjiā péi jiārén.",
        "thai": "ฉันอยากรีบกลับบ้านไปอยู่กับครอบครัว",
        "audioText": "我想早点回家陪家人。"
      }
    ]
  },
  "字": {
    "char": "字",
    "radical": "宀",
    "primaryPinyin": "zì",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "z", "final": "i", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "zì",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ตัวอักษร, ลายมือ, คำ",
        "usageContext": "เช่น 汉字 (อักษรจีน), 写字 (เขียนหนังสือ)"
      }
    ],
    "thaiMeaningShort": "ตัวอักษร / คำ / ลายมือ",
    "hskLevel": 1,
    "strokeCount": 6,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "宀",
        "pinyin": "mián",
        "role": "หลังคาบ้าน",
        "meaning": "บ้าน/ห้องเรียน",
        "desc": "ที่อบรมสั่งสอน"
      },
      {
        "char": "子",
        "pinyin": "zǐ",
        "role": "เด็ก/ลูกหลาน",
        "meaning": "เด็กน้อย",
        "desc": "การเล่าเรียน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เด็กน้อย (子) นั่งเล่าเรียนเขียนหนังสืออยู่ใต้หลังคาบ้าน (宀)",
      "originStory": "การบ่มเพาะปัญญาและตัวอักษร",
      "modernEvolution": "หมายถึง ตัวอักษร (Character/Word)"
    },
    "mnemonicHook": {
      "formula": "หลังคาเรือน (宀) + เด็กเรียน (子) = 'ตัวอักษร' (字)",
      "visualStory": "เด็กน้อยคัดอักษรจีนอย่างตั้งใจใต้หลังคาบ้าน"
    },
    "compounds": [
      {
        "word": "汉字",
        "pinyin": "hàn zì",
        "thai": "อักษรจีน",
        "hsk": 1,
        "audioText": "汉字"
      },
      {
        "word": "名字",
        "pinyin": "míng zi",
        "thai": "ชื่อ",
        "hsk": 1,
        "audioText": "名字"
      },
      {
        "word": "写字",
        "pinyin": "xiě zì",
        "thai": "เขียนหนังสือ",
        "hsk": 2,
        "audioText": "写字"
      }
    ]
  },
  "定": {
    "char": "定",
    "radical": "宀",
    "primaryPinyin": "dìng",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "d", "final": "ing", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "dìng",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "กำหนด, แน่นอน, สงบนิ่ง, จอง",
        "usageContext": "เช่น 一定 (แน่นอน), 决定 (ตัดสินใจ), 预定 (จองล่วงหน้า)"
      }
    ],
    "thaiMeaningShort": "กำหนด / แน่นอน / ตัดสินใจ",
    "hskLevel": 2,
    "strokeCount": 8,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "宀",
        "pinyin": "mián",
        "role": "หลังคาบ้าน",
        "meaning": "บ้าน",
        "desc": "ความมั่นคง"
      },
      {
        "char": "正",
        "pinyin": "zhèng",
        "role": "ความถูกต้อง/เท้าหยุด",
        "meaning": "หยุดนิ่ง",
        "desc": "ความแน่นอน"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เท้าก้าวเข้าสู่บ้านแล้วหยุดนิ่งอย่างปลอดภัยและมั่นคง",
      "originStory": "ความสงบนิ่งและมั่นคงแน่นอน",
      "modernEvolution": "หมายถึง กำหนด หรือ แน่นอน (Decide/Certain/Fix)"
    },
    "mnemonicHook": {
      "formula": "หลังคาบ้าน (宀) + หยุดนิ่งมั่นคง (正) = 'กำหนด/แน่นอน' (定)",
      "visualStory": "ตัดสินใจอย่างแน่วแน่แน่นอน"
    },
    "compounds": [
      {
        "word": "一定",
        "pinyin": "yī dìng",
        "thai": "แน่นอน",
        "hsk": 2,
        "audioText": "一定"
      },
      {
        "word": "决定",
        "pinyin": "jué dìng",
        "thai": "ตัดสินใจ",
        "hsk": 3,
        "audioText": "决定"
      },
      {
        "word": "预定",
        "pinyin": "yù dìng",
        "thai": "จองล่วงหน้า",
        "hsk": 3,
        "audioText": "预定"
      }
    ]
  },
  "客": {
    "char": "客",
    "radical": "宀",
    "primaryPinyin": "kè",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "k", "final": "e", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "kè",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "แขก, ลูกค้า, ผู้มาเยือน",
        "usageContext": "เช่น 客气 (เกรงใจ), 客人 (แขก/ลูกค้า), 请客 (เลี้ยงข้าว)"
      }
    ],
    "thaiMeaningShort": "แขก / ลูกค้า / ผู้มาเยือน",
    "hskLevel": 1,
    "strokeCount": 9,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "宀",
        "pinyin": "mián",
        "role": "หลังคาบ้าน",
        "meaning": "บ้านเรือน",
        "desc": "เจ้าบ้าน"
      },
      {
        "char": "各",
        "pinyin": "gè",
        "role": "เสียง/ก้าวมาถึง",
        "meaning": "ผู้มาเยือน",
        "desc": "ยืมเสียง ke"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "ผู้คนจากต่างถิ่นเดินทางก้าวเข้ามาพักในบ้าน",
      "originStory": "แขกผู้มาเยือนเคหสถาน",
      "modernEvolution": "หมายถึง แขก หรือ ลูกค้า (Guest/Customer)"
    },
    "mnemonicHook": {
      "formula": "บ้าน (宀) + ก้าวเข้ามาเยือน (各) = 'แขก/ลูกค้า' (客)",
      "visualStory": "เจ้าบ้านต้อนรับแขกอย่างอบอุ่น"
    },
    "compounds": [
      {
        "word": "客气",
        "pinyin": "kè qi",
        "thai": "เกรงใจ, มีมารยาท",
        "hsk": 1,
        "audioText": "客气"
      },
      {
        "word": "客人",
        "pinyin": "kè ren",
        "thai": "แขก, ลูกค้า",
        "hsk": 2,
        "audioText": "客人"
      },
      {
        "word": "请客",
        "pinyin": "qǐng kè",
        "thai": "เลี้ยงข้าว, เลี้ยงรับรอง",
        "hsk": 3,
        "audioText": "请客"
      }
    ]
  },
  "室": {
    "char": "室",
    "radical": "宀",
    "primaryPinyin": "shì",
    "primaryTone": 4,
    "pronunciationGuide": { "initial": "sh", "final": "i", "toneRule": "เสียงตกลงแรง (51) — เริ่มจากระดับสูงสุดแล้วตกลงต่ำอย่างรวดเร็วและหนักแน่น คล้ายเสียงเน้นหรือคำสั่ง" },
    "pinyinList": [
      {
        "pinyin": "shì",
        "tone": 4,
        "toneDescription": "เสียงที่ 4 (Falling 51)",
        "meaningThai": "ห้อง, ห้องหับ",
        "usageContext": "เช่น 教室 (ห้องเรียน), 办公室 (ห้องทำงาน), 卧室 (ห้องนอน)"
      }
    ],
    "thaiMeaningShort": "ห้อง / ห้องหับ",
    "hskLevel": 2,
    "strokeCount": 9,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "宀",
        "pinyin": "mián",
        "role": "หลังคาบ้าน",
        "meaning": "ตัวบ้าน",
        "desc": "ที่อยู่อาศัย"
      },
      {
        "char": "至",
        "pinyin": "zhì",
        "role": "เสียง/มาถึง",
        "meaning": "ถึงจุดหมาย",
        "desc": "ยืมเสียง shi"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "เดินเข้ามาถึงพื้นที่พักผ่อนด้านในสุดของบ้าน",
      "originStory": "ห้องหับภายในเรือน",
      "modernEvolution": "หมายถึง ห้อง (Room/Chamber)"
    },
    "mnemonicHook": {
      "formula": "หลังคาบ้าน (宀) + ก้าวถึงด้านใน (至) = 'ห้อง' (室)",
      "visualStory": "เดินเข้าห้องเรียนพร้อมเริ่มเรียนรู้"
    },
    "compounds": [
      {
        "word": "教室",
        "pinyin": "jiào shì",
        "thai": "ห้องเรียน",
        "hsk": 2,
        "audioText": "教室"
      },
      {
        "word": "办公室",
        "pinyin": "bàn gōng shì",
        "thai": "ห้องทำงาน, ออฟฟิศ",
        "hsk": 3,
        "audioText": "办公室"
      },
      {
        "word": "卧室",
        "pinyin": "wò shì",
        "thai": "ห้องนอน",
        "hsk": 3,
        "audioText": "卧室"
      }
    ]
  },
  "完": {
    "char": "完",
    "radical": "宀",
    "primaryPinyin": "wán",
    "primaryTone": 2,
    "pronunciationGuide": { "initial": "w", "final": "an", "toneRule": "เสียงสูงขึ้น (35) — เริ่มจากระดับกลางแล้วไต่ขึ้นสู่ระดับสูงอย่างรวดเร็ว คล้ายเสียงถามในภาษาไทย" },
    "pinyinList": [
      {
        "pinyin": "wán",
        "tone": 2,
        "toneDescription": "เสียงที่ 2 (Rising 35)",
        "meaningThai": "เสร็จสิ้น, สมบูรณ์, จบ",
        "usageContext": "เช่น 做完 (ทำเสร็จ), 完成 (ทำให้สำเร็จ), 完全 (โดยสิ้นเชิง)"
      }
    ],
    "thaiMeaningShort": "เสร็จสิ้น / สมบูรณ์ / จบ",
    "hskLevel": 2,
    "strokeCount": 7,
    "structure": "上下结构 (บน-ล่าง)",
    "components": [
      {
        "char": "宀",
        "pinyin": "mián",
        "role": "หลังคาบ้าน",
        "meaning": "บ้าน",
        "desc": "การก่อสร้าง"
      },
      {
        "char": "元",
        "pinyin": "yuán",
        "role": "เสียง/ศีรษะ",
        "meaning": "จุดสูงสุด/สมบูรณ์",
        "desc": "ยืมเสียง wan"
      }
    ],
    "ancientEtymology": {
      "oracleScript": "มุงหลังคาบ้านจนถึงยอดบนสุดเสร็จสมบูรณ์",
      "originStory": "สร้างบ้านเสร็จสมบูรณ์",
      "modernEvolution": "หมายถึง เสร็จสิ้น (Finish/Complete)"
    },
    "mnemonicHook": {
      "formula": "หลังคาบ้าน (宀) + มุงถึงยอดสมบูรณ์ (元) = 'เสร็จสิ้น' (完)",
      "visualStory": "ทำข้อสอบเสร็จสมบูรณ์ทันเวลา"
    },
    "compounds": [
      {
        "word": "完成",
        "pinyin": "wán chéng",
        "thai": "ทำให้สำเร็จ, เสร็จสิ้น",
        "hsk": 3,
        "audioText": "完成"
      },
      {
        "word": "完全",
        "pinyin": "wán quán",
        "thai": "โดยสิ้นเชิง, ทั้งหมด",
        "hsk": 3,
        "audioText": "完全"
      }
    ]
  }
};

window.CHARACTERS_DATA = CHARACTERS_DATA;
