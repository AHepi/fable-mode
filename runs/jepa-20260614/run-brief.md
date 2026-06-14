---
runId: jepa-20260614
topic: How JEPA (Joint Embedding Predictive Architecture) works
slug: jepa
assumedBackground: No machine-learning knowledge at all. A curious general-audience adult, comfortable with everyday reasoning and very light high-school math (a "list of numbers," an average, the idea of two things being close or far apart). Has heard of LLMs/ChatGPT as a user and knows JEPA is "different," but knows no ML vocabulary (no neural nets, training, embeddings, loss, etc.).
kind: stem
mode: autonomous
gates: [curriculum]
createdAt: 20260614
---

## Interpretation notes

**What the topic is.** JEPA = Joint Embedding Predictive Architecture, the family of
self-supervised learning architectures proposed by Yann LeCun and Meta AI. The course explains
*how it works* at a conceptual level: the central trick (predicting in **representation space**
rather than in raw pixels/tokens), why that is different from how LLMs and image generators work,
and the two concrete instances the reader asked for — **I-JEPA** (images) and **V-JEPA** (video).
It also covers the motivation (LeCun's argument that to reach human-like understanding, machines
need **world models** learned by prediction, and that generative pixel/token prediction is the
wrong objective).

**Assumed background — the hard constraint.** The reader knows *no* machine learning. Every ML
idea must be built from scratch, in order: what a model/encoder even is, what "a representation"
(embedding) is, what "training" / "learning from data" means, and what **self-supervised** learning
is — before JEPA itself can be assembled. We must not assume "neural network," "vector," "loss
function," or "gradient" are understood. We may assume only everyday reasoning and the most basic
arithmetic intuition (lists of numbers; closeness/distance; averaging).

**The LLM contrast is a first-class goal** (the user stated it). The reader knows JEPA is "different
from LLMs" but not how. Make the distinction concrete and recurring: LLMs are **generative** and
**autoregressive** — they predict the next *token* and reconstruct the actual symbols; JEPA is
**non-generative** — it predicts an *abstract representation* of the missing part and never
reconstructs pixels/tokens. Frame this as the course's spine.

**Scope — IN:**
- What a neural network / encoder is, at the "black box that turns input into a list of numbers"
  level — only as much as JEPA needs.
- **Embeddings / representation space** — the single most important prerequisite idea.
- **Self-supervised learning**: learning by hiding part of the data and predicting it, no human labels.
- **Generative vs. joint-embedding prediction**: predict-the-pixels/tokens vs. predict-the-representation.
- **The core JEPA idea**: an encoder for the visible part, a target encoder for the hidden part, and
  a predictor that maps one representation to the other; loss measured in representation space.
- **Why predict in representation space**: it lets the model *ignore* unpredictable detail (the
  "throw away the noise" payoff); contrast with pixel reconstruction wasting capacity on detail.
- **Representation collapse** (the central failure mode) and how JEPA avoids it: the asymmetry
  between online and target encoders, the stop-gradient / EMA "momentum" target encoder, masking.
- **I-JEPA**: masked-latent prediction on images (context block → predict representations of target blocks).
- **V-JEPA**: the same idea on video (predict representations of masked spatiotemporal regions); why
  video is a natural fit for learning world structure.
- **World models & motivation**: LeCun's case for prediction-as-understanding; JEPA as a step toward
  models that can plan, and why he argues generative is the wrong path.
- **How JEPA differs from LLMs** (recurring + a dedicated synthesis near the end).

**Scope — OUT (mention at most, don't develop):**
- The mathematics of backpropagation / gradient descent equations, transformer internals
  (attention math), exact loss formulas beyond "a distance between two lists of numbers."
- Training infrastructure, hyperparameters, exhaustive benchmark tables.
- LeCun's full autonomous-AI cognitive architecture (configurator, actor, cost module, etc.) — name
  it as the bigger picture JEPA sits inside; do not teach the whole thing.
- A survey of other self-supervised methods (contrastive learning, BYOL, MAE/masked autoencoders) —
  used only briefly for contrast, not taught in depth.
- Action-conditioned/agentic JEPA and the latest variants beyond V-JEPA — a one-line "where next."

**Rigor.** Conceptual and intuitive, not mathematical. Minimal notation; when a "list of numbers"
or a distance is genuinely clarifying, use it lightly (math-style/KaTeX available since kind=stem,
but most modules will have few or no formal blocks — that is expected and fine, as with an
intuition-first opener). Be **precise about the mechanism** even without equations: exactly what is
encoded, what is predicted, and in which space the comparison happens. This is a real and recent
research area — be accurate, cite the actual papers (LeCun 2022 position paper; I-JEPA 2023; V-JEPA
2024; later variants), and flag anything uncertain rather than overclaiming.

**Audience tone.** Wonder-driven and plain-spoken; the reader is smart but new to the field. The
goal is a genuine "oh, *that's* how it works" — the reader should be able to explain, to a friend,
why JEPA predicts an idea of the missing piece instead of the piece itself, and why that matters.

**kind = stem** because the subject is technical and the course must be precise about mechanism;
the stem template (hook → intuition → [light] definition → worked example → checks → exercises →
recap) fits "how it works" well. Math stays minimal per the rigor note above.

**Gate:** pause at the curriculum gate for review before authoring (user is present and engaged).
