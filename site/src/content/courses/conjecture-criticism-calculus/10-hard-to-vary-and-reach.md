---
title: Hard to Vary, and Reach
course: conjecture-criticism-calculus
order: 10
summary: Two graded measures — how hard an artifact is to vary while still passing its battery, and how far beyond its origin problem it reaches — complete the demarcation and set up the final module.
estimatedMinutes: 22
objectives:
  - State Definition 3.6 and compute s(a) and HV_B(a) on a worked example
  - Explain why battery-equivalence means re-wordings do not lower HV_B(a)
  - Distinguish high-HV from low-HV artifacts using the rigid-vs-floppy picture
  - State Definition 3.7 and read R_t(a) as a graded, time-indexed set
  - Identify a reach event and name its consequence in one line
prerequisites: [criticizable-and-modifiable]
---

What is the difference between an idea you can't edit and one you can edit endlessly without breaking? The first commits to something: change it and something in the battery shatters. The second is slippery — every edit slides past the tests, which means the tests were never gripping anything. This module puts numbers on that gap. Two graded measures complete the demarcation: one asks how many genuinely different edits of an artifact still pass its battery, the other asks how far beyond the problem it was born for an artifact now reaches. Neither is binary; both change as inquiry grows.

## Rigid versus floppy

Picture two explanations side by side. The first commits to a specific mechanism — exact relations, specific constants, quantitative predictions you can check against a dozen different phenomena. Try to change it: swap one exponent, adjust one constant, swap the causal story. Almost every real change breaks something. You can reword it, but you can't *edit* it and still have it pass. That is a **rigid** artifact.

The second says something like "things happen because nature prefers it that way." It sounds explanatory. But try to edit it in any direction and it slips through. There's nothing to break because there's nothing nailed down. Any edit survives because the theory was never doing any work. That is a **floppy** artifact — and the battery-equivalence $\approx_B$ from module 9 lets us say this precisely.

Both rigid and floppy artifacts can be *criticizable* (nonempty $I(a)$) and *modifiable* (some edits produce inequivalent variants). The question is how many of those inequivalent edits still pass. High survival means floppy; low survival means rigid.

## Definition 3.6 — Hard to vary

Here is the bridge from that picture to the formal definition. Fix an artifact $a$ with battery $B(a)$ and variation kernel $\mu(\cdot \mid a)$. We draw a random edit $a'$ from $\mu(\cdot \mid a)$ and ask two things at once: does $a'$ pass $B(a)$, and is $a'$ genuinely *different* from $a$ — that is, not battery-equivalent to $a$?

The second clause is the one that blocks re-voicing. A rewording of $a$ that receives the same verdicts across $B(a)$ is battery-equivalent to $a$: $a' \approx_B a$. Such an edit does not count as a survivor, because it is the same explanation rewritten. We want edits that both pass the battery *and* are battery-inequivalent — edits that actually change what $a$ predicts.

## Definition (Hard to vary)

Let $a$ be an epistemically active artifact with battery $B(a)$ and variation kernel $\mu(\cdot \mid a)$. The **survival probability** of $a$ is

$$
s(a) = \Pr_{a' \sim \mu(\cdot \mid a)}\!\left[\, a' \text{ passes } B(a) \;\wedge\; a' \not\approx_B a \,\right].
$$

The **hard-to-vary measure** is

$$
\mathrm{HV}_B(a) = 1 - s(a).
$$

$\mathrm{HV}_B(a)$ is graded, battery-relative, and re-estimated as the battery grows. A one-line remark: $\mathrm{HV}_B(a)$ is estimable to within $(\varepsilon, \delta)$ accuracy from a finite random sample of edits — but we will not derive the statistics here.

---

$s(a)$ is the fraction of sampled edits that are both inequivalent to $a$ and still passing. $\mathrm{HV}_B(a)$ is one minus that. So $\mathrm{HV}_B(a)$ close to $1$ means almost no inequivalent edit survives — every real change breaks something. $\mathrm{HV}_B(a)$ close to $0$ means almost every inequivalent edit passes — the artifact is so uncommitted that you can change almost anything and still "pass."

The $\approx_B$ clause is doing load-bearing work here. Without it, $s(a)$ would count every stylistic rewrite as a survivor, and HV would be artificially deflated: we'd mistake a rigid theory for a floppy one just because it can be paraphrased many ways. Battery-equivalence is the computable surrogate for "the same explanation." Two artifacts receive the same verdicts across $B(a)$ — they make the same predictions, pass and fail the same tests — so they are, for all the battery can tell, the same artifact in different words. $\mathrm{HV}_B$ is blind to those near-synonyms by design.

<details><summary>Check yourself — why doesn't "equally worded" lower HV?</summary>

Because battery-equivalent edits ($a' \approx_B a$) are excluded from the event in the probability: only edits with $a' \not\approx_B a$ can be survivors. A rewording that gives identical verdicts across $B(a)$ never appears in the numerator. HV counts only edits the battery can *distinguish* from $a$ that still pass.

</details>

## Gravity versus "nature abhors a vacuum"

The rigid-vs-floppy picture is most vivid with a side-by-side contrast. Take the problem "why do objects fall?" and two competing artifacts.

**Artifact $a_{\text{grav}}$**: Newton's law of gravitation — objects fall because mass attracts mass with force $F = Gm_1 m_2 / r^2$. The battery $B(a_{\text{grav}})$ includes dozens of commitments: planetary orbits, pendulum periods, tidal amplitudes, laboratory measurements of $G$, deflection of projectiles. Now sample a random edit: change $r^2$ to $r^{2.01}$; change the constant $G$; replace "mass" with "volume." Almost every inequivalent edit fails at least one commitment. The survival probability $s(a_{\text{grav}})$ is close to $0$, so $\mathrm{HV}_B(a_{\text{grav}}) \approx 1$. The theory is rigid — it breaks under almost any real change.

**Artifact $a_{\text{vac}}$**: "Objects fall because nature abhors a vacuum." Battery: the same tests. Sample a random edit: replace "abhors a vacuum" with "seeks the center," "prefers lower states," "avoids emptiness." Each new phrasing is battery-inequivalent (the verdicts differ — for the simple reason that $a_{\text{vac}}$ makes essentially no specific prediction, so its verdicts are mostly overrun or vacuously passing). But wait: if $a_{\text{vac}}$ commits to nothing precise, most edits will also commit to nothing precise and will pass the battery just as vacuously. The survival probability $s(a_{\text{vac}})$ is close to $1$, so $\mathrm{HV}_B(a_{\text{vac}}) \approx 0$. The theory is floppy — survives any edit because it never committed.

Note the asymmetry: a rewording of $a_{\text{grav}}$ — "the attractive gravitational force varies inversely as the square of the separation" — is battery-equivalent to the original. It passes and fails every commitment in exactly the same way. So it is *not* a survivor in the $s(a_{\text{grav}})$ calculation. HV is not penalizing Newton's law for having a paraphrase; it is measuring only edits that change what the law *predicts*.

<details><summary>Check yourself — what does it mean for HV_B(a) to be battery-relative?</summary>

The battery $B(a)$ depends on which problems $a$ addresses and on $a$'s own commitment interface. If $a$ is later used to address new problems (its reach grows), those new criteria join the battery, and $\mathrm{HV}_B(a)$ may rise or fall. An artifact that was floppy against a thin battery can become rigid against a richer one — or remain floppy if every new commitment is also easy to survive. The subscript $B$ is a reminder that HV is not an intrinsic property of $a$ alone.

</details>

## Definition 3.7 — Reach

The second measure asks a different question entirely. An artifact is born to address a specific problem. But a good explanation — one that actually captures something about the world — often turns out to meet problems it was never designed for. That is reach.

Formally, we need a growing library of problems. Let $\Pi^{\mathrm{lib}}_t$ be the problem library at time $t$. An artifact $a$ originates at some problem $\pi_0 \in \Pi^{\mathrm{lib}}_t$ (the problem that motivated its conjecture). Beyond $\pi_0$, there may be other problems in $\Pi^{\mathrm{lib}}_t$ that $a$ also addresses — meaning $a$ meets the criteria of those problems and is admitted as a candidate solution.

## Definition (Reach)

Let $a$ be an artifact with origin problem $\pi_0$, and let $\Pi^{\mathrm{lib}}_t$ be the problem library at time $t$. The **reach** of $a$ at time $t$ is

$$
R_t(a) = \{\, \pi \in \Pi^{\mathrm{lib}}_t \;:\; \pi \neq \pi_0 \;\wedge\; a \text{ meets } \pi \text{ at } t \,\}.
$$

$R_t(a)$ is a set of problems, graded by how many members it has, and time-indexed because the library $\Pi^{\mathrm{lib}}_t$ grows as inquiry advances.

---

The bridge: $\Pi^{\mathrm{lib}}_t$ is the full collection of problems the system has registered by time $t$. The condition "$a$ meets $\pi$ at $t$" means $a$ addresses $\pi$ (the addressing relation $\mathrm{addr}$ links them) and $a$'s verdicts across $\mathrm{Crit}_\pi$ make it a viable candidate — it passes the instantiated criteria. The origin problem $\pi_0$ is excluded because we're measuring *additional* reach, not the problem $a$ was invented for.

A **reach event** occurs when $a$ meets a new problem $\pi \in \Pi^{\mathrm{lib}}_t$ that it had not previously met. When a reach event occurs, (Spawn) — the problem-generation rule introduced in module 11 — opens an explanation-debt problem: if $a$ already accounts for $\pi$, we should ask *why*, which is a new explanatory demand.

## Worked example — HV from a sample of edits

**Setup.** Let $a$ be a simple conjectured rule: "all prime numbers greater than 2 are odd." The battery $B(a)$ contains five commitments — five specific primality tests checking whether the stated property holds for the first five primes greater than 2: $\{3, 5, 7, 11, 13\}$.

We draw a sample of four edits from $\mu(\cdot \mid a)$:

| Edit $a'$ | Passes $B(a)$? | Battery-equivalent to $a$? | Counts as survivor? |
|-----------|---------------|----------------------------|---------------------|
| "all primes greater than 2 are not even" | yes | yes ($a' \approx_B a$: identical verdicts) | **no** |
| "all primes greater than 2 are greater than 1" | yes | no (different verdicts on the "odd" commitments) | **yes** |
| "all prime numbers are odd" | no (2 is prime and even) | no | **no** |
| "all prime numbers greater than 2 are prime" | yes | no (a tautology — fails different commitments) | **yes** |

From this sample of four, two edits count as survivors (the ones that pass $B(a)$ and are not battery-equivalent). The estimated survival probability is $\hat{s}(a) = 2/4 = 0.5$, so $\widehat{\mathrm{HV}}_B(a) = 0.5$. With a larger sample, this estimate would converge to the true $s(a)$.

<details><summary>Show solution check — why does "not even" not count?</summary>

"All primes greater than 2 are not even" and "all primes greater than 2 are odd" receive identical verdicts across $B(a)$: each commitment in $B(a)$ checks the same property and produces the same pass/fail outcome on both phrasing. So $a' \approx_B a$, and this edit is excluded from the $s(a)$ calculation by the $a' \not\approx_B a$ condition. Counting it would let infinite paraphrases artificially inflate the survival count.

</details>

## Exercises

**1.** (Mechanical) Suppose artifact $a$ has $s(a) = 0.2$. Compute $\mathrm{HV}_B(a)$ and state in words what this value says about $a$.

<details><summary>Show solution</summary>

$\mathrm{HV}_B(a) = 1 - 0.2 = 0.8$. This means that roughly 80% of randomly sampled edits either fail the battery or are battery-equivalent to $a$. Only 20% are both inequivalent and passing. $a$ is relatively rigid: most genuine changes break it.

</details>

---

**2.** (Conceptual — rewording and HV) A student argues: "I can describe Newton's gravitational law in fifty different ways — using words, using diagrams, using different variable names — so it has high survival probability and low HV." Diagnose the error.

<details><summary>Show solution</summary>

The student is conflating paraphrases with inequivalent edits. Battery-equivalent reformulations — those receiving the same verdicts across $B(a)$ — are excluded from $s(a)$ by the condition $a' \not\approx_B a$. None of the fifty wordings count as survivors unless they produce different verdicts on at least one commitment. The true $s(a_{\text{grav}})$ is set by how many *substantively different* variants still pass all the orbital, pendulum, and laboratory tests — and that number is small. HV is about what the battery can distinguish, not about how many ways you can say the same thing.

</details>

---

**3.** (Mechanical) Let the problem library at time $t$ contain five problems: $\pi_0$ (the origin problem of artifact $a$), $\pi_1, \pi_2, \pi_3, \pi_4$. At time $t$, $a$ meets $\pi_1$ and $\pi_3$ but not $\pi_2$ or $\pi_4$. Write out $R_t(a)$ explicitly and state its cardinality.

<details><summary>Show solution</summary>

$$
R_t(a) = \{\pi_1, \pi_3\}.
$$

The cardinality is $|R_t(a)| = 2$. The origin problem $\pi_0$ is excluded by definition. Problems $\pi_2$ and $\pi_4$ are excluded because $a$ does not meet them at time $t$.

</details>

---

**4.** (Conceptual) An artifact $a$ currently has $R_t(a) = \emptyset$ — zero reach beyond its origin problem. Does this mean $a$ is a bad explanation? Does it mean $a$'s reach is permanently zero?

<details><summary>Show solution</summary>

Neither. Reach is time-indexed and library-indexed. $R_t(a) = \emptyset$ simply means that at the current time $t$, none of the problems registered in $\Pi^{\mathrm{lib}}_t$ (other than $\pi_0$) are met by $a$. This could be because $a$ is genuinely narrow, or because the problem library has not yet grown to include the problems $a$ would meet. As the library expands — as inquiry generates new problems through (Spawn) — $a$ may encounter problems it turns out to satisfy. Reach is discovered, not fixed.

</details>

---

**5.** (Stretch) Suppose you are given an artifact $a$ and told that $s(a) = 0$ — the survival probability is exactly zero. Does this mean $a$ has no inequivalent variants, or that it has no inequivalent variants that *pass*? Relate your answer to the modifiability condition $\mathrm{mod}(a)$ from module 9.

<details><summary>Show solution</summary>

$s(a) = 0$ means no sampled edit is both inequivalent to $a$ under $B(a)$ and passing. There are two ways this can happen:

1. **No inequivalent variants exist** — every edit is battery-equivalent to $a$. But this would contradict $\mathrm{mod}(a)$, which requires $\Pr_{a' \sim \mu(\cdot \mid a)}[a' \not\approx_B a] > 0$. If $a$ is epistemically active (and hence modifiable), this case is ruled out.

2. **Inequivalent variants exist, but none pass** — some edits are genuinely different (inequivalent under $B(a)$), but every one of them fails at least one commitment in $B(a)$. This is the interesting case: $a$ is modifiable (inequivalent edits are possible) but maximally rigid — $\mathrm{HV}_B(a) = 1 - 0 = 1$. The battery distinguishes many variants, and all of them fail. This is the formal signature of the most rigid possible explanation: every real change breaks it.

The two conditions — $\mathrm{mod}(a)$ (some inequivalent edits exist) and $\mathrm{HV}_B(a)$ (how many of those pass) — are genuinely independent. You can have high modifiability (many inequivalent edits) and high HV (none of them pass), which is the profile of a strong explanation.

</details>

## Recap

Two graded measures now complete the demarcation picture from module 9. The survival probability $s(a)$ counts only inequivalent edits that pass the battery — battery-equivalence $\approx_B$ ensures that re-voicings and renamings are excluded, so $\mathrm{HV}_B(a) = 1 - s(a)$ measures genuine rigidity, not resistance to paraphrase. Reach $R_t(a)$ records how far an artifact has spread through the growing problem library beyond its origin, and a reach event — when $a$ newly meets a problem — triggers a new explanatory demand. Both measures are re-estimated as the battery and library grow. What survives that process, and what new problems the system opens from it, is where the course ends.
