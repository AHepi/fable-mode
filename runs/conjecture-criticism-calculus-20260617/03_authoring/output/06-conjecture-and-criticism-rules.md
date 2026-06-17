---
title: "Conjecture and Criticism: the Building Rules"
course: conjecture-criticism-calculus
order: 6
summary: Two transition rules grow a state — (Conj) introduces a conjecture (and requires a problem to answer), (Crit) introduces a warranted attack — and nothing is ever deleted.
estimatedMinutes: 20
objectives:
  - State the (Conj) transition rule as a premise/conclusion pair and identify the problem premise.
  - Explain why (Conj) is disabled when the problem set is empty.
  - State the (Crit) transition rule and identify the warrant it requires.
  - Apply both rules to a small epistemic state and produce the resulting state and attack graph.
  - Explain why "refuted" is a computed status, not an erasure, and why the no-deletion principle matters.
prerequisites: [warrants-and-well-formedness]
---

The system we have built so far is a very detailed snapshot: a tuple $S = (A, \Pi, \mathit{addr}, \mathit{att}, W)$ holding artifacts, problems, an addressing relation, an attack graph, and a warrant map (module 4). The attack graph is well-formed exactly when every edge carries a registered warrant (module 5). But a snapshot, however precise, does not move. This module gives the system its first two engines of motion — two **transition rules** that rewrite a state $S$ into a successor state $S'$.

Transitions in this calculus are written $S \rightsquigarrow S'$: "state $S$ can become state $S'$ in one step." Each rule is a **premise/conclusion pair**: the premises are what must hold in $S$ before the rule fires; the conclusion says what gets added to produce $S'$. By design, every transition only adds — nothing is ever removed. That principle is not a convenience; it is one of the load-bearing commitments of the calculus, and we will come back to it.

The two rules this module owns are **(Conj)**, which introduces a new conjecture, and **(Crit)**, which introduces a new criticism along with its warranted attack edge.

---

## (Conj): Conjecture introduction

A **conjecture** is an artifact introduced to address a problem (module 3). Every conjecture needs a problem to answer — there is nothing to conjecture *about* without one. The conjecture–criticism loop from module 1 begins with a problem precisely because problems are what drive inquiry forward; (Conj) makes that structural rather than motivational.

Here is the picture before the formalism: you have a current state $S$ with at least one problem $\pi$ sitting in $\Pi$. The conjecture operator $\gamma$ takes $\pi$ and the whole current state $S$ and produces a new artifact $a = \gamma(\pi, S)$ — the conjecture. That artifact gets registered: added to $A$, linked to $\pi$ via $\mathit{addr}$, and equipped with its commitment interface $I(a)$.

The bridge: the premises below are exactly "there is a problem to address" and "the operator produces something." The conclusion adds that something and records where it is aimed.

## Rule (Conj)

$$
\frac{\pi \in \Pi \qquad a = \gamma(\pi, S)}{S' = \bigl(A \cup \{a\},\; \Pi,\; \mathit{addr} \cup \{(a,\pi)\},\; \mathit{att},\; W\bigr)}
$$

*In words:* if there is a problem $\pi$ in the current problem set, and $\gamma$ produces a new artifact $a$ in response to it and to the current state, then $S'$ is $S$ with $a$ added to the artifact pool and the pair $(a,\pi)$ added to the addressing relation. The attack relation $\mathit{att}$ and the warrant map $W$ are untouched — the conjecture arrives without attacking anything.

**The disabled case.** When $\Pi = \emptyset$ — no problems registered — the rule has no first premise to satisfy. (Conj) is disabled. The calculus cannot conjecture in a vacuum; inquiry begins with a problem, not with an artifact searching for one. This is constraint D1 of the source note made structural: problems are primitive, and the engine stalls without them.

<details><summary>Check yourself: why is (Conj) disabled when $\Pi = \emptyset$?</summary>

The rule's first premise is $\pi \in \Pi$. If $\Pi = \emptyset$, there is no $\pi$ to satisfy it. The rule is a conditional: if the premises hold, fire; since the premise cannot hold, the rule cannot fire. It is not that conjecture is *forbidden* — it is that there is nothing to conjecture about. The calculus encodes "problems first" as a structural constraint, not a policy suggestion.

</details>

---

## (Crit): Criticism introduction

A **criticism** is an artifact $k$ that attacks another artifact $a$, and every attack edge must carry a warrant (module 5). The (Crit) rule adds $k$ to the artifact pool, draws the attack edge $(k, a)$ in $\mathit{att}$, and registers the warrant $w$ in $W$.

The picture: you have a current state $S$ containing some artifact $a$. Someone constructs a criticism $k$ — itself an artifact in the sense of module 3, with content $c(k)$ and interface $I(k)$ — together with a valid warrant $w$ for the claim that $k$ attacks $a$. (The warrant is either demonstrative — packaging a failing verdict — or argumentative, as module 5 explains.) The rule fires, and $S'$ contains $k$, the new edge, and the warrant's registration.

The bridge: the premises say $a$ exists and $k$ arrives with proof-of-attack. The conclusion wires everything together.

## Rule (Crit)

$$
\frac{a \in A \qquad k \text{ an artifact} \qquad w \text{ a valid warrant for } (k,a)}{S' = \bigl(A \cup \{k\},\; \Pi,\; \mathit{addr},\; \mathit{att} \cup \{(k,a)\},\; W \cup \{(k,a) \mapsto w\}\bigr)}
$$

*In words:* if $a$ is already in the artifact pool and $k$ is presented together with a valid warrant $w$ justifying the attack $(k,a)$, then $S'$ extends $S$ by adding $k$ to $A$, the edge $(k,a)$ to $\mathit{att}$, and the entry $(k,a) \mapsto w$ to the warrant map $W$.

Notice that $k$ is itself an artifact — content plus a commitment interface (module 3). This is the artifact-uniformity principle at work: every criticism is itself an artifact and hence attackable. A criticism does not arrive as a bare verdict ("$a$ is wrong"); it arrives as a thing with structure that can be addressed, committed to, and attacked. That is what "whatever can attack can be attacked" means in the formalism.

<details><summary>Check yourself: what would make a warrant invalid, blocking (Crit) from firing?</summary>

A warrant $w$ for the edge $(k,a)$ must satisfy one of the two conditions from module 5: it is **demonstrative** (packages a failing verdict $V(\kappa, c(a)) = \mathit{fail}$ with a validity node $\nu(\kappa)$ asserting the test is sound) or **argumentative** (an explanatory artifact whose commitments assert $a$'s deficiency). If $w$ is neither — if $k$ simply claims $a$ is wrong without registering a warrant of either type — the well-formedness condition is not met and (Crit) does not fire. Every attack edge in the system carries a warrant; the rule enforces this at the point of introduction.

</details>

---

## Nothing is ever deleted

Both rules only add. (Conj) adds an artifact and an addressing pair. (Crit) adds an artifact, an attack edge, and a warrant entry. No rule in this calculus — not (Conj), not (Crit), and not any of the rules to come — removes an artifact, a problem, an edge, or a warrant entry from the state.

This is **the no-deletion principle**, and it is worth sitting with rather than skipping past.

When a criticism $k$ succeeds in attacking a conjecture $a$, nothing happens to $a$ in the artifact pool. $a$ is still there, in $A$, with its content, its interface, its addressing relation, and every warrant that referenced it. What changes is $a$'s **status** — a computed quantity that the adjudication rule (Adj) will assign in module 8, by running the grounded extension over the current attack graph. "Refuted" means: given the current attack graph, the adjudicator assigns $a$ the status *refuted*. It does not mean: $a$ was erased.

The distinction is not pedantic. If deletion happened, reinstatement could not: once an artifact is gone, a criticism of its criticism has nothing to revive. The system would lose its memory of what was proposed. But because the system keeps everything and recomputes statuses from the current graph, a new attack on $k$ — a criticism of the criticism — can change the graph so that the adjudicator now assigns $a$ the status *accepted*. That is reinstatement, and it is a theorem, not a promise (module 8 will prove it). The theorem only makes sense if the artifact $a$ was never removed.

> **Refuted is a computed status, not an erasure.** The artifact persists; the label is a function of the current attack graph.

This is constraint D8 of the source note — "refutation is demotion, not annihilation" — built directly into the transition rules by giving them no delete operation.

---

## Worked example

Start from a small state and apply both rules once each.

**Initial state $S_0$.** Suppose we have:
- $A = \emptyset$ (no artifacts yet)
- $\Pi = \{\pi_0\}$ where $\pi_0$ is the problem "Why does the bridge sway in wind?"
- $\mathit{addr} = \emptyset$, $\mathit{att} = \emptyset$, $W = \emptyset$

This is a lean but well-formed state: one open problem, nothing else.

**Step 1: apply (Conj).**

The premise $\pi_0 \in \Pi$ holds. The conjecture operator produces $a_1 = \gamma(\pi_0, S_0)$, an artifact whose content $c(a_1)$ is "the bridge sways because wind creates oscillating lift forces matching the structure's resonant frequency," with interface $I(a_1)$ containing one commitment: a stress-test against the frequency-matching claim.

$$
S_1 = \bigl(\{a_1\},\; \{\pi_0\},\; \{(a_1,\pi_0)\},\; \emptyset,\; \emptyset\bigr)
$$

The attack graph is still empty. One artifact, one problem, one addressing link. The new state is well-formed: the only artifact $a_1$ has no attackers, so the warrant requirement is vacuously satisfied.

**Step 2: apply (Crit).**

A second artifact $k_1$ is constructed whose content $c(k_1)$ says "the wind speed on the day in question was below the resonant threshold — the frequency-matching premise fails." Together with $k_1$ comes a demonstrative warrant $w_1$: a failing verdict $V(\kappa, c(a_1)) = \mathit{fail}$ under a commitment $\kappa$ that tests whether the reported wind speed falls in the resonant range, plus a validity node $\nu(\kappa)$ asserting the test is sound. The premises of (Crit) are met: $a_1 \in A$, $k_1$ is an artifact, $w_1$ is a valid warrant for $(k_1, a_1)$.

$$
S_2 = \bigl(\{a_1, k_1\},\; \{\pi_0\},\; \{(a_1,\pi_0)\},\; \{(k_1,a_1)\},\; \{(k_1,a_1) \mapsto w_1\}\bigr)
$$

The attack graph now has two nodes and one directed edge: $k_1 \to a_1$. The state is well-formed: the one attack edge $(k_1,a_1)$ carries the registered warrant $w_1$.

**Reading the result.** Both $a_1$ and $k_1$ are in $A$. Neither has been deleted or marked. At this moment, what are their statuses? That question belongs to (Adj) and the grounded extension — module 7 builds the machinery, module 8 applies it. For now, observe only that the attack graph records the relationship: $k_1$ has attacked $a_1$, with a warrant. The system has memory of every move.

---

## Exercises

**1.** Write out the state $S_2$ from the worked example in set-notation form and identify, for each component of the tuple $(A, \Pi, \mathit{addr}, \mathit{att}, W)$, which transition rule contributed to its change from $S_0$.

<details><summary>Show solution</summary>

From $S_0 = (\emptyset, \{\pi_0\}, \emptyset, \emptyset, \emptyset)$:

- (Conj) added $a_1$ to $A$ and $(a_1, \pi_0)$ to $\mathit{addr}$.
- (Crit) added $k_1$ to $A$, $(k_1, a_1)$ to $\mathit{att}$, and $(k_1,a_1) \mapsto w_1$ to $W$.

Neither rule touched $\Pi$ (which stayed $\{\pi_0\}$). The tuple breakdown is:

$$
S_2 = \bigl(\underbrace{\{a_1,k_1\}}_{\text{(Conj)+(Crit)}},\; \underbrace{\{\pi_0\}}_{\text{unchanged}},\; \underbrace{\{(a_1,\pi_0)\}}_{\text{(Conj)}},\; \underbrace{\{(k_1,a_1)\}}_{\text{(Crit)}},\; \underbrace{\{(k_1,a_1)\mapsto w_1\}}_{\text{(Crit)}}\bigr)
$$

</details>

---

**2.** Suppose someone proposes applying (Crit) to add an attack edge $(k_2, a_1)$ but offers no warrant. Is the resulting state well-formed? What does the (Crit) rule say?

<details><summary>Show solution</summary>

No. The third premise of (Crit) requires "a valid warrant $w$ for $(k_2, a_1)$." Without a warrant, the premise is not satisfied and the rule does not fire. If somehow the edge were added despite this — treating the premise as advisory rather than required — the resulting state would be **not well-formed**: the §3.2 formation rule states that every attack edge must carry a registered warrant. The rule's premise and the well-formedness condition enforce the same constraint from two directions: (Crit) will not produce a state with an unwarranted edge, and any state with an unwarranted edge fails the formation check.

</details>

---

**3.** Starting from $S_2$ above, describe (in words, without constructing $w$) what a second (Crit) step would look like if someone wished to criticize $k_1$ rather than $a_1$. What would the attack graph of $S_3$ look like?

<details><summary>Show solution</summary>

A second criticism $k_2$ would target $k_1$: its warrant $w_2$ would be valid for the edge $(k_2, k_1)$. Applying (Crit) with $a = k_1$, $k = k_2$, $w = w_2$ gives:

$$
S_3 = \bigl(\{a_1,k_1,k_2\},\; \{\pi_0\},\; \{(a_1,\pi_0)\},\; \{(k_1,a_1),(k_2,k_1)\},\; \{(k_1,a_1)\mapsto w_1,\,(k_2,k_1)\mapsto w_2\}\bigr)
$$

The attack graph has three nodes and two directed edges: $k_2 \to k_1 \to a_1$. This is the classic reinstatement chain: $k_1$ attacks $a_1$, $k_2$ attacks $k_1$. Nothing has been deleted. All three artifacts persist. Whether $a_1$ is now accepted, refuted, or suspended depends on the grounded extension — the question module 7 answers. (Spoiler: in this chain, with $k_2$ unattacked, $a_1$ will turn out accepted.)

</details>

---

**4.** *(Refuted ≠ deleted.)* A student argues: "If $k_1$ successfully attacks $a_1$, we should remove $a_1$ from $A$ to keep the state tidy. What does it matter that a refuted artifact stays in the pool?" Give two reasons the calculus gives for keeping $a_1$.

<details><summary>Show solution</summary>

**Reason 1: Reinstatement requires the artifact to exist.** If $a_1$ is removed when $k_1$ attacks it, then a later criticism of $k_1$ — say $k_2$ attacks $k_1$ with a valid warrant — has nothing to reinstate. The calculus proves (module 8) that refuting a criticism restores its target. That theorem is only possible because the target was never deleted. Deletion makes reinstatement impossible by construction.

**Reason 2: "Refuted" is a computed status, not a fact about the artifact's content.** The label *refuted* is assigned by the adjudicator (Adj) based on the *current attack graph*: specifically, $a_1$ is refuted iff some member of the grounded extension attacks it. If the graph changes — because $k_1$ is itself attacked and moves out of the grounded extension — the label can change too. A status is a function of the graph at a moment; it says nothing permanent about $a_1$'s content. Deleting $a_1$ would be treating a graph-relative label as a verdict about the artifact itself, which is precisely the confusion the no-deletion principle blocks.

</details>

---

**5.** *(Stretch.)* Can (Conj) and (Crit) be applied in the reverse order — (Crit) before (Conj) — starting from $S_0 = (\emptyset, \{\pi_0\}, \emptyset, \emptyset, \emptyset)$? Explain by checking each rule's premises.

<details><summary>Show solution</summary>

No. (Crit)'s first premise is $a \in A$: there must already be some artifact $a$ to attack. In $S_0$, $A = \emptyset$, so no such $a$ exists and (Crit) cannot fire. (Conj) must go first to place at least one artifact in $A$. This is not a policy choice: it is a consequence of the rule's premises. The ordering (Conj) → (Crit) is forced by the structure of the rules when starting from an empty artifact pool.

More generally, (Crit) can fire before (Conj) only if the state already contains artifacts — brought in by a prior (Conj) step or by some other means. The rules impose a logical dependency, not a temporal one: criticism requires something to criticize.

</details>

---

## Recap

Two transition rules now grow epistemic states: **(Conj)** adds a conjecture that addresses a problem — and is disabled whenever $\Pi = \emptyset$, making "problems first" a structural fact — while **(Crit)** adds a criticism together with its warranted attack edge, enforcing the warrant requirement from module 5 at the moment of introduction. Both rules only add; the **no-deletion principle** means "refuted" is always a computed status assigned by the adjudicator over the current attack graph, never an erasure of the artifact itself. With these two rules in hand, states can grow. What remains is a way to read the graph and assign statuses — the grounded extension that module 7 builds.
