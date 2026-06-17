---
title: Epistemic States and the Attack Graph
course: conjecture-criticism-calculus
order: 4
summary: A snapshot of inquiry is a five-part tuple S=(A,Π,addr,att,W); its heart is att, a directed graph in which an arrow from k to a means exactly "k attacks a."
estimatedMinutes: 20
objectives:
  - State Definition 3.3 and name each of the five components of an epistemic state S
  - Read att⊆A×A and addr⊆A×Π as binary relations on finite sets
  - Draw and read a directed attack graph from a given att, identifying nodes, edges, and who attacks whom
  - Construct a small epistemic state from a plain-English description of a critical exchange
prerequisites: [artifacts-and-problems]
---

Picture a debate frozen mid-argument. Three ideas are on the table; one of them is attacking another; a third is attacking the attacker. What do you need to write down to capture that scene completely — not just "who said what" but the full mathematical structure of who exists, what problems they address, and who is currently targeting whom? That is exactly the question Definition 3.3 answers. A single tuple, five components, and you have a precise snapshot of inquiry at any moment in time.

## Directed graphs: nodes and arrows

Before the definition, you need one piece of structure the calculus depends on. You have seen relations as sets of ordered pairs — from your set-theory background, a relation $R$ on a set $A$ is just a subset $R \subseteq A \times A$, meaning a collection of pairs $(x, y)$ drawn from $A$. A **directed graph** is that idea given a picture: draw each element of $A$ as a dot (a **node**) and each pair $(x, y) \in R$ as an arrow from $x$ to $y$ (a **directed edge**).

The key word is *directed*: the arrow from $x$ to $y$ is not the same as the arrow from $y$ to $x$. The edge $(x, y)$ goes one way. If both $(x,y)$ and $(y,x)$ are in $R$ you draw two arrows, one each way. If neither is, you draw none.

In this calculus, the set of nodes is the artifact set $A$, and the relation is the attack relation. An edge $(k, a) \in \mathit{att}$ carries one meaning: **k attacks a**. That is all. No edge means no attack, and no attack means no claim from $k$ against $a$ — at least not yet.

Reading directed graphs is a skill you will use for the rest of this course, so practice it on a small example before the formal definition.

**Small example.** Suppose we have three artifacts: $a_1$, $a_2$, $a_3$. The attack relation is:

$$
\mathit{att} = \{(a_2, a_1),\; (a_3, a_2)\}.
$$

As a directed graph:

```
a_3  →  a_2  →  a_1
```

Read it left to right: $a_3$ attacks $a_2$, and $a_2$ attacks $a_1$. No arrow points at $a_3$; nothing attacks it. Nothing points from $a_1$ outward; it does not attack anyone.

There are only two edges and three nodes — but already the structure tells a story. $a_1$ is under attack, $a_2$ is both attacking and under attack, and $a_3$ is attacking but itself unattacked. As the course unfolds, this layout will determine exactly which artifacts stand and which fall. For now, simply read the graph: an arrow from $k$ to $a$ means $k$ attacks $a$.

<details><summary>Check yourself: reading att as ordered pairs</summary>

Consider the attack relation $\mathit{att} = \{(b, a),\; (c, b),\; (c, a)\}$ on artifact set $\{a, b, c\}$.

**Before you open this:** Draw the directed graph on paper. Label the three nodes $a$, $b$, $c$. For each ordered pair, draw an arrow from the first element to the second. Then answer: how many attackers does $a$ have? How many does $c$ have?

**Answer.** $a$ has two attackers: $b$ (because $(b,a) \in \mathit{att}$) and $c$ (because $(c,a) \in \mathit{att}$). The node $c$ has no attackers: it does not appear as the second element of any pair in $\mathit{att}$. $b$ has one attacker: $c$.

Graph:

```
c → b → a
 \      ↑
  ------/
```

(Two arrows leave $c$: one to $b$, one directly to $a$.)

</details>

## Definition 3.3 — Epistemic state

With directed graphs in hand, here is the definition the module is built around.

## Definition (Epistemic State)

An **epistemic state** is a five-tuple

$$
S = (A,\, \Pi,\, \mathit{addr},\, \mathit{att},\, W)
$$

where:

- $A$ is a finite set of **artifacts**,
- $\Pi$ is a finite set of **problems**,
- $\mathit{addr} \subseteq A \times \Pi$ is the **addressing relation** — the set of pairs $(a, \pi)$ such that artifact $a$ is offered as a response to problem $\pi$,
- $\mathit{att} \subseteq A \times A$ is the **attack relation** — the set of ordered pairs $(k, a)$ such that artifact $k$ attacks artifact $a$,
- $W$ is the **warrant map** — a function assigning to each edge $(k, a) \in \mathit{att}$ a warrant justifying that attack.

*(Definition 3.3)*

## Decoding each component

The definition packs five objects into one line. Here is what each one is doing.

**$A$ — the artifact set.** Every piece of content under active consideration — every conjecture, every criticism, every problem criterion, every experimental report — lives in $A$ as an artifact $a = (c(a), I(a))$ (the content plus the commitment interface you saw in module 3). $A$ is finite at any moment; the transition rules can add to it but never delete.

**$\Pi$ — the problem set.** Every open question the system is tracking. A problem $\pi = (d_\pi, \mathit{Crit}_\pi, \mathit{prov}_\pi)$ is a description, a growing set of criteria, and a provenance record. Like $A$, the set $\Pi$ grows but never shrinks.

**$\mathit{addr} \subseteq A \times \Pi$ — addressing.** A pair $(a, \pi) \in \mathit{addr}$ says that artifact $a$ is put forward as addressing problem $\pi$. This relation tracks *which ideas are competing to answer which questions*. Not every artifact addresses every problem; not every problem has an artifact addressing it yet. The relation is declared explicitly — an artifact does not automatically address a problem just by mentioning it.

**$\mathit{att} \subseteq A \times A$ — the attack graph.** This is the heart of the state. Each pair $(k, a) \in \mathit{att}$ says that artifact $k$ attacks artifact $a$. Read it as a directed graph: nodes are the artifacts in $A$, and each pair is an arrow. In the "map of arrows" picture: $k \to a$ means $k$ attacks $a$. Nothing more, nothing less. The structure of this graph — who has attackers, who is defending someone, who is unattacked — is what the adjudication rule (later) will turn into a verdict on every artifact.

**$W$ — the warrant map.** An attack edge is not a bare accusation. Every $(k, a) \in \mathit{att}$ must be backed by a justification: a *warrant*. The map $W$ records what that justification is for each edge. There are two kinds of warrant, demonstrative and argumentative, and the full treatment belongs to module 5. For now, just note that $W$ is part of the tuple — every arrow in the attack graph comes tagged with a reason, and the system enforces this.

## Worked example: building a state

Here is a small critical exchange and the epistemic state it induces.

**The scenario.** A student conjectures that a certain recursive function terminates on all inputs. A critic argues that the student's analysis overlooks a boundary case. A defender then argues that the critic's boundary-case objection misreads the base case of the recursion. Three artifacts, one problem.

**Building $A$.** We have three artifacts:
- $a_1$ — the conjecture (the termination claim with its analysis).
- $a_2$ — the criticism (pointing to the alleged boundary-case gap).
- $a_3$ — the defense (arguing that the boundary-case objection misreads the base case).

So $A = \{a_1, a_2, a_3\}$.

**Building $\Pi$.** There is one problem: $\pi_1$ — "Does this recursive function terminate on all inputs?"

So $\Pi = \{\pi_1\}$.

**Building $\mathit{addr}$.** Only $a_1$ is put forward as an answer to $\pi_1$; the criticism and the defense are attacks, not direct answers to the termination question.

$$
\mathit{addr} = \{(a_1, \pi_1)\}.
$$

**Building $\mathit{att}$.** The criticism $a_2$ attacks the conjecture $a_1$. The defense $a_3$ attacks the criticism $a_2$.

$$
\mathit{att} = \{(a_2, a_1),\; (a_3, a_2)\}.
$$

**Building $W$.** Each edge carries a warrant. $W(a_2, a_1)$ is the warrant justifying $a_2$'s attack on $a_1$ — say, the specific commitment that $a_1$'s analysis fails on the base case. $W(a_3, a_2)$ is the warrant justifying $a_3$'s attack on $a_2$ — the claim that $a_2$ misidentifies what the base case says. (Module 5 will open $W$ up and show the two warrant types in full.)

**The state.**

$$
S = \bigl(\{a_1, a_2, a_3\},\; \{\pi_1\},\; \{(a_1, \pi_1)\},\; \{(a_2, a_1),\,(a_3, a_2)\},\; W\bigr).
$$

**The graph.**

```
a_3  →  a_2  →  a_1    (a_1 addresses π_1)
```

$a_3$ is unattacked. $a_2$ is attacked (by $a_3$). $a_1$ is attacked (by $a_2$). The conjecture is under attack, but its attacker is itself under attack. What happens to $a_1$ in light of this? That is the question module 7 answers with the grounded extension. For now, we have the snapshot — the state — written down exactly.

<details><summary>Check yourself: reading a state</summary>

Consider the epistemic state $S = (A, \Pi, \mathit{addr}, \mathit{att}, W)$ where:

$$
A = \{p, q, r, s\}, \quad \Pi = \{\pi\},
$$

$$
\mathit{addr} = \{(p, \pi),\, (q, \pi)\}, \quad \mathit{att} = \{(r, p),\, (s, r)\}.
$$

**Before reading on:** Draw the attack graph. Which artifacts are addressing $\pi$? Which artifacts are under attack? Which artifact is unattacked?

**Answer.**

Attack graph:

```
s  →  r  →  p        q  (no edges involving q or s as targets)
```

- Artifacts addressing $\pi$: $p$ and $q$. Both are competing answers to the same problem.
- $p$ is under attack (by $r$). $r$ is under attack (by $s$).
- $q$ is not under attack — no pair in $\mathit{att}$ has $q$ as second element.
- $s$ is unattacked — no pair in $\mathit{att}$ has $s$ as second element.

Note that $q$ addresses $\pi$ but is completely unattacked. $p$ also addresses $\pi$ but is currently under fire.

</details>

## Exercises

**Exercise 1** *(mechanical)*. Write out the epistemic state $S$ for the following scenario in full tuple notation. There are two artifacts: $a$ (a conjecture) and $k$ (a criticism of $a$). There is one problem $\pi$, which $a$ addresses. $k$ attacks $a$.

<details><summary>Show solution</summary>

$$
A = \{a, k\}, \quad \Pi = \{\pi\}, \quad \mathit{addr} = \{(a, \pi)\}, \quad \mathit{att} = \{(k, a)\}.
$$

$W$ assigns a warrant to the single attack edge $(k, a)$.

$$
S = \bigl(\{a, k\},\; \{\pi\},\; \{(a,\pi)\},\; \{(k, a)\},\; W\bigr).
$$

Attack graph:

```
k  →  a   (a addresses π)
```

$k$ is unattacked. $a$ is under attack. $k$ does not address $\pi$ — it is a criticism, not a proposed answer to the problem.

</details>

---

**Exercise 2** *(mechanical)*. Given $\mathit{att} = \{(b, a),\, (c, b),\, (b, c)\}$ on $A = \{a, b, c\}$:

(a) Draw the directed attack graph.
(b) List all artifacts that are under attack (i.e., appear as the second element of some pair in $\mathit{att}$).
(c) List all artifacts that attack at least one other artifact.
(d) Is any artifact both attacking and under attack?

<details><summary>Show solution</summary>

(a) Edges: $b \to a$, $c \to b$, $b \to c$.

```
     ↗ c ↘
a ← b  ←↗
```

More precisely: an arrow from $b$ to $a$; an arrow from $c$ to $b$; an arrow from $b$ to $c$. So $b$ and $c$ have arrows going back and forth between them.

(b) Under attack: $a$ (attacked by $b$), $b$ (attacked by $c$), $c$ (attacked by $b$). All three are targets of some edge.

(c) Attacking at least one other: $b$ (attacks $a$ and $c$), $c$ (attacks $b$). So $b$ and $c$.

(d) Yes: both $b$ and $c$ are simultaneously attacking and under attack. $b$ attacks $c$ and is attacked by $c$; $c$ attacks $b$ and is attacked by $b$. This is a cycle, and cycles lead to suspended status in the adjudicator — which module 7 handles.

Note: $a$ is under attack but does not attack anyone. It is a purely passive target in this state.

</details>

---

**Exercise 3** *(conceptual)*. Suppose two artifacts $a_1$ and $a_2$ both appear in $A$ and both address the same problem $\pi$ — so $(a_1, \pi) \in \mathit{addr}$ and $(a_2, \pi) \in \mathit{addr}$. Is it required that one attacks the other? Explain why or why not using the definition of $\mathit{att}$.

<details><summary>Show solution</summary>

No. Addressing the same problem does not automatically create an attack edge. The attack relation $\mathit{att} \subseteq A \times A$ is built from pairs that are *explicitly registered*; an artifact does not attack another just by existing or by competing for the same problem.

Two conjectures can both address $\pi$ and be completely unconnected in the attack graph — they are rivals in the sense of competing for the same problem, but neither has yet produced a warranted argument against the other. The calculus keeps them both in $A$, both in $\mathit{addr}$, and simply records that no attack edge exists between them. (Module 6 will introduce the (Crit) rule, which is the only way to register a new attack; module 11 will show that surviving rivalry without an attack between rivals is itself a trigger for a new problem.)

This is one place where the formal system is careful: *rivalry is not the same as attack*. Rivalry is captured by the structure of $\mathit{addr}$; attack is captured by $\mathit{att}$. They are separate relations for a reason.

</details>

---

**Exercise 4** *(conceptual)*. The definition requires $\mathit{att} \subseteq A \times A$, meaning both the attacker and the attacked must be artifacts already in $A$. Explain in one or two sentences why this constraint matters. What would go wrong if $\mathit{att}$ could contain a pair $(k, a)$ where $k \notin A$?

<details><summary>Show solution</summary>

Every edge in $\mathit{att}$ must connect two nodes that actually exist in the artifact set $A$. If $k \notin A$, then $k$ is not a registered artifact in this state: it has no content $c(k)$, no commitment interface $I(k)$, and no warrant map entry — the system has no record of it. An attack from a non-artifact is not a well-formed attack; it cannot carry a warrant, and the adjudicator has nothing to work with on $k$'s side.

Requiring $\mathit{att} \subseteq A \times A$ is the formal statement that *only registered artifacts can participate in the attack graph*. This also means that adding a new criticism to the system requires first adding it to $A$ — which is exactly what the (Crit) transition rule does (module 6).

</details>

---

**Exercise 5** *(stretch)*. A directed graph on $A$ is called a **tournament** if for every two distinct nodes $a, b \in A$, exactly one of $(a,b)$ or $(b,a)$ is in $\mathit{att}$. Can an attack graph in this calculus be a tournament? What would that mean for the system, and is there any formal reason it could not happen?

<details><summary>Show solution</summary>

Yes, an attack graph can in principle be a tournament. The definition of $\mathit{att}$ imposes no restriction on which pairs are included beyond $\mathit{att} \subseteq A \times A$ — both $(a,b)$ and $(b,a)$ can simultaneously be in $\mathit{att}$ (a mutual attack), or exactly one, or neither.

A tournament attack graph would mean: every pair of artifacts is in some attack relation — no two artifacts ignore each other. That is an unusual but not forbidden configuration. In a tournament with an odd number of nodes, every artifact is attacked by at least one other, and no artifact is unattacked. The grounded extension (module 7) would compute a fixed point from this structure; how populated that extension is depends on the specific tournament's structure.

The one formal constraint that *would* limit this in practice is the warrant requirement: every edge in $\mathit{att}$ must carry a warrant registered in $W$ (and must satisfy the formation rules of module 5). Whether a tournament's full set of edges can all carry valid warrants is a question about the specific content of the artifacts involved — it is not ruled out by the definition of $S$ alone.

</details>

## Recap

An epistemic state $S = (A, \Pi, \mathit{addr}, \mathit{att}, W)$ is a precise snapshot of inquiry: who is in the room ($A$ and $\Pi$), what each artifact claims to answer ($\mathit{addr}$), who is attacking whom ($\mathit{att}$), and on what grounds each attack rests ($W$). The attack relation $\mathit{att} \subseteq A \times A$ is a directed graph — nodes are artifacts, arrows are attacks, and an arrow from $k$ to $a$ means exactly one thing: $k$ attacks $a$. This "map of arrows" is the structure the adjudicator will read to determine which artifacts currently stand. Module 5 opens the warrant map $W$ and shows what a warranted attack actually looks like; module 7 builds the machinery that reads the attack graph and assigns each artifact a status.
