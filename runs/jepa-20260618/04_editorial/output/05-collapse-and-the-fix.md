---
title: "Collapse, and the Asymmetric Fix"
course: jepa
order: 5
summary: "The trivial solution that scores a perfect loss while learning nothing — and the stop-gradient plus EMA target encoder that puts it out of reach."
estimatedMinutes: 22
objectives:
  - Show numerically why the all-same-vector solution scores a loss of zero yet carries no information
  - "Explain the stop-gradient: why the target side is detached from the gradient"
  - State and compute one step of the EMA target update
  - Explain why the asymmetry removes collapse as a reachable solution
prerequisites:
  - the-jepa-architecture
---

There is a solution to JEPA's training problem that scores a perfect loss and teaches the system nothing. Make the context encoder output the vector $[0,0,0,0]$ no matter what it sees. Make the target encoder do the same. Make the predictor output $[0,0,0,0]$ too. Now the predicted representation and the target representation are identical for every input, so the distance between them is zero, and the loss can go no lower. The system has minimized exactly what we asked it to minimize. It has also thrown away every input, because all inputs now map to the same point.

This is **collapse**, and it is the central problem this module solves. An untouched JEPA does not learn the structure of its data and then, as a side effect, drive the loss down. It is handed a target — make $\hat{g}$ close to $s$ — and collapse is the cheapest way to hit it. Cheaper than learning anything. We have to make collapse unreachable, and the fix is an asymmetry between the two encoders.

## Collapse is a trap, not a high score

Recall the loss from M3: it is the squared distance between the predicted representation $\hat{g}$ and the target representation $s$,

$$
L = \sum_i (\hat{g}_i - s_i)^2.
$$

The distance is zero exactly when the two vectors agree component by component. So far that has been the goal — a small loss meant a good prediction. Collapse exploits the goal directly. Set both vectors to the constant:

$$
\hat{g} = [0,0,0,0], \qquad s = [0,0,0,0].
$$

Then $L = (0-0)^2 + (0-0)^2 + (0-0)^2 + (0-0)^2 = 0$.

The loss is perfect. Compare it against the honest prediction from M2, $\hat{g} = [0.3, 0.8, 0.2, 0.6]$ against $s = [0.2, 0.9, 0.1, 0.7]$, which scored $0.04$. Collapse beats it. A system that has genuinely learned to predict one representation from another scores *worse* than a system that has learned nothing, because the one that learned nothing drove the distance all the way to zero by making every representation the same.

That is what makes collapse a trap and not a high score. The number on the loss says "perfect"; the representations say "empty." A representation is supposed to tell two different inputs apart — near for similar, far for different, the whole point of representation space from M2. A constant representation tells nothing apart. Every input lands on the same dot. The misconception worth killing here: that collapse can't happen because the loss would surely be high if the system learned nothing. Backwards. Learning nothing is precisely how the loss reaches zero.

<details><summary>Why does the collapsed solution score a *lower* loss than a real prediction?</summary>

Because the loss only measures the distance between $\hat{g}$ and $s$ — it never checks whether those vectors carry information. The honest prediction leaves a small gap (distance $0.04$) because real representations differ. The collapsed solution leaves no gap at all, by making both vectors the same constant. Zero beats $0.04$. The loss rewards agreement, and the easiest way to agree is to say nothing.

</details>

## The stop-gradient, in full

M3 named a **stop-gradient** on the target side and deferred the reason. Here it is.

When JEPA trains, it computes the loss and then adjusts the boxes to make the loss smaller. The adjustment flows backward through the connections that produced the loss — this is the gradient, the direction each weight should move to shrink $L$. Left unrestricted, that signal reaches *both* sides: it would nudge the context encoder $f_c$ and the predictor $g$ to make $\hat{g}$ closer to $s$, and it would nudge the target encoder $f_t$ to make $s$ closer to $\hat{g}$. Both vectors are free to move toward each other.

Two vectors free to move toward each other have an obvious meeting place: the same point, anywhere. The fastest way for the gradient to shrink the gap is to drag both sides to a shared constant. That is collapse, reached directly, by the optimizer doing exactly its job.

The **stop-gradient** cuts that off. It detaches the target side from the gradient: the loss still depends on $s$, but no adjustment is allowed to flow back into $f_t$ to change how $s$ is produced. Only $f_c$ and $g$ receive the gradient. The target representation $s$ becomes a fixed goalpost for this step — the predictor must move toward it, and it cannot move toward the predictor. One side chases; the other does not run.

The stop-gradient alone forbids the gradient from training $f_t$. But it leaves a question open: if the gradient never touches the target encoder, how does $f_t$ get its weights at all? It cannot be frozen at its random starting point — random representations are useless to predict. This is what the EMA update answers.

## The EMA fix: a slowly trailing target

The target encoder is updated, but not by the gradient. Its weights are an **exponential moving average** (EMA) of the context encoder's weights. After each gradient step has updated $f_c$, we pull the target encoder's weights a small fraction of the way toward the context encoder's:

$$
\theta_t \leftarrow \tau\,\theta_t + (1-\tau)\,\theta_c,
$$

where $\theta_t$ is the target encoder's weights, $\theta_c$ is the context encoder's weights, and $\tau$ (Greek *tau*) is a number close to $1$ — say $0.99$, often higher. The new target weight is a weighted average: keep almost all of the old target, mix in a thin slice of the current context. The closer $\tau$ is to $1$, the slower the target moves.

A worked number makes the slowness concrete. Take a single weight. Suppose $\tau = 0.99$, the target's current value of that weight is $0.50$, and the context's value of the same weight is $0.70$. The update gives

$$
\theta_t \leftarrow 0.99 \cdot 0.50 + 0.01 \cdot 0.70 = 0.495 + 0.007 = 0.502.
$$

The target moved from $0.50$ to $0.502$. The context was at $0.70$, a full $0.20$ away, and after one step the target closed two-thousandths of the gap. It trails the context, slowly, by design.

In code, the update runs once per gradient step, after $f_c$ and $g$ have been adjusted:

```python
# after each gradient step that updated f_c and g:
for p_t, p_c in zip(f_t.params, f_c.params):
    p_t = tau * p_t + (1 - tau) * p_c   # f_t is never trained by gradient
```

Every weight of the target encoder is pulled a thin fraction toward the matching weight of the context encoder. No loss appears in this loop. No gradient. The target encoder is never trained to minimize anything — it only follows.

<details><summary>Why is the target encoder NOT trained by gradient?</summary>

Because a target the gradient can edit is a target the gradient can collapse. If the loss could adjust $f_t$, the cheapest way to shrink the loss would be to move $s$ toward $\hat{g}$ — and with both $\hat{g}$ and $s$ free to move, the optimizer drags them to a shared constant. The stop-gradient forbids that. The target encoder instead gets its weights by trailing the context encoder through the EMA, so it is always a slightly-older version of $f_c$ — useful, changing, but never under the gradient's control.

</details>

## Why the asymmetry works

Put the two halves together. The stop-gradient makes the target a goalpost the predictor must chase but cannot drag toward itself. The EMA makes that goalpost a slowly-moving, slightly-older copy of the context encoder, never the same as it and never frozen.

Collapse needed both sides free to rush to one point. The asymmetry takes that away. The predictor can only lower the loss by actually predicting the target representation $s$ from the context representation — there is no longer a shortcut where $s$ comes meet it halfway. And because $s$ comes from an encoder that is always a few steps behind $f_c$ rather than a constant, $\hat{g}$ is aiming at a target that keeps shifting as $f_c$ improves. A moving goalpost cannot be reached by going still. The system has to keep tracking real structure in the data to keep the distance small, which is exactly the work we wanted it to do.

Collapse is not patched after the fact. It is removed from the set of reachable solutions. The trivial all-same-vector point still scores zero on paper, but the optimizer can no longer walk there, because the only side it controls is chasing a target it cannot flatten.

## Exercises

**1. Compute a distance for a near-collapsed pair.** A partly-collapsed system outputs $\hat{g} = [0.1, 0, 0.1, 0]$ and $s = [0, 0, 0, 0]$. What is the loss? What does the value tell you?

<details><summary>Show solution</summary>

$L = (0.1-0)^2 + (0-0)^2 + (0.1-0)^2 + (0-0)^2 = 0.01 + 0 + 0.01 + 0 = 0.02$.

The loss is small but not zero, and it is small for the wrong reason: $s$ has collapsed to the constant $[0,0,0,0]$, so the predictor only has to get *near* a fixed dot to score well. A small loss here signals a degenerate target, not a good prediction. This is why a low loss alone never certifies that JEPA learned anything — the fix has to make the constant target unreachable in the first place.

</details>

**2. One EMA step.** With $\tau = 0.99$, a target weight currently at $0.20$, and the matching context weight at $0.40$, compute the updated target weight.

<details><summary>Show solution</summary>

$\theta_t \leftarrow 0.99 \cdot 0.20 + 0.01 \cdot 0.40 = 0.198 + 0.004 = 0.202$.

The weight moved from $0.20$ to $0.202$ — two-thousandths of the way toward the context's $0.40$. The target trails slowly, which is the point: a fast-moving target would be nearly the same as the context encoder, and the asymmetry that blocks collapse would weaken.

</details>

**3. The collapse misconception.** A learner says: "Collapse can't be a real risk — if the system learned nothing, its loss would be enormous." What is wrong with this, in one sentence, and what is the actual danger?

<details><summary>Show solution</summary>

It is backwards: collapse drives the loss to *zero*, not up, because making every representation the same constant makes $\hat{g}$ and $s$ identical for every input, and identical vectors have distance zero. The danger is exactly that the loss looks perfect while the representations carry no information — which is why collapse has to be designed out, not detected after the fact.

</details>

**4. Why not just train both encoders normally?** Suppose we dropped the stop-gradient and let the gradient update $f_t$ along with $f_c$ and $g$. What would the optimizer find?

<details><summary>Show solution</summary>

With both $\hat{g}$ and $s$ free to move, the gradient's fastest path to a smaller loss is to move them toward each other — and the place they can always meet is a shared constant vector, the same for every input. The optimizer would discover collapse, because nothing forbids it. The stop-gradient exists precisely to deny the gradient that shortcut, leaving the predictor with no choice but to learn the data.

</details>

**5. The effect of $\tau$.** If we set $\tau = 0$, the update becomes $\theta_t \leftarrow \theta_c$. What does the target encoder become, and why is that a problem?

<details><summary>Show solution</summary>

With $\tau = 0$, the target encoder is copied to equal the context encoder at every step — the two are identical, not separated by a trailing average. The asymmetry that the fix depends on is gone: the target is no longer a slightly-older, distinct goalpost, so the protection against collapse weakens. Keeping $\tau$ near $1$ is what makes $f_t$ a *slow follower* rather than a copy, and that lag is the load-bearing part of the design.

</details>

## Recap

Collapse is the solution where every box outputs the same constant vector: the loss reaches zero, and the representations carry nothing — a perfect score that learned nothing. JEPA removes it by making the two encoders asymmetric. The stop-gradient detaches the target side, so the gradient can adjust the context encoder and predictor but never drag the target to meet them. The target encoder instead trails the context encoder by an exponential moving average, $\theta_t \leftarrow \tau\,\theta_t + (1-\tau)\,\theta_c$ with $\tau$ near $1$, making it a slowly-moving goalpost the predictor must genuinely track. The constant solution still scores zero on paper; the optimizer can no longer reach it.
