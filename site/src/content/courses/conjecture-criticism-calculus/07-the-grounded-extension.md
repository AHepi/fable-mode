---
title: The Grounded Extension
course: conjecture-criticism-calculus
order: 7
summary: Which artifacts stand once the attacks are in? Build the answer from nothing, one round at a time, until the set stops growing.
estimatedMinutes: 28
objectives:
  - State the operator F and read its membership condition off the attack graph.
  - Compute the iteration from the empty set to its fixed point on a small graph by hand.
  - Assign the statuses accepted, refuted, and suspended from the grounded extension.
  - Explain why the iteration terminates (finite carrier, monotone operator) and connect it to induction.
prerequisites: [conjecture-and-criticism-rules]
---

We have a graph of attacks and a standing promise: nothing is ever deleted. So when a criticism lands, the artifact it hits is not erased — it is left on the page, arrow and all, waiting for someone to say which artifacts still *stand*. That "someone" cannot be a matter of taste. Two readers given the same attack graph must reach the same verdict, every time, or the calculus is just opinion with notation. What we need is a procedure: feed it `att`, turn the handle, and out comes the exact set of artifacts that survive. This module builds that procedure from nothing — and "from nothing" is meant literally.

Here is the difficulty, and it is real. An attack can itself be attacked. A criticism `k` strikes a conjecture `a`; then a second criticism `j` strikes `k`. Does `a` stand? Not on its own — `k` is against it. But `k` does not stand either, because `j` is against `k`, and `j` has no attacker at all. So `k` is knocked down, and with its only attacker gone, `a` comes back. You can feel the answer, but "feeling it" is exactly what we are trying to replace. We want the reasoning that produced it, written as a rule a machine could follow.

## The idea: rounds of standing

Picture the artifacts as contenders, and run the survival in rounds.

**Round 0.** Who stands with no argument at all? The artifacts that *nobody* attacks. They have no case to answer, so they stand outright. Collect them.

**Round 1.** Now look again, but you are allowed to lean on round 0. An artifact stands this round if every attacker against it has *already been knocked down* — and "knocked down" means attacked by someone standing from round 0. An attacker that has been refuted cannot keep its target down.

**Round 2, 3, …** Repeat. Each round, add every artifact all of whose attackers are attacked by someone you have already admitted. The set of standing artifacts only grows — you never take anyone out, because an artifact admitted because its attackers are down stays admitted when you admit *more* defenders.

Run our three-artifact example through this. Round 0: `j` has no attacker, so `j` stands; `k` is attacked (by `j`) and `a` is attacked (by `k`), so neither joins yet. Round 1: is `k`'s attacker `j` knocked down? No — nobody attacks `j`, so `j` is not down, so `k` does *not* join. Is `a`'s attacker `k` knocked down? Yes — `j` attacks `k`, and `j` is standing. So `a` joins. Round 2: nothing new can be added, and nothing already in leaves. The rounds have settled. The artifacts that stand are exactly `j` and `a`; `k` never made it in.

That is the whole construction. The rest of this module is the same idea written precisely, so we can compute with it and trust the result. Three things have to become formal: the single "one round" step, the repetition that settles, and the labels we read off the result.

## The worked computation

Before any general definition, let us do the example slowly and in full, because every later definition is just this computation named. Recall the attack graph `att` from module 4: a finite set of artifacts with directed edges, where an edge $(k,a)\in \mathrm{att}$ reads "`k` attacks `a`."

## Example (Three artifacts, by hand)

**Setup.** Artifacts $A=\{a,k,j\}$: a conjecture `a`, a criticism `k` of `a`, and a criticism `j` of `k`. The attacks are exactly
$$
\mathrm{att}=\{(k,a),\,(j,k)\}.
$$
So `k` attacks `a`, `j` attacks `k`, and there are no other edges. In particular `j` is attacked by no one.

**The one-round step.** For a set $S$ of artifacts, write $\mathrm{round}(S)$ for the artifacts whose every attacker is attacked by some member of $S$. We will compute $\mathrm{round}$ starting from the empty set.

**Round 0.** $S_0=\emptyset$.

**Round 1.** $S_1=\mathrm{round}(S_0)=\mathrm{round}(\emptyset)$. Check each artifact:

- `j`: its attackers? None. The condition "*every* attacker of `j` is attacked by some member of $\emptyset$" is then vacuously true — there are no attackers to fail it. So $j\in S_1$.
- `k`: its only attacker is `j`. Is `j` attacked by some member of $\emptyset$? No — $\emptyset$ has no members. So $k\notin S_1$.
- `a`: its only attacker is `k`. Is `k` attacked by some member of $\emptyset$? No. So $a\notin S_1$.

Hence $S_1=\{j\}$.

**Round 2.** $S_2=\mathrm{round}(S_1)=\mathrm{round}(\{j\})$. Check each artifact:

- `j`: still no attackers, still vacuously in. $j\in S_2$.
- `a`: its only attacker is `k`. Is `k` attacked by some member of $\{j\}$? Yes — $(j,k)\in \mathrm{att}$ and $j\in\{j\}$. Every attacker of `a` is now knocked down, so $a\in S_2$.
- `k`: its only attacker is `j`. Is `j` attacked by some member of $\{j\}$? No — nobody attacks `j` at all. So `k`'s attacker is *not* knocked down, and $k\notin S_2$.

Hence $S_2=\{j,a\}$.

**Round 3.** $S_3=\mathrm{round}(\{j,a\})$. Running the same three checks gives `j` in (vacuous), `a` in (`k` still attacked by `j`), `k` out (`j` still unattacked). So $S_3=\{j,a\}=S_2$.

The set has stopped changing. We have reached a **fixed point**: feeding $\{j,a\}$ back into $\mathrm{round}$ returns $\{j,a\}$ unchanged. This settled set is the answer, and we call it the **grounded extension** $G$:
$$
G=\{j,a\}.
$$

The reading is exactly the intuition from the top: `j` refuted the criticism `k`, so the conjecture `a` is reinstated. We computed it; we did not guess it. (This configuration is no accident — it is the engine of the reinstatement result you will meet next module.)

## Check yourself

Add one artifact to the example: a fourth artifact `m` with the single new edge $(m,j)$ — so now `m` attacks `j`, on top of `k` attacks `a` and `j` attacks `k`. Compute $\mathrm{round}(\emptyset)$ for this new graph. (Just the first round.)

<details><summary>Show answer</summary>

$\mathrm{round}(\emptyset)=\{m\}$. Now `m` is the only artifact with no attacker, so only `m` is admitted vacuously. `j` has acquired an attacker (`m`) that is not knocked down by anyone in $\emptyset$, so `j` no longer enters at round 0. (`k` and `a` are still attacked and still out.)

</details>

## The operator F

Now we name the "one round" step once and for all. Everything above used a set $S$ of artifacts already admitted, and asked which artifacts have all their attackers attacked from inside $S$. That map — sets of artifacts to sets of artifacts — is the operator $F$.

The bridge into the notation, piece by piece: $a$ ranges over the artifacts of the current state; "*every attacker of $a$*" means every artifact $b$ with $(b,a)\in \mathrm{att}$; and "*attacked by some member of $S$*" means there is a $c\in S$ with $(c,b)\in \mathrm{att}$. So $F(S)$ collects exactly the artifacts whose attackers are, one and all, knocked down from within $S$ — one round of standing, with $S$ as the artifacts already admitted.

## Definition (The operator F)

Given an epistemic state with attack relation $\mathrm{att}$, the operator $F$ sends a set $S$ of artifacts to
$$
F(S)=\{\,a : \text{every attacker of } a \text{ is attacked by some member of } S\,\}.
$$
Equivalently, $a\in F(S)$ iff for every $b$ with $(b,a)\in \mathrm{att}$, there is some $c\in S$ with $(c,b)\in \mathrm{att}$.

Two corners of the definition are worth pinning down, because they decide every computation:

- **No attackers means vacuously in.** If $a$ has no attacker, the condition "every attacker of $a$ is …" holds with nothing to check, so $a\in F(S)$ for *any* $S$ — including $S=\emptyset$. This is why $F(\emptyset)$ is exactly the unattacked artifacts.
- **Being in $S$ is neither necessary nor sufficient.** $F$ asks about $a$'s *attackers* and whether *they* are attacked from $S$; it never asks whether $a$ itself is in $S$. In the example, $j\in\{j\}$ but `j`'s membership played no role in whether `k` got in — what mattered was that nobody attacks `j`.

## The iteration, and why it settles

The grounded extension is what the rounds converge to: start at the empty set and apply $F$ over and over.

## Definition (Grounded extension)

Define a sequence of sets by
$$
S_0=\emptyset,\qquad S_{n+1}=F(S_n).
$$
The **grounded extension** $G$ is the set this sequence reaches and holds: the first $S_n$ with $F(S_n)=S_n$. It is the least fixed point of $F$ — built up from $\emptyset$, it is the *smallest* set $F$ leaves unchanged.

Two questions are owed an answer here. Does this sequence ever stop? And is the stopping point really pinned down, or could a different starting choice give a different answer?

**It stops, and here is why.** Two facts do the work. First, the set $A$ of artifacts is *finite* — a state holds finitely many artifacts. Second, $F$ is **monotone**: if $S\subseteq S'$, then $F(S)\subseteq F(S')$. (Reason: enlarging $S$ can only give an artifact's attackers *more* potential knockers-down, never fewer — so any $a$ that qualified under $S$ still qualifies under the larger $S'$.) Start the chain at the smallest possible set, $S_0=\emptyset\subseteq S_1$, and monotonicity propagates that comparison forward:
$$
S_0\subseteq S_1\subseteq S_2\subseteq\cdots
$$
The sequence never shrinks. But it lives inside the finite set $A$, so it cannot grow forever — after at most $|A|$ steps it must repeat a set, and once $S_{n+1}=S_n$ it stays there. That repeated set is $G$.

**This is induction, in disguise.** You already know the move: prove a base case, then show each step carries the property to the next. Here the base case is $S_0=\emptyset$ — the artifacts that stand on no defense at all — and each application of $F$ is one inductive step, admitting exactly the artifacts whose defense is built from what the previous step admitted. The grounded extension is the limit of that induction: the strongest set of "standing" artifacts you can reach by starting from the unattacked ones and repeatedly defending outward. An artifact is in $G$ precisely when there is a finite chain of defense, grounded in the unattacked artifacts, that reaches it. That is where the name *grounded* comes from.

**And the answer is unique.** A natural worry: a set has many subsets, so why is *this* one forced? Because we did not choose a subset — we computed one. Starting from $\emptyset$ and iterating a fixed operator leaves no decision to make at any step; the sequence is determined, and so is its limit. This uniqueness is a theorem of grounded semantics (Dung 1995), which also tells us $G$ is *skeptical* — it commits an artifact to "standing" only when forced to, never on a coin-flip between equally good options. We import that result and use it; its proof is outside this course. The takeaway you must carry: **the grounded extension is not one option among several. It is the one set the iteration delivers.**

## Reading off the statuses

The grounded extension $G$ is a set of artifacts. But the calculus speaks in three statuses, not two, and the third is the whole reason `overrun` existed back in module 2: some artifacts are neither admitted nor knocked down. Given $G$, we label every artifact.

The bridge: an artifact is **accepted** when it is in $G$ — it stands. It is **refuted** when some *standing* artifact attacks it — there is a member of $G$ with an edge into it; the attack is delivered by something that itself survives, so it sticks. And it is **suspended** in every remaining case — neither admitted nor struck down by a survivor. Note "refuted" is read off $G$, not stored: it is a computed status, never an erasure, exactly as module 6 insisted.

## Definition (Status labelling)

For each artifact $a$, given the grounded extension $G$,
$$
\mathrm{status}(a)=
\begin{cases}
\text{accepted} & a\in G,\\[2pt]
\text{refuted} & \exists\,b\in G:\ (b,a)\in \mathrm{att},\\[2pt]
\text{suspended} & \text{otherwise.}
\end{cases}
$$

In the worked example, $G=\{j,a\}$, so: `j` is **accepted** ($j\in G$); `a` is **accepted** ($a\in G$); and `k` is **refuted** (the member $j\in G$ attacks it, $(j,k)\in \mathrm{att}$). The conjecture stands, its critic is refuted, and we read all three labels straight off the set we built.

A caution on `suspended`: it does **not** mean "probably wrong." It means the current attack graph neither admits the artifact nor lets a survivor strike it down — often because the artifact sits in an unresolved cycle, as the next example shows. Suspended is a statement about the graph, not a guess about truth.

## Example (A two-cycle: mutual attack)

**Setup.** Two artifacts $A=\{a,b\}$ that attack each other: $\mathrm{att}=\{(a,b),(b,a)\}$. Each criticizes the other; neither has an outside defender.

**Iteration.** $S_0=\emptyset$. Compute $S_1=F(\emptyset)$: is `a` in? Its attacker `b` must be attacked by some member of $\emptyset$ — impossible. So $a\notin S_1$. By the same argument $b\notin S_1$. Thus $S_1=\emptyset=S_0$: the chain is already at its fixed point.

**Result.** $G=\emptyset$. Statuses: `a` is in $G$? No. Is `a` attacked by a member of $G=\emptyset$? No. So `a` is **suspended** — and by symmetry so is `b`. Neither stands, neither is refuted by a survivor; the conflict is genuinely unresolved, and the labelling says so honestly rather than picking a winner. This is the case the third status was built for.

## Check yourself

Take the graph $\mathrm{att}=\{(b,a)\}$ on $A=\{a,b\}$ — `b` attacks `a`, and `b` has no attacker. Compute $G$ and the status of each artifact.

<details><summary>Show answer</summary>

$S_0=\emptyset$. $S_1=F(\emptyset)=\{b\}$ (`b` is unattacked, so vacuously in; `a` is attacked by `b`, and `b` is not attacked from $\emptyset$, so `a` is out). $S_2=F(\{b\})=\{b\}$ (`a`'s attacker `b` is unattacked, so no member of $\{b\}$ attacks it — `a` stays out). Fixed point: $G=\{b\}$. Statuses: `b` **accepted** ($b\in G$); `a` **refuted** ($b\in G$ and $(b,a)\in \mathrm{att}$). An uncontested criticism refutes its target.

</details>

## Exercises

**1 (Mechanical).** Compute $F(\emptyset)$ for the graph $A=\{p,q,r\}$, $\mathrm{att}=\{(p,q),(q,r)\}$.

<details><summary>Show solution</summary>

$F(\emptyset)$ is the set of unattacked artifacts. `p` has no attacker, so $p\in F(\emptyset)$. `q` is attacked by `p`, and `r` is attacked by `q`; neither attacker is knocked down from $\emptyset$, so both are out. $F(\emptyset)=\{p\}$.

</details>

**2 (Mechanical).** Continue exercise 1 to the fixed point: compute $G$ and label all three statuses.

<details><summary>Show solution</summary>

$S_1=\{p\}$ (from exercise 1). $S_2=F(\{p\})$: `p` in (vacuous); `q`'s attacker `p` — is `p` attacked by a member of $\{p\}$? No (nobody attacks `p`), so `q` out; `r`'s attacker `q` — is `q` attacked by a member of $\{p\}$? Yes, $(p,q)\in \mathrm{att}$, so `r` in. $S_2=\{p,r\}$. $S_3=F(\{p,r\})=\{p,r\}$ (same checks). So $G=\{p,r\}$. Statuses: `p` **accepted**, `r` **accepted**, `q` **refuted** (the survivor `p` attacks it). This is the three-node chain again, with the names changed — the middle artifact is refuted, and its target is reinstated.

</details>

**3 (Mechanical).** A single artifact `a` with no attacks at all: $A=\{a\}$, $\mathrm{att}=\emptyset$. Compute $G$ and $\mathrm{status}(a)$.

<details><summary>Show solution</summary>

$S_0=\emptyset$. $S_1=F(\emptyset)$: `a` has no attacker, so vacuously $a\in F(\emptyset)$. $S_1=\{a\}$, and $F(\{a\})=\{a\}$, so $G=\{a\}$. Status: **accepted**. An artifact nobody attacks always stands.

</details>

**4 (Conceptual, cycle).** Consider a three-cycle: $A=\{a,b,c\}$ with $\mathrm{att}=\{(a,b),(b,c),(c,a)\}$ (each attacks the next, around the loop). Compute $G$ and the statuses. Compare with the two-cycle example.

<details><summary>Show solution</summary>

$S_0=\emptyset$, $S_1=F(\emptyset)$: every artifact has exactly one attacker, and no attacker is knocked down from $\emptyset$, so all three are out. $S_1=\emptyset=S_0$ — fixed point immediately. $G=\emptyset$. Every artifact is **suspended** (none is in $G$; none is attacked by a member of the empty $G$). Like the two-cycle, an odd cycle with no outside defender resolves to nobody standing and nobody refuted — the conflict is unsettled, and `suspended` records that. (The tempting wrong move is to declare a "winner" by going around the loop; the iteration refuses, because no artifact ever gets a *defended* attacker.)

</details>

**5 (Conceptual, uniqueness).** A classmate says: "The grounded extension is whichever fixed point of $F$ we find convenient — for the two-cycle we could pick $\{a\}$, since $F(\{a\})$ might leave it alone." Diagnose the error in one or two sentences.

<details><summary>Show solution</summary>

The error is treating $G$ as a *choice* among fixed points. $G$ is defined as the **least** fixed point, and it is reached by a fixed recipe — start at $\emptyset$ and iterate $F$ — that makes no choices at any step. For the two-cycle that recipe gives $S_0=\emptyset$ and $S_1=F(\emptyset)=\emptyset$, so $G=\emptyset$; $\{a\}$ is never reached and is not the grounded extension. (Whether $\{a\}$ is a fixed point under some other semantics is beside the point: grounded semantics takes the least one, and Dung 1995 guarantees it is unique.)

</details>

**6 (Conceptual).** In the worked three-artifact example, `k` is refuted. Suppose someone later adds a new artifact `m` with the single edge $(m,j)$ — a warranted attack on `j`. Without doing the full iteration, predict in words what happens to the status of `a`, and say why this is consistent with module 6's "nothing is ever deleted."

<details><summary>Show solution</summary>

Adding `m→j` should *re-refute* `a`. Now `j` has an attacker, `m`, which is itself unattacked — so `m` is admitted at round 1, `j` is no longer defended, `k`'s attacker `j` is now knocked down, so `k` returns to standing, and `k` attacks `a`. The conjecture `a` becomes refuted again. Nothing was deleted at any point: `a`, `k`, `j` all stay in the state with their edges intact. What changed is the *computed* status, recomputed on the new graph — which is exactly the no-deletion principle in action. (Running the full iteration confirms it: $G=\{m,k\}$, so `a` is refuted, `j` is refuted, `k` and `m` accepted.)

</details>

## Recap

Given an attack graph and nothing else, we now have an exact procedure for which artifacts stand. The operator $F$ admits, in one round, every artifact all of whose attackers are attacked from a given set; iterating it from $\emptyset$ builds an increasing chain that, because the artifacts are finite and $F$ is monotone, settles at a unique least fixed point — the grounded extension $G$. From $G$ we label every artifact accepted, refuted, or suspended, with no decision left to taste. The whole construction is one induction outward from the unattacked artifacts, and its uniqueness is what lets two readers agree. The three-artifact computation we ran — a conjecture reinstated when its critic is refuted — is not just an example; it is the case the next module turns into a proof.
