---
title: Same Shape, Made Precise
course: topology
order: 5
summary: "The precise version of \"the same shape\": a continuous bijection whose inverse is also continuous."
estimatedMinutes: 18
objectives:
  - Define a bijection (one-to-one and onto) and a homeomorphism.
  - Explain why the inverse must also be continuous, using a concrete failure example.
  - Connect the formal definition back to the rubber-sheet intuition from module 01.
prerequisites: [01-rubber-sheet-geometry, 04-continuity]
---

Back in module 01 we made a promise. A coffee mug, we said — a soft one, made of clay — is the same shape as a doughnut, because you can squash one into the other without ever tearing or gluing. It was a satisfying picture, and you can run it in your head: the bowl flattens, the clay slides into the handle, the single hole survives the whole journey. But it was only a picture. "The same shape," as we left it, meant "I can imagine deforming this into that," and imagination is a generous judge. It never tells you a thing can't be done; it just gets tired and gives up. We have spent four chapters building better tools than imagination. Now we cash the promise in.

Here is the question we can finally answer properly. What does it *take* for two shapes to count as the same — not in a picture, but in a definition you could hand to a stranger and have them check? The answer turns out to be short, and every word of it is something we have already built. But the cleanest way in is not through clay at all. It is through translation.

### A perfect two-way dictionary

Imagine you have two languages and a perfect dictionary between them. Not a phrasebook with gaps, not a rough machine translation — a *perfect* one. What would "perfect" have to mean?

First, every word on each side is paired with exactly one word on the other. Nothing in the first language is left without a translation, and nothing in the second language is left unused — no orphan words, no two words crammed onto the same partner. The pairing is clean and complete, in both directions at once. That is the structural half of the dictionary: a flawless matching of word to word.

But a matching of words is not yet a translation. A dictionary could pair every English word with a French one and still be useless — even harmful — if it scrambled the meanings, mapping "cat" to the French for "table." So the second demand is about *meaning*: the translation has to preserve sense. And — this is the part people forget — the *reverse* translation has to preserve meaning too. A dictionary you can trust going from English to French but that produces nonsense going back the other way is broken. A genuinely perfect dictionary works, faithfully, in both directions.

That is the whole idea of a homeomorphism. The two languages are two shapes. The matching of words is a function pairing up their points. "Preserves meaning" is exactly the continuity we built in module 04 — near things stay near, no tearing. And "works in both directions" is the demand that the reverse map preserve meaning as well. A homeomorphism is a perfect two-way dictionary between two shapes. Let us now turn each piece of that sentence into something precise.

### Pairing the points: bijection

You met one-to-one and onto functions before this course, probably without the names being made a fuss of. We need them sharp now, because the "perfect pairing" half of the dictionary is built from them.

A function $f : X \to Y$ is **one-to-one** if it never sends two different points to the same place: distinct inputs get distinct outputs — no two English words share a French partner. It is **onto** if every point of $Y$ gets hit — every point of $Y$ is $f(x)$ for some $x$ in $X$, so no French word is left unused. A function that is both at once pairs the two sets up flawlessly: each point of $X$ has exactly one partner in $Y$, and each point of $Y$ has exactly one partner back in $X$, with nothing doubled up and nothing left over.

## Definition (Bijection)

A function $f : X \to Y$ is a **bijection** if it is both one-to-one and onto. Equivalently, $f$ has a genuine **inverse function** $f^{-1} : Y \to X$ that undoes it: $f^{-1}(y)$ is the unique point of $X$ that $f$ sends to $y$.

The two descriptions are the same fact wearing two outfits. Being one-to-one and onto is exactly the condition that lets you run the pairing backward without ambiguity: hand the function any point of $Y$, and because that point was hit (onto) by exactly one point of $X$ (one-to-one), there is a single, well-defined point to hand back. That backward rule is the inverse function $f^{-1}$.

And here we must stop and untangle a knot, because the symbol $f^{-1}$ is about to mean something new. In module 04, $f^{-1}(U)$ named a *preimage* — the set of all points that land inside $U$, a notion that needs no inverse to exist (recall the squaring map, which has no inverse at all, yet whose preimages were perfectly good sets). That was a name for a *set*. **Now $f^{-1}$ is a genuine function — the way back — because $f$ is a bijection; earlier (module 04) the same symbol named a preimage set, which needs no inverse to exist.** Same glyph, two jobs. From here on, when we write $f^{-1}$ with no set plugged in, we mean the inverse map: the function that retraces $f$'s steps, point by point, back to where they came from. Keep the two readings separate and the symbol will never trip you.

### Meaning, both ways: continuity twice

The bijection pairs the points. It is the matching of words — complete, clean, reversible. But a matching is not a translation; we still need meaning to survive, in both directions.

"Preserves meaning" is continuity in the module-04 sense: the preimage of every open set is open, our tear-free way of saying near things stay near. So we ask $f$ to be continuous — the forward translation keeps neighbors together. And because the pairing runs both ways, we ask the same of the way back: the inverse map $f^{-1}$ must be continuous too — the reverse translation also keeps neighbors together. Two continuities, one for each direction. With the bijection underneath them, that is everything the perfect dictionary demanded, and we can state the definition.

## Definition (Homeomorphism)

Let $(X, \tau_X)$ and $(Y, \tau_Y)$ be topological spaces. A function $f : X \to Y$ is a **homeomorphism** if all three hold:

1. $f$ is a bijection (so its inverse function $f^{-1} : Y \to X$ exists);
2. $f$ is continuous;
3. $f^{-1}$ is continuous.

When such an $f$ exists, we say $X$ and $Y$ are **homeomorphic**, and write $X \cong Y$. If no such $f$ exists, they are **not homeomorphic**, written $X \not\cong Y$.

This is the precise form of "the same shape" we promised in module 01. The clay deformation of the mug into the doughnut *is* such an $f$: the squashing is a continuous map (it never tears — module 01's no-tearing rule), it pairs the mug's points with the doughnut's one for one (a bijection), and you can always run the clay back the way it came, smoothly, which is the inverse being continuous. Every word of the slogan "deform without tearing, with a continuous way back" has landed on a clause of the definition. The mug and the doughnut are homeomorphic: $\text{mug} \cong \text{doughnut}$. The picture from chapter one is now a precise claim you could actually check.

## Check yourself

Suppose $f : X \to Y$ is a continuous bijection, and someone tells you "that's a homeomorphism." What one thing have they not checked — and why is the word *bijection* what lets that thing even make sense to ask about?

<details><summary>Show answer</summary>

They have not checked that the **inverse map $f^{-1}$ is continuous** — that is condition 3, a separate requirement. (Conditions 1 and 2, bijection and $f$ continuous, are the two they named.) And it is precisely because $f$ is a bijection that $f^{-1}$ exists as a genuine function at all — without the bijection there would be no inverse map to ask about. So the bijection does double duty: it pairs the points *and* it guarantees there is a "way back" whose continuity we then have to test on its own. The next section shows that this third condition can genuinely fail.

</details>

### Why the way back needs its own check

It would be tidy if continuity in one direction dragged continuity in the other along with it for free. Then a continuous bijection would automatically be a homeomorphism, and condition 3 would be deadwood. It is not deadwood. The way back can tear even when the way there does not, and one concrete example settles it.

Take the half-open interval $[0, 1)$ — the points from $0$ up to but not including $1$ — and bend it around into a circle. Walk along $[0,1)$ and wrap it once around so that $0$ lands at the top of the circle and, as your input climbs toward $1$, your point travels all the way around and comes creeping back up toward the top from the other side. Call this map $f$, from the interval $[0,1)$ to the circle.

Check the first two conditions. Is $f$ a bijection? Yes: every point of the circle is reached exactly once. The only point that could cause trouble — the top — is hit only by the input $0$, because the input $1$ that would also land there is *not in our interval*. That missing endpoint is what makes it work. And is $f$ continuous? Yes: as you slide along the interval, your point slides smoothly around the circle, nothing jumps. So $f$ is a continuous bijection — conditions 1 and 2 both satisfied.

Now look at the way back, $f^{-1}$, which carries the circle onto the interval. Stand at the top of the circle and look at the two arcs meeting there. Points just *clockwise* of the top came from inputs near $0$. Points just *counterclockwise* of the top came from inputs near $1$. On the circle these two families are right next to each other — they crowd in around the top from both sides, as close as you please. But the way back sends one family to near $0$ and the other to near $1$: it flings two sets of neighbors to *opposite ends* of the interval. That is a tear. Near things on the circle do not stay near on the interval. So $f^{-1}$ is **not continuous**, and $f$, for all that it is a continuous bijection, is **not** a homeomorphism. The half-open interval is not homeomorphic to the circle.

This is a subtle point, so do not let it loom larger than it should: the lesson is simply that conditions 2 and 3 are independent, and that is *why* the definition lists the inverse's continuity separately. Wrapping the interval was fine going forward and torn coming back. If we had asked only for a continuous bijection, we would have been forced to call the interval and the circle the same shape — and they plainly are not; one has a loose end, the other has none. Demanding a continuous inverse is what keeps the definition honest.

> **A tempting wrong answer:** "A continuous bijection is automatically a homeomorphism — if it pairs the points up continuously, the way back must be continuous too." The wrapping map just refuted this. It is a continuous bijection from $[0,1)$ onto the circle whose inverse tears two crowded-together neighbors apart and throws them to opposite ends. Continuity in one direction does not buy you continuity in the other; condition 3 has to be checked on its own, every time.

## Exercises

Work from the definition: a homeomorphism needs all three of bijection, $f$ continuous, $f^{-1}$ continuous. Say *which* clause is doing the work.

**1.** Let $f : \mathbb{R} \to \mathbb{R}$ be the stretch $f(x) = 3x$. Show it is a bijection by writing down its inverse function $f^{-1}$.

<details><summary>Show solution</summary>

To undo "multiply by $3$," divide by $3$: the inverse is $f^{-1}(y) = y/3$. Check it: $f^{-1}(f(x)) = (3x)/3 = x$, and $f(f^{-1}(y)) = 3(y/3) = y$, so it retraces $f$ exactly. Because this inverse exists and is a genuine function, $f$ is a bijection (one-to-one and onto). (Module 04 showed stretches are continuous, and the same reasoning shows $f^{-1}(y) = y/3$ is continuous too — so this $f$ is in fact a homeomorphism of the line with itself.)

</details>

**2.** A homeomorphism asks for three things. List them, and for each, say in a few plain words what it guarantees about the "perfect two-way dictionary."

<details><summary>Show solution</summary>

(1) $f$ is a **bijection** — every point on each side is paired with exactly one point on the other, nothing doubled, nothing left over (the words are matched, completely, both ways). (2) $f$ is **continuous** — the forward translation preserves closeness: near things stay near, no tearing (the translation preserves meaning). (3) $f^{-1}$ is **continuous** — the reverse translation preserves closeness too (the dictionary works going back, not just forward). Together they make the dictionary perfect in both directions.

</details>

**3.** In the wrapping example, $f : [0,1) \to \text{circle}$ was a continuous bijection but *not* a homeomorphism. Which one of the three conditions failed, and describe in one or two sentences the "tear" that caused the failure.

<details><summary>Show solution</summary>

Condition 3 failed: the inverse $f^{-1}$ is not continuous. At the top of the circle, points crowding in from the clockwise side came from inputs near $0$, while points crowding in from the counterclockwise side came from inputs near $1$. These are neighbors on the circle, but $f^{-1}$ throws them to opposite ends of the interval — near things do not stay near coming back, which is a tear. (Conditions 1 and 2, bijection and forward continuity, both held; the missing endpoint $1$ is exactly what let $f$ be a bijection in the first place.)

</details>

**4.** Topology forgets size (module 01). Argue, using the definition, that the open interval $(-1, 1)$ and the whole real line $\mathbb{R}$ ought to be homeomorphic — you do not need a formula, just say what map would do the job and why all three conditions are plausible. *(Hint: think of a map that stretches the short interval out to cover the entire line.)*

<details><summary>Show solution</summary>

We want a map $f : (-1,1) \to \mathbb{R}$ that stretches the little interval out to cover the whole line. Such a map can be built to pair each point of $(-1,1)$ with exactly one real number, racing off toward $+\infty$ as the input nears $1$ and toward $-\infty$ as it nears $-1$ — that makes it a **bijection** (every real number is hit exactly once). The stretching moves nearby points to nearby points with no jumps, so $f$ is **continuous**; and the squeezing-back from the whole line into the interval is just as smooth, so $f^{-1}$ is **continuous** too. All three conditions hold, so $(-1,1) \cong \mathbb{R}$. This is the rubber-sheet idea from module 01 made precise: a finite stretch of rubber and an infinite one are the same shape, because length is exactly what topology forgets. (A clean such map exists — one built from the tangent function, say — but the point here is only that the three conditions can all be met.)

</details>

**5.** *(Conceptual.)* True or false: "If $X \cong Y$, then there is exactly one homeomorphism between them." Explain.

<details><summary>Show solution</summary>

False. $X \cong Y$ says *at least one* homeomorphism exists; it never claims there is only one. The line $\mathbb{R}$ is homeomorphic to itself in infinitely many ways — $f(x) = x$, $f(x) = 3x$, $f(x) = x + 5$, and $f(x) = -x$ are all homeomorphisms of $\mathbb{R}$ with itself. The relation $\cong$ records *whether* a perfect two-way dictionary exists between two shapes, not how many there are or which one you pick. (This matters soon: to prove two shapes are the *same* you exhibit one homeomorphism; to prove they are *different* you must rule out every possible one — a much harder job, and the reason the next chapters build a cleverer tool for it.)

</details>

## Recap

The slogan we opened the course with now has a definition behind it. Two shapes are **homeomorphic**, written $X \cong Y$, when there is a perfect two-way dictionary between them — a bijection that pairs their points with nothing left over, continuous in the forward direction and continuous coming back. The clay mug and the doughnut pass every clause, so the picture from module 01 is at last a precise claim. We also met the catch the wrapping map exposed: a continuous bijection is not enough, because the way back can tear, which is exactly why the continuous-inverse clause earns its place. There is, though, a lopsidedness lurking here. Showing two shapes are the same means producing *one* homeomorphism; showing they are different means ruling out *every* possible one — and you cannot do that by failing to imagine a map. For that we need properties that survive every homeomorphism, so that a single mismatch settles the case. Those are the invariants, and they are where we go next.
