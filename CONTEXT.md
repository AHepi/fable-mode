# Workspace Routing (Layer 1)

This workspace does one thing: **turn a prompt into a deployable course.** This file routes a
request to the right stages and defines how a run is sequenced.

## When the request is "create a course"

Trigger phrases: *"create a course on X"*, *"build a course about X"*, *"make a course on X that
assumes Y background"*, or the `/create-course` command.

Run the pipeline in numeric order. Each stage is a contract you read at the moment you enter it.

| Stage | Folder | Job | Default gate |
|-------|--------|-----|--------------|
| 1 | `pipeline/01_research/` | Research the topic, scoped to the assumed background | — |
| 2 | `pipeline/02_curriculum/` | Design the module breakdown & ordering; emit the canon | **review** |
| 3 | `pipeline/03_authoring/` | Write every module (fan out to sub-agents) | sample review |
| 4 | `pipeline/04_editorial/` | Edit the modules **as one book**: dedupe, unify names, vary, level voice | **review** |
| 5 | `pipeline/05_assembly/` | Assemble + ship into `site/src/content/courses/<slug>/` | — |
| 6 | `pipeline/06_verify/` | Validate schema, lint prose continuity, smoke-build the site | **review** |

A single, standalone course is the **default** and is unchanged by everything below. Read the next
section only when the request is explicitly for a *series* of mini-courses.

## When the request is a course series

Trigger phrases: *"create a course **series** on X"*, *"a set / family of mini-courses on X"*, *"an
Essentials primer plus …"*, or any request for several small courses that should share one vocabulary.

A **series** is a set of *mini*-courses that share a common vocabulary and metaphors. **Exactly one**
member is the **Essentials** course — a short primer that establishes the shared canon. Every other
member is a **standalone** mini-course (takeable on its own, self-contained) but is **authored against
the Essentials canon**, so the whole series stays consistent: same terms, same metaphors, with the
deeper minis **calling back** to Essentials concepts (re-grounded just enough to stand alone) rather
than re-deriving them. This is the within-course `canon.md` idea lifted one level: at the series level
the **Essentials course emits a shared series-canon** that every sibling authors against.

Run a series like this:

1. **Series brief.** `bash shared/scripts/scaffold-series.sh <series-id>` creates `runs/<series-id>/`
   with a `series-brief.md` (seeded from `shared/templates/series-brief.md`) and an empty
   `series-canon.md` (seeded from `shared/templates/series-canon.md`). Fill the brief: `seriesId`,
   `seriesTitle`, audience/assumedBackground, `mode`/`gates`, the **member** list (each member's slug,
   title, `role` [`essentials` | `course`], `order`, one-line scope), and the Interpretation notes.
   Exactly one member is `essentials` (`order: 1`).
2. **Essentials first.** Scaffold the Essentials member (`bash shared/scripts/scaffold-run.sh
   <essentials-slug>`) and walk it through the normal six stages. Its curriculum stage (02)
   **additionally** writes the shared canon at `runs/<series-id>/series-canon.md` — the shared TERMS
   registry, the shared METAPHOR map, the shared VOICE target, and the ledger of concepts **owned by
   Essentials** (siblings call back, never re-derive).
3. **Siblings author against it.** Scaffold and run each remaining member through the normal pipeline,
   with two deltas: its **curriculum (02)** and **authoring (03)** read `runs/<series-id>/series-canon.md`
   as a binding L3 input, aligning every shared name/metaphor to it and calling back to Essentials for
   shared concepts while staying standalone. Each member's own `canon.md` still governs its internal
   module consistency.
4. **Assembly writes the series block.** Each member's assembly stage (05) writes the `series`
   frontmatter block into its `_course.md` (`slug`/`title`/`role`/`order`, `blurb` on Essentials);
   the values come from the series brief.
5. **Verify the series invariants.** The verify stage runs `node shared/scripts/validate-series.mjs`
   (exactly one `essentials` per series, identical `title`, unique `order`) in addition to the
   per-course schema checks.

Each member is its own run with its own slug/folder; `runs/<series-id>/` only holds the series brief
and series-canon that coordinate them.

## Step 0 — parse the prompt into a run brief

Before stage 1, create the run's working folder and brief:

1. Derive a slug: `node shared/scripts/slugify.mjs "<topic>"` (e.g. `abstract-algebra`).
2. `bash shared/scripts/scaffold-run.sh <slug>` — creates `runs/<run-id>/` with one subfolder per
   stage and a `run-brief.md` seeded from `shared/templates/run-brief.md`.
3. Fill in `runs/<run-id>/run-brief.md`: `topic`, `slug`, `assumedBackground`, `kind`, `mode`,
   `gates`, and the **Interpretation notes** section — write down, in plain words, what you are
   assuming the prompt means (scope, rigor, what "the assumed background" can be taken to already
   know). Choose the `kind` (`stem | humanities | language | skill | general`) that fits the subject;
   it selects the module template and whether math rules apply (see `_config/course-design.md §0`).
   This is where a vague prompt gets pinned down before any expensive work happens.

Every stage reads `runs/<run-id>/run-brief.md` first. That is how the brief threads through the
pipeline — not as arguments, but as a file every stage agrees to read.

## Sequencing and gates

- Walk stages in order. After each stage, run its **Verify** section before advancing.
- A **gate** is a point where a human reviews the stage output before you continue.
  - In `mode: gated` — pause at every gate and wait for the user.
  - In `mode: autonomous` (default for single-prompt runs) — do **not** pause, *except* for the
    gates listed in the brief's `gates` field (default: `[curriculum]`, the highest-leverage one).
- **Gate-free does not mean artifact-free.** Even running autonomously, you still write every
  stage's output as a file and still run every Verify section. A human can open any
  `runs/<run-id>/NN_*/output/` artifact afterward, edit it, and re-run from that stage. Re-running a
  later stage just re-reads whatever files are now on disk.

## Delegation

Stage 3 (authoring) is embarrassingly parallel: one module per sub-agent. Follow the fable-mode
"delegate independent work" pattern — brief each sub-agent with its single module spec plus the L3
voice/math references named in `03_authoring/CONTEXT.md`. Do not serialize module writing.

## Other requests

- *"add another course"* — same pipeline, new run, new slug. Courses are additive; never overwrite.
- *"create a course series / a set of mini-courses"* — series mode: see "When the request is a course
  series" above (Essentials first, emitting `runs/<series-id>/series-canon.md`; siblings author against it).
- *"change the house style / pedagogy / brand"* — edit the L3 files in `_config/`. That reconfigures
  the factory for all future runs ("configure the factory, not the product").
- *"re-do the curriculum / a module"* — edit the relevant `runs/<run-id>/` artifact and re-run from
  that stage onward.
