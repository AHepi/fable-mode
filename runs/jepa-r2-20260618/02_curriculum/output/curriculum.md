# Curriculum — JEPA (redo)

**kind:** stem · **level:** intro · **subject:** Computer Science · **modules:** 6 · **estimatedHours:** ~2

**Title:** How JEPA Learns: Prediction in Representation Space
**Description:** How a Joint-Embedding Predictive Architecture learns by predicting the *representation*
of what's hidden — not its pixels — with the architecture, the loss, and the collapse-fix shown, not
just described. For readers new to machine learning.

**Course prerequisites:** Curiosity about AI (no ML background); light arithmetic (a list of numbers;
subtraction and squaring; two points being near or far).

**Tags:** machine-learning, self-supervised-learning, jepa, world-models, representation-learning

> **Redo mandate (binding).** Compressed from 12 boring modules to 6 dense ones. **Every module ships at
> least one artifact** (diagram / equation / worked number / pseudocode) — listed per module below.
> Voice is confident, not soothing (no manner-adverb tics, no hand-holding). Openings vary; no
> analogy carousel. The core one-liner ("predict the representation, not the pixels") is stated once in
> M1, given its mechanism in M3, and thereafter only called back — never re-chanted.

## Prerequisite graph
`M1 → M2 → M3 → M4 → M5 → M6` (linear; M3 is the spine M4/M5/M6 lean on).

## Module specs

### 01 — The Wrong Target  (slug: `the-wrong-target`)
- **Summary:** Predicting raw pixels wastes a learner on detail nothing could predict; the alternative is
  to predict a *summary* of the hidden part. The bet of the whole course, stated once.
- **Objectives:** Explain masked prediction as free supervision; explain why pixel-reconstruction grades
  a system on unpredictable detail; state JEPA's bet (predict a representation, not pixels).
- **Owns:** masked prediction; the generative-vs-joint-embedding contrast; the one-line bet (owns it — no
  other module restates it).
- **Artifact:** a side-by-side **pipeline contrast** (reconstruct-pixels vs predict-representation), as a
  ```text diagram or compact table. **Opening:** a claim/result, not an analogy.
- **Prereqs:** none. **est:** 16 min.

### 02 — Representations and Distance  (slug: `representations-and-distance`)
- **Summary:** An encoder turns an input into a vector; similar inputs land near each other; distance is a
  number you compute.
- **Objectives:** Define encoder and representation (a vector); compute a squared-Euclidean distance
  between two short vectors; read "near = similar, far = different."
- **Owns:** encoder, representation, representation space, the **distance** formula.
- **Artifact:** the distance **equation** (KaTeX) + a **worked computation** with real numbers
  (`[0.3,0.8,0.2,0.6]` vs `[0.2,0.9,0.1,0.7]` → 0.04). **Opening:** a computation.
- **Prereqs:** M1. **est:** 16 min.

### 03 — The JEPA Architecture  (slug: `the-jepa-architecture`)
- **Summary:** Three boxes — context encoder, target encoder, predictor — and a loss that is a distance
  in representation space, with a stop-gradient on the target.
- **Objectives:** Name the three boxes and each one's job; state the loss as a distance between predicted
  and target representations; trace one input through to a loss value; explain the stop-gradient.
- **Owns:** the architecture; the loss equation; the stop-gradient. (The course spine.)
- **Artifact:** a labelled **ASCII architecture diagram**, the **loss equation** (KaTeX), and
  **pseudocode** of one forward+loss step. **Opening:** the diagram.
- **Prereqs:** M2. **est:** 22 min.

### 04 — Why Predicting a Representation Wins  (slug: `why-latent-prediction-wins`)
- **Summary:** The target representation has already thrown away unpredictable detail, so the system is
  graded only on structure it could actually predict.
- **Objectives:** Decompose a target into predictable structure vs unpredictable detail; explain why
  grading in representation space removes the noise penalty; contrast with M1's reconstruction.
- **Owns:** the predictability argument.
- **Artifact:** a concrete **predictable-vs-unpredictable split** (a small worked illustration / number).
  **Opening:** a contrast. (Calls back to M1/M3; does not restate them.)
- **Prereqs:** M3. **est:** 16 min.

### 05 — Collapse, and the Asymmetric Fix  (slug: `collapse-and-the-fix`)
- **Summary:** If every box outputs the same vector, the loss is zero and the system learned nothing.
  JEPA breaks the symmetry: the target encoder is an EMA of the context encoder, not gradient-trained.
- **Objectives:** Show the collapse solution numerically (loss 0, no information); explain stop-gradient;
  state and compute the EMA target update; explain why the asymmetry removes the collapse cheat.
- **Owns:** collapse; stop-gradient (full treatment); the **EMA** update.
- **Artifact:** collapse shown **numerically** (both sides `[0,0,0,0]`, loss 0), the **EMA equation**
  `θ_t ← τ·θ_t + (1−τ)·θ_c` with a worked number, and **pseudocode** of the EMA update. **Opening:** the
  failure mode.
- **Prereqs:** M3. **est:** 22 min.

### 06 — I-JEPA, V-JEPA, and the World-Model Bet  (slug: `i-jepa-v-jepa-world-models`)
- **Summary:** The same recipe on images (mask blocks) and video (mask spacetime tubes), and the larger
  thesis: intelligence as prediction in an abstract space — promising, not settled.
- **Objectives:** Describe I-JEPA's context/target masking and V-JEPA's spatiotemporal masking; explain
  why video is a richer signal; state LeCun's world-model thesis and its honest open status.
- **Owns:** the instantiations; the world-model thesis.
- **Artifact:** **masking diagrams** (image: context vs target blocks; video: a masked tube), as ```text.
  **Opening:** a concrete instantiation. Closes the course on the open bet (no re-chant of the thesis).
- **Prereqs:** M5. **est:** 18 min.
