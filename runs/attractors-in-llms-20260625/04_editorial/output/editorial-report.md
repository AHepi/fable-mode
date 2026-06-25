# Editorial Report — Attractors in Large Language Models

Whole-course consolidation pass over the 11 blind-parallel modules, edited in place in
`04_editorial/output/`. The course arrived strong and largely canon-compliant; most edits were
surgical. Formal blocks (Definitions, Worked Examples, equations, all KaTeX) were left
byte-for-byte intact. No symbol unification was needed — authors already held to the canon
registry ($s_t$, $f$, $x^\star$, $\tau$, $r$, $P(\cdot\mid s_t)$, $V$) consistently.

## 1. Mechanical fixes

- **Em dashes (lint check 3, hard-flag).** Swept all 11 modules. The only occurrences were the
  known M1 pair inside the Attractor definition's numbered list. Recomposed to label-period form,
  meaning preserved exactly (inside a definition, so handled as a minimal mechanical edit):
  - `**Invariant** — once…` → `**Invariant.** Once the trajectory is in the set, it stays in the set.`
  - `**Attracting** — nearby…` → `**Attracting.** Nearby states are drawn toward the set.`
  - Final sweep confirms **zero em dashes** course-wide.
- **Soothing-adverb tic (M11).** `the same sentence quietly depends on` → `tacitly depends on`.
  No other soothing adverbs in narrator prose (the one "don't be discouraged" is inside a transcript
  artifact illustrating drift — dialogue, not narrator voice — left intact).

## 2. Phrase caps (canon §4) — verified course-wide, overages cut

- **"falls into" / "slides into" (≤3, keepers M3/M5/M7).** Found 7–8 basin-sense uses of the capped
  lemma. Cut to exactly 3 keepers and varied the rest:
  - Kept: M3 ("the loop is so easy to fall into"), M5 ("the conversation slides into a basin"),
    M7 ("the model falls into refusal too readily").
  - Varied: M2 `fall into`→`settle into`; M4 `fall into a literal loop`→`lock into`;
    M5 summary `slides into`→`settles into`; M7 recap `fall into a canned refusal`→`get pulled into`;
    M11 graded-claim `falls into`→`settles into`.
- **"self-reinforcing" (≤2, keepers M3/M5).** Exactly 2 (M3:62, M5:60). No change.
- **"the same mechanism at a different scale" (≤2).** 1 use (M5). No change.
- **"regardless of where it started" (≤2).** 0 literal uses (M1 uses "the rule does not care where
  you began"). No change.
- **"tends to stay" / "Once …, it tends to stay" (≤2).** 1 use (M7 summary). No change.

## 3. Hooks, recaps, macro-shape (vary the edges)

- **Hook collision fixed.** M3 and M10 both opened verbatim "Here is a transcript." M3 owns the
  degenerate-transcript opening; reworded M10's opener ("A coding assistant has been answering
  questions for a while, and the last stretch of the session looks like this:") so its "looks
  stuck?" move no longer echoes M3 word-for-word. The 11 opening moves now map cleanly to the canon
  assignments (hand-computation, loop diagram, degenerate transcript, contrast, conversation,
  framing, attack trace, next-token table, mechanism, looks-stuck test, reckoning).
- **Recap "next-module" formula thinned.** 7 of 11 recaps closed on an explicit "the course turns to
  next / in the next module" promise — the staling signpost editorial-craft caps. Recomposed 5 to
  close on the module's own strong terminal idea (M3, M4, M5, M6) and demoted M4's; kept varied,
  genuinely-motivating forward seams in M2, M7, M8, M9, M10 (each a different shape: general,
  thematic, named-module question, "the next move," "the next module takes up"). M11 already closed
  terminally. The set now reads as an argument, not a template.

## 4. Self-narration / directive metadiscourse cut

- M8: `This module is concrete on purpose. We take that one table…` → `Take that one table and
  watch each knob bend it.`
- M5: cut `Hold that distinction, because the rest of the module hangs on it.` (the two strong
  sentences after it already land the point).
- M4: `This module exists to put a wall between them…` → recast to perform the stakes without naming
  the device.

## 5. Bridge sweep (first-class pass) — all seams hold

Walked every formal Definition and every intuition→definition / module→module seam. Each math-heavy
seam the brief flagged is reached by a real bridge, placed before or with the block:
- **M1** iterated-map / fixed-point / stability / logistic / cycle: each Definition has a
  notation-decode bridge ("Read the notation back into the rolling ball", "The equation says: feed
  $x^\star$ in and you get $x^\star$ back out", derivative meaning decoded as the stretch/shrink
  factor). No cliffs.
- **M2** generation-map Definition: preceded by the loop diagram + the squeal, then "Read the
  notation straight off the loop diagram" decodes every symbol ($s_t$, $f$, the two stages, $\Vert$).
  Strong.
- **M8** softmax and top-p: softmax introduced in plain words before the formula; top-p decoded off
  the worked cumulative column. Strong.
No connective sentences needed adding.

## 6. De-duplication (callbacks, not re-derivations)

Verified the ledger holds. M2 owns the self-conditioning Definition; M3/M5/M6/M7/M9 each reference it
as a one-line callback, never re-derive it. Ball-in-valley (M1) is recalled in M5/M7/M10 with
one-line reminders ("Picture the valley again"). The iterated map, likelihood trap, exposure bias,
mode-vs-model collapse, refusal basin/ratchet, decoding toolkit, refusal direction, perturbation
test are each treated once by their owner and called back elsewhere. No re-derivations found to cut.

## 7. Metaphor audit — all point true and cash in

Each module's one canon image is present, points true, and maps onto the mechanism: ball-in-valley
(M1), audio-feedback squeal (M2), skipping record (M3), photocopy-of-photocopy (M4), flattering
mirror (M5), actor-who-can't-break-character (M6), one-way ratchet (M7), rudder (M9), map-vs-territory
(M11). M8 stays artifact-first — the only analogy is the sanctioned single "doorway" line for
truncation, not developed; M9 reuses it once as a deliberate callback ("the decoder reshaped the
doorway"), not a competing image. M10 reuses M1's valley (the poke test), owns no new image. No
smuggled or abandoned metaphors.

## 8. Epistemic hygiene — clean

- Waluigi effect and the simulator view are labeled **community conjecture** everywhere they appear
  (M6, M11); the Waluigi asymmetry/irreversibility is repeatedly marked as the *least*-supported,
  blog-only corollary ("a metaphor in the grammar of a theorem"), never stated as fact.
- The two persona papers are kept distinct in M9 (Anthropic *Persona Vectors*, Chen et al. 2025, vs
  OpenAI *Persona Features Control Emergent Misalignment*, Wang et al. 2025) with an explicit "two
  different papers, two labs; do not merge them." Not conflated in M6 either.
- `[verify]` numbers stay out: Crescendo ASR % is explicitly withheld (M7: "don't lean on a
  number"); persona turn-counts not printed as fact; logistic period-3 window given as "a period-3
  window appears" with no value (M1), per canon.

## 9. Density

Total 34,812 words, matching the brief's ~34,800. Prose is genuinely tight; the length lives in
required pedagogy (worked tables, distributed `<details>` checks, elaborated exercise solutions,
show-the-artifact diagrams) which was preserved. Trims were limited to the throat-clearing /
self-narration in §4 above; no teaching scaffolding was cut, and nothing was padded.

## For the verify stage to double-check

- **No KaTeX or formal block was touched** — every edit was prose (narrative sentences, two summary
  frontmatter lines, recap prose). The build/render check should be unaffected by this stage, but
  worth a smoke build regardless.
- Re-run `lint-prose.mjs`: expect em-dash check (3) to pass (0 found) and soothing-adverb check to
  pass. Confirm the M5 summary frontmatter edit ("settles into") still validates against the schema.
- Spot-check that the 5 recap recompositions read cleanly in the rendered site (M3, M4, M5, M6 close
  on their own idea now; M4 also lost the "This module exists to" frame).
