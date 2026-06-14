---
title: Euler's Number for Shapes
course: topology
order: 10
summary: Count vertices minus edges plus faces and you get a number — 2 for anything sphere-like, 0 for the torus — that no deformation can change.
estimatedMinutes: 20
objectives:
  - Compute the Euler characteristic V − E + F for polyhedra (cube, tetrahedron).
  - Explain why it is a topological invariant (light justification, not a full proof).
  - Use χ to prove the sphere and the torus are not homeomorphic.
prerequisites: [06-invariants-and-connectedness, 08-surfaces-and-holes]
---

An ordinary cube has eight corners, twelve edges, and six square faces — three plain counts, $8$, $12$, $6$. Combine them one particular way, subtracting the edges and adding back the faces, and something quietly strange happens.

$$
8 - 12 + 6 = 2.
$$

Two. Now a different shape entirely: a tetrahedron — a triangular pyramid, four triangles meeting in a point — has four corners, six edges, and four faces:

$$
4 - 6 + 4 = 2.
$$

Two again. Try a soccer-ball pattern of pentagons and hexagons, or a cut gemstone with a dozen oddly shaped facets, and you will get the same answer every time. The shapes look nothing alike, the counts $V$, $E$, $F$ swing all over the place — yet that one combination, corners minus edges plus faces, refuses to budge off $2$.

That is no accident. It is the first sign of a number that belongs to the *shape*, not to the way you carved it up — and by the end of the chapter we will use it to *prove* that a sphere and a doughnut are not the same shape.

### What you are actually counting

Before we name the number, be sure what those three counts mean, because the whole thing collapses if you miscount. Take any shape whose surface has been divided into flat-ish pieces — the way a cube's surface is divided into six squares. There are three kinds of part:

- **Vertices** ($V$) — the corner points, where edges meet.
- **Edges** ($E$) — the line segments joining one vertex to another, where two faces meet along a seam.
- **Faces** ($F$) — the flat patches the edges enclose.

All three counts are about the *surface* — the skin of the cube, not its solid inside; topology only ever cared about surfaces. The combination that subtracts edges and adds faces is named for Leonhard Euler, who first noticed it never strays from $2$ for solids like these.

## Definition (Euler characteristic)

Take a surface and divide it into **vertices**, **edges**, and **faces** — points, the segments joining them, and the flat patches the segments enclose, with every patch bounded all the way around by edges. Let $V$, $E$, and $F$ be how many of each there are. The **Euler characteristic** of the surface, written $\chi$ (the Greek letter *chi*, said "kye"), is

$$
\chi = V - E + F.
$$

That is the whole definition — exactly the recipe you ran on the cube, which gave $\chi = 8 - 12 + 6 = 2$, and on the tetrahedron, which gave $\chi = 4 - 6 + 4 = 2$. The intuition, *every sphere-like solid scores 2*, and the symbols say the same thing.

### Counting without tripping

The arithmetic is easy; the *counting* is where people go wrong, so here is a procedure that keeps you honest.

**Count each edge once, even though two faces share it.** On the cube, every edge is the seam between two squares. It is tempting to count it twice — once per face — and walk away with $24$ edges instead of $12$. Don't. An edge is one segment, no matter how many faces lean on it. Same for vertices: each cube corner is shared by three faces, but it is one point and counts once.

**Don't forget a face.** When a shape is drawn flat on paper, the back faces hide behind the front ones. On a closed surface there is no "outside" that gets a pass — *every* patch is a face, including the one you can't see. Spin the shape in your mind and tally all of them.

**Every face must be bounded.** Each face should be a patch fully enclosed by edges, like a fenced field with no gaps. A "face" with an open side isn't a proper face and will throw the count off. For a closed surface this takes care of itself: there is nowhere for a face to leak out to.

Run those three rules and the cube gives $V=8$, $E=12$, $F=6$ every time.

## Check yourself

A square pyramid has a square base and four triangular sides rising to a single apex. Count its vertices, edges, and faces, then compute $\chi = V - E + F$. (Don't forget the base — it's a face too.)

<details><summary>Show answer</summary>

Vertices: the four corners of the base plus the apex on top, so $V = 5$. Edges: four around the base, plus four sloping up to the apex, so $E = 8$. Faces: the four triangular sides plus the square base — the base is easy to forget — so $F = 5$. Then

$$
\chi = V - E + F = 5 - 8 + 5 = 2.
$$

Two, like every sphere-like solid. The pyramid inflates into a sphere with no tearing or gluing (module 01), so it had better give the sphere's number — and it does.

</details>

### The number doesn't care how you cut

Here is the question that makes $\chi$ worth trusting. We sliced the cube one way and the tetrahedron a totally different way, and both gave $2$. Was that luck? If I chop a shape into a *different* set of vertices, edges, and faces, do I get a different number?

> **A tempting wrong answer:** "Of course the number depends on how you draw it — more pieces, bigger counts, different answer." It sounds obvious, and it is wrong. The counts $V$, $E$, $F$ really do change when you subdivide more finely. But they change *in lockstep*, in a way that leaves $V - E + F$ exactly where it was. Watch.

Start with the cube's $\chi = 8 - 12 + 6 = 2$ and subdivide it, step by step, watching the total after each move.

**Add a vertex in the middle of an edge.** Drop a new corner partway along one of the cube's edges. That bumps $V$ up by one — but it also splits that edge into two, bumping $E$ up by one. In $V - E + F$ the two cancel: $+1 - 1 = 0$. Still $2$.

**Add an edge cutting across a face.** Draw a new edge joining two corners of one square face, slicing it into two. That bumps $E$ up by one — but it also splits the one face into two, bumping $F$ up by one. In $V - E + F$ they cancel too: $-1 + 1 = 0$. Still $2$.

Every way of subdividing a surface is built from little moves like these, and each adds zero to $V - E + F$. So however finely or coarsely you carve the surface, the number comes out the same — which is why the cube and the tetrahedron agreed: they are two carvings of the *same* surface, the sphere, and a single surface has a single Euler characteristic. (This is a demonstration, not a full proof — pinning down "every subdivision is built from those moves" rigorously is a job for a later course — but the moves really do cancel, and you can check any subdivision you like.)

That single fact promotes $\chi$ from "a number about a drawing" to **a topological invariant**, a property deformation can't change in the sense of module 06: stretch and bend a surface all you like, you are just re-carving it, and the carving never changes the number. The sphere's Euler characteristic is a fact about the sphere itself.

### Pinning down the sphere — and meeting the torus

So we can write it down. Every sphere-like surface — the cube, the tetrahedron, the pyramid, the round sphere $S^2$ — carves up to give the same number:

$$
\chi(\text{sphere}) = 2.
$$

Now the doughnut. The torus $T^2$ — the genus-one surface from module 08 — gets the same treatment. The clean way to carve it is to picture a square sheet with its left edge glued to its right and its top to its bottom (rolling the sheet into a tube, then the tube into a ring). A careful count on such a decomposition gives, not $2$:

$$
\chi(\text{torus}) = 0.
$$

You can take that count on faith for now, or rebuild it from a grid drawn on the square — the exercises walk you through a small version. What matters is the number: the sphere scores $2$, the torus scores $0$, and because $\chi$ is an invariant, those are facts about the two surfaces, not about two particular drawings.

## The payoff: a number that proves a difference

Stop and notice where we are. For nine chapters we could *say* a sphere and a doughnut are different — anyone can see the doughnut has a hole and the sphere doesn't — but "it looks different" is not a proof, and maybe some fiendishly clever stretch could turn one into the other.

Now we can close the door. By the invariant logic from module 06, if two shapes were homeomorphic then *every* invariant would have to agree on them — so one invariant that *disagrees* settles it. One differing invariant convicts.

We have one. The Euler characteristic is an invariant, and

$$
\chi(\text{sphere}) = 2 \neq 0 = \chi(\text{torus}).
$$

Different numbers. So the sphere and the torus are **not** homeomorphic — no stretch, bend, or twist will ever turn one into the other, and now we know it for certain. We didn't search through every possible deformation, an impossible task; we computed one number on each shape, saw they differed, and the invariant logic did the rest. The hole we have been pointing at since chapter one finally shows up as a difference in arithmetic: $2$ against $0$.

Mind the direction, though. The sphere and torus agree on plenty — both surfaces, both connected — and it is tempting to read that agreement as evidence they might be the same. It is no evidence at all: by the one-way street from module 06, matching properties prove nothing, and only a single *disagreement* proves a difference. (What matching properties *can't* do — prove two shapes the same — is the thread the final chapter picks up.)

## Check yourself

Without computing anything new, explain in one or two sentences why finding $\chi(\text{sphere}) = 2$ and $\chi(\text{torus}) = 0$ proves the sphere and torus are not homeomorphic.

<details><summary>Show answer</summary>

A homeomorphism can't change a topological invariant, so two homeomorphic shapes must have the *same* Euler characteristic. The sphere's is $2$ and the torus's is $0$ — they differ — so no homeomorphism between them can exist. (This is the invariant logic from module 06, used in the only direction it runs: a differing invariant proves the shapes are different.)

</details>

## Exercises

Work each from the definition $\chi = V - E + F$ and the counting rules above. Where a count is involved, watch for shared edges and hidden faces.

**1.** A triangular prism is a "tent" shape: two triangular ends joined by three rectangular sides. Count $V$, $E$, $F$ and compute $\chi$.

<details><summary>Show solution</summary>

Vertices: three on the top triangle and three on the bottom, $V = 6$. Edges: three around the top triangle, three around the bottom, and three vertical ones joining them, $E = 9$. Faces: two triangular ends plus three rectangular sides, $F = 5$. Then $\chi = 6 - 9 + 5 = 2$. It is a sphere-like solid (you can inflate it to a ball), so $\chi = 2$ as expected.

</details>

**2.** A classmate counts the cube and reports $V = 8$, $E = 24$, $F = 6$, getting $\chi = 8 - 24 + 6 = -10$. Find the mistake and give the correct value.

<details><summary>Show solution</summary>

They double-counted the edges. Each of the cube's edges is the seam between two square faces, and counting "the edges of each face" tallies every edge twice: $6$ faces $\times$ $4$ edges each $= 24$, but that counts each shared edge once per face. An edge is one segment no matter how many faces border it, so the true count is $E = 12$, giving $\chi = 8 - 12 + 6 = 2$. (This is the most common counting slip — when faces share an edge, the edge still counts once.)

</details>

**3.** Start from the tetrahedron ($V=4$, $E=6$, $F=4$, $\chi = 2$). Add a single new vertex in the middle of one edge. Write the new $V$, $E$, $F$ and recompute $\chi$. What happened to the number, and why?

<details><summary>Show solution</summary>

Placing a vertex in the middle of an edge splits that edge in two. So $V$ goes from $4$ to $5$, $E$ goes from $6$ to $7$, and $F$ stays at $4$. Then $\chi = 5 - 7 + 4 = 2$ — unchanged. The new vertex added $+1$ to $V$ and the split edge added $+1$ to $E$, and in $V - E + F$ those cancel ($+1 - 1 = 0$). This is exactly why $\chi$ doesn't depend on how finely you carve the surface: subdividing moves the individual counts but leaves the combination fixed.

</details>

**4.** Take the cube ($\chi = 2$) and draw one new edge across a single face, joining two of that face's corners and slicing it into two triangles. Write the new $V$, $E$, $F$ and recompute $\chi$. Explain why the answer makes sense.

<details><summary>Show solution</summary>

The two corners already existed, so $V$ stays at $8$. The new diagonal is one new edge, so $E$ goes from $12$ to $13$. It cuts the one square face into two, so $F$ goes from $6$ to $7$. Then $\chi = 8 - 13 + 7 = 2$ — still $2$. The added edge ($+1$ to $E$) and the added face ($+1$ to $F$) cancel in $V - E + F$ ($-1 + 1 = 0$). Together with exercise 3, this shows both basic subdivision moves leave $\chi$ alone, which is the heart of why it is an invariant.

</details>

**5.** Two surfaces are decomposed and counted. Surface A gives $V=12$, $E=30$, $F=20$. Surface B gives $V=2$, $E=4$, $F=2$. Compute $\chi$ for each and say what you can conclude.

<details><summary>Show solution</summary>

Surface A: $\chi = 12 - 30 + 20 = 2$. Surface B: $\chi = 2 - 4 + 2 = 0$. Their Euler characteristics differ ($2 \neq 0$), so by the invariant logic the two surfaces are *not* homeomorphic. In fact A scores like a sphere and B scores like a torus — and indeed B's counts come from the square-with-glued-edges decomposition of the torus. (You cannot conclude A and B are the same as the sphere and torus respectively from $\chi$ alone — matching one number doesn't prove sameness — but the *difference* between them is enough to prove A and B are different from each other.)

</details>

**6.** *(Conceptual.)* Your friend says, "Euler's number is just a property of polyhedra — cubes and pyramids and such. It can't say anything about a smooth round sphere or a smooth doughnut, which have no corners or edges at all." Where does this reasoning go wrong?

<details><summary>Show solution</summary>

The corners and edges aren't features of the *surface* — they're features of the *decomposition*, the particular way we chose to carve it up. A smooth sphere has no built-in vertices, but we can draw vertices, edges, and faces on it (the way a cube's faces, inflated, become curved patches on a ball), count them, and get $\chi = 2$. Because $\chi$ doesn't depend on how we carve — that's the invariance — the number belongs to the smooth surface itself, not to any choice of corners. So Euler's number applies perfectly well to the round sphere and the smooth torus; the polyhedra were just convenient shapes to count first.

</details>

## Recap

Corners minus edges plus faces — $\chi = V - E + F$ — is a number you compute by counting, and the remarkable thing is what it ignores. Carve a surface coarsely or finely, into squares or triangles or wild facets, and the individual counts lurch around while their combination holds still: $2$ for every sphere-like surface, $0$ for the torus. That steadiness is what makes $\chi$ a topological invariant, and an invariant that *differs* is a verdict. Since $\chi(\text{sphere}) = 2 \neq 0 = \chi(\text{torus})$, the sphere and the doughnut are, beyond any doubt, different shapes — the hole you've been pointing at since the first chapter, finally caught in the arithmetic. For nine chapters we could see that difference. Now we have proved it.
