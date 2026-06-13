# Stage 01 — Research

Turn the run brief into a structured research dossier the curriculum stage can plan from. This stage
gathers and organizes knowledge; it does not decide the course structure and it does not write prose
for learners.

## Inputs

- **L4** `runs/<run-id>/run-brief.md` — topic, assumed background, interpretation notes. Read first.
- **L3** `references/source-quality.md` — what counts as a trustworthy source and how to scope by level.
- **L3** `_config/course-design.md` — read the level-calibration section so research depth matches
  the assumed background.

## Process

1. Confirm the topic and the assumed background from the brief.
2. Map the territory: the core concepts of the topic, how they depend on each other, and the
   standard arc a first treatment follows.
3. For the assumed background, decide what can be taken as known and what must be taught from
   scratch. Flag concepts that learners at this level routinely find hard, and common misconceptions.
4. Collect canonical framings, motivating examples, and applications worth using as hooks.
5. If web access is available, verify facts and gather authoritative references; otherwise rely on
   well-established knowledge and mark anything uncertain.
6. Do **not** write learner-facing prose here. Output is notes for the curriculum stage.

## Outputs

- `runs/<run-id>/01_research/output/research.md` — sections: **Scope** (in/out), **Core concepts**
  (with a dependency sketch), **Prerequisite analysis** (known vs. must-teach for this level),
  **Hooks & examples**, **Common pitfalls/misconceptions**, **Sources** (if gathered),
  **Open questions** for the curriculum stage.

## Verify

- Every concept needed to reach the topic's payoff is either listed as "assumed known" or "must
  teach" — no silent gaps.
- Research depth matches the assumed background (not an expert monograph for a beginner course).
- No learner-facing prose leaked in; this is a dossier, not a lesson.

## Gate

None by default. Research is direction-setting input to the curriculum gate, where it gets reviewed
in context.
