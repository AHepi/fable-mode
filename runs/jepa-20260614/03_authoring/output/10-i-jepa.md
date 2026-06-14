---
title: I-JEPA: Doing It on Images
course: jepa
order: 10
summary: The image instance end to end — hide several target blocks, encode a visible context block, and predict the hidden blocks' representations — with no pixel decoder and no hand-crafted data augmentations.
estimatedMinutes: 16
objectives:
  - Walk through the I-JEPA pipeline on a single image.
  - Explain why I-JEPA needs no pixel decoder and no hand-crafted augmentations.
  - Connect each I-JEPA piece back to the general JEPA core from module 07.
prerequisites:
  - 07-the-jepa-core
  - 09-collapse-and-the-fix
---

For three modules now we've been building a machine out of ideas. A context encoder, a target
encoder, a predictor; a comparison that lives in representation space, not in pixels; an answer
key that moves slowly so nothing can cheat its way to a constant. It's all been recipe — the
general shape of a thing, with no particular thing yet built to that shape. This module is where
someone actually built it, gave it a name, ran it on real photographs, and published what
happened. The name is **I-JEPA** (Assran et al., CVPR 2023), and everything in it should feel
like an old friend wearing a new coat. Nothing new is being invented here. The abstract core
from module 7 is simply being poured into one concrete mold: images.

So we're not going to re-teach the core. We're going to run a single photo through it, end to
end, and watch each piece we already named do its job — and then point at the two things about
I-JEPA that genuinely surprised people, and say plainly why.

## The jigsaw, with the picture turned face-down

Here is the image to hold for this module. Lay a photograph face-down on a table and cut it into
a grid of squares, like a jigsaw puzzle. Now cover up a handful of the pieces — not one, several,
scattered around — and leave the rest showing. Your job is to look at the pieces you can still
see and, for each covered square, say *what kind of thing belongs there.*

But here's the turn, and it's the whole point of doing this in JEPA-land rather than in ordinary
jigsaw-land. You are **not** trying to redraw the printed picture on each hidden piece. You are
not painting the leaves back in, or guessing the exact shade of the sky. You are predicting each
hidden piece's **gist** — its representation, that list of numbers from module 3 that summarizes
what's there without spelling out every speck of it. The covered square might hold "fur, an ear,
the edge of an eye"; you're predicting *that*, in the only language the machine has, which is
numbers, not the precise grain of the fur.

That distinction is easy to nod at and hard to keep, so let me set the guard right here: **you
predict the gist of the piece, never the printed picture on it.** Hold the jigsaw image the whole
module, but every time the puzzle tempts you to imagine snapping a real photo-fragment into
place, drag yourself back. There is no fragment. There is a list of numbers that says, roughly,
*this region was cat.*

## One image, all the way through

Let's run it. One photograph — say, a dog lying on a lawn — through the I-JEPA pipeline, with
each step tagged by the part of module 7 it's playing.

**Step 1 — cut and choose.** Take the image and divide it into a grid of small patches. From
that grid, pick out the regions we'll work with. One large, connected chunk we'll leave visible:
call it the **context block** — this is the *visible part* from module 7, the part the machine
gets to look at. Then pick several smaller chunks elsewhere in the image and hide them: these are
the **target blocks** — the *hidden parts* we'll try to predict. Crucially, the targets are
removed from what the context encoder is allowed to see, so the context block can't simply
contain the answers. This carving-out by hiding is the **masking** we met in module 9, the same
move that helps keep the machine from collapsing into a lazy constant.

**Step 2 — read the visible part.** Feed the context block to the **context encoder** — the
black box from module 2, a photo-chunk in, a list of numbers out. (The specific kind of encoder
I-JEPA uses is called a **Vision Transformer, or ViT** — the particular machinery under the
black box. We'll name it once and then leave it as plumbing; what it *is* doesn't change the
story, only what it *does*: input in, representation out.) The context encoder turns the visible
chunk into its representation — points in representation space, where near means similar (module
3).

**Step 3 — make the answer key.** Separately, feed each hidden target block to the **target
encoder** — the *slow-moving* one from module 9, the answer key that updates a half-step behind
so nothing can cheat it. It turns each target block into its representation. *These* are the
right answers we'll grade against: not the pixels of the hidden squares, but the gist of each.
And because this encoder is slow-moving and we don't let the lesson reach back and rewrite it
(the stop-gradient from module 9), the answer key stays honest.

**Step 4 — predict, knowing where to aim.** Now the **predictor** does its one job: starting
from the context block's representation, it predicts the representation of each hidden target
block. It isn't predicting blind into the dark — it's *told where each target sits* in the
image, handed the position of the block it's aiming at, and asked, in effect, "given what you can
see and that you're aiming *there*, what's the gist of what's there?" One prediction per hidden
block.

**Step 5 — grade in representation space, and nudge.** For each target, compare the predictor's
guess against the answer key — the target encoder's representation of that block. The comparison
is a **distance** between two lists of numbers (module 3), and that distance is the **error**
(module 4). Training does what it always does: nudge the context encoder and the predictor to
shrink that error, over millions of images, so the guesses creep closer to the answers. The
target encoder, being the slow-moving average, isn't nudged directly — it just drifts along
behind. Round and round, and the machine gets better at predicting the gist of a hidden region
from a visible one.

That's the entire system. Read back over the five steps and you'll notice we introduced *nothing*
that wasn't already in modules 3, 4, 7, and 9. I-JEPA is the general core, instantiated on
images, with one design choice spelled out: cut the image into a visible context block and
several hidden target blocks, and predict the targets' gists.

## Check yourself

In step 4, the predictor is "told where each target block is." Why does it need that, instead of
just predicting one gist from the context and being done?

<details><summary>Show answer</summary>

Because a single image has *several* hidden target blocks in different places, and they hold
different things — one might be grass, another the dog's head, another the fence behind. There's
no single right answer for "the hidden part." The predictor has to aim: given the position of a
particular target, predict *that* block's gist. The location is what tells one prediction apart
from another, so the predictor knows which region it's being asked about.

</details>

## The first surprise: there's no pixel decoder

Here's the thing people kept reaching for and not finding. In I-JEPA there is **no piece that
turns a representation back into an image.** No part of the machine ever paints the hidden squares
back in. Compare it to the generative approach from module 6, the painter forced to reproduce
every blade of grass: that machine *has* to produce raw pixels, because it's graded on whether
the pixels it paints match the pixels that were hidden. To do that it needs an extra stage — a
decoder — whose whole job is to convert an internal summary back into a picture.

I-JEPA carries no such stage. It never converts anything back into a picture, because it's never
graded on pixels — it's graded on representations, list-of-numbers against list-of-numbers, the
comparison living entirely in representation space. The chain stops at the gist and never travels
back down to the grain.

Why is that worth pointing at? Two reasons. First, it's exactly the payoff from module 8 made
concrete: by never having to reproduce pixels, the machine is free to *stay vague* about
unpredictable detail — the precise arrangement of each blade of grass — and spend its effort on
what's actually predictable, the gist. Second, it sharpens a line the course keeps drawing:
**I-JEPA does not generate images.** Ask it to fill the hidden squares and it has nothing to
hand you — no decoder, no painting stage, no picture. It predicts what a hidden region is *like*,
in numbers, and there it stops. If you ever catch yourself picturing I-JEPA dreaming up the
missing pixels, that's the jigsaw metaphor leaking; pull back to the guard.

## The second surprise: no hand-crafted augmentations

This one needs a touch of background, because it's a surprise only against what came before it.

Many earlier ways of teaching a machine about images leaned hard on a bag of human-designed
tricks called **data augmentations**: take one photo and make a fistful of altered copies — crop
it tight, flip it left-to-right, jitter the colors, rotate it — then tell the machine "all of
these are the same thing, learn to treat them alike." The hope is that by forcing it to see a
cropped, flipped, recolored cat as still-a-cat, you teach it what about a cat actually matters.
It works, but notice the cost: a *person* had to sit down and decide, by hand, which
distortions ought to leave the meaning unchanged. Those choices are guesses about what "similar"
means, baked in from outside.

I-JEPA throws that bag out. It uses **no hand-crafted augmentations** — no human-chosen crops,
flips, or color tweaks deciding in advance what counts as the same. The hide-and-predict task
does the work instead. By covering target blocks and asking the machine to predict their gist
from a visible context block, you've already handed it a hard, meaningful problem — and to get
good at it, the machine has to learn what regions of an image *mean*, not just what they look
like up close. The structure of the task teaches it, in place of a human's hand-tuned list of
"these should look the same."

Why does that matter? Because every hand-crafted augmentation is a human guess smuggled into the
machine, and guesses can be wrong or narrow or quietly tuned to one kind of image. Letting the
masking task supply the pressure instead means fewer human assumptions wired in — the machine
learns useful structure straight from "predict the hidden gist from the visible part," which was
the plan all along.

## Check yourself

A friend says: "I-JEPA must use a decoder to redraw the hidden patches — how else could it check
its prediction against what was really there?" What's the flaw?

<details><summary>Show answer</summary>

It checks its prediction against the *target encoder's representation* of each hidden block — a
list of numbers — not against the hidden pixels. The "right answer" was never a picture; it was a
gist. So there's nothing to redraw and no decoder needed: the comparison is list-of-numbers
against list-of-numbers, in representation space. The friend is imagining a pixel-versus-pixel
check, which is the generative setup from module 6, not what I-JEPA does.

</details>

## Exercises

These are conceptual — no math — and lean on the pipeline and the two surprises above.

**1.** Name the four working parts of the I-JEPA pipeline and, in one phrase each, say what each
one does to a single image.

<details><summary>Show solution</summary>

The **context block** (the visible chunk left showing) and the **target blocks** (several hidden
chunks) are carved out of the image by masking. The **context encoder** turns the visible block
into a representation. The **target encoder** — slow-moving — turns each hidden block into the
representation we grade against. The **predictor**, told where each target sits, predicts each
target block's representation from the context. Then the guesses are compared to the answers as a
distance in representation space, and the context encoder and predictor are nudged to shrink it.

</details>

**2.** *A tempting wrong answer:* "I-JEPA fills in the missing parts of a photo, so it's an image
generator like the ones that paint in cropped-out regions." Explain exactly what's wrong.

<details><summary>Show solution</summary>

I-JEPA has no pixel decoder — no stage that turns a representation back into a picture — so it
literally cannot hand you filled-in pixels. It predicts the *gist* (the representation) of each
hidden block and is graded on how close that prediction lands to the target encoder's
representation, entirely in representation space. An image generator does the opposite: it
produces raw pixels and is graded on whether they match the hidden pixels, which needs exactly
the decoder I-JEPA doesn't have. Predicting what a region is *like*, in numbers, is not the same
as painting the region in.

</details>

**3.** Most earlier image methods relied on hand-crafted augmentations (crops, flips, color
jitter) to teach a machine what "similar" means. I-JEPA uses none. Where does the teaching
pressure come from instead, and why might dropping the human-chosen augmentations be a good thing?

<details><summary>Show solution</summary>

The pressure comes from the hide-and-predict task itself: to predict the gist of hidden target
blocks from a visible context block, the machine has to learn what regions of an image *mean*, so
the masking supplies the difficulty that augmentations used to. Dropping the augmentations is
worth something because each one is a human guess about which distortions leave meaning unchanged
— a guess that can be wrong, narrow, or tuned to one kind of image. Letting the task teach
instead bakes in fewer human assumptions.

</details>

**4.** In step 4, why is the predictor *told the position* of each target block? Walk through what
would go wrong if it weren't.

<details><summary>Show solution</summary>

A single image has several hidden target blocks in different spots, each holding a different thing
(grass here, an ear there, sky above). If the predictor only saw the context and got no position,
it would have one input and many different correct answers, with no way to tell which region it's
being asked about — an impossible, contradictory task. Handing it the target's location lets it
aim: "given what I can see, and that I'm aiming *there*, what's the gist of that block?" One
location, one targeted prediction.

</details>

**5.** Map each I-JEPA part back to the general core from module 7 (and the fix from module 9).
Where does the *slow-moving target encoder* show up, and what is it for here?

<details><summary>Show solution</summary>

The context encoder is module 7's context encoder (reads the visible part); the target encoder is
module 7's target encoder (summarizes the hidden part); the predictor is module 7's predictor
(guesses the hidden part's representation from the context's). The comparison-in-representation-space
and the error-as-distance are modules 3 and 4. The **slow-moving target encoder** is module 9's
fix: in I-JEPA it produces the answer keys for the hidden blocks and updates a half-step behind,
with the lesson not allowed to rewrite it (stop-gradient), so the machine can't collapse into
handing back the same constant gist for everything. I-JEPA is the general recipe with images
poured in — not a new idea, the same one made concrete.

</details>

## Recap

We finally watched the machine we'd only described get built and run. I-JEPA takes one image,
keeps a visible context block, hides several target blocks, and — using the context encoder,
slow-moving target encoder, and predictor we already knew — predicts each hidden block's gist
from the visible chunk, grading the guesses as distances in representation space. The jigsaw is
the picture to keep: cover several pieces, predict each one's gist from the rest, and never the
printed picture on the piece. Two things about it are worth carrying forward. It has no pixel
decoder, so it never paints the hidden region back in — it predicts what's there as numbers and
stops; and it leans on no hand-crafted augmentations, letting the masking task, not a human's
list of distortions, teach it what matters. Both are the same lesson from a new angle: predict
the gist, skip the grain. Next we let the image start moving — the same machine, run on video,
where time itself becomes the thing being hidden.
