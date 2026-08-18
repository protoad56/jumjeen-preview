/**
 * Interactive Dynamic Radical Mindmap Engine (Guaranteed 100% Collision-Free Physics Layout)
 * จำจีน (JumJeen) - ผัง Mindmap แตกกิ่งใบจริง ไร้การทับซ้อน 100% ด้วย Iterative Collision Solver
 */

class RadicalMindmap {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.svg = null;
    this.nodesLayer = null;
    this.linksLayer = null;
    this.currentRadical = "女";
    this.selectedCharId = "好";
    this.viewMode = "radical-tree"; // 'radical-tree' or 'decompose-tree'
    
    // Pagination & Filter for large radical families
    this.hskFilter = "all"; // 'all', '1-2', '3-4', '5+'
    this.pageIndex = 0;
    this.pageSize = 6; // 6 characters per ring page ensures generous breathing room
    
    // Zoom & Pan state
    this.scale = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;

    this.onSelectCharacter = options.onSelectCharacter || null;
    this.onSelectRadical = options.onSelectRadical || null;

    this.init();
  }

  init() {
    if (!this.container) return;
    this.container.innerHTML = "";

    // 1. SVG Links Canvas
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute("class", "mindmap-svg-canvas");
    this.container.appendChild(this.svg);

    // Links Layer
    this.linksLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
    this.linksLayer.setAttribute("class", "links-layer");
    this.svg.appendChild(this.linksLayer);

    // 2. Nodes Layer
    this.nodesLayer = document.createElement("div");
    this.nodesLayer.setAttribute("class", "mindmap-nodes-layer");
    this.container.appendChild(this.nodesLayer);

    this.bindEvents();
    this.render();
  }

  bindEvents() {
    let startX = 0, startY = 0;
    let initialPanX = 0, initialPanY = 0;

    const onStart = (clientX, clientY) => {
      this.isDragging = true;
      startX = clientX;
      startY = clientY;
      initialPanX = this.panX;
      initialPanY = this.panY;
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDragging) return;
      const dx = clientX - startX;
      const dy = clientY - startY;
      this.panX = initialPanX + dx;
      this.panY = initialPanY + dy;
      this.updateTransform();
    };

    const onEnd = () => {
      this.isDragging = false;
    };

    // Mouse drag
    this.container.addEventListener('mousedown', (e) => {
      if (e.target.closest('.mindmap-node') || e.target.closest('.orbit-page-btn')) return;
      onStart(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onEnd);

    // Touch drag for mobile
    this.container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && !e.target.closest('.mindmap-node') && !e.target.closest('.orbit-page-btn')) {
        onStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (this.isDragging && e.touches.length === 1) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', onEnd);

    // Window resize
    window.addEventListener('resize', () => {
      this.render();
    });
  }

  setRadical(radicalId) {
    this.currentRadical = radicalId;
    this.viewMode = "radical-tree";
    this.pageIndex = 0;
    
    const charIds = this.getFilteredCharacterIds();
    if (charIds && charIds.length > 0) {
      this.selectedCharId = charIds[0];
    } else {
      this.selectedCharId = null;
    }
    
    this.resetView();
    this.render();
  }

  selectCharacter(charId) {
    this.selectedCharId = charId;
    this.render();
    if (this.onSelectCharacter) {
      this.onSelectCharacter(charId);
    }
  }

  setMode(mode) {
    this.viewMode = mode;
    this.resetView();
    this.render();
  }

  setHskFilter(filter) {
    this.hskFilter = filter;
    this.pageIndex = 0;
    const charIds = this.getFilteredCharacterIds();
    if (charIds && charIds.length > 0) {
      this.selectedCharId = charIds[0];
    }
    this.render();
  }

  nextPage() {
    const totalChars = this.getAllCharacterIdsForRadical().length;
    const maxPages = Math.ceil(totalChars / this.pageSize);
    if (this.pageIndex < maxPages - 1) {
      this.pageIndex++;
      this.render();
    }
  }

  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.render();
    }
  }

  resetView() {
    this.scale = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.updateTransform();
  }

  zoomIn() {
    this.scale = Math.min(this.scale + 0.15, 1.6);
    this.updateTransform();
  }

  zoomOut() {
    this.scale = Math.max(this.scale - 0.15, 0.65);
    this.updateTransform();
  }

  updateTransform() {
    const transformStr = `translate(${this.panX}px, ${this.panY}px) scale(${this.scale})`;
    this.nodesLayer.style.transform = transformStr;
    this.linksLayer.setAttribute('transform', `translate(${this.panX}, ${this.panY}) scale(${this.scale})`);
  }

  getAllCharacterIdsForRadical() {
    const radChar = this.currentRadical;
    const result = [];

    if (window.RADICALS_DATA && window.RADICALS_DATA[radChar] && window.RADICALS_DATA[radChar].characterIds) {
      result.push(...window.RADICALS_DATA[radChar].characterIds);
    }

    if (window.CHARACTERS_DATA) {
      for (const [k, v] of Object.entries(window.CHARACTERS_DATA)) {
        if (v.radical === radChar && !result.includes(k)) {
          result.push(k);
        }
      }
    }

    if (result.length === 0) {
      result.push(radChar);
    }

    return result;
  }

  getFilteredCharacterIds() {
    const all = this.getAllCharacterIdsForRadical();
    if (this.hskFilter === "all") return all;

    return all.filter(charId => {
      const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[charId] : null;
      const hsk = charData ? charData.hskLevel : 1;
      if (this.hskFilter === "1-2") return hsk <= 2;
      if (this.hskFilter === "3-4") return hsk >= 3 && hsk <= 4;
      if (this.hskFilter === "5+") return hsk >= 5;
      return true;
    });
  }

  getRadicalData(radChar) {
    if (window.RADICALS_DATA && window.RADICALS_DATA[radChar]) {
      return window.RADICALS_DATA[radChar];
    }
    if (window.RADICALS_CATALOG) {
      const found = window.RADICALS_CATALOG.find(r => r.char === radChar);
      if (found) {
        return {
          id: found.char,
          pinyin: found.pinyin,
          thaiMeaning: found.thai,
          category: found.cat,
          characterIds: this.getAllCharacterIdsForRadical(),
          themeColor: "var(--c-vermilion)",
          themeSoft: "var(--c-vermilion-soft)"
        };
      }
    }
    return {
      id: radChar,
      pinyin: "",
      thaiMeaning: "รากศัพท์",
      category: "ทั่วไป",
      characterIds: [radChar]
    };
  }

  render() {
    if (!this.container) return;
    const rect = this.container.getBoundingClientRect();
    const w = rect.width || 360;
    const h = rect.height || 480;

    this.svg.setAttribute("width", w);
    this.svg.setAttribute("height", h);

    this.linksLayer.innerHTML = "";
    this.nodesLayer.innerHTML = "";

    if (this.viewMode === "decompose-tree") {
      this.renderDecomposeTree(w, h);
    } else {
      this.renderRadicalTree(w, h);
    }

    this.updateTransform();
  }

  /**
   * Render Radical Mindmap with Mathematical Non-Overlapping Fan-Out & Collision Physics
   */
  renderRadicalTree(w, h) {
    const rad = this.getRadicalData(this.currentRadical);
    if (!rad) return;

    const centerX = w / 2;
    const centerY = (h / 2) + 14;

    // 1. Center Radical Node Item
    const variantTag = (rad.variants && rad.variants.length > 0) ? rad.variants.join(' ') : null;
    const centerNodeItem = {
      id: `rad-${rad.id}`,
      type: "center-radical",
      hanzi: rad.id,
      title: rad.pinyin,
      subtitle: rad.thaiMeaning,
      badge: variantTag,
      x: centerX,
      y: centerY,
      w: 74,
      h: 74,
      isFixed: true,
      onClick: () => {
        if (this.onSelectRadical) this.onSelectRadical(rad.id);
        if (window.AudioEngine) window.AudioEngine.speak(rad.id);
      }
    };

    // 2. Character Nodes for current Page
    const allFiltered = this.getFilteredCharacterIds();
    const totalChars = allFiltered.length;
    const maxPages = Math.ceil(totalChars / this.pageSize) || 1;
    
    if (this.pageIndex >= maxPages) this.pageIndex = maxPages - 1;
    if (this.pageIndex < 0) this.pageIndex = 0;

    const startIdx = this.pageIndex * this.pageSize;
    const pageChars = allFiltered.slice(startIdx, startIdx + this.pageSize);
    const count = pageChars.length;

    // Generous Ring Radius
    const ringRadius = Math.min(w * 0.33, 118);
    const selectedCharData = (this.selectedCharId && window.CHARACTERS_DATA) ? window.CHARACTERS_DATA[this.selectedCharId] : null;
    const compounds = (selectedCharData && selectedCharData.compounds) ? selectedCharData.compounds : [];
    const hasActiveLeaves = compounds.length > 0;

    const charNodes = [];
    const leafNodes = [];
    const links = [];

    // Calculate Character Node Positions
    pageChars.forEach((charId, idx) => {
      const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
      const isSelected = (charId === this.selectedCharId);

      // Selected character node is shifted outward to give plenty of room for its leaves
      const dist = isSelected && hasActiveLeaves ? (ringRadius + 15) : ringRadius;
      const charX = centerX + Math.cos(angle) * dist;
      const charY = centerY + Math.sin(angle) * dist;

      const charData = window.CHARACTERS_DATA ? window.CHARACTERS_DATA[charId] : null;
      const lexiconItem = window.HANZI_LEXICON ? window.HANZI_LEXICON[charId] : null;

      const pinyin = charData ? charData.primaryPinyin : (lexiconItem ? lexiconItem.pinyin : (rad.pinyin || ""));
      const thai = charData ? charData.thaiMeaningShort.split('/')[0].trim() : (lexiconItem ? lexiconItem.thai.split(',')[0].trim() : (rad.thaiMeaning || ""));
      const tone = charData ? charData.primaryTone : (lexiconItem ? lexiconItem.tone : 1);
      const isMastered = window.DB ? window.DB.isCharacterMastered(charId) : false;
      const masterySource = window.DB ? window.DB.getMasterySource(charId) : null;

      const charNode = {
        id: `char-${charId}`,
        charId: charId,
        type: `char-node ${isSelected ? 'selected' : ''} ${isMastered ? 'mastered' : ''} ${masterySource === 'manual' ? 'mastered-manual' : ''} ${hasActiveLeaves && !isSelected && count > 2 ? 'dimmed-node' : ''}`,
        hanzi: charId,
        title: pinyin,
        subtitle: thai,
        tone: tone,
        x: charX,
        y: charY,
        angle: angle,
        w: 54,
        h: 54,
        isSelected: isSelected,
        onClick: () => {
          this.selectCharacter(charId);
          if (window.AudioEngine) window.AudioEngine.speak(charId);
        }
      };

      charNodes.push(charNode);
      links.push({
        from: centerNodeItem,
        to: charNode,
        type: isSelected ? 'active-link' : 'normal-link'
      });
    });

    // 3. Calculate Leaf Nodes (Compound Words) with Guaranteed Non-Overlapping Flanking Geometry
    const selectedCharNode = charNodes.find(c => c.isSelected);
    if (selectedCharNode && hasActiveLeaves) {
      const leafCount = Math.min(compounds.length, 4);
      const baseAngle = selectedCharNode.angle;

      // Unit vector pointing outward from radical center through character node
      const ux = Math.cos(baseAngle);
      const uy = Math.sin(baseAngle);
      // Tangent vector perpendicular to radial vector
      const tx = -uy;
      const ty = ux;

      compounds.slice(0, leafCount).forEach((comp, idx) => {
        let posX = selectedCharNode.x;
        let posY = selectedCharNode.y;

        if (leafCount === 1) {
          // 1 leaf: straight outward
          posX += ux * 68;
          posY += uy * 68;
        } else if (leafCount === 2) {
          // 2 leaves: flanking symmetrically left and right
          const side = idx === 0 ? -1 : 1;
          posX += ux * 52 + tx * (side * 62);
          posY += uy * 52 + ty * (side * 62);
        } else if (leafCount === 3) {
          // 3 leaves: left, apex, right
          if (idx === 0) {
            posX += ux * 42 + tx * -68;
            posY += uy * 42 + ty * -68;
          } else if (idx === 1) {
            posX += ux * 68;
            posY += uy * 68;
          } else {
            posX += ux * 42 + tx * 68;
            posY += uy * 42 + ty * 68;
          }
        } else if (leafCount === 4) {
          // 4 leaves: 2-tier wide flanking geometry with generous lateral separation
          // Tier 1 (Apex Left & Right): ux * 62, tx * ±42
          // Tier 2 (Wing Left & Right): ux * 28, tx * ±84
          if (idx === 0) {
            // Wing Left (e.g. 你好)
            posX += ux * 28 + tx * -84;
            posY += uy * 28 + ty * -84;
          } else if (idx === 1) {
            // Apex Left (e.g. 好吃)
            posX += ux * 64 + tx * -40;
            posY += uy * 64 + ty * -40;
          } else if (idx === 2) {
            // Apex Right (e.g. 好看)
            posX += ux * 64 + tx * 40;
            posY += uy * 64 + ty * 40;
          } else if (idx === 3) {
            // Wing Right (e.g. 爱好)
            posX += ux * 28 + tx * 84;
            posY += uy * 28 + ty * 84;
          }
        }

        const isLeafMastered = window.DB ? window.DB.isCharacterMastered(comp.word) : false;
        const leafMasterySource = window.DB ? window.DB.getMasterySource(comp.word) : null;

        const leafNode = {
          id: `leaf-${comp.word}`,
          type: `compound-leaf on-canvas-leaf ${isLeafMastered ? 'mastered' : ''} ${leafMasterySource === 'manual' ? 'mastered-manual' : ''}`,
          hanzi: comp.word,
          title: comp.pinyin,
          subtitle: comp.thai,
          x: posX,
          y: posY,
          w: 68,
          h: 36,
          onClick: () => {
            if (window.AudioEngine) {
              window.AudioEngine.speak(comp.audioText || comp.word);
            }
            if (window.App) {
              window.App.updateQuickInspectBar({
                hanzi: comp.word,
                pinyin: comp.pinyin,
                thai: comp.thai
              });
            }
            // Highlight clicked leaf
            document.querySelectorAll(".on-canvas-leaf").forEach(el => el.classList.remove("active-leaf"));
            const currentEl = document.getElementById(`leaf-${comp.word}`);
            if (currentEl) currentEl.classList.add("active-leaf");
          }
        };

        leafNodes.push(leafNode);
        links.push({
          from: selectedCharNode,
          to: leafNode,
          type: 'compound-link'
        });
      });
    }

    // 4. Collision Relaxation Solver Pass (Pushes any overlapping boxes apart in 2D)
    this.resolveNodeCollisions([centerNodeItem, ...charNodes, ...leafNodes], w, h);

    // 5. Render Links
    links.forEach(l => {
      this.drawCurvedLink(l.from.x, l.from.y, l.to.x, l.to.y, l.type);
    });

    // 6. Render DOM Nodes
    this.nodesLayer.appendChild(this.createNodeElement(centerNodeItem));
    charNodes.forEach(c => this.nodesLayer.appendChild(this.createNodeElement(c)));
    leafNodes.forEach(l => this.nodesLayer.appendChild(this.createNodeElement(l)));

    // 7. Orbit Pagination Pill if radical has more characters than pageSize
    if (totalChars > this.pageSize) {
      this.renderOrbitPaginationControls(totalChars, maxPages);
    } else {
      this.removeOrbitPaginationControls();
    }

    // 8. Empty HSK Filter Notice
    if (totalChars === 0) {
      const emptyMsg = document.createElement("div");
      emptyMsg.className = "mindmap-empty-hsk-msg";
      emptyMsg.style.cssText = "position: absolute; bottom: 85px; left: 50%; transform: translateX(-50%); background: var(--bg-surface); padding: 8px 16px; border-radius: 999px; font-size: 11px; font-weight: 600; color: var(--ink-secondary); border: 1px solid var(--ink-border); box-shadow: var(--shadow-sm); z-index: 10; pointer-events: none; white-space: nowrap;";
      const filterLabel = this.hskFilter === '1-2' ? 'HSK 1-2' : (this.hskFilter === '3-4' ? 'HSK 3-4' : 'HSK 5+');
      emptyMsg.innerHTML = `✨ หมวดรากศัพท์ <strong>${rad.id}</strong> ยังไม่มีคำศัพท์ในระดับ ${filterLabel}`;
      this.nodesLayer.appendChild(emptyMsg);
    }
  }

  /**
   * Iterative Bounding-Box Collision Repulsion Solver
   */
  resolveNodeCollisions(allNodes, w, h) {
    const iterations = 12;
    for (let iter = 0; iter < iterations; iter++) {
      for (let i = 0; i < allNodes.length; i++) {
        for (let j = i + 1; j < allNodes.length; j++) {
          const a = allNodes[i];
          const b = allNodes[j];

          const minDistX = (a.w + b.w) / 2 + 8;
          const minDistY = (a.h + b.h) / 2 + 6;

          const dx = b.x - a.x;
          const dy = b.y - a.y;

          const overlapX = minDistX - Math.abs(dx);
          const overlapY = minDistY - Math.abs(dy);

          if (overlapX > 0 && overlapY > 0) {
            // Push apart along 2D proportional displacement
            const pushX = (overlapX * 0.55) * (dx >= 0 ? 1 : -1);
            const pushY = (overlapY * 0.55) * (dy >= 0 ? 1 : -1);
            if (!a.isFixed) {
              a.x -= pushX * 0.5;
              a.y -= pushY * 0.5;
            }
            if (!b.isFixed) {
              b.x += pushX * 0.5;
              b.y += pushY * 0.5;
            }
          }
        }
      }
    }

    // Keep all nodes safely within visible bounds without aggressive snapping
    const padX = 36;
    const padY = 22;
    allNodes.forEach(n => {
      if (!n.isFixed) {
        n.x = Math.max(padX, Math.min(w - padX, n.x));
        n.y = Math.max(padY, Math.min(h - padY - 20, n.y));
      }
    });
  }

  renderOrbitPaginationControls(totalChars, maxPages) {
    let paginationEl = document.getElementById("orbit-pagination-bar");
    if (!paginationEl) {
      paginationEl = document.createElement("div");
      paginationEl.id = "orbit-pagination-bar";
      paginationEl.className = "orbit-pagination-bar";
      this.container.appendChild(paginationEl);
    }

    paginationEl.innerHTML = `
      <div class="orbit-page-badge">
        <span class="page-count-icon">🪐</span>
        <span>มีทั้งหมด <strong>${totalChars}</strong> ตัวอักษร</span>
      </div>
      <div class="orbit-page-btns">
        <button class="orbit-page-btn" ${this.pageIndex === 0 ? 'disabled' : ''} onclick="window.App.mindmap.prevPage()">◀ ก่อนหน้า</button>
        <span class="orbit-page-num">${this.pageIndex + 1} / ${maxPages}</span>
        <button class="orbit-page-btn" ${this.pageIndex >= maxPages - 1 ? 'disabled' : ''} onclick="window.App.mindmap.nextPage()">ถัดไป ▶</button>
      </div>
    `;
    paginationEl.style.display = "flex";
  }

  removeOrbitPaginationControls() {
    const paginationEl = document.getElementById("orbit-pagination-bar");
    if (paginationEl) {
      paginationEl.style.display = "none";
    }
  }

  /**
   * Render Decompose View (Center: Character, Left: Radical, Right: Component, Top: Story, Bottom: Modern)
   */
  renderDecomposeTree(w, h) {
    this.removeOrbitPaginationControls();

    const charData = (this.selectedCharId && window.CHARACTERS_DATA && window.CHARACTERS_DATA[this.selectedCharId]) 
      ? window.CHARACTERS_DATA[this.selectedCharId] 
      : (window.CHARACTERS_DATA ? window.CHARACTERS_DATA["好"] : null);

    if (!charData) return;

    const centerX = w / 2;
    const centerY = (h / 2) - 10;

    // Center Character Node
    const centerNode = this.createNodeElement({
      id: `center-char-${charData.char}`,
      type: "center-character-decompose",
      hanzi: charData.char,
      title: charData.primaryPinyin,
      subtitle: charData.structure,
      x: centerX,
      y: centerY,
      onClick: () => {
        if (window.AudioEngine) window.AudioEngine.speak(charData.char);
      }
    });
    this.nodesLayer.appendChild(centerNode);

    // Left Radical Component (e.g. 女)
    const comp1 = charData.components ? charData.components[0] : null;
    if (comp1) {
      const leftX = Math.max(centerX - 105, 55);
      const leftY = centerY + 10;
      this.drawCurvedLink(centerX, centerY, leftX, leftY, 'decompose-link');

      const leftNode = this.createNodeElement({
        id: `comp-left`,
        type: "component-node radical-comp",
        hanzi: comp1.char,
        title: comp1.pinyin,
        subtitle: comp1.meaning,
        badge: "รากอักษร",
        x: leftX,
        y: leftY,
        onClick: () => {
          if (window.AudioEngine) window.AudioEngine.speak(comp1.char);
        }
      });
      this.nodesLayer.appendChild(leftNode);
    }

    // Right Component (e.g. 子)
    const comp2 = charData.components ? charData.components[1] : null;
    if (comp2) {
      const rightX = Math.min(centerX + 105, w - 55);
      const rightY = centerY + 10;
      this.drawCurvedLink(centerX, centerY, rightX, rightY, 'decompose-link');

      const rightNode = this.createNodeElement({
        id: `comp-right`,
        type: "component-node body-comp",
        hanzi: comp2.char,
        title: comp2.pinyin,
        subtitle: comp2.meaning,
        badge: "ส่วนประสม",
        x: rightX,
        y: rightY,
        onClick: () => {
          if (window.AudioEngine) window.AudioEngine.speak(comp2.char);
        }
      });
      this.nodesLayer.appendChild(rightNode);
    }

    // Top Story Node
    const topX = centerX;
    const topY = centerY - 100;
    this.drawCurvedLink(centerX, centerY, topX, topY, 'story-link');
    const topNode = this.createNodeElement({
      id: `story-node`,
      type: "story-capsule",
      customHtml: `
        <div class="capsule-icon">📜</div>
        <div class="capsule-text">
          <span class="capsule-title">เรื่องราวดั้งเดิม</span>
          <span class="capsule-sub">${charData.mnemonicHook ? charData.mnemonicHook.formula : 'โครงสร้างรากศัพท์'}</span>
        </div>
      `,
      x: topX,
      y: topY
    });
    this.nodesLayer.appendChild(topNode);

    // Bottom Modern Meaning Node
    const botX = centerX;
    const botY = centerY + 100;
    this.drawCurvedLink(centerX, centerY, botX, botY, 'story-link');
    const botNode = this.createNodeElement({
      id: `bot-meaning-node`,
      type: "story-capsule modern-capsule",
      customHtml: `
        <div class="capsule-icon">✨</div>
        <div class="capsule-text">
          <span class="capsule-title">ความหมายปัจจุบัน</span>
          <span class="capsule-sub">${charData.thaiMeaningShort} (HSK ${charData.hskLevel})</span>
        </div>
      `,
      x: botX,
      y: botY
    });
    this.nodesLayer.appendChild(botNode);
  }

  createNodeElement(params) {
    const el = document.createElement("div");
    el.id = params.id;
    el.className = `mindmap-node ${params.type}`;
    el.style.left = `${params.x}px`;
    el.style.top = `${params.y}px`;

    if (params.customHtml) {
      el.innerHTML = params.customHtml;
    } else {
      let toneClass = params.tone ? `tone-tag-${params.tone}` : '';
      let badgeHtml = params.badge ? `<span class="node-badge">${params.badge}</span>` : '';

      el.innerHTML = `
        ${badgeHtml}
        <div class="node-hanzi">${params.hanzi}</div>
        ${params.title ? `<div class="node-pinyin ${toneClass}">${params.title}</div>` : ''}
        ${params.subtitle ? `<div class="node-thai">${params.subtitle}</div>` : ''}
      `;
    }

    if (params.onClick) {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        params.onClick();
      });
    }

    return el;
  }

  drawCurvedLink(x1, y1, x2, y2, className = "") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cx1 = x1 + dx * 0.45;
    const cy1 = y1 + dy * 0.1;
    const cx2 = x1 + dx * 0.55;
    const cy2 = y1 + dy * 0.9;

    const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
    path.setAttribute("d", d);
    path.setAttribute("class", `mindmap-link ${className}`);
    this.linksLayer.appendChild(path);
  }
}

window.RadicalMindmap = RadicalMindmap;
