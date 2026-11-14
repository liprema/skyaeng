/**
 * SCAYA — Y2K / GROOVY RUBBER-HOSE STREETWEAR CARTOON MASCOT & FRIENDS
 * Полный редизайн по референсам из папки «дизайн» (app_ui_groovy_concept.jpg & dolphin_mascot_variations.jpg):
 * - Чёткий 2D-векторный контур (#000000), тёплый кремовый фон карточек (#F5F2E6)
 * - Палитра: Bubblegum Pink (#FF6FB5), Cobalt Blue (#1E6BFF), Acid Yellow (#FFEE00), Kelly Green (#0D7A22), Periwinkle (#B5C7F7)
 * - Дельфин Скай и его друзья (акулёнок Лулу, русалка Мира, медузёнок Блинки) в стиле Y2K / Groovy Streetwear Cartoon
 * - 6 уникальных сюжетных иллюстраций для историй в едином Groovy Y2K стиле
 */

window.ScayaMascot = {
  name: "Скай",
  species: "Дельфин Скай (Groovy Y2K)",

  portraits: {
    sky_default: "img/sky_default.jpg?v=36",
    sky_path_hero: "img/sky_path_hero.png?v=36",
    sky_path_a1: "img/sky_path_hero.png?v=36",
    sky_path_a2: "img/sky_path_a2.png?v=36",
    sky_path_b1: "img/sky_path_b1.png?v=36",
    sky_path_b2: "img/sky_path_b2.png?v=36",
    sky_path_c1: "img/sky_path_c1.png?v=36",
    sky_path_c2: "img/sky_path_c2.png?v=36",
    sky_scholar: "img/sky_scholar.jpg?v=36",
    sky_captain: "img/sky_captain.jpg?v=36",
    sky_royal: "img/sky_royal.jpg?v=36",
    sky_pirate: "img/sky_pirate.jpg?v=36",

    shark_lulu: "img/shark_lulu.jpg?v=36",
    friend_lulu: "img/shark_lulu.jpg?v=36",
    lulu_ballerina: "img/lulu_ballerina.jpg?v=36",
    lulu_sweater: "img/lulu_sweater.jpg?v=36",

    mermaid_mira: "img/mermaid_mira.jpg?v=36",
    friend_mira: "img/mermaid_mira.jpg?v=36",
    mira_royal: "img/mira_royal.jpg?v=36",
    mira_cozy: "img/mira_cozy.jpg?v=36",

    jelly_blinky: "img/jelly_blinky.jpg?v=36",
    friend_blinky: "img/jelly_blinky.jpg?v=36",
    blinky_gentleman: "img/blinky_gentleman.jpg?v=36",
    blinky_wizard: "img/blinky_wizard.jpg?v=36"
  },

  storyIllustrations: {
    story_1: "img/story_1.jpg?v=36",
    story_2: "img/story_2.jpg?v=36",
    story_3: "img/story_3.jpg?v=36",
    story_4: "img/story_4.jpg?v=36",
    story_5: "img/story_5.jpg?v=36",
    story_6: "img/story_6.jpg?v=36"
  },

  watercolorBgs: {
    bg_shallow: "img/bg_shallow.jpg?v=29",
    bg_reef: "img/bg_reef.jpg?v=29",
    bg_deep: "img/bg_deep.jpg?v=29"
  },

  watercolorBackgrounds: {
    shallow: "img/bg_shallow.jpg?v=29",
    reef: "img/bg_reef.jpg?v=29",
    deep: "img/bg_deep.jpg?v=29"
  },

  getBackgroundForZone(zoneId) {
    if (zoneId === "lagoon_a1" || zoneId === "shallows_a2") {
      return this.watercolorBgs.bg_shallow;
    }
    if (zoneId === "reef_b1" || zoneId === "ocean_b2") {
      return this.watercolorBgs.bg_reef;
    }
    return this.watercolorBgs.bg_deep;
  },

  // Полный гардероб Y2K / Groovy Streetwear образов для Ская, Лулу, Миры и Блинки (по референсу dolphin_mascot_variations.jpg)
  outfits: {
    default: {
      id: "default",
      characterId: "sky",
      characterName: "Дельфин Скай",
      name: "04 GROOVY HEADPHONES",
      desc: "Фирменный образ Ская в жёлто-розовых ретро-наушниках, белых перчатках и массивных кроссовках",
      price: 0,
      badge: "GROOVY",
      portraitKey: "sky_default"
    },
    scholar: {
      id: "scholar",
      characterId: "sky",
      characterName: "Дельфин Скай",
      name: "03 BOOKWORM & BOBA",
      desc: "Полосатая шапка-бини, круглые очки, любимая книга по грамматике и стаканчик матча-боба",
      price: 120,
      badge: "03 BOOKWORM",
      portraitKey: "sky_scholar"
    },
    captain: {
      id: "captain",
      characterId: "sky",
      characterName: "Дельфин Скай",
      name: "01 SKATER BUCKET HAT",
      desc: "Зелёная панама Kelly Green, розовые скейтерские кеды и волнистый Groovy-скейтборд",
      price: 200,
      badge: "01 SKATER",
      portraitKey: "sky_captain"
    },
    royal: {
      id: "royal",
      characterId: "sky",
      characterName: "Дельфин Скай",
      name: "02 Y2K STAR",
      desc: "Очки-звёзды Y2K, жёлтые наушники и колючая неоновая звезда супергероя английского",
      price: 350,
      badge: "02 Y2K STAR",
      portraitKey: "sky_royal"
    },
    pirate: {
      id: "pirate",
      characterId: "sky",
      characterName: "Дельфин Скай",
      name: "05 VARSITY BOMBER",
      desc: "Университетский зелёно-жёлтый бомбер Varsity и хайповые розовые кроссовки на платформе",
      price: 260,
      badge: "05 VARSITY",
      portraitKey: "sky_pirate"
    },

    lulu_default: {
      id: "lulu_default",
      characterId: "shark",
      characterName: "Акулёнок Лулу",
      name: "GROOVY PINK BOW",
      desc: "Фирменный розовый бантик Лулу, мультяшные белые перчатки и кроссовки Bubblegum",
      price: 0,
      badge: "LULU",
      portraitKey: "shark_lulu"
    },
    lulu_ballerina: {
      id: "lulu_ballerina",
      characterId: "shark",
      characterName: "Акулёнок Лулу",
      name: "Y2K POP DANCER",
      desc: "Розовая плиссированная мини-юбочка, гетры, ретро-наушники и цветочный вайб",
      price: 180,
      badge: "POP DANCER",
      portraitKey: "lulu_ballerina"
    },
    lulu_sweater: {
      id: "lulu_sweater",
      characterId: "shark",
      characterName: "Акулёнок Лулу",
      name: "70s WAVE KNIT & BERET",
      desc: "Вязаный свитер с волнистым паттерном 70-х, жёлтый берет, круглые очки и айс-латте",
      price: 220,
      badge: "RETRO KNIT",
      portraitKey: "lulu_sweater"
    },

    mira_default: {
      id: "mira_default",
      characterId: "mermaid",
      characterName: "Русалка Мира",
      name: "DAISY VINYL SINGER",
      desc: "Заколки-ромашки в волосах, очки-звёзды Y2K и винтажный студийный микрофон",
      price: 0,
      badge: "MIRA",
      portraitKey: "mermaid_mira"
    },
    mira_royal: {
      id: "mira_royal",
      characterId: "mermaid",
      characterName: "Русалка Мира",
      name: "Y2K STAR QUEEN",
      desc: "Золотая корона, укороченный бомбер и колючая розово-жёлтая звезда Y2K",
      price: 260,
      badge: "STAR QUEEN",
      portraitKey: "mira_royal"
    },
    mira_cozy: {
      id: "mira_cozy",
      characterId: "mermaid",
      characterName: "Русалка Мира",
      name: "MATCHA BOOK CLUB",
      desc: "Полосатая шапка-бини, уютный оверсайз-свитер, круглые очки и бабл-ти",
      price: 190,
      badge: "COZY CLUB",
      portraitKey: "mira_cozy"
    },

    blinky_default: {
      id: "blinky_default",
      characterId: "jelly",
      characterName: "Медузёнок Блинки",
      name: "ACID YELLOW BEATS",
      desc: "Кислотно-жёлтые наушники, белые перчатки с жестом Peace и розово-жёлтые сникеры",
      price: 0,
      badge: "BLINKY",
      portraitKey: "jelly_blinky"
    },
    blinky_gentleman: {
      id: "blinky_gentleman",
      characterId: "jelly",
      characterName: "Медузёнок Блинки",
      name: "COFFEE & VINYL DJ",
      desc: "Синяя панама Cobalt Blue, очки-звёзды, жёлтая бабочка и редкая виниловая пластинка",
      price: 210,
      badge: "VINYL DJ",
      portraitKey: "blinky_gentleman"
    },
    blinky_wizard: {
      id: "blinky_wizard",
      characterId: "jelly",
      characterName: "Медузёнок Блинки",
      name: "SKATE FLAME WIZARD",
      desc: "Шляпа чародея с ромашками и молниями, волнистый скейт и розовый векторный огонь",
      price: 280,
      badge: "SKATE MAGE",
      portraitKey: "blinky_wizard"
    }
  },

  friends: {
    sky: {
      id: "sky",
      name: "Дельфин Скай",
      shortName: "Скай",
      gender: "boy",
      emoji: "",
      voiceProfile: { pitch: 1.32, rate: 0.96 },
      role: "Главный герой (Y2K Vibe)",
      defaultOutfit: "default",
      defaultOutfitId: "default",
      portraitKey: "sky_default",
      color: "#FF6FB5",
      praise: "Йоу! Твой английский сегодня просто 10 из 10! Держи пятюню в белой перчатке!",
      cheerQuotes: [
        "Каждое новое слово — это новый винил в твоей коллекции!",
        "Врубай наушники, сейчас разложим эту тему по полочкам за пару минут!",
        "Ошибся? Вообще чилл! Сейчас разберём правило и полетим дальше на скейте!"
      ]
    },
    shark: {
      id: "shark",
      name: "Акулёнок Лулу",
      shortName: "Лулу",
      gender: "girl",
      emoji: "",
      voiceProfile: { pitch: 1.42, rate: 0.95 },
      role: "Добрая модница с бантиком",
      defaultOutfit: "lulu_default",
      defaultOutfitId: "lulu_default",
      portraitKey: "shark_lulu",
      color: "#FF6FB5",
      praise: "Вау! Мой розовый бантик и новые кеды подпрыгнули от восторга! Ты щёлкаешь времена как орешки!",
      cheerQuotes: [
        "Я щёлкаю сложные правила Мёрфи быстрее, чем пью свой утренний айс-латте!",
        "Посмотри, какой у нас сегодня стиль! А у тебя — самый красивый английский!",
        "Ты сегодня настоящая Main Character нашего курса!"
      ]
    },
    mermaid: {
      id: "mermaid",
      name: "Русалка Мира",
      shortName: "Мира",
      gender: "girl",
      emoji: "",
      voiceProfile: { pitch: 1.25, rate: 0.92 },
      role: "Хранительница историй и винила",
      defaultOutfit: "mira_default",
      defaultOutfitId: "mira_default",
      portraitKey: "mermaid_mira",
      color: "#1E6BFF",
      praise: "Твоё произношение звучит как редкая виниловая пластинка в нашей кофейне Coffee & Vinyl!",
      cheerQuotes: [
        "В разделе Stories тебя ждут 6 новых сюжетов с нашей командой!",
        "С каждой новой темой ты понимаешь живую английскую речь без субтитров!",
        "Двигайся в своём ритме — мы со Скаем и Лулу всегда рядом!"
      ]
    },
    jelly: {
      id: "jelly",
      name: "Медузёнок Блинки",
      shortName: "Блинки",
      gender: "boy",
      emoji: "",
      voiceProfile: { pitch: 1.38, rate: 0.98 },
      role: "Диджей и фанат грамматики",
      defaultOutfit: "blinky_default",
      defaultOutfitId: "blinky_default",
      portraitKey: "jelly_blinky",
      color: "#FFEE00",
      praise: "Вжух! От твоих правильных ответов в моих наушниках заиграл самый бодрый фанк!",
      cheerQuotes: [
        "Чем выше уровень — от A1 до C2 — тем круче биты мы ставим на пластинку!",
        "Мои кроссовки уже готовы бежать к следующему подарку на карте!",
        "Ты не боишься даже самых каверзных ловушек Кембриджа!"
      ]
    }
  },

  quotes: {
    welcome: [
      "Хей! Я дельфин Скай! Запрыгивай на нашу розовую волнистую дорожку Level Path!",
      "Акулёнок Лулу, русалка Мира и медузёнок Блинки уже ждут тебя в новых историях Coffee & Vinyl!",
      "Нажимай на любое незнакомое английское слово в уроке — я сразу покажу перевод и сохраню его в твои карточки!"
    ],
    correct: [
      "Чистый дофамин! Твой английский звучит всё увереннее!",
      "Лулу, Мира и Блинки ставят тебе максимальный респект!",
      "В самое яблочко! Двигаем к следующей звезде на дорожке!"
    ],
    mistake: [
      "Всё на чилле! На ошибках прокачиваются самые крутые спикеры!",
      "Давай глянем короткий разбор правила и возьмём этот раунд!"
    ]
  },

  viralPostcards: [
    {
      id: "card_hug",
      category: "Groovy вайб для друзей",
      mood: "love",
      outfit: "default",
      skyTitle: "Main Character Energy на 100%",
      skyText: "Другие приложения пугают тебя по ночам, если ты пропустил урок. А я просто включил тебе лоу-фай на виниле и жду, когда ты выспишься!",
      bgGradient: ["#FF6FB5", "#1E6BFF"]
    },
    {
      id: "card_present_perfect",
      category: "Жиза про грамматику",
      mood: "happy",
      outfit: "scholar",
      skyTitle: "Ты и Present Perfect — лучшая пара сезона",
      skyText: "Рэймонд Мёрфи лично заглянул в наш книжный клуб, взял матча-боба и сказал, что твой английский — это просто космос!",
      bgGradient: ["#1E6BFF", "#0D7A22"]
    },
    {
      id: "card_mistake",
      category: "Поддержка без токсичности",
      mood: "gentle",
      outfit: "captain",
      skyTitle: "Ошибиться в артикле — это просто трюк на скейте",
      skyText: "Ну перепутал a и the, и что? Скейт-парк от этого не закрылся! Держи краба, сейчас за 20 секунд всё разберём.",
      bgGradient: ["#0D7A22", "#FF6FB5"]
    },
    {
      id: "card_streak",
      category: "Забота о стрик-огоньке",
      mood: "proud",
      outfit: "royal",
      skyTitle: "Твой стрик сияет ярче звезды Y2K",
      skyText: "Даже если у тебя был загруженный день — загляни на 2 минутки, мы с Лулу, Мирой и Блинки уже заварили кофе и поставили новую пластинку!",
      bgGradient: ["#FF6FB5", "#FFEE00"]
    },
    {
      id: "card_c1",
      category: "Комплимент дня",
      mood: "excited",
      outfit: "pirate",
      skyTitle: "Осторожно: твой английский слишком стильный!",
      skyText: "Когда ты собираешь предложение без единой подсказки, дельфин Скай в своём бомбере Varsity показывает тебе двойной Peace!",
      bgGradient: ["#1E6BFF", "#FF6FB5"]
    }
  ],

  getSpeech(context, extra = "") {
    const speeches = {
      welcome: [
        "Хей! Я дельфин Скай! Погнали по нашей розовой дорожке Level Path за новыми словами и подарками!",
        "Как же круто тебя видеть! Лулу, Мира и Блинки уже приготовили для тебя новые сюжеты в разделе Stories!",
        "Нажимай на любое слово в уроке — я сразу озвучу его и добавлю в твои карточки Main Character!"
      ],
      correct: [
        "Йоу! Чистый дофамин! Держи пятюню в мультяшной перчатке!",
        "В самое яблочко! Кембриджский экзаменатор сейчас снял шляпу!",
        "Гениально! Лулу и Блинки врубают фанк в твою честь!",
        "Идеально! Ты чувствуешь живой английский всё круче!"
      ],
      wrong: [
        "Эй, всё супер! Ошибка — это просто повод заглянуть в шпаргалку. Смотри разбор ниже!",
        "Не переживай ни секунды! Даже профи иногда сверяются с правилом. Сейчас всё разложим по полочкам.",
        "Обнимаю! Давай глянем короткое объяснение — со второго дубля возьмём легко!"
      ],
      lessonWin: [
        "УРА! Звезда на Level Path взята! Я, Мира, Лулу и Блинки празднуем твою победу!",
        "Ты суперзвезда! Ещё один уровень позади, а новые слова уже ждут тебя в разделе Cards!"
      ]
    };
    const pool = speeches[context] || speeches.welcome;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    return extra ? chosen + " " + extra : chosen;
  },

  // === GROOVY Y2K ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ ПО РЕФЕРЕНСУ app_ui_groovy_concept.jpg ===

  // Улыбающаяся 6-лепестковая ромашка в стиле 70s/Y2K с круговой типографикой вокруг неё
  renderGroovyDaisyStamp(petalColor = "#FF6FB5", size = 68, stampText = "• SCAYA VIBE • ENGLISH FLOW ") {
    const uid = "stamp_" + Math.random().toString(36).slice(2, 8);
    return `
      <svg viewBox="0 0 120 120" width="${size}" height="${size}" class="groovy-daisy-stamp-svg" style="overflow:visible;flex-shrink:0;">
        <defs>
          <path id="${uid}" d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
        </defs>
        <g class="groovy-stamp-spin">
          <text fill="#000000" font-size="9.5" font-weight="900" font-family="'Nunito', sans-serif" letter-spacing="1.6">
            <textPath href="#${uid}">${stampText}</textPath>
          </text>
        </g>
        <!-- 6 лепестков ромашки -->
        <g transform="translate(60,60)">
          <ellipse cx="0" cy="-21" rx="11" ry="15" fill="${petalColor}" stroke="#000000" stroke-width="3"/>
          <ellipse cx="0" cy="-21" rx="11" ry="15" fill="${petalColor}" stroke="#000000" stroke-width="3" transform="rotate(60)"/>
          <ellipse cx="0" cy="-21" rx="11" ry="15" fill="${petalColor}" stroke="#000000" stroke-width="3" transform="rotate(120)"/>
          <ellipse cx="0" cy="-21" rx="11" ry="15" fill="${petalColor}" stroke="#000000" stroke-width="3" transform="rotate(180)"/>
          <ellipse cx="0" cy="-21" rx="11" ry="15" fill="${petalColor}" stroke="#000000" stroke-width="3" transform="rotate(240)"/>
          <ellipse cx="0" cy="-21" rx="11" ry="15" fill="${petalColor}" stroke="#000000" stroke-width="3" transform="rotate(300)"/>
          <!-- Жёлтая улыбающаяся серединка -->
          <circle cx="0" cy="0" r="14" fill="#FFEE00" stroke="#000000" stroke-width="3"/>
          <path d="M-6,-2 Q-4,-6 -2,-2" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M2,-2 Q4,-6 6,-2" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M-6,3 Q0,9 6,3" fill="none" stroke="#000000" stroke-width="2.4" stroke-linecap="round"/>
        </g>
      </svg>
    `;
  },

  // Волнистые ленты-сквигглы в углах карточек (розовые #FF6FB5 или жёлтые #FFD800)
  renderGroovyCornerSquiggles(color = "#FF6FB5", corner = "top-left") {
    const transformMap = {
      "top-left": "",
      "top-right": "scale(-1, 1)",
      "bottom-left": "scale(1, -1)",
      "bottom-right": "scale(-1, -1)"
    };
    const tf = transformMap[corner] || "";
    return `
      <svg viewBox="0 0 110 80" width="96" height="70" class="groovy-corner-squiggle ${corner}" style="transform:${tf};pointer-events:none;">
        <path d="M-6,18 Q18,4 28,22 T58,20 T88,8" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
        <path d="M-6,38 Q22,20 34,40 T70,36 T102,18" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
        <path d="M-4,58 Q16,44 26,60 T58,56" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
      </svg>
    `;
  },

  // Плоские векторные коробки с подарками вдоль розовой дорожки Level Path (из app_ui_groovy_concept.jpg)
  renderGroovyGiftBoxSVG(variant = "yellow_pink", size = 54) {
    const isBlue = variant === "blue_red";
    const boxFill = isBlue ? "#1E6BFF" : "#FFEE00";
    const lidFill = isBlue ? "#1E6BFF" : "#FFEE00";
    const ribbonFill = isBlue ? "#FF4D4D" : "#FF6FB5";
    return `
      <svg viewBox="0 0 68 68" width="${size}" height="${size}" class="groovy-gift-svg" style="overflow:visible;">
        <!-- Тень под подарком -->
        <ellipse cx="34" cy="61" rx="22" ry="5" fill="rgba(0,0,0,0.14)"/>
        <!-- Бант сверху -->
        <path d="M34,20 C22,6 10,14 20,23 C25,26 31,23 34,20 Z" fill="${ribbonFill}" stroke="#000000" stroke-width="2.8" stroke-linejoin="round"/>
        <path d="M34,20 C46,6 58,14 48,23 C43,26 37,23 34,20 Z" fill="${ribbonFill}" stroke="#000000" stroke-width="2.8" stroke-linejoin="round"/>
        <!-- Основной корпус коробки -->
        <rect x="13" y="29" width="42" height="29" rx="5" fill="${boxFill}" stroke="#000000" stroke-width="2.8"/>
        <!-- Вертикальная лента -->
        <rect x="29" y="29" width="10" height="29" fill="${ribbonFill}" stroke="#000000" stroke-width="2.8"/>
        <!-- Горизонтальная лента -->
        <rect x="13" y="40" width="42" height="8" fill="${ribbonFill}" stroke="#000000" stroke-width="2.8"/>
        <!-- Крышка коробки -->
        <rect x="10" y="20" width="48" height="10" rx="4" fill="${lidFill}" stroke="#000000" stroke-width="2.8"/>
        <rect x="29" y="20" width="10" height="10" fill="${ribbonFill}" stroke="#000000" stroke-width="2.8"/>
      </svg>
    `;
  },

  // Die-cut стикеры для витрины магазина Shop (Streak Freeze, Heart Refills, Gem Packs) из app_ui_groovy_concept.jpg
  renderShopStickerSVG(type = "freeze", size = 66) {
    if (type === "freeze") {
      return `
        <svg viewBox="0 0 80 80" width="${size}" height="${size}" class="groovy-shop-sticker">
          <!-- Белая die-cut обводка стикера с чёрным контуром -->
          <circle cx="40" cy="40" r="34" fill="#FFFFFF" stroke="#000000" stroke-width="2.8"/>
          <g stroke="#38BDF8" stroke-width="5.5" stroke-linecap="round">
            <line x1="40" y1="14" x2="40" y2="66"/>
            <line x1="17" y1="27" x2="63" y2="53"/>
            <line x1="17" y1="53" x2="63" y2="27"/>
          </g>
          <g stroke="#000000" stroke-width="2.4" stroke-linecap="round" fill="none">
            <line x1="40" y1="14" x2="40" y2="66"/>
            <line x1="17" y1="27" x2="63" y2="53"/>
            <line x1="17" y1="53" x2="63" y2="27"/>
            <polyline points="33,20 40,26 47,20"/>
            <polyline points="33,60 40,54 47,60"/>
            <polyline points="20,35 27,33 25,25"/>
            <polyline points="60,45 53,47 55,55"/>
            <polyline points="25,55 27,47 20,45"/>
            <polyline points="55,25 53,33 60,35"/>
          </g>
          <circle cx="40" cy="40" r="6" fill="#B5C7F7" stroke="#000000" stroke-width="2.4"/>
        </svg>
      `;
    }
    if (type === "heart") {
      return `
        <svg viewBox="0 0 80 80" width="${size}" height="${size}" class="groovy-shop-sticker">
          <path d="M40,68 C40,68 10,49 10,28 C10,16 20,10 29,10 C35,10 39,14 40,17 C41,14 45,10 51,10 C60,10 70,16 70,28 C70,49 40,68 40,68 Z" fill="#FFFFFF" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
          <path d="M40,61 C40,61 16,45 16,28 C16,19 23,15 30,15 C35,15 38,18 40,22 C42,18 45,15 50,15 C57,15 64,19 64,28 C64,45 40,61 40,61 Z" fill="#FF6FB5" stroke="#000000" stroke-width="2.8" stroke-linejoin="round"/>
          <path d="M24,24 C24,20 28,19 31,20" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
    }
    // gems (Kelly green + Bubblegum pink diamonds)
    return `
      <svg viewBox="0 0 84 80" width="${size}" height="${size}" class="groovy-shop-sticker">
        <rect x="6" y="10" width="72" height="60" rx="22" fill="#FFFFFF" stroke="#000000" stroke-width="2.8"/>
        <!-- Большой зелёный кристалл слева -->
        <polygon points="32,16 48,34 32,62 16,34" fill="#0D7A22" stroke="#000000" stroke-width="2.6" stroke-linejoin="round"/>
        <polyline points="16,34 32,38 48,34" fill="none" stroke="#000000" stroke-width="2"/>
        <line x1="32" y1="16" x2="32" y2="62" stroke="#000000" stroke-width="2"/>
        <!-- Розовый кристалл справа -->
        <polygon points="57,24 69,38 57,58 45,38" fill="#FF6FB5" stroke="#000000" stroke-width="2.6" stroke-linejoin="round"/>
        <polyline points="45,38 57,41 69,38" fill="none" stroke="#000000" stroke-width="2"/>
      </svg>
    `;
  },

  // 12-лучевая колючая звезда Y2K для кнопок уровней Level Path (разные цвета под каждый уровень A1–C2)
  renderSpikyStarburstSVG(label = "1", variant = "yellow", size = 82) {
    const colorMap = {
      yellow: "#FFEE00",
      pink: "#FF6FB5",
      blue: "#B5C7F7",
      mint: "#6EE7B7",
      lilac: "#D8B4FE",
      coral: "#FFA07A",
      locked: "#E8E3D3"
    };
    const fill = colorMap[variant] || "#FFEE00";
    const textColor = variant === "locked" ? "#6E6A5E" : "#000000";
    const pts = [];
    const spikes = 12;
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? 46 : 29;
      const angle = (i * Math.PI) / spikes - Math.PI / 2;
      const x = (50 + r * Math.cos(angle)).toFixed(1);
      const y = (50 + r * Math.sin(angle)).toFixed(1);
      pts.push(`${x},${y}`);
    }
    return `
      <svg viewBox="0 0 100 100" width="${size}" height="${size}" class="groovy-starburst-node-svg" style="overflow:visible;display:block;">
        <polygon points="${pts.join(" ")}" fill="${fill}" stroke="#000000" stroke-width="2.8" stroke-linejoin="round"/>
        <text x="50" y="58" text-anchor="middle" fill="${textColor}" font-family="'Nunito', sans-serif" font-weight="900" font-size="26">${label}</text>
      </svg>
    `;
  },

  // Дельфин Скай с 100% прозрачным фоном (PNG без квадратной рамки!) — на каждом уровне (A1–C2) своя поза и свой прикид!
  renderPathStandingMascot(widthPx = 126, zoneId = "lagoon_a1") {
    const poseByZone = {
      lagoon_a1: {
        src: this.portraits.sky_path_a1 || this.portraits.sky_path_hero,
        w: widthPx,
        h: Math.round(widthPx * (253 / 177)),
        alt: "Скай A1 — ретро-наушники и кроссовки"
      },
      shallows_a2: {
        src: this.portraits.sky_path_a2 || this.portraits.sky_path_hero,
        w: Math.round(widthPx * 1.06),
        h: Math.round(widthPx * 1.38),
        alt: "Скай A2 — зелёная панама Skater и волнистый скейтборд"
      },
      reef_b1: {
        src: this.portraits.sky_path_b1 || this.portraits.sky_path_hero,
        w: Math.round(widthPx * 1.08),
        h: Math.round(widthPx * 1.18),
        alt: "Скай B1 — шапка-бини Bookworm, круглые очки, книга и матча-боба"
      },
      ocean_b2: {
        src: this.portraits.sky_path_b2 || this.portraits.sky_path_hero,
        w: Math.round(widthPx * 1.05),
        h: Math.round(widthPx * 1.35),
        alt: "Скай B2 — Coffee & Vinyl DJ в жёлтых наушниках с пластинкой и кофе"
      },
      trench_c1: {
        src: this.portraits.sky_path_c1 || this.portraits.sky_path_hero,
        w: Math.round(widthPx * 1.02),
        h: Math.round(widthPx * 1.48),
        alt: "Скай C1 — университетский бомбер Varsity и сникеры на платформе"
      },
      twilight_c1: {
        src: this.portraits.sky_path_c1 || this.portraits.sky_path_hero,
        w: Math.round(widthPx * 1.02),
        h: Math.round(widthPx * 1.48),
        alt: "Скай C1 — университетский бомбер Varsity и сникеры на платформе"
      },
      atlantis_c2: {
        src: this.portraits.sky_path_c2 || this.portraits.sky_path_hero,
        w: Math.round(widthPx * 1.12),
        h: Math.round(widthPx * 1.15),
        alt: "Скай C2 — Y2K Star в очках-звёздах и колючей неоновой звезде"
      },
      abyss_c2: {
        src: this.portraits.sky_path_c2 || this.portraits.sky_path_hero,
        w: Math.round(widthPx * 1.12),
        h: Math.round(widthPx * 1.15),
        alt: "Скай C2 — Y2K Star в очках-звёздах и колючей неоновой звезде"
      }
    };
    const cfg = poseByZone[zoneId] || poseByZone.lagoon_a1;
    return `
      <div class="groovy-path-standing-sky" style="width:${cfg.w}px;height:${cfg.h}px;pointer-events:auto;background:transparent;">
        <img src="${cfg.src}" alt="${cfg.alt}" decoding="sync" fetchpriority="high" style="width:100%;height:100%;object-fit:contain;display:block;background:transparent;" />
      </div>
    `;
  },

  // 4-лучевая искорка Y2K (✦) с чёрным контуром для акцентов фона
  renderGroovySparkleSVG(fill = "#FFEE00", size = 26) {
    return `
      <svg viewBox="0 0 40 40" width="${size}" height="${size}" style="overflow:visible;display:block;pointer-events:none;">
        <path d="M20,2 Q20,20 38,20 Q20,20 20,38 Q20,20 2,20 Q20,20 20,2 Z" fill="${fill}" stroke="#000000" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `;
  },

  // Маленький цветок-ромашка 70s без кругового текста для акцентов фона
  renderMiniGroovyFlowerSVG(petalColor = "#FF6FB5", size = 38) {
    return `
      <svg viewBox="0 0 80 80" width="${size}" height="${size}" style="overflow:visible;display:block;pointer-events:none;">
        <g transform="translate(40,40)">
          <ellipse cx="0" cy="-18" rx="9.5" ry="13" fill="${petalColor}" stroke="#000000" stroke-width="2.6"/>
          <ellipse cx="0" cy="-18" rx="9.5" ry="13" fill="${petalColor}" stroke="#000000" stroke-width="2.6" transform="rotate(60)"/>
          <ellipse cx="0" cy="-18" rx="9.5" ry="13" fill="${petalColor}" stroke="#000000" stroke-width="2.6" transform="rotate(120)"/>
          <ellipse cx="0" cy="-18" rx="9.5" ry="13" fill="${petalColor}" stroke="#000000" stroke-width="2.6" transform="rotate(180)"/>
          <ellipse cx="0" cy="-18" rx="9.5" ry="13" fill="${petalColor}" stroke="#000000" stroke-width="2.6" transform="rotate(240)"/>
          <ellipse cx="0" cy="-18" rx="9.5" ry="13" fill="${petalColor}" stroke="#000000" stroke-width="2.6" transform="rotate(300)"/>
          <circle cx="0" cy="0" r="11.5" fill="#FFEE00" stroke="#000000" stroke-width="2.6"/>
          <circle cx="-3.5" cy="-2" r="1.6" fill="#000000"/>
          <circle cx="3.5" cy="-2" r="1.6" fill="#000000"/>
          <path d="M-4.5,2.5 Q0,6.5 4.5,2.5" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/>
        </g>
      </svg>
    `;
  },

  // Полноэкранные фоновые акценты Groovy Y2K без внутренней рамки (от края до края экрана)
  renderLevelPathBackgroundAccents(zoneId = "lagoon_a1") {
    const accentThemes = {
      lagoon_a1:   { ribbon1: "#FFEE00", ribbon2: "#B5C7F7", flower1: "#FF6FB5", flower2: "#B5C7F7" },
      shallows_a2: { ribbon1: "#FF6FB5", ribbon2: "#6EE7B7", flower1: "#FFEE00", flower2: "#FF6FB5" },
      reef_b1:     { ribbon1: "#FFEE00", ribbon2: "#FF6FB5", flower1: "#B5C7F7", flower2: "#FFEE00" },
      ocean_b2:    { ribbon1: "#FFEE00", ribbon2: "#B5C7F7", flower1: "#6EE7B7", flower2: "#FF6FB5" },
      trench_c1:   { ribbon1: "#FFEE00", ribbon2: "#D8B4FE", flower1: "#FF6FB5", flower2: "#D8B4FE" },
      twilight_c1: { ribbon1: "#FFEE00", ribbon2: "#D8B4FE", flower1: "#FF6FB5", flower2: "#D8B4FE" },
      atlantis_c2: { ribbon1: "#FFEE00", ribbon2: "#B5C7F7", flower1: "#FFA07A", flower2: "#FF6FB5" },
      abyss_c2:    { ribbon1: "#FFEE00", ribbon2: "#B5C7F7", flower1: "#FFA07A", flower2: "#FF6FB5" }
    };
    const t = accentThemes[zoneId] || accentThemes.lagoon_a1;
    return `
      <div class="groovy-path-bg-accents" aria-hidden="true">
        <!-- Мягкие тёплые цветовые ореолы от края до края экрана -->
        <div class="groovy-bg-aura aura-pink" style="left:-40px;top:110px;width:220px;height:220px;"></div>
        <div class="groovy-bg-aura aura-yellow" style="right:-35px;top:270px;width:230px;height:230px;"></div>
        <div class="groovy-bg-aura aura-blue" style="left:-30px;top:560px;width:220px;height:220px;"></div>
        <div class="groovy-bg-aura aura-pink" style="right:-40px;top:860px;width:220px;height:220px;"></div>

        <!-- Волнистые ретро-ленты по самым краям экрана -->
        <div style="position:absolute;left:-6px;top:76px;opacity:0.92;">
          ${this.renderGroovyCornerSquiggles(t.ribbon1, "top-left")}
        </div>
        <div style="position:absolute;left:-8px;top:236px;opacity:0.9;">
          ${this.renderGroovyCornerSquiggles(t.ribbon2, "top-left")}
        </div>
        <div style="position:absolute;right:-6px;top:546px;opacity:0.9;">
          ${this.renderGroovyCornerSquiggles(t.ribbon1, "top-right")}
        </div>
        <div style="position:absolute;left:-6px;top:860px;opacity:0.9;">
          ${this.renderGroovyCornerSquiggles(t.flower1, "top-left")}
        </div>
        <div style="position:absolute;right:-6px;top:1145px;opacity:0.9;">
          ${this.renderGroovyCornerSquiggles(t.ribbon2, "bottom-right")}
        </div>

        <!-- Улыбающиеся ромашки 70s и искры Y2K в свободных карманах изгибов -->
        <div style="position:absolute;left:14px;top:248px;transform:rotate(-12deg);">
          ${this.renderMiniGroovyFlowerSVG(t.flower1, 42)}
        </div>
        <div style="position:absolute;left:64px;top:230px;">
          ${this.renderGroovySparkleSVG("#FFEE00", 22)}
        </div>

        <div style="position:absolute;right:16px;top:154px;">
          ${this.renderGroovySparkleSVG("#1E6BFF", 24)}
        </div>

        <div style="position:absolute;left:12px;top:596px;transform:rotate(8deg);">
          ${this.renderGroovyDaisyStamp(t.flower2, 64, "• SCAYA VIBE • ENGLISH FLOW ")}
        </div>

        <div style="position:absolute;right:16px;top:760px;transform:rotate(10deg);">
          ${this.renderMiniGroovyFlowerSVG(t.flower1, 40)}
        </div>
        <div style="position:absolute;right:64px;top:748px;">
          ${this.renderGroovySparkleSVG("#FFEE00", 22)}
        </div>

        <div style="position:absolute;left:18px;top:905px;">
          ${this.renderGroovySparkleSVG("#1E6BFF", 26)}
        </div>

        <div style="position:absolute;right:14px;top:998px;transform:rotate(-8deg);">
          ${this.renderMiniGroovyFlowerSVG(t.flower2, 42)}
        </div>
        <div style="position:absolute;left:20px;top:1138px;transform:rotate(-10deg);">
          ${this.renderMiniGroovyFlowerSVG(t.flower1, 38)}
        </div>
      </div>
    `;
  },

  renderWatercolorCreatureSVG(type) {
    return this.renderGroovyGiftBoxSVG(type === "sea_turtle" ? "blue_red" : "yellow_pink", 48);
  },

  renderWatercolorScene(zoneOrder = 1) {
    return "";
  },

  getEquippedOutfitForCharacter(friendId = "sky") {
    const f = this.friends[friendId] || this.friends.sky;
    try {
      if (window.ScayaApp && window.ScayaApp.state && window.ScayaApp.state.user) {
        const u = window.ScayaApp.state.user;
        if (u.friendOutfits && u.friendOutfits[friendId] && this.outfits[u.friendOutfits[friendId]]) {
          return this.outfits[u.friendOutfits[friendId]];
        }
        if (friendId === "sky" && u.avatarOutfit && this.outfits[u.avatarOutfit]) {
          return this.outfits[u.avatarOutfit];
        }
      }
    } catch (e) {}
    return this.outfits[f.defaultOutfit] || this.outfits.default;
  },

  renderFriendAvatar(friendId = "mermaid", size = 64, outfitOverride = null) {
    const f = this.friends[friendId] || this.friends.sky;
    const outfitObj = (outfitOverride && this.outfits[outfitOverride])
      ? this.outfits[outfitOverride]
      : this.getEquippedOutfitForCharacter(friendId);
    const imgSrc = (outfitObj && this.portraits[outfitObj.portraitKey])
      || this.portraits[f.portraitKey]
      || this.portraits.sky_default;

    const radiusPx = Math.max(14, Math.round(size * 0.24));

    return `
      <div class="gouache-friend-avatar friend-${friendId}" style="width:${size}px;height:${size}px;position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">
        <div style="width:${size}px;height:${size}px;border-radius:${radiusPx}px;overflow:hidden;border:2.2px solid #000000;background:#F5F2E6;">
          <img src="${imgSrc}" alt="${f.name}" style="width:100%;height:100%;object-fit:cover;display:block;" />
        </div>
      </div>
    `;
  },

  renderSVG(mood = "happy", outfit = "default", size = 90) {
    const outfitObj = this.outfits[outfit] || this.getEquippedOutfitForCharacter("sky") || this.outfits.default;
    const imgSrc = this.portraits[outfitObj.portraitKey] || this.portraits.sky_default;
    const radiusPx = Math.max(16, Math.round(size * 0.24));

    return `
      <div class="scaya-pink-dolphin-avatar mood-${mood} skin-${outfitObj.id}" style="width:${size}px;height:${size}px;position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">
        <div style="width:${size}px;height:${size}px;border-radius:${radiusPx}px;overflow:hidden;border:2.2px solid #000000;background:#F5F2E6;">
          <img src="${imgSrc}" alt="${outfitObj.name}" style="width:100%;height:100%;object-fit:cover;display:block;" />
        </div>
      </div>
    `;
  },

  // Минималистичные сюжетные иллюстрации историй на чистом кремовом фоне #F5F2E6
  resolveStoryKey(storyId = "story_1") {
    const sid = String(storyId || "story_1");
    if (this.storyIllustrations[sid]) return sid;
    if (sid.includes("_a2_")) return "story_4";
    if (sid.includes("_b1_")) return "story_2";
    if (sid.includes("_b2_")) return "story_5";
    if (sid.includes("_c1_")) return "story_3";
    if (sid.includes("_c2_")) return "story_6";
    return "story_1";
  },

  renderStoryIllustration(storyId = "story_1", size = 96, isBanner = false) {
    const key = this.resolveStoryKey(storyId);
    const imgSrc = this.storyIllustrations[key] || this.storyIllustrations.story_1;
    if (isBanner) {
      return `
        <div class="gouache-story-banner" style="width:100%;height:${size}px;border-radius:18px;overflow:hidden;border:2px solid #000000;background:#F5F2E6;position:relative;display:flex;align-items:center;justify-content:center;">
          <img src="${imgSrc}" alt="Сюжет истории" style="width:100%;height:100%;object-fit:contain;display:block;" />
        </div>
      `;
    }
    const radiusPx = Math.max(14, Math.round(size * 0.18));
    return `
      <div class="gouache-story-art" style="width:${size}px;height:${size}px;border-radius:${radiusPx}px;overflow:hidden;border:2px solid #000000;background:#F5F2E6;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
        <img src="${imgSrc}" alt="Сюжет истории" style="width:100%;height:100%;object-fit:contain;display:block;" />
      </div>
    `;
  },

  // Дополнительные сюжетные карточки с картинками внутри интерактивных историй и чтения в уроках
  renderReadingInlineScene(contextId = "story_1", sceneIndex = 0) {
    const resolvedId = this.resolveStoryKey(contextId);
    const storyScenesMap = {
      story_1: [
        { leftImg: this.portraits.shark_lulu, rightImg: this.portraits.sky_default, badge: "SCENE 02 • LULU & SKY", caption: "Лулу и Скай ищут пропавший розовый бантик среди кораллов" },
        { leftImg: this.portraits.jelly_blinky, rightImg: this.portraits.lulu_ballerina, badge: "SCENE 03 • FOUND IT!", caption: "Блинки находит бантик Лулу на высокой морской веточке!" }
      ],
      story_2: [
        { leftImg: this.portraits.blinky_gentleman, rightImg: this.storyIllustrations.story_2, badge: "SCENE 02 • COFFEE & VINYL", caption: "DJ Блинки ставит редкую виниловую пластинку и угощает какао" },
        { leftImg: this.portraits.mermaid_mira, rightImg: this.portraits.lulu_sweater, badge: "SCENE 03 • COZY VIBES", caption: "Мира и Лулу поют под тёплый свет неоновых фонариков кафе" }
      ],
      story_3: [
        { leftImg: this.portraits.mira_royal, rightImg: this.portraits.sky_scholar, badge: "SCENE 02 • ANCIENT RIDDLE", caption: "Мира и Скай расшифровывают древнюю надпись на колонне Атлантиды" },
        { leftImg: this.portraits.sky_royal, rightImg: this.portraits.blinky_wizard, badge: "SCENE 03 • GOLDEN CROWN", caption: "Сияющая золотая корона Атлантиды открывает тайный зал!" }
      ],
      story_4: [
        { leftImg: this.portraits.sky_captain, rightImg: this.portraits.shark_lulu, badge: "SCENE 02 • SKATE PARK", caption: "Скай в зелёной панаме и Лулу мчатся на волнистых скейтах" },
        { leftImg: this.storyIllustrations.story_4, rightImg: this.portraits.blinky_default, badge: "SCENE 03 • BONUS BOX", caption: "Друзья находят заветный подарок с сокровищами рифа!" }
      ],
      story_5: [
        { leftImg: this.portraits.mermaid_mira, rightImg: this.portraits.blinky_gentleman, badge: "SCENE 02 • SOUNDCHECK", caption: "Мира у микрофона, а Блинки за пультом крутит винил" },
        { leftImg: this.portraits.sky_pirate, rightImg: this.portraits.lulu_ballerina, badge: "SCENE 03 • MAIN STAGE", caption: "Скай в бомбере Varsity и Лулу зажигают на главной сцене!" }
      ],
      story_6: [
        { leftImg: this.portraits.sky_scholar, rightImg: this.portraits.mira_cozy, badge: "SCENE 02 • MATCHA CLUB", caption: "Скай и Мира разбирают примеры с чашечкой матча-боба" },
        { leftImg: this.portraits.blinky_wizard, rightImg: this.storyIllustrations.story_6, badge: "SCENE 03 • MASTER LEVEL", caption: "Книжный клуб Ская открывает секреты продвинутого английского!" }
      ]
    };

    const list = storyScenesMap[resolvedId] || storyScenesMap.story_1;
    const item = list[sceneIndex % list.length];
    return `
      <div class="groovy-inline-reading-scene">
        <div class="groovy-inline-scene-top">
          <span class="groovy-inline-scene-badge">${item.badge}</span>
          ${this.renderGroovySparkleSVG("#FFEE00", 18)}
        </div>
        <div class="groovy-inline-scene-duo">
          <div class="groovy-inline-scene-frame">
            <img src="${item.leftImg}" alt="Сцена 1" />
          </div>
          <div class="groovy-inline-scene-frame">
            <img src="${item.rightImg}" alt="Сцена 2" />
          </div>
        </div>
        <div class="groovy-inline-scene-caption">${item.caption}</div>
      </div>
    `;
  },

  // Набор иллюстраций для каждого абзаца чтения внутри уроков (A1–C2)
  renderParagraphSpotArt(unitId = "unit_a1_01", pIdx = 0) {
    const uid = String(unitId || "unit_a1_01");
    let pool = [
      { img: this.storyIllustrations.story_1, charImg: this.portraits.sky_default, tag: "A1 • SCENE" },
      { img: this.portraits.shark_lulu, charImg: this.portraits.jelly_blinky, tag: "FRIENDS • VIBE" },
      { img: this.storyIllustrations.story_2, charImg: this.portraits.mermaid_mira, tag: "STORY • MOMENT" }
    ];
    if (uid.includes("_a2_")) {
      pool = [
        { img: this.storyIllustrations.story_4, charImg: this.portraits.sky_captain, tag: "A2 • SKATE TRIP" },
        { img: this.portraits.lulu_sweater, charImg: this.portraits.blinky_default, tag: "A2 • DIALOGUE" },
        { img: this.portraits.mira_cozy, charImg: this.portraits.sky_default, tag: "A2 • FINALE" }
      ];
    } else if (uid.includes("_b1_")) {
      pool = [
        { img: this.storyIllustrations.story_2, charImg: this.portraits.sky_scholar, tag: "B1 • COFFEE & BOOKS" },
        { img: this.portraits.blinky_gentleman, charImg: this.portraits.mermaid_mira, tag: "B1 • VINYL CLUB" },
        { img: this.portraits.lulu_ballerina, charImg: this.storyIllustrations.story_5, tag: "B1 • LIVE SCENE" }
      ];
    } else if (uid.includes("_b2_")) {
      pool = [
        { img: this.storyIllustrations.story_5, charImg: this.portraits.blinky_gentleman, tag: "B2 • FESTIVAL" },
        { img: this.portraits.sky_pirate, charImg: this.portraits.mira_royal, tag: "B2 • BACKSTAGE" },
        { img: this.storyIllustrations.story_2, charImg: this.portraits.lulu_sweater, tag: "B2 • ENCORE" }
      ];
    } else if (uid.includes("_c1_")) {
      pool = [
        { img: this.storyIllustrations.story_3, charImg: this.portraits.sky_pirate, tag: "C1 • VARSITY CHRONICLES" },
        { img: this.portraits.mira_royal, charImg: this.portraits.blinky_wizard, tag: "C1 • DEEP DIVE" },
        { img: this.storyIllustrations.story_6, charImg: this.portraits.sky_scholar, tag: "C1 • INSIGHT" }
      ];
    } else if (uid.includes("_c2_")) {
      pool = [
        { img: this.storyIllustrations.story_6, charImg: this.portraits.sky_royal, tag: "C2 • Y2K MASTER" },
        { img: this.portraits.blinky_wizard, charImg: this.portraits.mira_royal, tag: "C2 • ATLANTIS CLUB" },
        { img: this.storyIllustrations.story_3, charImg: this.portraits.lulu_sweater, tag: "C2 • GRAND FINALE" }
      ];
    }
    const item = pool[pIdx % pool.length];
    return `
      <div class="groovy-paragraph-art-strip">
        <div class="groovy-p-art-thumb">
          <img src="${item.img}" alt="Иллюстрация к абзацу ${pIdx + 1}" />
        </div>
        <div class="groovy-p-art-thumb">
          <img src="${item.charImg}" alt="Герой сцены ${pIdx + 1}" />
        </div>
        <span class="groovy-p-art-badge">Сцена ${pIdx + 1} • ${item.tag}</span>
      </div>
    `;
  },

  renderFriendsSquadRow() {
    const list = Object.values(this.friends || {});
    return `
      <div class="friends-celebration-squad">
        ${list.map(f => {
          const quote = (Array.isArray(f.cheerQuotes) && f.cheerQuotes[0]) || f.praise || "Отличная работа!";
          return `
            <div class="friend-cheer-card" onclick="ScayaApp.greetOceanFriend('${f.id}')">
              ${this.renderFriendAvatar(f.id, 56)}
              <div class="friend-cheer-name">${f.shortName || f.name}</div>
              <div class="friend-cheer-quote">«${quote}»</div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  },

  // Умная фоновая предзагрузка и удержание декодированных изображений в GPU/RAM (0 мс при переключении вкладок и уровней!)
  initInstantImageCache() {
    if (this._cacheInitialized) return;
    this._cacheInitialized = true;
    window._SCAYA_KEEPALIVE_IMGS = window._SCAYA_KEEPALIVE_IMGS || [];
    const seenUrls = new Set();

    const keepDecoded = (src) => {
      if (!src || seenUrls.has(src)) return;
      seenUrls.add(src);
      const im = new Image();
      im.decoding = "async";
      im.src = src;
      if (im.decode) im.decode().catch(() => {});
      window._SCAYA_KEEPALIVE_IMGS.push(im);
    };

    const allUrls = [];
    Object.values(this.portraits || {}).forEach(val => {
      if (val && !seenUrls.has(val)) allUrls.push(val);
    });
    Object.values(this.storyIllustrations || {}).forEach(val => {
      if (val && !seenUrls.has(val)) allUrls.push(val);
    });

    let idx = 0;
    const worker = () => {
      if (idx >= allUrls.length) return;
      const url = allUrls[idx++];
      keepDecoded(url);
      setTimeout(worker, 20);
    };

    setTimeout(() => {
      worker();
      worker();
    }, 60);
  }
};

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    if (window.ScayaMascot && window.ScayaMascot.initInstantImageCache) {
      window.ScayaMascot.initInstantImageCache();
    }
  });
}

