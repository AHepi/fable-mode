---
title: Mitigation at Decoding Time
course: attractors-in-llms
order: 8
summary: "The first place to break an attractor is the sampler: temperature, top-k, top-p, typical, contrastive, repetition penalty, and n-gram blocking each reshape the next-token choice in a different way, with a different cost."
estimatedMinutes: 26
objectives:
  - Describe how temperature, top-k, and top-p reshape the next-token distribution.
  - Classify decoding methods into truncation, penalty/blocking, and contrastive families.
  - Choose a decoding mitigation for a given failure and state its tradeoff.
prerequisites:
  - "03-the-repetition-trap"
  - "04-mode-collapse-and-model-collapse"
---

A model has just read the context *The weather today is*, and now it has to pick the next token. Before it picks anything, the network hands you a row of raw scores, one per vocabulary entry. These scores are **logits**: unnormalized numbers, free to be negative, that say how much the model favors each token. For six candidates the row looks like this.

| token | logit $z_i$ |
|-------|-------------|
| sunny  | $+3.0$ |
| cloudy | $+2.0$ |
| warm   | $+1.0$ |
| nice   | $\phantom{+}0.0$ |
| the    | $-1.0$ |
| very   | $-2.0$ |

Logits are not yet probabilities. To turn them into a distribution the model runs them through the softmax, which exponentiates each score and divides by the total so the numbers sum to one.

$$
P_i = \frac{\exp(z_i)}{\sum_{j} \exp(z_j)}
$$

Run the six logits through it and you get the next-token distribution $P(\cdot \mid s_t)$ for this step:

| token | logit | $P_i$ | cumulative |
|-------|-------|-------|-----------|
| sunny  | $+3.0$ | $0.634$ | $0.634$ |
| cloudy | $+2.0$ | $0.233$ | $0.867$ |
| warm   | $+1.0$ | $0.086$ | $0.953$ |
| nice   | $\phantom{+}0.0$ | $0.032$ | $0.984$ |
| the    | $-1.0$ | $0.012$ | $0.996$ |
| very   | $-2.0$ | $0.004$ | $1.000$ |

This single row is where every decoding mitigation does its work. Each method is a different edit to this table, made just before a token is drawn. Generation is the iterated map from module 2, model plus sampler, and these methods all live in the sampler half. The likelihood trap from module 3 says argmax text is not human text, and greedy decoding reads this table and always takes *sunny*, the top row, every step, which is exactly the move that deepens the basin and falls hardest into the trap. Lowering temperature deepens basins further; sampling is the perturbation that can climb back out, the nudge from module 1 applied to the next-token choice. Reshape the row well and the trajectory escapes the basin it was sliding toward. Reshape it badly and you trade one failure for another.

Take that one table and watch each knob bend it.

## What the methods are *not*

The tempting story is that these are seven flavors of the same thing, a bank of "randomness knobs" you turn up for spice and down for safety. That story is wrong, and getting it wrong is what makes people reach for the dial that cannot fix their failure. Three genuinely different operations hide under the one word "decoding," and the cleanest way to hold them apart is by *what each one touches*.

- **Truncation** methods change *which tokens are eligible*. They crop the candidate set, throw away the tail, and renormalize what survives. Top-k, top-p, and typical sampling live here.
- **Penalty and blocking** methods edit the logits of tokens *already seen* in the context, before the softmax runs. Repetition penalty and no-repeat-n-gram blocking live here.
- **Contrastive** methods re-score the candidates with a *second signal*, not just the model's own confidence. Contrastive search and contrastive decoding live here.

Temperature sits outside all three. It rescales the whole row up or down without changing *which* tokens are eligible. Every token that was a candidate before is still a candidate after. You can picture truncation as narrowing or widening the doorway tokens have to pass through; temperature does not move the doorway, it only changes how hard the crowd behind it is pushing.

## Temperature: rescale, don't crop

Temperature, written $\tau$, divides every logit by a single number before the softmax sees it.

$$
P_i = \frac{\exp(z_i / \tau)}{\sum_{j} \exp(z_j / \tau)}
$$

When $\tau = 1$ nothing changes and you get the base table. When $\tau < 1$ you divide by a fraction, which stretches the gaps between logits, so the softmax exaggerates them and the distribution **sharpens** toward the top token. When $\tau > 1$ you shrink the gaps, so the distribution **flattens** toward uniform. Same six tokens throughout. Only the mass moves.

Take $\tau = 0.5$ and $\tau = 1.5$ on our row:

| token | base ($\tau{=}1$) | sharpen ($\tau{=}0.5$) | flatten ($\tau{=}1.5$) |
|-------|-------|-------|-------|
| sunny  | $0.634$ | $0.865$ | $0.496$ |
| cloudy | $0.233$ | $0.117$ | $0.255$ |
| warm   | $0.086$ | $0.016$ | $0.131$ |
| nice   | $0.032$ | $0.002$ | $0.067$ |
| the    | $0.012$ | $0.000$ | $0.034$ |
| very   | $0.004$ | $0.000$ | $0.018$ |

At $\tau = 0.5$ the model has become almost greedy: *sunny* holds $0.865$ of the mass and the tail has nearly vanished. That is the direction mode collapse from module 4 lives in, the distribution sharpened down to one or two safe modes, and raising temperature is the lever that reverses it. The reversal is cheap because mode collapse is a property of where the mass sits right now, not damage to the weights. At $\tau = 1.5$ the tail tokens have come back to life and *sunny* no longer dominates. The cost is plain in the same numbers: *very*, a word that made little sense here, now carries real probability. Flatten too far and you buy diversity with coherence.

Temperature's strength is also its weakness. It is blunt, acting on the *whole* distribution. It cannot say "keep the good candidates, drop the junk," because it never decides what counts as junk. For that you need truncation.

<details><summary>Check yourself: apply temperature to a fresh row</summary>

A model gives three tokens the logits $z = (2.0, 1.0, 0.0)$. Using $\tau = 0.5$, which token gains the most probability share relative to $\tau = 1$, and why?

The top token gains the most. At $\tau = 0.5$ every logit is divided by $0.5$, i.e. doubled, to $(4.0, 2.0, 0.0)$. The gaps widen, the softmax exaggerates them, and mass piles onto the largest logit. Sharpening always concentrates mass at the top; that is what $\tau < 1$ does by construction. You do not need the exact numbers to answer, only the direction: smaller $\tau$ means a peakier distribution.

</details>

## Truncation: crop the tail, then renormalize

Truncation deletes candidates outright. After the cut, the surviving tokens are renormalized so their probabilities sum to one again, and the model samples from that smaller set. The tokens you removed get probability exactly zero. They cannot be drawn.

**Top-k** keeps the $k$ highest-probability tokens and drops the rest. With $k = 3$ on our base row, *sunny*, *cloudy*, and *warm* survive; *nice*, *the*, and *very* are gone. The three survivors held $0.634 + 0.233 + 0.086 = 0.953$ of the mass, so dividing each by $0.953$ rescales them:

| token | base $P_i$ | top-3 renormalized |
|-------|-------|-------|
| sunny  | $0.634$ | $0.665$ |
| cloudy | $0.233$ | $0.245$ |
| warm   | $0.086$ | $0.090$ |

Top-k's flaw is that $k$ is a fixed number applied to a distribution whose shape keeps changing. In a sharply peaked context, where one token deserves almost all the mass, $k = 3$ drags in two tokens that should have stayed dead. In a genuinely open context, where a dozen tokens are all reasonable, $k = 3$ amputates valid choices. A fixed $k$ is blind to how peaked the row actually is.

**Top-p**, also called nucleus sampling, fixes exactly that blindness. Instead of a fixed count it keeps the **smallest set of tokens whose cumulative probability reaches $p$**, then renormalizes that set. The size of the kept set now floats with the shape of the distribution: peaked rows hand you a tiny nucleus, flat rows a large one.

Read it straight off the cumulative column. With $p = 0.9$, walk down the rows adding probabilities until the running total first reaches $0.9$. *sunny* gives $0.634$, plus *cloudy* gives $0.867$ (not there yet), plus *warm* gives $0.953$, which clears the bar. The nucleus is those three tokens, and after renormalizing you get the same $0.665 / 0.245 / 0.090$ split as top-3, because on this particular row the two methods happened to keep the same set.

Push the threshold down to $p = 0.8$ and the answer changes. Now *sunny* at $0.634$ is short, but *sunny* plus *cloudy* at $0.867$ clears $0.8$, so the nucleus is just two tokens:

| token | base $P_i$ | nucleus at $p{=}0.8$ |
|-------|-------|-------|
| sunny  | $0.634$ | $0.731$ |
| cloudy | $0.233$ | $0.269$ |

The whole tail, *warm* included, is now zero. That is the lever in your hand: a lower $p$ is a tighter nucleus, safer and duller, while a higher $p$ lets more of the tail back in. Top-p is the standard answer to the degeneration Holtzman and colleagues documented, because it adapts the candidate set to the distribution instead of guessing a count in advance. It is not free of tuning. Choosing $p$ is still a judgment call, and at a low enough $p$ the nucleus can collapse to one token and you are back to greedy, repetition and all.

**Locally typical sampling** keeps the same crop-the-set spirit but changes the *criterion* for what survives. The motivation is information-theoretic. A token's surprisal is $-\log P_i$, the number of bits it carries, and human text has a steady habit: its tokens tend to sit near the model's conditional entropy, the average surprisal for that step. Humans neither always pick the obvious word nor reach constantly for the bizarre one. They stay *typically* surprising. Typical sampling keeps the tokens whose surprisal is closest to the entropy and drops the rest, so it can discard a too-obvious high-probability token that top-p would have kept. It targets the texture of real text directly. The cost is practical: it is less mainstream than top-p, with thinner tooling.

<details><summary>Check yourself: find the nucleus</summary>

A step has four candidates with probabilities $(0.50, 0.25, 0.15, 0.10)$. What is the top-p nucleus at $p = 0.7$, and what are the renormalized probabilities?

Walk the cumulative sum: $0.50$ (under $0.7$), then $0.50 + 0.25 = 0.75$ (clears $0.7$). The nucleus is the first two tokens. They held $0.75$ of the mass, so divide each by $0.75$: the first becomes $0.50 / 0.75 = 0.667$ and the second $0.25 / 0.75 = 0.333$. The third and fourth tokens are cropped to zero. The trap to avoid is keeping a token because its individual probability "looks big enough." The rule is cumulative: you stop the moment the running total reaches $p$, and everything after the cut is gone.

</details>

## Penalty and blocking: punish what you've already said

Truncation never looks at the context. It judges tokens only by their probability on this step. The next family does the opposite: it reaches into the context, finds the tokens the model has already emitted, and edits *their* logits downward before the softmax runs. This is the family aimed squarely at the repetition from module 3, where self-conditioning, the model's own tokens re-entering as input, keeps re-electing the same word.

The **repetition penalty** from CTRL is the clean version. Pick a penalty factor $\theta > 1$. For every token already present in the context, push its logit toward zero: divide it by $\theta$ when the logit is positive, multiply by $\theta$ when it is negative. Either way the token loses ground. Suppose *sunny* has already appeared and we set $\theta = 1.2$. Its logit drops from $3.0$ to $3.0 / 1.2 = 2.5$ before anything else happens, and the softmax then runs on the edited row:

| token | logit | penalized logit | $P_i$ after penalty |
|-------|-------|-------|-------|
| sunny  | $+3.0$ | $+2.5$ | $0.512$ |
| cloudy | $+2.0$ | $+2.0$ | $0.311$ |
| warm   | $+1.0$ | $+1.0$ | $0.114$ |
| nice   | $\phantom{+}0.0$ | $\phantom{+}0.0$ | $0.042$ |
| the    | $-1.0$ | $-1.0$ | $0.016$ |
| very   | $-2.0$ | $-2.0$ | $0.006$ |

*sunny* fell from $0.634$ to $0.512$ and every other token rose to fill the gap, with *cloudy* the main beneficiary. The loop has been loosened without any token being banned. It is cheap, runs in a single pass, and attacks the self-conditioning engine directly. Its danger is that it cannot tell a degenerate repeat from a legitimate one. Function words, a character's name, a term that simply *should* recur all carry the same penalty, and a $\theta$ high enough to crush a loop will also bleach the natural repetition out of ordinary prose.

**No-repeat-n-gram blocking** is the hard-edged cousin. Choose $n$, then forbid any $n$-gram that has already appeared by setting the probability of the token that would complete it to zero. With $n = 3$, once the model has written "the weather today," it can never again produce "today" right after "the weather." This guarantees no exact $n$-gram repeats, which is sometimes exactly what you want, but it is brittle in two ways. It blocks legitimate exact repeats, so a name that honestly belongs twice in a list gets one appearance vetoed, and it only catches *exact* loops. Paraphrased repetition sails straight past it.

## Contrastive: bring a second opinion

The last family changes the question. Truncation and penalties both judge a token using one signal, the model's own probability. Contrastive methods score each candidate against a *second* signal and pick the token that does well on both.

**Contrastive search**, from the SimCTG work, scores a candidate as its model confidence *minus* a degeneration penalty. The penalty is the maximum similarity between the candidate's representation and the representations of the tokens already generated. A token the model likes but that looks, in representation space, almost identical to something it just said gets marked down. This pushes generation toward tokens that are both probable and *distinct* from the recent past, anti-repetition built into the selection rule rather than bolted on after. It works best on models trained with the matching SimCTG objective, which spreads the token representations out so that "similar representation" actually means "redundant," and it costs extra computation at every step, since you compare each candidate against the running history.

**Contrastive decoding**, from Li and colleagues, contrasts two *models* instead of one model against its own history. Run a strong "expert" model and a weak "amateur" model on the same context, and generate from the *difference* in their log-probabilities. The degenerate, generic habits tend to be shared by both, so subtracting the amateur cancels them while the expert's genuine competence survives. It sharpens open-ended generation, but you now pay to run a second model, and a plausibility constraint has to keep the contrast from chasing tokens the expert finds absurd.

Both contrastive methods say the same structural thing: confidence alone is not enough to escape a basin, because the basin is *where confidence points*. You need a second axis to push against it.

## Putting the families side by side

| method | family | mechanism | tradeoff |
|--------|--------|-----------|----------|
| temperature $\tau$ | rescaling (own family) | divide all logits by $\tau$; $\tau{<}1$ sharpens, $\tau{>}1$ flattens | blunt, hits the whole row; high $\tau$ buys diversity with coherence; never targets a specific mode |
| top-k | truncation | keep the $k$ highest tokens, renormalize | fixed $k$ is blind to the row's shape: too loose when peaked, too tight when flat |
| top-p (nucleus) | truncation | keep the smallest set with cumulative mass $\ge p$ | adapts to the shape; choosing $p$ is still tuning; low $p$ can collapse to greedy |
| locally typical | truncation | keep tokens with surprisal near the conditional entropy | matches human-text texture; less mainstream, thinner tooling |
| repetition penalty | penalty/blocking | divide ($z{>}0$) or multiply ($z{<}0$) seen-token logits by $\theta$ | cheap, breaks loops; over-penalizes names and function words |
| no-repeat-n-gram | penalty/blocking | set probability to zero for any repeated $n$-gram | guarantees no exact repeats; brittle, blocks legitimate ones, misses paraphrase |
| contrastive search | contrastive | confidence minus similarity to generated tokens | strong anti-repetition; wants a SimCTG-trained model; extra per-step compute |
| contrastive decoding | contrastive | expert minus amateur log-probabilities | sharpens fluency; needs a second model and a plausibility constraint |

The table is also a decision procedure. Name the failure first, then read across. A looping phrase is self-conditioning, so a repetition penalty or no-repeat-n-gram hits it where it lives, and contrastive search hits it more cleanly if you have the model for it. Bland, templated output across many prompts is the mode collapse of module 4, a mass-concentration problem, so raise temperature or open the nucleus with a higher $p$. Output that drifts into nonsense ran its diversity too hot, so tighten $p$ or lower $\tau$. No single knob answers every basin, because the basins are not all the same shape.

## Exercises

**1 (mechanical).** A step has three candidate tokens with logits $z = (1.0, 0.0, -1.0)$. Compute the base softmax probabilities ($\tau = 1$), then recompute them at $\tau = 2$. Which way did the mass move, and is that sharpening or flattening?

<details><summary>Show solution</summary>

Base, $\tau = 1$: exponentiate $(e^{1}, e^{0}, e^{-1}) = (2.718, 1.000, 0.368)$, sum $4.086$. Divide: $(0.665, 0.245, 0.090)$.

At $\tau = 2$: divide each logit by $2$ to get $(0.5, 0.0, -0.5)$, exponentiate to $(1.649, 1.000, 0.607)$, sum $3.256$. Divide: $(0.506, 0.307, 0.186)$.

The top token fell from $0.665$ to $0.506$ and the bottom token rose from $0.090$ to $0.186$. Mass moved *out* of the peak and into the tail, so $\tau = 2$ flattened the distribution. That is the rule: $\tau > 1$ always flattens, $\tau < 1$ always sharpens.

</details>

**2 (mechanical).** Given probabilities $(0.40, 0.30, 0.20, 0.10)$ over four tokens, find the top-p nucleus at $p = 0.85$ and give the renormalized probabilities.

<details><summary>Show solution</summary>

Cumulative sums: $0.40$, then $0.70$, then $0.90$. The total first reaches $0.85$ at the third token, so the nucleus is the first three. Their mass is $0.90$; divide each by $0.90$: $(0.444, 0.333, 0.222)$. The fourth token is cropped to zero. The common mistake is stopping at $0.70$ because two tokens "seem like enough" or because $0.70$ is close to $0.85$. The rule is strict: keep adding until the running total *reaches or passes* $p$, and you do not pass $0.85$ until the third token.

</details>

**3 (conceptual).** A model keeps emitting "I don't know. I don't know. I don't know." Two engineers propose fixes. One raises temperature to $\tau = 1.4$; the other adds a repetition penalty with $\theta = 1.3$. Which is better matched to this failure, and why?

<details><summary>Show solution</summary>

The repetition penalty is the better-matched tool. The failure is a self-conditioning loop: each "I don't know" raises the probability of the next one, so the fix should reach into the context and lower the logits of the tokens already said, which is exactly what the penalty does. Temperature flattens the *whole* row indiscriminately; it might shake the loop loose by chance, but it does not target the repeated tokens, and it degrades coherence everywhere else as a side effect. This is the trap of treating the methods as interchangeable randomness knobs. The loop is a context-dependent failure, so it wants a context-dependent fix from the penalty/blocking family, not a global rescaling.

</details>

**4 (conceptual).** Top-p with a fixed $p$ keeps a different *number* of tokens from one step to the next, while top-k always keeps the same number. Explain why that adaptivity is usually an advantage, and name one situation where top-k's fixed count is harmless.

<details><summary>Show solution</summary>

Top-p's set size floats with the shape of the distribution. When the model is confident, one token carries most of the mass and the nucleus shrinks to a handful, which keeps junk out. When many continuations are genuinely reasonable, the mass spreads and the nucleus grows, which keeps valid diversity in. Top-k cannot do either, because $k$ is chosen before the model has seen the row, so the same $k$ is too loose on peaked steps and too tight on flat ones. Top-k's fixed count is harmless precisely when the distribution's shape is stable across steps, so that one good $k$ fits every row: a narrow, formulaic generation task where each step has about the same number of sensible candidates. There, the adaptivity buys you nothing, and the simpler method costs nothing.

</details>

**5 (stretch).** Contrastive search subtracts a similarity penalty, and a repetition penalty subtracts from the logits of already-seen tokens. Both fight repetition. Why does the canon file them in different families?

<details><summary>Show solution</summary>

The repetition penalty edits logits using one signal, the model's own scores, keyed on whether a token literally appeared in the context. It is a logit edit on already-seen tokens, which is the defining move of the penalty/blocking family. Contrastive search introduces a *second* signal: the similarity between a candidate's representation and the representations of the generated history. It can mark down a token that never appeared verbatim but is representationally redundant, something the repetition penalty is blind to. That second axis, not present in the model's raw probabilities, is what defines the contrastive family. The shared symptom they treat, repetition, does not make them the same operation; the families are sorted by *what each method looks at*, not by which failure they happen to relieve.

</details>

## Recap

Every decoding mitigation is one edit to a single row of next-token scores, and the families differ by what they touch: temperature rescales the whole row without changing eligibility, truncation crops the candidate set, penalties and blocking push down the logits of tokens already said, and contrastive methods bring a second signal to break ties confidence alone cannot. Match the family to the failure and you can climb a trajectory back out of a basin from the sampler alone, cheaply and reversibly. But notice what this whole module took as given: the logits arrived fixed, and we only re-weighted them. The basin was still there in the distribution, and we kept paying to dodge it every single step. Module 9 asks the harder question of whether we can move the basin itself, editing the model rather than the sample it draws.
