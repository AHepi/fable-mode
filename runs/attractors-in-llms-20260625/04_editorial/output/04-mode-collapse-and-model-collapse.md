---
title: Mode Collapse and the Collapse It Isn't
course: attractors-in-llms
order: 4
estimatedMinutes: 20
summary: After alignment a model can keep giving the same few safe answers, which is reversible at decoding time and must not be confused with model collapse, the training-loop decay of the weights themselves.
objectives:
  - Define mode collapse as inference-time concentration on a few high-probability modes.
  - Explain how RLHF sharpens the distribution toward boilerplate.
  - Distinguish mode collapse (one model, inference-time, reversible) from model collapse (multi-generation training on synthetic data, weights degraded).
prerequisites: ["02-generation-as-a-loop", "03-the-repetition-trap"]
---

Two failures in the field carry almost the same name, and people swap them constantly. One is called **mode collapse**, the other **model collapse**. They sound like typos of each other. They are not. One happens to a single model while it is writing for you, costs you nothing but variety, and vanishes the moment you turn a knob. The other happens to a model's weights over rounds of training, eats the rare cases first, and no decoding trick can undo it. Same word, opposite end of the stack, and the wall between them is the one thing worth never mixing up again.

Start with the one you have probably already met. Ask an aligned chat model for "a creative opening line for a story," then ask nineteen more times. You will get twenty openings, and they will be siblings: the same wind-swept moor, the same "Little did she know," the same tidy three-clause rhythm. Ask any factual question and the answer opens "Certainly! Here's..." and closes with a safety caveat you did not request. The model is not broken. It is fluent, helpful, and on topic. It has simply stopped reaching for the unlikely, and keeps handing you the few responses it considers safest.

## Mode collapse as an output-space attractor

In module 3 we watched argmax decoding chase the most probable token and lock into a literal loop, the same clause over and over. That was the likelihood trap working at the scale of single tokens. Mode collapse is the same gravity acting on whole responses. Picture the next-token distribution from module 2, but zoomed out to a distribution over entire answers. A few answer-shapes carry most of the probability mass, and the decoder keeps landing on them. The variety is still in the model's head as low-probability options, but generation rarely visits it.

Why does the mass pile up so narrowly? Two forces stack.

The first you already know. Maximization decoding, greedy and its relatives, walks toward high probability by construction, so it favors whatever shapes the model rates likeliest. That alone concentrates output.

The second is alignment. Reinforcement learning from human feedback, the RLHF you met as a fine-tuning step, trains a reward model to score responses by human preference, then pushes the policy to chase that reward. Human raters reliably prefer answers that are polite, structured, hedged, and helpful, so the reward gradient runs straight toward one house style. The post-RLHF model learns to put its mass there. The boilerplate is not an accident the aligners failed to catch. It is the optimum they pointed at. The "Sure! Here's a bulleted, caveated answer" template is what winning the reward looks like, generation after generation, and the price is diversity. Measured against the base model it was tuned from, the aligned model's outputs are measurably less varied. Exactly how much less depends on the model, the metric, and the study, so hold that as a direction, not a fixed number.

This is the shape worth carrying: mode collapse concentrates probability onto a few modes of *one* model, *right now*, while it generates. Nothing has been damaged. The knowledge of the rare openings still sits in the weights. You are just not sampling it.

## Definition (Mode collapse)

**Mode collapse** is an inference-time loss of output diversity: a single model concentrates its generation on a few high-probability modes of its output distribution, producing similar responses across many prompts. It is a property of where probability mass sits and which of it the decoder selects, not of the weights' underlying knowledge, and it is reversible by changing the decoding procedure or the prompt without retraining.

Read the definition against the picture. "A few high-probability modes" is the handful of answer-shapes carrying the mass, the twenty sibling openings. "Inference-time" pins when it happens: while the trained model writes, not while it trains. "Reversible by changing the decoding procedure or the prompt" is the part that matters most for telling it apart from its namesake. Raise the sampling temperature $\tau$ from module 2, sample instead of taking the argmax, or rewrite the prompt to ask for something off the beaten path, and the rare modes come back, because they were never gone. The fixes themselves are module 8's territory. Here the point is only that the door is unlocked from the inside.

<details><summary>Check yourself: where does the lost diversity go?</summary>

When an aligned model gives you the same templated answer twenty times, has it *forgotten* the more unusual responses?

No. The unusual responses are still representable. Their probability has been pushed low by the maximization decoder and the RLHF-sharpened distribution, so the generator rarely selects them, but the weights still encode them. That is exactly why turning up temperature or changing the prompt recovers the variety: you are reaching back into mass that was always there.

</details>

## The collapse that does damage the weights

Now the dangerous twin, and a different image for it. Run a document through a photocopier. Photocopy the copy. Photocopy *that*. Each pass adds a little smear and drops a little faint detail, and after enough generations the fine print is gone and the page is a gray ghost of the original. Nobody touched the first document. The loss lives entirely in the chain of copies feeding each other.

That is **model collapse**, and it is a training-loop failure, not a decoding one. Shumailov and colleagues gave it its sharp form in *Nature* in 2024. Train a model. Use it to generate a pile of synthetic text. Train the *next* model mostly on that synthetic pile instead of fresh human data. Repeat for several generations. What happens is not random degradation. The tails go first. Rare words, unusual constructions, minority cases, the long thin edges of the real distribution, are under-represented in any finite sample a model emits, so the next model sees fewer of them, learns to assign them even less mass, emits still fewer, and the next model sees fewer again. The error compounds across generations. Early on you lose the tails; eventually the whole distribution narrows toward a low-variance blob of the most common stuff, and the text drifts toward repetitive near-nonsense.

Recall module 2's outer loop, where a whole turn of output gets fed back as the next input. Model collapse is that outer loop running at a monstrous scale. The thing fed back is not one response into one conversation. It is an entire generation's output becoming the next generation's *training corpus*. The self-conditioning that drives mode collapse and repetition lives inside a single forward run of generation. Model collapse lives across whole training runs, each model conditioning the existence of the next. That is why no temperature setting saves you. There is no decoder to adjust. The damage is baked into the weights of $\text{model}_n$ by the time you load it, the way the gray photocopy carries its losses no matter how carefully you scan it now.

## The distinction, side by side

Both failures narrow what comes out of a model. That shared symptom is exactly what makes them easy to confuse, so pin them against each other on the axes that actually differ.

| | **Mode collapse** | **Model collapse** |
|---|---|---|
| Which layer of the stack | Decoding / inference | Training loop |
| When it happens | While one trained model generates | Across many rounds of training |
| How many models | One | A chain, $\text{model}_1, \text{model}_2, \ldots$ |
| What degrades | Which modes get selected (mass placement) | The weights themselves |
| Root cause | Maximization decoding plus RLHF sharpening toward a preferred style | Recursive training on synthetic / self-generated data; rare tails vanish |
| Reversible? | Yes, change the decoder or the prompt, no retraining | No, the knowledge is gone from the weights |
| The image | (no metaphor; plain concentration of mass) | A photocopy of a photocopy |
| Owning source | Spread across alignment work; magnitude varies | Shumailov et al., *Nature* 631 (2024) |

The single line to keep: **same word "collapse," opposite layer of the stack.** Mode collapse is a decoder over-selecting a few modes of an intact model and is undone at the sampler. Model collapse is the training loop eating its own tail across generations and leaving degraded weights behind. If a proposed fix is "turn up the temperature," the problem was mode collapse. If turning up the temperature changes nothing because the model never knew the rare cases in the first place, you are looking at model collapse.

<details><summary>Check yourself: name the collapse</summary>

A company fine-tunes its assistant for a year using mostly transcripts of its *previous* assistant talking to users, with little fresh human-written data added. Over successive versions the assistant's answers get blander and lose track of uncommon topics, and raising the temperature does not bring the lost range back. Which collapse is this, and what is the giveaway?

Model collapse. Two tells. First, the degradation accumulated *across versions of the weights* trained on a prior model's output, the recursive synthetic-data loop, not within a single decoding run. Second, and decisively, raising temperature does not recover the lost material, which means the knowledge is gone from the weights rather than merely under-sampled. The tempting wrong answer is mode collapse, because "bland, repetitive, low-diversity output" is its signature too. But mode collapse is reversible at the sampler, and here it is not, so the symptom alone cannot settle it. The reversibility test does.

</details>

## Exercises

**1. (Mechanical.)** State, in one sentence each, the layer of the stack and the reversibility of mode collapse and of model collapse.

<details><summary>Show solution</summary>

Mode collapse lives at the decoding/inference layer and is reversible without retraining, by changing the decoder (sampling, higher $\tau$) or the prompt. Model collapse lives in the training loop, across generations of weights trained on synthetic data, and is not reversible by decoding because the weights themselves have lost the information.

</details>

**2. (Mechanical.)** Why does RLHF, an alignment step meant to make a model *more* helpful, end up narrowing its outputs?

<details><summary>Show solution</summary>

RLHF trains a reward model on human preferences and pushes the policy to maximize that reward. Human raters consistently prefer one band of responses, polite, structured, hedged, and helpful, so the reward gradient runs toward a single house style. The model concentrates mass there. The boilerplate is not a failure of alignment; it is the optimum the reward defined. Helpfulness and diversity were traded against each other, and the reward bought helpfulness.

</details>

**3. (Conceptual.)** You meet a model whose every "creative" answer is a near-duplicate of the last. Describe a single test that tells you whether you are looking at mode collapse or model collapse, and say what each outcome of the test means.

<details><summary>Show solution</summary>

Raise the sampling temperature (and/or rewrite the prompt) and look at whether the variety returns. If the rare, off-template responses come back, the mass was always in the weights and you were merely under-sampling it: mode collapse, reversible at the sampler. If nothing you do at decode time recovers the lost range, the weights no longer encode it: model collapse, baked in during training. The test is reversibility, because that is the one axis on which the two genuinely differ. The tempting mistake is to read "low diversity" as automatically meaning model collapse; the symptom is shared, so the symptom cannot decide it.

</details>

**4. (Conceptual.)** Model collapse loses the *tails* of the distribution first, before the bulk. Explain why the tails are the first casualties, and connect it to module 2's outer loop.

<details><summary>Show solution</summary>

Rare events, the tails, are under-represented in any finite sample a model emits, simply because they are rare. When the next model trains mostly on that emitted sample, it sees fewer tail cases than the true distribution holds, learns to assign them less probability, and so emits fewer still. Each generation thins the tails further while the common bulk survives, until late collapse narrows even that. This is module 2's outer loop, output fed back as the next input, scaled up so that a whole generation's output becomes the next generation's training corpus. The feedback that merely shapes one conversation becomes the feedback that reshapes the weights, generation after generation.

</details>

**5. (Stretch.)** Someone proposes "just always decode at high temperature" as a universal cure for both collapses. Where does this work, where does it fail, and why?

<details><summary>Show solution</summary>

It addresses mode collapse, at a cost. High temperature flattens the distribution so the decoder stops over-selecting the few dominant modes, which is exactly the reversible-at-the-sampler property mode collapse has. The cost is coherence and reliability, since flattening also lifts genuinely bad continuations; that tradeoff is module 8's subject. Against model collapse it does nothing. There the rare cases are absent from the weights, so there is no mass to flatten toward. You cannot sample what the model no longer represents. The proposal mistakes a training-loop problem for a decoding one, which is the precise confusion this module exists to prevent.

</details>

## Recap

Mode collapse and model collapse share a word and almost nothing else. Mode collapse is one model, at decode time, concentrating its output onto a few high-probability modes, sharpened there by maximization decoding and by RLHF's pull toward a preferred style, and it lifts the instant you change the sampler or the prompt because the variety was only under-sampled, never lost. Model collapse is the training loop, generation after generation, learning from synthetic data until the rare tails vanish and the weights themselves degrade, a photocopy of a photocopy with no decoder to undo it. The reversibility test sorts them every time: if a turn of the sampler brings the variety back, the weights were never the problem.
