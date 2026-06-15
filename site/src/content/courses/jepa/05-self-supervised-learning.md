---
title: Learning With No Teacher
course: jepa
order: 5
summary: Self-supervised learning — hiding part of the data and predicting it from the rest, so the data labels itself and no human is needed — the foundation that LLMs and JEPA share.
estimatedMinutes: 15
objectives:
  - Distinguish supervised learning (human labels) from self-supervised learning (hide-and-predict).
  - Explain how hiding part of an input manufactures a free prediction target.
  - Identify self-supervision as the common ground between LLMs and JEPA.
prerequisites:
  - 04-how-machines-learn
---

There is a hole in the story we've been telling, and it's time to fall into it.

Last module we watched a system learn. It starts useless, it makes a guess, we measure how
far that guess lands from the right answer — that gap is the **error** — and then the box gets
nudged to shrink the error, over and over, until it stops being so wrong. That loop is the
whole engine of learning. But run your finger back along it and you'll snag on a word we
slipped past: *the right answer.* The error is the distance between the guess and the right
answer. Fine. But where does the right answer come from?

The obvious reply is: a person provides it. Somebody who already knows looks at the photo,
writes down "dog," and hands that to the system to be graded against. And for one whole
branch of machine learning, that is exactly the deal. The trouble is, it doesn't scale to the
thing the first module promised — a system that learns about the world *on its own*, from the
ocean of photos and video and text already lying around, none of it graded by anyone. If every
right answer needs a human to write it down first, you are not learning from the world. You are
learning from a stack of homework that a very tired person had to mark by hand.

This module is about the trick that gets around that. It's the last piece of the from-scratch
toolkit, and it's the one that finally answers *where the right answer comes from* without
hiring anybody.

## Cover the answer, then quiz yourself

You already know the trick, because you've used it to study.

Picture a page of facts — capital cities, say — laid out in two columns, country on the left,
capital on the right. You want to learn them. So you take a sheet of paper and lay it over the
right-hand column. Now you read "France," and before you lift the paper you say "Paris" out
loud. Then you slide the paper down and check. Right or wrong, you just ran one full round of
the learning loop — a guess, and an answer to measure it against — and *nobody quizzed you.*
You made the quiz. You made it out of the page itself.

Here is the move that matters, the one worth slowing down for. The answer you checked against —
"Paris" — was not handed to you by a teacher standing at the front of the room. It was sitting
right there on the page the whole time. You manufactured a test by *hiding* a part of something
you already had, then trying to predict the hidden part from the part you could still see. The
covered word was both the question and its own answer key.

That is the entire idea of this module. Hide a piece of the data; predict it from the rest; the
hidden piece is the answer you grade against. Because the data supplies its own answer, you
need no human to write one down — and so you can do this not with one flashcard page but with
every photo, every paragraph, every hour of video in existence, none of which anyone had to
mark first. The method has a name, and we'll earn it in plain words before we use it.

## Two ways to get a right answer

Let's lay the two arrangements side by side, because the contrast is what matters here and it's
easy to blur.

In the first arrangement, a **human attaches a label.** You collect a pile of photos, and for
each one a person writes down what it is: *this one's a cat, this one's a bicycle, this one's a
sunset.* The label is the right answer; it lives outside the data, glued on by someone who
already knew. The system guesses "cat," gets measured against the human's "cat," and is nudged.
This is **supervised learning** — *supervised* because a person stands behind every answer,
vouching for it. It works, and much of the AI you've met was built this way. Its cost is brutal
and simple: somebody has to label everything, by hand, before any learning can start.

In the second arrangement, **no human is involved at all.** You take a single piece of data and
hide part of it from the system — blot out a patch of the photo, cover the next word of the
sentence. Then you ask it to predict the hidden part from the part still showing. And
now notice what you have for free: the right answer is the piece you hid. You don't need anyone
to write "cat," because you're not asking "what is this" — you're asking "what was under the
patch," and you can just lift the patch and check. The data graded itself. This is
**self-supervised learning** — the system gets its supervision from the structure of the data
instead of from a person.

So the difference is not "with answers" versus "without answers." Both arrangements have a right
answer and measure an error against it, exactly as module 4's loop requires. The difference is
*where the answer comes from*: pinned on from outside by a human, or carved out of the data
itself by hiding a piece of it.

> **A tempting wrong answer:** "Self-supervised" sounds like the system is off on its own with
> no goal, no answer, nobody checking — learning in some free-form, unsupervised way. It isn't.
> There is absolutely a target to predict and an error to shrink; the loop from module 4 runs
> just as before. The only thing that's changed is who produced the answer. A human didn't — the
> data did, by being split into a shown part and a hidden part. No teacher is not the same as no
> test.

## Walking it through: making a quiz out of a sentence

Watch the manufacturing happen, step by step, on something with no labels in sight.

Start with one plain sentence, scooped from a book nobody annotated:

> The cat sat on the warm windowsill in the afternoon sun.

There is no "right answer" attached to this. It's just a sentence. Now we *make* one. Cover the
last word:

> The cat sat on the warm windowsill in the afternoon ___.

We hand the system everything except that last word and ask it to predict what's missing. It
guesses — maybe "sun," maybe "light," maybe, early in training, something useless like "the."
Now we do the thing that costs no human a second of work: we *uncover the word.* The answer was
"sun," and it was there all along. We measure how far the guess fell from "sun" — that's the
error — and nudge the box to do better, just as in module 4. Then we slide the cover to a
different word, or grab the next sentence, and go again.

Multiply that by billions of sentences, and the system is being drilled on an endless,
self-grading quiz that no person ever wrote. The same recipe works on a photo: hide a square
patch and ask it to predict what belonged there, using the rest of the image as the
question and the hidden patch as the answer key. Text, images, video — same move every time.
Hide a part; predict it from the rest; check against the part you hid.

And here is the one beat I owe you before we move on, because you came to this course knowing
JEPA is "different from chatbots" and this is the place where they're secretly the *same.* The
shared starting point is exactly this trick. An **LLM** — the kind of AI behind chatbots —
learns by hiding the next word of a sentence and predicting it, which is precisely the quiz we
just ran. JEPA learns by hiding part of an image or a video and predicting that. Both are
self-supervised; both manufacture their answers by covering up a piece of the data. That common
ground is real, and we won't pretend otherwise. What splits them is not *whether* they hide and
predict, but *what they predict about the hidden part* — the exact missing word versus the gist
of the missing patch — and that split is the road the next several modules walk down. For now,
hold only the shared foundation: hide a part, predict it, no human required.

## Check yourself

A photo of a beach, with no caption or label of any kind, is used to train a system
self-supervised. Where does the "right answer" come from, if nobody labeled the photo?

<details><summary>Show answer</summary>

From the photo itself. You hide a part of it — say, blot out a square patch of the sand — and
ask the machine to predict what was under the patch using the rest of the image. The right
answer is the patch you hid: lift it and check. No human had to write anything down, because the
answer was already in the data; you just covered it up and then uncovered it to grade.

</details>

A friend says: "Supervised learning has right answers; self-supervised learning has none — it's
just the system poking around with no goal." Fix the second half of that sentence.

<details><summary>Show answer</summary>

Self-supervised learning absolutely has right answers and a goal — there's a target to predict
and an error to shrink, the same loop as always. The right answer is the hidden part of the
data. What it doesn't have is a *human* supplying the answer. "No teacher" is not "no test":
the data itself produces the answer by being split into a shown part and a hidden part.

</details>

## Exercises

These are conceptual — still no math — and each one leans on the supervised-versus-self-supervised
split we just drew.

**1.** In your own words, state the one move at the heart of self-supervised learning. What gets
hidden, what gets predicted, and where does the answer to grade against come from?

<details><summary>Show solution</summary>

You hide a part of a single piece of data and ask the model to predict that hidden part from the
part still showing; the answer you grade against is the piece you hid. What makes the trick work
is that the answer comes *from the data itself*, not from a human — so the loop from module 4 (guess,
measure the error, nudge) runs with no person writing down any labels.

</details>

**2.** For each setup, say whether it's supervised or self-supervised, and why:
(a) a person tags ten thousand photos as "cat" or "dog," and the system learns to tell them
apart; (b) the machine covers the last word of millions of sentences and learns to predict the
covered word.

<details><summary>Show solution</summary>

(a) **Supervised** — a human attached the labels ("cat," "dog") from outside the data, and the
machine is graded against those human answers. (b) **Self-supervised** — nobody labeled
anything; the right answer (the covered word) was already in the sentence, manufactured by
hiding a piece of it. The tell is always the same: ask *where the answer came from.* A person?
Supervised. The data, by hiding a part of itself? Self-supervised.

</details>

**3.** A friend insists: "Self-supervised means the machine learns with no objective and
no answer to check against — it's unsupervised, free-form learning." Explain exactly what's wrong
with this.

<details><summary>Show solution</summary>

There is a clear objective and a definite answer to check against — the prediction loop from
module 4 runs in full: a guess, an error measured against the right answer, a nudge to shrink it.
The only thing missing is a *human* who supplies that answer. The answer is manufactured from the
data by hiding a part of it (the hidden part *is* the answer). So "self-supervised" describes
where the supervision comes from, not its absence. Calling it "no objective" or "free-form"
confuses *no teacher* with *no test* — they are not the same thing.

</details>

**4.** Self-supervised learning is what lets these systems train on enormous piles of unlabeled
photos, text, and video. Explain why hiding-and-predicting opens that door, when the supervised
approach can't reach it.

<details><summary>Show solution</summary>

Supervised learning needs a human to write a right answer for every single piece of data before
training can begin — and there aren't enough people, or hours, to hand-label the billions of
photos and sentences and video clips already in existence. Self-supervised learning sidesteps
the bottleneck entirely: any piece of data can be turned into a self-grading quiz just by
covering a part of it, so the answer comes for free, no human in the loop. That's why a
self-supervised system can drink straight from the ocean of raw, unlabeled data, while a
supervised one is stuck with the small, expensive pool somebody already marked.

</details>

**5.** Both LLMs and JEPA are self-supervised. Name the one thing they share at this stage, and
name the one question whose *answer* will end up separating them (you don't need to answer that
question yet).

<details><summary>Show solution</summary>

What they share: both learn by hiding a part of the data and predicting it, with no human labels
— an LLM hides the next word, JEPA hides part of an image or video. The question that will
separate them is *what each one predicts about the hidden part* — the exact missing piece (the
literal next word), or the gist of it. That difference is the spine of the modules ahead; here,
the honest point is just that the *foundation* is the same.

</details>

## Recap

The crack we opened with is now sealed: module 4's loop needed a right answer to measure error
against, and self-supervised learning manufactures that answer out of the data itself. Cover a
part — the next word, a patch of a photo — predict it from the rest, then uncover it to grade.
The hidden piece is both the question and its own answer key, which is what lets a machine learn
from oceans of raw data that no human ever labeled. We set self-supervised learning beside its
older sibling, supervised learning, where a person glues a label onto each piece from outside;
the difference between them is never *whether* there's a right answer, only *who made it.* And we
caught the one honest place where JEPA and the chatbots you already know stand on the same
ground: both hide a part and predict it. The argument that pulls them apart starts next, with the
first of the two roads out of this fork — the one that tries to predict the hidden part exactly,
pixel for pixel and word for word, and discovers it has set itself an impossible chore.
