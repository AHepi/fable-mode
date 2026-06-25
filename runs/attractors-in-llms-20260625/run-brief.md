---
runId: attractors-in-llms-20260625
topic: Attractors in Large Language Models — what they are, how they emerge, and how people mitigate them
slug: attractors-in-llms
assumedBackground: >
  Intermediate. Comfortable with how LLMs work at a working level — tokens, autoregressive
  next-token prediction, sampling (temperature/top-p), the idea of training vs. inference,
  prompting, and roughly what RLHF/fine-tuning are. Does NOT assume dynamical-systems theory,
  measure theory, or the ability to read research math fluently. No transformer-internals
  expertise required (attention math is not assumed).
kind: stem
mode: autonomous
gates: []
createdAt: 2026-06-25
---

## Interpretation notes

**What "attractor" means here.** The course teaches "attractor" as a borrowed concept from
dynamical systems applied to LLMs: a state (or region of states) that a generative trajectory
tends to fall into and stay in, regardless of small variations in where it started. Two related
but distinct senses are taught and kept separate:
  1. **Token/output-space attractors** — degenerate behaviors the *decoding* process converges
     to: repetition loops, mode collapse / low-diversity boilerplate, "I'm sorry, I can't" refusal
     spirals, degeneration.
  2. **In-context / persona attractors** — behavioral basins the *conversation* falls into and
     reinforces over many turns: sycophancy, persona drift, the "Waluigi effect," doom/role-play
     lock-in, jailbreak ratchets.
The dynamical-systems vocabulary (state, trajectory, fixed point, cycle, basin of attraction,
contraction, perturbation) is the connective spine, taught at the intuition level — NOT a
measure-theoretic treatment.

**Scope — in.** Concept of an attractor (intuition + light formalism); LLM generation framed as
iterated dynamics; the catalog of empirically observed attractors (repetition/degeneration,
mode collapse, sycophancy, persona drift, Waluigi/role-play lock-in, refusal & over-refusal
spirals); *why* they emerge (training objective & exposure bias, likelihood vs. quality, RLHF
reward shaping, self-conditioning on context, distributional pull of pretraining corpora);
*how people mitigate* them at each layer (decoding-time: repetition penalty, top-p/top-k,
temperature, contrastive/typical sampling, no-repeat-ngram; training-time: unlikelihood training,
RLHF/DPO tradeoffs, diversity objectives; inference/prompt-time: system prompts, periodic
re-grounding, context management; mechanistic: steering vectors / activation steering, persona
features). How to recognize/measure them. What is still open.

**Scope — out.** Full transformer architecture derivation; attention-weight math; rigorous
dynamical-systems / ergodic theory; training infrastructure; a literature survey for its own
sake. Mitigations are taught as *understandable mechanisms with tradeoffs*, not as a tuning
cookbook.

**Rigor.** Mostly prose + intuition. Light formalism allowed where it earns its place: the
iterated-map view ($x_{t+1}=f(x_t)$), what a fixed point / basin is, why a repetition penalty
changes the map's dynamics, a tiny worked iterated-map example. No proofs. KaTeX used sparingly
for the few genuinely-formal objects; everything else is prose.

**Audience can be taken to already know:** what a token is, autoregressive generation, that
sampling has a temperature/top-p knob, what a prompt and a system prompt are, the gist of
fine-tuning and RLHF. They have likely *seen* an LLM repeat itself or get sycophantic but lack
a framework for *why*.

**Ambiguity calls.** "Attractors in LLMs" is a loosely-used term in the community; it spans the
two senses above. Rather than pick one, the course teaches the shared underlying idea and then
both families, because the user explicitly asked for "what they are, how they emerge, what people
have done to mitigate them" — which maps cleanly onto: concept → emergence → mitigation. Running
autonomously (gates: []) per the user's "just do it" instruction; curriculum still self-verified.
