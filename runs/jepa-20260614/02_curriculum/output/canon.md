# Canon — How JEPA Works

The course's consistency contract. **Binding** on every authoring sub-agent and on the editorial
stage. One call per item; no TBDs. This is a low-math, intuition-first course — the registry is
mostly *names and plain glosses*, not symbols.

## 1. Symbol & naming registry

One name (and one plain gloss) per recurring thing. Introduce each in plain words **before** naming
it; after the owner module, use the canonical name.

| Thing | Canonical name | Plain gloss (use on first mention) | Notes / exceptions |
|-------|----------------|-------------------------------------|--------------------|
| The data piece going in | **input** | "a piece of data — say, a photo" | "data" is fine; avoid "sample/example" as jargon |
| The hidden vs. shown parts | **hidden part** / **visible part** | — | technical names **target** (hidden) and **context** (visible) are introduced in module 07; before 07 use "hidden/visible part" |
| The box: input → numbers | **encoder** | "a black box: a photo goes in, a list of numbers comes out" | "model" = the whole system; "encoder" = this box. Name "neural network" **once** (module 02) as the kind of black box, then treat as plumbing |
| The list of numbers it outputs | **representation** | "a list of numbers that summarizes the input" | say "embedding" **once** in module 03 as the synonym, then always "representation" |
| The space those lists live in | **representation space** | "a space where each input is a point" | say "latent space" **once** (module 07 or 08) as the technical synonym, then "representation space" |
| Closeness of two representations | **distance** | "how far apart two lists of numbers are" | small distance = similar. Do not introduce a metric symbol |
| JEPA's three parts | **context encoder**, **target encoder**, **predictor** | context encoder reads the visible part; target encoder summarizes the hidden part; predictor guesses the hidden part's representation | owner module 07. Keep these three names exact everywhere after |
| The slow-updating copy | **slow-moving target encoder** | "an answer key that updates slowly" | name **EMA (exponential moving average)** once in module 09, then "slow-moving"; **stop-gradient** named once, glossed "the lesson isn't allowed to change the answer key" |
| How-wrong measure | **error** | "how far the guess is from the answer" | name "**loss**" once (module 04) as the technical term, then use "error". It is a *distance* (ties to module 03) |
| The two big approaches | **generative prediction** (a.k.a. reconstruction) vs. **latent prediction** (predicting the representation) | generative = rebuild the raw hidden pixels/words; latent = predict the gist | JEPA's approach is "latent prediction" / "predicting the representation". Don't call JEPA "generative" |
| Text models | **LLM (large language model)** | "the kind of AI behind chatbots" | **token** = "a word or word-piece" (gloss once); **autoregressive** named once (module 06), glossed "predict the next piece, then the next" |
| Image/video instances | **I-JEPA**, **V-JEPA**, **V-JEPA 2** | — | exact casing. **V-JEPA 2-AC** (action-conditioned) only in module 12 coda |
| The encoder's architecture | **Vision Transformer (ViT)** | "the specific kind of encoder used" | named once in module 10, kept as plumbing; not taught |
| The bigger goal | **world model** | "a model that can predict what happens next, in representation space" | owner module 12; may be *previewed* in module 01 hook |

**Representations are not human-readable.** Never call a representation an "idea," "label," "word,"
or "description in English." It is a list of numbers whose meaning is *relational* (near = similar).
The course's catch-phrase uses **"gist"** as the plain gloss for "representation of meaning" — that is
a deliberate, bounded metaphor, not a claim that the model holds a human-style idea.

**Math dosage.** Most modules have **no** KaTeX. When showing a representation, write a short bracketed
list informally (e.g. a 4-number sketch like `[0.2, 0.9, 0.1, 0.7]`) and say it's really much longer.
If any KaTeX is used it must pass `_config/math-style.md` (validated). No equations for training,
attention, or loss beyond "a distance between two lists."

## 2. "Already-taught" ledger & dedup plan

Each fact has **one owner** that gives the full treatment; later uses are one-line callbacks, never
re-derivations.

| Fact | Owner | Callback in | Suggested callback line |
|------|-------|-------------|-------------------------|
| Encoder = black box, input → list of numbers | 02 | 03,04,07,10,11 | "the encoder from module 02 — photo in, numbers out" |
| Representation space; distance = similarity | 03 | 04,07,08,09,10,11,12 | "points in representation space, where near means similar (module 03)" |
| Training = measure error, nudge, repeat | 04 | 05,07,09 | "trained the way we saw in module 04 — nudged to lower the error" |
| Self-supervised = hide a part, predict it, no labels | 05 | 06,07,10,11,12 | "self-supervised, hiding part of the data (module 05)" |
| Generative prediction + the waste of chasing unpredictable detail | 06 | 07,08,12 | "rather than rebuilding pixels like the generative approach (module 06)" |
| JEPA core: context/target encoder + predictor; predict the representation in representation space | 07 | 08,09,10,11,12 | "the context encoder, target encoder, and predictor from module 07" |
| Latent-prediction payoff: stay vague where the world is unpredictable | 08 | 10,12 | "so the model can ignore noise, as in module 08" |
| Collapse + the fix (asymmetry, slow-moving target, stop-gradient, masking) | 09 | 10,11 | "the slow-moving target encoder that prevents collapse (module 09)" |
| I-JEPA specifics (context block → target blocks; no pixel decoder; no augmentations) | 10 | 11,12 | "the block-masking setup from I-JEPA (module 10)" |
| V-JEPA specifics (masking across space and time; video teaches world structure) | 11 | 12 | "extending it to video as V-JEPA did (module 11)" |
| World model / predicting future representations / planning | 12 | — | (owner; module 01 may *preview* only) |
| **Full LLM-vs-JEPA synthesis** | 12 | 01,06,07,08 give one-line beats only | each earlier module gives at most a one-line contrast; the consolidated comparison is module 12's — do **not** pre-empt it |

## 3. Metaphor-ownership map

One running image per module. Each passes the referent/payoff/bridge test; each carries a one-line
**guard** the author must honor so the analogy can't mislead.

| Image / metaphor | Owner | Guard (must state or respect) |
|------------------|-------|-------------------------------|
| **Filling in a blank / a torn-out page** — two ways to fill it (paint every detail vs. predict the gist) | 01 | don't imply JEPA "imagines a picture"; it outputs numbers, not an image |
| **The black box** — a literal box: photo in, number-list out | 02 | keep it a plain box; **no** crank/slot/vending-machine imagery (evokes gambling/randomness — banned) |
| **The map** — representation space as a map where similar things sit near each other | 03 | a map is 2D and labeled; representation space has many dimensions and **no labels** — say so |
| **Warmer / colder** — the hot-and-cold guessing game for training | 04 | real training nudges millions of knobs at once, not one guess; it's the spirit, not the mechanism |
| **Quiz yourself by covering the answer** — the data makes its own test | 05 | the "answer" is part of the data, not a human-supplied label |
| **The painter forced to reproduce every blade of grass** + **TV static** | 06 | not all detail is noise — the point is that *some* is unpredictable, and that part is wasted effort |
| **Describe it, don't draw it** — predict/compare gists, not drawings (the three roles) | 07 | the "description" is a list of numbers, not English words |
| **The weather forecast** — predict at a level you can actually get right ("70% rain," not each raindrop) | 08 | forecasts are human-readable; representations aren't — use only for "right level of vagueness" |
| **The lazy student who answers "I don't know" to everything** + **the slowly-updated answer key** | 09 | the fix isn't a direct "penalty for sameness"; it's the asymmetry — and *why* it works is still studied |
| **The jigsaw puzzle** — cover several regions, predict each one's gist from the rest | 10 | you predict each piece's *gist*, not the printed picture on the piece |
| **The flip-book / a few movie frames with the middle hidden** — predict the gist of missing moments; things persist and obey physics | 11 | V-JEPA does **not** produce a video to watch — it's non-generative |
| **Running the movie in your head to plan a move** — a world model as imagination-for-planning, in gist-space + the "two roads" LLM-vs-JEPA synthesis | 12 | it simulates in representation space, not by rendering pixels; JEPA-vs-LLM is an *open* bet, not a proven win |

**Cut images (do not use):** any gambling/slot-machine/crank metaphor for the encoder; any framing
that calls the representation a readable "idea/label/sentence"; any "JEPA is magic" framing.

## 4. Stock-phrase caps

| Phrase | Cap | Keeper / notes |
|--------|-----|----------------|
| The spine catch-phrase "**predict the gist, not the pixels**" (and close variants) | ≤1 verbatim per module | deliberate refrain — keeper framings owned by 01 and 07; **vary the wording** elsewhere, don't stamp it |
| "the whole point" / "the whole idea" | 1 per module | keeper module 08 ("the whole point") |
| "under the hood" | 1 total | keeper module 02 |
| "in a nutshell" | 1 total | — |
| "magic" / "magical" / "magically" | 0 | banned — say what it literally does |
| "revolutionary / game-changing / unlock / breakthrough" | 0 | brand-banned hype |
| "simply" / "just" as hand-waves | minimize | fine in plain use; not as a wave-past-the-hard-part |
| Misconception callout label | exactly **"A tempting wrong answer:"** | standardized, ≤1 per module |
| "list of numbers", "black box", "gist", "representation" | uncapped (domain core) | legitimate recurring terms — don't pad, but no cap |

## 5. Voice target

One narrator throughout: a **warm, plain-spoken, wonder-driven explainer** talking to one sharp adult
who is new to machine learning. Concrete first, name second — introduce every idea in plain words
before giving it a term. Analogy-rich but **honest**: each running image gets its one-line guard, and
nothing is oversold. Short-to-medium sentences; jargon only after it's earned. Never anthropomorphize
("the model *understands*/*knows*/*imagines*") and never call any of it magic. Be precise about
mechanism even without equations: always say *what* is encoded, *what* is predicted, and *where* the
comparison happens (representation space, not pixels). On the LLM contrast, stay even-handed — name
real similarities, and frame JEPA as an open research bet, never a proven winner.

**Drift to correct:** the mechanism-heavy middle (modules 07, 09, 10) is most at risk of going dry
and technical — pull those toward the example-led warmth of module 01. The two keystones
(representation space; predict-the-representation) must be re-grounded in a concrete image each time
they recur, not just name-dropped.
