# Editorial Report — How JEPA Works (12 modules)

Stage 04 whole-course edit. The 12 blind-parallel-authored modules were read end to end as one
book, against `02_curriculum/output/canon.md`, and edited as a single cumulative text for a reader
with no ML background. **Math/formal blocks and equations were left intact;** edits are prose-only.

## Headline finding

The authoring stage was unusually disciplined against the canon. Names, owners, metaphor guards,
and most phrase caps already held course-wide on arrival. The editorial work was therefore
**targeted, not a rewrite**: resolve one `[verify]` flag, fix one grammar bug, break a handful of
templated-edge collisions (hooks/recaps), reserve two refrain phrases to their keeper module, and
add one standardized misconception label for consistency. The semantic metaphor/bridge audit found
**nothing to kill or rebuild** — every central image points true, pays off, and honors its guard,
and every formal definition is reached by a bridge.

## Per-module change summary

- **01 — Filling in the Blank.** Pass-through. Hook (sensory imperative "Cover the bottom half…")
  and the torn-page/torn-photo metaphor already honor the guard ("don't imply JEPA imagines a
  picture" — stated explicitly). Keeper of the spine phrase (1 verbatim) and of "is where we go
  next" closing. No change.
- **02 — The Black Box.** Pass-through. Plain-box image carries no crank/slot/gambling association
  (guard honored). "Under the hood" used once (its sole course-wide keeper). "Neural network" named
  once. No change.
- **03 — Representation Space.** Pass-through. The keystone module: map metaphor with an explicit
  "where it lies to you" section (many dimensions, no labels — both guards stated), and a clean
  list→point→distance bridge into the Definition. "Embedding" named once. No change.
- **04 — How a Machine Gets Less Wrong.** Pass-through. Warmer/colder guard ("millions of knobs at
  once, spirit not mechanism") present. "Loss" named once, then "error." No change.
- **05 — Self-Supervised Learning.** One edit: "the contrast is **the whole point**" →
  "the contrast is **what matters here**," to reserve the "the whole point" refrain for its keeper
  (module 08). Quiz-yourself guard ("the answer is part of the data, not a human label") intact.
  Carries the single honest LLM-vs-JEPA *beat* only, not the synthesis. No change otherwise.
- **06 — Generative Prediction.** Pass-through. Painter/every-blade + TV-static images with the
  explicit "real photos are not static" guard. "Autoregressive" named once. Gives only the one-line
  "this is the road LLMs take" beat; does not pre-empt module 12's synthesis. Runs ~2,700 words —
  in line with peers, no redundancy worth trimming against mandated content. No change.
- **07 — The JEPA Core.** Two edits. (1) Hook rewritten from a module-counter ("Six modules in…")
  to a state-of-readiness opener ("Every part we need is now on the table…"), to break the
  collision with module 10's "For three modules now…". (2) Recap closing rewritten from "That
  payoff is **where we go next**" (verbatim collision with module 01's closing) to "The answer is
  the payoff the whole machine was built to collect." Keeper of the spine phrase (1 verbatim, in
  the recap). "Latent space" named once. Owns the three-part core; "describe it, don't draw it"
  guard ("the description is numbers, not English") intact. The three-box section is example-led and
  warm — no leveling needed.
- **08 — Why Latent Prediction.** Pass-through. Weather-forecast guard ("forecasts are
  human-readable, representations aren't — borrow only 'predict at a level you can hit'") intact.
  **Keeper of "the whole point"** (now the sole course-wide use). The "model understands/knows"
  phrases here are the canon-required *anti*-anthropomorphism ("It does *not* mean the model
  understands… the model has no idea") — kept verbatim. No change.
- **09 — Collapse and the Fix.** Pass-through. Lazy-student + slow-answer-key images with the guard
  honored two ways: the misconception callout ("the fix isn't a direct penalty for sameness") and a
  full "The honest part" section ("*why* it works is still actively studied"). "EMA" and
  "stop-gradient" each named once. Definition (Representation collapse) is bridged piece-by-piece
  both before and after. Runs ~2,700 words; the honest collapse note and worked block are mandated,
  so no trimming. No change.
- **10 — I-JEPA.** Three edits. (1) Hook kept (module-counter "For three modules now…" — load-
  bearing, sets up "now someone built it"; module 07's counter was moved instead). (2)
  "the **whole point** of doing this in JEPA-land" → "the **reason** for doing this…", reserving the
  refrain for module 08. (3) Recap closing rewritten from "**Next we** let the image start moving…"
  to "So far the picture has held still. Let it move…", to break the "Next we…" formula.
  Jigsaw guard ("predict the gist of the piece, not the printed picture") intact; "ViT" named once.
  Uses the spine-phrase *variant* "predict the gist, skip the grain" (not verbatim — within cap).
- **11 — V-JEPA.** One edit: added the standardized misconception label "*A tempting wrong
  answer:*" to exercise 2 (the Sora confusion), the module's clearest misconception beat — it had
  the beat but no house-style label, unlike the other 11 modules. Flip-book guard ("V-JEPA does not
  produce a video to watch — non-generative") intact. Gives only a one-line video→world-model
  preview; does not pre-empt module 12. No change otherwise.
- **12 — World Models and the Bet.** Two edits. (1) **`[verify]` resolved** (see below). (2) Grammar
  bug fixed: "pick objects up and put them down it had never been trained on those specific tasks"
  → "pick objects up and **set them down — tasks it had never been trained on —**". Owns the full
  LLM-vs-JEPA synthesis and the comparison table (left intact). The "movie in your head" guard
  ("simulates in representation space, not pixels; it's an open bet") intact. "JEPA beat/replaced
  LLMs" appears only inside explicit corrections. Longest module (capstone — acceptable).

## `[verify]` resolutions

- **Module 12, V-JEPA 2 training-scale figures.** The dossier
  (`01_research/output/research.md`, lines 185–187: arXiv 2506.09985) verifies: pretrained on
  **>1M hours of video**; **V-JEPA 2-AC** fine-tuned on **<62h of Droid robot data**; **zero-shot
  pick-and-place planning on Franka arms**. The module's claims ("over a million hours of video,"
  "a comparatively tiny amount of robot data," "a robot arm could pick objects up and set them
  down — tasks it had never been trained on") match the verified facts. **Resolution: kept the
  claim, deleted the `[verify]` tag.** No `[verify]` strings remain in any module (confirmed).

## Metaphor & bridge audit (semantic pass — read, not linted)

Every running image was checked against its canon guard for one-correct-referent, payoff, and
guard-honoring; every formal-definition seam was checked for an intuition→bridge.

- **All 12 central metaphors pass.** Each points at one correct referent, is developed and reused
  (not stranded), and states or respects its guard: torn page (01, "not imagining a picture"),
  plain box (02, no crank/slot/gambling), the map (03, many dimensions + no labels), warmer/colder
  (04, millions of knobs / spirit-not-mechanism), cover-the-answer (05, answer is in the data),
  painter + TV static (06, not all detail is noise), describe-don't-draw (07, description is
  numbers), weather forecast (08, right level of vagueness only), lazy student + slow answer key
  (09, asymmetry not a sameness-penalty; why is still studied), jigsaw (10, gist not the printed
  picture), flip-book (11, non-generative — no video), movie-in-the-head (12, gist-space not pixels;
  open bet). **Nothing killed or rebuilt.**
- **Bridges.** The two formal `Definition` blocks (03 representation/representation space; 09
  representation collapse) are each reached by an explicit intuition→definition bridge that decodes
  the notion piece by piece (03: list→coordinates→distance; 09: exam→answer-key→constant mapped
  onto the machine). **No definition lands as a cliff.** No bridge needed adding.
- **Keystone re-grounding.** Representation space (03) and predict-the-representation (07) are
  re-grounded in a concrete image on each recurrence (the cat photos / the map / the leafy-patch
  gist / the mug clip / the street-crossing film), never merely name-dropped. Confirmed.

## Name-once and de-duplication checks (all hold course-wide)

- **Named exactly once, then callback only:** neural network (02), embedding (03), loss (04),
  autoregressive (06 — module 12 reuses it as an attributed callback in the synthesis, not a fresh
  derivation), latent space (07), EMA + stop-gradient (09), Vision Transformer/ViT (10). Confirmed
  by grep + read; no later module re-introduces any as new.
- **Owned facts are callbacks, not re-derivations:** representation space (03), the JEPA three-part
  core (07), collapse+fix (09) are each given their full treatment once and referenced as one-liners
  afterward. The **full LLM-vs-JEPA synthesis + comparison table is module 12's alone**; modules
  01/05/06/07/08 each give only a one-line contrast beat and explicitly defer the full comparison
  ("the last module's job"). Confirmed — no pre-emption.

## Phrase-cap checks (all hold)

- Spine phrase "predict the gist, not the pixels" verbatim: **exactly 01 and 07** (the keepers);
  varied elsewhere ("predict the gist, skip the grain" in 10, etc.).
- "the whole point": **only module 08** now (keeper); removed from 05 and 10.
- "the whole idea": ≤1 per module (03, 09) — within cap, no collision with "whole point."
- "under the hood": 1 total (module 02 keeper). "in a nutshell": 0.
- "A tempting wrong answer:" — the standardized label, ≤1 per module; now present in all 12
  (added to module 11 for consistency).
- "magic"/"magical": **0**. Hype ("revolutionary/game-changing/breakthrough"): **0**.

## Edge-variety checks

- **Hooks:** 12 distinct moves after editing (07 moved off the module-counter). No two now open with
  the same construction.
- **Recaps:** the verbatim "is where we go next" collision (01/07) is resolved; the literal
  "Next we…" formula collision (08/10) is resolved (10 re-pitched). Remaining forward-pointers are
  varied in form; modules 02, 03, 09, 12 close on the idea rather than a pointer.

## Integrity

- No `[verify]` strings remain. No leaked tool-call/XML fragments (the known
  `</content></invoke>` class of leak is absent). No "magic"/hype. Every file ends cleanly on its
  recap. Frontmatter untouched: colon-titles (07, 10, 11) remain YAML-quoted; all prerequisites are
  full slugs (no bare numbers). Formal/math blocks and the comparison table are byte-identical to
  stage 03.

## Honest-accuracy sweep

- No "JEPA beat/replaced LLMs" as a claim anywhere; all such phrasings sit inside explicit
  corrections (module 12). Module 09's "why collapse is prevented is still studied" honesty intact.
  Module 12 frames the bet as open and even-handed (LLMs "remain enormously capable… tuned to
  different jobs"). No anthropomorphism as a claim; the "understand/know/imagine" instances are the
  canon-required denials and a guarded function-not-form usage.
