# AGENTS.md

Vue 3 + Vite + TypeScript single-page portfolio. No router/pinia in use (deps installed but not wired into the app).

## Commands
- `npm run dev` — dev server
- `npm run build` — runs `type-check` (vue-tsc) **and** `vite build` in parallel
- `npm run lint` — runs oxlint then eslint (both with `--fix`)
- `npm run test:unit` — vitest (jsdom); there are currently no spec files
- `docker compose up -d --build` — image build runs **`npm run build-only`** (no `vue-tsc`) for speed on low-spec hosts; type-check with `npm run build` locally or in CI before pushing

## Tailwind v4 (important — no `tailwind.config.js`)
- Config/theme is CSS-first, in `src/assets/main.css`.
- Custom orange palette `primary-50..900` and fonts come from the `@theme` block there — add new shades in that file, not a config file.
- Dark mode uses the class strategy via `@custom-variant dark`. Toggle is handled by `src/composables/useDarkMode.ts` (stores `theme` in localStorage).

## Scroll-reveal gotcha (critical)
To animate an element on scroll it needs **both**:
1. `class="reveal"` AND
2. the global `v-reveal` directive
Otherwise the element stays permanently at `opacity: 0` (invisible). `v-reveal` is registered in `src/main.ts`.

## Icons
`@lucide/vue` does **not** export brand icons (GitHub, LinkedIn). Use the custom `src/components/ui/GithubIcon.vue` / `LinkedinIcon.vue` via `SocialIcon.vue` (`socialLinks.ts` maps an icon string to a component). Lucide icons take a `class` prop for sizing.

## Content is data-driven
Edit `src/data/*.ts` (profile, projects, skills, experiences, testimonials, socialLinks) and the `public/` assets — not the components. Photos are placeholder SVGs you can swap; see below.

## i18n (2 languages: Indonesian 🇮🇩 + English 🇬🇧)
- Uses **vue-i18n v11** (Composition API, `legacy: false`). Setup in `src/i18n/index.ts`; message catalogs in `src/i18n/locales/{id,en}.json`.
- To add a UI string: add the key to **both** `id.json` and `en.json`, then use `const { t } = useI18n()` and `t('nav.home')` in components.
- **Bilingual data** (bio, projects, experiences, testimonials) lives per-locale in `src/data/*.ts` as `{ id: [...], en: [...] }`. Access it reactively via `useLocalizedData()` from `@/data` (returns `currentProfile/currentProjects/currentExperiences/currentTestimonials` computeds). `skills.ts` and `socialLinks.ts` stay single (proper nouns — do NOT translate).
- Locale is detected from browser (`navigator.language`) with `localStorage` persistence, toggled in the Navbar dropdown + mobile menu. Handled by `src/composables/useLocale.ts` (mirrors `useDarkMode.ts` pattern).
- SEO (title/description/OG + `<html lang>`) is updated at runtime by `useLocale.applyMeta()` from the `meta.*` keys; `index.html` holds the Indonesian default fallback.

## Analytics (Google Analytics 4 via vue-gtag)
- Measurement ID lives in `.env` as `VITE_GTAG_ID` (git-ignored; template in `.env.example`). Empty or the `G-XXXXXXXXXX` placeholder disables analytics entirely — gtag.js is never loaded.
- Initialized conditionally in `src/main.ts` with `createGtag` from **vue-gtag v3** (the API is `createGtag`, not the v2 `VueGtag` plugin). gtag sends the initial pageview automatically; the app has no router.
- Fire events through `useAnalytics()` (`src/composables/useAnalytics.ts`): `trackEvent`, `trackLead` (contact form), `trackCvDownload`, `trackSocialClick`, `trackLanguageChange`.
- Vite inlines `VITE_*` at **build time**: Docker production builds receive the ID via the `VITE_GTAG_ID` build arg (compose reads `.env` automatically), and the dev compose passes it as an environment variable.

## Lint constraint
`eslint.config.ts` allows only `Navbar` and `Footer` as single-word component names (`vue/multi-word-component-names` ignores list). New single-word components will fail lint.

## Placeholders to replace for a real deployment
- `src/components/ui/ContactForm.vue` — `FORM_ENDPOINT` is the dummy `https://formspree.io/f/your-form-id`; the form reports an error until this is a real Formspree ID.
- `public/cv.pdf`, `public/images/*` — dummy/placeholder files (user-provided content comes later).

## Alias
`@/*` → `src/*` (vite + tsconfig). Prefer `@/` imports.
