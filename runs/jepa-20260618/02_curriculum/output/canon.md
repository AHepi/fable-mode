# Canon — JEPA (redo)

Binding on all authors (03) and the editor (04). This redo exists to undo specific failures of the
prior course, so the caps below are strict.

## 1. Symbol & naming registry

| Thing | Canonical name / symbol | Not |
|------|--------------------------|-----|
| Input (image/patch) | **input** `x` | sample, datum |
| Visible part fed to the system | **context** | the seen part, the visible bit |
| Hidden part to predict | **target** | the masked part, the answer (alone) |
| A fixed-length list of numbers an encoder outputs | **representation** (a vector) | embedding (use once to gloss), code, latent (gloss once) |
| The space representations live in | **representation space** | latent space (gloss once), feature space |
| Dissimilarity of two representations | **distance** (squared Euclidean) | error (alone), difference |
| Encoder of the context | **context encoder** `f_c` | online encoder, student |
| Encoder of the target | **target encoder** `f_t` | teacher (gloss once), momentum encoder |
| Box that predicts target rep from context rep | **predictor** `g` | head, decoder (NEVER — there is no decoder) |
| Predictor output | **predicted representation** `ĝ` | the guess (sparing), prediction (ok) |
| Target encoder output | **target representation** `s` | the answer key (sparing) |
| Training signal | **loss** `L` = distance(`ĝ`, `s`) | cost, objective |
| Blocking gradient on the target side | **stop-gradient** | detach (gloss once) |
| Slow weighted-average update of `f_t` | **EMA** (exponential moving average), rate `τ` | momentum (gloss once) |
| Trivial all-same-vector solution | **collapse** | mode collapse, degeneracy |

Notation house-style: inline `$...$`, display `$$...$$`; squared distance `$\sum_i (\hat g_i - s_i)^2$`;
EMA `$\theta_t \leftarrow \tau\,\theta_t + (1-\tau)\,\theta_c$`. Define every symbol in words first.

## 2. "Already-taught" ledger & dedup plan (STRICT — over-repetition was the disease)

| Fact | Owner (full) | Elsewhere |
|------|--------------|-----------|
| The bet: "predict the **representation** of the hidden part, not its pixels" | **M1** (state once) | call back in ≤1 short clause; **never re-chant** |
| encoder / representation / **distance** (+ the worked number) | **M2** | M3–M5 use the result; do not re-derive distance |
| the three boxes + loss + stop-gradient | **M3** | M4–M6 call back; never re-draw the whole architecture |
| predictability argument (why latent wins) | **M4** | — |
| collapse + EMA + stop-gradient (full) | **M5** | M6 calls back in one line |
| I-JEPA / V-JEPA / world-model thesis | **M6** | — |

**There is no pixel decoder** — state this once (M1 or M3) and do not keep re-announcing it.

## 3. Metaphor discipline (kill the analogy carousel)

The prior course opened almost every module with a homey everyday analogy; that formula is **banned**.
- **At most one** light image per module, and only if it hands off immediately to the artifact
  (diagram / equation / number) and then stops. Most modules should use **no** analogy.
- **Openings must vary** (see curriculum): M1 a claim, M2 a computation, M3 the diagram, M4 a contrast,
  M5 the failure mode, M6 an instantiation. No two modules open on the same kind of move.
- A metaphor must point true and pay off; a clean labelled diagram beats any picture-in-words here.

## 4. Stock-phrase & adverb caps

| Item | Cap |
|------|-----|
| "predict the gist", "not the pixels", "on the map", "describe it don't draw it" | the bet is phrased **once** (M1); these chant-phrases banned thereafter |
| "tattoo on your arm", "don't worry", "bear with me", "rest assured", "take your time" | 0 (banned) |
| soothing manner adverbs — gently, quietly, silently, softly, smoothly, simply, merely | ≤1 per module, and no single one across >2 modules (lint checks 5–6 must pass) |
| "the machine/machinery" for the system | ≤2 per module (prefer "the system", "JEPA") |

## 5. Voice target

One narrator: **a sharp engineer-explainer who respects a beginner's intelligence.** Confident, plain,
concrete. Second person sparingly; "we" for shared construction. **No soothing, no coddling, no
apologising for difficulty** — name a hard thing and show it. Every mechanism is *shown* (a diagram, an
equation, a worked number, or pseudocode), not just narrated. Sentences end on the strong word.

**Drift to correct in editorial:** any return of the soothing register or manner-adverb tics; any module
that explains a mechanism with prose only (must add the artifact); any re-chant of the core one-liner;
any module opening with an everyday analogy when its neighbour already did.

## 6. Per-module artifact requirement (non-negotiable)

| Module | Required artifact(s) |
|--------|----------------------|
| M1 | a ```text pipeline contrast (reconstruct-pixels vs predict-representation) |
| M2 | the distance equation (KaTeX) + a worked numeric distance |
| M3 | a labelled ```text architecture diagram + the loss equation + pseudocode of forward+loss |
| M4 | a worked predictable-vs-unpredictable split (numbers) |
| M5 | collapse shown numerically + the EMA equation + EMA pseudocode |
| M6 | masking diagrams (image + video) as ```text |

A module that ships with none of its required artifacts is incomplete and fails the editorial gate.
