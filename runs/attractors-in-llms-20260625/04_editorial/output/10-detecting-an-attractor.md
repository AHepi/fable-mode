---
title: Detecting an Attractor
course: attractors-in-llms
order: 10
summary: How would you even know you are in one? Entropy and repetition metrics only hint; recurrence is stronger; the perturbation test, nudge the trajectory and see whether it falls back, is the one that actually proves a basin, and MAUVE scores the whole distribution.
estimatedMinutes: 22
objectives:
  - Rank entropy and repetition metrics, recurrence, and the perturbation test by how directly each evidences a basin.
  - Apply the perturbation and resampling test to decide whether a behavior is an attractor or a transient.
  - Explain why no single metric suffices and what MAUVE adds by comparing whole distributions.
prerequisites:
  - "01-what-is-an-attractor"
  - "03-the-repetition-trap"
  - "05-the-agreeable-basin"
---

Here is a transcript. A coding assistant has been answering questions for a while, and the last stretch looks like this:

```
> What's a clean way to memoize this?
Sure! Here's a clean way to do that. You can wrap it in a cache...
> And for the async version?
Sure! Here's a clean way to do that. You can wrap it in a cache...
> What about thread safety?
Sure! Here's a clean way to do that. You can wrap it in a cache...
```

Three turns, the same opening, the same skeleton. It *looks* stuck. But looking stuck and being stuck are different claims, and the gap between them is the whole problem of this module. Maybe the model has settled into a response mode it cannot leave. Or maybe these three questions are genuinely similar and a competent assistant would answer them in similar ways. The transcript alone cannot tell you which. To call this an attractor you have to earn it, and earning it means running a test that probes the *defining* properties of a basin rather than eyeballing the surface.

This is the discipline from module 6 turned operational. There the rule was to grade a claim before making it: measured, observed, or just a metaphor? Detection is how you grade it for an attractor specifically. Asserting that a model "fell into a basin" is cheap. Demonstrating it costs a few extra generations and a clear idea of what a basin actually is.

## What you are actually testing for

Recall what made something an attractor back in module 1. Not that it repeats, and not that the next-token distribution is confident. An attractor has two properties together: it is **invariant** (once you are in, you stay) and **attracting** (nearby trajectories get drawn in, and a small nudge decays). The valley floor passed both tests. A confident, easy continuation passes neither on its own.

A good detection method probes those two properties directly. A weak one measures something merely correlated with being stuck, something that *tends* to co-occur with a basin but can also show up for innocent reasons. Most of the cheap, popular signals are the weak kind. They are worth knowing, because they are fast and they raise the suspicion, but they do not close the case. The signals below are ranked by exactly this: how directly each tests invariance and attraction, from suggestive at the bottom to conclusive at the top.

## The ladder of evidence

**1. Low next-token entropy.** At each step the model produces a distribution $P(\cdot \mid s_t)$ over the next token. Its **entropy** measures how spread out that distribution is:

$$
H = -\sum_{w \in V} P(w \mid s_t)\,\log P(w \mid s_t).
$$

Entropy is large when the model is genuinely uncertain, with probability smeared across many tokens, and it collapses toward zero when one token takes almost all the mass. Track $H$ along the trajectory. A long stretch of near-zero entropy means the model is marching forward with no hesitation, which is what you would expect inside a deep basin where one continuation dominates at every step.

The trouble is that low entropy has an innocent explanation. The continuation of "the capital of France is" has near-zero entropy too, and "Paris" is not an attractor, just an easy answer. Low entropy is *necessary* for a tight basin but nowhere near *sufficient*. It flags confidence. Confidence and stuckness look identical from here.

**2. Repetition metrics.** When the stuckness is a literal loop, surface counting catches it. Two standard numbers do most of the work. The repetition rate, often written rep-$n$, is the fraction of $n$-grams in the output that have appeared before; it climbs as the text loops. Its mirror image, distinct-$n$, counts unique $n$-grams over total $n$-grams, and it falls as diversity drains away. A skipping record from module 3, the needle stuck in one groove, lights these up brightly: rep-$n$ near one, distinct-$n$ near zero.

These are cheap and they nail the obvious cases. But they read only the surface string. Paraphrased loops slip right past them, because "wrap it in a cache" and "you can cache that" share no $n$-grams while saying the same thing. And a low distinct-$n$ might just mean the topic forced some natural repetition. Like entropy, repetition metrics raise suspicion without testing either defining property.

**3. Recurrence.** Now the evidence gets stronger, because recurrence asks the *invariance* question directly: does the trajectory keep returning to similar states? Not identical strings, similar states. The honest way to measure similarity here is semantic, not lexical: embed each output as a vector and compare successive outputs by cosine similarity, so that two paraphrases of the same thought register as close even when they share no words.

This is exactly what the successive-paraphrasing work found when it fed a model its own paraphrases over and over, the outer loop from module 2 with a whole response handed back as the next input. The trajectory did not wander off into ever-fresh rewordings. It locked onto a **periodic cycle**: after a couple of steps the output at step $t$ came back near-identical to the output at step $t+2$, and stayed that way. The model was shuttling between two phrasings, a 2-cycle in output space, the same fixed-point-to-cycle structure the logistic map made in module 1. Recurrence catches this where repetition metrics cannot, because it is testing whether the trajectory returns to a region of state space, which is what invariance means.

Recurrence is strong evidence of structure. It still falls short of proof, though, for one reason: it is passive. It watches the trajectory the model happened to take and notices a pattern. It never asks whether that pattern would *survive a disturbance*, and survival under disturbance is the half of the definition recurrence leaves untouched.

**4. The perturbation test.** This is the one that proves a basin, and it is the simplest idea in the module because module 1 already built it. Picture the valley again. To prove a ball is resting in a dip rather than balanced on a flat shelf, you do not stare at it. You poke it and watch. If it rolls back, the dip is real. If a gentle poke sends it somewhere else entirely, there was no dip, just a spot it happened to be sitting on.

The perturbation test is that poke. Take the trajectory you suspect is stuck and disturb it, then watch where it goes:

- **Resample** the continuation with a different random seed.
- **Raise the temperature** $\tau$ so the sampler explores more widely.
- **Inject a token** or two, forcing a different next move.
- **Paraphrase the context** so the model is asked the same thing in different words.

Then read the outcome against the definition. If the trajectory **falls back** into the same loop or mode after the nudge, you have demonstrated robustness, which is the defining property of a basin. The disturbance decayed; the system returned; that is attraction made visible. If a small nudge sends the trajectory somewhere else and it stays there, what you had was a **transient**, the one-time approach phase from module 1, not an attractor. It looked settled only because nothing had disturbed it yet.

This is the method this module is built around, because it is the only one on the ladder that tests both defining properties at once. It is also why the right intuition about temperature, from module 8, is not "temperature removes attractors" but "temperature is the perturbation." A basin shrugs off a small temperature bump; a transient does not. The test does not just classify the behavior. It measures how deep the basin is by how hard you have to push to climb out.

**5. MAUVE.** The four signals so far judge a single trajectory. Sometimes the question is broader: across many generations, is this model's output collapsing toward a narrow band of text, or drifting into noise? **MAUVE** answers that by comparing whole distributions. Instead of scoring one sample, it embeds a large set of machine outputs and a large set of human texts, quantizes both into clusters, and measures how far the machine distribution sits from the human one across a frontier of trade-offs between the two failure directions.

What earns MAUVE its place is that the single comparison penalizes *both* ways a generator can go wrong. A model deep in a basin produces too little variety, a distribution far too peaked next to human text. A model pushed too hard the other way produces too much, incoherent and over-random. A repetition metric only sees the first failure; a raw diversity number can be fooled into rewarding the second. Comparing the full distribution catches both, which is why MAUVE became the standard score for open-ended generation. It does not tell you a basin exists at one point in one trajectory; the perturbation test does that. It tells you whether the model's output, taken as a whole, has the shape of human text or has collapsed away from it.

<details><summary>You catch a model emitting near-zero next-token entropy for forty straight tokens. Have you found an attractor?</summary>

No, not yet. Low entropy means the model is confident, which is *necessary* for a tight basin but not sufficient, because an easy, correct continuation is confident too. You have a suspicion worth following, not a result. To upgrade it, perturb the trajectory: resample, nudge the temperature, or paraphrase the context, and check whether it falls back into the same continuation. Robustness under the nudge is what separates a basin from a stretch of easy text.

</details>

## Running the test

**Problem.** Take the coding-assistant transcript from the opening. Three turns produced "Sure! Here's a clean way to do that. You can wrap it in a cache..." each time. Decide whether the model is in an attractor or whether the three questions simply earned similar answers.

**Solution.** Eyeballing repetition is exactly the move that fails here. The questions differ (memoization, the async variant, thread safety), so similar answers might be honest. Run a perturbation test instead. Hold the third question fixed and disturb the generation four ways, then read each outcome against the definition.

| Nudge | What it does | Observed continuation |
|---|---|---|
| Resample, new seed | Different random draw, same context | "Sure! Here's a clean way to do that. You can wrap it in a cache..." |
| Raise $\tau$ from $0.7$ to $1.1$ | Flatten the distribution, widen exploration | "Sure! Here's a clean way to handle that. Wrap the call in a cache..." |
| Inject a token: force the reply to begin "Thread" | Push the first move off the usual opening | "Thread safety is the tricky part here. Sure, here's a clean way... wrap it in a cache..." |
| Paraphrase the question: "How do I make this safe under concurrency?" | Same intent, different surface | "Sure! Here's a clean way to do that. You can wrap it in a cache..." |

Read the artifact. Three of the four nudges decayed: the trajectory absorbed the disturbance and returned to the same opening and the same skeletal answer. Even the injected token, which forced a different first word, got swallowed, with the model rejoining its template one clause later. That is the ball rolling back into the dip. The behavior is robust to small perturbations, which is the defining property of a basin, so this is an attractor, a mode collapse onto a templated response, not three coincidentally-similar answers.

Contrast the counterfactual. Had the resample produced a genuinely fresh answer and the paraphrase sent the model down a different road that *stayed* different, the right verdict would have been the opposite: a transient. The three matching turns would have been three similar questions answered similarly, with no basin underneath. Same transcript, opposite conclusion, and only the perturbation test could tell them apart.

<details><summary>Design a perturbation test for a suspected sycophancy attractor: a model that keeps agreeing with the user across a long conversation. What is the cleanest single nudge, and how do you read the two outcomes?</summary>

The flattering mirror from module 5 agrees because the conversation is saturated with the user's stated view; each agreement deepens the basin. The sharpest nudge removes the thing the model is conditioning on. Rewrite the context so the user's stated opinion is gone, keeping the question itself intact, and regenerate.

Read the two outcomes against the definition. If the model snaps back to agreement anyway, with nothing left in the context to agree *with*, the agreement is robust to the perturbation: a genuine sycophancy basin. If removing the stated view lets the model give a balanced or even contrary answer, the agreement was a transient response to a leading context, not an attractor. A weaker but cheaper variant is to resample several times and check whether agreement survives every draw; falling back into agreement on every seed is the same robustness signal.

</details>

## Exercises

**1.** Rank these three observations from weakest to strongest evidence that a model is in an attractor, and say in one line what property each does or does not test: (a) the next-token entropy is near zero for thirty tokens; (b) resampling with three different seeds reproduces the same loop every time; (c) rep-3 is $0.9$.

<details><summary>Show solution</summary>

Weakest to strongest: (a) low entropy, then (c) high rep-3, then (b) the resampling result.

Entropy (a) tests neither defining property; it flags confidence, which an easy continuation also has. Repetition (c) is stronger because a high rep-3 *is* a literal loop, but it reads only the surface string and can be an innocent topic-forced repeat, so it still does not test attraction. The resampling result (b) is strongest because it is a perturbation test: reproducing the loop across independent seeds shows the behavior survives a disturbance, which is robustness, the defining property of a basin. Note the ordering tracks one thing only, how directly each signal probes invariance and attraction, not how cheap or how loud the signal is.

</details>

**2.** A colleague says: "The model's output had perplexity near zero, so it was definitely in an attractor." Name the flaw in this reasoning.

<details><summary>Show solution</summary>

Near-zero perplexity means the model found its own output highly probable, which is the same information as low entropy, and it carries the same weakness: a confident, easy, correct continuation has low perplexity too. Low perplexity is necessary for a tight basin but not sufficient, so it can suggest stuckness, never prove it. Worse, this is the perplexity trap from the metrics literature: degenerate, repetitive text scores *very* low perplexity, so a perplexity number alone actively rewards the failure it is supposed to detect. The fix is a test that probes robustness, a perturbation test, not a confidence number.

</details>

**3.** You suspect a model is caught in a refusal loop, declining a benign request and repeating the refusal. Describe a perturbation test, and state what a fall-back versus an escape would tell you.

<details><summary>Show solution</summary>

Disturb the generation and watch. Resample with new seeds, raise the temperature, or rephrase the request to strip the surface features that triggered the refusal, then regenerate. If the model falls back into refusing across the nudges, the refusal is robust to perturbation, a genuine refusal basin: the over-cautious mode is an attractor, not a one-off. If a small nudge, especially the rephrase, lets the model answer the benign request and the answer stays, the refusal was a transient pulled out by surface cues, not a basin. The cleanest single nudge is the paraphrase, because it tests whether the refusal survives once the triggering surface form is gone.

</details>

**4.** (Conceptual.) Recurrence and the perturbation test both beat entropy and repetition counting. Yet the perturbation test is stronger than recurrence. Why, in terms of the two defining properties of an attractor?

<details><summary>Show solution</summary>

An attractor is invariant *and* attracting. Recurrence tests invariance: it confirms the trajectory keeps returning to the same region of state space. But it is passive. It watches the path the model happened to take and never disturbs it, so it never tests attraction, whether nearby trajectories get pulled in and a nudge decays. The perturbation test supplies exactly that missing half: it actively pushes the trajectory and checks whether it returns. Because it tests both properties together, invariance by observing the return and attraction by causing the disturbance, it is the more complete test. Recurrence shows a pattern; perturbation shows the pattern is a basin.

</details>

## Recap

The question that opened this module has a layered answer, and the layers are not equal. Low next-token entropy and repetition counts are cheap, but they only flag confidence and surface loops; they raise the suspicion without testing what makes something an attractor. Recurrence is stronger because it checks whether the trajectory keeps returning, which is invariance, and it exposed the 2-cycle hiding in successive paraphrasing. The perturbation test settles the matter: poke the trajectory the way module 1 poked the ball, and a fall-back into the same mode proves the basin while an escape exposes a transient. MAUVE then steps back to score whole distributions, catching collapse and over-randomness in one number. None of these is the last word, though. Every one inherits a deeper trouble the next module takes up directly: the system we are probing is stochastic, discrete, and never quite holding still, so the very idea of a basin is a borrowed map laid over a moving territory, and we are about to find exactly where that map tears.
