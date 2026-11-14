// ============================================================================
// SCAYA MAIN APPLICATION ENGINE
// Книжный гуашевый розовый дельфин Скай и его друзья + Морские глубины A1–C2 +
// Полная грамматика, Вся лексика и Обязательное чтение по каждому уровню + Quizlet SRS
// ============================================================================

const ScayaApp = {
  state: null,
  activeTab: 'ocean', // 'ocean' | 'flashcards' | 'stories' | 'shop' | 'profile'
  activePostcardIndex: 0,
  activeWardrobeCharacter: 'all', // 'all' | 'sky' | 'shark' | 'mermaid' | 'jelly'
  selectedNodeId: null,

  // Состояние карточек Quizlet (SRS)
  flashcardSession: {
    currentCardId: null,
    isFlipped: false,
    filterMode: 'due', // 'due' | 'all' | 'custom'
    showAddForm: false
  },

  // Состояние интерактивной Истории (Scaya Stories)
  storySession: {
    active: false,
    story: null,
    visibleStepIndex: 0,
    waitingForQuestion: false,
    questionAnswered: false,
    selectedOption: null,
    isQuestionCorrect: false
  },

  session: {
    active: false,
    mode: 'unit', // 'unit' | 'placement' | 'skip_jump' | 'mistakes_review'
    unit: null,
    readingStage: false, // Если урок является обязательным чтением, сначала показываем текст для чтения!
    showReadingTranslation: false,
    targetSkipUnitId: null,
    exercises: [],
    currentIndex: 0,
    selectedAnswer: null,
    assembledWords: [],
    availableWords: [],
    checked: false,
    isCorrect: false,
    correctCount: 0,
    heartLostThisTurn: false,
    newlyAddedCardsCount: 0
  },

  init() {
    this.initTelegramWebApp();
    this.state = window.ScayaCloud.loadState();
    if (!this.state.user.friendOutfits) {
      this.state.user.friendOutfits = {
        sky: this.state.user.avatarOutfit || 'default',
        shark: 'lulu_default',
        mermaid: 'mira_default',
        jelly: 'blinky_default'
      };
    }
    if (!Array.isArray(this.state.user.ownedOutfits)) {
      this.state.user.ownedOutfits = ['default', 'lulu_default', 'mira_default', 'blinky_default'];
    } else {
      ['default', 'lulu_default', 'mira_default', 'blinky_default'].forEach(defId => {
        if (!this.state.user.ownedOutfits.includes(defId)) {
          this.state.user.ownedOutfits.push(defId);
        }
      });
    }
    this.syncSelectedNodeToUserLevel();
    this.renderAll();

    if (!this.state.user.onboardingDone) {
      this.openOnboardingModal();
    }

    this.startLiveServerSync();
  },

  initTelegramWebApp() {
    try {
      const tg = window.Telegram && window.Telegram.WebApp;
      if (tg) {
        tg.ready();
        if (typeof tg.expand === 'function') tg.expand();
        if (typeof tg.setHeaderColor === 'function') tg.setHeaderColor('#EDE4CE');
        if (typeof tg.setBackgroundColor === 'function') tg.setBackgroundColor('#EDE4CE');
        if (tg.initData || (tg.platform && tg.platform !== 'unknown')) {
          if (document.body && document.body.classList) {
            document.body.classList.add('tg-webapp-mode');
          }
        }
      }
    } catch (e) {}
  },

  startLiveServerSync() {
    try {
      if (
        typeof window === 'undefined' ||
        !window.location ||
        !/^https?:/.test(window.location.protocol) ||
        /github\.io$/i.test(window.location.hostname || '') ||
        typeof fetch !== 'function'
      ) {
        return;
      }
      let pulling = false;
      const pull = async () => {
        if (pulling) return;
        pulling = true;
        try {
          const { uid, isVip } = window.ScayaCloud.getSessionIdentity();
          const res = await fetch(`/api/user_state?uid=${encodeURIComponent(uid)}&vip=${isVip ? '1' : '0'}&t=${Date.now()}`);
          if (!res.ok) return;
          const remote = await res.json();
          if (remote && remote._updatedAt && (!this.state._updatedAt || remote._updatedAt > this.state._updatedAt)) {
            this.state = window.ScayaCloud.applyVipPerksIfNeeded(remote);
            localStorage.setItem(window.ScayaCloud.getStorageKey(), JSON.stringify(this.state));
            this.syncSelectedNodeToUserLevel();
            if (!this.session.active && !this.storySession.active) {
              this.renderAll();
            }
          }
        } catch (err) {
        } finally {
          pulling = false;
        }
      };
      setTimeout(pull, 300);
      setInterval(pull, 12000);
    } catch (e) {}
  },

  syncSelectedNodeToUserLevel() {
    // Плашка урока не открывается автоматически при входе — она появляется только при нажатии на звезду уровня!
    this.selectedNodeId = null;
  },

  // --------------------------------------------------------------------------
  // ЗВУКИ И ОЗВУЧКА АНГЛИЙСКОЙ РЕЧИ (+ HapticFeedback в Telegram на iPhone)
  // --------------------------------------------------------------------------
  playTone(type = 'correct') {
    try {
      const tg = window.Telegram && window.Telegram.WebApp;
      if (tg && tg.HapticFeedback) {
        if (type === 'correct' || type === 'win') tg.HapticFeedback.notificationOccurred('success');
        else if (type === 'wrong') tg.HapticFeedback.notificationOccurred('error');
        else tg.HapticFeedback.impactOccurred('light');
      }
    } catch (e) {}
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const now = ctx.currentTime;

      if (type === 'correct') {
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0.12, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.24);
        });
      } else if (type === 'wrong') {
        [300, 220].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.14, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.26);
        });
      } else if (type === 'win') {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.09);
          gain.gain.setValueAtTime(0.14, now + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.32);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.09);
          osc.stop(now + idx * 0.09 + 0.34);
        });
      }
    } catch (e) {}
  },

  activeWordTooltip: null, // { word, ru, sentence, speaker, addedNew }

  speakEnglish(text, speaker = 'sky') {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';

      const normSpeaker = (speaker || 'sky').toLowerCase();
      // Настройки высоты и темпа голоса для каждого персонажа:
      // Лулу (shark/lulu) — девочка-акулёнок, нежный высокий женский голос
      // Мира (mermaid/mira) — русалка, мелодичный женский голос
      // Скай (sky) — мальчик-дельфин, звонкий более высокий голос
      // Блинки (jelly/blinky) — мальчик-медузёнок, тоже высокий голос
      let wantFemale = false;
      if (normSpeaker === 'shark' || normSpeaker === 'lulu') {
        wantFemale = true;
        utter.pitch = 1.42;
        utter.rate = 0.98;
      } else if (normSpeaker === 'mermaid' || normSpeaker === 'mira') {
        wantFemale = true;
        utter.pitch = 1.24;
        utter.rate = 0.95;
      } else if (normSpeaker === 'jelly' || normSpeaker === 'blinky') {
        wantFemale = false;
        utter.pitch = 1.40;
        utter.rate = 0.97;
      } else {
        // Розовый дельфин Скай — мальчик с более высоким звонким голосом
        wantFemale = false;
        utter.pitch = 1.34;
        utter.rate = 1.0;
      }

      const voices = window.speechSynthesis.getVoices() || [];
      const enVoices = voices.filter(v => v.lang && (v.lang.startsWith('en-') || v.lang === 'en'));
      if (enVoices.length > 0) {
        const femaleNames = ['samantha', 'victoria', 'karen', 'moira', 'tessa', 'flo', 'shelley', 'ava', 'allison', 'susan', 'zoe', 'nicky', 'martha', 'catherine', 'serena', 'female'];
        const deepMaleAvoid = ['fred', 'ralph', 'albert', 'bruce'];
        if (wantFemale) {
          const femVoice = enVoices.find(v => femaleNames.some(fn => v.name.toLowerCase().includes(fn)));
          utter.voice = femVoice || enVoices[0];
        } else {
          // Для мальчиков с высоким голосом (Скай и Блинки) выбираем чистый светлый тембр
          const brightVoice = enVoices.find(v => !deepMaleAvoid.some(dn => v.name.toLowerCase().includes(dn))) || enVoices[0];
          utter.voice = brightVoice;
        }
      }

      window.speechSynthesis.speak(utter);
    } catch (e) {}
  },

  speakEnglishSlow(text) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.pitch = 1.25;
      utter.rate = 0.65;
      const voices = window.speechSynthesis.getVoices() || [];
      const enVoices = voices.filter(v => v.lang && (v.lang.startsWith('en-') || v.lang === 'en'));
      if (enVoices.length > 0) utter.voice = enVoices[0];
      window.speechSynthesis.speak(utter);
    } catch (e) {}
  },

  _speakingTimer: null,

  startSpeakingMic(targetPhrase, expectedCorrect) {
    if (this.session.checked) {
      this.nextExercise();
      return;
    }
    try {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } catch (e) {}

    // Если запись уже идёт — повторное нажатие мгновенно отправляет голосовое и открывает переход дальше!
    if (this.session.isListeningMic) {
      this.finishSpeakingVoiceSend(targetPhrase, expectedCorrect);
      return;
    }

    if (this._speakingTimer) {
      clearTimeout(this._speakingTimer);
      this._speakingTimer = null;
    }

    this.session.isListeningMic = true;
    this.playTone('tap');
    this.renderLessonOverlay();

    // Автоматическое завершение записи через 2.4 сек, если пользователь просто произнёс фразу и ждёт
    this._speakingTimer = setTimeout(() => {
      if (this.session && this.session.active && this.session.isListeningMic) {
        this.finishSpeakingVoiceSend(targetPhrase, expectedCorrect);
      }
    }, 2400);
  },

  finishSpeakingVoiceSend(targetPhrase, expectedCorrect) {
    if (this._speakingTimer) {
      clearTimeout(this._speakingTimer);
      this._speakingTimer = null;
    }
    this.session.isListeningMic = false;
    this.session.speechRecognizedText = targetPhrase;
    this.session.selectedAnswer = expectedCorrect || targetPhrase;
    if (!this.session.checked) {
      this.checkCurrentExercise();
    } else {
      this.renderLessonOverlay();
    }
  },

  confirmSpokenAloud(targetPhrase, expectedCorrect) {
    if (this.session.checked) {
      this.nextExercise();
      return;
    }
    this.finishSpeakingVoiceSend(targetPhrase, expectedCorrect);
  },

  lookupWordTranslation(rawWord) {
    if (!rawWord) return 'слово из контекста';
    const dict = window.ScayaWordDictionary || {};
    const clean = rawWord
      .replace(/[“”".,!?;:()—]/g, '')
      .replace(/’/g, "'")
      .trim()
      .toLowerCase();
    if (!clean) return '';

    if (dict[clean]) return dict[clean];

    // Поиск по словарям уроков
    const allUnits = (window.ScayaCurriculum && window.ScayaCurriculum.units) || [];
    for (const u of allUnits) {
      for (const v of (u.vocab || [])) {
        const vLow = v.en.toLowerCase().replace(/[()]/g, '');
        if (vLow === clean || vLow.split(/\s+/).includes(clean)) {
          return v.ru;
        }
      }
    }

    // Морфологический разбор окончаний (-s, -es, -ed, -ing, -ly, 's)
    const strippedPoss = clean.replace(/'s$/, '');
    if (dict[strippedPoss]) return dict[strippedPoss];
    if (clean.endsWith('ies') && dict[clean.slice(0, -3) + 'y']) return dict[clean.slice(0, -3) + 'y'];
    if (clean.endsWith('es') && dict[clean.slice(0, -2)]) return dict[clean.slice(0, -2)];
    if (clean.endsWith('s') && dict[clean.slice(0, -1)]) return dict[clean.slice(0, -1)];
    if (clean.endsWith('ied') && dict[clean.slice(0, -3) + 'y']) return dict[clean.slice(0, -3) + 'y'];
    if (clean.endsWith('ed')) {
      if (dict[clean.slice(0, -2)]) return dict[clean.slice(0, -2)];
      if (dict[clean.slice(0, -1)]) return dict[clean.slice(0, -1)];
    }
    if (clean.endsWith('ing')) {
      if (dict[clean.slice(0, -3)]) return dict[clean.slice(0, -3)];
      if (dict[clean.slice(0, -3) + 'e']) return dict[clean.slice(0, -3) + 'e'];
    }
    if (clean.endsWith('ly') && dict[clean.slice(0, -2)]) return dict[clean.slice(0, -2)];

    return 'слово сохранено в карточки';
  },

  renderInteractiveWords(sentence, speaker = 'sky') {
    if (!sentence) return '';
    const safeSentence = JSON.stringify(sentence).replace(/"/g, '&quot;');
    const tokens = sentence.split(/(\s+)/);
    return tokens.map(tok => {
      if (/^\s+$/.test(tok)) return tok;
      const match = tok.match(/^([“"'(]*)([A-Za-z’'-]+)([”"'.,!?;:)]*)$/);
      if (!match) return tok;
      const [, prefix, coreWord, suffix] = match;
      const norm = coreWord.replace(/’/g, "'").toLowerCase();
      const isSelected = this.activeWordTooltip && this.activeWordTooltip.word.toLowerCase() === norm;
      const safeWord = JSON.stringify(coreWord).replace(/"/g, '&quot;');
      return `${prefix}<span class="tap-word ${isSelected ? 'active-tap-word' : ''}" onclick="event.stopPropagation(); ScayaApp.onTapTextWord(${safeWord}, ${safeSentence}, '${speaker}')">${coreWord}</span>${suffix}`;
    }).join('');
  },

  onTapTextWord(rawWord, contextSentence, speaker = 'sky') {
    const cleanWord = rawWord.replace(/[“”".,!?;:()]/g, '').trim();
    if (!cleanWord) return;
    const ruTranslation = this.lookupWordTranslation(cleanWord);
    this.speakEnglish(cleanWord, speaker);

    // Автоматически добавляем слово в персональный словарь пользователя (Quizlet SRS)
    const exists = this.state.flashcards.find(
      c => c.en.toLowerCase().trim() === cleanWord.toLowerCase()
    );
    let addedNew = false;
    if (!exists) {
      this.state.flashcards.unshift({
        id: 'tap_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
        en: cleanWord,
        ru: ruTranslation,
        example: contextSentence || `Word from reading: ${cleanWord}`,
        unitId: 'reading_tap_vocab',
        box: 1,
        intervalDays: 0,
        reviewCount: 0,
        nextReviewAt: Date.now() - 1000,
        isCustom: true
      });
      addedNew = true;
      window.ScayaCloud.saveState(this.state);
      this.renderBottomNav();
    }

    this.activeWordTooltip = {
      word: cleanWord,
      ru: ruTranslation,
      sentence: contextSentence,
      speaker,
      addedNew
    };

    if (this.storySession && this.storySession.active) {
      this.renderStoryOverlay();
    } else if (this.session && this.session.active) {
      this.renderLessonOverlay();
    }
  },

  renderWordTooltipBanner() {
    if (!this.activeWordTooltip) {
      return '';
    }
    const t = this.activeWordTooltip;
    const safeW = JSON.stringify(t.word).replace(/"/g, '&quot;');
    return `
      <div class="tap-word-Result-Banner">
        <div class="tap-word-res-top">
          <div class="tap-word-res-main">
            <strong class="tap-word-en">${t.word}</strong>
            <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${safeW}, '${t.speaker || 'sky'}')">🔊</button>
            <span class="tap-word-arrow">→</span>
            <span class="tap-word-ru">${t.ru}</span>
          </div>
          <button class="btn-close-tooltip" onclick="ScayaApp.activeWordTooltip = null; ScayaApp.storySession.active ? ScayaApp.renderStoryOverlay() : ScayaApp.renderLessonOverlay();">✕</button>
        </div>
      </div>
    `;
  },

  switchTab(tab) {
    this.activeTab = tab;
    this.renderAll();
    const container = document.getElementById('scaya-main-view');
    if (container) container.scrollTop = 0;
  },

  renderAll() {
    this.renderTopBar();
    this.renderBottomNav();
    const container = document.getElementById('scaya-main-view');
    if (!container) return;

    if (this.activeTab === 'ocean') {
      this.renderOceanPathTab(container);
    } else if (this.activeTab === 'flashcards') {
      this.renderFlashcardsTab(container);
    } else if (this.activeTab === 'stories') {
      this.renderStoriesTab(container);
    } else if (this.activeTab === 'shop') {
      this.renderShopTab(container);
    } else if (this.activeTab === 'postcards') {
      this.renderPostcardsTab(container);
    } else if (this.activeTab === 'mistakes') {
      this.renderMistakesTab(container);
    } else if (this.activeTab === 'profile') {
      this.renderProfileTab(container);
    }
  },

  // --------------------------------------------------------------------------
  // ВЕРХНЯЯ ПАНЕЛЬ СТАТУСА И НИЖНЯЯ НАВИГАЦИЯ
  // --------------------------------------------------------------------------
  renderTopBar() {
    const topBar = document.getElementById('scaya-top-stats');
    if (!topBar) return;
    const { streakDays, lostStreakDays, pearls, hearts, unlimitedHearts, unlimitedPearls } = this.state.stats;
    const isVip = Boolean(this.state.user.isVipTester);
    const isStreakBroken = streakDays === 0 && lostStreakDays > 0;
    const pearlsText = (isVip || unlimitedPearls) ? '∞' : pearls;
    const heartsText = (isVip || unlimitedHearts) ? '∞' : hearts;

    topBar.innerHTML = `
      <div class="top-bar-inner-wrap">
        <div class="top-stats-left">
          <button class="top-pill level-pill" onclick="ScayaApp.startPlacementTest()" title="Определить уровень заново">
            <span>Level ${this.state.user.detectedLevel || 'A1'}</span>
            ${isVip ? '<span class="vip-mini-tag">VIP</span>' : ''}
          </button>
        </div>

        <div class="top-stats-right">
          <button class="top-pill streak-pill ${isStreakBroken ? 'broken' : ''}" onclick="ScayaApp.openStreakModal()" title="Огонёк ударного режима">
            <span>🔥</span>
            <span>${isStreakBroken ? '0' : streakDays}</span>
          </button>
          <button class="top-pill pearl-pill" onclick="ScayaApp.switchTab('shop')" title="Магазин ракушек">
            <span>🦪</span>
            <span>${pearlsText}</span>
          </button>
          <button class="top-pill heart-pill" onclick="ScayaApp.openHeartsModal()" title="Сердечки жизни">
            <span>❤️</span>
            <span>${heartsText}</span>
          </button>
        </div>
      </div>
    `;
  },

  getDueFlashcardsCount() {
    const now = Date.now();
    return (this.state.flashcards || []).filter(c => (c.nextReviewAt || 0) <= now).length;
  },

  renderBottomNav() {
    const nav = document.getElementById('scaya-bottom-nav');
    if (!nav) return;
    const dueCards = this.getDueFlashcardsCount();
    const tabs = [
      {
        id: 'ocean',
        label: 'Path',
        subRu: 'Тропа',
        svg: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><path d="M5,22 C9,18 7,13 13,13 C19,13 16,7 23,5" stroke="#1E6BFF" stroke-width="3.2" stroke-linecap="round"/><circle cx="23" cy="5" r="2.5" fill="#FF6FB5" stroke="#000" stroke-width="1.8"/></svg>`
      },
      {
        id: 'flashcards',
        label: 'Cards',
        subRu: 'Карточки',
        badge: dueCards > 0 ? dueCards : '',
        svg: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><rect x="4" y="7" width="16" height="15" rx="3" fill="#F5F2E6" stroke="#000" stroke-width="2.2"/><rect x="8" y="4" width="16" height="15" rx="3" fill="#FFEE00" stroke="#000" stroke-width="2.2"/></svg>`
      },
      {
        id: 'stories',
        label: 'Stories',
        subRu: 'Истории',
        svg: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><path d="M4,7 C4,5.5 5.5,4 7,4 L13,4 L13,22 L7,22 C5.5,22 4,20.5 4,19 Z" fill="#FF6FB5" stroke="#000" stroke-width="2.2" stroke-linejoin="round"/><path d="M24,7 C24,5.5 22.5,4 21,4 L15,4 L15,22 L21,22 C22.5,22 24,20.5 24,19 Z" fill="#F5F2E6" stroke="#000" stroke-width="2.2" stroke-linejoin="round"/></svg>`
      },
      {
        id: 'shop',
        label: 'Shop',
        subRu: 'Магазин',
        svg: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><path d="M5,11 L23,11 L21,23 L7,23 Z" fill="#B5C7F7" stroke="#000" stroke-width="2.2" stroke-linejoin="round"/><path d="M3,11 L25,11 L23,6 L5,6 Z" fill="#FF6FB5" stroke="#000" stroke-width="2.2" stroke-linejoin="round"/></svg>`
      },
      {
        id: 'profile',
        label: 'Profile',
        subRu: 'Профиль',
        svg: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><circle cx="14" cy="9.5" r="4.5" fill="#FFEE00" stroke="#000" stroke-width="2.2"/><path d="M6,23 C6,18.5 9.5,16 14,16 C18.5,16 22,18.5 22,23" fill="#FF6FB5" stroke="#000" stroke-width="2.2" stroke-linecap="round"/></svg>`
      }
    ];

    nav.innerHTML = tabs.map(t => `
      <button class="bottom-nav-item ${this.activeTab === t.id ? 'active' : ''}" onclick="ScayaApp.switchTab('${t.id}')">
        <div class="nav-icon-wrap">
          <span class="nav-icon">${t.svg}</span>
          ${t.badge ? `<span class="nav-badge">${t.badge}</span>` : ''}
        </div>
        <span class="nav-label">${t.label}</span>
      </button>
    `).join('');
  },

  // --------------------------------------------------------------------------
  // ВКЛАДКА 1: LEVEL PATH (50 РАЗНООБРАЗНЫХ ШАГОВ НА КАЖДЫЙ УРОВЕНЬ A1–C2!)
  // --------------------------------------------------------------------------
  isUnitUnlocked(unit, indexInAll) {
    if (indexInAll === 0) return true;
    const prog = this.state.unitProgress[unit.id] || (unit.parentUnitId && this.state.unitProgress[unit.parentUnitId]);
    if (prog && (prog.unlocked || prog.crowns > 0)) return true;
    const prevUnit = window.ScayaCurriculum.units[indexInAll - 1];
    if (prevUnit && this.state.unitProgress[prevUnit.id]?.crowns > 0) return true;

    const zones = window.ScayaCurriculum.oceanZones || [];
    const userZone = zones.find(z => z.id === this.state.user.currentZoneId);
    const unitZone = zones.find(z => z.id === unit.zoneId);
    if (userZone && unitZone) {
      if ((unitZone.order || 1) < (userZone.order || 1)) return true;
      if (unitZone.id === userZone.id) {
        const firstInZone = (window.ScayaCurriculum.units || []).find(u => u.zoneId === unitZone.id);
        if (firstInZone && firstInZone.id === unit.id) return true;
      }
    }
    return false;
  },

  togglePassedZonesVisibility() {
    this.state.user.hidePassedZones = !this.state.user.hidePassedZones;
    window.ScayaCloud.saveState(this.state);
    this.renderAll();
  },

  selectPathZone(zoneId) {
    this.selectedPathZoneId = zoneId;
    this.selectedNodeId = null;
    this.pathStepPage = 'all';
    this.playTone('tap');
    this.renderAll();
  },

  selectPathStepRange(rangeKey) {
    this.pathStepPage = rangeKey;
    this.selectedNodeId = null;
    this.playTone('tap');
    this.renderAll();
    const scroller = document.getElementById('scaya-main-view');
    if (scroller) scroller.scrollTop = 0;
  },

  renderOceanPathTab(container) {
    const zones = window.ScayaCurriculum.oceanZones || [];
    const allUnits = window.ScayaCurriculum.units || [];

    if (!this.selectedPathZoneId) {
      this.selectedPathZoneId = (this.state.user && this.state.user.currentZoneId) || (zones[0] && zones[0].id) || 'lagoon_a1';
    }
    if (!this.pathStepPage) {
      this.pathStepPage = 'all';
    }
    const activeZone = zones.find(z => z.id === this.selectedPathZoneId) || zones[0];
    const allZoneUnits = allUnits.filter(u => u.zoneId === activeZone.id);

    // Фильтр диапазона шагов (все 50 шагов подряд или по десяткам 1-10, 11-20, 21-30, 31-40, 41-50)
    let visibleUnits = allZoneUnits;
    let indexOffset = 0;
    if (this.pathStepPage !== 'all') {
      const pageNum = parseInt(this.pathStepPage, 10) || 1;
      indexOffset = (pageNum - 1) * 10;
      visibleUnits = allZoneUnits.slice(indexOffset, indexOffset + 10);
    }

    const levelRoadThemes = {
      lagoon_a1: {
        roadColor: '#FF6FB5',
        starColors: ['pink', 'yellow', 'yellow', 'yellow', 'pink', 'yellow', 'yellow', 'pink', 'yellow', 'pink'],
        voiceLabel: 'Hi! A1 Vibe 🔊'
      },
      shallows_a2: {
        roadColor: '#FFEE00',
        starColors: ['pink', 'blue', 'pink', 'blue', 'pink', 'blue', 'pink', 'blue', 'pink', 'blue'],
        voiceLabel: 'Skater A2! 🛹🔊'
      },
      reef_b1: {
        roadColor: '#8FB3FF',
        starColors: ['yellow', 'pink', 'yellow', 'pink', 'yellow', 'pink', 'yellow', 'pink', 'yellow', 'pink'],
        voiceLabel: 'Bookworm B1! 🧋🔊'
      },
      ocean_b2: {
        roadColor: '#34D399',
        starColors: ['yellow', 'pink', 'yellow', 'pink', 'yellow', 'pink', 'yellow', 'pink', 'yellow', 'pink'],
        voiceLabel: 'Vinyl DJ B2! 💿🔊'
      },
      trench_c1: {
        roadColor: '#C084FC',
        starColors: ['yellow', 'mint', 'pink', 'yellow', 'mint', 'pink', 'yellow', 'mint', 'pink', 'yellow'],
        voiceLabel: 'Varsity C1! 🔥🔊'
      },
      twilight_c1: {
        roadColor: '#C084FC',
        starColors: ['yellow', 'mint', 'pink', 'yellow', 'mint', 'pink', 'yellow', 'mint', 'pink', 'yellow'],
        voiceLabel: 'Varsity C1! 🔥🔊'
      },
      atlantis_c2: {
        roadColor: '#FF8A4C',
        starColors: ['yellow', 'blue', 'pink', 'yellow', 'blue', 'pink', 'yellow', 'blue', 'pink', 'yellow'],
        voiceLabel: 'Y2K Star C2! ⭐🔊'
      },
      abyss_c2: {
        roadColor: '#FF8A4C',
        starColors: ['yellow', 'blue', 'pink', 'yellow', 'blue', 'pink', 'yellow', 'blue', 'pink', 'yellow'],
        voiceLabel: 'Y2K Star C2! ⭐🔊'
      }
    };
    const roadTheme = levelRoadThemes[activeZone.id] || levelRoadThemes.lagoon_a1;

    // Базовый 10-шаговый цикл S-образной дорожки (между 3-м и 4-м шагом дорожка уходит влево, оставляя справа бухту для дельфина!)
    const base10Coords = [
      { x: 84,  y: 74  },
      { x: 266, y: 178 },
      { x: 76,  y: 294 },
      { x: 116, y: 462 },
      { x: 258, y: 608 },
      { x: 84,  y: 726 },
      { x: 260, y: 844 },
      { x: 88,  y: 962 },
      { x: 256, y: 1078 },
      { x: 152, y: 1184 }
    ];

    const cycleHeight = 1150;
    const totalCycles = Math.max(1, Math.ceil(visibleUnits.length / 10));
    const stageHeight = totalCycles * cycleHeight + 90;

    // Генерируем непрерывный SVG-путь на все 50 шагов (или выбранную десятку)
    let roadPathParts = [];
    let innerSquiggleParts = [];
    for (let c = 0; c < totalCycles; c++) {
      const dy = c * cycleHeight;
      if (c === 0) {
        roadPathParts.push(`M 84,${74 + dy}`);
        innerSquiggleParts.push(`M 84,${74 + dy}`);
      } else {
        roadPathParts.push(`C 110,${24 + dy} 60,${38 + dy} 84,${74 + dy}`);
        innerSquiggleParts.push(`C 114,${20 + dy} 56,${42 + dy} 84,${74 + dy}`);
      }
      roadPathParts.push(
        `C 242,${46 + dy} 306,${80 + dy} 266,${178 + dy}`,
        `C 226,${246 + dy} 60,${202 + dy} 76,${294 + dy}`,
        `C 92,${380 + dy} 34,${438 + dy} 116,${462 + dy}`,
        `C 188,${484 + dy} 298,${526 + dy} 258,${608 + dy}`,
        `C 220,${682 + dy} 54,${648 + dy} 84,${726 + dy}`,
        `C 116,${804 + dy} 296,${768 + dy} 260,${844 + dy}`,
        `C 224,${918 + dy} 56,${884 + dy} 88,${962 + dy}`,
        `C 120,${1038 + dy} 292,${1002 + dy} 256,${1078 + dy}`,
        `C 226,${1140 + dy} 152,${1142 + dy} 152,${1184 + dy}`
      );
      innerSquiggleParts.push(
        `C 236,${40 + dy} 314,${86 + dy} 266,${178 + dy}`,
        `C 220,${252 + dy} 68,${196 + dy} 76,${294 + dy}`,
        `C 86,${386 + dy} 42,${432 + dy} 116,${462 + dy}`,
        `C 182,${490 + dy} 304,${520 + dy} 258,${608 + dy}`,
        `C 214,${688 + dy} 62,${642 + dy} 84,${726 + dy}`,
        `C 110,${810 + dy} 302,${762 + dy} 260,${844 + dy}`,
        `C 218,${924 + dy} 64,${878 + dy} 88,${962 + dy}`,
        `C 114,${1044 + dy} 298,${996 + dy} 256,${1078 + dy}`,
        `C 220,${1144 + dy} 152,${1138 + dy} 152,${1184 + dy}`
      );
    }
    const roadPathD = roadPathParts.join(' ');
    const innerSquiggleD = innerSquiggleParts.join(' ');

    let nodesHTML = '';
    let activePopoverHTML = '';
    let cycleExtrasHTML = '';

    for (let c = 0; c < totalCycles; c++) {
      const dy = c * cycleHeight;
      cycleExtrasHTML += `
        <div class="groovy-stage-gift" style="left: 222px; top: ${18 + dy}px; transform: rotate(10deg);"
             onclick="ScayaApp.openLevelSyllabusModal('${activeZone.id}')">
          ${window.ScayaMascot.renderGroovyGiftBoxSVG('yellow_pink', 52)}
        </div>
        <div class="groovy-stage-gift" style="left: 144px; top: ${226 + dy}px; transform: rotate(-8deg);"
             onclick="ScayaApp.openLevelSyllabusModal('${activeZone.id}')">
          ${window.ScayaMascot.renderGroovyGiftBoxSVG('blue_red', 50)}
        </div>
        <div class="groovy-stage-gift" style="left: 26px; top: ${368 + dy}px; transform: rotate(-11deg);"
             onclick="ScayaApp.openLevelSyllabusModal('${activeZone.id}')">
          ${window.ScayaMascot.renderGroovyGiftBoxSVG('yellow_pink', 48)}
        </div>
        <div class="groovy-stage-gift" style="left: 146px; top: ${642 + dy}px; transform: rotate(9deg);"
             onclick="ScayaApp.openLevelSyllabusModal('${activeZone.id}')">
          ${window.ScayaMascot.renderGroovyGiftBoxSVG('blue_red', 48)}
        </div>
        <div class="groovy-stage-gift" style="left: 150px; top: ${878 + dy}px; transform: rotate(-8deg);"
             onclick="ScayaApp.openLevelSyllabusModal('${activeZone.id}')">
          ${window.ScayaMascot.renderGroovyGiftBoxSVG('yellow_pink', 48)}
        </div>
      `;
    }

    visibleUnits.forEach((unit, localIdx) => {
      const stepNum = indexOffset + localIdx + 1;
      const cycleIdx = Math.floor(localIdx / 10);
      const idxInCycle = localIdx % 10;
      const basePt = base10Coords[idxInCycle] || { x: 174, y: 80 + idxInCycle * 115 };
      const pt = { x: basePt.x, y: basePt.y + cycleIdx * cycleHeight };

      const globalIdx = allUnits.findIndex(u => u.id === unit.id);
      const unlocked = this.isUnitUnlocked(unit, globalIdx);
      const prog = this.state.unitProgress[unit.id] || { crowns: 0 };
      const completed = prog.crowns > 0;
      const isSelected = this.selectedNodeId === unit.id;

      const starVariant = roadTheme.starColors[localIdx % roadTheme.starColors.length] || 'yellow';

      // Плашка начала новой тематической пятёрки шагов (каждые 5 шагов)
      if (localIdx % 5 === 0 && unit.chapterTitle) {
        nodesHTML += `
          <div class="groovy-step-chapter-pill" style="top: ${Math.max(6, pt.y - 54)}px;">
            <span>Шаги ${stepNum}–${stepNum + 4} • ${unit.chapterTitle}</span>
          </div>
        `;
      }

      nodesHTML += `
        <div class="groovy-s-node-item ${isSelected ? 'is-selected' : ''} ${unlocked ? 'is-unlocked' : 'is-locked'}"
             style="left: ${pt.x}px; top: ${pt.y}px;"
             onclick="ScayaApp.selectPathNode('${unit.id}')">
          <button class="groovy-clean-starburst-btn" aria-label="Шаг ${stepNum}: ${unit.titleRu}">
            ${window.ScayaMascot.renderSpikyStarburstSVG(String(stepNum), starVariant, 84)}
            ${completed ? `<span class="groovy-node-done-dot">✓</span>` : ''}
          </button>
        </div>
      `;

      if (isSelected) {
        const popTop = Math.min(stageHeight - 180, Math.max(16, pt.y + 46));
        activePopoverHTML = `
          <div class="groovy-s-popover-card" style="top: ${popTop}px;">
            <div class="groovy-s-pop-top">
              <span class="groovy-s-pop-tag">Level ${activeZone.cefr} • Шаг ${stepNum} из ${allZoneUnits.length}</span>
              <button class="groovy-s-pop-close" onclick="event.stopPropagation(); ScayaApp.selectedNodeId = null; ScayaApp.renderAll();">✕</button>
            </div>
            <div class="groovy-s-pop-title">${unit.titleRu}</div>
            <div class="groovy-s-pop-sub">8 разнообразных заданий (слова, Мёрфи, сборка фраз, ловушки, слух)</div>
            <div class="groovy-s-pop-actions">
              <button class="btn-popover-theory" onclick="ScayaApp.openTheoryModal('${unit.id}')">
                Шпаргалка
              </button>
              ${unlocked ? `
                <button class="btn-popover-start" onclick="ScayaApp.startUnitLesson('${unit.id}')">
                  Начать шаг →
                </button>
              ` : `
                <button class="btn-popover-skip" onclick="ScayaApp.startSkipJumpTest('${unit.id}')">
                  Открыть экстерном
                </button>
              `}
            </div>
          </div>
        `;
      }
    });

    const stepRanges = [
      { key: 'all', label: `Все ${allZoneUnits.length}` },
      { key: '1', label: '1–10' },
      { key: '2', label: '11–20' },
      { key: '3', label: '21–30' },
      { key: '4', label: '31–40' },
      { key: '5', label: '41–50' }
    ];

    container.innerHTML = `
      <div class="groovy-clean-level-path-page">
        ${window.ScayaMascot.renderLevelPathBackgroundAccents ? window.ScayaMascot.renderLevelPathBackgroundAccents(activeZone.id) : ''}

        <div class="groovy-clean-path-header">
          <h1 class="groovy-main-page-title">Level Path</h1>
          <div class="groovy-level-pills-bar">
            ${zones.map(z => `
              <button class="groovy-level-switch-pill ${z.id === activeZone.id ? 'active' : ''}"
                      onclick="ScayaApp.selectPathZone('${z.id}')">
                ${z.cefr}
              </button>
            `).join('')}
            <button class="groovy-level-syllabus-pill" onclick="ScayaApp.openLevelSyllabusModal('${activeZone.id}')">
              База ${activeZone.cefr}
            </button>
          </div>
          <div class="groovy-step-range-bar">
            ${stepRanges.map(r => `
              <button class="groovy-step-range-pill ${this.pathStepPage === r.key ? 'active' : ''}"
                      onclick="ScayaApp.selectPathStepRange('${r.key}')">
                ${r.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="groovy-s-curve-stage" style="height: ${stageHeight}px;">
          <svg class="groovy-continuous-road-svg" viewBox="0 0 348 ${stageHeight}" style="height: ${stageHeight}px;" preserveAspectRatio="xMidYMin meet">
            <path d="${roadPathD}" fill="none" stroke="#000000" stroke-width="42" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="${roadPathD}" fill="none" stroke="${roadTheme.roadColor}" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="${innerSquiggleD}" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          ${cycleExtrasHTML}

          <!-- Дельфин Скай (3x Retina HD прозрачный PNG!) в свободной бухте справа от дорожки -->
          <div class="groovy-stage-standing-mascot" onclick="ScayaApp.greetOceanFriend('sky', '${activeZone.id}')" title="Нажми на Ская!">
            <span class="groovy-sky-voice-pill">${roadTheme.voiceLabel}</span>
            ${window.ScayaMascot.renderPathStandingMascot(128, activeZone.id)}
          </div>

          ${nodesHTML}
          ${activePopoverHTML}
        </div>
      </div>
    `;
  },

  // Полный обзор уровня: Вся грамматика уровня + Вся лексика уровня + Обязательное чтение уровня
  openLevelSyllabusModal(zoneId) {
    const zone = (window.ScayaCurriculum.oceanZones || []).find(z => z.id === zoneId);
    if (!zone) return;
    const zoneUnits = (window.ScayaCurriculum.units || []).filter(u => u.zoneId === zone.id);
    const allZoneVocab = [];
    zoneUnits.forEach(u => {
      (u.vocab || []).forEach(v => {
        if (!allZoneVocab.some(item => item.en.toLowerCase() === v.en.toLowerCase())) {
          allZoneVocab.push({ ...v, unitId: u.id });
        }
      });
    });
    const readingUnit = zoneUnits.find(u => u.nodeType === 'reading') || zoneUnits[0];
    const readingEx = readingUnit && Array.isArray(readingUnit.exercises)
      ? readingUnit.exercises.find(e => e.type === 'reading_comprehension')
      : null;

    const modal = document.getElementById('scaya-modal-overlay');
    if (!modal) return;
    modal.classList.remove('hidden');

    modal.innerHTML = `
      <div class="scaya-modal-sheet">
        <div class="modal-sheet-header">
          <div>
            <span class="sheet-kicker">ПОЛНАЯ ПРОГРАММА УРОВНЯ ${zone.cefr} • ${zone.depth}</span>
            <h3 class="sheet-title">${zone.icon} ${zone.name}</h3>
          </div>
          <button class="btn-close-modal" onclick="ScayaApp.closeModal()">✕</button>
        </div>

        <div class="theory-scroll-body">
          <!-- 1. Вся грамматика этого уровня -->
          <div class="murphy-rule-card">
            <div class="murphy-rule-label">📐 1. Вся необходимая грамматика уровня ${zone.cefr}:</div>
            <ul class="syllabus-checklist">
              ${(zone.grammarTopicsSummary || []).map(item => `<li>✓ ${item}</li>`).join('')}
            </ul>
          </div>

          <!-- 2. Вся ключевая лексика этого уровня -->
          <div class="murphy-rule-card">
            <div class="syllabus-vocab-header">
              <div class="murphy-rule-label">💎 2. Лексический минимум и фразовые глаголы ${zone.cefr} (${allZoneVocab.length}):</div>
              <button class="btn-audio-mini" onclick="ScayaApp.addAllZoneVocabToQuizlet('${zone.id}')">
                ➕ Все в Quizlet
              </button>
            </div>
            <div class="syllabus-vocab-list">
              ${allZoneVocab.map(v => `
                <div class="syllabus-vocab-row">
                  <div>
                    <strong>${v.en}</strong> — <span>${v.ru}</span>
                    <div class="syllabus-vocab-ex">“${v.example}”</div>
                  </div>
                  <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(v.en).replace(/"/g, '&quot;')})">🔊</button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 3. Обязательное чтение уровня -->
          ${readingUnit ? `
            <div class="cambridge-secret-box">
              <strong>📖 3. Обязательное чтение уровня ${zone.cefr} (в каждом из ${zoneUnits.length} уроков):</strong>
              <p style="margin:4px 0 8px;">«${(readingEx && readingEx.storyTitle) || readingUnit.titleRu}»</p>
              <button class="btn-primary-ocean full-width" onclick="ScayaApp.closeModal(); ScayaApp.startUnitLesson('${readingUnit.id}')">
                📖 Начать урок с чтением ${zone.cefr}
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  addAllZoneVocabToQuizlet(zoneId) {
    const zoneUnits = (window.ScayaCurriculum.units || []).filter(u => u.zoneId === zoneId);
    let totalAdded = 0;
    zoneUnits.forEach(u => {
      totalAdded += this.addUnitVocabToFlashcards(u);
    });
    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.renderTopBar();
    this.renderBottomNav();
    this.showToast(
      totalAdded > 0
        ? `🗂 +${totalAdded} слов уровня добавлено в твой Quizlet!`
        : '✅ Все слова этого уровня уже есть в твоём Quizlet!'
    );
  },

  greetOceanFriend(friendId, zoneId = null) {
    const friend = window.ScayaMascot.friends[friendId];
    if (!friend) return;
    this.playTone('correct');
    const skyLevelVoices = {
      lagoon_a1: {
        en: "Yo friend! Welcome to Level A1! Put on your groovy headphones and pink sneakers, let's start!",
        ru: "Йоу! На уровне A1 я в ретро-наушниках и розовых кедах! Нажми на любую звезду, чтобы начать урок!"
      },
      shallows_a2: {
        en: "Kickflip into Level A2! Check out my green bucket hat and groovy wavy skateboard!",
        ru: "Уровень A2! Тут я в зелёной панаме Skater и с волнистым скейтбордом!"
      },
      reef_b1: {
        en: "Welcome to Level B1 Book Club! I've got my beanie, round glasses, grammar book and matcha boba!",
        ru: "Уровень B1! Я надел шапку-бини и круглые очки, взял книгу и матча-боба!"
      },
      ocean_b2: {
        en: "Level B2 Coffee and Vinyl vibe! Let's spin this record and speak fluent English!",
        ru: "Уровень B2! Горячий кофе, редкий винил под мышкой и студийные наушники!"
      },
      trench_c1: {
        en: "Welcome to Varsity Level C1! Rocking my green and yellow bomber jacket and platform kicks!",
        ru: "Уровень C1! Мой любимый зелёно-жёлтый бомбер Varsity и сникеры на платформе!"
      },
      atlantis_c2: {
        en: "You made it to Level C2 Y2K Star! Star sunglasses on, thumbs up, you are a total legend!",
        ru: "Уровень C2 — Y2K Star! Очки-звёзды и полный восторг, ты на вершине английского!"
      }
    };
    if (friendId === 'sky' && zoneId && skyLevelVoices[zoneId]) {
      this.speakEnglish(skyLevelVoices[zoneId].en, 'sky');
      this.showToast(`${friend.name}: «${skyLevelVoices[zoneId].ru}»`);
      return;
    }
    const voiceSamples = {
      sky: "Yo friend! I am Sky! Put on your headphones, let's rock this English level together!",
      shark: "Hi there! I am Lulu! Look at my pink bow and new sneakers, you are doing great!",
      mermaid: "Hello darling! I am Mira. Your English sounds like a classic vinyl record today!",
      jelly: "Hey buddy! I am DJ Blinky! Let's drop the beat and master English grammar!"
    };
    if (voiceSamples[friendId]) {
      this.speakEnglish(voiceSamples[friendId], friendId);
    }
    const quotes = Array.isArray(friend.cheerQuotes) && friend.cheerQuotes.length
      ? friend.cheerQuotes
      : [friend.praise];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.showToast(`${friend.name}: «${quote}»`);
  },

  selectPathNode(unitId) {
    this.selectedNodeId = (this.selectedNodeId === unitId) ? null : unitId;
    this.playTone('correct');
    this.renderAll();
  },

  // --------------------------------------------------------------------------
  // ПРЫЖОК ЧЕРЕЗ ТЕМЫ ЭКСТЕРНОМ («ОТКРЫТЬ ЭКСТЕРНОМ»)
  // --------------------------------------------------------------------------
  startSkipJumpTest(targetUnitId) {
    if (this.state.stats.hearts <= 0) {
      this.openHeartsModal();
      return;
    }
    const targetUnit = window.ScayaCurriculum.units.find(u => u.id === targetUnitId);
    if (!targetUnit) return;

    this.session = {
      active: true,
      mode: 'skip_jump',
      readingStage: false,
      showReadingTranslation: false,
      targetSkipUnitId: targetUnitId,
      unit: targetUnit,
      exercises: JSON.parse(JSON.stringify(targetUnit.exercises)),
      currentIndex: 0,
      selectedAnswer: null,
      assembledWords: [],
      availableWords: [],
      speechRecognizedText: '',
      isListeningMic: false,
      checked: false,
      isCorrect: false,
      correctCount: 0,
      heartLostThisTurn: false,
      newlyAddedCardsCount: 0
    };
    this.prepareCurrentExercise();
    this.renderLessonOverlay();
  },

  // --------------------------------------------------------------------------
  // УРОК ИЗ 5 ЭТАПОВ (СЛОВА+ГРАММАТИКА • ПОРЯДОК СЛОВ • ЧТЕНИЕ • СЛУХ • РЕЧЬ)
  // --------------------------------------------------------------------------
  startUnitLesson(unitId) {
    if (this.state.stats.hearts <= 0) {
      this.openHeartsModal();
      return;
    }
    const unit = window.ScayaCurriculum.units.find(u => u.id === unitId);
    if (!unit) return;

    this.session = {
      active: true,
      mode: 'unit',
      unit,
      vocabIntroStep: true,
      readingStage: false,
      showReadingTranslation: false,
      exercises: JSON.parse(JSON.stringify(unit.exercises)),
      currentIndex: 0,
      selectedAnswer: null,
      assembledWords: [],
      availableWords: [],
      speechRecognizedText: '',
      isListeningMic: false,
      checked: false,
      isCorrect: false,
      correctCount: 0,
      heartLostThisTurn: false,
      newlyAddedCardsCount: 0
    };
    this.prepareCurrentExercise();
    this.renderLessonOverlay();
  },

  proceedFromVocabIntro() {
    this.session.vocabIntroStep = false;
    this.playTone('correct');
    this.renderLessonOverlay();
  },

  proceedFromReadingToQuestions() {
    this.session.readingStage = false;
    this.playTone('correct');
    this.renderLessonOverlay();
  },

  toggleReadingTranslation() {
    this.session.showReadingTranslation = !this.session.showReadingTranslation;
    this.renderLessonOverlay();
  },

  startPlacementTest() {
    if (this.state.stats.hearts <= 0) {
      this.state.stats.hearts = 5;
    }
    const questions = window.ScayaCurriculum.placementQuestions.map((q, idx) => ({
      id: q.id,
      type: 'multiple_choice',
      badge: `Вопрос ${idx + 1} из ${window.ScayaCurriculum.placementQuestions.length}`,
      prompt: q.prompt,
      options: q.options,
      correct: q.correct,
      explanation: q.explanation,
      cefr: q.cefr,
      zoneId: q.zoneId
    }));

    this.session = {
      active: true,
      mode: 'placement',
      readingStage: false,
      showReadingTranslation: false,
      unit: {
        id: 'placement_sonar',
        titleRu: 'Точное определение уровня',
        icon: '📡'
      },
      exercises: questions,
      currentIndex: 0,
      selectedAnswer: null,
      assembledWords: [],
      availableWords: [],
      speechRecognizedText: '',
      isListeningMic: false,
      checked: false,
      isCorrect: false,
      correctCount: 0,
      heartLostThisTurn: false,
      newlyAddedCardsCount: 0
    };
    this.prepareCurrentExercise();
    this.renderLessonOverlay();
  },

  buildRichMistakeOptions(m, unit) {
    const set = new Set();
    if (m.correctAnswer) set.add(m.correctAnswer.trim());
    if (m.wrongAnswer) set.add(m.wrongAnswer.trim());

    const allUnits = window.ScayaCurriculum.units || [];
    for (const u of allUnits) {
      for (const ex of (u.exercises || [])) {
        const pKey = ex.prompt || ex.sentenceWithCheck || ex.originalSentence || ex.promptRu;
        if (pKey === m.prompt && Array.isArray(ex.options)) {
          ex.options.forEach(o => set.add(o.trim()));
        }
      }
    }

    const baseWord = (m.correctAnswer || '').replace(/^(to |have |had |was |were |is |are |been |being )/i, '').split(/\s+/)[0] || 'visit';
    const stem = baseWord.replace(/(ing|ed|s)$/i, '') || baseWord;
    const smartDistractors = [
      `to ${stem}`,
      `${stem}ing`,
      `have ${stem}ed`,
      `had ${stem}ed`,
      `was ${stem}ing`,
      `${stem}s`,
      `would ${stem}`,
      `must have ${stem}ed`
    ];

    if (unit && Array.isArray(unit.vocab)) {
      unit.vocab.forEach(v => {
        const firstPart = v.en.split(/[\s(/]/)[0];
        if (firstPart && firstPart.length > 2) smartDistractors.push(firstPart);
      });
    }

    for (const d of smartDistractors) {
      if (set.size >= 5) break;
      if (d && d.toLowerCase() !== (m.correctAnswer || '').toLowerCase()) {
        set.add(d);
      }
    }

    return Array.from(set).sort(() => Math.random() - 0.5);
  },

  startMistakesReviewLesson(onlyMistakeId = null) {
    const sourceMistakes = onlyMistakeId
      ? this.state.mistakes.filter(m => m.id === onlyMistakeId)
      : this.state.mistakes;
    if (!sourceMistakes.length) return;

    const reviewExercises = [];
    sourceMistakes.forEach((m, idx) => {
      const unit = (window.ScayaCurriculum.units || []).find(u => u.id === m.unitId) || window.ScayaCurriculum.units[0];
      const richOptions = this.buildRichMistakeOptions(m, unit);

      reviewExercises.push({
        id: `rev_${idx}_mc`,
        mistakeId: m.id,
        unitId: unit ? unit.id : 'unit_a1_01',
        type: 'multiple_choice',
        badge: `Исправление ошибки (1/2) • ${m.badge}`,
        prompt: m.prompt,
        options: richOptions,
        correct: m.correctAnswer,
        explanation: m.explanation
      });

      if (m.prompt && m.prompt.includes('___')) {
        const fullSentence = m.prompt.replace('___', m.correctAnswer).replace(/\s+/g, ' ').trim();
        const wordsArr = fullSentence.split(' ').filter(Boolean);
        if (wordsArr.length >= 3 && wordsArr.length <= 14) {
          reviewExercises.push({
            id: `rev_${idx}_wb`,
            mistakeId: m.id,
            unitId: unit ? unit.id : 'unit_a1_01',
            type: 'word_bank',
            badge: `Закрепление конструкции (2/2) • ${m.badge}`,
            promptRu: `Собери правильное предложение целиком (по правилу: ${m.correctAnswer}):`,
            correctSentence: fullSentence,
            words: [...wordsArr, m.wrongAnswer.split(' ')[0] || 'to'].slice(0, 12),
            explanation: m.explanation
          });
        }
      }
    });

    this.session = {
      active: true,
      mode: 'mistakes_review',
      readingStage: false,
      showReadingTranslation: false,
      mistakePrepMode: null,
      mistakeCardIdx: 0,
      mistakeCardFlipped: false,
      unit: { id: 'mistakes_review', titleRu: 'Умная проработка ошибок', icon: '🐚' },
      exercises: reviewExercises,
      currentIndex: 0,
      selectedAnswer: null,
      assembledWords: [],
      availableWords: [],
      speechRecognizedText: '',
      isListeningMic: false,
      checked: false,
      isCorrect: false,
      correctCount: 0,
      heartLostThisTurn: false,
      newlyAddedCardsCount: 0
    };
    this.prepareCurrentExercise();
    this.renderLessonOverlay();
  },

  toggleMistakePrepPanel(mode) {
    if (this.session.mistakePrepMode === mode) {
      this.session.mistakePrepMode = null;
    } else {
      this.session.mistakePrepMode = mode;
      this.session.mistakeCardIdx = 0;
      this.session.mistakeCardFlipped = false;
    }
    this.renderLessonOverlay();
  },

  flipMistakePrepCard() {
    this.session.mistakeCardFlipped = !this.session.mistakeCardFlipped;
    this.renderLessonOverlay();
  },

  nextMistakePrepCard(delta, total) {
    if (!total) return;
    this.session.mistakeCardIdx = (this.session.mistakeCardIdx + delta + total) % total;
    this.session.mistakeCardFlipped = false;
    this.renderLessonOverlay();
  },

  prepareCurrentExercise() {
    const ex = this.session.exercises[this.session.currentIndex];
    if (!ex) return;
    this.session.selectedAnswer = null;
    this.session.checked = false;
    this.session.isCorrect = false;
    this.session.heartLostThisTurn = false;
    this.session.mistakePrepMode = null;
    this.session.speechRecognizedText = '';
    this.session.isListeningMic = false;
    this.activeWordTooltip = null;

    if (ex.type === 'word_bank' || ex.type === 'listening_speak') {
      this.session.assembledWords = [];
      this.session.availableWords = [...ex.words]
        .map((word, idx) => ({ id: `w_${idx}`, text: word, used: false }))
        .sort(() => Math.random() - 0.5);
      if (ex.audioText) {
        setTimeout(() => {
          if (this.session.active && this.session.exercises[this.session.currentIndex] === ex) {
            this.speakEnglish(ex.audioText, 'sky');
          }
        }, 280);
      }
    } else if ((ex.type === 'listening' || ex.type === 'listening_comprehension') && ex.audioText) {
      setTimeout(() => {
        if (this.session.active && this.session.exercises[this.session.currentIndex] === ex) {
          this.speakEnglish(ex.audioText, 'sky');
        }
      }, 280);
    }
  },

  renderLessonOverlay() {
    const overlay = document.getElementById('scaya-lesson-overlay');
    if (!overlay) return;
    if (!this.session.active) {
      overlay.classList.add('hidden');
      overlay.innerHTML = '';
      return;
    }

    overlay.classList.remove('hidden');

    const total = this.session.exercises.length;
    const current = this.session.currentIndex;

    if (current >= total) {
      this.renderLessonComplete(overlay);
      return;
    }

    const isVipHearts = Boolean(this.state.user.isVipTester || this.state.stats.unlimitedHearts);

    // Если урок только начался — показываем чистую карточку знакомства со словами и правилом ОТДЕЛЬНО от вопросов,
    // чтобы на самих вопросах все варианты ответа помещались на экран как в Duolingo!
    if (this.session.vocabIntroStep && this.session.unit && Array.isArray(this.session.unit.vocab)) {
      const u = this.session.unit;
      const gEx = (u.theory && u.theory.timelineComparison && u.theory.timelineComparison[0]) || null;
      overlay.innerHTML = `
        <div class="lesson-screen-no-scroll">
          <div class="lesson-header">
            <button class="btn-exit-lesson" onclick="ScayaApp.exitLesson()">✕</button>
            <div class="lesson-progress-track">
              <div class="lesson-progress-fill" style="width: 8%"></div>
            </div>
            <div class="lesson-hearts-badge">❤️ ${isVipHearts ? '∞' : this.state.stats.hearts}</div>
          </div>

          <div class="lesson-center-stage vocab-intro-stage">
            <div class="duolingo-task-instruction">Тема: «${u.titleRu}» • Слова урока</div>
            <div class="vocab-intro-clean-grid">
              ${u.vocab.map(v => `
                <button class="vocab-intro-clean-item" onclick="ScayaApp.speakEnglish(${JSON.stringify(v.en).replace(/"/g, '&quot;')}, 'sky')">
                  <div class="vic-en"><strong>${v.en}</strong> <span class="vic-audio">🔊</span></div>
                  <div class="vic-ru">${v.ru}</div>
                </button>
              `).join('')}
            </div>

            ${gEx ? `
              <div class="vocab-intro-grammar-card">
                <div class="vig-rule">${gEx.note}</div>
                <div class="vig-ex" onclick="ScayaApp.speakEnglish(${JSON.stringify(gEx.example).replace(/"/g, '&quot;')}, 'sky')">
                  <span>${gEx.example}</span>
                  <span class="vig-speak">🔊</span>
                </div>
              </div>
            ` : ''}
          </div>

          <div class="lesson-footer">
            <button class="btn-check-answer ready" onclick="ScayaApp.proceedFromVocabIntro()">
              К заданиям урока →
            </button>
          </div>
        </div>
      `;
      return;
    }

    const ex = this.session.exercises[current];
    const progressPct = Math.round(((current + (this.session.checked ? 1 : 0.25)) / total) * 100);
    const isUnit5Stage = (this.session.mode === 'unit' || this.session.mode === 'skip_jump') && total === 5;

    // Компактный индикатор 5 этапов
    let fiveStageStepperHTML = '';
    if (isUnit5Stage) {
      const stagesMeta = [
        { num: 1, icon: '1', label: 'Слова' },
        { num: 2, icon: '2', label: 'Порядок' },
        { num: 3, icon: '3', label: 'Чтение' },
        { num: 4, icon: '4', label: 'Слух' },
        { num: 5, icon: '5', label: 'Речь' }
      ];
      fiveStageStepperHTML = `
        <div class="five-stage-stepper">
          ${stagesMeta.map((st, idx) => {
            const stClass = idx < current ? 'done' : idx === current ? 'current' : 'upcoming';
            return `
              <div class="stage-step-pill ${stClass}">
                <span class="st-icon">${idx < current ? '✓' : st.icon}</span>
                <span class="st-label">${st.label}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Панель подготовки ПЕРЕД выполнением номера в режиме «Работа над ошибками»
    let mistakePrepHTML = '';
    if (this.session.mode === 'mistakes_review') {
      const relatedUnit = (window.ScayaCurriculum.units || []).find(u => u.id === ex.unitId) || window.ScayaCurriculum.units[0];
      const unitCards = (relatedUnit && relatedUnit.vocab && relatedUnit.vocab.length)
        ? relatedUnit.vocab
        : this.state.flashcards.slice(0, 5);
      const activeCard = unitCards[this.session.mistakeCardIdx % unitCards.length] || {
        en: ex.correct || 'example',
        ru: ex.explanation || 'правильная конструкция',
        example: ex.prompt || ''
      };

      mistakePrepHTML = `
        <div class="mistake-prep-toolbar">
          <button class="btn-mistake-prep ${this.session.mistakePrepMode === 'rule' ? 'active' : ''}"
            onclick="ScayaApp.toggleMistakePrepPanel('rule')">
            Правило
          </button>
          <button class="btn-mistake-prep ${this.session.mistakePrepMode === 'cards' ? 'active' : ''}"
            onclick="ScayaApp.toggleMistakePrepPanel('cards')">
            Слова (${unitCards.length})
          </button>
        </div>

        ${this.session.mistakePrepMode === 'rule' ? `
          <div class="mistake-prep-drawer">
            <div class="mistake-prep-header">
              <strong>Правило (${relatedUnit ? relatedUnit.titleRu : ex.badge})</strong>
              <button class="btn-close-tooltip" onclick="ScayaApp.toggleMistakePrepPanel('rule')">✕</button>
            </div>
            <div class="mistake-prep-rule-note">${ex.explanation}</div>
          </div>
        ` : ''}

        ${this.session.mistakePrepMode === 'cards' ? `
          <div class="mistake-prep-drawer">
            <div class="mistake-prep-header">
              <strong>Карточка ${(this.session.mistakeCardIdx % unitCards.length) + 1} из ${unitCards.length}</strong>
              <button class="btn-close-tooltip" onclick="ScayaApp.toggleMistakePrepPanel('cards')">✕</button>
            </div>
            <div class="mistake-mini-flashcard" onclick="ScayaApp.flipMistakePrepCard()">
              ${!this.session.mistakeCardFlipped ? `
                <div class="m-card-main">${activeCard.en}</div>
                <div class="m-card-sub">${activeCard.example || ''}</div>
              ` : `
                <div class="m-card-main">${activeCard.ru}</div>
                <div class="m-card-sub">${activeCard.en}</div>
              `}
            </div>
            <div class="mistake-mini-card-controls">
              <button class="btn-carousel-nav" onclick="ScayaApp.nextMistakePrepCard(-1, ${unitCards.length})">← Пред.</button>
              <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(activeCard.en).replace(/"/g, '&quot;')}, 'sky')">🔊</button>
              <button class="btn-carousel-nav" onclick="ScayaApp.nextMistakePrepCard(1, ${unitCards.length})">След. →</button>
            </div>
          </div>
        ` : ''}
      `;
    }

    // Умный разбор текста задания (поддержка вопросов на перевод, вставки пропусков ___ и охоты на ошибки)
    const parsePromptDisplay = (rawPrompt, rawSentenceWithCheck) => {
      const full = String(rawSentenceWithCheck || rawPrompt || '').trim();
      if (!full) return { instruction: 'Дополни предложение', mainText: '', subHint: '' };

      // 1. Вопросы на перевод слова («Как переводится слово...» / «Какое английское слово означает...»)
      if (/^(Как переводится|Какое английское слово)/i.test(full)) {
        const lines = full.split('\n').map(s => s.trim()).filter(Boolean);
        return {
          instruction: 'Выбери правильный перевод',
          mainText: lines[0] || full,
          subHint: lines.slice(1).join(' ')
        };
      }

      // 2. Задания с двумя строками (инструкция + предложение с пропуском в кавычках)
      if (full.includes('\n')) {
        const lines = full.split('\n').map(s => s.trim()).filter(Boolean);
        const firstLine = lines[0];
        const lastLine = lines[lines.length - 1];
        const guillemet = lastLine.match(/«([^»]+)»/);
        const afterGuillemet = lastLine.replace(/.*«[^»]+»\s*/, '').trim();
        const extractedSentence = guillemet && guillemet[1] ? guillemet[1].trim() : lastLine.replace(/^[«"“]+|[»"”]+$/g, '').trim();
        const ruHintMatch = firstLine.match(/\(([^)]+)\)/);
        const subHint = afterGuillemet || (ruHintMatch ? `Подсказка: ${ruHintMatch[1]}` : '');
        return {
          instruction: firstLine.replace(/:\s*$/, ''),
          mainText: extractedSentence,
          subHint
        };
      }

      return {
        instruction: 'Дополни предложение',
        mainText: full.replace(/^[«"“]+|[»"”]+$/g, '').trim(),
        subHint: ''
      };
    };

    let exerciseBodyHTML = '';

    if (ex.type === 'multiple_choice' || ex.type === 'spot_mistake') {
      const parsed = parsePromptDisplay(ex.prompt, ex.sentenceWithCheck);
      exerciseBodyHTML = `
        <div class="duolingo-task-instruction">${parsed.instruction}</div>
        ${this.renderWordTooltipBanner()}
        <div class="exercise-prompt-card">
          <div class="exercise-prompt-text">${this.renderInteractiveWords(parsed.mainText, 'sky')}</div>
          ${parsed.subHint ? `<div class="speaking-ru-line" style="margin-top:6px;">${this.renderInteractiveWords(parsed.subHint, 'sky')}</div>` : ''}
        </div>

        <div class="exercise-options-list">
          ${ex.options.map(opt => {
            const isSelected = this.session.selectedAnswer === opt;
            let stateClass = isSelected ? 'selected' : '';
            if (this.session.checked) {
              if (opt === ex.correct) stateClass = 'correct-opt';
              else if (isSelected && !this.session.isCorrect) stateClass = 'wrong-opt';
            }
            return `
              <button class="exercise-option-btn ${stateClass}"
                ${this.session.checked ? 'disabled' : ''}
                onclick="ScayaApp.selectOption(${JSON.stringify(opt).replace(/"/g, '&quot;')})">
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    } else if (ex.type === 'error_hunter') {
      const buggyText = ex.buggySentence || ex.prompt || '';
      exerciseBodyHTML = `
        <div class="duolingo-task-instruction">${ex.prompt || 'Найди и исправь ошибку по смыслу'}</div>
        ${this.renderWordTooltipBanner()}
        <div class="exercise-prompt-card">
          <div class="exercise-prompt-text">${this.renderInteractiveWords(buggyText, 'sky')}</div>
        </div>

        <div class="exercise-options-list">
          ${(ex.options || []).map(opt => {
            const isSelected = this.session.selectedAnswer === opt;
            let stateClass = isSelected ? 'selected' : '';
            if (this.session.checked) {
              if (opt === ex.correct) stateClass = 'correct-opt';
              else if (isSelected && !this.session.isCorrect) stateClass = 'wrong-opt';
            }
            return `
              <button class="exercise-option-btn ${stateClass}"
                ${this.session.checked ? 'disabled' : ''}
                onclick="ScayaApp.selectOption(${JSON.stringify(opt).replace(/"/g, '&quot;')})">
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    } else if (ex.type === 'reading_comprehension') {
      const paragraphs = Array.isArray(ex.paragraphs) ? ex.paragraphs : [];
      const fullText = paragraphs.map(p => p.en).join(' ');
      const rUnitId = (this.session.unit && this.session.unit.id) || 'unit_a1_01';
      exerciseBodyHTML = `
        <div class="stage-reading-box">
          <div class="stage-reading-header">
            <span>${(ex.storyTitle) || (this.session.unit ? this.session.unit.titleRu : 'Чтение')}</span>
            <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(fullText).replace(/"/g, '&quot;')}, 'sky')">🔊 Слушать</button>
          </div>
          <div class="stage-reading-hero-art">
            ${window.ScayaMascot.renderStoryIllustration(rUnitId, 158, true)}
          </div>
          ${this.renderWordTooltipBanner()}
          <div class="stage-reading-paragraphs">
            ${paragraphs.map((p, pIdx) => `
              <div class="stage-reading-illustrated-block">
                ${window.ScayaMascot.renderParagraphSpotArt ? window.ScayaMascot.renderParagraphSpotArt(rUnitId, pIdx) : ''}
                <p class="stage-reading-p">${this.renderInteractiveWords(p.en, 'sky')}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="duolingo-task-instruction">${ex.prompt}</div>

        <div class="exercise-options-list">
          ${ex.options.map(opt => {
            const isSelected = this.session.selectedAnswer === opt;
            let stateClass = isSelected ? 'selected' : '';
            if (this.session.checked) {
              if (opt === ex.correct) stateClass = 'correct-opt';
              else if (isSelected && !this.session.isCorrect) stateClass = 'wrong-opt';
            }
            return `
              <button class="exercise-option-btn ${stateClass}"
                ${this.session.checked ? 'disabled' : ''}
                onclick="ScayaApp.selectOption(${JSON.stringify(opt).replace(/"/g, '&quot;')})">
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    } else if (ex.type === 'listening' || ex.type === 'listening_comprehension') {
      const audioPhrase = ex.audioText || ex.correct;
      exerciseBodyHTML = `
        <div class="duolingo-task-instruction">${ex.prompt || 'Что ты слышишь?'}</div>
        <div class="stage-listening-box">
          <div class="listening-mascot-row">
            ${window.ScayaMascot.renderSVG('happy', this.state.user.avatarOutfit, 54)}
            <div class="listening-buttons-col">
              <button class="btn-listen-big" onclick="ScayaApp.speakEnglish(${JSON.stringify(audioPhrase).replace(/"/g, '&quot;')}, 'sky')">
                🔊 Прослушать
              </button>
              <button class="btn-listen-slow" onclick="ScayaApp.speakEnglishSlow(${JSON.stringify(audioPhrase).replace(/"/g, '&quot;')})">
                Медленно
              </button>
            </div>
          </div>
        </div>

        <div class="exercise-options-list">
          ${ex.options.map(opt => {
            const isSelected = this.session.selectedAnswer === opt;
            let stateClass = isSelected ? 'selected' : '';
            if (this.session.checked) {
              if (opt === ex.correct) stateClass = 'correct-opt';
              else if (isSelected && !this.session.isCorrect) stateClass = 'wrong-opt';
            }
            return `
              <button class="exercise-option-btn ${stateClass}"
                ${this.session.checked ? 'disabled' : ''}
                onclick="ScayaApp.selectOption(${JSON.stringify(opt).replace(/"/g, '&quot;')})">
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    } else if (ex.type === 'speaking' || ex.type === 'speaking_pronunciation') {
      const phrase = ex.targetPhrase || ex.correct;
      const isSpokenReady = Boolean(this.session.selectedAnswer);
      exerciseBodyHTML = `
        <div class="duolingo-task-instruction">Произнеси эту фразу вслух</div>
        ${this.renderWordTooltipBanner()}
        <div class="stage-speaking-box">
          <div class="speaking-target-card">
            <div class="speaking-en-line">${this.renderInteractiveWords(phrase, 'sky')}</div>
            <div class="speaking-ru-line">${ex.translationRu || ''}</div>
            <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(phrase).replace(/"/g, '&quot;')}, 'sky')">
              🔊 Прослушать образец
            </button>
          </div>

          <div class="speaking-actions-area">
            <button class="btn-mic-record ${this.session.isListeningMic ? 'recording' : ''} ${isSpokenReady ? 'recorded-ok' : ''}"
              onclick="ScayaApp.startSpeakingMic(${JSON.stringify(phrase).replace(/"/g, '&quot;')}, ${JSON.stringify(ex.correct).replace(/"/g, '&quot;')})">
              <span class="mic-icon">${this.session.isListeningMic ? '●' : isSpokenReady ? '✓' : '🎙'}</span>
              <span>${this.session.isListeningMic
                ? 'Говори... Нажми, чтобы отправить голосовое'
                : isSpokenReady
                  ? 'Голосовое принято! Нажми, чтобы идти дальше →'
                  : 'Нажми и произнеси фразу'}</span>
            </button>

            ${!this.session.checked ? `
              <button class="btn-spoken-fallback"
                onclick="ScayaApp.confirmSpokenAloud(${JSON.stringify(phrase).replace(/"/g, '&quot;')}, ${JSON.stringify(ex.correct).replace(/"/g, '&quot;')})">
                ${this.session.isListeningMic ? 'Отправить голосовое и продолжить →' : 'Пропустить микрофон / Я произнесла вслух →'}
              </button>
            ` : ''}
          </div>
        </div>
      `;
    } else if (ex.type === 'cambridge_transform') {
      exerciseBodyHTML = `
        <div class="duolingo-task-instruction">Перефразируй со словом ${ex.keyWord}</div>
        <div class="cambridge-transform-box">
          <div class="transform-original-sentence">${this.renderInteractiveWords(ex.originalSentence, 'sky')}</div>
          <div class="transform-target-preview">
            ${ex.templateBefore}
            <span class="transform-blank">${this.session.selectedAnswer || '_____'}</span>
            ${ex.templateAfter}
          </div>
        </div>

        <div class="exercise-options-list">
          ${ex.options.map(opt => {
            const isSelected = this.session.selectedAnswer === opt;
            let stateClass = isSelected ? 'selected' : '';
            if (this.session.checked) {
              if (opt === ex.correct) stateClass = 'correct-opt';
              else if (isSelected && !this.session.isCorrect) stateClass = 'wrong-opt';
            }
            return `
              <button class="exercise-option-btn ${stateClass}"
                ${this.session.checked ? 'disabled' : ''}
                onclick="ScayaApp.selectOption(${JSON.stringify(opt).replace(/"/g, '&quot;')})">
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    } else if (ex.type === 'word_bank' || ex.type === 'listening_speak') {
      const wbInstruction = ex.prompt && ex.promptRu && ex.prompt !== ex.promptRu
        ? ex.prompt
        : 'Собери это предложение на английском';
      const wbCardText = ex.promptRu || ex.prompt || '';
      const wbAudio = ex.audioText || ex.correctSentence || ex.correct || '';
      exerciseBodyHTML = `
        <div class="duolingo-task-instruction">${wbInstruction}</div>
        <div class="word-bank-prompt-box">
          <div class="word-bank-ru">${wbCardText}</div>
          ${wbAudio ? `
            <div style="margin-top:8px;">
              <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(wbAudio).replace(/"/g, '&quot;')}, 'sky')">
                🔊 Прослушать фразу
              </button>
            </div>
          ` : ''}
        </div>

        <div class="assembled-sentence-area">
          ${this.session.assembledWords.length === 0
            ? `<span class="assembled-placeholder">Нажимай на слова ниже...</span>`
            : this.session.assembledWords.map(w => `
                <button class="word-chip assembled" ${this.session.checked ? 'disabled' : ''} onclick="ScayaApp.removeWordFromSentence('${w.id}')">
                  ${w.text}
                </button>
              `).join('')
          }
        </div>

        <div class="available-words-pool">
          ${this.session.availableWords.map(w => `
            <button class="word-chip ${w.used ? 'used-empty' : ''}"
              ${w.used || this.session.checked ? 'disabled' : ''}
              onclick="ScayaApp.addWordToSentence('${w.id}')">
              ${w.text}
            </button>
          `).join('')}
        </div>
      `;
    }

    const correctText = ex.correct || ex.correctSentence;
    const isSpeakingType = ex.type === 'speaking' || ex.type === 'speaking_pronunciation';
    const canCheck = Boolean(
      this.session.selectedAnswer ||
      this.session.assembledWords.length > 0 ||
      isSpeakingType
    );

    overlay.innerHTML = `
      <div class="lesson-screen-no-scroll">
        <div class="lesson-header">
          <button class="btn-exit-lesson" onclick="ScayaApp.exitLesson()">✕</button>
          <div class="lesson-progress-track">
            <div class="lesson-progress-fill" style="width: ${progressPct}%"></div>
          </div>
          ${this.session.mode === 'unit' && this.session.unit ? `
            <button class="btn-lesson-vocab-mini" onclick="ScayaApp.openTheoryModal('${this.session.unit.id}')">Слова</button>
          ` : ''}
          <div class="lesson-hearts-badge ${this.session.heartLostThisTurn ? 'heart-shake' : ''}">
            ❤️ ${isVipHearts ? '∞' : this.state.stats.hearts}
            ${this.session.heartLostThisTurn ? `<span class="heart-minus-pop">-1</span>` : ''}
          </div>
        </div>

        ${fiveStageStepperHTML}

        <div class="lesson-center-stage">
          ${mistakePrepHTML}
          ${exerciseBodyHTML}
        </div>

        ${this.session.checked ? `
          <div class="lesson-feedback-drawer ${this.session.isCorrect ? 'is-correct' : 'is-wrong'}">
            <div class="feedback-top-row">
              <div class="feedback-mascot-icon">
                ${window.ScayaMascot.renderSVG(this.session.isCorrect ? 'proud' : 'comforting', this.state.user.avatarOutfit, 48)}
              </div>
              <div class="feedback-text-col">
                <div class="feedback-title">
                  ${this.session.isCorrect ? 'Отлично! Всё верно!' : (isVipHearts ? 'Ошибка (VIP: бесконечные жизни ❤️ ∞)' : 'Ошибка (-1 сердечко)')}
                </div>
                ${!this.session.isCorrect ? `<div class="feedback-right-ans">Верный ответ: <strong>${correctText}</strong></div>` : ''}
              </div>
            </div>
            <div class="feedback-murphy-rule">${ex.explanation}</div>
            <button class="btn-continue-lesson" onclick="ScayaApp.nextExercise()">
              Продолжить →
            </button>
          </div>
        ` : `
          <div class="lesson-footer">
            <button class="btn-check-answer ${canCheck ? 'ready' : 'disabled'}"
              ${canCheck ? '' : 'disabled'}
              onclick="${isSpeakingType ? `ScayaApp.confirmSpokenAloud(${JSON.stringify(ex.targetPhrase || ex.correct).replace(/"/g, '&quot;')}, ${JSON.stringify(ex.correct).replace(/"/g, '&quot;')})` : 'ScayaApp.checkCurrentExercise()'}">
              ${isSpeakingType && this.session.isListeningMic ? 'Отправить голосовое →' : 'Проверить'}
            </button>
          </div>
        `}
      </div>
    `;
  },

  selectOption(opt) {
    if (this.session.checked) return;
    this.session.selectedAnswer = opt;
    this.speakEnglish(opt);
    this.renderLessonOverlay();
  },

  addWordToSentence(wordId) {
    if (this.session.checked) return;
    const item = this.session.availableWords.find(w => w.id === wordId);
    if (!item || item.used) return;
    item.used = true;
    this.session.assembledWords.push(item);
    this.speakEnglish(item.text);
    this.renderLessonOverlay();
  },

  removeWordFromSentence(wordId) {
    if (this.session.checked) return;
    const idx = this.session.assembledWords.findIndex(w => w.id === wordId);
    if (idx === -1) return;
    const [removed] = this.session.assembledWords.splice(idx, 1);
    const poolItem = this.session.availableWords.find(w => w.id === removed.id);
    if (poolItem) poolItem.used = false;
    this.renderLessonOverlay();
  },

  checkCurrentExercise() {
    const ex = this.session.exercises[this.session.currentIndex];
    if (!ex) return;

    let userAnswer = '';
    let expected = '';

    if (ex.type === 'word_bank' || ex.type === 'listening_speak') {
      userAnswer = this.session.assembledWords.map(w => w.text).join(' ').trim();
      expected = (ex.correctSentence || ex.correct || '').trim();
    } else {
      userAnswer = (this.session.selectedAnswer || '').trim();
      expected = (ex.correct || '').trim();
    }

    const normAns = (s) => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,!?;:]+$/g, '');
    const isRight = normAns(userAnswer) === normAns(expected);
    this.session.checked = true;
    this.session.isCorrect = isRight;

    const isVipHearts = Boolean(this.state.user.isVipTester || this.state.stats.unlimitedHearts);

    if (isRight) {
      this.session.correctCount += 1;
      this.playTone('correct');
      if (this.session.mode === 'mistakes_review' && ex.mistakeId) {
        this.state.mistakes = this.state.mistakes.filter(m => m.id !== ex.mistakeId);
      }
    } else {
      this.playTone('wrong');
      if (!isVipHearts && this.state.stats.hearts > 0) {
        this.state.stats.hearts -= 1;
        this.session.heartLostThisTurn = true;
      } else if (isVipHearts) {
        this.state.stats.hearts = 5;
        this.session.heartLostThisTurn = false;
      }

      const promptKey = ex.prompt || ex.sentenceWithCheck || ex.originalSentence || ex.promptRu || ex.audioText || ex.targetPhrase;
      const exists = this.state.mistakes.some(m => m.prompt === promptKey);
      if (!exists) {
        this.state.mistakes.unshift({
          id: 'm_' + Date.now(),
          unitId: this.session.unit?.id || 'test',
          prompt: promptKey,
          wrongAnswer: userAnswer,
          correctAnswer: expected,
          explanation: ex.explanation,
          badge: ex.badge,
          createdAt: Date.now()
        });
      }
    }

    window.ScayaCloud.saveState(this.state);
    this.renderTopBar();
    this.renderLessonOverlay();
  },

  nextExercise() {
    const isVipHearts = Boolean(this.state.user.isVipTester || this.state.stats.unlimitedHearts);
    if (
      !isVipHearts &&
      this.state.stats.hearts <= 0 &&
      this.session.mode !== 'placement' &&
      this.session.mode !== 'mistakes_review'
    ) {
      this.exitLesson();
      this.openHeartsModal();
      return;
    }

    this.session.currentIndex += 1;
    if (this.session.currentIndex < this.session.exercises.length) {
      this.prepareCurrentExercise();
    } else {
      this.finishLessonRewards();
    }
    this.renderLessonOverlay();
  },

  calculateAccuratePlacementLevel(correctCount) {
    const firstOfZone = (zid, fallback) => {
      const found = (window.ScayaCurriculum && window.ScayaCurriculum.units || []).find(u => u.zoneId === zid);
      return found ? found.id : fallback;
    };
    if (correctCount <= 2) {
      return { cefr: 'A1', zoneId: 'lagoon_a1', startUnitId: firstOfZone('lagoon_a1', 'unit_a1_01') };
    } else if (correctCount <= 4) {
      return { cefr: 'A2', zoneId: 'shallows_a2', startUnitId: firstOfZone('shallows_a2', 'unit_a2_11') };
    } else if (correctCount <= 6) {
      return { cefr: 'B1', zoneId: 'reef_b1', startUnitId: firstOfZone('reef_b1', 'unit_b1_21') };
    } else if (correctCount <= 8) {
      return { cefr: 'B2', zoneId: 'ocean_b2', startUnitId: firstOfZone('ocean_b2', 'unit_b2_31') };
    } else if (correctCount === 9) {
      return { cefr: 'C1', zoneId: 'trench_c1', startUnitId: firstOfZone('trench_c1', 'unit_c1_41') };
    } else {
      return { cefr: 'C2', zoneId: 'atlantis_c2', startUnitId: firstOfZone('atlantis_c2', 'unit_c2_51') };
    }
  },

  addUnitVocabToFlashcards(unit) {
    if (!unit || !Array.isArray(unit.vocab)) return 0;
    if (!Array.isArray(this.state.flashcards)) this.state.flashcards = [];

    let added = 0;
    unit.vocab.forEach((item, idx) => {
      const exists = this.state.flashcards.some(
        c => c.en.toLowerCase() === item.en.toLowerCase()
      );
      if (!exists) {
        this.state.flashcards.unshift({
          id: `fc_${unit.id}_${Date.now()}_${idx}`,
          en: item.en,
          ru: item.ru,
          example: item.example || '',
          unitId: unit.id,
          box: 1,
          intervalDays: 0,
          reviewCount: 0,
          nextReviewAt: Date.now() - 1000,
          isCustom: false
        });
        added += 1;
      }
    });
    return added;
  },

  finishLessonRewards() {
    this.playTone('win');
    const total = this.session.exercises.length || 1;
    const accuracy = Math.round((this.session.correctCount / total) * 100);
    const allUnits = window.ScayaCurriculum.units;
    this.session.newlyAddedCardsCount = 0;

    if (this.session.mode === 'placement') {
      const result = this.calculateAccuratePlacementLevel(this.session.correctCount);
      this.state.user.detectedLevel = result.cefr;
      this.state.user.currentZoneId = result.zoneId;
      this.state.user.onboardingDone = true;
      this.state.user.hidePassedZones = result.zoneId !== 'lagoon_a1';

      if (this.state.stats.hearts <= 0) {
        this.state.stats.hearts = 3;
      }

      const startIdx = allUnits.findIndex(u => u.id === result.startUnitId);
      allUnits.forEach((u, idx) => {
        if (idx < startIdx) {
          this.state.unitProgress[u.id] = {
            crowns: 2,
            bestAccuracy: 100,
            unlocked: true
          };
        } else if (idx === startIdx) {
          this.state.unitProgress[u.id] = {
            crowns: 0,
            bestAccuracy: 0,
            unlocked: true
          };
        }
      });

      this.selectedNodeId = result.startUnitId;
      const startUnitObj = allUnits.find(u => u.id === result.startUnitId);
      if (startUnitObj) {
        this.session.newlyAddedCardsCount = this.addUnitVocabToFlashcards(startUnitObj);
      }

      this.state.stats.xp += 50;
      this.state.stats.pearls += 40;
    } else if (this.session.mode === 'skip_jump' && this.session.targetSkipUnitId) {
      const targetIdx = allUnits.findIndex(u => u.id === this.session.targetSkipUnitId);
      allUnits.forEach((u, idx) => {
        if (idx <= targetIdx) {
          this.state.unitProgress[u.id] = {
            crowns: 1,
            bestAccuracy: accuracy,
            unlocked: true
          };
        }
      });
      const targetUnitObj = allUnits[targetIdx];
      if (targetUnitObj) {
        this.state.user.currentZoneId = targetUnitObj.zoneId;
        const zoneObj = window.ScayaCurriculum.oceanZones.find(z => z.id === targetUnitObj.zoneId);
        if (zoneObj) this.state.user.detectedLevel = zoneObj.cefr;
        this.session.newlyAddedCardsCount = this.addUnitVocabToFlashcards(targetUnitObj);
      }
      this.selectedNodeId = this.session.targetSkipUnitId;
      this.state.stats.xp += 45;
      this.state.stats.pearls += 35;
    } else if (this.session.mode === 'mistakes_review') {
      this.state.stats.hearts = Math.min(this.state.stats.maxHearts, this.state.stats.hearts + 2);
      this.state.stats.xp += 25;
      this.state.stats.pearls += 20;
    } else if (this.session.unit) {
      const uid = this.session.unit.id;
      const prev = this.state.unitProgress[uid] || { crowns: 0, bestAccuracy: 0 };
      this.state.unitProgress[uid] = {
        crowns: Math.min(3, prev.crowns + 1),
        bestAccuracy: Math.max(prev.bestAccuracy, accuracy),
        unlocked: true
      };

      this.session.newlyAddedCardsCount = this.addUnitVocabToFlashcards(this.session.unit);

      const currIdx = allUnits.findIndex(u => u.id === uid);
      if (currIdx >= 0 && currIdx + 1 < allUnits.length) {
        const nextU = allUnits[currIdx + 1];
        this.state.unitProgress[nextU.id] = {
          ...(this.state.unitProgress[nextU.id] || { crowns: 0, bestAccuracy: 0 }),
          unlocked: true
        };
        this.selectedNodeId = nextU.id;
        if (nextU.zoneId !== this.session.unit.zoneId) {
          this.state.user.currentZoneId = nextU.zoneId;
          const nextZone = window.ScayaCurriculum.oceanZones.find(z => z.id === nextU.zoneId);
          if (nextZone) this.state.user.detectedLevel = nextZone.cefr;
        }
      }
      this.state.stats.xp += 35;
      this.state.stats.pearls += 25;
    }

    window.ScayaCloud.saveState(this.state);
  },

  renderLessonComplete(overlay) {
    const total = this.session.exercises.length || 1;
    const accuracy = Math.round((this.session.correctCount / total) * 100);
    const isPlacement = this.session.mode === 'placement';
    const isSkip = this.session.mode === 'skip_jump';
    const isMistakes = this.session.mode === 'mistakes_review';
    const addedCards = this.session.newlyAddedCardsCount || 0;
    const currentZoneId = (this.session.unit && this.session.unit.zoneId) || (this.state.user && this.state.user.currentZoneId) || 'lagoon_a1';
    const currentLevel = (this.state.user && this.state.user.detectedLevel) || 'A1';
    const stepTitle = (this.session.unit && this.session.unit.titleRu) ? this.session.unit.titleRu : `Уровень ${currentLevel}`;
    const earnedXp = isPlacement ? 50 : isSkip ? 45 : isMistakes ? 25 : 35;
    const earnedPearls = isPlacement ? 40 : isSkip ? 35 : isMistakes ? 20 : 25;

    overlay.innerHTML = `
      <div class="lesson-complete-screen groovy-victory-screen">
        <div class="groovy-victory-card">
          <div class="groovy-card-squiggle-tl">
            ${window.ScayaMascot.renderGroovyCornerSquiggles('#FF6FB5', 'top-left')}
          </div>

          <div class="groovy-victory-top-pill">
            ${isPlacement
              ? `LEVEL ${currentLevel} UNLOCKED`
              : isSkip
                ? `SKIP TEST PASSED • ${currentLevel}`
                : `STEP COMPLETE • LEVEL ${currentLevel}`}
          </div>

          <div class="groovy-victory-hero-stage" onclick="ScayaApp.greetOceanFriend('sky', '${currentZoneId}')">
            <div class="groovy-victory-daisy-bg">
              ${window.ScayaMascot.renderGroovyDaisyStamp('#FFEE00', 142, '• STEP CLEAR • SCAYA VIBE ')}
            </div>
            ${window.ScayaMascot.renderPathStandingMascot(132, currentZoneId)}
          </div>

          <h2 class="groovy-victory-title">
            ${isPlacement
              ? `Твой уровень — ${currentLevel}!`
              : isSkip
                ? 'Шаги открыты экстерном!'
                : 'Шаг успешно пройден!'}
          </h2>

          <div class="groovy-victory-subtitle">
            ${isPlacement
              ? `Верных ответов: ${this.session.correctCount} из ${total}. Открыта вся программа ${currentLevel}!`
              : stepTitle}
          </div>

          <div class="groovy-victory-stats-row">
            <div class="groovy-victory-stat-pill stat-yellow">
              <span class="groovy-victory-stat-val">${accuracy}%</span>
              <span class="groovy-victory-stat-lbl">Точность</span>
            </div>
            <div class="groovy-victory-stat-pill stat-pink">
              <span class="groovy-victory-stat-val">+${earnedXp} XP</span>
              <span class="groovy-victory-stat-lbl">Опыт</span>
            </div>
            <div class="groovy-victory-stat-pill stat-blue">
              <span class="groovy-victory-stat-val">+${earnedPearls}</span>
              <span class="groovy-victory-stat-lbl">Ракушки</span>
            </div>
          </div>

          <div class="groovy-victory-actions">
            ${addedCards > 0 ? `
              <button class="groovy-victory-btn-secondary" onclick="ScayaApp.exitLesson(); ScayaApp.switchTab('flashcards')">
                +${addedCards} новых слов в Cards →
              </button>
            ` : ''}

            <button class="groovy-victory-btn-primary" onclick="ScayaApp.exitLesson()">
              Дальше по дорожке (${currentLevel}) →
            </button>
          </div>
        </div>
      </div>
    `;
  },

  exitLesson() {
    this.session.active = false;
    this.renderLessonOverlay();
    this.renderAll();
  },

  // --------------------------------------------------------------------------
  // ВКЛАДКА 2: CARDS (ЦЕЛЬНЫЙ GROOVY STUDIO БЛОК + АККУРАТНАЯ 2-КОЛОНОЧНАЯ КОЛОДА)
  // --------------------------------------------------------------------------
  getFilteredFlashcards() {
    const cards = this.state.flashcards || [];
    const now = Date.now();
    if (this.flashcardSession.filterMode === 'due') {
      const due = cards.filter(c => (c.nextReviewAt || 0) <= now);
      return due.length > 0 ? due : cards;
    } else if (this.flashcardSession.filterMode === 'custom') {
      return cards.filter(c => c.isCustom);
    }
    return cards;
  },

  formatNextReviewBadge(card) {
    const now = Date.now();
    const diffMs = (card.nextReviewAt || 0) - now;
    if (diffMs <= 0) return 'Повторить';
    const hours = Math.round(diffMs / 3600000);
    if (hours < 24) return `${Math.max(1, hours)} ч.`;
    const days = Math.round(hours / 24);
    return `${days} дн.`;
  },

  renderFlashcardsTab(container) {
    const allCards = this.state.flashcards || [];
    const now = Date.now();
    const dueCount = allCards.filter(c => (c.nextReviewAt || 0) <= now).length;
    const customCount = allCards.filter(c => c.isCustom).length;
    const filtered = this.getFilteredFlashcards();

    if (!this.flashcardSession.currentCardId || !filtered.some(c => c.id === this.flashcardSession.currentCardId)) {
      this.flashcardSession.currentCardId = filtered[0]?.id || null;
      this.flashcardSession.isFlipped = false;
    }

    const activeCard = filtered.find(c => c.id === this.flashcardSession.currentCardId) || filtered[0];
    const activeIndex = activeCard ? Math.max(0, filtered.findIndex(c => c.id === activeCard.id)) : 0;

    container.innerHTML = `
      <!-- Чистая верхняя строка заголовка (в едином стиле со Stories, без тяжёлого бокса) -->
      <div class="groovy-clean-stories-top groovy-clean-cards-top">
        <div class="groovy-cards-title-group">
          <h2 class="groovy-stories-big-title">Cards</h2>
          <span class="groovy-yellow-level-badge">${allCards.length} слов</span>
        </div>
        <button class="btn-add-custom-word groovy-pill-add-btn" onclick="ScayaApp.toggleAddWordForm()">
          ${this.flashcardSession.showAddForm ? '✕ Закрыть' : '+ Своё слово'}
        </button>
      </div>

      ${this.flashcardSession.showAddForm ? `
        <div class="custom-word-form-card groovy-custom-form-card">
          <h4>Добавить своё слово или фразу</h4>
          <input id="custom-word-en" class="scaya-input" type="text" placeholder="На английском (например: Main Character)" />
          <input id="custom-word-ru" class="scaya-input" type="text" placeholder="Перевод (например: Главный герой)" />
          <input id="custom-word-ex" class="scaya-input" type="text" placeholder="Пример предложения (необязательно)" />
          <button class="btn-primary-ocean full-width" onclick="ScayaApp.addCustomFlashcard()">
            Сохранить карточку
          </button>
        </div>
      ` : ''}

      <!-- БЛОК 1: ЕДИНАЯ СТУДИЯ КАРТОЧКИ (ФИЛЬТРЫ + MAIN CHARACTER CARD + ОЦЕНКА ПАМЯТИ В ОДНОМ ЦЕЛЬНОМ БОКСЕ!) -->
      <div class="groovy-flashcard-studio-card">
        <div class="groovy-studio-filter-row">
          <div class="groovy-segmented-filters">
            <button class="groovy-seg-btn ${this.flashcardSession.filterMode === 'due' ? 'active' : ''}" onclick="ScayaApp.setFlashcardFilter('due')">
              К повтору (${dueCount})
            </button>
            <button class="groovy-seg-btn ${this.flashcardSession.filterMode === 'all' ? 'active' : ''}" onclick="ScayaApp.setFlashcardFilter('all')">
              Все (${allCards.length})
            </button>
            <button class="groovy-seg-btn ${this.flashcardSession.filterMode === 'custom' ? 'active' : ''}" onclick="ScayaApp.setFlashcardFilter('custom')">
              Мои (${customCount})
            </button>
          </div>
          ${filtered.length > 0 ? `<span class="groovy-card-counter-pill">${activeIndex + 1} / ${filtered.length}</span>` : ''}
        </div>

        ${activeCard ? `
          <div class="quizlet-card-3d groovy-main-char-card ${this.flashcardSession.isFlipped ? 'flipped' : ''}" onclick="ScayaApp.flipCurrentFlashcard()">
            <div class="groovy-card-squiggle-tl">
              ${window.ScayaMascot.renderGroovyCornerSquiggles('#FF6FB5', 'top-left')}
            </div>

            <div class="groovy-main-char-layout">
              <div class="groovy-main-char-left">
                <div class="quizlet-card-top-meta">
                  <span class="srs-box-badge">Память: ${'★'.repeat(activeCard.box || 1)}${'☆'.repeat(5 - (activeCard.box || 1))}</span>
                </div>

                ${!this.flashcardSession.isFlipped ? `
                  <div class="q-word-big">${activeCard.en}</div>
                  <div class="q-word-phonetic">/${activeCard.en.toLowerCase().replace(/[^a-z\s]/g, '').trim()}/</div>
                  ${activeCard.example ? `<div class="q-word-example">“${activeCard.example}”</div>` : ''}
                ` : `
                  <div class="q-side-tag">ПЕРЕВОД И ЗНАЧЕНИЕ</div>
                  <div class="q-word-big ru-side">${activeCard.ru}</div>
                  <div class="q-word-sub-en">${activeCard.en}</div>
                `}

                <div class="groovy-speaker-action-row">
                  <button class="btn-groovy-round-speaker" title="Озвучить" onclick="event.stopPropagation(); ScayaApp.speakEnglish(${JSON.stringify(activeCard.en).replace(/"/g, '&quot;')})">
                    <svg viewBox="0 0 28 28" width="24" height="24" fill="none">
                      <path d="M5,11 L10,11 L16,6 L16,22 L10,17 L5,17 Z" fill="#000000" stroke="#000000" stroke-width="1.8" stroke-linejoin="round"/>
                      <path d="M20,10 C22,12 22,16 20,18" stroke="#000000" stroke-width="2.4" stroke-linecap="round"/>
                      <path d="M23,7 C26.5,10.5 26.5,17.5 23,21" stroke="#000000" stroke-width="2.4" stroke-linecap="round"/>
                    </svg>
                  </button>
                  <span class="quizlet-card-footer-hint">Тапни по карточке для ${this.flashcardSession.isFlipped ? 'оригинала' : 'перевода'}</span>
                </div>
              </div>

              <div class="groovy-main-char-stamps">
                ${window.ScayaMascot.renderGroovyDaisyStamp('#FF6FB5', 70, '• MAIN CHARACTER • SCAYA VIBE ')}
                ${window.ScayaMascot.renderGroovyDaisyStamp('#FF8AD8', 58, '• ENGLISH FLOW • DAILY WORDS ')}
              </div>
            </div>
          </div>

          <div class="groovy-studio-srs-dock">
            <button class="btn-srs-rate again" onclick="ScayaApp.rateFlashcard('${activeCard.id}', 'again')">
              <strong>Ещё учу</strong>
              <span>10 мин</span>
            </button>
            <button class="btn-srs-rate good" onclick="ScayaApp.rateFlashcard('${activeCard.id}', 'good')">
              <strong>Хорошо</strong>
              <span>${(activeCard.box || 1) * 2} дн.</span>
            </button>
            <button class="btn-srs-rate easy" onclick="ScayaApp.rateFlashcard('${activeCard.id}', 'easy')">
              <strong>Отлично!</strong>
              <span>${Math.max(4, (activeCard.box || 1) * 5)} дн.</span>
            </button>
          </div>
        ` : `
          <div class="empty-mistakes-card" style="margin:0;">
            ${window.ScayaMascot.renderSVG('proud', this.state.user.avatarOutfit, 82)}
            <h3>В этой группе пока пусто!</h3>
            <p>Переключи фильтр на «Все» или добавь своё слово кнопкой «+ Своё слово».</p>
          </div>
        `}
      </div>

      <!-- БЛОК 2: ЕДИНЫЙ АККУРАТНЫЙ КОНТЕЙНЕР КОЛОДЫ С 2-КОЛОНОЧНОЙ СЕТКОЙ КАРТОЧЕК -->
      <div class="groovy-deck-container-card">
        <div class="groovy-deck-header-row">
          <h4 class="groovy-deck-title">Словарь колоды</h4>
          <span class="groovy-deck-badge">${filtered.length} шт.</span>
        </div>
        <div class="groovy-deck-grid-2col">
          ${filtered.map(c => `
            <div class="groovy-mini-word-card ${c.id === activeCard?.id ? 'active selected' : ''}" onclick="ScayaApp.selectFlashcardFromList('${c.id}')">
              <div class="groovy-mini-word-top">
                <strong class="groovy-mini-word-en">${c.en}</strong>
                ${c.isCustom ? `
                  <button class="btn-delete-custom" onclick="event.stopPropagation(); ScayaApp.deleteCustomFlashcard('${c.id}')">✕</button>
                ` : `
                  <span class="groovy-mini-lvl">${this.formatNextReviewBadge(c)}</span>
                `}
              </div>
              <div class="groovy-mini-word-ru">${c.ru}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  setFlashcardFilter(mode) {
    this.flashcardSession.filterMode = mode;
    this.flashcardSession.currentCardId = null;
    this.flashcardSession.isFlipped = false;
    this.renderAll();
  },

  flipCurrentFlashcard() {
    this.flashcardSession.isFlipped = !this.flashcardSession.isFlipped;
    this.playTone('correct');
    this.renderAll();
  },

  selectFlashcardFromList(cardId) {
    this.flashcardSession.currentCardId = cardId;
    this.flashcardSession.isFlipped = false;
    const card = (this.state.flashcards || []).find(c => c.id === cardId);
    if (card) this.speakEnglish(card.en);
    this.renderAll();
  },

  toggleAddWordForm() {
    this.flashcardSession.showAddForm = !this.flashcardSession.showAddForm;
    this.renderAll();
  },

  addCustomFlashcard() {
    const enInput = document.getElementById('custom-word-en');
    const ruInput = document.getElementById('custom-word-ru');
    const exInput = document.getElementById('custom-word-ex');
    const en = (enInput?.value || '').trim();
    const ru = (ruInput?.value || '').trim();
    const example = (exInput?.value || '').trim();

    if (!en || !ru) {
      this.showToast('Введи слово на английском и его перевод!');
      return;
    }

    const newCard = {
      id: 'custom_' + Date.now(),
      en,
      ru,
      example: example || `Example with "${en}".`,
      unitId: 'custom',
      box: 1,
      intervalDays: 0,
      reviewCount: 0,
      nextReviewAt: Date.now() - 1000,
      isCustom: true
    };

    this.state.flashcards.unshift(newCard);
    this.flashcardSession.currentCardId = newCard.id;
    this.flashcardSession.showAddForm = false;
    this.state.stats.xp += 10;

    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.renderAll();
    this.showToast(`Слово «${en}» добавлено в твои карточки (+10 XP)!`);
  },

  deleteCustomFlashcard(cardId) {
    this.state.flashcards = (this.state.flashcards || []).filter(c => c.id !== cardId);
    window.ScayaCloud.saveState(this.state);
    this.renderAll();
    this.showToast('Карточка удалена.');
  },

  rateFlashcard(cardId, rating) {
    const card = (this.state.flashcards || []).find(c => c.id === cardId);
    if (!card) return;

    const DAY_MS = 24 * 3600 * 1000;
    card.reviewCount = (card.reviewCount || 0) + 1;

    if (rating === 'again') {
      card.box = 1;
      card.intervalDays = 0;
      card.nextReviewAt = Date.now() + 10 * 60 * 1000;
      this.playTone('wrong');
      this.showToast('Слово останется в активном повторении!');
    } else if (rating === 'good') {
      const nextDays = (card.box || 1) * 2;
      card.box = Math.min(5, (card.box || 1) + 1);
      card.intervalDays = nextDays;
      card.nextReviewAt = Date.now() + nextDays * DAY_MS;
      this.state.stats.xp += 5;
      this.playTone('correct');
      this.showToast(`Отлично! В следующий раз покажем через ${nextDays} дн. (+5 XP)`);
    } else if (rating === 'easy') {
      const nextDays = Math.max(4, (card.box || 1) * 5);
      card.box = Math.min(5, (card.box || 1) + 2);
      card.intervalDays = nextDays;
      card.nextReviewAt = Date.now() + nextDays * DAY_MS;
      this.state.stats.xp += 10;
      this.state.stats.pearls += 5;
      this.playTone('win');
      this.showToast(`Супер! Покажем только через ${nextDays} дн. (+10 XP, +5 ракушек)`);
    }

    const filtered = this.getFilteredFlashcards();
    const nextCard = filtered.find(c => c.id !== cardId) || filtered[0];
    this.flashcardSession.currentCardId = nextCard ? nextCard.id : null;
    this.flashcardSession.isFlipped = false;

    window.ScayaCloud.saveState(this.state);
    this.renderAll();
  },

  // --------------------------------------------------------------------------
  // ВКЛАДКА 3: STORIES (В СТИЛЕ Y2K GROOVY «STORIES — COFFEE & VINYL» ИЗ app_ui_groovy_concept.jpg)
  // --------------------------------------------------------------------------
  renderStoriesTab(container) {
    const stories = window.ScayaCurriculum.stories || [];
    const allUnits = window.ScayaCurriculum.units || [];
    const zones = window.ScayaCurriculum.oceanZones || [];
    const readingUnits = zones
      .map(z => allUnits.find(u => u.zoneId === z.id && u.nodeType === 'reading') || allUnits.find(u => u.zoneId === z.id))
      .filter(Boolean);
    const completed = this.state.completedStories || [];

    container.innerHTML = `
      <div class="groovy-clean-stories-top">
        <h2 class="groovy-stories-big-title">Stories</h2>
        <span class="groovy-pink-level-pill">Level ${this.state.user.detectedLevel || 'A1'}</span>
      </div>

      <div class="stories-grid" style="margin-bottom: 18px;">
        ${stories.map(st => {
          const isDone = completed.includes(st.id);
          return `
            <div class="story-card groovy-story-card ${isDone ? 'completed' : ''}" onclick="ScayaApp.openInteractiveStory('${st.id}')">
              <div class="groovy-story-card-top-bar">
                <span class="groovy-story-kicker">Stories</span>
                <span class="groovy-pink-level-pill mini">${isDone ? 'Прочитано ✓' : 'Level'}</span>
              </div>
              <div class="groovy-story-card-main">
                <div class="story-card-gouache-wrap">
                  ${window.ScayaMascot.renderStoryIllustration(st.id, 102)}
                </div>
                <div class="story-card-body">
                  <h3 class="story-card-title">${st.titleEn}</h3>
                  <div class="story-card-sub">${st.titleRu}</div>
                  <div class="groovy-story-badge-row">
                    <span class="groovy-yellow-level-badge">Level ${st.cefr}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <h4 class="dopamine-section-pill cyan-pill">Чтение по уровням курса (A1 → C2)</h4>
      <div class="stories-grid">
        ${readingUnits.map(ru => {
          const prog = this.state.unitProgress[ru.id] || { crowns: 0 };
          const isDone = prog.crowns > 0;
          const zone = zones.find(z => z.id === ru.zoneId);
          const readEx = (ru.exercises || []).find(e => e.type === 'reading_comprehension');
          const rTitle = (readEx && readEx.storyTitle) || ru.titleRu;
          return `
            <div class="story-card groovy-story-card ${isDone ? 'completed' : ''}" onclick="ScayaApp.startReadingUnitDirect('${ru.id}')">
              <div class="groovy-story-card-top-bar">
                <span class="groovy-story-kicker">Reading</span>
                <span class="groovy-pink-level-pill mini">${isDone ? `Зачтено (${prog.crowns}★)` : 'Level'}</span>
              </div>
              <div class="groovy-story-card-main">
                <div class="story-card-gouache-wrap">
                  ${window.ScayaMascot.renderStoryIllustration(ru.id, 96)}
                </div>
                <div class="story-card-body">
                  <h3 class="story-card-title">${rTitle}</h3>
                  <div class="story-card-sub">${ru.titleRu}</div>
                  <div class="groovy-story-badge-row">
                    <span class="groovy-yellow-level-badge">Level ${zone ? zone.cefr : 'A1'}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  startReadingUnitDirect(unitId) {
    const unit = (window.ScayaCurriculum.units || []).find(u => u.id === unitId);
    if (!unit) return;
    const allEx = JSON.parse(JSON.stringify(unit.exercises || []));
    const readIdx = allEx.findIndex(e => e.type === 'reading_comprehension');
    this.session = {
      active: true,
      mode: 'unit',
      unit,
      vocabIntroStep: false,
      readingStage: false,
      showReadingTranslation: false,
      exercises: allEx,
      currentIndex: readIdx >= 0 ? readIdx : 0,
      selectedAnswer: null,
      assembledWords: [],
      availableWords: [],
      speechRecognizedText: '',
      isListeningMic: false,
      checked: false,
      isCorrect: false,
      correctCount: 0,
      heartLostThisTurn: false,
      newlyAddedCardsCount: 0
    };
    this.prepareCurrentExercise();
    this.renderLessonOverlay();
  },

  openInteractiveStory(storyId) {
    const story = (window.ScayaCurriculum.stories || []).find(s => s.id === storyId);
    if (!story) return;

    this.activeWordTooltip = null;
    this.storySession = {
      active: true,
      story,
      visibleStepIndex: 0,
      selectedOption: null,
      questionAnswered: false,
      isQuestionCorrect: false
    };

    const firstLine = story.lines[0];
    if (firstLine && firstLine.textEn) {
      this.speakEnglish(firstLine.textEn, firstLine.speaker || 'sky');
    }
    this.renderStoryOverlay();
  },

  renderStoryOverlay() {
    const overlay = document.getElementById('scaya-lesson-overlay');
    if (!overlay) return;
    if (!this.storySession.active || !this.storySession.story) {
      overlay.classList.add('hidden');
      overlay.innerHTML = '';
      return;
    }

    overlay.classList.remove('hidden');
    const st = this.storySession.story;
    const idx = this.storySession.visibleStepIndex;
    const total = st.lines.length;
    const progressPct = Math.round(((idx + 1) / total) * 100);

    const visibleLines = st.lines.slice(0, idx + 1);
    const currentStep = st.lines[idx];
    const isCurrentQuestion = currentStep && currentStep.type === 'question';
    const isStoryFinished = idx >= total - 1 && (!isCurrentQuestion || this.storySession.questionAnswered);

    let inlineSceneCount = 0;
    const linesHTML = visibleLines.map((item, lineIdx) => {
      if (item.type === 'question') {
        const isThisActiveQuestion = lineIdx === idx;
        return `
          <div class="story-question-card">
            <div class="story-q-title">${item.prompt}</div>
            <div class="story-q-options">
              ${item.options.map(opt => {
                let cls = '';
                if (!isThisActiveQuestion || this.storySession.questionAnswered) {
                  if (opt === item.correct) cls = 'correct';
                  else if (this.storySession.selectedOption === opt) cls = 'wrong';
                }
                return `
                  <button class="story-q-btn ${cls}"
                    ${(!isThisActiveQuestion || this.storySession.questionAnswered) ? 'disabled' : ''}
                    onclick="ScayaApp.answerStoryQuestion(${JSON.stringify(opt).replace(/"/g, '&quot;')})">
                    ${opt}
                  </button>
                `;
              }).join('')}
            </div>
            ${(!isThisActiveQuestion || this.storySession.questionAnswered) ? `
              <div class="story-q-explanation">${item.explanation}</div>
            ` : ''}
          </div>
        `;
      }

      const speakerId = item.speaker || 'sky';
      const friend = window.ScayaMascot.friends[speakerId] || window.ScayaMascot.friends.sky;
      let extraSceneHTML = '';
      if ((lineIdx === 1 || lineIdx === 3) && window.ScayaMascot.renderReadingInlineScene) {
        extraSceneHTML = window.ScayaMascot.renderReadingInlineScene(st.id, inlineSceneCount);
        inlineSceneCount += 1;
      }
      return `
        <div class="story-chat-row">
          <div class="story-chat-avatar">
            ${window.ScayaMascot.renderFriendAvatar(friend.id, 52)}
          </div>
          <div class="story-chat-bubble">
            <div class="story-speaker-name">
              <span>${friend.name}</span>
              <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(item.textEn).replace(/"/g, '&quot;')}, '${speakerId}')">🔊</button>
            </div>
            <div class="story-text-en interactive-tap-text">${this.renderInteractiveWords(item.textEn, speakerId)}</div>
          </div>
        </div>
        ${extraSceneHTML}
      `;
    }).join('');

    overlay.innerHTML = `
      <div class="story-player-screen">
        <div class="lesson-header">
          <button class="btn-exit-lesson" onclick="ScayaApp.closeInteractiveStory()">✕</button>
          <div class="lesson-progress-track">
            <div class="lesson-progress-fill" style="width: ${progressPct}%"></div>
          </div>
          <span class="story-level-tag">${st.cefr}</span>
        </div>

        <div class="story-header-mini">
          ${window.ScayaMascot.renderStoryIllustration(st.id, 56)}
          <div class="story-header-titles">
            <strong>${st.titleRu}</strong>
            <span>${st.titleEn}</span>
          </div>
        </div>

        ${this.renderWordTooltipBanner()}

        <div class="story-dialogue-scroll" id="story-scroll-box">
          <div class="story-plot-scene-card">
            ${window.ScayaMascot.renderStoryIllustration(st.id, 176, true)}
            <div class="story-plot-scene-caption">${st.subtitle}</div>
          </div>
          ${linesHTML}
        </div>

        <div class="story-footer-bar">
          ${isStoryFinished ? `
            <button class="btn-primary-ocean full-width" onclick="ScayaApp.finishInteractiveStory()">
              Завершить историю (+${st.rewardXp} XP, +${st.rewardPearls} ракушек)
            </button>
          ` : (isCurrentQuestion && !this.storySession.questionAnswered) ? `
            <button class="btn-check-answer disabled" disabled>
              Выбери ответ выше ↑
            </button>
          ` : `
            <button class="btn-primary-ocean full-width" onclick="ScayaApp.nextStoryStep()">
              Дальше →
            </button>
          `}
        </div>
      </div>
    `;

    const scrollBox = document.getElementById('story-scroll-box');
    if (scrollBox) {
      scrollBox.scrollTop = scrollBox.scrollHeight;
    }
  },

  answerStoryQuestion(opt) {
    const currentStep = this.storySession.story?.lines[this.storySession.visibleStepIndex];
    if (!currentStep || currentStep.type !== 'question') return;
    this.storySession.selectedOption = opt;
    this.storySession.questionAnswered = true;
    this.storySession.isQuestionCorrect = (opt === currentStep.correct);

    if (this.storySession.isQuestionCorrect) {
      this.playTone('correct');
    } else {
      this.playTone('wrong');
    }
    this.renderStoryOverlay();
  },

  nextStoryStep() {
    const st = this.storySession.story;
    if (!st) return;
    if (this.storySession.visibleStepIndex + 1 < st.lines.length) {
      this.storySession.visibleStepIndex += 1;
      this.storySession.selectedOption = null;
      this.storySession.questionAnswered = false;
      const step = st.lines[this.storySession.visibleStepIndex];
      if (step && step.textEn) {
        this.speakEnglish(step.textEn, step.speaker || 'sky');
      }
      this.renderStoryOverlay();
    }
  },

  finishInteractiveStory() {
    const st = this.storySession.story;
    if (st) {
      if (!this.state.completedStories.includes(st.id)) {
        this.state.completedStories.push(st.id);
      }
      this.state.stats.xp += st.rewardXp || 40;
      this.state.stats.pearls += st.rewardPearls || 30;
      window.ScayaCloud.saveState(this.state);
    }
    this.playTone('win');
    this.closeInteractiveStory();
    this.showToast(`📖 История прочитана! Скай, Мира, Лулу и Блинки гордятся тобой!`);
  },

  closeInteractiveStory() {
    this.storySession.active = false;
    this.storySession.story = null;
    this.renderStoryOverlay();
    this.renderAll();
  },

  // --------------------------------------------------------------------------
  // ВКЛАДКА 4: МАГАЗИН (ОГОНЁЧКИ, СЕРДЕЧКИ, APPLE PAY + РАБОТА НАД ОШИБКАМИ)
  // --------------------------------------------------------------------------
  renderShopTab(container) {
    const { streakDays, lostStreakDays, streakFreeze, pearls, hearts, maxHearts } = this.state.stats;
    const isBroken = streakDays === 0 && lostStreakDays > 0;

    container.innerHTML = `
      <!-- Главная витрина Shop в точном стиле карточки Shop из app_ui_groovy_concept.jpg -->
      <div class="groovy-shop-hero-card">
        <div class="groovy-card-squiggle-tl">${window.ScayaMascot.renderGroovyCornerSquiggles('#FF6FB5', 'top-left')}</div>
        <div class="groovy-card-squiggle-tr">${window.ScayaMascot.renderGroovyCornerSquiggles('#FF6FB5', 'top-right')}</div>
        <h2 class="groovy-shop-big-title">Shop</h2>

        <div class="groovy-shop-stickers-grid">
          <div class="groovy-shop-sticker-col" onclick="ScayaApp.buyStreakFreeze()">
            <div class="groovy-sticker-art-wrap">
              ${window.ScayaMascot.renderShopStickerSVG('freeze', 70)}
            </div>
            <div class="groovy-sticker-title">Streak<br/>Freeze</div>
            <span class="groovy-sticker-price-pill">150 ракушек</span>
          </div>

          <div class="groovy-shop-sticker-col" onclick="ScayaApp.buyFullHearts()">
            <div class="groovy-sticker-art-wrap">
              ${window.ScayaMascot.renderShopStickerSVG('heart', 70)}
            </div>
            <div class="groovy-sticker-title">Heart<br/>Refills</div>
            <span class="groovy-sticker-price-pill">100 ракушек</span>
          </div>

          <div class="groovy-shop-sticker-col" onclick="ScayaApp.openApplePaySheet('1 500 Жемчужин Рифа', '499 ₽', 'pearls_1500')">
            <div class="groovy-sticker-art-wrap">
              ${window.ScayaMascot.renderShopStickerSVG('gems', 70)}
            </div>
            <div class="groovy-sticker-title">Gem<br/>Packs</div>
            <span class="groovy-sticker-price-pill yellow">Пополнить</span>
          </div>
        </div>
      </div>

      <div class="shop-quick-links">
        <button class="btn-secondary-ocean" onclick="ScayaApp.switchTab('mistakes')">
          Ошибки (${this.state.mistakes.length})
        </button>
        <button class="btn-secondary-ocean" onclick="ScayaApp.switchTab('postcards')">
          Открытки Ская
        </button>
      </div>

      <div class="shop-section-card">
        <div class="shop-section-header">
          <span>Управление Огонёчком (${isBroken ? 'Погас!' : `${streakDays} дн. подряд`})</span>
        </div>

        <div class="shop-item-row">
          <div class="shop-item-icon">${window.ScayaMascot.renderShopStickerSVG('heart', 44)}</div>
          <div class="shop-item-info">
            <strong>Восстановление огонёчка</strong>
            <span>Вернуть сгоревшую серию дней (${isBroken ? `${lostStreakDays} дн.` : 'если пропустишь день'})</span>
          </div>
          <button class="btn-shop-buy" onclick="ScayaApp.repairStreakWithPearls()">
            200 🦪
          </button>
        </div>

        <div class="shop-item-row">
          <div class="shop-item-icon">${window.ScayaMascot.renderShopStickerSVG('freeze', 44)}</div>
          <div class="shop-item-info">
            <strong>Streak Freeze • Заморозка (У тебя: ${streakFreeze})</strong>
            <span>Защитит твой огонёк, если забудешь зайти в приложение</span>
          </div>
          <button class="btn-shop-buy" onclick="ScayaApp.buyStreakFreeze()">
            150 🦪
          </button>
        </div>

        <div class="shop-test-streak-bar">
          ${!isBroken ? `
            <button class="btn-simulate-missed-day" onclick="ScayaApp.simulateLostStreak()">
              Проверить: симулировать пропуск дня (потушить огонёк)
            </button>
          ` : `
            <button class="btn-simulate-missed-day urgent" onclick="ScayaApp.openApplePaySheet('Восстановление огонёчка', '99 ₽', 'repair_streak')">
              Мгновенно восстановить ${lostStreakDays} дн. за 99 ₽ (Apple Pay)
            </button>
          `}
        </div>
      </div>

      <div class="shop-section-card">
        <div class="shop-section-header">
          <span>Heart Refills • Сердечки жизни (${hearts}/${maxHearts})</span>
        </div>
        <div class="shop-item-row">
          <div class="shop-item-icon">${window.ScayaMascot.renderShopStickerSVG('heart', 44)}</div>
          <div class="shop-item-info">
            <strong>Полный запас сердечек (5/5)</strong>
            <span>Мгновенное пополнение всех жизней для уроков</span>
          </div>
          <button class="btn-shop-buy" onclick="ScayaApp.buyFullHearts()">
            100 🦪
          </button>
        </div>
      </div>

      <div class="shop-section-card real-money-card">
        <div class="shop-section-header">
          <span>Gem Packs • Пакеты ракушек и кристаллов (Apple Pay)</span>
        </div>

        <div class="shop-item-row">
          <div class="shop-item-icon">${window.ScayaMascot.renderShopStickerSVG('gems', 44)}</div>
          <div class="shop-item-info">
            <strong>Starter Pack — 500 🦪</strong>
            <span>Хватит на заморозки огонёчка и пополнение жизней</span>
          </div>
          <button class="btn-shop-money" onclick="ScayaApp.openApplePaySheet('500 Жемчужин Лагуны', '199 ₽', 'pearls_500')">
            199 ₽
          </button>
        </div>

        <div class="shop-item-row popular-pack">
          <div class="popular-ribbon">ХИТ</div>
          <div class="shop-item-icon">${window.ScayaMascot.renderShopStickerSVG('gems', 44)}</div>
          <div class="shop-item-info">
            <strong>Groovy Pack — 1 500 🦪</strong>
            <span>Выгодный набор для гардероба Ская, Лулу, Миры и Блинки</span>
          </div>
          <button class="btn-shop-money gold" onclick="ScayaApp.openApplePaySheet('1 500 Жемчужин Рифа', '499 ₽', 'pearls_1500')">
            499 ₽
          </button>
        </div>

        <div class="shop-item-row">
          <div class="shop-item-icon">${window.ScayaMascot.renderShopStickerSVG('gems', 44)}</div>
          <div class="shop-item-info">
            <strong>Y2K Star Pack — 5 000 🦪</strong>
            <span>Максимальный запас на весь курс A1–C2</span>
          </div>
          <button class="btn-shop-money" onclick="ScayaApp.openApplePaySheet('5 000 Жемчужин Атлантиды', '1 290 ₽', 'pearls_5000')">
            1 290 ₽
          </button>
        </div>
      </div>
    `;
  },

  simulateLostStreak() {
    if (this.state.stats.streakDays > 0) {
      this.state.stats.lostStreakDays = this.state.stats.streakDays;
      this.state.stats.streakDays = 0;
      window.ScayaCloud.saveState(this.state);
      this.playTone('wrong');
      this.renderAll();
      this.showToast('🕯️ Огонёк потушен! Теперь ты можешь протестировать покупку его восстановления!');
    }
  },

  repairStreakWithPearls() {
    if (this.state.stats.pearls < 200) {
      this.showToast('Не хватает жемчужин! Купи пакет жемчуга ниже через Apple Pay 🦪');
      return;
    }
    this.state.stats.pearls -= 200;
    const restored = this.state.stats.lostStreakDays || (this.state.stats.streakDays + 1);
    this.state.stats.streakDays = restored;
    this.state.stats.lostStreakDays = 0;
    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.renderAll();
    this.showToast(`🔥 Огонёк (${restored} дн.) успешно восстановлен!`);
  },

  buyStreakFreeze() {
    if (this.state.stats.pearls < 150) {
      this.showToast('Нужно 150 🦪 жемчужин! Пополни баланс в магазине.');
      return;
    }
    this.state.stats.pearls -= 150;
    this.state.stats.streakFreeze += 1;
    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.renderAll();
    this.showToast('❄️ Заморозка огонёчка куплена и активирована!');
  },

  buyFullHearts() {
    if (this.state.stats.hearts >= this.state.stats.maxHearts) {
      this.showToast('У тебя уже полные 5 из 5 ❤️ сердечек!');
      return;
    }
    if (this.state.stats.pearls < 100) {
      this.showToast('Не хватает жемчужин (нужно 100 🦪)!');
      return;
    }
    this.state.stats.pearls -= 100;
    this.state.stats.hearts = this.state.stats.maxHearts;
    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.renderAll();
    this.showToast('❤️ Все 5 сердечек восстановлены!');
  },

  openApplePaySheet(itemTitle, priceText, packCode) {
    const modal = document.getElementById('scaya-modal-overlay');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.innerHTML = `
      <div class="scaya-modal-sheet apple-pay-sheet">
        <div class="apple-pay-header">
          <span class="apple-pay-logo"> Pay</span>
          <button class="btn-close-modal" onclick="ScayaApp.closeModal()">Отмена</button>
        </div>

        <div class="apple-pay-row">
          <span class="ap-label">ПРИЛОЖЕНИЕ</span>
          <span class="ap-val">Scaya: English Ocean (App Store)</span>
        </div>
        <div class="apple-pay-row">
          <span class="ap-label">ПОКУПКА</span>
          <span class="ap-val"><strong>${itemTitle}</strong></span>
        </div>
        <div class="apple-pay-row">
          <span class="ap-label">КАРТА</span>
          <span class="ap-val">💳 Apple Card / Мир •••• 4821</span>
        </div>
        <div class="apple-pay-row total">
          <span class="ap-label">ИТОГО К ОПЛАТЕ</span>
          <span class="ap-val price">${priceText}</span>
        </div>

        <button class="btn-confirm-apple-pay" onclick="ScayaApp.completeApplePayPurchase('${packCode}')">
          🔒 Оплатить в 1 клик (Face ID)
        </button>
      </div>
    `;
  },

  completeApplePayPurchase(packCode) {
    if (packCode === 'pearls_500') this.state.stats.pearls += 500;
    else if (packCode === 'pearls_1500') this.state.stats.pearls += 1500;
    else if (packCode === 'pearls_5000') this.state.stats.pearls += 5000;
    else if (packCode === 'repair_streak') {
      this.state.stats.streakDays = this.state.stats.lostStreakDays || 7;
      this.state.stats.lostStreakDays = 0;
    }

    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.closeModal();
    this.renderAll();
    this.showToast('✅ Оплата прошла! Награда зачислена на ваш аккаунт Scaya!');
  },

  // --------------------------------------------------------------------------
  // ОТКРЫТКИ РОЗОВОГО ДЕЛЬФИНА СКАЯ ДЛЯ ДРУЗЕЙ
  // --------------------------------------------------------------------------
  renderPostcardsTab(container) {
    const cards = window.ScayaMascot.viralPostcards;
    const currentCard = cards[this.activePostcardIndex % cards.length];

    container.innerHTML = `
      <div class="tab-header-banner">
        <h2>💌 Тёплые открытки от розового дельфина Ская</h2>
        <p>Наш розовый дельфин Скай поддерживает с такой душевной теплотой и юмором, что эти открытки хочется отправлять друзьям!</p>
      </div>

      <div class="dolphin-postcard-preview" style="background: linear-gradient(145deg, ${currentCard.bgGradient[0]}, ${currentCard.bgGradient[1]})">
        <div class="postcard-top-badge">SCAYA • ${currentCard.category.toUpperCase()}</div>

        <div class="postcard-dolphin-art">
          ${window.ScayaMascot.renderSVG(currentCard.mood, currentCard.outfit || this.state.user.avatarOutfit, 114)}
        </div>

        <h3 class="postcard-sky-title">${currentCard.skyTitle}</h3>
        <p class="postcard-sky-body">“${currentCard.skyText}”</p>

        <div class="postcard-Watermark">🐬🌸 Приложение Scaya • Английский с душевным теплом</div>
      </div>

      <div class="postcard-carousel-controls">
        <button class="btn-carousel-nav" onclick="ScayaApp.prevPostcard()">← Предыдущая</button>
        <span class="postcard-counter">${this.activePostcardIndex + 1} / ${cards.length}</span>
        <button class="btn-carousel-nav" onclick="ScayaApp.nextPostcard()">Следующая →</button>
      </div>

      <div class="postcard-share-actions">
        <button class="btn-primary-ocean full-width" onclick="ScayaApp.downloadPostcardPNG()">
          📸 Скачать открытку картинкой (для друзей)
        </button>
        <button class="btn-secondary-ocean full-width" onclick="ScayaApp.copyPostcardText()">
          💬 Скопировать текст открытки
        </button>
      </div>
    `;
  },

  prevPostcard() {
    const len = window.ScayaMascot.viralPostcards.length;
    this.activePostcardIndex = (this.activePostcardIndex - 1 + len) % len;
    this.playTone('correct');
    this.renderAll();
  },

  nextPostcard() {
    const len = window.ScayaMascot.viralPostcards.length;
    this.activePostcardIndex = (this.activePostcardIndex + 1) % len;
    this.playTone('correct');
    this.renderAll();
  },

  copyPostcardText() {
    const card = window.ScayaMascot.viralPostcards[this.activePostcardIndex];
    const text = `🐬🌸 Розовый дельфин Скай из Scaya передаёт тебе:\n\n«${card.skyTitle}\n${card.skyText}» 🌊`;
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    this.showToast('💌 Открытка скопирована! Отправь её другу!');
  },

  downloadPostcardPNG() {
    const card = window.ScayaMascot.viralPostcards[this.activePostcardIndex];
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 1100;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 900, 1100);
    grad.addColorStop(0, card.bgGradient[0]);
    grad.addColorStop(1, card.bgGradient[1]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 900, 1100);

    ctx.fillStyle = '#F472B6';
    ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`🐬🌸 SCAYA • ${card.category.toUpperCase()}`, 450, 110);

    ctx.font = '140px serif';
    ctx.fillText('🐬🌸🧜‍♀️🦈', 450, 320);

    ctx.fillStyle = '#FDE047';
    ctx.font = 'bold 42px -apple-system, BlinkMacSystemFont, sans-serif';
    this.wrapCanvasText(ctx, card.skyTitle, 450, 440, 740, 52);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '34px -apple-system, BlinkMacSystemFont, sans-serif';
    this.wrapCanvasText(ctx, `«${card.skyText}»`, 450, 580, 740, 48);

    ctx.fillStyle = '#F9A8D4';
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('Scaya — Английский с розовым дельфином Скаем', 450, 1020);

    const link = document.createElement('a');
    link.download = `scaya-card-${card.id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    this.showToast('📸 Открытка сохранена как картинка!');
  },

  wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      if (ctx.measureText(testLine).width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, currY);
        line = words[n] + ' ';
        currY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, currY);
  },

  // --------------------------------------------------------------------------
  // РАЗБОР ОШИБОК (С ПОВТОРЕНИЕМ ПРАВИЛА И СЛОВ ПЕРЕД НОМЕРОМ + 5–6 ВАРИАНТОВ)
  // --------------------------------------------------------------------------
  renderMistakesTab(container) {
    const mistakes = this.state.mistakes;

    container.innerHTML = `
      <div class="tab-header-banner">
        <h2>🐚 Умная работа над ошибками</h2>
        <p>Перед выполнением номера ты можешь повторить грамматическое правило или слова в карточках, а затем отработать ошибку в расширенном тренажёре (5–6 вариантов + сборка фразы) и вернуть +2 ❤️!</p>
      </div>

      ${mistakes.length > 0 ? `
        <div class="shop-quick-links" style="margin-bottom:10px;">
          <button class="btn-secondary-ocean" onclick="ScayaApp.switchTab('flashcards')">
            🗂 Повторить слова в карточках
          </button>
          <button class="btn-primary-ocean" onclick="ScayaApp.startMistakesReviewLesson()">
            🛠 Отработать все (${mistakes.length}) +2 ❤️
          </button>
        </div>

        <div class="mistakes-list">
          ${mistakes.map(m => `
            <div class="mistake-item-card">
              <div class="mistake-source-tag">${m.badge}</div>
              <div class="mistake-prompt">${m.prompt}</div>
              <div class="mistake-wrong">❌ Твой ответ: ${m.wrongAnswer}</div>
              <div class="mistake-right">✅ Верно: ${m.correctAnswer}</div>
              <div class="mistake-rule-box">📖 ${m.explanation}</div>
              <div class="mistake-card-actions">
                ${m.unitId ? `
                  <button class="btn-mistake-prep" onclick="ScayaApp.openTheoryModal('${m.unitId}')">
                    📖 Повторить правило темы
                  </button>
                ` : ''}
                <button class="btn-mistake-prep" onclick="ScayaApp.switchTab('flashcards')">
                  🗂 Карточки слов
                </button>
                <button class="btn-mistake-solve" onclick="ScayaApp.startMistakesReviewLesson('${m.id}')">
                  🎯 Выполнить номер (5–6 вар.)
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="empty-mistakes-card">
          ${window.ScayaMascot.renderSVG('proud', this.state.user.avatarOutfit, 108)}
          <h3>Ни одной ошибки! ✨</h3>
          <p>Твой океан чист! Розовый дельфин Скай невероятно тобой гордится.</p>
        </div>
      `}
    `;
  },

  // --------------------------------------------------------------------------
  // ВКЛАДКА 5: ПРОФИЛЬ, ДРУЗЬЯ СКАЯ, ОТКРЫТКИ И ГАРДЕРОБ (НАРИСОВАННЫЕ СКИНЫ)
  // --------------------------------------------------------------------------
  selectWardrobeCharacter(charId) {
    this.activeWardrobeCharacter = charId || 'all';
    this.playTone('correct');
    this.renderAll();
  },

  renderProfileTab(container) {
    const allOutfits = Object.values(window.ScayaMascot.outfits);
    const charFilter = this.activeWardrobeCharacter || 'all';
    const filteredOutfits = charFilter === 'all'
      ? allOutfits
      : allOutfits.filter(o => (o.characterId || 'sky') === charFilter);
    const isVip = Boolean(this.state.user.isVipTester || this.state.stats.unlimitedPearls);
    const pearlsLabel = isVip ? '∞ ракушек (VIP)' : `${this.state.stats.pearls} ракушек`;
    const streakCount = this.state.stats.streakDays || 14;

    container.innerHTML = `
      <!-- Карточка Profile в точном стиле из app_ui_groovy_concept.jpg -->
      <div class="groovy-profile-hero-card">
        <div class="groovy-card-squiggle-tl">${window.ScayaMascot.renderGroovyCornerSquiggles('#FFD800', 'top-left')}</div>
        <div class="groovy-card-squiggle-tr">${window.ScayaMascot.renderGroovyCornerSquiggles('#FFD800', 'top-right')}</div>

        <h2 class="groovy-profile-big-title">Profile</h2>

        <div class="groovy-profile-grid">
          <div class="groovy-profile-left-col">
            <!-- Flame sticker + Yellow day streak pill -->
            <div class="groovy-streak-pill-row">
              <div class="groovy-flame-sticker">
                <svg viewBox="0 0 42 46" width="34" height="38">
                  <path d="M21,3 C21,3 36,15 36,28 C36,37 29,43 21,43 C13,43 6,37 6,28 C6,21 10,15 13,12 C12,17 15,20 17,19 C15,12 21,3 21,3 Z" fill="#FF7A1A" stroke="#000000" stroke-width="2.6" stroke-linejoin="round"/>
                  <path d="M21,19 C21,19 28,25 28,32 C28,36 25,39 21,39 C17,39 14,36 14,32 C14,27 21,19 21,19 Z" fill="#FFEE00" stroke="#000000" stroke-width="2.2" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="groovy-yellow-streak-badge">${streakCount} day streak</span>
            </div>

            <!-- Персонаж в круговом типографском штампе -->
            <div class="groovy-profile-mascot-stamp">
              ${window.ScayaMascot.renderSVG('happy', this.state.user.avatarOutfit, 78)}
              <div class="groovy-profile-user-meta">
                <span class="profile-level-pill">Level ${this.state.user.detectedLevel}${isVip ? ' • VIP' : ''}</span>
                <h3>${this.state.user.name}</h3>
                <p>${this.state.stats.xp} XP • ${pearlsLabel}</p>
              </div>
            </div>
          </div>

          <!-- 6-столбчатый разноцветный график недели Mo Tu We Th Fr Sa (как в app_ui_groovy_concept.jpg) -->
          <div class="groovy-weekly-chart-box">
            <div class="groovy-bars-row">
              <div class="groovy-bar-col">
                <div class="groovy-bar" style="height:44px;background:#1E6BFF;"></div>
                <span class="groovy-bar-day">Mo</span>
              </div>
              <div class="groovy-bar-col">
                <div class="groovy-bar" style="height:64px;background:#FF6FB5;"></div>
                <span class="groovy-bar-day">Tu</span>
              </div>
              <div class="groovy-bar-col">
                <div class="groovy-bar" style="height:52px;background:#FFEE00;"></div>
                <span class="groovy-bar-day">We</span>
              </div>
              <div class="groovy-bar-col">
                <div class="groovy-bar" style="height:78px;background:#E04F9E;"></div>
                <span class="groovy-bar-day">Th</span>
              </div>
              <div class="groovy-bar-col">
                <div class="groovy-bar" style="height:60px;background:#7EA8F8;"></div>
                <span class="groovy-bar-day">Fr</span>
              </div>
              <div class="groovy-bar-col">
                <div class="groovy-bar" style="height:92px;background:#0D7A22;"></div>
                <span class="groovy-bar-day">Sa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shop-quick-links" style="margin-bottom: 14px;">
        <button class="btn-secondary-ocean" onclick="ScayaApp.switchTab('postcards')">
          Открытки Ская для друзей
        </button>
        <button class="btn-secondary-ocean" onclick="ScayaApp.switchTab('mistakes')">
          Мои ошибки (${this.state.mistakes.length})
        </button>
      </div>

      <div class="profile-section-card ios-ipad-hub-card" style="margin-bottom: 14px;">
        <h4>📲 Scaya на iPhone и iPad (Экран «Домой» + Синхронизация)</h4>
        <p class="vip-invite-desc">
          Установи иконку <strong>Scaya</strong> прямо на домашний экран своего <strong>iPhone</strong> и <strong>iPad</strong> через Safari (без адресной строки, во весь экран и с единым облачным сохранением твоего прогресса на обоих устройствах!).
        </p>
        <div class="vip-invite-actions" style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn-primary-ocean" style="flex:1;" onclick="ScayaApp.openIosInstallModal()">
            📲 Установить на iPhone / iPad
          </button>
          <button class="btn-secondary-ocean" style="flex:1;" onclick="ScayaApp.copyIosInstallLink()">
            🔗 Скопировать ссылку для Safari
          </button>
        </div>
      </div>

      <div class="profile-section-card vip-invite-card" style="margin-bottom: 14px;">
        <h4>Тестовый VIP-доступ для подруги</h4>
        <p class="vip-invite-desc">
          Отправь подруге эту ссылку на Telegram-бота: у неё будет свой отдельный сохраняемый прогресс, безлимитные ракушки (∞) и бесконечные жизни (∞), без доступа к панели управления разработкой.
        </p>
        <div class="vip-invite-actions">
          <button class="btn-primary-ocean full-width" onclick="ScayaApp.shareVipFriendInvite()">
            Поделиться VIP-ссылкой (t.me/skyalangagent?start=vip)
          </button>
        </div>
      </div>

      <div class="profile-section-card" style="margin-bottom: 14px;">
        <h4>Друзья Ская (нажми на персонажа, чтобы услышать голос и выбрать наряд)</h4>
        <div class="friends-showcase-bar" style="margin-top: 10px;">
          ${Object.values(window.ScayaMascot.friends).map(f => {
            const eq = window.ScayaMascot.getEquippedOutfitForCharacter(f.id);
            const isSelectedChar = charFilter === f.id;
            return `
              <div class="friend-mini-card ${isSelectedChar ? 'selected-char-tab' : ''}" onclick="ScayaApp.selectWardrobeCharacter('${f.id}'); ScayaApp.greetOceanFriend('${f.id}')">
                ${window.ScayaMascot.renderFriendAvatar(f.id, 62)}
                <div class="friend-mini-name">${f.shortName}</div>
                <div class="friend-mini-role">${eq ? eq.name : f.role}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="profile-section-card">
        <div class="wardrobe-header-row">
          <h4>Гардероб Ская и его друзей</h4>
          <div class="wardrobe-char-pills">
            <button class="wardrobe-char-pill ${charFilter === 'all' ? 'active' : ''}" onclick="ScayaApp.selectWardrobeCharacter('all')">Все (${allOutfits.length})</button>
            <button class="wardrobe-char-pill ${charFilter === 'sky' ? 'active' : ''}" onclick="ScayaApp.selectWardrobeCharacter('sky')">Скай</button>
            <button class="wardrobe-char-pill ${charFilter === 'shark' ? 'active' : ''}" onclick="ScayaApp.selectWardrobeCharacter('shark')">Лулу</button>
            <button class="wardrobe-char-pill ${charFilter === 'mermaid' ? 'active' : ''}" onclick="ScayaApp.selectWardrobeCharacter('mermaid')">Мира</button>
            <button class="wardrobe-char-pill ${charFilter === 'jelly' ? 'active' : ''}" onclick="ScayaApp.selectWardrobeCharacter('jelly')">Блинки</button>
          </div>
        </div>
        <div class="outfits-grid">
          ${filteredOutfits.map(o => {
            const charId = o.characterId || 'sky';
            const friendObj = window.ScayaMascot.friends[charId] || window.ScayaMascot.friends.sky;
            const owned = this.state.user.ownedOutfits.includes(o.id);
            const currentEquipped = window.ScayaMascot.getEquippedOutfitForCharacter(charId);
            const active = currentEquipped && currentEquipped.id === o.id;
            return `
              <div class="outfit-card ${active ? 'active-outfit' : ''}">
                <div class="outfit-char-tag">${o.characterName || friendObj.name}</div>
                <div class="outfit-art-preview">
                  ${window.ScayaMascot.renderFriendAvatar(charId, 88, o.id)}
                </div>
                <div class="outfit-title">${o.name}</div>
                <div class="outfit-desc">${o.desc}</div>
                ${active
                  ? `<button class="btn-outfit-status active" disabled>Надето на ${friendObj.shortName}</button>`
                  : owned
                    ? `<button class="btn-outfit-status wear" onclick="ScayaApp.equipOutfit('${o.id}')">Надеть на ${friendObj.shortName}</button>`
                    : `<button class="btn-outfit-status buy" onclick="ScayaApp.buyOutfit('${o.id}')">${isVip ? 'Открыть бесплатно (VIP)' : `Купить за ${o.price}`}</button>`
                }
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  shareVipFriendInvite() {
    const inviteUrl = 'https://t.me/skyalangagent?start=vip';
    const shareText = 'Привет! Заходи тестировать наше приложение для изучения английского Scaya! Для тебя включён VIP-доступ: бесконечные жизни и безлимитные ракушки:';
    if (window.Telegram && window.Telegram.WebApp && typeof window.Telegram.WebApp.openTelegramLink === 'function') {
      const tgShare = `https://t.me/share/url?url=${encodeURIComponent(inviteUrl)}&text=${encodeURIComponent(shareText)}`;
      window.Telegram.WebApp.openTelegramLink(tgShare);
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(inviteUrl).catch(() => {});
    }
    this.showToast('VIP-ссылка скопирована: https://t.me/skyalangagent?start=vip');
  },

  equipOutfit(outfitId) {
    const outfit = window.ScayaMascot.outfits[outfitId];
    if (!outfit) return;
    const charId = outfit.characterId || 'sky';
    if (!this.state.user.friendOutfits) {
      this.state.user.friendOutfits = {
        sky: this.state.user.avatarOutfit || 'default',
        shark: 'lulu_default',
        mermaid: 'mira_default',
        jelly: 'blinky_default'
      };
    }
    this.state.user.friendOutfits[charId] = outfitId;
    if (charId === 'sky') {
      this.state.user.avatarOutfit = outfitId;
    }
    window.ScayaCloud.saveState(this.state);
    this.playTone('correct');
    this.renderAll();
    const friendObj = window.ScayaMascot.friends[charId] || window.ScayaMascot.friends.sky;
    this.showToast(`${friendObj.name} теперь в наряде «${outfit.name}»!`);
  },

  buyOutfit(outfitId) {
    const outfit = window.ScayaMascot.outfits[outfitId];
    if (!outfit) return;
    const isVip = Boolean(this.state.user.isVipTester || this.state.stats.unlimitedPearls);
    if (!isVip && this.state.stats.pearls < outfit.price) {
      this.showToast('Не хватает жемчужин! Загляни во вкладку Магазин');
      return;
    }
    if (!isVip) {
      this.state.stats.pearls -= outfit.price;
    } else {
      this.state.stats.pearls = 99999;
    }
    if (!this.state.user.ownedOutfits.includes(outfitId)) {
      this.state.user.ownedOutfits.push(outfitId);
    }
    const charId = outfit.characterId || 'sky';
    if (!this.state.user.friendOutfits) {
      this.state.user.friendOutfits = {
        sky: this.state.user.avatarOutfit || 'default',
        shark: 'lulu_default',
        mermaid: 'mira_default',
        jelly: 'blinky_default'
      };
    }
    this.state.user.friendOutfits[charId] = outfitId;
    if (charId === 'sky') {
      this.state.user.avatarOutfit = outfitId;
    }
    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.renderAll();
    const friendObj = window.ScayaMascot.friends[charId] || window.ScayaMascot.friends.sky;
    this.showToast(`Наряд «${outfit.name}» надет на персонажа ${friendObj.name}!`);
  },

  // --------------------------------------------------------------------------
  // МОДАЛЬНЫЕ ОКНА: ТЕОРИЯ МЁРФИ + ПОЛНЫЙ СЛОВАРЬ УРОКА, СЕРДЕЧКИ, ОНБОРДИНГ
  // --------------------------------------------------------------------------
  openTheoryModal(unitId) {
    const unit = window.ScayaCurriculum.units.find(u => u.id === unitId);
    if (!unit) return;
    const modal = document.getElementById('scaya-modal-overlay');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.innerHTML = `
      <div class="scaya-modal-sheet">
        <div class="modal-sheet-header">
          <div>
            <span class="sheet-kicker">СТРАНИЦА А • ${unit.sources.join(' • ')}</span>
            <h3 class="sheet-title">${unit.icon} ${unit.titleRu}</h3>
          </div>
          <button class="btn-close-modal" onclick="ScayaApp.closeModal()">✕</button>
        </div>

        <div class="theory-scroll-body">
          <div class="theory-sky-box">
            ${window.ScayaMascot.renderSVG('scholar', 'scholar', 64)}
            <div class="theory-sky-text">
              <strong>${unit.theory.headline}</strong>
              <p>${unit.theory.skyNote}</p>
            </div>
          </div>

          ${unit.theory.timelineComparison.map(block => `
            <div class="murphy-rule-card">
              <div class="murphy-rule-label">${block.label}</div>
              <div class="murphy-rule-example">
                <span>“${block.example}”</span>
                <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(block.example).replace(/"/g, '&quot;')})">🔊</button>
              </div>
              <div class="murphy-rule-note">${block.note}</div>
            </div>
          `).join('')}

          ${(unit.vocab && unit.vocab.length) ? `
            <div class="murphy-rule-card">
              <div class="murphy-rule-label">💎 Лексика этого урока (${unit.vocab.length} выражений):</div>
              <div class="syllabus-vocab-list">
                ${unit.vocab.map(v => `
                  <div class="syllabus-vocab-row">
                    <div>
                      <strong>${v.en}</strong> — <span>${v.ru}</span>
                      <div class="syllabus-vocab-ex">“${v.example}”</div>
                    </div>
                    <button class="btn-audio-mini" onclick="ScayaApp.speakEnglish(${JSON.stringify(v.en).replace(/"/g, '&quot;')})">🔊</button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="cambridge-secret-box">
            <strong>🎓 Совет:</strong> ${unit.theory.cambridgeTip}
          </div>
        </div>

        <button class="btn-primary-ocean full-width" onclick="ScayaApp.closeModal(); ScayaApp.startUnitLesson('${unit.id}')">
          🌊 Начать урок
        </button>
      </div>
    `;
  },

  openOnboardingModal() {
    const modal = document.getElementById('scaya-modal-overlay');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.innerHTML = `
      <div class="scaya-modal-sheet onboarding-sheet">
        ${window.ScayaMascot.renderSVG('happy', 'default', 120)}
        <span class="sheet-kicker">ДОБРО ПОЖАЛОВАТЬ В SCAYA 🐬🌸</span>
        <h2 class="onboarding-title">Привет! Я розовый дельфин Скай!</h2>
        <p class="onboarding-desc">
          На каждом уровне от A1 до C2 мы осваиваем <strong>всю необходимую грамматику, всю живую лексику и обязательное чтение</strong> вместе с русалкой Мирой 🧜‍♀️, акулёнком Лулу с бантиком 🦈🎀 и медузой Блинки 🪼!
        </p>

        <div class="onboarding-choices">
          <button class="btn-primary-ocean full-width" onclick="ScayaApp.completeOnboarding('placement')">
            📡 Точно определить мой уровень (A1 → C1)
          </button>
          <button class="btn-secondary-ocean full-width" onclick="ScayaApp.completeOnboarding('zero')">
            🏖 Начать с самого нуля (Уровень A1)
          </button>
        </div>
      </div>
    `;
  },

  completeOnboarding(choice) {
    this.state.user.onboardingDone = true;
    window.ScayaCloud.saveState(this.state);
    this.closeModal();
    if (choice === 'placement') {
      this.startPlacementTest();
    }
  },

  openHeartsModal() {
    const modal = document.getElementById('scaya-modal-overlay');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.innerHTML = `
      <div class="scaya-modal-sheet">
        <div class="modal-sheet-header">
          <h3>❤️ Сердечки жизни (${this.state.stats.hearts}/${this.state.stats.maxHearts})</h3>
          <button class="btn-close-modal" onclick="ScayaApp.closeModal()">✕</button>
        </div>
        <div class="hearts-modal-body">
          ${window.ScayaMascot.renderSVG('comforting', this.state.user.avatarOutfit, 96)}
          <p>Каждая ошибка в уроке отнимает 1 ❤️ сердечко. Пополни жизни за жемчужины или обними розового дельфина Ская!</p>
          <button class="btn-primary-ocean full-width" onclick="ScayaApp.buyFullHearts(); ScayaApp.closeModal()">
            🦪 Восстановить все жизни за 100 🦪
          </button>
          <button class="btn-secondary-ocean full-width" onclick="ScayaApp.refillHeartsFree()">
            🐬🌸 Обнять розового дельфина Ская (+5 ❤️)
          </button>
        </div>
      </div>
    `;
  },

  refillHeartsFree() {
    this.state.stats.hearts = this.state.stats.maxHearts;
    window.ScayaCloud.saveState(this.state);
    this.playTone('win');
    this.closeModal();
    this.renderTopBar();
    this.showToast('🐬🌸 Розовый дельфин Скай обнял тебя плавником! Все 5 ❤️ восстановлены!');
  },

  openStreakModal() {
    this.closeModal();
    this.switchTab('shop');
  },

  getDirectIosAppUrl() {
    try {
      const { uid, isVip } = window.ScayaCloud.getSessionIdentity();
      if (window.location && window.location.origin && /^https?:/.test(window.location.origin)) {
        const cleanPath = (window.location.pathname || '').replace(/\/index\.html$/i, '').replace(/\/+$/, '');
        return `${window.location.origin}${cleanPath}/?uid=${encodeURIComponent(uid || '542487197')}${isVip ? '&vip=1' : ''}`;
      }
      return `https://liprema.github.io/skyaeng/?uid=${encodeURIComponent(uid || '542487197')}${isVip ? '&vip=1' : ''}`;
    } catch (e) {
      return window.location ? window.location.href : 'https://liprema.github.io/skyaeng/';
    }
  },

  copyIosInstallLink() {
    const url = this.getDirectIosAppUrl();
    this.playTone('correct');
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement('textarea');
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    } catch (e) {}
    this.showToast('📲 Ссылка для Safari на iPhone и iPad скопирована! Открой её в Safari → Поделиться → На экран «Домой»!');
  },

  openIosInstallModal() {
    const modal = document.getElementById('scaya-modal-overlay');
    if (!modal) return;
    modal.classList.remove('hidden');
    const appUrl = this.getDirectIosAppUrl();
    const isStandalone = Boolean(
      (window.navigator && window.navigator.standalone === true) ||
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
    );
    const ua = (navigator && navigator.userAgent) || '';
    const isIPad = /iPad/i.test(ua) || (navigator && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const deviceLabel = isIPad ? 'iPad' : 'iPhone и iPad';

    modal.innerHTML = `
      <div class="scaya-modal-sheet">
        <div class="modal-sheet-header">
          <div>
            <span class="sheet-kicker">НАТИВНЫЙ РЕЖИМ IOS & IPADOS • CLOUD SYNC</span>
            <h3 class="sheet-title">📲 Scaya на ${deviceLabel}</h3>
          </div>
          <button class="btn-close-modal" onclick="ScayaApp.closeModal()">✕</button>
        </div>

        <div class="theory-scroll-body">
          <div class="ios-install-hero-row">
            <img src="img/apple-touch-icon.png?v=30" alt="Иконка Scaya" class="ios-install-app-icon" />
            <div class="ios-install-hero-meta">
              <strong>Scaya — Groovy English</strong>
              <span>Универсальное приложение для iPhone и iPad</span>
              <span class="ios-install-status-badge">${isStandalone ? '✓ Запущено с экрана «Домой»' : 'Готово к установке на экран «Домой»'}</span>
            </div>
          </div>

          <div class="murphy-rule-card" style="margin-top:12px;">
            <div class="murphy-rule-label">📱 1. Как добавить иконку Scaya на экран «Домой» (iPhone и iPad):</div>
            <ol class="ios-install-steps-list">
              <li>Скопируй свою персональную ссылку ниже и открой её в браузере <strong>Safari</strong> на своём <strong>iPhone</strong> или <strong>iPad</strong>.</li>
              <li>Нажми кнопку <strong>«Поделиться» (Share ⬆️)</strong> внизу экрана на iPhone (или в правом верхнем углу адресной строки на iPad).</li>
              <li>Выбери пункт <strong>«На экран „Домой“» (Add to Home Screen ➕)</strong> и нажми <strong>«Добавить»</strong>.</li>
              <li>На рабочем столе появится фирменная иконка <strong>Scaya</strong> со Скаем — приложение будет открываться на весь экран без адресной строки и синхронизировать твой прогресс между iPhone, iPad и Telegram!</li>
            </ol>
          </div>

          <div class="murphy-rule-card">
            <div class="murphy-rule-label">🔗 Твоя прямая ссылка с авто-синхронизацией прогресса:</div>
            <div class="ios-url-copy-box">${appUrl}</div>
            <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">
              <button class="btn-primary-ocean" style="flex:1;" onclick="ScayaApp.copyIosInstallLink()">
                📋 Скопировать ссылку для Safari
              </button>
            </div>
          </div>

          <div class="murphy-rule-card">
            <div class="murphy-rule-label">💻 2. Нативный проект Xcode (Universal iPhone + iPad):</div>
            <p style="font-size:13px;font-weight:700;color:#262522;line-height:1.4;">
              В папке проекта на Маке также готова нативная сборка <code>ios-app/</code> (SwiftUI + WKWebView с поддержкой iPhone и iPad, Haptic Feedback и офлайн-ресурсами) для запуска через Xcode или публикации в TestFlight / App Store.
            </p>
          </div>
        </div>
      </div>
    `;
  },

  closeModal() {
    const modal = document.getElementById('scaya-modal-overlay');
    if (modal) {
      modal.classList.add('hidden');
      modal.innerHTML = '';
    }
  },

  showToast(msg) {
    const toast = document.getElementById('scaya-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3400);
  }
};

window.ScayaApp = ScayaApp;

if (typeof document !== 'undefined' && document.readyState && document.readyState !== 'loading') {
  ScayaApp.init();
} else if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  window.addEventListener('DOMContentLoaded', () => {
    ScayaApp.init();
  });
}
