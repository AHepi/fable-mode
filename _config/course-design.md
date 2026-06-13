# Course Design

Pedagogy and curriculum conventions for Fable Academy courses. Read on every curriculum
(`pipeline/02_curriculum`) and authoring (`pipeline/03_authoring`) run. This file governs
*structure and teaching*; `_config/math-style.md` governs formal/math content;
`_config/voice/literary-maverick.md` governs prose; `_config/brand.md` governs
course-facing copy.

The guiding principle: **a course is written to be read, in order, by one learner at a
time.** Design for the person reading, not for coverage.

---

## 1. What a good module looks like

A module teaches **one big idea** and is readable in a single sitting.

- **Target length**: roughly 1,000–2,500 words of body text, plus its math and
  exercises. `estimatedMinutes` in the frontmatter should reflect an honest reading +
  working time (a typical module is 10–25 minutes; longer means split it).
- **One big idea per module.** If you find yourself teaching two genuinely separate
  concepts, that is two modules.

### Section shape

Modules follow this arc. Not every section is mandatory in every module, but the order
is fixed and the spine (intuition → definition → example → exercise) is.

1. **Hook** *(prose)* — a motivating opening: a concrete question, a puzzle, a picture,
   or a reason this idea earns the reader's attention. Governed by `literary-maverick`.
   Strong opening line. No throat-clearing, no "in this module we will."
2. **Intuition** *(prose)* — the idea in plain words and images before any formalism.
   Beat the curse of knowledge: gloss jargon, prefer the concrete.
3. **Formal definitions** *(formal — see `math-style.md`)* — the precise statement(s).
   This is where the prose hands off to the formal standard. Definitions are not punched
   up.
4. **Worked examples** *(formal setup, light prose narration)* — at least one fully
   worked example showing the method, not just the answer. Examples are where intuition
   and formalism meet.
5. **Exercises** — a few problems for the reader to do (see §5).
6. **Recap** *(prose)* — three to five sentences naming what was established and what it
   sets up next. A bridge, not a summary dump.

### Learning objectives

- Write objectives as **observable verbs**: *state, compute, derive, prove, classify,
  explain, apply, distinguish, construct*. Not *understand, know, appreciate, be
  familiar with* — those are not observable and cannot be checked.
- 2–5 objectives per module, each tied to something the module actually delivers.
- These go in the module frontmatter `objectives:` array. Good: "Compute the derivative
  of a polynomial using the power rule." Bad: "Understand derivatives."

---

## 2. Calibrating to background level

The course's `level` field (in `_course.md`) is one of `intro | highschool | undergrad
| grad`. Calibrate **assumed knowledge, jargon-unpacking, and rigor** to it. Pitch one
notch *below* where you think the reader is — the curse of knowledge always overestimates.

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

- **A few per module** — roughly 3–6. Enough to practice the one idea; not a problem set.
- **Range from mechanical to conceptual** within each module:
  - 1–2 **mechanical**: apply the definition/procedure directly. Builds fluency.
  - 1–2 **conceptual**: ask *why*, ask for a counterexample, change one assumption, or
    connect to an earlier module.
  - Optionally one **stretch** problem, clearly marked, that reaches a little past the
    module.
- **Brief answer hints.** Give each exercise a short hint or a final answer (not a full
  solution) so a solo reader can check themselves and get unstuck. Keep hints terse.
- Match exercise rigor to `level`: a `highschool` exercise asks for a computation or a
  reasoned explanation, not a formal proof; an `undergrad`/`grad` exercise may ask for a
  proof.
- Exercises must be solvable with only what the course has taught so far.

---

## 6. Curriculum-quality checklist

Apply at the curriculum stage and again at authoring.

- [ ] Course has 8–14 modules (or is explicitly split into a sequence).
- [ ] Each module teaches exactly one big idea.
- [ ] Modules are ordered so each uses only prior modules + stated prerequisites; no
      forward references.
- [ ] `level` is set, and assumed knowledge / jargon / rigor are calibrated to it
      (highschool = algebra + functions + basic geometry/trig, NOT calculus, NOT
      set-theoretic rigor, NOT proof experience).
- [ ] Every module has a hook (prose) → intuition (prose) → formal definitions →
      worked example(s) → exercises → recap.
- [ ] Objectives are written as observable verbs and reflect what the module delivers.
- [ ] Each module length is sane (~1,000–2,500 words; `estimatedMinutes` honest).
- [ ] Each module has 3–6 exercises spanning mechanical → conceptual, with hints.
- [ ] Earlier ideas spiral back, used more fluently, in later modules.
- [ ] Frontmatter (`title`, `course`, `order`, `summary`, `estimatedMinutes`,
      `objectives`, `prerequisites`) is complete and `order` matches the course's
      `moduleOrder`.
