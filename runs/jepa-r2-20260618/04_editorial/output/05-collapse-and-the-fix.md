---
title: Collapse, and the Asymmetric Fix
course: jepa
order: 5
summary: The trivial solution where every box outputs the same vector drives the loss to zero and teaches nothing — and the asymmetric EMA target update that closes the door on it.
estimatedMinutes: 22
objectives:
  - Show numerically why the all-same-vector solution drives the loss to 0 while carrying no information
  - Explain the stop-gradient and what it blocks on the target side
  - State the EMA target update and compute one step by hand
  - Explain why the asymmetry between the two encoders removes the collapse cheat
prerequisites: [the-jepa-architecture]
---

There is a way to make the loss zero that learns nothing at all.

Recall the loss from the three-box architecture: the **distance** between the predicted representation $\hat{g}$ and the target representation $s$, written

$$
L = \sum_i (\hat{g}_i - s_i)^2.
$$

A small loss means the prediction landed near the answer. The system is rewarded for closing that distance. So picture the laziest possible way to close it. Suppose the predictor $g$ learns to ignore its input and always emit the vector $[0,0,0,0]$. Suppose the target encoder $f_t$ does the same — every input, hidden or not, maps to $[0,0,0,0]$. Then

$$
\hat{g} = [0,0,0,0], \qquad s = [0,0,0,0],
$$

and the loss is

$$
L = (0-0)^2 + (0-0)^2 + (0-0)^2 + (0-0)^2 = 0.
$$

Zero. The lowest loss reachable. And the system has learned nothing — it has discovered that if you refuse to say anything different about any input, you are never wrong. This failure has a name.

## Definition (Collapse)

**Collapse** is the trivial solution in which the encoders and predictor all output the same constant vector regardless of input. Every distance is zero, so the loss is zero, but the representations carry **no information** — different inputs are no longer distinguishable.

The trap is that the loss function loves collapse. It is the global minimum. Train naively and the system will slide straight into it, because it is the path of least resistance: easier to make every representation identical than to make every representation *correct*. Most people's first guess about collapse is backwards. They assume a degenerate answer would score badly — a high loss the optimizer flees. The opposite is true. Collapse scores perfectly. That is exactly why it is dangerous, and exactly why JEPA needs a structural defence rather than a better loss.

## The stop-gradient, named again

M3 named the **stop-gradient** on the target side and moved on. Here is the question it left open: why block gradients there at all, and what does blocking buy us?

Start with what training does. Training nudges the weights of $f_c$ and $g$ in whatever direction lowers $L$. The optimizer is relentless and amoral — it does not care *how* the loss drops, only that it drops. Now suppose gradients also flowed into $f_t$. The optimizer would notice the single cheapest move available: drag the target representation $s$ toward whatever the predictor is currently saying. Why work to predict the target when you can move the target to meet the prediction? With both sides free to move, they meet in the middle — at the constant vector, at zero, at collapse.

The **stop-gradient** forbids exactly this. It blocks gradient from flowing into the target encoder, so $f_t$ cannot be edited to make the loss easier. The target becomes a fixed answer for the duration of the step — something the predictor must reach, not something that reaches back. The optimizer is left with only one way to lower the loss: actually predict better.

That raises an obvious problem. If gradients never touch the target encoder, how does $f_t$ ever improve? An encoder frozen at its random starting weights produces garbage targets forever, and chasing garbage teaches nothing useful either. The target encoder has to learn. It just can't learn the way the rest of the system does.

## The EMA fix

JEPA updates the target encoder by copying — slowly — from the context encoder. Call the target encoder's weights $\theta_t$ and the context encoder's weights $\theta_c$. After each training step, $\theta_t$ is set to a weighted average of its old self and the current $\theta_c$:

$$
\theta_t \leftarrow \tau\, \theta_t + (1 - \tau)\, \theta_c.
$$

This is an **exponential moving average** (EMA): the target weights trail the context weights, blending in a little of the context encoder at every step. The rate $\tau$ (the Greek letter *tau*) sits close to 1 — a typical value is $\tau = 0.99$, or higher. The arrow means *assign*: compute the right side, then store it as the new $\theta_t$.

Read the equation as a tug between two pulls. The term $\tau\,\theta_t$ keeps most of the old target weights — with $\tau = 0.99$, ninety-nine percent of it. The term $(1-\tau)\,\theta_c$ mixes in a thin slice of the context encoder — one percent. So the target encoder inherits the context encoder's progress, but late and diluted. It always trails. It is a slow, smoothed echo of the encoder that *is* being trained.

### A worked step

Take a single weight to see the arithmetic. Suppose one weight inside the target encoder currently holds the value $0.50$, and the matching weight inside the context encoder holds $0.70$ — the context encoder, being the one under training, has already moved ahead. With $\tau = 0.99$:

$$
\theta_t \leftarrow 0.99 \cdot 0.50 + 0.01 \cdot 0.70 = 0.495 + 0.007 = 0.502.
$$

The target weight inches from $0.50$ to $0.502$. It moved toward the context encoder's $0.70$, but covered only one-hundredth of the gap in this step. Repeat that across thousands of steps and the target encoder tracks the context encoder faithfully — always a step behind, never identical.

In code, the update runs once per training step, weight by weight, with no gradient involved:

```python
for p_t, p_c in zip(f_t.params, f_c.params):
    p_t = tau * p_t + (1 - tau) * p_c   # f_t is never trained by gradient
```

That comment is the whole point. The target encoder has exactly one way to change — this copy — and it is not the way the loss flows.

## Check yourself

A teammate proposes setting $\tau = 0$ to make the target encoder learn faster. With $\tau = 0$, what does the update do, and why is it a bad idea?

<details><summary>Show answer</summary>

With $\tau = 0$ the update becomes $\theta_t \leftarrow 0 \cdot \theta_t + 1 \cdot \theta_c = \theta_c$ — the target encoder is overwritten with an exact copy of the context encoder at every step. The trailing is gone; the two encoders are now identical and move together. That destroys the asymmetry, and a symmetric pair is free to drift to the constant vector together. The whole defence rests on the target *lagging*, which is why $\tau$ is kept near 1.

</details>

## Why the asymmetry closes the door

Put the two pieces together, because neither works alone.

The **stop-gradient** means the optimizer cannot edit the target to make the loss easier — it cannot pull $s$ toward $\hat{g}$. The **EMA** means the target encoder still improves, but only by trailing the context encoder, never by chasing the loss. The result is an asymmetry: one encoder is pushed by gradients toward predicting well, the other is dragged slowly along behind it, deaf to the loss.

That asymmetry is what makes collapse unreachable in practice. Collapse needs both sides to agree to say nothing — to slide to the constant vector together. But the target encoder cannot move toward the loss; it can only echo where the context encoder already was. So at each step the predictor faces a target that reflects the context encoder's *recent past*, a moving and informative answer key, not a partner willing to meet it at zero. To drive every target to the same constant, the context encoder would have to want to throw away all its information — and the gradient, busy rewarding good predictions across many different inputs, pushes the other way. The cheat is gone not because the loss punishes it, but because the architecture removes the move that reaches it.

## Check yourself

Why doesn't the stop-gradient alone prevent collapse — why is the EMA needed too?

<details><summary>Show answer</summary>

The stop-gradient freezes the target *within a step* so the predictor can't drag it. But the target encoder still has to improve over time, or it produces useless targets forever. The EMA is how it improves — by trailing the context encoder rather than by following the loss. Without the EMA you would either freeze the target at random garbage (nothing to learn from) or fall back to gradient-training it (collapse). The two pieces are a pair: stop-gradient blocks the cheat in the moment, EMA supplies honest improvement without reopening it.

</details>

## Exercises

**1.** Both sides of a training pair produce $\hat{g} = [2, 2, 2, 2]$ and $s = [2, 2, 2, 2]$. Compute the loss. Is this collapse?

<details><summary>Show solution</summary>

$$
L = (2-2)^2 + (2-2)^2 + (2-2)^2 + (2-2)^2 = 0.
$$

The loss is zero. And yes — this is collapse. Collapse is not specifically the *zero* vector; it is any **constant** vector emitted regardless of input. If every input maps to $[2,2,2,2]$, the representations are indistinguishable and carry no information, exactly as with $[0,0,0,0]$. The value of the constant is irrelevant; the sameness is the disease.

</details>

**2.** A target weight holds $0.40$; the matching context weight holds $0.60$. With $\tau = 0.99$, compute the new target weight.

<details><summary>Show solution</summary>

$$
\theta_t \leftarrow 0.99 \cdot 0.40 + 0.01 \cdot 0.60 = 0.396 + 0.006 = 0.402.
$$

The target weight moves from $0.40$ to $0.402$ — one percent of the way toward the context weight's $0.60$. Same shape as the worked example: a small step in the right direction.

</details>

**3.** "Collapse can't really happen, because a system that outputs the same thing for everything would obviously score a terrible loss." Diagnose the error in this reasoning.

<details><summary>Show solution</summary>

The reasoning has the sign backwards. The loss measures the *distance* between the predicted and target representations. When both sides emit the same constant vector, that distance is zero — the **best** possible loss, not the worst. Collapse is attractive to the optimizer precisely because it is a perfect score for zero work. This is why JEPA cannot rely on the loss alone to avoid it and instead builds in the stop-gradient plus EMA asymmetry.

</details>

**4.** Repeating the EMA update with a *fixed* context weight $\theta_c = 0.70$, $\tau = 0.99$, and starting target weight $0.50$, the target weight goes $0.50 \to 0.502 \to \dots$ over many steps. What value does it approach, and what does that tell you about the target encoder?

<details><summary>Show solution</summary>

It approaches $0.70$ — the fixed context value. Each step closes one percent of the remaining gap, so the target weight creeps toward $\theta_c$ and, in the limit of a *stationary* context, would reach it. In real training $\theta_c$ keeps moving, so the target never catches up; it tracks a moving context encoder at a lag. The takeaway: the target encoder is not a separate learner with its own goal — it is a slow, smoothed copy of the context encoder, which is exactly what makes it a stable answer key rather than a collaborator in collapse.

</details>

## Recap

Collapse is the trivial solution in which every box outputs the same constant vector: every distance is zero, the loss is a perfect zero, and the system has learned nothing — and the loss alone will never warn you, because it scores collapse as a win. JEPA defeats it with structure, not with a better loss. The stop-gradient freezes the target within each step so the optimizer cannot move the answer to meet the prediction, and the EMA update — $\theta_t \leftarrow \tau\,\theta_t + (1-\tau)\,\theta_c$, with $\tau$ near 1 — lets the target encoder improve only by trailing the context encoder, never by chasing the loss. That asymmetry removes the one move collapse depends on. With the recipe now complete and collapse-proof, M6 turns it loose on real data — images, then video.
