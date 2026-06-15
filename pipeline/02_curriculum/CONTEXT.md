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
6. **Write the canon** (`shared/templates/canon.md` is the skeleton): the one decision per recurring
   thing that keeps the blind-parallel authors consistent — the symbol & naming registry (one symbol
   and one name per object), the "already-taught" ledger that says which module *owns* each shared
   fact (others call back, never re-derive), the metaphor-ownership map (one running image per
   module), the capped stock-phrase list, and the one-line voice target. Authoring and editorial both
   read this; without it, the eleven modules drift apart.

## Outputs

- `runs/<run-id>/02_curriculum/output/curriculum.md` — the course metadata block, the prerequisite
  graph, and a numbered list of module specs (title, slug, summary, objectives, prereqs, est. time).
- `runs/<run-id>/02_curriculum/output/canon.md` — the consistency contract above. Every authoring
  sub-agent and the editorial stage read it.

## Series mode

When this course is a member of a **series** (the run was set up via a series brief — see the
"When the request is a course series" section of the root `CONTEXT.md`):

- **If this is the Essentials course** (`role: essentials`): in addition to `curriculum.md` and the
  course `canon.md`, **also write the shared series-canon** at `runs/<series-id>/series-canon.md`
  (skeleton: `shared/templates/series-canon.md`) — the shared TERMS registry (one name per shared
  concept), the shared METAPHOR map, the shared VOICE target, and the ledger of concepts **owned by
  Essentials** that siblings must call back to rather than re-derive. The Essentials course is
  authored first precisely so this file exists before any sibling plans.
- **If this is a sibling course** (`role: course`): **add** `runs/<series-id>/series-canon.md` to this
  stage's Inputs as a binding **L3** input. Align `curriculum.md` and the course `canon.md` to it —
  reuse the shared names/metaphors verbatim, and plan **callbacks** to the Essentials course for any
  concept the series-canon marks as Essentials-owned (re-grounded just enough to stand alone) instead
  of re-deriving it. The course's own `canon.md` still governs its internal module consistency.

## Verify

- The ordering respects the prerequisite graph; no module depends on a later one.
- Objectives are observable ("state", "compute", "prove that…"), not vague ("understand").
- Scope matches the assumed background — nothing requires knowledge the brief says the reader lacks.
- Module count and per-module scope are within `course-design.md` guidance.
- `canon.md` exists and is decisive: one symbol/name per recurring object, an owner for every shared
  fact, a metaphor per module, and phrase caps — no "TBD"s.

## Gate

**Review gate (blocks even in autonomous mode by default).** A human reads `curriculum.md` and
approves the shape before any prose is written. To proceed without pausing, the run brief must drop
`curriculum` from its `gates` list. If the human edits `curriculum.md`, the next stage reads the
edited version.
