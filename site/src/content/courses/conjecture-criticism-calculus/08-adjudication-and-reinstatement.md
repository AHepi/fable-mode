---
title: Adjudication and Reinstatement
course: conjecture-criticism-calculus
order: 8
summary: The (Adj) rule recomputes status after every change, and the grounded extension hands back reinstatement for free — refute a criticism and its target returns, by a four-line proof.
estimatedMinutes: 24
objectives:
  - State the (Adj) transition rule in terms of the grounded extension $G$.
  - Prove the Reinstatement Lemma (3.1) by running the iteration from the empty set.
  - Explain why adjudication is recomputed after every registration rather than once at the end.
prerequisites: [the-grounded-extension]
---

A criticism can be wrong. We built the whole system on that fact: a criticism is itself an artifact (module 3), so whatever can attack can be attacked. But we never said what *happens* to the original idea when its critic is itself knocked down. Does the idea limp on, permanently scarred by an attack that has since collapsed? Or does it come back clean?

This module answers that, and the answer is sharper than you might expect. You will not have to *decide* anything. The grounded extension `G` we built in module 7 already settles it — and it settles it the only way it can. Refute a criticism, and its target is reinstated automatically. Not as a courtesy, not as a second ruling, but as a forced consequence of the fixed point. That is the content of the Reinstatement Lemma, and it is the one full proof this course carries. Everything you need to prove it, you proved by hand last module.

First, though, a smaller point that turns out to matter: *when* does the system work out who is accepted and who is refuted?

## Adjudication is not a final step

Here is the tempting picture. You build up an attack graph — add conjectures, add criticisms, add criticisms of criticisms — and then, at the very end, you run the adjudicator once to read off the verdicts. Inquiry as a long argument with a ruling at the close.

That picture is wrong, and the system is built to make it wrong. Status is not something the graph earns once it stops growing. Status is a *function of the current graph*, recomputed every time the graph changes. Add one edge and every label is, in principle, up for re-evaluation. An artifact that was accepted a moment ago can be refuted by the next registration; an artifact that was refuted can come back. There is no settling-down phase, because the system never stops being allowed to grow (that is the no-deletion discipline from module 6 cashed out — nothing is removed, but everything is re-read).

So the right picture is a status that tracks the graph in real time. After each `(Conj)` or `(Crit)` step, you recompute the grounded extension `G` from scratch — iterate from `\emptyset` again — and relabel. That is exactly what the `(Adj)` rule says.

## The (Adj) rule

Recall from module 7: given the attack graph, the **grounded extension** `$G$` is the least fixed point of

$$
F(S) = \{\, a : \text{every attacker of } a \text{ is attacked by some member of } S \,\},
$$

computed by iterating $\emptyset,\, F(\emptyset),\, F(F(\emptyset)),\, \dots$ until it stops changing. The `(Adj)` rule takes that set and reads three statuses off it.

**(Adj) Adjudication.** Given the directed graph $(A, \mathrm{att})$, let the grounded extension $G$ be the least fixed point of $F$. Relabel every artifact:

$$
\mathrm{status}(a) =
\begin{cases}
\text{accepted} & a \in G, \\[2pt]
\text{refuted} & \exists\, b \in G : (b, a) \in \mathrm{att}, \\[2pt]
\text{suspended} & \text{otherwise.}
\end{cases}
$$

Grounded semantics (Dung 1995) is unique and is recomputed after every registration.

Read the three cases against the picture. **Accepted** is the clean case: `$a$` is in the grounded extension, so the iteration from `$\emptyset$` reached it — every attacker of `$a$` was knocked down by something already standing. **Refuted** is the case where some *accepted* artifact attacks `$a$`: there is a `$b$` in `$G$` with an edge `$(b,a)$`, a standing attacker, so `$a$` is down. **Suspended** is everything left over — neither in `$G$` nor attacked by anyone in `$G$`. That is the artifact caught in an unresolved tangle: not vindicated, not refuted, just undecided under the current graph (a stalemate in a cycle is the usual cause). The three cases are exhaustive and, for grounded semantics, mutually exclusive.

The clause we will lean on is the middle one. "Refuted" does not mean an attacker exists — every conjecture worth its salt has attackers. It means an attacker exists *that is itself accepted*. Pull that attacker out of `$G$`, and the artifact is no longer refuted. That is reinstatement, and now we can state it exactly.

## Check yourself

In the `(Adj)` rule, an artifact `$a$` with three attackers is labelled **refuted** under exactly what condition?

<details><summary>Show answer</summary>

When at least one of its attackers is **accepted** — i.e. there is some `$b \in G$` with `$(b,a) \in \mathrm{att}$`. The number of attackers is irrelevant; what matters is whether any attacker is itself in the grounded extension. If every attacker of `$a$` is itself refuted or suspended (none in `$G$`), then `$a$` is *not* refuted by this clause.

</details>

## The Reinstatement Lemma

The smallest interesting situation is a chain of three: an idea, a criticism of it, and a criticism of the criticism. We name them `$a$` (the conjecture), `$k$` (the criticism attacking `$a$`), and `$j$` (the criticism attacking `$k$`), with `$j$` itself unattacked. The claim is that `$a$` survives — its critic `$k$` is taken out by `$j$`, and `$a$` comes back.

**Lemma (Reinstatement, 3.1).** If `$k$` attacks `$a$`, `$j$` attacks `$k$`, and `$j$` is unattacked, then `$\{j, a\} \subseteq G$`.

Decode the statement before we prove it. The hypotheses are three edges-and-absences in the attack graph: `$(k,a) \in \mathrm{att}$` (`$k$` attacks `$a$`), `$(j,k) \in \mathrm{att}$` (`$j$` attacks `$k$`), and *no* edge points into `$j$` (`$j$` is unattacked). The conclusion `$\{j,a\} \subseteq G$` says both `$j$` and `$a$` land in the grounded extension — so by `(Adj)`, both are **accepted**, and the critic `$k$`, attacked by the accepted `$j$`, is **refuted**. In one line: *refuting a criticism restores its target automatically.* The reinstatement is not a new rule we add to the system; it falls out of the fixed point we already have.

The proof is just the iteration from module 7, run on this graph and watched for two steps.

*Proof.* `$F(\emptyset)$` contains every unattacked artifact — an artifact with no attackers satisfies "every attacker is attacked by some member of `$S$`" vacuously, for any `$S$`, including `$S = \emptyset$`. Since `$j$` is unattacked, `$j \in F(\emptyset)$`.

Next, consider `$a$` at the following step. The only attacker of `$a$` is `$k$`, and `$j$` attacks `$k$`. So every attacker of `$a$` is attacked by a member of `$\{j\}$`, and since `$j \in F(\emptyset)$`, we have `$a \in F(F(\emptyset))$`. Because the iteration is non-decreasing and converges to `$G$` (module 7), `$F(F(\emptyset)) \subseteq G$`. Therefore `$a \in G$`, and with `$j \in F(\emptyset) \subseteq G$` we conclude `$\{j, a\} \subseteq G$`. `$\square$`

That is the whole proof, and notice what carried it: nothing but the definition of `$F$` and the fact that the iteration climbs to `$G$`. The unattacked artifact enters at the first step; the artifact it defends enters at the second. Reinstatement is the second step of the very construction you ran by hand last module.

## Check yourself

In the proof, why is `$j \in F(\emptyset)$` — what is the member of `$\emptyset$` that attacks each of `$j$`'s attackers?

<details><summary>Show answer</summary>

There is no such member, and none is needed. `$j$` has *no* attackers, so the condition "every attacker of `$j$` is attacked by some member of `$\emptyset$`" is **vacuously true** — there are no attackers to check. This is the same vacuous-truth move that put the unattacked nodes into `$F(\emptyset)$` in module 7. (Contrast `$k$`: `$k$` has the attacker `$j$`, and `$j$` is attacked by nobody in `$\emptyset$`, so the condition genuinely fails and `$k \notin F(\emptyset)$`.)

</details>

## Worked example

**Problem.** Take the three-node graph the lemma describes: artifacts `$A = \{a, k, j\}$`, where `$a$` is a conjecture, `$k$` is a criticism with `$(k,a) \in \mathrm{att}$`, and `$j$` is a criticism with `$(j,k) \in \mathrm{att}$`. No other attacks. Compute `$G$` and the three statuses. Then register one more attack — an artifact `$m$` with `$(m, j) \in \mathrm{att}$` — and recompute.

**Solution (the original graph).** This is the grounded extension `$G$` we built in module 7, so we state the iteration rather than re-derive it:

$$
S_0 = \emptyset, \quad S_1 = F(\emptyset) = \{j\}, \quad S_2 = F(\{j\}) = \{j, a\}, \quad S_3 = F(\{j,a\}) = \{j,a\} = S_2.
$$

The iteration is stable at `$S_2$`, so `$G = \{j, a\}$`. Applying `(Adj)`:

- `$j \in G$` → **accepted** (it is unattacked, so nothing in `$G$` attacks it).
- `$a \in G$` → **accepted** (its only attacker `$k$` is not in `$G$`).
- `$k \notin G$`, and the accepted `$j$` attacks `$k$` → **refuted**.

This is Lemma 3.1 computed: `$j$` refutes the criticism `$k$`, so the conjecture `$a$` is reinstated.

**Solution (after registering `$m \to j$`).** Now `$m$` attacks `$j$`, and `$m$` is unattacked. The graph is a four-node chain `$m \to j \to k \to a$`. Re-run the iteration from scratch — this is what `(Adj)` demands after the new edge:

- `$S_1 = F(\emptyset) = \{m\}$` — only `$m$` is unattacked now; `$j$` has acquired the attacker `$m$`.
- `$S_2 = F(\{m\})$`: `$j$`'s attacker `$m$` is not attacked by anyone in `$\{m\}$`, so `$j \notin S_2$`. But `$k$`'s attacker `$j$` *is* attacked by `$m \in \{m\}$`, so `$k \in S_2$`. Thus `$S_2 = \{m, k\}$`.
- `$S_3 = F(\{m,k\})$`: `$a$`'s attacker `$k$` is now in the standing set, but is `$k$` *attacked* by a member of `$\{m,k\}$`? No — nothing attacks `$k$` except `$j$`, and `$j \notin \{m,k\}$`. So `$a \notin S_3$`. We get `$S_3 = \{m, k\}= S_2$`. Stable.

So `$G = \{m, k\}$`, and the statuses flip: `$m$` accepted, `$j$` refuted (attacked by the accepted `$m$`), `$k$` reinstated to **accepted**, and `$a$` — attacked by the now-accepted `$k$` — back to **refuted**. The conjecture that reinstatement had just rescued is knocked down again, because the artifact that rescued it has itself been refuted.

That flip is the whole point of `(Adj)` running continuously. We did not "open the old ruling for appeal." We added one edge and recomputed; the labels followed. Had we treated adjudication as a one-time final step, `$a$` would be frozen as accepted and the system would be lying about its own graph.

## Exercises

**Exercise 1 (mechanical).** In a graph, artifact `$a$` has exactly two attackers, `$k_1$` and `$k_2$`. The grounded extension is `$G = \{j, k_2\}$`, where `$j$` attacks `$k_1$` (and `$k_2$` is unattacked). What is the status of `$a$`? Justify with the `(Adj)` clause that applies.

<details><summary>Show solution</summary>

`$a$` is **refuted**. The refuted clause asks only whether *some* attacker of `$a$` is in `$G$`. Here `$k_2 \in G$` and `$(k_2, a) \in \mathrm{att}$`, so the clause fires. It does not matter that the other attacker `$k_1$` is knocked down by `$j$`; a single standing attacker is enough to refute. (Tempting wrong answer: "accepted, because `$k_1$` was refuted." But reinstatement requires *every* attacker to be knocked down, not just one.)

</details>

**Exercise 2 (mechanical).** Run the iteration from `$\emptyset$` on the two-node graph `$j \to k$` (just `$j$` attacks `$k$`, `$j$` unattacked, no `$a$`). Give `$G$` and the statuses.

<details><summary>Show solution</summary>

`$S_1 = F(\emptyset) = \{j\}$` (`$j$` unattacked, in vacuously; `$k$`'s attacker `$j$` is not attacked by anyone in `$\emptyset$`, so `$k$` is out). `$S_2 = F(\{j\}) = \{j\}$`: `$k$`'s attacker `$j$` is still not attacked by any member of `$\{j\}$` (nothing attacks `$j$`), so `$k$` stays out. Stable, so `$G = \{j\}$`. Statuses: `$j$` **accepted**, `$k$` **refuted**.

</details>

**Exercise 3 (conceptual).** Prove a variant of the Reinstatement Lemma: if `$k$` attacks `$a$`, and `$j_1, j_2$` both attack `$k$` with `$j_1$` unattacked (`$j_2$` may have attackers), then `$a \in G$`. Where in your proof does `$j_2$` play no role?

<details><summary>Show solution</summary>

*Proof.* `$j_1$` is unattacked, so `$j_1 \in F(\emptyset)$` (vacuously, exactly as in Lemma 3.1). The only attacker of `$a$` is `$k$`, and `$j_1$` attacks `$k$`, so every attacker of `$a$` is attacked by a member of `$\{j_1\}$`; since `$j_1 \in F(\emptyset)$`, we get `$a \in F(F(\emptyset)) \subseteq G$`. Therefore `$a \in G$`. `$\square$`

`$j_2$` never appears: one knock-down of `$k$` suffices, and `$j_1$` already supplies it. Whether `$j_2$` is itself accepted, refuted, or suspended is irrelevant to `$a$`'s reinstatement here. (This is the mirror of Exercise 1: refutation needs only one standing attacker, and so does the defense that reinstates a target — one defender that is guaranteed to stand is enough.)

</details>

**Exercise 4 (conceptual).** Why does the `(Adj)` rule recompute `$G$` from `$\emptyset$` after *every* registration, rather than once after all artifacts have been added? Give a graph where the order of recomputation would change the eventual labels if we adjudicated only once at the end.

<details><summary>Show solution</summary>

Status is defined as a function of the *current* graph, not of a finished one — and the system never finishes (no-deletion, module 6: the graph only ever grows, and growth never stops). A one-time-at-the-end adjudication would have no "end" to run at. More concretely: in the worked example, adjudicating after `$j \to k \to a$` gives `$a$` accepted; after also registering `$m \to j$`, `$a$` is refuted. If we had frozen the labels at the first adjudication and never recomputed, `$a$` would stay (incorrectly) accepted even though its sole defender `$j$` is now refuted. Recomputing keeps the labels honest to the graph. Adjudication is continuous because the object it reports on is always changing.

</details>

**Exercise 5 (conceptual).** An artifact `$a$` is attacked only by `$k$`, and `$k$` is attacked only by `$a$` (a two-cycle, `$a \leftrightarrow k$`, both otherwise unattacked). Compute `$G$` and the statuses. Does reinstatement apply? Why or why not?

<details><summary>Show solution</summary>

`$S_1 = F(\emptyset) = \emptyset$`: neither `$a$` nor `$k$` is unattacked, and neither's attacker is knocked down by anything in `$\emptyset$`. So the iteration is immediately stable: `$G = \emptyset$`. Statuses: nothing is in `$G$`, so nothing is accepted; and since no member of `$G$` attacks anything (`$G$` is empty), nothing is refuted either. Both `$a$` and `$k$` are **suspended**. Reinstatement does *not* apply: the lemma needs an *unattacked* artifact to seed `$F(\emptyset)$`, and a two-cycle has none. The cycle is the unresolved tangle the suspended status exists to name.

</details>

## Recap

We pinned down two things. First, `(Adj)` recomputes the grounded extension after every single registration and reads three statuses off it — accepted, refuted, suspended — so a label is always a live report on the current graph, never a final ruling. Second, the Reinstatement Lemma falls straight out of the iteration from `$\emptyset$`: an unattacked artifact enters at the first step, and the target it defends enters at the second, so refuting a criticism restores its target with no extra machinery. The no-deletion principle from module 6 has now been cashed in full — nothing is erased, and what was refuted can return the instant its refuter falls. Next we turn from *which* artifacts stand to *what makes an artifact worth standing for*: the demarcation between ideas that are live parts of inquiry and ideas that only look like they are.
