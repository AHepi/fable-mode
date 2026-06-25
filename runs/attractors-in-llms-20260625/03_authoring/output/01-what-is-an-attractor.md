---
title: What an Attractor Is
course: attractors-in-llms
order: 1
summary: Apply one rule over and over and you tend to land in the same place; that place is an attractor, and the logistic map shows fixed points, cycles, and chaos from a single knob.
estimatedMinutes: 24
objectives:
  - Define an iterated map, a trajectory, a fixed point, a periodic cycle, an attractor, and its basin of attraction.
  - Compute the fixed point of a simple linear map and state when it is attracting versus repelling.
  - Trace the logistic map from a single attracting point to a 2-cycle as its parameter rises.
  - Explain "basin of attraction" using the ball-in-a-valley landscape.
prerequisites: []
---

Pick a number. Any number. Say $10$. Now run it through one rule, $f(x) = \tfrac12 x + 1$: halve it, add one. You get $6$. Feed $6$ back through the same rule and you get $4$. Keep going and the numbers stop wandering:

$$
10 \;\to\; 6 \;\to\; 4 \;\to\; 3 \;\to\; 2.5 \;\to\; 2.25 \;\to\; 2.125 \;\to\; \cdots
$$

They are crowding toward $2$ and slowing down as they arrive. Start somewhere else, say $x_0 = -4$, and watch what happens:

$$
-4 \;\to\; -1 \;\to\; 0.5 \;\to\; 1.25 \;\to\; 1.625 \;\to\; \cdots
$$

Different opening, same destination. The rule does not care where you began. Halving the gap to $2$ each step, it drags every starting number toward the same spot. That spot, the place the system settles into and stays, is an **attractor**, and the rest of this course is about one surprising fact: the machinery that pulls these toy numbers toward $2$ is the same machinery that pulls a language model into a repetition loop, a sycophantic spiral, or a persona it cannot drop. The dynamics come first. The models come later.

The field that studies this asks one question. Apply the same rule over and over, and where do you end up? Everything else is vocabulary for answering it. We will stay in *discrete time* throughout, step $1$, step $2$, step $3$, because a language model generates one token at a time, in discrete steps, with no need for the calculus of continuous flows.

## The picture: a ball in a valley

Hold one image in your head for the whole course. A ball sits on a hilly landscape. Let go and it rolls downhill, loses speed at the bottom of a dip, and comes to rest at the lowest point it can reach. That resting point is where the system *wants* to be. Tip the landscape into a wide bowl with a single low point and every ball, wherever you drop it, rolls to the same floor. Carve the landscape into several dips separated by ridges, and where a ball ends up depends on which dip it started above.

That valley floor is the attractor. The stretch of hillside that funnels a ball into one particular dip is that attractor's **basin of attraction**. The ridges between dips are the dividing lines: drop the ball a hair to the left of a ridge and it rolls into one valley, a hair to the right and it rolls into the next. And here is the property that makes the floor an *attractor* rather than just a low point you happen to be sitting on. Nudge a resting ball and it rolls back. The dip resists the disturbance. That return-after-a-nudge is the whole idea, and we will lean on it again and again.

This is not a loose metaphor borrowed for color. The energy landscape is a real model in physics and in neuroscience, the one John Hopfield used to turn attractors into a theory of memory, and the back of this course returns to it as the honest, mathematically grounded version of everything we are about to borrow more loosely. For now, let the ball and the valley do their work. Each formal object below maps onto one piece of this picture.

## The objects, one at a time

Start with the thing you iterate.

### Iterated maps and trajectories

## Definition (Iterated map)

An **iterated map** is a fixed rule $f$ applied repeatedly, with each output fed back in as the next input:

$$
x_{t+1} = f(x_t).
$$

The value $x_t$ is the **state** at step $t$: a complete snapshot of the system, everything you need to compute the next step. The subscript $t$ is the discrete time index, $t = 0, 1, 2, \dots$

Read the notation back into the rolling ball. The state $x_t$ is where the ball is right now. The map $f$ is the single law of motion that says where it goes next. "Iterated" carries the load: the *same* $f$ every step, output looping back as the next input, the way the ball's new position becomes the starting point for its next roll. In the opening example the state was just one number and $f$ was halve-and-add-one. For a language model the state will be the whole text so far and $f$ will be the model plus its sampler, but the shape is identical, one rule, applied again and again.

The sequence of states you pass through has its own name.

## Definition (Trajectory)

The **trajectory** (or orbit) from a starting state $x_0$ is the sequence of states the map produces:

$$
x_0, \; x_1, \; x_2, \; x_3, \; \dots
$$

The trajectory is the *path*, not the destination. Our first list, $10, 6, 4, 3, 2.5, \dots$, is one trajectory; the list starting from $-4$ is another. They are different paths that happen to arrive at the same place, which is exactly the seed of the basin idea: many roads, one valley.

<details><summary>Check yourself: what is the trajectory of $f(x) = \tfrac12 x + 1$ starting from $x_0 = 4$, for three steps?</summary>

$4 \to 3 \to 2.5 \to 2.25$. Apply the rule each time: $\tfrac12(4)+1 = 3$, then $\tfrac12(3)+1 = 2.5$, then $\tfrac12(2.5)+1 = 2.25$. Already homing in on $2$.

</details>

### Fixed points

Some states are special: the rule leaves them alone.

## Definition (Fixed point)

A **fixed point** of $f$ is a state $x^\star$ that the map returns unchanged:

$$
f(x^\star) = x^\star.
$$

The equation says: feed $x^\star$ in and you get $x^\star$ back out. The ball is already on the valley floor, so the next roll moves it nowhere. Once a trajectory lands exactly on $x^\star$, it stays there forever, which is what "settles into and stays" meant in plain words.

Finding the fixed point of our toy map is a one-line calculation. Set the rule equal to its own input and solve:

$$
x^\star = \tfrac12 x^\star + 1 \quad\Longrightarrow\quad \tfrac12 x^\star = 1 \quad\Longrightarrow\quad x^\star = 2.
$$

So $2$ is the floor the opening trajectories were rolling toward. But existence is not arrival. A rule can *have* a fixed point that trajectories race away from rather than toward. Whether you actually reach it is a separate question, and it has a clean answer.

### Stability: attracting or repelling

A fixed point comes in two flavors. Nudge the ball off the valley floor: if it rolls back, the floor is **attracting**; if the slightest push sends it tumbling away, the point is **repelling**. The valley floor attracts. The very top of a ridge, where a ball could in principle balance, repels, because no real ball stays balanced on a peak.

The test is local, about what the map does to small distances near the fixed point. Our toy map multiplies every gap by $\tfrac12$: if you sit at $2$ and bump to $2.1$, the next states are $2.05, 2.025, 2.0125, \dots$, each half as far off as the last, decaying back to $2$. A map that shrinks distances like this is a **contraction**, and its fixed point attracts. By contrast $f(x) = 2x$ *doubles* the gap each step, so its fixed point at $0$ repels: any tiny error explodes.

## Definition (Stability rule of thumb)

For a smooth one-dimensional map $f$ with fixed point $x^\star$, compare the size of the derivative there to $1$:

$$
|f'(x^\star)| < 1 \;\Rightarrow\; \text{attracting}, \qquad |f'(x^\star)| > 1 \;\Rightarrow\; \text{repelling}.
$$

The derivative $f'(x^\star)$ is the factor by which the map stretches or shrinks a tiny gap near $x^\star$. Less than one in size means gaps shrink each step, so a nudge decays and the ball rolls back. Greater than one means gaps grow, so a nudge amplifies and the ball runs off. For $f(x) = \tfrac12 x + 1$ the derivative is $\tfrac12$ everywhere, and $|\tfrac12| < 1$, which confirms what the trajectories already showed: $2$ attracts.

<details><summary>Check yourself: the map $f(x) = 3x - 4$ has a fixed point. Find it, and decide whether it attracts or repels.</summary>

Solve $x = 3x - 4$, giving $-2x = -4$, so $x^\star = 2$. The derivative is $f'(x) = 3$, and $|3| > 1$, so the fixed point *repels*. A trajectory starting near $2$ flies away from it, not toward it. Existence of a fixed point told you nothing about whether you would ever land there.

</details>

### Attractors and basins

We can now name the destination precisely.

## Definition (Attractor)

An **attractor** is a set of states the system settles onto and does not leave, defined by two properties together:

1. **Invariant** — once the trajectory is in the set, it stays in the set.
2. **Attracting** — nearby states are drawn toward the set.

An attracting fixed point is the simplest attractor: invariant because $f(x^\star) = x^\star$, attracting because nearby trajectories funnel in. Both properties are required. A repelling fixed point is invariant (sit exactly on it and you stay) but not attracting, so it is *not* an attractor. The valley floor passes both tests; the ridge top fails the second.

## Definition (Basin of attraction)

The **basin of attraction** of an attractor is the set of all starting states whose trajectories eventually arrive there.

The basin is the catchment, the whole stretch of hillside that funnels a ball into one dip. For our toy map the basin of $2$ is *every* real number, because halve-and-add-one is a contraction across the whole line: drop the ball anywhere and it rolls to the same floor. The opening trajectories from $10$ and from $-4$ landed at $2$ for exactly this reason. When a landscape has several dips, space gets carved into separate basins, and which basin a start lands in decides its fate. Two trajectories can begin close together yet end in different valleys if a ridge runs between them.

One more distinction keeps the picture honest. The early, one-time approach is the **transient**; the long-run behavior is the attractor. In $10 \to 6 \to 4 \to 3$ the whole descent is transient, and $2$ is the attractor. Transient is how you get there; the attractor is where you live. The test for telling them apart is recurrence: does the behavior keep returning? Then it is the attractor, not a passing phase.

## When the floor becomes a loop: the logistic map

So far the attractor has been a single point. It need not be. Turn one knob on a famous rule and the destination changes shape.

## Definition (Logistic map)

The **logistic map** is the iterated map

$$
x_{t+1} = r\, x_t (1 - x_t), \qquad x_t \in [0, 1],
$$

with a single parameter $r$ controlling the rule's strength.

One variable, one knob. The factor $x_t$ pushes the value up; the factor $(1 - x_t)$ pulls it back down as $x_t$ approaches $1$, so the two compete. The whole point of this map is that as you turn $r$ up, the *same rule* produces qualitatively different attractors, the cleanest demonstration in mathematics of "one rule, many destinies."

Begin in the calm regime, $1 < r < 3$. Here the map has a single attracting fixed point, found the same way as before, by setting the rule equal to its input:

$$
x^\star = r\, x^\star (1 - x^\star) \quad\Longrightarrow\quad x^\star = \frac{r - 1}{r}.
$$

At $r = 2$ this is $x^\star = 0.5$, and trajectories home in on it just as the toy map's did on $2$. The landscape is a single bowl.

Now turn the knob to $r = 3$ and the bowl gives way. The fixed point goes unstable, and instead of resting at one value the system starts bouncing between *two* values, forever. This is a **periodic cycle**.

## Definition (Periodic cycle)

A **periodic cycle** is an attractor that is a repeating loop of states rather than a single point. A period-$2$ cycle (a **2-cycle**) settles into

$$
a \;\to\; b \;\to\; a \;\to\; b \;\to\; \cdots
$$

returning to each value every two steps.

A 2-cycle is not broken or unstable. It is a perfectly stable attractor that happens to be a loop instead of a point. The system still settles, still resists small nudges, still has a basin; it simply lives on two states and shuttles between them. In the valley picture, imagine a ball that cannot rest at a single bottom but rolls steadily between two low points, around and around, never escaping the pair. Periodic and chaotic are *opposites*, not cousins: a cycle is the system at its most orderly.

Push $r$ higher and the loop itself splits. At $r = 1 + \sqrt{6} \approx 3.449$ the 2-cycle becomes a 4-cycle, then $8$, then $16$, the period doubling again and again in a cascade. Near $r \approx 3.56995$ the doublings pile up without limit and the trajectory stops repeating altogether: **chaos**, where the path never settles into any cycle and two nearly identical starts drift apart. A period-3 window appears further on, an island of order inside the chaos, before disorder resumes. One equation, one knob, and the attractor walks from a point to a loop to a cycle of cycles to chaos.

## Worked example: tracing the move from fixed point to 2-cycle

**Problem.** Take the logistic map at $r = 3.2$, just past the onset of the cycle. Starting from $x_0 = 0.5$, follow the trajectory and identify the attractor.

**Solution.** Apply $x_{t+1} = 3.2\, x_t(1 - x_t)$ step by step. Each value uses the one before it:

| $t$ | $x_t$ | $x_{t+1} = 3.2\,x_t(1 - x_t)$ |
|----|--------|-------------------------------|
| $0$ | $0.5000$ | $3.2(0.5)(0.5) = 0.8000$ |
| $1$ | $0.8000$ | $3.2(0.8)(0.2) = 0.5120$ |
| $2$ | $0.5120$ | $3.2(0.512)(0.488) = 0.7995$ |
| $3$ | $0.7995$ | $3.2(0.7995)(0.2005) = 0.5129$ |
| $4$ | $0.5129$ | $3.2(0.5129)(0.4871) = 0.7995$ |
| $5$ | $0.7995$ | $3.2(0.7995)(0.2005) = 0.5130$ |

After a short transient the trajectory locks onto two values, roughly $0.799$ and $0.513$, and shuttles between them: high, low, high, low. That is the attractor, a 2-cycle. Compare it with $r = 2.5$, where the same starting point would instead settle on the single fixed point $x^\star = (2.5 - 1)/2.5 = 0.6$ and stay put. The rule did not change shape; only the knob moved, from a point attractor to a loop.

Notice the early rows are transient, the genuine settling happens by step $2$ or so, and from then on the values *recur*. Recurrence is the signature of being on the attractor rather than still approaching it.

<details><summary>Check yourself: at $r = 2.5$, the logistic map has its fixed point at $x^\star = 0.6$. Without iterating, is it attracting? (Use the derivative test; here $f'(x) = r(1 - 2x)$.)</summary>

Evaluate $f'(x^\star) = 2.5\,(1 - 2 \cdot 0.6) = 2.5\,(1 - 1.2) = 2.5\,(-0.2) = -0.5$. Its size is $|-0.5| = 0.5 < 1$, so the fixed point attracts. The sign being negative means trajectories approach while alternating above and below it, but the magnitude under $1$ is what guarantees the nudge decays. This is why $1 < r < 3$ gives a single attracting point, and why crossing $r = 3$, where the magnitude reaches $1$, is exactly where it loses stability and the cycle begins.

</details>

## Exercises

**1.** Find the fixed point of $f(x) = \tfrac13 x + 4$ and decide whether it attracts or repels.

<details><summary>Show solution</summary>

Set $x = \tfrac13 x + 4$, so $\tfrac23 x = 4$ and $x^\star = 6$. The derivative is $f'(x) = \tfrac13$ everywhere, and $|\tfrac13| < 1$, so the fixed point *attracts*. The map shrinks every gap to a third of its size each step, a contraction, so any start funnels to $6$.

</details>

**2.** Compute three steps of $f(x) = \tfrac13 x + 4$ starting from $x_0 = 30$, and confirm the numbers move toward your answer in Exercise 1.

<details><summary>Show solution</summary>

$30 \to 14 \to 8.667 \to 6.889 \to \cdots$, since $\tfrac13(30)+4 = 14$, then $\tfrac13(14)+4 \approx 8.667$, then $\tfrac13(8.667)+4 \approx 6.889$. Each step closes about two-thirds of the remaining distance to $6$, exactly the contraction at work. The trajectory is the transient; $6$ is the attractor.

</details>

**3.** The map $g(x) = 2x - 3$ has a fixed point at $x^\star = 3$. Start at $x_0 = 3.01$ and take a few steps. What happens, and what does it tell you about $x^\star = 3$?

<details><summary>Show solution</summary>

$3.01 \to 3.02 \to 3.04 \to 3.08 \to \cdots$, drifting steadily away from $3$. The derivative is $g'(x) = 2$, and $|2| > 1$, so $3$ is *repelling*. The tempting mistake is to assume that because $3$ is a fixed point, trajectories must approach it. They do not. A fixed point's existence says nothing about its stability; the derivative test decides that, and here it fails.

</details>

**4.** Explain, using the ball-in-a-valley landscape, why two starting states that are very close together can end up at different attractors.

<details><summary>Show solution</summary>

A landscape with several dips has ridges between them. If two nearby starts sit on opposite sides of a ridge, they roll into different valleys, so they land in different basins and reach different attractors despite starting close. The everyday intuition "close start, close outcome" holds *inside* a basin but breaks at a basin boundary, where the dividing ridge sends near-neighbors to opposite fates.

</details>

**5.** (Conceptual.) A friend says "a period-2 cycle means the model is broken or unstable." Using the logistic map at $r = 3.2$, explain why that is wrong.

<details><summary>Show solution</summary>

At $r = 3.2$ the 2-cycle is a stable attractor: the trajectory funnels onto it from a range of starts and returns to it after a small nudge, just like a fixed point does. It simply lives on two states instead of one. "Unstable" would mean trajectories run *away*, which is the opposite of what happens here. The confusion is between a cycle (orderly, repeating, stable) and chaos (aperiodic, sensitive). The logistic map separates them cleanly: cycles live below $r \approx 3.57$, chaos above.

</details>

## Recap

One rule applied over and over tends to deliver you to the same place, and that place, robust to small nudges, is an attractor: a single floor when the map is a contraction, a repeating loop when a knob like the logistic map's $r$ is turned past $r = 3$, and eventually chaos. The ball-in-a-valley landscape ties the formal objects together, with the valley floor as the attracting fixed point, the surrounding hillside as its basin, and the roll-back-after-a-nudge as stability. Whether a fixed point actually attracts is a question the derivative settles, not its mere existence. This same vocabulary, state, map, trajectory, fixed point, cycle, basin, the decaying nudge, is the lens the rest of the course points at language models, where a context-so-far plays the role of the state and a model-plus-sampler plays the role of the rule. The toy numbers were never the point; they were the machinery, and that machinery is about to start generating text.
