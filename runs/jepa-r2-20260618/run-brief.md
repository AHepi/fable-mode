---
runId: jepa-r2-20260618
topic: How JEPA learns, and why predicting representations instead of pixels is a bet about machine intelligence
slug: jepa
assumedBackground: A curious reader new to machine learning. Light arithmetic (a list of numbers; two points near or far). No calculus, no prior ML.
kind: stem
mode: autonomous
gates: []
createdAt: 20260618
---

## Interpretation notes

**Second redo of `jepa`, applying the new prose ↔ pedagogy precedence.** The previous redo
(`jepa-20260618`) already fixed the boredom: 6 dense modules, an artifact in every module, de-soothed
voice (lint 5–6 clean). **Keep all of that.** This run's delta is the precedence
(`course-design.md`, "When prose and pedagogy conflict"): give **prose the lead in its four zones**,
while pedagogy keeps the teaching body.

- **Stakes (prose-led).** Make the intellectual stakes vivid: predicting *representations* instead of
  *pixels* is not a technical tweak — it's a claim about how machine intelligence should be built.
  M1 and the course intro should earn the reader with that bet, not just state a mechanism.
- **Historical / philosophical context (prose-led).** Give LeCun's world-model thesis room as a real
  through-line: the argument that an intelligence must model the world in an abstract space, that
  pixel-perfect prediction is a dead end for understanding, and where JEPA sits in that program. This
  context is welcome and crafted — density does **not** cut it.
- **Analogies (prose-led craft).** Where an analogy is used, it must be made well (point true, pay
  off) and hand off to the artifact. Still no analogy carousel — most modules open another way.
- **Transitions (prose-led).** Craft the seams between modules — the recap that bridges, the gesture
  forward — for flow and variety.
- **Pedagogy leads everywhere else (unchanged):** definitions, the three-box architecture, the loss,
  collapse + the EMA fix, worked numbers, pseudocode, distributed checks, exercises, sequencing,
  one-big-idea, density inside the teaching body, **show the artifact**. A prose flourish that blurs a
  definition or pads the teaching yields.

Reuse the copied `02_curriculum/output/curriculum.md` and `canon.md` (the 6-module shape and the
artifact/anti-soothing/anti-redundancy rules carry over); the canon adds a precedence section for this
run. Must pass `lint-prose.mjs` checks 5–6. Audience stays `intro`.
