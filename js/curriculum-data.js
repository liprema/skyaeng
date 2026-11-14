// ============================================================================
// SCAYA CURRICULUM ENGINE (A1 → A2 → B1 → B2 → C1 → C2)
// 60 полноценных 5-этапных тематических уроков (по 10 тем на каждый уровень!)
// В каждом уроке: 1) Лексика + Грамматика в контексте темы, 2) Порядок слов,
// 3) Чтение по теме (с переводом по нажатию), 4) Аудирование, 5) Говорение
// ============================================================================

window.ScayaCurriculum = {
  oceanZones: [
    {
        "id": "lagoon_a1",
        "order": 1,
        "cefr": "A1",
        "name": "Солнечная Лагуна",
        "depth": "0–30 м",
        "subtitle": "10 живых тем • Уровень A1",
        "icon": "🏖️",
        "bgClass": "depth-zone-1",
        "friendHost": "sky",
        "grammarTopicsSummary": [
            "Глагол to be (am / is / are) и знакомство",
            "Have got / Has got и рассказ о семье",
            "Исчисляемые и неисчисляемые (a / an / some)",
            "Present Simple и Present Continuous в жизни",
            "Конструкции There is / There are, I would like и be going to"
        ]
    },
    {
        "id": "shallows_a2",
        "order": 2,
        "cefr": "A2",
        "name": "Коралловый Сад",
        "depth": "30–100 м",
        "subtitle": "10 живых тем • Уровень A2",
        "icon": "🐬",
        "bgClass": "depth-zone-1",
        "friendHost": "shark",
        "grammarTopicsSummary": [
            "Наречия частоты (always, usually, never) и распорядок",
            "Past Simple в поездках и путешествиях",
            "Степени сравнения прилагательных (-er / more / the most)",
            "Глаголы с -ing для хобби и инфинитив цели (to do)",
            "Модальные глаголы совета и правил: should, must, don't have to"
        ]
    },
    {
        "id": "reef_b1",
        "order": 3,
        "cefr": "B1",
        "name": "Лазурный Риф",
        "depth": "100–300 м",
        "subtitle": "10 живых тем • Уровень B1",
        "icon": "🪸",
        "bgClass": "depth-zone-2",
        "friendHost": "mermaid",
        "grammarTopicsSummary": [
            "Past Continuous + причастие восприятия (While I was walking, I saw monkeys climbing)",
            "Present Perfect (already, ever, for, since) и Past Perfect (had done)",
            "Условные предложения 1-го и 2-го типа (First & Second Conditionals)",
            "Пассивный залог (was filmed / was written) и конструкция used to",
            "Модальные глаголы догадки (must be / can't be) и Герундий vs Инфинитив"
        ]
    },
    {
        "id": "ocean_b2",
        "order": 4,
        "cefr": "B2",
        "name": "Сапфировое Течение",
        "depth": "300–1000 м",
        "subtitle": "10 живых тем • Уровень B2",
        "icon": "🌊",
        "bgClass": "depth-zone-3",
        "friendHost": "shark",
        "grammarTopicsSummary": [
            "Present Perfect Continuous (have been doing) для длительных процессов",
            "Third Conditional (If we had planned, we would have saved)",
            "Косвенная речь (Reported Speech) и модальные догадки о прошлом (must have done)",
            "Future Continuous и Future Perfect (By 2030, will have made)",
            "Конструкции I wish, get used to doing, have something done и причастные обороты"
        ]
    },
    {
        "id": "twilight_c1",
        "order": 5,
        "cefr": "C1",
        "name": "Сумеречная Полночь",
        "depth": "1000–3000 м",
        "subtitle": "10 живых тем • Уровень C1",
        "icon": "🪼",
        "bgClass": "depth-zone-4",
        "friendHost": "jelly",
        "grammarTopicsSummary": [
            "Эмфатическая инверсия (Never before / Only through / Little did she know / Not only)",
            "Фокусные Cleft-конструкции (What persuades people is... / It was... that)",
            "Смешанные условные предложения (Mixed Conditionals)",
            "Академический Subjunctive (It is vital that a student get...)",
            "Инверсия с So exquisite was... и условные без if (Should any question arise)"
        ]
    },
    {
        "id": "abyss_c2",
        "order": 6,
        "cefr": "C2",
        "name": "Атлантида",
        "depth": "4000 м+",
        "subtitle": "10 живых тем • Уровень C2",
        "icon": "👑",
        "bgClass": "depth-zone-5",
        "friendHost": "mermaid",
        "grammarTopicsSummary": [
            "Уступительные конструкции (Paradoxical though it may seem...)",
            "Литературная и поэтическая инверсия (Such timeless beauty did... / So rare a sight)",
            "Перфектные инфинитивы (appear to have developed) и needn't have done",
            "Абсолютные причастные конструкции (With visual clutter removed / Given sunlight)",
            "Обороты Scarcely had... when и But for..."
        ]
    }
],

  placementQuestions: [
    {
        "id": "pq_1",
        "cefr": "A1",
        "zoneId": "lagoon_a1",
        "prompt": "Listen! The pink dolphin ___ a beautiful song right now.",
        "options": [
            "is singing",
            "sings",
            "sing",
            "are singing"
        ],
        "correct": "is singing",
        "explanation": "Действие происходит прямо сейчас («Listen! ... right now»), поэтому нужен Present Continuous: is + V-ing."
    },
    {
        "id": "pq_2",
        "cefr": "A1",
        "zoneId": "lagoon_a1",
        "prompt": "My sister usually ___ coffee in the morning, she prefers tea.",
        "options": [
            "doesn't drink",
            "don't drink",
            "isn't drinking",
            "not drinks"
        ],
        "correct": "doesn't drink",
        "explanation": "Привычка («usually») с местоимением she требует отрицания Present Simple: doesn’t + начальная форма глагола."
    },
    {
        "id": "pq_3",
        "cefr": "A2",
        "zoneId": "shallows_a2",
        "prompt": "Where ___ you go on holiday last summer?",
        "options": [
            "did",
            "were",
            "have",
            "do"
        ],
        "correct": "did",
        "explanation": "Точное время в прошлом («last summer») с глаголом действия go требует вспомогательного глагола did (Past Simple)."
    },
    {
        "id": "pq_4",
        "cefr": "A2",
        "zoneId": "shallows_a2",
        "prompt": "While we ___ in the coral lagoon, we saw a cute baby shark.",
        "options": [
            "were swimming",
            "swam",
            "are swimming",
            "have swum"
        ],
        "correct": "were swimming",
        "explanation": "Длительный фоновый процесс в прошлом («While we...»), прерванный коротким действием («saw»), выражается через Past Continuous: were swimming."
    },
    {
        "id": "pq_5",
        "cefr": "B1",
        "zoneId": "reef_b1",
        "prompt": "I ___ Mermaid Mira since we were little children.",
        "options": [
            "have known",
            "have been knowing",
            "know",
            "knew"
        ],
        "correct": "have known",
        "explanation": "Связь прошлого с настоящим («since...») требует Present Perfect, а глагол состояния know не употребляется в форме Continuous."
    },
    {
        "id": "pq_6",
        "cefr": "B1",
        "zoneId": "reef_b1",
        "prompt": "We really look forward to ___ with you in the ocean tomorrow!",
        "options": [
            "swimming",
            "swim",
            "swam",
            "be swim"
        ],
        "correct": "swimming",
        "explanation": "В фразе «look forward to» частица to — это предлог, после которого всегда идёт герундий с окончанием -ing (Blue Murphy Unit 60)."
    },
    {
        "id": "pq_7",
        "cefr": "B2",
        "zoneId": "ocean_b2",
        "prompt": "If I ___ harder at school, I would speak fluent English right now.",
        "options": [
            "had studied",
            "studied",
            "have studied",
            "would study"
        ],
        "correct": "had studied",
        "explanation": "Mixed Conditional (B2): нереальное условие в прошлом («If I had studied») с результатом в настоящем («would speak right now»)."
    },
    {
        "id": "pq_8",
        "cefr": "B2",
        "zoneId": "ocean_b2",
        "prompt": "Her jacket is still here on the chair — she ___ home yet.",
        "options": [
            "can't have gone",
            "mustn't go",
            "shouldn't have gone",
            "couldn't go"
        ],
        "correct": "can't have gone",
        "explanation": "Уверенное логическое отрицание относительно прошлого («не может быть, чтобы она уже ушла») выражается через can’t have + V3 (Blue Murphy Unit 28)."
    },
    {
        "id": "pq_9",
        "cefr": "C1",
        "zoneId": "trench_c1",
        "prompt": "Not only ___ the exam, but she also got the highest score in Cambridge.",
        "options": [
            "did she pass",
            "she passed",
            "passed she",
            "has she pass"
        ],
        "correct": "did she pass",
        "explanation": "Отрицательная инверсия уровня C1: после «Not only» в начале предложения требуется порядок слов как в вопросе (did she pass)."
    },
    {
        "id": "pq_10",
        "cefr": "C2",
        "zoneId": "atlantis_c2",
        "prompt": "___ it not been for the lighthouse, the ship would have hit the reef.",
        "options": [
            "Had",
            "Were",
            "Should",
            "If"
        ],
        "correct": "Had",
        "explanation": "Бессоюзная инверсия в условном предложении 3-го типа (C1/C2): «Had it not been for...» заменяет «If it had not been for...»."
    }
],

  units: [
    {
        "id": "unit_a1_01",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 1,
        "nodeType": "five_stage",
        "titleRu": "Приветствие",
        "titleEn": "Приветствие",
        "icon": "👋",
        "sources": [
            "Тема: Приветствие",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "hello",
                "tr": "[həˈləʊ]",
                "ru": "привет, здравствуйте",
                "ex": "Hello! I am happy to see you.",
                "example": "Hello! I am happy to see you."
            },
            {
                "en": "neighbor",
                "tr": "[ˈneɪbə]",
                "ru": "сосед, соседка",
                "ex": "Our new neighbor is very friendly.",
                "example": "Our new neighbor is very friendly."
            },
            {
                "en": "friendly",
                "tr": "[ˈfrendli]",
                "ru": "дружелюбный, приветливый",
                "ex": "She has a warm and friendly smile.",
                "example": "She has a warm and friendly smile."
            },
            {
                "en": "morning",
                "tr": "[ˈmɔːnɪŋ]",
                "ru": "утро",
                "ex": "Good morning! The sun is bright.",
                "example": "Good morning! The sun is bright."
            },
            {
                "en": "smile",
                "tr": "[smaɪl]",
                "ru": "улыбка; улыбаться",
                "ex": "He always greets me with a smile.",
                "example": "He always greets me with a smile."
            },
            {
                "en": "goodbye",
                "tr": "[ˌɡʊdˈbaɪ]",
                "ru": "до свидания (A1)",
                "ex": "Goodbye! See you tomorrow morning.",
                "example": "Goodbye! See you tomorrow morning."
            },
            {
                "en": "country",
                "tr": "[ˈkʌntri]",
                "ru": "страна (A1)",
                "ex": "Which country are you from?",
                "example": "Which country are you from?"
            },
            {
                "en": "city",
                "tr": "[ˈsɪti]",
                "ru": "большой город (A1)",
                "ex": "Madrid is a beautiful sunny city.",
                "example": "Madrid is a beautiful sunny city."
            },
            {
                "en": "polite",
                "tr": "[pəˈlaɪt]",
                "ru": "вежливый (A1)",
                "ex": "He is always polite to everyone.",
                "example": "He is always polite to everyone."
            },
            {
                "en": "welcome",
                "tr": "[ˈwelkəm]",
                "ru": "добро пожаловать (A1)",
                "ex": "Welcome to our English class!",
                "example": "Welcome to our English class!"
            }
        ],
        "readingPassage": {
            "titleEn": "Утро на нашей улице",
            "titleRu": "Приветствие",
            "audioFull": "Good morning! My name is Emma. Today is a sunny day, and I am outside. Look, this is Lucas. He is my new neighbor from Spain. He is very polite and friendly. We are happy to meet each other!",
            "paragraphs": [
                {
                    "en": "Good morning! My name is Emma. Today is a sunny day, and I am outside.",
                    "ru": ""
                },
                {
                    "en": "Look, this is Lucas. He is my new neighbor from Spain. He is very polite and friendly. We are happy to meet each other!",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Глагол to be (am / is / are) при знакомстве",
            "skyNote": "Когда мы знакомимся и описываем людей, в английском обязательно нужна связка «быть»: I am (я есть), He/She is (он/она есть), You/We/They are (ты/мы/они есть).",
            "summary": "Когда мы знакомимся и описываем людей, в английском обязательно нужна связка «быть»: I am (я есть), He/She is (он/она есть), You/We/They are (ты/мы/они есть).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Приветствие» (A1)",
                    "example": "Hello! I am happy to see you.",
                    "note": "Формула: I am friendly • She is my neighbor • They are happy. Когда мы знакомимся и описываем людей, в английском обязательно нужна связка «быть»: I am (я есть), He/She is (он/она есть), You/We/They are (ты/мы/они есть)."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "Our new neighbor is very friendly.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "I am friendly • She is my neighbor • They are happy",
                    "example": "Hello! I am happy to see you.",
                    "note": "Глагол to be (am / is / are) при знакомстве"
                }
            ],
            "cambridgeTip": "В теме «Приветствие» мы сразу применяем правило (Глагол to be (am / is / are) при знакомстве) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_01_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Приветствие • A1",
                "prompt": "Выбери верную форму для знакомства с соседкой:\n«She ___ our new friendly neighbor.»",
                "options": [
                    "is",
                    "am",
                    "are",
                    "be"
                ],
                "correct": "is",
                "explanation": "С местоимением She (она) используется форма is."
            },
            {
                "id": "unit_a1_01_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Приветствие • Конструктор фразы",
                "prompt": "Собери фразу: «Привет, я твой новый сосед»",
                "words": [
                    "Hello,",
                    "I",
                    "am",
                    "your",
                    "new",
                    "neighbor.",
                    "is",
                    "are"
                ],
                "distractors": [
                    "is",
                    "are"
                ],
                "correct": "Hello, I am your new neighbor.",
                "explanation": "С местоимением I всегда ставим связку am.",
                "promptRu": "Собери фразу: «Привет, я твой новый сосед»",
                "correctSentence": "Hello, I am your new neighbor."
            },
            {
                "id": "unit_a1_01_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Приветствие • Чтение",
                "storyTitle": "Утро на нашей улице",
                "paragraphs": [
                    {
                        "en": "Good morning! My name is Emma. Today is a sunny day, and I am outside.",
                        "ru": ""
                    },
                    {
                        "en": "Look, this is Lucas. He is my new neighbor from Spain. He is very polite and friendly. We are happy to meet each other!",
                        "ru": ""
                    }
                ],
                "prompt": "Откуда приехал новый сосед Лукас?",
                "options": [
                    "Из Испании",
                    "Из Италии",
                    "Из Франции"
                ],
                "correct": "Из Испании",
                "explanation": "В тексте сказано: He is my new neighbor from Spain."
            },
            {
                "id": "unit_a1_01_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Приветствие • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "She is a very friendly neighbor.",
                "translationRu": "Она очень дружелюбная соседка.",
                "options": [
                    "She is a very friendly neighbor.",
                    "He is a very angry neighbor.",
                    "They are our old friends."
                ],
                "correct": "She is a very friendly neighbor.",
                "explanation": "Прозвучала фраза: «She is a very friendly neighbor.» (Она очень дружелюбная соседка.)."
            },
            {
                "id": "unit_a1_01_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Приветствие • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Good morning, I am very happy to meet you!",
                "translationRu": "Доброе утро, я очень рад познакомиться с тобой!",
                "correct": "Good morning, I am very happy to meet you!",
                "explanation": "Отличное произношение! «Good morning, I am very happy to meet you!» — Доброе утро, я очень рад познакомиться с тобой!."
            }
        ]
    },
    {
        "id": "unit_a1_02",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 2,
        "nodeType": "five_stage",
        "titleRu": "Семья",
        "titleEn": "Семья",
        "icon": "👨‍👩‍👧",
        "sources": [
            "Тема: Семья",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "parents",
                "tr": "[ˈpeərənts]",
                "ru": "родители",
                "ex": "My parents live in a cozy house.",
                "example": "My parents live in a cozy house."
            },
            {
                "en": "sister",
                "tr": "[ˈsɪstə]",
                "ru": "сестра",
                "ex": "My sister has curly hair.",
                "example": "My sister has curly hair."
            },
            {
                "en": "brother",
                "tr": "[ˈbrʌðə]",
                "ru": "брат",
                "ex": "My brother loves playing guitar.",
                "example": "My brother loves playing guitar."
            },
            {
                "en": "together",
                "tr": "[təˈɡeðə]",
                "ru": "вместе",
                "ex": "We cook dinner together every Sunday.",
                "example": "We cook dinner together every Sunday."
            },
            {
                "en": "cousin",
                "tr": "[ˈkʌzn]",
                "ru": "двоюродный брат или сестра",
                "ex": "My cousin visits us in summer.",
                "example": "My cousin visits us in summer."
            },
            {
                "en": "mother",
                "tr": "[ˈmʌðə]",
                "ru": "мама, мать (A1)",
                "ex": "My mother bakes delicious pies.",
                "example": "My mother bakes delicious pies."
            },
            {
                "en": "father",
                "tr": "[ˈfɑːðə]",
                "ru": "папа, отец (A1)",
                "ex": "My father works in a hospital.",
                "example": "My father works in a hospital."
            },
            {
                "en": "grandmother",
                "tr": "[ˈɡrænmʌðə]",
                "ru": "бабушка (A1)",
                "ex": "Our grandmother has a warm garden.",
                "example": "Our grandmother has a warm garden."
            },
            {
                "en": "grandfather",
                "tr": "[ˈɡrænfɑːðə]",
                "ru": "дедушка (A1)",
                "ex": "My grandfather tells funny stories.",
                "example": "My grandfather tells funny stories."
            },
            {
                "en": "aunt",
                "tr": "[ɑːnt]",
                "ru": "тётя (A1)",
                "ex": "My aunt lives in a house by the sea.",
                "example": "My aunt lives in a house by the sea."
            }
        ],
        "readingPassage": {
            "titleEn": "Воскресный вечер с родными",
            "titleRu": "Семья",
            "audioFull": "I have got a big and warm family. My parents are doctors, and my older brother is a student. My little sister has got a cute puppy. Every Sunday my cousin comes to our house, and we bake apple pies together.",
            "paragraphs": [
                {
                    "en": "I have got a big and warm family. My parents are doctors, and my older brother is a student.",
                    "ru": ""
                },
                {
                    "en": "My little sister has got a cute puppy. Every Sunday my cousin comes to our house, and we bake apple pies together.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Have got / Has got — рассказываем о семье",
            "skyNote": "Чтобы сказать, что у тебя есть брат, сестра или большая семья, используем I/You/We/They have got, а для одного человека (He/She) — has got.",
            "summary": "Чтобы сказать, что у тебя есть брат, сестра или большая семья, используем I/You/We/They have got, а для одного человека (He/She) — has got.",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Семья» (A1)",
                    "example": "My parents live in a cozy house.",
                    "note": "Формула: I have got a sister • She has got a brother. Чтобы сказать, что у тебя есть брат, сестра или большая семья, используем I/You/We/They have got, а для одного человека (He/She) — has got."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "My sister has curly hair.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "I have got a sister • She has got a brother",
                    "example": "My parents live in a cozy house.",
                    "note": "Have got / Has got — рассказываем о семье"
                }
            ],
            "cambridgeTip": "В теме «Семья» мы сразу применяем правило (Have got / Has got — рассказываем о семье) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_02_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Семья • A1",
                "prompt": "Расскажи про свою сестру:\n«My sister ___ got two funny cousins.»",
                "options": [
                    "has",
                    "have",
                    "is",
                    "am"
                ],
                "correct": "has",
                "explanation": "My sister (она, 3-е лицо ед. ч.) требует формы has got."
            },
            {
                "id": "unit_a1_02_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Семья • Конструктор фразы",
                "prompt": "Собери предложение: «У нас дружная семья, и мы ужинаем вместе»",
                "words": [
                    "We",
                    "have",
                    "got",
                    "a",
                    "warm",
                    "family",
                    "together.",
                    "has",
                    "is"
                ],
                "distractors": [
                    "has",
                    "is"
                ],
                "correct": "We have got a warm family together.",
                "explanation": "После We используется have got.",
                "promptRu": "Собери предложение: «У нас дружная семья, и мы ужинаем вместе»",
                "correctSentence": "We have got a warm family together."
            },
            {
                "id": "unit_a1_02_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Семья • Чтение",
                "storyTitle": "Воскресный вечер с родными",
                "paragraphs": [
                    {
                        "en": "I have got a big and warm family. My parents are doctors, and my older brother is a student.",
                        "ru": ""
                    },
                    {
                        "en": "My little sister has got a cute puppy. Every Sunday my cousin comes to our house, and we bake apple pies together.",
                        "ru": ""
                    }
                ],
                "prompt": "Что семья делает вместе каждое воскресенье?",
                "options": [
                    "Печёт яблочные пироги",
                    "Ходит в кино",
                    "Играет в теннис"
                ],
                "correct": "Печёт яблочные пироги",
                "explanation": "В тексте: we bake apple pies together."
            },
            {
                "id": "unit_a1_02_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Семья • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "My sister has got a younger brother.",
                "translationRu": "У моей сестры есть младший брат.",
                "options": [
                    "My sister has got a younger brother.",
                    "My brother has got a big car.",
                    "Our parents live together."
                ],
                "correct": "My sister has got a younger brother.",
                "explanation": "Прозвучала фраза: «My sister has got a younger brother.» (У моей сестры есть младший брат.)."
            },
            {
                "id": "unit_a1_02_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Семья • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "We love spending time together with our family.",
                "translationRu": "Мы любим проводить время вместе с нашей семьёй.",
                "correct": "We love spending time together with our family.",
                "explanation": "Отличное произношение! «We love spending time together with our family.» — Мы любим проводить время вместе с нашей семьёй.."
            }
        ]
    },
    {
        "id": "unit_a1_03",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 3,
        "nodeType": "five_stage",
        "titleRu": "Еда",
        "titleEn": "Еда",
        "icon": "🥐",
        "sources": [
            "Тема: Еда",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "breakfast",
                "tr": "[ˈbrekfəst]",
                "ru": "завтрак",
                "ex": "I eat warm croissants for breakfast.",
                "example": "I eat warm croissants for breakfast."
            },
            {
                "en": "fresh",
                "tr": "[freʃ]",
                "ru": "свежий",
                "ex": "She buys fresh strawberries at the market.",
                "example": "She buys fresh strawberries at the market."
            },
            {
                "en": "cheese",
                "tr": "[tʃiːz]",
                "ru": "сыр",
                "ex": "Would you like some cheese on your toast?",
                "example": "Would you like some cheese on your toast?"
            },
            {
                "en": "strawberry",
                "tr": "[ˈstrɔːbəri]",
                "ru": "клубника",
                "ex": "These sweet strawberries smell amazing.",
                "example": "These sweet strawberries smell amazing."
            },
            {
                "en": "juice",
                "tr": "[dʒuːs]",
                "ru": "сок",
                "ex": "A glass of orange juice refreshes me.",
                "example": "A glass of orange juice refreshes me."
            },
            {
                "en": "bread",
                "tr": "[bred]",
                "ru": "хлеб (A1)",
                "ex": "We buy warm bread every morning.",
                "example": "We buy warm bread every morning."
            },
            {
                "en": "butter",
                "tr": "[ˈbʌtə]",
                "ru": "сливочное масло (A1)",
                "ex": "Put some butter on your warm toast.",
                "example": "Put some butter on your warm toast."
            },
            {
                "en": "egg",
                "tr": "[eɡ]",
                "ru": "яйцо (A1)",
                "ex": "I eat two boiled eggs for breakfast.",
                "example": "I eat two boiled eggs for breakfast."
            },
            {
                "en": "milk",
                "tr": "[mɪlk]",
                "ru": "молоко (A1)",
                "ex": "Would you like some warm milk?",
                "example": "Would you like some warm milk?"
            },
            {
                "en": "apple",
                "tr": "[ˈæpl]",
                "ru": "яблоко (A1)",
                "ex": "An apple a day keeps you healthy.",
                "example": "An apple a day keeps you healthy."
            }
        ],
        "readingPassage": {
            "titleEn": "Утренний аромат на кухне",
            "titleRu": "Еда",
            "audioFull": "Every morning starts in our sunny kitchen. For breakfast, my mom makes warm toast with some fresh cheese and butter. I also wash some sweet strawberries and pour a glass of cold orange juice. Delicious food gives us energy for the whole day!",
            "paragraphs": [
                {
                    "en": "Every morning starts in our sunny kitchen. For breakfast, my mom makes warm toast with some fresh cheese and butter.",
                    "ru": ""
                },
                {
                    "en": "I also wash some sweet strawberries and pour a glass of cold orange juice. Delicious food gives us energy for the whole day!",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Исчисляемые слова и вкусная еда: a / an / some",
            "skyNote": "Штучные продукты в единственном числе берут артикль a/an (a strawberry — клубничка). А продукты, которые нельзя посчитать поштучно (cheese — сыр, juice — сок), или продукты во множественном числе берут слово some (немного/несколько).",
            "summary": "Штучные продукты в единственном числе берут артикль a/an (a strawberry — клубничка). А продукты, которые нельзя посчитать поштучно (cheese — сыр, juice — сок), или продукты во множественном числе берут слово some (немного/несколько).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Еда» (A1)",
                    "example": "I eat warm croissants for breakfast.",
                    "note": "Формула: a croissant • some fresh cheese • some orange juice. Штучные продукты в единственном числе берут артикль a/an (a strawberry — клубничка). А продукты, которые нельзя посчитать поштучно (cheese — сыр, juice — сок), или продукты во множественном числе берут слово some (немного/несколько)."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "She buys fresh strawberries at the market.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "a croissant • some fresh cheese • some orange juice",
                    "example": "I eat warm croissants for breakfast.",
                    "note": "Исчисляемые слова и вкусная еда: a / an / some"
                }
            ],
            "cambridgeTip": "В теме «Еда» мы сразу применяем правило (Исчисляемые слова и вкусная еда: a / an / some) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_03_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Еда • A1",
                "prompt": "Выбери правильное слово для утреннего тоста с сыром и соком:\n«I would like ___ fresh cheese and orange juice for breakfast.»",
                "options": [
                    "some",
                    "a",
                    "an",
                    "one"
                ],
                "correct": "some",
                "explanation": "Cheese (сыр) и juice (сок) — неисчисляемые, поэтому ставим some."
            },
            {
                "id": "unit_a1_03_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Еда • Конструктор фразы",
                "prompt": "Собери фразу: «На завтрак я ем свежую клубнику и сыр»",
                "words": [
                    "For",
                    "breakfast",
                    "I",
                    "eat",
                    "some",
                    "fresh",
                    "cheese.",
                    "a",
                    "an"
                ],
                "distractors": [
                    "a",
                    "an"
                ],
                "correct": "For breakfast I eat some fresh cheese.",
                "explanation": "С неисчисляемым словом cheese употребляется some.",
                "promptRu": "Собери фразу: «На завтрак я ем свежую клубнику и сыр»",
                "correctSentence": "For breakfast I eat some fresh cheese."
            },
            {
                "id": "unit_a1_03_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Еда • Чтение",
                "storyTitle": "Утренний аромат на кухне",
                "paragraphs": [
                    {
                        "en": "Every morning starts in our sunny kitchen. For breakfast, my mom makes warm toast with some fresh cheese and butter.",
                        "ru": ""
                    },
                    {
                        "en": "I also wash some sweet strawberries and pour a glass of cold orange juice. Delicious food gives us energy for the whole day!",
                        "ru": ""
                    }
                ],
                "prompt": "Какой напиток герой наливает себе на завтрак?",
                "options": [
                    "Апельсиновый сок",
                    "Зелёный чай",
                    "Горячее какао"
                ],
                "correct": "Апельсиновый сок",
                "explanation": "В тексте: a glass of cold orange juice."
            },
            {
                "id": "unit_a1_03_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Еда • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Would you like some fresh orange juice for breakfast?",
                "translationRu": "Хочешь немного свежего апельсинового сока на завтрак?",
                "options": [
                    "Would you like some fresh orange juice for breakfast?",
                    "Do you eat cheese in the evening?",
                    "She bought a sweet strawberry cake."
                ],
                "correct": "Would you like some fresh orange juice for breakfast?",
                "explanation": "Прозвучала фраза: «Would you like some fresh orange juice for breakfast?» (Хочешь немного свежего апельсинового сока на завтрак?)."
            },
            {
                "id": "unit_a1_03_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Еда • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "I love fresh strawberries and warm toast for breakfast.",
                "translationRu": "Я люблю свежую клубнику и тёплый тост на завтрак.",
                "correct": "I love fresh strawberries and warm toast for breakfast.",
                "explanation": "Отличное произношение! «I love fresh strawberries and warm toast for breakfast.» — Я люблю свежую клубнику и тёплый тост на завтрак.."
            }
        ]
    },
    {
        "id": "unit_a1_04",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 4,
        "nodeType": "five_stage",
        "titleRu": "Животные",
        "titleEn": "Животные",
        "icon": "🐒",
        "sources": [
            "Тема: Животные",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "monkey",
                "tr": "[ˈmʌŋki]",
                "ru": "обезьяна (A1)",
                "ex": "Funny monkeys climb tall trees in the zoo.",
                "example": "Funny monkeys climb tall trees in the zoo."
            },
            {
                "en": "giraffe",
                "tr": "[dʒəˈrɑːf]",
                "ru": "жираф (A1)",
                "ex": "A tall giraffe eats green leaves from the tree.",
                "example": "A tall giraffe eats green leaves from the tree."
            },
            {
                "en": "climb",
                "tr": "[klaɪm]",
                "ru": "лазать, взбираться (A1)",
                "ex": "Monkeys climb trees very fast.",
                "example": "Monkeys climb trees very fast."
            },
            {
                "en": "elephant",
                "tr": "[ˈelɪfənt]",
                "ru": "слон (A1)",
                "ex": "The big elephant drinks clean water.",
                "example": "The big elephant drinks clean water."
            },
            {
                "en": "lion",
                "tr": "[ˈlaɪən]",
                "ru": "лев (A1)",
                "ex": "The strong lion sleeps in the sun.",
                "example": "The strong lion sleeps in the sun."
            },
            {
                "en": "rabbit",
                "tr": "[ˈræbɪt]",
                "ru": "кролик (A1)",
                "ex": "A white rabbit eats sweet carrots.",
                "example": "A white rabbit eats sweet carrots."
            },
            {
                "en": "puppy",
                "tr": "[ˈpʌpi]",
                "ru": "щенок (A1)",
                "ex": "Our little puppy runs in the park.",
                "example": "Our little puppy runs in the park."
            },
            {
                "en": "kitten",
                "tr": "[ˈkɪtn]",
                "ru": "котёнок (A1)",
                "ex": "The soft kitten drinks warm milk.",
                "example": "The soft kitten drinks warm milk."
            },
            {
                "en": "zoo",
                "tr": "[zuː]",
                "ru": "зоопарк (A1)",
                "ex": "We visit the city zoo every summer.",
                "example": "We visit the city zoo every summer."
            },
            {
                "en": "tail",
                "tr": "[teɪl]",
                "ru": "хвост (A1)",
                "ex": "The monkey has a long tail.",
                "example": "The monkey has a long tail."
            }
        ],
        "readingPassage": {
            "titleEn": "Солнечный день в зоопарке (A1)",
            "titleRu": "Животные",
            "audioFull": "Today my family is at the city zoo. Look at the funny monkeys! They have long tails, and they climb tall trees very fast. Next to the monkeys, a tall giraffe eats green leaves, and a big grey elephant drinks water. Animals are so clever and cute!",
            "paragraphs": [
                {
                    "en": "Today my family is at the city zoo. Look at the funny monkeys! They have long tails, and they climb tall trees very fast.",
                    "ru": ""
                },
                {
                    "en": "Next to the monkeys, a tall giraffe eats green leaves, and a big grey elephant drinks water. Animals are so clever and cute!",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Present Simple — что делают животные в зоопарке и дома (A1)",
            "skyNote": "На уровне A1 мы учим базовые названия животных (monkey, giraffe, elephant, lion, rabbit) и описываем их привычки в Present Simple: во множественном числе глагол не меняется (Monkeys climb trees), а для одного животного (it — a giraffe, a lion) добавляем окончание -s (A giraffe eats leaves, a lion sleeps).",
            "summary": "На уровне A1 мы учим базовые названия животных (monkey, giraffe, elephant, lion, rabbit) и описываем их привычки в Present Simple: во множественном числе глагол не меняется (Monkeys climb trees), а для одного животного (it — a giraffe, a lion) добавляем окончание -s (A giraffe eats leaves, a lion sleeps).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Животные» (A1)",
                    "example": "Funny monkeys climb tall trees in the zoo.",
                    "note": "Формула: Monkeys climb trees • A tall giraffe eats green leaves. На уровне A1 мы учим базовые названия животных (monkey, giraffe, elephant, lion, rabbit) и описываем их привычки в Present Simple: во множественном числе глагол не меняется (Monkeys climb trees), а для одного животного (it — a giraffe, a lion) добавляем окончание -s (A giraffe eats leaves, a lion sleeps)."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "A tall giraffe eats green leaves from the tree.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Monkeys climb trees • A tall giraffe eats green leaves",
                    "example": "Funny monkeys climb tall trees in the zoo.",
                    "note": "Present Simple — что делают животные в зоопарке и дома (A1)"
                }
            ],
            "cambridgeTip": "В теме «Животные» мы сразу применяем правило (Present Simple — что делают животные в зоопарке и дома (A1)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_04_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Животные • A1",
                "prompt": "Опиши, что делает высокий жираф в зоопарке (уровень A1):\n«Look at that tall giraffe! It ___ fresh green leaves every day.»",
                "options": [
                    "eats",
                    "eat",
                    "eating",
                    "to eat"
                ],
                "correct": "eats",
                "explanation": "Жираф один (It), поэтому в Present Simple к глаголу eat добавляем окончание -s: eats."
            },
            {
                "id": "unit_a1_04_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Животные • Конструктор фразы",
                "prompt": "Собери фразу из базовых слов A1: «Забавные обезьяны лазят по высоким деревьям»",
                "words": [
                    "Funny",
                    "monkeys",
                    "climb",
                    "tall",
                    "trees.",
                    "climbs",
                    "is"
                ],
                "distractors": [
                    "climbs",
                    "is"
                ],
                "correct": "Funny monkeys climb tall trees.",
                "explanation": "Monkeys — множественное число (they), поэтому глагол стоит в начальной форме climb.",
                "promptRu": "Собери фразу из базовых слов A1: «Забавные обезьяны лазят по высоким деревьям»",
                "correctSentence": "Funny monkeys climb tall trees."
            },
            {
                "id": "unit_a1_04_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Животные • Чтение",
                "storyTitle": "Солнечный день в зоопарке (A1)",
                "paragraphs": [
                    {
                        "en": "Today my family is at the city zoo. Look at the funny monkeys! They have long tails, and they climb tall trees very fast.",
                        "ru": ""
                    },
                    {
                        "en": "Next to the monkeys, a tall giraffe eats green leaves, and a big grey elephant drinks water. Animals are so clever and cute!",
                        "ru": ""
                    }
                ],
                "prompt": "Кто быстро лазит по высоким деревьям в зоопарке?",
                "options": [
                    "Забавные обезьяны (monkeys)",
                    "Большой слон",
                    "Белый кролик"
                ],
                "correct": "Забавные обезьяны (monkeys)",
                "explanation": "В тексте: Look at the funny monkeys! ... they climb tall trees very fast."
            },
            {
                "id": "unit_a1_04_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Животные • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Funny monkeys climb tall trees in the city zoo.",
                "translationRu": "Забавные обезьяны лазят по высоким деревьям в городском зоопарке.",
                "options": [
                    "Funny monkeys climb tall trees in the city zoo.",
                    "A tall giraffe eats green leaves.",
                    "The big elephant drinks cold water."
                ],
                "correct": "Funny monkeys climb tall trees in the city zoo.",
                "explanation": "Прозвучала фраза: «Funny monkeys climb tall trees in the city zoo.» (Забавные обезьяны лазят по высоким деревьям в городском зоопарке.)."
            },
            {
                "id": "unit_a1_04_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Животные • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Funny monkeys climb tall trees and a giraffe eats leaves.",
                "translationRu": "Забавные обезьяны лазят по высоким деревьям, а жираф ест листья.",
                "correct": "Funny monkeys climb tall trees and a giraffe eats leaves.",
                "explanation": "Отличное произношение! «Funny monkeys climb tall trees and a giraffe eats leaves.» — Забавные обезьяны лазят по высоким деревьям, а жираф ест листья.."
            }
        ]
    },
    {
        "id": "unit_a1_05",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 5,
        "nodeType": "five_stage",
        "titleRu": "Дом",
        "titleEn": "Дом",
        "icon": "🏡",
        "sources": [
            "Тема: Дом",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "bedroom",
                "tr": "[ˈbedruːm]",
                "ru": "спальня",
                "ex": "My bedroom has a big window.",
                "example": "My bedroom has a big window."
            },
            {
                "en": "armchair",
                "tr": "[ˈɑːmtʃeə]",
                "ru": "уютное кресло",
                "ex": "Grandpa reads books in his soft armchair.",
                "example": "Grandpa reads books in his soft armchair."
            },
            {
                "en": "carpet",
                "tr": "[ˈkɑːpɪt]",
                "ru": "ковёр",
                "ex": "There is a warm carpet on the floor.",
                "example": "There is a warm carpet on the floor."
            },
            {
                "en": "curtains",
                "tr": "[ˈkɜːtnz]",
                "ru": "шторы, занавески",
                "ex": "Light blue curtains hang on the window.",
                "example": "Light blue curtains hang on the window."
            },
            {
                "en": "bookshelf",
                "tr": "[ˈbʊkʃelf]",
                "ru": "книжная полка",
                "ex": "All my favourite stories are on the bookshelf.",
                "example": "All my favourite stories are on the bookshelf."
            },
            {
                "en": "kitchen",
                "tr": "[ˈkɪtʃɪn]",
                "ru": "кухня (A1)",
                "ex": "There is a big table in the kitchen.",
                "example": "There is a big table in the kitchen."
            },
            {
                "en": "bathroom",
                "tr": "[ˈbɑːθruːm]",
                "ru": "ванная комната (A1)",
                "ex": "The bathroom is next to the bedroom.",
                "example": "The bathroom is next to the bedroom."
            },
            {
                "en": "window",
                "tr": "[ˈwɪndəʊ]",
                "ru": "окно (A1)",
                "ex": "Open the window to let fresh air in.",
                "example": "Open the window to let fresh air in."
            },
            {
                "en": "table",
                "tr": "[ˈteɪbl]",
                "ru": "стол (A1)",
                "ex": "There are fresh flowers on the table.",
                "example": "There are fresh flowers on the table."
            },
            {
                "en": "chair",
                "tr": "[tʃeə]",
                "ru": "стул (A1)",
                "ex": "There are four wooden chairs in the room.",
                "example": "There are four wooden chairs in the room."
            }
        ],
        "readingPassage": {
            "titleEn": "Моя любимая комната",
            "titleRu": "Дом",
            "audioFull": "Welcome to my cozy bedroom! Near the window, there is a soft yellow armchair where I read in the evening. On the wooden floor, there is a fluffy cream carpet. Above my desk, there are two bookshelves with adventure books and sea shells.",
            "paragraphs": [
                {
                    "en": "Welcome to my cozy bedroom! Near the window, there is a soft yellow armchair where I read in the evening.",
                    "ru": ""
                },
                {
                    "en": "On the wooden floor, there is a fluffy cream carpet. Above my desk, there are two bookshelves with adventure books and sea shells.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Конструкция There is / There are — описываем уютный дом",
            "skyNote": "Когда мы рассказываем, что где находится в комнате, начинаем с There is (для одного предмета: There is a soft armchair) или There are (для нескольких предметов: There are blue curtains).",
            "summary": "Когда мы рассказываем, что где находится в комнате, начинаем с There is (для одного предмета: There is a soft armchair) или There are (для нескольких предметов: There are blue curtains).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Дом» (A1)",
                    "example": "My bedroom has a big window.",
                    "note": "Формула: There is a warm carpet • There are many books on the bookshelf. Когда мы рассказываем, что где находится в комнате, начинаем с There is (для одного предмета: There is a soft armchair) или There are (для нескольких предметов: There are blue curtains)."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "Grandpa reads books in his soft armchair.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "There is a warm carpet • There are many books on the bookshelf",
                    "example": "My bedroom has a big window.",
                    "note": "Конструкция There is / There are — описываем уютный дом"
                }
            ],
            "cambridgeTip": "В теме «Дом» мы сразу применяем правило (Конструкция There is / There are — описываем уютный дом) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_05_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Дом • A1",
                "prompt": "Опиши интерьер спальни:\n«___ a cozy armchair and a warm carpet in my bedroom.»",
                "options": [
                    "There is",
                    "There are",
                    "It is",
                    "Have"
                ],
                "correct": "There is",
                "explanation": "Первый предмет в перечислении (a cozy armchair) стоит в единственном числе, поэтому выбираем There is."
            },
            {
                "id": "unit_a1_05_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Дом • Конструктор фразы",
                "prompt": "Собери фразу: «На окне висят светлые занавески»",
                "words": [
                    "There",
                    "are",
                    "light",
                    "curtains",
                    "on",
                    "the",
                    "window.",
                    "is",
                    "be"
                ],
                "distractors": [
                    "is",
                    "be"
                ],
                "correct": "There are light curtains on the window.",
                "explanation": "Curtains (занавески) — множественное число, поэтому используем There are.",
                "promptRu": "Собери фразу: «На окне висят светлые занавески»",
                "correctSentence": "There are light curtains on the window."
            },
            {
                "id": "unit_a1_05_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Дом • Чтение",
                "storyTitle": "Моя любимая комната",
                "paragraphs": [
                    {
                        "en": "Welcome to my cozy bedroom! Near the window, there is a soft yellow armchair where I read in the evening.",
                        "ru": ""
                    },
                    {
                        "en": "On the wooden floor, there is a fluffy cream carpet. Above my desk, there are two bookshelves with adventure books and sea shells.",
                        "ru": ""
                    }
                ],
                "prompt": "Что стоит у окна в спальне?",
                "options": [
                    "Мягкое жёлтое кресло",
                    "Большой шкаф",
                    "Пианино"
                ],
                "correct": "Мягкое жёлтое кресло",
                "explanation": "В тексте: Near the window, there is a soft yellow armchair."
            },
            {
                "id": "unit_a1_05_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Дом • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "There is a soft armchair near the bookshelf.",
                "translationRu": "Рядом с книжной полкой стоит мягкое кресло.",
                "options": [
                    "There is a soft armchair near the bookshelf.",
                    "There are two carpets in the kitchen.",
                    "My bedroom has a big balcony."
                ],
                "correct": "There is a soft armchair near the bookshelf.",
                "explanation": "Прозвучала фраза: «There is a soft armchair near the bookshelf.» (Рядом с книжной полкой стоит мягкое кресло.)."
            },
            {
                "id": "unit_a1_05_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Дом • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "There is a warm carpet and a cozy armchair in my room.",
                "translationRu": "В моей комнате есть тёплый ковёр и уютное кресло.",
                "correct": "There is a warm carpet and a cozy armchair in my room.",
                "explanation": "Отличное произношение! «There is a warm carpet and a cozy armchair in my room.» — В моей комнате есть тёплый ковёр и уютное кресло.."
            }
        ]
    },
    {
        "id": "unit_a1_06",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 6,
        "nodeType": "five_stage",
        "titleRu": "В кафе",
        "titleEn": "В кафе",
        "icon": "☕️",
        "sources": [
            "Тема: В кафе",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "waiter",
                "tr": "[ˈweɪtə]",
                "ru": "официант",
                "ex": "The waiter brings our menu quickly.",
                "example": "The waiter brings our menu quickly."
            },
            {
                "en": "order",
                "tr": "[ˈɔːdə]",
                "ru": "заказывать; заказ",
                "ex": "Are you ready to order now?",
                "example": "Are you ready to order now?"
            },
            {
                "en": "cappuccino",
                "tr": "[ˌkæpʊˈtʃiːnəʊ]",
                "ru": "капучино",
                "ex": "I would like a hot cappuccino with cinnamon.",
                "example": "I would like a hot cappuccino with cinnamon."
            },
            {
                "en": "bill",
                "tr": "[bɪl]",
                "ru": "счёт (в кафе)",
                "ex": "Could we have the bill, please?",
                "example": "Could we have the bill, please?"
            },
            {
                "en": "dessert",
                "tr": "[dɪˈzɜːt]",
                "ru": "десерт",
                "ex": "Their berry cheesecake is the best dessert.",
                "example": "Their berry cheesecake is the best dessert."
            },
            {
                "en": "menu",
                "tr": "[ˈmenjuː]",
                "ru": "меню (A1)",
                "ex": "The waiter brings us the menu.",
                "example": "The waiter brings us the menu."
            },
            {
                "en": "coffee",
                "tr": "[ˈkɒfi]",
                "ru": "кофе (A1)",
                "ex": "I would like a cup of hot coffee.",
                "example": "I would like a cup of hot coffee."
            },
            {
                "en": "tea",
                "tr": "[tiː]",
                "ru": "чай (A1)",
                "ex": "She drinks green tea with lemon.",
                "example": "She drinks green tea with lemon."
            },
            {
                "en": "sandwich",
                "tr": "[ˈsænwɪtʃ]",
                "ru": "сэндвич, бутерброд (A1)",
                "ex": "Could I have a cheese sandwich, please?",
                "example": "Could I have a cheese sandwich, please?"
            },
            {
                "en": "cup",
                "tr": "[kʌp]",
                "ru": "чашка (A1)",
                "ex": "A warm cup of tea makes me happy.",
                "example": "A warm cup of tea makes me happy."
            }
        ],
        "readingPassage": {
            "titleEn": "Уютная кофейня у набережной",
            "titleRu": "В кафе",
            "audioFull": "On Saturday afternoon, my friend and I sit at a small table in a seaside cafe. A polite waiter brings us the menu. I order a warm cappuccino and a chocolate dessert. After our conversation, we ask: 'Could we have the bill, please?'",
            "paragraphs": [
                {
                    "en": "On Saturday afternoon, my friend and I sit at a small table in a seaside cafe. A polite waiter brings us the menu.",
                    "ru": ""
                },
                {
                    "en": "I order a warm cappuccino and a chocolate dessert. After our conversation, we ask: 'Could we have the bill, please?'",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Вежливый заказ в кафе: I would like / Could I have...?",
            "skyNote": "Вместо резкого «I want» (Я хочу) в английских кофейнях и ресторанах говорят мягко и вежливо: «I would like (I'd like)...» (Я бы хотел(а)...) или «Could I have...?» (Можно мне...?).",
            "summary": "Вместо резкого «I want» (Я хочу) в английских кофейнях и ресторанах говорят мягко и вежливо: «I would like (I'd like)...» (Я бы хотел(а)...) или «Could I have...?» (Можно мне...?).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «В кафе» (A1)",
                    "example": "The waiter brings our menu quickly.",
                    "note": "Формула: I would like a cappuccino • Could we have the bill, please?. Вместо резкого «I want» (Я хочу) в английских кофейнях и ресторанах говорят мягко и вежливо: «I would like (I'd like)...» (Я бы хотел(а)...) или «Could I have...?» (Можно мне...?)."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "Are you ready to order now?",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "I would like a cappuccino • Could we have the bill, please?",
                    "example": "The waiter brings our menu quickly.",
                    "note": "Вежливый заказ в кафе: I would like / Could I have...?"
                }
            ],
            "cambridgeTip": "В теме «В кафе» мы сразу применяем правило (Вежливый заказ в кафе: I would like / Could I have...?) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_06_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "В кафе • A1",
                "prompt": "Сделай вежливый заказ официанту:\n«Hello! I ___ like a hot cappuccino and a berry dessert, please.»",
                "options": [
                    "would",
                    "am",
                    "do",
                    "have"
                ],
                "correct": "would",
                "explanation": "Вежливая конструкция заказа — I would like (я бы хотел/а)."
            },
            {
                "id": "unit_a1_06_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "В кафе • Конструктор фразы",
                "prompt": "Собери вежливую просьбу официанту: «Принесите нам счёт, пожалуйста»",
                "words": [
                    "Could",
                    "we",
                    "have",
                    "the",
                    "bill,",
                    "please?",
                    "would",
                    "are"
                ],
                "distractors": [
                    "would",
                    "are"
                ],
                "correct": "Could we have the bill, please?",
                "explanation": "Стандартная вежливая фраза для оплаты в кафе — Could we have the bill, please?",
                "promptRu": "Собери вежливую просьбу официанту: «Принесите нам счёт, пожалуйста»",
                "correctSentence": "Could we have the bill, please?"
            },
            {
                "id": "unit_a1_06_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "В кафе • Чтение",
                "storyTitle": "Уютная кофейня у набережной",
                "paragraphs": [
                    {
                        "en": "On Saturday afternoon, my friend and I sit at a small table in a seaside cafe. A polite waiter brings us the menu.",
                        "ru": ""
                    },
                    {
                        "en": "I order a warm cappuccino and a chocolate dessert. After our conversation, we ask: 'Could we have the bill, please?'",
                        "ru": ""
                    }
                ],
                "prompt": "Что герой заказывает к тёплому капучино?",
                "options": [
                    "Шоколадный десерт",
                    "Мороженое",
                    "Сэндвич"
                ],
                "correct": "Шоколадный десерт",
                "explanation": "В тексте: I order a warm cappuccino and a chocolate dessert."
            },
            {
                "id": "unit_a1_06_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "В кафе • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "I would like a hot cappuccino and a sweet dessert, please.",
                "translationRu": "Я бы хотел горячий капучино и сладкий десерт, пожалуйста.",
                "options": [
                    "I would like a hot cappuccino and a sweet dessert, please.",
                    "The waiter brought the bill.",
                    "Do you drink coffee in the morning?"
                ],
                "correct": "I would like a hot cappuccino and a sweet dessert, please.",
                "explanation": "Прозвучала фраза: «I would like a hot cappuccino and a sweet dessert, please.» (Я бы хотел горячий капучино и сладкий десерт, пожалуйста.)."
            },
            {
                "id": "unit_a1_06_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "В кафе • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "I would like a warm cappuccino and a berry dessert, please.",
                "translationRu": "Я бы хотел тёплый капучино и ягодный десерт, пожалуйста.",
                "correct": "I would like a warm cappuccino and a berry dessert, please.",
                "explanation": "Отличное произношение! «I would like a warm cappuccino and a berry dessert, please.» — Я бы хотел тёплый капучино и ягодный десерт, пожалуйста.."
            }
        ]
    },
    {
        "id": "unit_a1_07",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 7,
        "nodeType": "five_stage",
        "titleRu": "Город",
        "titleEn": "Город",
        "icon": "🏙️",
        "sources": [
            "Тема: Город",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "square",
                "tr": "[skweə]",
                "ru": "площадь, сквер",
                "ex": "Musicians play violin in the old town square.",
                "example": "Musicians play violin in the old town square."
            },
            {
                "en": "bridge",
                "tr": "[brɪdʒ]",
                "ru": "мост",
                "ex": "Walk across the stone bridge over the river.",
                "example": "Walk across the stone bridge over the river."
            },
            {
                "en": "bakery",
                "tr": "[ˈbeɪkəri]",
                "ru": "пекарня, булочная",
                "ex": "The bakery is right next to the pharmacy.",
                "example": "The bakery is right next to the pharmacy."
            },
            {
                "en": "corner",
                "tr": "[ˈkɔːnə]",
                "ru": "угол (улицы)",
                "ex": "There is a flower shop on the corner.",
                "example": "There is a flower shop on the corner."
            },
            {
                "en": "straight",
                "tr": "[streɪt]",
                "ru": "прямо",
                "ex": "Go straight ahead for two blocks.",
                "example": "Go straight ahead for two blocks."
            },
            {
                "en": "street",
                "tr": "[striːt]",
                "ru": "улица (A1)",
                "ex": "Our school is on a quiet green street.",
                "example": "Our school is on a quiet green street."
            },
            {
                "en": "park",
                "tr": "[pɑːk]",
                "ru": "парк (A1)",
                "ex": "Children play in the city park.",
                "example": "Children play in the city park."
            },
            {
                "en": "station",
                "tr": "[ˈsteɪʃn]",
                "ru": "вокзал, станция (A1)",
                "ex": "Go straight to the train station.",
                "example": "Go straight to the train station."
            },
            {
                "en": "museum",
                "tr": "[mjuˈziːəm]",
                "ru": "музей (A1)",
                "ex": "The art museum is near the square.",
                "example": "The art museum is near the square."
            },
            {
                "en": "supermarket",
                "tr": "[ˈsuːpəmɑːkɪt]",
                "ru": "супермаркет (A1)",
                "ex": "There is a supermarket across the street.",
                "example": "There is a supermarket across the street."
            }
        ],
        "readingPassage": {
            "titleEn": "Прогулка по старому кварталу",
            "titleRu": "Город",
            "audioFull": "Our town is small but very picturesque. If you go straight from the central square and walk across the stone bridge, you will see a narrow street. Right on the corner, there is an old bakery. Every morning, people stop there for warm bread before walking to the park.",
            "paragraphs": [
                {
                    "en": "Our town is small but very picturesque. If you go straight from the central square and walk across the stone bridge, you will see a narrow street.",
                    "ru": ""
                },
                {
                    "en": "Right on the corner, there is an old bakery. Every morning, people stop there for warm bread before walking to the park.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Предлоги места и маршруты в городе (next to / across / on the corner)",
            "skyNote": "Когда мы спрашиваем дорогу в городе, используем повелительные глаголы без подлежащего (Go straight — идите прямо, Turn left — поверните налево) и точные ориентиры: next to the bakery (рядом с пекарней), across the bridge (через мост), on the corner (на углу).",
            "summary": "Когда мы спрашиваем дорогу в городе, используем повелительные глаголы без подлежащего (Go straight — идите прямо, Turn left — поверните налево) и точные ориентиры: next to the bakery (рядом с пекарней), across the bridge (через мост), on the corner (на углу).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Город» (A1)",
                    "example": "Musicians play violin in the old town square.",
                    "note": "Формула: Go straight across the bridge • The bakery is on the corner. Когда мы спрашиваем дорогу в городе, используем повелительные глаголы без подлежащего (Go straight — идите прямо, Turn left — поверните налево) и точные ориентиры: next to the bakery (рядом с пекарней), across the bridge (через мост), on the corner (на углу)."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "Walk across the stone bridge over the river.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Go straight across the bridge • The bakery is on the corner",
                    "example": "Musicians play violin in the old town square.",
                    "note": "Предлоги места и маршруты в городе (next to / across / on the corner)"
                }
            ],
            "cambridgeTip": "В теме «Город» мы сразу применяем правило (Предлоги места и маршруты в городе (next to / across / on the corner)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_07_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Город • A1",
                "prompt": "Подскажи туристу, где находится уютная пекарня:\n«Go straight ahead; the French bakery is right ___ the corner.»",
                "options": [
                    "on",
                    "in",
                    "from",
                    "with"
                ],
                "correct": "on",
                "explanation": "Устойчивое выражение «на углу улицы» — on the corner."
            },
            {
                "id": "unit_a1_07_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Город • Конструктор фразы",
                "prompt": "Собери маршрут: «Идите прямо через старинный мост к площади»",
                "words": [
                    "Go",
                    "straight",
                    "across",
                    "the",
                    "old",
                    "bridge.",
                    "goes",
                    "walking"
                ],
                "distractors": [
                    "goes",
                    "walking"
                ],
                "correct": "Go straight across the old bridge.",
                "explanation": "Инструкция маршрута начинается с глагола Go straight across...",
                "promptRu": "Собери маршрут: «Идите прямо через старинный мост к площади»",
                "correctSentence": "Go straight across the old bridge."
            },
            {
                "id": "unit_a1_07_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Город • Чтение",
                "storyTitle": "Прогулка по старому кварталу",
                "paragraphs": [
                    {
                        "en": "Our town is small but very picturesque. If you go straight from the central square and walk across the stone bridge, you will see a narrow street.",
                        "ru": ""
                    },
                    {
                        "en": "Right on the corner, there is an old bakery. Every morning, people stop there for warm bread before walking to the park.",
                        "ru": ""
                    }
                ],
                "prompt": "Что нужно перейти от центральной площади, чтобы попасть к пекарне?",
                "options": [
                    "Каменный мост",
                    "Железную дорогу",
                    "Подземный переход"
                ],
                "correct": "Каменный мост",
                "explanation": "В тексте: walk across the stone bridge."
            },
            {
                "id": "unit_a1_07_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Город • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "The cozy bakery is right on the corner near the square.",
                "translationRu": "Уютная пекарня находится прямо на углу у площади.",
                "options": [
                    "The cozy bakery is right on the corner near the square.",
                    "Walk across the long bridge.",
                    "Turn left at the museum."
                ],
                "correct": "The cozy bakery is right on the corner near the square.",
                "explanation": "Прозвучала фраза: «The cozy bakery is right on the corner near the square.» (Уютная пекарня находится прямо на углу у площади.)."
            },
            {
                "id": "unit_a1_07_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Город • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Go straight across the bridge to the town square.",
                "translationRu": "Идите прямо через мост к городской площади.",
                "correct": "Go straight across the bridge to the town square.",
                "explanation": "Отличное произношение! «Go straight across the bridge to the town square.» — Идите прямо через мост к городской площади.."
            }
        ]
    },
    {
        "id": "unit_a1_08",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 8,
        "nodeType": "five_stage",
        "titleRu": "Погода",
        "titleEn": "Погода",
        "icon": "🌦️",
        "sources": [
            "Тема: Погода",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "breeze",
                "tr": "[briːz]",
                "ru": "лёгкий морской бриз, ветерок",
                "ex": "A cool sea breeze is blowing from the bay.",
                "example": "A cool sea breeze is blowing from the bay."
            },
            {
                "en": "cloud",
                "tr": "[klaʊd]",
                "ru": "облако, туча",
                "ex": "White clouds are floating in the blue sky.",
                "example": "White clouds are floating in the blue sky."
            },
            {
                "en": "umbrella",
                "tr": "[ʌmˈbrelə]",
                "ru": "зонт",
                "ex": "Take your umbrella, it is starting to rain!",
                "example": "Take your umbrella, it is starting to rain!"
            },
            {
                "en": "shine",
                "tr": "[ʃaɪn]",
                "ru": "светить, сиять",
                "ex": "The warm sun is shining right now.",
                "example": "The warm sun is shining right now."
            },
            {
                "en": "raincoat",
                "tr": "[ˈreɪnkəʊt]",
                "ru": "плащ-дождевик",
                "ex": "She is wearing a bright yellow raincoat.",
                "example": "She is wearing a bright yellow raincoat."
            },
            {
                "en": "sunny",
                "tr": "[ˈsʌni]",
                "ru": "солнечный (A1)",
                "ex": "Today is a bright and sunny day.",
                "example": "Today is a bright and sunny day."
            },
            {
                "en": "rain",
                "tr": "[reɪn]",
                "ru": "дождь; идти (о дожде) (A1)",
                "ex": "Look! It is raining outside right now.",
                "example": "Look! It is raining outside right now."
            },
            {
                "en": "snow",
                "tr": "[snəʊ]",
                "ru": "снег (A1)",
                "ex": "White snow is falling in the park.",
                "example": "White snow is falling in the park."
            },
            {
                "en": "warm",
                "tr": "[wɔːm]",
                "ru": "тёплый (A1)",
                "ex": "The sea water is very warm today.",
                "example": "The sea water is very warm today."
            },
            {
                "en": "cold",
                "tr": "[kəʊld]",
                "ru": "холодный (A1)",
                "ex": "Wear a hat when the wind is cold.",
                "example": "Wear a hat when the wind is cold."
            }
        ],
        "readingPassage": {
            "titleEn": "Переменчивая погода у моря",
            "titleRu": "Погода",
            "audioFull": "Weather by the sea changes every hour! Ten minutes ago, dark clouds were in the sky, and I was holding my umbrella and wearing a yellow raincoat. Now, look! A gentle breeze is blowing the clouds away, and the bright sun is shining over the water again.",
            "paragraphs": [
                {
                    "en": "Weather by the sea changes every hour! Ten minutes ago, dark clouds were in the sky, and I was holding my umbrella and wearing a yellow raincoat.",
                    "ru": ""
                },
                {
                    "en": "Now, look! A gentle breeze is blowing the clouds away, and the bright sun is shining over the water again.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Present Continuous — погода и события прямо сейчас",
            "skyNote": "Когда погода меняется прямо у нас на глазах (сейчас светит солнце или идёт дождь), мы используем am / is / are + глагол с окончанием -ing: The sun is shining! It is raining! I am taking my umbrella.",
            "summary": "Когда погода меняется прямо у нас на глазах (сейчас светит солнце или идёт дождь), мы используем am / is / are + глагол с окончанием -ing: The sun is shining! It is raining! I am taking my umbrella.",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Погода» (A1)",
                    "example": "A cool sea breeze is blowing from the bay.",
                    "note": "Формула: The sun is shining • A cool breeze is blowing right now. Когда погода меняется прямо у нас на глазах (сейчас светит солнце или идёт дождь), мы используем am / is / are + глагол с окончанием -ing: The sun is shining! It is raining! I am taking my umbrella."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "White clouds are floating in the blue sky.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "The sun is shining • A cool breeze is blowing right now",
                    "example": "A cool sea breeze is blowing from the bay.",
                    "note": "Present Continuous — погода и события прямо сейчас"
                }
            ],
            "cambridgeTip": "В теме «Погода» мы сразу применяем правило (Present Continuous — погода и события прямо сейчас) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_08_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Погода • A1",
                "prompt": "Посмотри в окно и скажи, что происходит прямо сейчас:\n«Take your raincoat! It ___ heavily outside right now.»",
                "options": [
                    "is raining",
                    "rains",
                    "rain",
                    "rained"
                ],
                "correct": "is raining",
                "explanation": "Действие происходит прямо сейчас (right now), поэтому используем Present Continuous: is raining."
            },
            {
                "id": "unit_a1_08_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Погода • Конструктор фразы",
                "prompt": "Собери фразу: «Сейчас светит тёплое солнце и дует лёгкий бриз»",
                "words": [
                    "The",
                    "warm",
                    "sun",
                    "is",
                    "shining",
                    "right",
                    "now.",
                    "shines",
                    "are"
                ],
                "distractors": [
                    "shines",
                    "are"
                ],
                "correct": "The warm sun is shining right now.",
                "explanation": "Для описания погоды в данный момент используем is + глагол с -ing (is shining).",
                "promptRu": "Собери фразу: «Сейчас светит тёплое солнце и дует лёгкий бриз»",
                "correctSentence": "The warm sun is shining right now."
            },
            {
                "id": "unit_a1_08_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Погода • Чтение",
                "storyTitle": "Переменчивая погода у моря",
                "paragraphs": [
                    {
                        "en": "Weather by the sea changes every hour! Ten minutes ago, dark clouds were in the sky, and I was holding my umbrella and wearing a yellow raincoat.",
                        "ru": ""
                    },
                    {
                        "en": "Now, look! A gentle breeze is blowing the clouds away, and the bright sun is shining over the water again.",
                        "ru": ""
                    }
                ],
                "prompt": "Что сейчас уносит тучи с неба?",
                "options": [
                    "Лёгкий морской ветерок (breeze)",
                    "Сильный шторм",
                    "Снегопад"
                ],
                "correct": "Лёгкий морской ветерок (breeze)",
                "explanation": "В тексте: A gentle breeze is blowing the clouds away."
            },
            {
                "id": "unit_a1_08_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Погода • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "The bright sun is shining and a cool breeze is blowing.",
                "translationRu": "Яркое солнце светит, и дует прохладный ветерок.",
                "options": [
                    "The bright sun is shining and a cool breeze is blowing.",
                    "Take your umbrella and yellow raincoat.",
                    "It rains every autumn here."
                ],
                "correct": "The bright sun is shining and a cool breeze is blowing.",
                "explanation": "Прозвучала фраза: «The bright sun is shining and a cool breeze is blowing.» (Яркое солнце светит, и дует прохладный ветерок.)."
            },
            {
                "id": "unit_a1_08_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Погода • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "The sun is shining and a gentle breeze is blowing.",
                "translationRu": "Светит солнце, и дует лёгкий ветерок.",
                "correct": "The sun is shining and a gentle breeze is blowing.",
                "explanation": "Отличное произношение! «The sun is shining and a gentle breeze is blowing.» — Светит солнце, и дует лёгкий ветерок.."
            }
        ]
    },
    {
        "id": "unit_a1_09",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 9,
        "nodeType": "five_stage",
        "titleRu": "Покупки",
        "titleEn": "Покупки",
        "icon": "🛍️",
        "sources": [
            "Тема: Покупки",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "price",
                "tr": "[praɪs]",
                "ru": "цена",
                "ex": "What is the price of this knitted sweater?",
                "example": "What is the price of this knitted sweater?"
            },
            {
                "en": "size",
                "tr": "[saɪz]",
                "ru": "размер",
                "ex": "Do you have these shoes in a smaller size?",
                "example": "Do you have these shoes in a smaller size?"
            },
            {
                "en": "jacket",
                "tr": "[ˈdʒækɪt]",
                "ru": "куртка, пиджак",
                "ex": "This denim jacket fits you perfectly.",
                "example": "This denim jacket fits you perfectly."
            },
            {
                "en": "discount",
                "tr": "[ˈdɪskaʊnt]",
                "ru": "скидка",
                "ex": "There is a twenty percent discount today.",
                "example": "There is a twenty percent discount today."
            },
            {
                "en": "receipt",
                "tr": "[rɪˈsiːt]",
                "ru": "кассовый чек",
                "ex": "Always keep your receipt after shopping.",
                "example": "Always keep your receipt after shopping."
            },
            {
                "en": "shirt",
                "tr": "[ʃɜːt]",
                "ru": "рубашка (A1)",
                "ex": "This white shirt is my size.",
                "example": "This white shirt is my size."
            },
            {
                "en": "dress",
                "tr": "[dres]",
                "ru": "платье (A1)",
                "ex": "She is buying a blue summer dress.",
                "example": "She is buying a blue summer dress."
            },
            {
                "en": "shoes",
                "tr": "[ʃuːz]",
                "ru": "обувь, туфли (A1)",
                "ex": "These leather shoes are very nice.",
                "example": "These leather shoes are very nice."
            },
            {
                "en": "bag",
                "tr": "[bæɡ]",
                "ru": "сумка (A1)",
                "ex": "Put the receipt in your bag.",
                "example": "Put the receipt in your bag."
            },
            {
                "en": "shop",
                "tr": "[ʃɒp]",
                "ru": "магазин (A1)",
                "ex": "This clothes shop opens at nine.",
                "example": "This clothes shop opens at nine."
            }
        ],
        "readingPassage": {
            "titleEn": "Удачный поход по магазинам",
            "titleRu": "Покупки",
            "audioFull": "Clara is looking for a new autumn jacket. In a cozy boutique, she sees a soft beige jacket on the shelf and asks the assistant for her size. She also tries on these comfortable leather boots. Good news! Today there is a big discount, so the price on her receipt is very pleasant.",
            "paragraphs": [
                {
                    "en": "Clara is looking for a new autumn jacket. In a cozy boutique, she sees a soft beige jacket on the shelf and asks the assistant for her size.",
                    "ru": ""
                },
                {
                    "en": "She also tries on these comfortable leather boots. Good news! Today there is a big discount, so the price on her receipt is very pleasant.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Указательные местоимения на шопинге: this / that и these / those",
            "skyNote": "Когда мы держим в руках одну вещь в магазине, говорим this (эта куртка — this jacket), а если указываем на дальнюю полку — that (та куртка). Для парных вещей и множественного числа (туфли, перчатки) используем these (эти) и those (те).",
            "summary": "Когда мы держим в руках одну вещь в магазине, говорим this (эта куртка — this jacket), а если указываем на дальнюю полку — that (та куртка). Для парных вещей и множественного числа (туфли, перчатки) используем these (эти) и those (те).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Покупки» (A1)",
                    "example": "What is the price of this knitted sweater?",
                    "note": "Формула: this jacket (одна в руках) • these shoes (пара в руках). Когда мы держим в руках одну вещь в магазине, говорим this (эта куртка — this jacket), а если указываем на дальнюю полку — that (та куртка). Для парных вещей и множественного числа (туфли, перчатки) используем these (эти) и those (те)."
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "Do you have these shoes in a smaller size?",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "this jacket (одна в руках) • these shoes (пара в руках)",
                    "example": "What is the price of this knitted sweater?",
                    "note": "Указательные местоимения на шопинге: this / that и these / those"
                }
            ],
            "cambridgeTip": "В теме «Покупки» мы сразу применяем правило (Указательные местоимения на шопинге: this / that и these / those) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_09_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Покупки • A1",
                "prompt": "Примеряя кроссовки в магазине, спроси продавца:\n«Excuse me, do you have ___ shoes in a medium size?»",
                "options": [
                    "these",
                    "this",
                    "that",
                    "a"
                ],
                "correct": "these",
                "explanation": "Shoes (обувь/туфли) — множественное число, поэтому вместо this используем these."
            },
            {
                "id": "unit_a1_09_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Покупки • Конструктор фразы",
                "prompt": "Собери фразу: «На эту тёплую куртку сегодня хорошая скидка»",
                "words": [
                    "This",
                    "warm",
                    "jacket",
                    "has",
                    "a",
                    "good",
                    "discount.",
                    "These",
                    "Those"
                ],
                "distractors": [
                    "These",
                    "Those"
                ],
                "correct": "This warm jacket has a good discount.",
                "explanation": "Jacket в единственном числе, поэтому ставим This.",
                "promptRu": "Собери фразу: «На эту тёплую куртку сегодня хорошая скидка»",
                "correctSentence": "This warm jacket has a good discount."
            },
            {
                "id": "unit_a1_09_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Покупки • Чтение",
                "storyTitle": "Удачный поход по магазинам",
                "paragraphs": [
                    {
                        "en": "Clara is looking for a new autumn jacket. In a cozy boutique, she sees a soft beige jacket on the shelf and asks the assistant for her size.",
                        "ru": ""
                    },
                    {
                        "en": "She also tries on these comfortable leather boots. Good news! Today there is a big discount, so the price on her receipt is very pleasant.",
                        "ru": ""
                    }
                ],
                "prompt": "Почему итоговая цена в чеке оказалась такой приятной?",
                "options": [
                    "Сегодня действует большая скидка",
                    "Куртка была детской",
                    "Обувь подарили бесплатно"
                ],
                "correct": "Сегодня действует большая скидка",
                "explanation": "В тексте: Today there is a big discount."
            },
            {
                "id": "unit_a1_09_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Покупки • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Do you have this jacket in a smaller size?",
                "translationRu": "У вас есть эта куртка в меньшем размере?",
                "options": [
                    "Do you have this jacket in a smaller size?",
                    "Keep your receipt in your bag.",
                    "These shoes are very comfortable."
                ],
                "correct": "Do you have this jacket in a smaller size?",
                "explanation": "Прозвучала фраза: «Do you have this jacket in a smaller size?» (У вас есть эта куртка в меньшем размере?)."
            },
            {
                "id": "unit_a1_09_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Покупки • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Do you have this jacket in my size?",
                "translationRu": "У вас есть эта куртка моего размера?",
                "correct": "Do you have this jacket in my size?",
                "explanation": "Отличное произношение! «Do you have this jacket in my size?» — У вас есть эта куртка моего размера?."
            }
        ]
    },
    {
        "id": "unit_a1_10",
        "zoneId": "lagoon_a1",
        "cefr": "A1",
        "number": 10,
        "nodeType": "five_stage",
        "titleRu": "Отпуск",
        "titleEn": "Отпуск",
        "icon": "🏝️",
        "sources": [
            "Тема: Отпуск",
            "Уровень A1"
        ],
        "vocab": [
            {
                "en": "beach",
                "tr": "[biːtʃ]",
                "ru": "пляж, берег",
                "ex": "We walk barefoot on the sandy beach.",
                "example": "We walk barefoot on the sandy beach."
            },
            {
                "en": "suitcase",
                "tr": "[ˈsuːtkeɪs]",
                "ru": "чемодан",
                "ex": "I pack my swimsuit and sunglasses in my suitcase.",
                "example": "I pack my swimsuit and sunglasses in my suitcase."
            },
            {
                "en": "sunset",
                "tr": "[ˈsʌnset]",
                "ru": "закат",
                "ex": "The pink sunset over the sea is magical.",
                "example": "The pink sunset over the sea is magical."
            },
            {
                "en": "shell",
                "tr": "[ʃel]",
                "ru": "морская ракушка",
                "ex": "She collects pretty shells by the waves.",
                "example": "She collects pretty shells by the waves."
            },
            {
                "en": "island",
                "tr": "[ˈaɪlənd]",
                "ru": "остров",
                "ex": "We are sailing to a quiet tropical island.",
                "example": "We are sailing to a quiet tropical island."
            },
            {
                "en": "swim",
                "tr": "[swɪm]",
                "ru": "плавать, купаться (A1)",
                "ex": "We are going to swim in the warm sea.",
                "example": "We are going to swim in the warm sea."
            },
            {
                "en": "hotel",
                "tr": "[həʊˈtel]",
                "ru": "отель, гостиница (A1)",
                "ex": "Our family is staying at a seaside hotel.",
                "example": "Our family is staying at a seaside hotel."
            },
            {
                "en": "ticket",
                "tr": "[ˈtɪkɪt]",
                "ru": "билет (A1)",
                "ex": "I bought two tickets for the boat.",
                "example": "I bought two tickets for the boat."
            },
            {
                "en": "photo",
                "tr": "[ˈfəʊtəʊ]",
                "ru": "фотография (A1)",
                "ex": "She is going to take a photo of the sunset.",
                "example": "She is going to take a photo of the sunset."
            },
            {
                "en": "holiday",
                "tr": "[ˈhɒlədeɪ]",
                "ru": "отпуск, каникулы (A1)",
                "ex": "Summer holiday is my favourite time.",
                "example": "Summer holiday is my favourite time."
            }
        ],
        "readingPassage": {
            "titleEn": "Чемодан, ракушки и розовый закат",
            "titleRu": "Отпуск",
            "audioFull": "Tomorrow our summer holiday begins! Tonight I am packing my blue suitcase with light clothes, a hat, and a camera. We are going to travel to a sunny island. Every evening we are going to walk along the sandy beach, collect sea shells, and watch the golden sunset.",
            "paragraphs": [
                {
                    "en": "Tomorrow our summer holiday begins! Tonight I am packing my blue suitcase with light clothes, a hat, and a camera.",
                    "ru": ""
                },
                {
                    "en": "We are going to travel to a sunny island. Every evening we are going to walk along the sandy beach, collect sea shells, and watch the golden sunset.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Конструкция be going to — планы на долгожданный отпуск",
            "skyNote": "Когда чемодан уже собран и у нас есть точный план на отпуск, мы используем am / is / are going to + глагол: I am going to swim! We are going to watch the sunset on the island!",
            "summary": "Когда чемодан уже собран и у нас есть точный план на отпуск, мы используем am / is / are going to + глагол: I am going to swim! We are going to watch the sunset on the island!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Отпуск» (A1)",
                    "example": "We walk barefoot on the sandy beach.",
                    "note": "Формула: We are going to visit an island • She is going to collect shells. Когда чемодан уже собран и у нас есть точный план на отпуск, мы используем am / is / are going to + глагол: I am going to swim! We are going to watch the sunset on the island!"
                },
                {
                    "label": "🌊 Живой пример на лексике A1",
                    "example": "I pack my swimsuit and sunglasses in my suitcase.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "We are going to visit an island • She is going to collect shells",
                    "example": "We walk barefoot on the sandy beach.",
                    "note": "Конструкция be going to — планы на долгожданный отпуск"
                }
            ],
            "cambridgeTip": "В теме «Отпуск» мы сразу применяем правило (Конструкция be going to — планы на долгожданный отпуск) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a1_10_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Отпуск • A1",
                "prompt": "Расскажи о своих планах на завтрашний вечер у моря:\n«We ___ going to watch the pink sunset on the beach.»",
                "options": [
                    "are",
                    "is",
                    "am",
                    "do"
                ],
                "correct": "are",
                "explanation": "С местоимением We используется форма are going to."
            },
            {
                "id": "unit_a1_10_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Отпуск • Конструктор фразы",
                "prompt": "Собери фразу о планах: «Я собираюсь упаковать свой чемодан для поездки на остров»",
                "words": [
                    "I",
                    "am",
                    "going",
                    "to",
                    "pack",
                    "my",
                    "suitcase.",
                    "is",
                    "are"
                ],
                "distractors": [
                    "is",
                    "are"
                ],
                "correct": "I am going to pack my suitcase.",
                "explanation": "Конструкция планов для I — I am going to + инфинитив глагола.",
                "promptRu": "Собери фразу о планах: «Я собираюсь упаковать свой чемодан для поездки на остров»",
                "correctSentence": "I am going to pack my suitcase."
            },
            {
                "id": "unit_a1_10_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Отпуск • Чтение",
                "storyTitle": "Чемодан, ракушки и розовый закат",
                "paragraphs": [
                    {
                        "en": "Tomorrow our summer holiday begins! Tonight I am packing my blue suitcase with light clothes, a hat, and a camera.",
                        "ru": ""
                    },
                    {
                        "en": "We are going to travel to a sunny island. Every evening we are going to walk along the sandy beach, collect sea shells, and watch the golden sunset.",
                        "ru": ""
                    }
                ],
                "prompt": "Что герои планируют собирать на песчаном пляже?",
                "options": [
                    "Морские ракушки",
                    "Гальку для аквариума",
                    "Кокосы"
                ],
                "correct": "Морские ракушки",
                "explanation": "В тексте: collect sea shells, and watch the golden sunset."
            },
            {
                "id": "unit_a1_10_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Отпуск • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "We are going to watch the sunset on the sandy beach.",
                "translationRu": "Мы собираемся смотреть закат на песчаном пляже.",
                "options": [
                    "We are going to watch the sunset on the sandy beach.",
                    "I packed my big suitcase yesterday.",
                    "This tropical island has white sand."
                ],
                "correct": "We are going to watch the sunset on the sandy beach.",
                "explanation": "Прозвучала фраза: «We are going to watch the sunset on the sandy beach.» (Мы собираемся смотреть закат на песчаном пляже.)."
            },
            {
                "id": "unit_a1_10_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Отпуск • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "We are going to walk on the beach at sunset.",
                "translationRu": "Мы собираемся гулять по пляжу на закате.",
                "correct": "We are going to walk on the beach at sunset.",
                "explanation": "Отличное произношение! «We are going to walk on the beach at sunset.» — Мы собираемся гулять по пляжу на закате.."
            }
        ]
    },
    {
        "id": "unit_a2_11",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 11,
        "nodeType": "five_stage",
        "titleRu": "Распорядок",
        "titleEn": "Распорядок",
        "icon": "⏰",
        "sources": [
            "Тема: Распорядок",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "alarm",
                "tr": "[əˈlɑːm]",
                "ru": "будильник",
                "ex": "My alarm rings at seven o'clock.",
                "example": "My alarm rings at seven o'clock."
            },
            {
                "en": "shower",
                "tr": "[ˈʃaʊə]",
                "ru": "душ",
                "ex": "He takes a warm shower before breakfast.",
                "example": "He takes a warm shower before breakfast."
            },
            {
                "en": "hurry",
                "tr": "[ˈhʌri]",
                "ru": "спешить, торопиться",
                "ex": "She never hurries in the morning.",
                "example": "She never hurries in the morning."
            },
            {
                "en": "habit",
                "tr": "[ˈhæbɪt]",
                "ru": "привычка",
                "ex": "Waking up early is a healthy habit.",
                "example": "Waking up early is a healthy habit."
            },
            {
                "en": "schedule",
                "tr": "[ˈʃedjuːl]",
                "ru": "расписание, график",
                "ex": "Today I have a very busy schedule.",
                "example": "Today I have a very busy schedule."
            },
            {
                "en": "routine",
                "tr": "[ruːˈtiːn]",
                "ru": "ежедневный распорядок (A2)",
                "ex": "A calm morning routine gives me energy.",
                "example": "A calm morning routine gives me energy."
            },
            {
                "en": "weekday",
                "tr": "[ˈwiːkdeɪ]",
                "ru": "будний день (A2)",
                "ex": "I usually wake up at seven on weekdays.",
                "example": "I usually wake up at seven on weekdays."
            },
            {
                "en": "early",
                "tr": "[ˈɜːli]",
                "ru": "рано, ранний (A2)",
                "ex": "She always arrives at the office early.",
                "example": "She always arrives at the office early."
            },
            {
                "en": "brush",
                "tr": "[brʌʃ]",
                "ru": "чистить (зубы), расчёсывать (A2)",
                "ex": "He brushes his teeth after breakfast.",
                "example": "He brushes his teeth after breakfast."
            },
            {
                "en": "tidy",
                "tr": "[ˈtaɪdi]",
                "ru": "аккуратный; прибирать (A2)",
                "ex": "I tidy my desk every evening.",
                "example": "I tidy my desk every evening."
            }
        ],
        "readingPassage": {
            "titleEn": "Секрет спокойного утра",
            "titleRu": "Распорядок",
            "audioFull": "A calm morning is my favourite healthy habit. My alarm rings at 6:30, so I never hurry before work. I usually take a refreshing shower, drink herbal tea, and check my schedule for the day. When you start the day peacefully, everything goes smoothly!",
            "paragraphs": [
                {
                    "en": "A calm morning is my favourite healthy habit. My alarm rings at 6:30, so I never hurry before work.",
                    "ru": ""
                },
                {
                    "en": "I usually take a refreshing shower, drink herbal tea, and check my schedule for the day. When you start the day peacefully, everything goes smoothly!",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Наречия частоты (always, usually, never) в нашем расписании",
            "skyNote": "Рассказывая о своих утренних привычках, мы ставим слова частоты (always — всегда, usually — обычно, rarely — редко, never — никогда) ПЕРЕД обычным глаголом (I usually wake up at 7), но ПОСЛЕ глагола to be (I am never late).",
            "summary": "Рассказывая о своих утренних привычках, мы ставим слова частоты (always — всегда, usually — обычно, rarely — редко, never — никогда) ПЕРЕД обычным глаголом (I usually wake up at 7), но ПОСЛЕ глагола to be (I am never late).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Распорядок» (A2)",
                    "example": "My alarm rings at seven o'clock.",
                    "note": "Формула: I usually wake up before my alarm • She is never in a hurry. Рассказывая о своих утренних привычках, мы ставим слова частоты (always — всегда, usually — обычно, rarely — редко, never — никогда) ПЕРЕД обычным глаголом (I usually wake up at 7), но ПОСЛЕ глагола to be (I am never late)."
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "He takes a warm shower before breakfast.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "I usually wake up before my alarm • She is never in a hurry",
                    "example": "My alarm rings at seven o'clock.",
                    "note": "Наречия частоты (always, usually, never) в нашем расписании"
                }
            ],
            "cambridgeTip": "В теме «Распорядок» мы сразу применяем правило (Наречия частоты (always, usually, never) в нашем расписании) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_11_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Распорядок • A2",
                "prompt": "Выбери верный порядок слов для описания хорошей привычки:\n«Alex ___ his morning schedule on time.»",
                "options": [
                    "always starts",
                    "starts always",
                    "is always start",
                    "always start"
                ],
                "correct": "always starts",
                "explanation": "Наречие always ставится перед смысловым глаголом starts."
            },
            {
                "id": "unit_a2_11_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Распорядок • Конструктор фразы",
                "prompt": "Собери фразу: «Я обычно принимаю тёплый душ после будильника»",
                "words": [
                    "I",
                    "usually",
                    "take",
                    "a",
                    "warm",
                    "shower.",
                    "takes",
                    "am"
                ],
                "distractors": [
                    "takes",
                    "am"
                ],
                "correct": "I usually take a warm shower.",
                "explanation": "Usually стоит между подлежащим I и глаголом take.",
                "promptRu": "Собери фразу: «Я обычно принимаю тёплый душ после будильника»",
                "correctSentence": "I usually take a warm shower."
            },
            {
                "id": "unit_a2_11_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Распорядок • Чтение",
                "storyTitle": "Секрет спокойного утра",
                "paragraphs": [
                    {
                        "en": "A calm morning is my favourite healthy habit. My alarm rings at 6:30, so I never hurry before work.",
                        "ru": ""
                    },
                    {
                        "en": "I usually take a refreshing shower, drink herbal tea, and check my schedule for the day. When you start the day peacefully, everything goes smoothly!",
                        "ru": ""
                    }
                ],
                "prompt": "Почему герою никогда не приходится спешить по утрам?",
                "options": [
                    "Его будильник звонит рано — в 6:30",
                    "Он работает ночью",
                    "Ему не нужно на работу"
                ],
                "correct": "Его будильник звонит рано — в 6:30",
                "explanation": "В тексте: My alarm rings at 6:30, so I never hurry."
            },
            {
                "id": "unit_a2_11_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Распорядок • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "I usually wake up early and never hurry in the morning.",
                "translationRu": "Я обычно просыпаюсь рано и никогда не спешу по утрам.",
                "options": [
                    "I usually wake up early and never hurry in the morning.",
                    "My alarm rings at eight o'clock.",
                    "She has a very busy schedule today."
                ],
                "correct": "I usually wake up early and never hurry in the morning.",
                "explanation": "Прозвучала фраза: «I usually wake up early and never hurry in the morning.» (Я обычно просыпаюсь рано и никогда не спешу по утрам.)."
            },
            {
                "id": "unit_a2_11_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Распорядок • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Waking up early is my favourite healthy habit.",
                "translationRu": "Просыпаться рано — моя любимая полезная привычка.",
                "correct": "Waking up early is my favourite healthy habit.",
                "explanation": "Отличное произношение! «Waking up early is my favourite healthy habit.» — Просыпаться рано — моя любимая полезная привычка.."
            }
        ]
    },
    {
        "id": "unit_a2_12",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 12,
        "nodeType": "five_stage",
        "titleRu": "Транспорт",
        "titleEn": "Транспорт",
        "icon": "🚆",
        "sources": [
            "Тема: Транспорт",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "platform",
                "tr": "[ˈplætfɔːm]",
                "ru": "платформа, перрон",
                "ex": "The express train leaves from platform three.",
                "example": "The express train leaves from platform three."
            },
            {
                "en": "passenger",
                "tr": "[ˈpæsɪndʒə]",
                "ru": "пассажир",
                "ex": "Every passenger showed a ticket.",
                "example": "Every passenger showed a ticket."
            },
            {
                "en": "luggage",
                "tr": "[ˈlʌɡɪdʒ]",
                "ru": "багаж",
                "ex": "We put our luggage on the upper shelf.",
                "example": "We put our luggage on the upper shelf."
            },
            {
                "en": "delayed",
                "tr": "[dɪˈleɪd]",
                "ru": "задержанный (о рейсе)",
                "ex": "Our flight was delayed by twenty minutes.",
                "example": "Our flight was delayed by twenty minutes."
            },
            {
                "en": "carriage",
                "tr": "[ˈkærɪdʒ]",
                "ru": "вагон поезда",
                "ex": "We found our seats in the quiet carriage.",
                "example": "We found our seats in the quiet carriage."
            },
            {
                "en": "timetable",
                "tr": "[ˈtaɪmteɪbl]",
                "ru": "расписание поездов (A2)",
                "ex": "We checked the train timetable at the station.",
                "example": "We checked the train timetable at the station."
            },
            {
                "en": "journey",
                "tr": "[ˈdʒɜːni]",
                "ru": "поездка, путь (A2)",
                "ex": "The train journey to the coast took two hours.",
                "example": "The train journey to the coast took two hours."
            },
            {
                "en": "return",
                "tr": "[rɪˈtɜːn]",
                "ru": "обратный билет (return ticket) (A2)",
                "ex": "I bought a return ticket to Brighton.",
                "example": "I bought a return ticket to Brighton."
            },
            {
                "en": "seat",
                "tr": "[siːt]",
                "ru": "место (для сидения) (A2)",
                "ex": "We booked two window seats in the carriage.",
                "example": "We booked two window seats in the carriage."
            },
            {
                "en": "miss",
                "tr": "[mɪs]",
                "ru": "опоздать на (поезд/автобус) (A2)",
                "ex": "Hurry up, or we will miss our train!",
                "example": "Hurry up, or we will miss our train!"
            }
        ],
        "readingPassage": {
            "titleEn": "Ночной экспресс к морю",
            "titleRu": "Транспорт",
            "audioFull": "Last Friday we travelled to the coast by train. We arrived at the station early, bought hot coffee, and walked to platform four. The train was not delayed at all. Every passenger took a seat in a comfortable carriage, put the luggage above, and enjoyed the scenic trip.",
            "paragraphs": [
                {
                    "en": "Last Friday we travelled to the coast by train. We arrived at the station early, bought hot coffee, and walked to platform four.",
                    "ru": ""
                },
                {
                    "en": "The train was not delayed at all. Every passenger took a seat in a comfortable carriage, put the luggage above, and enjoyed the scenic trip.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Past Simple — как прошла наша поездка вчера",
            "skyNote": "Рассказывая о состоявшейся поездке, используем прошедшее время Past Simple: правильные глаголы получают -ed (arrived, waited), а неправильные меняют форму (left — отправился, found — нашли, took — сели на поезд).",
            "summary": "Рассказывая о состоявшейся поездке, используем прошедшее время Past Simple: правильные глаголы получают -ed (arrived, waited), а неправильные меняют форму (left — отправился, found — нашли, took — сели на поезд).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Транспорт» (A2)",
                    "example": "The express train leaves from platform three.",
                    "note": "Формула: The train left from platform 2 • We found our carriage. Рассказывая о состоявшейся поездке, используем прошедшее время Past Simple: правильные глаголы получают -ed (arrived, waited), а неправильные меняют форму (left — отправился, found — нашли, took — сели на поезд)."
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "Every passenger showed a ticket.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "The train left from platform 2 • We found our carriage",
                    "example": "The express train leaves from platform three.",
                    "note": "Past Simple — как прошла наша поездка вчера"
                }
            ],
            "cambridgeTip": "В теме «Транспорт» мы сразу применяем правило (Past Simple — как прошла наша поездка вчера) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_12_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Транспорт • A2",
                "prompt": "Расскажи о вчерашней посадке на поезд:\n«Yesterday we ___ our heavy luggage into the third carriage.»",
                "options": [
                    "carried",
                    "carry",
                    "are carrying",
                    "will carry"
                ],
                "correct": "carried",
                "explanation": "Слово Yesterday указывает на Past Simple (carried)."
            },
            {
                "id": "unit_a2_12_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Транспорт • Конструктор фразы",
                "prompt": "Собери фразу: «Скорый поезд отправился с четвёртой платформы вовремя»",
                "words": [
                    "The",
                    "express",
                    "train",
                    "left",
                    "from",
                    "platform",
                    "four.",
                    "leave",
                    "leaving"
                ],
                "distractors": [
                    "leave",
                    "leaving"
                ],
                "correct": "The express train left from platform four.",
                "explanation": "Вторая форма неправильного глагола leave — left.",
                "promptRu": "Собери фразу: «Скорый поезд отправился с четвёртой платформы вовремя»",
                "correctSentence": "The express train left from platform four."
            },
            {
                "id": "unit_a2_12_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Транспорт • Чтение",
                "storyTitle": "Ночной экспресс к морю",
                "paragraphs": [
                    {
                        "en": "Last Friday we travelled to the coast by train. We arrived at the station early, bought hot coffee, and walked to platform four.",
                        "ru": ""
                    },
                    {
                        "en": "The train was not delayed at all. Every passenger took a seat in a comfortable carriage, put the luggage above, and enjoyed the scenic trip.",
                        "ru": ""
                    }
                ],
                "prompt": "С какой платформы отправлялся поезд к побережью?",
                "options": [
                    "С четвёртой платформы",
                    "С первой платформы",
                    "С девятой платформы"
                ],
                "correct": "С четвёртой платформы",
                "explanation": "В тексте: walked to platform four."
            },
            {
                "id": "unit_a2_12_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Транспорт • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Every passenger took a seat in the quiet carriage.",
                "translationRu": "Каждый пассажир занял место в тихом вагоне.",
                "options": [
                    "Every passenger took a seat in the quiet carriage.",
                    "Our flight was delayed yesterday.",
                    "Where is your heavy luggage?"
                ],
                "correct": "Every passenger took a seat in the quiet carriage.",
                "explanation": "Прозвучала фраза: «Every passenger took a seat in the quiet carriage.» (Каждый пассажир занял место в тихом вагоне.)."
            },
            {
                "id": "unit_a2_12_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Транспорт • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Our train left from platform four right on time.",
                "translationRu": "Наш поезд отправился с четвёртой платформы точно вовремя.",
                "correct": "Our train left from platform four right on time.",
                "explanation": "Отличное произношение! «Our train left from platform four right on time.» — Наш поезд отправился с четвёртой платформы точно вовремя.."
            }
        ]
    },
    {
        "id": "unit_a2_13",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 13,
        "nodeType": "five_stage",
        "titleRu": "Одежда",
        "titleEn": "Одежда",
        "icon": "🧥",
        "sources": [
            "Тема: Одежда",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "sweater",
                "tr": "[ˈswetə]",
                "ru": "свитер",
                "ex": "This wool sweater is softer than that one.",
                "example": "This wool sweater is softer than that one."
            },
            {
                "en": "cotton",
                "tr": "[ˈkɒtn]",
                "ru": "хлопок; хлопковый",
                "ex": "In summer I prefer light cotton shirts.",
                "example": "In summer I prefer light cotton shirts."
            },
            {
                "en": "comfortable",
                "tr": "[ˈkʌmftəbl]",
                "ru": "удобный, комфортный",
                "ex": "These sneakers are the most comfortable shoes I own.",
                "example": "These sneakers are the most comfortable shoes I own."
            },
            {
                "en": "elegant",
                "tr": "[ˈelɪɡənt]",
                "ru": "элегантный, изящный",
                "ex": "She wore an elegant silk dress to the theatre.",
                "example": "She wore an elegant silk dress to the theatre."
            },
            {
                "en": "pocket",
                "tr": "[ˈpɒkɪt]",
                "ru": "карман",
                "ex": "I put my keys in my coat pocket.",
                "example": "I put my keys in my coat pocket."
            },
            {
                "en": "wool",
                "tr": "[wʊl]",
                "ru": "шерсть; шерстяной (A2)",
                "ex": "This wool scarf is warmer than a cotton one.",
                "example": "This wool scarf is warmer than a cotton one."
            },
            {
                "en": "leather",
                "tr": "[ˈleðə]",
                "ru": "кожа; кожаный (A2)",
                "ex": "Leather boots are more durable in autumn.",
                "example": "Leather boots are more durable in autumn."
            },
            {
                "en": "scarf",
                "tr": "[skɑːf]",
                "ru": "шарф (A2)",
                "ex": "She wore a soft knitted scarf.",
                "example": "She wore a soft knitted scarf."
            },
            {
                "en": "gloves",
                "tr": "[ɡlʌvz]",
                "ru": "перчатки (A2)",
                "ex": "Keep your warm gloves in your coat pocket.",
                "example": "Keep your warm gloves in your coat pocket."
            },
            {
                "en": "fashionable",
                "tr": "[ˈfæʃnəbl]",
                "ru": "модный, стильный (A2)",
                "ex": "This coat is both warm and fashionable.",
                "example": "This coat is both warm and fashionable."
            }
        ],
        "readingPassage": {
            "titleEn": "Выбор наряда для прохладного вечера",
            "titleRu": "Одежда",
            "audioFull": "Autumn evenings by the bay can be windy. A light cotton shirt is nice at noon, but a knitted wool sweater is much warmer after sunset. For our evening walk, Leo chose his most comfortable coat with deep pockets, and Mia wore an elegant scarf.",
            "paragraphs": [
                {
                    "en": "Autumn evenings by the bay can be windy. A light cotton shirt is nice at noon, but a knitted wool sweater is much warmer after sunset.",
                    "ru": ""
                },
                {
                    "en": "For our evening walk, Leo chose his most comfortable coat with deep pockets, and Mia wore an elegant scarf.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Сравнение одежды: теплее, удобнее, самый элегантный (-er / more / the most)",
            "skyNote": "Короткие прилагательные при сравнении получают -er / the -est (warmer — теплее, the softest — самый мягкий). А длинные слова из 3+ слогов (comfortable, elegant) сравниваются с помощью more и the most!",
            "summary": "Короткие прилагательные при сравнении получают -er / the -est (warmer — теплее, the softest — самый мягкий). А длинные слова из 3+ слогов (comfortable, elegant) сравниваются с помощью more и the most!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Одежда» (A2)",
                    "example": "This wool sweater is softer than that one.",
                    "note": "Формула: softer than cotton • more comfortable • the most elegant dress. Короткие прилагательные при сравнении получают -er / the -est (warmer — теплее, the softest — самый мягкий). А длинные слова из 3+ слогов (comfortable, elegant) сравниваются с помощью more и the most!"
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "In summer I prefer light cotton shirts.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "softer than cotton • more comfortable • the most elegant dress",
                    "example": "This wool sweater is softer than that one.",
                    "note": "Сравнение одежды: теплее, удобнее, самый элегантный (-er / more / the most)"
                }
            ],
            "cambridgeTip": "В теме «Одежда» мы сразу применяем правило (Сравнение одежды: теплее, удобнее, самый элегантный (-er / more / the most)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_13_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Одежда • A2",
                "prompt": "Сравни две пары обуви для долгой прогулки:\n«These white sneakers are ___ than leather boots.»",
                "options": [
                    "more comfortable",
                    "comfortabler",
                    "most comfortable",
                    "as comfortable"
                ],
                "correct": "more comfortable",
                "explanation": "Comfortable — длинное прилагательное, поэтому со словом than используем more comfortable."
            },
            {
                "id": "unit_a2_13_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Одежда • Конструктор фразы",
                "prompt": "Собери фразу: «Этот шерстяной свитер теплее, чем хлопковая рубашка»",
                "words": [
                    "This",
                    "wool",
                    "sweater",
                    "is",
                    "warmer",
                    "than",
                    "cotton.",
                    "more",
                    "warmest"
                ],
                "distractors": [
                    "more",
                    "warmest"
                ],
                "correct": "This wool sweater is warmer than cotton.",
                "explanation": "Короткое прилагательное warm образует сравнительную степень warmer than.",
                "promptRu": "Собери фразу: «Этот шерстяной свитер теплее, чем хлопковая рубашка»",
                "correctSentence": "This wool sweater is warmer than cotton."
            },
            {
                "id": "unit_a2_13_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Одежда • Чтение",
                "storyTitle": "Выбор наряда для прохладного вечера",
                "paragraphs": [
                    {
                        "en": "Autumn evenings by the bay can be windy. A light cotton shirt is nice at noon, but a knitted wool sweater is much warmer after sunset.",
                        "ru": ""
                    },
                    {
                        "en": "For our evening walk, Leo chose his most comfortable coat with deep pockets, and Mia wore an elegant scarf.",
                        "ru": ""
                    }
                ],
                "prompt": "Почему вечером свитер лучше хлопковой рубашки?",
                "options": [
                    "Он намного теплее после заката",
                    "У него больше карманов",
                    "Он быстрее сохнет"
                ],
                "correct": "Он намного теплее после заката",
                "explanation": "В тексте: a knitted wool sweater is much warmer after sunset."
            },
            {
                "id": "unit_a2_13_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Одежда • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "This knitted sweater is softer and warmer than a shirt.",
                "translationRu": "Этот вязаный свитер мягче и теплее, чем рубашка.",
                "options": [
                    "This knitted sweater is softer and warmer than a shirt.",
                    "She bought the most elegant dress.",
                    "My coat has two deep pockets."
                ],
                "correct": "This knitted sweater is softer and warmer than a shirt.",
                "explanation": "Прозвучала фраза: «This knitted sweater is softer and warmer than a shirt.» (Этот вязаный свитер мягче и теплее, чем рубашка.)."
            },
            {
                "id": "unit_a2_13_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Одежда • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "These sneakers are the most comfortable shoes for walking.",
                "translationRu": "Эти кроссовки — самая удобная обувь для прогулок.",
                "correct": "These sneakers are the most comfortable shoes for walking.",
                "explanation": "Отличное произношение! «These sneakers are the most comfortable shoes for walking.» — Эти кроссовки — самая удобная обувь для прогулок.."
            }
        ]
    },
    {
        "id": "unit_a2_14",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 14,
        "nodeType": "five_stage",
        "titleRu": "Хобби",
        "titleEn": "Хобби",
        "icon": "🎨",
        "sources": [
            "Тема: Хобби",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "watercolor",
                "tr": "[ˈwɔːtəkʌlə]",
                "ru": "акварель; акварельный",
                "ex": "She enjoys painting seascapes in watercolor.",
                "example": "She enjoys painting seascapes in watercolor."
            },
            {
                "en": "pottery",
                "tr": "[ˈpɒtəri]",
                "ru": "керамика, гончарное дело",
                "ex": "Making pottery relaxes my mind.",
                "example": "Making pottery relaxes my mind."
            },
            {
                "en": "guitar",
                "tr": "[ɡɪˈtɑː]",
                "ru": "гитара",
                "ex": "He practices playing the guitar every evening.",
                "example": "He practices playing the guitar every evening."
            },
            {
                "en": "canvas",
                "tr": "[ˈkænvəs]",
                "ru": "холст",
                "ex": "I bought a clean canvas and soft brushes.",
                "example": "I bought a clean canvas and soft brushes."
            },
            {
                "en": "creative",
                "tr": "[kriˈeɪtɪv]",
                "ru": "творческий, креативный",
                "ex": "Photography is a wonderful creative hobby.",
                "example": "Photography is a wonderful creative hobby."
            },
            {
                "en": "photography",
                "tr": "[fəˈtɒɡrəfi]",
                "ru": "фотография (увлечение) (A2)",
                "ex": "He is interested in nature photography.",
                "example": "He is interested in nature photography."
            },
            {
                "en": "instrument",
                "tr": "[ˈɪnstrəmənt]",
                "ru": "музыкальный инструмент (A2)",
                "ex": "Learning a musical instrument is rewarding.",
                "example": "Learning a musical instrument is rewarding."
            },
            {
                "en": "collect",
                "tr": "[kəˈlekt]",
                "ru": "коллекционировать, собирать (A2)",
                "ex": "She enjoys collecting rare seashells.",
                "example": "She enjoys collecting rare seashells."
            },
            {
                "en": "member",
                "tr": "[ˈmembə]",
                "ru": "участник, член клуба (A2)",
                "ex": "I became a member of the art club.",
                "example": "I became a member of the art club."
            },
            {
                "en": "join",
                "tr": "[dʒɔɪn]",
                "ru": "присоединяться, вступать (A2)",
                "ex": "Would you like to join our pottery class?",
                "example": "Would you like to join our pottery class?"
            }
        ],
        "readingPassage": {
            "titleEn": "Мастерская у старого маяка",
            "titleRu": "Хобби",
            "audioFull": "Every Sunday our friends gather in a bright studio near the lighthouse. Everyone has a creative hobby here. Daniel enjoys playing acoustic guitar by the window. Meanwhile, I love painting ocean waves in watercolor on textured paper, and Nora is keen on making ceramic pottery cups.",
            "paragraphs": [
                {
                    "en": "Every Sunday our friends gather in a bright studio near the lighthouse. Everyone has a creative hobby here.",
                    "ru": ""
                },
                {
                    "en": "Daniel enjoys playing acoustic guitar by the window. Meanwhile, I love painting ocean waves in watercolor on textured paper, and Nora is keen on making ceramic pottery cups.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Любимые занятия с глаголами на -ing (enjoy / love / keen on painting)",
            "skyNote": "Когда мы говорим о хобби после глаголов enjoy (получать удовольствие), love, like, mind или после предлогов (good at, keen on, interested in), следующее действие ставится с окончанием -ing: I enjoy painting in watercolor! She is good at making pottery!",
            "summary": "Когда мы говорим о хобби после глаголов enjoy (получать удовольствие), love, like, mind или после предлогов (good at, keen on, interested in), следующее действие ставится с окончанием -ing: I enjoy painting in watercolor! She is good at making pottery!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Хобби» (A2)",
                    "example": "She enjoys painting seascapes in watercolor.",
                    "note": "Формула: enjoy painting on canvas • keen on playing the guitar. Когда мы говорим о хобби после глаголов enjoy (получать удовольствие), love, like, mind или после предлогов (good at, keen on, interested in), следующее действие ставится с окончанием -ing: I enjoy painting in watercolor! She is good at making pottery!"
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "Making pottery relaxes my mind.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "enjoy painting on canvas • keen on playing the guitar",
                    "example": "She enjoys painting seascapes in watercolor.",
                    "note": "Любимые занятия с глаголами на -ing (enjoy / love / keen on painting)"
                }
            ],
            "cambridgeTip": "В теме «Хобби» мы сразу применяем правило (Любимые занятия с глаголами на -ing (enjoy / love / keen on painting)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_14_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Хобби • A2",
                "prompt": "Расскажи о своём творческом увлечении:\n«Sophia is really good at ___ seascapes in watercolor.»",
                "options": [
                    "painting",
                    "paint",
                    "to paint",
                    "painted"
                ],
                "correct": "painting",
                "explanation": "После предлога at (good at) глагол всегда принимает форму герундия с окончанием -ing (painting)."
            },
            {
                "id": "unit_a2_14_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Хобби • Конструктор фразы",
                "prompt": "Собери фразу: «Я получаю огромное удовольствие от лепки керамики по выходным»",
                "words": [
                    "I",
                    "really",
                    "enjoy",
                    "making",
                    "pottery",
                    "on",
                    "weekends.",
                    "make",
                    "to make"
                ],
                "distractors": [
                    "make",
                    "to make"
                ],
                "correct": "I really enjoy making pottery on weekends.",
                "explanation": "После глагола enjoy используется форма с -ing (making).",
                "promptRu": "Собери фразу: «Я получаю огромное удовольствие от лепки керамики по выходным»",
                "correctSentence": "I really enjoy making pottery on weekends."
            },
            {
                "id": "unit_a2_14_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Хобби • Чтение",
                "storyTitle": "Мастерская у старого маяка",
                "paragraphs": [
                    {
                        "en": "Every Sunday our friends gather in a bright studio near the lighthouse. Everyone has a creative hobby here.",
                        "ru": ""
                    },
                    {
                        "en": "Daniel enjoys playing acoustic guitar by the window. Meanwhile, I love painting ocean waves in watercolor on textured paper, and Nora is keen on making ceramic pottery cups.",
                        "ru": ""
                    }
                ],
                "prompt": "Что любит мастерить Нора в студии?",
                "options": [
                    "Керамические чашки (pottery)",
                    "Деревянные игрушки",
                    "Свечи"
                ],
                "correct": "Керамические чашки (pottery)",
                "explanation": "В тексте: Nora is keen on making ceramic pottery cups."
            },
            {
                "id": "unit_a2_14_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Хобби • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "She really enjoys painting ocean waves in watercolor.",
                "translationRu": "Ей очень нравится рисовать океанские волны акварелью.",
                "options": [
                    "She really enjoys painting ocean waves in watercolor.",
                    "He bought a new guitar yesterday.",
                    "Pottery is a very relaxing hobby."
                ],
                "correct": "She really enjoys painting ocean waves in watercolor.",
                "explanation": "Прозвучала фраза: «She really enjoys painting ocean waves in watercolor.» (Ей очень нравится рисовать океанские волны акварелью.)."
            },
            {
                "id": "unit_a2_14_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Хобби • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "I enjoy painting in watercolor and playing the guitar.",
                "translationRu": "Мне нравится рисовать акварелью и играть на гитаре.",
                "correct": "I enjoy painting in watercolor and playing the guitar.",
                "explanation": "Отличное произношение! «I enjoy painting in watercolor and playing the guitar.» — Мне нравится рисовать акварелью и играть на гитаре.."
            }
        ]
    },
    {
        "id": "unit_a2_15",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 15,
        "nodeType": "five_stage",
        "titleRu": "Здоровье",
        "titleEn": "Здоровье",
        "icon": "🍵",
        "sources": [
            "Тема: Здоровье",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "throat",
                "tr": "[θrəʊt]",
                "ru": "горло",
                "ex": "I have a sore throat, so I drink warm tea with honey.",
                "example": "I have a sore throat, so I drink warm tea with honey."
            },
            {
                "en": "headache",
                "tr": "[ˈhedeɪk]",
                "ru": "головная боль",
                "ex": "Fresh air helped me get rid of my headache.",
                "example": "Fresh air helped me get rid of my headache."
            },
            {
                "en": "medicine",
                "tr": "[ˈmedsn]",
                "ru": "лекарство",
                "ex": "Take this medicine twice a day after meals.",
                "example": "Take this medicine twice a day after meals."
            },
            {
                "en": "vitamin",
                "tr": "[ˈvɪtəmɪn]",
                "ru": "витамин",
                "ex": "Citrus fruits are rich in vitamins.",
                "example": "Citrus fruits are rich in vitamins."
            },
            {
                "en": "rest",
                "tr": "[rest]",
                "ru": "отдых; отдыхать",
                "ex": "You should get plenty of rest tonight.",
                "example": "You should get plenty of rest tonight."
            },
            {
                "en": "fever",
                "tr": "[ˈfiːvə]",
                "ru": "жар, высокая температура (A2)",
                "ex": "If you have a fever, you should stay in bed.",
                "example": "If you have a fever, you should stay in bed."
            },
            {
                "en": "cough",
                "tr": "[kɒf]",
                "ru": "кашель; кашлять (A2)",
                "ex": "Warm honey tea helps with a cough.",
                "example": "Warm honey tea helps with a cough."
            },
            {
                "en": "pharmacy",
                "tr": "[ˈfɑːməsi]",
                "ru": "аптека (A2)",
                "ex": "You can buy these vitamins at the pharmacy.",
                "example": "You can buy these vitamins at the pharmacy."
            },
            {
                "en": "appointment",
                "tr": "[əˈpɔɪntmənt]",
                "ru": "запись на приём к врачу (A2)",
                "ex": "I have a doctor's appointment at ten.",
                "example": "I have a doctor's appointment at ten."
            },
            {
                "en": "exercise",
                "tr": "[ˈeksəsaɪz]",
                "ru": "физическая зарядка, упражнения (A2)",
                "ex": "You should do light exercise every day.",
                "example": "You should do light exercise every day."
            }
        ],
        "readingPassage": {
            "titleEn": "Чай с мёдом и забота",
            "titleRu": "Здоровье",
            "audioFull": "Yesterday Mark walked in the wind without a scarf, and today he has a slight headache and a sore throat. Dr. Evans examined him and said: 'Nothing dangerous, Mark! You should stay in bed, take these vitamins, drink warm ginger tea, and get plenty of rest.'",
            "paragraphs": [
                {
                    "en": "Yesterday Mark walked in the wind without a scarf, and today he has a slight headache and a sore throat.",
                    "ru": ""
                },
                {
                    "en": "Dr. Evans examined him and said: 'Nothing dangerous, Mark! You should stay in bed, take these vitamins, drink warm ginger tea, and get plenty of rest.'",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Добрые советы о самочувствии: should / shouldn't и must",
            "skyNote": "Когда у друга болит горло или голова, мы даём заботливый совет с помощью глагола should (следует) или shouldn't (не следует) + базовый глагол без to: You should drink warm tea and get some rest!",
            "summary": "Когда у друга болит горло или голова, мы даём заботливый совет с помощью глагола should (следует) или shouldn't (не следует) + базовый глагол без to: You should drink warm tea and get some rest!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Здоровье» (A2)",
                    "example": "I have a sore throat, so I drink warm tea with honey.",
                    "note": "Формула: You should get some rest • You shouldn't drink cold water. Когда у друга болит горло или голова, мы даём заботливый совет с помощью глагола should (следует) или shouldn't (не следует) + базовый глагол без to: You should drink warm tea and get some rest!"
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "Fresh air helped me get rid of my headache.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "You should get some rest • You shouldn't drink cold water",
                    "example": "I have a sore throat, so I drink warm tea with honey.",
                    "note": "Добрые советы о самочувствии: should / shouldn't и must"
                }
            ],
            "cambridgeTip": "В теме «Здоровье» мы сразу применяем правило (Добрые советы о самочувствии: should / shouldn't и must) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_15_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Здоровье • A2",
                "prompt": "Дай тёплый совет другу, у которого болит горло:\n«If you have a sore throat, you ___ drink warm herbal tea with honey.»",
                "options": [
                    "should",
                    "should to",
                    "are",
                    "having"
                ],
                "correct": "should",
                "explanation": "После модального глагола совета should частица to не ставится: should drink."
            },
            {
                "id": "unit_a2_15_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Здоровье • Конструктор фразы",
                "prompt": "Собери совет врача: «Тебе следует отдохнуть и принять витамины»",
                "words": [
                    "You",
                    "should",
                    "get",
                    "some",
                    "rest",
                    "today.",
                    "to",
                    "resting"
                ],
                "distractors": [
                    "to",
                    "resting"
                ],
                "correct": "You should get some rest today.",
                "explanation": "Конструкция совета — You should + начальная форма глагола (get).",
                "promptRu": "Собери совет врача: «Тебе следует отдохнуть и принять витамины»",
                "correctSentence": "You should get some rest today."
            },
            {
                "id": "unit_a2_15_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Здоровье • Чтение",
                "storyTitle": "Чай с мёдом и забота",
                "paragraphs": [
                    {
                        "en": "Yesterday Mark walked in the wind without a scarf, and today he has a slight headache and a sore throat.",
                        "ru": ""
                    },
                    {
                        "en": "Dr. Evans examined him and said: 'Nothing dangerous, Mark! You should stay in bed, take these vitamins, drink warm ginger tea, and get plenty of rest.'",
                        "ru": ""
                    }
                ],
                "prompt": "Что доктор посоветовал Марку сделать в первую очередь?",
                "options": [
                    "Остаться в постели, пить тёплый чай и отдохнуть",
                    "Побежать марафон",
                    "Выпить ледяной воды"
                ],
                "correct": "Остаться в постели, пить тёплый чай и отдохнуть",
                "explanation": "В тексте: You should stay in bed, take these vitamins, drink warm ginger tea, and get plenty of rest."
            },
            {
                "id": "unit_a2_15_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Здоровье • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "You should drink warm tea and get plenty of rest.",
                "translationRu": "Тебе следует выпить тёплого чая и хорошенько отдохнуть.",
                "options": [
                    "You should drink warm tea and get plenty of rest.",
                    "I have a slight headache today.",
                    "Did you buy the medicine at the pharmacy?"
                ],
                "correct": "You should drink warm tea and get plenty of rest.",
                "explanation": "Прозвучала фраза: «You should drink warm tea and get plenty of rest.» (Тебе следует выпить тёплого чая и хорошенько отдохнуть.)."
            },
            {
                "id": "unit_a2_15_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Здоровье • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "You should drink warm tea with honey and get some rest.",
                "translationRu": "Тебе следует выпить тёплого чая с мёдом и немного отдохнуть.",
                "correct": "You should drink warm tea with honey and get some rest.",
                "explanation": "Отличное произношение! «You should drink warm tea with honey and get some rest.» — Тебе следует выпить тёплого чая с мёдом и немного отдохнуть.."
            }
        ]
    },
    {
        "id": "unit_a2_16",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 16,
        "nodeType": "five_stage",
        "titleRu": "Отель",
        "titleEn": "Отель",
        "icon": "🛎️",
        "sources": [
            "Тема: Отель",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "reception",
                "tr": "[rɪˈsepʃn]",
                "ru": "стойка регистрации (ресепшен)",
                "ex": "Please leave your room key at the reception.",
                "example": "Please leave your room key at the reception."
            },
            {
                "en": "balcony",
                "tr": "[ˈbælkəni]",
                "ru": "балкон",
                "ex": "Our room has a sunny balcony overlooking the sea.",
                "example": "Our room has a sunny balcony overlooking the sea."
            },
            {
                "en": "towel",
                "tr": "[ˈtaʊəl]",
                "ru": "полотенце",
                "ex": "Clean white towels are in the bathroom.",
                "example": "Clean white towels are in the bathroom."
            },
            {
                "en": "reservation",
                "tr": "[ˌrezəˈveɪʃn]",
                "ru": "бронирование, бронь",
                "ex": "I have a hotel reservation under the name Miller.",
                "example": "I have a hotel reservation under the name Miller."
            },
            {
                "en": "view",
                "tr": "[vjuː]",
                "ru": "вид (из окна)",
                "ex": "What a breathtaking ocean view!",
                "example": "What a breathtaking ocean view!"
            },
            {
                "en": "blanket",
                "tr": "[ˈblæŋkɪt]",
                "ru": "одеяло (A2)",
                "ex": "There is an extra warm blanket in the wardrobe.",
                "example": "There is an extra warm blanket in the wardrobe."
            },
            {
                "en": "pillow",
                "tr": "[ˈpɪləʊ]",
                "ru": "подушка (A2)",
                "ex": "Every bed has two soft pillows.",
                "example": "Every bed has two soft pillows."
            },
            {
                "en": "lift",
                "tr": "[lɪft]",
                "ru": "лифт (A2)",
                "ex": "Take the lift to the চতুর্থ floor.",
                "example": "Take the lift to the চতুর্থ floor."
            },
            {
                "en": "guest",
                "tr": "[ɡest]",
                "ru": "гость, постоялец (A2)",
                "ex": "Every hotel guest receives a welcome drink.",
                "example": "Every hotel guest receives a welcome drink."
            },
            {
                "en": "key",
                "tr": "[kiː]",
                "ru": "ключ, ключ-карта (A2)",
                "ex": "Here is the key card to your room.",
                "example": "Here is the key card to your room."
            }
        ],
        "readingPassage": {
            "titleEn": "Номер с видом на лагуну",
            "titleRu": "Отель",
            "audioFull": "When we arrived at the coastal hotel, the receptionist checked our reservation and smiled warmly. She gave us a room on the top floor with a wide balcony. Everything in the room was fresh and cozy, with soft towels and flowers on the table. Looking at the turquoise ocean view, we felt completely happy.",
            "paragraphs": [
                {
                    "en": "When we arrived at the coastal hotel, the receptionist checked our reservation and smiled warmly. She gave us a room on the top floor with a wide balcony.",
                    "ru": ""
                },
                {
                    "en": "Everything in the room was fresh and cozy, with soft towels and flowers on the table. Looking at the turquoise ocean view, we felt completely happy.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Местоимения чего-то неопределённого: something, anything, everything",
            "skyNote": "Заселяясь в отель, удобно использовать: everything (всё: Everything in the room is clean), something (что-то в утверждениях и вежливых предложениях), anything (что-угодно в вопросах и отрицаниях: Do you need anything else from reception?).",
            "summary": "Заселяясь в отель, удобно использовать: everything (всё: Everything in the room is clean), something (что-то в утверждениях и вежливых предложениях), anything (что-угодно в вопросах и отрицаниях: Do you need anything else from reception?).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Отель» (A2)",
                    "example": "Please leave your room key at the reception.",
                    "note": "Формула: Everything is ready • Do you need anything else?. Заселяясь в отель, удобно использовать: everything (всё: Everything in the room is clean), something (что-то в утверждениях и вежливых предложениях), anything (что-угодно в вопросах и отрицаниях: Do you need anything else from reception?)."
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "Our room has a sunny balcony overlooking the sea.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Everything is ready • Do you need anything else?",
                    "example": "Please leave your room key at the reception.",
                    "note": "Местоимения чего-то неопределённого: something, anything, everything"
                }
            ],
            "cambridgeTip": "В теме «Отель» мы сразу применяем правило (Местоимения чего-то неопределённого: something, anything, everything) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_16_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Отель • A2",
                "prompt": "Администратор на ресепшене вежливо спрашивает тебя:\n«Here is your key to the room with a sea view. Do you need ___ else, madam?»",
                "options": [
                    "anything",
                    "nothing",
                    "everything",
                    "some"
                ],
                "correct": "anything",
                "explanation": "В общем вопросе «Нужно ли вам что-нибудь ещё?» используется anything."
            },
            {
                "id": "unit_a2_16_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Отель • Конструктор фразы",
                "prompt": "Собери фразу: «В нашем номере с балконом всё просто прекрасно»",
                "words": [
                    "Everything",
                    "in",
                    "our",
                    "room",
                    "is",
                    "wonderful.",
                    "are",
                    "Anything"
                ],
                "distractors": [
                    "are",
                    "Anything"
                ],
                "correct": "Everything in our room is wonderful.",
                "explanation": "Слово Everything грамматически всегда согласуется с глаголом в единственном числе (is).",
                "promptRu": "Собери фразу: «В нашем номере с балконом всё просто прекрасно»",
                "correctSentence": "Everything in our room is wonderful."
            },
            {
                "id": "unit_a2_16_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Отель • Чтение",
                "storyTitle": "Номер с видом на лагуну",
                "paragraphs": [
                    {
                        "en": "When we arrived at the coastal hotel, the receptionist checked our reservation and smiled warmly. She gave us a room on the top floor with a wide balcony.",
                        "ru": ""
                    },
                    {
                        "en": "Everything in the room was fresh and cozy, with soft towels and flowers on the table. Looking at the turquoise ocean view, we felt completely happy.",
                        "ru": ""
                    }
                ],
                "prompt": "На каком этаже находился номер с широким балконом?",
                "options": [
                    "На самом верхнем этаже (top floor)",
                    "На первом этаже",
                    "В цокольном этаже"
                ],
                "correct": "На самом верхнем этаже (top floor)",
                "explanation": "В тексте: a room on the top floor with a wide balcony."
            },
            {
                "id": "unit_a2_16_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Отель • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Our hotel room has a sunny balcony with an ocean view.",
                "translationRu": "В нашем гостиничном номере есть солнечный балкон с видом на океан.",
                "options": [
                    "Our hotel room has a sunny balcony with an ocean view.",
                    "I have a reservation at the reception.",
                    "Could you bring some fresh towels?"
                ],
                "correct": "Our hotel room has a sunny balcony with an ocean view.",
                "explanation": "Прозвучала фраза: «Our hotel room has a sunny balcony with an ocean view.» (В нашем гостиничном номере есть солнечный балкон с видом на океан.)."
            },
            {
                "id": "unit_a2_16_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Отель • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "I have a reservation for a room with an ocean view.",
                "translationRu": "У меня бронь на номер с видом на океан.",
                "correct": "I have a reservation for a room with an ocean view.",
                "explanation": "Отличное произношение! «I have a reservation for a room with an ocean view.» — У меня бронь на номер с видом на океан.."
            }
        ]
    },
    {
        "id": "unit_a2_17",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 17,
        "nodeType": "five_stage",
        "titleRu": "Аэропорт",
        "titleEn": "Аэропорт",
        "icon": "✈️",
        "sources": [
            "Тема: Аэропорт",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "boarding",
                "tr": "[ˈbɔːdɪŋ]",
                "ru": "посадка на рейс",
                "ex": "Please show your boarding pass at the gate.",
                "example": "Please show your boarding pass at the gate."
            },
            {
                "en": "gate",
                "tr": "[ɡeɪt]",
                "ru": "выход на посадку (гейт)",
                "ex": "Our flight departs from gate twelve.",
                "example": "Our flight departs from gate twelve."
            },
            {
                "en": "customs",
                "tr": "[ˈkʌstəmz]",
                "ru": "таможня",
                "ex": "It took ten minutes to walk through customs.",
                "example": "It took ten minutes to walk through customs."
            },
            {
                "en": "seatbelt",
                "tr": "[ˈsiːtbelt]",
                "ru": "ремень безопасности",
                "ex": "Please fasten your seatbelt before takeoff.",
                "example": "Please fasten your seatbelt before takeoff."
            },
            {
                "en": "departure",
                "tr": "[dɪˈpɑːtʃə]",
                "ru": "вылет, отправление",
                "ex": "We checked the departure board in the hall.",
                "example": "We checked the departure board in the hall."
            },
            {
                "en": "flight",
                "tr": "[flaɪt]",
                "ru": "рейс, полёт (A2)",
                "ex": "Our morning flight was very smooth.",
                "example": "Our morning flight was very smooth."
            },
            {
                "en": "arrival",
                "tr": "[əˈraɪvl]",
                "ru": "прибытие, прилёт (A2)",
                "ex": "We met our friends in the arrivals hall.",
                "example": "We met our friends in the arrivals hall."
            },
            {
                "en": "security",
                "tr": "[sɪˈkjʊərəti]",
                "ru": "контроль безопасности (A2)",
                "ex": "Passengers must pass through airport security.",
                "example": "Passengers must pass through airport security."
            },
            {
                "en": "passport",
                "tr": "[ˈpɑːspɔːt]",
                "ru": "загранпаспорт (A2)",
                "ex": "You must show your passport at customs.",
                "example": "You must show your passport at customs."
            },
            {
                "en": "backpack",
                "tr": "[ˈbækpæk]",
                "ru": "рюкзак (ручная кладь) (A2)",
                "ex": "You don't have to check in a small backpack.",
                "example": "You don't have to check in a small backpack."
            }
        ],
        "readingPassage": {
            "titleEn": "Перед взлётом в облака",
            "titleRu": "Аэропорт",
            "audioFull": "At the airport, we checked the departure screen and walked straight through security to gate twelve. We didn't have to print paper tickets because our boarding passes were on our phones. Once inside the plane, the flight attendant greeted us and said: 'Welcome aboard! Please fasten your seatbelts and enjoy the flight.'",
            "paragraphs": [
                {
                    "en": "At the airport, we checked the departure screen and walked straight through security to gate twelve. We didn't have to print paper tickets because our boarding passes were on our phones.",
                    "ru": ""
                },
                {
                    "en": "Once inside the plane, the flight attendant greeted us and said: 'Welcome aboard! Please fasten your seatbelts and enjoy the flight.'",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Обязательные правила в полёте: must / have to / don't have to",
            "skyNote": "В аэропорту есть строгие правила безопасности: must / have to (обязан: Passengers must fasten their seatbelts), mustn't (строго нельзя) и don't have to (нет необходимости: You don't have to print your boarding pass if it is on your phone).",
            "summary": "В аэропорту есть строгие правила безопасности: must / have to (обязан: Passengers must fasten their seatbelts), mustn't (строго нельзя) и don't have to (нет необходимости: You don't have to print your boarding pass if it is on your phone).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Аэропорт» (A2)",
                    "example": "Please show your boarding pass at the gate.",
                    "note": "Формула: You must fasten your seatbelt • You don't have to print the ticket. В аэропорту есть строгие правила безопасности: must / have to (обязан: Passengers must fasten their seatbelts), mustn't (строго нельзя) и don't have to (нет необходимости: You don't have to print your boarding pass if it is on your phone)."
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "Our flight departs from gate twelve.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "You must fasten your seatbelt • You don't have to print the ticket",
                    "example": "Please show your boarding pass at the gate.",
                    "note": "Обязательные правила в полёте: must / have to / don't have to"
                }
            ],
            "cambridgeTip": "В теме «Аэропорт» мы сразу применяем правило (Обязательные правила в полёте: must / have to / don't have to) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_17_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Аэропорт • A2",
                "prompt": "Бортпроводник напоминает правило перед взлётом:\n«All passengers ___ fasten their seatbelts during takeoff.»",
                "options": [
                    "must",
                    "don't have to",
                    "mustn't",
                    "may not"
                ],
                "correct": "must",
                "explanation": "Пристегнуть ремень безопасности на взлёте — обязательное правило безопасности (must)."
            },
            {
                "id": "unit_a2_17_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Аэропорт • Конструктор фразы",
                "prompt": "Собери фразу: «Пожалуйста, покажите посадочный талон у выхода на посадку»",
                "words": [
                    "Please",
                    "show",
                    "your",
                    "boarding",
                    "pass",
                    "at",
                    "the",
                    "gate.",
                    "customs",
                    "must"
                ],
                "distractors": [
                    "customs",
                    "must"
                ],
                "correct": "Please show your boarding pass at the gate.",
                "explanation": "Boarding pass — посадочный талон, at the gate — у выхода на посадку.",
                "promptRu": "Собери фразу: «Пожалуйста, покажите посадочный талон у выхода на посадку»",
                "correctSentence": "Please show your boarding pass at the gate."
            },
            {
                "id": "unit_a2_17_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Аэропорт • Чтение",
                "storyTitle": "Перед взлётом в облака",
                "paragraphs": [
                    {
                        "en": "At the airport, we checked the departure screen and walked straight through security to gate twelve. We didn't have to print paper tickets because our boarding passes were on our phones.",
                        "ru": ""
                    },
                    {
                        "en": "Once inside the plane, the flight attendant greeted us and said: 'Welcome aboard! Please fasten your seatbelts and enjoy the flight.'",
                        "ru": ""
                    }
                ],
                "prompt": "Почему героям не пришлось печатать бумажные билеты?",
                "options": [
                    "Посадочные талоны были в телефонах",
                    "Билеты отменили",
                    "Их провели без билетов"
                ],
                "correct": "Посадочные талоны были в телефонах",
                "explanation": "В тексте: our boarding passes were on our phones."
            },
            {
                "id": "unit_a2_17_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Аэропорт • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Please fasten your seatbelt before departure.",
                "translationRu": "Пожалуйста, пристегните ремень безопасности перед вылетом.",
                "options": [
                    "Please fasten your seatbelt before departure.",
                    "Walk to gate twelve right now.",
                    "Where is the customs control?"
                ],
                "correct": "Please fasten your seatbelt before departure.",
                "explanation": "Прозвучала фраза: «Please fasten your seatbelt before departure.» (Пожалуйста, пристегните ремень безопасности перед вылетом.)."
            },
            {
                "id": "unit_a2_17_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Аэропорт • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Please show your boarding pass and fasten your seatbelt.",
                "translationRu": "Пожалуйста, покажите посадочный талон и пристегните ремень.",
                "correct": "Please show your boarding pass and fasten your seatbelt.",
                "explanation": "Отличное произношение! «Please show your boarding pass and fasten your seatbelt.» — Пожалуйста, покажите посадочный талон и пристегните ремень.."
            }
        ]
    },
    {
        "id": "unit_a2_18",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 18,
        "nodeType": "five_stage",
        "titleRu": "Профессии",
        "titleEn": "Профессии",
        "icon": "👩‍⚕️",
        "sources": [
            "Тема: Профессии",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "architect",
                "tr": "[ˈɑːkɪtekt]",
                "ru": "архитектор",
                "ex": "The architect designed a glass bridge.",
                "example": "The architect designed a glass bridge."
            },
            {
                "en": "journalist",
                "tr": "[ˈdʒɜːnəlɪst]",
                "ru": "журналист",
                "ex": "A curious journalist writes inspiring articles.",
                "example": "A curious journalist writes inspiring articles."
            },
            {
                "en": "chef",
                "tr": "[ʃef]",
                "ru": "шеф-повар",
                "ex": "The chef prepared a signature seafood dish.",
                "example": "The chef prepared a signature seafood dish."
            },
            {
                "en": "patient",
                "tr": "[ˈpeɪʃnt]",
                "ru": "пациент; терпеливый",
                "ex": "A good doctor is always attentive to every patient.",
                "example": "A good doctor is always attentive to every patient."
            },
            {
                "en": "colleague",
                "tr": "[ˈkɒliːɡ]",
                "ru": "коллега",
                "ex": "My colleagues helped me with the new project.",
                "example": "My colleagues helped me with the new project."
            },
            {
                "en": "engineer",
                "tr": "[ˌendʒɪˈnɪə]",
                "ru": "инженер (A2)",
                "ex": "She is an engineer who builds solar boats.",
                "example": "She is an engineer who builds solar boats."
            },
            {
                "en": "nurse",
                "tr": "[nɜːs]",
                "ru": "медсестра, медбрат (A2)",
                "ex": "A nurse is a person who cares for patients.",
                "example": "A nurse is a person who cares for patients."
            },
            {
                "en": "manager",
                "tr": "[ˈmænɪdʒə]",
                "ru": "менеджер, управляющий (A2)",
                "ex": "Our manager organized a team lunch.",
                "example": "Our manager organized a team lunch."
            },
            {
                "en": "office",
                "tr": "[ˈɒfɪs]",
                "ru": "офис (A2)",
                "ex": "We work in a bright office near the bay.",
                "example": "We work in a bright office near the bay."
            },
            {
                "en": "earn",
                "tr": "[ɜːn]",
                "ru": "зарабатывать (A2)",
                "ex": "He earns a good living as a designer.",
                "example": "He earns a good living as a designer."
            }
        ],
        "readingPassage": {
            "titleEn": "Люди, которые влюблены в своё дело",
            "titleRu": "Профессии",
            "audioFull": "In our coastal town, I know many inspiring people. My neighbour Lucas is an architect who designs eco-friendly houses with solar roofs. His wife Elena is a chef who runs a cosy restaurant by the harbour, and her colleague Sam is a journalist who writes travel stories about ocean islands.",
            "paragraphs": [
                {
                    "en": "In our coastal town, I know many inspiring people. My neighbour Lucas is an architect who designs eco-friendly houses with solar roofs.",
                    "ru": ""
                },
                {
                    "en": "His wife Elena is a chef who runs a cosy restaurant by the harbour, and her colleague Sam is a journalist who writes travel stories about ocean islands.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Определительные придаточные с who и which — кто чем занимается",
            "skyNote": "Объединяя два предложения о профессии или проекте, для людей используем слово who (который/которая: An architect is a person who designs buildings), а для предметов и проектов — which / that (A bridge which connects two islands).",
            "summary": "Объединяя два предложения о профессии или проекте, для людей используем слово who (который/которая: An architect is a person who designs buildings), а для предметов и проектов — which / that (A bridge which connects two islands).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Профессии» (A2)",
                    "example": "The architect designed a glass bridge.",
                    "note": "Формула: a chef who cooks • a building which inspires people. Объединяя два предложения о профессии или проекте, для людей используем слово who (который/которая: An architect is a person who designs buildings), а для предметов и проектов — which / that (A bridge which connects two islands)."
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "A curious journalist writes inspiring articles.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "a chef who cooks • a building which inspires people",
                    "example": "The architect designed a glass bridge.",
                    "note": "Определительные придаточные с who и which — кто чем занимается"
                }
            ],
            "cambridgeTip": "В теме «Профессии» мы сразу применяем правило (Определительные придаточные с who и which — кто чем занимается) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_18_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Профессии • A2",
                "prompt": "Соедини части предложения о работе журналиста:\n«A journalist is a professional ___ interviews interesting people.»",
                "options": [
                    "who",
                    "which",
                    "whose",
                    "where"
                ],
                "correct": "who",
                "explanation": "Речь идёт о человеке (a professional), поэтому выбираем союзное слово who."
            },
            {
                "id": "unit_a2_18_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Профессии • Конструктор фразы",
                "prompt": "Собери фразу: «Это талантливый архитектор, который спроектировал наш музей»",
                "words": [
                    "He",
                    "is",
                    "the",
                    "architect",
                    "who",
                    "designed",
                    "our",
                    "museum.",
                    "which",
                    "what"
                ],
                "distractors": [
                    "which",
                    "what"
                ],
                "correct": "He is the architect who designed our museum.",
                "explanation": "Для описания человека (the architect) используется who.",
                "promptRu": "Собери фразу: «Это талантливый архитектор, который спроектировал наш музей»",
                "correctSentence": "He is the architect who designed our museum."
            },
            {
                "id": "unit_a2_18_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Профессии • Чтение",
                "storyTitle": "Люди, которые влюблены в своё дело",
                "paragraphs": [
                    {
                        "en": "In our coastal town, I know many inspiring people. My neighbour Lucas is an architect who designs eco-friendly houses with solar roofs.",
                        "ru": ""
                    },
                    {
                        "en": "His wife Elena is a chef who runs a cosy restaurant by the harbour, and her colleague Sam is a journalist who writes travel stories about ocean islands.",
                        "ru": ""
                    }
                ],
                "prompt": "Чем занимается Элена в прибрежном городке?",
                "options": [
                    "Она шеф-повар уютного ресторана у гавани",
                    "Она строит дома с солнечными крышами",
                    "Она лечит пациентов в клинике"
                ],
                "correct": "Она шеф-повар уютного ресторана у гавани",
                "explanation": "В тексте: Elena is a chef who runs a cosy restaurant by the harbour."
            },
            {
                "id": "unit_a2_18_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Профессии • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "She is a talented architect who designs modern houses.",
                "translationRu": "Она талантливый архитектор, который проектирует современные дома.",
                "options": [
                    "She is a talented architect who designs modern houses.",
                    "The chef cooked a delicious dinner.",
                    "My colleagues are very friendly."
                ],
                "correct": "She is a talented architect who designs modern houses.",
                "explanation": "Прозвучала фраза: «She is a talented architect who designs modern houses.» (Она талантливый архитектор, который проектирует современные дома.)."
            },
            {
                "id": "unit_a2_18_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Профессии • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "He is a creative chef who cooks delicious dishes.",
                "translationRu": "Он креативный шеф-повар, который готовит вкуснейшие блюда.",
                "correct": "He is a creative chef who cooks delicious dishes.",
                "explanation": "Отличное произношение! «He is a creative chef who cooks delicious dishes.» — Он креативный шеф-повар, который готовит вкуснейшие блюда.."
            }
        ]
    },
    {
        "id": "unit_a2_19",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 19,
        "nodeType": "five_stage",
        "titleRu": "Праздники",
        "titleEn": "Праздники",
        "icon": "🎉",
        "sources": [
            "Тема: Праздники",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "candle",
                "tr": "[ˈkændl]",
                "ru": "свеча",
                "ex": "Make a wish and blow out the candles!",
                "example": "Make a wish and blow out the candles!"
            },
            {
                "en": "gift",
                "tr": "[ɡɪft]",
                "ru": "подарок",
                "ex": "She wrapped the gift in golden paper.",
                "example": "She wrapped the gift in golden paper."
            },
            {
                "en": "invite",
                "tr": "[ɪnˈvaɪt]",
                "ru": "приглашать",
                "ex": "We invited all our close friends to the party.",
                "example": "We invited all our close friends to the party."
            },
            {
                "en": "fireworks",
                "tr": "[ˈfaɪəwɜːks]",
                "ru": "фейерверк, салют",
                "ex": "Bright fireworks lit up the night sky.",
                "example": "Bright fireworks lit up the night sky."
            },
            {
                "en": "celebrate",
                "tr": "[ˈselɪbreɪt]",
                "ru": "праздновать, отмечать",
                "ex": "How are you going to celebrate your birthday?",
                "example": "How are you going to celebrate your birthday?"
            },
            {
                "en": "invitation",
                "tr": "[ˌɪnvɪˈteɪʃn]",
                "ru": "приглашение (открытка) (A2)",
                "ex": "We sent party invitations to all our friends.",
                "example": "We sent party invitations to all our friends."
            },
            {
                "en": "wrap",
                "tr": "[ræp]",
                "ru": "упаковывать, заворачивать подарок (A2)",
                "ex": "I will wrap the birthday gift in pink paper.",
                "example": "I will wrap the birthday gift in pink paper."
            },
            {
                "en": "decorate",
                "tr": "[ˈdekəreɪt]",
                "ru": "украшать (A2)",
                "ex": "We are decorating the terrace with lanterns.",
                "example": "We are decorating the terrace with lanterns."
            },
            {
                "en": "wish",
                "tr": "[wɪʃ]",
                "ru": "желание; загадывать желание (A2)",
                "ex": "Make a secret wish before blowing out the candles!",
                "example": "Make a secret wish before blowing out the candles!"
            },
            {
                "en": "balloon",
                "tr": "[bəˈluːn]",
                "ru": "воздушный шар (A2)",
                "ex": "Colourful balloons floated above the table.",
                "example": "Colourful balloons floated above the table."
            }
        ],
        "readingPassage": {
            "titleEn": "Вечеринка с гирляндами на террасе",
            "titleRu": "Праздники",
            "audioFull": "This Saturday we are celebrating Mia's birthday on our garden terrace. We have already invited fifteen friends and decorated the trees with warm lights. Paul promised: 'I will bring the berry cake with twenty candles!' And at ten o'clock at night, we are watching bright fireworks over the bay.",
            "paragraphs": [
                {
                    "en": "This Saturday we are celebrating Mia's birthday on our garden terrace. We have already invited fifteen friends and decorated the trees with warm lights.",
                    "ru": ""
                },
                {
                    "en": "Paul promised: 'I will bring the berry cake with twenty candles!' And at ten o'clock at night, we are watching bright fireworks over the bay.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Будущее время Will и Present Continuous для договорённостей о празднике",
            "skyNote": "Когда праздник уже организован и гости приглашены (100% договорённость), англичане используют Present Continuous: We are celebrating on Saturday! А когда мы спонтанно обещаем что-то на месте, говорим will: I will bring the birthday cake and candles!",
            "summary": "Когда праздник уже организован и гости приглашены (100% договорённость), англичане используют Present Continuous: We are celebrating on Saturday! А когда мы спонтанно обещаем что-то на месте, говорим will: I will bring the birthday cake and candles!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Праздники» (A2)",
                    "example": "Make a wish and blow out the candles!",
                    "note": "Формула: We are having a party on Saturday • I will bring the candles!. Когда праздник уже организован и гости приглашены (100% договорённость), англичане используют Present Continuous: We are celebrating on Saturday! А когда мы спонтанно обещаем что-то на месте, говорим will: I will bring the birthday cake and candles!"
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "She wrapped the gift in golden paper.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "We are having a party on Saturday • I will bring the candles!",
                    "example": "Make a wish and blow out the candles!",
                    "note": "Будущее время Will и Present Continuous для договорённостей о празднике"
                }
            ],
            "cambridgeTip": "В теме «Праздники» мы сразу применяем правило (Будущее время Will и Present Continuous для договорённостей о празднике) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_19_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Праздники • A2",
                "prompt": "Пообещай подруге прямо сейчас помочь с тортом на праздник:\n«Don't worry about the cake! I ___ buy the candles and wrap the gifts!»",
                "options": [
                    "will",
                    "am",
                    "going",
                    "did"
                ],
                "correct": "will",
                "explanation": "Спонтанное обещание помочь в момент разговора выражается через I will (I'll)."
            },
            {
                "id": "unit_a2_19_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Праздники • Конструктор фразы",
                "prompt": "Собери фразу: «В эту субботу мы празднуем день рождения и запускаем салют»",
                "words": [
                    "We",
                    "are",
                    "celebrating",
                    "her",
                    "birthday",
                    "this",
                    "Saturday.",
                    "celebrate",
                    "was"
                ],
                "distractors": [
                    "celebrate",
                    "was"
                ],
                "correct": "We are celebrating her birthday this Saturday.",
                "explanation": "Запланированное мероприятие в ближайшем будущем передаётся через Present Continuous (are celebrating).",
                "promptRu": "Собери фразу: «В эту субботу мы празднуем день рождения и запускаем салют»",
                "correctSentence": "We are celebrating her birthday this Saturday."
            },
            {
                "id": "unit_a2_19_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Праздники • Чтение",
                "storyTitle": "Вечеринка с гирляндами на террасе",
                "paragraphs": [
                    {
                        "en": "This Saturday we are celebrating Mia's birthday on our garden terrace. We have already invited fifteen friends and decorated the trees with warm lights.",
                        "ru": ""
                    },
                    {
                        "en": "Paul promised: 'I will bring the berry cake with twenty candles!' And at ten o'clock at night, we are watching bright fireworks over the bay.",
                        "ru": ""
                    }
                ],
                "prompt": "Что пообещал принести Пол на праздник Мии?",
                "options": [
                    "Ягодный торт с двадцатью свечами",
                    "Коробку настольных игр",
                    "Букет тюльпанов"
                ],
                "correct": "Ягодный торт с двадцатью свечами",
                "explanation": "В тексте: I will bring the berry cake with twenty candles!"
            },
            {
                "id": "unit_a2_19_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Праздники • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Make a wish and blow out the birthday candles!",
                "translationRu": "Загадай желание и задуй праздничные свечи!",
                "options": [
                    "Make a wish and blow out the birthday candles!",
                    "We invited our friends to the party.",
                    "She wrapped a lovely gift for you."
                ],
                "correct": "Make a wish and blow out the birthday candles!",
                "explanation": "Прозвучала фраза: «Make a wish and blow out the birthday candles!» (Загадай желание и задуй праздничные свечи!)."
            },
            {
                "id": "unit_a2_19_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Праздники • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "We are celebrating together and watching bright fireworks.",
                "translationRu": "Мы празднуем вместе и смотрим яркий салют.",
                "correct": "We are celebrating together and watching bright fireworks.",
                "explanation": "Отличное произношение! «We are celebrating together and watching bright fireworks.» — Мы празднуем вместе и смотрим яркий салют.."
            }
        ]
    },
    {
        "id": "unit_a2_20",
        "zoneId": "shallows_a2",
        "cefr": "A2",
        "number": 20,
        "nodeType": "five_stage",
        "titleRu": "Природа",
        "titleEn": "Природа",
        "icon": "🌲",
        "sources": [
            "Тема: Природа",
            "Уровень A2"
        ],
        "vocab": [
            {
                "en": "waterfall",
                "tr": "[ˈwɔːtəfɔːl]",
                "ru": "водопад",
                "ex": "We heard the sound of a mountain waterfall.",
                "example": "We heard the sound of a mountain waterfall."
            },
            {
                "en": "path",
                "tr": "[pɑːθ]",
                "ru": "лесная тропинка",
                "ex": "Follow this narrow path through the pine forest.",
                "example": "Follow this narrow path through the pine forest."
            },
            {
                "en": "valley",
                "tr": "[ˈvæli]",
                "ru": "долина",
                "ex": "The green valley was covered in morning mist.",
                "example": "The green valley was covered in morning mist."
            },
            {
                "en": "camp",
                "tr": "[kæmp]",
                "ru": "лагерь; разбивать палатку",
                "ex": "We set up our camp near a clear lake.",
                "example": "We set up our camp near a clear lake."
            },
            {
                "en": "breathe",
                "tr": "[briːð]",
                "ru": "дышать",
                "ex": "It is wonderful to breathe fresh pine air.",
                "example": "It is wonderful to breathe fresh pine air."
            },
            {
                "en": "forest",
                "tr": "[ˈfɒrɪst]",
                "ru": "лес (A2)",
                "ex": "We walked into the pine forest to find mushrooms.",
                "example": "We walked into the pine forest to find mushrooms."
            },
            {
                "en": "cliff",
                "tr": "[klɪf]",
                "ru": "утёс, отвесная скала (A2)",
                "ex": "They climbed the cliff to admire the sea.",
                "example": "They climbed the cliff to admire the sea."
            },
            {
                "en": "coast",
                "tr": "[kəʊst]",
                "ru": "морское побережье (A2)",
                "ex": "We drove to the southern coast to relax.",
                "example": "We drove to the southern coast to relax."
            },
            {
                "en": "cave",
                "tr": "[keɪv]",
                "ru": "пещера (A2)",
                "ex": "Explorers used a torch to enter the sea cave.",
                "example": "Explorers used a torch to enter the sea cave."
            },
            {
                "en": "lake",
                "tr": "[leɪk]",
                "ru": "озеро (A2)",
                "ex": "The mountain lake reflects the blue sky.",
                "example": "The mountain lake reflects the blue sky."
            }
        ],
        "readingPassage": {
            "titleEn": "Утро в туманной долине",
            "titleRu": "Природа",
            "audioFull": "Early on Sunday morning, we left the noisy city to spend the day in nature. We followed a quiet forest path through the green valley. At noon, we reached a crystal waterfall. We stopped there to breathe the cool pine air, take photos, and drink hot tea from a thermos.",
            "paragraphs": [
                {
                    "en": "Early on Sunday morning, we left the noisy city to spend the day in nature. We followed a quiet forest path through the green valley.",
                    "ru": ""
                },
                {
                    "en": "At noon, we reached a crystal waterfall. We stopped there to breathe the cool pine air, take photos, and drink hot tea from a thermos.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Инфинитив цели (to + глагол) — зачем мы идём на природу",
            "skyNote": "Чтобы объяснить цель действия («чтобы подышать свежим воздухом», «чтобы увидеть водопад»), в английском не нужно говорить «for to» — достаточно просто поставить to + глагол: We walked along the path to see the waterfall!",
            "summary": "Чтобы объяснить цель действия («чтобы подышать свежим воздухом», «чтобы увидеть водопад»), в английском не нужно говорить «for to» — достаточно просто поставить to + глагол: We walked along the path to see the waterfall!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Природа» (A2)",
                    "example": "We heard the sound of a mountain waterfall.",
                    "note": "Формула: walked to see the waterfall • stopped to breathe fresh air. Чтобы объяснить цель действия («чтобы подышать свежим воздухом», «чтобы увидеть водопад»), в английском не нужно говорить «for to» — достаточно просто поставить to + глагол: We walked along the path to see the waterfall!"
                },
                {
                    "label": "🌊 Живой пример на лексике A2",
                    "example": "Follow this narrow path through the pine forest.",
                    "note": "Все 10 слов этого урока относятся строго к уровню A2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "walked to see the waterfall • stopped to breathe fresh air",
                    "example": "We heard the sound of a mountain waterfall.",
                    "note": "Инфинитив цели (to + глагол) — зачем мы идём на природу"
                }
            ],
            "cambridgeTip": "В теме «Природа» мы сразу применяем правило (Инфинитив цели (to + глагол) — зачем мы идём на природу) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_a2_20_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Природа • A2",
                "prompt": "Объясни, зачем вы остановились на горной тропе:\n«We stopped in the green valley ___ the fresh mountain air.»",
                "options": [
                    "to breathe",
                    "for breathe",
                    "breathing",
                    "breathed"
                ],
                "correct": "to breathe",
                "explanation": "Инфинитив цели («чтобы подышать») образуется просто через to + глагол: to breathe."
            },
            {
                "id": "unit_a2_20_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Природа • Конструктор фразы",
                "prompt": "Собери фразу: «Мы пошли по лесной тропинке, чтобы увидеть высокий водопад»",
                "words": [
                    "We",
                    "walked",
                    "along",
                    "the",
                    "path",
                    "to",
                    "see",
                    "the",
                    "waterfall.",
                    "for",
                    "seeing"
                ],
                "distractors": [
                    "for",
                    "seeing"
                ],
                "correct": "We walked along the path to see the waterfall.",
                "explanation": "Цель похода выражается инфинитивом to see.",
                "promptRu": "Собери фразу: «Мы пошли по лесной тропинке, чтобы увидеть высокий водопад»",
                "correctSentence": "We walked along the path to see the waterfall."
            },
            {
                "id": "unit_a2_20_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Природа • Чтение",
                "storyTitle": "Утро в туманной долине",
                "paragraphs": [
                    {
                        "en": "Early on Sunday morning, we left the noisy city to spend the day in nature. We followed a quiet forest path through the green valley.",
                        "ru": ""
                    },
                    {
                        "en": "At noon, we reached a crystal waterfall. We stopped there to breathe the cool pine air, take photos, and drink hot tea from a thermos.",
                        "ru": ""
                    }
                ],
                "prompt": "Куда привела героев тихая лесная тропинка в полдень?",
                "options": [
                    "К хрустальному водопаду",
                    "К вершине вулкана",
                    "К пещере"
                ],
                "correct": "К хрустальному водопаду",
                "explanation": "В тексте: At noon, we reached a crystal waterfall."
            },
            {
                "id": "unit_a2_20_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Природа • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "We followed the forest path to see the mountain waterfall.",
                "translationRu": "Мы пошли по лесной тропинке, чтобы увидеть горный водопад.",
                "options": [
                    "We followed the forest path to see the mountain waterfall.",
                    "The green valley is very quiet.",
                    "Let's set up our camp near the lake."
                ],
                "correct": "We followed the forest path to see the mountain waterfall.",
                "explanation": "Прозвучала фраза: «We followed the forest path to see the mountain waterfall.» (Мы пошли по лесной тропинке, чтобы увидеть горный водопад.)."
            },
            {
                "id": "unit_a2_20_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Природа • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "It is wonderful to breathe fresh air in the green valley.",
                "translationRu": "Как же чудесно дышать свежим воздухом в зелёной долине.",
                "correct": "It is wonderful to breathe fresh air in the green valley.",
                "explanation": "Отличное произношение! «It is wonderful to breathe fresh air in the green valley.» — Как же чудесно дышать свежим воздухом в зелёной долине.."
            }
        ]
    },
    {
        "id": "unit_b1_21",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 21,
        "nodeType": "five_stage",
        "titleRu": "Заповедник",
        "titleEn": "Заповедник",
        "icon": "🦌",
        "sources": [
            "Тема: Заповедник",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "species",
                "tr": "[ˈspiːʃiːz]",
                "ru": "биологический вид (B1)",
                "ex": "While we were exploring the reserve, we observed rare species in their habitat.",
                "example": "While we were exploring the reserve, we observed rare species in their habitat."
            },
            {
                "en": "habitat",
                "tr": "[ˈhæbɪtæt]",
                "ru": "естественная среда обитания (B1)",
                "ex": "National parks preserve the natural habitat of wild mammals.",
                "example": "National parks preserve the natural habitat of wild mammals."
            },
            {
                "en": "endangered",
                "tr": "[ɪnˈdeɪndʒəd]",
                "ru": "вымирающий, под угрозой исчезновения (B1)",
                "ex": "Sea turtles are an endangered species that needs protection.",
                "example": "Sea turtles are an endangered species that needs protection."
            },
            {
                "en": "reserve",
                "tr": "[rɪˈzɜːv]",
                "ru": "природный заповедник (B1)",
                "ex": "They established a vast nature reserve along the coast.",
                "example": "They established a vast nature reserve along the coast."
            },
            {
                "en": "observe",
                "tr": "[əbˈzɜːv]",
                "ru": "наблюдать, вести наблюдение (B1)",
                "ex": "Biologists observed marine mammals migrating south.",
                "example": "Biologists observed marine mammals migrating south."
            },
            {
                "en": "predator",
                "tr": "[ˈpredətə]",
                "ru": "хищник (B1)",
                "ex": "In the wild, every predator plays an ecological role.",
                "example": "In the wild, every predator plays an ecological role."
            },
            {
                "en": "mammal",
                "tr": "[ˈmæml]",
                "ru": "млекопитающее (B1)",
                "ex": "Dolphins and whales are intelligent marine mammals.",
                "example": "Dolphins and whales are intelligent marine mammals."
            },
            {
                "en": "adapt",
                "tr": "[əˈdæpt]",
                "ru": "адаптироваться, приспосабливаться (B1)",
                "ex": "Wild creatures quickly adapt to seasonal changes.",
                "example": "Wild creatures quickly adapt to seasonal changes."
            },
            {
                "en": "conservation",
                "tr": "[ˌkɒnsəˈveɪʃn]",
                "ru": "охрана природы, сохранение (B1)",
                "ex": "Wildlife conservation requires international cooperation.",
                "example": "Wildlife conservation requires international cooperation."
            },
            {
                "en": "footprint",
                "tr": "[ˈfʊtprɪnt]",
                "ru": "след; экологический след (B1)",
                "ex": "Eco-tourists try to leave minimal footprints in the reserve.",
                "example": "Eco-tourists try to leave minimal footprints in the reserve."
            }
        ],
        "readingPassage": {
            "titleEn": "Экспедиция в прибрежный заповедник (B1)",
            "titleRu": "Заповедник",
            "audioFull": "Last autumn I joined a wildlife conservation group in a coastal nature reserve. Unlike a city zoo, animals here live freely in their natural habitat. While we were walking quietly along the cliff trail, we observed endangered sea birds nesting on the rocks and marine mammals swimming across the bay.",
            "paragraphs": [
                {
                    "en": "Last autumn I joined a wildlife conservation group in a coastal nature reserve. Unlike a city zoo, animals here live freely in their natural habitat.",
                    "ru": ""
                },
                {
                    "en": "While we were walking quietly along the cliff trail, we observed endangered sea birds nesting on the rocks and marine mammals swimming across the bay.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Past Continuous + глаголы восприятия (observe / notice someone doing) на лексике уровня B1",
            "skyNote": "На уровне B1 мы используем настоящую лексику уровня Intermediate (species — вид, habitat — среда обитания, endangered — исчезающий, reserve — заповедник). Долгий фоновый процесс ставим в Past Continuous (While we were exploring the nature reserve...), а наблюдаемое действие — через observe / notice + объект + V-ing (...we observed rare species adapting to their habitat)!",
            "summary": "На уровне B1 мы используем настоящую лексику уровня Intermediate (species — вид, habitat — среда обитания, endangered — исчезающий, reserve — заповедник). Долгий фоновый процесс ставим в Past Continuous (While we were exploring the nature reserve...), а наблюдаемое действие — через observe / notice + объект + V-ing (...we observed rare species adapting to their habitat)!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Заповедник» (B1)",
                    "example": "While we were exploring the reserve, we observed rare species in their habitat.",
                    "note": "Формула: While we were exploring the reserve, we observed rare species adapting to their habitat. На уровне B1 мы используем настоящую лексику уровня Intermediate (species — вид, habitat — среда обитания, endangered — исчезающий, reserve — заповедник). Долгий фоновый процесс ставим в Past Continuous (While we were exploring the nature reserve...), а наблюдаемое действие — через observe / notice + объект + V-ing (...we observed rare species adapting to their habitat)!"
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "National parks preserve the natural habitat of wild mammals.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "While we were exploring the reserve, we observed rare species adapting to their habitat",
                    "example": "While we were exploring the reserve, we observed rare species in their habitat.",
                    "note": "Past Continuous + глаголы восприятия (observe / notice someone doing) на лексике уровня B1"
                }
            ],
            "cambridgeTip": "В теме «Заповедник» мы сразу применяем правило (Past Continuous + глаголы восприятия (observe / notice someone doing) на лексике уровня B1) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_21_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Заповедник • B1",
                "prompt": "Соедини лексику B1 и грамматику Past Continuous:\n«While the biologists ___ the coastal reserve, they observed endangered mammals migrating.»",
                "options": [
                    "were exploring",
                    "explored",
                    "are exploring",
                    "explore"
                ],
                "correct": "were exploring",
                "explanation": "Длительное фоновое действие после союза While в прошлом ставится в Past Continuous: were exploring."
            },
            {
                "id": "unit_b1_21_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Заповедник • Конструктор фразы",
                "prompt": "Собери фразу уровня B1: «Мы наблюдали, как редкие виды адаптируются к своей среде обитания»",
                "words": [
                    "We",
                    "observed",
                    "rare",
                    "species",
                    "adapting",
                    "to",
                    "their",
                    "habitat.",
                    "adapted",
                    "to adapt"
                ],
                "distractors": [
                    "adapted",
                    "to adapt"
                ],
                "correct": "We observed rare species adapting to their habitat.",
                "explanation": "После глагола восприятия observe причастие с -ing (adapting) подчёркивает наблюдение за процессом.",
                "promptRu": "Собери фразу уровня B1: «Мы наблюдали, как редкие виды адаптируются к своей среде обитания»",
                "correctSentence": "We observed rare species adapting to their habitat."
            },
            {
                "id": "unit_b1_21_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Заповедник • Чтение",
                "storyTitle": "Экспедиция в прибрежный заповедник (B1)",
                "paragraphs": [
                    {
                        "en": "Last autumn I joined a wildlife conservation group in a coastal nature reserve. Unlike a city zoo, animals here live freely in their natural habitat.",
                        "ru": ""
                    },
                    {
                        "en": "While we were walking quietly along the cliff trail, we observed endangered sea birds nesting on the rocks and marine mammals swimming across the bay.",
                        "ru": ""
                    }
                ],
                "prompt": "Чем природный заповедник (nature reserve) отличается от обычного зоопарка?",
                "options": [
                    "Редкие виды живут свободно в своей естественной среде обитания (natural habitat)",
                    "Там нет растений",
                    "Туда пускают только зимой"
                ],
                "correct": "Редкие виды живут свободно в своей естественной среде обитания (natural habitat)",
                "explanation": "В тексте: Unlike a city zoo, animals here live freely in their natural habitat."
            },
            {
                "id": "unit_b1_21_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Заповедник • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "While we were exploring the reserve, we observed rare species in their habitat.",
                "translationRu": "Пока мы исследовали заповедник, мы наблюдали редкие виды в их среде обитания.",
                "options": [
                    "While we were exploring the reserve, we observed rare species in their habitat.",
                    "Wildlife conservation protects endangered mammals.",
                    "Wild creatures adapt to seasonal changes."
                ],
                "correct": "While we were exploring the reserve, we observed rare species in their habitat.",
                "explanation": "Прозвучала фраза: «While we were exploring the reserve, we observed rare species in their habitat.» (Пока мы исследовали заповедник, мы наблюдали редкие виды в их среде обитания.)."
            },
            {
                "id": "unit_b1_21_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Заповедник • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "National reserves protect endangered species and their natural habitat.",
                "translationRu": "Национальные заповедники защищают исчезающие виды и их естественную среду обитания.",
                "correct": "National reserves protect endangered species and their natural habitat.",
                "explanation": "Отличное произношение! «National reserves protect endangered species and their natural habitat.» — Национальные заповедники защищают исчезающие виды и их естественную среду обитания.."
            }
        ]
    },
    {
        "id": "unit_b1_22",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 22,
        "nodeType": "five_stage",
        "titleRu": "Путешествия",
        "titleEn": "Путешествия",
        "icon": "🗺️",
        "sources": [
            "Тема: Путешествия",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "explore",
                "tr": "[ɪkˈsplɔː]",
                "ru": "исследовать, открывать новое",
                "ex": "We have already explored three ancient castles.",
                "example": "We have already explored three ancient castles."
            },
            {
                "en": "abroad",
                "tr": "[əˈbrɔːd]",
                "ru": "за границей, за границу",
                "ex": "Have you ever travelled abroad on your own?",
                "example": "Have you ever travelled abroad on your own?"
            },
            {
                "en": "souvenir",
                "tr": "[ˌsuːvəˈnɪə]",
                "ru": "сувенир",
                "ex": "She has bought handmade ceramic souvenirs.",
                "example": "She has bought handmade ceramic souvenirs."
            },
            {
                "en": "route",
                "tr": "[ruːt]",
                "ru": "маршрут",
                "ex": "We have chosen a scenic coastal route.",
                "example": "We have chosen a scenic coastal route."
            },
            {
                "en": "adventure",
                "tr": "[ədˈventʃə]",
                "ru": "приключение",
                "ex": "This trip has become a real adventure!",
                "example": "This trip has become a real adventure!"
            },
            {
                "en": "itinerary",
                "tr": "[aɪˈtɪnərəri]",
                "ru": "план маршрута поездки (B1)",
                "ex": "We have planned a detailed travel itinerary.",
                "example": "We have planned a detailed travel itinerary."
            },
            {
                "en": "accommodation",
                "tr": "[əˌkɒməˈdeɪʃn]",
                "ru": "жильё в поездке (B1)",
                "ex": "Have you booked your accommodation yet?",
                "example": "Have you booked your accommodation yet?"
            },
            {
                "en": "destination",
                "tr": "[ˌdestɪˈneɪʃn]",
                "ru": "пункт назначения (B1)",
                "ex": "This quiet island has become a popular destination.",
                "example": "This quiet island has become a popular destination."
            },
            {
                "en": "excursion",
                "tr": "[ɪkˈskɜːʃn]",
                "ru": "экскурсия (B1)",
                "ex": "We have joined a boat excursion around the bay.",
                "example": "We have joined a boat excursion around the bay."
            },
            {
                "en": "currency",
                "tr": "[ˈkʌrənsi]",
                "ru": "валюта (B1)",
                "ex": "You can exchange foreign currency at the port.",
                "example": "You can exchange foreign currency at the port."
            }
        ],
        "readingPassage": {
            "titleEn": "Дневник морских открытий",
            "titleRu": "Путешествия",
            "audioFull": "Over the last two years, my sister and I have travelled abroad four times. We have chosen scenic routes away from crowded tourist streets. So far, we have explored ancient lighthouses in Portugal, sailed around Greek islands, and brought home wonderful memories and ceramic souvenirs.",
            "paragraphs": [
                {
                    "en": "Over the last two years, my sister and I have travelled abroad four times. We have chosen scenic routes away from crowded tourist streets.",
                    "ru": ""
                },
                {
                    "en": "So far, we have explored ancient lighthouses in Portugal, sailed around Greek islands, and brought home wonderful memories and ceramic souvenirs.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Present Perfect (have/has + V3) — наш жизненный опыт путешествий",
            "skyNote": "Когда мы делимся впечатлениями и опытом («Я уже исследовала этот остров», «Ты когда-нибудь бывал за границей?»), точная дата не важна — важен сам результат к настоящему моменту! Поэтому используем have / has + 3-ю форму глагола (explored, travelled, been).",
            "summary": "Когда мы делимся впечатлениями и опытом («Я уже исследовала этот остров», «Ты когда-нибудь бывал за границей?»), точная дата не важна — важен сам результат к настоящему моменту! Поэтому используем have / has + 3-ю форму глагола (explored, travelled, been).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Путешествия» (B1)",
                    "example": "We have already explored three ancient castles.",
                    "note": "Формула: I have already explored the island • Have you ever been abroad?. Когда мы делимся впечатлениями и опытом («Я уже исследовала этот остров», «Ты когда-нибудь бывал за границей?»), точная дата не важна — важен сам результат к настоящему моменту! Поэтому используем have / has + 3-ю форму глагола (explored, travelled, been)."
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "Have you ever travelled abroad on your own?",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "I have already explored the island • Have you ever been abroad?",
                    "example": "We have already explored three ancient castles.",
                    "note": "Present Perfect (have/has + V3) — наш жизненный опыт путешествий"
                }
            ],
            "cambridgeTip": "В теме «Путешествия» мы сразу применяем правило (Present Perfect (have/has + V3) — наш жизненный опыт путешествий) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_22_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Путешествия • B1",
                "prompt": "Поделись опытом путешествий:\n«We ___ already explored all the hidden beaches along this route!»",
                "options": [
                    "have",
                    "did",
                    "are",
                    "were"
                ],
                "correct": "have",
                "explanation": "Со словом already (уже) и причастием explored используем Present Perfect: We have already explored."
            },
            {
                "id": "unit_b1_22_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Путешествия • Конструктор фразы",
                "prompt": "Собери вопрос путешественнику: «Ты когда-нибудь путешествовал за границу один?»",
                "words": [
                    "Have",
                    "you",
                    "ever",
                    "travelled",
                    "abroad",
                    "alone?",
                    "Did",
                    "were"
                ],
                "distractors": [
                    "Did",
                    "were"
                ],
                "correct": "Have you ever travelled abroad alone?",
                "explanation": "Вопрос о жизненном опыте с ever строится в Present Perfect: Have you ever + V3.",
                "promptRu": "Собери вопрос путешественнику: «Ты когда-нибудь путешествовал за границу один?»",
                "correctSentence": "Have you ever travelled abroad alone?"
            },
            {
                "id": "unit_b1_22_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Путешествия • Чтение",
                "storyTitle": "Дневник морских открытий",
                "paragraphs": [
                    {
                        "en": "Over the last two years, my sister and I have travelled abroad four times. We have chosen scenic routes away from crowded tourist streets.",
                        "ru": ""
                    },
                    {
                        "en": "So far, we have explored ancient lighthouses in Portugal, sailed around Greek islands, and brought home wonderful memories and ceramic souvenirs.",
                        "ru": ""
                    }
                ],
                "prompt": "Какие места героини уже исследовали в Португалии?",
                "options": [
                    "Старинные маяки",
                    "Горнолыжные курорты",
                    "Пустыню"
                ],
                "correct": "Старинные маяки",
                "explanation": "В тексте: we have explored ancient lighthouses in Portugal."
            },
            {
                "id": "unit_b1_22_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Путешествия • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "We have already explored three islands on this route.",
                "translationRu": "Мы уже исследовали три острова на этом маршруте.",
                "options": [
                    "We have already explored three islands on this route.",
                    "Did you buy any souvenirs yesterday?",
                    "She loves travelling abroad in spring."
                ],
                "correct": "We have already explored three islands on this route.",
                "explanation": "Прозвучала фраза: «We have already explored three islands on this route.» (Мы уже исследовали три острова на этом маршруте.)."
            },
            {
                "id": "unit_b1_22_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Путешествия • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Have you ever travelled abroad along a coastal route?",
                "translationRu": "Ты когда-нибудь путешествовал за границу по прибрежному маршруту?",
                "correct": "Have you ever travelled abroad along a coastal route?",
                "explanation": "Отличное произношение! «Have you ever travelled abroad along a coastal route?» — Ты когда-нибудь путешествовал за границу по прибрежному маршруту?."
            }
        ]
    },
    {
        "id": "unit_b1_23",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 23,
        "nodeType": "five_stage",
        "titleRu": "Дружба",
        "titleEn": "Дружба",
        "icon": "🤝",
        "sources": [
            "Тема: Дружба",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "trust",
                "tr": "[trʌst]",
                "ru": "доверять; доверие",
                "ex": "True friendship is built on mutual trust.",
                "example": "True friendship is built on mutual trust."
            },
            {
                "en": "support",
                "tr": "[səˈpɔːt]",
                "ru": "поддерживать; поддержка",
                "ex": "She has always supported me in difficult moments.",
                "example": "She has always supported me in difficult moments."
            },
            {
                "en": "childhood",
                "tr": "[ˈtʃaɪldhʊd]",
                "ru": "детство",
                "ex": "We have known each other since childhood.",
                "example": "We have known each other since childhood."
            },
            {
                "en": "honest",
                "tr": "[ˈɒnɪst]",
                "ru": "честный, искренний",
                "ex": "A loyal friend gives honest advice.",
                "example": "A loyal friend gives honest advice."
            },
            {
                "en": "keep in touch",
                "tr": "[kiːp ɪn tʌtʃ]",
                "ru": "поддерживать связь",
                "ex": "Even in different cities, we keep in touch.",
                "example": "Even in different cities, we keep in touch."
            },
            {
                "en": "reliable",
                "tr": "[rɪˈlaɪəbl]",
                "ru": "надёжный (о человеке) (B1)",
                "ex": "She has always been my most reliable friend.",
                "example": "She has always been my most reliable friend."
            },
            {
                "en": "generous",
                "tr": "[ˈdʒenərəs]",
                "ru": "щедрый, великодушный (B1)",
                "ex": "Thank you for your generous help and kindness.",
                "example": "Thank you for your generous help and kindness."
            },
            {
                "en": "apologise",
                "tr": "[əˈpɒlədʒaɪz]",
                "ru": "извиняться (B1)",
                "ex": "Good friends know how to apologise sincerely.",
                "example": "Good friends know how to apologise sincerely."
            },
            {
                "en": "forgive",
                "tr": "[fəˈɡɪv]",
                "ru": "прощать (B1)",
                "ex": "It is important to forgive small misunderstandings.",
                "example": "It is important to forgive small misunderstandings."
            },
            {
                "en": "mutual",
                "tr": "[ˈmjuːtʃuəl]",
                "ru": "взаимный (B1)",
                "ex": "Our friendship is based on mutual respect.",
                "example": "Our friendship is based on mutual respect."
            }
        ],
        "readingPassage": {
            "titleEn": "Друзья с самого детства",
            "titleRu": "Дружба",
            "audioFull": "Claire and I have been best friends since our childhood. We met on the first day of school when we were seven years old. Although Claire moved to another city two years ago, we have kept in touch every week. I can always trust her honest opinion and warm support.",
            "paragraphs": [
                {
                    "en": "Claire and I have been best friends since our childhood. We met on the first day of school when we were seven years old.",
                    "ru": ""
                },
                {
                    "en": "Although Claire moved to another city two years ago, we have kept in touch every week. I can always trust her honest opinion and warm support.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Present Perfect с предлогами for и since — как долго длится дружба",
            "skyNote": "Когда дружба началась в прошлом и продолжается до сих пор («Мы знаем друг друга с детства / уже 10 лет»), в английском нельзя ставить обычное настоящее время — нужен Present Perfect (have known): since childhood (с точки отсчёта) и for ten years (в течение периода).",
            "summary": "Когда дружба началась в прошлом и продолжается до сих пор («Мы знаем друг друга с детства / уже 10 лет»), в английском нельзя ставить обычное настоящее время — нужен Present Perfect (have known): since childhood (с точки отсчёта) и for ten years (в течение периода).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Дружба» (B1)",
                    "example": "True friendship is built on mutual trust.",
                    "note": "Формула: We have known each other since childhood (for 12 years). Когда дружба началась в прошлом и продолжается до сих пор («Мы знаем друг друга с детства / уже 10 лет»), в английском нельзя ставить обычное настоящее время — нужен Present Perfect (have known): since childhood (с точки отсчёта) и for ten years (в течение периода)."
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "She has always supported me in difficult moments.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "We have known each other since childhood (for 12 years)",
                    "example": "True friendship is built on mutual trust.",
                    "note": "Present Perfect с предлогами for и since — как долго длится дружба"
                }
            ],
            "cambridgeTip": "В теме «Дружба» мы сразу применяем правило (Present Perfect с предлогами for и since — как долго длится дружба) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_23_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Дружба • B1",
                "prompt": "Скажи, как долго вы дружите со своей лучшей подругой:\n«Kate and I have trusted each other ___ our early childhood.»",
                "options": [
                    "since",
                    "for",
                    "from",
                    "during"
                ],
                "correct": "since",
                "explanation": "Childhood — начальная точка во времени («с детства»), поэтому с Present Perfect используем since."
            },
            {
                "id": "unit_b1_23_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Дружба • Конструктор фразы",
                "prompt": "Собери фразу: «Мы поддерживаем связь друг с другом уже десять лет»",
                "words": [
                    "We",
                    "have",
                    "kept",
                    "in",
                    "touch",
                    "for",
                    "ten",
                    "years.",
                    "since",
                    "keep"
                ],
                "distractors": [
                    "since",
                    "keep"
                ],
                "correct": "We have kept in touch for ten years.",
                "explanation": "Ten years — длительность периода, поэтому ставим предлог for и Present Perfect (have kept).",
                "promptRu": "Собери фразу: «Мы поддерживаем связь друг с другом уже десять лет»",
                "correctSentence": "We have kept in touch for ten years."
            },
            {
                "id": "unit_b1_23_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Дружба • Чтение",
                "storyTitle": "Друзья с самого детства",
                "paragraphs": [
                    {
                        "en": "Claire and I have been best friends since our childhood. We met on the first day of school when we were seven years old.",
                        "ru": ""
                    },
                    {
                        "en": "Although Claire moved to another city two years ago, we have kept in touch every week. I can always trust her honest opinion and warm support.",
                        "ru": ""
                    }
                ],
                "prompt": "Когда познакомились Клэр и рассказчица?",
                "options": [
                    "В первый день школы, когда им было по семь лет",
                    "В университете",
                    "Месяц назад в поезде"
                ],
                "correct": "В первый день школы, когда им было по семь лет",
                "explanation": "В тексте: We met on the first day of school when we were seven years old."
            },
            {
                "id": "unit_b1_23_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Дружба • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "We have known and trusted each other since childhood.",
                "translationRu": "Мы знаем и доверяем друг другу с самого детства.",
                "options": [
                    "We have known and trusted each other since childhood.",
                    "Always keep in touch with your friends.",
                    "Thank you for your honest support."
                ],
                "correct": "We have known and trusted each other since childhood.",
                "explanation": "Прозвучала фраза: «We have known and trusted each other since childhood.» (Мы знаем и доверяем друг другу с самого детства.)."
            },
            {
                "id": "unit_b1_23_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Дружба • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "We have been close friends since our childhood.",
                "translationRu": "Мы близкие друзья с самого нашего детства.",
                "correct": "We have been close friends since our childhood.",
                "explanation": "Отличное произношение! «We have been close friends since our childhood.» — Мы близкие друзья с самого нашего детства.."
            }
        ]
    },
    {
        "id": "unit_b1_24",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 24,
        "nodeType": "five_stage",
        "titleRu": "Кино",
        "titleEn": "Кино",
        "icon": "🎬",
        "sources": [
            "Тема: Кино",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "director",
                "tr": "[dəˈrektə]",
                "ru": "режиссёр",
                "ex": "This talented director filmed the movie in New Zealand.",
                "example": "This talented director filmed the movie in New Zealand."
            },
            {
                "en": "plot",
                "tr": "[plɒt]",
                "ru": "сюжет",
                "ex": "The detective movie has an unexpected plot twist.",
                "example": "The detective movie has an unexpected plot twist."
            },
            {
                "en": "soundtrack",
                "tr": "[ˈsaʊndtræk]",
                "ru": "саундтрек, музыка к фильму",
                "ex": "The orchestral soundtrack was composed in Rome.",
                "example": "The orchestral soundtrack was composed in Rome."
            },
            {
                "en": "audience",
                "tr": "[ˈɔːdiəns]",
                "ru": "зрители, публика",
                "ex": "The whole audience applauded at the end.",
                "example": "The whole audience applauded at the end."
            },
            {
                "en": "scene",
                "tr": "[siːn]",
                "ru": "сцена, эпизод",
                "ex": "The final scene was shot at sunset.",
                "example": "The final scene was shot at sunset."
            },
            {
                "en": "sequel",
                "tr": "[ˈsiːkwəl]",
                "ru": "продолжение фильма (сиквел) (B1)",
                "ex": "The sequel was filmed two years later.",
                "example": "The sequel was filmed two years later."
            },
            {
                "en": "subtitles",
                "tr": "[ˈsʌbtaɪtlz]",
                "ru": "субтитры (B1)",
                "ex": "Watching movies with English subtitles improves vocabulary.",
                "example": "Watching movies with English subtitles improves vocabulary."
            },
            {
                "en": "performance",
                "tr": "[pəˈfɔːməns]",
                "ru": "актёрская игра, выступление (B1)",
                "ex": "Her brilliant performance was praised by everyone.",
                "example": "Her brilliant performance was praised by everyone."
            },
            {
                "en": "review",
                "tr": "[rɪˈvjuː]",
                "ru": "рецензия, кинообзор (B1)",
                "ex": "A positive review was published in the magazine.",
                "example": "A positive review was published in the magazine."
            },
            {
                "en": "cast",
                "tr": "[kɑːst]",
                "ru": "актёрский состав (B1)",
                "ex": "The whole cast was invited to the premiere.",
                "example": "The whole cast was invited to the premiere."
            }
        ],
        "readingPassage": {
            "titleEn": "Магия по ту сторону экрана",
            "titleRu": "Кино",
            "audioFull": "Last night we watched an adventure film in an open-air cinema. The plot was based on a true story about ocean explorers. Every scene was filmed in natural light without computer effects, and the emotional soundtrack was recorded by a symphony orchestra. The audience was deeply impressed!",
            "paragraphs": [
                {
                    "en": "Last night we watched an adventure film in an open-air cinema. The plot was based on a true story about ocean explorers.",
                    "ru": ""
                },
                {
                    "en": "Every scene was filmed in natural light without computer effects, and the emotional soundtrack was recorded by a symphony orchestra. The audience was deeply impressed!",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Пассивный залог (was filmed / was written) — как создавалось кино",
            "skyNote": "Когда мы рассказываем о фильме, книге или музыке, нам часто важнее само произведение: «Фильм был снят в Италии», «Саундтрек был написан композитором». Для этого используем was / were + 3-ю форму глагола + by (кем): The scene was filmed by a famous director.",
            "summary": "Когда мы рассказываем о фильме, книге или музыке, нам часто важнее само произведение: «Фильм был снят в Италии», «Саундтрек был написан композитором». Для этого используем was / were + 3-ю форму глагола + by (кем): The scene was filmed by a famous director.",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Кино» (B1)",
                    "example": "This talented director filmed the movie in New Zealand.",
                    "note": "Формула: The movie was filmed in Italy • The soundtrack was composed by Hans. Когда мы рассказываем о фильме, книге или музыке, нам часто важнее само произведение: «Фильм был снят в Италии», «Саундтрек был написан композитором». Для этого используем was / were + 3-ю форму глагола + by (кем): The scene was filmed by a famous director."
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "The detective movie has an unexpected plot twist.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "The movie was filmed in Italy • The soundtrack was composed by Hans",
                    "example": "This talented director filmed the movie in New Zealand.",
                    "note": "Пассивный залог (was filmed / was written) — как создавалось кино"
                }
            ],
            "cambridgeTip": "В теме «Кино» мы сразу применяем правило (Пассивный залог (was filmed / was written) — как создавалось кино) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_24_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Кино • B1",
                "prompt": "Расскажи о съёмках любимой картины:\n«The final scene with the ocean sunset ___ filmed on a real island.»",
                "options": [
                    "was",
                    "did",
                    "has",
                    "were"
                ],
                "correct": "was",
                "explanation": "Единственное число в прошлом в пассивном залоге: The final scene was filmed."
            },
            {
                "id": "unit_b1_24_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Кино • Конструктор фразы",
                "prompt": "Собери фразу: «Этот красивый саундтрек был написан молодым композитором»",
                "words": [
                    "This",
                    "beautiful",
                    "soundtrack",
                    "was",
                    "written",
                    "by",
                    "a",
                    "composer.",
                    "wrote",
                    "were"
                ],
                "distractors": [
                    "wrote",
                    "were"
                ],
                "correct": "This beautiful soundtrack was written by a composer.",
                "explanation": "Пассивный залог в прошлом: was written by...",
                "promptRu": "Собери фразу: «Этот красивый саундтрек был написан молодым композитором»",
                "correctSentence": "This beautiful soundtrack was written by a composer."
            },
            {
                "id": "unit_b1_24_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Кино • Чтение",
                "storyTitle": "Магия по ту сторону экрана",
                "paragraphs": [
                    {
                        "en": "Last night we watched an adventure film in an open-air cinema. The plot was based on a true story about ocean explorers.",
                        "ru": ""
                    },
                    {
                        "en": "Every scene was filmed in natural light without computer effects, and the emotional soundtrack was recorded by a symphony orchestra. The audience was deeply impressed!",
                        "ru": ""
                    }
                ],
                "prompt": "На чём был основан сюжет приключенческого фильма?",
                "options": [
                    "На реальной истории об исследователях океана",
                    "На древнем мифе",
                    "На комиксе"
                ],
                "correct": "На реальной истории об исследователях океана",
                "explanation": "В тексте: The plot was based on a true story about ocean explorers."
            },
            {
                "id": "unit_b1_24_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Кино • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Every scene of this movie was filmed on a real island.",
                "translationRu": "Каждая сцена этого фильма была снята на настоящем острове.",
                "options": [
                    "Every scene of this movie was filmed on a real island.",
                    "The director wrote an exciting plot.",
                    "The audience loved the soundtrack."
                ],
                "correct": "Every scene of this movie was filmed on a real island.",
                "explanation": "Прозвучала фраза: «Every scene of this movie was filmed on a real island.» (Каждая сцена этого фильма была снята на настоящем острове.)."
            },
            {
                "id": "unit_b1_24_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Кино • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "The plot of this movie was based on a true story.",
                "translationRu": "Сюжет этого фильма был основан на реальной истории.",
                "correct": "The plot of this movie was based on a true story.",
                "explanation": "Отличное произношение! «The plot of this movie was based on a true story.» — Сюжет этого фильма был основан на реальной истории.."
            }
        ]
    },
    {
        "id": "unit_b1_25",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 25,
        "nodeType": "five_stage",
        "titleRu": "Спорт",
        "titleEn": "Спорт",
        "icon": "🎾",
        "sources": [
            "Тема: Спорт",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "workout",
                "tr": "[ˈwɜːkaʊt]",
                "ru": "тренировка",
                "ex": "If I do a morning workout, I feel energized all day.",
                "example": "If I do a morning workout, I feel energized all day."
            },
            {
                "en": "coach",
                "tr": "[kəʊtʃ]",
                "ru": "тренер",
                "ex": "Our tennis coach taught us a new serve.",
                "example": "Our tennis coach taught us a new serve."
            },
            {
                "en": "tournament",
                "tr": "[ˈtʊənəmənt]",
                "ru": "турнир, чемпионат",
                "ex": "She won first prize in the summer tournament.",
                "example": "She won first prize in the summer tournament."
            },
            {
                "en": "score",
                "tr": "[skɔː]",
                "ru": "счёт в игре; забивать гол / набирать очки",
                "ex": "Our team scored the winning point!",
                "example": "Our team scored the winning point!"
            },
            {
                "en": "stamina",
                "tr": "[ˈstæmɪnə]",
                "ru": "выносливость",
                "ex": "Swimming builds great stamina and strength.",
                "example": "Swimming builds great stamina and strength."
            },
            {
                "en": "championship",
                "tr": "[ˈtʃæmpiənʃɪp]",
                "ru": "чемпионат, первенство (B1)",
                "ex": "If we win this match, we will qualify for the championship.",
                "example": "If we win this match, we will qualify for the championship."
            },
            {
                "en": "compete",
                "tr": "[kəmˈpiːt]",
                "ru": "соревноваться, выступать (B1)",
                "ex": "Athletes from ten countries will compete tomorrow.",
                "example": "Athletes from ten countries will compete tomorrow."
            },
            {
                "en": "referee",
                "tr": "[ˌrefəˈriː]",
                "ru": "судья, арбитр (B1)",
                "ex": "If the referee blows the whistle, the match begins.",
                "example": "If the referee blows the whistle, the match begins."
            },
            {
                "en": "spectator",
                "tr": "[spekˈteɪtə]",
                "ru": "зритель на трибуне (B1)",
                "ex": "Thousands of spectators cheered for the team.",
                "example": "Thousands of spectators cheered for the team."
            },
            {
                "en": "defeat",
                "tr": "[dɪˈfiːt]",
                "ru": "победить соперника; поражение (B1)",
                "ex": "If we stay focused, we will defeat the champions.",
                "example": "If we stay focused, we will defeat the champions."
            }
        ],
        "readingPassage": {
            "titleEn": "Решающий матч на корте",
            "titleRu": "Спорт",
            "audioFull": "Next month our club is taking part in a regional tennis tournament. Our coach says that stamina and calm focus are the keys to victory. 'If you practice your serve every Tuesday and Thursday, you will score points easily in the final,' he told us after today's workout.",
            "paragraphs": [
                {
                    "en": "Next month our club is taking part in a regional tennis tournament. Our coach says that stamina and calm focus are the keys to victory.",
                    "ru": ""
                },
                {
                    "en": "'If you practice your serve every Tuesday and Thursday, you will score points easily in the final,' he told us after today's workout.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "First Conditional (Реальное условие): «Если мы потренируемся, мы выиграем турнир»",
            "skyNote": "В спорте и в жизни мы часто строим планы с условием: «Если (If) пойдёт дождь / если мы будем тренироваться усердно, мы победим в турнире!». Запомни золотое правило: в части с If ставим настоящее время (Present Simple), а в главной части — will: If we train hard, we will win the tournament!",
            "summary": "В спорте и в жизни мы часто строим планы с условием: «Если (If) пойдёт дождь / если мы будем тренироваться усердно, мы победим в турнире!». Запомни золотое правило: в части с If ставим настоящее время (Present Simple), а в главной части — will: If we train hard, we will win the tournament!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Спорт» (B1)",
                    "example": "If I do a morning workout, I feel energized all day.",
                    "note": "Формула: If we train with our coach, we will win the tournament!. В спорте и в жизни мы часто строим планы с условием: «Если (If) пойдёт дождь / если мы будем тренироваться усердно, мы победим в турнире!». Запомни золотое правило: в части с If ставим настоящее время (Present Simple), а в главной части — will: If we train hard, we will win the tournament!"
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "Our tennis coach taught us a new serve.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "If we train with our coach, we will win the tournament!",
                    "example": "If I do a morning workout, I feel energized all day.",
                    "note": "First Conditional (Реальное условие): «Если мы потренируемся, мы выиграем турнир»"
                }
            ],
            "cambridgeTip": "В теме «Спорт» мы сразу применяем правило (First Conditional (Реальное условие): «Если мы потренируемся, мы выиграем турнир») на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_25_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Спорт • B1",
                "prompt": "Подбодри команду перед финалом турнира:\n«If our team ___ together, we will definitely win the tournament!»",
                "options": [
                    "works",
                    "will work",
                    "worked",
                    "working"
                ],
                "correct": "works",
                "explanation": "В условной части после If (First Conditional) будущее время will не ставится — используем Present Simple (our team works)."
            },
            {
                "id": "unit_b1_25_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Спорт • Конструктор фразы",
                "prompt": "Собери фразу: «Если ты сделаешь утреннюю тренировку, ты почувствуешь прилив сил»",
                "words": [
                    "If",
                    "you",
                    "do",
                    "a",
                    "workout,",
                    "you",
                    "will",
                    "feel",
                    "great.",
                    "will do",
                    "did"
                ],
                "distractors": [
                    "will do",
                    "did"
                ],
                "correct": "If you do a workout, you will feel great.",
                "explanation": "В First Conditional: If + Present Simple (do), затем will + инфинитив (will feel).",
                "promptRu": "Собери фразу: «Если ты сделаешь утреннюю тренировку, ты почувствуешь прилив сил»",
                "correctSentence": "If you do a workout, you will feel great."
            },
            {
                "id": "unit_b1_25_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Спорт • Чтение",
                "storyTitle": "Решающий матч на корте",
                "paragraphs": [
                    {
                        "en": "Next month our club is taking part in a regional tennis tournament. Our coach says that stamina and calm focus are the keys to victory.",
                        "ru": ""
                    },
                    {
                        "en": "'If you practice your serve every Tuesday and Thursday, you will score points easily in the final,' he told us after today's workout.",
                        "ru": ""
                    }
                ],
                "prompt": "Что, по словам тренера, является ключом к победе на турнире?",
                "options": [
                    "Выносливость (stamina) и спокойная концентрация",
                    "Самая дорогая ракетка",
                    "Везение"
                ],
                "correct": "Выносливость (stamina) и спокойная концентрация",
                "explanation": "В тексте: stamina and calm focus are the keys to victory."
            },
            {
                "id": "unit_b1_25_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Спорт • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "If we train hard with our coach, we will win the tournament.",
                "translationRu": "Если мы будем усердно тренироваться с тренером, мы выиграем турнир.",
                "options": [
                    "If we train hard with our coach, we will win the tournament.",
                    "Swimming improves your stamina.",
                    "Our team scored twenty points."
                ],
                "correct": "If we train hard with our coach, we will win the tournament.",
                "explanation": "Прозвучала фраза: «If we train hard with our coach, we will win the tournament.» (Если мы будем усердно тренироваться с тренером, мы выиграем турнир.)."
            },
            {
                "id": "unit_b1_25_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Спорт • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "If I do a morning workout, I feel energetic all day.",
                "translationRu": "Если я делаю утреннюю тренировку, я чувствую себя бодро весь день.",
                "correct": "If I do a morning workout, I feel energetic all day.",
                "explanation": "Отличное произношение! «If I do a morning workout, I feel energetic all day.» — Если я делаю утреннюю тренировку, я чувствую себя бодро весь день.."
            }
        ]
    },
    {
        "id": "unit_b1_26",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 26,
        "nodeType": "five_stage",
        "titleRu": "Переезд",
        "titleEn": "Переезд",
        "icon": "📦",
        "sources": [
            "Тема: Переезд",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "neighborhood",
                "tr": "[ˈneɪbəhʊd]",
                "ru": "район, окрестности",
                "ex": "We moved to a quiet green neighborhood.",
                "example": "We moved to a quiet green neighborhood."
            },
            {
                "en": "rent",
                "tr": "[rent]",
                "ru": "снимать жильё; аренда",
                "ex": "They decided to rent a spacious apartment.",
                "example": "They decided to rent a spacious apartment."
            },
            {
                "en": "unpack",
                "tr": "[ˌʌnˈpæk]",
                "ru": "распаковывать (коробки)",
                "ex": "We spent the evening unpacking our boxes.",
                "example": "We spent the evening unpacking our boxes."
            },
            {
                "en": "spacious",
                "tr": "[ˈspeɪʃəs]",
                "ru": "просторный",
                "ex": "The new living room is bright and spacious.",
                "example": "The new living room is bright and spacious."
            },
            {
                "en": "suburb",
                "tr": "[ˈsʌbɜːb]",
                "ru": "пригород",
                "ex": "I used to live in the city centre, but now I love the suburbs.",
                "example": "I used to live in the city centre, but now I love the suburbs."
            },
            {
                "en": "landlord",
                "tr": "[ˈlændlɔːd]",
                "ru": "арендодатель, хозяин жилья (B1)",
                "ex": "Our new landlord signed the lease agreement.",
                "example": "Our new landlord signed the lease agreement."
            },
            {
                "en": "tenant",
                "tr": "[ˈtenənt]",
                "ru": "жилец, квартиросъёмщик (B1)",
                "ex": "The previous tenant used to keep plants on the balcony.",
                "example": "The previous tenant used to keep plants on the balcony."
            },
            {
                "en": "deposit",
                "tr": "[dɪˈpɒzɪt]",
                "ru": "залог, депозит (B1)",
                "ex": "We paid a one-month security deposit.",
                "example": "We paid a one-month security deposit."
            },
            {
                "en": "furnished",
                "tr": "[ˈfɜːnɪʃt]",
                "ru": "меблированный (с мебелью) (B1)",
                "ex": "They rented a fully furnished flat near the park.",
                "example": "They rented a fully furnished flat near the park."
            },
            {
                "en": "resident",
                "tr": "[ˈrezɪdənt]",
                "ru": "местный житель (B1)",
                "ex": "Local residents greeted us warmly.",
                "example": "Local residents greeted us warmly."
            }
        ],
        "readingPassage": {
            "titleEn": "Коробки, ключи и новый район",
            "titleRu": "Переезд",
            "audioFull": "For five years, Ben and Anna used to rent a small flat on a busy avenue. Last weekend, they finally moved to a peaceful green neighborhood near the river. Their new apartment is much more spacious. While they were unpacking boxes in the kitchen, their new neighbours brought them warm cinnamon buns.",
            "paragraphs": [
                {
                    "en": "For five years, Ben and Anna used to rent a small flat on a busy avenue. Last weekend, they finally moved to a peaceful green neighborhood near the river.",
                    "ru": ""
                },
                {
                    "en": "Their new apartment is much more spacious. While they were unpacking boxes in the kitchen, their new neighbours brought them warm cinnamon buns.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Конструкция used to — как мы жили раньше до переезда",
            "skyNote": "Когда мы переехали на новое место и сравниваем прошлые привычки с нынешними («Раньше мы жили в шумном центре, а теперь живём в зелёном районе»), используем удобную конструкцию used to + глагол: We used to rent a tiny flat, but now we live in a spacious house!",
            "summary": "Когда мы переехали на новое место и сравниваем прошлые привычки с нынешними («Раньше мы жили в шумном центре, а теперь живём в зелёном районе»), используем удобную конструкцию used to + глагол: We used to rent a tiny flat, but now we live in a spacious house!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Переезд» (B1)",
                    "example": "We moved to a quiet green neighborhood.",
                    "note": "Формула: We used to live in a noisy street, but now we live in a quiet neighborhood. Когда мы переехали на новое место и сравниваем прошлые привычки с нынешними («Раньше мы жили в шумном центре, а теперь живём в зелёном районе»), используем удобную конструкцию used to + глагол: We used to rent a tiny flat, but now we live in a spacious house!"
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "They decided to rent a spacious apartment.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "We used to live in a noisy street, but now we live in a quiet neighborhood",
                    "example": "We moved to a quiet green neighborhood.",
                    "note": "Конструкция used to — как мы жили раньше до переезда"
                }
            ],
            "cambridgeTip": "В теме «Переезд» мы сразу применяем правило (Конструкция used to — как мы жили раньше до переезда) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_26_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Переезд • B1",
                "prompt": "Сравни жизнь до и после переезда:\n«We ___ live in a tiny studio, but last month we moved to a spacious apartment.»",
                "options": [
                    "used to",
                    "use to",
                    "are used",
                    "were"
                ],
                "correct": "used to",
                "explanation": "Для описания прошлого состояния, которое больше не актуально («раньше бывало жили»), используется used to + инфинитив."
            },
            {
                "id": "unit_b1_26_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Переезд • Конструктор фразы",
                "prompt": "Собери фразу: «Раньше она снимала квартиру в центре, а теперь живёт в пригороде»",
                "words": [
                    "She",
                    "used",
                    "to",
                    "rent",
                    "a",
                    "flat",
                    "downtown.",
                    "uses",
                    "renting"
                ],
                "distractors": [
                    "uses",
                    "renting"
                ],
                "correct": "She used to rent a flat downtown.",
                "explanation": "После used to всегда идёт начальная форма глагола (rent).",
                "promptRu": "Собери фразу: «Раньше она снимала квартиру в центре, а теперь живёт в пригороде»",
                "correctSentence": "She used to rent a flat downtown."
            },
            {
                "id": "unit_b1_26_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Переезд • Чтение",
                "storyTitle": "Коробки, ключи и новый район",
                "paragraphs": [
                    {
                        "en": "For five years, Ben and Anna used to rent a small flat on a busy avenue. Last weekend, they finally moved to a peaceful green neighborhood near the river.",
                        "ru": ""
                    },
                    {
                        "en": "Their new apartment is much more spacious. While they were unpacking boxes in the kitchen, their new neighbours brought them warm cinnamon buns.",
                        "ru": ""
                    }
                ],
                "prompt": "Чем новые соседи угостили Бена и Анну во время распаковки коробок?",
                "options": [
                    "Тёплыми булочками с корицей",
                    "Фруктовым салатом",
                    "Лимонадом"
                ],
                "correct": "Тёплыми булочками с корицей",
                "explanation": "В тексте: their new neighbours brought them warm cinnamon buns."
            },
            {
                "id": "unit_b1_26_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Переезд • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "We used to rent a small flat, but now our home is spacious.",
                "translationRu": "Раньше мы снимали маленькую квартиру, а теперь наш дом просторный.",
                "options": [
                    "We used to rent a small flat, but now our home is spacious.",
                    "Help me unpack these boxes, please.",
                    "This green neighborhood is very quiet."
                ],
                "correct": "We used to rent a small flat, but now our home is spacious.",
                "explanation": "Прозвучала фраза: «We used to rent a small flat, but now our home is spacious.» (Раньше мы снимали маленькую квартиру, а теперь наш дом просторный.)."
            },
            {
                "id": "unit_b1_26_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Переезд • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "We moved to a spacious apartment in a quiet neighborhood.",
                "translationRu": "Мы переехали в просторную квартиру в тихом районе.",
                "correct": "We moved to a spacious apartment in a quiet neighborhood.",
                "explanation": "Отличное произношение! «We moved to a spacious apartment in a quiet neighborhood.» — Мы переехали в просторную квартиру в тихом районе.."
            }
        ]
    },
    {
        "id": "unit_b1_27",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 27,
        "nodeType": "five_stage",
        "titleRu": "Интервью",
        "titleEn": "Интервью",
        "icon": "💼",
        "sources": [
            "Тема: Интервью",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "experience",
                "tr": "[ɪkˈspɪəriəns]",
                "ru": "опыт работы",
                "ex": "She has three years of experience in design.",
                "example": "She has three years of experience in design."
            },
            {
                "en": "skill",
                "tr": "[skɪl]",
                "ru": "навык, умение",
                "ex": "Communication skills are essential for this role.",
                "example": "Communication skills are essential for this role."
            },
            {
                "en": "apply",
                "tr": "[əˈplaɪ]",
                "ru": "подавать резюме / заявку (for a job)",
                "ex": "I decided to apply for my dream job.",
                "example": "I decided to apply for my dream job."
            },
            {
                "en": "confident",
                "tr": "[ˈkɒnfɪdənt]",
                "ru": "уверенный в себе",
                "ex": "Stay calm and confident during the interview.",
                "example": "Stay calm and confident during the interview."
            },
            {
                "en": "salary",
                "tr": "[ˈsæləri]",
                "ru": "зарплата",
                "ex": "The company offers a competitive salary.",
                "example": "The company offers a competitive salary."
            },
            {
                "en": "qualification",
                "tr": "[ˌkwɒlɪfɪˈkeɪʃn]",
                "ru": "квалификация, диплом (B1)",
                "ex": "This position requires a professional qualification.",
                "example": "This position requires a professional qualification."
            },
            {
                "en": "candidate",
                "tr": "[ˈkændɪdət]",
                "ru": "кандидат, соискатель (B1)",
                "ex": "The HR manager promised to call every candidate.",
                "example": "The HR manager promised to call every candidate."
            },
            {
                "en": "permanent",
                "tr": "[ˈpɜːmənənt]",
                "ru": "постоянный (о работе) (B1)",
                "ex": "She hopes to get a permanent contract.",
                "example": "She hopes to get a permanent contract."
            },
            {
                "en": "promote",
                "tr": "[prəˈməʊt]",
                "ru": "повышать в должности (B1)",
                "ex": "The director decided to promote her after six months.",
                "example": "The director decided to promote her after six months."
            },
            {
                "en": "resign",
                "tr": "[rɪˈzaɪn]",
                "ru": "увольняться по собственному желанию (B1)",
                "ex": "He decided to resign and start his own studio.",
                "example": "He decided to resign and start his own studio."
            }
        ],
        "readingPassage": {
            "titleEn": "Собеседование мечты",
            "titleRu": "Интервью",
            "audioFull": "Last Tuesday Olivia decided to apply for a position at an international design studio. Before the interview, she prepared her portfolio and practised answering questions. During the meeting, she felt calm and confident. She explained that she enjoyed working on creative projects and had valuable experience. By Friday, the company offered to hire her with a great salary!",
            "paragraphs": [
                {
                    "en": "Last Tuesday Olivia decided to apply for a position at an international design studio. Before the interview, she prepared her portfolio and practised answering questions.",
                    "ru": ""
                },
                {
                    "en": "During the meeting, she felt calm and confident. She explained that she enjoyed working on creative projects and had valuable experience. By Friday, the company offered to hire her with a great salary!",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Герундий (-ing) или Инфинитив (to V) на собеседовании: decide to apply vs enjoy working",
            "skyNote": "На собеседовании мы часто используем связки двух глаголов. После глаголов решения и цели (decide, want, plan, hope, offer) ставим to + глагол: I decided to apply! The company offered to raise the salary. А после глаголов опыта и предпочтений (enjoy, finish, mind, suggest) ставим -ing: I enjoy learning new skills!",
            "summary": "На собеседовании мы часто используем связки двух глаголов. После глаголов решения и цели (decide, want, plan, hope, offer) ставим to + глагол: I decided to apply! The company offered to raise the salary. А после глаголов опыта и предпочтений (enjoy, finish, mind, suggest) ставим -ing: I enjoy learning new skills!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Интервью» (B1)",
                    "example": "She has three years of experience in design.",
                    "note": "Формула: decided to apply for the job • enjoy learning new skills. На собеседовании мы часто используем связки двух глаголов. После глаголов решения и цели (decide, want, plan, hope, offer) ставим to + глагол: I decided to apply! The company offered to raise the salary. А после глаголов опыта и предпочтений (enjoy, finish, mind, suggest) ставим -ing: I enjoy learning new skills!"
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "Communication skills are essential for this role.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "decided to apply for the job • enjoy learning new skills",
                    "example": "She has three years of experience in design.",
                    "note": "Герундий (-ing) или Инфинитив (to V) на собеседовании: decide to apply vs enjoy working"
                }
            ],
            "cambridgeTip": "В теме «Интервью» мы сразу применяем правило (Герундий (-ing) или Инфинитив (to V) на собеседовании: decide to apply vs enjoy working) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_27_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Интервью • B1",
                "prompt": "Расскажи рекрутеру о своём решении на собеседовании:\n«After gaining solid experience, I decided ___ for the senior designer position.»",
                "options": [
                    "to apply",
                    "applying",
                    "apply",
                    "applied"
                ],
                "correct": "to apply",
                "explanation": "После глагола decide всегда употребляется инфинитив с частицей to (decided to apply)."
            },
            {
                "id": "unit_b1_27_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Интервью • Конструктор фразы",
                "prompt": "Собери фразу для интервью: «Мне нравится развивать новые профессиональные навыки в команде»",
                "words": [
                    "I",
                    "enjoy",
                    "developing",
                    "new",
                    "skills",
                    "in",
                    "a",
                    "team.",
                    "to develop",
                    "developed"
                ],
                "distractors": [
                    "to develop",
                    "developed"
                ],
                "correct": "I enjoy developing new skills in a team.",
                "explanation": "После глагола enjoy следующий глагол всегда ставится с окончанием -ing (developing).",
                "promptRu": "Собери фразу для интервью: «Мне нравится развивать новые профессиональные навыки в команде»",
                "correctSentence": "I enjoy developing new skills in a team."
            },
            {
                "id": "unit_b1_27_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Интервью • Чтение",
                "storyTitle": "Собеседование мечты",
                "paragraphs": [
                    {
                        "en": "Last Tuesday Olivia decided to apply for a position at an international design studio. Before the interview, she prepared her portfolio and practised answering questions.",
                        "ru": ""
                    },
                    {
                        "en": "During the meeting, she felt calm and confident. She explained that she enjoyed working on creative projects and had valuable experience. By Friday, the company offered to hire her with a great salary!",
                        "ru": ""
                    }
                ],
                "prompt": "Какой ответ Оливия получила от дизайн-студии к пятнице?",
                "options": [
                    "Компания предложила нанять её с отличной зарплатой",
                    "Собеседование перенесли на месяц",
                    "Вакансию закрыли"
                ],
                "correct": "Компания предложила нанять её с отличной зарплатой",
                "explanation": "В тексте: By Friday, the company offered to hire her with a great salary!"
            },
            {
                "id": "unit_b1_27_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Интервью • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "I decided to apply for this job because I have relevant experience.",
                "translationRu": "Я решил подать резюме на эту работу, потому что у меня есть подходящий опыт.",
                "options": [
                    "I decided to apply for this job because I have relevant experience.",
                    "Stay confident during the interview.",
                    "The company offers a good salary."
                ],
                "correct": "I decided to apply for this job because I have relevant experience.",
                "explanation": "Прозвучала фраза: «I decided to apply for this job because I have relevant experience.» (Я решил подать резюме на эту работу, потому что у меня есть подходящий опыт.)."
            },
            {
                "id": "unit_b1_27_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Интервью • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "I enjoy learning new skills and feel confident at interviews.",
                "translationRu": "Мне нравится осваивать новые навыки, и я чувствую себя уверенно на собеседованиях.",
                "correct": "I enjoy learning new skills and feel confident at interviews.",
                "explanation": "Отличное произношение! «I enjoy learning new skills and feel confident at interviews.» — Мне нравится осваивать новые навыки, и я чувствую себя уверенно на собеседованиях.."
            }
        ]
    },
    {
        "id": "unit_b1_28",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 28,
        "nodeType": "five_stage",
        "titleRu": "Экология",
        "titleEn": "Экология",
        "icon": "🌿",
        "sources": [
            "Тема: Экология",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "recycle",
                "tr": "[ˌriːˈsaɪkl]",
                "ru": "перерабатывать вторсырьё",
                "ex": "If everyone recycled plastic, the ocean would be cleaner.",
                "example": "If everyone recycled plastic, the ocean would be cleaner."
            },
            {
                "en": "pollution",
                "tr": "[pəˈluːʃn]",
                "ru": "загрязнение окружающей среды",
                "ex": "Solar energy reduces air pollution.",
                "example": "Solar energy reduces air pollution."
            },
            {
                "en": "protect",
                "tr": "[prəˈtekt]",
                "ru": "защищать, беречь",
                "ex": "We must protect coral reefs and marine life.",
                "example": "We must protect coral reefs and marine life."
            },
            {
                "en": "waste",
                "tr": "[weɪst]",
                "ru": "отходы; тратить впустую",
                "ex": "Try not to waste clean water at home.",
                "example": "Try not to waste clean water at home."
            },
            {
                "en": "environment",
                "tr": "[ɪnˈvaɪrənmənt]",
                "ru": "окружающая среда, природа",
                "ex": "Small daily habits help the environment.",
                "example": "Small daily habits help the environment."
            },
            {
                "en": "renewable",
                "tr": "[rɪˈnjuːəbl]",
                "ru": "возобновляемый (об энергии) (B1)",
                "ex": "If cities used renewable energy, pollution would drop.",
                "example": "If cities used renewable energy, pollution would drop."
            },
            {
                "en": "climate",
                "tr": "[ˈklaɪmət]",
                "ru": "климат (B1)",
                "ex": "Planting trees helps slow down climate change.",
                "example": "Planting trees helps slow down climate change."
            },
            {
                "en": "solar",
                "tr": "[ˈsəʊlə]",
                "ru": "солнечный (solar panels) (B1)",
                "ex": "If we installed solar panels, we would save electricity.",
                "example": "If we installed solar panels, we would save electricity."
            },
            {
                "en": "drought",
                "tr": "[draʊt]",
                "ru": "засуха (B1)",
                "ex": "Saving water prevents severe droughts in summer.",
                "example": "Saving water prevents severe droughts in summer."
            },
            {
                "en": "litter",
                "tr": "[ˈlɪtə]",
                "ru": "мусор в общественных местах (B1)",
                "ex": "Volunteers cleared all the litter from the beach.",
                "example": "Volunteers cleared all the litter from the beach."
            }
        ],
        "readingPassage": {
            "titleEn": "Чистый берег нашей лагуны",
            "titleRu": "Экология",
            "audioFull": "Every Saturday morning, volunteers gather on the beach to protect the coastal environment. They collect plastic waste and sort glass and paper to recycle them. Our coordinator Maya often says: 'If every tourist took a reusable bottle instead of plastic cups, ocean pollution would disappear much faster!'",
            "paragraphs": [
                {
                    "en": "Every Saturday morning, volunteers gather on the beach to protect the coastal environment. They collect plastic waste and sort glass and paper to recycle them.",
                    "ru": ""
                },
                {
                    "en": "Our coordinator Maya often says: 'If every tourist took a reusable bottle instead of plastic cups, ocean pollution would disappear much faster!'",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Second Conditional (Мечты и гипотезы): «Если бы все перерабатывали пластик, океан был бы чище»",
            "skyNote": "Когда мы рассуждаем о воображаемой идеальной ситуации («Если бы люди меньше мусорили, мы бы спасли рифы»), используем Second Conditional: в части с If ставим Past Simple (recycled / reduced / were), а в главной части — would + глагол: If we recycled more waste, we would protect the environment!",
            "summary": "Когда мы рассуждаем о воображаемой идеальной ситуации («Если бы люди меньше мусорили, мы бы спасли рифы»), используем Second Conditional: в части с If ставим Past Simple (recycled / reduced / were), а в главной части — would + глагол: If we recycled more waste, we would protect the environment!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Экология» (B1)",
                    "example": "If everyone recycled plastic, the ocean would be cleaner.",
                    "note": "Формула: If everyone recycled plastic, the ocean would be much cleaner!. Когда мы рассуждаем о воображаемой идеальной ситуации («Если бы люди меньше мусорили, мы бы спасли рифы»), используем Second Conditional: в части с If ставим Past Simple (recycled / reduced / were), а в главной части — would + глагол: If we recycled more waste, we would protect the environment!"
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "Solar energy reduces air pollution.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "If everyone recycled plastic, the ocean would be much cleaner!",
                    "example": "If everyone recycled plastic, the ocean would be cleaner.",
                    "note": "Second Conditional (Мечты и гипотезы): «Если бы все перерабатывали пластик, океан был бы чище»"
                }
            ],
            "cambridgeTip": "В теме «Экология» мы сразу применяем правило (Second Conditional (Мечты и гипотезы): «Если бы все перерабатывали пластик, океан был бы чище») на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_28_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Экология • B1",
                "prompt": "Построй гипотезу о защите океана:\n«If people ___ less single-use plastic, we would protect marine animals from pollution.»",
                "options": [
                    "used",
                    "will use",
                    "use",
                    "would use"
                ],
                "correct": "used",
                "explanation": "Во втором типе условных (Second Conditional, где в главной части стоит would protect) после If используется форма Past Simple: used."
            },
            {
                "id": "unit_b1_28_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Экология • Конструктор фразы",
                "prompt": "Собери фразу: «Если бы мы перерабатывали отходы, мы бы защитили природу»",
                "words": [
                    "If",
                    "we",
                    "recycled",
                    "waste,",
                    "we",
                    "would",
                    "protect",
                    "nature.",
                    "will",
                    "recycle"
                ],
                "distractors": [
                    "will",
                    "recycle"
                ],
                "correct": "If we recycled waste, we would protect nature.",
                "explanation": "Формула Second Conditional: If + V2 (recycled), ... would + V1 (would protect).",
                "promptRu": "Собери фразу: «Если бы мы перерабатывали отходы, мы бы защитили природу»",
                "correctSentence": "If we recycled waste, we would protect nature."
            },
            {
                "id": "unit_b1_28_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Экология • Чтение",
                "storyTitle": "Чистый берег нашей лагуны",
                "paragraphs": [
                    {
                        "en": "Every Saturday morning, volunteers gather on the beach to protect the coastal environment. They collect plastic waste and sort glass and paper to recycle them.",
                        "ru": ""
                    },
                    {
                        "en": "Our coordinator Maya often says: 'If every tourist took a reusable bottle instead of plastic cups, ocean pollution would disappear much faster!'",
                        "ru": ""
                    }
                ],
                "prompt": "Что, по словам Майи, помогло бы быстрее победить загрязнение океана?",
                "options": [
                    "Если бы каждый турист брал многоразовую бутылку вместо пластиковых стаканчиков",
                    "Закрытие всех пляжей",
                    "Отмена кораблей"
                ],
                "correct": "Если бы каждый турист брал многоразовую бутылку вместо пластиковых стаканчиков",
                "explanation": "В тексте: If every tourist took a reusable bottle instead of plastic cups..."
            },
            {
                "id": "unit_b1_28_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Экология • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "If everyone recycled plastic, we would protect the ocean from pollution.",
                "translationRu": "Если бы все перерабатывали пластик, мы бы защитили океан от загрязнения.",
                "options": [
                    "If everyone recycled plastic, we would protect the ocean from pollution.",
                    "Do not waste clean water at home.",
                    "Volunteers care about the environment."
                ],
                "correct": "If everyone recycled plastic, we would protect the ocean from pollution.",
                "explanation": "Прозвучала фраза: «If everyone recycled plastic, we would protect the ocean from pollution.» (Если бы все перерабатывали пластик, мы бы защитили океан от загрязнения.)."
            },
            {
                "id": "unit_b1_28_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Экология • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "If we recycled more waste, we would protect the environment.",
                "translationRu": "Если бы мы перерабатывали больше отходов, мы бы защитили окружающую среду.",
                "correct": "If we recycled more waste, we would protect the environment.",
                "explanation": "Отличное произношение! «If we recycled more waste, we would protect the environment.» — Если бы мы перерабатывали больше отходов, мы бы защитили окружающую среду.."
            }
        ]
    },
    {
        "id": "unit_b1_29",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 29,
        "nodeType": "five_stage",
        "titleRu": "Гаджеты",
        "titleEn": "Гаджеты",
        "icon": "📱",
        "sources": [
            "Тема: Гаджеты",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "battery",
                "tr": "[ˈbætəri]",
                "ru": "батарея, аккумулятор",
                "ex": "My phone battery is running low.",
                "example": "My phone battery is running low."
            },
            {
                "en": "charger",
                "tr": "[ˈtʃɑːdʒə]",
                "ru": "зарядное устройство",
                "ex": "Could I borrow your charger for half an hour?",
                "example": "Could I borrow your charger for half an hour?"
            },
            {
                "en": "screen",
                "tr": "[skriːn]",
                "ru": "экран",
                "ex": "Don't look at a bright screen right before sleep.",
                "example": "Don't look at a bright screen right before sleep."
            },
            {
                "en": "password",
                "tr": "[ˈpɑːswɜːd]",
                "ru": "пароль",
                "ex": "Create a strong password to protect your account.",
                "example": "Create a strong password to protect your account."
            },
            {
                "en": "headphones",
                "tr": "[ˈhedfəʊnz]",
                "ru": "наушники",
                "ex": "Wireless headphones are convenient for listening to podcasts.",
                "example": "Wireless headphones are convenient for listening to podcasts."
            },
            {
                "en": "wireless",
                "tr": "[ˈwaɪələs]",
                "ru": "беспроводной (B1)",
                "ex": "This cafe must have a fast wireless connection.",
                "example": "This cafe must have a fast wireless connection."
            },
            {
                "en": "privacy",
                "tr": "[ˈprɪvəsi]",
                "ru": "конфиденциальность, приватность (B1)",
                "ex": "Check your privacy settings in the app.",
                "example": "Check your privacy settings in the app."
            },
            {
                "en": "database",
                "tr": "[ˈdeɪtəbeɪs]",
                "ru": "база данных (B1)",
                "ex": "The file must be stored in the cloud database.",
                "example": "The file must be stored in the cloud database."
            },
            {
                "en": "update",
                "tr": "[ˌʌpˈdeɪt]",
                "ru": "обновлять; обновление (B1)",
                "ex": "Your system might need a security update.",
                "example": "Your system might need a security update."
            },
            {
                "en": "notification",
                "tr": "[ˌnəʊtɪfɪˈkeɪʃn]",
                "ru": "уведомление (на экране) (B1)",
                "ex": "I turned off sound notifications during the lesson.",
                "example": "I turned off sound notifications during the lesson."
            }
        ],
        "readingPassage": {
            "titleEn": "Тайна пропавшей зарядки",
            "titleRu": "Гаджеты",
            "audioFull": "Before our train trip, Lucas noticed that his phone battery was at ten percent. He searched his pockets for his charger, but it wasn't there. 'It can't be far,' said his sister. 'You used it in the living room, so it must be near the sofa!' Indeed, the charger and his headphones were right under a magazine.",
            "paragraphs": [
                {
                    "en": "Before our train trip, Lucas noticed that his phone battery was at ten percent. He searched his pockets for his charger, but it wasn't there.",
                    "ru": ""
                },
                {
                    "en": "'It can't be far,' said his sister. 'You used it in the living room, so it must be near the sofa!' Indeed, the charger and his headphones were right under a magazine.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Модальные глаголы догадки (must / might / can't): «Где же моя зарядка?»",
            "skyNote": "Когда мы ищем наушники или зарядку и строим догадки в настоящем: must be — «должно быть, точно там» (95% уверенности: My charger must be in my backpack), might / could be — «возможно, там» (50%: It might be on the desk), can't be — «не может быть, чтобы там» (It can't be lost!).",
            "summary": "Когда мы ищем наушники или зарядку и строим догадки в настоящем: must be — «должно быть, точно там» (95% уверенности: My charger must be in my backpack), might / could be — «возможно, там» (50%: It might be on the desk), can't be — «не может быть, чтобы там» (It can't be lost!).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Гаджеты» (B1)",
                    "example": "My phone battery is running low.",
                    "note": "Формула: My headphones must be in my bag • The battery can't be empty already!. Когда мы ищем наушники или зарядку и строим догадки в настоящем: must be — «должно быть, точно там» (95% уверенности: My charger must be in my backpack), might / could be — «возможно, там» (50%: It might be on the desk), can't be — «не может быть, чтобы там» (It can't be lost!)."
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "Could I borrow your charger for half an hour?",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "My headphones must be in my bag • The battery can't be empty already!",
                    "example": "My phone battery is running low.",
                    "note": "Модальные глаголы догадки (must / might / can't): «Где же моя зарядка?»"
                }
            ],
            "cambridgeTip": "В теме «Гаджеты» мы сразу применяем правило (Модальные глаголы догадки (must / might / can't): «Где же моя зарядка?») на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_29_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Гаджеты • B1",
                "prompt": "Ты только что заряжал телефон, но он выключился. Вырази удивление («Не может быть, чтобы батарея села!»):\n«That's strange, my battery ___ be dead already — I charged it an hour ago!»",
                "options": [
                    "can't",
                    "must",
                    "should",
                    "ought"
                ],
                "correct": "can't",
                "explanation": "Для выражения «не может быть, чтобы...» используется модальный глагол can't be."
            },
            {
                "id": "unit_b1_29_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Гаджеты • Конструктор фразы",
                "prompt": "Собери догадку: «Должно быть, мои беспроводные наушники лежат на столе»",
                "words": [
                    "My",
                    "wireless",
                    "headphones",
                    "must",
                    "be",
                    "on",
                    "the",
                    "desk.",
                    "can",
                    "to"
                ],
                "distractors": [
                    "can",
                    "to"
                ],
                "correct": "My wireless headphones must be on the desk.",
                "explanation": "Уверенная логическая догадка передаётся через must be.",
                "promptRu": "Собери догадку: «Должно быть, мои беспроводные наушники лежат на столе»",
                "correctSentence": "My wireless headphones must be on the desk."
            },
            {
                "id": "unit_b1_29_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Гаджеты • Чтение",
                "storyTitle": "Тайна пропавшей зарядки",
                "paragraphs": [
                    {
                        "en": "Before our train trip, Lucas noticed that his phone battery was at ten percent. He searched his pockets for his charger, but it wasn't there.",
                        "ru": ""
                    },
                    {
                        "en": "'It can't be far,' said his sister. 'You used it in the living room, so it must be near the sofa!' Indeed, the charger and his headphones were right under a magazine.",
                        "ru": ""
                    }
                ],
                "prompt": "Где в итоге нашлись зарядка и наушники Лукаса?",
                "options": [
                    "В гостиной у дивана под журналом",
                    "В холодильнике",
                    "В машине"
                ],
                "correct": "В гостиной у дивана под журналом",
                "explanation": "В тексте: the charger and his headphones were right under a magazine."
            },
            {
                "id": "unit_b1_29_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Гаджеты • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "My phone battery is low, so my charger must be in my bag.",
                "translationRu": "Батарея телефона садится, а моя зарядка, должно быть, в сумке.",
                "options": [
                    "My phone battery is low, so my charger must be in my bag.",
                    "Never share your secret password.",
                    "These wireless headphones sound great."
                ],
                "correct": "My phone battery is low, so my charger must be in my bag.",
                "explanation": "Прозвучала фраза: «My phone battery is low, so my charger must be in my bag.» (Батарея телефона садится, а моя зарядка, должно быть, в сумке.)."
            },
            {
                "id": "unit_b1_29_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Гаджеты • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "My wireless headphones must be in my jacket pocket.",
                "translationRu": "Мои беспроводные наушники, должно быть, в кармане куртки.",
                "correct": "My wireless headphones must be in my jacket pocket.",
                "explanation": "Отличное произношение! «My wireless headphones must be in my jacket pocket.» — Мои беспроводные наушники, должно быть, в кармане куртки.."
            }
        ]
    },
    {
        "id": "unit_b1_30",
        "zoneId": "reef_b1",
        "cefr": "B1",
        "number": 30,
        "nodeType": "five_stage",
        "titleRu": "Музыка",
        "titleEn": "Музыка",
        "icon": "🎻",
        "sources": [
            "Тема: Музыка",
            "Уровень B1"
        ],
        "vocab": [
            {
                "en": "melody",
                "tr": "[ˈmelədi]",
                "ru": "мелодия",
                "ex": "This gentle piano melody stays in your memory.",
                "example": "This gentle piano melody stays in your memory."
            },
            {
                "en": "stage",
                "tr": "[steɪdʒ]",
                "ru": "сцена",
                "ex": "When we arrived, the band had already stepped onto the stage.",
                "example": "When we arrived, the band had already stepped onto the stage."
            },
            {
                "en": "lyrics",
                "tr": "[ˈlɪrɪks]",
                "ru": "текст песни, слова песни",
                "ex": "She knows all the lyrics of this song by heart.",
                "example": "She knows all the lyrics of this song by heart."
            },
            {
                "en": "concert",
                "tr": "[ˈkɒnsət]",
                "ru": "концерт",
                "ex": "The open-air concert attracted thousands of fans.",
                "example": "The open-air concert attracted thousands of fans."
            },
            {
                "en": "rhythm",
                "tr": "[ˈrɪðəm]",
                "ru": "ритм",
                "ex": "Everyone clapped to the lively rhythm.",
                "example": "Everyone clapped to the lively rhythm."
            },
            {
                "en": "rehearsal",
                "tr": "[rɪˈhɜːsl]",
                "ru": "репетиция (B1)",
                "ex": "The band had finished their rehearsal before noon.",
                "example": "The band had finished their rehearsal before noon."
            },
            {
                "en": "composer",
                "tr": "[kəmˈpəʊzə]",
                "ru": "композитор (B1)",
                "ex": "The composer had written this piece in Vienna.",
                "example": "The composer had written this piece in Vienna."
            },
            {
                "en": "orchestra",
                "tr": "[ˈɔːkɪstrə]",
                "ru": "оркестр (B1)",
                "ex": "The symphony orchestra tuned their instruments.",
                "example": "The symphony orchestra tuned their instruments."
            },
            {
                "en": "applause",
                "tr": "[əˈplɔːz]",
                "ru": "аплодисменты (B1)",
                "ex": "Loud applause filled the concert hall.",
                "example": "Loud applause filled the concert hall."
            },
            {
                "en": "choir",
                "tr": "[ˈkwaɪə]",
                "ru": "хор (B1)",
                "ex": "She had sung in the university choir for three years.",
                "example": "She had sung in the university choir for three years."
            }
        ],
        "readingPassage": {
            "titleEn": "Концерт под открытым небом",
            "titleRu": "Музыка",
            "audioFull": "Last Saturday we went to an evening jazz concert in the harbour park. Because of traffic, we arrived ten minutes late. By the time we approached the stage, the musicians had already played their first melody. Fortunately, we heard all our favourite songs! The audience sang the lyrics together and danced to the warm summer rhythm.",
            "paragraphs": [
                {
                    "en": "Last Saturday we went to an evening jazz concert in the harbour park. Because of traffic, we arrived ten minutes late. By the time we approached the stage, the musicians had already played their first melody.",
                    "ru": ""
                },
                {
                    "en": "Fortunately, we heard all our favourite songs! The audience sang the lyrics together and danced to the warm summer rhythm.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Past Perfect (had + V3) — что уже произошло к началу концерта",
            "skyNote": "Когда мы рассказываем о концерте в прошлом и хотим уточнить, что одно действие случилось РАНЬШЕ другого («Когда мы пришли к сцене, музыканты УЖЕ выучили текст и начали играть»), для более раннего действия используем Past Perfect: had + 3-я форма глагола (had started / had learned).",
            "summary": "Когда мы рассказываем о концерте в прошлом и хотим уточнить, что одно действие случилось РАНЬШЕ другого («Когда мы пришли к сцене, музыканты УЖЕ выучили текст и начали играть»), для более раннего действия используем Past Perfect: had + 3-я форма глагола (had started / had learned).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Музыка» (B1)",
                    "example": "This gentle piano melody stays in your memory.",
                    "note": "Формула: By the time we reached the stage, the concert had already begun!. Когда мы рассказываем о концерте в прошлом и хотим уточнить, что одно действие случилось РАНЬШЕ другого («Когда мы пришли к сцене, музыканты УЖЕ выучили текст и начали играть»), для более раннего действия используем Past Perfect: had + 3-я форма глагола (had started / had learned)."
                },
                {
                    "label": "🌊 Живой пример на лексике B1",
                    "example": "When we arrived, the band had already stepped onto the stage.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "By the time we reached the stage, the concert had already begun!",
                    "example": "This gentle piano melody stays in your memory.",
                    "note": "Past Perfect (had + V3) — что уже произошло к началу концерта"
                }
            ],
            "cambridgeTip": "В теме «Музыка» мы сразу применяем правило (Past Perfect (had + V3) — что уже произошло к началу концерта) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b1_30_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Музыка • B1",
                "prompt": "Расскажи о том, что произошло до начала выступления на сцене:\n«Before the singer stepped onto the stage, she ___ written the lyrics herself.»",
                "options": [
                    "had",
                    "has",
                    "was",
                    "did"
                ],
                "correct": "had",
                "explanation": "Певица написала текст песни ДО того, как вышла на сцену в прошлом — это предпрошедшее время Past Perfect (had written)."
            },
            {
                "id": "unit_b1_30_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Музыка • Конструктор фразы",
                "prompt": "Собери фразу: «К тому времени как мы приехали, концерт уже начался»",
                "words": [
                    "When",
                    "we",
                    "arrived,",
                    "the",
                    "concert",
                    "had",
                    "already",
                    "started.",
                    "has",
                    "starting"
                ],
                "distractors": [
                    "has",
                    "starting"
                ],
                "correct": "When we arrived, the concert had already started.",
                "explanation": "Действие, свершившееся раньше другого прошлого события (arrived), ставится в Past Perfect: had already started.",
                "promptRu": "Собери фразу: «К тому времени как мы приехали, концерт уже начался»",
                "correctSentence": "When we arrived, the concert had already started."
            },
            {
                "id": "unit_b1_30_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Музыка • Чтение",
                "storyTitle": "Концерт под открытым небом",
                "paragraphs": [
                    {
                        "en": "Last Saturday we went to an evening jazz concert in the harbour park. Because of traffic, we arrived ten minutes late. By the time we approached the stage, the musicians had already played their first melody.",
                        "ru": ""
                    },
                    {
                        "en": "Fortunately, we heard all our favourite songs! The audience sang the lyrics together and danced to the warm summer rhythm.",
                        "ru": ""
                    }
                ],
                "prompt": "Что уже успели сделать музыканты к тому моменту, когда герои подошли к сцене?",
                "options": [
                    "Сыграли свою первую мелодию",
                    "Закончили весь концерт",
                    "Уехали домой"
                ],
                "correct": "Сыграли свою первую мелодию",
                "explanation": "В тексте: By the time we approached the stage, the musicians had already played their first melody."
            },
            {
                "id": "unit_b1_30_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Музыка • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "By the time we reached the stage, the concert had already started.",
                "translationRu": "К тому времени, как мы добрались до сцены, концерт уже начался.",
                "options": [
                    "By the time we reached the stage, the concert had already started.",
                    "I know the lyrics of this melody.",
                    "They danced to the lively rhythm."
                ],
                "correct": "By the time we reached the stage, the concert had already started.",
                "explanation": "Прозвучала фраза: «By the time we reached the stage, the concert had already started.» (К тому времени, как мы добрались до сцены, концерт уже начался.)."
            },
            {
                "id": "unit_b1_30_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Музыка • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "She had learned all the lyrics before the evening concert.",
                "translationRu": "Она выучила все слова песни до вечернего концерта.",
                "correct": "She had learned all the lyrics before the evening concert.",
                "explanation": "Отличное произношение! «She had learned all the lyrics before the evening concert.» — Она выучила все слова песни до вечернего концерта.."
            }
        ]
    },
    {
        "id": "unit_b2_31",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 31,
        "nodeType": "five_stage",
        "titleRu": "Психология",
        "titleEn": "Психология",
        "icon": "🧠",
        "sources": [
            "Тема: Психология",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "mindset",
                "tr": "[ˈmaɪndset]",
                "ru": "образ мышления, настрой",
                "ex": "A growth mindset helps you learn from mistakes.",
                "example": "A growth mindset helps you learn from mistakes."
            },
            {
                "en": "anxiety",
                "tr": "[æŋˈzaɪəti]",
                "ru": "тревожность, волнение",
                "ex": "Deep breathing reduces pre-exam anxiety.",
                "example": "Deep breathing reduces pre-exam anxiety."
            },
            {
                "en": "empathy",
                "tr": "[ˈempəθi]",
                "ru": "эмпатия, сопереживание",
                "ex": "Listening with empathy builds deep trust.",
                "example": "Listening with empathy builds deep trust."
            },
            {
                "en": "overcome",
                "tr": "[ˌəʊvəˈkʌm]",
                "ru": "преодолевать",
                "ex": "She has been trying to overcome her fear of public speaking.",
                "example": "She has been trying to overcome her fear of public speaking."
            },
            {
                "en": "resilience",
                "tr": "[rɪˈzɪliəns]",
                "ru": "жизнестойкость, внутренняя устойчивость",
                "ex": "Emotional resilience grows through challenges.",
                "example": "Emotional resilience grows through challenges."
            },
            {
                "en": "subconscious",
                "tr": "[ˌsʌbˈkɒnʃəs]",
                "ru": "подсознание; подсознательный (B2)",
                "ex": "Psychologists have been studying subconscious habits.",
                "example": "Psychologists have been studying subconscious habits."
            },
            {
                "en": "self-esteem",
                "tr": "[ˌself ɪˈstiːm]",
                "ru": "самооценка (B2)",
                "ex": "Small daily victories build healthy self-esteem.",
                "example": "Small daily victories build healthy self-esteem."
            },
            {
                "en": "overwhelm",
                "tr": "[ˌəʊvəˈwelm]",
                "ru": "перегружать эмоциями, захлёстывать (B2)",
                "ex": "Don't let perfectionism overwhelm your progress.",
                "example": "Don't let perfectionism overwhelm your progress."
            },
            {
                "en": "motive",
                "tr": "[ˈməʊtɪv]",
                "ru": "внутренний мотив, побуждение (B2)",
                "ex": "Understanding your true motives brings clarity.",
                "example": "Understanding your true motives brings clarity."
            },
            {
                "en": "burnout",
                "tr": "[ˈbɜːnaʊt]",
                "ru": "эмоциональное выгорание (B2)",
                "ex": "Regular rest prevents professional burnout.",
                "example": "Regular rest prevents professional burnout."
            }
        ],
        "readingPassage": {
            "titleEn": "Искусство внутренней опоры",
            "titleRu": "Психология",
            "audioFull": "In modern psychology, researchers have been exploring how a growth mindset transforms our daily life. Instead of fearing mistakes, resilient people treat every challenge as feedback. When we practise empathy toward ourselves and others, we gradually overcome anxiety and build lasting inner calm.",
            "paragraphs": [
                {
                    "en": "In modern psychology, researchers have been exploring how a growth mindset transforms our daily life. Instead of fearing mistakes, resilient people treat every challenge as feedback.",
                    "ru": ""
                },
                {
                    "en": "When we practise empathy toward ourselves and others, we gradually overcome anxiety and build lasting inner calm.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Present Perfect Continuous (have/has been + V-ing) — работа над собой в процессе",
            "skyNote": "Когда действие началось в прошлом, длится уже какое-то время и всё ещё продолжается («Психологи изучают эмоциональную устойчивость уже много лет», «Я практикую осознанность с весны»), используем have / has been + глагол с -ing!",
            "summary": "Когда действие началось в прошлом, длится уже какое-то время и всё ещё продолжается («Психологи изучают эмоциональную устойчивость уже много лет», «Я практикую осознанность с весны»), используем have / has been + глагол с -ing!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Психология» (B2)",
                    "example": "A growth mindset helps you learn from mistakes.",
                    "note": "Формула: She has been practising mindfulness to overcome anxiety. Когда действие началось в прошлом, длится уже какое-то время и всё ещё продолжается («Психологи изучают эмоциональную устойчивость уже много лет», «Я практикую осознанность с весны»), используем have / has been + глагол с -ing!"
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "Deep breathing reduces pre-exam anxiety.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "She has been practising mindfulness to overcome anxiety",
                    "example": "A growth mindset helps you learn from mistakes.",
                    "note": "Present Perfect Continuous (have/has been + V-ing) — работа над собой в процессе"
                }
            ],
            "cambridgeTip": "В теме «Психология» мы сразу применяем правило (Present Perfect Continuous (have/has been + V-ing) — работа над собой в процессе) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_31_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Психология • B2",
                "prompt": "Расскажи о длительной практике психолога:\n«Dr. Carter ___ studying emotional resilience and empathy for fifteen years.»",
                "options": [
                    "has been",
                    "is",
                    "had",
                    "was"
                ],
                "correct": "has been",
                "explanation": "Процесс начался 15 лет назад и продолжается сейчас — Present Perfect Continuous: has been studying."
            },
            {
                "id": "unit_b2_31_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Психология • Конструктор фразы",
                "prompt": "Собери фразу: «Она весь месяц работает над преодолением тревожности»",
                "words": [
                    "She",
                    "has",
                    "been",
                    "working",
                    "to",
                    "overcome",
                    "her",
                    "anxiety.",
                    "worked",
                    "is"
                ],
                "distractors": [
                    "worked",
                    "is"
                ],
                "correct": "She has been working to overcome her anxiety.",
                "explanation": "Длительный процесс до настоящего момента передаётся через has been working.",
                "promptRu": "Собери фразу: «Она весь месяц работает над преодолением тревожности»",
                "correctSentence": "She has been working to overcome her anxiety."
            },
            {
                "id": "unit_b2_31_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Психология • Чтение",
                "storyTitle": "Искусство внутренней опоры",
                "paragraphs": [
                    {
                        "en": "In modern psychology, researchers have been exploring how a growth mindset transforms our daily life. Instead of fearing mistakes, resilient people treat every challenge as feedback.",
                        "ru": ""
                    },
                    {
                        "en": "When we practise empathy toward ourselves and others, we gradually overcome anxiety and build lasting inner calm.",
                        "ru": ""
                    }
                ],
                "prompt": "Как люди с «мышлением роста» (growth mindset) относятся к ошибкам?",
                "options": [
                    "Воспринимают их как полезную обратную связь и опыт",
                    "Бросают начатое дело",
                    "Винят окружающих"
                ],
                "correct": "Воспринимают их как полезную обратную связь и опыт",
                "explanation": "В тексте: treat every challenge as feedback."
            },
            {
                "id": "unit_b2_31_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Психология • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "A positive mindset helps you overcome anxiety and build resilience.",
                "translationRu": "Позитивный настрой помогает преодолеть тревожность и развить устойчивость.",
                "options": [
                    "A positive mindset helps you overcome anxiety and build resilience.",
                    "She showed great empathy to her friend.",
                    "We have been reading this psychology book."
                ],
                "correct": "A positive mindset helps you overcome anxiety and build resilience.",
                "explanation": "Прозвучала фраза: «A positive mindset helps you overcome anxiety and build resilience.» (Позитивный настрой помогает преодолеть тревожность и развить устойчивость.)."
            },
            {
                "id": "unit_b2_31_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Психология • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Listening with empathy helps us overcome anxiety together.",
                "translationRu": "Умение слушать с эмпатией помогает нам вместе преодолевать тревогу.",
                "correct": "Listening with empathy helps us overcome anxiety together.",
                "explanation": "Отличное произношение! «Listening with empathy helps us overcome anxiety together.» — Умение слушать с эмпатией помогает нам вместе преодолевать тревогу.."
            }
        ]
    },
    {
        "id": "unit_b2_32",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 32,
        "nodeType": "five_stage",
        "titleRu": "Финансы",
        "titleEn": "Финансы",
        "icon": "💳",
        "sources": [
            "Тема: Финансы",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "budget",
                "tr": "[ˈbʌdʒɪt]",
                "ru": "бюджет",
                "ex": "If we had planned our budget, we would have saved more money.",
                "example": "If we had planned our budget, we would have saved more money."
            },
            {
                "en": "invest",
                "tr": "[ɪnˈvest]",
                "ru": "инвестировать, вкладывать",
                "ex": "It is wise to invest in education and health.",
                "example": "It is wise to invest in education and health."
            },
            {
                "en": "savings",
                "tr": "[ˈseɪvɪŋz]",
                "ru": "сбережения, накопления",
                "ex": "They used their savings as a deposit for the house.",
                "example": "They used their savings as a deposit for the house."
            },
            {
                "en": "expense",
                "tr": "[ɪkˈspens]",
                "ru": "расход, трата",
                "ex": "Track your monthly expenses in an app.",
                "example": "Track your monthly expenses in an app."
            },
            {
                "en": "income",
                "tr": "[ˈɪnkʌm]",
                "ru": "доход",
                "ex": "Freelancing gives her an additional source of income.",
                "example": "Freelancing gives her an additional source of income."
            },
            {
                "en": "inflation",
                "tr": "[ɪnˈfleɪʃn]",
                "ru": "инфляция (B2)",
                "ex": "Long-term investments protect savings from inflation.",
                "example": "Long-term investments protect savings from inflation."
            },
            {
                "en": "mortgage",
                "tr": "[ˈmɔːɡɪdʒ]",
                "ru": "ипотека (B2)",
                "ex": "They paid off their mortgage five years early.",
                "example": "They paid off their mortgage five years early."
            },
            {
                "en": "revenue",
                "tr": "[ˈrevənjuː]",
                "ru": "выручка, доход компании (B2)",
                "ex": "The studio's annual revenue grew by thirty percent.",
                "example": "The studio's annual revenue grew by thirty percent."
            },
            {
                "en": "asset",
                "tr": "[ˈæset]",
                "ru": "ценный актив, капитал (B2)",
                "ex": "Knowledge is your most reliable financial asset.",
                "example": "Knowledge is your most reliable financial asset."
            },
            {
                "en": "profitable",
                "tr": "[ˈprɒfɪtəbl]",
                "ru": "прибыльный, рентабельный (B2)",
                "ex": "If they had expanded online, the business would have been more profitable.",
                "example": "If they had expanded online, the business would have been more profitable."
            }
        ],
        "readingPassage": {
            "titleEn": "Разумный подход к накоплениям",
            "titleRu": "Финансы",
            "audioFull": "Financial literacy starts with simple habits. Last year, Adam realized that small impulse purchases were eating up a third of his monthly income. 'If I had tracked my daily expenses earlier, I would have built a solid savings cushion much faster,' he said. Now he plans his budget every month and invests in his education.",
            "paragraphs": [
                {
                    "en": "Financial literacy starts with simple habits. Last year, Adam realized that small impulse purchases were eating up a third of his monthly income.",
                    "ru": ""
                },
                {
                    "en": "'If I had tracked my daily expenses earlier, I would have built a solid savings cushion much faster,' he said. Now he plans his budget every month and invests in his education.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Third Conditional (If + had V3, would have V3) — финансовые уроки прошлого",
            "skyNote": "Когда мы анализируем прошлые финансовые решения («Если бы в прошлом году мы спланировали бюджет, мы бы накопили больше сбережений»), ситуация уже в прошлом! Поэтому используем Third Conditional: If + Past Perfect (had planned), а в главной части — would have + V3 (would have saved).",
            "summary": "Когда мы анализируем прошлые финансовые решения («Если бы в прошлом году мы спланировали бюджет, мы бы накопили больше сбережений»), ситуация уже в прошлом! Поэтому используем Third Conditional: If + Past Perfect (had planned), а в главной части — would have + V3 (would have saved).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Финансы» (B2)",
                    "example": "If we had planned our budget, we would have saved more money.",
                    "note": "Формула: If we had tracked our expenses, we would have increased our savings. Когда мы анализируем прошлые финансовые решения («Если бы в прошлом году мы спланировали бюджет, мы бы накопили больше сбережений»), ситуация уже в прошлом! Поэтому используем Third Conditional: If + Past Perfect (had planned), а в главной части — would have + V3 (would have saved)."
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "It is wise to invest in education and health.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "If we had tracked our expenses, we would have increased our savings",
                    "example": "If we had planned our budget, we would have saved more money.",
                    "note": "Third Conditional (If + had V3, would have V3) — финансовые уроки прошлого"
                }
            ],
            "cambridgeTip": "В теме «Финансы» мы сразу применяем правило (Third Conditional (If + had V3, would have V3) — финансовые уроки прошлого) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_32_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Финансы • B2",
                "prompt": "Проанализируй прошлогодний финансовый опыт:\n«If Leo ___ invested wisely last year, he would have doubled his savings.»",
                "options": [
                    "had",
                    "has",
                    "would",
                    "did"
                ],
                "correct": "had",
                "explanation": "В условной части Third Conditional (о прошлом) используется Past Perfect: If Leo had invested."
            },
            {
                "id": "unit_b2_32_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Финансы • Конструктор фразы",
                "prompt": "Собери фразу: «Если бы мы вели бюджет, мы бы сократили лишние расходы»",
                "words": [
                    "If",
                    "we",
                    "had",
                    "planned",
                    "a",
                    "budget,",
                    "we",
                    "would",
                    "have",
                    "saved.",
                    "will",
                    "plan"
                ],
                "distractors": [
                    "will",
                    "plan"
                ],
                "correct": "If we had planned a budget, we would have saved.",
                "explanation": "Third Conditional: If + had V3 ... would have V3.",
                "promptRu": "Собери фразу: «Если бы мы вели бюджет, мы бы сократили лишние расходы»",
                "correctSentence": "If we had planned a budget, we would have saved."
            },
            {
                "id": "unit_b2_32_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Финансы • Чтение",
                "storyTitle": "Разумный подход к накоплениям",
                "paragraphs": [
                    {
                        "en": "Financial literacy starts with simple habits. Last year, Adam realized that small impulse purchases were eating up a third of his monthly income.",
                        "ru": ""
                    },
                    {
                        "en": "'If I had tracked my daily expenses earlier, I would have built a solid savings cushion much faster,' he said. Now he plans his budget every month and invests in his education.",
                        "ru": ""
                    }
                ],
                "prompt": "Куда Адам теперь инвестирует часть своих средств?",
                "options": [
                    "В собственное образование",
                    "В лотерейные билеты",
                    "В коллекцию марок"
                ],
                "correct": "В собственное образование",
                "explanation": "В тексте: Now he plans his budget every month and invests in his education."
            },
            {
                "id": "unit_b2_32_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Финансы • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "If I had tracked my expenses, I would have increased my savings.",
                "translationRu": "Если бы я отслеживал свои расходы, я бы увеличил свои сбережения.",
                "options": [
                    "If I had tracked my expenses, I would have increased my savings.",
                    "Always plan your monthly budget.",
                    "Education is the best investment."
                ],
                "correct": "If I had tracked my expenses, I would have increased my savings.",
                "explanation": "Прозвучала фраза: «If I had tracked my expenses, I would have increased my savings.» (Если бы я отслеживал свои расходы, я бы увеличил свои сбережения.)."
            },
            {
                "id": "unit_b2_32_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Финансы • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Planning a monthly budget helps control expenses and grow savings.",
                "translationRu": "Планирование ежемесячного бюджета помогает контролировать расходы и растить сбережения.",
                "correct": "Planning a monthly budget helps control expenses and grow savings.",
                "explanation": "Отличное произношение! «Planning a monthly budget helps control expenses and grow savings.» — Планирование ежемесячного бюджета помогает контролировать расходы и растить сбережения.."
            }
        ]
    },
    {
        "id": "unit_b2_33",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 33,
        "nodeType": "five_stage",
        "titleRu": "Медиа",
        "titleEn": "Медиа",
        "icon": "📰",
        "sources": [
            "Тема: Медиа",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "headline",
                "tr": "[ˈhedlaɪn]",
                "ru": "заголовок статьи",
                "ex": "The editor claimed that the headline would attract readers.",
                "example": "The editor claimed that the headline would attract readers."
            },
            {
                "en": "source",
                "tr": "[sɔːs]",
                "ru": "источник (информации)",
                "ex": "Always verify whether the news source is reliable.",
                "example": "Always verify whether the news source is reliable."
            },
            {
                "en": "broadcast",
                "tr": "[ˈbrɔːdkɑːst]",
                "ru": "транслировать в эфире; эфир",
                "ex": "The interview was broadcast live across the country.",
                "example": "The interview was broadcast live across the country."
            },
            {
                "en": "biased",
                "tr": "[ˈbaɪəst]",
                "ru": "предвзятый, однобокий",
                "ex": "Good journalism avoids biased opinions.",
                "example": "Good journalism avoids biased opinions."
            },
            {
                "en": "reliable",
                "tr": "[rɪˈlaɪəbl]",
                "ru": "надёжный, достоверный",
                "ex": "She asked if the data came from a reliable source.",
                "example": "She asked if the data came from a reliable source."
            },
            {
                "en": "censorship",
                "tr": "[ˈsensəʃɪp]",
                "ru": "цензура (B2)",
                "ex": "Independent press opposes unfair censorship.",
                "example": "Independent press opposes unfair censorship."
            },
            {
                "en": "objective",
                "tr": "[əbˈdʒektɪv]",
                "ru": "объективный, беспристрастный (B2)",
                "ex": "Readers appreciate objective analysis of events.",
                "example": "Readers appreciate objective analysis of events."
            },
            {
                "en": "coverage",
                "tr": "[ˈkʌvərɪdʒ]",
                "ru": "освещение событий в СМИ (B2)",
                "ex": "The festival received wide media coverage.",
                "example": "The festival received wide media coverage."
            },
            {
                "en": "controversy",
                "tr": "[ˈkɒntrəvɜːsi]",
                "ru": "общественный спор, полемика (B2)",
                "ex": "The article sparked a lively controversy.",
                "example": "The article sparked a lively controversy."
            },
            {
                "en": "editorial",
                "tr": "[ˌedɪˈtɔːriəl]",
                "ru": "редакционная статья (B2)",
                "ex": "The chief editor wrote an inspiring Sunday editorial.",
                "example": "The chief editor wrote an inspiring Sunday editorial."
            }
        ],
        "readingPassage": {
            "titleEn": "Как проверять громкие заголовки",
            "titleRu": "Медиа",
            "audioFull": "In the age of instant media, loud headlines spread in seconds. Yesterday a media expert gave a lecture and reminded students that critical thinking was their best tool. She explained that before sharing any sensational post, she always checked whether the original source was reliable and unbiased.",
            "paragraphs": [
                {
                    "en": "In the age of instant media, loud headlines spread in seconds. Yesterday a media expert gave a lecture and reminded students that critical thinking was their best tool.",
                    "ru": ""
                },
                {
                    "en": "She explained that before sharing any sensational post, she always checked whether the original source was reliable and unbiased.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Косвенная речь (Reported Speech) — как журналисты передают чужие слова",
            "skyNote": "Пересказывая слова эксперта или репортёра с глаголом в прошлом (He said / She explained / They asked), мы делаем «шаг назад» во времени: Present превращается в Past (is -> was), Past Simple и Present Perfect — в Past Perfect (has checked -> had checked), а will — в would!",
            "summary": "Пересказывая слова эксперта или репортёра с глаголом в прошлом (He said / She explained / They asked), мы делаем «шаг назад» во времени: Present превращается в Past (is -> was), Past Simple и Present Perfect — в Past Perfect (has checked -> had checked), а will — в would!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Медиа» (B2)",
                    "example": "The editor claimed that the headline would attract readers.",
                    "note": "Формула: The journalist said that she had verified the source. Пересказывая слова эксперта или репортёра с глаголом в прошлом (He said / She explained / They asked), мы делаем «шаг назад» во времени: Present превращается в Past (is -> was), Past Simple и Present Perfect — в Past Perfect (has checked -> had checked), а will — в would!"
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "Always verify whether the news source is reliable.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "The journalist said that she had verified the source",
                    "example": "The editor claimed that the headline would attract readers.",
                    "note": "Косвенная речь (Reported Speech) — как журналисты передают чужие слова"
                }
            ],
            "cambridgeTip": "В теме «Медиа» мы сразу применяем правило (Косвенная речь (Reported Speech) — как журналисты передают чужие слова) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_33_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Медиа • B2",
                "prompt": "Передай слова главного редактора в косвенной речи:\n«The editor explained that the team ___ already checked every source before the broadcast.»",
                "options": [
                    "had",
                    "has",
                    "is",
                    "will"
                ],
                "correct": "had",
                "explanation": "При пересказе в прошлом (explained that...) предшествующее действие ставится в Past Perfect: had already checked."
            },
            {
                "id": "unit_b2_33_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Медиа • Конструктор фразы",
                "prompt": "Собери фразу: «Репортёр сказал, что информация поступила из надёжного источника»",
                "words": [
                    "The",
                    "reporter",
                    "said",
                    "that",
                    "the",
                    "source",
                    "was",
                    "reliable.",
                    "is",
                    "are"
                ],
                "distractors": [
                    "is",
                    "are"
                ],
                "correct": "The reporter said that the source was reliable.",
                "explanation": "Согласование времён после said that: is переходит в was.",
                "promptRu": "Собери фразу: «Репортёр сказал, что информация поступила из надёжного источника»",
                "correctSentence": "The reporter said that the source was reliable."
            },
            {
                "id": "unit_b2_33_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Медиа • Чтение",
                "storyTitle": "Как проверять громкие заголовки",
                "paragraphs": [
                    {
                        "en": "In the age of instant media, loud headlines spread in seconds. Yesterday a media expert gave a lecture and reminded students that critical thinking was their best tool.",
                        "ru": ""
                    },
                    {
                        "en": "She explained that before sharing any sensational post, she always checked whether the original source was reliable and unbiased.",
                        "ru": ""
                    }
                ],
                "prompt": "Что эксперт проверяет перед тем, как поделиться любой громкой новостью?",
                "options": [
                    "Является ли первоисточник достоверным и непредвзятым",
                    "Сколько лайков под постом",
                    "Длину заголовка"
                ],
                "correct": "Является ли первоисточник достоверным и непредвзятым",
                "explanation": "В тексте: checked whether the original source was reliable and unbiased."
            },
            {
                "id": "unit_b2_33_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Медиа • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "The journalist explained that the news came from a reliable source.",
                "translationRu": "Журналист объяснил, что новость поступила из достоверного источника.",
                "options": [
                    "The journalist explained that the news came from a reliable source.",
                    "Did you read today's headlines?",
                    "The concert was broadcast live."
                ],
                "correct": "The journalist explained that the news came from a reliable source.",
                "explanation": "Прозвучала фраза: «The journalist explained that the news came from a reliable source.» (Журналист объяснил, что новость поступила из достоверного источника.)."
            },
            {
                "id": "unit_b2_33_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Медиа • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Always check whether the information comes from a reliable source.",
                "translationRu": "Всегда проверяйте, поступает ли информация из достоверного источника.",
                "correct": "Always check whether the information comes from a reliable source.",
                "explanation": "Отличное произношение! «Always check whether the information comes from a reliable source.» — Всегда проверяйте, поступает ли информация из достоверного источника.."
            }
        ]
    },
    {
        "id": "unit_b2_34",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 34,
        "nodeType": "five_stage",
        "titleRu": "Искусство",
        "titleEn": "Искусство",
        "icon": "🖼️",
        "sources": [
            "Тема: Искусство",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "masterpiece",
                "tr": "[ˈmɑːstəpiːs]",
                "ru": "шедевр",
                "ex": "This impressionist masterpiece must have taken years to paint.",
                "example": "This impressionist masterpiece must have taken years to paint."
            },
            {
                "en": "exhibition",
                "tr": "[ˌeksɪˈbɪʃn]",
                "ru": "выставка",
                "ex": "The modern art exhibition opens this Friday.",
                "example": "The modern art exhibition opens this Friday."
            },
            {
                "en": "sculpture",
                "tr": "[ˈskʌlptʃə]",
                "ru": "скульптура",
                "ex": "A marble sculpture stood in the centre of the gallery.",
                "example": "A marble sculpture stood in the centre of the gallery."
            },
            {
                "en": "portrait",
                "tr": "[ˈpɔːtrət]",
                "ru": "портрет",
                "ex": "The artist painted a mysterious portrait.",
                "example": "The artist painted a mysterious portrait."
            },
            {
                "en": "inspire",
                "tr": "[ɪnˈspaɪə]",
                "ru": "вдохновлять",
                "ex": "The sea light must have inspired the painter.",
                "example": "The sea light must have inspired the painter."
            },
            {
                "en": "contemporary",
                "tr": "[kənˈtemprəri]",
                "ru": "современный (об искусстве) (B2)",
                "ex": "The museum opened a wing of contemporary art.",
                "example": "The museum opened a wing of contemporary art."
            },
            {
                "en": "restoration",
                "tr": "[ˌrestəˈreɪʃn]",
                "ru": "реставрация (B2)",
                "ex": "The restoration of the fresco must have required great skill.",
                "example": "The restoration of the fresco must have required great skill."
            },
            {
                "en": "perspective",
                "tr": "[pəˈspektɪv]",
                "ru": "перспектива, ракурс (B2)",
                "ex": "Renaissance masters perfected linear perspective.",
                "example": "Renaissance masters perfected linear perspective."
            },
            {
                "en": "auction",
                "tr": "[ˈɔːkʃn]",
                "ru": "аукцион (B2)",
                "ex": "The rare watercolor was sold at auction.",
                "example": "The rare watercolor was sold at auction."
            },
            {
                "en": "authentic",
                "tr": "[ɔːˈθentɪk]",
                "ru": "подлинный, аутентичный (B2)",
                "ex": "Experts confirmed that the canvas was authentic.",
                "example": "Experts confirmed that the canvas was authentic."
            }
        ],
        "readingPassage": {
            "titleEn": "Тайна портрета в морской галерее",
            "titleRu": "Искусство",
            "audioFull": "At the summer exhibition, visitors gathered around an unsigned 19th-century portrait of a girl holding a pearl shell. Art historians studied the brushstrokes carefully. 'The painter must have lived on the southern coast,' said the curator, 'because only someone who watched the lagoon every morning could have captured that turquoise light in such a masterpiece.'",
            "paragraphs": [
                {
                    "en": "At the summer exhibition, visitors gathered around an unsigned 19th-century portrait of a girl holding a pearl shell. Art historians studied the brushstrokes carefully.",
                    "ru": ""
                },
                {
                    "en": "'The painter must have lived on the southern coast,' said the curator, 'because only someone who watched the lagoon every morning could have captured that turquoise light in such a masterpiece.'",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Модальные глаголы в прошлом (must have V3 / might have V3) — загадки шедевров",
            "skyNote": "Глядя на старинную картину в галерее, мы строим догадки о прошлом: must have + V3 («должно быть, художник потратил годы на этот шедевр»), might / could have + V3 («возможно, эта дама на портрете была певицей»), can't have + V3 («не может быть, чтобы это нарисовали за один день»).",
            "summary": "Глядя на старинную картину в галерее, мы строим догадки о прошлом: must have + V3 («должно быть, художник потратил годы на этот шедевр»), might / could have + V3 («возможно, эта дама на портрете была певицей»), can't have + V3 («не может быть, чтобы это нарисовали за один день»).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Искусство» (B2)",
                    "example": "This impressionist masterpiece must have taken years to paint.",
                    "note": "Формула: The sea light must have inspired this masterpiece!. Глядя на старинную картину в галерее, мы строим догадки о прошлом: must have + V3 («должно быть, художник потратил годы на этот шедевр»), might / could have + V3 («возможно, эта дама на портрете была певицей»), can't have + V3 («не может быть, чтобы это нарисовали за один день»)."
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "The modern art exhibition opens this Friday.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "The sea light must have inspired this masterpiece!",
                    "example": "This impressionist masterpiece must have taken years to paint.",
                    "note": "Модальные глаголы в прошлом (must have V3 / might have V3) — загадки шедевров"
                }
            ],
            "cambridgeTip": "В теме «Искусство» мы сразу применяем правило (Модальные глаголы в прошлом (must have V3 / might have V3) — загадки шедевров) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_34_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Искусство • B2",
                "prompt": "Выскажи уверенное предположение о создании старинного шедевра:\n«Look at the fine details! The artist ___ spent months painting this portrait.»",
                "options": [
                    "must have",
                    "must",
                    "should",
                    "can"
                ],
                "correct": "must have",
                "explanation": "Логический вывод о действии в прошлом («должно быть, потратил») строится через must have + V3 (spent)."
            },
            {
                "id": "unit_b2_34_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Искусство • Конструктор фразы",
                "prompt": "Собери догадку: «Должно быть, морской закат вдохновил автора этого шедевра»",
                "words": [
                    "The",
                    "sunset",
                    "must",
                    "have",
                    "inspired",
                    "this",
                    "masterpiece.",
                    "inspire",
                    "has"
                ],
                "distractors": [
                    "inspire",
                    "has"
                ],
                "correct": "The sunset must have inspired this masterpiece.",
                "explanation": "Конструкция уверенной догадки о прошлом: must have + 3-я форма глагола (inspired).",
                "promptRu": "Собери догадку: «Должно быть, морской закат вдохновил автора этого шедевра»",
                "correctSentence": "The sunset must have inspired this masterpiece."
            },
            {
                "id": "unit_b2_34_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Искусство • Чтение",
                "storyTitle": "Тайна портрета в морской галерее",
                "paragraphs": [
                    {
                        "en": "At the summer exhibition, visitors gathered around an unsigned 19th-century portrait of a girl holding a pearl shell. Art historians studied the brushstrokes carefully.",
                        "ru": ""
                    },
                    {
                        "en": "'The painter must have lived on the southern coast,' said the curator, 'because only someone who watched the lagoon every morning could have captured that turquoise light in such a masterpiece.'",
                        "ru": ""
                    }
                ],
                "prompt": "Почему куратор выставки решил, что художник жил на южном побережье?",
                "options": [
                    "Только человек, видевший лагуну каждое утро, мог так передать бирюзовый свет",
                    "На обороте картины был адрес",
                    "Об этом написали в газете"
                ],
                "correct": "Только человек, видевший лагуну каждое утро, мог так передать бирюзовый свет",
                "explanation": "В тексте: only someone who watched the lagoon every morning could have captured that turquoise light."
            },
            {
                "id": "unit_b2_34_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Искусство • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "The coastal light must have inspired the artist to paint this masterpiece.",
                "translationRu": "Прибрежный свет, должно быть, вдохновил художника написать этот шедевр.",
                "options": [
                    "The coastal light must have inspired the artist to paint this masterpiece.",
                    "We visited a sculpture exhibition yesterday.",
                    "This portrait hangs in the main hall."
                ],
                "correct": "The coastal light must have inspired the artist to paint this masterpiece.",
                "explanation": "Прозвучала фраза: «The coastal light must have inspired the artist to paint this masterpiece.» (Прибрежный свет, должно быть, вдохновил художника написать этот шедевр.)."
            },
            {
                "id": "unit_b2_34_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Искусство • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "This painting is a true masterpiece that inspires every visitor.",
                "translationRu": "Эта картина — настоящий шедевр, который вдохновляет каждого посетителя.",
                "correct": "This painting is a true masterpiece that inspires every visitor.",
                "explanation": "Отличное произношение! «This painting is a true masterpiece that inspires every visitor.» — Эта картина — настоящий шедевр, который вдохновляет каждого посетителя.."
            }
        ]
    },
    {
        "id": "unit_b2_35",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 35,
        "nodeType": "five_stage",
        "titleRu": "Технологии",
        "titleEn": "Технологии",
        "icon": "🤖",
        "sources": [
            "Тема: Технологии",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "artificial",
                "tr": "[ˌɑːtɪˈfɪʃl]",
                "ru": "искусственный (artificial intelligence — ИИ)",
                "ex": "By 2030, artificial intelligence will have transformed medicine.",
                "example": "By 2030, artificial intelligence will have transformed medicine."
            },
            {
                "en": "breakthrough",
                "tr": "[ˈbreɪkθruː]",
                "ru": "прорыв, крупное открытие",
                "ex": "Scientists announced a major technological breakthrough.",
                "example": "Scientists announced a major technological breakthrough."
            },
            {
                "en": "device",
                "tr": "[dɪˈvaɪs]",
                "ru": "устройство, прибор",
                "ex": "Smart devices help monitor heart rate.",
                "example": "Smart devices help monitor heart rate."
            },
            {
                "en": "software",
                "tr": "[ˈsɒftweə]",
                "ru": "программное обеспечение",
                "ex": "The engineers will be testing the new software all week.",
                "example": "The engineers will be testing the new software all week."
            },
            {
                "en": "automate",
                "tr": "[ˈɔːtəmeɪt]",
                "ru": "автоматизировать",
                "ex": "Modern factories automate routine tasks.",
                "example": "Modern factories automate routine tasks."
            },
            {
                "en": "algorithm",
                "tr": "[ˈælɡərɪðəm]",
                "ru": "алгоритм (B2)",
                "ex": "Smart algorithms adapt the flashcards to your memory.",
                "example": "Smart algorithms adapt the flashcards to your memory."
            },
            {
                "en": "obsolete",
                "tr": "[ˈɒbsəliːt]",
                "ru": "устаревший, вышедший из употребления (B2)",
                "ex": "By 2030, paper tickets will have become obsolete.",
                "example": "By 2030, paper tickets will have become obsolete."
            },
            {
                "en": "patent",
                "tr": "[ˈpætnt]",
                "ru": "патент; запатентовать (B2)",
                "ex": "The engineers obtained a patent for their solar sensor.",
                "example": "The engineers obtained a patent for their solar sensor."
            },
            {
                "en": "integrate",
                "tr": "[ˈɪntɪɡreɪt]",
                "ru": "интегрировать, объединять (B2)",
                "ex": "They will be integrating voice recognition into the app.",
                "example": "They will be integrating voice recognition into the app."
            },
            {
                "en": "autonomous",
                "tr": "[ɔːˈtɒnəməs]",
                "ru": "автономный, беспилотный (B2)",
                "ex": "Autonomous research boats explore the deep ocean.",
                "example": "Autonomous research boats explore the deep ocean."
            }
        ],
        "readingPassage": {
            "titleEn": "Умные технологии на службе у океана",
            "titleRu": "Технологии",
            "audioFull": "Oceanographers are now combining underwater sensors with artificial intelligence. Next month, a research vessel will be testing autonomous solar devices across the Pacific. By the end of next year, the new software will have mapped thousands of coral reefs and automated early warnings to protect marine ecosystems.",
            "paragraphs": [
                {
                    "en": "Oceanographers are now combining underwater sensors with artificial intelligence. Next month, a research vessel will be testing autonomous solar devices across the Pacific.",
                    "ru": ""
                },
                {
                    "en": "By the end of next year, the new software will have mapped thousands of coral reefs and automated early warnings to protect marine ecosystems.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Future Continuous (will be V-ing) и Future Perfect (will have V3) — мир будущего",
            "skyNote": "Когда мы говорим о технологиях будущего: если процесс будет идти в определённый момент в будущем, ставим Future Continuous (will be using — «через 10 лет мы будем пользоваться...»). А если к какому-то сроку (By 2035...) прорыв УЖЕ свершится — ставим Future Perfect: will have + V3 (will have automated).",
            "summary": "Когда мы говорим о технологиях будущего: если процесс будет идти в определённый момент в будущем, ставим Future Continuous (will be using — «через 10 лет мы будем пользоваться...»). А если к какому-то сроку (By 2035...) прорыв УЖЕ свершится — ставим Future Perfect: will have + V3 (will have automated).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Технологии» (B2)",
                    "example": "By 2030, artificial intelligence will have transformed medicine.",
                    "note": "Формула: By 2035, engineers will have automated routine tasks. Когда мы говорим о технологиях будущего: если процесс будет идти в определённый момент в будущем, ставим Future Continuous (will be using — «через 10 лет мы будем пользоваться...»). А если к какому-то сроку (By 2035...) прорыв УЖЕ свершится — ставим Future Perfect: will have + V3 (will have automated)."
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "Scientists announced a major technological breakthrough.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "By 2035, engineers will have automated routine tasks",
                    "example": "By 2030, artificial intelligence will have transformed medicine.",
                    "note": "Future Continuous (will be V-ing) и Future Perfect (will have V3) — мир будущего"
                }
            ],
            "cambridgeTip": "В теме «Технологии» мы сразу применяем правило (Future Continuous (will be V-ing) и Future Perfect (will have V3) — мир будущего) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_35_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Технологии • B2",
                "prompt": "Сделай прогноз о результате к 2035 году (обрати внимание на предлог By):\n«By the end of this decade, smart software ___ transformed medical diagnostics.»",
                "options": [
                    "will have",
                    "will be",
                    "is",
                    "has"
                ],
                "correct": "will have",
                "explanation": "Предлог By («к концу десятилетия») указывает на завершённый результат к моменту в будущем — Future Perfect (will have transformed)."
            },
            {
                "id": "unit_b2_35_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Технологии • Конструктор фразы",
                "prompt": "Собери прогноз: «К 2030 году учёные совершат новый технологический прорыв»",
                "words": [
                    "By",
                    "2030,",
                    "scientists",
                    "will",
                    "have",
                    "made",
                    "a",
                    "breakthrough.",
                    "make",
                    "making"
                ],
                "distractors": [
                    "make",
                    "making"
                ],
                "correct": "By 2030, scientists will have made a breakthrough.",
                "explanation": "К точке в будущем (By 2030) используется Future Perfect: will have made.",
                "promptRu": "Собери прогноз: «К 2030 году учёные совершат новый технологический прорыв»",
                "correctSentence": "By 2030, scientists will have made a breakthrough."
            },
            {
                "id": "unit_b2_35_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Технологии • Чтение",
                "storyTitle": "Умные технологии на службе у океана",
                "paragraphs": [
                    {
                        "en": "Oceanographers are now combining underwater sensors with artificial intelligence. Next month, a research vessel will be testing autonomous solar devices across the Pacific.",
                        "ru": ""
                    },
                    {
                        "en": "By the end of next year, the new software will have mapped thousands of coral reefs and automated early warnings to protect marine ecosystems.",
                        "ru": ""
                    }
                ],
                "prompt": "Какой результат принесёт новое ПО к концу следующего года?",
                "options": [
                    "Составит карту тысяч коралловых рифов и автоматизирует ранние оповещения",
                    "Построит подводный отель",
                    "Заменит все корабли"
                ],
                "correct": "Составит карту тысяч коралловых рифов и автоматизирует ранние оповещения",
                "explanation": "В тексте: will have mapped thousands of coral reefs and automated early warnings."
            },
            {
                "id": "unit_b2_35_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Технологии • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "By the end of the decade, this technology will have created a real breakthrough.",
                "translationRu": "К концу десятилетия эта технология совершит настоящий прорыв.",
                "options": [
                    "By the end of the decade, this technology will have created a real breakthrough.",
                    "I updated the software on my device.",
                    "Artificial intelligence helps doctors."
                ],
                "correct": "By the end of the decade, this technology will have created a real breakthrough.",
                "explanation": "Прозвучала фраза: «By the end of the decade, this technology will have created a real breakthrough.» (К концу десятилетия эта технология совершит настоящий прорыв.)."
            },
            {
                "id": "unit_b2_35_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Технологии • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Smart devices and new software help automate routine tasks.",
                "translationRu": "Умные устройства и новое ПО помогают автоматизировать рутинные задачи.",
                "correct": "Smart devices and new software help automate routine tasks.",
                "explanation": "Отличное произношение! «Smart devices and new software help automate routine tasks.» — Умные устройства и новое ПО помогают автоматизировать рутинные задачи.."
            }
        ]
    },
    {
        "id": "unit_b2_36",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 36,
        "nodeType": "five_stage",
        "titleRu": "Карьера",
        "titleEn": "Карьера",
        "icon": "🚀",
        "sources": [
            "Тема: Карьера",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "promotion",
                "tr": "[prəˈməʊʃn]",
                "ru": "повышение по службе",
                "ex": "She worked hard and earned a well-deserved promotion.",
                "example": "She worked hard and earned a well-deserved promotion."
            },
            {
                "en": "deadline",
                "tr": "[ˈdedlaɪn]",
                "ru": "крайний срок (дедлайн)",
                "ex": "I wish we had more time before the project deadline.",
                "example": "I wish we had more time before the project deadline."
            },
            {
                "en": "leadership",
                "tr": "[ˈliːdəʃɪp]",
                "ru": "лидерство, руководство",
                "ex": "Good leadership inspires the whole department.",
                "example": "Good leadership inspires the whole department."
            },
            {
                "en": "negotiate",
                "tr": "[nɪˈɡəʊʃieɪt]",
                "ru": "вести переговоры, договариваться",
                "ex": "He managed to negotiate flexible working hours.",
                "example": "He managed to negotiate flexible working hours."
            },
            {
                "en": "remote",
                "tr": "[rɪˈməʊt]",
                "ru": "удалённый (remote work)",
                "ex": "Many specialists prefer remote work from home.",
                "example": "Many specialists prefer remote work from home."
            },
            {
                "en": "entrepreneur",
                "tr": "[ˌɒntrəprəˈnɜː]",
                "ru": "предприниматель (B2)",
                "ex": "As an entrepreneur, she launched an eco-brand.",
                "example": "As an entrepreneur, she launched an eco-brand."
            },
            {
                "en": "delegate",
                "tr": "[ˈdelɪɡeɪt]",
                "ru": "делегировать задачи (B2)",
                "ex": "A wise leader knows how to delegate tasks.",
                "example": "A wise leader knows how to delegate tasks."
            },
            {
                "en": "supervise",
                "tr": "[ˈsuːpəvaɪz]",
                "ru": "курировать, руководить работой (B2)",
                "ex": "She supervises a creative team of twelve.",
                "example": "She supervises a creative team of twelve."
            },
            {
                "en": "incentive",
                "tr": "[ɪnˈsentɪv]",
                "ru": "стимул, мотивационный бонус (B2)",
                "ex": "Flexible Fridays are a great incentive for the staff.",
                "example": "Flexible Fridays are a great incentive for the staff."
            },
            {
                "en": "productivity",
                "tr": "[ˌprɒdʌkˈtɪvəti]",
                "ru": "продуктивность (B2)",
                "ex": "Short breaks actually increase workplace productivity.",
                "example": "Short breaks actually increase workplace productivity."
            }
        ],
        "readingPassage": {
            "titleEn": "Гибкий график и шаг вперёд",
            "titleRu": "Карьера",
            "audioFull": "When Julia started her career, she used to spend two hours in traffic every day and often thought: 'I wish I could work remotely at least twice a week!' After finishing a major project ahead of the deadline, she showed strong leadership skills. Yesterday she negotiated a hybrid schedule and received a promotion to team lead.",
            "paragraphs": [
                {
                    "en": "When Julia started her career, she used to spend two hours in traffic every day and often thought: 'I wish I could work remotely at least twice a week!'",
                    "ru": ""
                },
                {
                    "en": "After finishing a major project ahead of the deadline, she showed strong leadership skills. Yesterday she negotiated a hybrid schedule and received a promotion to team lead.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Конструкции I wish / If only — пожелания о работе и времени",
            "skyNote": "Когда нам хочется изменить текущую ситуацию сейчас («Эх, жаль, что у меня сегодня так мало времени до дедлайна» / «Хотел бы я работать удалённо с моря»), после I wish ставим Past Simple (I wish I worked remotely!). А если мы сожалеем о том, что уже случилось в прошлом — после I wish ставим Past Perfect (I wish I had negotiated better terms last year).",
            "summary": "Когда нам хочется изменить текущую ситуацию сейчас («Эх, жаль, что у меня сегодня так мало времени до дедлайна» / «Хотел бы я работать удалённо с моря»), после I wish ставим Past Simple (I wish I worked remotely!). А если мы сожалеем о том, что уже случилось в прошлом — после I wish ставим Past Perfect (I wish I had negotiated better terms last year).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Карьера» (B2)",
                    "example": "She worked hard and earned a well-deserved promotion.",
                    "note": "Формула: I wish I worked remotely • I wish I had prepared earlier for the deadline. Когда нам хочется изменить текущую ситуацию сейчас («Эх, жаль, что у меня сегодня так мало времени до дедлайна» / «Хотел бы я работать удалённо с моря»), после I wish ставим Past Simple (I wish I worked remotely!). А если мы сожалеем о том, что уже случилось в прошлом — после I wish ставим Past Perfect (I wish I had negotiated better terms last year)."
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "I wish we had more time before the project deadline.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "I wish I worked remotely • I wish I had prepared earlier for the deadline",
                    "example": "She worked hard and earned a well-deserved promotion.",
                    "note": "Конструкции I wish / If only — пожелания о работе и времени"
                }
            ],
            "cambridgeTip": "В теме «Карьера» мы сразу применяем правило (Конструкции I wish / If only — пожелания о работе и времени) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_36_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Карьера • B2",
                "prompt": "Вырази пожелание о настоящем моменте («Как бы мне хотелось иметь гибкий график сейчас!»):\n«I love my team, but I wish our company ___ remote work on Fridays.»",
                "options": [
                    "allowed",
                    "allows",
                    "will allow",
                    "allow"
                ],
                "correct": "allowed",
                "explanation": "Пожелание об изменении настоящей ситуации после I wish выражается формой Past Simple: allowed."
            },
            {
                "id": "unit_b2_36_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Карьера • Конструктор фразы",
                "prompt": "Собери фразу: «Она провела переговоры и получила заслуженное повышение»",
                "words": [
                    "She",
                    "negotiated",
                    "well",
                    "and",
                    "got",
                    "a",
                    "promotion.",
                    "getting",
                    "wish"
                ],
                "distractors": [
                    "getting",
                    "wish"
                ],
                "correct": "She negotiated well and got a promotion.",
                "explanation": "Последовательные действия в прошлом — Past Simple (negotiated ... and got).",
                "promptRu": "Собери фразу: «Она провела переговоры и получила заслуженное повышение»",
                "correctSentence": "She negotiated well and got a promotion."
            },
            {
                "id": "unit_b2_36_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Карьера • Чтение",
                "storyTitle": "Гибкий график и шаг вперёд",
                "paragraphs": [
                    {
                        "en": "When Julia started her career, she used to spend two hours in traffic every day and often thought: 'I wish I could work remotely at least twice a week!'",
                        "ru": ""
                    },
                    {
                        "en": "After finishing a major project ahead of the deadline, she showed strong leadership skills. Yesterday she negotiated a hybrid schedule and received a promotion to team lead.",
                        "ru": ""
                    }
                ],
                "prompt": "О каком графике договорилась Джулия вместе с повышением?",
                "options": [
                    "О гибридном графике с удалёнными днями",
                    "О ночных сменах",
                    "О работе без выходных"
                ],
                "correct": "О гибридном графике с удалёнными днями",
                "explanation": "В тексте: Yesterday she negotiated a hybrid schedule and received a promotion."
            },
            {
                "id": "unit_b2_36_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Карьера • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "She finished the project before the deadline and earned a promotion.",
                "translationRu": "Она завершила проект до дедлайна и заслужила повышение.",
                "options": [
                    "She finished the project before the deadline and earned a promotion.",
                    "I wish I worked remotely from the coast.",
                    "Good leadership helps the whole team."
                ],
                "correct": "She finished the project before the deadline and earned a promotion.",
                "explanation": "Прозвучала фраза: «She finished the project before the deadline and earned a promotion.» (Она завершила проект до дедлайна и заслужила повышение.)."
            },
            {
                "id": "unit_b2_36_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Карьера • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Good leadership and clear deadlines help our team succeed.",
                "translationRu": "Грамотное руководство и чёткие сроки помогают нашей команде добиваться успеха.",
                "correct": "Good leadership and clear deadlines help our team succeed.",
                "explanation": "Отличное произношение! «Good leadership and clear deadlines help our team succeed.» — Грамотное руководство и чёткие сроки помогают нашей команде добиваться успеха.."
            }
        ]
    },
    {
        "id": "unit_b2_37",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 37,
        "nodeType": "five_stage",
        "titleRu": "Наука",
        "titleEn": "Наука",
        "icon": "🔬",
        "sources": [
            "Тема: Наука",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "research",
                "tr": "[rɪˈsɜːtʃ]",
                "ru": "научное исследование",
                "ex": "The marine research is being conducted in the Atlantic.",
                "example": "The marine research is being conducted in the Atlantic."
            },
            {
                "en": "hypothesis",
                "tr": "[haɪˈpɒθəsɪs]",
                "ru": "гипотеза",
                "ex": "Their bold hypothesis has been confirmed by experiments.",
                "example": "Their bold hypothesis has been confirmed by experiments."
            },
            {
                "en": "evidence",
                "tr": "[ˈevɪdəns]",
                "ru": "доказательства, научные данные",
                "ex": "New evidence was discovered on the ocean floor.",
                "example": "New evidence was discovered on the ocean floor."
            },
            {
                "en": "laboratory",
                "tr": "[ləˈbɒrətri]",
                "ru": "лаборатория",
                "ex": "Samples are analysed in a modern laboratory.",
                "example": "Samples are analysed in a modern laboratory."
            },
            {
                "en": "discover",
                "tr": "[dɪˈskʌvə]",
                "ru": "обнаруживать, открывать",
                "ex": "Biologists discovered a new glowing coral species.",
                "example": "Biologists discovered a new glowing coral species."
            },
            {
                "en": "evolution",
                "tr": "[ˌiːvəˈluːʃn]",
                "ru": "эволюция, развитие (B2)",
                "ex": "Marine evolution has been studied for decades.",
                "example": "Marine evolution has been studied for decades."
            },
            {
                "en": "genetics",
                "tr": "[dʒəˈnetɪks]",
                "ru": "генетика (B2)",
                "ex": "Advances in genetics are being applied in medicine.",
                "example": "Advances in genetics are being applied in medicine."
            },
            {
                "en": "analyse",
                "tr": "[ˈænəlaɪz]",
                "ru": "анализировать (B2)",
                "ex": "Data from the expedition is being analysed now.",
                "example": "Data from the expedition is being analysed now."
            },
            {
                "en": "valid",
                "tr": "[ˈvælɪd]",
                "ru": "обоснованный, достоверный (о выводе) (B2)",
                "ex": "Their scientific conclusion proved completely valid.",
                "example": "Their scientific conclusion proved completely valid."
            },
            {
                "en": "specimen",
                "tr": "[ˈspesɪmən]",
                "ru": "научный образец, экземпляр (B2)",
                "ex": "Each botanical specimen was carefully catalogued.",
                "example": "Each botanical specimen was carefully catalogued."
            }
        ],
        "readingPassage": {
            "titleEn": "Открытие на дне океана",
            "titleRu": "Наука",
            "audioFull": "For three months, an international expedition has been studying deep-sea coral reefs. Last week, compelling evidence was found at a depth of two thousand metres. Right now, water samples are being examined in the ship's laboratory, and the team's hypothesis about bioluminescent organisms has already been confirmed.",
            "paragraphs": [
                {
                    "en": "For three months, an international expedition has been studying deep-sea coral reefs. Last week, compelling evidence was found at a depth of two thousand metres.",
                    "ru": ""
                },
                {
                    "en": "Right now, water samples are being examined in the ship's laboratory, and the team's hypothesis about bioluminescent organisms has already been confirmed.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Пассивный залог во всех временах (is being analysed / has been confirmed) в науке",
            "skyNote": "В научных статьях акцент всегда на открытии и фактах: если образцы исследуют прямо сейчас — используем Present Continuous Passive (are being analysed), а если гипотеза уже подтверждена к настоящему моменту — Present Perfect Passive (has been confirmed)!",
            "summary": "В научных статьях акцент всегда на открытии и фактах: если образцы исследуют прямо сейчас — используем Present Continuous Passive (are being analysed), а если гипотеза уже подтверждена к настоящему моменту — Present Perfect Passive (has been confirmed)!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Наука» (B2)",
                    "example": "The marine research is being conducted in the Atlantic.",
                    "note": "Формула: The samples are being analysed • The hypothesis has been confirmed. В научных статьях акцент всегда на открытии и фактах: если образцы исследуют прямо сейчас — используем Present Continuous Passive (are being analysed), а если гипотеза уже подтверждена к настоящему моменту — Present Perfect Passive (has been confirmed)!"
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "Their bold hypothesis has been confirmed by experiments.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "The samples are being analysed • The hypothesis has been confirmed",
                    "example": "The marine research is being conducted in the Atlantic.",
                    "note": "Пассивный залог во всех временах (is being analysed / has been confirmed) в науке"
                }
            ],
            "cambridgeTip": "В теме «Наука» мы сразу применяем правило (Пассивный залог во всех временах (is being analysed / has been confirmed) в науке) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_37_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Наука • B2",
                "prompt": "Опиши результат лабораторного эксперимента к настоящему моменту:\n«Great news! Our scientific hypothesis ___ just been confirmed by new evidence.»",
                "options": [
                    "has",
                    "is",
                    "was",
                    "had"
                ],
                "correct": "has",
                "explanation": "Со словом just и been confirmed используется Present Perfect Passive: has just been confirmed."
            },
            {
                "id": "unit_b2_37_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Наука • Конструктор фразы",
                "prompt": "Собери фразу: «Морские образцы сейчас изучаются в лаборатории»",
                "words": [
                    "Marine",
                    "samples",
                    "are",
                    "being",
                    "tested",
                    "in",
                    "the",
                    "laboratory.",
                    "been",
                    "was"
                ],
                "distractors": [
                    "been",
                    "was"
                ],
                "correct": "Marine samples are being tested in the laboratory.",
                "explanation": "Пассивный залог в процессе прямо сейчас: are being + V3 (tested).",
                "promptRu": "Собери фразу: «Морские образцы сейчас изучаются в лаборатории»",
                "correctSentence": "Marine samples are being tested in the laboratory."
            },
            {
                "id": "unit_b2_37_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Наука • Чтение",
                "storyTitle": "Открытие на дне океана",
                "paragraphs": [
                    {
                        "en": "For three months, an international expedition has been studying deep-sea coral reefs. Last week, compelling evidence was found at a depth of two thousand metres.",
                        "ru": ""
                    },
                    {
                        "en": "Right now, water samples are being examined in the ship's laboratory, and the team's hypothesis about bioluminescent organisms has already been confirmed.",
                        "ru": ""
                    }
                ],
                "prompt": "Где сейчас исследуются образцы воды, поднятые с глубины?",
                "options": [
                    "В лаборатории на борту исследовательского судна",
                    "В школьном классе",
                    "В музее"
                ],
                "correct": "В лаборатории на борту исследовательского судна",
                "explanation": "В тексте: water samples are being examined in the ship's laboratory."
            },
            {
                "id": "unit_b2_37_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Наука • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Our scientific hypothesis has been confirmed by new evidence.",
                "translationRu": "Наша научная гипотеза была подтверждена новыми доказательствами.",
                "options": [
                    "Our scientific hypothesis has been confirmed by new evidence.",
                    "Biologists discovered a rare species.",
                    "She works in a modern laboratory."
                ],
                "correct": "Our scientific hypothesis has been confirmed by new evidence.",
                "explanation": "Прозвучала фраза: «Our scientific hypothesis has been confirmed by new evidence.» (Наша научная гипотеза была подтверждена новыми доказательствами.)."
            },
            {
                "id": "unit_b2_37_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Наука • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "New evidence was discovered during the marine research.",
                "translationRu": "Новые доказательства были обнаружены во время морского исследования.",
                "correct": "New evidence was discovered during the marine research.",
                "explanation": "Отличное произношение! «New evidence was discovered during the marine research.» — Новые доказательства были обнаружены во время морского исследования.."
            }
        ]
    },
    {
        "id": "unit_b2_38",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 38,
        "nodeType": "five_stage",
        "titleRu": "Традиции",
        "titleEn": "Традиции",
        "icon": "🏮",
        "sources": [
            "Тема: Традиции",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "custom",
                "tr": "[ˈkʌstəm]",
                "ru": "обычай, традиция",
                "ex": "At first, it was unusual, but I got used to local customs.",
                "example": "At first, it was unusual, but I got used to local customs."
            },
            {
                "en": "heritage",
                "tr": "[ˈherɪtɪdʒ]",
                "ru": "культурное наследие",
                "ex": "The old harbour is part of the city's cultural heritage.",
                "example": "The old harbour is part of the city's cultural heritage."
            },
            {
                "en": "festival",
                "tr": "[ˈfestɪvl]",
                "ru": "фестиваль, народный праздник",
                "ex": "During the lantern festival, thousands of lights float on the water.",
                "example": "During the lantern festival, thousands of lights float on the water."
            },
            {
                "en": "hospitality",
                "tr": "[ˌhɒspɪˈtæləti]",
                "ru": "гостеприимство",
                "ex": "Islanders are famous for their warm hospitality.",
                "example": "Islanders are famous for their warm hospitality."
            },
            {
                "en": "generation",
                "tr": "[ˌdʒenəˈreɪʃn]",
                "ru": "поколение",
                "ex": "Recipes are passed down from generation to generation.",
                "example": "Recipes are passed down from generation to generation."
            },
            {
                "en": "diversity",
                "tr": "[daɪˈvɜːsəti]",
                "ru": "культурное многообразие (B2)",
                "ex": "Cultural diversity enriches modern society.",
                "example": "Cultural diversity enriches modern society."
            },
            {
                "en": "solidarity",
                "tr": "[ˌsɒlɪˈdærəti]",
                "ru": "солидарность, сплочённость (B2)",
                "ex": "Island communities are known for their solidarity.",
                "example": "Island communities are known for their solidarity."
            },
            {
                "en": "integration",
                "tr": "[ˌɪntɪˈɡreɪʃn]",
                "ru": "интеграция, сближение культур (B2)",
                "ex": "Language learning speeds up social integration.",
                "example": "Language learning speeds up social integration."
            },
            {
                "en": "ritual",
                "tr": "[ˈrɪtʃuəl]",
                "ru": "обряд, ритуал (B2)",
                "ex": "The morning tea ceremony is a peaceful ritual.",
                "example": "The morning tea ceremony is a peaceful ritual."
            },
            {
                "en": "ancestry",
                "tr": "[ˈænsestri]",
                "ru": "происхождение, предки (B2)",
                "ex": "She traced her family ancestry back three centuries.",
                "example": "She traced her family ancestry back three centuries."
            }
        ],
        "readingPassage": {
            "titleEn": "Фестиваль бумажных фонариков",
            "titleRu": "Традиции",
            "audioFull": "Every autumn, coastal villages celebrate the Lantern Festival — a custom passed down from generation to generation as part of their cultural heritage. When I first moved here, I wasn't used to seeing the whole bay glowing at midnight. Soon I got used to joining the neighbours on the pier and admired their heartfelt hospitality.",
            "paragraphs": [
                {
                    "en": "Every autumn, coastal villages celebrate the Lantern Festival — a custom passed down from generation to generation as part of their cultural heritage.",
                    "ru": ""
                },
                {
                    "en": "When I first moved here, I wasn't used to seeing the whole bay glowing at midnight. Soon I got used to joining the neighbours on the pier and admired their heartfelt hospitality.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Отличие used to do от be used to / get used to doing — привыкаем к новым традициям",
            "skyNote": "Не путай две похожие конструкции! I used to live (раньше жил — после to идёт обычный глагол). А вот be used to / get used to означает «быть привыкшим / привыкнуть к чему-то», и здесь to — это предлог «к», поэтому после него идёт существительное или глагол с окончанием -ing: I quickly got used to celebrating local festivals!",
            "summary": "Не путай две похожие конструкции! I used to live (раньше жил — после to идёт обычный глагол). А вот be used to / get used to означает «быть привыкшим / привыкнуть к чему-то», и здесь to — это предлог «к», поэтому после него идёт существительное или глагол с окончанием -ing: I quickly got used to celebrating local festivals!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Традиции» (B2)",
                    "example": "At first, it was unusual, but I got used to local customs.",
                    "note": "Формула: got used to local customs • I am used to waking up early. Не путай две похожие конструкции! I used to live (раньше жил — после to идёт обычный глагол). А вот be used to / get used to означает «быть привыкшим / привыкнуть к чему-то», и здесь to — это предлог «к», поэтому после него идёт существительное или глагол с окончанием -ing: I quickly got used to celebrating local festivals!"
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "The old harbour is part of the city's cultural heritage.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "got used to local customs • I am used to waking up early",
                    "example": "At first, it was unusual, but I got used to local customs.",
                    "note": "Отличие used to do от be used to / get used to doing — привыкаем к новым традициям"
                }
            ],
            "cambridgeTip": "В теме «Традиции» мы сразу применяем правило (Отличие used to do от be used to / get used to doing — привыкаем к новым традициям) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_38_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Традиции • B2",
                "prompt": "Расскажи, как ты привыкла к местным обычаям на острове:\n«After a month on the island, I quickly got used to ___ dinner late in the evening.»",
                "options": [
                    "having",
                    "have",
                    "had",
                    "be having"
                ],
                "correct": "having",
                "explanation": "В конструкции get used to («привыкнуть к чему-либо») to является предлогом, поэтому глагол после него ставится с окончанием -ing: got used to having."
            },
            {
                "id": "unit_b2_38_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Традиции • Конструктор фразы",
                "prompt": "Собери фразу: «Путешественники быстро привыкли к тёплому гостеприимству островитян»",
                "words": [
                    "Travellers",
                    "quickly",
                    "got",
                    "used",
                    "to",
                    "warm",
                    "hospitality.",
                    "use",
                    "be"
                ],
                "distractors": [
                    "use",
                    "be"
                ],
                "correct": "Travellers quickly got used to warm hospitality.",
                "explanation": "Привыкнуть к чему-то — get used to + существительное (warm hospitality).",
                "promptRu": "Собери фразу: «Путешественники быстро привыкли к тёплому гостеприимству островитян»",
                "correctSentence": "Travellers quickly got used to warm hospitality."
            },
            {
                "id": "unit_b2_38_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Традиции • Чтение",
                "storyTitle": "Фестиваль бумажных фонариков",
                "paragraphs": [
                    {
                        "en": "Every autumn, coastal villages celebrate the Lantern Festival — a custom passed down from generation to generation as part of their cultural heritage.",
                        "ru": ""
                    },
                    {
                        "en": "When I first moved here, I wasn't used to seeing the whole bay glowing at midnight. Soon I got used to joining the neighbours on the pier and admired their heartfelt hospitality.",
                        "ru": ""
                    }
                ],
                "prompt": "Как передаётся традиция Фестиваля фонариков в прибрежных деревнях?",
                "options": [
                    "Из поколения в поколение как часть культурного наследия",
                    "Через рекламу по телевизору",
                    "Её придумали в прошлом году"
                ],
                "correct": "Из поколения в поколение как часть культурного наследия",
                "explanation": "В тексте: passed down from generation to generation as part of their cultural heritage."
            },
            {
                "id": "unit_b2_38_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Традиции • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "I quickly got used to the warm hospitality and local customs.",
                "translationRu": "Я быстро привык к тёплому гостеприимству и местным обычаям.",
                "options": [
                    "I quickly got used to the warm hospitality and local customs.",
                    "This festival is part of our cultural heritage.",
                    "Stories are passed from generation to generation."
                ],
                "correct": "I quickly got used to the warm hospitality and local customs.",
                "explanation": "Прозвучала фраза: «I quickly got used to the warm hospitality and local customs.» (Я быстро привык к тёплому гостеприимству и местным обычаям.)."
            },
            {
                "id": "unit_b2_38_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Традиции • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Traditions and warm hospitality are passed from generation to generation.",
                "translationRu": "Традиции и тёплое гостеприимство передаются из поколения в поколение.",
                "correct": "Traditions and warm hospitality are passed from generation to generation.",
                "explanation": "Отличное произношение! «Traditions and warm hospitality are passed from generation to generation.» — Традиции и тёплое гостеприимство передаются из поколения в поколение.."
            }
        ]
    },
    {
        "id": "unit_b2_39",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 39,
        "nodeType": "five_stage",
        "titleRu": "Архитектура",
        "titleEn": "Архитектура",
        "icon": "🏛️",
        "sources": [
            "Тема: Архитектура",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "restore",
                "tr": "[rɪˈstɔː]",
                "ru": "реставрировать, восстанавливать",
                "ex": "The city had the historic lighthouse restored.",
                "example": "The city had the historic lighthouse restored."
            },
            {
                "en": "facade",
                "tr": "[fəˈsɑːd]",
                "ru": "фасад здания",
                "ex": "The marble facade reflects the morning sun.",
                "example": "The marble facade reflects the morning sun."
            },
            {
                "en": "interior",
                "tr": "[ɪnˈtɪəriə]",
                "ru": "интерьер",
                "ex": "We had the interior designed in pastel tones.",
                "example": "We had the interior designed in pastel tones."
            },
            {
                "en": "arch",
                "tr": "[ɑːtʃ]",
                "ru": "арка, свод",
                "ex": "Stone arches lead to the courtyard.",
                "example": "Stone arches lead to the courtyard."
            },
            {
                "en": "spacious",
                "tr": "[ˈspeɪʃəs]",
                "ru": "просторный",
                "ex": "High ceilings make the hall feel spacious.",
                "example": "High ceilings make the hall feel spacious."
            },
            {
                "en": "diagnosis",
                "tr": "[ˌdaɪəɡˈnəʊsɪs]",
                "ru": "диагноз, диагностика (B2)",
                "ex": "Early diagnosis makes treatment much easier.",
                "example": "Early diagnosis makes treatment much easier."
            },
            {
                "en": "chronic",
                "tr": "[ˈkrɒnɪk]",
                "ru": "хронический (B2)",
                "ex": "Swimming helps relieve chronic back tension.",
                "example": "Swimming helps relieve chronic back tension."
            },
            {
                "en": "prescribe",
                "tr": "[prɪˈskraɪb]",
                "ru": "выписывать, назначать (лечение) (B2)",
                "ex": "The doctor prescribed sea air and vitamin D.",
                "example": "The doctor prescribed sea air and vitamin D."
            },
            {
                "en": "rehabilitation",
                "tr": "[ˌriːəˌbɪlɪˈteɪʃn]",
                "ru": "реабилитация, восстановление (B2)",
                "ex": "Sports rehabilitation requires patience.",
                "example": "Sports rehabilitation requires patience."
            },
            {
                "en": "remedy",
                "tr": "[ˈremədi]",
                "ru": "целебное средство (B2)",
                "ex": "Warm ginger tea is a natural remedy for colds.",
                "example": "Warm ginger tea is a natural remedy for colds."
            }
        ],
        "readingPassage": {
            "titleEn": "Вторая жизнь старинной виллы",
            "titleRu": "Архитектура",
            "audioFull": "Near the harbour stands a nineteenth-century villa with graceful stone arches. For years it stood empty, until a local art foundation bought it. Instead of modernising it completely, they had the original facade carefully restored by craftsmen and had the bright interior turned into an open art library.",
            "paragraphs": [
                {
                    "en": "Near the harbour stands a nineteenth-century villa with graceful stone arches. For years it stood empty, until a local art foundation bought it.",
                    "ru": ""
                },
                {
                    "en": "Instead of modernising it completely, they had the original facade carefully restored by craftsmen and had the bright interior turned into an open art library.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Каузативная конструкция (have / get something done) — когда работу для нас делают мастера",
            "skyNote": "Когда мы сами не красим фасад и не чиним крышу, а нанимаем архитекторов и реставраторов («Мы отреставрировали маяк / нам оформили интерьер»), в английском используется изящная формула: have + предмет + 3-я форма глагола (V3): We had the facade restored! She had her studio painted!",
            "summary": "Когда мы сами не красим фасад и не чиним крышу, а нанимаем архитекторов и реставраторов («Мы отреставрировали маяк / нам оформили интерьер»), в английском используется изящная формула: have + предмет + 3-я форма глагола (V3): We had the facade restored! She had her studio painted!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Архитектура» (B2)",
                    "example": "The city had the historic lighthouse restored.",
                    "note": "Формула: We had the historic facade restored • They had the interior redesigned. Когда мы сами не красим фасад и не чиним крышу, а нанимаем архитекторов и реставраторов («Мы отреставрировали маяк / нам оформили интерьер»), в английском используется изящная формула: have + предмет + 3-я форма глагола (V3): We had the facade restored! She had her studio painted!"
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "The marble facade reflects the morning sun.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "We had the historic facade restored • They had the interior redesigned",
                    "example": "The city had the historic lighthouse restored.",
                    "note": "Каузативная конструкция (have / get something done) — когда работу для нас делают мастера"
                }
            ],
            "cambridgeTip": "В теме «Архитектура» мы сразу применяем правило (Каузативная конструкция (have / get something done) — когда работу для нас делают мастера) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_39_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Архитектура • B2",
                "prompt": "Скажи, что владельцы наняли мастеров для обновления фасада:\n«Before opening the hotel, the owners had the old stone facade ___.»",
                "options": [
                    "restored",
                    "restore",
                    "restoring",
                    "to restore"
                ],
                "correct": "restored",
                "explanation": "В конструкции have something done после объекта (the old stone facade) ставится 3-я форма глагола (restored)."
            },
            {
                "id": "unit_b2_39_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Архитектура • Конструктор фразы",
                "prompt": "Собери фразу: «В прошлом месяце мы заказали дизайн интерьера у архитектора»",
                "words": [
                    "We",
                    "had",
                    "our",
                    "interior",
                    "designed",
                    "last",
                    "month.",
                    "design",
                    "designing"
                ],
                "distractors": [
                    "design",
                    "designing"
                ],
                "correct": "We had our interior designed last month.",
                "explanation": "Формула услуги мастеров: had + our interior + V3 (designed).",
                "promptRu": "Собери фразу: «В прошлом месяце мы заказали дизайн интерьера у архитектора»",
                "correctSentence": "We had our interior designed last month."
            },
            {
                "id": "unit_b2_39_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Архитектура • Чтение",
                "storyTitle": "Вторая жизнь старинной виллы",
                "paragraphs": [
                    {
                        "en": "Near the harbour stands a nineteenth-century villa with graceful stone arches. For years it stood empty, until a local art foundation bought it.",
                        "ru": ""
                    },
                    {
                        "en": "Instead of modernising it completely, they had the original facade carefully restored by craftsmen and had the bright interior turned into an open art library.",
                        "ru": ""
                    }
                ],
                "prompt": "Во что превратили светлый интерьер отреставрированной виллы?",
                "options": [
                    "В открытую художественную библиотеку",
                    "В супермаркет",
                    "В склад"
                ],
                "correct": "В открытую художественную библиотеку",
                "explanation": "В тексте: had the bright interior turned into an open art library."
            },
            {
                "id": "unit_b2_39_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Архитектура • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "They had the historic facade carefully restored by craftsmen.",
                "translationRu": "Им бережно отреставрировали исторический фасад руками мастеров.",
                "options": [
                    "They had the historic facade carefully restored by craftsmen.",
                    "Stone arches lead to the garden.",
                    "The interior is bright and spacious."
                ],
                "correct": "They had the historic facade carefully restored by craftsmen.",
                "explanation": "Прозвучала фраза: «They had the historic facade carefully restored by craftsmen.» (Им бережно отреставрировали исторический фасад руками мастеров.)."
            },
            {
                "id": "unit_b2_39_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Архитектура • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "We had the historic facade restored and the interior updated.",
                "translationRu": "Нам отреставрировали исторический фасад и обновили интерьер.",
                "correct": "We had the historic facade restored and the interior updated.",
                "explanation": "Отличное произношение! «We had the historic facade restored and the interior updated.» — Нам отреставрировали исторический фасад и обновили интерьер.."
            }
        ]
    },
    {
        "id": "unit_b2_40",
        "zoneId": "ocean_b2",
        "cefr": "B2",
        "number": 40,
        "nodeType": "five_stage",
        "titleRu": "Литература",
        "titleEn": "Литература",
        "icon": "📚",
        "sources": [
            "Тема: Литература",
            "Уровень B2"
        ],
        "vocab": [
            {
                "en": "novel",
                "tr": "[ˈnɒvl]",
                "ru": "роман (книга)",
                "ex": "Having read the novel, she recommended it to her friends.",
                "example": "Having read the novel, she recommended it to her friends."
            },
            {
                "en": "chapter",
                "tr": "[ˈtʃæptə]",
                "ru": "глава книги",
                "ex": "The final chapter reveals the secret.",
                "example": "The final chapter reveals the secret."
            },
            {
                "en": "character",
                "tr": "[ˈkærəktə]",
                "ru": "персонаж, герой; характер",
                "ex": "The main character embarks on a sea voyage.",
                "example": "The main character embarks on a sea voyage."
            },
            {
                "en": "author",
                "tr": "[ˈɔːθə]",
                "ru": "автор, писатель",
                "ex": "Inspired by the sea, the author wrote a trilogy.",
                "example": "Inspired by the sea, the author wrote a trilogy."
            },
            {
                "en": "vivid",
                "tr": "[ˈvɪvɪd]",
                "ru": "яркий, живой, образный",
                "ex": "The book is full of vivid descriptions.",
                "example": "The book is full of vivid descriptions."
            },
            {
                "en": "narrative",
                "tr": "[ˈnærətɪv]",
                "ru": "повествование, сюжетная линия (B2)",
                "ex": "Captivated by the narrative, I read until midnight.",
                "example": "Captivated by the narrative, I read until midnight."
            },
            {
                "en": "irony",
                "tr": "[ˈaɪrəni]",
                "ru": "ирония (B2)",
                "ex": "Jane Austen's novels are famous for gentle irony.",
                "example": "Jane Austen's novels are famous for gentle irony."
            },
            {
                "en": "memoir",
                "tr": "[ˈmemwɑː]",
                "ru": "мемуары, воспоминания (B2)",
                "ex": "Written on the island, her memoir became a bestseller.",
                "example": "Written on the island, her memoir became a bestseller."
            },
            {
                "en": "interpret",
                "tr": "[ɪnˈtɜːprɪt]",
                "ru": "интерпретировать, толковать (B2)",
                "ex": "Every reader interprets the ending in their own way.",
                "example": "Every reader interprets the ending in their own way."
            },
            {
                "en": "prose",
                "tr": "[prəʊz]",
                "ru": "художественная проза (B2)",
                "ex": "His clear and melodic prose reads like poetry.",
                "example": "His clear and melodic prose reads like poetry."
            }
        ],
        "readingPassage": {
            "titleEn": "Роман, написанный у маяка",
            "titleRu": "Литература",
            "audioFull": "Inspired by the quiet beauty of the northern islands, the author spent two winters in a keeper's cottage writing his famous novel. Reading the vivid chapters today, you can almost hear the sound of the waves and feel the wind that shaped the main character's destiny.",
            "paragraphs": [
                {
                    "en": "Inspired by the quiet beauty of the northern islands, the author spent two winters in a keeper's cottage writing his famous novel.",
                    "ru": ""
                },
                {
                    "en": "Reading the vivid chapters today, you can almost hear the sound of the waves and feel the wind that shaped the main character's destiny.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Причастные обороты (Inspired by... / Opening the book...) — живой литературный слог",
            "skyNote": "Чтобы речь звучала красиво и плавно, вместо длинных придаточных предложений используй причастные обороты: Opening the first chapter, I was captivated (Открыв первую главу... — активное причастие V-ing) или Inspired by the ocean, the author wrote a novel (Вдохновлённый океаном... — пассивное причастие V3).",
            "summary": "Чтобы речь звучала красиво и плавно, вместо длинных придаточных предложений используй причастные обороты: Opening the first chapter, I was captivated (Открыв первую главу... — активное причастие V-ing) или Inspired by the ocean, the author wrote a novel (Вдохновлённый океаном... — пассивное причастие V3).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Литература» (B2)",
                    "example": "Having read the novel, she recommended it to her friends.",
                    "note": "Формула: Inspired by the ocean, the author wrote a vivid novel. Чтобы речь звучала красиво и плавно, вместо длинных придаточных предложений используй причастные обороты: Opening the first chapter, I was captivated (Открыв первую главу... — активное причастие V-ing) или Inspired by the ocean, the author wrote a novel (Вдохновлённый океаном... — пассивное причастие V3)."
                },
                {
                    "label": "🌊 Живой пример на лексике B2",
                    "example": "The final chapter reveals the secret.",
                    "note": "Все 10 слов этого урока относятся строго к уровню B2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Inspired by the ocean, the author wrote a vivid novel",
                    "example": "Having read the novel, she recommended it to her friends.",
                    "note": "Причастные обороты (Inspired by... / Opening the book...) — живой литературный слог"
                }
            ],
            "cambridgeTip": "В теме «Литература» мы сразу применяем правило (Причастные обороты (Inspired by... / Opening the book...) — живой литературный слог) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_b2_40_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Литература • B2",
                "prompt": "Начни предложение красивым причастным оборотом («Вдохновлённый морским путешествием, писатель создал роман»):\n«___ by his sea voyage, the author created an unforgettable novel.»",
                "options": [
                    "Inspired",
                    "Inspire",
                    "To inspire",
                    "Inspiring"
                ],
                "correct": "Inspired",
                "explanation": "Писатель сам был «вдохновлён» путешествием (пассивное значение), поэтому выбираем причастие прошедшего времени V3: Inspired by..."
            },
            {
                "id": "unit_b2_40_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Литература • Конструктор фразы",
                "prompt": "Собери фразу: «Дочитав последнюю главу, она с улыбкой закрыла роман»",
                "words": [
                    "Finishing",
                    "the",
                    "last",
                    "chapter,",
                    "she",
                    "closed",
                    "the",
                    "novel.",
                    "Finished",
                    "Finish"
                ],
                "distractors": [
                    "Finished",
                    "Finish"
                ],
                "correct": "Finishing the last chapter, she closed the novel.",
                "explanation": "Активное действие героини передаётся причастием настоящего времени (Finishing the last chapter...).",
                "promptRu": "Собери фразу: «Дочитав последнюю главу, она с улыбкой закрыла роман»",
                "correctSentence": "Finishing the last chapter, she closed the novel."
            },
            {
                "id": "unit_b2_40_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Литература • Чтение",
                "storyTitle": "Роман, написанный у маяка",
                "paragraphs": [
                    {
                        "en": "Inspired by the quiet beauty of the northern islands, the author spent two winters in a keeper's cottage writing his famous novel.",
                        "ru": ""
                    },
                    {
                        "en": "Reading the vivid chapters today, you can almost hear the sound of the waves and feel the wind that shaped the main character's destiny.",
                        "ru": ""
                    }
                ],
                "prompt": "Где писатель провёл две зимы за написанием своего романа?",
                "options": [
                    "В домике смотрителя на северных островах",
                    "В шумном мегаполисе",
                    "На борту подводной лодки"
                ],
                "correct": "В домике смотрителя на северных островах",
                "explanation": "В тексте: spent two winters in a keeper's cottage writing his famous novel."
            },
            {
                "id": "unit_b2_40_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Литература • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Inspired by the ocean, the author wrote a vivid novel.",
                "translationRu": "Вдохновлённый океаном, автор написал яркий, живой роман.",
                "options": [
                    "Inspired by the ocean, the author wrote a vivid novel.",
                    "The last chapter surprised everyone.",
                    "Who is your favourite literary character?"
                ],
                "correct": "Inspired by the ocean, the author wrote a vivid novel.",
                "explanation": "Прозвучала фраза: «Inspired by the ocean, the author wrote a vivid novel.» (Вдохновлённый океаном, автор написал яркий, живой роман.)."
            },
            {
                "id": "unit_b2_40_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Литература • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Inspired by the sea, the author created a vivid novel.",
                "translationRu": "Вдохновлённый морем, писатель создал яркий роман.",
                "correct": "Inspired by the sea, the author created a vivid novel.",
                "explanation": "Отличное произношение! «Inspired by the sea, the author created a vivid novel.» — Вдохновлённый морем, писатель создал яркий роман.."
            }
        ]
    },
    {
        "id": "unit_c1_41",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 41,
        "nodeType": "five_stage",
        "titleRu": "Дипломатия",
        "titleEn": "Дипломатия",
        "icon": "🕊️",
        "sources": [
            "Тема: Дипломатия",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "treaty",
                "tr": "[ˈtriːti]",
                "ru": "международный договор, соглашение",
                "ex": "Rarely have two nations signed such a comprehensive treaty.",
                "example": "Rarely have two nations signed such a comprehensive treaty."
            },
            {
                "en": "ambassador",
                "tr": "[æmˈbæsədə]",
                "ru": "посол",
                "ex": "The ambassador emphasized mutual respect.",
                "example": "The ambassador emphasized mutual respect."
            },
            {
                "en": "compromise",
                "tr": "[ˈkɒmprəmaɪz]",
                "ru": "компромисс",
                "ex": "After long talks, both sides reached a fair compromise.",
                "example": "After long talks, both sides reached a fair compromise."
            },
            {
                "en": "consensus",
                "tr": "[kənˈsensəs]",
                "ru": "консенсус, общее согласие",
                "ex": "Only through dialogue can we reach a consensus.",
                "example": "Only through dialogue can we reach a consensus."
            },
            {
                "en": "alliance",
                "tr": "[əˈlaɪəns]",
                "ru": "альянс, союз",
                "ex": "The cultural alliance strengthened cooperation.",
                "example": "The cultural alliance strengthened cooperation."
            },
            {
                "en": "sovereignty",
                "tr": "[ˈsɒvrənti]",
                "ru": "суверенитет (C1)",
                "ex": "The charter respects the sovereignty of every state.",
                "example": "The charter respects the sovereignty of every state."
            },
            {
                "en": "bilateral",
                "tr": "[ˌbaɪˈlætərəl]",
                "ru": "двусторонний (о переговорах) (C1)",
                "ex": "Bilateral talks led to a historic agreement.",
                "example": "Bilateral talks led to a historic agreement."
            },
            {
                "en": "sanction",
                "tr": "[ˈsæŋkʃn]",
                "ru": "санкционировать; санкция (C1)",
                "ex": "The council sanctioned the new environmental accord.",
                "example": "The council sanctioned the new environmental accord."
            },
            {
                "en": "mediate",
                "tr": "[ˈmiːdieɪt]",
                "ru": "выступать посредником (C1)",
                "ex": "Neutral diplomats helped mediate the dispute.",
                "example": "Neutral diplomats helped mediate the dispute."
            },
            {
                "en": "jurisdiction",
                "tr": "[ˌdʒʊərɪsˈdɪkʃn]",
                "ru": "юрисдикция, правовая сфера (C1)",
                "ex": "International waters fall under shared jurisdiction.",
                "example": "International waters fall under shared jurisdiction."
            }
        ],
        "readingPassage": {
            "titleEn": "Искусство тонкого диалога",
            "titleRu": "Дипломатия",
            "audioFull": "At the maritime summit in Geneva, delegates discussed the protection of international waters. At first, positions seemed far apart. Yet only through patient listening and mutual respect did the ambassadors find common ground. Never before had twenty countries reached a consensus on ocean conservation so swiftly.",
            "paragraphs": [
                {
                    "en": "At the maritime summit in Geneva, delegates discussed the protection of international waters. At first, positions seemed far apart.",
                    "ru": ""
                },
                {
                    "en": "Yet only through patient listening and mutual respect did the ambassadors find common ground. Never before had twenty countries reached a consensus on ocean conservation so swiftly.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Эмфатическая инверсия (Never before / Rarely / Only through...) — высокий дипломатический стиль",
            "skyNote": "На уровне C1 для выразительности и акцента после отрицательных или ограничительных слов в начале фразы (Never before — Никогда прежде, Rarely — Редко когда, Not only — Не только, Only through dialogue — Только через диалог) используется обратный (вопросительный) порядок слов: вспомогательный глагол ставится ПЕРЕД подлежащим!",
            "summary": "На уровне C1 для выразительности и акцента после отрицательных или ограничительных слов в начале фразы (Never before — Никогда прежде, Rarely — Редко когда, Not only — Не только, Only through dialogue — Только через диалог) используется обратный (вопросительный) порядок слов: вспомогательный глагол ставится ПЕРЕД подлежащим!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Дипломатия» (C1)",
                    "example": "Rarely have two nations signed such a comprehensive treaty.",
                    "note": "Формула: Rarely have diplomats reached such a swift consensus!. На уровне C1 для выразительности и акцента после отрицательных или ограничительных слов в начале фразы (Never before — Никогда прежде, Rarely — Редко когда, Not only — Не только, Only through dialogue — Только через диалог) используется обратный (вопросительный) порядок слов: вспомогательный глагол ставится ПЕРЕД подлежащим!"
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "The ambassador emphasized mutual respect.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Rarely have diplomats reached such a swift consensus!",
                    "example": "Rarely have two nations signed such a comprehensive treaty.",
                    "note": "Эмфатическая инверсия (Never before / Rarely / Only through...) — высокий дипломатический стиль"
                }
            ],
            "cambridgeTip": "В теме «Дипломатия» мы сразу применяем правило (Эмфатическая инверсия (Never before / Rarely / Only through...) — высокий дипломатический стиль) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_41_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Дипломатия • C1",
                "prompt": "Выбери верный порядок слов с инверсией после Only through dialogue:\n«Only through open dialogue ___ reach a lasting compromise.»",
                "options": [
                    "can we",
                    "we can",
                    "we do",
                    "are we"
                ],
                "correct": "can we",
                "explanation": "После ограничительного оборота Only through open dialogue в начале предложения срабатывает инверсия: модальный глагол ставится перед подлежащим (can we)."
            },
            {
                "id": "unit_c1_41_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Дипломатия • Конструктор фразы",
                "prompt": "Собери фразу с инверсией: «Никогда прежде послы не подписывали столь важный договор»",
                "words": [
                    "Never",
                    "before",
                    "have",
                    "ambassadors",
                    "signed",
                    "such",
                    "a",
                    "treaty.",
                    "ambassadors have",
                    "did"
                ],
                "distractors": [
                    "ambassadors have",
                    "did"
                ],
                "correct": "Never before have ambassadors signed such a treaty.",
                "explanation": "После Never before вспомогательный глагол have выносится перед подлежащим ambassadors.",
                "promptRu": "Собери фразу с инверсией: «Никогда прежде послы не подписывали столь важный договор»",
                "correctSentence": "Never before have ambassadors signed such a treaty."
            },
            {
                "id": "unit_c1_41_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Дипломатия • Чтение",
                "storyTitle": "Искусство тонкого диалога",
                "paragraphs": [
                    {
                        "en": "At the maritime summit in Geneva, delegates discussed the protection of international waters. At first, positions seemed far apart.",
                        "ru": ""
                    },
                    {
                        "en": "Yet only through patient listening and mutual respect did the ambassadors find common ground. Never before had twenty countries reached a consensus on ocean conservation so swiftly.",
                        "ru": ""
                    }
                ],
                "prompt": "Благодаря чему послам удалось найти общую позицию на саммите?",
                "options": [
                    "Благодаря терпеливому умению слушать и взаимному уважению",
                    "Благодаря случайному голосованию",
                    "Благодаря переносу встречи"
                ],
                "correct": "Благодаря терпеливому умению слушать и взаимному уважению",
                "explanation": "В тексте: only through patient listening and mutual respect did the ambassadors find common ground."
            },
            {
                "id": "unit_c1_41_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Дипломатия • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Only through open dialogue can we reach a fair compromise.",
                "translationRu": "Только через открытый диалог мы можем прийти к справедливому компромиссу.",
                "options": [
                    "Only through open dialogue can we reach a fair compromise.",
                    "The ambassador signed the treaty.",
                    "Both sides found a consensus."
                ],
                "correct": "Only through open dialogue can we reach a fair compromise.",
                "explanation": "Прозвучала фраза: «Only through open dialogue can we reach a fair compromise.» (Только через открытый диалог мы можем прийти к справедливому компромиссу.)."
            },
            {
                "id": "unit_c1_41_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Дипломатия • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Only through mutual respect can we reach a lasting consensus.",
                "translationRu": "Только через взаимное уважение мы можем достичь прочного согласия.",
                "correct": "Only through mutual respect can we reach a lasting consensus.",
                "explanation": "Отличное произношение! «Only through mutual respect can we reach a lasting consensus.» — Только через взаимное уважение мы можем достичь прочного согласия.."
            }
        ]
    },
    {
        "id": "unit_c1_42",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 42,
        "nodeType": "five_stage",
        "titleRu": "Ораторство",
        "titleEn": "Ораторство",
        "icon": "🎙️",
        "sources": [
            "Тема: Ораторство",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "persuade",
                "tr": "[pəˈsweɪd]",
                "ru": "убеждать, склонять к мнению",
                "ex": "What persuades the audience is genuine sincerity.",
                "example": "What persuades the audience is genuine sincerity."
            },
            {
                "en": "eloquent",
                "tr": "[ˈeləkwənt]",
                "ru": "красноречивый",
                "ex": "It was her eloquent speech that inspired the hall.",
                "example": "It was her eloquent speech that inspired the hall."
            },
            {
                "en": "gesture",
                "tr": "[ˈdʒestʃə]",
                "ru": "жест",
                "ex": "Calm gestures make a speaker look confident.",
                "example": "Calm gestures make a speaker look confident."
            },
            {
                "en": "emphasis",
                "tr": "[ˈemfəsɪs]",
                "ru": "акцент, особое внимание",
                "ex": "He placed special emphasis on practical examples.",
                "example": "He placed special emphasis on practical examples."
            },
            {
                "en": "charisma",
                "tr": "[kəˈrɪzmə]",
                "ru": "харизма, обаяние",
                "ex": "Natural charisma comes from passion for your topic.",
                "example": "Natural charisma comes from passion for your topic."
            },
            {
                "en": "articulate",
                "tr": "[ɑːˈtɪkjələt]",
                "ru": "чётко и ясно выражающий мысли (C1)",
                "ex": "What impressed the panel was how articulate she was.",
                "example": "What impressed the panel was how articulate she was."
            },
            {
                "en": "rhetoric",
                "tr": "[ˈretərɪk]",
                "ru": "риторика, ораторское искусство (C1)",
                "ex": "Classical rhetoric balances logic and emotion.",
                "example": "Classical rhetoric balances logic and emotion."
            },
            {
                "en": "assertion",
                "tr": "[əˈsɜːʃn]",
                "ru": "утверждение, тезис (C1)",
                "ex": "He backed every assertion with solid data.",
                "example": "He backed every assertion with solid data."
            },
            {
                "en": "ambiguity",
                "tr": "[ˌæmbɪˈɡjuːəti]",
                "ru": "двусмысленность, неоднозначность (C1)",
                "ex": "Clear speakers avoid unnecessary ambiguity.",
                "example": "Clear speakers avoid unnecessary ambiguity."
            },
            {
                "en": "refute",
                "tr": "[rɪˈfjuːt]",
                "ru": "аргументированно опровергать (C1)",
                "ex": "It was her calm evidence that refuted the myth.",
                "example": "It was her calm evidence that refuted the myth."
            }
        ],
        "readingPassage": {
            "titleEn": "Секрет незабываемого выступления",
            "titleRu": "Ораторство",
            "audioFull": "Many people think that public speaking is only about loud projection or memorised slides. However, rhetorical masters know a deeper truth. What truly connects a speaker with the hall is genuine warmth. In yesterday's forum, it was Clara's calm gestures and eloquent storytelling that persuaded even the sceptics.",
            "paragraphs": [
                {
                    "en": "Many people think that public speaking is only about loud projection or memorised slides. However, rhetorical masters know a deeper truth.",
                    "ru": ""
                },
                {
                    "en": "What truly connects a speaker with the hall is genuine warmth. In yesterday's forum, it was Clara's calm gestures and eloquent storytelling that persuaded even the sceptics.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Фокусные конструкции (Cleft Sentences: What... is / It was... that) — приём лучших спикеров",
            "skyNote": "Чтобы приковать внимание слушателей к главной мысли («Именно искренность убеждает публику!», «Именно её красноречивая речь вдохновила зал!»), спикеры уровня C1 используют Cleft-конструкции: What persuades people is sincerity или It was her eloquent speech that changed everything.",
            "summary": "Чтобы приковать внимание слушателей к главной мысли («Именно искренность убеждает публику!», «Именно её красноречивая речь вдохновила зал!»), спикеры уровня C1 используют Cleft-конструкции: What persuades people is sincerity или It was her eloquent speech that changed everything.",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Ораторство» (C1)",
                    "example": "What persuades the audience is genuine sincerity.",
                    "note": "Формула: What persuades the audience is genuine sincerity!. Чтобы приковать внимание слушателей к главной мысли («Именно искренность убеждает публику!», «Именно её красноречивая речь вдохновила зал!»), спикеры уровня C1 используют Cleft-конструкции: What persuades people is sincerity или It was her eloquent speech that changed everything."
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "It was her eloquent speech that inspired the hall.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "What persuades the audience is genuine sincerity!",
                    "example": "What persuades the audience is genuine sincerity.",
                    "note": "Фокусные конструкции (Cleft Sentences: What... is / It was... that) — приём лучших спикеров"
                }
            ],
            "cambridgeTip": "В теме «Ораторство» мы сразу применяем правило (Фокусные конструкции (Cleft Sentences: What... is / It was... that) — приём лучших спикеров) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_42_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Ораторство • C1",
                "prompt": "Сделай выразительный ораторский акцент в начале фразы:\n«___ truly captivates an audience is a speaker's genuine sincerity and charisma.»",
                "options": [
                    "What",
                    "That",
                    "Which",
                    "Who"
                ],
                "correct": "What",
                "explanation": "Фокусная конструкция What + глагол + is... («То, что по-настоящему увлекает публику — это...»)."
            },
            {
                "id": "unit_c1_42_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Ораторство • Конструктор фразы",
                "prompt": "Собери фразу: «Именно её красноречивая речь убедила всех слушателей»",
                "words": [
                    "It",
                    "was",
                    "her",
                    "eloquent",
                    "speech",
                    "that",
                    "persuaded",
                    "everyone.",
                    "what",
                    "which"
                ],
                "distractors": [
                    "what",
                    "which"
                ],
                "correct": "It was her eloquent speech that persuaded everyone.",
                "explanation": "Конструкция выделения It was ... that ... подчеркивает ключевую деталь.",
                "promptRu": "Собери фразу: «Именно её красноречивая речь убедила всех слушателей»",
                "correctSentence": "It was her eloquent speech that persuaded everyone."
            },
            {
                "id": "unit_c1_42_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Ораторство • Чтение",
                "storyTitle": "Секрет незабываемого выступления",
                "paragraphs": [
                    {
                        "en": "Many people think that public speaking is only about loud projection or memorised slides. However, rhetorical masters know a deeper truth.",
                        "ru": ""
                    },
                    {
                        "en": "What truly connects a speaker with the hall is genuine warmth. In yesterday's forum, it was Clara's calm gestures and eloquent storytelling that persuaded even the sceptics.",
                        "ru": ""
                    }
                ],
                "prompt": "Что по-настоящему связывает оратора с залом согласно тексту?",
                "options": [
                    "Искренняя душевная теплота, спокойные жесты и живая история",
                    "Громкий микрофон",
                    "Сложные таблицы на слайдах"
                ],
                "correct": "Искренняя душевная теплота, спокойные жесты и живая история",
                "explanation": "В тексте: What truly connects a speaker with the hall is genuine warmth."
            },
            {
                "id": "unit_c1_42_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Ораторство • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "What truly persuades the audience is genuine sincerity.",
                "translationRu": "То, что по-настоящему убеждает публику — это неподдельная искренность.",
                "options": [
                    "What truly persuades the audience is genuine sincerity.",
                    "Her speech was very eloquent.",
                    "Calm gestures show confidence."
                ],
                "correct": "What truly persuades the audience is genuine sincerity.",
                "explanation": "Прозвучала фраза: «What truly persuades the audience is genuine sincerity.» (То, что по-настоящему убеждает публику — это неподдельная искренность.)."
            },
            {
                "id": "unit_c1_42_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Ораторство • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "What persuades the audience is genuine warmth and eloquence.",
                "translationRu": "То, что убеждает публику — это искренняя теплота и красноречие.",
                "correct": "What persuades the audience is genuine warmth and eloquence.",
                "explanation": "Отличное произношение! «What persuades the audience is genuine warmth and eloquence.» — То, что убеждает публику — это искренняя теплота и красноречие.."
            }
        ]
    },
    {
        "id": "unit_c1_43",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 43,
        "nodeType": "five_stage",
        "titleRu": "Космос",
        "titleEn": "Космос",
        "icon": "🪐",
        "sources": [
            "Тема: Космос",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "orbit",
                "tr": "[ˈɔːbɪt]",
                "ru": "орбита; вращаться на орбите",
                "ex": "The telescope is currently in orbit around the Earth.",
                "example": "The telescope is currently in orbit around the Earth."
            },
            {
                "en": "constellation",
                "tr": "[ˌkɒnstəˈleɪʃn]",
                "ru": "созвездие",
                "ex": "Ancient sailors navigated by the constellations.",
                "example": "Ancient sailors navigated by the constellations."
            },
            {
                "en": "gravity",
                "tr": "[ˈɡrævəti]",
                "ru": "гравитация, притяжение",
                "ex": "In zero gravity, water forms floating spheres.",
                "example": "In zero gravity, water forms floating spheres."
            },
            {
                "en": "satellite",
                "tr": "[ˈsætəlaɪt]",
                "ru": "спутник",
                "ex": "The satellite transmits high-resolution images.",
                "example": "The satellite transmits high-resolution images."
            },
            {
                "en": "cosmos",
                "tr": "[ˈkɒzmɒs]",
                "ru": "космос, Вселенная",
                "ex": "Had we not launched space telescopes, we wouldn't know so much about the cosmos.",
                "example": "Had we not launched space telescopes, we wouldn't know so much about the cosmos."
            },
            {
                "en": "trajectory",
                "tr": "[trəˈdʒektəri]",
                "ru": "траектория полёта (C1)",
                "ex": "Engineers calculated the probe's orbital trajectory.",
                "example": "Engineers calculated the probe's orbital trajectory."
            },
            {
                "en": "velocity",
                "tr": "[vəˈlɒsəti]",
                "ru": "векторная скорость (в физике) (C1)",
                "ex": "The spacecraft reached escape velocity.",
                "example": "The spacecraft reached escape velocity."
            },
            {
                "en": "gravitational",
                "tr": "[ˌɡrævɪˈteɪʃənl]",
                "ru": "гравитационный (C1)",
                "ex": "Gravitational waves were predicted a century ago.",
                "example": "Gravitational waves were predicted a century ago."
            },
            {
                "en": "anomaly",
                "tr": "[əˈnɒməli]",
                "ru": "аномалия, отклонение (C1)",
                "ex": "Astronomers noticed a magnetic anomaly.",
                "example": "Astronomers noticed a magnetic anomaly."
            },
            {
                "en": "spectrum",
                "tr": "[ˈspektrəm]",
                "ru": "спектр излучения (C1)",
                "ex": "The telescope analyses the infrared spectrum.",
                "example": "The telescope analyses the infrared spectrum."
            }
        ],
        "readingPassage": {
            "titleEn": "Звёздный компас над океаном",
            "titleRu": "Космос",
            "audioFull": "For centuries, mariners looked up at the night constellations to find their way across the ocean. Today, dozens of satellites in orbit guide ships with centimetre precision. Yet astronomers remind us: had ancient observers not mapped the starry sky with such curiosity, modern science wouldn't understand the laws of gravity and the cosmos so deeply today.",
            "paragraphs": [
                {
                    "en": "For centuries, mariners looked up at the night constellations to find their way across the ocean. Today, dozens of satellites in orbit guide ships with centimetre precision.",
                    "ru": ""
                },
                {
                    "en": "Yet astronomers remind us: had ancient observers not mapped the starry sky with such curiosity, modern science wouldn't understand the laws of gravity and the cosmos so deeply today.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Смешанные условные предложения (Mixed Conditionals) — как открытия прошлого меняют настоящее",
            "skyNote": "Когда событие произошло в прошлом (If + Past Perfect: Had astronomers not launched orbital telescopes twenty years ago...), а его результат мы видим СЕЙЧАС в настоящем (...we wouldn't know so much about distant constellations today!), мы соединяем 3-й и 2-й типы условий: If + had V3, ... would + V1 (now/today)!",
            "summary": "Когда событие произошло в прошлом (If + Past Perfect: Had astronomers not launched orbital telescopes twenty years ago...), а его результат мы видим СЕЙЧАС в настоящем (...we wouldn't know so much about distant constellations today!), мы соединяем 3-й и 2-й типы условий: If + had V3, ... would + V1 (now/today)!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Космос» (C1)",
                    "example": "The telescope is currently in orbit around the Earth.",
                    "note": "Формула: If we hadn't launched satellites, we wouldn't have accurate navigation today. Когда событие произошло в прошлом (If + Past Perfect: Had astronomers not launched orbital telescopes twenty years ago...), а его результат мы видим СЕЙЧАС в настоящем (...we wouldn't know so much about distant constellations today!), мы соединяем 3-й и 2-й типы условий: If + had V3, ... would + V1 (now/today)!"
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "Ancient sailors navigated by the constellations.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "If we hadn't launched satellites, we wouldn't have accurate navigation today",
                    "example": "The telescope is currently in orbit around the Earth.",
                    "note": "Смешанные условные предложения (Mixed Conditionals) — как открытия прошлого меняют настоящее"
                }
            ],
            "cambridgeTip": "В теме «Космос» мы сразу применяем правило (Смешанные условные предложения (Mixed Conditionals) — как открытия прошлого меняют настоящее) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_43_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Космос • C1",
                "prompt": "Свяжи открытие прошлого с сегодняшним результатом (Mixed Conditional):\n«If engineers hadn't placed satellites in orbit decades ago, we ___ have global navigation on our phones today.»",
                "options": [
                    "wouldn't",
                    "won't",
                    "didn't",
                    "hadn't"
                ],
                "correct": "wouldn't",
                "explanation": "Результат относится к настоящему дню (today), поэтому во второй части Mixed Conditional используем wouldn't + инфинитив (wouldn't have)."
            },
            {
                "id": "unit_c1_43_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Космос • Конструктор фразы",
                "prompt": "Собери фразу: «В невесомости на орбите капли воды парят в воздухе»",
                "words": [
                    "In",
                    "zero",
                    "gravity",
                    "in",
                    "orbit,",
                    "water",
                    "drops",
                    "float.",
                    "floating",
                    "orbits"
                ],
                "distractors": [
                    "floating",
                    "orbits"
                ],
                "correct": "In zero gravity in orbit, water drops float.",
                "explanation": "Научный факт передаётся в Present Simple (water drops float).",
                "promptRu": "Собери фразу: «В невесомости на орбите капли воды парят в воздухе»",
                "correctSentence": "In zero gravity in orbit, water drops float."
            },
            {
                "id": "unit_c1_43_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Космос • Чтение",
                "storyTitle": "Звёздный компас над океаном",
                "paragraphs": [
                    {
                        "en": "For centuries, mariners looked up at the night constellations to find their way across the ocean. Today, dozens of satellites in orbit guide ships with centimetre precision.",
                        "ru": ""
                    },
                    {
                        "en": "Yet astronomers remind us: had ancient observers not mapped the starry sky with such curiosity, modern science wouldn't understand the laws of gravity and the cosmos so deeply today.",
                        "ru": ""
                    }
                ],
                "prompt": "По чему древние мореплаватели ориентировались в открытом океане?",
                "options": [
                    "По ночным созвездиям",
                    "По радиоволнам",
                    "По подводным кабелям"
                ],
                "correct": "По ночным созвездиям",
                "explanation": "В тексте: mariners looked up at the night constellations."
            },
            {
                "id": "unit_c1_43_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Космос • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "If we hadn't launched satellites into orbit, we wouldn't have precise navigation today.",
                "translationRu": "Если бы мы не запустили спутники на орбиту, сегодня у нас не было бы точной навигации.",
                "options": [
                    "If we hadn't launched satellites into orbit, we wouldn't have precise navigation today.",
                    "Sailors navigated by the constellations.",
                    "Water floats in zero gravity."
                ],
                "correct": "If we hadn't launched satellites into orbit, we wouldn't have precise navigation today.",
                "explanation": "Прозвучала фраза: «If we hadn't launched satellites into orbit, we wouldn't have precise navigation today.» (Если бы мы не запустили спутники на орбиту, сегодня у нас не было бы точной навигации.)."
            },
            {
                "id": "unit_c1_43_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Космос • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Ancient sailors navigated the ocean by the night constellations.",
                "translationRu": "Древние мореплаватели ориентировались в океане по ночным созвездиям.",
                "correct": "Ancient sailors navigated the ocean by the night constellations.",
                "explanation": "Отличное произношение! «Ancient sailors navigated the ocean by the night constellations.» — Древние мореплаватели ориентировались в океане по ночным созвездиям.."
            }
        ]
    },
    {
        "id": "unit_c1_44",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 44,
        "nodeType": "five_stage",
        "titleRu": "Урбанистика",
        "titleEn": "Урбанистика",
        "icon": "🚋",
        "sources": [
            "Тема: Урбанистика",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "pedestrian",
                "tr": "[pəˈdestriən]",
                "ru": "пешеход; пешеходный",
                "ex": "Turning the embankment into a pedestrian zone revitalized the city.",
                "example": "Turning the embankment into a pedestrian zone revitalized the city."
            },
            {
                "en": "sustainable",
                "tr": "[səˈsteɪnəbl]",
                "ru": "устойчивый, экологичный",
                "ex": "Sustainable architecture saves energy and water.",
                "example": "Sustainable architecture saves energy and water."
            },
            {
                "en": "commute",
                "tr": "[kəˈmjuːt]",
                "ru": "ежедневная поездка на работу и обратно",
                "ex": "New bicycle lanes shortened my morning commute.",
                "example": "New bicycle lanes shortened my morning commute."
            },
            {
                "en": "infrastructure",
                "tr": "[ˈɪnfrəstrʌktʃə]",
                "ru": "инфраструктура",
                "ex": "Investing in public infrastructure benefits every citizen.",
                "example": "Investing in public infrastructure benefits every citizen."
            },
            {
                "en": "greenery",
                "tr": "[ˈɡriːnəri]",
                "ru": "зелень, парковые насаждения",
                "ex": "Rooftop gardens fill the district with lush greenery.",
                "example": "Rooftop gardens fill the district with lush greenery."
            },
            {
                "en": "gentrification",
                "tr": "[ˌdʒentrɪfɪˈkeɪʃn]",
                "ru": "джентрификация (обновление кварталов) (C1)",
                "ex": "Urban planners balance renovation and gentrification.",
                "example": "Urban planners balance renovation and gentrification."
            },
            {
                "en": "congestion",
                "tr": "[kənˈdʒestʃən]",
                "ru": "транспортный затор, перегруженность (C1)",
                "ex": "Expanding tram lines reduced traffic congestion.",
                "example": "Expanding tram lines reduced traffic congestion."
            },
            {
                "en": "metropolitan",
                "tr": "[ˌmetrəˈpɒlɪtən]",
                "ru": "столичный, относящийся к мегаполису (C1)",
                "ex": "Metropolitan parks serve as green lungs.",
                "example": "Metropolitan parks serve as green lungs."
            },
            {
                "en": "municipality",
                "tr": "[mjuːˌnɪsɪˈpæləti]",
                "ru": "муниципалитет, городская администрация (C1)",
                "ex": "The municipality invested in coastal bike paths.",
                "example": "The municipality invested in coastal bike paths."
            },
            {
                "en": "amenity",
                "tr": "[əˈmiːnəti]",
                "ru": "удобство городской среды, благоустройство (C1)",
                "ex": "Public amenities include libraries and sports courts.",
                "example": "Public amenities include libraries and sports courts."
            }
        ],
        "readingPassage": {
            "titleEn": "Город, созданный для людей",
            "titleRu": "Урбанистика",
            "audioFull": "Ten years ago, the harbour avenue was congested with cars. Having consulted urban planners and residents, the municipality transformed the waterfront into a tree-lined pedestrian promenade. Today, abundant greenery, quiet electric trams, and sustainable infrastructure have turned the morning commute into a pleasant walk by the sea.",
            "paragraphs": [
                {
                    "en": "Ten years ago, the harbour avenue was congested with cars. Having consulted urban planners and residents, the municipality transformed the waterfront into a tree-lined pedestrian promenade.",
                    "ru": ""
                },
                {
                    "en": "Today, abundant greenery, quiet electric trams, and sustainable infrastructure have turned the morning commute into a pleasant walk by the sea.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Сложные герундиальные конструкции (Having been redesigned / Turning streets into...) в описании городов",
            "skyNote": "Описывая трансформацию современных городов, вместо простых цепочек фраз используй герундий в роли подлежащего (Turning old docks into pedestrian parks has transformed the city) и перфектные причастия (Having invested in sustainable infrastructure, the city reduced traffic).",
            "summary": "Описывая трансформацию современных городов, вместо простых цепочек фраз используй герундий в роли подлежащего (Turning old docks into pedestrian parks has transformed the city) и перфектные причастия (Having invested in sustainable infrastructure, the city reduced traffic).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Урбанистика» (C1)",
                    "example": "Turning the embankment into a pedestrian zone revitalized the city.",
                    "note": "Формула: Turning the quay into a pedestrian zone shortened the daily commute. Описывая трансформацию современных городов, вместо простых цепочек фраз используй герундий в роли подлежащего (Turning old docks into pedestrian parks has transformed the city) и перфектные причастия (Having invested in sustainable infrastructure, the city reduced traffic)."
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "Sustainable architecture saves energy and water.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Turning the quay into a pedestrian zone shortened the daily commute",
                    "example": "Turning the embankment into a pedestrian zone revitalized the city.",
                    "note": "Сложные герундиальные конструкции (Having been redesigned / Turning streets into...) в описании городов"
                }
            ],
            "cambridgeTip": "В теме «Урбанистика» мы сразу применяем правило (Сложные герундиальные конструкции (Having been redesigned / Turning streets into...) в описании городов) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_44_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Урбанистика • C1",
                "prompt": "Выбери верную форму для начала аналитического предложения об урбанистике:\n«___ the historic waterfront into a pedestrian zone has made the city much livelier.»",
                "options": [
                    "Turning",
                    "Turn",
                    "Turned",
                    "Have turned"
                ],
                "correct": "Turning",
                "explanation": "В роли подлежащего («Превращение набережной в пешеходную зону...») выступает герундий с окончанием -ing: Turning."
            },
            {
                "id": "unit_c1_44_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Урбанистика • Конструктор фразы",
                "prompt": "Собери фразу: «Экологичная инфраструктура и зелень делают ежедневные поездки приятнее»",
                "words": [
                    "Sustainable",
                    "infrastructure",
                    "and",
                    "greenery",
                    "improve",
                    "our",
                    "daily",
                    "commute.",
                    "improves",
                    "commuting"
                ],
                "distractors": [
                    "improves",
                    "commuting"
                ],
                "correct": "Sustainable infrastructure and greenery improve our daily commute.",
                "explanation": "Два подлежащих, соединённых союзом and, требуют глагола во множественном числе (improve).",
                "promptRu": "Собери фразу: «Экологичная инфраструктура и зелень делают ежедневные поездки приятнее»",
                "correctSentence": "Sustainable infrastructure and greenery improve our daily commute."
            },
            {
                "id": "unit_c1_44_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Урбанистика • Чтение",
                "storyTitle": "Город, созданный для людей",
                "paragraphs": [
                    {
                        "en": "Ten years ago, the harbour avenue was congested with cars. Having consulted urban planners and residents, the municipality transformed the waterfront into a tree-lined pedestrian promenade.",
                        "ru": ""
                    },
                    {
                        "en": "Today, abundant greenery, quiet electric trams, and sustainable infrastructure have turned the morning commute into a pleasant walk by the sea.",
                        "ru": ""
                    }
                ],
                "prompt": "Во что превратили портовый проспект после консультаций с урбанистами и жителями?",
                "options": [
                    "В зелёный пешеходный променад у воды",
                    "В восьмиполосное шоссе",
                    "В закрытую парковку"
                ],
                "correct": "В зелёный пешеходный променад у воды",
                "explanation": "В тексте: transformed the waterfront into a tree-lined pedestrian promenade."
            },
            {
                "id": "unit_c1_44_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Урбанистика • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Turning the waterfront into a pedestrian zone filled the city with greenery.",
                "translationRu": "Превращение набережной в пешеходную зону наполнило город зеленью.",
                "options": [
                    "Turning the waterfront into a pedestrian zone filled the city with greenery.",
                    "My morning commute takes twenty minutes.",
                    "They built sustainable infrastructure."
                ],
                "correct": "Turning the waterfront into a pedestrian zone filled the city with greenery.",
                "explanation": "Прозвучала фраза: «Turning the waterfront into a pedestrian zone filled the city with greenery.» (Превращение набережной в пешеходную зону наполнило город зеленью.)."
            },
            {
                "id": "unit_c1_44_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Урбанистика • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Sustainable infrastructure and lush greenery make our city comfortable.",
                "translationRu": "Экологичная инфраструктура и пышная зелень делают наш город комфортным.",
                "correct": "Sustainable infrastructure and lush greenery make our city comfortable.",
                "explanation": "Отличное произношение! «Sustainable infrastructure and lush greenery make our city comfortable.» — Экологичная инфраструктура и пышная зелень делают наш город комфортным.."
            }
        ]
    },
    {
        "id": "unit_c1_45",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 45,
        "nodeType": "five_stage",
        "titleRu": "Нейронаука",
        "titleEn": "Нейронаука",
        "icon": "⚡",
        "sources": [
            "Тема: Нейронаука",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "memory",
                "tr": "[ˈmeməri]",
                "ru": "память",
                "ex": "Spaced repetition strengthens long-term memory.",
                "example": "Spaced repetition strengthens long-term memory."
            },
            {
                "en": "neuron",
                "tr": "[ˈnjʊərɒn]",
                "ru": "нейрон",
                "ex": "Every time you learn a new word, neurons form new connections.",
                "example": "Every time you learn a new word, neurons form new connections."
            },
            {
                "en": "curiosity",
                "tr": "[ˌkjʊəriˈɒsəti]",
                "ru": "любознательность, живой интерес",
                "ex": "Curiosity triggers dopamine and accelerates learning.",
                "example": "Curiosity triggers dopamine and accelerates learning."
            },
            {
                "en": "focus",
                "tr": "[ˈfəʊkəs]",
                "ru": "концентрация внимания; фокусироваться",
                "ex": "Short intervals of deep focus are more effective than cramming.",
                "example": "Short intervals of deep focus are more effective than cramming."
            },
            {
                "en": "cognitive",
                "tr": "[ˈkɒɡnətɪv]",
                "ru": "когнитивный, познавательный",
                "ex": "Speaking two languages boosts cognitive flexibility.",
                "example": "Speaking two languages boosts cognitive flexibility."
            },
            {
                "en": "plasticity",
                "tr": "[plæˈstɪsəti]",
                "ru": "нейропластичность мозга (C1)",
                "ex": "Language learning enhances neural plasticity.",
                "example": "Language learning enhances neural plasticity."
            },
            {
                "en": "stimulus",
                "tr": "[ˈstɪmjələs]",
                "ru": "стимул, раздражитель (C1)",
                "ex": "Visual and audio stimuli speed up recall.",
                "example": "Visual and audio stimuli speed up recall."
            },
            {
                "en": "retention",
                "tr": "[rɪˈtenʃn]",
                "ru": "удержание в памяти, сохранение (C1)",
                "ex": "Active recall doubles vocabulary retention.",
                "example": "Active recall doubles vocabulary retention."
            },
            {
                "en": "empirical",
                "tr": "[ɪmˈpɪrɪkl]",
                "ru": "эмпирический, опытный (C1)",
                "ex": "Empirical studies confirm the power of sleep.",
                "example": "Empirical studies confirm the power of sleep."
            },
            {
                "en": "correlation",
                "tr": "[ˌkɒrəˈleɪʃn]",
                "ru": "корреляция, взаимосвязь (C1)",
                "ex": "There is a strong correlation between curiosity and memory.",
                "example": "There is a strong correlation between curiosity and memory."
            }
        ],
        "readingPassage": {
            "titleEn": "Как наш мозг запоминает языки",
            "titleRu": "Нейронаука",
            "audioFull": "Neuroscience shows that our brain is not a static hard drive. Whenever we learn a word inside an emotional story, neurons build strong synaptic pathways. Researchers emphasize that it is crucial that a learner engage curiosity rather than mechanical cramming. Combined with spaced repetition, this boosts cognitive flexibility and long-term memory.",
            "paragraphs": [
                {
                    "en": "Neuroscience shows that our brain is not a static hard drive. Whenever we learn a word inside an emotional story, neurons build strong synaptic pathways.",
                    "ru": ""
                },
                {
                    "en": "Researchers emphasize that it is crucial that a learner engage curiosity rather than mechanical cramming. Combined with spaced repetition, this boosts cognitive flexibility and long-term memory.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Сослагательное наклонение (Subjunctive: It is essential that he practise / be...)",
            "skyNote": "В научных рекомендациях после конструкций It is essential / crucial / vital / recommended that... в академическом английском C1 используется Subjunctive: глагол ставится в чистой базовой форме без окончания -s даже после he/she/it: It is essential that every learner review words in context!",
            "summary": "В научных рекомендациях после конструкций It is essential / crucial / vital / recommended that... в академическом английском C1 используется Subjunctive: глагол ставится в чистой базовой форме без окончания -s даже после he/she/it: It is essential that every learner review words in context!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Нейронаука» (C1)",
                    "example": "Spaced repetition strengthens long-term memory.",
                    "note": "Формула: It is essential that a learner review new words in context. В научных рекомендациях после конструкций It is essential / crucial / vital / recommended that... в академическом английском C1 используется Subjunctive: глагол ставится в чистой базовой форме без окончания -s даже после he/she/it: It is essential that every learner review words in context!"
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "Every time you learn a new word, neurons form new connections.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "It is essential that a learner review new words in context",
                    "example": "Spaced repetition strengthens long-term memory.",
                    "note": "Сослагательное наклонение (Subjunctive: It is essential that he practise / be...)"
                }
            ],
            "cambridgeTip": "В теме «Нейронаука» мы сразу применяем правило (Сослагательное наклонение (Subjunctive: It is essential that he practise / be...)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_45_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Нейронаука • C1",
                "prompt": "Выбери форму академического Subjunctive после It is vital that:\n«Neuroscientists recommend that a student ___ sufficient sleep to consolidate long-term memory.»",
                "options": [
                    "get",
                    "gets",
                    "getting",
                    "got"
                ],
                "correct": "get",
                "explanation": "После recommend / essential / vital that используется Subjunctive — чистая начальная форма глагола без -s (that a student get)."
            },
            {
                "id": "unit_c1_45_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Нейронаука • Конструктор фразы",
                "prompt": "Собери фразу: «Любознательность и глубокая концентрация укрепляют долговременную память»",
                "words": [
                    "Curiosity",
                    "and",
                    "deep",
                    "focus",
                    "strengthen",
                    "long-term",
                    "memory.",
                    "strengthens",
                    "focusing"
                ],
                "distractors": [
                    "strengthens",
                    "focusing"
                ],
                "correct": "Curiosity and deep focus strengthen long-term memory.",
                "explanation": "Подлежащее во множественном числе (Curiosity and deep focus) требует глагола strengthen.",
                "promptRu": "Собери фразу: «Любознательность и глубокая концентрация укрепляют долговременную память»",
                "correctSentence": "Curiosity and deep focus strengthen long-term memory."
            },
            {
                "id": "unit_c1_45_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Нейронаука • Чтение",
                "storyTitle": "Как наш мозг запоминает языки",
                "paragraphs": [
                    {
                        "en": "Neuroscience shows that our brain is not a static hard drive. Whenever we learn a word inside an emotional story, neurons build strong synaptic pathways.",
                        "ru": ""
                    },
                    {
                        "en": "Researchers emphasize that it is crucial that a learner engage curiosity rather than mechanical cramming. Combined with spaced repetition, this boosts cognitive flexibility and long-term memory.",
                        "ru": ""
                    }
                ],
                "prompt": "Что происходит в мозге, когда мы учим новое слово внутри живой истории?",
                "options": [
                    "Нейроны выстраивают прочные синаптические связи",
                    "Память перегружается",
                    "Слова сразу забываются"
                ],
                "correct": "Нейроны выстраивают прочные синаптические связи",
                "explanation": "В тексте: Whenever we learn a word inside an emotional story, neurons build strong synaptic pathways."
            },
            {
                "id": "unit_c1_45_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Нейронаука • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Curiosity and spaced repetition strengthen our long-term memory.",
                "translationRu": "Любознательность и интервальное повторение укрепляют нашу долговременную память.",
                "options": [
                    "Curiosity and spaced repetition strengthen our long-term memory.",
                    "Neurons form new connections every day.",
                    "Bilingualism improves cognitive flexibility."
                ],
                "correct": "Curiosity and spaced repetition strengthen our long-term memory.",
                "explanation": "Прозвучала фраза: «Curiosity and spaced repetition strengthen our long-term memory.» (Любознательность и интервальное повторение укрепляют нашу долговременную память.)."
            },
            {
                "id": "unit_c1_45_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Нейронаука • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Learning words in context strengthens our long-term memory.",
                "translationRu": "Изучение слов в контексте укрепляет нашу долговременную память.",
                "correct": "Learning words in context strengthens our long-term memory.",
                "explanation": "Отличное произношение! «Learning words in context strengthens our long-term memory.» — Изучение слов в контексте укрепляет нашу долговременную память.."
            }
        ]
    },
    {
        "id": "unit_c1_46",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 46,
        "nodeType": "five_stage",
        "titleRu": "Гастрономия",
        "titleEn": "Гастрономия",
        "icon": "🍲",
        "sources": [
            "Тема: Гастрономия",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "flavour",
                "tr": "[ˈfleɪvə]",
                "ru": "вкус, оттенок вкуса, аромат",
                "ex": "Fresh basil gives the sauce a delicate flavour.",
                "example": "Fresh basil gives the sauce a delicate flavour."
            },
            {
                "en": "ingredient",
                "tr": "[ɪnˈɡriːdiənt]",
                "ru": "ингредиент",
                "ex": "Only seasonal ingredients are used in this kitchen.",
                "example": "Only seasonal ingredients are used in this kitchen."
            },
            {
                "en": "simmer",
                "tr": "[ˈsɪmə]",
                "ru": "томиться на медленном огне",
                "ex": "Let the broth simmer gently for forty minutes.",
                "example": "Let the broth simmer gently for forty minutes."
            },
            {
                "en": "exquisite",
                "tr": "[ɪkˈskwɪzɪt]",
                "ru": "изысканный, утончённый",
                "ex": "The chef presented an exquisite seafood dish.",
                "example": "The chef presented an exquisite seafood dish."
            },
            {
                "en": "blend",
                "tr": "[blend]",
                "ru": "сочетать, смешивать; гармоничное сочетание",
                "ex": "The recipe is a harmonious blend of spices and citrus.",
                "example": "The recipe is a harmonious blend of spices and citrus."
            },
            {
                "en": "culinary",
                "tr": "[ˈkʌlɪnəri]",
                "ru": "кулинарный, гастрономический (C1)",
                "ex": "The region is famous for its culinary heritage.",
                "example": "The region is famous for its culinary heritage."
            },
            {
                "en": "fermentation",
                "tr": "[ˌfɜːmenˈteɪʃn]",
                "ru": "ферментация (C1)",
                "ex": "Slow fermentation gives sourdough bread its depth.",
                "example": "Slow fermentation gives sourdough bread its depth."
            },
            {
                "en": "delicacy",
                "tr": "[ˈdelɪkəsi]",
                "ru": "деликатес; тонкость (C1)",
                "ex": "Truffles are considered a seasonal delicacy.",
                "example": "Truffles are considered a seasonal delicacy."
            },
            {
                "en": "savoury",
                "tr": "[ˈseɪvəri]",
                "ru": "пикантный, несладкий (о блюде) (C1)",
                "ex": "She prefers savoury pastries with herbs and cheese.",
                "example": "She prefers savoury pastries with herbs and cheese."
            },
            {
                "en": "artisan",
                "tr": "[ˌɑːtɪˈzæn]",
                "ru": "ремесленный, авторской ручной работы (C1)",
                "ex": "We visited an artisan bakery in the old port.",
                "example": "We visited an artisan bakery in the old port."
            }
        ],
        "readingPassage": {
            "titleEn": "Секрет средиземноморского бульона",
            "titleRu": "Гастрономия",
            "audioFull": "Great gastronomy rarely requires complicated tricks; instead, it relies on respect for every seasonal ingredient. In a small family bistro in Marseille, the chef lets the herb broth simmer slowly for hours. So exquisite was the delicate flavour of saffron and sea fennel that food critics called the dish a poem of the sea.",
            "paragraphs": [
                {
                    "en": "Great gastronomy rarely requires complicated tricks; instead, it relies on respect for every seasonal ingredient. In a small family bistro in Marseille, the chef lets the herb broth simmer slowly for hours.",
                    "ru": ""
                },
                {
                    "en": "So exquisite was the delicate flavour of saffron and sea fennel that food critics called the dish a poem of the sea.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Инверсия с So / Such (So exquisite was the flavour that...) — язык ресторанных критиков",
            "skyNote": "Чтобы ярко описать впечатление от изысканного блюда, на уровне C1 прилагательное со словом So выносится в самое начало фразы, после чего идёт обратный порядок слов: So exquisite was the flavour that everyone asked for the recipe!",
            "summary": "Чтобы ярко описать впечатление от изысканного блюда, на уровне C1 прилагательное со словом So выносится в самое начало фразы, после чего идёт обратный порядок слов: So exquisite was the flavour that everyone asked for the recipe!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Гастрономия» (C1)",
                    "example": "Fresh basil gives the sauce a delicate flavour.",
                    "note": "Формула: So exquisite was the flavour that everyone asked for the recipe!. Чтобы ярко описать впечатление от изысканного блюда, на уровне C1 прилагательное со словом So выносится в самое начало фразы, после чего идёт обратный порядок слов: So exquisite was the flavour that everyone asked for the recipe!"
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "Only seasonal ingredients are used in this kitchen.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "So exquisite was the flavour that everyone asked for the recipe!",
                    "example": "Fresh basil gives the sauce a delicate flavour.",
                    "note": "Инверсия с So / Such (So exquisite was the flavour that...) — язык ресторанных критиков"
                }
            ],
            "cambridgeTip": "В теме «Гастрономия» мы сразу применяем правило (Инверсия с So / Such (So exquisite was the flavour that...) — язык ресторанных критиков) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_46_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Гастрономия • C1",
                "prompt": "Опиши блюдо в высоком стиле с инверсией после So exquisite:\n«So exquisite ___ the blend of local ingredients that the restaurant won a prestigious award.»",
                "options": [
                    "was",
                    "it was",
                    "were",
                    "did"
                ],
                "correct": "was",
                "explanation": "При вынесении So exquisite в начало фразы глагол-связка was ставится сразу перед подлежащим the blend."
            },
            {
                "id": "unit_c1_46_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Гастрономия • Конструктор фразы",
                "prompt": "Собери фразу: «Свежие сезонные ингредиенты придают блюду утончённый вкус»",
                "words": [
                    "Fresh",
                    "seasonal",
                    "ingredients",
                    "give",
                    "an",
                    "exquisite",
                    "flavour.",
                    "gives",
                    "simmering"
                ],
                "distractors": [
                    "gives",
                    "simmering"
                ],
                "correct": "Fresh seasonal ingredients give an exquisite flavour.",
                "explanation": "Ingredients (множественное число) согласуется с глаголом give.",
                "promptRu": "Собери фразу: «Свежие сезонные ингредиенты придают блюду утончённый вкус»",
                "correctSentence": "Fresh seasonal ingredients give an exquisite flavour."
            },
            {
                "id": "unit_c1_46_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Гастрономия • Чтение",
                "storyTitle": "Секрет средиземноморского бульона",
                "paragraphs": [
                    {
                        "en": "Great gastronomy rarely requires complicated tricks; instead, it relies on respect for every seasonal ingredient. In a small family bistro in Marseille, the chef lets the herb broth simmer slowly for hours.",
                        "ru": ""
                    },
                    {
                        "en": "So exquisite was the delicate flavour of saffron and sea fennel that food critics called the dish a poem of the sea.",
                        "ru": ""
                    }
                ],
                "prompt": "На чём, согласно тексту, держится высокая гастрономия?",
                "options": [
                    "На уважении к каждому сезонному ингредиенту и бережном томлении",
                    "На искусственных красителях",
                    "На скорости подачи за 1 минуту"
                ],
                "correct": "На уважении к каждому сезонному ингредиенту и бережном томлении",
                "explanation": "В тексте: it relies on respect for every seasonal ingredient."
            },
            {
                "id": "unit_c1_46_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Гастрономия • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "So exquisite was the flavour that everyone asked for the recipe.",
                "translationRu": "Столь изысканным был вкус, что все попросили рецепт.",
                "options": [
                    "So exquisite was the flavour that everyone asked for the recipe.",
                    "Use only fresh seasonal ingredients.",
                    "Let the sauce simmer gently."
                ],
                "correct": "So exquisite was the flavour that everyone asked for the recipe.",
                "explanation": "Прозвучала фраза: «So exquisite was the flavour that everyone asked for the recipe.» (Столь изысканным был вкус, что все попросили рецепт.)."
            },
            {
                "id": "unit_c1_46_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Гастрономия • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Fresh seasonal ingredients create a harmonious blend of flavours.",
                "translationRu": "Свежие сезонные ингредиенты создают гармоничное сочетание вкусов.",
                "correct": "Fresh seasonal ingredients create a harmonious blend of flavours.",
                "explanation": "Отличное произношение! «Fresh seasonal ingredients create a harmonious blend of flavours.» — Свежие сезонные ингредиенты создают гармоничное сочетание вкусов.."
            }
        ]
    },
    {
        "id": "unit_c1_47",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 47,
        "nodeType": "five_stage",
        "titleRu": "Право",
        "titleEn": "Право",
        "icon": "⚖️",
        "sources": [
            "Тема: Право",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "justice",
                "tr": "[ˈdʒʌstɪs]",
                "ru": "справедливость, правосудие",
                "ex": "Fair laws ensure justice for every citizen.",
                "example": "Fair laws ensure justice for every citizen."
            },
            {
                "en": "evidence",
                "tr": "[ˈevɪdəns]",
                "ru": "улики, доказательства в суде",
                "ex": "In light of new evidence, the case was reviewed.",
                "example": "In light of new evidence, the case was reviewed."
            },
            {
                "en": "witness",
                "tr": "[ˈwɪtnəs]",
                "ru": "свидетель",
                "ex": "The witness testified that he had seen the document.",
                "example": "The witness testified that he had seen the document."
            },
            {
                "en": "verdict",
                "tr": "[ˈvɜːdɪkt]",
                "ru": "вердикт, решение суда",
                "ex": "The jury reached a unanimous verdict.",
                "example": "The jury reached a unanimous verdict."
            },
            {
                "en": "clause",
                "tr": "[klɔːz]",
                "ru": "пункт договора, оговорка",
                "ex": "Read every clause of the contract carefully.",
                "example": "Read every clause of the contract carefully."
            },
            {
                "en": "legislation",
                "tr": "[ˌledʒɪsˈleɪʃn]",
                "ru": "законодательство (C1)",
                "ex": "New environmental legislation protects marine reserves.",
                "example": "New environmental legislation protects marine reserves."
            },
            {
                "en": "testimony",
                "tr": "[ˈtestɪməni]",
                "ru": "свидетельские показания (C1)",
                "ex": "The expert's testimony clarified the technical facts.",
                "example": "The expert's testimony clarified the technical facts."
            },
            {
                "en": "liability",
                "tr": "[ˌlaɪəˈbɪləti]",
                "ru": "юридическая ответственность (C1)",
                "ex": "This clause limits financial liability.",
                "example": "This clause limits financial liability."
            },
            {
                "en": "precedent",
                "tr": "[ˈpresɪdənt]",
                "ru": "судебный прецедент (C1)",
                "ex": "The ruling set an important legal precedent.",
                "example": "The ruling set an important legal precedent."
            },
            {
                "en": "impartial",
                "tr": "[ɪmˈpɑːʃl]",
                "ru": "беспристрастный, непредвзятый (C1)",
                "ex": "A judge must remain completely impartial.",
                "example": "A judge must remain completely impartial."
            }
        ],
        "readingPassage": {
            "titleEn": "Сила точной формулировки",
            "titleRu": "Право",
            "audioFull": "When signing an international publishing contract, authors often focus only on the main numbers. However, legal advisors always examine every single clause. 'Should any dispute arise in the future, clear wording protects both partners and ensures fairness and justice,' explained our lawyer before we signed the agreement.",
            "paragraphs": [
                {
                    "en": "When signing an international publishing contract, authors often focus only on the main numbers. However, legal advisors always examine every single clause.",
                    "ru": ""
                },
                {
                    "en": "'Should any dispute arise in the future, clear wording protects both partners and ensures fairness and justice,' explained our lawyer before we signed the agreement.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Формальные условные обороты без if (Were you to sign / Should any dispute arise / Had the witness...)",
            "skyNote": "В юридических документах и деловой переписке C1 союз if часто опускается, а на первое место выносится вспомогательный глагол: Should you have any questions (Если у вас возникнут вопросы...), Were we to change this clause (Если бы мы изменили этот пункт...), Had the witness arrived earlier (Если бы свидетель прибыл раньше...).",
            "summary": "В юридических документах и деловой переписке C1 союз if часто опускается, а на первое место выносится вспомогательный глагол: Should you have any questions (Если у вас возникнут вопросы...), Were we to change this clause (Если бы мы изменили этот пункт...), Had the witness arrived earlier (Если бы свидетель прибыл раньше...).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Право» (C1)",
                    "example": "Fair laws ensure justice for every citizen.",
                    "note": "Формула: Should any question arise, please check the contract clause. В юридических документах и деловой переписке C1 союз if часто опускается, а на первое место выносится вспомогательный глагол: Should you have any questions (Если у вас возникнут вопросы...), Were we to change this clause (Если бы мы изменили этот пункт...), Had the witness arrived earlier (Если бы свидетель прибыл раньше...)."
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "In light of new evidence, the case was reviewed.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Should any question arise, please check the contract clause",
                    "example": "Fair laws ensure justice for every citizen.",
                    "note": "Формальные условные обороты без if (Were you to sign / Should any dispute arise / Had the witness...)"
                }
            ],
            "cambridgeTip": "В теме «Право» мы сразу применяем правило (Формальные условные обороты без if (Were you to sign / Should any dispute arise / Had the witness...)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_47_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Право • C1",
                "prompt": "Выбери верное слово для делового письма (условие без if):\n«___ you require any clarification regarding this clause, our legal team will assist you.»",
                "options": [
                    "Should",
                    "Would",
                    "Did",
                    "Unless"
                ],
                "correct": "Should",
                "explanation": "Формальная инверсия первого типа условных без if начинается с модального глагола Should (Should you require... = If you should require...)."
            },
            {
                "id": "unit_c1_47_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Право • Конструктор фразы",
                "prompt": "Собери фразу: «Пожалуйста, внимательно прочитайте каждый пункт договора»",
                "words": [
                    "Please",
                    "read",
                    "every",
                    "clause",
                    "of",
                    "the",
                    "contract",
                    "carefully.",
                    "clauses",
                    "verdict"
                ],
                "distractors": [
                    "clauses",
                    "verdict"
                ],
                "correct": "Please read every clause of the contract carefully.",
                "explanation": "После слова every существительное всегда стоит в единственном числе (every clause).",
                "promptRu": "Собери фразу: «Пожалуйста, внимательно прочитайте каждый пункт договора»",
                "correctSentence": "Please read every clause of the contract carefully."
            },
            {
                "id": "unit_c1_47_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Право • Чтение",
                "storyTitle": "Сила точной формулировки",
                "paragraphs": [
                    {
                        "en": "When signing an international publishing contract, authors often focus only on the main numbers. However, legal advisors always examine every single clause.",
                        "ru": ""
                    },
                    {
                        "en": "'Should any dispute arise in the future, clear wording protects both partners and ensures fairness and justice,' explained our lawyer before we signed the agreement.",
                        "ru": ""
                    }
                ],
                "prompt": "Почему юристы советуют внимательно проверять каждый пункт договора?",
                "options": [
                    "Чёткие формулировки защищают обе стороны, если в будущем возникнет спор",
                    "Чтобы увеличить количество страниц",
                    "Ради красивого шрифта"
                ],
                "correct": "Чёткие формулировки защищают обе стороны, если в будущем возникнет спор",
                "explanation": "В тексте: Should any dispute arise in the future, clear wording protects both partners."
            },
            {
                "id": "unit_c1_47_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Право • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Should any question arise, please review this clause of the contract.",
                "translationRu": "Если возникнет какой-либо вопрос, пожалуйста, проверьте этот пункт договора.",
                "options": [
                    "Should any question arise, please review this clause of the contract.",
                    "The witness gave honest testimony.",
                    "The jury reached a fair verdict."
                ],
                "correct": "Should any question arise, please review this clause of the contract.",
                "explanation": "Прозвучала фраза: «Should any question arise, please review this clause of the contract.» (Если возникнет какой-либо вопрос, пожалуйста, проверьте этот пункт договора.)."
            },
            {
                "id": "unit_c1_47_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Право • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Clear wording in every clause ensures fairness and justice.",
                "translationRu": "Чёткие формулировки в каждом пункте обеспечивают честность и справедливость.",
                "correct": "Clear wording in every clause ensures fairness and justice.",
                "explanation": "Отличное произношение! «Clear wording in every clause ensures fairness and justice.» — Чёткие формулировки в каждом пункте обеспечивают честность и справедливость.."
            }
        ]
    },
    {
        "id": "unit_c1_48",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 48,
        "nodeType": "five_stage",
        "titleRu": "Кинематограф",
        "titleEn": "Кинематограф",
        "icon": "🎞️",
        "sources": [
            "Тема: Кинематограф",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "cinematography",
                "tr": "[ˌsɪnəməˈtɒɡrəfi]",
                "ru": "операторское искусство",
                "ex": "Breathtaking cinematography makes the film unforgettable.",
                "example": "Breathtaking cinematography makes the film unforgettable."
            },
            {
                "en": "protagonist",
                "tr": "[prəˈtæɡənɪst]",
                "ru": "главный герой (протагонист)",
                "ex": "The protagonist undergoes a deep inner transformation.",
                "example": "The protagonist undergoes a deep inner transformation."
            },
            {
                "en": "metaphor",
                "tr": "[ˈmetəfə]",
                "ru": "метафора",
                "ex": "The ocean serves as a visual metaphor for freedom.",
                "example": "The ocean serves as a visual metaphor for freedom."
            },
            {
                "en": "script",
                "tr": "[skrɪpt]",
                "ru": "сценарий",
                "ex": "Little did the writer know that her script would win an Oscar.",
                "example": "Little did the writer know that her script would win an Oscar."
            },
            {
                "en": "critic",
                "tr": "[ˈkrɪtɪk]",
                "ru": "кинокритик",
                "ex": "Both critics and viewers praised the subtle acting.",
                "example": "Both critics and viewers praised the subtle acting."
            },
            {
                "en": "juxtaposition",
                "tr": "[ˌdʒʌkstəpəˈzɪʃn]",
                "ru": "контрастное сопоставление (C1)",
                "ex": "The director uses a striking juxtaposition of light and shadow.",
                "example": "The director uses a striking juxtaposition of light and shadow."
            },
            {
                "en": "motif",
                "tr": "[məʊˈtiːf]",
                "ru": "лейтмотив, повторяющийся образ (C1)",
                "ex": "Ocean waves appear as a recurring motif.",
                "example": "Ocean waves appear as a recurring motif."
            },
            {
                "en": "evocative",
                "tr": "[ɪˈvɒkətɪv]",
                "ru": "пробуждающий живые образы (C1)",
                "ex": "The film's evocative score won universal acclaim.",
                "example": "The film's evocative score won universal acclaim."
            },
            {
                "en": "avant-garde",
                "tr": "[ˌævɒ̃ˈɡɑːd]",
                "ru": "авангардный (C1)",
                "ex": "Her early short films were boldly avant-garde.",
                "example": "Her early short films were boldly avant-garde."
            },
            {
                "en": "screenplay",
                "tr": "[ˈskriːnpleɪ]",
                "ru": "киносценарий (C1)",
                "ex": "The adapted screenplay stayed true to the novel.",
                "example": "The adapted screenplay stayed true to the novel."
            }
        ],
        "readingPassage": {
            "titleEn": "Сценарий из приморского кафе",
            "titleRu": "Кинематограф",
            "audioFull": "Five years ago, Elena was writing a film script in a small cafe by the lighthouse. Her story followed a protagonist who restores an old sailboat and rediscovers hope. Little did she know back then that her visual metaphor of the sea and luminous cinematography would win the hearts of film critics around the world.",
            "paragraphs": [
                {
                    "en": "Five years ago, Elena was writing a film script in a small cafe by the lighthouse. Her story followed a protagonist who restores an old sailboat and rediscovers hope.",
                    "ru": ""
                },
                {
                    "en": "Little did she know back then that her visual metaphor of the sea and luminous cinematography would win the hearts of film critics around the world.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Экспрессивный оборот Little did they know... («Они даже не подозревали, что...»)",
            "skyNote": "Рассказывая вдохновляющую историю успеха сценариста или режиссёра, носители уровня C1 обожают начинать фразу с оборота Little did she know / Little did the critics expect... («Она и представить не могла...»), после которого идёт инверсия с did!",
            "summary": "Рассказывая вдохновляющую историю успеха сценариста или режиссёра, носители уровня C1 обожают начинать фразу с оборота Little did she know / Little did the critics expect... («Она и представить не могла...»), после которого идёт инверсия с did!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Кинематограф» (C1)",
                    "example": "Breathtaking cinematography makes the film unforgettable.",
                    "note": "Формула: Little did the author know that her script would become a classic!. Рассказывая вдохновляющую историю успеха сценариста или режиссёра, носители уровня C1 обожают начинать фразу с оборота Little did she know / Little did the critics expect... («Она и представить не могла...»), после которого идёт инверсия с did!"
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "The protagonist undergoes a deep inner transformation.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Little did the author know that her script would become a classic!",
                    "example": "Breathtaking cinematography makes the film unforgettable.",
                    "note": "Экспрессивный оборот Little did they know... («Они даже не подозревали, что...»)"
                }
            ],
            "cambridgeTip": "В теме «Кинематограф» мы сразу применяем правило (Экспрессивный оборот Little did they know... («Они даже не подозревали, что...»)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_48_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Кинематограф • C1",
                "prompt": "Продолжи историю успеха сценариста с помощью инверсии после Little:\n«Little ___ the young director know that his debut film would win the Golden Lion in Venice.»",
                "options": [
                    "did",
                    "had",
                    "was",
                    "does"
                ],
                "correct": "did",
                "explanation": "После отрицательного наречия Little в начале предложения в Past Simple используется инверсия со вспомогательным глаголом did: Little did the young director know..."
            },
            {
                "id": "unit_c1_48_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Кинематограф • Конструктор фразы",
                "prompt": "Собери фразу: «В этом фильме океан служит красивой метафорой свободы»",
                "words": [
                    "The",
                    "ocean",
                    "serves",
                    "as",
                    "a",
                    "metaphor",
                    "for",
                    "freedom.",
                    "serve",
                    "critics"
                ],
                "distractors": [
                    "serve",
                    "critics"
                ],
                "correct": "The ocean serves as a metaphor for freedom.",
                "explanation": "Serve as a metaphor for... — устойчивое выражение уровня C1.",
                "promptRu": "Собери фразу: «В этом фильме океан служит красивой метафорой свободы»",
                "correctSentence": "The ocean serves as a metaphor for freedom."
            },
            {
                "id": "unit_c1_48_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Кинематограф • Чтение",
                "storyTitle": "Сценарий из приморского кафе",
                "paragraphs": [
                    {
                        "en": "Five years ago, Elena was writing a film script in a small cafe by the lighthouse. Her story followed a protagonist who restores an old sailboat and rediscovers hope.",
                        "ru": ""
                    },
                    {
                        "en": "Little did she know back then that her visual metaphor of the sea and luminous cinematography would win the hearts of film critics around the world.",
                        "ru": ""
                    }
                ],
                "prompt": "О ком рассказывал сценарий, который Элена писала в кафе у маяка?",
                "options": [
                    "О герое, который восстанавливает старый парусник и вновь обретает надежду",
                    "О космических пиратах",
                    "О роботах на заводе"
                ],
                "correct": "О герое, который восстанавливает старый парусник и вновь обретает надежду",
                "explanation": "В тексте: a protagonist who restores an old sailboat and rediscovers hope."
            },
            {
                "id": "unit_c1_48_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Кинематограф • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Little did she know that her script would inspire millions of viewers.",
                "translationRu": "Она даже не подозревала, что её сценарий вдохновит миллионы зрителей.",
                "options": [
                    "Little did she know that her script would inspire millions of viewers.",
                    "Critics praised the cinematography.",
                    "The protagonist found his way home."
                ],
                "correct": "Little did she know that her script would inspire millions of viewers.",
                "explanation": "Прозвучала фраза: «Little did she know that her script would inspire millions of viewers.» (Она даже не подозревала, что её сценарий вдохновит миллионы зрителей.)."
            },
            {
                "id": "unit_c1_48_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Кинематограф • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Breathtaking cinematography and subtle metaphors make this film a classic.",
                "translationRu": "Захватывающая операторская работа и тонкие метафоры делают этот фильм классикой.",
                "correct": "Breathtaking cinematography and subtle metaphors make this film a classic.",
                "explanation": "Отличное произношение! «Breathtaking cinematography and subtle metaphors make this film a classic.» — Захватывающая операторская работа и тонкие метафоры делают этот фильм классикой.."
            }
        ]
    },
    {
        "id": "unit_c1_49",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 49,
        "nodeType": "five_stage",
        "titleRu": "Бионика",
        "titleEn": "Бионика",
        "icon": "🦋",
        "sources": [
            "Тема: Бионика",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "mimic",
                "tr": "[ˈmɪmɪk]",
                "ru": "имитировать, повторять устройство природы",
                "ex": "Engineers mimic shark skin to reduce water resistance.",
                "example": "Engineers mimic shark skin to reduce water resistance."
            },
            {
                "en": "surface",
                "tr": "[ˈsɜːfɪs]",
                "ru": "поверхность",
                "ex": "Lotus leaves have a self-cleaning surface.",
                "example": "Lotus leaves have a self-cleaning surface."
            },
            {
                "en": "aerodynamic",
                "tr": "[ˌeərəʊdaɪˈnæmɪk]",
                "ru": "аэродинамический",
                "ex": "High-speed trains copied the aerodynamic beak of the kingfisher.",
                "example": "High-speed trains copied the aerodynamic beak of the kingfisher."
            },
            {
                "en": "structure",
                "tr": "[ˈstrʌktʃə]",
                "ru": "структура, строение",
                "ex": "Honeycomb structures are remarkably light and strong.",
                "example": "Honeycomb structures are remarkably light and strong."
            },
            {
                "en": "efficient",
                "tr": "[ɪˈfɪʃnt]",
                "ru": "эффективный, экономичный",
                "ex": "Nature has created the most efficient designs.",
                "example": "Nature has created the most efficient designs."
            },
            {
                "en": "biomimicry",
                "tr": "[ˌbaɪəʊˈmɪmɪkri]",
                "ru": "биомимикрия, бионика (C1)",
                "ex": "Biomimicry translates natural forms into architecture.",
                "example": "Biomimicry translates natural forms into architecture."
            },
            {
                "en": "replicate",
                "tr": "[ˈreplɪkeɪt]",
                "ru": "воссоздавать, точно повторять (C1)",
                "ex": "Scientists replicated the lotus leaf's micro-texture.",
                "example": "Scientists replicated the lotus leaf's micro-texture."
            },
            {
                "en": "friction",
                "tr": "[ˈfrɪkʃn]",
                "ru": "трение, сопротивление среды (C1)",
                "ex": "Ribbed shark skin significantly reduces water friction.",
                "example": "Ribbed shark skin significantly reduces water friction."
            },
            {
                "en": "mechanism",
                "tr": "[ˈmekənɪzəm]",
                "ru": "природный механизм (C1)",
                "ex": "Each plant has a natural mechanism for saving water.",
                "example": "Each plant has a natural mechanism for saving water."
            },
            {
                "en": "synthetic",
                "tr": "[sɪnˈθetɪk]",
                "ru": "синтетический, искусственно созданный (C1)",
                "ex": "Synthetic fibres inspired by spider silk are ultra-strong.",
                "example": "Synthetic fibres inspired by spider silk are ultra-strong."
            }
        ],
        "readingPassage": {
            "titleEn": "Инженеры учатся у дельфинов и птиц",
            "titleRu": "Бионика",
            "audioFull": "Biomimicry is the science of learning from nature's genius. For instance, Japanese engineers redesigned the nose of high-speed trains to mimic the aerodynamic beak of a kingfisher bird. Not only did this natural structure eliminate tunnel noise, but it also made the train faster and far more energy-efficient.",
            "paragraphs": [
                {
                    "en": "Biomimicry is the science of learning from nature's genius. For instance, Japanese engineers redesigned the nose of high-speed trains to mimic the aerodynamic beak of a kingfisher bird.",
                    "ru": ""
                },
                {
                    "en": "Not only did this natural structure eliminate tunnel noise, but it also made the train faster and far more energy-efficient.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Конструкция Not only... but also с инверсией — двойное преимущество природы",
            "skyNote": "Описывая инженерные чудеса бионики («Природная структура не только лёгкая, но и невероятно прочная!»), вынеси Not only в начало фразы и сделай инверсию в первой части: Not only does this surface repel water, but it also reduces friction!",
            "summary": "Описывая инженерные чудеса бионики («Природная структура не только лёгкая, но и невероятно прочная!»), вынеси Not only в начало фразы и сделай инверсию в первой части: Not only does this surface repel water, but it also reduces friction!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Бионика» (C1)",
                    "example": "Engineers mimic shark skin to reduce water resistance.",
                    "note": "Формула: Not only does this structure save energy, but it also reduces noise. Описывая инженерные чудеса бионики («Природная структура не только лёгкая, но и невероятно прочная!»), вынеси Not only в начало фразы и сделай инверсию в первой части: Not only does this surface repel water, but it also reduces friction!"
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "Lotus leaves have a self-cleaning surface.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Not only does this structure save energy, but it also reduces noise",
                    "example": "Engineers mimic shark skin to reduce water resistance.",
                    "note": "Конструкция Not only... but also с инверсией — двойное преимущество природы"
                }
            ],
            "cambridgeTip": "В теме «Бионика» мы сразу применяем правило (Конструкция Not only... but also с инверсией — двойное преимущество природы) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_49_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Бионика • C1",
                "prompt": "Построй предложение о высокоскоростном поезде с инверсией после Not only:\n«Not only ___ the kingfisher-inspired train move faster, but it also uses fifteen percent less electricity.»",
                "options": [
                    "does",
                    "do",
                    "is",
                    "has"
                ],
                "correct": "does",
                "explanation": "После Not only в начале предложения для единственного числа (the train) в Present Simple используется инверсия с does: Not only does the train move..."
            },
            {
                "id": "unit_c1_49_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Бионика • Конструктор фразы",
                "prompt": "Собери фразу: «Инженеры копируют эффективные структуры живой природы»",
                "words": [
                    "Engineers",
                    "mimic",
                    "efficient",
                    "structures",
                    "found",
                    "in",
                    "nature.",
                    "mimics",
                    "surface"
                ],
                "distractors": [
                    "mimics",
                    "surface"
                ],
                "correct": "Engineers mimic efficient structures found in nature.",
                "explanation": "Found in nature — причастный оборот («найденные в природе»).",
                "promptRu": "Собери фразу: «Инженеры копируют эффективные структуры живой природы»",
                "correctSentence": "Engineers mimic efficient structures found in nature."
            },
            {
                "id": "unit_c1_49_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Бионика • Чтение",
                "storyTitle": "Инженеры учатся у дельфинов и птиц",
                "paragraphs": [
                    {
                        "en": "Biomimicry is the science of learning from nature's genius. For instance, Japanese engineers redesigned the nose of high-speed trains to mimic the aerodynamic beak of a kingfisher bird.",
                        "ru": ""
                    },
                    {
                        "en": "Not only did this natural structure eliminate tunnel noise, but it also made the train faster and far more energy-efficient.",
                        "ru": ""
                    }
                ],
                "prompt": "У какой птицы японские инженеры позаимствовали аэродинамическую форму носа скоростного поезда?",
                "options": [
                    "У зимородка (kingfisher)",
                    "У пингвина",
                    "У страуса"
                ],
                "correct": "У зимородка (kingfisher)",
                "explanation": "В тексте: to mimic the aerodynamic beak of a kingfisher bird."
            },
            {
                "id": "unit_c1_49_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Бионика • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Not only does this aerodynamic structure reduce noise, but it also saves energy.",
                "translationRu": "Эта аэродинамическая структура не только снижает шум, но и экономит энергию.",
                "options": [
                    "Not only does this aerodynamic structure reduce noise, but it also saves energy.",
                    "Lotus leaves have a clean surface.",
                    "Engineers mimic nature's designs."
                ],
                "correct": "Not only does this aerodynamic structure reduce noise, but it also saves energy.",
                "explanation": "Прозвучала фраза: «Not only does this aerodynamic structure reduce noise, but it also saves energy.» (Эта аэродинамическая структура не только снижает шум, но и экономит энергию.)."
            },
            {
                "id": "unit_c1_49_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Бионика • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Engineers mimic nature to create aerodynamic and efficient structures.",
                "translationRu": "Инженеры учатся у природы, чтобы создавать аэродинамичные и эффективные конструкции.",
                "correct": "Engineers mimic nature to create aerodynamic and efficient structures.",
                "explanation": "Отличное произношение! «Engineers mimic nature to create aerodynamic and efficient structures.» — Инженеры учатся у природы, чтобы создавать аэродинамичные и эффективные конструкции.."
            }
        ]
    },
    {
        "id": "unit_c1_50",
        "zoneId": "twilight_c1",
        "cefr": "C1",
        "number": 50,
        "nodeType": "five_stage",
        "titleRu": "Океанология",
        "titleEn": "Океанология",
        "icon": "🌊",
        "sources": [
            "Тема: Океанология",
            "Уровень C1"
        ],
        "vocab": [
            {
                "en": "current",
                "tr": "[ˈkʌrənt]",
                "ru": "океаническое течение",
                "ex": "Warm ocean currents regulate the planet's climate.",
                "example": "Warm ocean currents regulate the planet's climate."
            },
            {
                "en": "tide",
                "tr": "[taɪd]",
                "ru": "прилив и отлив",
                "ex": "At high tide, the lagoon becomes deep and calm.",
                "example": "At high tide, the lagoon becomes deep and calm."
            },
            {
                "en": "biodiversity",
                "tr": "[ˌbaɪəʊdaɪˈvɜːsəti]",
                "ru": "биоразнообразие",
                "ex": "Coral reefs support extraordinary marine biodiversity.",
                "example": "Coral reefs support extraordinary marine biodiversity."
            },
            {
                "en": "depth",
                "tr": "[depθ]",
                "ru": "глубина",
                "ex": "Even at extreme depths, life thrives.",
                "example": "Even at extreme depths, life thrives."
            },
            {
                "en": "phenomenon",
                "tr": "[fəˈnɒmɪnən]",
                "ru": "уникальное природное явление (феномен)",
                "ex": "Bioluminescence is a fascinating natural phenomenon.",
                "example": "Bioluminescence is a fascinating natural phenomenon."
            },
            {
                "en": "ecosystem",
                "tr": "[ˈiːkəʊsɪstəm]",
                "ru": "экосистема (C1)",
                "ex": "Coral reefs form a delicate marine ecosystem.",
                "example": "Coral reefs form a delicate marine ecosystem."
            },
            {
                "en": "salinity",
                "tr": "[səˈlɪnəti]",
                "ru": "солёность воды (C1)",
                "ex": "Ocean currents depend on temperature and salinity.",
                "example": "Ocean currents depend on temperature and salinity."
            },
            {
                "en": "abyssal",
                "tr": "[əˈbɪsl]",
                "ru": "абиссальный, глубоководный (C1)",
                "ex": "Abyssal plains lie four thousand metres below the surface.",
                "example": "Abyssal plains lie four thousand metres below the surface."
            },
            {
                "en": "equilibrium",
                "tr": "[ˌiːkwɪˈlɪbriəm]",
                "ru": "динамическое равновесие, баланс (C1)",
                "ex": "Marine life maintains the planet's thermal equilibrium.",
                "example": "Marine life maintains the planet's thermal equilibrium."
            },
            {
                "en": "bioluminescence",
                "tr": "[ˌbaɪəʊluːmɪˈnesns]",
                "ru": "биолюминесценция (свечение) (C1)",
                "ex": "Bioluminescence illuminates the midnight zone.",
                "example": "Bioluminescence illuminates the midnight zone."
            }
        ],
        "readingPassage": {
            "titleEn": "Светящееся сердце глубин",
            "titleRu": "Океанология",
            "audioFull": "Far below the sunlit waves, deep ocean currents carry vital nutrients around the globe. Although these waters seem dark, they are known to support astonishing biodiversity. One of the most magical sights at great depth is bioluminescence — a natural phenomenon in which jellyfish and deep-sea fish create their own gentle blue light.",
            "paragraphs": [
                {
                    "en": "Far below the sunlit waves, deep ocean currents carry vital nutrients around the globe. Although these waters seem dark, they are known to support astonishing biodiversity.",
                    "ru": ""
                },
                {
                    "en": "One of the most magical sights at great depth is bioluminescence — a natural phenomenon in which jellyfish and deep-sea fish create their own gentle blue light.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Академические пассивные обороты (is known to regulate / is believed to support)",
            "skyNote": "В научной речи C1 вместо «Все знают, что течения регулируют климат» используется элегантный безличный оборот: Subject + is known / is believed / is thought + to + инфинитив: Warm ocean currents are known to regulate the global climate!",
            "summary": "В научной речи C1 вместо «Все знают, что течения регулируют климат» используется элегантный безличный оборот: Subject + is known / is believed / is thought + to + инфинитив: Warm ocean currents are known to regulate the global climate!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Океанология» (C1)",
                    "example": "Warm ocean currents regulate the planet's climate.",
                    "note": "Формула: Coral reefs are known to support incredible biodiversity. В научной речи C1 вместо «Все знают, что течения регулируют климат» используется элегантный безличный оборот: Subject + is known / is believed / is thought + to + инфинитив: Warm ocean currents are known to regulate the global climate!"
                },
                {
                    "label": "🌊 Живой пример на лексике C1",
                    "example": "At high tide, the lagoon becomes deep and calm.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C1 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Coral reefs are known to support incredible biodiversity",
                    "example": "Warm ocean currents regulate the planet's climate.",
                    "note": "Академические пассивные обороты (is known to regulate / is believed to support)"
                }
            ],
            "cambridgeTip": "В теме «Океанология» мы сразу применяем правило (Академические пассивные обороты (is known to regulate / is believed to support)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c1_50_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Океанология • C1",
                "prompt": "Преобразуй научный факт в академическую конструкцию C1:\n«Warm ocean currents are known ___ the climate of entire continents.»",
                "options": [
                    "to regulate",
                    "regulating",
                    "regulated",
                    "regulate"
                ],
                "correct": "to regulate",
                "explanation": "После пассивного оборота are known / are believed используется инфинитив с частицей to: are known to regulate."
            },
            {
                "id": "unit_c1_50_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Океанология • Конструктор фразы",
                "prompt": "Собери фразу: «Коралловые рифы поддерживают удивительное морское биоразнообразие»",
                "words": [
                    "Coral",
                    "reefs",
                    "support",
                    "extraordinary",
                    "marine",
                    "biodiversity.",
                    "supports",
                    "phenomenon"
                ],
                "distractors": [
                    "supports",
                    "phenomenon"
                ],
                "correct": "Coral reefs support extraordinary marine biodiversity.",
                "explanation": "Подлежащее во множественном числе (Coral reefs) согласуется с глаголом support.",
                "promptRu": "Собери фразу: «Коралловые рифы поддерживают удивительное морское биоразнообразие»",
                "correctSentence": "Coral reefs support extraordinary marine biodiversity."
            },
            {
                "id": "unit_c1_50_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Океанология • Чтение",
                "storyTitle": "Светящееся сердце глубин",
                "paragraphs": [
                    {
                        "en": "Far below the sunlit waves, deep ocean currents carry vital nutrients around the globe. Although these waters seem dark, they are known to support astonishing biodiversity.",
                        "ru": ""
                    },
                    {
                        "en": "One of the most magical sights at great depth is bioluminescence — a natural phenomenon in which jellyfish and deep-sea fish create their own gentle blue light.",
                        "ru": ""
                    }
                ],
                "prompt": "Как называется природный феномен, при котором медузы и глубоководные рыбы создают собственный мягкий свет?",
                "options": [
                    "Биолюминесценция (bioluminescence)",
                    "Фотосинтез",
                    "Прилив (tide)"
                ],
                "correct": "Биолюминесценция (bioluminescence)",
                "explanation": "В тексте: bioluminescence — a natural phenomenon in which jellyfish and deep-sea fish create their own gentle blue light."
            },
            {
                "id": "unit_c1_50_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Океанология • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Warm ocean currents are known to regulate the climate of our planet.",
                "translationRu": "Известно, что тёплые океанические течения регулируют климат нашей планеты.",
                "options": [
                    "Warm ocean currents are known to regulate the climate of our planet.",
                    "Coral reefs protect marine biodiversity.",
                    "Bioluminescence is a magical phenomenon."
                ],
                "correct": "Warm ocean currents are known to regulate the climate of our planet.",
                "explanation": "Прозвучала фраза: «Warm ocean currents are known to regulate the climate of our planet.» (Известно, что тёплые океанические течения регулируют климат нашей планеты.)."
            },
            {
                "id": "unit_c1_50_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Океанология • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Ocean currents and coral reefs support extraordinary marine biodiversity.",
                "translationRu": "Океанические течения и коралловые рифы поддерживают удивительное морское биоразнообразие.",
                "correct": "Ocean currents and coral reefs support extraordinary marine biodiversity.",
                "explanation": "Отличное произношение! «Ocean currents and coral reefs support extraordinary marine biodiversity.» — Океанические течения и коралловые рифы поддерживают удивительное морское биоразнообразие.."
            }
        ]
    },
    {
        "id": "unit_c2_51",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 51,
        "nodeType": "five_stage",
        "titleRu": "Философия",
        "titleEn": "Философия",
        "icon": "🏛️",
        "sources": [
            "Тема: Философия",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "paradox",
                "tr": "[ˈpærədɒks]",
                "ru": "парадокс",
                "ex": "It is a curious paradox that the more we learn, the more questions we discover.",
                "example": "It is a curious paradox that the more we learn, the more questions we discover."
            },
            {
                "en": "wisdom",
                "tr": "[ˈwɪzdəm]",
                "ru": "мудрость",
                "ex": "True wisdom lies in serene humility.",
                "example": "True wisdom lies in serene humility."
            },
            {
                "en": "perception",
                "tr": "[pəˈsepʃn]",
                "ru": "восприятие",
                "ex": "Language shapes our perception of reality.",
                "example": "Language shapes our perception of reality."
            },
            {
                "en": "serenity",
                "tr": "[səˈrenəti]",
                "ru": "безмятежность, душевный покой",
                "ex": "Walking by the sea brings a sense of serenity.",
                "example": "Walking by the sea brings a sense of serenity."
            },
            {
                "en": "essence",
                "tr": "[ˈesns]",
                "ru": "суть, сущность",
                "ex": "Kindness is the very essence of human connection.",
                "example": "Kindness is the very essence of human connection."
            },
            {
                "en": "epistemology",
                "tr": "[ɪˌpɪstəˈmɒlədʒi]",
                "ru": "эпистемология (теория познания) (C2)",
                "ex": "Epistemology explores the nature and limits of knowledge.",
                "example": "Epistemology explores the nature and limits of knowledge."
            },
            {
                "en": "paradigm",
                "tr": "[ˈpærədaɪm]",
                "ru": "парадигма, модель мировоззрения (C2)",
                "ex": "Every scientific revolution shifts our paradigm.",
                "example": "Every scientific revolution shifts our paradigm."
            },
            {
                "en": "existential",
                "tr": "[ˌeɡzɪˈstenʃl]",
                "ru": "экзистенциальный, бытийный (C2)",
                "ex": "Literature addresses deep existential questions.",
                "example": "Literature addresses deep existential questions."
            },
            {
                "en": "transcend",
                "tr": "[trænˈsend]",
                "ru": "выходить за пределы, превосходить (C2)",
                "ex": "Music transcends linguistic barriers.",
                "example": "Music transcends linguistic barriers."
            },
            {
                "en": "dichotomy",
                "tr": "[daɪˈkɒtəmi]",
                "ru": "дихотомия, противопоставление двух начал (C2)",
                "ex": "Wisdom dissolves the false dichotomy between art and science.",
                "example": "Wisdom dissolves the false dichotomy between art and science."
            }
        ],
        "readingPassage": {
            "titleEn": "Мудрость морского горизонта",
            "titleRu": "Философия",
            "audioFull": "Philosophers have long noticed a gentle paradox of learning. When we take our first steps in a foreign language, we look for rigid formulas. Yet, paradoxical though it may seem, true mastery brings simplicity and serenity. Once the essence of a language becomes part of your perception, words flow as naturally as ocean waves.",
            "paragraphs": [
                {
                    "en": "Philosophers have long noticed a gentle paradox of learning. When we take our first steps in a foreign language, we look for rigid formulas.",
                    "ru": ""
                },
                {
                    "en": "Yet, paradoxical though it may seem, true mastery brings simplicity and serenity. Once the essence of a language becomes part of your perception, words flow as naturally as ocean waves.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Уступительные конструкции уровня C2 (Be that as it may / Much as we admire / Paradoxical though it may seem)",
            "skyNote": "На вершине владения языком (C2) для тонкого противопоставления («Как бы парадоксально это ни звучало...») прилагательное или наречие выносится перед союзом though / as: Paradoxical though it may seem, silence often speaks louder than words!",
            "summary": "На вершине владения языком (C2) для тонкого противопоставления («Как бы парадоксально это ни звучало...») прилагательное или наречие выносится перед союзом though / as: Paradoxical though it may seem, silence often speaks louder than words!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Философия» (C2)",
                    "example": "It is a curious paradox that the more we learn, the more questions we discover.",
                    "note": "Формула: Paradoxical though it may seem, simplicity is the essence of wisdom. На вершине владения языком (C2) для тонкого противопоставления («Как бы парадоксально это ни звучало...») прилагательное или наречие выносится перед союзом though / as: Paradoxical though it may seem, silence often speaks louder than words!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "True wisdom lies in serene humility.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Paradoxical though it may seem, simplicity is the essence of wisdom",
                    "example": "It is a curious paradox that the more we learn, the more questions we discover.",
                    "note": "Уступительные конструкции уровня C2 (Be that as it may / Much as we admire / Paradoxical though it may seem)"
                }
            ],
            "cambridgeTip": "В теме «Философия» мы сразу применяем правило (Уступительные конструкции уровня C2 (Be that as it may / Much as we admire / Paradoxical though it may seem)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_51_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Философия • C2",
                "prompt": "Выбери верную конструкцию уровня C2 («Как бы парадоксально это ни казалось...»):\n«Paradoxical ___ it may seem, slowing down often helps us achieve more with serenity.»",
                "options": [
                    "though",
                    "despite",
                    "however",
                    "unless"
                ],
                "correct": "though",
                "explanation": "Конструкция уступки C2: Прилагательное + though / as + подлежащее + глагол (Paradoxical though it may seem...)."
            },
            {
                "id": "unit_c2_51_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Философия • Конструктор фразы",
                "prompt": "Собери фразу: «Язык и культура глубоко формируют наше восприятие мира»",
                "words": [
                    "Language",
                    "deeply",
                    "shapes",
                    "our",
                    "perception",
                    "of",
                    "reality.",
                    "shape",
                    "paradox"
                ],
                "distractors": [
                    "shape",
                    "paradox"
                ],
                "correct": "Language deeply shapes our perception of reality.",
                "explanation": "Единственное число Language согласуется с глаголом shapes.",
                "promptRu": "Собери фразу: «Язык и культура глубоко формируют наше восприятие мира»",
                "correctSentence": "Language deeply shapes our perception of reality."
            },
            {
                "id": "unit_c2_51_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Философия • Чтение",
                "storyTitle": "Мудрость морского горизонта",
                "paragraphs": [
                    {
                        "en": "Philosophers have long noticed a gentle paradox of learning. When we take our first steps in a foreign language, we look for rigid formulas.",
                        "ru": ""
                    },
                    {
                        "en": "Yet, paradoxical though it may seem, true mastery brings simplicity and serenity. Once the essence of a language becomes part of your perception, words flow as naturally as ocean waves.",
                        "ru": ""
                    }
                ],
                "prompt": "Что приносит настоящее мастерство (true mastery) согласно тексту?",
                "options": [
                    "Простоту, естественность и внутреннюю безмятежность",
                    "Усложнение каждой фразы",
                    "Страх говорить"
                ],
                "correct": "Простоту, естественность и внутреннюю безмятежность",
                "explanation": "В тексте: true mastery brings simplicity and serenity."
            },
            {
                "id": "unit_c2_51_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Философия • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Paradoxical though it may seem, simplicity is the true essence of wisdom.",
                "translationRu": "Как бы парадоксально это ни казалось, простота — истинная суть мудрости.",
                "options": [
                    "Paradoxical though it may seem, simplicity is the true essence of wisdom.",
                    "Language shapes our perception.",
                    "The ocean brings a feeling of serenity."
                ],
                "correct": "Paradoxical though it may seem, simplicity is the true essence of wisdom.",
                "explanation": "Прозвучала фраза: «Paradoxical though it may seem, simplicity is the true essence of wisdom.» (Как бы парадоксально это ни казалось, простота — истинная суть мудрости.)."
            },
            {
                "id": "unit_c2_51_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Философия • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "True wisdom and serenity come from kindness and curiosity.",
                "translationRu": "Истинная мудрость и безмятежность рождаются из доброты и любознательности.",
                "correct": "True wisdom and serenity come from kindness and curiosity.",
                "explanation": "Отличное произношение! «True wisdom and serenity come from kindness and curiosity.» — Истинная мудрость и безмятежность рождаются из доброты и любознательности.."
            }
        ]
    },
    {
        "id": "unit_c2_52",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 52,
        "nodeType": "five_stage",
        "titleRu": "Поэтика",
        "titleEn": "Поэтика",
        "icon": "🪶",
        "sources": [
            "Тема: Поэтика",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "luminous",
                "tr": "[ˈluːmɪnəs]",
                "ru": "лучезарный, светящийся",
                "ex": "Luminous verses capture the beauty of dawn.",
                "example": "Luminous verses capture the beauty of dawn."
            },
            {
                "en": "imagery",
                "tr": "[ˈɪmɪdʒəri]",
                "ru": "художественные образы, образность",
                "ex": "Poetic imagery turns ordinary words into paintings.",
                "example": "Poetic imagery turns ordinary words into paintings."
            },
            {
                "en": "resonance",
                "tr": "[ˈrezənəns]",
                "ru": "отклик в душе, резонанс",
                "ex": "The poem found deep emotional resonance with readers.",
                "example": "The poem found deep emotional resonance with readers."
            },
            {
                "en": "evoke",
                "tr": "[ɪˈvəʊk]",
                "ru": "пробуждать (чувства, воспоминания)",
                "ex": "A single melody can evoke childhood memories.",
                "example": "A single melody can evoke childhood memories."
            },
            {
                "en": "timeless",
                "tr": "[ˈtaɪmləs]",
                "ru": "неподвластный времени, вечный",
                "ex": "True art possesses a timeless grace.",
                "example": "True art possesses a timeless grace."
            },
            {
                "en": "ephemeral",
                "tr": "[ɪˈfemərəl]",
                "ru": "мимолётный, ускользающий (C2)",
                "ex": "Watercolor captures the ephemeral glow of dawn.",
                "example": "Watercolor captures the ephemeral glow of dawn."
            },
            {
                "en": "allegory",
                "tr": "[ˈæləɡəri]",
                "ru": "аллегория, иносказание (C2)",
                "ex": "The voyage serves as an allegory of self-discovery.",
                "example": "The voyage serves as an allegory of self-discovery."
            },
            {
                "en": "cadence",
                "tr": "[ˈkeɪdns]",
                "ru": "ритмическая мелодика речи, каденция (C2)",
                "ex": "The soothing cadence of the verse echoes the tide.",
                "example": "The soothing cadence of the verse echoes the tide."
            },
            {
                "en": "sublime",
                "tr": "[səˈblaɪm]",
                "ru": "возвышенный, величественный (C2)",
                "ex": "Standing on the cliff, we felt a sublime awe.",
                "example": "Standing on the cliff, we felt a sublime awe."
            },
            {
                "en": "euphony",
                "tr": "[ˈjuːfəni]",
                "ru": "благозвучие, гармония звуков (C2)",
                "ex": "Poets choose words for both meaning and euphony.",
                "example": "Poets choose words for both meaning and euphony."
            }
        ],
        "readingPassage": {
            "titleEn": "Слова, которые рисуют акварелью",
            "titleRu": "Поэтика",
            "audioFull": "Why do certain lines of poetry stay with us for a lifetime? Literary scholars point out that timeless verses do not merely describe facts — they evoke atmosphere. Through luminous imagery and gentle rhythm, a poet invites the reader to see the world anew, creating a quiet emotional resonance that bridges centuries.",
            "paragraphs": [
                {
                    "en": "Why do certain lines of poetry stay with us for a lifetime? Literary scholars point out that timeless verses do not merely describe facts — they evoke atmosphere.",
                    "ru": ""
                },
                {
                    "en": "Through luminous imagery and gentle rhythm, a poet invites the reader to see the world anew, creating a quiet emotional resonance that bridges centuries.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Литературная инверсия места и образа (On the horizon shone... / Through the mist floated...)",
            "skyNote": "В художественной речи C2, когда предложение начинается с обстоятельства места или живописного образа (Across the calm lagoon..., Above the cliffs...), сказуемое может плавно выноситься перед подлежащим без вспомогательного глагола: Across the quiet bay drifted a luminous boat.",
            "summary": "В художественной речи C2, когда предложение начинается с обстоятельства места или живописного образа (Across the calm lagoon..., Above the cliffs...), сказуемое может плавно выноситься перед подлежащим без вспомогательного глагола: Across the quiet bay drifted a luminous boat.",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Поэтика» (C2)",
                    "example": "Luminous verses capture the beauty of dawn.",
                    "note": "Формула: Across the quiet lagoon drifted a luminous sail. В художественной речи C2, когда предложение начинается с обстоятельства места или живописного образа (Across the calm lagoon..., Above the cliffs...), сказуемое может плавно выноситься перед подлежащим без вспомогательного глагола: Across the quiet bay drifted a luminous boat."
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "Poetic imagery turns ordinary words into paintings.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Across the quiet lagoon drifted a luminous sail",
                    "example": "Luminous verses capture the beauty of dawn.",
                    "note": "Литературная инверсия места и образа (On the horizon shone... / Through the mist floated...)"
                }
            ],
            "cambridgeTip": "В теме «Поэтика» мы сразу применяем правило (Литературная инверсия места и образа (On the horizon shone... / Through the mist floated...)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_52_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Поэтика • C2",
                "prompt": "Выбери художественный порядок слов для поэтического описания:\n«Such timeless beauty ___ the poem evoke that the whole hall fell silent.»",
                "options": [
                    "did",
                    "was",
                    "had",
                    "has"
                ],
                "correct": "did",
                "explanation": "После вынесенного вперёд оборота Such timeless beauty перед подлежащим the poem ставится вспомогательный глагол did (did the poem evoke)."
            },
            {
                "id": "unit_c2_52_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Поэтика • Конструктор фразы",
                "prompt": "Собери фразу: «Яркие поэтические образы пробуждают тёплые воспоминания»",
                "words": [
                    "Luminous",
                    "poetic",
                    "imagery",
                    "evokes",
                    "warm",
                    "memories.",
                    "evoke",
                    "timeless"
                ],
                "distractors": [
                    "evoke",
                    "timeless"
                ],
                "correct": "Luminous poetic imagery evokes warm memories.",
                "explanation": "Неисчисляемое существительное imagery согласуется с глаголом в единственном числе (evokes).",
                "promptRu": "Собери фразу: «Яркие поэтические образы пробуждают тёплые воспоминания»",
                "correctSentence": "Luminous poetic imagery evokes warm memories."
            },
            {
                "id": "unit_c2_52_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Поэтика • Чтение",
                "storyTitle": "Слова, которые рисуют акварелью",
                "paragraphs": [
                    {
                        "en": "Why do certain lines of poetry stay with us for a lifetime? Literary scholars point out that timeless verses do not merely describe facts — they evoke atmosphere.",
                        "ru": ""
                    },
                    {
                        "en": "Through luminous imagery and gentle rhythm, a poet invites the reader to see the world anew, creating a quiet emotional resonance that bridges centuries.",
                        "ru": ""
                    }
                ],
                "prompt": "Чем неподвластные времени стихи отличаются от простого перечисления фактов?",
                "options": [
                    "Они пробуждают живую атмосферу и душевный отклик через светлые образы",
                    "Они состоят только из длинных терминов",
                    "В них нет ритма"
                ],
                "correct": "Они пробуждают живую атмосферу и душевный отклик через светлые образы",
                "explanation": "В тексте: they evoke atmosphere. Through luminous imagery and gentle rhythm..."
            },
            {
                "id": "unit_c2_52_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Поэтика • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Luminous poetic imagery evokes deep emotional resonance.",
                "translationRu": "Светлые поэтические образы пробуждают глубокий эмоциональный отклик.",
                "options": [
                    "Luminous poetic imagery evokes deep emotional resonance.",
                    "This melody has a timeless charm.",
                    "The poem describes the morning sea."
                ],
                "correct": "Luminous poetic imagery evokes deep emotional resonance.",
                "explanation": "Прозвучала фраза: «Luminous poetic imagery evokes deep emotional resonance.» (Светлые поэтические образы пробуждают глубокий эмоциональный отклик.)."
            },
            {
                "id": "unit_c2_52_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Поэтика • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Poetic imagery turns simple words into a timeless watercolor painting.",
                "translationRu": "Поэтические образы превращают простые слова в вечную акварельную картину.",
                "correct": "Poetic imagery turns simple words into a timeless watercolor painting.",
                "explanation": "Отличное произношение! «Poetic imagery turns simple words into a timeless watercolor painting.» — Поэтические образы превращают простые слова в вечную акварельную картину.."
            }
        ]
    },
    {
        "id": "unit_c2_53",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 53,
        "nodeType": "five_stage",
        "titleRu": "Этология",
        "titleEn": "Этология",
        "icon": "🐬",
        "sources": [
            "Тема: Этология",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "echolocation",
                "tr": "[ˌekəʊləʊˈkeɪʃn]",
                "ru": "эхолокация",
                "ex": "Dolphins use echolocation to navigate crystal and deep waters.",
                "example": "Dolphins use echolocation to navigate crystal and deep waters."
            },
            {
                "en": "altruism",
                "tr": "[ˈæltruɪzəm]",
                "ru": "альтруизм, бескорыстная помощь",
                "ex": "Marine mammals often display remarkable altruism.",
                "example": "Marine mammals often display remarkable altruism."
            },
            {
                "en": "acoustic",
                "tr": "[əˈkuːstɪk]",
                "ru": "акустический, звуковой",
                "ex": "Each dolphin has a unique acoustic whistle.",
                "example": "Each dolphin has a unique acoustic whistle."
            },
            {
                "en": "pod",
                "tr": "[pɒd]",
                "ru": "стая (дельфинов или китов)",
                "ex": "The dolphin pod swims in complete harmony.",
                "example": "The dolphin pod swims in complete harmony."
            },
            {
                "en": "intelligence",
                "tr": "[ɪnˈtelɪdʒəns]",
                "ru": "интеллект, разум",
                "ex": "Their social intelligence amazes researchers.",
                "example": "Their social intelligence amazes researchers."
            },
            {
                "en": "metacognition",
                "tr": "[ˌmetəkɒɡˈnɪʃn]",
                "ru": "метапознание (саморефлексия разума) (C2)",
                "ex": "Dolphins and primates show signs of metacognition.",
                "example": "Dolphins and primates show signs of metacognition."
            },
            {
                "en": "innate",
                "tr": "[ɪˈneɪt]",
                "ru": "врождённый, природный (C2)",
                "ex": "Curiosity is an innate quality of intelligent beings.",
                "example": "Curiosity is an innate quality of intelligent beings."
            },
            {
                "en": "discern",
                "tr": "[dɪˈsɜːn]",
                "ru": "различать, улавливать тонкие детали (C2)",
                "ex": "Through echolocation, dolphins discern tiny objects.",
                "example": "Through echolocation, dolphins discern tiny objects."
            },
            {
                "en": "symbiosis",
                "tr": "[ˌsɪmbaɪˈəʊsɪs]",
                "ru": "симбиоз, гармоничное сосуществование (C2)",
                "ex": "Clownfish and sea anemones live in symbiosis.",
                "example": "Clownfish and sea anemones live in symbiosis."
            },
            {
                "en": "acuity",
                "tr": "[əˈkjuːəti]",
                "ru": "острота восприятия или ума (C2)",
                "ex": "Marine mammals possess remarkable acoustic acuity.",
                "example": "Marine mammals possess remarkable acoustic acuity."
            }
        ],
        "readingPassage": {
            "titleEn": "Имена на языке волн",
            "titleRu": "Этология",
            "audioFull": "Ethologists studying dolphin pods have discovered something heartwarming: every dolphin invents a unique acoustic signature whistle in infancy — essentially its own name. Not only do friends in the pod greet each other using these whistles, but they also show touching altruism, supporting injured companions at the surface so they can breathe.",
            "paragraphs": [
                {
                    "en": "Ethologists studying dolphin pods have discovered something heartwarming: every dolphin invents a unique acoustic signature whistle in infancy — essentially its own name.",
                    "ru": ""
                },
                {
                    "en": "Not only do friends in the pod greet each other using these whistles, but they also show touching altruism, supporting injured companions at the surface so they can breathe.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Сложные инфинитивные обороты (appear to have developed / are observed to call each other by name)",
            "skyNote": "Описывая поведение и интеллект дельфинов на уровне C2, учёные используют перфектный инфинитив (to have + V3), чтобы показать действие, сформировавшееся ранее: Dolphins appear to have developed unique signature whistles that function like names!",
            "summary": "Описывая поведение и интеллект дельфинов на уровне C2, учёные используют перфектный инфинитив (to have + V3), чтобы показать действие, сформировавшееся ранее: Dolphins appear to have developed unique signature whistles that function like names!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Этология» (C2)",
                    "example": "Dolphins use echolocation to navigate crystal and deep waters.",
                    "note": "Формула: Dolphins are known to call each other by unique acoustic whistles. Описывая поведение и интеллект дельфинов на уровне C2, учёные используют перфектный инфинитив (to have + V3), чтобы показать действие, сформировавшееся ранее: Dolphins appear to have developed unique signature whistles that function like names!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "Marine mammals often display remarkable altruism.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Dolphins are known to call each other by unique acoustic whistles",
                    "example": "Dolphins use echolocation to navigate crystal and deep waters.",
                    "note": "Сложные инфинитивные обороты (appear to have developed / are observed to call each other by name)"
                }
            ],
            "cambridgeTip": "В теме «Этология» мы сразу применяем правило (Сложные инфинитивные обороты (appear to have developed / are observed to call each other by name)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_53_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Этология • C2",
                "prompt": "Выбери перфектный инфинитив для описания эволюции дельфинов:\n«Marine mammals appear ___ developed complex acoustic languages over millions of years.»",
                "options": [
                    "to have",
                    "having",
                    "to be",
                    "have"
                ],
                "correct": "to have",
                "explanation": "После глагола appear для указания на предшествующий эволюционный процесс используется перфектный инфинитив: appear to have developed."
            },
            {
                "id": "unit_c2_53_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Этология • Конструктор фразы",
                "prompt": "Собери фразу: «Дельфины в стае проявляют удивительный интеллект и альтруизм»",
                "words": [
                    "Dolphins",
                    "in",
                    "a",
                    "pod",
                    "display",
                    "remarkable",
                    "altruism.",
                    "displays",
                    "acoustic"
                ],
                "distractors": [
                    "displays",
                    "acoustic"
                ],
                "correct": "Dolphins in a pod display remarkable altruism.",
                "explanation": "Главное слово подлежащего — Dolphins (мн. ч.), поэтому глагол — display.",
                "promptRu": "Собери фразу: «Дельфины в стае проявляют удивительный интеллект и альтруизм»",
                "correctSentence": "Dolphins in a pod display remarkable altruism."
            },
            {
                "id": "unit_c2_53_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Этология • Чтение",
                "storyTitle": "Имена на языке волн",
                "paragraphs": [
                    {
                        "en": "Ethologists studying dolphin pods have discovered something heartwarming: every dolphin invents a unique acoustic signature whistle in infancy — essentially its own name.",
                        "ru": ""
                    },
                    {
                        "en": "Not only do friends in the pod greet each other using these whistles, but they also show touching altruism, supporting injured companions at the surface so they can breathe.",
                        "ru": ""
                    }
                ],
                "prompt": "Что представляет собой уникальный акустический свист каждого дельфина?",
                "options": [
                    "Его собственное личное имя, по которому к нему обращаются друзья в стае",
                    "Случайное эхо от скал",
                    "Сигнал шторма"
                ],
                "correct": "Его собственное личное имя, по которому к нему обращаются друзья в стае",
                "explanation": "В тексте: every dolphin invents a unique acoustic signature whistle in infancy — essentially its own name."
            },
            {
                "id": "unit_c2_53_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Этология • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Dolphins in a pod display remarkable intelligence and altruism.",
                "translationRu": "Дельфины в стае проявляют удивительный интеллект и альтруизм.",
                "options": [
                    "Dolphins in a pod display remarkable intelligence and altruism.",
                    "They navigate using echolocation.",
                    "Every dolphin has an acoustic whistle."
                ],
                "correct": "Dolphins in a pod display remarkable intelligence and altruism.",
                "explanation": "Прозвучала фраза: «Dolphins in a pod display remarkable intelligence and altruism.» (Дельфины в стае проявляют удивительный интеллект и альтруизм.)."
            },
            {
                "id": "unit_c2_53_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Этология • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Dolphins greet their friends using unique acoustic whistles.",
                "translationRu": "Дельфины приветствуют своих друзей с помощью уникальных звуковых свистов.",
                "correct": "Dolphins greet their friends using unique acoustic whistles.",
                "explanation": "Отличное произношение! «Dolphins greet their friends using unique acoustic whistles.» — Дельфины приветствуют своих друзей с помощью уникальных звуковых свистов.."
            }
        ]
    },
    {
        "id": "unit_c2_54",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 54,
        "nodeType": "five_stage",
        "titleRu": "Дизайн",
        "titleEn": "Дизайн",
        "icon": "✨",
        "sources": [
            "Тема: Дизайн",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "aesthetic",
                "tr": "[iːsˈθetɪk]",
                "ru": "эстетика; эстетический",
                "ex": "A pastel watercolor aesthetic creates visual harmony.",
                "example": "A pastel watercolor aesthetic creates visual harmony."
            },
            {
                "en": "intuitive",
                "tr": "[ɪnˈtjuːɪtɪv]",
                "ru": "интуитивно понятный",
                "ex": "Great interface design feels effortless and intuitive.",
                "example": "Great interface design feels effortless and intuitive."
            },
            {
                "en": "harmony",
                "tr": "[ˈhɑːməni]",
                "ru": "гармония, сочетаемость",
                "ex": "Every badge and border should blend in harmony with the background.",
                "example": "Every badge and border should blend in harmony with the background."
            },
            {
                "en": "proportion",
                "tr": "[prəˈpɔːʃn]",
                "ru": "пропорция, соразмерность",
                "ex": "Balanced proportions rest the eye.",
                "example": "Balanced proportions rest the eye."
            },
            {
                "en": "clutter",
                "tr": "[ˈklʌtə]",
                "ru": "визуальный шум, нагромождение",
                "ex": "Removing unnecessary clutter lets the illustration breathe.",
                "example": "Removing unnecessary clutter lets the illustration breathe."
            },
            {
                "en": "symmetry",
                "tr": "[ˈsɪmətri]",
                "ru": "симметрия, соразмерность (C2)",
                "ex": "Subtle asymmetry often feels livelier than rigid symmetry.",
                "example": "Subtle asymmetry often feels livelier than rigid symmetry."
            },
            {
                "en": "minimalism",
                "tr": "[ˈmɪnɪməlɪzəm]",
                "ru": "минимализм, лаконичность (C2)",
                "ex": "Warm minimalism removes noise while keeping soul.",
                "example": "Warm minimalism removes noise while keeping soul."
            },
            {
                "en": "tactile",
                "tr": "[ˈtæktaɪl]",
                "ru": "тактильный, осязаемый (о текстуре бумаги) (C2)",
                "ex": "Watercolor paper gives the interface a tactile warmth.",
                "example": "Watercolor paper gives the interface a tactile warmth."
            },
            {
                "en": "vernacular",
                "tr": "[vəˈnækjələ]",
                "ru": "традиционный местный стиль (в архитектуре/языке) (C2)",
                "ex": "Coastal vernacular architecture uses natural stone and wood.",
                "example": "Coastal vernacular architecture uses natural stone and wood."
            },
            {
                "en": "edifice",
                "tr": "[ˈedɪfɪs]",
                "ru": "величественное сооружение, здание (C2)",
                "ex": "The lighthouse stands as a timeless edifice above the waves.",
                "example": "The lighthouse stands as a timeless edifice above the waves."
            }
        ],
        "readingPassage": {
            "titleEn": "Воздух, свет и ничего лишнего",
            "titleRu": "Дизайн",
            "audioFull": "Why do some book illustrations and mobile interfaces feel instantly welcoming? Designers explain that visual harmony depends on breathing space and gentle proportions. With heavy borders and long labels removed, there is no visual clutter. Soft cream cards and pastel tones blend effortlessly with the artwork, making the experience intuitive and serene.",
            "paragraphs": [
                {
                    "en": "Why do some book illustrations and mobile interfaces feel instantly welcoming? Designers explain that visual harmony depends on breathing space and gentle proportions.",
                    "ru": ""
                },
                {
                    "en": "With heavy borders and long labels removed, there is no visual clutter. Soft cream cards and pastel tones blend effortlessly with the artwork, making the experience intuitive and serene.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Абсолютные причастные конструкции (With the clutter removed, the illustration breathes...)",
            "skyNote": "Чтобы лаконично связать причину и следствие в дизайне («Когда лишний визуальный шум убран, акварельная иллюстрация начинает дышать»), на уровне C2 используется оборот With + объект + V3 / V-ing: With visual clutter removed, every detail blends in harmony!",
            "summary": "Чтобы лаконично связать причину и следствие в дизайне («Когда лишний визуальный шум убран, акварельная иллюстрация начинает дышать»), на уровне C2 используется оборот With + объект + V3 / V-ing: With visual clutter removed, every detail blends in harmony!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Дизайн» (C2)",
                    "example": "A pastel watercolor aesthetic creates visual harmony.",
                    "note": "Формула: With visual clutter removed, the watercolor aesthetic shines. Чтобы лаконично связать причину и следствие в дизайне («Когда лишний визуальный шум убран, акварельная иллюстрация начинает дышать»), на уровне C2 используется оборот With + объект + V3 / V-ing: With visual clutter removed, every detail blends in harmony!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "Great interface design feels effortless and intuitive.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "With visual clutter removed, the watercolor aesthetic shines",
                    "example": "A pastel watercolor aesthetic creates visual harmony.",
                    "note": "Абсолютные причастные конструкции (With the clutter removed, the illustration breathes...)"
                }
            ],
            "cambridgeTip": "В теме «Дизайн» мы сразу применяем правило (Абсолютные причастные конструкции (With the clutter removed, the illustration breathes...)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_54_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Дизайн • C2",
                "prompt": "Дополни элегантную конструкцию C2 о гармонии в дизайне:\n«With unnecessary visual clutter ___, the delicate watercolor background immediately comes to life.»",
                "options": [
                    "removed",
                    "remove",
                    "removing",
                    "to remove"
                ],
                "correct": "removed",
                "explanation": "В обороте With + существительное + причастие («когда визуальный шум убран» — пассивное состояние) ставится V3: removed."
            },
            {
                "id": "unit_c2_54_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Дизайн • Конструктор фразы",
                "prompt": "Собери фразу: «Интуитивный дизайн и мягкие контуры создают визуальную гармонию»",
                "words": [
                    "Intuitive",
                    "design",
                    "and",
                    "soft",
                    "borders",
                    "create",
                    "harmony.",
                    "creates",
                    "clutter"
                ],
                "distractors": [
                    "creates",
                    "clutter"
                ],
                "correct": "Intuitive design and soft borders create harmony.",
                "explanation": "Два подлежащих с союзом and требуют глагола create.",
                "promptRu": "Собери фразу: «Интуитивный дизайн и мягкие контуры создают визуальную гармонию»",
                "correctSentence": "Intuitive design and soft borders create harmony."
            },
            {
                "id": "unit_c2_54_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Дизайн • Чтение",
                "storyTitle": "Воздух, свет и ничего лишнего",
                "paragraphs": [
                    {
                        "en": "Why do some book illustrations and mobile interfaces feel instantly welcoming? Designers explain that visual harmony depends on breathing space and gentle proportions.",
                        "ru": ""
                    },
                    {
                        "en": "With heavy borders and long labels removed, there is no visual clutter. Soft cream cards and pastel tones blend effortlessly with the artwork, making the experience intuitive and serene.",
                        "ru": ""
                    }
                ],
                "prompt": "Что происходит с иллюстрацией, когда убирают тяжёлые контуры и длинные надписи?",
                "options": [
                    "Исчезает визуальный шум, и карточки гармонично сливаются с акварелью",
                    "Экран становится пустым и непонятным",
                    "Пропадает цвет"
                ],
                "correct": "Исчезает визуальный шум, и карточки гармонично сливаются с акварелью",
                "explanation": "В тексте: With heavy borders and long labels removed, there is no visual clutter."
            },
            {
                "id": "unit_c2_54_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Дизайн • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "With visual clutter removed, every detail blends in harmony.",
                "translationRu": "Когда визуальный шум убран, каждая деталь складывается в гармонию.",
                "options": [
                    "With visual clutter removed, every detail blends in harmony.",
                    "This interface is very intuitive.",
                    "Soft pastel tones create a warm aesthetic."
                ],
                "correct": "With visual clutter removed, every detail blends in harmony.",
                "explanation": "Прозвучала фраза: «With visual clutter removed, every detail blends in harmony.» (Когда визуальный шум убран, каждая деталь складывается в гармонию.)."
            },
            {
                "id": "unit_c2_54_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Дизайн • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Soft borders and pastel tones create a harmonious aesthetic.",
                "translationRu": "Мягкие контуры и пастельные тона создают гармоничную эстетику.",
                "correct": "Soft borders and pastel tones create a harmonious aesthetic.",
                "explanation": "Отличное произношение! «Soft borders and pastel tones create a harmonious aesthetic.» — Мягкие контуры и пастельные тона создают гармоничную эстетику.."
            }
        ]
    },
    {
        "id": "unit_c2_55",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 55,
        "nodeType": "five_stage",
        "titleRu": "Лингвистика",
        "titleEn": "Лингвистика",
        "icon": "🗣️",
        "sources": [
            "Тема: Лингвистика",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "nuance",
                "tr": "[ˈnjuːɑːns]",
                "ru": "нюанс, тонкий оттенок смысла",
                "ex": "Native-like fluency means feeling subtle nuances of tone.",
                "example": "Native-like fluency means feeling subtle nuances of tone."
            },
            {
                "en": "idiom",
                "tr": "[ˈɪdiəm]",
                "ru": "идиома, крылатое выражение",
                "ex": "Colourful idioms make conversation vivid.",
                "example": "Colourful idioms make conversation vivid."
            },
            {
                "en": "eloquence",
                "tr": "[ˈeləkwəns]",
                "ru": "дар слова, выразительность речи",
                "ex": "True eloquence is clear and warm, never pompous.",
                "example": "True eloquence is clear and warm, never pompous."
            },
            {
                "en": "context",
                "tr": "[ˈkɒntekst]",
                "ru": "контекст",
                "ex": "Words acquire their true meaning in living context.",
                "example": "Words acquire their true meaning in living context."
            },
            {
                "en": "fluency",
                "tr": "[ˈfluːənsi]",
                "ru": "свободное, беглое владение языком",
                "ex": "Daily practice leads to effortless fluency.",
                "example": "Daily practice leads to effortless fluency."
            },
            {
                "en": "etymology",
                "tr": "[ˌetɪˈmɒlədʒi]",
                "ru": "этимология (происхождение слова) (C2)",
                "ex": "Exploring etymology reveals how cultures share ideas.",
                "example": "Exploring etymology reveals how cultures share ideas."
            },
            {
                "en": "colloquial",
                "tr": "[kəˈləʊkwiəl]",
                "ru": "разговорный, живой непринуждённый (C2)",
                "ex": "C2 speakers effortlessly switch between formal and colloquial registers.",
                "example": "C2 speakers effortlessly switch between formal and colloquial registers."
            },
            {
                "en": "register",
                "tr": "[ˈredʒɪstə]",
                "ru": "стилевой регистр речи (C2)",
                "ex": "Choosing the right register shows linguistic sensitivity.",
                "example": "Choosing the right register shows linguistic sensitivity."
            },
            {
                "en": "semantics",
                "tr": "[sɪˈmæntɪks]",
                "ru": "семантика, смысловое поле (C2)",
                "ex": "Context determines the subtle semantics of a phrase.",
                "example": "Context determines the subtle semantics of a phrase."
            },
            {
                "en": "pragmatic",
                "tr": "[præɡˈmætɪk]",
                "ru": "прагматический, практико-контекстный (C2)",
                "ex": "Pragmatic competence helps you read between the lines.",
                "example": "Pragmatic competence helps you read between the lines."
            }
        ],
        "readingPassage": {
            "titleEn": "Живая ткань языка",
            "titleRu": "Лингвистика",
            "audioFull": "Linguists agree that a language is far more than a dictionary plus a table of grammar rules. Every word carries cultural warmth and subtle nuances that only come alive in context. When you combine vocabulary, grammar, reading, listening, and speaking in one flow, you develop natural fluency and authentic eloquence.",
            "paragraphs": [
                {
                    "en": "Linguists agree that a language is far more than a dictionary plus a table of grammar rules. Every word carries cultural warmth and subtle nuances that only come alive in context.",
                    "ru": ""
                },
                {
                    "en": "When you combine vocabulary, grammar, reading, listening, and speaking in one flow, you develop natural fluency and authentic eloquence.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Продвинутая модальность и оттенки смысла (Needn't have done vs Didn't need to do)",
            "skyNote": "Тонкий лингвистический нюанс C2: didn't need to do означает «не было необходимости, поэтому и не делали» (We didn't need to use a dictionary because the context was clear). А needn't have + V3 означает «сделали зря, можно было и не делать» (You needn't have memorised isolated lists — context teaches faster!).",
            "summary": "Тонкий лингвистический нюанс C2: didn't need to do означает «не было необходимости, поэтому и не делали» (We didn't need to use a dictionary because the context was clear). А needn't have + V3 означает «сделали зря, можно было и не делать» (You needn't have memorised isolated lists — context teaches faster!).",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Лингвистика» (C2)",
                    "example": "Native-like fluency means feeling subtle nuances of tone.",
                    "note": "Формула: We didn't need to look up every word thanks to the context. Тонкий лингвистический нюанс C2: didn't need to do означает «не было необходимости, поэтому и не делали» (We didn't need to use a dictionary because the context was clear). А needn't have + V3 означает «сделали зря, можно было и не делать» (You needn't have memorised isolated lists — context teaches faster!)."
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "Colourful idioms make conversation vivid.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "We didn't need to look up every word thanks to the context",
                    "example": "Native-like fluency means feeling subtle nuances of tone.",
                    "note": "Продвинутая модальность и оттенки смысла (Needn't have done vs Didn't need to do)"
                }
            ],
            "cambridgeTip": "В теме «Лингвистика» мы сразу применяем правило (Продвинутая модальность и оттенки смысла (Needn't have done vs Didn't need to do)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_55_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Лингвистика • C2",
                "prompt": "Почувствуй тонкий нюанс: «Ты зря зубрила длинные списки без контекста (сделала, хотя это было не нужно)»:\n«You ___ memorised isolated word lists for hours — reading stories in context is much more natural!»",
                "options": [
                    "needn't have",
                    "didn't need",
                    "mustn't",
                    "couldn't"
                ],
                "correct": "needn't have",
                "explanation": "Действие было совершено зря в прошлом — это конструкция needn't have + V3 (needn't have memorised)."
            },
            {
                "id": "unit_c2_55_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Лингвистика • Конструктор фразы",
                "prompt": "Собери фразу: «Слова раскрывают свои тонкие нюансы в живом контексте»",
                "words": [
                    "Words",
                    "reveal",
                    "their",
                    "subtle",
                    "nuances",
                    "in",
                    "context.",
                    "reveals",
                    "fluency"
                ],
                "distractors": [
                    "reveals",
                    "fluency"
                ],
                "correct": "Words reveal their subtle nuances in context.",
                "explanation": "Подлежащее Words (мн. ч.) сочетается с глаголом reveal.",
                "promptRu": "Собери фразу: «Слова раскрывают свои тонкие нюансы в живом контексте»",
                "correctSentence": "Words reveal their subtle nuances in context."
            },
            {
                "id": "unit_c2_55_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Лингвистика • Чтение",
                "storyTitle": "Живая ткань языка",
                "paragraphs": [
                    {
                        "en": "Linguists agree that a language is far more than a dictionary plus a table of grammar rules. Every word carries cultural warmth and subtle nuances that only come alive in context.",
                        "ru": ""
                    },
                    {
                        "en": "When you combine vocabulary, grammar, reading, listening, and speaking in one flow, you develop natural fluency and authentic eloquence.",
                        "ru": ""
                    }
                ],
                "prompt": "Когда, по мнению лингвистов, по-настоящему оживают тонкие оттенки значений слов?",
                "options": [
                    "Только в живом контексте и единстве всех навыков",
                    "В алфавитном списке без примеров",
                    "В таблицах исключений"
                ],
                "correct": "Только в живом контексте и единстве всех навыков",
                "explanation": "В тексте: subtle nuances that only come alive in context."
            },
            {
                "id": "unit_c2_55_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Лингвистика • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Words reveal their subtle nuances when you learn them in context.",
                "translationRu": "Слова раскрывают свои тонкие оттенки смысла, когда вы учите их в контексте.",
                "options": [
                    "Words reveal their subtle nuances when you learn them in context.",
                    "Daily practice builds natural fluency.",
                    "Colourful idioms enrich our speech."
                ],
                "correct": "Words reveal their subtle nuances when you learn them in context.",
                "explanation": "Прозвучала фраза: «Words reveal their subtle nuances when you learn them in context.» (Слова раскрывают свои тонкие оттенки смысла, когда вы учите их в контексте.)."
            },
            {
                "id": "unit_c2_55_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Лингвистика • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Learning words in context builds natural fluency and eloquence.",
                "translationRu": "Изучение слов в контексте развивает естественную беглость и выразительность речи.",
                "correct": "Learning words in context builds natural fluency and eloquence.",
                "explanation": "Отличное произношение! «Learning words in context builds natural fluency and eloquence.» — Изучение слов в контексте развивает естественную беглость и выразительность речи.."
            }
        ]
    },
    {
        "id": "unit_c2_56",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 56,
        "nodeType": "five_stage",
        "titleRu": "Ботаника",
        "titleEn": "Ботаника",
        "icon": "🌺",
        "sources": [
            "Тема: Ботаника",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "blossom",
                "tr": "[ˈblɒsəm]",
                "ru": "цвести; пышный цвет",
                "ex": "In spring, cherry trees burst into blossom.",
                "example": "In spring, cherry trees burst into blossom."
            },
            {
                "en": "fragrance",
                "tr": "[ˈfreɪɡrəns]",
                "ru": "тонкий цветочный аромат, благоухание",
                "ex": "The evening air was filled with the fragrance of jasmine.",
                "example": "The evening air was filled with the fragrance of jasmine."
            },
            {
                "en": "petal",
                "tr": "[ˈpetl]",
                "ru": "лепесток",
                "ex": "Dewdrops sparkled on the rose petals.",
                "example": "Dewdrops sparkled on the rose petals."
            },
            {
                "en": "greenhouse",
                "tr": "[ˈɡriːnhaʊs]",
                "ru": "оранжерея, зимний сад",
                "ex": "Rare orchids are cultivated in the glass greenhouse.",
                "example": "Rare orchids are cultivated in the glass greenhouse."
            },
            {
                "en": "thrive",
                "tr": "[θraɪv]",
                "ru": "процветать, буйно расти",
                "ex": "Given sunlight and care, even delicate plants thrive.",
                "example": "Given sunlight and care, even delicate plants thrive."
            },
            {
                "en": "pristine",
                "tr": "[ˈprɪstiːn]",
                "ru": "первозданный, нетронутый (C2)",
                "ex": "Rare flora thrives in pristine mountain valleys.",
                "example": "Rare flora thrives in pristine mountain valleys."
            },
            {
                "en": "indigenous",
                "tr": "[ɪnˈdɪdʒənəs]",
                "ru": "коренной, эндемичный для региона (C2)",
                "ex": "This orchid is indigenous to tropical islands.",
                "example": "This orchid is indigenous to tropical islands."
            },
            {
                "en": "proliferation",
                "tr": "[prəˌlɪfəˈreɪʃn]",
                "ru": "бурное разрастание, расцвет (C2)",
                "ex": "Warm spring rain triggered a proliferation of wildflowers.",
                "example": "Warm spring rain triggered a proliferation of wildflowers."
            },
            {
                "en": "botanical",
                "tr": "[bəˈtænɪkl]",
                "ru": "ботанический (C2)",
                "ex": "She paints accurate botanical watercolors.",
                "example": "She paints accurate botanical watercolors."
            },
            {
                "en": "cultivate",
                "tr": "[ˈkʌltɪveɪt]",
                "ru": "культивировать, бережно выращивать (C2)",
                "ex": "Botanists cultivate rare species in the conservatory.",
                "example": "Botanists cultivate rare species in the conservatory."
            }
        ],
        "readingPassage": {
            "titleEn": "Стеклянная оранжерея у моря",
            "titleRu": "Ботаника",
            "audioFull": "On the hill above the bay stands an old Victorian greenhouse. Inside its warm glass arches, hundreds of tropical plants burst into blossom all year round. Given filtered sunlight and morning mist, delicate orchids with velvet petals thrive here, filling the air with an unforgettable honey fragrance.",
            "paragraphs": [
                {
                    "en": "On the hill above the bay stands an old Victorian greenhouse. Inside its warm glass arches, hundreds of tropical plants burst into blossom all year round.",
                    "ru": ""
                },
                {
                    "en": "Given filtered sunlight and morning mist, delicate orchids with velvet petals thrive here, filling the air with an unforgettable honey fragrance.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Бессоюзные условные и причастные конструкции (Given sunlight and care... / Left in the shade...)",
            "skyNote": "На уровне C2 вместо длинного «If plants are given enough sunlight...» используется сжатый причастный оборот в начале предложения: Given warm sunlight and gentle care, rare orchids thrive in the greenhouse!",
            "summary": "На уровне C2 вместо длинного «If plants are given enough sunlight...» используется сжатый причастный оборот в начале предложения: Given warm sunlight and gentle care, rare orchids thrive in the greenhouse!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Ботаника» (C2)",
                    "example": "In spring, cherry trees burst into blossom.",
                    "note": "Формула: Given sunlight and gentle care, delicate orchids thrive. На уровне C2 вместо длинного «If plants are given enough sunlight...» используется сжатый причастный оборот в начале предложения: Given warm sunlight and gentle care, rare orchids thrive in the greenhouse!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "The evening air was filled with the fragrance of jasmine.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Given sunlight and gentle care, delicate orchids thrive",
                    "example": "In spring, cherry trees burst into blossom.",
                    "note": "Бессоюзные условные и причастные конструкции (Given sunlight and care... / Left in the shade...)"
                }
            ],
            "cambridgeTip": "В теме «Ботаника» мы сразу применяем правило (Бессоюзные условные и причастные конструкции (Given sunlight and care... / Left in the shade...)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_56_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Ботаника • C2",
                "prompt": "Выбери лаконичную форму C2 («При наличии солнечного света и заботы редкие цветы процветают»):\n«___ warm sunlight and moisture, these rare orchids thrive even in winter.»",
                "options": [
                    "Given",
                    "Give",
                    "Giving",
                    "To give"
                ],
                "correct": "Given",
                "explanation": "Оборот Given + существительное («При условии наличия... / Когда им дают...») — классическая конструкция C2."
            },
            {
                "id": "unit_c2_56_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Ботаника • Конструктор фразы",
                "prompt": "Собери фразу: «Вечерний сад наполнился нежным ароматом цветущего жасмина»",
                "words": [
                    "The",
                    "garden",
                    "was",
                    "filled",
                    "with",
                    "jasmine",
                    "fragrance.",
                    "petals",
                    "thriving"
                ],
                "distractors": [
                    "petals",
                    "thriving"
                ],
                "correct": "The garden was filled with jasmine fragrance.",
                "explanation": "Be filled with... — быть наполненным чем-либо.",
                "promptRu": "Собери фразу: «Вечерний сад наполнился нежным ароматом цветущего жасмина»",
                "correctSentence": "The garden was filled with jasmine fragrance."
            },
            {
                "id": "unit_c2_56_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Ботаника • Чтение",
                "storyTitle": "Стеклянная оранжерея у моря",
                "paragraphs": [
                    {
                        "en": "On the hill above the bay stands an old Victorian greenhouse. Inside its warm glass arches, hundreds of tropical plants burst into blossom all year round.",
                        "ru": ""
                    },
                    {
                        "en": "Given filtered sunlight and morning mist, delicate orchids with velvet petals thrive here, filling the air with an unforgettable honey fragrance.",
                        "ru": ""
                    }
                ],
                "prompt": "Какие условия помогают нежным орхидеям с бархатными лепестками цвести круглый год в оранжерее?",
                "options": [
                    "Рассеянный солнечный свет и утренний туман (влага)",
                    "Холодный северный ветер",
                    "Полная темнота"
                ],
                "correct": "Рассеянный солнечный свет и утренний туман (влага)",
                "explanation": "В тексте: Given filtered sunlight and morning mist, delicate orchids with velvet petals thrive here."
            },
            {
                "id": "unit_c2_56_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Ботаника • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Given warm sunlight and gentle care, delicate flowers thrive.",
                "translationRu": "Получая тёплый солнечный свет и бережную заботу, нежные цветы пышно цветут.",
                "options": [
                    "Given warm sunlight and gentle care, delicate flowers thrive.",
                    "Dewdrops sparkled on the pink petals.",
                    "The greenhouse smells of jasmine fragrance."
                ],
                "correct": "Given warm sunlight and gentle care, delicate flowers thrive.",
                "explanation": "Прозвучала фраза: «Given warm sunlight and gentle care, delicate flowers thrive.» (Получая тёплый солнечный свет и бережную заботу, нежные цветы пышно цветут.)."
            },
            {
                "id": "unit_c2_56_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Ботаника • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Given sunlight and care, delicate flowers burst into blossom.",
                "translationRu": "Получая солнечный свет и заботу, нежные цветы пышно расцветают.",
                "correct": "Given sunlight and care, delicate flowers burst into blossom.",
                "explanation": "Отличное произношение! «Given sunlight and care, delicate flowers burst into blossom.» — Получая солнечный свет и заботу, нежные цветы пышно расцветают.."
            }
        ]
    },
    {
        "id": "unit_c2_57",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 57,
        "nodeType": "five_stage",
        "titleRu": "Астрономия",
        "titleEn": "Астрономия",
        "icon": "🔭",
        "sources": [
            "Тема: Астрономия",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "nebula",
                "tr": "[ˈnebjələ]",
                "ru": "туманность (звёздная)",
                "ex": "The telescope captured a pastel-pink nebula.",
                "example": "The telescope captured a pastel-pink nebula."
            },
            {
                "en": "eclipse",
                "tr": "[ɪˈklɪps]",
                "ru": "затмение",
                "ex": "People gathered on the coast to witness the solar eclipse.",
                "example": "People gathered on the coast to witness the solar eclipse."
            },
            {
                "en": "horizon",
                "tr": "[həˈraɪzn]",
                "ru": "горизонт",
                "ex": "A bright comet appeared just above the horizon.",
                "example": "A bright comet appeared just above the horizon."
            },
            {
                "en": "celestial",
                "tr": "[səˈlestiəl]",
                "ru": "небесный, звёздный",
                "ex": "Celestial navigation guided explorers for centuries.",
                "example": "Celestial navigation guided explorers for centuries."
            },
            {
                "en": "boundless",
                "tr": "[ˈbaʊndləs]",
                "ru": "безграничный, бескрайний",
                "ex": "Looking at the boundless sky fills us with wonder.",
                "example": "Looking at the boundless sky fills us with wonder."
            },
            {
                "en": "singularity",
                "tr": "[ˌsɪŋɡjuˈlærəti]",
                "ru": "сингулярность, уникальность (C2)",
                "ex": "Cosmologists study the physics of gravitational singularity.",
                "example": "Cosmologists study the physics of gravitational singularity."
            },
            {
                "en": "zenith",
                "tr": "[ˈzenɪθ]",
                "ru": "зенит, высшая точка (C2)",
                "ex": "At midnight, the constellation reached its zenith.",
                "example": "At midnight, the constellation reached its zenith."
            },
            {
                "en": "equinox",
                "tr": "[ˈiːkwɪnɒks]",
                "ru": "равноденствие (C2)",
                "ex": "During the autumn equinox, day and night are equal.",
                "example": "During the autumn equinox, day and night are equal."
            },
            {
                "en": "primordial",
                "tr": "[praɪˈmɔːdiəl]",
                "ru": "первозданный, изначальный (о Вселенной) (C2)",
                "ex": "Telescopes capture light from primordial galaxies.",
                "example": "Telescopes capture light from primordial galaxies."
            },
            {
                "en": "luminosity",
                "tr": "[ˌluːmɪˈnɒsəti]",
                "ru": "светимость звезды (C2)",
                "ex": "Astronomers measure a star's distance by its luminosity.",
                "example": "Astronomers measure a star's distance by its luminosity."
            }
        ],
        "readingPassage": {
            "titleEn": "Ночь в обсерватории на утёсе",
            "titleRu": "Астрономия",
            "audioFull": "Last August, we visited an astronomical observatory on a high coastal cliff. Through the main lens, we saw a distant nebula glowing like rose and turquoise watercolor in the boundless sky. So rare a celestial alignment occurred that night that observers could see both the rings of Saturn and a comet rising above the ocean horizon.",
            "paragraphs": [
                {
                    "en": "Last August, we visited an astronomical observatory on a high coastal cliff. Through the main lens, we saw a distant nebula glowing like rose and turquoise watercolor in the boundless sky.",
                    "ru": ""
                },
                {
                    "en": "So rare a celestial alignment occurred that night that observers could see both the rings of Saturn and a comet rising above the ocean horizon.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Обороты So + прилагательное + a + существительное (So rare a phenomenon is a total eclipse that...)",
            "skyNote": "Изящная конструкция уровня C2: когда мы ставим слово So перед прилагательным с исчисляемым существительным в единственном числе, артикль a/an перемещается МЕЖДУ прилагательным и существительным: So rare a phenomenon is a total solar eclipse that astronomers travel across the globe to see it!",
            "summary": "Изящная конструкция уровня C2: когда мы ставим слово So перед прилагательным с исчисляемым существительным в единственном числе, артикль a/an перемещается МЕЖДУ прилагательным и существительным: So rare a phenomenon is a total solar eclipse that astronomers travel across the globe to see it!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Астрономия» (C2)",
                    "example": "The telescope captured a pastel-pink nebula.",
                    "note": "Формула: So rare a sight was the comet above the horizon that everyone watched in awe. Изящная конструкция уровня C2: когда мы ставим слово So перед прилагательным с исчисляемым существительным в единственном числе, артикль a/an перемещается МЕЖДУ прилагательным и существительным: So rare a phenomenon is a total solar eclipse that astronomers travel across the globe to see it!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "People gathered on the coast to witness the solar eclipse.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "So rare a sight was the comet above the horizon that everyone watched in awe",
                    "example": "The telescope captured a pastel-pink nebula.",
                    "note": "Обороты So + прилагательное + a + существительное (So rare a phenomenon is a total eclipse that...)"
                }
            ],
            "cambridgeTip": "В теме «Астрономия» мы сразу применяем правило (Обороты So + прилагательное + a + существительное (So rare a phenomenon is a total eclipse that...)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_57_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Астрономия • C2",
                "prompt": "Выбери верный порядок артикля в конструкции уровня C2 со словом So:\n«So breathtaking ___ was the glowing nebula that the astronomers watched the screen in silence.»",
                "options": [
                    "a sight",
                    "sight",
                    "the sight",
                    "sights"
                ],
                "correct": "a sight",
                "explanation": "Формула C2: So + прилагательное + артикль a/an + существительное в ед. ч. (So breathtaking a sight)."
            },
            {
                "id": "unit_c2_57_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Астрономия • Конструктор фразы",
                "prompt": "Собери фразу: «Яркая комета сияла прямо над морским горизонтом»",
                "words": [
                    "A",
                    "bright",
                    "comet",
                    "shone",
                    "above",
                    "the",
                    "sea",
                    "horizon.",
                    "shining",
                    "nebula"
                ],
                "distractors": [
                    "shining",
                    "nebula"
                ],
                "correct": "A bright comet shone above the sea horizon.",
                "explanation": "Прошедшее время глагола shine — shone.",
                "promptRu": "Собери фразу: «Яркая комета сияла прямо над морским горизонтом»",
                "correctSentence": "A bright comet shone above the sea horizon."
            },
            {
                "id": "unit_c2_57_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Астрономия • Чтение",
                "storyTitle": "Ночь в обсерватории на утёсе",
                "paragraphs": [
                    {
                        "en": "Last August, we visited an astronomical observatory on a high coastal cliff. Through the main lens, we saw a distant nebula glowing like rose and turquoise watercolor in the boundless sky.",
                        "ru": ""
                    },
                    {
                        "en": "So rare a celestial alignment occurred that night that observers could see both the rings of Saturn and a comet rising above the ocean horizon.",
                        "ru": ""
                    }
                ],
                "prompt": "На что была похожа далёкая туманность в объективе телескопа?",
                "options": [
                    "На розово-бирюзовую акварель в бескрайнем небе",
                    "На серую тучу",
                    "На вспышку молнии"
                ],
                "correct": "На розово-бирюзовую акварель в бескрайнем небе",
                "explanation": "В тексте: glowing like rose and turquoise watercolor in the boundless sky."
            },
            {
                "id": "unit_c2_57_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Астрономия • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "A bright comet appeared right above the quiet ocean horizon.",
                "translationRu": "Яркая комета появилась прямо над тихим океанским горизонтом.",
                "options": [
                    "A bright comet appeared right above the quiet ocean horizon.",
                    "We watched the solar eclipse together.",
                    "The telescope showed a distant nebula."
                ],
                "correct": "A bright comet appeared right above the quiet ocean horizon.",
                "explanation": "Прозвучала фраза: «A bright comet appeared right above the quiet ocean horizon.» (Яркая комета появилась прямо над тихим океанским горизонтом.)."
            },
            {
                "id": "unit_c2_57_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Астрономия • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Looking at the boundless starry sky above the horizon inspires wonder.",
                "translationRu": "Взгляд на бескрайнее звёздное небо над горизонтом пробуждает восхищение.",
                "correct": "Looking at the boundless starry sky above the horizon inspires wonder.",
                "explanation": "Отличное произношение! «Looking at the boundless starry sky above the horizon inspires wonder.» — Взгляд на бескрайнее звёздное небо над горизонтом пробуждает восхищение.."
            }
        ]
    },
    {
        "id": "unit_c2_58",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 58,
        "nodeType": "five_stage",
        "titleRu": "Музыкальность",
        "titleEn": "Музыкальность",
        "icon": "🎼",
        "sources": [
            "Тема: Музыкальность",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "symphony",
                "tr": "[ˈsɪmfəni]",
                "ru": "симфония",
                "ex": "The composer dedicated his symphony to the sea.",
                "example": "The composer dedicated his symphony to the sea."
            },
            {
                "en": "acoustic",
                "tr": "[əˈkuːstɪk]",
                "ru": "акустика; акустический",
                "ex": "The wooden hall has flawless acoustics.",
                "example": "The wooden hall has flawless acoustics."
            },
            {
                "en": "virtuoso",
                "tr": "[ˌvɜːtʃuˈəʊsəʊ]",
                "ru": "виртуоз; виртуозный",
                "ex": "The young violinist gave a virtuoso performance.",
                "example": "The young violinist gave a virtuoso performance."
            },
            {
                "en": "crescendo",
                "tr": "[krəˈʃendəʊ]",
                "ru": "крещендо (постепенное нарастание звучания)",
                "ex": "The orchestra rose to a powerful crescendo.",
                "example": "The orchestra rose to a powerful crescendo."
            },
            {
                "en": "conductor",
                "tr": "[kənˈdʌktə]",
                "ru": "дирижёр",
                "ex": "With a gentle movement of the baton, the conductor began.",
                "example": "With a gentle movement of the baton, the conductor began."
            },
            {
                "en": "dissonance",
                "tr": "[ˈdɪsənəns]",
                "ru": "диссонанс (переходящий в гармонию) (C2)",
                "ex": "Subtle dissonance resolves into a warm chord.",
                "example": "Subtle dissonance resolves into a warm chord."
            },
            {
                "en": "sonorous",
                "tr": "[ˈsɒnərəs]",
                "ru": "глубокий, полнозвучный, певучий (C2)",
                "ex": "The cello produced a rich, sonorous tone.",
                "example": "The cello produced a rich, sonorous tone."
            },
            {
                "en": "polyphony",
                "tr": "[pəˈlɪfəni]",
                "ru": "полифония, многоголосие (C2)",
                "ex": "Baroque polyphony weaves independent melodies together.",
                "example": "Baroque polyphony weaves independent melodies together."
            },
            {
                "en": "maestro",
                "tr": "[ˈmaɪstrəʊ]",
                "ru": "маэстро, выдающийся музыкант (C2)",
                "ex": "The audience gave the maestro a standing ovation.",
                "example": "The audience gave the maestro a standing ovation."
            },
            {
                "en": "philharmonic",
                "tr": "[ˌfɪlɑːˈmɒnɪk]",
                "ru": "филармонический (C2)",
                "ex": "She is a soloist with the Philharmonic Orchestra.",
                "example": "She is a soloist with the Philharmonic Orchestra."
            }
        ],
        "readingPassage": {
            "titleEn": "Симфония прилива",
            "titleRu": "Музыкальность",
            "audioFull": "In the historic philharmonic hall, famous for its warm wooden acoustics, a young virtuoso pianist performed Claude Debussy's 'La Mer'. Scarcely had the conductor raised his baton when the strings whispered like a morning breeze. By the final crescendo, every listener felt as if ocean waves were sparkling right inside the hall.",
            "paragraphs": [
                {
                    "en": "In the historic philharmonic hall, famous for its warm wooden acoustics, a young virtuoso pianist performed Claude Debussy's 'La Mer'.",
                    "ru": ""
                },
                {
                    "en": "Scarcely had the conductor raised his baton when the strings whispered like a morning breeze. By the final crescendo, every listener felt as if ocean waves were sparkling right inside the hall.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Конструкция Scarcely / Hardly ... when и No sooner ... than («Едва дирижёр поднял палочку, как...»)",
            "skyNote": "Чтобы передать мгновенную смену событий в зале («Едва дирижёр поднял палочку, как зазвучала симфония»), на уровне C2 используют Hardly / Scarcely had + подлежащее + V3 ... when... или No sooner had + подлежащее + V3 ... than...!",
            "summary": "Чтобы передать мгновенную смену событий в зале («Едва дирижёр поднял палочку, как зазвучала симфония»), на уровне C2 используют Hardly / Scarcely had + подлежащее + V3 ... when... или No sooner had + подлежащее + V3 ... than...!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Музыкальность» (C2)",
                    "example": "The composer dedicated his symphony to the sea.",
                    "note": "Формула: Scarcely had the conductor raised his hand when the symphony began. Чтобы передать мгновенную смену событий в зале («Едва дирижёр поднял палочку, как зазвучала симфония»), на уровне C2 используют Hardly / Scarcely had + подлежащее + V3 ... when... или No sooner had + подлежащее + V3 ... than...!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "The wooden hall has flawless acoustics.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Scarcely had the conductor raised his hand when the symphony began",
                    "example": "The composer dedicated his symphony to the sea.",
                    "note": "Конструкция Scarcely / Hardly ... when и No sooner ... than («Едва дирижёр поднял палочку, как...»)"
                }
            ],
            "cambridgeTip": "В теме «Музыкальность» мы сразу применяем правило (Конструкция Scarcely / Hardly ... when и No sooner ... than («Едва дирижёр поднял палочку, как...»)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_58_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Музыкальность • C2",
                "prompt": "Выбери верный союз для пары со словом Scarcely had...:\n«Scarcely had the virtuoso violinist played the final note ___ the audience rose in applause.»",
                "options": [
                    "when",
                    "than",
                    "then",
                    "as"
                ],
                "correct": "when",
                "explanation": "Конструкция Scarcely / Hardly had ... сочетается с союзом when (а No sooner had ... — с союзом than)."
            },
            {
                "id": "unit_c2_58_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Музыкальность • Конструктор фразы",
                "prompt": "Собери фразу: «Едва дирижёр улыбнулся, как зазвучала морская симфония»",
                "words": [
                    "Scarcely",
                    "had",
                    "the",
                    "conductor",
                    "smiled",
                    "when",
                    "the",
                    "symphony",
                    "began.",
                    "than",
                    "smiling"
                ],
                "distractors": [
                    "than",
                    "smiling"
                ],
                "correct": "Scarcely had the conductor smiled when the symphony began.",
                "explanation": "Инверсия в первой части: Scarcely had + подлежащее + V3 ... when ...",
                "promptRu": "Собери фразу: «Едва дирижёр улыбнулся, как зазвучала морская симфония»",
                "correctSentence": "Scarcely had the conductor smiled when the symphony began."
            },
            {
                "id": "unit_c2_58_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Музыкальность • Чтение",
                "storyTitle": "Симфония прилива",
                "paragraphs": [
                    {
                        "en": "In the historic philharmonic hall, famous for its warm wooden acoustics, a young virtuoso pianist performed Claude Debussy's 'La Mer'.",
                        "ru": ""
                    },
                    {
                        "en": "Scarcely had the conductor raised his baton when the strings whispered like a morning breeze. By the final crescendo, every listener felt as if ocean waves were sparkling right inside the hall.",
                        "ru": ""
                    }
                ],
                "prompt": "Какое произведение исполняли в филармонии с тёплой деревянной акустикой?",
                "options": [
                    "«Море» (La Mer) Клода Дебюсси",
                    "«Времена года» Вивальди",
                    "«Лунную сонату»"
                ],
                "correct": "«Море» (La Mer) Клода Дебюсси",
                "explanation": "В тексте: performed Claude Debussy's 'La Mer'."
            },
            {
                "id": "unit_c2_58_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Музыкальность • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Scarcely had the conductor raised his hand when the symphony began.",
                "translationRu": "Едва дирижёр поднял руку, как зазвучала симфония.",
                "options": [
                    "Scarcely had the conductor raised his hand when the symphony began.",
                    "The violinist gave a virtuoso performance.",
                    "This concert hall has warm acoustics."
                ],
                "correct": "Scarcely had the conductor raised his hand when the symphony began.",
                "explanation": "Прозвучала фраза: «Scarcely had the conductor raised his hand when the symphony began.» (Едва дирижёр поднял руку, как зазвучала симфония.)."
            },
            {
                "id": "unit_c2_58_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Музыкальность • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "The virtuoso orchestra played a breathtaking sea symphony.",
                "translationRu": "Виртуозный оркестр исполнил захватывающую морскую симфонию.",
                "correct": "The virtuoso orchestra played a breathtaking sea symphony.",
                "explanation": "Отличное произношение! «The virtuoso orchestra played a breathtaking sea symphony.» — Виртуозный оркестр исполнил захватывающую морскую симфонию.."
            }
        ]
    },
    {
        "id": "unit_c2_59",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 59,
        "nodeType": "five_stage",
        "titleRu": "Наследие",
        "titleEn": "Наследие",
        "icon": "🏺",
        "sources": [
            "Тема: Наследие",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "manuscript",
                "tr": "[ˈmænjʊskrɪpt]",
                "ru": "старинная рукопись, манускрипт",
                "ex": "The ancient manuscript was preserved in the abbey library.",
                "example": "The ancient manuscript was preserved in the abbey library."
            },
            {
                "en": "artifact",
                "tr": "[ˈɑːtɪfækt]",
                "ru": "артефакт, предмет древности",
                "ex": "Divers discovered a bronze artifact on the seabed.",
                "example": "Divers discovered a bronze artifact on the seabed."
            },
            {
                "en": "chronicle",
                "tr": "[ˈkrɒnɪkl]",
                "ru": "летопись, хроника",
                "ex": "Medieval chronicles describe prosperous port cities.",
                "example": "Medieval chronicles describe prosperous port cities."
            },
            {
                "en": "preserve",
                "tr": "[prɪˈzɜːv]",
                "ru": "бережно сохранять",
                "ex": "Digital archives help preserve rare manuscripts.",
                "example": "Digital archives help preserve rare manuscripts."
            },
            {
                "en": "civilization",
                "tr": "[ˌsɪvəlaɪˈzeɪʃn]",
                "ru": "цивилизация",
                "ex": "Maritime trade connected ancient civilizations.",
                "example": "Maritime trade connected ancient civilizations."
            },
            {
                "en": "antiquity",
                "tr": "[ænˈtɪkwəti]",
                "ru": "античность, глубокая древность (C2)",
                "ex": "Amphorae from antiquity were found near the reef.",
                "example": "Amphorae from antiquity were found near the reef."
            },
            {
                "en": "decipher",
                "tr": "[dɪˈsaɪfə]",
                "ru": "расшифровывать древние письмена (C2)",
                "ex": "Linguists managed to decipher the ancient script.",
                "example": "Linguists managed to decipher the ancient script."
            },
            {
                "en": "posterity",
                "tr": "[pɒˈsterəti]",
                "ru": "будущие поколения, потомки (C2)",
                "ex": "Archivists preserve these chronicles for posterity.",
                "example": "Archivists preserve these chronicles for posterity."
            },
            {
                "en": "parchment",
                "tr": "[ˈpɑːtʃmənt]",
                "ru": "пергамент (C2)",
                "ex": "The map was drawn in ink on fine parchment.",
                "example": "The map was drawn in ink on fine parchment."
            },
            {
                "en": "excavate",
                "tr": "[ˈekskəveɪt]",
                "ru": "проводить археологические раскопки (C2)",
                "ex": "Archaeologists excavated an ancient harbour.",
                "example": "Archaeologists excavated an ancient harbour."
            }
        ],
        "readingPassage": {
            "titleEn": "Библиотека над бухтой",
            "titleRu": "Наследие",
            "audioFull": "High on a sunlit cliff stands a monastery library where scholars have preserved illuminated manuscripts and navigation chronicles for eight hundred years. But for the dedication of these quiet guardians, priceless maps of ancient Mediterranean civilizations would never have survived to inspire modern historians.",
            "paragraphs": [
                {
                    "en": "High on a sunlit cliff stands a monastery library where scholars have preserved illuminated manuscripts and navigation chronicles for eight hundred years.",
                    "ru": ""
                },
                {
                    "en": "But for the dedication of these quiet guardians, priceless maps of ancient Mediterranean civilizations would never have survived to inspire modern historians.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Оборот But for / Were it not for («Если бы не бережная работа историков...»)",
            "skyNote": "На уровне C2 вместо громоздкого «If it had not been for...» используется элегантный предложный оборот But for + существительное («Если бы не...»): But for the dry climate and careful archivists, this priceless manuscript would have been lost centuries ago!",
            "summary": "На уровне C2 вместо громоздкого «If it had not been for...» используется элегантный предложный оборот But for + существительное («Если бы не...»): But for the dry climate and careful archivists, this priceless manuscript would have been lost centuries ago!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Наследие» (C2)",
                    "example": "The ancient manuscript was preserved in the abbey library.",
                    "note": "Формула: But for careful archivists, this ancient manuscript would have been lost. На уровне C2 вместо громоздкого «If it had not been for...» используется элегантный предложный оборот But for + существительное («Если бы не...»): But for the dry climate and careful archivists, this priceless manuscript would have been lost centuries ago!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "Divers discovered a bronze artifact on the seabed.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "But for careful archivists, this ancient manuscript would have been lost",
                    "example": "The ancient manuscript was preserved in the abbey library.",
                    "note": "Оборот But for / Were it not for («Если бы не бережная работа историков...»)"
                }
            ],
            "cambridgeTip": "В теме «Наследие» мы сразу применяем правило (Оборот But for / Were it not for («Если бы не бережная работа историков...»)) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_59_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Наследие • C2",
                "prompt": "Выбери изящный оборот уровня C2 со значением «Если бы не...»:\n«___ the underwater archaeologists, these ancient bronze artifacts would have remained hidden forever.»",
                "options": [
                    "But for",
                    "Unless",
                    "Except",
                    "Despite"
                ],
                "correct": "But for",
                "explanation": "Оборот But for + существительное («Если бы не подводные археологи...») заменяет условное придаточное 3-го типа."
            },
            {
                "id": "unit_c2_59_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Наследие • Конструктор фразы",
                "prompt": "Собери фразу: «Цифровые архивы помогают бережно сохранять древние рукописи»",
                "words": [
                    "Digital",
                    "archives",
                    "help",
                    "preserve",
                    "ancient",
                    "manuscripts.",
                    "preserves",
                    "chronicle"
                ],
                "distractors": [
                    "preserves",
                    "chronicle"
                ],
                "correct": "Digital archives help preserve ancient manuscripts.",
                "explanation": "После глагола help может идти чистый инфинитив без to: help preserve.",
                "promptRu": "Собери фразу: «Цифровые архивы помогают бережно сохранять древние рукописи»",
                "correctSentence": "Digital archives help preserve ancient manuscripts."
            },
            {
                "id": "unit_c2_59_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Наследие • Чтение",
                "storyTitle": "Библиотека над бухтой",
                "paragraphs": [
                    {
                        "en": "High on a sunlit cliff stands a monastery library where scholars have preserved illuminated manuscripts and navigation chronicles for eight hundred years.",
                        "ru": ""
                    },
                    {
                        "en": "But for the dedication of these quiet guardians, priceless maps of ancient Mediterranean civilizations would never have survived to inspire modern historians.",
                        "ru": ""
                    }
                ],
                "prompt": "Что хранят учёные в библиотеке на солнечном утёсе уже восемьсот лет?",
                "options": [
                    "Старинные иллюминированные рукописи, карты и навигационные хроники",
                    "Современные журналы мод",
                    "Коллекцию автомобилей"
                ],
                "correct": "Старинные иллюминированные рукописи, карты и навигационные хроники",
                "explanation": "В тексте: preserved illuminated manuscripts and navigation chronicles for eight hundred years."
            },
            {
                "id": "unit_c2_59_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Наследие • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "But for dedicated historians, this ancient manuscript would have been lost.",
                "translationRu": "Если бы не преданные своему делу историки, эта древняя рукопись была бы утрачена.",
                "options": [
                    "But for dedicated historians, this ancient manuscript would have been lost.",
                    "Divers found a rare bronze artifact.",
                    "We must preserve our cultural heritage."
                ],
                "correct": "But for dedicated historians, this ancient manuscript would have been lost.",
                "explanation": "Прозвучала фраза: «But for dedicated historians, this ancient manuscript would have been lost.» (Если бы не преданные своему делу историки, эта древняя рукопись была бы утрачена.)."
            },
            {
                "id": "unit_c2_59_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Наследие • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Careful historians preserve ancient manuscripts for future generations.",
                "translationRu": "Бережные историки сохраняют древние рукописи для будущих поколений.",
                "correct": "Careful historians preserve ancient manuscripts for future generations.",
                "explanation": "Отличное произношение! «Careful historians preserve ancient manuscripts for future generations.» — Бережные историки сохраняют древние рукописи для будущих поколений.."
            }
        ]
    },
    {
        "id": "unit_c2_60",
        "zoneId": "abyss_c2",
        "cefr": "C2",
        "number": 60,
        "nodeType": "five_stage",
        "titleRu": "Мастерство",
        "titleEn": "Мастерство",
        "icon": "👑",
        "sources": [
            "Тема: Мастерство",
            "Уровень C2"
        ],
        "vocab": [
            {
                "en": "mastery",
                "tr": "[ˈmɑːstəri]",
                "ru": "совершенное мастерство, свободное владение",
                "ex": "True mastery is a joyful lifelong journey.",
                "example": "True mastery is a joyful lifelong journey."
            },
            {
                "en": "effortless",
                "tr": "[ˈefətləs]",
                "ru": "лёгкий, непринуждённый",
                "ex": "Her English sounds natural and effortless.",
                "example": "Her English sounds natural and effortless."
            },
            {
                "en": "horizon",
                "tr": "[həˈraɪzn]",
                "ru": "кругозор, горизонт",
                "ex": "Every new language broadens your horizon.",
                "example": "Every new language broadens your horizon."
            },
            {
                "en": "accomplish",
                "tr": "[əˈkʌmplɪʃ]",
                "ru": "достигать, блестяще справляться",
                "ex": "Look at how much you have accomplished on this path!",
                "example": "Look at how much you have accomplished on this path!"
            },
            {
                "en": "inspire",
                "tr": "[ɪnˈspaɪə]",
                "ru": "вдохновлять",
                "ex": "Your dedication inspires Sky and all his ocean friends.",
                "example": "Your dedication inspires Sky and all his ocean friends."
            },
            {
                "en": "virtuosity",
                "tr": "[ˌvɜːtʃuˈɒsəti]",
                "ru": "виртуозность, высочайшее мастерство (C2)",
                "ex": "Her linguistic virtuosity shines in every conversation.",
                "example": "Her linguistic virtuosity shines in every conversation."
            },
            {
                "en": "culmination",
                "tr": "[ˌkʌlmɪˈneɪʃn]",
                "ru": "кульминация, венец труда (C2)",
                "ex": "Level C2 is the joyful culmination of your journey.",
                "example": "Level C2 is the joyful culmination of your journey."
            },
            {
                "en": "perseverance",
                "tr": "[ˌpɜːsɪˈvɪərəns]",
                "ru": "упорство, настойчивость (C2)",
                "ex": "Daily perseverance turns dreams into reality.",
                "example": "Daily perseverance turns dreams into reality."
            },
            {
                "en": "erudition",
                "tr": "[ˌerʊˈdɪʃn]",
                "ru": "эрудиция, глубина познаний (C2)",
                "ex": "Reading across six levels builds broad erudition.",
                "example": "Reading across six levels builds broad erudition."
            },
            {
                "en": "pinnacle",
                "tr": "[ˈpɪnəkl]",
                "ru": "вершина, пик мастерства (C2)",
                "ex": "You have reached the pinnacle of the English Ocean!",
                "example": "You have reached the pinnacle of the English Ocean!"
            }
        ],
        "readingPassage": {
            "titleEn": "Жемчужина Атлантиды",
            "titleRu": "Мастерство",
            "audioFull": "When you first dived into the Sunny Lagoon with Sky the pink dolphin, English rules may have seemed like an unfamiliar ocean. Now, having travelled past coral reefs and glowing depths with Lulu, Mira, and Blinky, look at how much you have accomplished! Your speech is warm, accurate, and effortless — and the whole ocean of world culture is open before you.",
            "paragraphs": [
                {
                    "en": "When you first dived into the Sunny Lagoon with Sky the pink dolphin, English rules may have seemed like an unfamiliar ocean.",
                    "ru": ""
                },
                {
                    "en": "Now, having travelled past coral reefs and glowing depths with Lulu, Mira, and Blinky, look at how much you have accomplished! Your speech is warm, accurate, and effortless — and the whole ocean of world culture is open before you.",
                    "ru": ""
                }
            ]
        },
        "theory": {
            "headline": "Вершина C2 — свободный синтез всех времён, инверсии и живой идиоматики",
            "skyNote": "Ты прошла путь от первых приветствий в Солнечной Лагуне до глубин Атлантиды C2! На этом уровне грамматика и лексика работают как единая музыка: Whatever challenges may arise, you have accomplished effortless mastery that broadens your horizon every single day!",
            "summary": "Ты прошла путь от первых приветствий в Солнечной Лагуне до глубин Атлантиды C2! На этом уровне грамматика и лексика работают как единая музыка: Whatever challenges may arise, you have accomplished effortless mastery that broadens your horizon every single day!",
            "timelineComparison": [
                {
                    "label": "💡 Правило в контексте темы «Мастерство» (C2)",
                    "example": "True mastery is a joyful lifelong journey.",
                    "note": "Формула: Look at how much you have accomplished — your English is effortless!. Ты прошла путь от первых приветствий в Солнечной Лагуне до глубин Атлантиды C2! На этом уровне грамматика и лексика работают как единая музыка: Whatever challenges may arise, you have accomplished effortless mastery that broadens your horizon every single day!"
                },
                {
                    "label": "🌊 Живой пример на лексике C2",
                    "example": "Her English sounds natural and effortless.",
                    "note": "Все 10 слов этого урока относятся строго к уровню C2 (Oxford / Cambridge EVP)."
                }
            ],
            "murphyRules": [
                {
                    "formula": "Look at how much you have accomplished — your English is effortless!",
                    "example": "True mastery is a joyful lifelong journey.",
                    "note": "Вершина C2 — свободный синтез всех времён, инверсии и живой идиоматики"
                }
            ],
            "cambridgeTip": "В теме «Мастерство» мы сразу применяем правило (Вершина C2 — свободный синтез всех времён, инверсии и живой идиоматики) на новых словах урока!"
        },
        "exercises": [
            {
                "id": "unit_c2_60_st1",
                "stageNum": 1,
                "stageLabel": "Этап 1/5 • Слова и грамматика",
                "type": "multiple_choice",
                "showVocabIntro": true,
                "badge": "Мастерство • C2",
                "prompt": "Выбери финальную конструкцию уровня C2:\n«No matter how complex a text ___ be, you now read and speak English with effortless confidence.»",
                "options": [
                    "may",
                    "is",
                    "was",
                    "did"
                ],
                "correct": "may",
                "explanation": "Оборот уступки C2: No matter how + прилагательное + подлежащее + may be («Каким бы сложным ни был текст...»)."
            },
            {
                "id": "unit_c2_60_st2",
                "stageNum": 2,
                "stageLabel": "Этап 2/5 • Порядок слов",
                "type": "word_bank",
                "badge": "Мастерство • Конструктор фразы",
                "prompt": "Собери финальную фразу: «Каждый новый язык расширяет наш кругозор и дарит свободное мастерство»",
                "words": [
                    "Every",
                    "language",
                    "broadens",
                    "our",
                    "horizon",
                    "and",
                    "brings",
                    "mastery.",
                    "broaden",
                    "effortless"
                ],
                "distractors": [
                    "broaden",
                    "effortless"
                ],
                "correct": "Every language broadens our horizon and brings mastery.",
                "explanation": "Every language (ед. ч.) требует окончания -s у глаголов: broadens ... and brings.",
                "promptRu": "Собери финальную фразу: «Каждый новый язык расширяет наш кругозор и дарит свободное мастерство»",
                "correctSentence": "Every language broadens our horizon and brings mastery."
            },
            {
                "id": "unit_c2_60_st3",
                "stageNum": 3,
                "stageLabel": "Этап 3/5 • Чтение",
                "type": "reading_comprehension",
                "badge": "Мастерство • Чтение",
                "storyTitle": "Жемчужина Атлантиды",
                "paragraphs": [
                    {
                        "en": "When you first dived into the Sunny Lagoon with Sky the pink dolphin, English rules may have seemed like an unfamiliar ocean.",
                        "ru": ""
                    },
                    {
                        "en": "Now, having travelled past coral reefs and glowing depths with Lulu, Mira, and Blinky, look at how much you have accomplished! Your speech is warm, accurate, and effortless — and the whole ocean of world culture is open before you.",
                        "ru": ""
                    }
                ],
                "prompt": "Что открывается перед героем в финале путешествия по всем глубинам со Скаем и его друзьями?",
                "options": [
                    "Весь океан мировой культуры и свободное, лёгкое владение английским",
                    "Только первая страница словаря",
                    "Закрытая дверь"
                ],
                "correct": "Весь океан мировой культуры и свободное, лёгкое владение английским",
                "explanation": "В тексте: Your speech is warm, accurate, and effortless — and the whole ocean of world culture is open before you."
            },
            {
                "id": "unit_c2_60_st4",
                "stageNum": 4,
                "stageLabel": "Этап 4/5 • Аудирование",
                "type": "listening",
                "badge": "Мастерство • На слух",
                "prompt": "Прослушай фразу и выбери то, что прозвучало:",
                "audioText": "Look at how much you have accomplished on your journey to mastery!",
                "translationRu": "Посмотри, как многого ты достигла на своём пути к мастерству!",
                "options": [
                    "Look at how much you have accomplished on your journey to mastery!",
                    "Every language broadens your horizon.",
                    "Your English sounds warm and effortless."
                ],
                "correct": "Look at how much you have accomplished on your journey to mastery!",
                "explanation": "Прозвучала фраза: «Look at how much you have accomplished on your journey to mastery!» (Посмотри, как многого ты достигла на своём пути к мастерству!)."
            },
            {
                "id": "unit_c2_60_st5",
                "stageNum": 5,
                "stageLabel": "Этап 5/5 • Говорение",
                "type": "speaking",
                "badge": "Мастерство • Произношение",
                "prompt": "Прослушай и произнеси эту фразу вслух:",
                "targetPhrase": "Look at how much I have accomplished on my journey to English mastery!",
                "translationRu": "Посмотри, как многого я достигла на своём пути к мастерству в английском!",
                "correct": "Look at how much I have accomplished on my journey to English mastery!",
                "explanation": "Отличное произношение! «Look at how much I have accomplished on my journey to English mastery!» — Посмотри, как многого я достигла на своём пути к мастерству в английском!."
            }
        ]
    }
],

  stories: [
    {
        "id": "story_1",
        "titleRu": "Пропавший бантик акулёнка Лулу",
        "titleEn": "Lulu’s Missing Pink Bow",
        "cefr": "A1–A2",
        "coverArt": "story_1",
        "subtitle": "Добрая история о том, как Скай и Русалка Мира искали любимый бантик Лулу",
        "rewardXp": 40,
        "rewardPearls": 30,
        "lines": [
            {
                "speaker": "shark",
                "textEn": "Oh no! Sky, Mira, can you help me? I am looking for my favourite pink bow everywhere!",
                "textRu": "О нет! Скай, Мира, вы можете мне помочь? Я повсюду ищу свой любимый розовый бантик!"
            },
            {
                "speaker": "sky",
                "textEn": "Don’t cry, Lulu! When did you see your bow last time?",
                "textRu": "Не плачь, Лулу! Когда ты видела свой бантик в последний раз?"
            },
            {
                "speaker": "shark",
                "textEn": "I was wearing it this morning while I was swimming near the warm coral garden.",
                "textRu": "Он был на мне этим утром, пока я плавала возле тёплого кораллового сада."
            },
            {
                "type": "question",
                "prompt": "Что делала акулёнок Лулу утром, когда на ней был бантик?",
                "options": [
                    "Плавала возле кораллового сада (was swimming)",
                    "Спала на берегу (was sleeping)",
                    "Пила какао в кафе (was drinking cocoa)"
                ],
                "correct": "Плавала возле кораллового сада (was swimming)",
                "explanation": "Лулу сказала: «while I was swimming near the warm coral garden» (длительное действие в прошлом — Past Continuous)."
            },
            {
                "speaker": "mermaid",
                "textEn": "Look over there! Blinky the jellyfish is floating towards us, and he is holding something pink!",
                "textRu": "Посмотрите туда! Медузёнок Блинки плывёт к нам, и он держит что-то розовое!"
            },
            {
                "speaker": "jelly",
                "textEn": "Hello, friends! I have just found this cute pink ribbon on a sea plant. Does it belong to you, Lulu?",
                "textRu": "Привет, друзья! Я только что нашёл этот милый розовый бантик на морском растении. Он принадлежит тебе, Лулу?"
            },
            {
                "type": "question",
                "prompt": "Почему медузёнок Блинки сказал «Does it belong to you» (а не «Is it belonging»)?",
                "options": [
                    "Потому что глагол belong (принадлежать) — глагол состояния и не используется с -ing",
                    "Потому что это будущее время",
                    "Потому что медузы говорят только в Past Simple"
                ],
                "correct": "Потому что глагол belong (принадлежать) — глагол состояния и не используется с -ing",
                "explanation": "Верно! По правилу Мёрфи (Unit 4A) глагол belong никогда не ставится в Continuous."
            },
            {
                "speaker": "shark",
                "textEn": "Yes, it’s mine! Thank you so much, Blinky! You are the kindest friends in the whole ocean!",
                "textRu": "Да, он мой! Спасибо тебе огромное, Блинки! Вы самые добрые друзья во всём океане!"
            }
        ]
    },
    {
        "id": "story_2",
        "titleRu": "Светящееся кафе медузёнка Блинки",
        "titleEn": "Blinky’s Glowing Café",
        "cefr": "B1",
        "coverArt": "story_2",
        "subtitle": "Как друзья открыли уютное подводное кафе с какао на глубине 200 метров",
        "rewardXp": 50,
        "rewardPearls": 35,
        "lines": [
            {
                "speaker": "jelly",
                "textEn": "Welcome to my new underwater café! I have been preparing warm cocoa and berry pies since morning.",
                "textRu": "Добро пожаловать в моё новое подводное кафе! Я готовлю тёплое какао и ягодные пироги с самого утра."
            },
            {
                "speaker": "sky",
                "textEn": "It looks wonderful, Blinky! By the way, we really look forward to trying your famous seashell cookies!",
                "textRu": "Выглядит чудесно, Блинки! Кстати, мы с нетерпением ждём возможности попробовать твоё знаменитое печенье-ракушки!"
            },
            {
                "type": "question",
                "prompt": "Какую форму глагола использовал розовый дельфин Скай после «look forward to»?",
                "options": [
                    "Герундий с окончанием -ing (trying)",
                    "Инфинитив без частицы (try)",
                    "Прошедшее время (tried)"
                ],
                "correct": "Герундий с окончанием -ing (trying)",
                "explanation": "В выражении «look forward to» словечко to является предлогом, поэтому после него всегда идёт V-ing (trying)!"
            },
            {
                "speaker": "mermaid",
                "textEn": "Oh, it is quite dark at this depth! How will the little fish find the café in the evening?",
                "textRu": "Ой, на этой глубине довольно темно! Как маленькие рыбки найдут кафе вечером?"
            },
            {
                "speaker": "shark",
                "textEn": "If Blinky sits near the entrance, his glowing tentacles will light up the whole coral reef!",
                "textRu": "Если Блинки сядет у входа, его светящиеся щупальца осветят весь коралловый риф!"
            },
            {
                "type": "question",
                "prompt": "Какое правило использовала акулёнок Лулу во фразе «If Blinky sits..., his tentacles will light up...»?",
                "options": [
                    "First Conditional (после If ставится Present Simple, а во второй части — will)",
                    "Past Perfect",
                    "Passive Voice"
                ],
                "correct": "First Conditional (после If ставится Present Simple, а во второй части — will)",
                "explanation": "В реальном условии о будущем (First Conditional) после If всегда используется Present Simple (sits)!"
            },
            {
                "speaker": "sky",
                "textEn": "Brilliant idea, Lulu! Let’s celebrate together!",
                "textRu": "Блестящая идея, Лулу! Давайте праздновать вместе!"
            }
        ]
    },
    {
        "id": "story_3",
        "titleRu": "Секрет короны Атлантиды",
        "titleEn": "The Secret of the Atlantis Crown",
        "cefr": "B2–C1",
        "coverArt": "story_3",
        "subtitle": "Глубоководная экспедиция Ская и Русалки Миры к древним вратам Атлантиды",
        "rewardXp": 65,
        "rewardPearls": 50,
        "lines": [
            {
                "speaker": "mermaid",
                "textEn": "Never before have I swum so deep into the twilight trench! Look at those ancient marble columns.",
                "textRu": "Никогда прежде я не заплывала так глубоко в сумеречную впадину! Посмотрите на те древние мраморные колонны."
            },
            {
                "speaker": "sky",
                "textEn": "Wait! The gate is already open. Someone must have unlocked it before we arrived!",
                "textRu": "Подождите! Врата уже открыты. Должно быть, кто-то отпер их до того, как мы приплыли!"
            },
            {
                "type": "question",
                "prompt": "Что означает фраза Ская «Someone must have unlocked it»?",
                "options": [
                    "Уверенное предположение о прошлом («Должно быть, кто-то уже открыл их»)",
                    "Обязанность в будущем («Кто-то обязан их открыть»)",
                    "Запрет («Никому нельзя открывать»)"
                ],
                "correct": "Уверенное предположение о прошлом («Должно быть, кто-то уже открыл их»)",
                "explanation": "Модальный глагол «must have + V3» выражает логическую уверенность (95%) относительно события в прошлом."
            },
            {
                "speaker": "shark",
                "textEn": "Look inside! It’s our friend Blinky! He swam ahead of us to turn on the glowing crystals!",
                "textRu": "Посмотрите внутрь! Это же наш друг Блинки! Он приплыл раньше нас, чтобы зажечь светящиеся кристаллы!"
            },
            {
                "speaker": "jelly",
                "textEn": "Had it not been for your grammar skills, we would never have read the ancient map of Atlantis!",
                "textRu": "Если бы не ваши знания грамматики, мы бы никогда не смогли прочитать древнюю карту Атлантиды!"
            }
        ]
    },
    {
        "id": "story_4",
        "titleRu": "Охота за жемчужным сундуком",
        "titleEn": "The Pearl Treasure Scooter Chase",
        "cefr": "A2",
        "coverArt": "story_4",
        "subtitle": "Скай и акулёнок Лулу мчатся на подводном скутере к сияющему сундуку сокровищ",
        "rewardXp": 45,
        "rewardPearls": 35,
        "lines": [
            {
                "speaker": "sky",
                "textEn": "Hold on tight, Lulu! This new electric scooter is much faster than swimming on our own!",
                "textRu": "Держись крепче, Лулу! Этот новый электрический скутер намного быстрее, чем плыть самим!"
            },
            {
                "speaker": "shark",
                "textEn": "Wow, look at those bright coral arches! Is that a golden treasure chest shining behind the reef?",
                "textRu": "Вау, посмотри на эти яркие коралловые арки! Это что, золотой сундук с сокровищами сияет за рифом?"
            },
            {
                "type": "question",
                "prompt": "Какую конструкцию использовал Скай для сравнения скорости («намного быстрее, чем»)?",
                "options": [
                    "Сравнительную степень с усилением: much faster than",
                    "Превосходную степень: the fastest",
                    "Прошедшее время: was fast"
                ],
                "correct": "Сравнительную степень с усилением: much faster than",
                "explanation": "Для усиления сравнительной степени прилагательного в английском используется слово much (much faster than — намного быстрее, чем)."
            },
            {
                "speaker": "sky",
                "textEn": "Yes! Let’s open it together. Inside there are hundreds of rainbow pearls and an old compass!",
                "textRu": "Да! Давай откроем его вместе. Внутри сотни радужных жемчужин и старинный компас!"
            }
        ]
    },
    {
        "id": "story_5",
        "titleRu": "Музыкальный фестиваль на рифе",
        "titleEn": "The Neon Reef Music Festival",
        "cefr": "B1–B2",
        "coverArt": "story_5",
        "subtitle": "Концерт русалки Миры на гигантской ракушке, диджейский пульт Блинки и танцы всего океана",
        "rewardXp": 55,
        "rewardPearls": 40,
        "lines": [
            {
                "speaker": "mermaid",
                "textEn": "Everyone is here! We have been rehearsing this new pop song for three weeks, and the stage looks amazing!",
                "textRu": "Все собрались! Мы репетировали эту новую поп-песню три недели, и сцена выглядит потрясающе!"
            },
            {
                "speaker": "jelly",
                "textEn": "I have already connected the neon shell speakers! As soon as Mira starts singing, I will turn on the rainbow lights.",
                "textRu": "Я уже подключил неоновые колонки-ракушки! Как только Мира начнёт петь, я включу радужные прожекторы."
            },
            {
                "type": "question",
                "prompt": "Почему после союза времени «As soon as» (как только) Блинки сказал «starts» (Present Simple), хотя речь о будущем?",
                "options": [
                    "В придаточных времени после as soon as / when вместо will всегда ставится Present Simple",
                    "Потому что концерт уже закончился вчера",
                    "Потому что после starts нельзя ставить глагол"
                ],
                "correct": "В придаточных времени после as soon as / when вместо will всегда ставится Present Simple",
                "explanation": "Верно! По правилу Мёрфи (Unit 25) после союзов времени when, as soon as, until будущее действие выражается через Present Simple."
            },
            {
                "speaker": "shark",
                "textEn": "Listen to the crowd cheering! This is definitely the best party the ocean has ever seen!",
                "textRu": "Послушайте, как ликует публика! Это определённо лучшая вечеринка, которую когда-либо видел океан!"
            }
        ]
    },
    {
        "id": "story_6",
        "titleRu": "Тайна светящегося грота",
        "titleEn": "Expedition to the Crystal Cavern",
        "cefr": "C1–C2",
        "coverArt": "story_6",
        "subtitle": "Ночное погружение Ская и Блинки в пещеру радужных кристаллов и неоновых черепах",
        "rewardXp": 70,
        "rewardPearls": 55,
        "lines": [
            {
                "speaker": "sky",
                "textEn": "Rarely does one witness such breathtaking bioluminescence! Every crystal in this cavern radiates its own melody.",
                "textRu": "Редко кому доводится увидеть столь захватывающую биолюминесценцию! Каждый кристалл в этом гроте излучает собственную мелодию."
            },
            {
                "speaker": "jelly",
                "textEn": "Look at the ancient murals on the wall, Sky! They appear to have been painted by the first guardians of the reef.",
                "textRu": "Посмотри на древние фрески на стене, Скай! Судя по всему, они были написаны первыми хранителями рифа."
            },
            {
                "type": "question",
                "prompt": "Зачем в первом предложении Ская использован обратный порядок слов «Rarely does one witness...»?",
                "options": [
                    "Это эмфатическая отрицательная инверсия уровня C1–C2 после слова Rarely в начале фразы",
                    "Это обычный вопрос о прошлом",
                    "Это повелительное наклонение"
                ],
                "correct": "Это эмфатическая отрицательная инверсия уровня C1–C2 после слова Rarely в начале фразы",
                "explanation": "Когда наречия с отрицательным или ограничительным смыслом (Rarely, Seldom, Never before) выносятся в начало для выразительности, используется инверсия (does one witness)."
            }
        ]
    }
]
};

window.ScayaWordDictionary = {
  "a": "неопределённый артикль (один из)",
  "an": "неопределённый артикль (перед гласной)",
  "the": "определённый артикль (этот самый)",
  "abandoned": "заброшенный, покинутый",
  "abyss": "бездна, морская пучина",
  "according": "согласно (according to — согласно чему-либо)",
  "achieved": "достигнутый, добился (от achieve — достигать)",
  "achieve": "достигать, добиваться",
  "across": "через, сквозь, поперёк",
  "advantage": "преимущество, польза (take advantage of — воспользоваться)",
  "advise": "советовать, рекомендовать",
  "afraid": "испуганный, боящийся (afraid of — бояться чего-то)",
  "after": "после, вслед за",
  "ago": "тому назад (о времени)",
  "ahead": "впереди, вперёд (ahead of — впереди кого-то)",
  "air": "воздух (a breath of fresh air — глоток свежего воздуха)",
  "albeit": "хотя и, пусть даже (союз уровня C1)",
  "all": "все, всё, весь",
  "alone": "один, в одиночестве",
  "already": "уже",
  "also": "также, тоже",
  "always": "всегда",
  "am": "есть, являюсь (форма глагола to be для I)",
  "ancient": "древний, старинный",
  "and": "и, а",
  "anemone": "актиния, морская анемона",
  "appeared": "появился, показался (от appear)",
  "appear": "появляться, казаться",
  "appreciate": "ценить, быть признательным",
  "arches": "арки, своды (от arch — арка)",
  "arch": "арка, свод",
  "are": "являются, есть (форма глагола to be)",
  "around": "вокруг, около",
  "arrive": "прибывать, приезжать, приплывать",
  "arrived": "прибыл, приплыл (от arrive)",
  "as": "как, в то время как, так как",
  "asked": "спросил, попросил (от ask)",
  "ask": "спрашивать, просить",
  "at": "в, у, на (предлог места и времени)",
  "atlantis": "Атлантида",
  "attention": "внимание (pay attention — обращать внимание)",
  "away": "прочь, далеко",
  "baby": "малыш, детёныш",
  "balance": "баланс, равновесие (strike a balance — найти баланс)",
  "bay": "бухта, залив",
  "be": "быть, являться, находиться",
  "beautiful": "красивый, прекрасный",
  "because": "потому что, так как",
  "been": "был (причастие V3 от глагола to be)",
  "before": "до, перед, прежде",
  "began": "начал, начался (Past Simple от begin)",
  "begin": "начинать, начинаться",
  "begun": "начатый, начался (V3 от begin)",
  "beheld": "узрел, увидел (литературное C1, от behold)",
  "behold": "увидеть, созерцать",
  "belong": "принадлежать (belong to — принадлежать кому-то)",
  "belonging": "принадлежащий; принадлежность",
  "below": "ниже, под",
  "beneath": "под, внизу (под волнами)",
  "berry": "ягода, ягодный",
  "best": "лучший, лучше всего",
  "between": "между",
  "big": "большой, крупный",
  "bioluminescence": "биолюминесценция (свечение) (C1)",
  "bioluminescent": "биолюминесцентный, светящийся в глубине",
  "black": "чёрный, тёмный",
  "blew": "подул (от blow — дуть)",
  "blinky": "Блинки (имя светящегося медузёнка)",
  "blinky's": "принадлежащий медузёнку Блинки",
  "blue": "голубой, синий",
  "borrow": "брать взаймы, одалживать у кого-то",
  "both": "оба, и тот и другой",
  "bottle": "бутылка, сосуд",
  "bottom": "дно, самая нижняя часть",
  "bound": "обречённый, непременно готовый (be bound to — неизбежно произойти)",
  "boundary": "граница, рубеж",
  "bounds": "границы, пределы (by leaps and bounds — семимильными шагами)",
  "bow": "бантик (также: поклон или нос корабля)",
  "brass": "латунь, латунный, медный",
  "breakfast": "завтрак",
  "breath": "вдох, дыхание",
  "breathtaking": "захватывающий дух, потрясающий",
  "brilliant": "блестящий, гениальный, яркий",
  "brought": "принёс (от bring — приносить)",
  "bring": "приносить",
  "built": "построенный, построил (от build — строить)",
  "build": "строить, создавать",
  "but": "но, однако, кроме",
  "buy": "покупать",
  "by": "у, около, к (о времени), посредством",
  "cabin": "каюта, хижина",
  "cafe": "кафе",
  "café": "кафе, уютная кофейня",
  "calm": "спокойный, тихий, штиль",
  "cambridge": "Кембридж, кембриджский",
  "came": "пришёл, приплыл (Past Simple от come)",
  "come": "приходить, подплывать",
  "can": "мочь, уметь",
  "captain": "капитан",
  "captain's": "капитанский, принадлежащий капитану",
  "care": "забота, уход (take care of — заботиться)",
  "castle": "замок, дворец",
  "celebrate": "праздновать, отмечать",
  "centuries": "века, столетия (от century — век)",
  "century": "век, столетие",
  "chair": "стул (A1)",
  "chance": "шанс, случай, возможность",
  "chest": "сундук (с сокровищами)",
  "children": "дети",
  "chocolate": "шоколад, шоколадный",
  "clean": "чистый, прозрачный",
  "clear": "ясный, чистый, понятный",
  "clever": "умный, сообразительный",
  "clicked": "щёлкнул (от click — щёлкать)",
  "cliff": "утёс, отвесная скала (A2)",
  "close": "близко; закрывать",
  "clouds": "облака, тучи",
  "clue": "подсказка, ключ к разгадке, улика",
  "cocoa": "какао",
  "coffee": "кофе (A1)",
  "cold": "холодный (A1)",
  "collocations": "устойчивые словосочетания (коллокации)",
  "colourful": "красочный, разноцветный, яркий",
  "columns": "колонны (от column — колонна)",
  "comb": "гребень, расчёска",
  "compass": "компас",
  "compasses": "компасы",
  "completely": "полностью, совершенно",
  "completing": "завершение, прохождение (от complete — завершать)",
  "confidently": "уверенно",
  "containing": "содержащий в себе (от contain — содержать)",
  "cookies": "печенье",
  "coral": "коралл, коралловый",
  "corals": "кораллы",
  "could": "мог, мог бы",
  "courage": "смелость, отвага, мужество",
  "covered": "покрытый (от cover — покрывать)",
  "crew": "экипаж, команда корабля",
  "crossed": "пересёк (от cross — пересекать)",
  "crowded": "переполненный людьми, людный",
  "crown": "корона, венец",
  "cry": "плакать, кричать",
  "crystal": "хрустальный, прозрачный",
  "crystals": "кристаллы",
  "culmination": "кульминация, венец труда (C2)",
  "curiosity": "любознательность, живой интерес",
  "current": "океаническое течение",
  "cute": "милый, симпатичный",
  "cylinder": "цилиндр, тубус",
  "daily": "ежедневный, каждый день",
  "damaging": "повреждение, нанесение вреда",
  "dark": "тёмный, темнота",
  "darkness": "тьма, темнота",
  "day": "день",
  "decided": "решила",
  "decide": "решать, принимать решение",
  "decipher": "расшифровывать древние письмена (C2)",
  "decode": "декодировать, расшифровывать",
  "deduction": "логический вывод, дедукция",
  "deep": "глубокий, глубоко",
  "deeper": "глубже, более глубокий",
  "delicate": "тонкий, нежный, изящный",
  "depth": "глубина",
  "depths": "морские глубины",
  "did": "делал (вспомогательный глагол Past Simple)",
  "discovered": "обнаружил, открыл (от discover — открывать)",
  "discover": "обнаруживать, открывать",
  "discoveries": "открытия, находки",
  "dive": "нырять, погружаться; погружение",
  "diving": "дайвинг, ныряние, погружение",
  "do": "делать, выполнять",
  "does": "делает (форма глагола do для he/she/it)",
  "doing": "делающий, выполнение",
  "dolphin": "дельфин",
  "dolphin's": "принадлежащий дельфину",
  "don't": "не (сокращение от do not)",
  "down": "вниз, внизу",
  "dresses": "одевается; платья",
  "during": "в течение, во время",
  "dweller": "обитатель, житель (surface dweller — житель поверхности)",
  "early": "рано, ранний (A2)",
  "east": "восток, восточный",
  "easy": "лёгкий, простой, легко",
  "eating": "еда, поедание (от eat — есть)",
  "echoed": "эхом отдавался, звучал эхом",
  "empty": "пустой",
  "english": "английский язык, английский",
  "engraved": "выгравированный, высеченный",
  "entrance": "вход",
  "ephemeral": "мимолётный, ускользающий (C2)",
  "eternal": "вечный, бесконечный",
  "evening": "вечер",
  "every": "каждый, всякий",
  "everywhere": "везде, повсюду",
  "exam": "экзамен",
  "examining": "изучая, осматривая (от examine — исследовать)",
  "exhausting": "изнурительный, утомительный",
  "expanding": "расширяющийся, растущий (от expand)",
  "explained": "объяснил (от explain — объяснять)",
  "explain": "объяснять",
  "explorers": "исследователи",
  "exploring": "исследование, изучение",
  "extraordinary": "необычайный, удивительный, исключительный",
  "fades": "тускнеет, угасает (от fade — угасать)",
  "famous": "знаменитый, известный",
  "fascinated": "очарованный, увлечённый",
  "favourite": "любимый",
  "fear": "страх, боязнь",
  "felt": "чувствовал, ощущал (от feel)",
  "feel": "чувствовать",
  "final": "финальный, последний, итоговый",
  "finally": "наконец, в конечном счёте",
  "find": "находить, отыскать",
  "first": "первый, сначала",
  "fish": "рыба, рыбки",
  "five": "пять",
  "floated": "парил, плыл в воде (от float)",
  "floating": "парящий, плавающий в воде",
  "fluency": "свободное, беглое владение языком",
  "fluent": "свободно говорящий, беглый",
  "for": "для, в течение, за",
  "forever": "навсегда, вечно",
  "form": "форма; образовывать",
  "forward": "вперёд (look forward to — ждать с нетерпением)",
  "found": "нашёл, найденный (от find — находить)",
  "four": "четыре",
  "fresh": "свежий",
  "friend": "друг, подруга",
  "friendly": "дружелюбный, приветливый",
  "friends": "друзья",
  "friendship": "дружба",
  "from": "из, от, с",
  "front": "передняя часть (in front of — перед)",
  "galleon": "галеон (старинный парусный корабль)",
  "garden": "сад",
  "gate": "выход на посадку (гейт)",
  "gates": "врата, ворота",
  "gathered": "собрались (от gather — собираться)",
  "get": "получать, становиться, добираться",
  "give": "давать, дарить",
  "glass": "стакан, бокал; стеклянный",
  "glow": "свечение, сияние; светиться",
  "glowing": "светящийся, сияющий",
  "go": "идти, плыть, отправляться",
  "going": "идущий, собирающийся (be going to — собираться)",
  "golden": "золотой, золотистый",
  "got": "получил (от get)",
  "grammar": "грамматика",
  "grand": "величественный, парадный, большой",
  "granted": "дарованный (take for granted — принимать как должное)",
  "grateful": "благодарный, признательный",
  "great": "великий, отличный, огромный",
  "green": "зелёный",
  "guest": "гость, постоялец (A2)",
  "guided": "провёл, направлял (от guide — вести)",
  "guidance": "руководство, помощь в пути, подсказка",
  "had": "имел (Past Simple и Past Perfect от have)",
  "hadn't": "не имел (had not)",
  "half-buried": "наполовину зарытый в песок",
  "hall": "зал, чертог",
  "happen": "случаться, происходить",
  "happily": "радостно, счастливо",
  "harder": "усерднее, труднее, сложнее",
  "have": "иметь, обладать",
  "having": "имея, сделав что-то (причастие)",
  "he": "он",
  "head": "голова",
  "hello": "привет, здравствуйте",
  "helm": "штурвал корабля",
  "help": "помогать; помощь",
  "helped": "помог (от help)",
  "her": "её, ей",
  "here": "здесь, сюда",
  "high": "высокий, высоко",
  "highest": "самый высокий, наивысший",
  "highlight": "подчёркивать, выделять; яркий момент",
  "his": "его, свой",
  "hit": "ударить; попадание",
  "holding": "держащий (от hold — держать)",
  "hold": "держать",
  "holiday": "отпуск, каникулы (A1)",
  "home": "дом, домой",
  "homework": "домашнее задание",
  "hospitality": "гостеприимство",
  "hours": "часы (о времени)",
  "how": "как, каким образом",
  "however": "однако, тем не менее",
  "hugged": "обнял (от hug — обнимать)",
  "hugs": "объятия; обнимает",
  "hundred": "сто, сотня",
  "i": "я",
  "idea": "идея, мысль",
  "if": "если, ли",
  "illuminated": "освещённый, озарённый светом",
  "immediately": "немедленно, сразу же",
  "in": "в, внутри",
  "inscription": "надпись, гравировка",
  "inside": "внутри, внутрь (know inside out — знать вдоль и поперёк)",
  "instead": "вместо этого (instead of — вместо)",
  "intact": "целый, нетронутый, невредимый",
  "interesting": "интересный, увлекательный",
  "into": "в, внутрь (движение)",
  "is": "есть, является (форма глагола to be)",
  "it": "оно, это, он/она (для предметов)",
  "it's": "это есть (сокращение от it is / it has)",
  "its": "его, её (принадлежность предмета)",
  "jacket": "куртка, пиджак",
  "jagged": "зубчатый, неровный, скалистый",
  "jellyfish": "медуза",
  "journey": "поездка, путь (A2)",
  "joy": "радость, восторг",
  "jumping": "прыгающий, выпрыгивающий",
  "just": "только что; просто",
  "keen": "увлечённый (keen on — увлекаться)",
  "keep": "хранить, продолжать делать (keep V-ing)",
  "kelp": "бурые морские водоросли, ламинария",
  "key": "ключ, ключ-карта (A2)",
  "kind": "добрый, ласковый; вид, разновидность",
  "kindest": "самый добрый",
  "know": "знать, уметь",
  "known": "известный, знал (V3 от know)",
  "lagoon": "лагуна",
  "language": "язык, речь",
  "lanternfish": "рыба-фонарик (глубоководная светящаяся рыба)",
  "last": "последний, прошлый",
  "later": "позже, потом",
  "lay": "лежал (Past Simple от lie — лежать)",
  "leaps": "прыжки, скачки (by leaps and bounds — семимильными шагами)",
  "learning": "изучение, обучение",
  "leave": "оставлять, покидать, уплывать",
  "left": "оставил, уплыл; левый",
  "lend": "одалживать, давать взаймы кому-то",
  "lesson": "урок, занятие",
  "let's": "давайте (сокращение от let us)",
  "level": "уровень",
  "life": "жизнь",
  "light": "свет, огонёк; освещать, лёгкий",
  "lighthouse": "маяк",
  "like": "нравиться; как, подобно",
  "listen": "слушать (listen to — слушать кого-то)",
  "listened": "выслушал, слушал (от listen)",
  "little": "маленький, немного",
  "lock": "замок; запирать на замок",
  "long": "длинный, долгий, долго",
  "look": "смотреть, выглядеть (look for — искать)",
  "looked": "посмотрел, выглядел",
  "looking": "смотрящий, ищущий (looking for — ищущий)",
  "looks": "выглядит, смотрит",
  "lose": "терять, проигрывать",
  "lost": "потерял, потерянный, заблудился",
  "lovely": "прекрасный, милый, чудесный",
  "loves": "любит, обожает",
  "lulu": "Лулу (имя доброй акулёнка-девочки с бантиком)",
  "lulu's": "принадлежащий акулёнку Лулу",
  "made": "сделал, создал (от make)",
  "magical": "волшебный, сказочный",
  "make": "делать, создавать, заставлять",
  "manage": "справляться, удаваться (manage to — суметь сделать)",
  "many": "много (для исчисляемых)",
  "map": "карта",
  "marble": "мрамор, мраморный",
  "mariana": "Марианский (Mariana Trench — Марианская впадина)",
  "mastery": "совершенное мастерство, свободное владение",
  "matters": "имеет значение, важно",
  "me": "мне, меня",
  "mean": "означать, иметь в виду",
  "melody": "мелодия",
  "merely": "просто, всего лишь, только",
  "mermaid": "русалка",
  "mesmerising": "завораживающий, гипнотизирующий красотой",
  "message": "сообщение, послание",
  "met": "встретил, познакомился (от meet)",
  "meticulous": "тщательный, трепетный к каждой детали (уровень C1)",
  "metres": "метры, метров",
  "midnight": "полночь, полуночный (Midnight Zone — сумеречная глубина)",
  "mind": "ум, разум; возражать (don't mind — не против)",
  "minds": "умы; возражает",
  "mine": "мой, моя, моё (абсолютная форма)",
  "mira": "Мира (имя русалки — подружки Ская)",
  "missing": "пропавший, потерянный",
  "mistake": "ошибка",
  "mistakes": "ошибки",
  "months": "месяцы",
  "moon": "луна, месяц",
  "more": "больше, более",
  "morning": "утро",
  "most": "большинство; самый",
  "much": "много, очень",
  "musical": "музыкальный, мелодичный",
  "must": "должен, должно быть (уверенное предположение)",
  "my": "мой, моя, моё",
  "near": "около, рядом с, вблизи",
  "needle": "стрелка (компаса), игла",
  "neon": "неоновый, ярко светящийся",
  "never": "никогда",
  "new": "новый",
  "newly": "недавно, заново",
  "night": "ночь",
  "no": "нет, никакой (no sooner... than — не успел... как)",
  "nobody": "никто",
  "none": "никто, ничто (second to none — не имеющий себе равных)",
  "north": "север, северный",
  "not": "не",
  "notes": "ноты; заметки",
  "noticed": "заметил",
  "now": "сейчас, теперь",
  "nuances": "нюансы, тонкие оттенки смысла",
  "obstacles": "препятствия, преграды",
  "ocean": "океан",
  "of": "из, о (предлог родительного падежа)",
  "off": "прочь, с (put off — откладывать)",
  "oh": "о! ой!",
  "old": "старый, старинный",
  "on": "на, по, в",
  "once": "однажды, когда-то; как только",
  "one": "один",
  "only": "только, единственный",
  "open": "открытый; открывать",
  "opened": "открыл, открытый",
  "or": "или",
  "ordinary": "обычный, заурядный",
  "our": "наш, наша, наше, наши",
  "out": "наружу, из (find out — выяснить)",
  "over": "над, через, свыше",
  "overcome": "преодолевать",
  "paragraph": "абзац, параграф",
  "parchment": "пергамент (C2)",
  "peaceful": "мирный, спокойный, безмятежный",
  "pearl": "жемчужина, жемчужный",
  "pearls": "жемчужины",
  "phrasal": "фразовый (phrasal verb — фразовый глагол)",
  "phrase": "фраза, выражение",
  "phrases": "фразы, выражения",
  "pies": "пироги (от pie — пирог)",
  "pink": "розовый, нежно-розовый",
  "pitch": "смола; высота звука",
  "pitch-black": "угольно-чёрный, кромешный (о темноте на глубине)",
  "plant": "растение",
  "plants": "растения",
  "please": "пожалуйста; радовать",
  "point": "точка, смысл; указывать",
  "pointed": "указал, показывал (от point)",
  "polyps": "коралловые полипы",
  "practice": "практиковаться, тренировать",
  "practise": "практиковаться, тренироваться",
  "prefers": "предпочитает (от prefer)",
  "preparing": "готовящий, приготовление (от prepare)",
  "prepositions": "предлоги",
  "pretty": "симпатичный, милый; довольно",
  "profound": "глубокий, мудрый, фундаментальный (уровень C2)",
  "progressed": "продвинулся вперёд, вырос в знаниях",
  "purple": "фиолетовый, пурпурный",
  "put": "класть, ставить (put off — откладывать)",
  "quest": "поиски, приключение, экспедиция",
  "quite": "довольно, весьма, вполне",
  "rain": "дождь; идти (о дожде) (A1)",
  "rare": "редкий, драгоценный",
  "read": "читать, прочитал",
  "ready": "готовый",
  "really": "действительно, на самом деле, очень",
  "realm": "царство, подводный мир, владение",
  "reef": "коралловый риф",
  "regret": "сожалеть; сожаление",
  "reigns": "царит, властвует (от reign — царить)",
  "remained": "остался, сохранился (от remain)",
  "remarkable": "удивительный, замечательный, выдающийся",
  "requires": "требует (от require — требовать)",
  "rested": "покоился, отдыхал (от rest)",
  "resting": "отдыхающий, покоящийся",
  "revealing": "раскрывающий, открывающий взору",
  "ribbon": "лента, бантик",
  "riddle": "загадка, тайна",
  "right": "правильный, верный; право",
  "rim": "ободок, оправа",
  "rock": "скала, камень",
  "rose": "возвышался, поднялся (Past Simple от rise); розовый",
  "route": "маршрут",
  "rules": "правила",
  "run": "бежать (in the long run — в конечном счёте)",
  "safely": "безопасно, благополучно",
  "said": "сказал (Past Simple от say)",
  "sailed": "плавали под парусом",
  "sanctuary": "убежище, тихая гавань, заповедный уголок",
  "sang": "пели",
  "sapphire": "сапфир, сапфировый",
  "saturday": "суббота",
  "saw": "видел, увидел (Past Simple от see)",
  "says": "говорит, гласит",
  "school": "школа",
  "score": "счёт в игре; забивать гол / набирать очки",
  "sea": "море, морской",
  "seabed": "морское дно",
  "seal": "печать; тюлень; запечатывать",
  "sealed": "запечатанный, наглухо закрытый",
  "search": "поиск; искать",
  "seashell": "морская ракушка",
  "seashells": "морские ракушки",
  "seaweed": "морские водоросли",
  "second": "второй (second to none — лучший, не имеющий равных)",
  "secret": "секрет, тайна",
  "see": "видеть, смотреть",
  "seek": "искать, стремиться к",
  "seen": "увиденный, видел (V3 от see)",
  "seldom": "редко, изредка",
  "sent": "отправил, посланный (от send)",
  "sentence": "предложение (в грамматике)",
  "set": "устанавливать, отправляться (set off — отправиться в путь)",
  "seventeenth-century": "семнадцатого века, старинный",
  "several": "несколько",
  "shallows": "мелководье, отмель",
  "shape": "форма, очертание",
  "share": "делиться, разделять",
  "sharing": "делясь, совместное использование",
  "shark": "акула, акулёнок",
  "she": "она",
  "shed": "пролить (shed light on — пролить свет на загадку)",
  "shell": "морская ракушка",
  "shells": "ракушки",
  "shine": "светить, сиять",
  "shiny": "блестящий, сверкающий",
  "ship": "корабль, судно",
  "should": "следует, стоило бы",
  "sight": "зрелище, вид",
  "silhouette": "силуэт, очертание",
  "simplest": "самый простой, простейший",
  "since": "с тех пор как, с (о точке начала времени)",
  "sing": "петь",
  "singing": "пение, поющий",
  "sipping": "потягивая маленькими глотками (от sip)",
  "sister": "сестра",
  "sits": "сидит (от sit — сидеть)",
  "six": "шесть",
  "skills": "навыки, умения, мастерство",
  "sky": "Скай (имя розового дельфина); небо",
  "sky's": "принадлежащий дельфину Скаю",
  "sleeping": "спящий, сон",
  "smile": "улыбка; улыбаться",
  "smiles": "улыбается; улыбки",
  "so": "так, поэтому, настолько",
  "soft": "мягкий, нежный, тихий",
  "softly": "мягко, тихо, ласково",
  "solution": "решение, разгадка",
  "someone": "кто-то, некто",
  "something": "что-то, нечто",
  "song": "песня",
  "songs": "песни",
  "soon": "скоро, вскоре",
  "sooner": "раньше (no sooner... than — не успел... как)",
  "speak": "говорить, разговаривать",
  "splendour": "великолепие, сияющая красота",
  "squids": "кальмары",
  "started": "начал, стартовал",
  "still": "всё ещё, по-прежнему; тихий",
  "stone": "каменный; камень",
  "storm": "шторм, буря",
  "strange": "странный, необычный",
  "strike": "ударить, найти (strike a balance — найти золотую середину)",
  "strong": "сильный, крепкий",
  "such": "такой, столь",
  "sudden": "внезапный, неожиданный",
  "suddenly": "вдруг, внезапно",
  "suggested": "предложил (после suggest используется V-ing!)",
  "summer": "лето, летний",
  "sung": "спетый (V3 от sing — петь)",
  "sunlight": "солнечный свет",
  "sunlit": "залитый солнечным светом",
  "sunset": "закат",
  "supreme": "верховный, безраздельный (reign supreme — безраздельно царить)",
  "surface": "поверхность",
  "surrounded": "окружённый (от surround — окружать)",
  "surroundings": "окружение, обстановка вокруг",
  "suspended": "парящий, подвешенный в невесомости воды",
  "swam": "плыл, поплыл (Past Simple от swim)",
  "swim": "плавать, купаться (A1)",
  "swimming": "плавание, плывущий",
  "swims": "плавает, плывёт",
  "swum": "проплыл (причастие V3 от swim)",
  "tables": "столики, столы",
  "take": "брать, занимать",
  "tea": "чай (A1)",
  "temple": "храм, святилище",
  "tentacles": "щупальца (медузы)",
  "testament": "живое свидетельство, доказательство (testament to)",
  "than": "чем (при сравнении)",
  "thank": "благодарить (thank you — спасибо)",
  "thanks": "спасибо, благодаря (thanks to — благодаря)",
  "that": "что, тот, который",
  "their": "их, свой",
  "them": "им, их",
  "there": "там, туда",
  "they": "они",
  "this": "этот, эта, это",
  "those": "те",
  "thought": "подумал, мысль (от think)",
  "thousand": "тысяча",
  "three": "три",
  "through": "через, сквозь, благодаря",
  "time": "время, раз",
  "tiny": "крошечный, маленький",
  "to": "к, в, чтобы (предлог направления и частица инфинитива)",
  "together": "вместе",
  "told": "сказал, рассказал (от tell)",
  "tolerate": "терпеть, мириться с чем-то (= put up with)",
  "tomorrow": "завтра",
  "touch": "связь, прикосновение (keep in touch — быть на связи)",
  "towards": "по направлению к, навстречу",
  "travellers": "путешественники",
  "travellers'": "принадлежащий путешественникам",
  "treasure": "сокровище, клад",
  "trench": "глубоководная впадина, желоб",
  "tropical": "тропический",
  "true": "истинный, настоящий, верный",
  "truly": "поистине, по-настоящему, искренне",
  "truth": "правда, истина",
  "trying": "пробующий, попытка (от try — пробовать)",
  "turn": "поворачивать, очередь (turn on — включить)",
  "turned": "повернул, превратился (turn out — оказаться)",
  "turtle": "морская черепаха",
  "twilight": "сумерки, сумеречный",
  "two": "два, две",
  "ubiquitous": "вездесущий, встречающийся повсюду (уровень C1)",
  "umbrella": "зонт",
  "uncharted": "неизведанный, не нанесённый на карту",
  "under": "под",
  "underwater": "подводный, под водой",
  "unforgettable": "незабываемый",
  "unlike": "в отличие от",
  "unlocked": "отпер, открыл ключом",
  "until": "до тех пор пока не",
  "unturned": "неперевёрнутый (leave no stone unturned — сделать всё возможное)",
  "unwavering": "непоколебимый, верный, неизменный (уровень C2)",
  "up": "вверх, вверху",
  "upset": "расстроенный, огорчённый",
  "us": "нам, нас",
  "used": "использовал; привыкший (used to — бывало раньше)",
  "usually": "обычно, как правило",
  "utterly": "совершенно, абсолютно, крайне (уровень C1–C2)",
  "venture": "отважиться отправиться, решиться на путешествие",
  "verb": "глагол",
  "very": "очень; тот самый (at the very bottom — на самом дне)",
  "view": "вид (из окна)",
  "visit": "посещать, навещать; визит",
  "vocabulary": "словарный запас, лексика",
  "voice": "голос",
  "wait": "ждать, подожди",
  "wake": "просыпаться, будить (wake up)",
  "wakes": "просыпается",
  "warm": "тёплый (A1)",
  "warmth": "тепло, душевная теплота",
  "was": "был, была, было (Past Simple от to be)",
  "water": "вода",
  "waters": "воды (морские просторы)",
  "wave": "волна; махать",
  "waves": "волны",
  "way": "путь, дорога, способ (by the way — кстати)",
  "we": "мы",
  "wearing": "одетый в, носящий (от wear)",
  "wears": "носит (одежду или украшение)",
  "welcome": "добро пожаловать (A1)",
  "welcomed": "радушно встречал, приветствовал",
  "went": "пошёл, отправился (Past Simple от go)",
  "were": "были; будь (в условной инверсии Were it not for...)",
  "what": "что, какой",
  "when": "когда",
  "where": "где, куда",
  "which": "который, какой",
  "while": "в то время как, пока",
  "whispered": "прошептал (от whisper — шептать)",
  "who": "кто, который",
  "whole": "весь, целый",
  "why": "почему, зачем",
  "will": "будет (вспомогательный глагол будущего времени); воля",
  "wisdom": "мудрость",
  "wish": "желание; загадывать желание (A2)",
  "with": "с, вместе с",
  "without": "без",
  "wonderful": "чудесный, замечательный, удивительный",
  "wooden": "деревянный",
  "words": "слова",
  "worry": "волноваться, беспокоиться",
  "would": "бы (модальный глагол условного наклонения)",
  "yes": "да",
  "yesterday": "вчера",
  "yet": "однако, тем не менее; ещё",
  "you": "ты, вы",
  "your": "твой, ваш",
  "yours": "твой, ваш (абсолютная форма)",
  "zone": "зона, глубоководный пояс",
  "emma": "Эмма (имя)",
  "sunny": "солнечный (A1)",
  "outside": "на улице, снаружи",
  "lucas": "Лукас (имя)",
  "spain": "Испания",
  "polite": "вежливый (A1)",
  "neighbor": "сосед, соседка",
  "neighbours": "соседи",
  "neighbour": "сосед, соседка",
  "each": "каждый (each other — друг друга)",
  "other": "другой",
  "parents": "родители",
  "doctors": "врачи",
  "older": "старший, старше",
  "brother": "брат",
  "student": "студент, ученик",
  "puppy": "щенок (A1)",
  "cousin": "двоюродный брат или сестра",
  "sunday": "воскресенье",
  "bake": "печь, выпекать",
  "apple": "яблоко (A1)",
  "kitchen": "кухня (A1)",
  "mom": "мама",
  "makes": "делает, готовит",
  "toast": "тост, поджаренный хлеб",
  "cheese": "сыр",
  "butter": "сливочное масло (A1)",
  "wash": "мыть",
  "sweet": "сладкий",
  "strawberries": "клубника (ягоды)",
  "strawberry": "клубника",
  "pour": "наливать",
  "orange": "апельсиновый; апельсин",
  "juice": "сок",
  "delicious": "очень вкусный",
  "food": "еда",
  "gives": "даёт",
  "energy": "энергия, бодрость",
  "grandmother": "бабушка (A1)",
  "animals": "животные",
  "fluffy": "пушистый",
  "white": "белый",
  "rabbit": "кролик (A1)",
  "eats": "ест",
  "crunchy": "хрустящий",
  "carrots": "морковь",
  "afternoon": "день (после полудня)",
  "ginger": "рыжий; имбирный",
  "kitten": "котёнок (A1)",
  "play": "играть",
  "grass": "трава",
  "chases": "гоняется за, ловит",
  "chase": "гоняться за, ловить",
  "yellow": "жёлтый",
  "butterflies": "бабочки",
  "barks": "лает",
  "bedroom": "спальня",
  "window": "окно (A1)",
  "armchair": "уютное кресло",
  "floor": "пол, этаж",
  "cream": "кремовый, сливочный",
  "carpet": "ковёр",
  "desk": "письменный стол",
  "bookshelves": "книжные полки",
  "bookshelf": "книжная полка",
  "adventure": "приключение",
  "table": "стол (A1)",
  "seaside": "приморский, у моря",
  "waiter": "официант",
  "brings": "приносит",
  "menu": "меню (A1)",
  "order": "заказывать; заказ",
  "cappuccino": "капучино",
  "dessert": "десерт",
  "conversation": "беседа, разговор",
  "bill": "счёт (в кафе)",
  "town": "городок, город",
  "picturesque": "живописный",
  "straight": "прямо",
  "central": "центральный",
  "square": "площадь, сквер",
  "bridge": "мост",
  "narrow": "узкий",
  "street": "улица (A1)",
  "corner": "угол (улицы)",
  "bakery": "пекарня, булочная",
  "bread": "хлеб (A1)",
  "park": "парк (A1)",
  "weather": "погода",
  "changes": "меняется",
  "hour": "час",
  "cloud": "облако, туча",
  "raincoat": "плащ-дождевик",
  "breeze": "лёгкий морской бриз, ветерок",
  "blowing": "дующий (от blow — дуть)",
  "shining": "светящий, сияющий (от shine)",
  "clara": "Клара (имя)",
  "autumn": "осень, осенний",
  "boutique": "бутик, магазин одежды",
  "beige": "бежевый",
  "shelf": "полка",
  "assistant": "консультант, помощник",
  "size": "размер",
  "tries": "примеряет, пробует",
  "comfortable": "удобный, комфортный",
  "leather": "кожа; кожаный (A2)",
  "boots": "ботинки, сапоги",
  "discount": "скидка",
  "price": "цена",
  "receipt": "кассовый чек",
  "pleasant": "приятный",
  "begins": "начинается",
  "tonight": "сегодня вечером",
  "packing": "упаковывающий (от pack — паковать)",
  "suitcase": "чемодан",
  "clothes": "одежда",
  "hat": "шляпа, панама",
  "camera": "фотоаппарат, камера",
  "travel": "путешествовать",
  "island": "остров",
  "sandy": "песчаный",
  "beach": "пляж, берег",
  "collect": "коллекционировать, собирать (A2)",
  "alarm": "будильник",
  "rings": "звонит",
  "hurry": "спешить, торопиться",
  "refreshing": "освежающий",
  "shower": "душ",
  "herbal": "травяной",
  "schedule": "расписание, график",
  "peacefully": "спокойно, мирно",
  "smoothly": "гладко, легко",
  "friday": "пятница",
  "travelled": "путешествовали (от travel)",
  "coast": "морское побережье (A2)",
  "train": "поезд",
  "station": "вокзал, станция (A1)",
  "platform": "платформа, перрон",
  "delayed": "задержанный (о рейсе)",
  "passenger": "пассажир",
  "seat": "место (для сидения) (A2)",
  "carriage": "вагон поезда",
  "luggage": "багаж",
  "scenic": "живописный (о маршруте)",
  "trip": "поездка",
  "evenings": "вечера",
  "windy": "ветреный",
  "cotton": "хлопок; хлопковый",
  "shirt": "рубашка (A1)",
  "noon": "полдень",
  "knitted": "вязаный",
  "wool": "шерсть; шерстяной (A2)",
  "sweater": "свитер",
  "warmer": "теплее",
  "leo": "Лео (имя)",
  "chose": "выбрал (от choose)",
  "coat": "пальто",
  "pockets": "карманы",
  "pocket": "карман",
  "mia": "Мия (имя)",
  "wore": "носила, надела (от wear)",
  "elegant": "элегантный, изящный",
  "scarf": "шарф (A2)",
  "gather": "собираться",
  "studio": "студия, мастерская",
  "creative": "творческий, креативный",
  "hobby": "хобби, увлечение",
  "daniel": "Дэниел (имя)",
  "enjoys": "наслаждается, любит",
  "playing": "играть (в процессе)",
  "acoustic": "акустика; акустический",
  "guitar": "гитара",
  "painting": "рисование, картина; рисовать",
  "watercolor": "акварель; акварельный",
  "textured": "фактурный",
  "paper": "бумага",
  "nora": "Нора (имя)",
  "ceramic": "керамический",
  "pottery": "керамика, гончарное дело",
  "cups": "чашки",
  "mark": "Марк (имя)",
  "slight": "лёгкий, небольшой",
  "headache": "головная боль",
  "sore": "больной, воспалённый (sore throat — больное горло)",
  "throat": "горло",
  "examined": "осмотрел (от examine)",
  "dangerous": "опасный",
  "bed": "кровать, постель",
  "vitamins": "витамины",
  "vitamin": "витамин",
  "plenty": "множество, вдоволь (plenty of rest — хороший отдых)",
  "rest": "отдых; отдыхать",
  "coastal": "прибрежный",
  "hotel": "отель, гостиница (A1)",
  "receptionist": "администратор на ресепшене",
  "reservation": "бронирование, бронь",
  "balcony": "балкон",
  "towels": "полотенца",
  "towel": "полотенце",
  "flowers": "цветы",
  "turquoise": "бирюзовый",
  "airport": "аэропорт",
  "departure": "вылет, отправление",
  "screen": "экран",
  "security": "контроль безопасности (A2)",
  "print": "печатать, распечатывать",
  "tickets": "билеты",
  "boarding": "посадка на рейс",
  "passes": "талоны, пропуска",
  "phones": "телефоны",
  "plane": "самолёт",
  "flight": "рейс, полёт (A2)",
  "attendant": "бортпроводник (flight attendant)",
  "greeted": "поприветствовал",
  "aboard": "на борту, на борт",
  "fasten": "пристегнуть",
  "seatbelts": "ремни безопасности",
  "seatbelt": "ремень безопасности",
  "inspiring": "вдохновляющий",
  "architect": "архитектор",
  "designs": "проектирует, создаёт дизайн",
  "eco-friendly": "экологичный",
  "houses": "дома",
  "solar": "солнечный (solar panels) (B1)",
  "roofs": "крыши",
  "wife": "жена",
  "elena": "Элена (имя)",
  "chef": "шеф-повар",
  "runs": "управляет, ведёт; бегает",
  "cosy": "уютный",
  "cozy": "уютный",
  "restaurant": "ресторан",
  "harbour": "гавань, порт",
  "colleague": "коллега",
  "journalist": "журналист",
  "writes": "пишет",
  "celebrating": "празднуем, отмечая",
  "birthday": "день рождения",
  "terrace": "терраса",
  "invited": "пригласили",
  "decorated": "украсили",
  "trees": "деревья",
  "lights": "огоньки, гирлянды",
  "promised": "пообещал",
  "cake": "торт",
  "candles": "свечи",
  "candle": "свеча",
  "fireworks": "фейерверк, салют",
  "noisy": "шумный",
  "nature": "природа",
  "followed": "проследовали, пошли по",
  "forest": "лес (A2)",
  "path": "лесная тропинка",
  "valley": "долина",
  "reached": "достигли, добрались до",
  "waterfall": "водопад",
  "stopped": "остановились",
  "breathe": "дышать",
  "pine": "сосновый; сосна",
  "photos": "фотографии",
  "thermos": "термос",
  "zoo": "зоопарк (A1)",
  "funny": "забавный, смешной",
  "monkeys": "обезьяны, обезьянки",
  "monkey": "обезьяна (A1)",
  "climbing": "лазающие, карабкающиеся (от climb — лазать)",
  "climb": "лазать, взбираться (A1)",
  "tall": "высокий",
  "swinging": "качающиеся (на канатах)",
  "ropes": "канаты, верёвки",
  "lake": "озеро (A2)",
  "giraffe": "жираф (A1)",
  "reaching": "тянущийся (за листьями)",
  "leaves": "листья",
  "keeper": "смотритель зоопарка",
  "feeding": "кормящий (от feed — кормить)",
  "feed": "кормить",
  "penguins": "пингвины",
  "enclosures": "вольеры, заповедные зоны",
  "enclosure": "вольер",
  "abroad": "за границей, за границу",
  "routes": "маршруты",
  "explored": "исследовали",
  "explore": "исследовать, открывать новое",
  "lighthouses": "маяки",
  "portugal": "Португалия",
  "greek": "греческий",
  "islands": "острова",
  "memories": "воспоминания",
  "souvenirs": "сувениры",
  "souvenir": "сувенир",
  "claire": "Клэр (имя)",
  "childhood": "детство",
  "moved": "переехала",
  "kept": "сохраняли, поддерживали (kept in touch — поддерживали связь)",
  "trust": "доверять; доверие",
  "honest": "честный, искренний",
  "opinion": "мнение",
  "support": "поддерживать; поддержка",
  "watched": "смотрели",
  "film": "фильм",
  "open-air": "под открытым небом",
  "cinema": "кинотеатр, кино",
  "plot": "сюжет",
  "based": "основанный",
  "scene": "сцена, эпизод",
  "filmed": "снят (на камеру)",
  "computer": "компьютерный",
  "effects": "эффекты",
  "emotional": "эмоциональный, трогательный",
  "soundtrack": "саундтрек, музыка к фильму",
  "recorded": "записан",
  "symphony": "симфония",
  "orchestra": "оркестр (B1)",
  "audience": "зрители, публика",
  "impressed": "впечатлён",
  "club": "клуб",
  "regional": "региональный",
  "tennis": "теннис, теннисный",
  "tournament": "турнир, чемпионат",
  "coach": "тренер",
  "stamina": "выносливость",
  "focus": "концентрация внимания; фокусироваться",
  "keys": "ключи",
  "victory": "победа",
  "serve": "подача (в теннисе); служить",
  "points": "очки, баллы",
  "workout": "тренировка",
  "rent": "снимать жильё; аренда",
  "flat": "квартира",
  "avenue": "проспект",
  "neighborhood": "район, окрестности",
  "river": "река",
  "apartment": "квартира, апартаменты",
  "spacious": "просторный",
  "unpacking": "распаковывая (от unpack)",
  "boxes": "коробки",
  "cinnamon": "корица",
  "buns": "булочки",
  "olivia": "Оливия (имя)",
  "apply": "подавать резюме / заявку (for a job)",
  "position": "должность, вакансия",
  "international": "международный",
  "prepared": "подготовила",
  "portfolio": "портфолио",
  "practised": "потренировалась",
  "answering": "отвечать",
  "meeting": "встреча, собеседование",
  "confident": "уверенный в себе",
  "projects": "проекты",
  "valuable": "ценный",
  "experience": "опыт работы",
  "offered": "предложила",
  "hire": "нанять на работу",
  "salary": "зарплата",
  "volunteers": "волонтёры",
  "protect": "защищать, беречь",
  "environment": "окружающая среда, природа",
  "plastic": "пластик, пластиковый",
  "waste": "отходы; тратить впустую",
  "sort": "сортировать",
  "recycle": "перерабатывать вторсырьё",
  "coordinator": "координатор",
  "reusable": "многоразовый",
  "pollution": "загрязнение окружающей среды",
  "disappear": "исчезать",
  "battery": "батарея, аккумулятор",
  "percent": "процент",
  "searched": "обыскал, проверил",
  "charger": "зарядное устройство",
  "sofa": "диван",
  "headphones": "наушники",
  "magazine": "журнал",
  "jazz": "джаз, джазовый",
  "concert": "концерт",
  "traffic": "дорожное движение, пробки",
  "approached": "подошли к",
  "stage": "сцена",
  "musicians": "музыканты",
  "played": "сыграли",
  "fortunately": "к счастью",
  "heard": "услышали",
  "lyrics": "текст песни, слова песни",
  "danced": "танцевали",
  "rhythm": "ритм",
  "goodbye": "до свидания (A1)",
  "country": "страна (A1)",
  "city": "большой город (A1)",
  "mother": "мама, мать (A1)",
  "father": "папа, отец (A1)",
  "grandfather": "дедушка (A1)",
  "aunt": "тётя (A1)",
  "egg": "яйцо (A1)",
  "milk": "молоко (A1)",
  "elephant": "слон (A1)",
  "lion": "лев (A1)",
  "tail": "хвост (A1)",
  "curtains": "шторы, занавески",
  "bathroom": "ванная комната (A1)",
  "sandwich": "сэндвич, бутерброд (A1)",
  "cup": "чашка (A1)",
  "museum": "музей (A1)",
  "supermarket": "супермаркет (A1)",
  "snow": "снег (A1)",
  "dress": "платье (A1)",
  "shoes": "обувь, туфли (A1)",
  "bag": "сумка (A1)",
  "shop": "магазин (A1)",
  "ticket": "билет (A1)",
  "photo": "фотография (A1)",
  "habit": "привычка",
  "routine": "ежедневный распорядок (A2)",
  "weekday": "будний день (A2)",
  "brush": "чистить (зубы), расчёсывать (A2)",
  "tidy": "аккуратный; прибирать (A2)",
  "timetable": "расписание поездов (A2)",
  "return": "обратный билет (return ticket) (A2)",
  "miss": "опоздать на (поезд/автобус) (A2)",
  "gloves": "перчатки (A2)",
  "fashionable": "модный, стильный (A2)",
  "canvas": "холст",
  "photography": "фотография (увлечение) (A2)",
  "instrument": "музыкальный инструмент (A2)",
  "member": "участник, член клуба (A2)",
  "join": "присоединяться, вступать (A2)",
  "medicine": "лекарство",
  "fever": "жар, высокая температура (A2)",
  "cough": "кашель; кашлять (A2)",
  "pharmacy": "аптека (A2)",
  "appointment": "запись на приём к врачу (A2)",
  "exercise": "физическая зарядка, упражнения (A2)",
  "reception": "стойка регистрации (ресепшен)",
  "blanket": "одеяло (A2)",
  "pillow": "подушка (A2)",
  "lift": "лифт (A2)",
  "customs": "таможня",
  "arrival": "прибытие, прилёт (A2)",
  "passport": "загранпаспорт (A2)",
  "backpack": "рюкзак (ручная кладь) (A2)",
  "patient": "пациент; терпеливый",
  "engineer": "инженер (A2)",
  "nurse": "медсестра, медбрат (A2)",
  "manager": "менеджер, управляющий (A2)",
  "office": "офис (A2)",
  "earn": "зарабатывать (A2)",
  "gift": "подарок",
  "invite": "приглашать",
  "invitation": "приглашение (открытка) (A2)",
  "wrap": "упаковывать, заворачивать подарок (A2)",
  "decorate": "украшать (A2)",
  "balloon": "воздушный шар (A2)",
  "camp": "лагерь; разбивать палатку",
  "cave": "пещера (A2)",
  "species": "биологический вид (B1)",
  "habitat": "естественная среда обитания (B1)",
  "endangered": "вымирающий, под угрозой исчезновения (B1)",
  "reserve": "природный заповедник (B1)",
  "observe": "наблюдать, вести наблюдение (B1)",
  "predator": "хищник (B1)",
  "mammal": "млекопитающее (B1)",
  "adapt": "адаптироваться, приспосабливаться (B1)",
  "conservation": "охрана природы, сохранение (B1)",
  "footprint": "след; экологический след (B1)",
  "itinerary": "план маршрута поездки (B1)",
  "accommodation": "жильё в поездке (B1)",
  "destination": "пункт назначения (B1)",
  "excursion": "экскурсия (B1)",
  "currency": "валюта (B1)",
  "keep in touch": "поддерживать связь",
  "reliable": "надёжный, достоверный",
  "generous": "щедрый, великодушный (B1)",
  "apologise": "извиняться (B1)",
  "forgive": "прощать (B1)",
  "mutual": "взаимный (B1)",
  "director": "режиссёр",
  "sequel": "продолжение фильма (сиквел) (B1)",
  "subtitles": "субтитры (B1)",
  "performance": "актёрская игра, выступление (B1)",
  "review": "рецензия, кинообзор (B1)",
  "cast": "актёрский состав (B1)",
  "championship": "чемпионат, первенство (B1)",
  "compete": "соревноваться, выступать (B1)",
  "referee": "судья, арбитр (B1)",
  "spectator": "зритель на трибуне (B1)",
  "defeat": "победить соперника; поражение (B1)",
  "unpack": "распаковывать (коробки)",
  "suburb": "пригород",
  "landlord": "арендодатель, хозяин жилья (B1)",
  "tenant": "жилец, квартиросъёмщик (B1)",
  "deposit": "залог, депозит (B1)",
  "furnished": "меблированный (с мебелью) (B1)",
  "resident": "местный житель (B1)",
  "skill": "навык, умение",
  "qualification": "квалификация, диплом (B1)",
  "candidate": "кандидат, соискатель (B1)",
  "permanent": "постоянный (о работе) (B1)",
  "promote": "повышать в должности (B1)",
  "resign": "увольняться по собственному желанию (B1)",
  "renewable": "возобновляемый (об энергии) (B1)",
  "climate": "климат (B1)",
  "drought": "засуха (B1)",
  "litter": "мусор в общественных местах (B1)",
  "password": "пароль",
  "wireless": "беспроводной (B1)",
  "privacy": "конфиденциальность, приватность (B1)",
  "database": "база данных (B1)",
  "update": "обновлять; обновление (B1)",
  "notification": "уведомление (на экране) (B1)",
  "rehearsal": "репетиция (B1)",
  "composer": "композитор (B1)",
  "applause": "аплодисменты (B1)",
  "choir": "хор (B1)",
  "mindset": "образ мышления, настрой",
  "anxiety": "тревожность, волнение",
  "empathy": "эмпатия, сопереживание",
  "resilience": "жизнестойкость, внутренняя устойчивость",
  "subconscious": "подсознание; подсознательный (B2)",
  "self-esteem": "самооценка (B2)",
  "overwhelm": "перегружать эмоциями, захлёстывать (B2)",
  "motive": "внутренний мотив, побуждение (B2)",
  "burnout": "эмоциональное выгорание (B2)",
  "budget": "бюджет",
  "invest": "инвестировать, вкладывать",
  "savings": "сбережения, накопления",
  "expense": "расход, трата",
  "income": "доход",
  "inflation": "инфляция (B2)",
  "mortgage": "ипотека (B2)",
  "revenue": "выручка, доход компании (B2)",
  "asset": "ценный актив, капитал (B2)",
  "profitable": "прибыльный, рентабельный (B2)",
  "headline": "заголовок статьи",
  "source": "источник (информации)",
  "broadcast": "транслировать в эфире; эфир",
  "biased": "предвзятый, однобокий",
  "censorship": "цензура (B2)",
  "objective": "объективный, беспристрастный (B2)",
  "coverage": "освещение событий в СМИ (B2)",
  "controversy": "общественный спор, полемика (B2)",
  "editorial": "редакционная статья (B2)",
  "masterpiece": "шедевр",
  "exhibition": "выставка",
  "sculpture": "скульптура",
  "portrait": "портрет",
  "inspire": "вдохновлять",
  "contemporary": "современный (об искусстве) (B2)",
  "restoration": "реставрация (B2)",
  "perspective": "перспектива, ракурс (B2)",
  "auction": "аукцион (B2)",
  "authentic": "подлинный, аутентичный (B2)",
  "artificial": "искусственный (artificial intelligence — ИИ)",
  "breakthrough": "прорыв, крупное открытие",
  "device": "устройство, прибор",
  "software": "программное обеспечение",
  "automate": "автоматизировать",
  "algorithm": "алгоритм (B2)",
  "obsolete": "устаревший, вышедший из употребления (B2)",
  "patent": "патент; запатентовать (B2)",
  "integrate": "интегрировать, объединять (B2)",
  "autonomous": "автономный, беспилотный (B2)",
  "promotion": "повышение по службе",
  "deadline": "крайний срок (дедлайн)",
  "leadership": "лидерство, руководство",
  "negotiate": "вести переговоры, договариваться",
  "remote": "удалённый (remote work)",
  "entrepreneur": "предприниматель (B2)",
  "delegate": "делегировать задачи (B2)",
  "supervise": "курировать, руководить работой (B2)",
  "incentive": "стимул, мотивационный бонус (B2)",
  "productivity": "продуктивность (B2)",
  "research": "научное исследование",
  "hypothesis": "гипотеза",
  "evidence": "улики, доказательства в суде",
  "laboratory": "лаборатория",
  "evolution": "эволюция, развитие (B2)",
  "genetics": "генетика (B2)",
  "analyse": "анализировать (B2)",
  "valid": "обоснованный, достоверный (о выводе) (B2)",
  "specimen": "научный образец, экземпляр (B2)",
  "custom": "обычай, традиция",
  "heritage": "культурное наследие",
  "festival": "фестиваль, народный праздник",
  "generation": "поколение",
  "diversity": "культурное многообразие (B2)",
  "solidarity": "солидарность, сплочённость (B2)",
  "integration": "интеграция, сближение культур (B2)",
  "ritual": "обряд, ритуал (B2)",
  "ancestry": "происхождение, предки (B2)",
  "restore": "реставрировать, восстанавливать",
  "facade": "фасад здания",
  "interior": "интерьер",
  "diagnosis": "диагноз, диагностика (B2)",
  "chronic": "хронический (B2)",
  "prescribe": "выписывать, назначать (лечение) (B2)",
  "rehabilitation": "реабилитация, восстановление (B2)",
  "remedy": "целебное средство (B2)",
  "novel": "роман (книга)",
  "chapter": "глава книги",
  "character": "персонаж, герой; характер",
  "author": "автор, писатель",
  "vivid": "яркий, живой, образный",
  "narrative": "повествование, сюжетная линия (B2)",
  "irony": "ирония (B2)",
  "memoir": "мемуары, воспоминания (B2)",
  "interpret": "интерпретировать, толковать (B2)",
  "prose": "художественная проза (B2)",
  "treaty": "международный договор, соглашение",
  "ambassador": "посол",
  "compromise": "компромисс",
  "consensus": "консенсус, общее согласие",
  "alliance": "альянс, союз",
  "sovereignty": "суверенитет (C1)",
  "bilateral": "двусторонний (о переговорах) (C1)",
  "sanction": "санкционировать; санкция (C1)",
  "mediate": "выступать посредником (C1)",
  "jurisdiction": "юрисдикция, правовая сфера (C1)",
  "persuade": "убеждать, склонять к мнению",
  "eloquent": "красноречивый",
  "gesture": "жест",
  "emphasis": "акцент, особое внимание",
  "charisma": "харизма, обаяние",
  "articulate": "чётко и ясно выражающий мысли (C1)",
  "rhetoric": "риторика, ораторское искусство (C1)",
  "assertion": "утверждение, тезис (C1)",
  "ambiguity": "двусмысленность, неоднозначность (C1)",
  "refute": "аргументированно опровергать (C1)",
  "orbit": "орбита; вращаться на орбите",
  "constellation": "созвездие",
  "gravity": "гравитация, притяжение",
  "satellite": "спутник",
  "cosmos": "космос, Вселенная",
  "trajectory": "траектория полёта (C1)",
  "velocity": "векторная скорость (в физике) (C1)",
  "gravitational": "гравитационный (C1)",
  "anomaly": "аномалия, отклонение (C1)",
  "spectrum": "спектр излучения (C1)",
  "pedestrian": "пешеход; пешеходный",
  "sustainable": "устойчивый, экологичный",
  "commute": "ежедневная поездка на работу и обратно",
  "infrastructure": "инфраструктура",
  "greenery": "зелень, парковые насаждения",
  "gentrification": "джентрификация (обновление кварталов) (C1)",
  "congestion": "транспортный затор, перегруженность (C1)",
  "metropolitan": "столичный, относящийся к мегаполису (C1)",
  "municipality": "муниципалитет, городская администрация (C1)",
  "amenity": "удобство городской среды, благоустройство (C1)",
  "memory": "память",
  "neuron": "нейрон",
  "cognitive": "когнитивный, познавательный",
  "plasticity": "нейропластичность мозга (C1)",
  "stimulus": "стимул, раздражитель (C1)",
  "retention": "удержание в памяти, сохранение (C1)",
  "empirical": "эмпирический, опытный (C1)",
  "correlation": "корреляция, взаимосвязь (C1)",
  "flavour": "вкус, оттенок вкуса, аромат",
  "ingredient": "ингредиент",
  "simmer": "томиться на медленном огне",
  "exquisite": "изысканный, утончённый",
  "blend": "сочетать, смешивать; гармоничное сочетание",
  "culinary": "кулинарный, гастрономический (C1)",
  "fermentation": "ферментация (C1)",
  "delicacy": "деликатес; тонкость (C1)",
  "savoury": "пикантный, несладкий (о блюде) (C1)",
  "artisan": "ремесленный, авторской ручной работы (C1)",
  "justice": "справедливость, правосудие",
  "witness": "свидетель",
  "verdict": "вердикт, решение суда",
  "clause": "пункт договора, оговорка",
  "legislation": "законодательство (C1)",
  "testimony": "свидетельские показания (C1)",
  "liability": "юридическая ответственность (C1)",
  "precedent": "судебный прецедент (C1)",
  "impartial": "беспристрастный, непредвзятый (C1)",
  "cinematography": "операторское искусство",
  "protagonist": "главный герой (протагонист)",
  "metaphor": "метафора",
  "script": "сценарий",
  "critic": "кинокритик",
  "juxtaposition": "контрастное сопоставление (C1)",
  "motif": "лейтмотив, повторяющийся образ (C1)",
  "evocative": "пробуждающий живые образы (C1)",
  "avant-garde": "авангардный (C1)",
  "screenplay": "киносценарий (C1)",
  "mimic": "имитировать, повторять устройство природы",
  "aerodynamic": "аэродинамический",
  "structure": "структура, строение",
  "efficient": "эффективный, экономичный",
  "biomimicry": "биомимикрия, бионика (C1)",
  "replicate": "воссоздавать, точно повторять (C1)",
  "friction": "трение, сопротивление среды (C1)",
  "mechanism": "природный механизм (C1)",
  "synthetic": "синтетический, искусственно созданный (C1)",
  "tide": "прилив и отлив",
  "biodiversity": "биоразнообразие",
  "phenomenon": "уникальное природное явление (феномен)",
  "ecosystem": "экосистема (C1)",
  "salinity": "солёность воды (C1)",
  "abyssal": "абиссальный, глубоководный (C1)",
  "equilibrium": "динамическое равновесие, баланс (C1)",
  "paradox": "парадокс",
  "perception": "восприятие",
  "serenity": "безмятежность, душевный покой",
  "essence": "суть, сущность",
  "epistemology": "эпистемология (теория познания) (C2)",
  "paradigm": "парадигма, модель мировоззрения (C2)",
  "existential": "экзистенциальный, бытийный (C2)",
  "transcend": "выходить за пределы, превосходить (C2)",
  "dichotomy": "дихотомия, противопоставление двух начал (C2)",
  "luminous": "лучезарный, светящийся",
  "imagery": "художественные образы, образность",
  "resonance": "отклик в душе, резонанс",
  "evoke": "пробуждать (чувства, воспоминания)",
  "timeless": "неподвластный времени, вечный",
  "allegory": "аллегория, иносказание (C2)",
  "cadence": "ритмическая мелодика речи, каденция (C2)",
  "sublime": "возвышенный, величественный (C2)",
  "euphony": "благозвучие, гармония звуков (C2)",
  "echolocation": "эхолокация",
  "altruism": "альтруизм, бескорыстная помощь",
  "pod": "стая (дельфинов или китов)",
  "intelligence": "интеллект, разум",
  "metacognition": "метапознание (саморефлексия разума) (C2)",
  "innate": "врождённый, природный (C2)",
  "discern": "различать, улавливать тонкие детали (C2)",
  "symbiosis": "симбиоз, гармоничное сосуществование (C2)",
  "acuity": "острота восприятия или ума (C2)",
  "aesthetic": "эстетика; эстетический",
  "intuitive": "интуитивно понятный",
  "harmony": "гармония, сочетаемость",
  "proportion": "пропорция, соразмерность",
  "clutter": "визуальный шум, нагромождение",
  "symmetry": "симметрия, соразмерность (C2)",
  "minimalism": "минимализм, лаконичность (C2)",
  "tactile": "тактильный, осязаемый (о текстуре бумаги) (C2)",
  "vernacular": "традиционный местный стиль (в архитектуре/языке) (C2)",
  "edifice": "величественное сооружение, здание (C2)",
  "nuance": "нюанс, тонкий оттенок смысла",
  "idiom": "идиома, крылатое выражение",
  "eloquence": "дар слова, выразительность речи",
  "context": "контекст",
  "etymology": "этимология (происхождение слова) (C2)",
  "colloquial": "разговорный, живой непринуждённый (C2)",
  "register": "стилевой регистр речи (C2)",
  "semantics": "семантика, смысловое поле (C2)",
  "pragmatic": "прагматический, практико-контекстный (C2)",
  "blossom": "цвести; пышный цвет",
  "fragrance": "тонкий цветочный аромат, благоухание",
  "petal": "лепесток",
  "greenhouse": "оранжерея, зимний сад",
  "thrive": "процветать, буйно расти",
  "pristine": "первозданный, нетронутый (C2)",
  "indigenous": "коренной, эндемичный для региона (C2)",
  "proliferation": "бурное разрастание, расцвет (C2)",
  "botanical": "ботанический (C2)",
  "cultivate": "культивировать, бережно выращивать (C2)",
  "nebula": "туманность (звёздная)",
  "eclipse": "затмение",
  "horizon": "кругозор, горизонт",
  "celestial": "небесный, звёздный",
  "boundless": "безграничный, бескрайний",
  "singularity": "сингулярность, уникальность (C2)",
  "zenith": "зенит, высшая точка (C2)",
  "equinox": "равноденствие (C2)",
  "primordial": "первозданный, изначальный (о Вселенной) (C2)",
  "luminosity": "светимость звезды (C2)",
  "virtuoso": "виртуоз; виртуозный",
  "crescendo": "крещендо (постепенное нарастание звучания)",
  "conductor": "дирижёр",
  "dissonance": "диссонанс (переходящий в гармонию) (C2)",
  "sonorous": "глубокий, полнозвучный, певучий (C2)",
  "polyphony": "полифония, многоголосие (C2)",
  "maestro": "маэстро, выдающийся музыкант (C2)",
  "philharmonic": "филармонический (C2)",
  "manuscript": "старинная рукопись, манускрипт",
  "artifact": "артефакт, предмет древности",
  "chronicle": "летопись, хроника",
  "preserve": "бережно сохранять",
  "civilization": "цивилизация",
  "antiquity": "античность, глубокая древность (C2)",
  "posterity": "будущие поколения, потомки (C2)",
  "excavate": "проводить археологические раскопки (C2)",
  "effortless": "лёгкий, непринуждённый",
  "accomplish": "достигать, блестяще справляться",
  "virtuosity": "виртуозность, высочайшее мастерство (C2)",
  "perseverance": "упорство, настойчивость (C2)",
  "erudition": "эрудиция, глубина познаний (C2)",
  "pinnacle": "вершина, пик мастерства (C2)"
};

// ============================================================================
// 50 РАЗНООБРАЗНЫХ ШАГОВ НА КАЖДЫЙ УРОВЕНЬ (A1..C2 = 300 УНИКАЛЬНЫХ ШАГОВ!)
// Каждая из 10 базовых тем уровня раскрывается в 5 специализированных шагов
// по 8 неповторяющихся заданий разных форматов в каждом шаге (400 заданий на уровень!)
// ============================================================================
(function expandScayaTo50StepsPerLevel() {
  const curr = window.ScayaCurriculum;
  if (!curr || !Array.isArray(curr.units) || curr._expanded50) return;
  curr._expanded50 = true;

  const baseUnits = curr.units.slice();
  const expandedUnits = [];

  function cleanRu(str) {
    return String(str || "").replace(/\s*\([A-C][12]\)\s*/g, "").trim();
  }

  function tokenizeSentence(sent) {
    return String(sent || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  function makeBlankSentence(example, targetWord) {
    const cleanTarget = String(targetWord || "").trim();
    if (!example || !cleanTarget) return `Choose the best word: “___”`;
    const re = new RegExp("\\b" + cleanTarget.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
    if (re.test(example)) {
      return example.replace(re, "___");
    }
    return `${example} (ключевое слово: ___)`;
  }

  const zones = curr.oceanZones || [];
  zones.forEach(zone => {
    zone.subtitle = `50 разнообразных шагов • Уровень ${zone.cefr}`;
    const zoneBase = baseUnits.filter(u => u.zoneId === zone.id);
    // Собираем общий пул слов уровня для качественных дистракторов
    const zoneVocabPool = [];
    zoneBase.forEach(u => {
      (u.vocab || []).forEach(v => {
        if (v && v.en) zoneVocabPool.push(v);
      });
    });

    zoneBase.forEach((base, mIdx) => {
      const vocab = (base.vocab && base.vocab.length >= 4) ? base.vocab : zoneVocabPool.slice(0, 10);
      const baseEx = Array.isArray(base.exercises) ? base.exercises : [];
      const mcEx = baseEx.find(e => e.type === "multiple_choice") || baseEx[0];
      const wbEx = baseEx.find(e => e.type === "word_bank") || baseEx[1] || baseEx[0];
      const rdEx = baseEx.find(e => e.type === "reading_comprehension") || baseEx[2] || baseEx[0];
      const lsEx = baseEx.find(e => e.type === "listening" || e.type === "listening_comprehension") || baseEx[3] || baseEx[0];
      const spEx = baseEx.find(e => e.type === "speaking" || e.type === "speaking_pronunciation") || baseEx[4] || baseEx[0];
      const grammarSum = (base.theory && base.theory.headline) || base.grammarSummary || base.titleRu || "Грамматика урока";

      const pickDistractorsEn = (correctEn, count = 3, seedOffset = 0) => {
        const out = [];
        for (let i = 0; i < zoneVocabPool.length && out.length < count; i++) {
          const cand = zoneVocabPool[(mIdx * 7 + i * 3 + seedOffset) % zoneVocabPool.length].en;
          if (cand && cand.toLowerCase() !== String(correctEn).toLowerCase() && !out.includes(cand)) {
            out.push(cand);
          }
        }
        return out;
      };

      const pickDistractorsRu = (correctRu, count = 3, seedOffset = 0) => {
        const out = [];
        for (let i = 0; i < zoneVocabPool.length && out.length < count; i++) {
          const cand = cleanRu(zoneVocabPool[(mIdx * 5 + i * 4 + seedOffset) % zoneVocabPool.length].ru);
          if (cand && cand !== cleanRu(correctRu) && !out.includes(cand)) {
            out.push(cand);
          }
        }
        return out;
      };

      const rotateOpts = (correct, distractors, shift = 0) => {
        const all = [correct, ...distractors.slice(0, 3)];
        const unique = [];
        all.forEach(item => {
          if (!unique.includes(item)) unique.push(item);
        });
        const k = shift % unique.length;
        return unique.slice(k).concat(unique.slice(0, k));
      };

      const stepDefinitions = [
        {
          subIdx: 1,
          id: base.id, // сохраняем базовый ID для совместимости прогресса
          nodeType: "vocab",
          stepSuffix: "Слова и контекст",
          buildExercises: (stepNumber) => {
            const list = [];
            for (let k = 0; k < 6; k++) {
              const v = vocab[k % vocab.length];
              const ruClean = cleanRu(v.ru);
              if (k % 2 === 0) {
                const blanked = makeBlankSentence(v.example || v.ex, v.en);
                list.push({
                  id: `${base.id}_s1_q${k + 1}`,
                  stageNum: k + 1,
                  stageLabel: `Задание ${k + 1}/8 • Слово в контексте`,
                  type: "multiple_choice",
                  showVocabIntro: k === 0,
                  badge: `Шаг ${stepNumber}/50 • ${zone.cefr}`,
                  prompt: `Вставь подходящее по смыслу слово («${ruClean}»):\n«${blanked}»`,
                  options: rotateOpts(v.en, pickDistractorsEn(v.en, 3, k), k + 1),
                  correct: v.en,
                  explanation: `«${v.en}» ${v.tr || ""} означает «${ruClean}». Пример: ${v.example || v.ex}`
                });
              } else {
                list.push({
                  id: `${base.id}_s1_q${k + 1}`,
                  stageNum: k + 1,
                  stageLabel: `Задание ${k + 1}/8 • Точный перевод`,
                  type: "multiple_choice",
                  badge: `Шаг ${stepNumber}/50 • Лексика ${zone.cefr}`,
                  prompt: `Как переводится слово «${v.en}» ${v.tr || ""}?\nПример: “${v.example || v.ex}”`,
                  options: rotateOpts(ruClean, pickDistractorsRu(ruClean, 3, k), k + 2),
                  correct: ruClean,
                  explanation: `Слово «${v.en}» переводится как «${ruClean}».`
                });
              }
            }
            if (wbEx) {
              list.push({
                ...JSON.parse(JSON.stringify(wbEx)),
                id: `${base.id}_s1_q7`,
                stageNum: 7,
                stageLabel: "Задание 7/8 • Сборка фразы",
                badge: `Шаг ${stepNumber}/50 • Конструктор`
              });
            }
            if (lsEx) {
              list.push({
                ...JSON.parse(JSON.stringify(lsEx)),
                id: `${base.id}_s1_q8`,
                stageNum: 8,
                stageLabel: "Задание 8/8 • Понимание на слух",
                badge: `Шаг ${stepNumber}/50 • Аудирование`
              });
            }
            return list;
          }
        },
        {
          subIdx: 2,
          id: `${base.id}_step2`,
          nodeType: "grammar",
          stepSuffix: "Грамматика Мёрфи",
          buildExercises: (stepNumber) => {
            const list = [];
            if (mcEx) {
              list.push({
                ...JSON.parse(JSON.stringify(mcEx)),
                id: `${base.id}_s2_q1`,
                stageNum: 1,
                stageLabel: "Задание 1/8 • Правило Мёрфи",
                showVocabIntro: false,
                badge: `Шаг ${stepNumber}/50 • Грамматика ${zone.cefr}`
              });
            }
            const ruleFormula = (base.theory && base.theory.murphyRules && base.theory.murphyRules[0] && base.theory.murphyRules[0].formula) || grammarSum;
            const ruleExample = (base.theory && base.theory.murphyRules && base.theory.murphyRules[0] && base.theory.murphyRules[0].example) || (vocab[0] && vocab[0].example) || "English is fun.";
            const exTokens = tokenizeSentence(ruleExample);
            if (exTokens.length >= 3) {
              const distractorPool = ["is", "are", "was", "have", "been", "to", "will"];
              const dists = distractorPool.filter(d => !exTokens.includes(d)).slice(0, 2);
              list.push({
                id: `${base.id}_s2_q2`,
                stageNum: 2,
                stageLabel: "Задание 2/8 • Формула в речи",
                type: "word_bank",
                badge: `Шаг ${stepNumber}/50 • Формула ${zone.cefr}`,
                audioText: ruleExample,
                prompt: `Прослушай и собери эталонный пример по правилу «${grammarSum}»:`,
                promptRu: `Прослушай 🔊 и собери фразу (формула: ${ruleFormula})`,
                words: exTokens.concat(dists),
                distractors: dists,
                correct: ruleExample,
                correctSentence: ruleExample,
                explanation: `Эталонная конструкция: «${ruleExample}» (${grammarSum}).`
              });
            }
            for (let k = 4; k < 9; k++) {
              const v = vocab[k % vocab.length];
              const blanked = makeBlankSentence(v.example || v.ex, v.en);
              list.push({
                id: `${base.id}_s2_q${list.length + 1}`,
                stageNum: list.length + 1,
                stageLabel: `Задание ${list.length + 1}/8 • Грамматика и лексика`,
                type: "multiple_choice",
                badge: `Шаг ${stepNumber}/50 • Практика ${zone.cefr}`,
                prompt: `Дополни предложение без потери грамматического смысла («${cleanRu(v.ru)}»):\n«${blanked}»`,
                options: rotateOpts(v.en, pickDistractorsEn(v.en, 3, k + 3), k),
                correct: v.en,
                explanation: `Верный ответ: «${v.en}». Полная фраза: ${v.example || v.ex}`
              });
            }
            if (spEx) {
              list.push({
                ...JSON.parse(JSON.stringify(spEx)),
                id: `${base.id}_s2_q8`,
                stageNum: list.length + 1,
                stageLabel: `Задание ${list.length + 1}/8 • Устная практика`,
                badge: `Шаг ${stepNumber}/50 • Говорение`
              });
            }
            return list.slice(0, 8);
          }
        },
        {
          subIdx: 3,
          id: `${base.id}_step3`,
          nodeType: "builder",
          stepSuffix: "Конструктор фраз",
          buildExercises: (stepNumber) => {
            const list = [];
            if (wbEx) {
              list.push({
                ...JSON.parse(JSON.stringify(wbEx)),
                id: `${base.id}_s3_q1`,
                stageNum: 1,
                stageLabel: "Задание 1/8 • Порядок слов",
                badge: `Шаг ${stepNumber}/50 • Конструктор ${zone.cefr}`
              });
            }
            for (let k = 0; k < 5; k++) {
              const v = vocab[(k * 2 + 1) % vocab.length];
              const sent = v.example || v.ex || `We use ${v.en} every day.`;
              const words = tokenizeSentence(sent);
              const extra = pickDistractorsEn(v.en, 2, k + 9);
              list.push({
                id: `${base.id}_s3_q${list.length + 1}`,
                stageNum: list.length + 1,
                stageLabel: `Задание ${list.length + 1}/8 • Собери предложение`,
                type: "word_bank",
                badge: `Шаг ${stepNumber}/50 • Сборка фразы`,
                audioText: sent,
                prompt: `Прослушай 🔊 и собери предложение со словом «${v.en}» (${cleanRu(v.ru)}):`,
                promptRu: `Слово в центре фразы: «${v.en}» (${cleanRu(v.ru)})`,
                words: words.concat(extra),
                distractors: extra,
                correct: sent,
                correctSentence: sent,
                explanation: `Правильный порядок слов: «${sent}».`
              });
            }
            for (let k = 7; k < 9; k++) {
              const v = vocab[k % vocab.length];
              const ruClean = cleanRu(v.ru);
              list.push({
                id: `${base.id}_s3_q${list.length + 1}`,
                stageNum: list.length + 1,
                stageLabel: `Задание ${list.length + 1}/8 • Обратный перевод`,
                type: "multiple_choice",
                badge: `Шаг ${stepNumber}/50 • Перевод ${zone.cefr}`,
                prompt: `Какое английское слово означает «${ruClean}»?`,
                options: rotateOpts(v.en, pickDistractorsEn(v.en, 3, k + 11), k),
                correct: v.en,
                explanation: `«${ruClean}» по-английски — «${v.en}» ${v.tr || ""}.`
              });
            }
            return list.slice(0, 8);
          }
        },
        {
          subIdx: 4,
          id: `${base.id}_step4`,
          nodeType: "nuance",
          stepSuffix: "Ловушки и ошибки",
          buildExercises: (stepNumber) => {
            const list = [];
            for (let k = 0; k < 4; k++) {
              const v = vocab[(k * 2) % vocab.length];
              const wrongWord = pickDistractorsEn(v.en, 1, k + 5)[0] || "wrong";
              const goodSent = v.example || v.ex;
              const badSent = makeBlankSentence(goodSent, v.en).replace("___", wrongWord);
              list.push({
                id: `${base.id}_s4_q${list.length + 1}`,
                stageNum: list.length + 1,
                stageLabel: `Задание ${list.length + 1}/8 • Охота на ошибку`,
                type: "error_hunter",
                badge: `Шаг ${stepNumber}/50 • Error Hunter ${zone.cefr}`,
                prompt: `В предложении перепутано слово по смыслу («${cleanRu(v.ru)}»). Выбери правильный вариант замены:`,
                buggySentence: badSent,
                options: rotateOpts(v.en, pickDistractorsEn(v.en, 3, k + 2), k + 1),
                correct: v.en,
                explanation: `Вместо «${wrongWord}» здесь нужно слово «${v.en}» (${cleanRu(v.ru)}): “${goodSent}”.`
              });
            }
            if (mcEx) {
              list.push({
                ...JSON.parse(JSON.stringify(mcEx)),
                id: `${base.id}_s4_q5`,
                stageNum: 5,
                stageLabel: "Задание 5/8 • Ловушка грамматики",
                showVocabIntro: false,
                badge: `Шаг ${stepNumber}/50 • Грамматика`
              });
            }
            for (let k = 5; k < 8; k++) {
              const v = vocab[(k + 2) % vocab.length];
              const blanked = makeBlankSentence(v.example || v.ex, v.en);
              list.push({
                id: `${base.id}_s4_q${list.length + 1}`,
                stageNum: list.length + 1,
                stageLabel: `Задание ${list.length + 1}/8 • Точный выбор`,
                type: "multiple_choice",
                badge: `Шаг ${stepNumber}/50 • Нюансы ${zone.cefr}`,
                prompt: `Выбери единственное точное слово для контекста:\n«${blanked}» (${cleanRu(v.ru)})`,
                options: rotateOpts(v.en, pickDistractorsEn(v.en, 3, k + 14), k),
                correct: v.en,
                explanation: `Верно: «${v.en}» — ${cleanRu(v.ru)}.`
              });
            }
            return list.slice(0, 8);
          }
        },
        {
          subIdx: 5,
          id: `${base.id}_step5`,
          nodeType: "reading",
          stepSuffix: "История, Слух и Речь",
          buildExercises: (stepNumber) => {
            const list = [];
            if (rdEx) {
              list.push({
                ...JSON.parse(JSON.stringify(rdEx)),
                id: `${base.id}_s5_q1`,
                stageNum: 1,
                stageLabel: "Задание 1/8 • Чтение истории",
                badge: `Шаг ${stepNumber}/50 • Чтение ${zone.cefr}`
              });
            }
            if (lsEx) {
              list.push({
                ...JSON.parse(JSON.stringify(lsEx)),
                id: `${base.id}_s5_q2`,
                stageNum: 2,
                stageLabel: "Задание 2/8 • Аудирование",
                badge: `Шаг ${stepNumber}/50 • Слух ${zone.cefr}`
              });
            }
            for (let k = 0; k < 2; k++) {
              const v = vocab[(k * 3 + 2) % vocab.length];
              const sent = v.example || v.ex;
              list.push({
                id: `${base.id}_s5_q${list.length + 1}`,
                stageNum: list.length + 1,
                stageLabel: `Задание ${list.length + 1}/8 • Фраза на слух`,
                type: "listening_comprehension",
                badge: `Шаг ${stepNumber}/50 • Аудирование фразы`,
                audioText: sent,
                prompt: "Прослушай фразу и выбери ключевое слово, которое в ней прозвучало:",
                options: rotateOpts(v.en, pickDistractorsEn(v.en, 3, k + 6), k + 1),
                correct: v.en,
                explanation: `Прозвучала фраза: “${sent}” (ключевое слово — «${v.en}», ${cleanRu(v.ru)}).`
              });
            }
            if (wbEx) {
              list.push({
                ...JSON.parse(JSON.stringify(wbEx)),
                id: `${base.id}_s5_q5`,
                stageNum: 5,
                stageLabel: "Задание 5/8 • Синтез предложения",
                badge: `Шаг ${stepNumber}/50 • Синтез`
              });
            }
            if (mcEx) {
              list.push({
                ...JSON.parse(JSON.stringify(mcEx)),
                id: `${base.id}_s5_q6`,
                stageNum: 6,
                stageLabel: "Задание 6/8 • Проверка правила",
                showVocabIntro: false,
                badge: `Шаг ${stepNumber}/50 • Грамматика`
              });
            }
            if (spEx) {
              list.push({
                ...JSON.parse(JSON.stringify(spEx)),
                id: `${base.id}_s5_q7`,
                stageNum: 7,
                stageLabel: "Задание 7/8 • Произношение и речь",
                badge: `Шаг ${stepNumber}/50 • Speaking`
              });
            }
            const lastV = vocab[vocab.length - 1];
            list.push({
              id: `${base.id}_s5_q8`,
              stageNum: 8,
              stageLabel: "Задание 8/8 • Финал главы",
              type: "multiple_choice",
              badge: `Шаг ${stepNumber}/50 • Босс-финал ${zone.cefr}`,
              prompt: `Финальный вопрос темы «${base.titleRu.replace(/^Урок\s*\d+:\s*/i, "")}»:\nВыбери слово для “${makeBlankSentence(lastV.example || lastV.ex, lastV.en)}”`,
              options: rotateOpts(lastV.en, pickDistractorsEn(lastV.en, 3, 19), 2),
              correct: lastV.en,
              explanation: `Отлично! «${lastV.en}» (${cleanRu(lastV.ru)}) закрывает главу!`
            });
            return list;
          }
        }
      ];

      const cleanThemeTitle = String(base.titleRu || "")
        .replace(/^Урок\s*\d+:\s*/i, "")
        .replace(/\s*\([A-C][12]\)\s*$/i, "")
        .trim();

      stepDefinitions.forEach(def => {
        const stepNum = mIdx * 5 + def.subIdx;
        expandedUnits.push({
          ...base,
          id: def.id,
          parentUnitId: base.id,
          stepNumberInZone: stepNum,
          chapterNumber: mIdx + 1,
          chapterTitle: cleanThemeTitle,
          nodeType: def.nodeType,
          titleRu: `Шаг ${stepNum}: ${cleanThemeTitle} • ${def.stepSuffix}`,
          titleEn: `Step ${stepNum}: ${base.titleEn} (${def.stepSuffix})`,
          exercises: def.buildExercises(stepNum)
        });
      });
    });
  });

  curr.units = expandedUnits;
})();

