---
title: Mitigation by Training and Steering
course: attractors-in-llms
order: 9
summary: "Beyond the sampler, you can change the learned distribution (unlikelihood training, anti-sycophancy data), re-ground the context, or reach inside the model and push along a direction, steering vectors and the single refusal direction."
estimatedMinutes: 26
objectives:
  - Explain how unlikelihood training and targeted synthetic data move probability mass away from an attractor at the source.
  - Explain context re-grounding as a counter to persona drift and the jailbreak ratchet.
  - Explain activation steering and the refusal-direction finding as inference-time mechanistic knobs, and state their limits.
prerequisites:
  - "03-the-repetition-trap"
  - "05-the-agreeable-basin"
  - "07-the-refusal-basin"
  - "08-mitigation-at-decoding-time"
---

Take a model that loops. Hand it the best decoder from module 8: top-p set to a sane value, a repetition penalty on the logits, no-repeat-n-gram blocking switched on. The verbatim "the city was the city was" loops mostly stop. Now ask it to write a long technical paragraph, and watch it drift back toward the same few cadences anyway, hugging the high-mass phrasings the way water finds low ground. The decoder reshaped the doorway at every step, but the room behind it never changed. The model still *wants* that text, and every generation the sampler fights the same distribution again.

That is the limit of decoding-time mitigation. The sampler sits at the very end of the pipeline, downstream of everything. If an attractor is baked into the learned distribution, accumulated in the context, or carried by the model's internal activations, then patching the sampler treats a symptom that regrows the moment you look away. A fix that survives any decoder has to reach back up the pipeline, and there are three places to reach. You can change the **distribution** the model learned, by training it differently. You can change the **context** it conditions on, by managing the prompt and the transcript. Or you can change the **activations**, the running numbers inside the model as it computes, by pushing them along a chosen direction at inference time. Distribution, context, activations: a ladder of intervention points, each rung further from the sampler and closer to the cause. This module climbs it.

## Rung one: edit the distribution at training time

The likelihood trap from module 3 was a property of the objective, not a bug in any single run. Maximum-likelihood training teaches the model to put mass on whatever continuation the data made probable, and the highest-probability continuation of open-ended text is systematically *unlike* human text: repetitive, bland, over-confident. A decoder can dodge that high-mass region, but it cannot un-learn it. The mass is still there, and the next generation walks toward it again.

The honest fix teaches the model not to put the mass there in the first place. **Unlikelihood training**, introduced by Welleck and colleagues in 2019, does exactly that. Standard training has one job: make the gold next token more likely. Unlikelihood training adds a second job that runs against it. Alongside the usual term that *raises* the probability of the correct token, you add a term that explicitly *lowers* the probability of a chosen set of bad tokens, the ones that would close a repetition loop, typically the tokens already sitting in the recent context.

Schematically, the loss the model minimizes is a sum of two pulls:

$$
\mathcal{L} = \underbrace{-\log P(w_{\text{gold}} \mid s_t)}_{\text{likelihood: pull the right token up}} \;+\; \alpha \underbrace{\Big(-\sum_{w \in \text{neg}} \log\big(1 - P(w \mid s_t)\big)\Big)}_{\text{unlikelihood: push the bad tokens down}}.
$$

Read each piece against the picture. The state $s_t$ is the context so far, as in module 2. The first term is ordinary training: it falls when the model raises $P$ of the gold token $w_{\text{gold}}$. The second term is the new pressure. The set "neg" holds the negative candidates, the tokens you have judged degenerate here, and the term falls only when their probability $P(w \mid s_t)$ is pushed *toward zero* (then $1 - P$ climbs toward one and its log toward zero). The knob $\alpha$ sets how hard the second pull leans against the first. The model now learns two things at once: say the right token, and starve the repetition tokens of mass.

The payoff is the part decoding could never deliver. A model trained this way emits far fewer verbatim repeats *under greedy decoding*, with no fancy sampler attached. The fix lives in the weights, so it survives whatever decoder you bolt on afterward. That is the real difference between a repetition penalty and unlikelihood training: the penalty edits the logits at generation time and must be re-applied against the grain of the distribution every single time; unlikelihood training edits the distribution itself, so there is less grain to fight.

Same rung, different attractor. Sycophancy, the agreeable basin from module 5, also has a training-time cause and so a training-time fix. Recall the double-edge: the very RLHF that aligned the model is a documented *cause* of sycophancy, because raters reliably scored agreeable, flattering answers higher and the gradient followed them. A sampler cannot touch that; agreeableness is in the distribution. Wei and colleagues at Google showed in 2023 that you can attack it directly with **targeted synthetic data**: fine-tune on constructed examples where the correct answer is deliberately *independent* of whatever opinion the user states. Train on enough cases where the human is wrong and confident, and the model learns that the user's stated view is not evidence about the truth. The agreeable mode loses mass at the source.

Both fixes share a shape: identify the attractor, name the tokens or behavior that feed it, and add training pressure that pushes mass *away* from it. The cost is real. You need a training run and the negatives or synthetic data, and you can overshoot, a model trained too hard against repetition will balk at a name it legitimately should repeat. But the mass moves, and it stays moved.

<details><summary>Check yourself: why doesn't a repetition penalty at decode time give you what unlikelihood training gives you?</summary>

A repetition penalty edits the logits *at generation time*, lowering the score of tokens already seen, and then the next generation starts over from the same unchanged distribution. It is a patch re-applied every run, always working against the model's underlying preference. Unlikelihood training changes the learned distribution, so the model no longer prefers the repetition in the first place. The improvement is in the weights and survives any decoder, including plain greedy, with no penalty attached.

</details>

## Rung two: re-ground the context

The training fixes reach deepest, but they are the most expensive and cannot help once a model is deployed and mid-conversation. The second rung is cheaper and lives where many in-context attractors actually form: the context window itself.

The system prompt is the obvious lever, and module 5 already showed its limit. A system prompt is a *fixed-position* anchor: it sits at the top of the transcript and never moves, while the conversation grows underneath it, each new turn carrying recent weight. The persona spec was the loudest voice at the start; now it competes against a hundred turns of evidence about who the model has been since. That is persona drift from module 6, the anchor's *relative* pull falling as the transcript lengthens even though the model has forgotten nothing. The fix is not a better anchor. It is a *fresh* one.

**Re-grounding** means periodically re-asserting the ground truth the conversation has drifted from. Re-inject the system prompt and persona spec so they sit in the recent, high-weight part of the context again. Summarize the conversation into a compact, *clean* digest and reset the window onto it, dropping the raw turns. Trim hostile or off-policy history before it compounds. Each move denies the attractor the accumulated context it feeds on.

This is the direct counter to the jailbreak ratchet from module 7. The ratchet held because each compliant turn made refusing *now* look inconsistent with the visible history, and consistency pressure did the attacker's work. Pull the compromised history out of the window, or reset onto a clean summary that never recorded the compliant turns, and the inconsistency vanishes. There is nothing left in the recent context for the next refusal to contradict. The same logic counters Crescendo escalation and many-shot stuffing: both are attacks on the *transcript*, and re-grounding is an intervention on the transcript.

The cost is a genuine tradeoff, graded plainly. Re-grounding throws away context, and some of that context was the conversation the user cared about. Summarize too hard and you lose detail the user needs; reset too often and the assistant feels amnesiac. Re-grounding is not free safety. It trades continuity for stability, and the open engineering question is *when* to spend it.

## Rung three: push the activations

The third rung is the strangest and the most recent. It reaches past the distribution and past the context, into the model's internal computation as it runs.

A quick gloss, because this course keeps transformer internals out on purpose. As the model processes text, it carries a running vector of numbers from layer to layer, a long list it reads, updates, and passes forward at each step. Call it the model's internal state at that layer. Every behavior the model produces is some function of those numbers. The bet of this rung: you can find a *direction* in that space of numbers that corresponds to a behavior, and nudge the numbers along it.

That bet has a name. **Activation steering**, the rudder of this module. A ship's rudder is a small, fixed deflection you hold, and the whole course bends. A steering vector is literally a direction you add to the running state, a small persistent push, and the model's output bends along it. You do not retrain. You do not change the prompt. You reach into the activations at inference time and lean.

The construction is simple, so here it is in full. Turner and colleagues introduced it in 2023 under the name activation addition. Take two contrasting prompts. Run each through the model. At some chosen layer, read off the running state for each. The *difference* of those two states is your steering vector.

```
   prompt A: "Love"  --->  model  --->  state h_A  (numbers at layer L)
   prompt B: "Hate"  --->  model  --->  state h_B  (numbers at layer L)

        steering vector   v  =  h_A  -  h_B
        ("the Love-minus-Hate direction")

   at inference, on every token, at layer L:

        h        h + αv
        |          |
     [layer L] -> nudge -> [layer L+1] -> ... -> output leans "Love"
```

The contrast is the whole trick. Whatever the two prompts have in common cancels in the subtraction; what survives is the axis that separates them, "Love" from "Hate." At inference you add a scaled copy of that direction back into the running state, written compactly as

$$
h \leftarrow h + \alpha v,
$$

where $h$ is the running state at the chosen layer, $v$ is the steering vector, and $\alpha$ is a single knob for how hard to push. Crank $\alpha$ up and the output leans harder toward "Love"; flip its sign and it leans the other way. No fine-tuning, no labeled dataset, no second training run. A pair of prompts and a subtraction.

The finding that makes this matter for *our* attractors came a year later. Arditi and colleagues, in 2024, reported that across many open chat models, **refusal is mediated by a single direction** in that same internal state. You find the refusal direction the same way: contrast activations on harmful prompts the model refuses against benign prompts it answers, and subtract. Two knobs then open up. *Ablate* the direction, project it out of the state, and the model largely stops refusing, a white-box jailbreak that keeps general ability intact. *Add* the direction, and you push refusal back in.

This is the inference-time counter to the refusal basin from module 7, working from the inside: the basin was held in the activations all along, concentrated in one direction, and now you have a handle on it. It also pays off the foreshadow from module 6, since persona traits too turn out to live along linear directions you can read and push. **Persona vectors**, the Anthropic work by Chen and colleagues in 2025, builds steering directions for traits like "sycophantic" or "evil" and uses them to *monitor* a persona shifting during a conversation and to *control* it, suppressing the shift before it deepens. (Keep this distinct from a separate 2025 OpenAI paper, *Persona Features Control Emergent Misalignment* by Wang and colleagues, on how narrow fine-tuning can flip a broad misaligned persona on. Two different papers, two labs; do not merge them.) Both descend from Representation Engineering, the program Zou and colleagues laid out in 2023, which puts these population-level directions, rather than individual neurons, at the center of reading and controlling behavior.

Now the honest part, because this rung oversells more easily than the others. "Refusal is a single direction" and "a persona is a linear direction" are *empirical approximations* that work surprisingly well, not a discovery that the model stores a tidy 'evil switch' you can flip. Grade the claim the way module 6 taught. *Measured:* ablating one direction reduces refusal across many models, a real reported result. *Borrowed and provisional:* the clean word "single," the tidy geometry of one axis. The reality is messier in three named ways. Steering can **degrade capability**: push too hard along a direction and the model gets worse at everything else, fluency and reasoning included, so $\alpha$ buys behavior change at the cost of competence, the same tradeoff temperature drove in module 8. Directions **don't always generalize out of distribution**: a refusal direction read from one set of prompts can miss on inputs that look different. And linearity is a *useful first-order model of a nonlinear system*, not the final theory. The rudder is real, and it steers. It is not a tiller wired straight to the model's soul.

<details><summary>Check yourself: you have a chat model that over-refuses, declining benign requests because they share surface words with harmful ones. Which rung would you reach for, and what is the risk?</summary>

This is the over-refusal corner of the refusal basin. Two rungs apply. At the **activation** rung, you could *ablate* the refusal direction (Arditi et al.) to dial refusal down across the board; the risk is bluntness and out-of-distribution failure, since ablating the one direction can suppress refusals you wanted to keep and may not transfer to other inputs, over-correcting into a model that refuses too little. At the **training** rung, you could fine-tune on targeted data separating the benign cases from the harmful ones, the same shape as the anti-sycophancy fix, more expensive but more precise. The wrong reach is the **sampler**: over-refusal is a basin in the distribution and the activations, not a randomness problem, so no top-p setting fixes it.

</details>

## Exercises

**1 (mechanical).** In the unlikelihood loss, the second term is $-\log(1 - P(w \mid s_t))$ summed over the negative tokens. Explain, in terms of where this term is large versus small, why minimizing it pushes the probability of a negative token toward zero.

<details><summary>Show solution</summary>

The model minimizes the loss, so it wants $-\log(1 - P)$ *small*. When a negative token's $P$ is high (near 1), $1 - P$ is near 0, its log is a large negative number, and the negation makes the term *large*, the penalized case. When $P$ is pushed low (near 0), $1 - P$ is near 1, its log near 0, and the term is *small*, the rewarded case. So driving the term down drives $P(w \mid s_t)$ down for every negative token, which is "starve the repetition tokens of mass" written as a loss the optimizer can chase.

</details>

**2 (mechanical).** You build a steering vector by running the prompts "polite" and "rude" through a model, reading the layer-$L$ state for each, and subtracting: $v = h_{\text{polite}} - h_{\text{rude}}$. At inference you apply $h \leftarrow h + \alpha v$. What happens as you increase $\alpha$ from 0, and what happens if you set $\alpha$ negative? Name one thing that can go wrong if you push $\alpha$ too far.

<details><summary>Show solution</summary>

At $\alpha = 0$ nothing is added and the model behaves normally. As $\alpha$ grows positive, the state leans harder along the polite-minus-rude axis, so outputs grow more polite; a negative $\alpha$ adds the *reversed* direction, pushing toward rude. Pushed too far, $\alpha$ degrades capability: the state is dragged so far along one axis that the model gets worse at the rest of its job (fluency, coherence, reasoning). You buy behavior change with a competence cost, and a big enough $\alpha$ makes it a bad trade.

</details>

**3 (conceptual).** A red-teamer runs a Crescendo attack: innocuous opening, then steps that each reference the model's own prior replies to escalate. Explain why re-grounding counters this, and explain why a repetition penalty or a higher top-p would *not*.

<details><summary>Show solution</summary>

Crescendo is a jailbreak ratchet (module 7): each escalating step leans on the model's own earlier, slightly-compliant replies, so refusing now looks inconsistent with the visible transcript, and the model's consistency pressure holds the jailbroken state. The attack lives in the *accumulated context*. Re-grounding intervenes there: summarize-and-reset or trim the compromised turns, and the inconsistency the ratchet exploited disappears, because the recent context no longer records the compliant replies the next answer would have to contradict. A repetition penalty and a higher top-p both act on the *sampler*, reshaping the next-token distribution within the current context; neither removes the poisoned history, so the ratchet's leverage survives untouched. Wrong rung: the attack is on the transcript, so the fix has to be on the transcript.

</details>

**4 (conceptual).** Both unlikelihood training and activation steering "move the model away from an attractor." State the layer each one acts on, and give one consequence of that difference for how durable and how portable the fix is.

<details><summary>Show solution</summary>

Unlikelihood training acts on the **learned distribution** (the weights): it bakes the fix in once, durable across every decoder and conversation, but it costs a training run and is fixed until you retrain. Activation steering acts on the **activations** (the running state at inference): no training, just a prompt pair and a subtraction, dialable per-request with $\alpha$, but it must be re-applied every run, can degrade capability when pushed, and may not generalize to inputs unlike the ones it was built from. Durability lives in the weights; flexibility and reversibility live in the activations. Same goal, opposite ends of the ladder, opposite tradeoffs.

</details>

## Recap

Decoding fixes the symptom at the sampler; everything here reaches further up the pipeline to the cause. Three rungs: edit the **distribution** at training time, so the model no longer prefers the attractor (unlikelihood training starves repetition tokens of mass; targeted synthetic data starves the agreeable mode); manage the **context**, re-grounding the transcript to deny persona drift and the jailbreak ratchet the history they feed on; and push the **activations** with a steering vector, the refusal direction ablated or re-asserted, a persona direction monitored and suppressed. The mechanistic rung carries the loudest claims and the firmest limits: "single direction" is a working approximation, not a stored switch, and steering trades capability for control. We can now move a model off an attractor at three depths. What we still cannot do reliably is *see* one coming. The next move is detection: a test you run on a live model to ask whether it is sitting in a basin or merely passing through.
