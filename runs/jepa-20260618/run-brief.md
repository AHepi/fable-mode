---
runId: jepa-20260618
topic: How JEPA (Joint-Embedding Predictive Architecture) learns, and why it predicts representations instead of pixels
slug: jepa
assumedBackground: A curious reader new to machine learning. Comfortable with everyday reasoning and light arithmetic (a short list of numbers; two points being near or far). No calculus, no prior ML.
kind: stem
mode: autonomous
gates: []          # autonomous redo — no gate
createdAt: 20260618
---

## Interpretation notes

**This is a REDO.** A prior `jepa` course shipped and was diagnosed as excruciatingly boring: one
idea ("predict the gist, not the pixels") inflated to ~22,000 words across **12 modules**, an
everyday-analogy carousel that *replaced* the mechanism, a `stem` course with **zero** diagrams,
equations, code, or worked numbers, identical module skeletons, and an over-soothing register
("quietly" 10× across 9 modules). The pipeline has since been hardened (`course-design.md` "Earn the
reader's time"; `voice/literary-maverick.md` "Confidence, not comfort" + cut manner adverbs;
`pedagogy/evidence-base.md`; `lint-prose.mjs` checks 5–6). This run must demonstrate the fix.

**Hard requirements for this run (binding, beyond the standard config):**
- **Compress.** ~**6 modules**, not 12. Scope by idea density. Every module must *advance* — no module
  may restate a prior point beyond a one-line callback. Target ~1,200–1,800 words/module of prose.
- **Show the artifact in every module.** This is the central fix. Each module carries at least one of:
  a **labelled ASCII architecture diagram** (in a ```text fence), an **equation** (KaTeX: the
  representation-space distance / loss; the EMA target update), a **worked computation with real
  numbers** (e.g. a 4-number representation and an actual distance), or **pseudocode** of the training
  step (a ```python / ```text fence). Prose-only explanation of a mechanism is a defect here.
- **Voice: confident, not soothing.** No coddling register, no reassurance phrases, and cut soothing
  manner adverbs (gently/quietly/silently/softly/simply). Must pass `lint-prose.mjs` checks 5–6.
- **Vary the macro-shape.** Modules must NOT all open with an everyday analogy. Use a mix: a result
  first, a failure mode, a diagram, a contrast, a concrete computation. Analogy is allowed only when it
  hands off to the artifact, then gets out of the way.
- **Audience stays `intro`** (no ML background) — but intro does NOT mean prose-only. Keep math light
  and *shown*: a distance between two short vectors, a simple averaging update. Define every term.

**Scope (in):** the prediction/fill-in-the-blank setup and why raw-pixel reconstruction is the wrong
target; representations and representation space (with a worked numeric distance); the JEPA
architecture (context encoder, predictor, target encoder) and its loss in representation space; why
predicting representations beats reconstructing pixels; representation collapse and the asymmetric fix
(stop-gradient + EMA target encoder); the instantiations (I-JEPA on images, V-JEPA on video) and
LeCun's world-model thesis with its honest open status. **(out):** transformer/ViT internals, full
SSL zoo beyond a one-line placement, training-scale numbers, downstream-benchmark tables.
