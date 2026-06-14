---
title: Room Around Every Point
course: topology
order: 2
summary: "The single most important idea in topology: an open set is one where every point has a little room around it that stays inside."
estimatedMinutes: 18
objectives:
  - Define an open set via "room around every point" on the line and in the plane.
  - Identify open and non-open sets, including the boundary cases (the empty set and the whole space).
  - Describe a neighborhood of a point.
prerequisites: [01-rubber-sheet-geometry]
---

Somewhere in the middle of a wide field, a step in any direction still lands on grass, and so does the step after that — there is room on every side. Out at the fence it is a different story. A person standing with their toes against the rail has room behind and to the sides, but in front there is none at all: one step forward and they are out of the field entirely. That spot against the fence is the boundary, and the boundary is exactly the place where the room runs out.

That difference — having room on every side versus standing where the room runs out — is the difference this whole module is built on. In module 01 we talked about shapes the loose way: stretch, bend, twist, but no tearing, no gluing. That was all done by eye and by feel. Now we start building the precise language that makes those ideas exact, and the first word in that language is *open*. It is the single most important idea in topology. Almost everything that follows — what it means for a map to be continuous, what it means for two shapes to be secretly the same — is spelled in terms of open sets. So we will take our time and get the picture right before we touch a symbol.

## A point with elbow room

Here is the picture, and it never changes no matter how fancy things get: a set is **open** when every point inside it has a little **elbow room** — a small margin all the way around that is still inside the set.

Start on the number line. Think about the open interval from $0$ to $1$, the set of all numbers strictly between them, written $(0, 1)$. Pick any number in it — say $0.5$. Does it have elbow room? Easily: everything from $0.4$ to $0.6$ is still inside, so $0.5$ has a comfortable margin on both sides. Pick a number much closer to the edge — say $0.999$. It has *less* room, but it still has some: the numbers from $0.9985$ to $0.9995$ are all still under $1$, so they are all still inside. No matter how close to the edge you stand, as long as you are strictly inside, there is *some* tiny margin left. That is what makes $(0,1)$ open.

Now compare the closed interval $[0, 1]$, which *includes* its two endpoints. The point $1$ is in this set. Does it have elbow room? No. Step even the tiniest bit to the right of $1$ and you are out of the set, because nothing bigger than $1$ belongs. The point $1$ is jammed against the boundary with no margin on one side. One point without elbow room is enough: $[0,1]$ is **not** open.

So "open" on the number line is exactly the thing the word *open interval* was already pointing at — but now we know *why* the name fits. An open interval is open because its points all have room; a closed interval is not, because its endpoints don't.

## Cashing out "elbow room": the open ball

"Room around every point" is the right picture, but to make it a definition we need to say *how much* room, and in what shape. Here is where the picture turns into something we can write down.

On the number line, "a margin around the point $x$" means an interval centered at $x$: everything within some small distance $r$ of $x$, the stretch from $x - r$ to $x + r$. In the plane it means a small *disk*: everything within distance $r$ of $x$. In both cases it is the same idea — *everything close enough to $x$* — and we give it one name and one symbol.

The set of all points within distance $r$ of a center point $x$ is the **open ball** of radius $r$ about $x$, written $B(x, r)$. On the line it is an open interval; in the plane it is an open disk; the word *ball* is just the all-purpose name. The $r$ is the radius — how much room — and we will always take it to be a genuine, positive amount: $r > 0$. (A "ball of radius zero" would be a single point with no room at all, which is exactly what we don't want.)

With that one symbol, "elbow room" stops being a feeling and becomes a thing you can check: a point $x$ has room inside a set if some open ball $B(x, r)$ around it — some genuine margin, $r > 0$ — fits entirely inside the set. The fence-against-your-toes point fails this test: no ball around it, however small, stays inside, because every ball pokes out past the boundary.

## The bridge to the definition

We are about to state the definition. Before we do, let me hand you each piece of it, because a definition you can't read is just decoration.

The definition will say: a set $U$ is open if **for every point $x$ in $U$, there is some $r > 0$ with $B(x, r)$ inside $U$.** Read slowly, it says exactly the field-and-fence picture:

- "$U$" is the set we are testing — the field.
- "for every point $x$ in $U$" — we have to check *all* of them, not just the comfortable ones in the middle. Even the points near the edge get checked.
- "there is some $r > 0$" — for each point we get to pick the margin, and it can be as tiny as that point needs. Points near the edge use a smaller $r$; that's allowed. We only need *some* positive margin to exist, not a single margin that works for everyone.
- "$B(x, r)$ inside $U$" — that margin, the whole little ball, stays in the field. Nobody's elbow room pokes out past the fence.

The order matters: *first* the point, *then* its margin. A different point may need a far smaller ball, and that is fine — each point brings its own. Now the definition.

## Definition (Open set)

Let $X$ be the space we are working in (the number line $\mathbb{R}$, the plane $\mathbb{R}^2$, or any space where "distance" makes sense). A set $U \subseteq X$ is **open** if for every point $x \in U$ there exists a radius $r > 0$ such that

$$
B(x, r) \subseteq U.
$$

Here $B(x, r)$ is the **open ball** of radius $r$ centered at $x$ — all points within distance $r$ of $x$ (an open interval on $\mathbb{R}$, an open disk in $\mathbb{R}^2$).

## Two sets that are open "for free"

Two special sets are worth settling right now, because they look like edge cases and they are open in every space.

The **whole space** $X$ is open. Pick any point in it; any ball around that point is made of points of the space, so it lands inside $X$ automatically — there is no "outside" to poke into.

The **empty set** $\varnothing$ is open too, and this one trips people up. The definition says "*for every* point in the set, …" — but the empty set has no points. So there is no point that could fail the test. A rule with no one to break it is not broken. The empty set passes by having nothing to check; we say it is **vacuously** open.

Hold on to both of these. When we write down the rules of topology in module 03, "$\varnothing$ and $X$ are open" will be the very first rule, and it will already feel obvious.

## Check yourself

Is the set of all numbers strictly greater than $3$ — written $(3, \infty)$ — open in $\mathbb{R}$? Decide before you peek.

<details><summary>Show answer</summary>

Yes. Take any $x > 3$. It sits some positive distance above $3$; call that gap $r = x - 3 > 0$. The ball $B(x, r)$ runs from $3$ up to $2x - 3$, and every number in it is still bigger than $3$, so it stays inside the set. Every point has room, so the set is open. (Notice there's no right-hand edge to worry about — the set runs off to infinity.)

</details>

## A neighborhood

While we have the picture fresh, let's name one more idea, because we'll lean on it later. When we want to talk about "the region around a point," we call it a neighborhood.

A **neighborhood** of a point $x$ is an open set that contains $x$ — a patch of room that surrounds it. (Some books allow any set that *contains* an open set around $x$; for this course, read "neighborhood" as "an open set you live inside.") The phrase is just a convenient way to say "somewhere around $x$ with room to move." When module 04 talks about a map keeping nearby points nearby, "neighborhood" is the word we'll reach for.

## Open is not "the opposite of closed"

One warning before the exercises, because it saves a lot of grief later. It is tempting to think every set is either open or closed, and that the two words are opposites — that "not open" must mean "closed." They are not opposites.

> **A tempting wrong answer:** "the closed interval $[0,1]$ isn't open, so it must be the opposite kind, and the half-open $[0,1)$ must be one or the other too." Both halves miss the mark. "Closed" has its own separate meaning (it's about whether a set contains all its edge points — a story for a later module), and a single set can be **both** open and closed, or **neither**. We have already met two sets that are both: $\varnothing$ and the whole space $X$. And the half-open interval $[0, 1)$ is neither — it has a stuck point at $0$ (no room to the left) so it fails to be open, yet it's missing its other edge point at $1$, which (we'll see) keeps it from being closed. For now, just unlearn the reflex: "not open" does **not** mean "closed." Open is its own property, and you check it with the elbow-room test and nothing else.

## Exercises

**1. (Mechanical.)** Is the open interval $(-2, 5)$ open in $\mathbb{R}$? Justify using the elbow-room test.

<details><summary>Show solution</summary>

Yes. Take any point $x$ with $-2 < x < 5$. It sits some positive distance from each end; let $r$ be the smaller of the two gaps, $x - (-2)$ and $5 - x$. Then $r > 0$, and the ball $B(x, r)$ — the interval from $x - r$ to $x + r$ — stays strictly between $-2$ and $5$, so it lands inside the set. Every point has room, so $(-2, 5)$ is open. The work is in *choosing $r$ for each point*: points near an end get a small $r$, points in the middle a large one, and the definition asks only that *some* positive $r$ exist for each.

</details>

**2. (Mechanical.)** Is the closed interval $[2, 6]$ open in $\mathbb{R}$? If not, name a point that fails the test and say why.

<details><summary>Show solution</summary>

It is not open. The point $2$ belongs to the set, but no ball $B(2, r)$ stays inside: any such ball reaches down to $2 - r$, which is less than $2$ and therefore outside the set. The point $2$ has no room on its left — it's jammed against the boundary. (The point $6$ fails the same way on its right.) One point without elbow room is enough to disqualify the whole set.

</details>

**3. (Conceptual — targets "open = only intervals".)** The open disk in the plane, $B((0,0), 1)$ — all points within distance $1$ of the origin — is not an interval at all. Argue that it is nevertheless open.

<details><summary>Show solution</summary>

Take any point $x$ inside the disk, so its distance from the origin is some number $d < 1$. The leftover room is $r = 1 - d > 0$. Any point within distance $r$ of $x$ is, by the triangle inequality (the everyday fact that going through $x$ is never a shortcut), within distance $d + r = 1$ of the origin — so the whole disk $B(x, r)$ sits inside the unit disk. Every point has room, so the set is open. The lesson: "open" was never about intervals. Intervals are just what open sets look like *on the line*. In the plane the same elbow-room test passes for disks, and it would pass for blobbier shapes too.

</details>

**4. (Conceptual — targets "open = only intervals".)** Is the set $(0, 1) \cup (2, 3)$ — two separate open intervals with a gap between them — open in $\mathbb{R}$?

<details><summary>Show solution</summary>

Yes. The test is *point by point*, and every point of this set lands in one interval or the other, never in the gap. A point in $(0,1)$ has room inside $(0,1)$; a point in $(2,3)$ has room inside $(2,3)$; the empty space from $1$ to $2$ contains no points of the set, so it raises no question. Every point has elbow room within the set, so the union is open. An open set does not have to be one connected piece — gluing two open sets side by side, gaps and all, still gives an open set. (This is no accident: in module 03 we'll see that *any* union of open sets is open.)

</details>

**5. (Conceptual.)** A classmate says: "$[0,1)$ isn't open, so it's closed." In one or two sentences, say what's wrong.

<details><summary>Show solution</summary>

Two things are wrong. First, "not open" does not mean "closed" — those are separate properties, not opposites, and a set can be neither. Second, $[0,1)$ is in fact one of those neither sets: the point $0$ has no room to its left, so it isn't open, but the set is also missing its right-hand edge point, which stops it from being closed. The right move is to test openness directly with the elbow-room rule and not infer it from the word "closed."

</details>

**6. (Stretch.)** Is the single point $\{0\}$ open in $\mathbb{R}$? What about in a space whose *only* point is $0$?

<details><summary>Show solution</summary>

In $\mathbb{R}$: no. The point $0$ is in the set, but every ball $B(0, r)$ contains nearby numbers like $r/2$ that are not equal to $0$ and so are outside $\{0\}$. No margin fits, so the set isn't open. But notice how the answer depends on the *space*: if the entire space were just the single point $0$ — nothing else exists — then $\{0\}$ would be the whole space, and the whole space is always open. Same-looking set, different space, different answer. Openness is never a property of a set alone; it is always a property of a set *inside a particular space*. (That dependence on the surrounding space is exactly what module 03 will pin down.)

</details>

## Recap

An open set is one where every point has room to spare: for each point $x$ inside it, some open ball $B(x, r)$ — a genuine margin, $r > 0$ — fits entirely inside. We cashed the "elbow room" picture into that ball and read the definition piece by piece, then collected the two sets that are open for free, $\varnothing$ and the whole space $X$, and named the region-around-a-point a *neighborhood*. Two reflexes are worth keeping: open sets are not only intervals (open disks, unions, and the whole line are open too), and "open" is not the opposite of "closed" — a set can be both or neither. With open sets in hand we have the alphabet of topology; in module 03 we turn three simple rules about them into the definition of a topology itself.
