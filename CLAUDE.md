# Fable Academy — Course Production Workspace

This repository is **two things joined by one plain-text interface**:

1. **A factory** — an [ICM](https://github.com/RinDig/Interpretable-Context-Methodology-ICM-)
   (Interpretable Context Methodology) workspace that turns a single prompt into a finished,
   deployable course. Orchestration lives in the *folder structure*, not in framework code.
2. **A shelf** — an Astro static site (`site/`) that auto-discovers and serves every course the
   factory ships, and deploys to GitHub Pages.

You are the **orchestrating agent**. Your behavior is governed by the `fable-mode` skill
(`.claude/skills/fable-mode/SKILL.md`): map the stages, delegate independent work to sub-agents,
verify before advancing. This file tells you *where things are*; `CONTEXT.md` tells you *what to do*.

## The map

```
CLAUDE.md            <- you are here (workspace identity)
CONTEXT.md           <- task routing: how to run the pipeline
pipeline/NN_*/       <- the factory: numbered stages, run in order
  CONTEXT.md         <- each stage's contract (Inputs / Process / Outputs / Verify)
  references/        <- stage-local reference material
  output/            <- scaffolding only; real per-run output goes under runs/
_config/             <- global reference material ("the factory", stable across runs)
  voice/             <- literary-maverick.md (sentence engine) + editorial-craft.md (whole-course, stage 04)
  math-style.md      <- formal/KaTeX content + the prose/formal boundary
  course-design.md   <- pedagogy & level calibration (operational rules)
  pedagogy/          <- evidence-base.md: research backing + exclusions (stages 02 & 03)
  content-schema.md  <- the contract the site validates (the 04 -> site boundary)
  brand.md           <- site identity & copy voice
shared/              <- templates/ and non-AI scripts/
setup/               <- one-time workspace configuration (questionnaire.md)
runs/<run-id>/       <- per-run working artifacts (one folder per course you build)
site/                <- the Astro app; finished courses live in site/src/content/courses/
```

## The five context layers (ICM)

Load only what each stage's contract names — never the whole repo.

- **L0** this file — "where am I"
- **L1** `CONTEXT.md` — "which stage handles this"
- **L2** `pipeline/NN_*/CONTEXT.md` — "what do I do at this stage"
- **L3** reference material (`_config/`, stage `references/`) — stable rules; *internalize as constraints*
- **L4** working artifacts (`runs/<run-id>/`) — this run's content; *process as input*

## How a run works (short version)

1. The user gives a prompt like *"Create a course on Abstract Algebra that assumes highschool math."*
2. You parse it into a **run brief** at `runs/<slug>-<date>/run-brief.md`.
3. You walk `pipeline/` in numeric order. At each stage you read its `CONTEXT.md`, load exactly the
   files its Inputs section names, do the work (delegating per-item subtasks to sub-agents where the
   contract says to), and write to that stage's output folder under `runs/<run-id>/`.
4. The **editorial** stage reads every module together and edits them as one book — unifying names
   and symbols to the curriculum's `canon.md`, turning re-derivations into callbacks, capping repeated
   phrases, varying hooks/recaps, and leveling the voice. (This is what keeps blind-parallel authors
   from drifting apart.)
5. The **assembly** stage writes the finished course into `site/src/content/courses/<slug>/`.
6. The **verify** stage validates the schema, lints prose continuity, and smoke-builds the site.
7. You commit. Merging to `main` triggers the GitHub Pages deploy.

Full routing and the autonomous-vs-gated rules are in `CONTEXT.md`.

## Conventions that bite if ignored

- **`runs/` is the workshop; `site/src/content/courses/` is the shelf.** Never write course working
  drafts into the site, and never overwrite a prior course. Each run is namespaced by `run-id`.
- **The schema is law.** Files written into `site/src/content/courses/` must validate against
  `site/src/content.config.ts` (documented in `_config/content-schema.md`). When in doubt, run
  `node shared/scripts/validate-schema.mjs <slug>`.
- **Prose vs. formal math.** literary-maverick styles the *prose*; it must never rewrite a
  definition, theorem, or proof. See `_config/math-style.md`.
- **Course `kind` drives the shape.** `stem | humanities | language | skill | general` selects the
  module template and whether math rules apply (only `stem`). See `_config/course-design.md §0`.
  Schema field defs live once in `site/src/schema/course-schema.mjs`; images co-locate under
  `courses/<slug>/assets/` with required alt text.
- **GitHub Pages base path.** The site deploys under `/fable-mode/`. Internal links in the site code
  must use the `url()` helper (`site/src/lib/url.ts`), never bare absolute paths.
- The Astro app lives entirely under `site/`. Run npm commands from there.
