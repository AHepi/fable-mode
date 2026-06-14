---
title: What a Deformation Can't Change
course: topology
order: 6
summary: A topological invariant is a property deformation can't change — so a difference in one proves two shapes are genuinely different; connectedness is the first.
estimatedMinutes: 18
objectives:
  - State what a topological invariant is and the direction of its logic (differing invariant ⇒ not homeomorphic).
  - Define connectedness ("one piece," not splittable into two separated open sets).
  - Use connectedness to argue two simple shapes are not homeomorphic.
prerequisites: [05-homeomorphism]
---

In the old Prussian city of Königsberg, a river split around an island and forked, carving the town into four chunks of land joined by seven bridges. The townsfolk had a Sunday habit and an idle question: could you stroll the city and cross every one of the seven bridges exactly once, no bridge twice, no bridge skipped? People tried for years. Nobody managed it. In 1736 Leonhard Euler settled the matter — there is no such walk — and the way he settled it is the reason we open with the story.

Euler threw away the map. The width of the river didn't matter. The lengths of the bridges, the shapes of the four landmasses, the distances between them, the angles of the streets — none of it mattered. All that mattered was *what connects to what*: four lands, seven bridges, and the pattern of which bridge touches which land. Two cities with bridges in the same connection-pattern would have the same answer even if one were the size of a postage stamp and the other the size of a continent. Euler had stripped a geography problem down to its bare bones of *connection*, and found that the bones alone decided it.

That instinct — *care about connection, not measurement* — is the instinct of this whole course. We have spent five chapters building the precise version of it. We now have **homeomorphism** (module 05): a continuous bijection with a continuous inverse, the exact meaning of "the same shape up to deformation," written `$X \cong Y$`. We can finally ask the question that has been waiting since the very first page: given two shapes, how would you *prove* they are not the same? Not just fail to find a deformation between them — anyone can fail — but prove for certain that no deformation could ever exist. This chapter builds the engine for that proof, and then fires it for the first time.

### A fingerprint that survives every disguise

Here is the idea, and it is the most important logical move in the course, so we will take it slowly.

A homeomorphism is allowed to disguise a shape almost beyond recognition. It can stretch a coin-sized circle into a stadium-sized one, bend a straight segment into a corkscrew, blow a small blob up into a huge one. After all that disguising, what could you possibly still recognize? You need a feature so deep that *every* homeomorphism leaves it untouched — a feature that survives every disguise the way a fingerprint survives a change of clothes, a haircut, a fake name. Find such a feature, and you have something you can trust.

That is exactly what an invariant is.

## Definition (Topological invariant)

A **topological invariant** is a property of a space that is preserved by every homeomorphism: whenever `$X \cong Y$`, if `$X$` has the property then `$Y$` has it too.

The bridge from the picture to the definition is short, because the picture *is* the definition. "Preserved by every homeomorphism" is the careful spelling of "survives every disguise": a homeomorphism is the most general legal disguise a shape can wear (module 05), and a property is invariant precisely when no such disguise can strip it off. So if `$X$` has the property and `$X \cong Y$`, then `$Y$`, being the same shape in disguise, must carry the property too.

Now the part you must hold onto — read it twice. The invariant gives you a one-way test, and the direction is everything.

> Suppose `$X$` has some invariant property and `$Y$` does not. Then `$X$` and `$Y$` **cannot** be homeomorphic. For if they were — if `$X \cong Y$` — the property would have to carry across to `$Y$`, and it didn't. So no homeomorphism between them can exist. The two shapes are genuinely, provably different.

This is the proof engine. A clue, in detective terms: a single fingerprint that doesn't match convicts. If your shape and the suspect shape differ in even one invariant, the case is closed — they are not the same, and no amount of clever stretching will ever make them so.

> **A tempting wrong answer:** "So if two shapes have the *same* value of an invariant, they must be the same shape." No. The logic runs one way only, and this is the way it does *not* run. Matching invariants prove **nothing** by themselves. Think of the detective again: a matching fingerprint at a crime scene does not, on its own, prove the suspect innocent — plenty of different people could share the trait you happened to check. A *differing* clue convicts; *matching* clues acquit no one. Two shapes can agree on every invariant you have tested and still turn out to be different, because you simply haven't tested the right one yet. So invariants are a tool for proving shapes **different**, never for proving them the **same**. Burn that asymmetry into your memory; we will rely on it for the rest of the course, and the capstone is built entirely around it.

So invariants don't classify shapes for us. They do something narrower and more powerful: they let us *separate* shapes with certainty. To use one, we need an actual property that homeomorphisms preserve. We have been circling the most natural one since module 01 — whether a shape is all in one piece.

### One piece, made precise

Some shapes hang together as a single body. A line, a circle, a filled disk, a solid clay mug — pick any two points and you can travel from one to the other without leaving the shape. Other shapes come in separate parts: two dots sitting apart on the page, three unstrung beads, a pair of circles that don't touch. The everyday word is **connected** — one piece versus several.

We want to pin "one piece" down without leaning on a picture, because pictures will fail us on harder shapes. The clean way uses the open sets from module 02 — the sets where every point has room around it. A shape is in *one* piece when you cannot cleanly cleave it into two. And the right meaning of "cleanly" is in terms of open sets: a clean split is one where neither part touches the other, each part sealed off in its own open region.

## Definition (Connected)

A space `$X$` is **connected** if it cannot be written as the union of two non-empty open sets `$U$` and `$V$` that are disjoint and together cover `$X$` — that is, there is no pair of open sets `$U, V$` with
$$
U \cup V = X, \qquad U \cap V = \varnothing, \qquad U \neq \varnothing, \qquad V \neq \varnothing.
$$
If such a pair *does* exist, `$X$` is **disconnected**, and the pair is a *splitting* of `$X$` into two separated pieces.

Take this apart slowly; each condition is doing a job. `$U \cup V = X$` says the two parts cover the whole shape — nothing is left out. `$U \cap V = \varnothing$` says they don't overlap — each point lands in exactly one part. Both are **open** (module 02): every point of `$U$` has room around it that stays inside `$U$`, and the same for `$V$`. That is what "separated" means here — neither part has any point clinging to the boundary of the other, because each point sits comfortably inside its own open region with elbow room to spare. And both are **non-empty**, so it is an honest split into two real pieces, not the cheat of calling the whole shape one part and the empty set the other. A shape is *connected* when no such honest, clean split is possible: try as you might, you cannot carve it into two separated open chunks. It is one piece.

Resist one stubborn temptation here: "connected" does *not* mean "you can draw it in one pen-stroke." That is a different idea, and it will mislead you. Connectedness is about not splitting into two separated open sets — full stop. It is not about drawing, not about one stroke of a pen, not about whether a shape merely *looks* joined. Consider two circles that touch at a single point, like a figure eight: your pen sails through it in one stroke, and indeed it happens to be connected — but the reason is that you can't split it into two separated open sets (the touching point refuses to sit cleanly in one side or the other), *not* the pen test. Other shapes are connected and cannot be drawn in any single stroke at all. Keep your eye on the definition, not on the doodle.

Connectedness is the first genuine topological invariant we can name: **if `$X \cong Y$` and `$X$` is connected, then `$Y$` is connected too.** A homeomorphism is a continuous bijection with a continuous inverse (module 05); a continuous map (module 04) cannot tear a single piece into two separated open sets, because that would mean an open set in `$Y$` whose preimage in `$X$` fails to be open — exactly what continuity forbids. We won't grind through that proof in full here; the point to carry forward is the headline. Connectedness rides across every homeomorphism unchanged. It is a fingerprint.

## Worked example

**Problem.** Let `$X = (0, 1)$`, a single open interval on the real line `$\mathbb{R}$`. Let `$Y = (0,1) \cup (2, 3)$`, two open intervals with a gap between them. Prove that `$X$` and `$Y$` are not homeomorphic.

**Solution.** This is our first real proof, so we walk every step and say why.

The strategy is the proof engine above: find one invariant on which `$X$` and `$Y$` disagree. We use connectedness.

*Step 1 — `$Y$` is disconnected.* We must exhibit a splitting: two non-empty, disjoint, open sets covering `$Y$`. Take `$U = (0,1)$` and `$V = (2,3)$`. Each is an open interval, so each is open. They are disjoint, since `$1 < 2$` leaves a gap and no point lies in both. Their union is all of `$Y$` by the way `$Y$` was defined. And neither is empty. So `$U, V$` form an honest split, and by the definition, `$Y$` is **disconnected**.

*Step 2 — `$X$` is connected.* The single interval `$(0,1)$` cannot be carved into two separated open pieces. Suppose, for contradiction, someone hands you a split `$U, V$` of `$X$`. Pick a point `$a$` in `$U$` and a point `$b$` in `$V$`, and say `$a < b$` (if not, swap their names). Slide rightward from `$a$` toward `$b$` and watch where you cross from the `$U$` side to the `$V$` side. At the crossover point there is trouble: that point lies in `$U$` or in `$V$`, but whichever set it lands in, points immediately on the other side belong to the *other* set, so it has no room around it staying inside its own set — which open sets are required to have (module 02). The split springs a leak right at the seam. No clean split exists, so `$X$` is **connected**. *(This is the heart of why an interval is one piece; the full airtight version is a standard result we'll take as established.)*

*Step 3 — apply the engine.* We have an invariant, connectedness, with `$X$` connected and `$Y$` disconnected. By the invariant logic, two shapes that disagree on an invariant cannot be homeomorphic. Therefore `$X \not\cong Y$`. $\square$

Notice what we did *not* do. We did not hunt for a deformation, fail, and shrug. We *proved* — with certainty, for all possible maps at once — that no homeomorphism between these two shapes can exist. That is the power the engine buys you. One piece can never be the same shape as two pieces, because connectedness is a fingerprint and theirs don't match.

## Check yourself

Two separate points (just the set `$\{0\} \cup \{1\}$` on the number line) versus the whole real line `$\mathbb{R}$` — are they homeomorphic? Name the invariant that decides it, and the direction of the logic.

<details><summary>Show answer</summary>

No, they are not homeomorphic. The deciding invariant is **connectedness**. The real line `$\mathbb{R}$` is connected — one piece. The set of two separate points is disconnected: take `$U$` to be a small open interval around `$0$` (containing the point `$0$` but not `$1$`) and `$V$` a small open interval around `$1$`; these are non-empty, disjoint, open, and cover the two-point set, so they split it. The two spaces disagree on the invariant, and *a difference in an invariant proves the shapes are not homeomorphic* — that is the direction of the logic. (Note the direction: we are using the disagreement to convict, not any agreement to acquit.)

</details>

## Exercises

Work each from the definitions. For the proofs, name your invariant and state the direction of the logic explicitly.

**1.** Write down, in symbols, what it means for a space `$X$` to be *disconnected*. (No proof — just the definition.)

<details><summary>Show solution</summary>

`$X$` is disconnected if there exist open sets `$U$` and `$V$` with
$$
U \cup V = X, \quad U \cap V = \varnothing, \quad U \neq \varnothing, \quad V \neq \varnothing.
$$
In words: `$X$` splits into two non-empty, disjoint, open pieces that together cover it. Connected means *no* such pair exists.

</details>

**2.** Show that `$Z = (0,1) \cup (1, 2)$` is disconnected by exhibiting an explicit splitting.

<details><summary>Show solution</summary>

Take `$U = (0,1)$` and `$V = (1,2)$`. Both are open intervals, hence open. They are disjoint (the point `$1$` belongs to neither — it has been removed from `$Z$`). Their union is exactly `$Z$`. Neither is empty. So `$U, V$` split `$Z$`, and `$Z$` is disconnected. (The single missing point at `$1$` is enough to break the interval into two separated pieces — there is no clinging boundary point holding them together, because `$1$` is not in the space at all.)

</details>

**3.** A classmate says: "I checked that two shapes are both connected, so they must be the same shape." What is wrong with this reasoning?

<details><summary>Show solution</summary>

The reasoning runs the invariant logic backwards. Matching invariants prove nothing on their own — the implication goes "differing invariant `$\Rightarrow$` not homeomorphic," and *only* that way. Two connected shapes can easily be different: a line and a circle are both connected, yet they are not the same shape (a fact module 07 will prove). Agreement on connectedness — or on any single invariant — never establishes sameness; it only fails to rule it out. Invariants convict; they do not acquit.

</details>

**4.** Use connectedness to prove that a single point `$\{p\}$` and the two-point space `$\{p, q\}$` (two separate points) are not homeomorphic.

<details><summary>Show solution</summary>

*Invariant:* connectedness. *Direction:* differing invariant `$\Rightarrow$` not homeomorphic.

The two-point space is disconnected: put `$U = \{p\}$` and `$V = \{q\}$`. In this space each single point is an open set (each point has "room" that is just itself, with the other point separated off), so `$U$` and `$V$` are open, non-empty, disjoint, and cover the space — a splitting. The one-point space `$\{p\}$` is connected, because you cannot write it as two non-empty disjoint sets at all (you only have one point to hand out, and both parts of a split must be non-empty). The two spaces disagree on the invariant connectedness, so they are not homeomorphic. $\square$

</details>

**5.** *(Conceptual.)* Suppose someone discovers a brand-new topological invariant and computes it for the coffee mug and the doughnut, getting the same value for both. Does this prove the mug and the doughnut are the same shape? Explain in terms of the direction of the logic.

<details><summary>Show solution</summary>

No — it proves nothing about whether they are the same. The mug and the doughnut *are* the same shape (the mug-and-doughnut deformation from module 01), but a single matching invariant is never what establishes that. Invariants only ever fire in one direction: a *difference* proves two shapes are not homeomorphic; an *agreement* leaves the question open. So matching on the new invariant is consistent with their being the same, but it is not a proof of it. To prove two shapes genuinely *are* the same, you must exhibit an actual homeomorphism between them — invariants can't do that job. (This one-way asymmetry is the spine of the capstone, where we settle mug = doughnut `$\neq$` sphere.)

</details>

## Recap

We now hold the course's proof engine. A **topological invariant** is any property a homeomorphism leaves untouched — a fingerprint that survives every disguise — and it gives a one-way test that you must never run backwards: if two shapes *differ* in an invariant they cannot be the same shape, while if they *agree* you have learned nothing at all. Our first invariant is **connectedness**, the precise form of "one piece": a space is connected when it cannot be split into two non-empty, disjoint open sets, a meaning that has nothing to do with pen-strokes or how joined a thing looks. With it we proved, not merely suspected, that one interval is not two intervals — a single piece can never be the same shape as several. Königsberg told us to care about connection over measurement; we have now made connection sharp enough to convict. Next we sharpen the blade itself: a way to *cut* a shape and count what falls apart, turning connectedness into a tool that can tell a line from a circle.
