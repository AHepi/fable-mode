---
title: Continuity Without Limits
course: topology
order: 4
summary: "Continuity rebuilt without calculus: a map is continuous when the preimage of every open set is open."
estimatedMinutes: 18
objectives:
  - Define the preimage of a set under a function.
  - State the topological definition of continuity (preimages of open sets are open).
  - Explain why this matches the intuitive "no sudden jumps / no tearing" picture.
prerequisites: [02-open-sets, 03-what-is-a-topology]
---

You have probably been told what a continuous function is. Somewhere in a math class, someone drew a curve on a board and said: a function is continuous if you can draw its graph without lifting your pen. One unbroken stroke, no gaps, no jumps. It is a tidy picture, and for the graphs you met back then it even gave the right answers.

Forget it. Not because it is useless, but because it is a crutch we are about to throw away — and the throwing-away is the whole point of this chapter.

Here is the trouble. "Without lifting your pen" only makes sense for a curve you can actually draw: a function from the number line to the number line, with a graph you can trace. But topology lives in places far stranger than the plane — the surface of a doughnut, a Möbius band, spaces with no natural picture at all. There is no pen and no paper there. Worse, "drawing it in one stroke" quietly smuggles in the idea of a *limit* — the function "approaching" a value as you slide along — and limits are exactly the calculus machinery we promised to do without. So we need a notion of continuity that needs no graph, no pen, and no limits. We need to say what continuity *is* using only the one tool we have built so far: open sets.

It turns out we can. And the version we land on is sharper, stranger, and more powerful than the pen ever was.

### From "no tearing" to "neighbors stay together"

Go back to the rubber-sheet image from module 01. A continuous reshaping of a shape — a stretch, a bend, a twist — is exactly one that does not tear. And what does "no tearing" really mean, point by point? It means the map keeps neighbors together. Two specks of clay sitting right next to each other before the stretch are still right next to each other after it. Nothing that was close gets flung far apart; that flinging-apart is precisely what a tear *is*.

So at heart, a continuous map is one that **respects closeness**: near things stay near. That is the honest content of the pen picture, stripped of the pen. Our job now is to say "stays near" in the language of open sets — because in module 02 an open set was exactly our way of talking about closeness. An open set around a point is the *room* around that point, the neighbors of where you're standing.

Now picture a map $f$ that carries a space $X$ over to a space $Y$ — every point of $X$ gets sent somewhere in $Y$. We want to test whether $f$ respects closeness. Here is the move that makes everything work, and it runs *backward*. Instead of standing in $X$ and watching where points go, we stand in $Y$, draw a patch of "room" — an open set — and ask: which points of $X$ landed inside that patch? Then we check whether *those* points form a patch of room too.

That backward set — the points of $X$ that land inside a chosen patch of $Y$ — is the one new idea this chapter rests on, so let us pin it down before we use it.

## Definition (Preimage)

Let $f : X \to Y$ be a function and let $U \subseteq Y$ be any set. The **preimage** of $U$ under $f$, written $f^{-1}(U)$, is the set of all points in $X$ that $f$ sends into $U$:

$$
f^{-1}(U) = \{\, x \in X : f(x) \in U \,\}.
$$

In words: $f^{-1}(U)$ collects **every point that lands in $U$** — gather up all the starting points whose destination falls inside $U$, and that collection is the preimage.

A warning about the notation, because it is a genuine trap. That symbol $f^{-1}$ does **not** mean we have inverted $f$ or "undone" it. We are not running the function backward, and $f$ need not even *have* a way back. The symbol $f^{-1}(U)$ is simply the *name of a set* — the set of points that land in $U$ — and that set makes perfect sense for any function at all, no matter how badly behaved.

To feel why this is fine even when $f$ has no inverse, take the squaring map $f(x) = x^2$ on the number line. This function cannot be inverted as a whole: both $3$ and $-3$ land on $9$, so if someone hands you the output $9$ there is no single input to hand back. And yet the preimage of, say, the open interval $U = (4, 9)$ is no trouble at all. Which $x$ satisfy $4 < x^2 < 9$? Exactly those with $2 < x < 3$ *or* $-3 < x < -2$. So

$$
f^{-1}\big((4,9)\big) = (-3,-2) \cup (2,3),
$$

a perfectly good set — in fact a union of two open intervals. We never inverted anything. We just asked "what lands in here?" and answered it. Keep this firmly in mind: in this chapter $f^{-1}$ names a preimage, never an inverse function. (Two chapters from now, when we meet maps that genuinely *can* be run backward, the same symbol will get its second job — and we will flag the switch loudly when it comes.)

### Building the bridge

Now we can finish the thought. We wanted "$f$ keeps neighbors together." Translate it through the preimage.

Pick any patch of room in the destination — any open set $U \subseteq Y$. The points of $X$ that land in that patch are $f^{-1}(U)$. If $f$ truly respects closeness, then those starting points should themselves form a patch of room: wherever a point lands comfortably *inside* the open set $U$ (not on its edge), the point it came from should sit comfortably inside an open set too, with neighbors all around it that also land in $U$. In other words, $f^{-1}(U)$ should be **open**. If instead $f^{-1}(U)$ had a sharp edge — a point with neighbors leaking outside it — that would be a place where $f$ tore the fabric, sending some near neighbors into $U$ and others not. An open preimage is the fingerprint of no tearing.

So "keeps neighbors together," said in the only language we have, becomes: *the preimage of every open set is open.* That is the definition.

## Definition (Continuous map)

Let $(X, \tau_X)$ and $(Y, \tau_Y)$ be topological spaces. A function $f : X \to Y$ is **continuous** if for every open set $U \subseteq Y$, the preimage $f^{-1}(U)$ is open in $X$.

Read it slowly, because it is doing a lot in one line. It says nothing about pens, nothing about graphs, nothing about limits. It says only this: hand the map any open set in the target, and what comes back in the source is open too. Open sets in, open sets out — backward. That single condition, checked over *all* open sets, is what it now means for a map to be continuous. And notice it leans entirely on the open-set rules from module 03: "open" is whatever the topology declares to be open, so continuity is a relationship between two topologies, nothing more.

> **A tempting wrong answer:** "Continuous should mean the *image* of every open set is open — open sets go forward to open sets." It is the natural guess, and it is wrong. Continuity is about preimages, the backward direction, not forward images. The forward version describes a different and rarer property (an *open map*), and ordinary continuous functions routinely fail it. Take the flat map $f(x) = 5$ that sends every real number to $5$. It is as continuous as a function can be — nothing moves, nothing tears. But its forward image of the open interval $(0,1)$ is the single point $\{5\}$, which is not open. The definition has to run backward; that is not a detail to be tidied up later, it is the heart of the idea.

## Worked example

The fastest way to trust the definition is to watch it pass a map it should pass and fail a map it should fail. We will use the simplest discontinuity there is — a jump — and a well-chosen open set to expose it.

**Problem.** Two maps from the real line to the real line.

- The first is $f(x) = 2x$, a plain stretch that should be continuous.
- The second is a step with a jump at the origin:

$$
g(x) = \begin{cases} 0 & \text{if } x < 0, \\ 1 & \text{if } x \ge 0. \end{cases}
$$

Its graph sits flat at height $0$ to the left, then leaps to height $1$ at the origin — exactly the kind of tear we want continuity to reject. Use the preimage test to confirm $f$ is continuous on a sample open set and that $g$ fails.

**Solution.** Recall that on the number line the open sets are built from open intervals (module 02), so it is enough to track what happens to open intervals.

*The stretch $f(x) = 2x$.* Pick any open interval in the target, say $U = (2, 6)$. Which $x$ land inside it? We need $2 < 2x < 6$, that is $1 < x < 3$. So

$$
f^{-1}\big((2,6)\big) = (1, 3),
$$

an open interval — open. And nothing special happened at $(2,6)$: any open interval $(a,b)$ pulls back to the open interval $(a/2,\, b/2)$, and any open set (a union of such intervals) pulls back to a union of open intervals, which is open. Every open set has an open preimage, so $f$ is continuous. The stretch keeps neighbors together, just as the rubber-sheet picture promised.

*The jump $g$.* Here we hunt for a single open set whose preimage is *not* open — one bad set is all it takes to disqualify a map. The jump happens at the value $1$, so aim an open patch right around it: let $U = (0.5,\, 1.5)$, an open interval that contains $1$ but not $0$. Which $x$ does $g$ send into $U$? Only the points where $g(x) = 1$, since $g(x) = 0$ misses $U$ entirely. And $g(x) = 1$ exactly when $x \ge 0$. So

$$
g^{-1}\big((0.5, 1.5)\big) = [0, \infty),
$$

the half-line starting *at and including* $0$. Is that open? No. The point $0$ sits on the edge with no room to its left — every interval around $0$ pokes out into the negative numbers, where $g$ equals $0$ and lands outside $U$. So $0$ has neighbors that escape the patch: a tear, caught red-handed. The preimage $[0,\infty)$ is not open, the definition is violated, and $g$ is **not continuous**.

Look at what the definition just did. With no pen, no graph, no limit, it located the discontinuity precisely — at the one point $x = 0$ where the jump lives — purely by noticing that an open patch upstairs pulled back to a set with a sharp edge downstairs. The "no tearing" intuition and the preimage test agreed, exactly as we built them to.

## Check yourself

Using the squaring map $f(x) = x^2$, what is the preimage $f^{-1}\big((-1, 4)\big)$ of the open interval $(-1, 4)$? (Careful — think about which real numbers $x$ actually land inside that interval.)

<details><summary>Show answer</summary>

We need every $x$ with $-1 < x^2 < 4$. Since $x^2$ is never negative, the condition $-1 < x^2$ is automatic — it costs nothing. So the real constraint is $x^2 < 4$, which means $-2 < x < 2$. Therefore

$$
f^{-1}\big((-1, 4)\big) = (-2, 2),
$$

an open interval. (No inverting happened: we just asked which inputs land in the patch. And note the negative part of the target, $(-1,0]$, contributed nothing, because no real number squares to a negative — a reminder that a preimage can quietly ignore part of the set you feed it.)

</details>

## Exercises

Work each one straight from the two definitions — preimage first, then the open-set test. Say *why*, not just what.

**1.** For the doubling map $f(x) = 2x$ on the real line, compute the preimage $f^{-1}\big((-2, 10)\big)$.

<details><summary>Show solution</summary>

We need $-2 < 2x < 10$. Divide through by $2$: $-1 < x < 5$. So $f^{-1}\big((-2,10)\big) = (-1, 5)$. The preimage of an open interval under a stretch is again an open interval — which is one instance of the general fact that $f(x)=2x$ is continuous: every open set pulls back to an open set.

</details>

**2.** Let $h(x) = x + 3$ (shift everything right by 3). Find $h^{-1}\big((0, 1)\big)$, and state in one sentence whether this is open.

<details><summary>Show solution</summary>

We need $0 < x + 3 < 1$, so subtracting $3$ gives $-3 < x < -2$. Thus $h^{-1}\big((0,1)\big) = (-3, -2)$, which is an open interval, hence open. A shift never tears the line — it just slides it — so the preimage of any open set stays open.

</details>

**3.** Explain, in your own words, why we define continuity using the preimage (the backward direction) rather than "open sets get sent to open sets" (the forward direction). A one- or two-sentence reason, plus the constant map as an example, is enough.

<details><summary>Show solution</summary>

Continuity is about closeness being *preserved*: nearby inputs must have nearby outputs, with no tearing. The clean way to express that is to start from a patch of room in the target and require its incoming points to form a patch of room too — the preimage of an open set is open. The forward statement says something else entirely and even the simplest continuous maps fail it: the constant map $f(x) = 7$ never tears anything, yet it sends the whole open line to the single point $\{7\}$, which is not open. So "image of open is open" cannot be the definition of continuity; the backward direction is the right one.

</details>

**4.** Consider the jump map

$$
g(x) = \begin{cases} -1 & \text{if } x \le 0, \\ \phantom{-}1 & \text{if } x > 0. \end{cases}
$$

Find an open interval $U$ in the target whose preimage $g^{-1}(U)$ is *not* open, and say which point spoils openness. (This is the heart of why $g$ is discontinuous.)

<details><summary>Show solution</summary>

The jump lands on the two values $-1$ and $1$, so aim an open interval at one of them that misses the other. Take $U = (0.5, 1.5)$: it contains $1$ but not $-1$. Which $x$ does $g$ send into $U$? Only the points where $g(x) = 1$, and that happens exactly when $x > 0$. So

$$
g^{-1}\big((0.5, 1.5)\big) = (0, \infty)
$$

— wait, check the endpoint. At $x = 0$ we have $g(0) = -1$ (the rule says $g(x) = -1$ for $x \le 0$), so $0$ does *not* land in $U$, and the preimage is the open half-line $(0, \infty)$, which *is* open. This $U$ doesn't expose the jump. Aim at the other value instead: take $U = (-1.5, -0.5)$, containing $-1$ but not $1$. Now $g(x) \in U$ exactly when $g(x) = -1$, i.e. when $x \le 0$, so

$$
g^{-1}\big((-1.5, -0.5)\big) = (-\infty, 0],
$$

the half-line that *includes* its endpoint $0$. That is **not** open: the point $0$ has no room to its right, since every interval around $0$ pokes into the positive numbers where $g = 1$ lands outside $U$. So $0$ is the point that spoils openness, and $g$ is discontinuous — the tear sits right at the jump, $x = 0$. (The lesson worth keeping: *which* open set you aim matters. One badly chosen patch can pull back to an open set and tell you nothing; you have to hunt for the patch that catches the edge.)

</details>

**5.** *(Conceptual.)* The "draw it without lifting your pen" picture is the one many people carry from an earlier class. Give one reason that picture cannot serve as our definition of continuity in topology — and name what we replaced it with.

<details><summary>Show solution</summary>

The pen picture only works where there is a curve you can actually trace: a graph in the plane. Topology lives in places with no such picture — the surface of a doughnut, a Möbius band, a bare set of dots with no notion of distance — so "one unbroken stroke" has nothing to mean there. It also quietly relies on a function "approaching" a value as you slide along, which is the calculus idea of a *limit*, and we promised to build continuity without limits. We replaced the pen with the preimage test: $f$ is continuous when the preimage of every open set is open. That test needs only open sets, so it makes sense in any space at all.

</details>

**6.** *(Conceptual.)* Let $f : X \to Y$ be a function and suppose the *only* open sets in $Y$ are $\varnothing$ and $Y$ itself (the bare-minimum topology from module 03). Show that $f$ is automatically continuous, no matter what $f$ does.

<details><summary>Show solution</summary>

To check continuity we must show the preimage of *every* open set in $Y$ is open in $X$. But here $Y$ has only two open sets, so there are just two preimages to check. First, $f^{-1}(\varnothing)$: which points of $X$ land in the empty set? None — nothing lands in $\varnothing$ — so $f^{-1}(\varnothing) = \varnothing$, which is open in $X$ by the first topology axiom (module 03). Second, $f^{-1}(Y)$: which points land somewhere in $Y$? Every point of $X$ does, since $f$ sends each point *somewhere* in $Y$. So $f^{-1}(Y) = X$, which is also open by that same axiom. Both preimages are open, so $f$ is continuous. The point: continuity is a relationship between two topologies, and if the target has almost no open sets, there is almost nothing to demand — every function clears the bar.

</details>

## Recap

We threw out the pen. "Draw it without lifting your pen" was never the real idea of continuity; it was a picture that only works on graphs and that leans on limits we never wanted. What survives the throwing-away is plainer and tougher: a continuous map is one that keeps neighbors together, and the precise way to say so uses only open sets. Hand the map any open set in the target, look back at the points that land inside it — that backward set is the **preimage** $f^{-1}(U)$, a name for a collection of points and never an inverted function — and demand that it be open. Preimage of every open set is open: that is continuity, no graph and no limit in sight. We watched a stretch pass the test and a jump fail it at the exact point where it tore. Next we put continuity to work on the question the whole course has been circling since the mug and the doughnut — what it really means for two shapes to be *the same* — where this same symbol $f^{-1}$ will quietly take on its second life as a genuine way back.