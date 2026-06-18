---
title: "I-JEPA, V-JEPA, and the World-Model Bet"
course: jepa
order: 6
summary: The same recipe applied to images and video, and the larger thesis — intelligence as prediction in an abstract space — with its honest open status.
estimatedMinutes: 18
objectives:
  - Describe I-JEPA's context/target masking from an image grid
  - Describe V-JEPA's spatiotemporal masking and explain why video provides a richer training signal
  - State LeCun's world-model thesis and identify what remains unsettled
prerequisites: [collapse-and-the-fix]
---

Take a 14×14 image grid. Sample four non-overlapping rectangular blocks from it — call them the **targets**. Everything else, the irregular remainder with four holes punched in, is the **context**. Feed the context to the context encoder $f_c$, feed each target block to the target encoder $f_t$, and use the predictor $g$ to predict each target block's **representation** from the context representation. Minimize the distance. That, precisely, is I-JEPA.

The same recipe from M3 and M5, now with a masking strategy attached.

---

## I-JEPA: masking on images

The masking is not random at the pixel level. Assran et al. (2023) sample several rectangular **target blocks** of varying sizes (typically covering 15–30% of the image each), then feed the rest — the **context** — as a contiguous region with those blocks removed.

```text
I-JEPA IMAGE MASKING (14×14 grid, schematic)

 . . . . . . . . . . . . . .
 . . . . . . . . . . . . . .
 . . [T1 T1 T1 T1] . . . . .    T1 = target block 1
 . . [T1 T1 T1 T1] . . . . .    T2 = target block 2
 . . . . . . . . [T2 T2 T2].    C  = context (everything else)
 . . . . . . . . [T2 T2 T2].
 . . . . . . . . . . . . . .
 . [T3 T3 T3] . . . . . . .     T3 = target block 3
 . [T3 T3 T3] . . . . . . .
 . . . . . . . . . . . . . .
 . . . . . . . . . . . . . .

Context = all cells marked "."  (fed to f_c)
Targets = T1, T2, T3 blocks     (each fed to f_t separately)
Goal    = predict rep(T1), rep(T2), rep(T3) from rep(context)
```

The predictor $g$ outputs one **predicted representation** $\hat{g}$ per target block. The loss is the sum of distances between each $\hat{g}$ and the corresponding **target representation** $s = f_t(\text{target block})$:

$$
L = \sum_{k} \sum_{i} \left(\hat{g}^{(k)}_i - s^{(k)}_i\right)^2
$$

where $k$ indexes the target blocks and $i$ indexes positions within each representation vector. The target encoder $f_t$ is updated by EMA only — the asymmetric fix from M5 that prevents **collapse**.

<details><summary>Check yourself: why are multiple target blocks better than one?</summary>

One target block might be easy to predict from almost any context. Multiple target blocks at different locations force the context representation to carry spatial information about the whole image — what's in the upper-left corner must be inferable from the lower-right, and vice versa. The system cannot pass with a representation that ignores most of the image.

</details>

---

## V-JEPA: masking in space and time

Video adds a third dimension: time. Bardes et al. (2024) extend the recipe by masking **spatiotemporal tubes** — rectangular blocks that persist across multiple consecutive frames.

```text
V-JEPA VIDEO MASKING (5 frames, schematic top-down view)

Frame 1   Frame 2   Frame 3   Frame 4   Frame 5
+-------+ +-------+ +-------+ +-------+ +-------+
|  C  C | |  C  C | |  C  C | |  C  C | |  C  C |
|C [T T]| |C [T T]| |C [T T]| |C [T T]| |C [T T]|
|C [T T]| |C [T T]| |C [T T]| |C [T T]| |C [T T]|
|  C  C | |  C  C | |  C  C | |  C  C | |  C  C |
+-------+ +-------+ +-------+ +-------+ +-------+
     \         \         \         \         \
      +-------- tube: same spatial region -----+
                  across all 5 frames

C = context cells   T = target tube cells
The tube is masked in every frame; context is the rest.
```

The training signal sharpens because **time constrains what is plausible**. In a single image, many different things could plausibly occupy a masked region — the system can hedge. Across five consecutive frames, most of those possibilities collapse: if a hand is reaching toward a cup in frames 1–2 and the cup is tipping in frames 4–5, the contents of frame 3 are far less ambiguous. The temporal structure eliminates guesses. A system that predicts the tube's representation must have learned something about motion, object persistence, and physical continuity — not because those concepts were labeled, but because they are what makes the prediction tractable.

This is why video is a richer self-supervised signal than images: it supplies constraints the image data cannot.

<details><summary>Check yourself: a spatiotemporal tube is masked identically across every frame. Why not mask a different region in each frame?</summary>

If each frame hides a different region, the prediction problem fragments: the context in frame 3 can "look" at the region that is hidden in frame 1 and use that direct pixel evidence. Keeping the tube fixed across frames forces the predictor to reason from temporal dynamics — what was happening before and after — rather than from a direct spatial peek at another frame.

</details>

---

## LeCun's world-model thesis

The masking strategies are engineering choices. Behind them sits a harder claim.

In *A Path Towards Autonomous Machine Intelligence* (2022), Yann LeCun argues that human-level autonomous intelligence requires a **world model**: an internal system that predicts the future state of the world, in an abstract representation space, given current observations and actions. The key phrase is *abstract representation space* — not in pixels, not in raw sensor data. A world model that predicts pixels must model every irrelevant detail (the exact texture of a wall, the specific color of reflected light); a world model that predicts in representation space needs only to predict the structure that matters for what happens next.

JEPA is a concrete implementation of this principle. It learns by predicting representations of hidden or future content, never by reconstructing the raw input. The architecture is designed to be extended: feed it actions, and the predictor can learn to predict how the world changes when an agent intervenes.

The thesis is not settled. What JEPA demonstrates, clearly, is that self-supervised learning in representation space yields strong visual representations — models trained by I-JEPA and V-JEPA transfer well to downstream recognition tasks without labeled data. What remains open is whether scaling this architecture, or extending it with action conditioning, will produce the kind of flexible, causal world model LeCun describes. The jump from "good visual representations" to "autonomous machine intelligence" is large, and the research community has not cleared it. Several competing approaches — contrastive methods, diffusion-based world models, language-grounded models — also have serious claims on the same territory.

The bet is on the table. The chips have not been counted.

---

## Exercises

**1.** In I-JEPA, the context encoder $f_c$ receives the image with target blocks removed. Why must the target blocks be *removed* from the context rather than simply ignored — for instance, by masking them during the attention computation?

<details><summary>Show solution</summary>

If the target-block pixels are present in the context input but only masked in attention, they still influence the context representation through the encoder's internal computations (or leak through imperfect masking). The predictor would effectively have access to part of what it is supposed to predict. Removing the target blocks from the input entirely forces $f_c$ to build its representation from genuinely non-target information, making the prediction task honest.

</details>

---

**2.** V-JEPA masks a tube that spans all five frames. Suppose instead you masked only the first two frames of a five-frame clip and left frames 3–5 visible. Would the prediction task be harder or easier? Why?

<details><summary>Show solution</summary>

Easier. Frames 3–5 in the context are *later* than the masked frames 1–2, so the predictor can reason backward from what happened after the masked period — a direction that is often more informative than reasoning forward from earlier frames. The full-tube masking that V-JEPA uses prevents this reverse-time peek: none of the frames spanning the tube period are visible, forcing the predictor to rely on context outside the tube's spatial footprint.

</details>

---

**3.** LeCun's thesis says a world model should predict in representation space rather than in pixel space. In one or two sentences, explain *why* pixel-space prediction is the wrong target for a world model, using the vocabulary built in this course.

<details><summary>Show solution</summary>

Pixels encode both predictable structure (an object's position, shape, trajectory) and unpredictable detail (exact surface texture, lighting noise, camera grain). A pixel-space world model is graded on all of it, so it must devote capacity to predicting detail that is causally irrelevant to what happens next. Predicting in representation space means the target has already discarded that detail — the model is graded only on the structure that the context could plausibly determine.

</details>

---

**4.** (Stretch.) I-JEPA samples several target blocks and predicts each one's representation. The target encoder $f_t$ is updated by EMA, not by gradient. What would happen if the target encoder were trained by gradient on the prediction loss alone — that is, if you removed the stop-gradient and the EMA, and trained $f_t$ just like $f_c$?

<details><summary>Show solution</summary>

**Collapse.** With all three components ($f_c$, $f_t$, $g$) updated by gradient on the same loss, the trivial solution — all outputs the same constant vector — minimizes the loss instantly. The loss $L = \sum_i (\hat{g}_i - s_i)^2$ reaches zero whenever $\hat{g} = s$, and the cheapest way to achieve that is for everything to output $[0, 0, \ldots, 0]$. The asymmetry introduced by EMA and stop-gradient makes that trivial solution unreachable: $f_t$ is a lagged copy of $f_c$, not a component the optimizer can collapse directly. (This was the full story in M5.)

</details>

---

## Recap

I-JEPA applies the JEPA recipe to images by sampling rectangular target blocks and masking them from the context; V-JEPA extends it to video by masking spatiotemporal tubes, which provide a sharper training signal because temporal structure eliminates implausible predictions. Both are concrete implementations of LeCun's broader argument that intelligence requires prediction in abstract representation space, not in pixels. Whether the architecture scales to the world-model capability LeCun describes remains genuinely open — one bet among several, still in play.
