---
title: "The Conjecture–Criticism Game"
course: conjecture-criticism-calculus
order: 1
summary: Problems provoke guesses, guesses get attacked, and attacks can themselves be attacked — this module names the four pieces of that loop and shows why all three belong in one unified machine.
estimatedMinutes: 15
objectives:
  - Describe the conjecture–criticism–adjudication loop in plain terms using the four canonical vocabulary items (problem, conjecture, criticism, attack)
  - Explain why criticisms are themselves things that can be criticized
  - State what the rest of the course will build and why the informal picture needs a formal machine
prerequisites: []
---

Three friends are arguing about why bread rises.

Layla says: "Yeast produces carbon dioxide gas — that's what pushes the dough up."

Marcus says: "That doesn't account for temperature. The same yeast in a cold kitchen barely raises the dough at all."

Priya says: "Marcus's temperature objection assumes we're not controlling the environment, but we are — this is a standard oven at 200°C."

Something interesting is happening here. Marcus attacked Layla's conjecture. Priya attacked the attack. And now we want to know: who's right? Whose ideas are currently *standing*?

That question — precise, answerable, and surprisingly deep — is what this course is about.

## The four pieces

The bread argument has a structure that shows up everywhere: in mathematics, science, philosophy, and everyday disputes. Pull it apart and you find four recurring pieces.

A **problem** is the question driving the inquiry. In the bread argument, the problem is: *why does bread rise?* Problems come with some notion of what counts as a good answer — criteria that a conjecture has to meet to be taken seriously.

A **conjecture** is a proposed answer to a problem. Layla's "yeast produces carbon dioxide" is a conjecture. Conjectures are not wild guesses — they are genuine attempts to answer the problem — but they are not yet established. That is exactly what makes them interesting: they can be right, and they can be wrong.

A **criticism** is an artifact whose job is to attack a conjecture (or another criticism). Marcus's temperature remark is a criticism of Layla's conjecture. A criticism does not refute by fiat — it has to carry a reason, a *warrant*, that connects the attack to something the target actually claims.

An **attack** is the directed relation "k attacks a." When Marcus raises his temperature point, we have an attack from Marcus's criticism to Layla's conjecture.

These four pieces — problem, conjecture, criticism, attack — are the informal vocabulary everything else in this course is built on. The rest of the course makes each one precise and assembles them into a formal machine.

## The loop

The pieces compose into a loop. A problem invites a conjecture. The conjecture can be attacked by a criticism. That criticism can, in turn, be attacked by a further criticism. And so on.

Priya's move is the one worth dwelling on. She did not defend Layla's conjecture directly. She attacked Marcus's criticism — and by doing so, she put Layla's conjecture back in play. The system we will build gives this move an exact mathematical meaning and a provable guarantee: if a criticism is itself refuted, the idea it was attacking comes back. (This is the Reinstatement Lemma, proved in module 8.)

The loop never ends by exhaustion of moves. It ends — provisionally — when we ask the adjudicator: *what survives right now?* The answer is a snapshot, not a verdict of eternal truth. Change the attack graph and the snapshot can change.

### Check yourself

Before reading further, try this from memory.

In the bread example, Priya attacks Marcus's criticism. What does that imply about Marcus's criticism's own status — and what might that mean for Layla's original conjecture?

<details><summary>Show answer</summary>

If Priya's attack on Marcus's criticism is uncontested, Marcus's criticism is in trouble: it is itself under attack with no defense. A criticism that is successfully attacked is refuted — it loses the standing it needs to threaten Layla's conjecture. So Layla's conjecture, freed from the only standing attack against it, has a chance to be reinstated. The formal machine we build will make "chance to be reinstated" precise and provable.

</details>

## Why criticisms must be things that can be criticized

The most important structural feature of the loop is not that conjectures can be attacked. It is that *criticisms can also be attacked*.

This is not an accident. If criticisms were immune to attack, the game would be unbalanced: any conjecture could be killed by any objection, with no recourse. Knowledge would stagnate at the first criticism raised. The uniformity — everything in the system is subject to the same scrutiny — is what makes the loop productive rather than nihilistic.

It also means the system is self-referential in a useful way. A criticism is not a special kind of object that floats outside the calculus; it is, formally, the same kind of thing as a conjecture. It can be addressed by a problem, it can be attacked, and it can be adjudicated. Later modules make this precise under the heading of *artifact-uniformity*: whatever can attack can be attacked.

This might seem like it opens an infinite regress — criticisms of criticisms of criticisms, forever. The calculus handles this cleanly: it does not trace the regress manually. It computes, from the whole attack graph at once, a set of ideas that are currently *standing*, taking every level of the hierarchy into account simultaneously. That computation — the grounded extension — is the technical core of the course, developed in modules 7 and 8.

## What the course builds

The informal picture in this module is enough to follow a bread argument. It is not enough to do mathematics with.

Here is what remains imprecise:

- What exactly is a problem, and what counts as a criterion?
- What exactly is a criticism, and what makes an attack legitimate rather than a non sequitur?
- What does "currently stands" mean, computed from what?
- Can an idea that was once refuted come back — and if so, under what conditions?
- How do we measure *how well* an idea is doing, and how far its reach extends?

The rest of this course answers each question precisely, in order. By module 11, you will have a formal system with defined objects, five transition rules, a computable adjudicator, two demarcation criteria, two graded measures, and two axioms that encode a principled fallibilism.

This calculus was built to prove something: that creativity — the generation of genuinely new conjectures — is not merely useful but provably unavoidable for any system that sustains inquiry. That theorem (beyond this course's scope) is what the calculus was designed to support.

### Check yourself

Name the four vocabulary items introduced in this module, and give one sentence for each.

<details><summary>Show answer</summary>

**Problem**: the question driving inquiry, with criteria for what counts as a good answer.

**Conjecture**: a proposed answer to a problem, open to attack.

**Criticism**: an artifact whose job is to attack a conjecture or another criticism, carrying a warrant.

**Attack**: the directed relation "k attacks a," linking a criticism to its target.

</details>

## Exercises

**Exercise 1.** Two mathematicians are debating whether all continuous functions are differentiable. Dr. A conjectures that they are. Dr. B produces a specific continuous function with no derivative anywhere (a Weierstrass function). Dr. A responds that Dr. B's example assumes a pathological construction that does not appear in practice.

Identify the problem, the conjectures (if any), and each attack in this exchange. Who is attacking whom?

<details><summary>Show solution</summary>

**Problem**: Are all continuous functions differentiable?

**Dr. A's conjecture**: all continuous functions are differentiable.

**Dr. B's criticism**: attacks Dr. A's conjecture with a specific counterexample (the Weierstrass function). This is an attack from Dr. B's artifact to Dr. A's conjecture.

**Dr. A's response**: attacks Dr. B's criticism — specifically targeting the criterion that Dr. B used ("mathematical existence is enough") and substituting a different one ("only practically occurring functions count"). This is an attack from Dr. A's new artifact to Dr. B's criticism.

So the attack graph has two edges: B → A's conjecture; A's response → B's criticism. Whether Dr. A's response itself stands is a further question the adjudicator would answer once we have the formal machinery.

Note: in the actual mathematics, Dr. B's example is unimpeachable, and the Weierstrass function is a legitimate continuous function. Dr. A's response would not survive scrutiny — but the *structure* of the exchange is what the exercise is about.

</details>

**Exercise 2.** Three students argue about the following problem: *Does every polynomial with real coefficients have a real root?*

- Student P conjectures: yes, every polynomial has a real root.
- Student Q criticizes P: $x^2 + 1$ has no real root.
- Student R criticizes Q's criticism: Q is only considering degree-2 polynomials, not all polynomials — so Q's example doesn't address P's conjecture in the right generality.

(a) Draw the attack graph: list each artifact and each directed attack edge.
(b) Does R's move reinstate P's conjecture, refute it, or neither? Explain informally.

<details><summary>Show solution</summary>

**(a) Attack graph:**

Artifacts: P (the conjecture), Q (criticism of P), R (criticism of Q).

Edges: Q attacks P; R attacks Q.

(b) R's criticism attacks Q, not P directly. If R's attack on Q is successful (i.e., R itself is not attacked and undermines Q), then Q is refuted — Q's attack on P loses standing. P would then be reinstated: it was only under threat because of Q, and Q is now under threat from R.

But notice: P's conjecture is actually *false* (the polynomial $x^2 + 1$ is a perfectly valid counterexample to "every polynomial has a real root"). R's objection to Q is also wrong — Q's example does address P's conjecture in full generality (it is a real-coefficient polynomial with no real root). So in reality, R's attack on Q would itself be refuted once anyone checked Q's example carefully.

The exercise illustrates both things: the *structure* of the loop (attacking the attack can reinstate the conjecture) and its *correctness* property (the formal machine doesn't automatically endorse any move — every attack has to carry a legitimate warrant, and the adjudicator computes what stands given the whole graph).

</details>

**Exercise 3 (stretch).** Consider the following claim: "A criticism, once raised, can never be taken back — the system grows by addition, never deletion."

Is this claim consistent with the idea that criticisms can be refuted and ideas can be reinstated? Explain why or why not in two or three sentences, using only the vocabulary from this module.

<details><summary>Show solution</summary>

Yes, the two ideas are consistent. "Never taken back" means the artifact (the criticism) remains a node in the system — it is not erased. But *refuted* is a status computed by the adjudicator from the attack graph, not a deletion. Marcus's temperature criticism stays in the system even after Priya attacks it; what changes is the computed verdict about whether Marcus's criticism is currently standing. Growth by addition and refutation by status-computation operate at different levels: one is about the contents of the archive, the other is about what the archive currently endorses.

</details>

## Recap

The conjecture–criticism loop has four pieces: a problem invites a conjecture, a conjecture can be attacked by a criticism, and — crucially — criticisms are themselves things that can be attacked. That last point is what gives the loop its productive structure: no attack is beyond scrutiny. The rest of this course replaces "can be attacked" with exact definitions, replaces "currently standing" with a computable fixed-point construction, and replaces informal judgment about what survives with a provable lemma. The bread argument is the right shape; the next ten modules give it mathematical teeth.
