# Stage 03 — Authoring

Write every module. This stage **fans out**: one sub-agent per module, working in parallel, each
briefed with a single module spec plus the house style references. Authoring is the bulk of the work
and the place the two voices meet — bold prose for explanation, precise formality for mathematics.

## Inputs

- **L4** `runs/<run-id>/run-brief.md` — read first.
- **L4** `runs/<run-id>/02_curriculum/output/curriculum.md` — the module specs and ordering.
- **L4** `runs/<run-id>/02_curriculum/output/canon.md` — the symbol/naming registry, the "who owns
  what" ledger, the metaphor map, the phrase caps, the voice target. **Binding** on every writer.
- **L4** `runs/<run-id>/01_research/output/research.md` — facts, examples, pitfalls (reference, not copy).
- **L3** `_config/voice/literary-maverick.md` — governs **prose** (hooks, intuition, transitions, recaps).
- **L3** `_config/math-style.md` — governs **formal** content and the KaTeX subset. Load this **only
  for `stem`/quantitative `kind`**. Read its prose/formal boundary: formal blocks are precise and are
  **never** run through the prose rewrite loop.
- **L3** `_config/course-design.md` — pedagogy, the per-kind section shape (§0), and exercise design.
  Includes the **prose ↔ pedagogy precedence**: prose leads only on stakes, analogies,
  historical/philosophical context, and inter-module transitions; pedagogy leads everywhere else.
- **L3** `_config/pedagogy/evidence-base.md` — the techniques to apply per module (distributed
  retrieval, worked examples + faded guidance, elaborated feedback, dual coding, UDL/accessibility,
  the bias screen), each with an evidence rating, plus the approaches to refuse.
- **L3** the module template for the course `kind` (§0): `shared/templates/module.md` (stem) or
  `module.humanities.md` / `module.language.md` / `module.skill.md`.

## Process

1. Read the curriculum and the run brief. Confirm the module list and ordering.
2. For each module, spawn a sub-agent (fable-mode "delegate independent work"). Brief it with:
   that module's spec from `curriculum.md`, **the canon** (`canon.md`), the relevant slice of
   `research.md`, a one- to two-line **"story so far"** summary of each earlier module, and the L3
   voice + math-style references. Tell it to write to
   `runs/<run-id>/03_authoring/output/NN-<module-slug>.md` following the schema and the section shape.
   The writer must use the canon's symbols and names, and **call back** to facts the ledger marks as
   owned by an earlier module rather than re-deriving them (a one-line reminder is welcome; a fresh
   re-derivation is not). It must vary its hook and recap from the modules before it.
3. **Sample first.** Author module 01 alone, review it for voice + level calibration, then fan out
   the remaining modules in parallel. (This is the cheap "sample" gate.)
4. Each module file carries correct frontmatter: `title`, `course` (= slug), `order`, `summary`,
   `estimatedMinutes`, `objectives`, `prerequisites`. Filenames are `NN-<slug>.md` with `NN` = order.
5. **Pedagogy (per `course-design.md`):** distribute 1–3 "Check yourself" retrieval prompts through
   each module (attempt-before-reveal, answer hidden in a `<details>` block), and give every exercise
   an elaborated worked solution — explain the reasoning, and for mistake-prone items say why the
   tempting wrong answer is wrong (use the research stage's "common pitfalls").
6. **Metaphor & bridge (per `course-design.md`):** vet the module's motivating metaphor — it must
   point at exactly **one** correct referent with no misleading association (e.g. "slots and a crank"
   wrongly evokes a slot machine — randomness), be **paid off** (developed/reused, not announced then
   dropped), and be cashed into the formal content; if it can't, use a clean concrete shape or no
   image. Then **build the bridge** to every definition (`math-style.md` §1). Decode the notation back
   into the intuition, mapping each piece (inputs, the set, the result) onto the picture. And when the
   definition reframes the idea through a *different* model than your intuition built (you motivated by
   stepping around a clock; the definition speaks of dividing and taking a remainder), **construct the
   equivalence — don't assert it**: show the mechanism that makes the two models the same, *before* the
   definition. Put the bridge ahead of or alongside the formal block, never only after it. A definition
   with no bridge — a cliff into notation — and an equivalence merely claimed in one sentence are both
   defects.
7. **Bias screen:** before finishing, review each module's names, examples, and scenarios for
   demographic/cultural stereotyping and representational balance; revise anything skewed. (Generated
   content reproduces training-data stereotypes; this screen is a required pass, not optional.)

## Series mode

When this course is a **sibling** member of a series (`role: course`), brief each authoring sub-agent
with `runs/<series-id>/series-canon.md` alongside the course `canon.md`. Writers must **reuse the
series-canon's shared terms and metaphors verbatim** (never rename or reinvent a shared image), and
for any concept the series-canon marks as **owned by Essentials**, **call back** to the Essentials
course — a one-line reminder, re-grounded just enough to stand alone — instead of re-deriving it. The
course's own `canon.md` still governs which of *this* course's modules owns each local fact. (The
Essentials course itself authors normally; it owns the shared canon rather than calling back to it.)

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
- The motivating metaphor points at one correct referent (no misleading association), is paid off
  (developed/reused, not dropped), and is cashed into the formal content — or there is no metaphor.
- Every formal definition is reached by a bridge that decodes the notation, mapping each piece onto
  the intuition; no definition arrives as a cliff. Where a definition reframes the idea through a
  different model than the intuition built, the equivalence is **constructed** (the mechanism shown),
  not asserted — and the bridge sits before or with the definition, not after it.
- The bias screen was run: names/examples/scenarios are checked for stereotyping and balance.
- **Level fit:** at the course `level`, jargon is unpacked — **no orphan terms** versus the
  prerequisites (course-design §2–§3, "The level dial") — and at `intro` every abstract idea carries an
  analogy or a picture and callbacks re-gloss the heavy nouns.

## Gate

Sample review after module 01 (see Process step 3). No full-stage block by default; the assembled
result is reviewed at the verify gate.
