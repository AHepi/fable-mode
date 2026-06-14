---
title: "V-JEPA: The Same Idea on Video"
course: jepa
order: 11
summary: Carrying JEPA to video — predicting the representations of regions masked across space and time — and why video is an especially rich teacher of how the world behaves.
estimatedMinutes: 15
objectives:
  - Explain how V-JEPA extends masked latent prediction to video (space and time).
  - Describe what video data teaches that still images cannot.
  - Connect V-JEPA back to I-JEPA and the JEPA core.
prerequisites:
  - 10-i-jepa
---

A ball rolls behind a couch and you wait, without thinking about it, for it to come out the other side. A child has barely learned to walk before they expect this — drop a toy and it falls *down*; a person who steps out of frame doesn't cease to exist; a cup tipped past its edge is already, in your gut, on its way to the floor. You were never taught these rules in a classroom. You watched the world move, for years, before you could read a word of it. Things persist. Things fall. Things that vanish behind other things come back.

A still photograph can't show you any of that. Freeze the ball mid-roll and the couch is just a couch and the ball is just a ball; nothing in the frozen frame tells you what happens next. The lesson — *that the ball keeps going* — lives in the **change** from one moment to the next, and a single picture has thrown the change away. To learn how the world behaves, you have to watch it behave. You need time.

That is the whole reason this module exists. In the last module we built **I-JEPA**, which runs the JEPA recipe on still images: blank out several regions of a picture, encode the part that's left, and have the predictor guess the hidden regions' *representations* — their gist — comparing in representation space, never rebuilding the pixels (module 10). Now we hand the same machine a different kind of food: not a frozen frame but a short clip, a fistful of moments in a row. The recipe barely changes. What changes is what the machine can learn from it.

## The recipe travels almost unchanged

Here's the part that should feel like a relief after all the machinery you've assembled. Going from images to video does not mean a new idea. It means the *same* idea, pointed at a longer kind of input.

Walk the pieces across. In I-JEPA you had a **context encoder** reading the visible part, a **target encoder** summarizing the hidden part, and a **predictor** guessing the hidden part's representation from the visible one — the three roles from module 07. **V-JEPA** keeps all three, in the same arrangement. The comparison still happens in representation space, where near means similar (module 03), and never on raw pixels. The target encoder is still the **slow-moving target encoder** — the answer key that updates a half-step behind, the asymmetry that stops the model from collapsing into one constant answer (module 09). It is still **self-supervised**: the clip hides part of itself and grades its own guess, no human labels anywhere (module 05). And there is still no pixel decoder — V-JEPA, like I-JEPA, never tries to paint the missing footage back. It predicts the gist, then checks the gist.

So what *is* different? Exactly one thing, and it's the thing video adds: a clip has a **time** dimension that a photo doesn't. I-JEPA hid blocks across the flat width and height of one image. V-JEPA hides chunks across width, height, **and time** — a region that spans not just a patch of the frame but a stretch of several frames in a row. The hole isn't a square cut out of one picture; it's a box cut out of a little stack of pictures, blanking the same area across a run of consecutive moments.

To read a clip at all, the encoder has to chop it up the way I-JEPA chopped up an image — except now the little pieces it reads are **spacetime patches**: not just "this square corner of the frame" but "this square corner *over this short window of time*." Each patch carries a scrap of *what* and a scrap of *when*. That's the only genuinely new ingredient. Same encoders, same predictor, same slow-moving answer key, same latent-space comparison — fed patches that have a clock attached.

> A guard, because the wording invites the wrong picture: V-JEPA does **not** produce a video you can watch. There's no decoder, no rendering, nothing that comes out as moving footage. It fills the hidden box with a *representation* — a list of numbers, the same not-human-readable summary you've worked with all course — and that's all. We'll come back to this, because it's the single most common thing people get wrong about it.

## A short clip, run through

Make it concrete. Take three seconds of footage: a hand picks up a mug from a table and lifts it toward the edge of the frame.

**Mask a spacetime chunk.** Pick a region and blank it across several frames at once — say, the box where the mug *will be* over the middle stretch of the clip. The early frames (the mug on the table) stay visible; the later frames (the mug near the frame's edge) stay visible; the moments in between, right where the action is, get cut out. A flip-book with a handful of pages torn from the middle.

**Encode the visible part.** The context encoder reads the spacetime patches that survived — the before, the after, the surrounding corners of the masked moments — and turns them into representations, points in representation space (module 02, module 03).

**Predict the hidden chunk's gist.** The predictor takes those and guesses the **representation** of the cut-out box: not the pixels of the mug in motion, but the gist of what was going on there.

**Check in representation space.** Meanwhile the slow-moving target encoder looks at the frames that were actually hidden and produces *their* representation — the answer key. The model's error is the distance between its guess and that key (module 04). Nudge to shrink it, over millions of clips. No footage is ever drawn; only gists are compared.

Notice what filling that particular hole *demands*. To put a sensible gist in the gap, the model's guess has to be consistent with "the mug was on the table, and a moment later it's near the edge." The only way to score well, clip after clip, is to pick up on the regular fact that objects move smoothly, persist while they're hidden, and end up roughly where their motion was carrying them. The hole was designed so that the cheap answer doesn't exist — you can't fill it without leaning on how things tend to change.

## Why video is the richer teacher

This is the real payoff, and it's why anyone bothered to add the time dimension at all.

A still image can teach a model a great deal about *what things are*: this is a dog, that's grass, the light comes from the left. But it is mute about *how things behave*. It can't show you that the dog, a moment from now, will still be a dog and will still be roughly where it was. It can't show you a thing being **occluded** — slipping behind another thing — and then **reappearing**, intact, the same thing as before. It can't show you weight, or momentum, or the plain fact that what goes up tends to come down. All of that is a property of *change over time*, and a single frame has no time in it.

Video does. A clip is change, captured. And so predicting the gist of a masked stretch of a clip quietly forces the model to pick up the regularities that still images can't carry: that objects persist when hidden, that motion continues in roughly the direction it was going, that things fall, that an object behind a couch is the same object when it rolls out the far side. Nobody hands the model these rules. They're simply what you have to internalize if you want to predict the gist of missing moments well — the way you, watching the world as a child, absorbed them without a single lesson.

And those regularities have a name worth flagging now, even though its full treatment is the next module's job. A grip on how the world *tends to change* — enough of a grip to predict what's coming — is the seed of what's called a **world model**: a model that can anticipate what happens next, in representation space rather than in pixels. V-JEPA isn't a finished world model, but learning from how the world moves is the soil one grows in. The last module of the course is where we dig into that, and into what it might let a system *do*. (There's also a newer version, V-JEPA 2, waiting for us there.) For now, hold the thread: video teaches change, and change is the raw material of anticipation.

## Check yourself

Try each from memory before you open it — the struggle is the point.

When V-JEPA goes from images to video, what is the one genuinely new ingredient, and what stays the same?

<details><summary>Show answer</summary>

The one new thing is the **time** dimension: the encoder reads **spacetime patches** (a corner of the frame *over a short window of time*), and the masked region is a chunk spanning width, height, *and* several consecutive frames. Everything else stays: the context encoder, target encoder, and predictor (module 07); the slow-moving target encoder that prevents collapse (module 09); the comparison in representation space, never in pixels; self-supervision with no human labels; and no pixel decoder. Same recipe, fed input that has a clock attached.

</details>

Name one thing video can teach a model that a single still image simply cannot.

<details><summary>Show answer</summary>

Anything about *change over time*: that objects persist while hidden and reappear intact (occlusion), that motion continues in roughly its current direction, that things fall, that a rolling ball comes out the other side of the couch. A still frame freezes the moment and throws the change away, so it can show *what things are* but not *how they behave*.

</details>

The mug clip is masked and the model predicts the hidden box. What, exactly, does it put in the gap?

<details><summary>Show answer</summary>

A **representation** — a list of numbers, the gist of what was happening in the masked moments — which it then compares against the slow-moving target encoder's representation of the frames that were actually hidden. It does *not* put pixels there; it never draws the mug in motion. The whole exchange happens in representation space.

</details>

## Exercises

A few, mechanical to conceptual. Attempt each before revealing the solution.

**1.** Describe, in one or two sentences, how V-JEPA masks a clip differently from how I-JEPA masks an image.

<details><summary>Show solution</summary>

I-JEPA blanks regions across the two dimensions of a single image — patches of width and height. V-JEPA blanks a chunk that also spans **time**: the same area cut out across a run of several consecutive frames, so the hole is a box through a short stack of moments, not a square in one picture. The encoder correspondingly reads spacetime patches (a place *and* a short window of time) rather than flat image patches.

</details>

**2.** A friend says: *"So V-JEPA is basically Sora — you give it part of a video and it generates the rest of the video for you to watch."* What's wrong with this?

<details><summary>Show solution</summary>

It gets the central fact backwards. V-JEPA is **non-generative**: it has no pixel decoder and never produces footage you can watch. Faced with a masked stretch of a clip, it predicts a **representation** of the missing moments — their gist, a list of numbers — and compares that against the answer key in representation space (module 09). A Sora-style video generator does the opposite: it paints the actual missing pixels frame by frame, the generative road from module 06. "Give it part of a video and watch it finish the video" describes a generator; V-JEPA finishes the *gist*, and there's nothing to watch.

</details>

**3.** *(Targets the same trap from the other side.)* Someone protests: *"But it must produce video somewhere — otherwise how could it have 'learned about motion'? You can't learn how things move without showing the movement."* Untangle this.

<details><summary>Show solution</summary>

Producing video and learning about motion are two different things, and V-JEPA does only the second. It learns about motion by being **trained on** real clips — change captured — and by being forced, again and again, to predict the gist of masked spacetime chunks. To fill those holes well it has to internalize how things tend to change (objects persist, motion continues, things fall). That learning lives inside the encoders as better representations; it never has to be rendered back into watchable footage to count. Watching the world and re-drawing the world are separate acts — V-JEPA does the watching, not the drawing.

</details>

**4.** Explain why the *time* dimension is what makes video a richer teacher of world structure than a pile of still photos, even a very large pile.

<details><summary>Show solution</summary>

Because the lessons that matter for a world model — persistence, occlusion-and-reappearance, momentum, falling — are all facts about *change*, and change only exists across time. A still photo, no matter how detailed, captures a single instant and so can teach *what things are* but never *how they behave*. A thousand unrelated photos is still a thousand frozen instants. A clip, by contrast, holds consecutive moments, so predicting the gist of a missing stretch forces the model to pick up the regularities that link one moment to the next — exactly the regularities a static collection can't show.

</details>

**5.** *(Stretch.)* In the mug clip, why is the cut-out hole deliberately placed over the *middle* moments of the action (with the before and after left visible), rather than, say, over an empty corner of the table? What would go wrong if the masked region carried no real change?

<details><summary>Show solution</summary>

The point of the hole is to make the model lean on how things change. Masking the middle of the action — mug on the table before, mug near the edge after — means the only way to put a sensible gist in the gap is to be consistent with the motion bracketing it, which forces the model to absorb persistence and smooth motion. Mask an empty, unchanging corner instead and the gist of the gap is trivially "more of the same table" — predictable from the visible part without learning anything about how the world moves. A hole with no change in it teaches nothing about change; the masking has to land where the action is for the difficulty to do its work (a cousin of the desirable-difficulty idea: an easy hole is a wasted one).

</details>

## Recap

V-JEPA is I-JEPA with a clock. The three roles, the slow-moving answer key, the latent-space comparison, the absence of any pixel decoder — all of it carries over from the image case unchanged; the one new ingredient is **time**, baked into spacetime patches and into holes that span several frames at once. That small change buys something large. A still image can say what the world *is*; only video can show how it *behaves* — things persisting, falling, slipping out of sight and coming back — and a model forced to predict the gist of missing moments has no choice but to drink in those regularities. That hard-won sense of how the world tends to change is the seed of a **world model**, and it's the bridge into the last leg of the course: what such a model might let a machine anticipate, how the whole approach stacks up against the chatbots you started out comparing it to, and where the honest edges of this bet still lie.
</content>
</invoke>
