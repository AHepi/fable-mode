# Fable Academy

A course-hosting website that **expands dynamically** — adding a course is dropping a folder — paired
with an **AI production pipeline** that turns a single prompt into a finished, deployable course.

> *"Create a course on Abstract Algebra that assumes highschool math understanding."* → research →
> curriculum → every module written → assembled → verified → shipped to the site.

## How it's built

The repo is two zones joined by one plain-text contract:

- **The factory** — an [ICM](https://github.com/RinDig/Interpretable-Context-Methodology-ICM-)
  (Interpretable Context Methodology) workspace. Orchestration lives in the *folder structure*, not
  in framework code: numbered stage folders (`pipeline/01_research` … `06_verify`), each with a
  `CONTEXT.md` contract; stable reference material in `_config/`; non-AI helpers in `shared/scripts/`.
  One agent (driven by the `fable-mode` skill) reads the right files at the right moment and
  delegates per-module writing to parallel sub-agents.
- **The shelf** — an [Astro](https://astro.build) static site (`site/`) whose content collections
  auto-discover any `courses/<slug>/` folder, render LaTeX with KaTeX at build time, and deploy to
  GitHub Pages via GitHub Actions.

The interface between them is the content schema (`_config/content-schema.md`, enforced by
`site/src/content.config.ts`). The assembly stage is the only stage that writes across it.

## Create a course

In Claude Code, from the repo root:

```
/create-course Abstract Algebra assuming highschool math
```

or just ask in plain English. The run is fully inspectable: every stage writes an editable file
under `runs/<run-id>/`, and the finished course lands in `site/src/content/courses/<slug>/`.

## Run the site locally

```bash
cd site
npm install
npm run dev      # or: npm run build && npm run preview
```

## Layout

```
CLAUDE.md / CONTEXT.md   workspace identity + routing (read these first)
pipeline/                the five numbered production stages
_config/                 house style, pedagogy, brand, the content schema
shared/                  templates + deterministic scripts
runs/                    per-course working artifacts
site/                    the Astro app (the deployable shelf)
.github/workflows/       GitHub Pages deploy
```

See `CLAUDE.md` for the full map and `docs`-style detail in each stage's `CONTEXT.md`.
