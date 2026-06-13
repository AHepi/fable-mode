# Stage 03 — Authoring

Write every module. This stage **fans out**: one sub-agent per module, working in parallel, each
briefed with a single module spec plus the house style references. Authoring is the bulk of the work
and the place the two voices meet — bold prose for explanation, precise formality for mathematics.

## Inputs

- **L4** `runs/<run-id>/run-brief.md` — read first.
- **L4** `runs/<run-id>/02_curriculum/output/curriculum.md` — the module specs and ordering.
- **L4** `runs/<run-id>/01_research/output/research.md` — facts, examples, pitfalls (reference, not copy).
- **L3** `_config/voice/literary-maverick.md` — governs **prose** (hooks, intuition, transitions, recaps).
- **L3** `_config/math-style.md` — governs **formal** content and the KaTeX subset. Load this **only
  for `stem`/quantitative `kind`**. Read its prose/formal boundary: formal blocks are precise and are
  **never** run through the prose rewrite loop.
- **L3** `_config/course-design.md` — pedagogy, the per-kind section shape (§0), and exercise design.
- **L3** the module template for the course `kind` (§0): `shared/templates/module.md` (stem) or
  `module.humanities.md` / `module.language.md` / `module.skill.md`.

## Process

1. Read the curriculum and the run brief. Confirm the module list and ordering.
2. For each module, spawn a sub-agent (fable-mode "delegate independent work"). Brief it with:
   that module's spec from `curriculum.md`, the relevant slice of `research.md`, and the L3 voice +
   math-style references. Tell it to write to `runs/<run-id>/03_authoring/output/NN-<module-slug>.md`
   following the schema (`_config/content-schema.md`) and the section shape.
3. **Sample first.** Author module 01 alone, review it for voice + level calibration, then fan out
   the remaining modules in parallel. (This is the cheap "sample" gate.)
4. Each module file carries correct frontmatter: `title`, `course` (= slug), `order`, `summary`,
   `estimatedMinutes`, `objectives`, `prerequisites`. Filenames are `NN-<slug>.md` with `NN` = order.
5. **Pedagogy (per `course-design.md`):** distribute 1–3 "Check yourself" retrieval prompts through
   each module (attempt-before-reveal, answer hidden in a `<details>` block), and give every exercise
   an elaborated worked solution — explain the reasoning, and for mistake-prone items say why the
   tempting wrong answer is wrong (use the research stage's "common pitfalls").
6. **Bias screen:** before finishing, review each module's names, examples, and scenarios for
   demographic/cultural stereotyping and representational balance; revise anything skewed. (Generated
   content reproduces training-data stereotypes; this screen is a required pass, not optional.)

## Outputs

- `runs/<run-id>/03_authoring/output/NN-<module-slug>.md` — one validated markdown file per module.

## Verify

- **Voice boundary (the domain-specific risk):** prose sections show literary-maverick qualities;
  Definition/Theorem/Lemma/Proof/Example blocks are precise and untouched by the prose rewrite loop.
- Every module matches its curriculum spec (objectives covered, prereqs respected, scope honored).
- All math is valid KaTeX within the supported subset (`math-style.md`) — a bad equation breaks the
  build later, so catch it now.
- Frontmatter is complete and `order`/filename/`course` are consistent with the curriculum.
- Each module has distributed retrieval checks (attempt-before-reveal) and every exercise has an
  elaborated worked solution, not a bare answer.
- The bias screen was run: names/examples/scenarios are checked for stereotyping and balance.

## Gate

Sample review after module 01 (see Process step 3). No full-stage block by default; the assembled
result is reviewed at the verify gate.
