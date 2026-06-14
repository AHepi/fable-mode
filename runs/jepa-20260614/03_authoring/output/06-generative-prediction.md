---
title: Predicting the Pixels, and Why It's Wasteful
course: jepa
order: 6
summary: The generative way to fill the blank — predict the actual hidden pixels or words, as image generators and LLMs do — and its catch: chasing every unpredictable detail wastes the model's effort.
estimatedMinutes: 16
objectives:
  - Describe generative/reconstructive prediction (rebuilding the raw hidden signal).
  - Explain why some detail is unpredictable and why chasing it wastes the model's capacity.
  - Connect next-token prediction in LLMs to this generative approach.
prerequisites:
  - 05-self-supervised-learning
---

Hand a painter a photograph with one corner cut away and say: *make it whole again.* A
patient painter will do exactly what you asked. They'll mix the right green and lay in the
grass — not the idea of grass, but every blade of it. This blade leaning left, that one
snapped halfway, a third catching the light at a slightly different angle than its
neighbor. They'll match the photograph stroke for stroke, because that's what "make it
whole" demanded: put the real thing back, down to the last blade.

It is astonishing work. It is also, in a way we're about to make precise, partly a waste of
the painter's time — and seeing exactly *which* part is wasted is the whole reason this
course exists.

By now you've met the toolkit. An encoder turns a piece of data into a list of numbers
(module 02). Those numbers are a point in representation space, where near means similar
(module 03). A model gets less wrong by measuring its error and being nudged, over and over
(module 04). And in the last module we found the trick that lets a machine learn with no
human standing over it: hide part of the data, ask the model to predict the hidden part
from what's left, and let the data grade its own answer — self-supervised learning (module
05). Hide-and-predict. No labels.

That setup leaves one enormous question dangling, and everything from here turns on it.
When you hide a part and ask the model to predict it — *what, exactly, is the model supposed
to produce?* What counts as the answer? This module walks down the first and most obvious
reply, the one almost everyone reaches for. It's the road our painter took. Next module, we
take the other one.

## Predict the thing itself

Here is the obvious answer, and it is a perfectly good one. You hid a part. The hidden part
*was* something specific — actual pixels, an actual word. So the answer the model should
produce is that exact hidden thing. Put the real stuff back.

Call this **generative prediction** — also called **reconstruction**, because the model's
job is to *rebuild the raw hidden signal* exactly as it was. Blank out a square of a photo,
and the task is to produce the missing pixels, the real colors in the real places. Cover the
next word of a sentence, and the task is to produce that real next word. Whatever got hidden,
generative prediction aims to manufacture it back, in full.

Notice this is the same hide-and-predict loop from module 05 — the hidden piece is the
answer key, no human required. What's new here is the *target*: what the model is being
asked to put in the blank is the raw signal itself, pixel for pixel or word for word.

You've used a system built on exactly this. When a chatbot — an **LLM**, the kind of AI
behind chatbots — writes, it is playing generative prediction at full speed. Show it the
start of a sentence and it produces the actual next **token** (a word or word-piece). Then,
treating what it just wrote as part of the sentence, it produces the next token. Then the
next. Predict a piece, glue it on, predict the next piece from the longer thing — this
one-piece-at-a-time march has a name, **autoregressive**, and it's worth saying once:
*predict the next piece, then the next, then the next.* That steady march of real words is
how an LLM generates a paragraph. It is the painter, filling in blade after blade, except
the blades are words.

(The full, fair JEPA-versus-LLM comparison — where they're alike, where they part ways — is
a later module's job. Here, one line is enough: *this is the road LLMs take.*)

## Where the effort leaks out

So far this sounds not just fine but ideal. If the model can put the real pixels and the
real words back, hasn't it learned the world cold? Here's the catch, and it's the hinge of
the entire course.

Raw signals are stuffed with detail that nothing around it determines.

Look hard at our cut-away corner. Some of what was there is genuinely predictable from the
rest of the photo: it's grass, it's green, it's lit from the same side as everything else,
it gets denser toward the hedge. A good model can call all of that. But the *exact* lean of
each individual blade? The precise scatter of one dandelion's seeds? Those weren't decided
by the scene. They were decided by a gust of wind on one particular afternoon. Study a
million lawns and you still cannot predict that blade, because the rest of the picture
holds no information about it. It is, for prediction purposes, noise.

The cleanest case is a screen of TV static — the snow you'd get on an old set tuned to a
dead channel. Hide a patch of it and try to predict the exact missing dots. You can't. Not
because you're not clever enough, but because there's nothing *to* predict; each dot is its
own little coin-flip, untethered from its neighbors. The only honest, useful thing to say
about that patch is "it's static." Everything past that is effort poured into a hole with
no bottom.

> A guard, because this is easy to overstate: real photos are **not** TV static. Most of a
> picture is richly predictable — that's exactly why prediction can teach a model anything
> at all. The point is narrower and sharper: *some* of the detail in any raw signal is
> unpredictable, and that's the slice that burns effort for nothing.

Now put the two halves together, and the problem that motivates everything ahead comes into
focus. Generative prediction asks the model to reproduce the hidden signal *exactly* — so it
is graded on the unpredictable detail just as strictly as on the meaningful structure. Get
the foliage right but the individual blades wrong, and the reconstruction is still marked
down. So the model, trained to push that error as low as it can (module 04), strains to nail
detail that was never gettable. And a model has only so much room to go around: every scrap
spent memorizing the un-memorizable is a scrap *not* spent learning that this is a lawn
beside a hedge in afternoon light.

A tempting wrong answer: *the more detail a model predicts, the better it must understand
the scene.* It feels obvious — surely a model that paints every blade has grasped more than
one that only says "grass." But it runs backwards. Forcing pixel-perfect targets drives the
model to pour its limited capacity into the noise-like specifics, and the summary it walks
away with — the part you'd actually want to *use* — can come out **worse**, not better.
More detail demanded is not more understanding gained. Often it's less, bought at a higher
price.

## Walking it through: a window, half-covered

Picture a single photo: a window, and through it a garden. Now cover the lower half of that
window with tape, and ask a generative model to reconstruct what the tape hides. Watch where
its effort goes.

**The predictable half — effort well spent.** Plenty of the hidden region is pinned down by
what's still visible. The horizon line continues. The sky stays the sky's color. The fence
that enters from the left almost certainly exits on the right. The lawn below the flowerbed
keeps being lawn. A model that learns to get *these* right has genuinely learned something
about gardens and how scenes hang together. No waste here — this is the good kind of
prediction, the kind that forces real understanding.

**The unpredictable half — effort down the drain.** But generative prediction can't stop
there; it's on the hook for the literal pixels. So it must also produce the exact shape of
each fallen leaf, and the individual flutter of a moth that happened to be mid-flight when
the shutter clicked. None of that is written anywhere in the visible half. The moth could
have been an inch to the left; the leaves could have fallen a thousand ways. The model can
study gardens forever and never predict *this* moth in *this* spot — and yet, graded
pixel-for-pixel, it gets dinged for missing it. So it strains anyway, burning capacity on
detail that was a coin-flip from the start.

Step back and tally it. The model was handed one budget for two jobs: learn the structure of
the scene (worth every penny) and memorize a haze of accidental specifics (a tax on noise).
The second job doesn't just fail to pay off — it crowds out the first, because the budget is
shared. That is the wasted effort, stated plainly: *forcing the prediction of unpredictable
detail spends a limited resource on something that can never be earned back.*

Which sets up the question the next module is built to answer. We've assumed all along that
to fill a blank, you have to produce the raw missing thing — the pixels, the words. But
what if you didn't predict the raw thing at all? What if the answer the model produced
wasn't pixels, but something that quietly leaves the un-gettable detail out of the test
entirely? Hold that question. It's the turn the whole course has been walking toward.

## Check yourself

Sprinkled through, not saved for the end — try each from memory before you open it.

A model reconstructs a blanked-out patch of a brick wall almost perfectly, down to the grit
in the mortar. Has it necessarily learned anything *useful* about walls?

<details><summary>Show answer</summary>

Not necessarily. Reproducing the patch exactly means it nailed both the predictable
structure (rows of bricks, mortar lines) *and* the unpredictable grit — and to do the
latter, it may have spent its capacity memorizing accidental specks rather than learning
what makes a wall a wall. A near-perfect reconstruction can hide a worse, less useful
internal summary, because effort went to detail that doesn't generalize. Pixel-perfect is
not the same as understanding-rich.

</details>

In one sentence: what is "autoregressive" prediction, and where have you already met it?

<details><summary>Show answer</summary>

It's predicting the next piece, then the next, then the next — each new piece produced from
everything so far — and you've met it in LLMs, which generate text by producing one real
token after another. It's the generative road applied to words.

</details>

Why doesn't this waste argument say "detail is useless, ignore all of it"?

<details><summary>Show answer</summary>

Because most detail in a real signal *is* predictable and worth learning — the horizon, the
color of the sky, the way a fence continues. The argument targets only the slice of detail
that nothing in the context determines (the exact lean of a blade, TV static). That slice,
and only that slice, is the wasted effort. Real images aren't noise; they just contain
some.

</details>

## Exercises

Mechanical to conceptual. Each ships with a worked solution — try it before peeking.

**1.** Sort these prediction targets into "mostly predictable from context" versus "largely
unpredictable detail": (a) the color of the sky in the hidden top of a beach photo; (b) the
exact path of a single splash of surf; (c) that a road, entering the frame from the left,
continues to the right; (d) the precise pattern of grain in a close-up of weathered wood.

<details><summary>Show solution</summary>

Predictable: (a) sky color — overwhelmingly fixed by the rest of a beach scene; (c) the road
continuing — scenes are continuous, so this is a safe call. Largely unpredictable: (b) the
exact splash — surf scatters differently every instant, undetermined by the rest of the
photo; (d) the precise wood grain — a near-random texture, the photographic cousin of TV
static. Generative prediction is graded on all four equally; (b) and (d) are where it burns
effort for nothing.

</details>

**2.** A friend says: *"JEPA is just an LLM for images — it predicts the next pixel the way
ChatGPT predicts the next word."* Two things are wrong here. Name them.

<details><summary>Show solution</summary>

First, the *direction*: this describes the **generative** road — producing the raw missing
thing (pixels, words) — which is exactly the road this course is building toward leaving.
The headline difference (next module) is that JEPA does **not** reconstruct the raw signal.
Second, the *mechanism*: "predict the next word" is autoregressive, one-piece-at-a-time
generation, which is how LLMs work — not how JEPA works. Calling JEPA "an LLM for images"
gets it backwards twice: wrong target *and* wrong process. (Both are an LLM's defining
moves, and JEPA is defined partly by not making them.)

</details>

**3.** Someone argues: *"If a reconstruction model and a gist-predicting model are trained on
the same photos, the reconstruction model must end up understanding scenes better — it's
held to a higher standard."* Where's the flaw?

<details><summary>Show solution</summary>

The flaw is reading "higher standard" as "better learning." Being graded on the exact pixels
isn't a higher standard of *understanding* — it's a standard that includes a large chunk
nobody can meet (the unpredictable detail). Chasing that chunk drains the shared, limited
capacity that could have gone to structure, so the reconstruction model can come away with a
*worse* usable summary. A tougher test isn't better if part of it is unanswerable; it just
taxes effort on the unanswerable part. (This is the inversion from the section above:
more-detail-demanded is not more-understanding-gained.)

</details>

**4.** Give an everyday, non-image example of a "blank" that contains both a clearly
predictable part and a genuinely unpredictable part. Say which part a generative ("put the
exact thing back") approach would waste effort on.

<details><summary>Show solution</summary>

Many work. One: a friend is mid-way through telling a familiar joke and you mishear three
words. Predictable: the shape of the setup and roughly where it's heading. Unpredictable:
their *exact* word-for-word phrasing this time around — which filler words, which precise
aside. A "put the exact thing back" approach would strain to recover the precise wording,
much of which was a spur-of-the-moment coin-flip, while the part that actually matters (the
joke's structure) was gettable all along. The wasted effort is the exact-wording chase.

</details>

**5.** TV static and a photo of a forest both contain a lot of fine detail. Why is it fair to
say generative prediction "wastes effort" on parts of the forest photo, but it would be
misleading to call the whole forest photo a waste?

<details><summary>Show solution</summary>

Because the forest photo is mostly *structured*, not noise: trunks rise, branches fork, light
falls from one direction, the canopy thickens upward. All of that is predictable and worth
learning — unlike TV static, where there's nothing under the surface to learn. The waste is
confined to the noise-like slivers inside the forest photo (the exact flutter of one leaf,
the precise speckle of bark). So the forest photo is mostly worth predicting, with pockets of
waste; static is *all* waste. Treating the whole photo as noise would throw out the very
structure that makes learning possible.

</details>

## Recap

Faced with a hidden part, the most natural move is to put the real thing back: the exact
missing pixels, the exact missing words. That's **generative prediction**, or reconstruction
— the road image generators take, and the road LLMs take, marching out real tokens one at a
time. It works, and where the hidden part is predictable it teaches a model something true.
The trouble is the rest: every raw signal carries detail that nothing around it fixes — the
lean of one blade, a screen of static, the precise wording of a line — and a model held to
the exact signal must spend its limited capacity chasing that, too. The instinct that more
predicted detail means more understanding has it backwards. Which leaves a crack of light,
and a question for the next module: what if filling the blank didn't mean producing the raw
thing at all?
