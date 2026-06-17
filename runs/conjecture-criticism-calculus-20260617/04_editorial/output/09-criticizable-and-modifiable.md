---
title: "Demarcation: Criticizable and Modifiable"
course: conjecture-criticism-calculus
order: 9
summary: What makes an artifact a live part of inquiry? It must have an attack surface and a nontrivial space of genuinely different variants — a demarcation that admits mathematics and the arts alongside empirical science.
estimatedMinutes: 24
objectives:
  - Define the variation kernel µ(·|a) and explain what it samples.
  - State what Pr[event] > 0 means in the context of a sampled edit.
  - Define the battery B(a) and battery-equivalence a′ ≈_B a.
  - Classify a variant as battery-equivalent or battery-inequivalent, with justification.
  - State the definitions of crit(a), mod(a), and "epistemically active."
  - Explain why criticizability replaces (rather than merely refines) Popperian falsifiability.
prerequisites: [adjudication-and-reinstatement]
---

Two artifacts survive adjudication. Call them $a_1$ and $a_2$. From the grounded extension $G$ alone, both are accepted — equal partners in the system's current best picture. But something nags: $a_2$ can be rephrased in a hundred different ways that all pass every test identically, while $a_1$, when you change even a small piece, breaks against the battery. Are they really equal? And a third artifact appears: $a_3$ has no commitment interface at all — nothing to test, nothing to attack. Should the system treat it as a live conjecture?

The previous eight modules built the machinery — artifact $a = (c(a), I(a))$ from module 3, verdicts from module 2, the grounded extension from module 7, adjudication and reinstatement from module 8. What that machinery does not yet say is *which* artifacts count as genuine participants in inquiry, and in what sense one explanation is more committed than another. That is this module's work: a two-part demarcation criterion that replaces falsifiability as the boundary between the live and the inert — and widens that boundary to include mathematics, philosophy, and the arts alongside empirical science.

To get there, you need one tool the course hasn't introduced yet: a small, precise slice of probability. It takes four paragraphs.

---

## A minimal probability primer

A **probability distribution** over a set $X$ is an assignment of a number $\Pr[x] \in [0,1]$ to each element $x \in X$, with the numbers summing to 1. Think of it as a random-choice machine: when you "sample from the distribution," you get one element of $X$, with each element appearing as often as its assigned probability.

An **event** is a subset $E \subseteq X$. The probability of the event is $\Pr[E] = \sum_{x \in E} \Pr[x]$ — the total weight assigned to the elements in $E$.

The one condition that matters here: $\Pr[E] > 0$ means the event is *possible* — the random machine can produce some element in $E$. It does not mean $E$ is likely or common; it means $E$ is not ruled out with certainty. Contrast $\Pr[E] = 0$: no element in $E$ is ever produced. For a finite distribution, $\Pr[E] = 0$ means no element of $E$ has any weight, so the machine simply never outputs anything in $E$.

That is the entire probability toolkit this module needs. No continuous distributions, no expectations, no statistics — just: a random-edit machine, an event, and the question of whether the event can happen at all. The random-edit machine becomes the variation kernel $\mu(\cdot \mid a)$ introduced next — the formal object that samples bounded edits of an artifact — and $\Pr[E] > 0$ is precisely the condition modifiability will turn on.

---

## The variation kernel

An artifact $a = (c(a), I(a))$ has content $c(a)$. You can imagine making small changes to that content: swap a word, perturb a coefficient, swap one explanatory step for another. The **variation kernel** $\mu(\cdot \mid a)$ is the formal object that captures this: it is a probability distribution over *bounded edits* of $c(a)$.

Think of it as the random-edit machine for $a$. When you sample $a' \sim \mu(\cdot \mid a)$, you get some modified version of $a$'s content. The edits are bounded — they stay within reach of the original, rather than ranging over all of $\Sigma^*$ — and the distribution is samplable, meaning the machine can actually produce outputs.

The variation kernel was named in module 3 as part of Definition 3.2 but deferred there. It enters the calculus properly now, because it is exactly what the modifiability definition needs.

---

## The battery and battery-equivalence

Before defining criticizability and modifiability, there is one more object to build: the **battery** of an artifact.

An artifact $a$ has two sources of test obligations. First, its own commitment interface $I(a)$: the finite set of commitments $a$ answers to directly (module 3 — every artifact carries its own finite set of commitments it must pass). Second, any problem $\pi$ that $a$ addresses (in the sense of module 3: $(a, \pi) \in \mathrm{addr}$) carries a growing set of criteria $\mathrm{Crit}_\pi$ — commitment schemas that, when instantiated against $a$, become further obligations.

**Bridge to the definition.** So the battery $B(a)$ is the union of those two sources: $a$'s own commitments, plus the instantiated criteria of every problem $a$ addresses. It is the full set of tests the system currently knows $a$ must face.

## Definition 3.5 (Battery and battery-equivalence)

Let $a$ be an artifact in epistemic state $S$. The **battery** $B(a)$ is the set consisting of $a$'s own commitments together with the instantiated criteria of all problems $a$ addresses via $\mathrm{addr}$.

Write $a' \approx_B a$ (**battery-equivalent**) if $a'$ and $a$ receive identical verdicts across every commitment in $B(a)$: for each $\kappa \in B(a)$, $V(\kappa, c(a')) = V(\kappa, c(a))$.

---

Battery-equivalence is the formal answer to "same explanation, possibly reworded." Two artifacts that agree on every verdict across $B(a)$ are, from the battery's perspective, indistinguishable — they commit to exactly the same claims about every test the system can currently run.

**Check yourself.** Suppose $a$ addresses problem $\pi$, and $\mathrm{Crit}_\pi$ contains one commitment $\kappa_1$. The artifact $a$ also carries one commitment $\kappa_2$ in its own interface $I(a)$. What is $B(a)$?

<details><summary>Show answer</summary>

$B(a) = \{\kappa_1, \kappa_2\}$. The battery is the union of $a$'s own commitments ($\{\kappa_2\} = I(a)$) and the instantiated criteria of the problems $a$ addresses ($\{\kappa_1\}$ from $\mathrm{Crit}_\pi$).

</details>

---

## Equivalent vs. inequivalent: a worked example

This distinction is load-bearing — module 10 (hard-to-vary) depends on it — so it deserves a careful worked example.

**Setup.** Let $a$ be the artifact whose content is: *"Objects accelerate toward each other with force $F = Gm_1m_2 / r^2$."* Suppose the battery $B(a)$ contains five commitments: tests against planetary orbit data, pendulum timing, tidal patterns, projectile parabolas, and a Cavendish torsion-balance measurement.

Now consider two variants sampled from $\mu(\cdot \mid a)$.

**Variant $a'_1$: a rewording.** Content: *"The gravitational attraction between two masses varies inversely as the square of the distance separating them."*

Is $a'_1 \approx_B a$? Check each commitment in $B(a)$. The rewording expresses the same mathematical law — same force, same dependence on mass and distance. Every test in $B(a)$ that $a$ passes, $a'_1$ passes, with the same verdict. Every test $a$ fails (if any), $a'_1$ fails identically. So $V(\kappa, c(a'_1)) = V(\kappa, c(a))$ for all $\kappa \in B(a)$.

**Conclusion:** $a'_1 \approx_B a$. This is a battery-equivalent variant — linguistically different, informationally the same explanation.

**Variant $a'_2$: a genuine modification.** Content: *"Objects accelerate toward each other with force $F = Gm_1m_2 / r^{2.01}$."*

Is $a'_2 \approx_B a$? The exponent has changed from 2 to 2.01. Precision tests — especially the Cavendish torsion balance and planetary orbit data — are sensitive to this. Running commitment $\kappa_{\text{orbit}}$ against $c(a'_2)$ yields a different verdict than running it against $c(a)$: the predictions diverge at the precision of the test. So $V(\kappa_{\text{orbit}}, c(a'_2)) \neq V(\kappa_{\text{orbit}}, c(a))$.

**Conclusion:** $a'_2 \not\approx_B a$. This is a battery-inequivalent variant. The battery can distinguish it from $a$.

The key takeaway: $\approx_B$ screens out mere stylistic variation. For the purposes of everything that follows, a rewording is *the same* artifact. Genuine novelty requires the battery to be able to tell the difference.

---

## Definition 3.5 (Criticizability and modifiability)

**Criticizable.** An artifact $a$ is **criticizable**, written $\mathrm{crit}(a)$, if its commitment interface is nonempty:

$$\mathrm{crit}(a) \iff I(a) \neq \emptyset$$

**Bridge.** The commitment interface $I(a)$ is the finite set of commitments $a$ directly carries (module 3). If $I(a) = \emptyset$, no commitment is directly attached to $a$ — so no attack of the form "run this test, it fails" is possible. $a$ has no attack surface. Criticizability says simply: there is at least one test that $a$ claims to pass.

**Modifiable.** An artifact $a$ is **modifiable**, written $\mathrm{mod}(a)$, if the variation kernel can produce an inequivalent variant with positive probability:

$$\mathrm{mod}(a) \iff \Pr_{a' \sim \mu(\cdot \mid a)}\!\left[a' \not\approx_B a\right] > 0$$

**Bridge.** The variation kernel $\mu(\cdot \mid a)$ is the random-edit machine for $a$. The event $\{a' \not\approx_B a\}$ is the set of all sampled edits that produce a battery-inequivalent variant — something the battery can actually distinguish from $a$. The condition $> 0$ says this event is *possible*: the random-edit machine can produce a genuine alternative, not just a rewording. If the probability were 0, every edit of $a$ would be battery-equivalent to it — the artifact's content space, as far as the battery is concerned, is a single point.

**Epistemically active.** An artifact $a$ is **epistemically active** if both $\mathrm{crit}(a)$ and $\mathrm{mod}(a)$ hold.

---

**Check yourself.** Artifact $b$ has $I(b) = \emptyset$. Is $b$ criticizable? Is it epistemically active? Why or why not?

<details><summary>Show answer</summary>

$b$ is not criticizable: $I(b) = \emptyset$ means $\mathrm{crit}(b)$ is false. Since criticizability is one of the two conditions for epistemic activity, $b$ is not epistemically active regardless of whether $\mathrm{mod}(b)$ holds. An artifact with no commitment interface has no attack surface — nothing to test and nothing to refute.

</details>

---

## Demarcation: why this replaces falsifiability

Popper's falsifiability criterion — which marked a theory as scientific if it could in principle be refuted by observation — required that some commitment be *observation-valued*: tied to an empirical test. This ruled out mathematics, philosophy, aesthetic standards, and much else.

Criticizability requires only $I(a) \neq \emptyset$. A commitment $\kappa \in I(a)$ is a test program paired with a resource budget (module 2 — a verdict is $V(\kappa, c) \in \{\text{pass}, \text{fail}, \text{overrun}\}$). Nothing in that definition says the test must be empirical. A mathematical proof obligation is a commitment. A logical consistency check is a commitment. A constraint from a formal standard in aesthetics is a commitment. All three give rise to a nonempty $I(a)$, and thus to $\mathrm{crit}(a)$.

The source note is explicit: "Empirical falsifiability is the special case of $\mathrm{crit}$ in which some commitment is observation-valued." Falsifiability is not a rival to criticizability — it is a special instance of it, the case where some test in $I(a)$ is tied to an observable outcome. The demarcation simply generalizes: mathematics, philosophy, and the arts are admitted, not by special pleading, but because their commitments satisfy $I(a) \neq \emptyset$ on exactly the same footing as empirical commitments.

Modifiability adds the second arm: it rules out artifacts that are locally unreachable — where every sampled edit produces only battery-equivalent rewrites, so the system can generate no genuine variant to compare or compete. An artifact with $\Pr_{a' \sim \mu(\cdot \mid a)}[a' \not\approx_B a] = 0$ occupies a solitary point in the variation landscape; the calculus has no surface to push against.

Together, $\mathrm{crit}(a)$ and $\mathrm{mod}(a)$ mark the epistemically active artifacts: those that can be attacked *and* meaningfully varied. This is the demarcation — not "could an experiment falsify it?" but "does it have an attack surface, and is there genuine room to move?"

---

## Exercises

**1. (Mechanical)** An artifact $a$ has $I(a) = \{\kappa_1, \kappa_2\}$ and addresses one problem whose criteria instantiate to $\{\kappa_3\}$. Write down $B(a)$.

<details><summary>Show solution</summary>

$B(a) = \{\kappa_1, \kappa_2, \kappa_3\}$.

The battery collects $a$'s own commitments ($I(a) = \{\kappa_1, \kappa_2\}$) and the instantiated criteria of every problem $a$ addresses ($\{\kappa_3\}$). Their union is $B(a) = \{\kappa_1, \kappa_2, \kappa_3\}$.

</details>

---

**2. (Mechanical)** Artifact $a$ has $I(a) = \{\kappa\}$ and is not addressed to any problem, so $B(a) = \{\kappa\}$. Variant $a'$ satisfies $V(\kappa, c(a')) = V(\kappa, c(a))$. Is $a' \approx_B a$?

<details><summary>Show solution</summary>

Yes. Battery-equivalence requires identical verdicts across every commitment in $B(a) = \{\kappa\}$. Since $V(\kappa, c(a')) = V(\kappa, c(a))$ by assumption, the condition is satisfied: $a' \approx_B a$.

</details>

---

**3. (Conceptual — classifying $\approx_B$)** Consider the gravitational-force artifact $a$ from the worked example. A student proposes a third variant $a'_3$ whose content changes the constant $G$ to $G + \epsilon$ for a very small $\epsilon$. The battery includes only a pendulum test, which cannot detect a change this small: $V(\kappa_{\text{pend}}, c(a'_3)) = V(\kappa_{\text{pend}}, c(a))$.

Is $a'_3 \approx_B a$, given that $B(a) = \{\kappa_{\text{pend}}\}$?

<details><summary>Show solution</summary>

Yes, $a'_3 \approx_B a$ under this battery. Battery-equivalence depends on the *current* battery, not on all possible tests. With $B(a) = \{\kappa_{\text{pend}}\}$ and the pendulum test returning the same verdict for both $a$ and $a'_3$, the condition $V(\kappa, c(a'_3)) = V(\kappa, c(a))$ for all $\kappa \in B(a)$ is satisfied.

This is why the definition writes $\approx_B$ with a subscript: battery-equivalence is relative to the current battery. If a more precise test were added to $B(a)$ — say, from a (Spawn) trigger — the verdict might differ, and $a'_3$ could become battery-inequivalent. The battery grows; equivalence is re-evaluated as it does.

</details>

---

**4. (Conceptual — $\mathrm{crit} \neq$ falsifiability)** A formal mathematical proof $a$ carries one commitment $\kappa$: a logical-validity check (the test program verifies each step follows from the preceding ones by the stated inference rules). Is $a$ criticizable? Is it falsifiable in Popper's sense? Explain the difference.

<details><summary>Show solution</summary>

$a$ is criticizable: $I(a) = \{\kappa\} \neq \emptyset$, so $\mathrm{crit}(a)$ holds. The commitment $\kappa$ is a test program that checks logical validity — it has a fixed budget (the computation terminates or overruns), and it returns pass, fail, or overrun against the proof's content.

$a$ is *not* falsifiable in Popper's sense. Popper's criterion requires the possibility of an empirical observation that could refute the theory. A formal proof makes no observation-valued predictions; it could not be refuted by running an experiment.

The difference: criticizability requires only $I(a) \neq \emptyset$ — any test suffices, empirical or not. Falsifiability requires that at least one test be tied to observable reality. This is the sense in which falsifiability is a special case of criticizability: when some $\kappa \in I(a)$ is observation-valued, criticizability implies falsifiability; but many artifacts (proofs, formal standards, aesthetic criteria) are criticizable without being falsifiable.

</details>

---

**5. (Conceptual)** Suppose the variation kernel $\mu(\cdot \mid a)$ is a constant distribution that assigns all weight to a single variant $a'_0 = a$ (no change at all). What is $\Pr_{a' \sim \mu(\cdot \mid a)}[a' \not\approx_B a]$? Is $a$ modifiable?

<details><summary>Show solution</summary>

The only element in the support is $a'_0 = a$ itself. Since $a \approx_B a$ trivially (every verdict of $a$ against itself is identical), the event $\{a' \not\approx_B a\}$ contains no element with positive weight. So $\Pr_{a' \sim \mu(\cdot \mid a)}[a' \not\approx_B a] = 0$.

$a$ is not modifiable: $\mathrm{mod}(a)$ fails. The variation kernel can only produce the artifact itself; the battery sees no genuine alternative. Even if $\mathrm{crit}(a)$ holds ($I(a) \neq \emptyset$), $a$ is not epistemically active, because both conditions must hold simultaneously.

</details>

---

**6. (Stretch — connecting to the system)** An artifact $a_0$ with $I(a_0) = \emptyset$ is registered in state $S$. A student argues: "Since $a_0$ has no commitments, no one can construct a *demonstrative* warrant against it (module 5 — a demonstrative warrant packages a failing verdict $V(\kappa, c(a_0)) = \text{fail}$ for some $\kappa$). So $a_0$ is safe."

Is this argument sound? What does the module's definitions say about $a_0$'s status in the system?

<details><summary>Show solution</summary>

The argument is partially correct but misses the broader picture. It is true that no *demonstrative* warrant can be constructed against $a_0$: a demonstrative warrant requires a failing verdict $V(\kappa, c(a_0)) = \text{fail}$ for some $\kappa \in I(a_0)$, and $I(a_0) = \emptyset$ means there is no such $\kappa$. However, *argumentative* warrants (module 5) do not require a failing verdict — they are explanatory artifacts whose commitments claim $a_0$'s deficiency. So argumentative attacks remain possible.

More importantly, this module's definition says $\mathrm{crit}(a_0)$ fails: $I(a_0) = \emptyset$ means $a_0$ is not criticizable, hence not epistemically active. The system does not eject $a_0$ — nothing is ever deleted (module 6). But the demarcation criterion marks $a_0$ as outside the live part of inquiry. It sits in $A$, potentially suspended, but it contributes nothing the battery can push against.

</details>

---

## Recap

The battery $B(a)$ assembles everything the system currently demands of an artifact: its own commitments and the criteria of every problem it addresses. Battery-equivalence $a' \approx_B a$ identifies variants that, from the battery's perspective, are the same explanation reworded — they agree on every verdict in $B(a)$. Criticizability $\mathrm{crit}(a)$ asks whether $a$ has any attack surface at all ($I(a) \neq \emptyset$). Modifiability $\mathrm{mod}(a)$ asks whether the variation kernel can produce a genuinely distinguishable variant ($\Pr_{a' \sim \mu(\cdot \mid a)}[a' \not\approx_B a] > 0$). An artifact is epistemically active when both hold — it can be attacked and it can be meaningfully varied.

This pair replaces Popperian falsifiability: empirical testing is the special case where some commitment is observation-valued, so mathematics, philosophy, and the arts enter the system on the same footing as empirical conjectures. The two definitions — $\mathrm{crit}$ and $\mathrm{mod}$ — and the equivalence relation $\approx_B$ are the foundation that the next module builds the hard-to-vary measure on.
