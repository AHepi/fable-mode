---
title: The JEPA Architecture
course: jepa
order: 3
summary: Three boxes — context encoder, target encoder, predictor — and a loss that measures distance in representation space, with a stop-gradient on the target.
estimatedMinutes: 22
objectives:
  - Name the three boxes of a JEPA and state each one's job.
  - State the loss as a squared distance between the predicted and target representations.
  - Trace one input through the architecture to a single loss value.
  - Explain what the stop-gradient does and which boxes it leaves untrained.
prerequisites: [representations-and-distance]
---

```text
            visible part                      hidden part
            (context)                          (target)
                │                                  │
                ▼                                  ▼
        ┌───────────────┐                  ┌───────────────┐
        │ context       │                  │ target        │
        │ encoder  f_c  │                  │ encoder  f_t  │   ── stop-gradient ──╳
        └───────┬───────┘                  └───────┬───────┘   (no gradient flows
                │ context representation            │ target    back through f_t)
                ▼                                    │ representation  s
        ┌───────────────┐                            │
        │ predictor  g  │                            │
        └───────┬───────┘                            │
                │ predicted representation  ĝ        │
                ▼                                     ▼
                └──────────►  L = distance(ĝ, s)  ◄──┘
                                = Σ (ĝ_i − s_i)²
```

That is the whole machine. One input gets split into a visible part and a hidden part, each half goes through its own encoder, a predictor guesses what the hidden half's representation should be, and a loss measures how far the guess landed from the truth. Three boxes, one number out. The `╳` on the right branch is the one piece that looks strange, and we will earn it before the end.

This is the spine of the course. M1 made the bet — predict the *representation* of the hidden part, not its pixels — and M2 built the two tools the bet needs: an encoder, which turns an input into a **representation** (a vector), and **distance**, the number that says how far apart two representations sit. The diagram above is what you get when you wire those two tools into a learning system. Nothing here is new machinery; it is M2's pieces, arranged.

## The three boxes

The architecture has exactly three trainable boxes. Each is an encoder or a predictor — a function that takes one input and returns one output — and each has a single job.

**The context encoder, `$f_c$`.** It reads the **context**: the visible part of the input, the part the system is allowed to see. Out comes a representation of that visible part — the *context representation*. This is the same kind of object M2 built: a fixed-length list of numbers.

**The target encoder, `$f_t$`.** It reads the **target**: the hidden part, the part the system must predict. Out comes the **target representation**, which we write `$s$`. This is the answer key — the vector the system is trying to match. Crucially, `$f_t$` gets to look at the hidden part directly. The rest of the system does not; it only ever sees the context.

**The predictor, `$g$`.** It reads the context representation that `$f_c$` produced and returns its best guess at what the target representation should be: the **predicted representation**, written `$\hat{g}$`. The predictor is the one box doing the actual predicting — bridging from "here is what I can see" to "here is what I think is hidden."

So the flow has a definite shape. The context goes `$f_c$` then `$g$` and lands as `$\hat{g}$`, the guess. The target goes `$f_t$` and lands as `$s$`, the truth. Two paths, two vectors, and then a single comparison.

One thing the predictor does *not* produce: a picture. `$\hat{g}$` is a vector — a list of numbers, exactly the type M2 defined — and the system never turns it back into pixels. There is no decoder anywhere in this diagram. The guess and the answer are both points in representation space, and the only thing that ever happens to them is that we measure the distance between them.

## The loss

The two paths meet at the loss. We have a guess, `$\hat{g}$`, and an answer, `$s$`, both vectors of the same length. We already know how to say how far apart two vectors are — that was M2's whole job. Apply it.

## Definition (JEPA loss)

The **loss** `$L$` is the squared distance between the predicted representation `$\hat{g}$` and the target representation `$s$`:

$$
L = \sum_i (\hat{g}_i - s_i)^2.
$$

Here `$\hat{g}_i$` is the `$i$`-th number in the predicted representation, `$s_i$` is the `$i$`-th number in the target representation, and the sum runs over every position in the vector.

Read it back against the picture. `$\hat{g}_i - s_i$` is, position by position, how far the guess sits from the answer; squaring makes every gap positive and punishes a large miss harder than a small one; summing collects all the positions into one number. That number *is* the squared distance from M2 — the same formula, now scoring a prediction. A small `$L$` means the guess landed close to the answer; a large `$L$` means it missed. Training pushes `$L$` down.

In code, one forward pass and its loss read like this:

```python
ctx  = f_c(context)        # context representation
tgt  = stop_grad(f_t(target))   # target representation s — the answer key
pred = g(ctx)             # predicted representation ĝ
loss = sum((pred - tgt)**2)     # L = Σ (ĝ_i − s_i)²
```

Four lines, and they are the four arrows in the diagram. Line one runs the context through `$f_c$`. Line three runs the result through `$g$` to get the guess. Line two runs the target through `$f_t$` to get the answer — wrapped in `stop_grad`, which we are about to unpack. Line four is the loss.

### The stop-gradient

`stop_grad` is the `╳` on the diagram. Here is what it controls.

A learning system improves by computing the loss, then nudging the boxes that produced it so the loss would have come out lower — adjusting each box's internal numbers in the direction that helps. That backward nudge is the *gradient*. The stop-gradient is a wall on the target branch: gradients flow back through `$f_c$` and `$g$` and adjust them, but they hit the wall at `$f_t$` and stop. So training updates the context encoder and the predictor, and never the target encoder directly.

Why cut off `$f_t$` from training? Because `$f_t$` produces the answer key, and you cannot let the system improve its score by quietly editing the answer key. If `$f_t$` were free to adjust, the cheapest way to drive the loss down would be to make `$\hat{g}$` and `$s$` agree on *anything at all* — and there is a disastrously easy way to do that, which is the entire subject of M5. For now, hold one line: the stop-gradient freezes the answer key against the gradient, so the only path to a lower loss is a better guess. (*How `$f_t$` does get updated — because it is not frozen forever — is M5's job.*)

## Trace one input

Numbers make this concrete. Reuse M2's two vectors. Suppose the context flows through `$f_c$` and `$g$` and the predictor's guess comes out as

$$
\hat{g} = [\,0.3,\ 0.8,\ 0.2,\ 0.6\,],
$$

while the target flows through `$f_t$` and the answer key comes out as

$$
s = [\,0.2,\ 0.9,\ 0.1,\ 0.7\,].
$$

Apply the loss position by position:

$$
\begin{aligned}
L &= (0.3 - 0.2)^2 + (0.8 - 0.9)^2 + (0.2 - 0.1)^2 + (0.6 - 0.7)^2 \\
  &= (0.1)^2 + (-0.1)^2 + (0.1)^2 + (-0.1)^2 \\
  &= 0.01 + 0.01 + 0.01 + 0.01 \\
  &= 0.04.
\end{aligned}
$$

The loss for this input is `$0.04$` — small, because the guess sat close to the answer in every position. That is exactly the distance M2 computed between these same two vectors, and it is no accident: the loss *is* that distance, now reporting on a prediction instead of on two arbitrary inputs. Training would log this `$0.04$`, push it lower by adjusting `$f_c$` and `$g$`, and leave `$f_t$` alone.

## Check yourself

Both encoders and the predictor produce outputs. After one training step, which boxes have changed, and which has not?

<details><summary>Show answer</summary>

The context encoder `$f_c$` and the predictor `$g$` change — gradients flow back through them. The target encoder `$f_t$` does not change directly: the stop-gradient blocks the gradient on the target branch. (It does get updated, but by a separate rule covered in M5, not by this step's gradient.)

</details>

A guess comes out as `$\hat{g} = [1,\ 0,\ 0,\ 1]$` and the answer is `$s = [1,\ 1,\ 0,\ 1]$`. What is the loss?

<details><summary>Show answer</summary>

`$L = (1-1)^2 + (0-1)^2 + (0-0)^2 + (1-1)^2 = 0 + 1 + 0 + 0 = 1$`. Only the second position missed, and it missed by 1.

</details>

## Exercises

**1.** Name the three boxes and, in one phrase each, state what each one reads and what it outputs.

<details><summary>Show solution</summary>

- **Context encoder `$f_c$`** — reads the context (visible part); outputs the context representation.
- **Target encoder `$f_t$`** — reads the target (hidden part); outputs the target representation `$s$`, the answer key.
- **Predictor `$g$`** — reads the context representation; outputs the predicted representation `$\hat{g}$`, the guess.

</details>

**2.** Compute the loss for `$\hat{g} = [0.5,\ 0.5,\ 0.5]$` and `$s = [0.5,\ 0.4,\ 0.7]$`.

<details><summary>Show solution</summary>

$$
L = (0.5-0.5)^2 + (0.5-0.4)^2 + (0.5-0.7)^2 = 0 + 0.01 + 0.04 = 0.05.
$$

The first position is exact; the third miss (off by `$0.2$`) dominates because squaring weights it `$0.04$` against the second's `$0.01$`.

</details>

**3.** A reader pictures the predictor's output as a slightly blurry version of the hidden image — a small picture the system draws. Explain why that picture is wrong.

<details><summary>Show solution</summary>

The predictor outputs `$\hat{g}$`, a **vector** — a fixed-length list of numbers, the same kind of object M2's encoder produced. It is a point in representation space, not an image. Nothing in the architecture turns it back into pixels: there is no decoder. The system is graded by the distance between `$\hat{g}$` and the target representation `$s$`, never by comparing pixels. "A blurry image" imports a decoder that JEPA does not have.

</details>

**4.** Suppose the stop-gradient were removed, so training could also adjust `$f_t$`. Which vector in the loss `$\sum_i (\hat{g}_i - s_i)^2$` would now be adjustable that previously was fixed?

<details><summary>Show solution</summary>

The target representation `$s$`, which `$f_t$` produces. Without the stop-gradient, training could lower the loss by moving the answer key `$s$` toward the guess `$\hat{g}$`, instead of only moving the guess toward the answer. That this opens a cheap, useless way to win is M5's subject; here the point is just to see which vector the wall protects.

</details>

**5.** In the pseudocode, `pred` and `tgt` come from different lines. Trace each back to the input it started from.

<details><summary>Show solution</summary>

`pred = g(ctx)` and `ctx = f_c(context)`, so `pred` (`$\hat{g}$`) traces back to the **context** — the visible part — through `$f_c$` then `$g$`. `tgt = stop_grad(f_t(target))`, so `tgt` (`$s$`) traces back to the **target** — the hidden part — through `$f_t$` alone. Two inputs, two paths, meeting only at the loss.

</details>

## Recap

A JEPA is three boxes and one number. The context encoder `$f_c$` turns the visible part into a representation; the predictor `$g$` turns that into a guess `$\hat{g}$`; the target encoder `$f_t$` turns the hidden part into the answer key `$s$`. The loss `$L = \sum_i (\hat{g}_i - s_i)^2$` is M2's distance, now scoring how close the guess landed — `$0.04$` on our traced input. The stop-gradient freezes the answer key against training, so `$f_c$` and `$g$` learn while `$f_t$` is left alone. That freeze is also the door to JEPA's most dangerous failure, and to the fix that defines the architecture — which is where M5 goes next.
