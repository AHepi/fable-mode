# Research — JEPA (redo)

Dossier for a 6-module `intro` `stem` course. Accurate, concrete, artifact-first. Written directly by
the orchestrator for the redo.

## Scope
- **In:** masked prediction setup; why reconstructing pixels is the wrong target; representations &
  representation-space distance (shown numerically); the JEPA architecture (context encoder, predictor,
  target encoder) and its loss; why predicting representations beats reconstruction; collapse + the
  asymmetric fix (stop-gradient + EMA target encoder); I-JEPA / V-JEPA instantiations; LeCun world-model
  thesis + its open status.
- **Out:** transformer/ViT internals; the full self-supervised taxonomy beyond one-line placement;
  benchmark tables; training-scale numbers.

## Core concepts (dependency order) + the artifact each needs
1. **Encoder → representation.** An *encoder* turns an input (image patch) into a **representation**: a
   fixed-length list of numbers (a vector), e.g. `[0.2, 0.9, 0.1, 0.7]` (real ones are hundreds long).
   *(artifact: a vector written out.)*
2. **Representation space & distance.** Representations live in a space where **distance** measures
   dissimilarity. Use squared Euclidean: for `p=(p₁..p_d)`, `s=(s₁..s_d)`, `d(p,s)=Σ_i (p_i − s_i)²`.
   *(artifact: a worked distance between two 4-vectors.)*
3. **Masked prediction (free supervision).** Hide part of an input; ask the system to predict the hidden
   part from the visible part. No human labels needed — the data supervises itself.
4. **Generative vs joint-embedding target.** Generative/reconstruction (e.g. masked autoencoders) rebuild
   the hidden **pixels** and are graded pixel-by-pixel — so they spend capacity on unpredictable detail.
   JEPA predicts the hidden part's **representation** and is graded by distance in representation space.
   *(artifact: a side-by-side pipeline contrast.)*
5. **The JEPA three boxes.** *(artifact: ASCII architecture diagram + loss equation + pseudocode.)*
   - **context encoder** `f_c`: visible part → context representation.
   - **target encoder** `f_t`: hidden part → target representation (the answer key).
   - **predictor** `g`: context representation → predicted representation of the hidden part.
   - **loss** = distance between predictor output and target representation:
     `L = Σ_i (ĝ_i − s_i)²` where `ĝ = g(f_c(context))`, `s = f_t(target)`.
   - The target side carries a **stop-gradient**: gradients update `f_c` and `g`, NOT `f_t` directly.
6. **Why latent prediction wins.** The target representation has already discarded unpredictable
   pixel-detail; predicting it means the system is graded only on *predictable structure*, not on noise it
   could never have guessed. *(artifact: a concrete predictable-vs-unpredictable split.)*
7. **Collapse & the fix.** Failure mode: if `f_c`, `f_t`, `g` all output the **same constant vector**,
   the distance is 0 — a useless trivial solution. *(artifact: collapse shown numerically — both sides
   `[0,0,0,0]`, loss 0.)* JEPA breaks the symmetry: the **target encoder is not trained by gradient**; its
   weights are an **exponential moving average (EMA)** of the context encoder:
   `θ_t ← τ·θ_t + (1−τ)·θ_c`, with `τ` near 1 (e.g. 0.996). Combined with the stop-gradient and the
   predictor, this asymmetry stops the "everything → one point" cheat. *(artifact: EMA equation +
   pseudocode of the update.)*
8. **Instantiations.** **I-JEPA** (Assran et al., 2023): on images, sample several **target blocks**;
   the **context** is the rest of the image with those blocks removed; predict each target block's
   representation. **V-JEPA** (Bardes et al., 2024): same recipe on **video** — mask spatiotemporal tubes,
   predict their representations; video gives a richer signal because time constrains what's plausible.
   *(artifact: a masking diagram for image and for video.)*
9. **World models / the bet.** LeCun's thesis (*A Path Towards Autonomous Machine Intelligence*, 2022):
   intelligence needs a **world model** that predicts in an abstract representation space, not in pixels;
   JEPA is a concrete step toward it. Honest status: promising, not settled — an open bet.

## Prerequisite analysis (intro, no ML)
- Assumed: arithmetic, "a list of numbers", "two points near/far", subtraction & squaring.
- Teach from scratch (each with a shown artifact): encoder/representation (a vector); distance (one
  formula + one worked sum); the three-box diagram; the EMA average (a weighted average of two numbers,
  shown); reading simple pseudocode.

## Common misconceptions (target these)
- "The prediction is a blurry image." No — it is a **vector**; there is no decoder, no image is ever
  produced. (P-core.)
- "The target encoder learns by gradient too." No — it is updated by EMA only; the stop-gradient blocks
  gradient on the target side. (P-collapse.)
- "Distance is compared on pixels." No — distance is between two representations.
- "Collapse can't happen because the loss would be high." Backwards — collapse makes the loss **zero**;
  that's exactly why it's a trap.

## Worked numbers to reuse (so authors stay consistent)
- Distance example: predicted `ĝ=[0.3, 0.8, 0.2, 0.6]`, target `s=[0.2, 0.9, 0.1, 0.7]`. Squared
  distance `= (0.1)²+(0.1)²+(0.1)²+(0.1)² = 0.04`. Small → good prediction.
- Collapse: `ĝ=s=[0,0,0,0]` → distance 0, but the representations carry no information. The fix removes
  this as a reachable solution.
- EMA: `τ=0.99`; one target weight `w_t=0.50`, context weight `w_c=0.70` → new `w_t = 0.99·0.50 +
  0.01·0.70 = 0.502`. The target trails the context slowly.

## Sources
- A. Assran et al., "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture
  (I-JEPA)," CVPR 2023.
- A. Bardes et al., "V-JEPA: Latent Video Prediction for Visual Representation Learning," 2024.
- Y. LeCun, "A Path Towards Autonomous Machine Intelligence," 2022 (position paper).

## Curriculum note
Six modules (see curriculum.md). The single biggest change from the boring version: **every module
shows an artifact** (diagram / equation / worked number / pseudocode), the course is compressed ~2×,
and the central one-liner is stated once and then *used*, never re-chanted.
