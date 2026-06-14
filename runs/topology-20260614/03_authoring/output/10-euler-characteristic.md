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

An ordinary cube has eight corners, twelve edges where two faces meet, and six flat square faces. Three plain counts — $8$, $12$, $6$ — about the most familiar solid there is. Combine them in one particular way, subtracting the edges and adding back the faces, and something quietly strange happens.

$$
8 - 12 + 6 = 2.
$$

Two. Now do it again with a different shape entirely. A tetrahedron — a triangular pyramid, four triangles meeting in a point — has four corners, six edges, and four faces:

$$
4 - 6 + 4 = 2.
$$

Two again. Try a soccer-ball pattern of pentagons and hexagons, or a cut gemstone with a dozen oddly shaped facets. Count carefully and you will get the same answer every single time. The shapes look nothing alike, and the counts $V$, $E$, $F$ swing all over the place — yet that one combination, corners minus edges plus faces, refuses to budge off $2$.

This is not a quirk of cubes, and it is no accident — it is the first sign of a number that belongs to the *shape*, not to the particular way you carved it up. That number is what this chapter is about, and by the end of it we will use it to settle the question the course has been circling: we will *prove* that a sphere and a doughnut are not the same shape.

### What you are actually counting

Before we name the number, let us be sure about what those three counts mean, because the whole thing collapses if you miscount. Take any shape whose surface has been divided up into flat-ish pieces — the way a cube's surface is divided into six squares. There are three kinds of part:

- **Vertices** ($V$) — the corner points, where edges meet.
- **Edges** ($E$) — the line segments joining one vertex to another, where two faces meet along a seam.
- **Faces** ($F$) — the flat patches the edges enclose.

The cube's surface is split into $6$ faces, bordered by $12$ edges, pinned at $8$ corners. Crucially, all three counts are about the *surface* — the skin of the cube, not its solid inside. Topology only ever cared about surfaces, and a surface diced into vertices, edges, and faces is all we need.

The combination that mattered — subtract edges, add faces — has a name. It is named for Leonhard Euler, who first noticed it never strays from $2$ for solids like these.

## Definition (Euler characteristic)

Take a surface and divide it into **vertices**, **edges**, and **faces** — points, the segments joining them, and the flat patches the segments enclose, with every patch bounded all the way around by edges. Let $V$, $E$, and $F$ be how many of each there are. The **Euler characteristic** of the surface, written $\chi$ (the Greek letter *chi*, said "kye"), is

$$
\chi = V - E + F.
$$

That is the whole definition, and it is exactly the recipe you ran on the cube: $\chi = V - E + F$ is a number you get by counting corners, edges, and faces and combining them. Nothing fancier is hiding inside it. The cube gave $\chi = 8 - 12 + 6 = 2$; the tetrahedron gave $\chi = 4 - 6 + 4 = 2$. The intuition — *every sphere-like solid scores 2* — and the definition are the same statement, one written in words and one in symbols.

### Counting without tripping

The arithmetic is easy; the *counting* is where people go wrong, so here is a procedure that keeps you honest.

**Count each edge once, even though two faces share it.** On the cube, every edge is the seam between two squares. It is tempting to count it twice — once for each face it borders — and walk away with $24$ edges instead of $12$. Don't. An edge is one segment, full stop, no matter how many faces lean on it. Same for vertices: each cube corner is shared by three faces, but it is one point and counts once.

**Don't forget a face.** When a shape is drawn flat on paper, the back faces hide behind the front ones and the outer region is easy to overlook. On a closed surface there is no "outside" that gets a pass — *every* patch is a face, including the one you can't see. Spin the shape in your mind and make sure you've tallied all of them.

**Every face must be bounded.** Each face should be a patch fully enclosed by edges, like a fenced field with no gaps in the fence. A "face" that wanders off with an open side isn't a proper face, and it will throw the count off. For a closed surface this takes care of itself: there is nowhere for a face to leak out to.

Run those three rules and the cube gives $V=8$, $E=12$, $F=6$ every time.

## Check yourself

A square pyramid has a square base and four triangular sides rising to a single apex. Count its vertices, edges, and faces, then compute $\chi = V - E + F$. (Don't forget the base — it's a face too.)

<details><summary>Show answer</summary>

Vertices: the four corners of the base plus the apex on top, so $V = 5$. Edges: four around the base, plus four sloping up to the apex, so $E = 8$. Faces: the four triangular sides plus the square base — the base is easy to forget — so $F = 5$. Then

$$
\chi = V - E + F = 5 - 8 + 5 = 2.
$$

Two, like every other sphere-like solid. The pyramid can be inflated into a sphere without tearing or gluing (module 01), so it had better give the sphere's number — and it does.

</details>

### The number doesn't care how you cut

Here is the question that makes $\chi$ worth trusting. We sliced the cube one way and got $2$; we sliced the tetrahedron a totally different way and got $2$. Was that luck? What if I chop a shape into a *different* set of vertices, edges, and faces — do I get a different number?

> **A tempting wrong answer:** "Of course the number depends on how you draw it — more pieces, bigger counts, different answer." It sounds obvious, and it is wrong. The counts $V$, $E$, $F$ really do change when you subdivide more finely. But they change *in lockstep*, in a way that leaves $V - E + F$ exactly where it was. Watch.

Start with the cube's $\chi = 8 - 12 + 6 = 2$ and subdivide it, step by step, watching the total after each move.

**Add a vertex in the middle of an edge.** Drop a new corner partway along one of the cube's edges. That bumps $V$ up by one — but it also splits the edge it sits on into two edges, bumping $E$ up by one. The two changes are $+1$ to $V$ and $+1$ to $E$, and in $V - E + F$ the added vertex and the added edge cancel: $+1 - 1 = 0$. The total is still $2$.

**Add an edge cutting across a face.** Draw a new edge joining two corners of one square face, slicing that face into two. That bumps $E$ up by one — but it also splits the one face into two faces, bumping $F$ up by one. The changes are $+1$ to $E$ and $+1$ to $F$, and in $V - E + F$ they cancel too: $-1 + 1 = 0$. Still $2$.

Every way of subdividing a surface is built from little moves like these, and each little move adds zero to $V - E + F$. So no matter how finely or coarsely you carve the surface, the number comes out the same. That is why the cube and the tetrahedron agreed: they are two carvings of the *same* surface — the sphere — and a single surface has a single Euler characteristic.

This is a demonstration, not a full proof; pinning down "every subdivision is built from those moves" with complete rigor is a job for a later course. But it is honest — the moves really do cancel, and you can check any subdivision you like and watch it land on the same number. So we state the fact and lean on it:

The Euler characteristic depends only on the surface, not on how you cut it up. Two carvings of the same surface always give the same $\chi$.

That single fact is what promotes $\chi$ from "a number about a drawing" to **a topological invariant** — a property deformation can't change, exactly in the sense of module 06. Stretch and bend a surface all you like; you are just re-carving it, and the carving never changes the number. The sphere's Euler characteristic is a fact about the sphere itself.

### Pinning down the sphere — and meeting the torus

So we can finally write it down. Every sphere-like surface — the cube, the tetrahedron, the pyramid, the actual round sphere $S^2$ — carves up to give the same number:

$$
\chi(\text{sphere}) = 2.
$$

Now the doughnut. The torus $T^2$ — the genus-one surface from module 08, the one with a single through-hole — gets the same treatment: divide its surface into vertices, edges, and faces and compute $V - E + F$. The clean way to carve a torus is to picture it as a square sheet with its left edge glued to its right and its top glued to its bottom (rolling the sheet into a tube, then bending the tube into a ring). Carry out a careful count on such a decomposition and the answer is not $2$:

$$
\chi(\text{torus}) = 0.
$$

You can take that count on faith for now, or rebuild it by hand from a grid drawn on the square — the exercises walk you through a small version. What matters is the number it lands on. The sphere scores $2$. The torus scores $0$. And because $\chi$ is an invariant, those are not numbers about two particular drawings — they are facts about the two surfaces.

## The payoff: a number that proves a difference

Stop and notice where we are. For nine chapters we have been able to *say* that a sphere and a doughnut are different shapes — anyone can see the doughnut has a hole and the sphere doesn't. What we could not do was *prove* it. "It looks different" is not a proof; maybe some fiendishly clever stretch could turn one into the other and we just hadn't found it.

Now we can close the door for good. Recall the invariant logic from module 06: if two shapes were the same — homeomorphic, in the precise sense of module 05 — then *every* topological invariant would have to agree on them, because an invariant is a property deformation can't change. So if we find even one invariant that *disagrees*, the shapes cannot possibly be the same. One differing invariant convicts.

We have one. The Euler characteristic is an invariant, and

$$
\chi(\text{sphere}) = 2 \neq 0 = \chi(\text{torus}).
$$

Different numbers. So the sphere and the torus are **not** homeomorphic — no stretch, bend, or twist will ever turn one into the other, and now we know it for certain, not as a hunch. The hole we have been pointing at since chapter one finally shows up as a difference in arithmetic: $2$ against $0$.

That is the whole power of an invariant, delivered. We didn't search through every possible deformation and rule each one out — an impossible task. We computed one number on each shape, saw they differed, and the invariant logic did the rest. A number you counted off on your fingers settled a question that no amount of staring could.

And mind the direction once more, because it is the easiest place to slip. The sphere and torus agree on plenty — both are surfaces, both are connected, both are one piece — and it is tempting to read that agreement as evidence they might be the same after all. It is no evidence at all. Matching properties prove nothing; that is the one-way street from module 06. Agreement never settles sameness, because two genuinely different shapes can share any number of features. It takes a single *disagreement* to prove a difference, and $\chi$ hands us exactly one: $2 \neq 0$. (What the matching properties *can't* do — prove the shapes the same — is a thread we pick up in the final chapter.)

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

Corners minus edges plus faces — $\chi = V - E + F$ — is a number you compute by counting, and the remarkable thing is what it ignores. Carve a surface coarsely or finely, into squares or triangles or wild facets, and the individual counts lurch around while their combination holds perfectly still: $2$ for every sphere-like surface, $0$ for the torus. That steadiness is what makes $\chi$ a topological invariant, a property no stretching can touch. And an invariant that *differs* is a verdict. Since $\chi(\text{sphere}) = 2$ and $\chi(\text{torus}) = 0$ are not equal, the sphere and the doughnut are, beyond any doubt, different shapes — the hole you've been pointing at since the very first chapter, finally caught in the arithmetic. For nine chapters we could see that difference. Now we have proved it.
