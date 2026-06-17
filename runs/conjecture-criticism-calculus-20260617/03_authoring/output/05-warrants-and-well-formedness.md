---
title: Warrants and Well-Formedness
course: conjecture-criticism-calculus
order: 5
summary: Every attack edge in the system must carry a warrant — a demonstrative or argumentative justification — and a state is well-formed only when every such condition is satisfied.
estimatedMinutes: 22
objectives:
  - Distinguish demonstrative from argumentative warrants and state the role each plays in an attack edge.
  - Explain the validity-node closure rule using a concrete worked example before the abstract statement.
  - State the four well-formedness conditions from §3.2.
  - Identify whether a given epistemic state is well-formed, citing which condition would be violated if not.
prerequisites: [states-and-attack-graph]
---

An attack edge in the system is never a bare accusation. If artifact $k$ attacks artifact $a$, something must make the attack *stick* — a piece of registered, content-bearing, itself-attackable justification called a **warrant**. Without it, the edge cannot exist. This module defines the two kinds of warrant, explains the subtlest condition they carry, and states when an entire epistemic state qualifies as well-formed.

One callback each, then we build: a verdict (pass / fail / overrun) was introduced in module 2; the attack graph $\text{att} \subseteq A \times A$ was built in module 4.

---

## Why bare verdicts are not enough

Suppose a commitment $\kappa$ runs on artifact $a$ and the verdict is $V(\kappa, a) = \text{fail}$. You might think the verdict alone entitles you to place an edge $k \to a$ in the attack graph. But consider what the defender of $a$ would want to challenge. They might grant the verdict and still dispute whether the test was *relevant* to $a$'s claim, or whether it was correctly designed. If the verdict is the *whole* warrant, there is nothing for them to get their hands on. Criticism has no target.

The solution is to make every attack edge carry an artifact — something with content, something with a commitment interface, something that can itself be attacked. Criticism becomes contentful rather than a bare datum, and the uniformity principle from module 3 ("whatever can attack can be attacked") extends all the way down: even the justification for an attack is fair game.

There are two kinds of warrant, corresponding to two very different styles of criticism.

---

## Definition (Warrants)

**Definition 3.4.** An attack edge $(k, a) \in \text{att}$ must carry a **warrant** of one of two types:

- **Demonstrative:** $k$ packages a failing verdict — a commitment $\kappa$, its trace, and $V(\kappa, a) = \text{fail}$ — together with a dependence on a **validity node** $\nu(\kappa)$, an artifact asserting that the test is sound and relevant. By a **closure rule**: any attacker of $\nu(\kappa)$ attacks $k$.

- **Argumentative:** $k$ is an explanatory artifact whose commitments include a claim about $a$'s deficiency.

Both kinds are themselves artifacts and hence attackable, so criticism is always contentful and never a bare verdict.

---

### Bridge: unpacking Definition 3.4

Take each piece in turn.

**Demonstrative** means the attack is grounded in a *test result*. The warrant bundles three things: the commitment $\kappa = (\tau, \beta)$ (the test program and its budget), the trace of running it (the evidence that the run happened), and the verdict $V(\kappa, a) = \text{fail}$. Together they constitute a self-contained, checkable package — anyone can, in principle, rerun $\kappa$ on $c(a)$ and verify the verdict.

But the package also depends on a **validity node** $\nu(\kappa)$. This is an artifact whose content asserts something like: "commitment $\kappa$ is a sound and relevant test for the kind of claim $a$ makes." It is the artifact that vouches for the *test itself*. Without $\nu(\kappa)$, the demonstrative warrant could be challenged by attacking the test's soundness — and there would be no artifact in the system representing that challenge target. $\nu(\kappa)$ supplies it.

**Argumentative** means the attack doesn't package a test result at all. Instead, $k$ is an explanatory artifact — a piece of prose, a formal argument, a citation — whose own commitments include a claim that $a$ has some deficiency. The critic constructs an artifact that *argues* $a$ is inadequate, rather than *testing* $a$ and reporting failure.

Both kinds are artifacts: they have content $c(k)$ and a commitment interface $I(k)$. Both sit inside $A$. Both can be attacked.

---

## The closure rule: a worked example first

The most subtle part of Definition 3.4 is the closure rule for demonstrative warrants:

> any attacker of $\nu(\kappa)$ attacks $k$.

Before stating this abstractly, here is the concrete situation that makes it necessary.

**Setup.** Say artifact $a$ is a conjecture: "The reaction rate doubles with each 10°C rise." Artifact $k$ attacks $a$ demonstratively: $k$ packages a commitment $\kappa$ (a lab test) with verdict $V(\kappa, a) = \text{fail}$, and $k$ depends on validity node $\nu(\kappa)$, an artifact whose content asserts: "this lab test reliably measures reaction rate."

Now suppose artifact $j$ attacks $\nu(\kappa)$. Perhaps $j$ argues that the lab test is miscalibrated and does not, in fact, reliably measure reaction rate. In plain terms, $j$ is saying: the *test* $k$ used to attack $a$ was itself unsound.

What should happen to $k$?

If $j$'s attack on $\nu(\kappa)$ succeeds, the whole basis of $k$'s attack on $a$ is undermined. $k$ claimed $a$ fails a sound test; $j$ says the test is not sound. So $j$ should count as attacking $k$ as well — not just the validity node. The edge $j \to k$ should exist.

This is exactly what the closure rule says: because $j$ attacks $\nu(\kappa)$ and $k$ carries a demonstrative warrant depending on $\nu(\kappa)$, the system records $(j, k) \in \text{att}$ automatically.

The picture:

$$
j \longrightarrow \nu(\kappa) \qquad \text{(}j\text{ attacks the validity node)}
$$
$$
j \longrightarrow k \qquad \text{(closure: }j\text{ therefore attacks }k\text{)}
$$
$$
k \longrightarrow a \qquad \text{(}k\text{'s demonstrative attack on }a\text{)}
$$

The defender of $a$ does not need a separate artifact disputing $k$ directly. If they can attack $\nu(\kappa)$ — the soundness of the test — closure propagates that attack to $k$ automatically, and the adjudicator (module 7) will take it into account.

**Now the abstract rule.** Let $k$ carry a demonstrative warrant depending on validity node $\nu(\kappa)$. For any artifact $j$ such that $(j, \nu(\kappa)) \in \text{att}$, the closure rule adds $(j, k) \in \text{att}$. Well-formedness requires this hold in every registered demonstrative attack.

<details><summary>Check yourself: why does closure matter?</summary>

Without the closure rule, an attacker of the validity node $\nu(\kappa)$ would undermine the *soundness* of the test but have no formal connection to the warrant-carrier $k$. The attack graph would represent $j \to \nu(\kappa)$ but not $j \to k$, so the adjudicator's computation would treat $k$ as unaffected — even though its evidential basis has been challenged. Closure ensures the attack graph actually reflects the dependency: undermining the test undermines the attestation of failure.

</details>

---

## Well-formedness

We now have the ingredients to say when an epistemic state $S = (A, \Pi, \text{addr}, \text{att}, W)$ is *well-formed* — when the whole configuration is internally consistent.

### Definition (Well-Formedness)

A state $S$ is **well-formed** if and only if all four conditions hold:

1. **Warrant registration.** Every attack edge $(k, a) \in \text{att}$ carries a warrant $W(k, a)$ of the kind specified in Definition 3.4 — either demonstrative or argumentative.

2. **Commitment-schema criteria.** For every problem $\pi \in \Pi$, the criteria set $\text{Crit}_\pi$ consists of commitment schemas — specifications that can be instantiated as commitments against candidate artifacts.

3. **Declared addressing.** Every $\text{addr}$ pair $(a, \pi)$ is declared by an addressing artifact: some artifact in $A$ whose content records that $a$ addresses $\pi$. Addressing is not implicit.

4. **Validity-node closure.** For every demonstrative warrant carried by some $k$ depending on $\nu(\kappa)$: for every $j$ with $(j, \nu(\kappa)) \in \text{att}$, we also have $(j, k) \in \text{att}$.

### Bridge: what each condition is doing

Condition 1 is the core of this module: no attack edge exists without a warrant. An edge in $\text{att}$ without a corresponding entry in $W$ would be a bare accusation — the kind of thing Definition 3.4 rules out.

Condition 2 ensures that problems carry *usable* criteria. A criterion that can't be instantiated as a commitment — that can't produce a verdict — can't drive the system forward. This is the counterpart to $I(a)$ being finite and concrete.

Condition 3 tightens the addressing relation. An artifact can't silently "count" as addressing a problem; there must be an artifact recording the address. This keeps the system's bookkeeping transparent and attackable — the addressing claim is itself a piece of content.

Condition 4 is the closure rule, promoted from a property of individual warrants to a requirement on the whole state: not just that individual warrants respect the rule, but that the attack graph *has been completed* to reflect all closure-implied edges.

<details><summary>Check yourself: which condition does a state violate?</summary>

**Scenario.** You have artifacts $\{a, k, j, \nu\}$ in $A$ with $k$ attacking $a$ demonstratively (depending on validity node $\nu$), and $j$ attacking $\nu$ — but the edge $(j, k)$ is missing from $\text{att}$.

**Answer.** Condition 4 (validity-node closure) is violated. The state has $(j, \nu) \in \text{att}$ and $k$ depends on $\nu$, so closure requires $(j, k) \in \text{att}$. Its absence makes the state ill-formed.

</details>

---

## Worked Example (Closure and Well-Formedness Check)

**Setup.** Let $A = \{a, k, \nu, j\}$ with:
- $a$: a conjecture addressed to problem $\pi$.
- $k$: a demonstrative attack on $a$, packaging a failing verdict for commitment $\kappa$, depending on validity node $\nu$.
- $\nu$: an artifact asserting "commitment $\kappa$ is a sound and relevant test for $a$."
- $j$: an argumentative attack on $\nu$, arguing $\nu$'s content is mistaken — $\kappa$ is not a reliable test.

**Warrant map.** $W(k, a) = (\kappa,\, V(\kappa, a) = \text{fail},\, \nu)$. $W(j, \nu) = $ (an argumentative warrant: $j$'s commitments claim $\nu$ is wrong).

**Current attack relation.** $\text{att} = \{(k, a),\, (j, \nu)\}$.

**Well-formedness check.**

- Condition 1: $(k,a)$ has warrant $W(k,a)$ ✓; $(j, \nu)$ has warrant $W(j,\nu)$ ✓.
- Condition 2: assume $\text{Crit}_\pi$ consists of commitment schemas ✓.
- Condition 3: assume $\text{addr}$ pairs are declared ✓.
- Condition 4: $k$ depends on $\nu$, and $(j, \nu) \in \text{att}$. So closure requires $(j, k) \in \text{att}$. But $(j, k) \notin \text{att}$.

**Verdict.** The state is **ill-formed** — condition 4 fails.

**Fix.** Add $(j, k)$ to $\text{att}$ with a warrant (the closure rule does not require a new independent warrant for $(j,k)$; the rule registers the edge as a structural consequence). After adding it:

$$
\text{att} = \{(k, a),\, (j, \nu),\, (j, k)\}
$$

Now all four conditions hold. The state is well-formed.

**Reading the corrected graph.** $j$ attacks both $\nu$ (the test's validity certificate) and $k$ (the attack on $a$). If $j$ is later found unattacked — or is defended by some further artifact — the adjudicator (module 7) will accept $j$, refute $k$ (attacked by accepted $j$), and accept $a$ (no longer attacked by an accepted artifact). The closure rule is what makes this chain computable from the graph alone.

---

## Exercises

**1.** An attack $(k, a)$ has a demonstrative warrant depending on $\nu(\kappa)$. Artifact $m$ attacks $k$ directly (with its own argumentative warrant). Does the closure rule add any new edges? Explain.

<details><summary>Show solution</summary>

No new edges are added by the closure rule. The closure rule fires only when an artifact attacks $\nu(\kappa)$ — the validity node — not when it attacks $k$ directly. Here $m \to k$ exists by an independent argumentative warrant, not via $\nu(\kappa)$. Closure is a rule about attacks *on the validity node* propagating to the warrant-carrier; attacks on the warrant-carrier itself are separate events, already recorded in $\text{att}$.

</details>

---

**2.** A state has three problems $\pi_1, \pi_2, \pi_3$. The criteria of $\pi_1$ are commitment schemas. The criteria of $\pi_2$ include a natural-language sentence "the conjecture should be elegant." The criteria of $\pi_3$ are empty ($\text{Crit}_{\pi_3} = \emptyset$). Which problems, if any, cause the state to be ill-formed?

<details><summary>Show solution</summary>

$\pi_2$ violates condition 2. "The conjecture should be elegant" is not a commitment schema — it cannot be instantiated as a commitment $\kappa = (\tau, \beta)$ that produces a verdict. A criterion must be a schema that a test program can evaluate. ($\pi_3$ with empty criteria does *not* violate condition 2: an empty set of commitment schemas is still a set of commitment schemas, just vacuously so. A problem with no criteria yet is fine — criteria grow as the problem evolves.)

</details>

---

**3.** (Conceptual.) A skeptic says: "The closure rule is unfair. If $j$ attacks the validity node $\nu(\kappa)$, that's a separate matter from $k$'s attack on $a$. Why should $j$ get credit for attacking $k$?" Give the best reply.

<details><summary>Show solution</summary>

The reply: $k$'s attack on $a$ is *not* independent of $\nu(\kappa)$. $k$ is a demonstrative warrant precisely because it packages a test result and *depends on* $\nu(\kappa)$ to establish the test's soundness. If $\nu(\kappa)$ is itself under attack — if there is a live challenge to whether $\kappa$ is a sound and relevant test — then the evidential basis of $k$'s attack on $a$ is undermined. The closure rule makes this dependency explicit in the attack graph, so the adjudicator can compute statuses correctly. Without closure, $k$ would survive as an accepted artifact even when its own foundation is challenged, which would be a bookkeeping lie. "Separate matter" is the misconception: demonstrative attacks are not self-contained; they inherit vulnerability from the validity nodes they rely on.

</details>

---

**4.** State $S$ has $\text{att} = \{(k_1, a), (k_2, a), (j, \nu_1)\}$ where $k_1$ is demonstrative (depending on $\nu_1$) and $k_2$ is argumentative. Is $S$ well-formed? If not, state exactly what edge is missing and why.

<details><summary>Show solution</summary>

$S$ is **ill-formed**. The demonstrative warrant of $k_1$ depends on $\nu_1$, and $(j, \nu_1) \in \text{att}$. By the closure rule (condition 4), $(j, k_1)$ must also be in $\text{att}$. It is not, so condition 4 fails. The argumentative attack $k_2 \to a$ is unaffected — $k_2$ does not depend on $\nu_1$, so closure generates no obligation for $k_2$. The fix: add $(j, k_1)$ to $\text{att}$ with a warrant recording the structural closure.

</details>

---

**5.** (Stretch.) Suppose $k$ carries a demonstrative warrant depending on $\nu(\kappa)$, and $\nu(\kappa)$ itself carries a demonstrative warrant depending on $\nu(\kappa')$ — the soundness of $\kappa$ is itself justified by a higher-level test. Now $j$ attacks $\nu(\kappa')$. What edges does the closure rule require?

<details><summary>Show solution</summary>

Apply the rule once for each dependency. $\nu(\kappa)$ carries a demonstrative warrant depending on $\nu(\kappa')$, so: $(j, \nu(\kappa')) \in \text{att}$ forces $(j, \nu(\kappa)) \in \text{att}$ (closure for the warrant carried by $\nu(\kappa)$). Now $\nu(\kappa)$ is attacked by $j$, and $k$ carries a demonstrative warrant depending on $\nu(\kappa)$, so: $(j, \nu(\kappa)) \in \text{att}$ forces $(j, k) \in \text{att}$. In total, the closure rule requires adding both $(j, \nu(\kappa))$ and $(j, k)$ to $\text{att}$. The rule propagates along chains of demonstrative dependency: an attack on a validity node propagates to every warrant-carrier that depends on it, transitively.

</details>

---

## Recap

Every edge in the attack graph $\text{att}$ must carry a warrant — demonstrative (a packaged failing verdict plus a validity node $\nu(\kappa)$) or argumentative (an explanatory artifact claiming deficiency). The validity node is the artifact that vouches for a test's soundness, and the closure rule makes attacks on $\nu(\kappa)$ automatically propagate to any warrant-carrier that depends on it, keeping the graph honest about evidential dependencies. An epistemic state is well-formed when all four conditions hold: every attack is warranted, problem criteria are commitment schemas, addressing is declared, and closure is complete. These conditions are what module 6's transition rules (Conj) and (Crit) will be designed to preserve.
