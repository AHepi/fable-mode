---
title: Telling Shapes Apart
course: topology
order: 11
summary: Bringing the invariants together to settle the opening question — and an honest look at what invariants can and can't prove.
estimatedMinutes: 18
objectives:
  - Combine invariants (connectedness, genus, χ) to classify a set of shapes.
  - Explain why matching invariants do not prove two shapes are the same (the one-way logic).
  - Describe, at a glance, the classification of surfaces and where topology goes next.
prerequisites: [06-invariants-and-connectedness, 07-cut-and-count, 08-surfaces-and-holes, 10-euler-characteristic]
---

Think about how a courtroom convicts. A single fact can clear the room of doubt: the suspect's blood is type O, the blood at the scene is type A, and that settles it — two different people, no further argument needed. But run it the other way and the certainty evaporates. The suspect's blood is type A; the scene's is type A. Does that prove it was him? Of course not — half the country is type A. A matching clue narrows the field; it never closes the case.

That asymmetry is the exact shape of everything we have built. Over ten chapters you have collected a small evidence kit for telling shapes apart — connectedness, the cut-and-count move, the hole count, the Euler characteristic — and each is a clue of precisely this kind. A clue that *differs* convicts: it proves two shapes are genuinely different. A clue that *matches* never acquits: on its own, it cannot prove two shapes the same. This last chapter lays the whole kit on the table, settles the question the course opened with, and then looks squarely at the one thing it can't do.

### The logic, one more time

Recall the invariant logic from module 06, the engine under all of this. A topological invariant is a feature that no deformation can change — a fingerprint that survives every disguise. Because a homeomorphism (module 05: a continuous bijection with a continuous inverse) is exactly a deformation made precise, any invariant must read the same on two shapes that are homeomorphic. Turn that around and you get the one move we actually use:

> If two shapes disagree on a single invariant, they cannot be homeomorphic.

Read it carefully, because the temptation is to read the reverse. The arrow runs one way: *different invariant* forces *different shape*, but *same invariant* forces nothing — it leaves the verdict open. Connectedness from module 06, the through-hole count from module 08, the number $\chi = V - E + F$ from module 10: each is admissible evidence, and each convicts only when it differs.

### Putting the kit to work

Let's classify a lineup. Here are six objects, the cast of the whole course: a solid rubber **ball**, a hollow **sphere** (just the surface, like a balloon's skin), a **doughnut**, a **coffee mug**, a **two-holed pretzel** (a surface with two holes through it), and a flat **disk** (a coin). We want to sort them into "same shape" piles using only the evidence kit — no guessing, every grouping backed by a clue.

Start with the easy convictions, the ones a single differing invariant settles.

The **sphere** and the **doughnut** are not homeomorphic. We do not need to wrestle with deforming one into the other; we just read the Euler characteristic. By module 10, $\chi(\text{sphere}) = 2$ and $\chi(\text{torus}) = 0$, and the doughnut's surface *is* the torus. Since

$$
\chi(\text{sphere}) = 2 \neq 0 = \chi(\text{doughnut}),
$$

a differing invariant convicts: no homeomorphism between them can exist. The hole you've been pointing at since chapter one is caught in the arithmetic.

The **doughnut** and the **two-holed pretzel** are not the same either. Here the cleanest clue is the hole count (genus) from module 08: one through-hole versus two. A deformation can stretch a hole or move it, but it can never quietly add a second one — that would take a tear and a glue, the forbidden moves from module 01. One hole, two holes: differing invariant, different shape. (The Euler characteristic agrees, for those who like to double-check: the two-holed surface has $\chi = -2$, against the doughnut's $0$.)

Now the surprising pairings — where the *matching* evidence is, this time, backed by an honest deformation.

The **coffee mug** and the **doughnut** are the same shape. This is the joke the course is named for, and you proved its intuitive half in module 01: the soft-clay mug flattens into a ring, the hole hiding in the handle the whole way, never a tear, never a glue. Every clue agrees — both are one connected piece, both have one through-hole, both have $\chi = 0$ — and here the agreement is trustworthy, because we hold the deformation itself. Same shape: $\text{mug} \cong \text{doughnut}$.

The **ball** and the **disk** are homeomorphic, as solid lumps: a solid rubber ball presses flat into a coin without tearing or gluing — squash the top down to the bottom, spread it out, done. Both are a single solid blob with no hole. (Don't confuse the solid ball with the hollow sphere, the balloon's skin: the ball is the whole filled-in thing, the sphere just its surface. Different objects — which is why they sit on separate lines.)

So the piles come out like this:

$$
\{\text{ball}, \text{disk}\}, \qquad \{\text{sphere}\}, \qquad \{\text{mug}, \text{doughnut}\}, \qquad \{\text{pretzel}\}.
$$

Four piles, every split backed by a differing invariant, every merge backed by an actual deformation. That is the whole method of the course, run once at full speed.

## Check yourself

I claim a **hollow sphere** (balloon skin) and a **coffee mug** are different shapes. Which single clue convicts them fastest, and what does it read on each?

<details><summary>Show answer</summary>

The Euler characteristic, or equivalently the hole count. The mug deforms to a doughnut (the torus), so $\chi(\text{mug}) = 0$, while $\chi(\text{sphere}) = 2$. Since $0 \neq 2$, a differing invariant convicts: no homeomorphism exists. (In hole-count language: the mug has one through-hole, in its handle; the hollow sphere has none.) One clue is all it takes.

</details>

### The honest limit: matching never acquits

Now the hard part. Every grouping above had two things going for it: the splits had a differing clue, the merges had an actual deformation. Watch what happens if you lean on matching clues *alone*.

Suppose you meet two surfaces and run the whole kit. Both are one connected piece. Both have $\chi = 0$. Both, as far as you can measure, have one hole. Three clues, all matching. Have you proved them the same shape?

You have not. You have proved only that *these particular clues failed to tell them apart* — a different, much weaker statement. The kit has a finite reach, and two genuinely different shapes can agree on every test in it and still part ways on some property you never thought to check. Matching invariants narrow the field, like a matching blood type; they never close the case.

So how do you ever prove two shapes really *are* the same? You go back to the definition. You have to actually exhibit the homeomorphism — name the continuous, reversible deformation that carries one onto the other, the way module 01 squashed the mug into the doughnut by hand. That is the only thing that acquits. And it is genuinely harder work: a differing invariant is a one-line conviction, but a homeomorphism is a whole construction you must build and check. This is why, all course long, we *proved* shapes different but only ever *deformed* shapes together. The asymmetry was never an accident. It is built into what invariants are.

> **A tempting wrong answer:** "The sphere and the doughnut have different $\chi$, so $\chi$ is a perfect test — equal $\chi$ must mean same shape." The first half is right and the second half is exactly the courtroom error. Equal $\chi$ is a matching clue. It cannot acquit. The two-holed pretzel and a sphere-with-a-very-strange-decomposition could in principle share a number and still differ — $\chi$ convicts when it disagrees and stays silent when it agrees.

### A theorem to admire

Here is where the course earns one moment of awe. For one special family of shapes — *closed surfaces*, the boundaryless skins like the sphere and the torus — the matching problem is actually solved, completely, by a theorem we are going to state and never prove.

**The classification of surfaces (stated, not proved).** Every closed surface is, up to homeomorphism, exactly one of two kinds:

- an **orientable** one (module 09: it has a consistent front and back) — and these are precisely the sphere, the torus, the two-holed surface, the three-holed surface, and so on, *indexed entirely by the number of holes*, the genus $g$; or
- a **non-orientable** one — the one-sided family that the Möbius band points toward, built by sewing in twists instead of handles.

And the Euler characteristic packages the orientable count perfectly: a closed orientable surface of genus $g$ has

$$
\chi = 2 - 2g,
$$

which gives back everything we found by hand — the sphere ($g = 0$) scores $2$, the torus ($g = 1$) scores $0$, the two-holed pretzel ($g = 2$) scores $-2$. For *this* family, the invariants stop being one-way. Genus and orientability together don't just convict; they acquit. Two closed surfaces with the same genus and the same orientability really are the same shape.

Do not mistake what just happened: we did not prove this. Proving it is deep mathematics — you must show no other surface can exist, that the list is genuinely complete — and that is a course of its own. What this chapter offers is the right to *believe* it, earned honestly: you computed $\chi$ with your own hands, watched it refuse to budge under deformation, and saw genus and orientability behave like true fingerprints across every example we tried. The theorem is the mountain those examples were climbing toward. Admire it; don't expect to have proved it from a first course.

## Check yourself

A friend says: "I found two closed surfaces, both orientable, both with $\chi = -2$. Are they the same shape?" Using the classification theorem above, what do you tell them — and why is this different from the cautionary case earlier?

<details><summary>Show answer</summary>

Yes, they are the same shape. From $\chi = 2 - 2g = -2$ we get $g = 2$: both are the two-holed surface. Same genus *and* same orientability, so by the classification theorem they are homeomorphic. This *is* allowed to acquit, where the general kit was not, because the theorem is a hard-won extra fact about closed surfaces specifically: for that family, genus plus orientability is a *complete* set of invariants. Outside that family — arbitrary shapes — matching invariants still prove nothing on their own.

</details>

## Exercises

**1.** A solid cube and a solid ball — are they the same shape or different? Back your answer with the kit.

<details><summary>Show solution</summary>

Homeomorphic. A solid cube of clay rounds off into a ball with no tearing and no gluing — soften the corners, smooth the edges, and you have a solid blob. Both are a single connected lump with no through-hole. This is a *merge*, so the honest backing is the deformation itself, not a matching clue. (A matching invariant alone could never prove sameness — but here we have the actual reshaping, which is what acquits.)

</details>

**2.** Compute $\chi$ for a closed orientable surface of genus $3$, and say which earlier surface it is *not* equal to and why.

<details><summary>Show solution</summary>

Using $\chi = 2 - 2g$ with $g = 3$: $\chi = 2 - 2(3) = -4$. It is not equal to the torus, which has $g = 1$ and $\chi = 0$. Either clue convicts: the genus differs ($3 \neq 1$) and the Euler characteristics differ ($-4 \neq 0$). A differing invariant proves the shapes are different — no homeomorphism between a three-holed surface and a doughnut can exist.

</details>

**3.** Two shapes both turn out to be connected and both have $\chi = 0$. A classmate concludes they must be homeomorphic. Is the conclusion justified? Explain.

<details><summary>Show solution</summary>

No. Matching invariants never acquit — they only fail to convict. Connectedness and $\chi$ agreeing tells you these two clues couldn't tell the shapes apart, far weaker than proving them homeomorphic. To prove sameness you must exhibit a homeomorphism (a continuous, reversible deformation carrying one onto the other), the way module 01 deformed the mug into the doughnut. Without that, the case stays open. (The courtroom error from the chapter's opening: a matching blood type narrows the field; it does not name the culprit.)

</details>

**4.** Why did we, all course long, *prove* two shapes were different but only ever *deform* shapes together — never the reverse? Answer in terms of the one-way logic.

<details><summary>Show solution</summary>

Because the two directions need opposite kinds of evidence, and they are not equally cheap. Proving shapes *different* needs one differing invariant — a single disagreeing clue convicts instantly, in a line. Proving them *the same* cannot be done by any matching clue, however many agree; it requires building the homeomorphism and checking it works both ways. A conviction is one disagreement; an acquittal is a whole construction. So the course used invariants to separate shapes and hand-built deformations to unite them — exactly which tool does which job.

</details>

**5.** *(Conceptual.)* The classification theorem lets genus-plus-orientability *acquit* two closed surfaces — to prove them the same. But earlier we insisted matching invariants never prove sameness. Are these in contradiction? Resolve it.

<details><summary>Show solution</summary>

No contradiction. The general rule — matching invariants never acquit — holds for *arbitrary* shapes, where our kit is a finite handful of tests with no guarantee it catches every difference. The classification theorem is an extra, hard-won fact about one family, *closed surfaces*: for them it has been proved that genus and orientability form a *complete* set of invariants — no two distinct closed surfaces can share both. Completeness is exactly what lets matching acquit. The general rule never said acquittal is *impossible*, only that a finite kit doesn't grant it for free. The theorem is the price you pay for it, and you only get it on closed surfaces.

</details>

## Recap

We began with a topologist who couldn't tell a coffee mug from a doughnut, and we end knowing exactly why — and exactly what that ignorance is worth. The mug and the doughnut are one shape because you can deform either into the other by hand, no tear, no glue; the sphere is a different shape because its Euler characteristic, counted on your fingers, refuses to match. That is the whole art of telling shapes apart: a clue that differs convicts, and only an honest deformation acquits. The rubber sheet you started stretching in chapter one was teaching you, all along, which features of a shape are too deep for any squashing to reach. Some you can now compute; the rest are out there waiting. A knot is a circle that remembers how it sits in space, and sorting which knots are *really* different is a whole field. The Klein bottle from module 09 is a surface with no inside and no outside, sewn from twists the way the torus is sewn from handles. And on the torus, some loops you can shrink to a point and some you never can — that difference opens the door to algebraic topology, where shapes are told apart not by counting but by the loops they hold. You came for a joke about a mug. You leave able to prove it.
