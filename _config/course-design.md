# Course Design

Pedagogy and curriculum conventions for Fable Academy courses. Read on every curriculum
(`pipeline/02_curriculum`) and authoring (`pipeline/03_authoring`) run. This file governs
*structure and teaching*; `_config/math-style.md` governs formal/math content;
`_config/voice/literary-maverick.md` governs prose; `_config/brand.md` governs
course-facing copy.

The guiding principle: **a course is written to be read, in order, by one learner at a
time.** Design for the person reading, not for coverage.

---

## 0. Course kind and module template

A course has a `kind` (in `_course.md`): `stem | humanities | language | skill | general`. The
`kind` decides the **module template** and whether the math/KaTeX rules apply. Pick the kind that
fits the subject during the curriculum stage; copy the matching template per module:

| kind | template | spine | math rules |
|------|----------|-------|------------|
| `stem` (default) | `shared/templates/module.md` | hook → intuition → definition → worked example → checks → exercises → recap | **on** (`math-style.md`, KaTeX validated) |
| `humanities` | `shared/templates/module.humanities.md` | hook → context → narrative → primary source → analysis → checks → discussion/essay → recap | off |
| `language` | `shared/templates/module.language.md` | hook → dialogue → vocabulary → grammar pattern → pronunciation → drills → spaced review → recap | off |
| `skill` | `shared/templates/module.skill.md` | hook → scenario → framework → walkthrough → checks → practice scenario → reflection → recap | off |
| `general` | `shared/templates/module.md` (adapt) | as appropriate | off |

The pedagogy below (retrieval practice, elaborated feedback, observable objectives, sequencing,
level calibration) applies to **every** kind. Only the section "furniture" and the assessment type
change. The math-specific guidance in `math-style.md` is loaded only for `stem` (and other
quantitative) courses.

### Assessment types by kind

Not every domain has a single right answer. Match the assessment to the kind:

- **Answer-key** (stem): exercises with elaborated worked solutions (§5).
- **Rubric** (skill, some humanities): the learner self-scores against explicit criteria ("did you
  do X, Y, Z?", 1–5) given in a `<details>` block — no single correct answer.
- **Open / essay** (humanities): discussion and writing prompts judged against "what a strong
  response does" criteria, acknowledging more than one defensible reading.
- **Drill** (language): fill-in / transform / translate items with answers hidden in `<details>`,
  plus spaced review of earlier material.

Whatever the type, keep the evidence-based core: distributed attempt-before-reveal checks, and
feedback that *explains* rather than just marking right/wrong.

---

## 1. What a good module looks like

A module teaches **one big idea** and is readable in a single sitting.

- **Target length**: roughly 1,000–2,500 words of body text, plus its math and
  exercises. `estimatedMinutes` in the frontmatter should reflect an honest reading +
  working time (a typical module is 10–25 minutes; longer means split it).
- **One big idea per module.** If you find yourself teaching two genuinely separate
  concepts, that is two modules.

### Section shape

> **Scope:** the detailed arc below is the **`stem` default** (the shape `shared/templates/module.md`
> encodes). Non-`stem` kinds follow their own template's shape from §0 — e.g. humanities is
> context → narrative → source → analysis → discussion; language is dialogue → vocab → pattern →
> drills → spaced review. The *pedagogy* in this file (distributed retrieval §1.5, elaborated
> feedback §5, observable objectives, honest sequencing §3, the recap) applies to **every** kind;
> only the section "furniture" changes.

Modules follow this arc. Not every section is mandatory in every module, but the order
is fixed and the spine (intuition → definition → example → exercise) is. Questioning is
**distributed through the body**, not saved for the end (see §1.5).

1. **Hook** *(prose)* — a motivating opening: a concrete question, a puzzle, a picture,
   or a reason this idea earns the reader's attention. Governed by `literary-maverick`.
   Strong opening line. No throat-clearing, no "in this module we will."
2. **Intuition** *(prose)* — the idea in plain words and images before any formalism.
   Beat the curse of knowledge: gloss jargon, prefer the concrete.
3. **Formal definitions** *(formal — see `_config/math-style.md`)* — the precise
   statement(s). This is where the prose hands off to the formal standard. Definitions
   are not punched up.
4. **Worked examples** *(formal setup, light prose narration)* — at least one fully
   worked example showing the method, not just the answer. Examples are where intuition
   and formalism meet.
5. **Check yourself** *(formative retrieval)* — immediately after a concept is
   introduced (after a definition or worked example, mid-module), a short prompt the
   learner attempts **from memory** before being shown anything. The answer lives in a
   collapsible `<details><summary>Show answer</summary> … </details>` block so the
   reader commits to an attempt before the reveal. Distribute these through the body (see
   §1.5); this is not a single section but a recurring beat.
6. **Exercises** — a few problems for the reader to do, each with a worked solution (see
   §5).
7. **Recap** *(prose)* — three to five sentences naming what was established and what it
   sets up next. A bridge, not a summary dump.

### Learning objectives

- Write objectives as **observable verbs**: *state, compute, derive, prove, classify,
  explain, apply, distinguish, construct*. Not *understand, know, appreciate, be
  familiar with* — those are not observable and cannot be checked.
- 2–5 objectives per module, each tied to something the module actually delivers.
- These go in the module frontmatter `objectives:` array. Good: "Compute the derivative
  of a polynomial using the power rule." Bad: "Understand derivatives."

---

## 1.5. Retrieval practice and formative checks

Learners remember what they **retrieve**, not what they re-read. Pulling an idea back
from memory is one of the most robust learning effects there is (the testing effect:
Roediger & Karpicke; Dunlosky rates practice testing top-tier), and the gain only lands
if the learner **attempts before seeing the answer** (Black & Wiliam, formative
assessment).

- **Distribute, don't postpone.** Place **1–3 quick retrieval checks through the module
  body** — a short "Check yourself" prompt right after a definition or worked example —
  rather than saving all questioning for the end-of-module exercises. Spacing the
  retrieval across the module beats clustering it.
- **Attempt before reveal.** Each check is a question the reader answers from memory
  *first*; the answer is hidden in a collapsible `<details><summary>Show
  answer</summary> … </details>` block (native HTML, works in static Markdown, no
  JavaScript, keyboard-accessible). The collapse is the mechanism: it forces a commitment
  before the reveal.
- **Difficulty is the point.** Frame struggle as expected and productive — a check that
  takes effort is doing its job (desirable difficulties: Bjork). Do not apologize for a
  hard question or hand the answer over early.
- The **end-of-module Exercises** remain in addition to these mid-module checks; they now
  ship with full worked solutions (see §5).

---

## 2. Calibrating to background level

The course's `level` field (in `_course.md`) is one of `intro | highschool | undergrad
| grad`. Calibrate **assumed knowledge, jargon-unpacking, and rigor** to it. Pitch one
notch *below* where you think the reader is — the curse of knowledge always overestimates.

> **Non-academic kinds:** the academic ladder maps loosely for `language`/`skill`/`general`
> courses. Read `intro` as "no prior exposure," `highschool`/`undergrad` as "some/substantial prior
> familiarity," `grad` as "advanced practitioner." The descriptions below are framed in math terms;
> for a non-stem course, calibrate the *analogous* background (prior vocabulary, reading level, prior
> practice) rather than the math specifics.

### `intro`

- **Assumes**: arithmetic, comfort with everyday quantitative reasoning, no specific
  prior coursework. The most general audience.
- **Jargon**: unpack everything. Any term a curious adult would have to look up gets a
  gloss in plain words on first use.
- **Rigor**: motivate and demonstrate; no formal proofs. Claims are made plausible by
  example and picture.

### `highschool`

- **Assumes (concretely)**: algebra (manipulating expressions, solving linear and
  quadratic equations), **functions** (notation $f(x)$, graphs, slope, intercepts),
  basic **geometry and trigonometry** (angles, triangles, $\sin/\cos/\tan$, the unit
  circle), exponents and logarithms at a basic level.
- **Does NOT assume**: **calculus** (no derivatives/integrals as known tools),
  **set-theoretic rigor** (no comfort with $\forall/\exists$ machinery as second
  nature), or any **proof experience** (the reader has likely never written or read a
  formal proof).
- **Jargon**: unpack new terms; lean on the algebra/function vocabulary they have.
- **Rigor**: arguments are careful and honest but explained, not formal. If you prove
  something, walk through every step and say *why* in prose. Introduce the *idea* of
  proof gently rather than assuming it.

### `undergrad`

- **Assumes**: single-variable calculus, basic linear algebra, and some exposure to
  proof and to set/function notation. Can follow a clean $\epsilon$-$\delta$ argument
  with guidance.
- **Jargon**: standard field vocabulary can be used after a brief gloss; not everything
  needs unpacking.
- **Rigor**: full definitions and proofs are appropriate, with motivation. Show the
  proof; do not just assert.

### `grad`

- **Assumes**: mathematical maturity, fluency with abstraction, proof as a native idiom,
  and the standard undergraduate sequence in the relevant area.
- **Jargon**: use freely; define only genuinely specialized or non-standard terms.
- **Rigor**: full rigor is the default. Routine steps can be left to the reader; the
  interesting steps are shown.

A course must not mix levels silently. If a `highschool` course needs one idea from
calculus, either teach that idea first (it becomes a module) or reframe to avoid it —
never assume it.

---

## 3. Sequencing and prerequisites

- **Each module builds on the prior ones.** Module $n$ may freely use anything
  established in modules $1..n-1$ and nothing else (except the course's stated
  `prerequisites`). Never use a concept before the module that introduces it.
- **One big idea per module** (restated because it drives sequencing): the curriculum is
  an ordering of single ideas, each resting on those before it.
- **Spiral back.** Reintroduce earlier ideas in new contexts as the course progresses,
  deepening rather than merely repeating. A concept met in module 3 should reappear,
  used more fluently, in module 9.
- **Honest prerequisites.** The `prerequisites` arrays (course-level and module-level)
  must list what is genuinely required. If module 7 needs module 4, say so. If a course
  needs prior calculus, the course `prerequisites` say so.
- **No forward references.** Do not write "as we'll see later" as a substitute for
  teaching something now. A reader should never need a later module to understand the
  current one.

---

## 4. Module count and scoping a first course

- A **first course** in a subject is **~8–14 modules**. Fewer than 8 usually means the
  subject is under-developed or modules are overstuffed; more than 14 usually means it
  should be split into a sequence of courses.
- **Scope by the spine, not by coverage.** Identify the handful of load-bearing ideas a
  newcomer actually needs, sequence them, and let each be one module. Resist the urge to
  be comprehensive; resist tangents.
- Set `estimatedHours` on the course as the honest sum of module times, rounded sanely.
- If the subject genuinely needs more than ~14 modules, design **Course I / Course II**
  with clean prerequisites between them rather than one sprawling course.

---

## 5. Exercise design

> **Scope:** this describes the **answer-key** assessment used by `stem` (and many `general`)
> courses. Other kinds use the assessment type from §0 — `rubric` (skill), `open`/essay (humanities),
> `drill` (language). Whatever the type, keep the shared principles: distributed attempt-before-reveal
> checks (§1.5) and feedback that *explains* rather than just marking right/wrong.

- **A few per module** — roughly 3–6. Enough to practice the one idea; not a problem set.
- **Range from mechanical to conceptual** within each module:
  - 1–2 **mechanical**: apply the definition/procedure directly. Builds fluency.
  - 1–2 **conceptual**: ask *why*, ask for a counterexample, change one assumption, or
    connect to an earlier module.
  - Optionally one **stretch** problem, clearly marked, that reaches a little past the
    module.
- **Worked solutions, not just answers.** Every exercise ships with a **worked solution
  that explains the *reasoning*** — the method and *why* it works, not merely the final
  answer. Elaborated feedback beats knowledge-of-result by a wide margin (Hattie &
  Timperley 2007; Shute 2008); a bare answer tells the reader *whether* they were right
  but not *how to think*.
  - **Target the misconception.** For any multiple-choice item or a problem prone to a
    common mistake, the solution must name *why the tempting wrong answer is wrong* —
    drawing on the "common pitfalls" gathered in research. Diagnose the error, don't just
    correct it.
  - **Keep solutions collapsible** so they don't spoil the attempt. Wrap each in a native
    HTML `<details><summary>Show solution</summary> … </details>` block (works in static
    Markdown, no JavaScript, keyboard-accessible). The reader attempts first, then
    reveals.
- Match exercise rigor to `level`: a `highschool` exercise asks for a computation or a
  reasoned explanation, not a formal proof; an `undergrad`/`grad` exercise may ask for a
  proof.
- Exercises must be solvable with only what the course has taught so far.

---

## 6. Curriculum-quality checklist

Apply at the curriculum stage and again at authoring. Items marked *(stem)* apply to math/`stem`
courses; for other kinds, substitute the equivalent from that kind's template (e.g. a humanities
module's "formal definitions → worked example → exercises" becomes "narrative → primary source →
analysis → discussion", and "worked solution" becomes the kind's rubric/criteria). The kind-neutral
items (one big idea, ordering, objectives, distributed retrieval, length, frontmatter) apply to all.

- [ ] `kind` is set in `_course.md` and the matching module template (§0) was used.
- [ ] Course has 8–14 modules (or is explicitly split into a sequence).
- [ ] Each module teaches exactly one big idea.
- [ ] Modules are ordered so each uses only prior modules + stated prerequisites; no
      forward references.
- [ ] `level` is set, and assumed knowledge / jargon / rigor are calibrated to it
      (stem highschool = algebra + functions + basic geometry/trig, NOT calculus, NOT
      set-theoretic rigor, NOT proof experience; non-stem: calibrate the analogous background, §2).
- [ ] *(stem)* Every module has a hook (prose) → intuition (prose) → formal definitions →
      worked example(s) → check-yourself prompts → exercises → recap. *(other kinds: the
      template's spine from §0.)*
- [ ] Distributed retrieval checks present (1–3 "Check yourself" prompts through the
      module body, attempt-before-reveal in `<details>` blocks), not all questioning at
      the end.
- [ ] Objectives are written as observable verbs and reflect what the module delivers.
- [ ] Each module length is sane (~1,000–2,500 words; `estimatedMinutes` honest).
- [ ] Each module has assessment matched to its kind (§0): *(stem)* 3–6 exercises
      mechanical → conceptual; (skill) a rubric self-check; (humanities) an open/essay prompt with
      criteria; (language) drills + spaced review.
- [ ] Feedback explains rather than just marking right/wrong — *(stem)* an elaborated worked
      solution in a `<details>` block; other kinds, the criteria/rubric in a `<details>` block.
- [ ] Earlier ideas spiral back, used more fluently, in later modules.
- [ ] Frontmatter (`title`, `course`, `order`, `summary`, `estimatedMinutes`,
      `objectives`, `prerequisites`) is complete and `order` matches the course's
      `moduleOrder`.
