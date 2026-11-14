-- ============================================================================
-- SCAYA (🐬) — Полная схема облачной базы данных Supabase (PostgreSQL)
-- Синтез систем: Murphy + Cambridge Exams + Macmillan + Focus on Grammar + Oxford
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ПРОФИЛИ ПОЛЬЗОВАТЕЛЕЙ (связаны с Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE,
    display_name TEXT NOT NULL DEFAULT 'Искатель Океана',
    avatar_outfit TEXT NOT NULL DEFAULT 'default', -- 'default', 'captain', 'scholar', 'cozy', 'royal'
    current_zone_id TEXT NOT NULL DEFAULT 'lagoon_a1', -- 'lagoon_a1', 'reef_b1', 'ocean_b2', 'twilight_c1', 'abyss_c2'
    xp INT NOT NULL DEFAULT 0,
    weekly_xp INT NOT NULL DEFAULT 0,
    pearls INT NOT NULL DEFAULT 250, -- Жемчужины Океана Scaya
    hearts INT NOT NULL DEFAULT 5,
    max_hearts INT NOT NULL DEFAULT 5,
    streak_days INT NOT NULL DEFAULT 1,
    streak_freeze_count INT NOT NULL DEFAULT 1,
    last_practice_date DATE DEFAULT CURRENT_DATE,
    placement_completed BOOLEAN NOT NULL DEFAULT FALSE,
    detected_cefr_level TEXT DEFAULT 'A1',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. ОКЕАНСКИЕ ЗОНЫ (УРОВНИ ПОГРУЖЕНИЯ A1 -> C2)
CREATE TABLE IF NOT EXISTS public.ocean_zones (
    id TEXT PRIMARY KEY,
    order_index INT NOT NULL,
    title_ru TEXT NOT NULL,
    title_en TEXT NOT NULL,
    cefr_range TEXT NOT NULL,
    cambridge_exam TEXT NOT NULL,
    depth_meters TEXT NOT NULL,
    description TEXT NOT NULL,
    theme_color TEXT NOT NULL
);

-- 3. ЮНИТЫ ОБУЧЕНИЯ (MURPHY + CAMBRIDGE + MACMILLAN + FOCUS + OXFORD)
CREATE TABLE IF NOT EXISTS public.units (
    id TEXT PRIMARY KEY,
    zone_id TEXT NOT NULL REFERENCES public.ocean_zones(id) ON DELETE CASCADE,
    unit_number INT NOT NULL,
    title_en TEXT NOT NULL,
    title_ru TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    methodology_sources TEXT[] NOT NULL,
    theory_json JSONB NOT NULL,
    exercises_json JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. ПРОГРЕСС ПОЛЬЗОВАТЕЛЯ ПО ЮНИТАМ
CREATE TABLE IF NOT EXISTS public.user_unit_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    unit_id TEXT NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
    crowns INT NOT NULL DEFAULT 0,
    best_accuracy INT NOT NULL DEFAULT 0,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, unit_id)
);

-- 5. УМНАЯ ЛАГУНА ОШИБОК (Интервальное повторение + Murphy Study Guide)
CREATE TABLE IF NOT EXISTS public.mistake_bank (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    unit_id TEXT NOT NULL,
    question_prompt TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    user_wrong_answer TEXT NOT NULL,
    grammar_explanation TEXT NOT NULL,
    source_tag TEXT NOT NULL,
    review_stage INT NOT NULL DEFAULT 1,
    next_review_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. ЕЖЕНЕДЕЛЬНЫЕ ЛИГИ ОКЕАНА
CREATE TABLE IF NOT EXISTS public.league_entries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    league_tier TEXT NOT NULL DEFAULT 'coral',
    week_start DATE NOT NULL DEFAULT date_trunc('week', CURRENT_DATE)::DATE,
    weekly_xp INT NOT NULL DEFAULT 0,
    UNIQUE (user_id, week_start)
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_unit_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mistake_bank ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.league_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Пользователи видят и редактируют свой профиль"
    ON public.profiles FOR ALL USING (auth.uid() = id);

CREATE POLICY "Пользователи управляют своим прогрессом"
    ON public.user_unit_progress FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Пользователи управляют своими ошибками"
    ON public.mistake_bank FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Все видят рейтинг лиги за неделю"
    ON public.league_entries FOR SELECT USING (true);
