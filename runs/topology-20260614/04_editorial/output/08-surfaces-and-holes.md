---
title: Counting the Holes
course: topology
order: 8
summary: "Surfaces and their holes: the sphere has none, the doughnut has one, and that count is what tells them apart."
estimatedMinutes: 16
objectives:
  - Describe what a surface is (locally like the plane) with examples (sphere, torus).
  - Define genus informally as the number of through-holes / handles.
  - Distinguish a genuine topological hole from a dent or a concavity.
prerequisites: [06-invariants-and-connectedness]
---

Hold a doughnut in one hand and a coffee mug in the other. By the lights of module 01, these are the same shape: enough patient squashing turns one into the other, no tearing and no gluing. But *why* the same? What, exactly, does the squashing keep safe? Both objects carry one feature you cannot rub out by stretching — a place where a string, looped right through, stays caught. Through the doughnut you thread the obvious way. Through the mug you thread the handle. That single threadable opening is the thing the deformation protects, and counting such openings is the whole business of this module.

We have been collecting properties that survive every deformation — the invariants of module 06, the fingerprints that no homeomorphism can wipe away. Connectedness was the first. Here is one you can almost feel with your hands: the number of holes. To talk about it cleanly, though, we first need to be honest about the kind of object we are counting holes *in*.

## The skin, not the lump

A doughnut is a solid lump of fried dough. But topologists, when they say "torus," usually mean only its **skin** — the thin glazed surface, with the dough scooped out. Picture an inner tube, or a balloon bent round and its two ends fused into a ring. That hollow shell is the object we study. The same goes for the sphere: not the solid ball, but the surface of it — the skin of an orange, the outside of a basketball, infinitely thin.

Why the skin and not the lump? Because the skin is a **surface**, and surfaces are the simplest interesting world after the flat plane. Stand anywhere on a huge balloon and look only at your feet: the little patch around you looks flat, like a scrap of the plane from module 02. The Earth feels flat underfoot for exactly this reason. Zoom in close enough on any point of a sphere or a doughnut's skin, and the curving disappears — you are standing on what might as well be a flat sheet. That "flat up close" quality is the one feature every surface shares, and it is the whole definition.

## Definition (Surface)

A **surface** is a shape that, viewed up close around any one of its points, looks like a flat piece of the plane.

The sphere is a surface; so is the torus; so is the cylinder (a tube open at both ends), and so is an ordinary flat sheet itself. Each passes the test: pick any point, zoom in, and the neighborhood you see is a small flat-looking patch — the local picture is a scrap of $\mathbb{R}^2$. That is all "surface" asks. The shape may curve and loop globally however it likes; what makes it a surface is that *locally*, everywhere, it is plane-like.

(There is a fuller, more careful version of this definition that professionals use, but we will not need it. The "flat up close" picture is exactly the right amount for everything we do here.)

Now for the two surfaces this course leans on. The first is the one we have been calling the sphere — the skin of a ball, which we write $S^2$. The second is the doughnut's skin, the **torus**, which we write $T^2$. Word first, symbol second: when you read $S^2$, hear "sphere"; when you read $T^2$, hear "torus." The little $2$ on each is a reminder that these are two-dimensional skins — flat up close — not solid three-dimensional lumps.

## The hole that holds a string

Here is the picture the whole module turns on. A **hole**, in the topologist's sense, is a place you can pass a string clean through so that, when you tie the ends, the loop stays caught on the surface and cannot be lifted off.

Thread a string through the middle of a doughnut and knot it. Now try to pull the loop free without cutting it or passing it through the dough. You can't — the string is caught for good. That captured loop is the doughnut's one hole. Try the same with a coffee mug, and the only place a knotted string stays caught is the handle. The mug has exactly one hole, and it lives in the handle — never in the bowl.

That last point is where almost everyone stumbles, so we will meet it head on.

> **A tempting wrong answer:** *the bowl of the mug is a hole, because it is a hollow you can drop a coin into.* It is not. A bowl is a **dent** — a concavity, a scoop, a place where the surface caves inward. No string threads *through* a dent; drop a loop into a bowl and you can lift it straight back out. Push a thumb into a lump of clay and you make a dent, not a hole, and you can smooth it flat again with no tearing at all. The deep test is exactly that: a genuine hole cannot be smoothed away by stretching, because removing it would require gluing the surface shut — a forbidden move (the no-tearing, no-gluing rule from module 01). A dent can be pushed back out with no forbidden move at all, so the deformation does not protect it. A bowl, a saucer, a cupped hand, a crater: all dents, all holes-free. Only a passage that goes all the way *through* counts.

So contrast the two cleanly. A **bowl** has no through-hole — no string stays caught — and so it is shaped, topologically, like a sphere: you could push its dent back out and round it into a ball. A **doughnut** has exactly one through-hole. That single difference is what no amount of stretching can erase, and it is what we are about to count.

## Definition (Genus)

The **genus** of a surface, written $g$, is the number of through-holes — equivalently, the number of handles — it has.

- The sphere $S^2$ has genus $g = 0$: no holes at all.
- The torus $T^2$ has genus $g = 1$: a single through-hole.
- A two-holed surface (picture a doughnut with two side-by-side holes, like a pair of spectacle frames) has genus $g = 2$.

And so on: each extra handle adds one to the genus. A "handle" is just the other way of seeing a hole — instead of imagining the opening, imagine the arching bridge of surface that goes over it, the way a mug's handle arches over the gap your fingers go through. Open or bridge, you count the same thing.

Genus belongs to the family from module 06: it is a **topological invariant**. Stretch, bend, and twist a surface however you like, and you cannot change the number of strings it will hold — making or unmaking a through-hole always needs a tear or a glue, and those are off the table. So the invariant logic from module 06 applies directly, and it points one way only:

> If two surfaces have **different** genus, they are **not** homeomorphic — no deformation can match them up.

That is the engine. Different genus *proves* a difference. But matching genus, on its own, proves nothing — same genus is *necessary* for two surfaces to be homeomorphic, not *sufficient*. (The two-holed doughnut and a sphere with two handles have the same genus and really are the same; but in general, equal invariants only fail to convict, they never acquit — exactly the one-way logic of module 06.) For now, keep the half that does real work: a difference in genus settles the matter for good.

## Worked example

**Problem.** Find the genus of each object, treating each as its surface (its skin), and then say which are homeomorphic to which: (a) a cereal bowl, (b) a doughnut, (c) a teacup with one handle, (d) a button with four threading holes.

**Solution.** For each, ask the only question that matters: how many places does a knotted string stay caught — how many passages go all the way *through*?

- **(a) Cereal bowl.** The hollow is a dent: a coin dropped in lifts straight back out, no string stays caught. Genus $g = 0$. Topologically a sphere.
- **(b) Doughnut.** One passage through the middle; one string stays caught. Genus $g = 1$. This is the torus $T^2$.
- **(c) Teacup, one handle.** The bowl of the cup is a dent (genus $0$ on its own, just like the cereal bowl). The handle, though, is a genuine arch with a gap your fingers pass through — one through-hole. Total genus $g = 1$. The bowl contributes nothing; the handle is the whole story. This is the mug-and-doughnut deformation from module 01, now with a number attached to it.
- **(d) Four-holed button.** Each of the four threading holes is a passage clean through the disc — four strings, four caught loops. Genus $g = 4$.

Now read off the homeomorphisms by matching genus, using the invariant logic:

- The **doughnut** ($g=1$) and the **teacup** ($g=1$) have the same genus. Same genus is necessary for sameness, and here they are indeed homeomorphic — the classic mug = doughnut.
- The **bowl** ($g=0$) differs in genus from all three of the others. A differing invariant convicts: the bowl is **not** homeomorphic to the doughnut, the teacup, or the button.
- The **button** ($g=4$) differs in genus from every other object here, so it stands alone — homeomorphic to none of them.

The bowl-versus-teacup line is the one to keep. Both have a hollow you could pour water into, yet one has genus $0$ and the other genus $1$. The water-holding hollow — the dent — never mattered. Only the handle did.

## Check yourself

A bowling ball has three finger holes drilled into it, each a short blind pocket that stops partway in (you can't push a finger out the far side). What is the genus of its surface?

<details><summary>Show answer</summary>

Genus $g = 0$. A blind pocket is a **dent**, not a through-hole: the finger goes in and comes back out the *same way*, and no knotted string stays caught — drop a loop in and you lift it straight out. None of the three pockets passes all the way through, so none counts. Topologically the drilled ball is still a sphere. (If the holes were drilled *clean through* and met inside, the count would change — but a pocket that stops partway is just a dent with a deeper floor.)

</details>

## Exercises

**1. (Mechanical.)** State the genus of each: (a) the sphere $S^2$, (b) the torus $T^2$, (c) a pretzel shaped with three holes, (d) a flat coin (a solid disc, no holes through it).

<details><summary>Show solution</summary>

(a) $g = 0$. (b) $g = 1$. (c) $g = 3$ — three through-holes, three handles, one per loop of the pretzel. (d) $g = 0$ — a coin has no passage going all the way through it; a string laid over it slides right off. Count through-holes, and only through-holes.

</details>

**2. (Mechanical.)** A "handle" and a "hole" are two names for the same feature. For the two-holed surface (genus $2$), describe it once in the language of holes and once in the language of handles.

<details><summary>Show solution</summary>

In the language of holes: a surface with two through-holes — two separate places a knotted string stays caught, like the two openings in a pair of spectacle frames. In the language of handles: a sphere with two handles attached — two arching bridges of surface, each spanning a gap. Both descriptions name genus $g = 2$; "hole" looks at the opening, "handle" looks at the bridge over it.

</details>

**3. (Conceptual.)** A friend says a soup bowl and a doughnut are "obviously the same shape — both are round and both have a hollow you can fill." Use genus to settle the question, and name precisely where the friend's reasoning goes wrong.

<details><summary>Show solution</summary>

They are *not* homeomorphic. The doughnut has genus $1$ (a string threads clean through its middle and stays caught); the soup bowl has genus $0$ (its hollow is a dent — a coin dropped in lifts straight back out, no string is held). Different genus, and genus is a topological invariant, so by the invariant logic from module 06 a single differing invariant proves the shapes differ — no deformation can match them.

The friend's error is exactly **the dent-versus-hole confusion**: a "hollow you can fill" is a concavity, not a through-hole. You can push a dent flat again with no tearing and no gluing, so a deformation doesn't protect it; a genuine through-hole you cannot close without gluing, so it survives every deformation. Round-ness and fill-ability are geometry, not topology — and topology forgot about geometry back in module 01.

</details>

**4. (Conceptual.)** Genus is necessary but not sufficient for two surfaces to be homeomorphic. Explain what "necessary but not sufficient" means here, and say which direction of the invariant logic you are allowed to use.

<details><summary>Show solution</summary>

"Necessary" means: *if* two surfaces are homeomorphic, they *must* share the same genus — so a difference in genus is impossible between same-shape surfaces. "Not sufficient" means: matching genus alone does **not** guarantee the surfaces are homeomorphic; equal genus is consistent with sameness but doesn't prove it by itself.

So the one direction you may use is the convicting one (module 06): **different genus $\Rightarrow$ not homeomorphic.** You may *never* run it backward — "same genus $\Rightarrow$ homeomorphic" is the reversed, invalid form of the invariant logic. A matching invariant fails to convict; it never acquits.

</details>

**5. (Conceptual, stretch.)** A coffee mug has exactly one handle, and we counted its genus as $1$. Now imagine a fancy two-handled trophy cup — a bowl with a handle on each side. What is its genus, and where do the holes live? What would happen to the count if you snapped one handle off?

<details><summary>Show solution</summary>

Genus $g = 2$. The bowl is a dent and contributes $0$; each handle is a genuine arch with a gap your fingers pass through, so each handle is one through-hole. Two handles, two holes, genus $2$ — topologically a two-holed surface, the same shape as the spectacle-frame doughnut from the lesson.

Snap one handle off (cleanly mending the surface where it was, so it's whole again) and you remove one through-hole: genus drops to $1$, and the trophy is now homeomorphic to an ordinary one-handled mug — and so to a doughnut. The bowl never entered the count at any stage; only the handles did. Note that "snapping a handle off" is a tear-and-mend, a *forbidden* move — which is precisely why it changes the genus. Plain stretching never could.

</details>

## Recap

A surface is a shape that is flat up close everywhere — the skin of a sphere ($S^2$), the skin of a doughnut ($T^2$), a cylinder, a sheet. Its genus $g$ counts the through-holes, the places a knotted string stays caught: sphere $0$, doughnut $1$, two-holed surface $2$. The trap to keep in mind is the dent — a bowl, a pocket, any scoop you can push flat again holds no string and adds nothing to the count; a mug's only hole is its handle. Because genus is a topological invariant, a difference in it convicts at once: surfaces of different genus cannot be the same. The next module meets a surface that breaks a rule you didn't know you were assuming — that every surface has two sides — and the one after that turns hole-counting into something you can do with arithmetic alone.
