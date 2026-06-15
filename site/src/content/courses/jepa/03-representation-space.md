---
title: A Place Where Similar Things Sit Together
course: jepa
order: 3
summary: What the encoder's list of numbers means — a point in "representation space," where similar inputs land close together and distance measures how different two things are.
estimatedMinutes: 16
objectives:
  - Define a representation (embedding) as a point that summarizes an input.
  - Explain how distance in representation space encodes similarity.
  - Judge whether two given inputs land near or far in representation space, and say why.
prerequisites:
  - 02-the-black-box
---

Two photos of the same cat, taken a minute apart. In one, the cat is in warm lamplight;
in the other, harsh blue daylight from a window. Pixel by pixel, those two photos are
wildly different — nearly every color value has shifted, the shadows fall in new places,
a careful comparison of the raw numbers would call them strangers. And yet you, glancing
at both, see one thing: the same cat. Your eye throws away the lighting and keeps the cat.

That gap — between how different two things *look* in their raw numbers and how *alike*
they really are — is the gap the last module left open. We ended with the encoder: photo
in, a list of numbers out, like `[0.81, 0.04, 0.55, ...]`. I asked you to hold off on what
those numbers *mean*. This module is the answer, and it is the hinge the rest of the course
swings on — almost everything later is a new use of the one idea we build here, so it is
worth getting under your skin rather than merely into your notes.

Here is the whole answer in a sentence, which we will then earn slowly: **the numbers don't
mean anything one at a time — they mean something all together, by where they put the input
relative to everything else.** The two cat photos land on lists that sit *close together*,
lighting and all, because the encoder from module 02 was built to keep what they share and
let go of what they don't.

## A space, and what "close" buys you

Forget machines for a moment and think about a map.

On a map of your country, every city is a dot. The dots aren't placed at random. Two cities
near each other on the map are near each other in the world; two cities on opposite edges of
the map are a long drive apart. The map's whole usefulness is that one rule: *distance on the
paper stands for distance in the world.* You can answer "which two cities are closest?" without
ever leaving your chair, just by looking at the dots.

Now swap the example for something that has nothing to do with geography. Imagine a great open
floor — call it a **space of foods** — and your job is to place every food in the world somewhere
on it, by one rule only: **similar foods go close together, different foods go far apart.** A
lemon and a lime end up nearly on top of each other. A lemon and an orange sit a little apart —
all citrus, but not the same. A lemon and a grilled steak end up clear across the room. Nobody
wrote "sour" or "citrus" on the floor. There are no labeled regions, no signposts. And yet the
floor is now full of meaning, because you can *read similarity straight off the distances.* Show
me where a new mystery fruit landed, and without being told its name I can tell you it's
citrus-ish — because of its neighbors.

That floor is the idea. A **representation space** is exactly this: a space where every input
gets placed as a single point, positioned so that similar inputs land near each other and
different inputs land far apart. The point standing in for one input — its place on the floor —
is the encoder's list of numbers. We have a name for that list, finally: a **representation**
(you'll also hear it called an **embedding**; we'll say *representation* from here on). It is
the input's address in the space.

So our two cat photos, different as their raw pixels are, get placed by the encoder onto two
points almost on top of each other — neighbors, like the lemon and the lime. A photo of a dog
lands somewhere nearby but clearly apart. A photo of a fire truck lands across the room. The
encoder isn't labeling anything. It's *positioning* — and the positions are the meaning.

## From a list of numbers to a point

We have two pictures now — a list of numbers, and a point on a floor — and they need to become
one thing in your mind, because they *are* one thing. Let's bridge them carefully, piece by
piece.

Take the food floor and put a grid on it, like a sheet of graph paper. Now every point is just
two numbers: how far right, how far up. The lemon might sit at `[2, 7]`; the lime, right beside
it, at `[2.1, 6.8]`; the steak, far away, at `[9, 1]`. **A point on the floor and a short list
of numbers are the same thing** — the list is just the point's coordinates. That is the whole
trick of turning a space into numbers, and it runs in reverse too: hand me any list of numbers
and I can read it as a location.

So when the encoder hands back `[0.81, 0.04, 0.55, ...]`, read that list as **coordinates** — an
address that drops the input onto a single point in the representation space. The cat photo's
list and a near-identical second-cat list are two addresses a short walk apart. The fire truck's
list is an address on the far side of town.

And now the second half of the bridge: **distance.** Two cities close on the map have
coordinates that are nearly the same; two cities far apart have coordinates that differ a lot.
Same here. The closeness of two inputs is just **how far apart their two lists of numbers are** —
the lemon's list and the lime's barely differ; the lemon's list and the steak's differ a great
deal. We'll call that gap the **distance** between two representations, and you already have the
right intuition for it from the map: small distance means similar, large distance means different.
No formula needed. The plain idea — *how far apart are these two number-lists* — is the whole of it.

## Definition (Representation and representation space)

A **representation** of an input is the list of numbers the encoder produces for it, understood
as the **coordinates of a single point** that stands in for that input.

A **representation space** is the space those points live in, arranged so that **the distance
between two points measures how similar their inputs are**: similar inputs land at a small
distance (close together), dissimilar inputs at a large distance (far apart).

The meaning of a representation is **relational** — it lives in *where the point sits relative
to the others*, not in any single number and not in any label, because there are no labels.

## The map metaphor, and exactly where it lies to you

A good map earns its keep, but this one will mislead you in two specific ways if you let it, so
let's nail down the guard before we lean on the picture any further.

**A map is two-dimensional; a representation space has many dimensions.** On paper, a point needs
just two numbers — right and up. But the encoder's list isn't two numbers long; it's hundreds or
thousands of numbers long. That means the real space has hundreds or thousands of "directions,"
far more than the two you can draw. You can't picture that, and you don't need to. Everything you
*do* need still holds: each input is one point, and any two points are some distance apart. The
2-D floor is a faithful cartoon of that — just remember the real thing is roomier than any sheet
of paper, which is precisely what lets it keep so many kinds of similarity straight at once.

**A map has labels; a representation space has none.** Your country map prints "Chicago" next to
the dot and shades the lakes blue. The representation space prints nothing. There is no word
attached to any point, no region stamped "citrus," no axis that means "sourness." The *only*
structure in the space is which points are near which. That's the hard, beautiful part: meaning
with no legend. You can't walk up to a single point and read off what it is. You can only compare
it to others and ask *what does it sit near?*

Hold onto that second guard, because it's the most counterintuitive thing in the module, and the
next two sections are built to drive it home.

## Worked example: placing five inputs

Let's actually reason about near and far. Suppose we run five photos through the encoder from
module 02 and get five representations — five points in the space. The photos are:

1. a tabby cat in warm lamplight,
2. the *same* tabby cat in cold daylight,
3. a different cat (a black cat) outdoors,
4. a golden retriever,
5. a red fire truck.

Where does each point land relative to the others? Reason it through:

- **Photos 1 and 2** are the same cat under different lights. Their *pixels* are very different
  (the whole color cast changed), but a good encoder keeps "what the thing is" and discards
  "how it happened to be lit." So their two points sit **very close** — the smallest distance of
  any pair here.
- **Photo 3**, another cat, lands **near** 1 and 2 but not on top of them: still a cat (small-ish
  distance), but a different individual, color, and setting (not zero distance).
- **Photo 4**, the dog, lands **further** from the three cats. A dog shares a lot with a cat — four
  legs, fur, a pet on a couch — so it's not across the room, but the distance is clearly larger
  than cat-to-cat.
- **Photo 5**, the fire truck, lands **far** from all four animals. Almost nothing in common, so
  the largest distances in the group are between the truck and anyone else.

Notice what just happened. We ranked the pairs — cat-to-same-cat closest, then cat-to-other-cat,
then cat-to-dog, then anything-to-truck — **purely by similarity of the things**, and never once
by similarity of the raw pixels. In raw pixels, the two photos of the *same* cat (1 and 2) might
sit further apart than a cat and a dog photographed in matching light. The representation space
deliberately scrambles that. **It is not a space of pixels. It is a space of what things are.**
That single sentence is the one to carry out of this module.

## Check yourself

Two photos of the *same* cat — one in warm light, one in cold light — look very different pixel
by pixel. In the representation space, do their two points sit close together or far apart? Why?

<details><summary>Show answer</summary>

**Close together.** Distance in representation space measures how similar the *inputs* are as
things, not how similar their raw pixels are. Both photos are the same cat, so a good encoder
places them at nearly the same point and lets the lighting difference fall away. The big pixel
difference is exactly the kind of detail the space is built to ignore.

</details>

A friend says: "Great — so the third number in the list, `0.55`, must be the one that means
'cat.'" Gently, what's the mistake?

<details><summary>Show answer</summary>

No single number "means" anything on its own, and none of them is a hidden word like "cat."
The meaning is **relational**: it lives in where the point sits relative to other points
(which inputs it's near, which it's far from), not in any one coordinate. Asking which number
means "cat" is like asking which single coordinate of Chicago means "Chicago" — the question
mistakes a position for a label.

</details>

## Exercises

**1.** In one or two sentences, state what the *distance* between two representations tells you,
and what a *small* distance means.

<details><summary>Show solution</summary>

The distance between two representations is how far apart their two lists of numbers are, read as
points in the representation space; it measures how similar the two inputs are. A small distance
means the inputs are similar (the points are close); a large distance means they're different
(the points are far apart). No formula is needed — "how far apart are these two number-lists" is
the whole idea.

</details>

**2.** Place these four inputs in a representation space and rank the pairs from closest to
farthest, with a one-line reason for each: a violin, a cello, an acoustic guitar, a kitchen
blender. (There's no single "correct" set of numbers — reason about similarity.)

<details><summary>Show solution</summary>

A sensible ranking, closest first: **violin–cello** (both bowed string instruments, very alike) →
**violin–guitar** and **cello–guitar** (all string instruments, but the guitar is plucked, so a
bit further) → **anything–blender** (a kitchen appliance shares almost nothing with the
instruments, so those are the largest distances). The exact numbers don't matter; what the
exercise checks is that you ranked by *how alike the things are*, putting the two bowed strings
nearest and the odd-one-out blender farthest from everything.

</details>

**3.** *A tempting wrong answer:* "Two photos that look almost identical pixel-for-pixel must
land at almost the same point; two photos with very different pixels must land far apart." Why is
this not reliable?

<details><summary>Show solution</summary>

Because representation space is **not** pixel space (this is the central point of the module).
The encoder positions inputs by *what they are*, not by their raw color values. So two photos
with very different pixels — the same cat in warm light and in cold light — can land very close,
because they're the same thing. And in principle two pixel-similar photos of genuinely different
things can land apart. Pixel-similarity and representation-distance answer different questions;
the whole reason the space is useful is that it ignores the pixel-level differences that don't
matter and keeps the differences that do.

</details>

**4.** Your friend is sure that if they could just read the encoder's list — say
`[0.81, 0.04, 0.55, 0.55, 0.12]` — they could decode what the photo is, the way you'd read a
caption. Explain why you can't, and what you *can* do with that list instead.

<details><summary>Show solution</summary>

You can't read it because a representation isn't human-readable: there are no labels in the space,
no axis that means "sourness" or "cat-ness," and no single number that stands for a word. The
meaning is relational, not legible — that is the central lesson here. What you *can* do is
**compare** it to other representations:
measure the distance from this list to the list for a known cat photo, a known dog photo, a known
truck photo, and see which it sits nearest. The list answers "what is this near?", never "what
does this say?" — and "what is this near?" turns out to be enough to be remarkably useful.

</details>

**5.** *(Stretch.)* Suppose someone builds a lazy encoder that hands back the *exact same* short
list for every photo it ever sees. Every input lands on the same single point. What has gone
wrong, in terms of distance and similarity — and is such a space useful?

<details><summary>Show solution</summary>

If every input lands on the same point, then the distance between any two representations is
zero — the space is claiming that *everything is identical to everything else*. That's plainly
false (a cat is not a fire truck), so the space carries no usable information: you can no longer
tell similar inputs from different ones, because there's no near-versus-far left to read. A useful
representation space has to *spread inputs out* so that distance can do its work. (Keep this image
in your pocket — collapsing everything onto one point is a real failure that a much later module
has to actively prevent. You've just met the bare bones of it.)

</details>

## Recap

The encoder's list of numbers finally has a meaning, and it isn't the meaning most people reach
for first. No single number is a hidden word, and the list isn't a caption you can read. Instead,
each list is an **address** — coordinates that drop an input onto one point in a **representation
space**, a space arranged so that the **distance** between two points tells you how similar their
inputs are: same cat in two lightings, nearly the same point; cat and fire truck, across the room.
The meaning is relational, sitting in the neighborhoods, not in any label — which is why this is a
space of *what things are*, never a space of raw pixels. That distinction is the keystone the rest
of the course leans on: every time a machine ahead of us predicts or compares, it will be moving
and measuring points right here, on this floor.
