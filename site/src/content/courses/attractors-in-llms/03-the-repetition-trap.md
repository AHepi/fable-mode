---
title: The Repetition Trap
course: attractors-in-llms
order: 3
summary: "Repetition loops are a fixed point in token space, and they emerge not from a weak model but from the training objective itself: the most probable text is not human text."
estimatedMinutes: 22
objectives:
  - Identify a repetition loop as a fixed point or short cycle of the generation map.
  - Explain the likelihood trap, why argmax/greedy decoding produces degenerate text.
  - Distinguish the likelihood trap (a property of the distribution) from exposure bias (a train/test mismatch).
  - Explain why repeated text is assigned high, not low, probability by the model.
prerequisites:
  - "01-what-is-an-attractor"
  - "02-generation-as-a-loop"
---

Here is a transcript. The prompt was open-ended, the model was a competent one, and the decoder was told to take its single most confident next token at every step:

```
The tower stood at the edge of the city, and the city was the city
was the city was the city was the city was the city was the city
was the city was the city was the city was the city was the...
```

Nothing broke. No bug fired, no token budget ran out early, no corrupt weight leaked in. The model did exactly what it was built to do, and this is the output. A second prompt, a chat-style one, lands in a different groove:

```
I don't know. I don't know. I don't know. I don't know. I don't
know. I don't know. I don't know. I don't know. I don't know.
```

These are not rare pathologies you have to hunt for. Point greedy or beam decoding at an open-ended prompt and degeneration like this is the *common* outcome, documented by Holtzman and colleagues in 2020 as the curious case of neural text degeneration. The word "curious" is earned, because the natural reaction is exactly backwards. It looks like a failure of competence. It is the opposite: the model is so confident in this text that it will not leave it.

## A loop is a fixed point in token space

Generation is the iterated map from module 2: a state goes in, the model plus its sampler produce the next token, the token is appended, and the longer string goes back in as the new state. Write the state as $s_t$, the context so far, and the rule as $f$. One step is

$$
s_{t+1} = f(s_t).
$$

Now read the two transcripts above through module 1's vocabulary. After "was the city was the city," the rule appends "was," giving "...was the city was the city was." Feed that back and the rule appends "the." Feed *that* back and it appends "city." The trajectory has stopped exploring. It cycles through a tiny handful of states and returns to each one forever. That is a **periodic cycle** in token space, the looping attractor from module 1, here a 4-token cycle of "was the city was." The "I don't know" transcript is the same object at sentence scale, a longer cycle that closes every four tokens.

The skipping record is the literal picture. A needle drops into a scratched groove, reaches the scratch, and gets kicked back to the same spot, so the same half-second of music plays again, and again, with no force in the system to carry the needle forward. A token loop is that groove. The state at the end of one pass *is* the state that starts the next, so the rule reproduces the same continuation, and the trajectory is trapped on a short orbit it cannot step off. The ball from module 1 has rolled to a valley floor and stopped. The floor here is not a number; it is a phrase.

So a repetition loop is not a mysterious new failure. It is the plainest attractor there is, applied to text. The interesting question is the one the transcripts force: why would a well-trained model *want* to be here?

## Why the loop deepens once it starts

Start with the engine, because it is already in your hands. Module 2 named **self-conditioning**: the model's own emitted tokens become part of the context it reads to choose the next token. Each "city" the model writes is evidence, on the model's own input, that "city" is the kind of thing this text does. The next prediction conditions on that evidence and leans a little harder toward "city." That token then joins the context too, leaning the prediction harder still.

Put a number on the lean. Let $w$ be the looping token and write the model's probability for it as $P(w \mid s_t)$, its chance of emitting $w$ given the context so far. The empirical finding from Holtzman and colleagues is that this probability *climbs* with each repeat. The first time a phrase recurs the model assigns it some moderate probability; by the third or fourth recurrence the probability is near certainty:

| Repeat # of the phrase | $P(w \mid s_t)$ for the next looped token |
|------------------------|-------------------------------------------|
| 1st                    | $0.42$                                    |
| 2nd                    | $0.71$                                    |
| 3rd                    | $0.89$                                    |
| 4th                    | $0.96$                                    |
| 5th                    | $0.98$                                    |

(The numbers are illustrative of the measured shape, not a single logged run; the curve's *direction* is the robust empirical result.) Read the column downward. The loop is self-reinforcing: every pass through the groove raises the probability of staying in it, so the orbit gets harder to leave the longer it runs. In dynamical terms, the cycle is not a marginal attractor the trajectory might wander out of. It is a deep basin, and self-conditioning is what deepens it with each step.

There is a second reason the loop is so easy to fall into, and it is structural rather than about any one model. Fu and colleagues (2021) gave the **high-inflow** argument: in natural language, many different contexts predict the *same* common next word with high probability. "The," "is," "and," a frequent name, all sit at the receiving end of huge numbers of contexts. A trajectory wandering through token space therefore has a high chance of landing back on a word it has already produced, and once two occurrences of a phrase bracket the same continuation, the loop closes. Repetition is partly a property of the language's own statistics, not only of a greedy decoder. The decoder lights the match, but the corpus left fuel lying around.

<details><summary>Check yourself: a model is looping on "the the the." Is the probability the model assigns to the next "the" rising or falling as the loop continues, and what mechanism drives it?</summary>

Rising. Each "the" the model emits enters its own context and raises the salience of "the" as the continuation, so the conditional probability of the next "the" climbs toward $1$. The mechanism is self-conditioning from module 2: the model's outputs become its inputs, and here that feedback pushes the loop deeper rather than breaking it. A loop does not run because the model is unsure; it runs because the model becomes more and more sure.

</details>

## The likelihood trap

The table above should sting a little, because it inverts the obvious story. Looped text is not low-probability text the model stumbled into. It is *high*-probability text the model was steering toward. And that points at something larger than repetition. It points at a property of the whole training objective.

A standard language model is trained to maximize likelihood: predict the next real token, given the true prefix, across a corpus of human writing, and tune the weights to make the human continuations as probable as the model can. Reasonable as that sounds, it has a consequence that took the field by surprise. The single most probable continuation, token after token, is systematically *unlike* human writing.

## Definition (The likelihood trap)

The **likelihood trap** is the gap between high probability and human-likeness: the maximum-probability continuation under a well-trained language model is not the kind of text a human would write. Decoding that hugs the per-token maximum (greedy decoding, which takes the argmax each step, and beam search, which keeps the highest-probability partial sequences) therefore produces degenerate, repetitive, unnaturally bland text, even though nothing is wrong with the model.

Decode the statement against the picture. "Hugs the per-token maximum" means: at every step, take the token the model rates most likely, or keep the few running sequences with the highest total probability. "Degenerate" means the output the transcripts showed, loops and blandness. The trap is that these two go together. Holtzman and colleagues made the gap visible by plotting per-token probability for human text beside beam-search text on the same prompt. Human writing *oscillates*: a confident word, then a surprising one, then a middling one, a jagged line that dips into the improbable on purpose. Beam output runs flat along the top, probability pinned near $1.0$, and that flat high-confidence line is exactly the degenerate paragraph. Humans do not pick the likeliest next word. They routinely pick a moderately surprising one, and that texture of small surprises is part of what makes text read as human.

This is why "use a better model" does not fix the loops, and why most of module 8 is about the *decoder* rather than the weights. The loop is not a defect in what the model learned. It is what faithfully decoding the most probable string gets you. The objective asked for maximum probability, and maximum probability is repetitive.

<details><summary>Check yourself: a colleague says the loops prove the model is undertrained and needs more data. Why is this exactly wrong?</summary>

Backwards on both counts. More training makes the model *better* at maximizing likelihood, which sharpens the high-probability modes the loops live in, so it can make degeneration worse, not better. And the loop is not low-probability text the model failed to avoid; it is high-probability text the model preferred, the very thing likelihood maximization rewards. Repetition is a property of the decoding objective meeting the distribution, not a training shortfall you can pour data on.

</details>

## Two causes, kept separate

There is a second mechanism people reach for, and the discipline of this course is to name it precisely and not let it swallow the first. Training uses *teacher forcing*: at each step the model is fed the true, human-written prefix and asked to predict the next real token. It never trains on its own output. At generation time the prefix is the model's *own* prior tokens, mistakes and all. A small early slip lands the context somewhere the model never saw in training, off the distribution it learned, and because it never practiced recovering, the errors compound and it drifts toward whatever it can still predict with confidence, often a repeat.

## Definition (Exposure bias)

**Exposure bias** is the train/test mismatch in autoregressive generation: the model is trained on gold (human) prefixes but at inference must condition on its own generated prefixes, so its small errors carry it into contexts it never trained on, where further errors accumulate.

The two ideas are easy to blur, so hold the seam. The likelihood trap is a claim about the *distribution itself*: maximum-probability text is bad even with a perfect decoder feeding the model flawless prefixes, because the human-likeness is not at the probability peak. Exposure bias is a claim about the *train/test mismatch*: the model degrades because it is walking on its own footprints, off the gold path it trained on. One is about where the probability mass sits; the other is about which prefixes the model ever practiced on. They reinforce each other, and they are not the same claim.

How much of degeneration each one explains is *debated*. The likelihood trap is well established as a real and large effect; the weight of exposure bias relative to the distribution itself is argued over in the literature, and some results suggest its role has been overstated. The honest position, and the one this course takes, is to present both mechanisms and overclaim neither. When you see a loop, both forces are plausibly in play, and naming only one as "the cause" is the mistake.

<details><summary>Check yourself: which mechanism is being described? "Even a perfect decoder, handed the true human prefix every step, still scores repetitive text as most probable."</summary>

The likelihood trap. The scenario explicitly removes the train/test mismatch by handing the model the true prefix, so exposure bias is not in play, yet the degeneracy persists because it lives in the distribution. If instead the sentence had said "the model conditions on its own earlier mistake and drifts into territory it never trained on," that would be exposure bias. The tell is whether the problem survives a perfect prefix (likelihood trap) or arises from the model's own imperfect prefix (exposure bias).

</details>

## Exercises

**1.** (Mechanical.) A model is emitting "and so on and so on and so on." Identify the attractor in the language of module 1: is it a fixed point or a periodic cycle, and what is its period in tokens?

<details><summary>Show solution</summary>

A periodic cycle. The repeating unit is "and so on," three tokens, so the trajectory returns to each state every three steps, a period-3 cycle in token space. A true fixed point would be a single state mapped to itself, which at token scale looks like one token repeated forever ("the the the"); a multi-token phrase that loops is a short cycle, the same looping attractor from module 1 one level up from a fixed point.

</details>

**2.** (Mechanical.) Using the rising-probability table in this module, explain in one or two sentences why a loop is harder to escape at its tenth repetition than at its first.

<details><summary>Show solution</summary>

By the tenth repetition the model assigns near-certainty (well above $0.95$) to the next looped token, because every prior repeat has entered the context through self-conditioning and pushed that probability up. At the first repetition the probability is moderate, so an alternative still has a real chance under sampling; by the tenth, the loop's token so dominates the distribution that almost nothing else can win. The basin has deepened with each pass.

</details>

**3.** (Conceptual.) A teammate argues: "The loops mean the model is broken or low-quality. A stronger model trained on more text would not do this." Diagnose the error and give the correct picture.

<details><summary>Show solution</summary>

The tempting answer treats repetition as a competence failure, low-probability garbage from a weak model. It is the reverse. Looped text is assigned *high* probability; it is what likelihood-maximizing decoding prefers. Training a stronger model sharpens exactly the high-probability modes the loop lives in, so greedy decoding can degenerate just as readily, sometimes more so. The loop is the likelihood trap at work: maximum-probability text is not human text, and that gap is a property of the objective and the distribution, not a shortfall the model fixes by reading more. The real lever is the decoder, which module 8 takes up.

</details>

**4.** (Conceptual.) Two students are arguing about a looping transcript. One says it is the likelihood trap; the other says it is exposure bias. Construct a single test, in principle, that would tell them apart, and say what each outcome would imply.

<details><summary>Show solution</summary>

Run the model under teacher forcing on a held-out *human* continuation, feeding it the true prefix at every step, and check whether maximum-probability decoding still favors repetitive, bland text. If degeneration persists even with flawless human prefixes, the cause cannot be the model walking on its own mistakes, so it is the likelihood trap, a property of the distribution. If the model only loops once it conditions on its own generated (imperfect) prefix and drifts off the gold path, that points to exposure bias. In practice both contribute, which is why their relative weight is debated; the test isolates the distinction conceptually even though a real loop usually mixes the two.

</details>

**5.** (Conceptual.) Explain how self-conditioning, introduced in module 2 as the engine of the generation loop, turns a one-off repeat into a stable attractor rather than a passing blip.

<details><summary>Show solution</summary>

Self-conditioning routes the model's output back in as its input. The first repeat of a token raises that token's salience in the context, so the model's probability for repeating it climbs; that second emission raises the salience again, climbing the probability further, and the feedback compounds until the looped token is near-certain. A one-off repeat would be a blip if the probability stayed flat. Because each pass *raises* the probability of the next pass, the system is pulled deeper into the loop instead of out of it, which is exactly the invariant-and-attracting pair that makes a state an attractor in module 1's definition: once in, the trajectory stays in, and nearby trajectories get drawn toward it.

</details>

## Recap

A repetition loop is the looping attractor from module 1 wearing text: a short periodic cycle in token space, the skipping record that cannot carry the needle forward, deepened by self-conditioning so that every pass through the groove makes the next pass more likely. It survives not because the model is weak but because of the likelihood trap, the gap between high probability and human-likeness that makes the most probable continuation systematically unlike anything a person would write. Keep the likelihood trap (a fact about the distribution) apart from exposure bias (a fact about the train/test mismatch), present both, and crown neither as the sole cause. The engine underneath does not care about scale. The same self-conditioning that traps a phrase in a single groove can narrow a whole model to a band of safe, sameish outputs, the trajectory offered many grooves and choosing the same few.
