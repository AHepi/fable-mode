# Canon — Attractors in Large Language Models

The course's consistency contract. **Binding** on every authoring sub-agent and on the editorial
stage. One call per item, no TBDs. Its job is to stop eleven blind-parallel authors from drifting.

## 1. Symbol & naming registry

One symbol and one name for every recurring object.

| Thing | Canonical symbol / name | Notes / legitimate exceptions |
|-------|-------------------------|-------------------------------|
| The repeated rule (iterated map) | $f$ | "the map" or "the rule" in prose; $f = \text{model} + \text{sampler}$ for LLMs |
| A scalar state (abstract / logistic examples) | $x_t$ | the toy 1-D state at step $t$; fixed point $x^\star$ |
| The LLM state (the context so far) | $s_t$ | "the context" in prose; $s_{t+1} = s_t \,\Vert\, w$ (append token $w$) |
| Fixed point | $x^\star$ | "a fixed point": $f(x^\star)=x^\star$ |
| Step / time index | $t$ | discrete time only; never use $t$ for temperature |
| Logistic-map parameter | $r$ | the single knob |
| Sampling temperature | $\tau$ | always $\tau$, never $T$ (avoids clashing with the time index) |
| Top-p / nucleus threshold | $p$ | the cumulative-probability cutoff |
| Top-k cutoff | $k$ | |
| Next-token distribution | $P(\cdot \mid s_t)$ | "the next-token distribution" |
| Vocabulary | $V$ | context space is $V^L$ when its size is discussed |
| The core phenomenon | **attractor** | never "attractor state"/"sink"/"absorbing state" in prose; one word |
| Its catchment | **basin of attraction** ("basin") | not "well"/"catchment"/"trough" as the *term* (those may appear once inside the valley image) |
| Repeating-loop attractor | **periodic cycle** ("cycle", "2-cycle") | never "oscillation"/"limit cycle" in prose (limit cycle is continuous-time) |
| The feedback mechanism | **self-conditioning** | the one name for "the model conditions on its own output"; not "self-reinforcement" as the *noun* (that word describes the *effect*, used sparingly) |
| Output-loop sense | **output-space attractor** | the token/response family (M3, M4, M7-refusal) |
| Conversation sense | **in-context attractor** | the persona/behavior family (M5, M6, M7-jailbreak) |
| Greedy/argmax decoding pathology | **the likelihood trap** | not "the probability trap"/"the MLE trap" |
| Train/test prefix mismatch | **exposure bias** | one term |
| One model, inference-time diversity loss | **mode collapse** | |
| Multi-generation training decay | **model collapse** | always distinguished from mode collapse by name |
| Telling the user what they want to hear | **sycophancy** | |
| Losing / over-committing an assigned persona | **persona drift** (loss) / **role lock-in** (over-commit) | two named sub-cases of one mechanism |
| Multi-turn accumulation jailbreak | **jailbreak ratchet** | the ratchet metaphor is owned by M7 |
| Over-cautious refusal | **over-refusal** | inside "the refusal basin" |
| Inference-time direction push | **activation steering** ("steering vector") | not "activation addition" in prose except when naming the ActAdd method |
| The robustness probe | **the perturbation test** (a.k.a. **resampling test**) | the one detection method name; owned by M10, calls back M1's nudge |

**Math budget (the only KaTeX that earns its place).** The iterated map $x_{t+1}=f(x_t)$; the linear
toy map $f(x)=\tfrac12 x + 1$ and its fixed point; the logistic map $x_{t+1}=r\,x_t(1-x_t)$ with the
verified onset numbers ($r=3$ for the 2-cycle, period-4 at $r=1+\sqrt6\approx3.449$, chaos near
$3.56995$); the stability rule of thumb $|f'(x^\star)|<1$; the softmax-with-temperature
$P_i \propto \exp(z_i/\tau)$; the top-p cumulative-mass cutoff; the repetition-penalty logit edit; the
LLM map $s_{t+1}=f(s_t)$. **Everything else is prose.** No proofs. No attention/transformer math.

**Verified numbers (safe to print):** logistic onsets above; Feigenbaum $\delta\approx4.669$; linear
map $f(x)=\tfrac12x+1$ has $x^\star=2$. The logistic period-3 window ($r\approx3.83$) is `[verify]` —
do **not** print a specific value; say "a period-3 window appears" without the number, or omit.

## 2. "Already-taught" ledger & dedup plan

Each shared fact has **one owner module** (full treatment); every later use is a one-line **callback**,
not a re-derivation.

| Fact / concept | Owner (full treatment) | Called back in | Suggested callback line |
|----------------|------------------------|----------------|--------------------------|
| Attractor / fixed point / basin / cycle / stability vocabulary | M1 | M2–M11 | "the basin from module 1 — the set of starts that funnel to one place" |
| The logistic map (fixed point → cycle → chaos) | M1 | M3, M11 | "the same fixed-point-to-cycle move the logistic map made in module 1" |
| Ball-in-a-valley landscape | M1 | M5, M7, M10 | "picture the valley again: nudge the ball and it rolls back" |
| LLM generation = iterated map $s_{t+1}=f(s_t)$ | M2 | M3–M11 | "generation is the iterated map from module 2: model plus sampler" |
| Self-conditioning (the feedback engine) | M2 | M3, M5, M6, M7, M9 | "self-conditioning again — the model's own tokens become its next input" |
| Inner vs. outer loop | M2 | M3 (inner), M6/M7 (outer) | "the outer loop from module 2: a whole turn fed back as input" |
| The likelihood trap | M3 | M8 | "the likelihood trap from module 3 — argmax text isn't human text" |
| Exposure bias | M3 | M9 | "exposure bias: the model never trained on its own mistakes" |
| Mode vs. model collapse distinction | M4 | M8 (mode), M11 | "mode collapse — reversible at the sampler, unlike model collapse" |
| Sycophancy + RLHF double-edge | M5 | M7, M9 | "the RLHF double-edge from module 5: the aligner that also caused the rut" |
| Epistemic grading (measured/empirical/metaphor) | M6 | M7, M10, M11 | "grade the claim, as in module 6: measured, observed, or just a metaphor?" |
| Refusal basin / jailbreak ratchet | M7 | M9 | "the refusal basin from module 7" |
| The decoding toolkit (temp/top-p/etc.) | M8 | M9, M10 | "top-p from module 8 — the smallest set of tokens covering mass $p$" |
| Activation steering / refusal direction | M9 | M11 | "the refusal direction from module 9" |
| The perturbation test | M10 | M11 | "the perturbation test from module 10: nudge it, see if it falls back" |
| Hopfield as the rigorous baseline | M11 | — | (owner; not called back) |

**Rule:** a writer who needs a fact owned by an earlier module gives a one-line reminder and moves on.
A fresh re-derivation of someone else's fact is the bug the editorial stage will cut.

## 3. Metaphor-ownership map

One running image per module. Each passes point-true / pay-off / cash-into-the-mechanism.

| Image / metaphor | Owner module | Why it points true |
|------------------|--------------|---------------------|
| **Ball in a valley / marble in a bowl with several dips** | M1 | This *is* the energy-landscape picture (Hopfield); basin = the dip's catchment, stability = rolls back when nudged. The course's primary image. |
| **Audio feedback squeal** (mic near its own speaker locks onto one tone) | M2 | Literal positive feedback: output re-enters as input and self-amplifies to a self-sustaining state — exactly self-conditioning. |
| **A skipping record** (needle stuck in one groove) | M3 | A literal repeating loop = a fixed point/short cycle in token space. |
| **A photocopy of a photocopy** (each copy degrades) | M4 | Model collapse: training on a model's own output, generation after generation, loses the tails. (Mode collapse contrasted in plain terms.) |
| **A flattering mirror / a yes-man** | M5 | Sycophancy reflects the user's stated view back, adjusting to please — the basin deepens with each agreement. |
| **An actor who can't break character** | M6 | The simulator runs a simulacrum; the conversation is evidence for "this is who I am," so the next line stays in character. |
| **A one-way ratchet** | M7 | A ratchet turns only one way: each compliant turn makes refusing now *inconsistent* with the visible history, so the jailbroken state holds. |
| **(no central metaphor — show the artifact)** | M8 | A mechanism module: show the actual logit/softmax reshaping and a worked next-token table, not an analogy. A light "widening vs. narrowing the doorway" line is allowed once for truncation, not developed. |
| **Nudging the rudder** | M9 | Activation steering adds a direction to the residual stream — a small, persistent push that changes course; a steering vector is literally a direction. |
| **(reuses M1's valley — the poke test)** | M10 | The perturbation test *is* nudging the ball: does it roll back (basin) or roll away (transient)? Calls back M1, owns no new image. |
| **Map vs. territory** | M11 | The dynamical-systems "attractor" is a map laid over the territory of a stochastic, discrete, non-stationary system; it fits in places and tears in others. |

**Ownership is not endorsement of overuse.** Earworm and gravity-well images are **cut** (they oversell
determinism); if a writer wants the earworm for a cycle, it may appear *once*, explicitly labeled "an
analogy," and must hand off to the mechanism. No second accent metaphor per module.

## 4. Stock-phrase caps

Phrases that go limp through eleven modules. Keep the strongest instance; vary the rest.

| Phrase | Cap | Keeper module |
|--------|-----|---------------|
| "falls into" / "slides into" (a basin) | 3 total across the course | M3, M5, M7 (vary verbs elsewhere: settles, sinks, locks, funnels, gets pulled) |
| "self-reinforcing" (as adjective) | 2 total | M3, M5 (use "self-conditioning" as the named noun mechanism instead) |
| "regardless of where it started" | 2 total | M1 (definition), one callback |
| "the model conditions on its own output" | reword each time | M2 owns the full line; later modules vary the phrasing |
| "Once …, it tends to stay" | 2 total | M1 or M7 keeper |
| "grade the claim" / "measured vs. metaphor" | keep crisp, vary wording | M6 owns; M10/M11 rephrase |
| "the same mechanism at a different scale" | 2 total | M5 (first cross-over), M11 (synthesis) |

## 5. Voice target

One narrator across all eleven modules: a researcher who knows *both* the dynamical-systems machinery
and the LLM empirics, and who refuses to let a vivid word outrun the evidence. **Register:** technically
literate but plain — talks to a sharp practitioner, not a layperson and not a theoretician. Concrete
nouns, living verbs, short-to-medium sentences with varied openings. **Warmth:** confident and direct,
never soothing or hand-holding; difficulty is named and crossed, not apologized for. **The signature
move** is honesty about the metaphor: state the intuition boldly, then say in the same breath which part
is measured and which is borrowed. No hype, no "in this module we will," no rhetorical-question or
one-line-fragment tic repeated across modules. Open and unfold each module differently (M1 a hand
computation, M2 the loop diagram, M3 a degenerate transcript, M4 a contrast, M5 a conversation, M6 a
framing, M7 an attack trace, M8 a worked next-token table, M9 a mechanism, M10 a test, M11 a reckoning).
Drift to correct: keep M8–M9 (mechanism-heavy) from going dry — anchor each in a concrete failure it
fixes, the way M1–M3 stay concrete.
</content>
