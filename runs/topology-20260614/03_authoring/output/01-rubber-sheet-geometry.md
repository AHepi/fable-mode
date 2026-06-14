---
title: Rubber-Sheet Geometry
course: topology
order: 1
summary: Why a topologist sees a coffee mug and a doughnut as the same shape — the idea of continuous deformation.
estimatedMinutes: 14
objectives:
  - Explain what topological equivalence means in plain terms (continuous deformation).
  - Distinguish allowed moves (stretch, bend, twist) from forbidden ones (tear, glue).
  - Classify simple shapes as "the same" or "different" by deformation alone.
prerequisites: []
---

A topologist, the old joke goes, is someone who can't tell a coffee mug from a doughnut. It sounds like a put-down. It is actually the whole subject in one sentence.

Picture a coffee mug — not a sturdy ceramic one, but a mug made of soft modeling clay, the kind that gives under your thumb. There is the bowl that holds the coffee, and there is the handle, a loop of clay your finger goes through. Now start pressing. Flatten the bowl, slowly, never tearing it, never pinching a new edge shut. Push the clay that used to hold coffee up into the side of the handle. Keep the loop of the handle whole the entire time. Smooth everything as you go. What you are left with, if you were careful, is a ring of clay with a single hole through the middle — a doughnut. You never cut anything. You never stuck two separate pieces together. You just pushed clay around. And that is exactly why a topologist calls the mug and the doughnut *the same shape*.

This is what people mean by "rubber-sheet geometry." Imagine every shape drawn on a sheet of rubber so stretchy it never rips. You may pull the rubber, bend it, twist it, blow it up to the size of a house or shrink it to a speck. Topology is the study of whatever survives all of that pummeling. It throws away almost everything ordinary geometry cares about — length, angle, area, how straight a line is — and keeps only the deepest facts about a shape: how it is connected to itself, how many holes run through it, whether it is one piece or several. Those facts are tough. They sit underneath the stretching, unbothered.

So the mug equals the doughnut for one reason and one reason only: each is a single lump of stuff with exactly one hole, and you can squash either one into the other without ever breaking that rule. The mug's hole was hiding in the handle the whole time. The bowl was never the point.

### The rules of the game

Everything in this course grows out of one idea — that two shapes count as "the same" when you can deform one into the other — so it is worth being exact about which deformations count. There are moves you are allowed to make and moves you are forbidden to make, and the line between them is sharp.

**Allowed: stretch, bend, twist, shrink, expand.** Anything you can do to a lump of soft clay or an infinitely stretchy rubber sheet *without breaking it apart and without fusing parts together*. These are the gentle moves. They never create a new edge and never destroy an old hole. Crucially, every allowed move can be undone — you can always run the clay back the way it came. Stretching and the way back are both smooth; nothing jumps.

**Forbidden: tearing and gluing.** You may not rip the shape open, and you may not press two separate spots together until they merge. These are the violent moves, and they are banned because they change the very things topology cares about. Tear a doughnut and its hole is gone — you've made a curved stick. Glue the two ends of that stick back together and you've conjured the hole out of nowhere. Either move turns one shape into a genuinely different one. **No tearing, no gluing.** That single rule is the heartbeat of the entire course; we will lean on it in every chapter that follows.

Notice what the rule is built from. Stretching is *continuous* — it moves nearby bits of clay to nearby places, never flinging one point clear across the shape. Tearing is the opposite: it takes two points that were touching and yanks them apart, a sudden jump. Gluing does the reverse jump, slamming distant points together. So "deform without tearing or gluing" really means: *a continuous reshaping that has a continuous way back.* Hold onto that phrasing. Much later in the course, once we have the right vocabulary, we will make it razor-sharp and give it its proper name. For now, the clay in your hands is all the precision you need.

When two shapes are related this way — when one can be deformed into the other under these rules — we'll say they are **topologically equivalent**, or simply that they are *the same shape*. It is a generous notion of sameness, far looser than the one you grew up with, and getting used to its looseness is most of the work of this first chapter.

### What sameness ignores — and what it doesn't

The hardest habit to break is measuring. In topology, size is nothing. A circle the size of a coin and a circle the size of a stadium are the same shape; just scale the rubber up. Angles are nothing too. A square and a circle are the same: round off the four corners of the square, or equivalently, push a circle out at four points until it goes boxy. No tearing, no gluing — so a square *is* a circle, topologically. A straight line segment and a wildly wiggly curve of the same length-that-doesn't-matter are the same, because you can pull the wiggles straight.

> **A tempting wrong answer:** "A doughnut and a sphere are the same — just fill in the hole." Filling the hole means pressing the inner rim of the doughnut shut until the hole closes. That is *gluing*. It breaks the rule, so it doesn't count, and in fact no allowed sequence of moves will ever do it. The hole is permanent under stretching. A sphere has zero holes; a doughnut has one; and one hole can never be massaged down to zero without an illegal pinch. They are genuinely different shapes — which is the first hint that "counting the holes" might be a way to *prove* two things aren't the same. We will chase that hint for the rest of the course.

So topology forgets length and angle but remembers holes. It forgets straightness but remembers how many separate pieces you have. The art of the subject is learning which features are the fragile kind that stretching erases and which are the stubborn kind that survives.

## Worked example

**Problem.** Sort these four shapes into groups, where two shapes go in the same group exactly when one can be deformed into the other with no tearing and no gluing: a solid disk (a filled-in circle, like a coin), a doughnut (a ring), a drinking straw (a tube open at both ends), and a sphere (a hollow ball, like a basketball's surface).

**Solution.** Work by the rule — for each pair, ask whether stretching alone gets you from one to the other, and watch the holes.

- *Straw and doughnut.* A straw is a tube: a cylinder with two open circular ends and one hole running through it lengthwise. Take the soft straw and bend it around into a ring, then fatten the walls. The single through-hole is there the whole time and you never tear or glue. **Same shape.**
- *Disk and sphere.* A solid disk is flat with an edge all the way around (its rim). A sphere is a closed surface with no edge at all. To turn the disk into the sphere you'd have to seal up that rim — gather the entire boundary circle and fuse it to a point or a seam. That is gluing. Forbidden. **Different shapes.**
- *Doughnut and disk, doughnut and sphere.* The doughnut has one hole; the disk and the sphere each have none. Closing the doughnut's hole requires a pinch (gluing), opening a hole in the others requires a tear. **All different.**

So the four sort into three groups: **{straw, doughnut}** together, **{disk}** alone, **{sphere}** alone. The disk and the sphere both have zero holes yet still land apart — one has an edge and one doesn't, and stretching can neither create an edge nor erase one. Holes are not the *only* thing that survives deformation; they are just the first thing we noticed.

## Check yourself

Is a teaspoon (a solid, hole-free scoop on a handle) topologically the same as a solid ball of clay? Answer from the rule before you peek.

<details><summary>Show answer</summary>

Yes. A teaspoon is one connected lump of metal with no hole through it anywhere — the scoop is just a dent, not a doughnut-style hole you could thread a string through. Starting from a ball of clay, you can press out a shallow dent for the bowl and pull out a thin handle, all by stretching and bending, never tearing, never gluing. So the spoon and the ball are the same shape. (A *fork*, with the gaps between its tines, would be a different story — but the spoon is hole-free, and a dent is not a hole.)

</details>

## Exercises

Work each from the no-tearing, no-gluing rule. Decide same or different, and say *why* in terms of the moves allowed.

**1.** Is a doughnut the same shape as a coffee mug? State, in one sentence, the deformation that connects them.

<details><summary>Show solution</summary>

Yes — they are the course's headline example. Both are a single lump with exactly one hole; the mug's hole lives in its handle, not its bowl. Flatten the bowl and merge that clay into the body of the handle while keeping the handle's loop unbroken, and the mug becomes a plain ring — a doughnut. No tear, no pinch, so they are the same shape.

</details>

**2.** Sort these capital letters by topological equivalence, treating each as a thin curve of wire bent into the letter's shape: **L**, **O**, **X**. Put two letters together only if one wire can be bent into the other without cutting or joining.

<details><summary>Show solution</summary>

All three land in separate groups: **{L}**, **{O}**, **{X}**.
- **O** is a closed loop — it has one hole. Neither L nor X has a hole, and you can't open or close a loop without a cut or a join, so O stands alone.
- **L** is a single unbranched arc: a piece of wire with two loose ends and no junction. You can straighten its corner out completely (bending is allowed), so L is really just a plain segment.
- **X** has a crossing point in the middle where four arms meet. That junction is structural — to get rid of it you'd have to detach an arm (a tear) or fuse arms together (a glue). L has no such junction, so L and X are different.

The deciding features are *holes* (O has one) and *junctions* (X has one); bending and straightening can't change either. (Caution: this kind of letter-sorting depends on exactly how each letter is drawn — a font with a closed-loop tail could change the count. We stick to the clean cases here.)

</details>

**3.** True or false: a square and a circle are topologically the same shape. Explain.

<details><summary>Show solution</summary>

True. Round off the square's four corners — bending, which is allowed — and it becomes a circle; equivalently, push a circle outward at four points until it goes boxy. No tearing and no gluing are needed, so they are the same shape. This is the classic trap of confusing topology with geometry: the square and circle have different angles, different side counts, different everything a geometry class measures — but topology throws all of that away and keeps only the fact that each is a single closed loop bounding one hole. By that measure they are identical.

</details>

**4.** A friend claims, "I can turn a doughnut into a sphere — I'll just push the hole closed." What rule does this break, and what does it tell you about the hole?

<details><summary>Show solution</summary>

Pushing the hole closed means pressing the doughnut's inner rim against itself until the opening seals — that is *gluing*, which is forbidden. Because no legal sequence of stretches and bends can ever close that hole, the hole is a permanent feature: it survives every allowed deformation. The doughnut has one hole, the sphere has none, and that difference can never be deformed away. So the two are genuinely different shapes, and the hole-count is the thing standing between them.

</details>

**5.** *(Stretch.)* A solid clay ball and a hollow clay shell (think: the surface of a balloon, with nothing inside) — same shape or different? Be careful; this one rewards slow thinking.

<details><summary>Show solution</summary>

Different. The trap is to picture both as "round and hole-free" and call it a day, but they are not the same kind of object. A solid ball is a full three-dimensional lump; a hollow shell is a two-dimensional surface with empty space inside. To get from the solid ball to the hollow shell you'd have to scoop out all the interior clay — and there is no way to remove the inside without either tearing an opening to reach it or, if you try to flatten the solid down, gluing surfaces together. Stretching a solid lump always leaves it solid. So the filled ball and the empty shell are different shapes. (Don't worry if the "two-dimensional surface" idea feels slippery — we will give surfaces their own careful treatment later in the course. For now it's enough to see that "solid" and "hollow" can't be stretched into each other.)

</details>

## Recap

A topologist counts two shapes as the same when one can be deformed into the other by stretching, bending, and twisting — never tearing, never gluing — which is why the coffee mug and the doughnut, each a single lump with one hole, are one and the same. This kind of sameness is gloriously forgetful: it throws away size, angle, and straightness, and remembers only the stubborn features that survive any squashing, like how many holes a shape has and how many pieces it comes in. You now have the central question of the whole subject in your hands — *which features survive deformation?* — and a first guess at an answer in the hole-count. What we don't yet have is a precise way to say "deform" and a way to *prove* that two shapes really can't be matched up; building that machinery, one careful idea at a time, is where we go next.
