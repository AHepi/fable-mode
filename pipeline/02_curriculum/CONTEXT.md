# Stage 02 — Curriculum

Design the course's shape: the modules, their order, and what each one must accomplish. This is the
**highest-leverage stage** — every authoring sub-agent inherits these decisions, so a wrong call
here is the most expensive kind to make. It is the primary human review gate.

## Inputs

- **L4** `runs/<run-id>/run-brief.md` — read first.
- **L4** `runs/<run-id>/01_research/output/research.md` — the dossier to plan from.
- **L3** `_config/course-design.md` — module anatomy, level calibration, sequencing, scope, exercises.
- **L3** `_config/brand.md` — for the course title and one-sentence description voice.

## Process

1. From the research scope and assumed background, fix the course's boundaries: what it will and
   will not cover. Aim for the module count `course-design.md` recommends for a first course.
2. Break the topic into modules — one big idea per module — ordered so each builds only on earlier
   ones. No forward references.
3. For each module, specify: a working title, a one-sentence summary, 2–4 observable learning
   objectives, its prerequisites (earlier modules/concepts), and a rough `estimatedMinutes`.
4. Sketch the prerequisite graph and sanity-check the ordering against it.
5. Draft the course-level metadata: title, one-sentence description, `level`, course
   `prerequisites`, `tags`, `estimatedHours`.

## Outputs

- `runs/<run-id>/02_curriculum/output/curriculum.md` — the course metadata block, the prerequisite
  graph, and a numbered list of module specs (title, slug, summary, objectives, prereqs, est. time).
  This file is the brief that every authoring sub-agent receives.

## Verify

- The ordering respects the prerequisite graph; no module depends on a later one.
- Objectives are observable ("state", "compute", "prove that…"), not vague ("understand").
- Scope matches the assumed background — nothing requires knowledge the brief says the reader lacks.
- Module count and per-module scope are within `course-design.md` guidance.

## Gate

**Review gate (blocks even in autonomous mode by default).** A human reads `curriculum.md` and
approves the shape before any prose is written. To proceed without pausing, the run brief must drop
`curriculum` from its `gates` list. If the human edits `curriculum.md`, the next stage reads the
edited version.
