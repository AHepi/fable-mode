---
title: Where the Metaphor Breaks
course: attractors-in-llms
order: 11
summary: "An LLM's generation really is an iterated map, but \"attractor\" is a borrowed word: the system is stochastic, discrete, and non-stationary, and almost nothing is proven, except in Hopfield networks, where attractors are mathematically real."
estimatedMinutes: 22
objectives:
  - State the four ways the dynamical-systems metaphor breaks for LLMs.
  - Contrast LLM attractors with Hopfield networks, where convergence is guaranteed.
  - Grade a given "attractor" claim as measured, empirical, or metaphorical, and name what is still open.
prerequisites:
  - 01-what-is-an-attractor
  - 02-generation-as-a-loop
  - 10-detecting-an-attractor
---

<!--
Section shape (see _config/course-design.md). PROSE uses literary-maverick.
FORMAL blocks follow _config/math-style.md and are NOT run through the prose rewrite loop.
-->

Module 2 made a bold claim and the whole course has been spending it ever since: generation is an iterated map, and the failures we catalog are attractors that map settles into. Ten modules later, that sentence has earned a hard look. Half of it is exactly true and the other half is a loan we have not fully repaid, and a course that taught attractors as confidently as this one did owes the reader, at the end, an honest accounting of which half is which.

Here is the split, stated plainly so the rest of the module can defend it. The iterated-map *structure* is real. Generation genuinely is $s_{t+1} = f(s_t)$: a state, the context so far; a rule, the model plus its sampler; the output fed back as the next input. Nothing about the loop is metaphorical, and the synonym cycle from module 2, the paraphrase 2-cycle, the refusal basin, the sycophancy rut, these are real trajectories of a real map. The word **attractor**, laid over that map, is borrowed. In the dynamical systems where the word was minted, $f$ is deterministic, the state space is small and smooth, the rule never changes, and convergence to a basin is a theorem. An LLM violates all four of those, and where it violates them the word stops meaning quite what it meant in module 1. This module names the four breaks, sets them against the one system where attractors are not borrowed at all, and then grades the course's own claims by the discipline module 6 taught.

## Map and territory

There is an old line that the map is not the territory, and it is the right image for what we have been doing. Dynamical systems theory is a map. The space of stochastic, discrete, growing text that a language model generates is the territory. A good map is not a lie; it is a deliberate simplification that helps you navigate, and the dynamical-systems map has helped enormously, giving us "fixed point," "cycle," "basin," and "perturbation test" to name things that were a fog before. But a map fits its territory in some places and tears in others, and an honest cartographer marks the tears. The four breaks below are the tears.

## The four breaks

### 1. Stochastic, not deterministic

Module 1's attractors lived in deterministic maps. Feed a deterministic $f$ the same state and it returns the same next state, every time, so a trajectory is a single fixed path and "the attractor it reaches" is a well-defined point. A sampler breaks that. Above zero temperature it draws a *random* token from $P(\cdot \mid s_t)$, so the same context can step to many different next states. The map $f$ is a *random map*, and there is no longer one trajectory from a starting context; there is a spray of them.

"Attractor" survives this, but only after surgery. It can no longer mean a point that trajectories provably reach. It has to mean a *distribution* the process concentrates on: a region of text the spray of trajectories keeps returning to, even though no single trajectory is guaranteed to land anywhere in particular. That reinterpretation is reasonable, and it is what the paraphrasing paper's 2-cycle really is, a statistical concentration rather than a deterministic loop. But it is a reinterpretation. The clean module-1 picture of one path funneling to one point is already gone the moment you turn temperature above zero.

### 2. An enormous discrete state space

The logistic map lived on the interval from 0 to 1, a smooth continuum where you could differentiate $f$, check whether $|f'(x^\star)| < 1$, draw a phase portrait, and read stability straight off a graph. The LLM's state space is nothing like that. The state is a sequence of tokens, and the space of all contexts of length $L$ over a vocabulary $V$ is $V^L$: discrete, finite but astronomically large, with no coordinate axes to plot and no derivative to take. There is no $f'$, so there is no derivative test, and there is no phase portrait because there is no plane to draw it on.

Worse, the everyday notion of "nearby" stops working. In the logistic map, 0.51 is near 0.50 and the distance is just $|0.51 - 0.50|$. Two contexts have no such Euclidean distance, and the obvious surrogate, how many tokens they share, is useless: "the cat sat" and "the cat ran" differ by one token but mean different things, while "the meeting was productive" and "we had a useful session" share almost no tokens and mean nearly the same. To talk about a basin at all, "nearby" has to mean *semantically* nearby, which is a soft, model-dependent, approximate notion, not the crisp metric the theory assumed. Every stability statement about an LLM is built on that soft floor.

### 3. Non-stationary, because the context grows

This is the big one, the caveat that does the most damage to the analogy. An iterated map applies the *same* $f$ at every step. That is the entire premise of module 1: one fixed rule, applied over and over. An LLM does not satisfy it. Each step appends a token, so $s_{t+1}$ is longer than $s_t$, the state's dimension grows, and the model now attends over a different, larger context than it did the step before. The effective rule changes at every step. In the language of dynamical systems this is a *non-autonomous* or *non-stationary* system, and the textbook theory of attractors, basins, and convergence assumes a fixed $f$ from the first line.

This is not a technicality you can wave away. A great deal of attractor reasoning relies on the rule staying put, so that "where does this rule send you in the long run" is even a sensible question. When the rule itself drifts every step, the long-run question gets slipperier. Persona drift from module 6 is non-stationarity made visible: the system prompt does not lose influence because the model forgets it but because the *rule effectively changes* as the transcript grows around it, weighting recent tokens that the early instruction now competes against. The course used "attractor" anyway, because the concentration behavior is real and the word is the best handle we have, but the system underneath is one the classical theory does not directly cover.

### 4. No proved convergence

In module 1, when $f$ was a contraction, convergence was a *theorem*: every starting point provably funnels to the unique fixed point, no exceptions, with a proof you could write down. Nothing like that exists for an LLM. We observe concentration empirically, by running the perturbation test from module 10, nudge the trajectory and watch whether it falls back, and that test earns the claim *for the cases we ran*. It does not prove a basin. We generally cannot prove that some context will converge, cannot bound how fast, cannot guarantee that a nudge we did not try would still decay. Every attractor claim about an LLM is, at bottom, an empirical observation about sampled trajectories, not a proof about all of them.

These four compound. A stochastic, discrete, non-stationary system with no convergence proof is precisely a system where "attractor" cannot mean what it means in a textbook. It can mean something useful, and this course has spent ten modules showing that it does. But it is borrowed, and now you can say exactly what was borrowed and exactly what was paid for in full.

<details><summary>Check yourself: which break is showing?</summary>

A practitioner says: "I can't just check $|f'(x^\star)| < 1$ to see if my model's stuck in a loop, the way I would for the logistic map, because there's no derivative to take and no single number that is the state." Which of the four breaks is this, and name one more break the same sentence tacitly depends on.

<details><summary>Show answer</summary>

This is break 2, the **enormous discrete state space**: the state is a token sequence in $V^L$, not a real number, so there is no smooth $f$ to differentiate and no $|f'(x^\star)| < 1$ stability test. The sentence also leans on break 1, **stochasticity**: even if you somehow had a derivative, $f$ is a random map above zero temperature, so there is no single deterministic trajectory whose stability that derivative would describe. The two breaks reinforce each other, which is why the clean module-1 toolkit does not transfer.

</details>

</details>

## The one place attractors are real: Hopfield networks

There is exactly one system in this course's orbit where "attractor" is not borrowed, where it is the literal, proven, load-bearing math. It is also where the ball-in-a-valley image from module 1 stops being an analogy and becomes the actual mechanism. That system is the **Hopfield network**, and it is worth meeting precisely, because it is the rigorous baseline every loose LLM claim should be measured against.

John Hopfield introduced it in 1982. The network is a set of simple units wired together, and it stores a handful of patterns, "memories," in its connection weights. Give it a noisy or partial version of one stored memory and it updates step by step, and it *flows downhill* to the nearest stored pattern, cleaning up the noise as it goes. That is content-addressable memory: you address a memory by a corrupted piece of its content, and the dynamics complete it. The reason this works is the thing that makes it rigorous. The network has an **energy** function, a single number computed from its state, and Hopfield proved that the update rule makes energy *non-increasing*: every step lowers the energy or leaves it flat, never raises it. Energy that only goes down, on a system with finitely many states, has nowhere to go but a local minimum. So the dynamics are *guaranteed* to converge, and the stored memories are exactly the local minima, the bottoms of the valleys.

Now the ball-in-a-valley picture pays off completely. The energy function *is* the landscape. Each stored memory is the bottom of a dip. The basin of attraction is, with no metaphor at all, the set of starting states that roll down into that particular dip. Nudge the ball and it rolls back, because energy non-increasing means downhill is the only direction the dynamics move. Module 1 drew that valley as an intuition pump for LLMs. In a Hopfield network it is not a pump; it is the equation. This is why the work mattered enough that Hopfield shared the 2024 Nobel Prize in Physics: he made "dynamical attractor," a concept from physics, into a working theory of memory, with the convergence guarantee that LLMs simply do not have.

Set the two side by side and the borrowing becomes impossible to miss.

| | **Hopfield network** | **LLM "attractor"** |
|---|---|---|
| Deterministic? | Yes, the update rule is fixed and deterministic | No, the sampler makes $f$ a random map above zero temperature |
| State space | Small, structured set of unit-states; an energy landscape you can write down | $V^L$, astronomically large and discrete; no landscape, no coordinates |
| Stationary rule? | Yes, the same update applied every step | No, the context grows, so the effective rule changes every step |
| "Nearby" means | A real distance in state space | Semantic similarity, soft and model-dependent |
| Convergence proven? | Yes, energy is non-increasing, so it provably reaches a minimum | No, concentration is observed empirically, never proved |
| "Attractor" earned how? | By theorem, the stored memories *are* the energy minima | By measurement, the perturbation test, for the cases actually run |

Read the table top to bottom and the four breaks are the four "No" rows. The Hopfield column is what a real attractor looks like; the LLM column is what an attractor-*flavored* system looks like. The course taught the right vocabulary. This table is where that vocabulary's bill comes due.

<details><summary>Check yourself: why is convergence guaranteed in a Hopfield network but only observed in an LLM?</summary>

In one or two sentences, say what specific property gives the Hopfield network its convergence guarantee, and why an LLM has no equivalent.

<details><summary>Show answer</summary>

The Hopfield network has an energy function that its update rule drives *non-increasing*: energy never rises, and a quantity that only falls on a finite state space must reach a minimum, so convergence is a theorem. An LLM has no such monotone quantity, and its rule is stochastic and changes every step as the context grows, so there is nothing to prove convergence *from*. We can only run trajectories and observe that they concentrate, which is evidence about the cases we ran, not a guarantee about all of them.

</details>

</details>

## Grading the course's own claims

Module 6 set the discipline: meet any "attractor" claim by asking whether it is *measured*, *empirically observed*, or *just a metaphor*, and let the answer set how much weight the claim can carry. The course made many such claims. Honesty means turning that grader on its own work.

At the **proven** end sits the Hopfield network. Its attractors are theorems, convergence and all. Nothing else in the course reaches this grade, and it is the only thing that does.

In the **measured / empirical** band sits the paraphrasing 2-cycle from module 2. Wang and colleagues ran the outer loop systematically, measured the recurrence, and found a period-2 concentration. That is a real finding with numbers behind it. It is not a proof of a basin, and the authors do not claim one, but it earns the word "attractor" honestly as a measured statistical concentration. The output-space repetition traps from module 3 sit here too: degeneration is a documented, reproducible behavior of greedy and low-temperature decoding, and a repetition loop genuinely is a short cycle in token space.

In the **metaphor / framing** band sit the persona "basins": the Waluigi effect, the simulator view, role lock-in described as a one-way attractor. These rhyme with real measurements, persona drift itself has been quantified, but the attractor language around them is interpretive overlay, not established result, and the strongest versions ("the flip is irreversible") are blog conjecture wearing the grammar of a theorem. Useful for intuition. Not load-bearing.

And one claim belongs in a category of its own: the course's own central framing. This course taught the inner-loop token dynamics and the outer-loop text dynamics as two grains of *one* attractor account. That unification is clean, and it organized eleven modules. It is also not something any source proves. No paper unifies inner-loop and outer-loop dynamics under a single attractor theory; the synthesis was a teaching choice, a useful lens for holding a sprawling set of phenomena together. Held to module 6's own grader, the course's spine is *framing*, not fact, and the intellectually honest move is to hand it to you labeled as such rather than smuggle it through as proven.

What stays open, then, is most of it. The field is young. There is no rigorous theory of when an LLM has a genuine basin, no proof of convergence for any non-trivial case, no settled metric for semantic "nearness," and no unified account of the two loops. A curious reader has real work to walk into, not a closed subject to admire.

<details><summary>Check yourself: grade three claims</summary>

Grade each as **proven**, **measured/empirical**, or **metaphor/framing**, and say what evidence would move it up a band.

(a) "Stored memories in a Hopfield network are attracting fixed points."
(b) "Successive paraphrasing converges to a 2-period cycle."
(c) "A helpful assistant persona has an evil twin that is a one-way attractor it inevitably settles into."

<details><summary>Show answer</summary>

(a) **Proven.** It follows from the energy function being non-increasing on a finite state space; the memories are the energy minima and convergence to one is a theorem. Nothing would move it up, it is already at the top band.

(b) **Measured / empirical.** Wang and colleagues ran the loop and measured the period-2 concentration; it has numbers behind it but no convergence proof. To move it up to *proven* you would need a theorem that the iterated paraphrase map provably converges to a 2-cycle, which would require taming the stochastic, non-stationary $f$, currently out of reach.

(c) **Metaphor / framing.** This is the Waluigi corollary; the irreversibility is asserted in a blog argument, not measured. To move it up to *measured*, you would need a controlled study quantifying how often, and how reversibly, an aligned persona flips to its opposite, with the asymmetry actually demonstrated rather than assumed.

</details>

</details>

## Exercises

**1 (mechanical).** State the four ways the dynamical-systems metaphor breaks for LLMs, in one phrase each.

<details><summary>Show solution</summary>

(1) **Stochastic, not deterministic**: the sampler makes $f$ a random map, so "attractor" must mean a distribution the process concentrates on, not a point trajectories provably reach. (2) **Enormous discrete state space**: the state lives in $V^L$, with no smooth $f$ to differentiate, no derivative test, and "nearby" forced to mean semantic, not Euclidean, similarity. (3) **Non-stationary**: the context grows, so the effective rule changes every step, violating the fixed-$f$ premise of classical attractor theory; this is the largest caveat. (4) **No proved convergence**: concentration is observed empirically via the perturbation test, never proved as a theorem.

</details>

**2 (mechanical).** In a Hopfield network, what quantity guarantees convergence, and what is the precise property of that quantity that does the work?

<details><summary>Show solution</summary>

The **energy** function guarantees it. The load-bearing property is that the update rule makes energy *non-increasing*: it never rises. A quantity that only falls, on a system with finitely many states, must bottom out at a local minimum, and the stored memories are exactly those minima. That monotone-energy argument is what an LLM has no equivalent of, which is why the LLM gets observation instead of a guarantee.

</details>

**3 (conceptual).** Of the four breaks, the module calls non-stationarity "the big one." Argue why it is more damaging to the analogy than the other three, using a concept from an earlier module as evidence.

<details><summary>Show solution</summary>

The other three breaks weaken the *tools* of attractor theory: stochasticity replaces a point with a distribution, the discrete space removes the derivative test, the missing proof downgrades a theorem to an observation. Non-stationarity attacks the *premise itself*. Classical attractor theory is the study of what one fixed rule does in the long run; the long-run question is only well posed when the rule stays put. Because an LLM appends a token each step and re-attends over a larger context, the rule effectively changes every step, so the very question "where does this rule send you eventually" loses its footing. Persona drift from module 6 is the visible evidence: the system prompt does not fade because the model forgot it but because the effective rule shifted as the transcript grew around the anchor. When the rule itself moves, you are no longer in the theory the word "attractor" came from, you are using its vocabulary by analogy.

</details>

**4 (conceptual).** Grade this claim and name what is still open: "An LLM has a refusal basin, so once a conversation enters a refusal spiral it will provably stay there."

<details><summary>Show solution</summary>

The first clause is **measured / empirical**: refusal behavior that resists nudging has been observed, and the perturbation test from module 10 can demonstrate a refusal basin *for the cases run*. The word "provably" is the error. Nothing about an LLM is proved to stay anywhere: the system is stochastic, its state space is discrete and astronomically large, the rule is non-stationary, and there is no convergence theorem, so "provably stay there" imports a guarantee that exists for Hopfield networks and not for LLMs. The honest version: "refusal spirals have been observed to be sticky under the perturbations we tried." What is open is exactly the gap between those two sentences, there is no theory that tells you when an observed basin is genuine, how large it is, or whether a perturbation you did not test would escape it.

</details>

**5 (conceptual, stretch).** The course taught the inner loop (tokens within one generation) and the outer loop (whole outputs fed back across calls) as two grains of a single attractor story. Grade *that* framing. Is it proven, measured, or something else, and what would it take to earn a higher grade?

<details><summary>Show solution</summary>

It is **framing**, and below even the metaphor band in one sense, because it is not a claim about the world at all but a teaching choice, a lens chosen for organizing a sprawl of phenomena. No source proves that inner-loop token dynamics and outer-loop text dynamics are instances of one attractor theory; the course asserted the parallel because it is clarifying, not because it was established. To earn "measured," someone would need to define a single dynamical system that contains both loops as special cases and show measured attractor behavior in that unified system. To earn "proven," that unified system would need convergence results, which runs straight back into the four breaks. The right stance is the one module 6 trained: use the framing to think with, mark it as framing, and do not build a further argument on it as if it were a result.

</details>

## Recap

The iterated-map structure was real the whole way through: generation is $s_{t+1} = f(s_t)$, and the synonym cycle, the paraphrase 2-cycle, the refusal basin, the sycophancy rut are genuine trajectories of a genuine map. The word *attractor*, laid over that map, was borrowed, because an LLM is stochastic where the theory is deterministic, discrete and vast where the theory is smooth, non-stationary where the theory holds the rule fixed, and observed where the theory proves, four tears in a map that nonetheless helped you see. Only the Hopfield network pays in full, with an energy that can only fall and memories that are provably its minima, the ball-in-a-valley made into an equation and honored with a Nobel Prize. What was real was the structure and the Hopfield case; what was borrowed was the confidence of the word everywhere else; and what is open is most of it, because no one has yet built the rigorous theory of LLM basins, or the convergence proofs, or the single account that unifies the two loops this course held together by choice. You leave with the lens and an honest inventory of where it grips and where it slips, which is more than the field has settled, and exactly the place a curious person starts.
