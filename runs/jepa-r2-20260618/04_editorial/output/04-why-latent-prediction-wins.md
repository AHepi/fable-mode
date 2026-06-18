---
title: Why Predicting a Representation Wins
course: jepa
order: 4
summary: The target representation discards unpredictable detail, so the system is graded only on structure it could actually predict.
estimatedMinutes: 16
objectives:
  - Decompose a hidden patch into predictable structure and unpredictable detail, with numbers
  - Explain why grading in representation space removes the noise penalty
  - Contrast reconstruction's grading surface with representation prediction's grading surface
prerequisites: [the-jepa-architecture]
---

Two systems, one hidden patch. The first is graded on every pixel it failed to reproduce: 10,201 numbers, most of them determined by lighting, surface texture, compression artifacts — detail no method anywhere could have guessed from the visible half of the image. The second is graded on distance in representation space: a few hundred numbers that encode *where* the object is, *what* it roughly looks like, *how* it relates to the context around it. The first system is penalized for failing at the impossible. The second is penalized only for failing at what was knowable.

That asymmetry is what M1's bet was purchasing, and it deserves a precise account.

## The grading surface problem

When a reconstruction system (the kind M1 described as the wrong target) hides a 101×101-pixel patch and asks the system to reproduce it, the loss function runs across all 10,201 pixel values. Some of those pixels are predictable: the rough shape of what's there, the dominant color, the approximate edge positions. A careful predictor can get close on those. But a large fraction are not predictable: the precise shade of each speck, the microtexture of a fabric, the exact intensity pattern from a particular lighting condition at a particular moment. Call these the unpredictable residuals.

The reconstruction system cannot distinguish predictable pixels from unpredictable ones. The loss sums them all. High loss on the unpredictable residuals looks exactly the same, numerically, as high loss on the structure the system should have learned. The training signal is contaminated: every gradient step is partly answering "learn the structure" and partly answering "memorize this particular noise pattern you had no hope of getting right."

The target representation, by contrast, is produced by the target encoder $f_t$ — the encoder that transforms the raw patch into a fixed-length vector $s$. That encoder has been trained — by the slow target-update rule M3 flagged and M5 will detail — to preserve the regularities that recur across images: object shape, spatial layout, semantic category. It has not been trained to preserve texture microvariations or lighting accidents. Those features do not survive the encoding. When $f_t$ processes the hidden patch, the unpredictable residuals are discarded before $s$ is ever computed.

This is the key move. The target representation $s$ does not contain what was unpredictable. So when the loss $L = \sum_i (\hat{g}_i - s_i)^2$ — the distance between the predicted representation $\hat{g}$ and the target representation $s$ — measures the gap, it measures the gap on structure that survives the encoding. The unpredictable detail is not there to be wrong about.

## The predictable-vs-unpredictable split

Here is what the two grading surfaces look like on the same patch.

```text
HIDDEN PATCH: a 101×101 region of an image (≈ 10,201 pixel values)

RECONSTRUCTION GRADING (pixel space):
┌──────────────────────────────────────────────────────────────────┐
│  ~10,201 values graded                                           │
│                                                                  │
│  Predictable structure (graded here too):                        │
│    rough shape of object:          ~50–100 values influence      │
│    dominant color region:          ~200–400 values               │
│    approximate edge positions:     ~100–200 values               │
│    total predictable signal:       ~400–700 values               │
│                                                                  │
│  Unpredictable detail (also graded — unavoidably):               │
│    per-pixel texture noise:        ~5,000 values                 │
│    lighting / compression:         ~3,000 values                 │
│    surface microvariations:        ~1,500 values                 │
│    total unpredictable residual:   ~9,500–9,800 values           │
│                                                                  │
│  Predictable fraction of grading surface: ~5–7%                 │
└──────────────────────────────────────────────────────────────────┘

REPRESENTATION PREDICTION GRADING (representation space):
┌──────────────────────────────────────────────────────────────────┐
│  ~256–512 values graded (typical representation dimension)       │
│                                                                  │
│  What the encoder preserved (all of what's graded):             │
│    object shape / spatial layout:  present                       │
│    semantic category signal:       present                       │
│    contextual relations:           present                       │
│                                                                  │
│  What the encoder discarded (not present to be graded):          │
│    per-pixel texture noise:        gone                          │
│    lighting / compression:         gone                          │
│    surface microvariations:        gone                          │
│                                                                  │
│  Predictable fraction of grading surface: ~100%                  │
└──────────────────────────────────────────────────────────────────┘
```

The numbers are illustrative but the ratio is real. A typical patch contains thousands of unpredictable values for every few hundred that carry structure. Reconstruction grades the system on the whole surface — structure and noise both. Representation prediction grades the system only on the encoded summary, which contains structure and not the noise.

The predictor $g$ is trained to produce $\hat{g}$ close to $s$. What does it have to learn to succeed? It has to learn to predict the structured features of the hidden region — the features an encoder would retain. That is exactly the capacity JEPA wants to develop: an internal model of the scene's regularities. There is no gradient pressure to memorize noise, because the noise is not in the target.

<details><summary>Check yourself: why can't a reconstruction system just ignore the unpredictable pixels?</summary>

It has no way to identify which pixels are unpredictable. The loss function adds up the squared error across all pixel positions without distinction. The training signal for predictable structure and the training signal for unpredictable noise arrive mixed together in the same gradient. The system would have to learn — from that contaminated signal — to selectively ignore the noisy part, which is a harder and different problem than simply learning the structure.

</details>

## Why this connects to M1's waste claim

M1 stated that reconstruction wastes the learner on detail nothing could predict. The argument above makes that claim precise: the waste is quantitative. On a 101×101 patch, roughly 94–95% of the grading surface is devoted to pixel values the system cannot anticipate, no matter how well it models the scene. That 94–95% does not teach the system anything useful about structure — it teaches it, at best, nothing, and at worst, to overfit to the specific noise pattern of each training image.

Representation prediction eliminates that waste by design. The target representation is already a distillation: the encoder has done the work of separating structure from noise before the loss is ever computed. The loss then measures exactly and only the gap on structure.

<details><summary>Check yourself: if the target encoder is updated slowly — trailing the context encoder rather than chasing the loss — does the representation it produces stay useful over training?</summary>

Yes. The slow update keeps $f_t$ close to $f_c$ — it trails the context encoder but does not diverge from it. As $f_c$ learns better representations, $f_t$ gradually follows. The representations $f_t$ produces remain valid targets for $f_c$ to predict throughout training. If $f_t$ were held completely fixed from the start, it would eventually become a poor target as $f_c$ improved past it; the slow update keeps the targets sensible.

</details>

## Exercises

**1.** A hidden patch is 50×50 pixels. A representation of it has 128 dimensions. Suppose 90% of the pixel values are dominated by unpredictable noise, and the representation retains only predictable structure. How many values does reconstruction grade that representation prediction avoids?

<details><summary>Show solution</summary>

Reconstruction grades $50 \times 50 = 2{,}500$ pixel values. Of these, 90% are unpredictable: $0.9 \times 2{,}500 = 2{,}250$ values. Representation prediction grades 128 dimensions, all of which correspond to predictable structure. So representation prediction avoids being graded on $2{,}250$ values that carry no learnable signal. That is roughly 17.6 times the size of the representation itself — the noise surface dwarfs the signal surface.

</details>

**2.** Suppose someone argues: "The reconstruction system will eventually figure out which pixel patterns are noise and stop trying to predict them — it just needs enough training data." What is wrong with this argument?

<details><summary>Show solution</summary>

The reconstruction system cannot identify noise from signal using the pixel-level loss alone, because the loss adds up all pixel errors without labeling any as "noise." The system receives a gradient that says "be closer to this specific pixel value," not "this value was noise — ignore it." To separate predictable from unpredictable content, the system would need the kind of structural representation JEPA's target encoder provides — but that representation is exactly what reconstruction is trying to avoid building. The argument is circular: the system would need to solve the harder problem to get the signal needed to solve the easier one.

</details>

**3.** Two systems train on the same dataset of images. System A predicts pixels; System B predicts representations. Both train until their losses stop decreasing. Which system is more likely to have learned useful features for recognizing objects in a new image it has never seen? Why?

<details><summary>Show solution</summary>

System B. System A minimized its loss partly by modeling unpredictable noise: the specific texture and lighting of each training image. Features learned by fitting noise do not transfer — a new image has different noise. System B minimized its loss by predicting structural features that the target encoder preserved: shape, layout, category. Those features recur across images and generalize. System B's representations are therefore more likely to be useful on images it was not trained on. This is the practical payoff of the grading-surface argument: better generalization, not just a lower training loss.

</details>

**4. *(Stretch.)*** The target encoder $f_t$ discards unpredictable detail. But what decides what counts as "unpredictable"? Could a poorly initialized $f_t$ accidentally discard the wrong things?

<details><summary>Show solution</summary>

In principle, yes. At initialization, $f_t$ starts from the same random weights as $f_c$, so its representations are not yet meaningful. Early in training, the "targets" $s = f_t(\text{target})$ are close to random, and the loss is minimized by predicting something close to random — not much better than collapse. What rescues training is that the EMA update slowly incorporates the improvements $f_c$ has made: as $f_c$ learns to represent structure (because the loss pressure, even with random-ish targets early on, nudges it toward consistency across views), $f_t$ follows. The system bootstraps itself: early targets are weak but improve in step with the encoder. This is why training is sensitive to the choice of $\tau$ — too fast (low $\tau$) and the target shifts so quickly that the predictor can't track it; too slow and early training wastes time on near-random targets. The working regime is one where the targets are always slightly behind but coherent enough to provide useful signal.

</details>

## Recap

The target representation $s$ is not the hidden patch — it is a compact vector from which unpredictable detail has already been removed. Grading the predictor's output $\hat{g}$ against $s$ in representation space therefore grades the system only on what was knowable: the structure that the target encoder chose to preserve. In the worked split above, that means grading on a few hundred dimensions of signal rather than thousands of dimensions of noise. This is why M1's reconstruction waste is not just philosophically wasteful — the contaminated grading surface actively misdirects gradient descent. With that argument complete, M5 takes up the one remaining failure mode: if all three boxes conspire to output the same vector, the loss is zero without learning anything at all.
