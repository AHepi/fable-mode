---
title: Generation Is a Loop
course: attractors-in-llms
order: 2
summary: An LLM plus its sampler is literally an iterated map over the growing context, and because each token it emits becomes part of its own next input, generation has a built-in feedback loop.
estimatedMinutes: 20
objectives:
  - Express autoregressive generation as an iterated map $s_{t+1} = f(s_t)$ with $f$ the model plus its sampler.
  - Distinguish the inner loop (token by token within one generation) from the outer loop (a whole output fed back as input).
  - Explain self-conditioning and why it is a positive-feedback mechanism.
prerequisites:
  - 01-what-is-an-attractor
---

<!--
Section shape (see _config/course-design.md). PROSE uses literary-maverick.
FORMAL blocks follow _config/math-style.md and are NOT run through the prose rewrite loop.
-->

Ask a model for a list of synonyms for "happy" and watch it degrade in real time:

```text
happy, joyful, cheerful, content, pleased, glad, delighted, elated,
joyful, cheerful, content, pleased, joyful, cheerful, content, pleased,
joyful, cheerful, content, pleased, joyful, cheerful, content, pleased ...
```

Nothing broke. No bug fired. The model is doing exactly what it was built to do, one token at a time, and the result is a four-word loop it cannot climb out of. The list reads like the toy trajectories from module 1 after they reached their destination: the same handful of values, returning forever. That is not a coincidence of phrasing. Generation is an iterated map, and what you just watched is the map landing on a cycle.

Module 1 built the machinery on scalar numbers: a state $x_t$, a rule $f$, the trajectory $x_0, x_1, x_2, \dots$ it traces, and the fixed points, cycles, and basins that trajectory can settle into. This module carries that exact machinery onto a language model with no change to its shape. Only two pieces get reinterpreted. The state stops being a single number and becomes the whole text so far. The rule stops being halve-and-add-one and becomes the model together with its sampler. Everything else, the looping, the settling, the attractors, comes along for free.

## The loop, drawn

Picture one step of generation. The model has some text in front of it, it computes what should come next, something picks an actual token, and that token is glued onto the end of the text. Now the model has slightly more text in front of it, and the step repeats.

```text
        ┌──────────────────────────────────────────────┐
        │                                              │
        ▼                                              │
  ┌───────────┐     ┌──────────┐     ┌──────────┐      │
  │  state    │     │  model   │     │ sampler  │      │
  │  s_t      │ ──▶ │  builds  │ ──▶ │  picks   │ ──▶  ┘
  │ (context  │     │ P(·|s_t) │     │ token w  │   append w
  │  so far)  │     │ over V   │     │          │   s_{t+1}=s_t‖w
  └───────────┘     └──────────┘     └──────────┘
       ▲                                              
       │  the emitted token is now part of the input  
       └──────────────────────────────────────────────
```

Four moves, in a circle. Start with the context. The model turns it into a distribution over what comes next. The sampler draws one token from that distribution. The token is appended, which produces a new, longer context, and you are back at the start with the loop closed. The arrow that bends back from the appended token to the input is the whole story of this course. The model's own output becomes its own next input.

That returning arrow is not a diagram convenience. It is a feedback loop, in the same sense an audio engineer means it.

## The squeal

Hold a live microphone up to the speaker it is feeding. For an instant nothing happens. Then a thin tone appears, swells, and within a second the room fills with a single piercing squeal that drowns out everything else. The mechanism is simple. The speaker emits sound, the microphone picks it up, the system amplifies it and sends it back out the speaker, where the microphone catches it again, louder. Output re-enters as input and amplifies itself on every pass, and whatever frequency the loop happens to favor wins, climbs, and locks the system onto one self-sustaining tone. Pull the mic away and the squeal dies, because you have broken the loop.

An LLM generating text has the same return path. The token it emits this step is part of what it reads next step, so on every step the model conditions on its own prior output. Give that loop a phrasing it leans toward and the preference can feed itself: emitting "joyful, cheerful, content, pleased" makes the context look like a place where "joyful, cheerful, content, pleased" belongs, which makes emitting it again the natural next move. The synonym list squealed. The return path that makes this possible has a name.

## Definition (The generation map)

For a language model, the **state** $s_t$ is the **context**: the full sequence of tokens so far. Writing $V$ for the vocabulary and $w \in V$ for a single sampled token, one step of autoregressive generation is

$$
s_{t+1} = f(s_t), \qquad f = \text{model} + \text{sampler},
$$

unfolding in two stages:

$$
\underbrace{s_t \;\longmapsto\; P(\cdot \mid s_t)}_{\text{model}}
\qquad
\underbrace{P(\cdot \mid s_t) \;\longmapsto\; w}_{\text{sampler}}
\qquad
s_{t+1} = s_t \,\Vert\, w .
$$

Here $P(\cdot \mid s_t)$ is the **next-token distribution**: a probability assigned to every token in $V$, conditioned on the context $s_t$. The sampler turns that distribution into one concrete token $w$. The symbol $\Vert$ means **append**: $s_t \,\Vert\, w$ is the old context with $w$ stuck on the end.

Read the notation straight off the loop diagram. The state $s_t$ is the box on the left, the context so far. The map $f$ is the entire circuit, model and sampler together, because you need both to get from one state to the next: the model alone only gives you a distribution, not a token, and the sampler alone has nothing to draw from. The first stage, $s_t \mapsto P(\cdot \mid s_t)$, is the model reading the context and producing the next-token distribution over the vocabulary. The second stage, $P(\cdot \mid s_t) \mapsto w$, is the sampler committing to one token. And $s_{t+1} = s_t \,\Vert\, w$ is the bent-back arrow: append the token, get a longer context, hand it back as the next state. This is the iterated map $x_{t+1} = f(x_t)$ from module 1, with the state grown from a number into a sequence and the rule grown from arithmetic into a neural network plus a sampling step.

The formalism also settles what counts as the state. It is not the last token. It is the *whole* context, because the model conditions on all of it. A state that left out earlier tokens would not be enough to compute the next step, and module 1 was firm that a state has to be sufficient. The growing context is the price of that sufficiency, and it is also why this loop has the memory it needs to lock onto a pattern.

<details><summary>Check yourself: in the map $s_{t+1} = f(s_t)$ for an LLM, which part is the model and which is the sampler, and why do you need both to call $f$ a map?</summary>

The model performs the first stage, $s_t \mapsto P(\cdot \mid s_t)$: it reads the context and produces the next-token distribution over the vocabulary. The sampler performs the second stage, $P(\cdot \mid s_t) \mapsto w$: it draws one concrete token from that distribution. You need both because a map must take a state to a *state*. The model alone stops at a distribution, which is not a context; the sampler alone has no distribution to draw from. Only the two chained together turn $s_t$ into $s_{t+1}$.

</details>

## Self-conditioning: the engine of the loop

The returning arrow deserves its own name, because nearly every phenomenon in this course runs on it.

## Definition (Self-conditioning)

**Self-conditioning** is the property that an emitted token becomes part of the context the model reads on the next step, so the model conditions on its own prior output. Because $s_{t+1} = s_t \,\Vert\, w$, the token $w$ that the model just produced sits inside the very state $s_{t+1}$ that determines the next distribution $P(\cdot \mid s_{t+1})$.

This is positive feedback, the squeal stated formally. The model emits a token; that token re-enters the input; the distribution shifts to reflect it; the shifted distribution makes related tokens likelier; those re-enter in turn. A phrasing the model favors amplifies itself, each emission making the next of the same kind a little more probable, exactly as each pass through the microphone made the favored tone a little louder. Run it long enough and the trajectory can settle onto a fixed point, a single token repeated, or a short cycle like the four words in the synonym list. The basin from module 1, the set of starts that funnel to one place, has an LLM analogue: a region of contexts that self-conditioning pulls toward the same degenerate text.

Self-conditioning is not a defect bolted onto the model. It is the direct consequence of feeding output back as input, the only way an autoregressive model can write more than one token. The loop that lets a model hold an argument together across a paragraph is the same loop that, pointed the wrong way, traps it in "joyful, cheerful, content, pleased." The question is never whether the loop exists. It is which state the loop pulls toward, and whether that is a state you want.

## Two loops, not one

So far the loop has run inside a single generation, one token at a time. There is a second loop, larger and slower, and keeping the two apart matters for the rest of the course.

The **inner loop** is what the generation map describes: token by token within one response. Each turn of this loop adds one token to the context. Repetition traps and degenerate runs like the synonym list live here, in token space, inside a single call to the model.

The **outer loop** runs whole outputs back through the model as fresh inputs. Ask a model to paraphrase a sentence, take its paraphrase, ask it to paraphrase *that*, and keep going. Or summarize a summary of a summary. Each pass is one turn of a loop whose state is an entire text and whose step is a complete generation. The inner loop's "token" becomes the outer loop's "whole output," the same iterated-map structure at a coarser grain.

The outer loop is where clean attractors have actually been measured. Wang and colleagues, in a 2025 paper at ACL, ran the paraphrase-of-paraphrase loop systematically and found that it does not wander through endless rephrasings. It converges. After a few rounds the model shuttles between two phrasings, A becoming B becoming A again, a stable 2-cycle of the kind module 1 found in the logistic map past $r = 3$. They attribute it to the model's pull toward forms it favors, self-conditioning at the scale of whole texts, and they show that injecting randomness into the sampler disrupts the cycle at some cost to faithfulness. The outer loop, fed its own output across calls, settles into a periodic cycle you can point to and count.

<details><summary>Check yourself: a model repeats the same sentence over and over inside one answer. Is that the inner loop or the outer loop? What about a paraphrase-of-a-paraphrase that keeps flip-flopping between two wordings across separate calls?</summary>

The repeated sentence inside one answer is the **inner loop**: token-by-token generation within a single response, the state growing one token at a time until it locks onto a repeating run. The flip-flopping paraphrase across separate calls is the **outer loop**: each whole output is fed back as a whole input, and the state at each turn is an entire text rather than a single token. Same iterated-map structure, different grain, different state.

</details>

## How exact is "attractor" here?

The honesty has to be paid now, because the rest of the course leans on this loop and it would be cheap to oversell it.

The iterated-map *structure* is exact. Generation genuinely is $s_{t+1} = f(s_t)$: a state, a fixed rule, output fed back as the next input. There is nothing metaphorical about the loop, and the synonym list and the paraphrase cycle are real trajectories of a real map.

The word **attractor**, applied to that map, is partly borrowed. Module 1's attractors lived in deterministic maps, where the same state always produces the same next state and trajectories provably converge. A sampler is not deterministic: above zero temperature it draws a *random* token, so $f$ is a random map, and "attractor" has to be reread as a distribution the process concentrates on rather than a point it is guaranteed to reach. There is more to confess than that, and a later module makes the full accounting. For now, hold the two halves apart: the loop is measured, the attractor language is a powerful borrowing that fits in places and strains in others.

## Exercises

**1.** Write out the four steps of the generation map for a single token, in order, naming the state, the model's job, the sampler's job, and the append. Use the symbols $s_t$, $P(\cdot \mid s_t)$, $w$, $s_{t+1}$.

<details><summary>Show solution</summary>

(1) The state is the context so far, $s_t$. (2) The model maps it to the next-token distribution, $s_t \mapsto P(\cdot \mid s_t)$, a probability over every token in the vocabulary $V$. (3) The sampler draws one concrete token from that distribution, $P(\cdot \mid s_t) \mapsto w$. (4) The token is appended to make the next state, $s_{t+1} = s_t \,\Vert\, w$, and the loop returns to step 1 with $s_{t+1}$ in place of $s_t$. The pair model-then-sampler is exactly $f$, so the four steps are one application of $s_{t+1} = f(s_t)$.

</details>

**2.** Explain in one or two sentences why the state $s_t$ has to be the entire context and not just the most recently emitted token.

<details><summary>Show solution</summary>

The model conditions on the whole sequence, so the next-token distribution depends on tokens far back, not only the last one. A state that kept only the last token would not be sufficient to compute the next step, and module 1 required a state to be sufficient. Dropping earlier tokens would draw the system boundary in the wrong place.

</details>

**3.** Map the audio-feedback squeal onto self-conditioning, piece by piece: what plays the role of the speaker's output, the microphone's pickup, the amplification, and the locked-in tone?

<details><summary>Show solution</summary>

The speaker's output is the emitted token $w$. The microphone's pickup is the append $s_{t+1} = s_t \,\Vert\, w$, which feeds that token back into the input. The amplification is the next-token distribution shifting to make related tokens likelier because $w$ is now in the context. The locked-in tone is the attractor the trajectory settles onto, a single repeated token or a short cycle like the synonym list, where one pattern has fed itself until it dominates. The shared mechanism is positive feedback: output re-enters as input and reinforces itself.

</details>

**4.** (Conceptual.) A colleague says self-conditioning is a flaw that should be engineered out of language models. Give the strongest case against that claim.

<details><summary>Show solution</summary>

Self-conditioning is not an add-on; it is feeding output back as input, which is the only way an autoregressive model can produce more than one token. Remove it and the model cannot condition a later token on an earlier one, so it cannot stay on topic, hold an argument together, or finish a sentence coherently. The same loop that maintains coherence across a paragraph is the loop that, pointed the wrong way, produces a repetition trap. The right goal is not to remove the loop but to control which state it pulls toward.

</details>

**5.** (Conceptual.) The paraphrase-of-paraphrase result found a 2-period cycle in the outer loop. Connect this to the logistic map from module 1: what is the analogue of the state, the rule, and the cycle?

<details><summary>Show solution</summary>

The state is a whole text (the current paraphrase), playing the role the number $x_t$ played in the logistic map. The rule is one full generation, "paraphrase this," playing the role of $x_{t+1} = r\,x_t(1-x_t)$. The cycle is the model shuttling between two phrasings, A to B to A to B, the same 2-cycle the logistic map reaches past $r = 3$, where the trajectory settles onto two values and returns to each every two steps. The structure matches; what differs is that the LLM's rule is stochastic, so the cycle is measured empirically rather than guaranteed.

</details>

## Recap

A language model and its sampler form a single iterated map $s_{t+1} = f(s_t)$, with the context as the state and one token appended each step, so module 1's whole vocabulary of trajectories and attractors transfers onto text intact. The returning arrow in that loop is self-conditioning: the model reads its own emitted tokens, which is positive feedback in the same sense the audio squeal is, and it lets a favored phrasing amplify itself into a fixed point or a cycle. The same loop runs at two grains, token by token inside one generation and whole-output-fed-back across calls, and the outer loop is where a 2-period paraphrase cycle has actually been measured. The structure is exact while the attractor language is a borrowing whose seams a later module will trace. With the loop and its feedback engine in hand, the failures the rest of the course catalogs all become questions about which state this map pulls toward.
