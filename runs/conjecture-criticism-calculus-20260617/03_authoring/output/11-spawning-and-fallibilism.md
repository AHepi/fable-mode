---
title: "Spawning Problems, and Fallibilism"
course: conjecture-criticism-calculus
order: 11
summary: The system makes its own future work — (Spawn) turns failures, rivalries, and reach into new problems — and two axioms guarantee no status and no theory is ever final, with the rules themselves inside the system (Refl).
estimatedMinutes: 22
objectives:
  - State the (Spawn) rule and walk through 2–3 of its triggers, explaining what problem each creates
  - State the (Refl) rule and explain what pancritical closure means
  - State Axioms N1 and N2 in precise terms
  - Explain why fallibilism must be an axiom, not a theorem
  - Trace a status exit through a worked example
prerequisites: [hard-to-vary-and-reach]
---

A detective who only ever closes cases is not doing good detective work. The good ones close a case and find, tucked inside the resolution, three new cases they didn't know existed. The conjecture–criticism calculus works this way. Every time it settles a verdict, rivals persist, or a conjecture turns out to reach problems it wasn't built for, the system opens new work. It doesn't just consume problems — it breeds them.

This module closes the course. The two ideas that remain — problem generation and the two fallibilism axioms — are the ones that make the whole calculus run as a process with no termination condition. The system is never done. That isn't a defect. It's the deepest structural feature.

## Problem generation: the (Spawn) rule

Every prior module assembled the machinery that can now fire: the grounded extension $G$ we built in module 7, the adjudication rule (Adj) that keeps statuses current, the hard-to-vary measure $\text{HV}_B(a)$ and the reach $R_t(a)$ from module 10. The (Spawn) rule watches for conditions on the current state and, when it sees one, registers a new problem $\pi$ with a provenance record tracing it to its cause.

Here is the rule precisely.

## Rule (Spawn)

**On any trigger, register a new problem:** for a trigger condition $C$ detected in state $S = (A, \Pi, addr, att, W)$, (Spawn) produces the transition

$$
S \;\rightsquigarrow\; S' = (A,\; \Pi \cup \{\pi_{\text{new}}\},\; addr,\; att,\; W)
$$

where $\pi_{\text{new}} = (d_{\pi_{\text{new}}},\; \text{Crit}_{\pi_{\text{new}}},\; \text{prov}_{\pi_{\text{new}}})$ and $\text{prov}_{\pi_{\text{new}}}$ records which trigger caused the registration.

Three triggers cover the central cases; the others exist and are named at the end.

**Trigger 1 — Failed verdict yields a successor problem.** A demonstrative warrant packaging $V(\kappa, c(a)) = \text{fail}$ produces a refutation in the current $G$. That failure is itself a new starting point: something went wrong with $a$; what should replace it? The system opens a successor problem whose description is "find an artifact addressing $\pi$ that does not incur this failure."

**Trigger 2 — Two or more surviving rivals for one problem yield a discrimination problem.** If $a_1, a_2 \in G$ and both $addr(a_1, \pi)$ and $addr(a_2, \pi)$ hold — two accepted conjectures for the same problem, neither defeating the other — then the system cannot yet prefer one. It opens a new problem: "design a commitment $\kappa$ such that $V(\kappa, c(a_1)) \neq V(\kappa, c(a_2))$." This is the demand for an experiment that can tell them apart.

**Trigger 3 — A reach event yields an explanation-debt problem.** Reach $R_t(a)$ is the set of problems in the problem library beyond $a$'s origin that $a$ currently meets (module 10). When $a$ meets a new problem $\pi'$ it was never designed for — a reach event — the system opens an explanation-debt problem: "why does $a$ address $\pi'$? Produce a conjecture that explains the reach." The reach was a discovery; the debt is the obligation to explain it.

The source note lists two further triggers: a low-$\text{HV}_B(a)$ signal opening a remove-arbitrariness problem, and a critic-gaming signal opening an audit-the-critic problem. They follow the same pattern and are recorded in the calculus, but three triggers are enough to see the mechanism. Each trigger turns a feature of the current state into the description, $d_\pi$, of a fresh problem. (Spawn) does not choose what to conjecture — that is (Conj)'s job. It chooses what to *ask*.

<details><summary>Check yourself: what does (Spawn) add to the state?</summary>

(Spawn) adds a new **problem** $\pi_{\text{new}}$ to $\Pi$. It does not add any artifact, attack edge, or warrant. The artifacts, addressing relations, and attacks all stay exactly as they were. The state grows by one entry in $\Pi$, with provenance attached. No deletion occurs — nothing is deleted (module 6).

</details>

## The system turns on itself: (Refl)

So far every rule acts on *artifacts about the world*: conjectures about chemistry, mathematics, or aesthetics. But the rules themselves — (Conj), (Crit), (Adj), (Spawn), the demarcation criterion of module 9, the choice of grounded semantics — are all artifacts with content and commitment interfaces. Why should they be exempt from attack?

They aren't.

## Rule (Refl)

**Reflexive registration:** the rules above, the demarcation criterion (§ 3.4), and the choice of adjudication semantics are themselves registered as artifacts in $A$ and are attackable like any other:

$$
S \;\rightsquigarrow\; S' = (A \cup \{\pi_{\text{rule}},\; \pi_{\text{dem}},\; \pi_{\text{adj}},\;\ldots\},\; \Pi,\; addr',\; att',\; W')
$$

where each rule is an artifact $r = (c(r), I(r))$ subject to (Crit), and the addresses, attacks, and warrants extend accordingly.

The result is what the source note calls **pancritical closure**: the system's constitution is inside the system. An argument that (Adj) should use preferred-extension semantics instead of grounded semantics is a legitimate artifact that can carry a warrant and open an attack on the adjudication-rule artifact. The demarcation criterion — criticizability plus modifiability — can itself be criticized. Even this rule, (Refl), is an artifact and can be attacked.

This is not a paradox. The grounded extension $G$ is computed on whatever attack graph $att$ the state contains at each moment. (Refl) adds the rule-artifacts to $A$; (Crit) can add attacks on them; (Adj) recomputes $G$ to include or exclude them. The system remains well-formed throughout. It just gains the property that no rule sits above the process — every rule is inside it.

<details><summary>Check yourself: name one way (Refl) connects to the nothing-is-deleted principle.</summary>

When a rule-artifact $r$ is attacked and moves from accepted to refuted in $G$, it is not erased from $A$ — "refuted" is a computed status (module 6), and $r$ remains in $A$ with its content intact. A later artifact that attacks the criticism of $r$ can reinstate $r$ (Reinstatement Lemma, module 8). The same principle that applies to ordinary conjectures applies to the rules themselves. No rule is ever annihilated; it can always be reinstated.

</details>

## Worked example: a failed verdict spawns a successor, and a status exits

Let the state contain artifacts $a$ (a conjecture addressing problem $\pi$), $k$ (a demonstrative criticism of $a$, packaging a failing verdict $V(\kappa, c(a)) = \text{fail}$), and $j$ (a criticism of $k$ that attacks the validity node $\nu(\kappa)$, disputing whether the test $\kappa$ is sound for this context).

**After (Adj):** The grounded extension $G$ we built in module 7 computes as $\{j, a\}$ — the same configuration as the Reinstatement Lemma (module 8). $j$ is unattacked; $j$ attacks $k$; so $k$ is refuted and $a$ is reinstated.

**Now (Spawn) fires on the original failure.** Even though $a$ is currently accepted, the failed verdict $V(\kappa, c(a)) = \text{fail}$ is still a fact in the state's history (nothing is deleted). (Spawn) Trigger 1 registers a successor problem $\pi'$: "find an artifact addressing $\pi$ that is robust to $\kappa$-type tests on its content." The state now contains both $\pi$ (still open, with $a$ accepted for it) and $\pi'$ (fresh, with no conjecture yet).

**The status exit for $a$.** Before $j$ was registered, $a$ was refuted. After $j$ was registered and (Adj) ran, $a$ is accepted. This is exactly a status exit of the form that Axiom N1 will name: refuted $\to$ accepted by reinstatement. The transition was mechanical — iterate $\emptyset, F(\emptyset) = \{j\}, F(\{j\}) = \{j, a\}$ — not a judgment call. The status is a function of the current state alone.

## The fallibilism axioms

Two axioms encode what the worked example just illustrated, and make it permanent.

### Axiom N1 (No absorbing status)

**Statuses are functions of $S$ alone, and every status admits an exit:**

$$
\begin{aligned}
&\text{accepted} \to \text{refuted} &&\text{by a new warranted attack} \\
&\text{refuted} \to \text{accepted} &&\text{by reinstatement (Lemma 3.1)} \\
&\text{demonstratively refuted} \to \text{reopened} &&\text{by an attack on the validity node } \nu(\kappa)
\end{aligned}
$$

No state is marked final, including the rule-artifacts of (Refl).

The bridge: "every status admits an exit" means there is no sink. If you draw the three statuses as nodes and the exit routes as directed edges, every node has an outgoing edge. Accepted is not a certificate; it is a temporary balance of the attack graph, revisable the moment a new warranted attack enters. Refuted is not an ending; the Reinstatement Lemma (module 8) showed explicitly that refuted $\to$ accepted is a two-step calculation in $F$. Even a demonstrative refutation — the hardest kind, because it packages an actual failing verdict — can be reopened by attacking the validity node that the warrant depends on.

N1 says nothing about *how soon* an exit will appear. An artifact can remain accepted for a long time, or refuted for a long time. The axiom denies only that any status is *absorbing* — that the exit is structurally impossible.

### Axiom N2 (Perpetual proposability)

**For every accepted artifact $a$, there exist proposable successors with strictly extended batteries:**

$$
\forall\, a \in G,\; \exists\, a' \text{ proposable such that } B(a') \supsetneq B(a).
$$

"Proposable" means (Conj) can introduce $a'$; "strictly extended battery" means $a'$ answers to more commitments than $a$ does. In plain terms: there is always a next question to ask. No matter how well $a$ has done — how many problems it addresses, how high its $\text{HV}_B(a)$, how wide its reach $R_t(a)$ — there is always a variation of it that has committed to more and can be proposed and criticized.

(Avoid the phrase "unbounded support" here: that phrasing imports measure-theoretic connotations the course hasn't built. The content is exactly what the battery formulation says: for any accepted artifact, a proposable successor with more commitments always exists.)

N2 re-describes what "knowledge at time $t$" means. The trajectory

$$
(G_t,\; \text{HV-profile at }t,\; R\text{-profile at }t)
$$

is a position in an open process, not a fixed point of it. At no $t$ does the trajectory terminate. The grounded extension $G_t$ shifts as attacks arrive; the $\text{HV}$-profile shifts as batteries grow; the reach $R_t$ shifts as the problem library expands. The system's output is a trajectory, not an endpoint.

## Why fallibilism must be an axiom, not a theorem

A first-year reader will reasonably ask: can we derive N1 and N2 from the other rules? After all, the calculus derives quite a lot — the Reinstatement Lemma from the fixed-point iteration, the three statuses from the grounded extension, even the warrant structure from the artifact-uniformity of module 3.

The answer is no, and the reason is the one pitfall worth naming carefully. To prove that no final theory exists, you would need a premise that rules out absorbing states. But a system *can* be built with absorbing states — it can be built with rules that, once triggered, seal a verdict permanently. No internal argument from the calculus's other axioms rules this out. To demand a proof of fallibilism would be to seek a foundation — a bedrock from which fallibilism is derived — and that is precisely what fallibilism denies. The impossibility of proving fallibilism from within the system is not a gap; it is the structure of the thing.

N1 and N2 are therefore **constitutive choices**, not derivable consequences. They are consistent: the grounded labelling is always revisable; the state space has no absorbing point we can exhibit. And they are load-bearing: the source note's §4 uses N1 as the premise of the necessity-of-creativity theorem — the proof that any fallibilist system with the aspiration to solve every soluble problem in its domain must have an open-ended conjecture operator. Fallibilism is the one irreducible commitment, and open-ended creativity is what follows from it.

## Exercises

**1.** (Mechanical) A state contains a conjecture $a$ (accepted), a criticism $k$ of $a$ (refuted), and a criticism $j$ of $k$ (accepted). A new warranted attack $m$ on $j$ enters the state and (Adj) runs. Describe the possible new status of $a$ after (Adj), and explain in terms of the grounded extension $G$ why the status could change.

<details><summary>Show solution</summary>

After $m$ attacks $j$, the state has: $m \to j \to k \to a$. Run the iteration.

$F(\emptyset)$: Which artifacts have no attacker? Only $m$ (nothing attacks $m$). So $F(\emptyset) = \{m\}$.

$F(\{m\})$: $j$ is attacked by $m$, and $m \in \{m\}$. So $j \in F(\{m\})$. $k$ is attacked by $j \notin \{m\}$ yet. $k \notin F(\{m\})$. $a$ is attacked by $k \notin \{m\}$. $a \notin F(\{m\})$. So $F(\{m\}) = \{m, j\}$.

$F(\{m, j\})$: $k$ is attacked by $j \in \{m,j\}$, so $k \in F(\{m,j\})$. $a$ is attacked by $k \notin \{m,j\}$ yet. $a \notin F(\{m,j\})$. So $F(\{m, j\}) = \{m, j, k\}$.

$F(\{m, j, k\})$: $a$ is attacked by $k \in \{m,j,k\}$. So $a \in F(\{m,j,k\})$. Fixed point: $G = \{m, j, k, a\}$.

But now $k \in G$ and $k$ attacks $a$, so $a$ is **refuted** by the status definition (there exists $b \in G$ with $(b,a) \in att$, namely $b = k$). A previous configuration had $a$ accepted; now $a$ is refuted. The status exited accepted $\to$ refuted because the attack graph changed — $j$ (which was defending $a$ by defeating $k$) is now itself attacked by $m$ and thereby loses the ability to defend. This is N1 in action: accepted is not absorbing.

</details>

---

**2.** (Conceptual) Explain in plain terms why (Spawn) Trigger 2 (two surviving rivals) creates a problem rather than just picking a winner by some other rule.

<details><summary>Show solution</summary>

The warrant discipline of module 5 prohibits bare attacks: an attack edge $(k, a) \in att$ must carry a warrant — either a packaged failing verdict or an argumentative artifact. Two conjectures $a_1$ and $a_2$ that both address $\pi$ and neither of which has a warranted attack on the other are *not* in conflict in the system's sense. They are simply two accepted artifacts for the same problem. There is no rule that allows the system to simply prefer one — that would require an unwarranted attack, which well-formedness forbids. (Spawn) instead does what the system can do: it opens a new problem whose criteria demand an artifact (a commitment $\kappa$) that produces different verdicts on the two rivals. This is discrimination in the literal sense — creating a test that can tell them apart. Until that discrimination problem is solved, the system correctly holds both as accepted.

</details>

---

**3.** (Conceptual) A student argues: "N2 says there is always a proposable successor with a bigger battery. But once we know *everything* about some domain, there are no more commitments to add. So N2 must be false for a complete theory." What is wrong with this argument?

<details><summary>Show solution</summary>

The argument smuggles in exactly what N2 is designed to deny: the existence of a "complete theory" — one that has answered every commitment the domain could ever make. N2 says no such theory can be the accepted $a$ in the system, because the definition of "proposable successor with strictly extended battery" will always apply. For any accepted $a$, the problem library $\Pi$ can grow (via (Spawn)); new problems add new instantiated criteria to $B(a)$; and an artifact that addresses those new criteria has a strictly larger battery. The domain doesn't close because the problem library doesn't close — (Spawn) keeps generating new problems. The argument's premise ("once we know everything") is precisely what N2, together with (Spawn) and the perpetual growth of $\Pi$, denies. It is not a derivable falsehood; it is ruled out by axiom.

</details>

---

**4.** (Why can't fallibilism be a theorem?) The source note states plainly: "one cannot derive that there is no final theory." Write a three-sentence argument for why this is so, using only concepts from this course.

<details><summary>Show solution</summary>

Any derivation of N1 from the other rules of the calculus would need a premise that rules out absorbing states — a rule that prevents any status from becoming permanent. But examining (Conj), (Crit), (Adj), (Spawn), and (Refl), none of them individually or jointly prohibits a system that simply never generates a new warranted attack on a given artifact after some point. Such a system would have an artifact stuck in "accepted" with no exits, violating N1 — but it would violate no rule in the non-N1 calculus. N1 is therefore a constitutive choice, not a theorem; demanding a proof of it would require the very foundation it denies.

</details>

---

**5.** (Tracing a status exit) Describe a complete scenario — from scratch — in which a single artifact moves through the status sequence refuted $\to$ accepted $\to$ refuted. Specify the artifacts, the attacks, and which (Adj) computation produces each status change.

<details><summary>Show solution</summary>

**Initial state.** Artifacts: $a$ (conjecture), $k$ (criticism of $a$). Attack: $k \to a$. $k$ is unattacked. Run (Adj): $F(\emptyset) = \{k\}$ (unattacked). $F(\{k\}) = \{k\}$ — $a$ is attacked by $k \in \{k\}$, so $a \notin F(\{k\})$. Fixed point: $G = \{k\}$. Status: $k$ accepted, $a$ **refuted**.

**Step 2: add $j$ attacking $k$.** Register a new artifact $j$ with a warranted attack on $k$: $(j, k) \in att$. $j$ is unattacked. Run (Adj): $F(\emptyset) = \{j\}$. $F(\{j\})$: $k$ is attacked by $j \in \{j\}$, so $k \in F(\{j\})$. $a$ is attacked by $k \notin \{j\}$, so $a \notin F(\{j\})$. $F(\{j\}) = \{j, k\}$. $F(\{j,k\})$: $a$ is attacked by $k \in \{j,k\}$ — so $a \in F(\{j,k\})$? No: $a \in F(S)$ iff every attacker of $a$ is attacked by some member of $S$. $k$ is the attacker of $a$. Is $k$ attacked by some member of $\{j,k\}$? $j \in \{j,k\}$ and $j$ attacks $k$ — yes. So $a \in F(\{j,k\})$. Fixed point: $G = \{j, k, a\}$. But $k \in G$ and $k$ attacks $a$, so $a$ is **refuted** again... wait.

Correction: $j$ attacks $k$ means $j$ defeats $k$. In the grounded extension, $k$ should be refuted (attacked by $j \in G$), so $k$ cannot itself be accepted and therefore cannot refute $a$. The issue is the iteration: $F(\{j\}) = \{j\}$ because $k$'s attacker $j$ is in $\{j\}$, but does that put $k$ in $F(\{j\})$? Yes — every attacker of $k$ (namely $j$) is in $\{j\}$, so $k \in F(\{j\})$. Then at $F(\{j,k\})$, $a$'s attacker $k$ is in $\{j,k\}$, so $a \in F(\{j,k\})$. Fixed point: $G = \{j, a\}$ (by the correct computation we did in module 8 — the chain $j \to k \to a$ gives $G = \{j, a\}$, with $k$ refuted). Status: $j$ accepted, $a$ **accepted**, $k$ refuted.

**Step 3: add $m$ attacking $j$.** Register $m$ with a warranted attack on $j$: $(m, j) \in att$. $m$ is unattacked. Run (Adj): $F(\emptyset) = \{m\}$. $F(\{m\}) = \{m, j\}$ (j's attacker $m \in \{m\}$). $F(\{m,j\}) = \{m, j, k\}$ (k's attacker $j \in \{m,j\}$). $F(\{m,j,k\}) = \{m,j,k,a\}$? $a$'s attacker $k \in \{m,j,k\}$ — so $a \in F(\{m,j,k\})$. But $k \in G$ and $(k,a) \in att$, so $a$ is **refuted** (Definition: refuted iff $\exists b \in G: (b,a) \in att$, and $b = k$).

Summary: $a$ went refuted $\to$ accepted (when $j$ was added) $\to$ refuted (when $m$ attacked $j$). Each change was produced by a fresh (Adj) computation on the updated attack graph. N1 is witnessed both directions.

</details>

---

**6.** (Synthesis) State, in one sentence each, what $G_t$, the HV-profile at $t$, and the R-profile at $t$ each measure in the trajectory $(G_t, \text{HV-profile}, R\text{-profile})$. Then explain in two sentences why this trajectory, rather than a final state, is the right description of "knowledge at time $t$."

<details><summary>Show solution</summary>

$G_t$ is the grounded extension at time $t$: the set of currently accepted artifacts, those whose attackers are all themselves attacked (module 7). The HV-profile at $t$ is the collection of hard-to-vary scores $\text{HV}_B(a)$ for accepted artifacts $a$ at time $t$, measuring how much of each artifact survives genuine variation relative to its battery (module 10). The R-profile at $t$ is the collection of reach sets $R_t(a)$ for accepted artifacts $a$, recording which problems beyond each artifact's origin it currently meets (module 10).

The trajectory is the right description because N2 guarantees there is always a proposable successor with a larger battery — so no position in the trajectory is a terminus — and (Spawn) guarantees the problem library $\Pi$ keeps growing, so the criteria against which artifacts are measured keep expanding. "Knowledge" is the open process of moving along this trajectory; a "final state" would require N1 to be false and N2 to be violated, which the axioms rule out by constitution.

</details>

---

## Recap

The conjecture–criticism calculus ends here, but the process it describes does not. (Spawn) turns failed verdicts, unresolved rivalries, and reach events into new problems, keeping $\Pi$ perpetually replenished — the system always has more to ask. (Refl) folds the rules themselves into $A$, making pancritical closure exact: no part of the constitution stands outside criticism. Axiom N1 denies that any status is absorbing — accepted, refuted, and suspended all have exits, traced mechanically through $F$ — and Axiom N2 denies that any accepted artifact is the last word, because a proposable successor with more commitments always exists. Together, N1 and N2 encode fallibilism not as a philosophical observation but as a structural property of the state space. The trajectory $(G_t, \text{HV-profile}, R\text{-profile})$ is what knowledge looks like inside this system: a position in an open process, never a resting point.

These two axioms are not idle bookkeeping. They are exactly the premise that the source's §4 consumes to prove — by a diagonal argument on the conjecture operator — that open-ended creativity is not merely permitted by fallibilism but forced by it. That theorem lies beyond this course. What this course delivered is the machinery it runs on: a precise, provably-behaved formal system in which the growth of knowledge is not a metaphor but a sequence of warranted state transitions, computable at each step, and open at every horizon.
