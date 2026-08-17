-- Schema Definition for "จำจีน · รากศัพท์ภาษาจีน" (JumJeen)
-- Compatible with SQLite, PostgreSQL, and IndexedDB Relational Models

-- 1. Table: radicals (214 Kangxi Radicals)
CREATE TABLE IF NOT EXISTS radicals (
    id TEXT PRIMARY KEY,               -- e.g. '女', '木', '心'
    kangxi_number INTEGER NOT NULL,    -- 1 to 214
    pinyin TEXT NOT NULL,              -- e.g. 'nǚ'
    thai_name TEXT NOT NULL,           -- e.g. 'ผู้หญิง / แม่'
    category TEXT NOT NULL,            -- e.g. 'มนุษย์และสังคม'
    stroke_count INTEGER NOT NULL,     -- e.g. 3
    frequency_rank TEXT NOT NULL,      -- 'สูงมาก', 'สูง', 'ปานกลาง'
    pictograph_desc TEXT,              -- คำอธิบายภาพอักษรโบราณ
    description TEXT
);

-- 2. Table: characters (Hanzi Database)
CREATE TABLE IF NOT EXISTS characters (
    id TEXT PRIMARY KEY,               -- e.g. '好', '安', '明'
    radical_id TEXT NOT NULL,          -- Foreign Key -> radicals.id
    pinyin_primary TEXT NOT NULL,      -- e.g. 'hǎo'
    tone_primary INTEGER NOT NULL,     -- 1, 2, 3, 4, 5
    thai_meaning_short TEXT NOT NULL,  -- e.g. 'ดี / ตกลง / ชอบ'
    hsk_level INTEGER DEFAULT 1,       -- HSK 1 to 6
    stroke_count INTEGER NOT NULL,     -- e.g. 6
    structure_type TEXT NOT NULL,      -- e.g. '左右结构', '上下结构'
    ancient_oracle_text TEXT,          -- คำอธิบายอักษรกระดูกสัตว์
    origin_story TEXT,                 -- เรื่องราวดั้งเดิม
    modern_evolution TEXT,             -- วิวัฒนาการสู่ความหมายปัจจุบัน
    mnemonic_formula TEXT,             -- สูตรช่วยจำภาพ
    mnemonic_story TEXT,               -- เรื่องราวช่วยจำ
    FOREIGN KEY (radical_id) REFERENCES radicals(id) ON DELETE RESTRICT
);

-- 3. Table: character_components (Decomposition Breakdown)
CREATE TABLE IF NOT EXISTS character_components (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT NOT NULL,        -- Foreign Key -> characters.id
    component_char TEXT NOT NULL,      -- e.g. '女', '子'
    pinyin TEXT,                       -- e.g. 'nǚ', 'zǐ'
    role_name TEXT NOT NULL,           -- e.g. 'รากศัพท์หลัก', 'ส่วนบอกเสียง'
    is_semantic BOOLEAN DEFAULT TRUE,  -- บอกความหมายหรือไม่
    is_phonetic BOOLEAN DEFAULT FALSE, -- บอกเสียงหรือไม่
    component_meaning TEXT,            -- e.g. 'ผู้หญิง/แม่'
    description TEXT,
    order_index INTEGER DEFAULT 0,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

-- 4. Table: character_polyphones (Multi-tones / 多音字)
CREATE TABLE IF NOT EXISTS character_polyphones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT NOT NULL,        -- Foreign Key -> characters.id
    pinyin TEXT NOT NULL,              -- e.g. 'hào'
    tone INTEGER NOT NULL,             -- 4
    ipa TEXT,                          -- e.g. '[xaʊ̯˥˩]'
    tone_description TEXT,             -- คำอธิบายเสียงวรรณยุกต์
    meaning_thai TEXT NOT NULL,        -- e.g. 'ชอบ, รักใคร่, งานอดิเรก'
    usage_context TEXT,                -- e.g. '爱好 (งานอดิเรก)'
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

-- 5. Table: compounds (Compound Words / Leaf Nodes)
CREATE TABLE IF NOT EXISTS compounds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    base_character_id TEXT NOT NULL,   -- Foreign Key -> characters.id
    word TEXT NOT NULL,                -- e.g. '你好', '好吃'
    pinyin TEXT NOT NULL,              -- e.g. 'nǐ hǎo'
    thai_meaning TEXT NOT NULL,        -- e.g. 'สวัสดี'
    hsk_level INTEGER DEFAULT 1,
    audio_text TEXT,
    FOREIGN KEY (base_character_id) REFERENCES characters(id) ON DELETE CASCADE
);

-- 6. Table: example_sentences (Bilingual sentences)
CREATE TABLE IF NOT EXISTS example_sentences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT NOT NULL,
    chinese_text TEXT NOT NULL,
    pinyin_text TEXT NOT NULL,
    thai_text TEXT NOT NULL,
    audio_text TEXT,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

-- 7. Table: user_srs_progress (Spaced Repetition SM-2 Progress)
CREATE TABLE IF NOT EXISTS user_srs_progress (
    character_id TEXT PRIMARY KEY,     -- Foreign Key -> characters.id
    repetition_count INTEGER DEFAULT 0,
    interval_days REAL DEFAULT 0.0,
    ease_factor REAL DEFAULT 2.5,
    mastery_level TEXT DEFAULT 'new',  -- 'new', 'learning', 'reviewing', 'mastered'
    next_review_time INTEGER NOT NULL, -- Unix timestamp in milliseconds
    last_reviewed_time INTEGER,        -- Unix timestamp in milliseconds
    total_reviews INTEGER DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

-- Indexes for Blazing Fast Queries (0 ms)
CREATE INDEX IF NOT EXISTS idx_characters_radical ON characters(radical_id);
CREATE INDEX IF NOT EXISTS idx_characters_hsk ON characters(hsk_level);
CREATE INDEX IF NOT EXISTS idx_compounds_base_char ON compounds(base_character_id);
CREATE INDEX IF NOT EXISTS idx_srs_next_review ON user_srs_progress(next_review_time);
