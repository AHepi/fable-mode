# Editorial Report — Topology, From the Coffee Mug

Stage 04 (Editorial) consolidation pass over all 11 modules, edited as one book against
`02_curriculum/output/canon.md`. **Prose only** — every Definition / Theorem / Proof / Example and
every equation is byte-for-byte as authored, except the canon-required symbol unification below,
which was applied identically everywhere.

All 11 modules are written to `04_editorial/output/NN-<slug>.md` (edited or passed through), so
assembly reads a complete set from here.

---

## Course-wide unification

### Symbol presentation (canon §1 — mandatory, schema-required)

Modules **03, 06, 07** wrapped every inline math span in backticks (`` `$X$` ``). Bare `$...$`
is the schema/KaTeX convention (`_config/math-style.md` line 225: "All math uses `$...$` /
`$$...$$`"); backtick-wrapped `$...$` renders as literal code, not math, so this was also a
rendering bug. **Stripped the backticks from 03, 06, 07** (`` `$…$` `` → `$…$`), applied
identically across prose and formal blocks. After the strip, the prose lint's symbol/naming
heuristic reports **"no reflection-symbol conflict"** and **"operation symbol consistent"** — the
registry holds across all 11 modules.

- `$(X,\tau)$`, `$U/V/W$`, `$B(x,r)$`, `$\varnothing$`, `$f^{-1}(U)$`, `$\cong$`/`$\not\cong$`,
  `$S^2$`, `$T^2$`, `$\chi = V-E+F$`, genus `$g$` — all consistent course-wide.
- `$\cong$`/`$\not\cong$` for "homeomorphic" confirmed used consistently from module 05 onward
  (05, 06, 07, 11 in symbols; 08, 09 in the matching prose where the relation is named in words).

### Misconception-label standardization (canon §4)

Canon standardizes the pitfall beat on exactly **"A tempting wrong answer:"**, one per module, and
on one visual form. Most modules used the blockquote form (`> **A tempting wrong answer:**`);
**02, 08, and 11** used a bare inline-bold form. Normalized **02, 08, 11** to the blockquote form so
all 11 pitfall callouts read identically. (Wording was already standard everywhere.)

### `$f^{-1}$` collision callback (canon §1.1) — verified present and correct

- **Module 04 (owner of the preimage):** states `$f^{-1}(U)$` is "the *name of a set*… makes
  perfect sense for any function," that `$f$` "need not even *have* a way back," and flags the
  coming switch. Correct — left intact.
- **Module 05 (genuine inverse):** carries the mandatory one-line callback verbatim —
  "earlier (module 04) the same symbol named a preimage set, which needs no inverse to exist."
  Correct — left intact.

### De-duplication (canon §2) — verified, no re-derivations

Spot-checked every owned fact; later modules use one-line callbacks, not re-derivations:

- **Invariant logic (owned by 06)** — referenced as "the invariant logic from module 06" in
  07, 08, 09, 10, 11; never re-derived.
- **`$\chi$(sphere)=2 / $\chi$(torus)=0` (owned by 10)** — module 11 uses "By module 10, …" as a
  callback; not recomputed (11 cites the values, then applies them).
- **Genus (owned by 08)** — referenced in 10 and 11 ("the hole count (genus) from module 08"),
  not rebuilt.
- **mug=doughnut / no-tearing rule / open sets / axioms / continuity / connectedness / cut-and-count
  / Möbius** — all later uses are callbacks, matching the canon ledger.

### Templated-edge variety (course-design §1)

- **Hooks:** the 11 openings are distinct moves — joke (01), field scene (02), hypothetical (03),
  myth-busting direct address (04), promise-callback (05), Königsberg history (06), puzzle (07),
  two-objects-in-hand (08), build-a-strip imperative (09), number-surprise (10), courtroom analogy
  (11). Physical-imperative hooks: only **08 and 09** (≤3 cap; 09 owns the "Take a strip…" move).
- **Recaps:** the "Next we…" formula appeared in **04 and 06**. Reworded **module 06's** close
  ("The blade itself comes next —…") so the formula is not stamped on consecutive modules; 04 keeps
  the single remaining instance. The other nine close on varied forward-bridges or strong stressed
  endings.

### Voice leveling

The formal middle (02–05) was already led with a concrete picture before formalism (field/fence,
rulebook, the pen vs. no-tearing, the two-way dictionary) and reads at module 01's warmth; no
cold-down needed. Removed one scaffolding-exposing phrase in **09** ("it's the third objective of
the chapter") per the whole-piece "don't expose the scaffolding" rule.

---

## Metaphor & bridge audit (Process step 8 — the semantic pass)

Read each module's central image against its definition-seam.

- **No metaphor pointed at the wrong referent and none was announced-then-dropped.** Every running
  image earns its canon-§3 ownership: 01 rubber-sheet/clay (cashed: stretch = continuous map, way
  back = inverse, tear/glue = forbidden); 02 elbow-room (cashed into `$B(x,r)\subseteq U$`); 03
  "club called Open," used lightly then dropped for the straight axioms; 04 "no tearing keeps
  neighbors together" (explicitly *rejects* the calculus pen-picture, per canon); 05 perfect
  two-way dictionary (cashed into bijection + continuity-both-ways); 06 fingerprint + detective;
  07 snip-and-count (real scissors); 08 string-through-a-hole vs. dent; 09 the real Möbius strip;
  10 "a number you compute by counting" (avoids "magic number"); 11 courtroom convict-vs-acquit.
  **Nothing killed or rebuilt — every central image already points true and pays off.**
- **No definition arrives as a cliff.** Every formal block is reached by an intuition→definition
  bridge that decodes the notation piece by piece: 02 "The bridge to the definition" (each clause of
  the open-set definition mapped to field/fence); 03 "decode the notation, piece by piece" for the
  three axioms; 04 "Building the bridge" (neighbors-stay-together → preimage-of-open-is-open) plus
  the in-words decode of `$f^{-1}(U)$`; 05 dictionary → the three homeomorphism clauses; 06 "the
  picture *is* the definition" for invariant; 08 string-test → genus; 09 walked-arrow → orientable;
  10 the V−E+F decode. **No bridge needed adding.**

The mechanical lint cannot see any of the above; it was checked by reading.

---

## Per-module change summary

| Module | Change |
|--------|--------|
| **01 Rubber-Sheet Geometry** | Exercise 3 solution: softened "the classic trap" into plain diagnostic prose ("The reflex to call them different comes from reading topology as geometry…") so the one standard misconception label is not competed with by a second. Otherwise pass-through. Hook (joke) and recap are the warmth/variety reference for the course. |
| **02 Room Around Every Point** | Normalized the "A tempting wrong answer:" callout to the blockquote form. Owns the "elbow room / room around every point" image (canon §3); its high "room" count is the owned spine-metaphor, retained deliberately. |
| **03 The Rules of Openness** | Stripped backtick-wrapped inline math (137 spans) to bare `$…$`. No prose changes. |
| **04 Continuity Without Limits** | Pass-through. `$f^{-1}(U)$`-preimage ownership and the "names a preimage, never an inverse" statement verified intact. One "enough to" varied for the phrase cap. |
| **05 Same Shape, Made Precise** | Pass-through. The mandatory `$f^{-1}$` collision callback verified verbatim and intact. Re-meets module 01's mug/doughnut and makes it precise (spiral, not re-derivation). |
| **06 Invariants & Connectedness** | Stripped backtick-wrapped inline math (100 spans). Reworded recap close off the "Next we…" formula. "hold onto"→"not skim" and one "enough to" varied for phrase caps. |
| **07 Cut It and Count** | Stripped backtick-wrapped inline math (56 spans). Invariant logic kept as a module-06 callback (adds a *technique*, not a re-derivation). No prose changes. |
| **08 Counting the Holes** | Removed leaked authoring-internal label "pitfall P5" from the check-yourself solution. Normalized the misconception callout to blockquote form. "in disguise"→"a dent with a deeper floor" and "hold onto"→"keep" for caps. Genus owned here; later modules call back. |
| **09 The One-Sided Strip** | Removed scaffolding-exposing "it's the third objective of the chapter" and the "definition in disguise" phrasing. Owns the "Take a strip…" physical-imperative hook. One "enough to" varied. |
| **10 Euler's Number for Shapes** | **Trimmed prose redundancy 3,219 → 2,796 words total** (pre-exercise body ~1,750, within range). Cut tightened: opening cube/tetra paragraphs, the "what you are counting" lead, the definition restatement, the subdivision-demo wrappers, the payoff section, and the recap. **Preserved intact:** the P12 counting procedure ("Counting without tripping"), the P13 two-move invariance demonstration (the +1−1 / −1+1 cancellations), and all six elaborated exercise solutions. The "matching never acquits" paragraph (owned by 11) was condensed to a one-line pointer to the final chapter, removing duplication. |
| **11 Telling Shapes Apart** | Capped "same shape" overuse (canon §4): swapped two non-load-bearing instances to "homeomorphic" ("ball and disk are homeomorphic"; "sphere and doughnut are not homeomorphic"), keeping it where naming the relation plainly is the point (the lineup framing, the limits discussion, the exercises). Normalized the misconception callout to blockquote form. χ and genus used as callbacks to 10/08, not recomputed. |

---

## Verify

- **Math untouched:** all Definition/Theorem/Proof/Example blocks and equations are identical to
  stage 03 except the backtick-strip in 03/06/07 (canon-required symbol presentation, applied
  identically) — no formal content reworded.
- **Registry holds:** lint symbol/naming heuristic clean; `$\cong$` consistent from 05 on.
- **No re-derivations:** owned facts (invariant logic, χ values, genus, connectedness, preimage)
  are callbacks in later modules.
- **One voice; edges varied:** hooks all distinct (≤3 physical-imperative), recaps de-stamped.
- **Metaphor/bridge audit done by reading:** every central image points true and pays off (none
  killed/rebuilt); every definition reached by a notation-decoding bridge (none added — all already
  present); confirmed semantically, beyond what the lint sees.
- **Module 10 within length:** 2,796 words total (was 3,219); mandated procedures and solutions
  preserved.
- **No leaked tool-call fragments:** all 11 files scanned clean of stray XML/parameter tags and end
  cleanly on their recap.

### Prose lint (advisory, run on a staged copy)

Symbol/naming heuristics pass. Remaining hard flags are **justified**:

- **`room` over the generic image-word cap in 02/03/04** — this is module 02's canon-§3 *owned*
  central metaphor ("elbow room / room around every point"), with 04 a canon-sanctioned referent.
  The generic cap of 5 cannot apply to a module's own spine-image; capping it would gut the lesson.
- **`enough to` (6×/5 modules)** — a generic functional collocation, not one of the distinctive
  stock tics canon §4 caps; the worst instances were already varied, and every remaining use is a
  distinct, legitimate "enough to {disqualify, prove, track, break}". Further removal would be
  fidgeting against the loop's stopping rule.

Em-dash density is above the advisory 12/1000 across the course — but uniformly, including the
module-01 warmth target, so it is a consistent narrator trait rather than drift.
