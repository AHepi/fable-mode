---
title: The Wrong Target
course: jepa
order: 1
summary: Predicting raw pixels wastes a learner on detail nothing could predict; the alternative is to predict the representation of the hidden part. The bet of the whole course, stated once.
estimatedMinutes: 16
objectives:
  - Explain what masked prediction is and why it requires no human labels
  - Distinguish the reconstruction approach (predict pixels, graded pixel-by-pixel) from the JEPA approach (predict a representation, graded by distance)
  - State JEPA's central bet in one sentence
prerequisites: []
---

Here is the claim the entire course rests on: a system that learns by predicting the **representation** of what's hidden will learn more than one that predicts the hidden **pixels**. Not marginally more — structurally more. The difference isn't an implementation detail. It's a bet about what machine intelligence should be doing with its attention.

To see why that bet matters, you need to understand what the two approaches are actually doing — and what they're paying for.

## Masked prediction: free supervision

Every learning system needs a training signal: something that tells it whether it's doing well or badly. The expensive way to get that signal is human labeling — a person tags each image with what it contains, and the system learns to reproduce those tags. The cheap way is to hide part of the input and ask the system to predict the hidden part from the visible part.

That's **masked prediction**. Take an image. Block out a patch. Show the system the rest and ask: what was in that patch?

The hidden patch is the answer key, and the visible rest is the context. No human ever wrote a label. The data supervises itself. At scale, this is the difference between needing ten million labeled examples and being able to use a billion unlabeled ones.

**The context** is the visible part of the input fed to the system. **The target** is the hidden part the system must predict. These names are the canonical ones — every module in this course uses them exactly this way.

<details><summary>Check yourself: why does masked prediction require no human labels?</summary>

Because the target (the hidden patch) is already part of the original input. The system's job is to predict the part that was hidden from the part that wasn't — and both came from the same data point. No person needed to annotate anything. The data supplies the question and the answer key.

</details>

## Two approaches, one question

Masked prediction sets up a question: predict the target from the context. It says nothing about *what form* that prediction should take. Two answers are possible, and they lead to fundamentally different systems.

**The reconstruction approach** predicts the target's pixels. Given the context, reconstruct every pixel in the hidden patch as closely as possible. The training signal grades the system pixel-by-pixel: how far was each predicted pixel from the actual pixel? Nail the pixels, reduce the loss.

**The JEPA approach** predicts the target's **representation** — a compact summary that an encoder extracts from the hidden patch. The training signal grades the system by the distance between the predicted summary and the actual summary. Nail the representation, reduce the loss.

Here's what separates them:

```text
PIPELINE CONTRAST
────────────────────────────────────────────────────────────────────────────
                     RECONSTRUCTION                   JEPA
────────────────────────────────────────────────────────────────────────────
 Predict what?       the hidden pixels                the hidden part's
                                                       representation (vector)

 Graded on?          pixel-by-pixel match             distance between
                                                       two representations

 Pays for?           all detail, including             only predictable
                     unpredictable texture,            structure the
                     lighting noise, and               context could
                     surface randomness                have anticipated

 Has a pixel         yes                              no
 decoder?
────────────────────────────────────────────────────────────────────────────
```

The phrase "pays for unpredictable detail" is the critical one. A grass patch has predictable structure — roughly green, roughly flat, roughly matching the surrounding grass — and unpredictable detail: the precise brightness of each blade, the exact noise pattern from the camera sensor, the particular way light scattered through the canopy at that moment. Both are present in the pixels. A reconstruction system must predict both, because it's graded on both. The unpredictable part can't be predicted — that's what "unpredictable" means — so the system is being penalized for failing at something it was never going to win. It spends capacity trying anyway.

A representation discards that unpredictable detail by design. An encoder that turns a patch into a compact vector can't fit every pixel into that vector; it has to throw things away. What survives is structure. What JEPA predicts is that structure, not the raw pixels. There is no pixel decoder — the system never produces an image, only a vector.

This is JEPA's bet, stated once: **predict the representation of the hidden part, not its pixels.**

<details><summary>Check yourself: what's the problem with grading a system pixel-by-pixel on a hidden patch?</summary>

Some of what's in those pixels — noise, fine texture, lighting variation — was never predictable from the context. Grading pixel-by-pixel means penalizing the system for failing to reconstruct detail it couldn't have known. The system wastes capacity trying to model noise rather than learning structure.

</details>

## What "representation" means (preview)

A **representation** is a fixed-length list of numbers — a vector — that an encoder computes from an input. The vector is a compact description. Similar inputs produce nearby vectors; dissimilar inputs produce distant ones. The full mechanics of encoders and distance live in M2, which defines both precisely and works through a numerical example. For now: a representation is a vector, and distance between two vectors is a number that captures how different they are.

The reconstruction approach never uses this machinery — it stays in pixel space. JEPA lives entirely in representation space.

## Exercises

**1.** An image of a city street has a patch hidden in the middle. A reconstruction system tries to predict the exact pixel values of every car, person, and shadow in that patch.
- (a) Name two kinds of detail in that patch that are structurally predictable from the surrounding street.
- (b) Name two kinds of detail that are not predictable — that depend on chance or randomness.
- (c) Which kinds of detail would a reconstruction system be penalized for getting wrong, even though it had no way to get them right?

<details><summary>Show solution</summary>

(a) Predictable: the approximate color of the road surface (consistent with the surrounding road); the rough shape and position of a car if other cars are visible nearby; perspective lines continuing from the visible edges of buildings.

(b) Unpredictable: the exact brightness of a specific pixel (depends on camera noise and lighting); whether a pedestrian happened to be mid-step at that exact moment; the precise reflection pattern on a wet patch.

(c) The reconstruction system is graded on all pixels equally — so yes, it is penalized for the unpredictable ones too. This is the problem. The system has no way to predict camera noise, but it's penalized for missing it.

</details>

---

**2.** Someone argues: "JEPA's prediction is just a blurry version of the hidden image — it produces an image that's smeared out because it's uncertain about the details." Is this correct? Why or why not?

<details><summary>Show solution</summary>

No. This is a common misconception. JEPA's prediction is a **vector** — a list of numbers representing the hidden part's summary. It is not an image of any kind, blurry or otherwise. There is no decoder that converts the prediction back into pixels. The predicted representation and the target representation are both vectors, and the system is graded on the distance between them. No image is ever produced.

The "blurry image" intuition belongs to reconstruction systems (which do generate images under uncertainty), not to JEPA.

</details>

---

**3.** Masked prediction is described as "free supervision." A critic says: "It's not really supervision — the system is just learning to cheat by memorizing textures." What would you point to in the *structure of the training signal* to counter this?

<details><summary>Show solution</summary>

The training signal comes from predicting a genuinely hidden part from a genuinely visible part — neither the system nor anyone else chose which patch to hide in a way that makes the task trivial. The task requires understanding structure that generalizes across examples: what kinds of surfaces, shapes, and patterns are consistent with what's visible. That is a real learning objective. Memorizing individual examples won't work at scale, because the same system faces billions of different images with different patches hidden. The "cheat" the critic describes — memorizing textures — might let the system handle familiar images but would fail on novel ones, which is exactly what training at scale is designed to prevent.

</details>

---

**4.** (Stretch) In the pipeline contrast table, the reconstruction row says it "pays for all detail, including unpredictable texture." In JEPA, the representation has already discarded that detail before the prediction is graded. Why does that matter for what the system *learns*, not just for what it's measured on?

<details><summary>Show solution</summary>

The gradient — the training signal that adjusts the system's parameters — flows backward from the loss. If the loss penalizes unpredictable detail, the gradient pushes the system's parameters to try to model that detail. The system learns to allocate capacity to things it can never get right. That capacity is finite; whatever goes to modeling noise is unavailable for modeling structure.

In JEPA, the loss only activates when the predicted representation differs from the target representation. Since the target representation has already discarded unpredictable detail, the gradient never pushes the system to model that detail. The system's capacity is directed at predictable structure — which is the thing that transfers to downstream tasks. This is why the choice of target changes not just the measurement but what the system actually learns to do.

</details>

## Recap

Masked prediction generates free supervision: hide the target, train the system to predict it from the context, no labels needed. Two approaches exist for what to predict. Reconstruction predicts pixels and is graded pixel-by-pixel, so it pays a penalty for unpredictable detail it could never have anticipated. JEPA predicts the representation of the hidden part — a compact vector that already discards that detail — and is graded on the distance between predicted and actual representations.

The next module builds the machinery that makes "distance between representations" precise: what an encoder is, what a representation actually contains, and how to compute a number that measures how close two representations are.
