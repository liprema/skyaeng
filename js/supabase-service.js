// ============================================================================
// SCAYA CLOUD & AUTH SERVICE (Supabase + Offline-First Sync + SRS Flashcards)
// ============================================================================

window.ScayaCloud = {
  STORAGE_KEY: 'scaya_user_state_v4',
  CONFIG_KEY: 'scaya_supabase_config_v1',

  getDefaultState() {
    return {
      user: {
        id: 'local_ocean_explorer',
        name: 'Полина',
        email: '',
        authMode: 'guest',
        avatarOutfit: 'default',
        friendOutfits: {
          sky: 'default',
          shark: 'lulu_default',
          mermaid: 'mira_default',
          jelly: 'blinky_default'
        },
        ownedOutfits: ['default', 'lulu_default', 'mira_default', 'blinky_default'],
        onboardingDone: false,
        detectedLevel: 'A1',
        currentZoneId: 'lagoon_a1',
        hidePassedZones: true
      },
      stats: {
        xp: 140,
        weeklyXp: 140,
        pearls: 850,
        hearts: 5,
        maxHearts: 5,
        streakDays: 7,
        lostStreakDays: 0,
        streakFreeze: 1,
        lastActiveDate: new Date().toISOString().slice(0, 10)
      },
      unitProgress: {
        unit_a1_01: { crowns: 1, bestAccuracy: 100, unlocked: true },
        unit_a1_02: { crowns: 0, bestAccuracy: 0, unlocked: true }
      },
      flashcards: [
        {
          id: 'card_init_1',
          en: 'Look for something',
          ru: 'Искать что-либо (фразовый глагол A1)',
          example: 'Lulu is looking for her favourite pink bow.',
          unitId: 'unit_a1_01',
          box: 1,
          intervalDays: 0,
          reviewCount: 0,
          nextReviewAt: Date.now() - 1000,
          isCustom: false
        },
        {
          id: 'card_init_2',
          en: 'Afraid of (something)',
          ru: 'Бояться чего-либо (всегда с предлогом of!)',
          example: 'Don’t be afraid of making mistakes in English!',
          unitId: 'unit_a1_vocab',
          box: 2,
          intervalDays: 1,
          reviewCount: 1,
          nextReviewAt: Date.now() - 1000,
          isCustom: false
        },
        {
          id: 'card_init_3',
          en: 'Put off (until later)',
          ru: 'Откладывать на потом (= postpone, B1)',
          example: 'Never put off your English practice until tomorrow!',
          unitId: 'unit_b1_vocab',
          box: 1,
          intervalDays: 0,
          reviewCount: 0,
          nextReviewAt: Date.now() - 1000,
          isCustom: false
        },
        {
          id: 'card_init_4',
          en: 'Look forward to + V-ing',
          ru: 'Ждать с нетерпением (после to нужен герундий -ing!)',
          example: 'I look forward to swimming with you!',
          unitId: 'unit_b1_2',
          box: 1,
          intervalDays: 0,
          reviewCount: 0,
          nextReviewAt: Date.now() - 1000,
          isCustom: false
        }
      ],
      completedStories: [],
      mistakes: [
        {
          id: 'sample_m1',
          unitId: 'unit_b1_2',
          prompt: 'Mermaid Mira suggested ___ the ancient coral castle before sunset.',
          wrongAnswer: 'to visit',
          correctAnswer: 'visiting',
          explanation: 'После глагола suggest всегда используется герундий (visiting), никогда не ставится инфинитив с to!',
          badge: 'Грамматика B1 • Gerund vs Infinitive',
          createdAt: Date.now() - 3600000
        }
      ]
    };
  },

  ADMIN_CHAT_ID: '542487197',

  getSessionIdentity() {
    let uid = '542487197';
    let firstName = 'Полина';
    let isVip = false;
    try {
      if (typeof window !== 'undefined') {
        const tgUser = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user;
        const params = (window.location && window.location.search) ? new URLSearchParams(window.location.search) : null;
        const urlUid = params ? params.get('uid') : null;
        const urlVip = params ? params.get('vip') : null;
        const urlName = params ? params.get('name') : null;

        if (tgUser && tgUser.id) {
          uid = String(tgUser.id);
          firstName = tgUser.first_name || 'Гостья лагуны';
          if (uid !== this.ADMIN_CHAT_ID) {
            isVip = true;
          }
        } else if (urlUid) {
          uid = String(urlUid);
          if (uid !== this.ADMIN_CHAT_ID) {
            isVip = true;
          }
        }
        if (urlName) {
          firstName = urlName;
        }
        if (urlVip === '1' || urlVip === 'true') {
          isVip = true;
          if (uid === this.ADMIN_CHAT_ID && !urlUid) {
            uid = 'vip_friend_shared';
            if (firstName === 'Полина') firstName = 'VIP-Гостья';
          }
        }
      }
    } catch (e) {}
    return { uid, firstName, isVip };
  },

  getStorageKey() {
    const { uid } = this.getSessionIdentity();
    return uid === this.ADMIN_CHAT_ID ? this.STORAGE_KEY : `${this.STORAGE_KEY}_${uid}`;
  },

  applyVipPerksIfNeeded(state) {
    const { uid, firstName, isVip } = this.getSessionIdentity();
    if (!state || !state.user || !state.stats) return state;
    state.user.id = uid;
    if (isVip || state.user.isVipTester) {
      state.user.isVipTester = true;
      if (!state.user.name || state.user.name === 'Полина') {
        state.user.name = firstName || 'VIP-Подруга';
      }
      state.stats.unlimitedHearts = true;
      state.stats.unlimitedPearls = true;
      state.stats.pearls = 99999;
      state.stats.hearts = 5;
      state.stats.maxHearts = 5;
    }
    return state;
  },

  loadState() {
    try {
      const key = this.getStorageKey();
      const raw = localStorage.getItem(key);
      const def = this.getDefaultState();
      if (!raw) {
        return this.applyVipPerksIfNeeded(def);
      }
      const parsed = JSON.parse(raw);
      const merged = {
        ...def,
        ...parsed,
        user: { ...def.user, ...(parsed.user || {}) },
        stats: { ...def.stats, ...(parsed.stats || {}) },
        flashcards: Array.isArray(parsed.flashcards) && parsed.flashcards.length ? parsed.flashcards : def.flashcards,
        completedStories: Array.isArray(parsed.completedStories) ? parsed.completedStories : []
      };
      return this.applyVipPerksIfNeeded(merged);
    } catch (e) {
      return this.applyVipPerksIfNeeded(this.getDefaultState());
    }
  },

  saveState(state) {
    try {
      this.applyVipPerksIfNeeded(state);
      state._updatedAt = Date.now();
      const key = this.getStorageKey();
      localStorage.setItem(key, JSON.stringify(state));
      this.syncToTelegramServer(state);
      this.syncToSupabase(state);
    } catch (e) {
      console.warn('Scaya saveState warning:', e);
    }
  },

  async syncToTelegramServer(state) {
    try {
      if (typeof window !== 'undefined' && window.location && /^https?:/.test(window.location.protocol) && typeof fetch === 'function') {
        const { uid, isVip } = this.getSessionIdentity();
        await fetch(`/api/user_state?uid=${encodeURIComponent(uid)}&vip=${isVip ? '1' : '0'}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(state)
        });
      }
    } catch (e) {
      // Игнорируем при открытии локального файла file://
    }
  },

  getSupabaseConfig() {
    try {
      const raw = localStorage.getItem(this.CONFIG_KEY);
      return raw ? JSON.parse(raw) : { url: '', anonKey: '' };
    } catch (e) {
      return { url: '', anonKey: '' };
    }
  },

  saveSupabaseConfig(url, anonKey) {
    localStorage.setItem(this.CONFIG_KEY, JSON.stringify({
      url: (url || '').trim().replace(/\/$/, ''),
      anonKey: (anonKey || '').trim()
    }));
  },

  isCloudConfigured() {
    const cfg = this.getSupabaseConfig();
    return Boolean(cfg.url && cfg.anonKey);
  },

  async syncToSupabase(state) {
    const cfg = this.getSupabaseConfig();
    if (!cfg.url || !cfg.anonKey) return { synced: false, mode: 'local_cache' };

    try {
      const res = await fetch(`${cfg.url}/rest/v1/profiles?id=eq.${encodeURIComponent(state.user.id)}`, {
        method: 'PATCH',
        headers: {
          'apikey': cfg.anonKey,
          'Authorization': `Bearer ${cfg.anonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          display_name: state.user.name,
          avatar_outfit: state.user.avatarOutfit,
          current_zone_id: state.user.currentZoneId,
          xp: state.stats.xp,
          weekly_xp: state.stats.weeklyXp,
          pearls: state.stats.pearls,
          hearts: state.stats.hearts,
          streak_days: state.stats.streakDays,
          detected_cefr_level: state.user.detectedLevel,
          updated_at: new Date().toISOString()
        })
      });
      return { synced: res.ok, status: res.status };
    } catch (err) {
      return { synced: false, error: err.message };
    }
  }
};
