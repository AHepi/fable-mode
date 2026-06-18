---
title: The JEPA Architecture
course: jepa
order: 3
summary: Three boxes — context encoder, target encoder, predictor — and a loss that measures distance in representation space, with a stop-gradient on the target.
estimatedMinutes: 22
objectives:
  - Name the three boxes of a JEPA and state each one's job.
  - State the loss as a squared distance between the predicted and target representations.
  - Trace one input through context encoder, predictor, and target encoder to a loss value.
  - Explain the stop-gradient: which boxes the training signal updates and which it never touches.
prerequisites:
  - representations-and-distance
---

Here is the whole machine on one page.

```text
                                            ┌────────────────────┐
            context  ─────────────────────▶ │  context encoder   │ ──┐
        (the visible part)                  │        f_c         │   │  context
                                            └────────────────────┘   │  representation
                                                                     ▼
                                                          ┌────────────────────┐
                                                          │     predictor      │
                                                          │         g          │
                                                          └────────────────────┘
                                                                     │
                                                                     ▼  predicted
                                                                     ĝ  representation
                                            ┌────────────────────┐   │
            target   ─────────────────────▶ │   target encoder   │   ▼
        (the hidden part)                   │    f_t   ⊘ stop-   │ ─▶ ( L )  loss = distance(ĝ, s)
                                            │       gradient     │   ▲
                                            └────────────────────┘   │
                                                                  s  │  target
                                                                     │  representation
                                            ⊘ = gradient blocked: training updates f_c and g, never f_t.
```

Three boxes, two inputs, one number. The input — an image, say — is split into a **context** (the part the system gets to see) and a **target** (the part it has to predict). Each input goes into an encoder; the two encoders produce two representations; the predictor turns one into a guess at the other; and the loss measures how far the guess landed from the truth. That distance is the entire training signal. Every other part of this course either feeds this diagram or builds on it.

Module 1 made the bet. Module 2 gave us the two tools the diagram runs on: an **encoder** turns an input into a **representation** (a vector), and **distance** measures how far apart two representations sit. This module spends both. Nothing here is a blurry reconstructed image — the predictor's output is a vector, and the loss compares it to another vector.

## The three jobs

The diagram has three boxes. Each does exactly one job.

The **context encoder**, written $f_c$, reads the **context** — the visible part — and produces the **context representation**, a vector summarizing what the system can see.

The **target encoder**, written $f_t$, reads the **target** — the hidden part — and produces the **target representation**, written $s$. This is the answer key: the thing the system is trying to predict, encoded as a vector. The target encoder is the only box that ever sees the hidden part.

The **predictor**, written $g$, never sees the target at all. It takes the context representation and produces the **predicted representation**, written $\hat g$ — its guess at what the target encoder will say. The predictor's job is to bridge the gap: from "here is what's visible" to "here is what I expect the hidden part to look like, in representation space."

So the flow is: context $\to f_c \to$ context representation $\to g \to \hat g$, the guess. In parallel: target $\to f_t \to s$, the answer. Then compare $\hat g$ against $s$.

There is no decoder. The predictor does not draw a picture of the hidden part; it produces a vector and stops. The comparison happens between two vectors, in representation space, never on pixels.

## The loss, and the asymmetry that trains it

The loss reuses Module 2's distance, applied to these two vectors.

## Definition (JEPA loss)

Let $\hat g = (\hat g_1, \dots, \hat g_d)$ be the **predicted representation** $g(f_c(\text{context}))$, and let $s = (s_1, \dots, s_d)$ be the **target representation** $f_t(\text{target})$. The **loss** is the squared distance between them:

$$
L = \sum_i (\hat g_i - s_i)^2.
$$

Reading the symbols off the diagram: $\hat g$ comes out of the predictor $g$, top branch; $s$ comes out of the target encoder $f_t$, bottom branch; and $L$ is the single number where the two branches meet. The sum runs over the $d$ entries of the vectors, one squared difference per entry — exactly the distance from Module 2, now between a guess and an answer. Small $L$ means the guess landed near the truth; that is what training drives down.

Now the asymmetry. Training adjusts the boxes to make $L$ smaller, but it does **not** adjust all three the same way. The target side carries a **stop-gradient**: the training signal flows back through the predictor $g$ and the context encoder $f_c$ and improves them, but it is **blocked** at the target encoder $f_t$. The answer key holds still while the guesser learns to hit it. The system improves by changing how it reads the context and how it predicts — never by rewriting the answer to be easier to guess.

Why the target encoder is kept frozen here, and how it gets updated at all without gradients, is the whole subject of Module 5 (collapse, and the asymmetric fix). For now, hold one fact: gradients update $f_c$ and $g$; they never touch $f_t$ directly.

In pseudocode, one forward pass and one loss:

```python
ctx  = f_c(context)              # context encoder: visible part -> context representation
tgt  = stop_grad(f_t(target))    # target encoder: hidden part -> target representation; gradient blocked here
pred = g(ctx)                    # predictor: guess the target representation
loss = sum((pred - tgt)**2)      # distance in representation space (Module 2's distance)
```

The `stop_grad` on line 2 is the stop-gradient drawn as $\oslash$ on the diagram. It says: use this vector as the target, but do not let the training signal change the box that produced it.

## Worked example: one input, end to end

Take a single input. Feed its context through $f_c$ and the predictor; feed its target through $f_t$. Suppose the boxes produce these two 4-entry vectors — the same numbers we used in Module 2:

$$
\hat g = (0.3,\ 0.8,\ 0.2,\ 0.6), \qquad s = (0.2,\ 0.9,\ 0.1,\ 0.7).
$$

The predicted representation $\hat g$ is the predictor's guess; the target representation $s$ is the answer key from $f_t$. The loss is their squared distance, entry by entry:

$$
\begin{aligned}
L &= (0.3-0.2)^2 + (0.8-0.9)^2 + (0.2-0.1)^2 + (0.6-0.7)^2 \\
  &= (0.1)^2 + (-0.1)^2 + (0.1)^2 + (-0.1)^2 \\
  &= 0.01 + 0.01 + 0.01 + 0.01 \\
  &= 0.04.
\end{aligned}
$$

So $L = 0.04$ — a small number, because the guess sits close to the answer. That single number is what training pushes down, and it does so by improving $f_c$ and $g$. The vector $s$ that defined "close" came from $f_t$, which the stop-gradient holds fixed through this step.

## Check yourself

Which of the three boxes ever sees the hidden part (the target)?

<details><summary>Show answer</summary>

Only the **target encoder** $f_t$. It reads the target and produces $s$, the answer key. The context encoder $f_c$ sees only the context; the predictor $g$ sees only the context representation and must guess the rest. That gap — predicting the hidden part without seeing it — is the whole point.

</details>

In the worked example, the loss came out to $0.04$. Which boxes does the training signal adjust to drive that number lower, and which does it leave alone?

<details><summary>Show answer</summary>

It adjusts the **context encoder** $f_c$ and the **predictor** $g$. It leaves the **target encoder** $f_t$ alone — that is the stop-gradient. The system gets better at reading the context and predicting, not at moving the answer.

</details>

## Exercises

**1. (Mechanical)** A JEPA produces predicted representation $\hat g = (0.5, 0.4, 0.9)$ and target representation $s = (0.5, 0.2, 0.9)$. Compute the loss $L$.

<details><summary>Show solution</summary>

Apply $L = \sum_i (\hat g_i - s_i)^2$ entry by entry:

$$
L = (0.5-0.5)^2 + (0.4-0.2)^2 + (0.9-0.9)^2 = 0 + 0.04 + 0 = 0.04.
$$

Only the middle entry differs (by $0.2$), and $0.2^2 = 0.04$. The matching entries contribute nothing.

</details>

**2. (Mechanical)** Trace the path of the **context** through the diagram. Which box does it enter first, what comes out, where does that go next, and what is the final output of that path?

<details><summary>Show solution</summary>

The context enters the **context encoder** $f_c$, which outputs the **context representation**. That goes into the **predictor** $g$, which outputs the **predicted representation** $\hat g$. So the path is context $\to f_c \to$ context representation $\to g \to \hat g$. The context never touches the target encoder.

</details>

**3. (Conceptual)** A classmate says: "The predictor output $\hat g$ is a blurry image of the hidden part — like a low-resolution sketch of the missing pixels." Correct them.

<details><summary>Show solution</summary>

It is not an image at all. $\hat g$ is a **representation** — a vector, a fixed-length list of numbers — and it is compared against another vector, $s$, by distance in representation space. There is no decoder anywhere in the architecture, so no pixels are ever produced and nothing is ever drawn. The system is graded on how close two vectors are, not on how a reconstructed picture looks. "Blurry image" imports the reconstruction picture this architecture was built to avoid.

</details>

**4. (Conceptual)** During training, why can't the system drive the loss to zero by changing the target encoder $f_t$ to make $s$ easier to predict?

<details><summary>Show solution</summary>

Because the **stop-gradient** blocks the training signal at the target side. Gradients flow back through $g$ and $f_c$ and update them; they never reach $f_t$. So "rewrite the answer key to be easy" is not a move the training step can make — the only way to lower the loss is to read the context and predict better. (Why this asymmetry is necessary, and how $f_t$ updates at all, is Module 5.)

</details>

**5. (Stretch)** Suppose someone removes the target encoder entirely and feeds the raw target pixels in as $s$, so the loss compares the predicted representation $\hat g$ against actual pixel values. Name one thing that breaks.

<details><summary>Show solution</summary>

Several answers are defensible; here is the core one. The loss is supposed to be a **distance in representation space** — both arguments must be representations of the same kind, produced the same way, so the numbers are comparable. Feed raw pixels in as $s$ and you are no longer comparing two representations; you are comparing a representation against pixels, an apples-to-oranges distance. You have also reintroduced exactly the thing JEPA avoids: grading the system against raw detail (the reconstruction target of Module 1) instead of against a representation. The target encoder is what puts both sides in the same space.

</details>

## Recap

A JEPA is three boxes: the **context encoder** $f_c$ summarizes the visible part, the **target encoder** $f_t$ encodes the hidden part into the answer key $s$, and the **predictor** $g$ turns the context representation into a guess $\hat g$. The loss $L = \sum_i (\hat g_i - s_i)^2$ is the squared distance between guess and answer, and a **stop-gradient** on the target side means training improves $f_c$ and $g$ while $f_t$ holds still. This is the spine the rest of the course leans on. Next we ask *why* predicting a representation — rather than pixels — is the winning move.
