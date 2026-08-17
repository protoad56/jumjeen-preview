/**
 * Local-First Database Layer (IndexedDB Engine)
 * จำจีน (JumJeen) - ฐานข้อมูลออฟไลน์ความเร็วสูง
 */

class JumJeenDatabase {
  constructor() {
    this.dbName = "JumJeenLocalDB";
    this.version = 1;
    this.db = null;
    this.isReady = false;
    this.inMemoryCache = {
      radicals: new Map(),
      characters: new Map(),
      srs: new Map()
    };
  }

  /**
   * Initialize Local-First IndexedDB
   * Guarded by a hard timeout: if IndexedDB hangs or errors for any reason
   * (private browsing, restrictive webviews, storage quota issues), the app
   * falls back to in-memory data instead of leaving the UI blank forever.
   */
  async init() {
    let settled = false;

    return new Promise((resolve) => {
      const finish = (val) => {
        if (settled) return;
        settled = true;
        resolve(val);
      };

      const timeoutId = setTimeout(() => {
        if (!settled) {
          console.warn("IndexedDB init timed out — falling back to in-memory mode.");
          this.seedInMemory();
          this.isReady = true;
          finish(this);
        }
      }, 3000);

      let request;
      try {
        request = indexedDB.open(this.dbName, this.version);
      } catch (e) {
        clearTimeout(timeoutId);
        console.error("IndexedDB unavailable:", e);
        this.seedInMemory();
        this.isReady = true;
        finish(this);
        return;
      }

      request.onupgradeneeded = (e) => {
        const db = e.target.result;

        // 1. Radicals Store
        if (!db.objectStoreNames.contains("radicals")) {
          const radStore = db.createObjectStore("radicals", { keyPath: "id" });
          radStore.createIndex("category", "category", { unique: false });
          radStore.createIndex("stroke_count", "stroke_count", { unique: false });
        }

        // 2. Characters Store
        if (!db.objectStoreNames.contains("characters")) {
          const charStore = db.createObjectStore("characters", { keyPath: "id" });
          charStore.createIndex("radical_id", "radical_id", { unique: false });
          charStore.createIndex("hsk_level", "hsk_level", { unique: false });
          charStore.createIndex("pinyin", "primaryPinyin", { unique: false });
        }

        // 3. User Spaced Repetition (SRS) Progress Store
        if (!db.objectStoreNames.contains("user_srs")) {
          const srsStore = db.createObjectStore("user_srs", { keyPath: "character_id" });
          srsStore.createIndex("next_review", "next_review_time", { unique: false });
          srsStore.createIndex("mastery", "mastery_level", { unique: false });
        }
      };

      request.onsuccess = async (e) => {
        this.db = e.target.result;
        this.isReady = true;
        await this.seedInitialData();
        await this.loadCache();
        clearTimeout(timeoutId);
        finish(this);
      };

      request.onerror = (e) => {
        console.error("IndexedDB initialization error:", e);
        // Fallback to in-memory mode if IndexedDB is blocked
        this.seedInMemory();
        this.isReady = true;
        clearTimeout(timeoutId);
        finish(this);
      };
    });
  }

  /**
   * Seed standard data from memory datasets into IndexedDB if empty
   */
  async seedInitialData() {
    if (!this.db) return;

    const count = await this.countStore("characters");
    if (count > 0) return; // Already seeded

    const tx = this.db.transaction(["radicals", "characters", "user_srs"], "readwrite");
    const radStore = tx.objectStore("radicals");
    const charStore = tx.objectStore("characters");
    const srsStore = tx.objectStore("user_srs");

    // Seed Radicals
    if (window.RADICALS_DATA) {
      for (const [key, val] of Object.entries(window.RADICALS_DATA)) {
        radStore.put(val);
      }
    }

    // Seed Characters
    if (window.CHARACTERS_DATA) {
      for (const [key, val] of Object.entries(window.CHARACTERS_DATA)) {
        const item = { id: key, ...val };
        charStore.put(item);

        // Initialize SRS status
        srsStore.put({
          character_id: key,
          repetition_count: 0,
          interval_days: 0.0,
          ease_factor: 2.5,
          mastery_level: 'new',
          next_review_time: Date.now(), // Due immediately for learning
          last_reviewed_time: null,
          total_reviews: 0,
          correct_count: 0
        });
      }
    }

    return new Promise((resolve) => {
      tx.oncomplete = () => resolve();
    });
  }

  seedInMemory() {
    if (window.RADICALS_DATA) {
      for (const [k, v] of Object.entries(window.RADICALS_DATA)) {
        this.inMemoryCache.radicals.set(k, v);
      }
    }
    if (window.CHARACTERS_DATA) {
      for (const [k, v] of Object.entries(window.CHARACTERS_DATA)) {
        this.inMemoryCache.characters.set(k, { id: k, ...v });
        this.inMemoryCache.srs.set(k, {
          character_id: k,
          repetition_count: 0,
          interval_days: 0,
          ease_factor: 2.5,
          mastery_level: 'new',
          next_review_time: Date.now()
        });
      }
    }
  }

  async loadCache() {
    if (!this.db) return;
    const chars = await this.getAllFromStore("characters");
    chars.forEach(c => this.inMemoryCache.characters.set(c.id, c));

    const rads = await this.getAllFromStore("radicals");
    rads.forEach(r => this.inMemoryCache.radicals.set(r.id, r));

    const srsList = await this.getAllFromStore("user_srs");
    srsList.forEach(s => this.inMemoryCache.srs.set(s.character_id, s));
  }

  // --- QUERY METHODS ---

  async getCharacter(charId) {
    if (this.inMemoryCache.characters.has(charId)) {
      return this.inMemoryCache.characters.get(charId);
    }
    return (window.CHARACTERS_DATA && window.CHARACTERS_DATA[charId]) || null;
  }

  async getRadical(radId) {
    if (this.inMemoryCache.radicals.has(radId)) {
      return this.inMemoryCache.radicals.get(radId);
    }
    return (window.RADICALS_DATA && window.RADICALS_DATA[radId]) || null;
  }

  async getAllCharacters() {
    return Array.from(this.inMemoryCache.characters.values());
  }

  /**
   * Universal Search (Hanzi, Normalized Pinyin, and Thai Meanings)
   */
  async search(query) {
    if (!query) return [];
    const q = query.trim().toLowerCase();
    const qNorm = this.normalizePinyin(q);

    const results = [];
    for (const [charId, c] of this.inMemoryCache.characters.entries()) {
      const pinyinNorm = this.normalizePinyin(c.primaryPinyin || "");
      const thaiMatch = (c.thaiMeaningShort || "").toLowerCase().includes(q);
      const hanziMatch = c.char === q || charId.includes(q);
      const pinyinMatch = (c.primaryPinyin || "").toLowerCase().includes(q) || pinyinNorm.includes(qNorm);

      let compoundMatch = false;
      if (c.compounds) {
        compoundMatch = c.compounds.some(cp => 
          cp.word.includes(q) || 
          this.normalizePinyin(cp.pinyin).includes(qNorm) || 
          cp.thai.toLowerCase().includes(q)
        );
      }

      if (hanziMatch || pinyinMatch || thaiMatch || compoundMatch) {
        results.push(c);
      }
    }
    return results;
  }

  normalizePinyin(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ü/g, "u")
      .replace(/v/g, "u")
      .toLowerCase();
  }

  // --- SPACED REPETITION (SRS) METHODS ---

  async getSRSItem(charId) {
    if (this.inMemoryCache.srs.has(charId)) {
      return this.inMemoryCache.srs.get(charId);
    }
    return {
      character_id: charId,
      repetition_count: 0,
      interval_days: 0,
      ease_factor: 2.5,
      mastery_level: 'new',
      next_review_time: Date.now()
    };
  }

  async saveSRSProgress(charId, srsData) {
    this.inMemoryCache.srs.set(charId, srsData);
    if (!this.db) return;

    try {
      const tx = this.db.transaction(["user_srs"], "readwrite");
      tx.objectStore("user_srs").put(srsData);
    } catch (e) {
      console.warn("Error persisting SRS data to IndexedDB:", e);
    }
  }

  async getDueSRSReviews() {
    const now = Date.now();
    const due = [];
    for (const [charId, srs] of this.inMemoryCache.srs.entries()) {
      if (srs.next_review_time <= now || srs.mastery_level === 'new') {
        const charData = await this.getCharacter(charId);
        if (charData) {
          due.push({ srs, character: charData });
        }
      }
    }
    return due;
  }

  async getAllSRSReviews() {
    const all = [];
    for (const [charId, srs] of this.inMemoryCache.srs.entries()) {
      const charData = await this.getCharacter(charId);
      if (charData) {
        all.push({ srs, character: charData });
      }
    }
    // If empty or cache missing, populate from window.CHARACTERS_DATA
    if (all.length === 0 && window.CHARACTERS_DATA) {
      for (const [charId, charData] of Object.entries(window.CHARACTERS_DATA)) {
        all.push({
          srs: {
            character_id: charId,
            repetition_count: 1,
            interval_days: 1,
            ease_factor: 2.5,
            mastery_level: 'learning',
            next_review_time: Date.now()
          },
          character: charData
        });
      }
    }
    return all;
  }

  async getSRSStatistics() {
    let total = 0, newCount = 0, learningCount = 0, reviewingCount = 0, masteredCount = 0;
    for (const srs of this.inMemoryCache.srs.values()) {
      total++;
      if (srs.mastery_level === 'new') newCount++;
      else if (srs.mastery_level === 'learning') learningCount++;
      else if (srs.mastery_level === 'reviewing') reviewingCount++;
      else if (srs.mastery_level === 'mastered') masteredCount++;
    }
    return { total, newCount, learningCount, reviewingCount, masteredCount };
  }

  // --- DATA BACKUP & PORTABILITY ---

  async exportBackup() {
    const exportData = {
      exportedAt: new Date().toISOString(),
      version: 1,
      srs: Array.from(this.inMemoryCache.srs.values())
    };
    return JSON.stringify(exportData, null, 2);
  }

  async importBackup(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.srs && Array.isArray(data.srs)) {
        for (const item of data.srs) {
          await this.saveSRSProgress(item.character_id, item);
        }
        return true;
      }
    } catch (e) {
      console.error("Failed to import backup:", e);
    }
    return false;
  }

  // --- LOW-LEVEL INDEXEDDB HELPERS ---

  getAllFromStore(storeName) {
    return new Promise((resolve) => {
      if (!this.db) return resolve([]);
      const tx = this.db.transaction([storeName], "readonly");
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  }

  countStore(storeName) {
    return new Promise((resolve) => {
      if (!this.db) return resolve(0);
      const tx = this.db.transaction([storeName], "readonly");
      const store = tx.objectStore(storeName);
      const req = store.count();
      req.onsuccess = () => resolve(req.result || 0);
      req.onerror = () => resolve(0);
    });
  }
}

window.DB = new JumJeenDatabase();
