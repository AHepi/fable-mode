# Evidence-Based Pedagogy

The research backing for how Fable Academy courses teach. This is an **L3 reference** (a stable
constraint, like `_config/voice/literary-maverick.md` or `_config/math-style.md`): read it on the **curriculum (02)**
and **authoring (03)** stages and *internalize it as constraints*, not as text to copy.

`course-design.md` is the **operational** pedagogy spec — the rules a module must follow (section
shape, retrieval cadence, exercise design). **This file is the evidence library underneath it**: why
those rules exist, with strength ratings, plus techniques `course-design.md` does not spell out and a
list of popular approaches we deliberately **refuse**.

> **Provenance.** Distilled from and aligned to Gareth Manning's *education-agent-skills* library
> (165 evidence-rated pedagogical skills across 20 domains, CC BY-SA 4.0). The wording here is our own
> paraphrase, with primary research cited directly; treat the catalog as the source and this as a
> course-production-facing digest. We use only the **teacher/designer-facing** domains — the library's
> student-facing live-tutoring patterns (its Domain 20) assume a real-time tutor and do not apply to a
> static, finished course.

## Evidence-strength ratings (the catalog's tiers, used throughout)

- **Strong** — multiple meta-analyses or systematic reviews with consistent findings.
- **Moderate** — solid experimental evidence with some contextual variation.
- **Emerging** — promising research base with limited replication or practitioner translation.
- **Original** — practitioner framework; clearly labelled, not claimed as research-backed.

**Evidence is the filter — including knowing what to exclude.** Prefer a Strong/Moderate technique over
a fashionable one; never reach for anything in the Exclusions table.

---

## 1. Memory & retrieval *(maps to `course-design.md` §1.5)*

- **Retrieval practice / the testing effect — Strong** (Roediger & Karpicke 2006; Dunlosky et al. 2013).
  Pulling an idea *from memory* beats re-reading. → Every module distributes 1–3 attempt-before-reveal
  "Check yourself" prompts through the body; the `<details>` collapse is the mechanism that forces a
  commitment before the answer.
- **Spaced practice — Strong** (Cepeda et al. 2006; Dunlosky et al. 2013). Revisiting an idea after a
  gap beats massing it. → The "spiral back" rule: reintroduce an earlier idea, used more fluently, in a
  later module (the editorial stage's callbacks are one vehicle).
- **Interleaving — Moderate** (Rohrer & Taylor 2007). Mixing related problem types aids discrimination.
  → In exercise sets, mix problem *kinds* (mechanical/conceptual) rather than blocking one type; in a
  multi-topic module, alternate rather than silo.
- **Generation effect — Moderate** (Slamecka & Graf 1978). Producing an answer beats recognizing one. →
  Prefer "work it / predict it" prompts over multiple-choice where the kind allows.
- **Desirable difficulties — Moderate/Strong** (Bjork & Bjork 2011). Effortful retrieval is the point;
  do not apologize for a hard check or reveal the answer early.

## 2. Worked examples, faded guidance & cognitive load *(maps to the §1 spine + §5 exercises)*

- **Worked-example effect — Strong** (Sweller 1985; Sweller, Ayres & Kalyuga 2011). For novices, studying
  a fully worked solution beats unguided problem-solving. → Every `stem` module ships ≥1 fully worked
  example that shows the *method*, not just the answer.
- **Faded guidance / completion problems — Moderate** (Renkl & Atkinson 2003). Move worked example →
  partially-completed → independent. → Order exercises mechanical → conceptual → stretch; let earlier
  scaffolding fall away across the set and across modules.
- **Cognitive load theory — Strong** (Sweller 1988, 2011). Working memory is narrow; spend it on the idea,
  not on decoding. → The notation rules in `math-style.md` (one symbol/meaning, define-before-use,
  words-then-symbol) and the **bridge** requirement are load management. Cut split-attention: keep a
  figure and the text that explains it together.
- **Expertise-reversal effect — Moderate** (Kalyuga 2007). Scaffolding that helps a novice *hurts* an
  expert. → Calibrate to the course `level` (`course-design.md` §2); a `grad` course leaves routine steps
  to the reader that an `intro` course must walk.

## 3. Feedback *(maps to `course-design.md` §5)*

- **Elaborated feedback — Strong** (Hattie & Timperley 2007; Shute 2008). Feedback that explains the
  *reasoning* beats knowledge-of-result. → Every exercise ships a worked solution that explains *why*,
  and names *why the tempting wrong answer is wrong* (drawing on the research stage's "common pitfalls").
- **Formative assessment — Strong** (Black & Wiliam 1998). Low-stakes checks that inform the learner,
  attempted before the reveal. → This is the contract for "Check yourself"; the reveal is gated by the
  `<details>` so the attempt comes first.

## 4. Metacognition & self-regulated learning

- **Metacognition & self-regulation — Strong** (EEF Teaching & Learning Toolkit, consistently high-impact;
  Zimmerman SRL model). Teaching learners to plan, monitor, and reflect raises outcomes. → Self-reflection
  prompts at module close; framing checks as "notice what you can and can't yet retrieve"; making the
  *structure* visible (objectives up front, recaps that name what was established).
- **Observable learning intentions — Moderate** (Hattie). Clear, checkable goals help learners self-monitor.
  → Objectives are written as observable verbs (*state, compute, prove, classify*), never *understand*.

## 5. Questioning & dialogue

- **Higher-order & Socratic questioning — Moderate** (Redfield & Rousseau 1981; cf. dialogic teaching,
  Alexander). Questions that ask *why*, for a counterexample, or to change one assumption deepen learning.
  → The "conceptual" exercises and the check prompts should ask the learner to justify, not just recall;
  vary question *type* across a module.

## 6. Representation: dual coding & multimedia

- **Dual coding — Moderate** (Paivio; Clark & Paivio 1991). Pairing words with a well-chosen image aids
  memory and understanding. → Use a diagram when it carries information the prose cannot; co-locate it
  with its explanation; every image needs real alt text (`content-schema.md`).
- **Multimedia principles — Moderate** (Mayer 2009): coherence (cut decorative extras), signaling
  (highlight the essential), contiguity (put related words and pictures together). → No decorative
  figures; the motivating image must be *cashed into* the content (the metaphor rule), not ornament.

## 7. Curriculum design & alignment *(maps to stage 02)*

- **Backward design — Original/Moderate** (Wiggins & McTighe, *Understanding by Design*). Start from the
  outcomes, then derive assessment, then instruction. → Stage 02 fixes objectives and the prerequisite
  graph before any prose is written.
- **Constructive alignment — Moderate** (Biggs 1996). Objectives, learning activities, and assessment must
  point at the same thing. → Each module's objectives, worked examples, and exercises must align; an
  objective with no matching check is a defect.
- **Mastery & sequencing — Moderate** (Bloom 1968 mastery learning; learning progressions). Each step rests
  only on earlier ones. → The "no forward references; module *n* uses only 1..n−1" rule, and one big idea
  per module.

## 8. Inclusive & accessible design

- **Universal Design for Learning — Emerging** (CAST; effect sizes mixed, principles sound). Offer multiple
  means of representation and expression. → Plain-language glosses on first use, a worked example *and* a
  conceptual angle, content that reads without color alone, keyboard-accessible `<details>`.
- **Language-responsive teaching (EAL/D) — Moderate**. Unpack academic vocabulary; don't assume idiom. →
  The level-calibration "unpack every term a curious adult would look up" rule; avoid culture-bound idiom in
  examples.
- **Representation & bias — Moderate**. Examples and names should not stereotype. → The authoring **bias
  screen** is a required pass, not optional (generated content reproduces training-data skew).

## 9. Discipline-specific reasoning *(apply when the course `kind` matches)*

- **Historical thinking — Moderate** (Wineburg; sourcing, contextualization, corroboration). → For
  `humanities` history courses: read sources *as* sources (who, when, why, what's omitted), name a rival
  reading, ground claims in the evidence — already the humanities template's spine.
- **Systems thinking — Emerging/Original** (Meadows, *Thinking in Systems*). Stocks, flows, feedback,
  leverage points. → For courses about systems: make feedback loops and second-order effects explicit
  rather than listing parts.

---

## Exclusions — do **not** use these, however popular

Refusing ineffective-but-fashionable methods is part of the job. (Source: the catalog's exclusions list.)

| Framework | Status | Why we refuse it |
|-----------|--------|------------------|
| Learning Styles (VARK, Dunn & Dunn) | Debunked | No credible evidence that matching teaching to a "preferred style" improves outcomes. |
| VAK (Visual/Auditory/Kinaesthetic) | Debunked | A learning-styles variant with the same evidentiary failure. |
| Cone of Learning / Learning Pyramid | Fabricated | The retention percentages are invented and misattributed to Dale's Cone of Experience. |
| Brain Gym | Pseudoscience | No neurological basis; discredited applied kinesiology. |
| Left-brain / right-brain dominance | Debunked | Hemispheric specialization is real; "dominance" teaching frameworks are not. |
| Multiple Intelligences as a teaching prescription | Misapplication | Gardner described intelligence dimensions, not learning modalities, and objected to this use. |
| Bloom's taxonomy as a quality hierarchy | Systematic misuse | It classifies; higher levels are not automatically "better." Use it to *vary* question type, not to rank. |
| Growth-mindset interventions | Weak at-scale evidence | The theory is real; school interventions show weak, inconsistent effects. Don't build a course around them. |
| Grit as a teachable trait | Weak intervention evidence | Predictive interest, but interventions lack support; largely redundant with conscientiousness. |
| Most "21st-century skills" frameworks | Weakly evidenced | Vague, generic; prefer a specific evidence-based alternative. |

If a brief asks for one of these, substitute the evidence-based technique it gestures at (e.g. replace
"teach to their learning style" with dual coding + retrieval; replace a "learning pyramid" claim with the
testing effect) and note the substitution in the run brief's interpretation notes.

---

## How each stage consumes this

- **01 Research** — already reads `course-design.md` for level calibration; no change.
- **02 Curriculum** — apply §7 (backward design, constructive alignment, sequencing) when fixing
  objectives and the module graph; apply the Exclusions table when interpreting the brief.
- **03 Authoring** — apply §§1–6, §8 (and §9 by `kind`) inside each module: distributed retrieval, worked
  examples with faded guidance, elaborated feedback, dual coding, UDL/accessibility, the bias screen.
- **04 Editorial** — no new pedagogy; it preserves the structures above while unifying voice and canon.

## Live source (optional, not wired)

The catalog also ships a hosted **MCP server** so an agent can query a specific skill on demand. We did
**not** wire it in: it requires an access token and an external endpoint, which cuts against this
workspace's self-contained, plain-text-interface design (and would make builds depend on a third-party
service). If you want it later, add it as an MCP server in `.mcp.json` / settings with your token and
point the curriculum/authoring stages at it as an *additional* L3 source — this file remains the offline
default so the pipeline never hard-depends on the network.
