# Curriculum — How JEPA Works

Run: `jepa-20260614` · Audience: **no machine-learning background** (curious adult; everyday
reasoning + very light arithmetic). Planned from `01_research/output/research.md`.

---

## Course metadata

- **title:** How JEPA Works
- **description:** How JEPA learns from images and video by predicting the gist of what's hidden
  instead of the raw pixels — built from scratch for readers new to machine learning, and how it
  differs from LLMs.
- **level:** intro
- **kind:** stem
- **prerequisites (plain language):**
  - Curiosity about AI — no machine-learning background needed.
  - Comfort with everyday reasoning and very light arithmetic (a list of numbers; the idea of two
    things being close or far apart).
  - Helpful but not required: having used an AI chatbot such as ChatGPT.
- **tags:** [machine-learning, ai, self-supervised-learning, jepa, world-models, deep-learning]
- **estimatedHours:** 3

---

## Design notes (how the arc works)

The course is a single story with a **spine**: *when part of the world is hidden, you can either
paint in every missing detail (the generative way, what LLMs and image generators do) or predict the
**gist** of what's missing (the JEPA way).* Modules 1–5 build the from-scratch toolkit a no-ML
reader needs (encoder → representation space → training → self-supervised learning). Modules 6–9 are
the heart: the generative approach and its waste (6), the JEPA core (7), why it pays off (8), and the
collapse failure-mode and its fix (9). Modules 10–11 are the two concrete instances the reader asked
for (I-JEPA, V-JEPA). Module 12 is the payoff: world models, the full LLM contrast, and an honest
"where this is going." The **LLM contrast** is introduced in module 1 and recurs as a one-line beat
from module 6 on, consolidated only in module 12 (per the canon ledger). Most modules carry little
or no math — expected and correct for this audience (see brief).

Decisions on the research stage's open questions: **collapse + its fix = one module** (9), taught at
the intuition level with an explicit honest "why this works is still studied" line. **World-model
motivation closes the course** (module 12) and is *previewed* in the module-1 hook — it bookends.
**V-JEPA 2 stays a coda** inside module 12, not its own module.

---

## Prerequisite graph

```
01 Filling in the blank (framing; LLM-contrast seed; world-model preview)
        │
02 The black box → a list of numbers (encoder)
        │
03 Representation space: similar things sit close   ◄── KEYSTONE
        │
04 How a machine gets less wrong (training)
        │
05 Learning with no teacher (self-supervised; shared with LLMs)
        │
06 Predicting the pixels — and why it's wasteful (generative + the waste)
        │
07 The big idea: predict the gist, not the thing (JEPA core: context/target encoder + predictor)
        ├──────────────┐
08 Why the gist is      09 The cheater's shortcut & how to stop it (collapse + EMA/stop-grad/masking)
   the whole point           │
        │                    │
        └─────────┬──────────┘
10 I-JEPA: on images (needs 07, 09)
        │
11 V-JEPA: on video (needs 10)
        │
12 World models, LLMs, and the bigger bet (capstone; needs 08, 11)
```

No module depends on a later one. The two keystones that spiral back (per research): **representation
space** (owned by 03) and **predict-the-representation** (owned by 07) are recalled in every later
module by design.

---

## Module specs

### 01 — Filling in the Blank
- **slug:** `01-filling-in-the-blank`
- **summary:** The question JEPA is built to answer — how a machine could learn about the world on
  its own — and the course's central fork: when something is hidden, predict its gist or paint in
  every detail?
- **objectives:**
  - Describe, in plain terms, the problem JEPA addresses (learning about the world without human labels).
  - Distinguish "predicting the gist" from "reconstructing every detail" intuitively.
  - State the headline difference between JEPA and LLMs that the course will unpack.
- **prerequisites:** none
- **estimatedMinutes:** 14

### 02 — The Black Box That Turns Things Into Numbers
- **slug:** `02-the-black-box`
- **summary:** What a model (an encoder) is, at the only level JEPA needs: a black box that takes an
  input like a photo and hands back a list of numbers.
- **objectives:**
  - Explain what an encoder does (an input goes in; a list of numbers comes out).
  - State that the inner workings (the "neural network") can be treated as a black box for this course.
  - Give an example of an input and the kind of number-list an encoder produces.
- **prerequisites:** 01
- **estimatedMinutes:** 12

### 03 — A Place Where Similar Things Sit Together
- **slug:** `03-representation-space`
- **summary:** What the encoder's list of numbers *means* — a point in "representation space," where
  similar inputs land close together and distance measures how different two things are.
- **objectives:**
  - Define a representation (embedding) as a point that summarizes an input.
  - Explain how distance in representation space encodes similarity.
  - Judge whether two given inputs land near or far in representation space, and say why.
- **prerequisites:** 02
- **estimatedMinutes:** 16

### 04 — How a Machine Gets Less Wrong
- **slug:** `04-how-machines-learn`
- **summary:** What "learning from data" means: a black box that starts useless, measures how wrong
  it is, and is nudged again and again until it is less wrong.
- **objectives:**
  - Describe training as the loop of measuring error and adjusting to reduce it.
  - Explain "error" as a distance between a prediction and the desired answer.
  - State that the adjustment machinery can itself be treated as a black box here (no equations needed).
- **prerequisites:** 02, 03
- **estimatedMinutes:** 14

### 05 — Learning With No Teacher
- **slug:** `05-self-supervised-learning`
- **summary:** Self-supervised learning — hiding part of the data and predicting it from the rest, so
  the data labels itself and no human is needed — the foundation that LLMs and JEPA share.
- **objectives:**
  - Distinguish supervised learning (human labels) from self-supervised learning (hide-and-predict).
  - Explain how hiding part of an input manufactures a free prediction target.
  - Identify self-supervision as the common ground between LLMs and JEPA.
- **prerequisites:** 04
- **estimatedMinutes:** 15

### 06 — Predicting the Pixels, and Why It's Wasteful
- **slug:** `06-generative-prediction`
- **summary:** The generative way to fill the blank — predict the actual hidden pixels or words, as
  image generators and LLMs do — and its catch: chasing every unpredictable detail wastes the model's
  effort.
- **objectives:**
  - Describe generative/reconstructive prediction (rebuilding the raw hidden signal).
  - Explain why some detail is unpredictable and why chasing it wastes the model's capacity.
  - Connect next-token prediction in LLMs to this generative approach.
- **prerequisites:** 05
- **estimatedMinutes:** 16

### 07 — The Big Idea: Predict the Gist, Not the Thing
- **slug:** `07-the-jepa-core`
- **summary:** JEPA's core move — encode the hidden part into its gist, then predict that gist from
  the visible part, comparing in representation space — built from a context encoder, a target
  encoder, and a predictor.
- **objectives:**
  - Lay out JEPA's three pieces (context encoder, target encoder, predictor) and what each does.
  - Explain that the prediction and comparison happen in representation space, not pixel space.
  - Contrast the JEPA core with the generative approach from module 06.
- **prerequisites:** 06, 03
- **estimatedMinutes:** 18

### 08 — Why Predicting the Gist Is the Whole Point
- **slug:** `08-why-latent-prediction`
- **summary:** The payoff — predicting in representation space lets a model stay vague exactly where
  the world is unpredictable, discarding noise and keeping what matters, which is why it learns more
  useful summaries than pixel-prediction does.
- **objectives:**
  - Explain how latent prediction lets a model ignore unpredictable detail.
  - Argue why this tends to yield more useful representations than reconstruction.
  - Apply the idea to a concrete example with both predictable and unpredictable parts.
- **prerequisites:** 07
- **estimatedMinutes:** 15

### 09 — The Cheater's Shortcut, and How to Stop It
- **slug:** `09-collapse-and-the-fix`
- **summary:** Representation collapse — the trivial cheat of giving everything the same answer — and
  the asymmetry that prevents it: a slow-moving (EMA) target encoder, a stop-gradient, and masking.
- **objectives:**
  - Describe representation collapse and why predicting in representation space invites it.
  - Explain how a slowly-updated target encoder and a stop-gradient discourage the cheat.
  - State honestly that exactly *why* this works is still an open research question.
- **prerequisites:** 07, 04
- **estimatedMinutes:** 18

### 10 — I-JEPA: Doing It on Images
- **slug:** `10-i-jepa`
- **summary:** The image instance end to end — hide several target blocks, encode a visible context
  block, and predict the hidden blocks' representations — with no pixel decoder and no hand-crafted
  data augmentations.
- **objectives:**
  - Walk through the I-JEPA pipeline on a single image.
  - Explain why I-JEPA needs no pixel decoder and no hand-crafted augmentations.
  - Connect each I-JEPA piece back to the general JEPA core from module 07.
- **prerequisites:** 07, 09
- **estimatedMinutes:** 16

### 11 — V-JEPA: The Same Idea on Video
- **slug:** `11-v-jepa`
- **summary:** Carrying JEPA to video — predicting the representations of regions masked across space
  and time — and why video is an especially rich teacher of how the world behaves.
- **objectives:**
  - Explain how V-JEPA extends masked latent prediction to video (space and time).
  - Describe what video data teaches that still images cannot.
  - Connect V-JEPA back to I-JEPA and the JEPA core.
- **prerequisites:** 10
- **estimatedMinutes:** 15

### 12 — World Models, LLMs, and the Bigger Bet
- **slug:** `12-world-models-and-the-bet`
- **summary:** The synthesis — how predicting future representations turns JEPA into a "world model"
  that could plan, how the whole approach stacks up against LLMs, and where the research is honestly
  headed.
- **objectives:**
  - Explain what a "world model" is and how predicting future representations could support planning.
  - Summarize the full set of differences — and the honest similarities — between JEPA and LLMs.
  - State the open, unproven status of JEPA as a research direction, without overclaiming.
- **prerequisites:** 08, 11
- **estimatedMinutes:** 17

---

**Total:** 12 modules · ~196 minutes (~3 hours). Within the 8–14 first-course band.
