# Workspace Setup Questionnaire

Answer these once to configure the factory. Your answers shape the L3 reference files in `_config/`,
which then govern every course this workspace produces ("configure the factory, not the product").
You do not need to re-answer them per course.

## 1. Identity & brand → `_config/brand.md`

- What is the academy/site called? (default: **Fable Academy**)
- One-line tagline? (default: *"Courses, written to be read."*)
- Visual mood: dark/calm/reading-first, or something else?
- Voice for course-facing copy: warm + precise + confident is the default. Any words to ban?

## 2. House prose style → `_config/voice/literary-maverick.md`

- Keep the literary-maverick voice as-is, or adjust register (more formal? more playful?)?
- Any audience-specific constraints (reading level, length caps per module)?

## 3. Mathematical / formal style → `_config/math-style.md`

- Notation conventions you want enforced?
- Proof rigor expectations by level?
- Any LaTeX/KaTeX constructs to specifically allow or forbid beyond the documented subset?

## 4. Pedagogy → `_config/course-design.md`

- Default module count for a first course? (default: 8–14)
- Default module length and section shape?
- Exercises: how many per module, and do you want answer hints?

## 5. The content schema → `_config/content-schema.md` + `site/src/content.config.ts`

- Are the default course/module metadata fields sufficient, or do you need more (e.g. difficulty
  per module, video links, downloadable assets)? Changing this means editing both the schema doc and
  the Astro collection config together.

## 6. Deployment

- Target: GitHub Pages (default; configured in `.github/workflows/deploy.yml`).
- Site base path: `/fable-mode/` (set in `site/astro.config.mjs` — change if the repo name changes).
