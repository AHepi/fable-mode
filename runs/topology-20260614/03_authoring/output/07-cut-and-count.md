---
title: Cut It and Count
course: topology
order: 7
summary: "A reusable proof move: remove a point and count the pieces — enough to prove a line is not a circle."
estimatedMinutes: 16
objectives:
  - Apply the cut/removal argument to distinguish shapes (interval vs. circle; Y vs. interval).
  - Explain why the choice of which point to remove matters.
  - Construct a removal argument for a new pair of simple shapes.
prerequisites: [06-invariants-and-connectedness]
---

Here is a puzzle you can settle without leaving your chair. A straight piece of thread and a closed loop of the same thread — are they the same shape, in the topologist's sense? They look like cousins: both are thin, both bend any way you please, both are one connected piece. Yet something separates them, and the cleanest way to expose it is almost childishly simple. Imagine a single snip. Cut the straight thread once in the middle and it falls into two pieces. Cut the loop once, anywhere, and it springs open into one long strand — still a single piece. Same scissors, same single cut, two different answers. The thread didn't care how long it was or how it curved; it cared whether it closed back on itself. That gap — one cut, then count what falls apart — is the entire weapon of this chapter, and it is sharp enough to prove that a line is genuinely, certifiably, not a circle.

In module 06 we forged the proof engine. A topological invariant is a property a deformation can't change, so a single invariant that comes out *different* for two shapes proves they are not homeomorphic — that no continuous reshaping with a continuous way back could ever turn one into the other. Connectedness, "being one piece," was our first invariant. This chapter adds no new invariant. It adds a *technique* for wringing more out of the one we already have: we damage a shape in the gentlest way imaginable, then watch how its connectedness reacts.

### Damage it the same way, then compare

The move, in plain words: take a shape, remove a single point from it — just one, leaving a pinprick where it stood — and count how many pieces the leftover is in. Then do the identical thing to a second shape and count again. If the two counts disagree, the shapes are not homeomorphic. That's the whole idea.

Why is this a fair test, and not just a coincidence of two doodles? Because a homeomorphism is a perfect two-way correspondence that keeps neighbors together (module 05). If a homeomorphism `$f$` matches shape `$X$` onto shape `$Y$`, it pairs each point of `$X$` with exactly one partner in `$Y$` and back again. So the instant I pluck a point `$p$` out of `$X$`, the map `$f$` plucks its partner `$f(p)$` out of `$Y$` — and what remains of `$X$` still corresponds, point for point and neighbor for neighbor, to what remains of `$Y$`. The two leftovers are *themselves* homeomorphic. And connectedness, being an invariant (module 06), cannot tell homeomorphic shapes apart, so the two leftovers must break into the *same* number of pieces. The number of pieces a removed point produces is therefore something every homeomorphism is forced to respect — and anything a homeomorphism respects is a tool for catching shapes that differ.

That argument deserves to be stated once, cleanly, as the principle the rest of the chapter leans on.

> **The cut-and-count principle.** Suppose `$X \cong Y$` by a homeomorphism `$f$`. For any point `$p$` of `$X$`, removing `$p$` from `$X$` and removing its partner `$f(p)$` from `$Y$` leaves two shapes that are still homeomorphic — and so have the *same* number of connected pieces. Consequently, if some point of `$X$` can be removed to split it into a number of pieces that *no* single removed point of `$Y$` can ever produce, then `$X \not\cong Y$`.

Read that last sentence twice, because it hides the trap we'll spend the second half of the chapter disarming: the comparison is between what each shape *can* do, not between two points grabbed at random. First, though, the simplest case — where the trap stays asleep.

### A line is not a circle

Let the line be the open interval `$(0,1)$`: picture a straight stretch of points with no endpoints, an unbroken run. Let the circle be exactly what its name says — a loop, no ends.

Remove one point from the inside of the interval, say the point at `$\tfrac{1}{2}$`. What survives is everything below it, `$(0, \tfrac{1}{2})$`, and everything above it, `$(\tfrac{1}{2}, 1)$` — two separate stretches with a gap where the point used to be. You cannot walk from the lower stretch to the upper one without stepping onto the missing point, and the point is gone. The interval, cut once, falls into **two pieces**.

Now remove one point from the circle — any point; on a featureless loop one is as good as another. Snip the loop at that spot and it opens into a single long arc. From any surviving point you can still reach any other by traveling the long way around, exactly the way the looped thread opened into one strand. The circle, cut once, stays in **one piece**.

Two pieces against one. By the cut-and-count principle, the interval and the circle are not homeomorphic. A line is not a circle — proved, not merely felt.

It is worth naming *why* the loop shrugs off a cut that floors the line: the loop kept a way around. Removing a point from the line severs the one and only route between its halves. Removing a point from the circle closes just one of two routes, and the survivor holds the shape together. A hole in your only road strands you; a hole in one of two roads is a detour.

## Check yourself

Remove one point from the *center* of a plus sign `$+$` — the spot where all four arms meet. How many pieces are left?

<details><summary>Show answer</summary>

**Four.** The center is the only thing fastening the four arms together; take it away and each arm becomes its own stranded stub with nothing joining them. So a `$+$` has a point whose removal yields four pieces — something a plain interval, which can manage at most two, can never match. You can already feel the shape of the next argument.

</details>

### Not all points are alike: the Y and the interval

The line-versus-circle case was generous, because on a circle every point behaves the same and on the interval every *interior* point behaves the same. So "any old point" gave clean counts. Most shapes are not that uniform, and that is exactly where the technique demands care.

Take a **Y-shape**: three straight arms meeting at one central junction — a three-way fork, the letter Y. Set it beside a plain interval, a single straight segment. Both are "one continuous strand of stuff," both connected, both look one-dimensional. Are they the same shape?

Watch a careless reader go wrong. Remove a point from the *tip* of one of the Y's arms, out at a loose end: almost nothing happens — you nick off a speck and the rest stays one piece. Remove a point from the *middle* of an arm and the Y splits into two, just like the interval. So far the Y has matched the interval move for move, and the hasty conclusion is that they're the same. They are not. Here is the point the careless reader strolled right past.

> **A tempting wrong answer:** "I removed a point from each shape and both split into two pieces, so cut-and-count can't tell them apart." The test never promised that *every* removed point would expose the difference — it promised that the *full range of what's possible* must match. For each shape you have to ask: what is the *most* a single removed point can do? To convict a shape, you find a point that does something the other shape *never* can, no matter which point it sacrifices.

So ask the sharper question. Is there a point of the Y whose removal does something an interval cannot? Yes — the junction. Remove the central point where the three arms meet and all three come loose at once. The Y falls into **three pieces**.

Now put the same honest question to the interval: is there *any* point of an interval whose removal gives three pieces? No. Remove an interior point and you get two; remove an endpoint and you get one (you only trim the very tip, leaving one shorter segment). One or two — never three. The interval simply owns no point of three-way-junction character.

That settles it. The Y has a point that yields three pieces; the interval has none. By the cut-and-count principle, **the Y and the interval are not homeomorphic.** The junction is the fingerprint — the deep feature module 06 promised would survive every disguise — and you uncover it by removing the *revealing* point, not the convenient one.

The lesson hardens into a habit. When you cut and count, you are not pitting one random snip against another. You are comparing *menus*: the full list of piece-counts each shape can produce as the removed point roams over all of it. The interval's menu is `$\{1, 2\}$`. The Y's menu reaches `$3$`. Different menus, different shapes. (And the plus sign from the check above? Its menu climbs to `$4$` — so it isn't a Y either.)

## Check yourself

A homeomorphism matches every point to exactly one partner. Use that fact to say, in a single sentence, why removing a point counts as a fair test at all.

<details><summary>Show answer</summary>

Because a homeomorphism between `$X$` and `$Y$` pairs each `$p$` with one partner `$f(p)$`, deleting `$p$` from one side corresponds exactly to deleting `$f(p)$` from the other, so the two leftovers stay homeomorphic — and an invariant like connectedness must hand them the same piece-count. The test is fair because the deletion respects the very correspondence that "same shape" is built from.

</details>

## Exercises

Work each one before opening its solution. For the cut-and-count problems, the discipline never changes: don't just remove *a* point — hunt for the *revealing* one, and compare the full range of what each shape can do.

**1.** Remove one point from the middle of a closed interval `$[0,1]$`. How many pieces remain? Then remove one of its endpoints (say the point `$0$`). How many now?

<details><summary>Show solution</summary>

Removing an interior point (say `$\tfrac12$`) splits `$[0,1]$` into `$[0,\tfrac12)$` and `$(\tfrac12,1]$` — **two pieces**. Removing the endpoint `$0$` leaves `$(0,1]$`, a single shorter segment — **one piece**. This is precisely why an interval's menu of piece-counts is `$\{1, 2\}$`: interior points give 2, endpoints give 1, and nothing gives more.

</details>

**2.** Use cut-and-count to show that the letter **X** (four arms meeting at one center) is not homeomorphic to the letter **L** (two arms meeting at one corner).

<details><summary>Show solution</summary>

Find each shape's most revealing point. Remove the center of the **X** and all four arms come loose: **four pieces**. Now the **L** — its only junction is the corner, where just *two* arms meet; removing the corner gives **two pieces**, and any other point of the L gives one or two. So the X's menu reaches `$4$` while the L's tops out at `$2$`. Four can never equal two, so **X `$\not\cong$` L**. (Note the move: we didn't compare random points; we compared the *largest* split each shape can produce.)

</details>

**3.** A classmate argues: "I removed a point from the X and a point from the L and both gave two pieces, so they're the same shape." Identify the flaw, then state the principle they broke.

<details><summary>Show solution</summary>

The flaw is comparing two *individually chosen* removals instead of the *full range* of what each shape can do. Yes, an arm-midpoint of the X gives two pieces, matching one of the L's outcomes — but a single matching result proves nothing. The principle: removal counts decide a case only when they reveal something one shape *can* do that the other *never can*. The X *can* produce four pieces (at its center); the L *never can*. That gap, not the coincidental match at two, is what convicts. (This is the one-way invariant logic of module 06 in new clothes: a *difference* convicts; a *match* acquits nothing.)

</details>

**4.** Is a circle homeomorphic to the figure-eight (two loops joined at a single crossing point)? Use a removal argument.

<details><summary>Show solution</summary>

No. Remove the crossing point of the figure-eight — the one spot where the two loops meet — and each loop springs open into an arc; but they were fastened together *only* at that crossing, so you are left with **two separate pieces** (two arcs). Now the circle's menu: removing *any* point of a circle leaves **one piece**, always (the loop opens but stays one strand, as we proved). The figure-eight has a point giving two pieces; the circle has no point giving more than one. Different menus, so the **figure-eight `$\not\cong$` circle**.

</details>

**5.** Construct your own argument: pick any two of the capital letters **C, T, O** (drawn as idealized curves) and prove they are not homeomorphic using cut-and-count. State each shape's menu of possible piece-counts.

<details><summary>Show solution</summary>

Several correct pairs work; here are the menus to compare.

- **C** is an arc with two loose ends — topologically just an interval bent without joining. An interior point gives 2, an endpoint gives 1, nothing gives more. **Menu: `$\{1, 2\}$`.**
- **T** has one junction where three arms meet (the top corner). Removing that junction gives **3**; interior arm points give 2, tips give 1. **Menu: `$\{1, 2, 3\}$`.**
- **O** is a loop, topologically a circle. Removing any point keeps it in **one piece**. **Menu: `$\{1\}$`.**

So, for instance, **T `$\not\cong$` C** because T can produce 3 pieces and C never exceeds 2; and **O `$\not\cong$` C** because C can be split into 2 while O can never be split at all by a single removal. Whatever pair you choose, there is a piece-count one shape reaches and the other can't — and that mismatch is the entire proof.

</details>

## Recap

No new invariant joined the arsenal this chapter — connectedness was already ours — but we learned to *aim* it. Puncture a shape at one point, count what falls apart, and you have read off a number every homeomorphism is bound to preserve. That single trick certified, with no hand-waving, that a line is not a circle. The catch to carry forward is that points are not interchangeable: the proof lives in the *revealing* point — the junction, the crossing — and the honest comparison is menu against menu, never snip against snip. Keep the scissors within reach. When surfaces arrive and the holes begin to multiply, every clean way of telling two shapes apart will earn its keep.
