---
title: World Models, LLMs, and the Bigger Bet
course: jepa
order: 12
summary: The synthesis — how predicting future representations turns JEPA into a "world model" that could plan, how the whole approach stacks up against LLMs, and where the research is honestly headed.
estimatedMinutes: 17
objectives:
  - Explain what a "world model" is and how predicting future representations could support planning.
  - Summarize the full set of differences — and the honest similarities — between JEPA and LLMs.
  - State the open, unproven status of JEPA as a research direction, without overclaiming.
prerequisites:
  - 08-why-latent-prediction
  - 11-v-jepa
---

Before you cross a busy street, you run a tiny film in your head. You don't see it in any vivid way — no pixels, no soundtrack — but something in you plays out *if I step now, that car arrives about there, and that's bad,* and *if I wait three seconds, the gap opens and I'm fine.* You try the futures before you live them, pick the one you like, and only then move your feet. You do this dozens of times a day, for stepping off curbs and reaching for cups and deciding whether the doorway is wide enough. You are forever predicting what happens next and steering by the prediction.

That little film is the last idea of this course, and it's the one the whole thing has been walking toward. The eleven modules behind us built, piece by careful piece, a machine that predicts the gist of what's hidden instead of painting in the missing detail. This module asks what that machine is *for* — what predicting the gist finally buys you — and answers it with a single word we've been circling since the end of the last module: a **world model**. Then it does the thing you've been waiting for since the very first page: it lays JEPA and the chatbots side by side, fairly, and tells you honestly what we do and don't yet know.

## What a world model is

Start from where module 11 left us. V-JEPA, fed clips instead of frozen photos, was forced to pick up how the world tends to *change* — that objects persist while hidden, that motion carries on, that things fall. Take one more step. A system that, given the gist of the world *now*, can predict the gist of the world *a moment from now* — that is what we'll call a **world model**: a model that can anticipate what happens next, in representation space rather than in pixels.

Read that definition slowly, because the obvious picture of it is wrong, and the wrong picture is so tempting it has its own warning.

A world model is **not** a stored map of the world, and it is **not** a saved movie of the world sitting in memory, ready to replay. Nothing is filed away to look up. What a world model holds is an *ability*: given a representation of the current situation, it can produce a representation of the likely next situation. The way you, hearing a glass tip past the edge of a table, don't retrieve a stored video of glasses falling — you just *know*, fast and wordlessly, what's about to happen. The knowing is the model. It predicts; it doesn't store and replay.

And — keeping faith with everything since module 06 — it predicts in the gist, not in the picture. Asked what happens next, a world model of the JEPA kind does not render the next frame of footage. It produces the *representation* of the next moment — the same not-human-readable list of numbers you've worked with all course (module 03), a point in representation space. No pixels are drawn. There's nothing to watch.

### Why that's enough to plan

Here's the payoff, and it's worth the wait. Once a model can predict the next gist from the current one, you can let it *try things out in its head.*

Suppose a machine wants to move a mug from a table to a shelf. It has, right now, a representation of how things stand. It's considering a few actions — *reach left, reach right, lift first then turn.* For each candidate action, the world model predicts the gist of what would follow: *reach left, and the mug's representation drifts toward the floor* (a knock); *lift then turn, and it ends up near the shelf* (good). It compares those predicted futures, all of them in representation space, and picks the action whose predicted gist lands closest to what it wants. Then, and only then, does it move.

That is the street-crossing film, mechanized. Run the movie in your head, in gist-space rather than in pixels, and use it to choose. Crucially, the system never had to *render* any of those futures into watchable video to compare them. It compared gists — distances in representation space, the same near-means-similar measure from module 03 — which is exactly the cheap, meaningful currency module 08 argued for. Predicting at the level of the gist isn't a consolation prize here; it's what makes the planning affordable. You can weigh a dozen imagined futures when each one is a short list of numbers. You could not weigh a dozen rendered films.

> A guard, because the phrase "run the movie in your head" can mislead: the world model is not screening a movie. It simulates a future as a *representation* — a list of numbers — and never renders pixels. "Movie in your head" is a picture of the *function* (try a future, judge it, choose), not of the form (there is no footage).

## The coda: V-JEPA 2

This is no longer just a sketch on a whiteboard. In 2025, a variant called **V-JEPA 2** carried the idea into a robot. Built on the video pretraining you met in module 11 and then given a small dose of action data, an action-conditioned version (**V-JEPA 2-AC**) was used as a world model for planning: shown a goal, a robot arm could pick objects up and set them down — tasks it had never been trained on — by predicting the gist of what its candidate actions would lead to and choosing accordingly. The numbers are striking — pretraining on over a million hours of video, then a comparatively tiny amount of robot data — but the headline for us is the *shape* of it: a JEPA-style model, predicting future representations, used to plan real actions. The film-in-the-head, on a Franka arm. (See the research dossier's V-JEPA 2 entry for the source.)

## The two roads, finally laid side by side

Now the comparison you were promised on the first page. You came in knowing JEPA is "different from the chatbots" without knowing how. Here is the honest version — and it is honest in both directions, because a strawman would teach you nothing.

Start with what they share, because it's more than newcomers expect. An **LLM** (large language model) — the kind of AI behind chatbots — and a JEPA model are *both* trained by self-supervised prediction: hide part of the data, predict the hidden part, no human labels (module 05). Both can be built on the same kind of underlying encoder. So the difference is emphatically *not* "one predicts and one doesn't." Both predict. The fork is over **what** they predict and **where** they check the answer — the same fork module 01 drew with a torn-out page.

An LLM takes the first road, the one module 06 called **generative**. It predicts the actual next **token** — a word or word-piece — and emits it, then predicts the next, and the next (this one-piece-at-a-time habit is what's meant by **autoregressive**). It reconstructs the real signal: the words themselves come out, which is exactly why you can read a chatbot's reply. It fills the blank by manufacturing the missing stuff.

JEPA takes the other road, the one this whole course has been about. It is **non-generative**: faced with a hidden part, it predicts a *representation* of what's missing — the gist — and compares in representation space, never reconstructing the raw pixels or words (module 07). Nothing readable comes out the far end. It fills the blank by reaching for the idea of the missing thing, not the thing.

Laid out plainly:

| | LLM (chatbot) | JEPA |
|---|---|---|
| Trained by | self-supervised prediction | self-supervised prediction |
| What it predicts | the actual next **token** (a word-piece) | a **representation** of the hidden part (the gist) |
| Emits the raw signal? | yes — the words come out, readable | no — nothing is reconstructed |
| Where it compares | in the space of tokens | in representation space (module 03) |
| Fills a blank by | manufacturing the missing stuff | reaching for the idea of it |
| Name for the approach | generative, autoregressive (module 06) | non-generative, latent prediction (module 07) |

Same starting move, two different roads — the same two roads from module 01, now with names earned the long way.

## The honest size of the bet

It would be easy to end on a flourish: *and so JEPA is the future and the chatbots are the past.* That ending would be a lie, and the course has been too careful to spend its trust on one now.

Here is the true state of things. JEPA is a **research bet** — an argument, advanced most forcefully by Yann LeCun, that to get machines closer to human-like understanding we should have them predict *representations* and build *world models*, rather than scale up generative next-token prediction forever. It is the wager that the second road leads somewhere the first one can't. The wager is serious, the early results are real, and it is **not settled.** There are open empirical questions about how far representation-prediction scales, where it shines and where it stumbles, even about exactly why some of its training tricks work at all (we flagged that honestly back in module 09). JEPA has not "beaten" LLMs and has not replaced them. LLMs remain enormously capable at what they're built for — and what they're built for, producing fluent language, is precisely the thing a non-generative model doesn't even attempt. The two are tuned to different jobs.

So hold the comparison the way a careful person holds any live scientific question: two roads, both real, and a genuine open argument about where each one leads. (This world-model idea is itself one piece of a larger blueprint LeCun has sketched for autonomous machines — the rest of that blueprint is a story for another course, and we'll let it stay named rather than taught.)

As for where this particular road runs next: toward models that don't just watch the world but *act* in it — action-conditioned, agentic systems like the V-JEPA 2 coda above, asked to plan and not only to perceive. Whether that road arrives where its travelers hope is, honestly, not yet known. That's what makes it worth watching.

## Check yourself

Try each from memory before you reveal it.

A friend, hearing "world model," pictures a giant stored 3-D map of the world that the system looks things up in. In one sentence, what's wrong with that picture?

<details><summary>Show answer</summary>

A world model isn't a stored map or a saved movie of anything — it stores no scene to look up. It's a learned *ability*: given a representation of the situation now, predict the representation of the situation a moment from now. The knowing-what-happens-next is the model, not a file it consults.

</details>

Both an LLM and a JEPA model are trained by prediction. So what actually separates them?

<details><summary>Show answer</summary>

*What* they predict and *where* they check it. An LLM is generative: it predicts and emits the actual next token (a word-piece) and reconstructs the readable signal. JEPA is non-generative: it predicts a *representation* of the hidden part — the gist — and compares in representation space, never reconstructing the raw words or pixels. Same starting move (self-supervised prediction), two different roads.

</details>

Why does predicting in representation space, rather than in pixels, make planning affordable?

<details><summary>Show answer</summary>

Because to plan, the model imagines the futures of several candidate actions and compares them. Each imagined future is a representation — a short list of numbers — so comparing a dozen of them is cheap (distances in representation space, module 03). If each future had to be rendered into watchable footage first, weighing a dozen of them would be hopeless. The gist is exactly the right level to plan in (module 08).

</details>

## Exercises

A few, conceptual — fitting for the course's close. Attempt each before revealing the solution.

**1.** In your own words, explain how a world model that predicts the next gist could be used to *choose* an action — walk through the steps.

<details><summary>Show solution</summary>

The shape is: (1) start from a representation of the current situation; (2) for each candidate action, have the world model predict the gist of what would follow that action; (3) compare those predicted futures against what you want, all in representation space (near means similar, module 03); (4) pick the action whose predicted gist lands closest to the goal, and only then act. It's the street-crossing film: try the futures in gist-space, judge them, choose. The key point is that every "try" is a cheap prediction of a representation, never a rendered scene — which is what makes trying several of them practical.

</details>

**2.** A tempting wrong answer: *"A world model works by storing a movie of how the world goes, then replaying the relevant clip to see what happens next."* Explain why this misreads what a world model is.

<details><summary>Show solution</summary>

Nothing is stored and replayed. A world model doesn't keep a library of clips to look up; it holds a learned ability to *predict* — given the gist of the situation now, it produces the gist of the likely next situation (and that prediction is a representation, not footage). "Replay the relevant clip" describes a lookup of saved video; a world model generates a fresh prediction in representation space. The misread is the same family as thinking JEPA "imagines a picture" — it deals in gists, lists of numbers, not in scenes to watch.

</details>

**3.** Someone says: *"JEPA and LLMs are basically the same thing — both just predict missing stuff, so the JEPA-vs-LLM business is hype."* Where are they right, and where are they wrong?

<details><summary>Show solution</summary>

They're right that both learn by self-supervised prediction — hide part of the data, predict it, no human labels (module 05) — and can share the same kind of underlying encoder. That genuine overlap is worth granting. But they're wrong that the difference is empty. The two predict *different things in different spaces*: an LLM is generative and autoregressive, emitting the actual next token and reconstructing the readable signal (module 06); JEPA is non-generative, predicting a *representation* of the hidden part and comparing in representation space, with nothing reconstructed (module 07). Same starting move, two different roads — that's a real distinction, not marketing.

</details>

**4.** Your enthusiastic cousin declares: *"So JEPA has beaten the chatbots — the generative approach is finished."* Correct them, fairly, in a few sentences.

<details><summary>Show solution</summary>

A fair correction does two things. First, it denies the overclaim: JEPA hasn't beaten or replaced LLMs. It's a *research bet* — the argument that predicting representations and building world models is a more promising path to human-like understanding than scaling generative prediction — and it has real but unsettled results, with open questions about how far it scales and even about why some of its training tricks work (module 09). Second, it's fair to the other side: LLMs remain enormously capable at producing fluent language, which a non-generative model doesn't even attempt. They're tuned to different jobs. The honest verdict is "two live roads, open argument," not "winner declared."

</details>

**5.** Why is a non-generative model — one that never reconstructs pixels or words — still able to *learn about how the world behaves*? Doesn't it need to produce something to check itself against?

<details><summary>Show solution</summary>

It does check itself — just not against pixels. It predicts a *representation* of the hidden part and measures its error as the distance to the answer key's representation (the slow-moving target encoder, modules 04 and 09), all in representation space. To shrink that error across millions of examples, it has to internalize the regularities that make the gist predictable — what things are, and (from video) how they change. "Producing something to check against" is satisfied by the gist; reconstructing the raw signal was never required, and chasing it would waste effort on unpredictable detail (module 06, module 08). Learning lives in the representations getting better, not in any footage being drawn.

</details>

**6.** *(Stretch.)* Connect the very end of the course back to its very beginning: how is a world model choosing an action by predicting next gists the *same move* as the torn-out page from module 01?

<details><summary>Show solution</summary>

Module 01 set up a fork: when part of something is hidden, you can paint in every missing detail or predict its *gist*. The torn page could be rewritten word-for-word (generative) or summarized (predict the gist). A world model is that fork pointed at the future instead of a hole in a page: the "missing part" is *what happens next*, and JEPA's whole approach predicts the *gist* of it — a representation of the next moment — rather than rendering the next scene. Planning is then choosing among predicted gists. So the machine that crosses the street in its head is doing, about the future, exactly what module 01's reader did with the torn-out page: filling the blank with the idea of the missing thing, not the thing — which is, in five words, predicting the gist, not the pixels.

</details>

## Recap

We began, twelve modules ago, with a torn-out page and a fork: paint in every missing word, or predict the gist of what was lost. Everything since has been the patient construction of a machine that takes the second road — an encoder that turns inputs into representations, a representation space where near means similar, training that nudges error down, self-supervision that needs no human labels, and the JEPA core that predicts the gist of the hidden part and checks it in representation space, on images and then on video. Here at the end, that machine grows up into a **world model**: predict the gist of the *next* moment, and you can try futures in your head and choose between them — the street-crossing film, mechanized, already steering a robot arm in V-JEPA 2. Set beside the chatbots, JEPA is not a winner crowned but a second road taken: same self-supervised starting move, but predicting a representation rather than emitting the next token, the idea of the missing thing rather than the thing itself. Whether that road carries machines as far as its travelers hope is a real and open question — which is the most honest and most exciting place a course on a living idea could end. You came here knowing only that JEPA was "different." You can now say exactly how, and exactly why someone made the bet.
