# Editorial Report — Overcoming Social Anxiety: A Field Manual

`skill` course, 12 modules, intro level, general adults, practice-first. Edited as one book
against `02_curriculum/output/canon.md`. The modules arrived strong and largely canon-compliant;
edits were surgical. No file was rewritten. Note: actual filenames differ from the brief's labels
(e.g. `02-steady-the-body.md`, not `02-tap-the-brake.md`); the canon metaphor for M2 is still
tapping-the-brake, which the module uses correctly.

## Mechanical cleanups

- **Summaries quoted (M2, M3, M6, M11).** Wrapped each `summary:` value in double quotes for YAML
  safety. In M6 the original contained nested `"rules"` inside the value; quoting a double-quoted
  scalar around it would have broken YAML, so the inner quotes were dropped (text otherwise
  unchanged: "the body-language rules you've heard are mostly a myth").
- **Em dashes:** confirmed zero across all 12 files, before and after editing. Nothing to recompose.
- **Soothing adverbs:** all six "quietly" uses are meaning-bearing (crutches *quietly* keep the fear
  alive; colleagues *quietly* write you off; etc.) and were kept. Of the three "gentle/gently" uses,
  M1 ("this drill is gentle on purpose") and M8 ("gentle enough that the learner doesn't crash")
  are meaning-bearing; M2's "A gentle note on the body" was a soft-narrator framing tic on a safety
  note and was firmed to "One note on the body" (canon §5: keep safety passages matter-of-fact).

## Shared assets (the two untouchable-except-for-consistency items)

- **§6 field-drill rubric.** Every module M2–M12 now instantiates the rubric in the em-dash-free
  `**Predict.**` / `**Drop a crutch.**` form, with all four afterward-checks and the "a strong rep
  isn't a calm one" close. M4 was the one outlier (used "**Write the prediction.**"); normalized to
  "**Predict.**" to match the other ten. M1 correctly does NOT use the experiment rubric — its field
  drill is the pure-observation "watch one loop" drill, by design (M7 owns the rubric). M9 keeps its
  module-adapted "Hearing the no and staying put is the win" check, which the canon permits.
- **§7 safety language.** Front-loaded in M1, mishap-safety in M9, when-to-seek-help close in M12.
  Criteria are consistent across M1 and M12 (persistent / impairing / intensely distressing /
  shrinking your world / co-occurring low mood-panic-substance use / any self-harm thought → urgent).
  Referrals are generic only (GP, licensed therapist/psychologist, ask for CBT, your country's
  recognized register, a recognized crisis line). No invented phone numbers, org names, or statistics
  anywhere. M9's drill-safety boundary (trivial risk, never harm/deceive/inconvenience another, target
  your own discomfort, step down rather than flood, deeper-wounds caveat) matches canon §7. Safety
  content was not softened or weakened.

## Callbacks (remind, don't re-derive)

- The anxiety loop is taught once in M1; no later module re-explains it. Each points to the specific
  link it breaks (inward spotlight, crutches, prediction, autopsy) in a line and moves on.
- The §6 rubric is owned by M7; M4/M5/M6 give the "early taste" with an explicit pointer to "the
  behavioral experiment, module 7" rather than re-teaching it; M8–M12 each call it back as
  "run it as a behavioral experiment (module 7)." Physiological sigh (M2), spotlight-outward (M3),
  free information (M4), follow-ups (M5), warmth/nerves-don't-show (M6) all called back by number with
  a brief in-prose re-gloss, per the intro-level dial. No re-derivations found.

## Phrase caps (canon §4)

- **"while anxious" / "act while anxious"** was over cap (7 across M7, M10, M11, M12). Reduced to 5,
  now concentrated in the owner (M7, where the phrase is coined in quotes as the named rule) and its
  sanctioned callback module (M11), with M12 retaining one. M10 → "do it with the nerves still
  there"; M12 rung passage → "with the fear still running"; one M7 instance → "with the fear still
  running." (The phrase is M7's signature coinage, so its two remaining owner-uses are load-bearing.)
- **"show up" as the win** was over cap (6 literal "showing up is the win" rubric lines). Kept M7 and
  M12 (keepers); varied the non-keepers: M4 → "Opening your mouth is the win," M8 → "Doing it is the
  win," M10 → "saying it is the win," M11 → "Doing it is the win." M9 already used "staying put is the
  win." Within cap and the four checks preserved.
- **"the cost is survivable"** 1 (≤2). **"lean into"** 0. **"spiral"** 2 (≤3, M1 owns; M11 heading
  "A real spiral, handled" is the only other). **"the win is"** within budget. No overages remain.

## Hooks, recaps, macro-shape

- Twelve distinct opening moves: M1 scene, M2 30-second technique, M3 striking study, M4 scene,
  M5 reframe, M6 striking study, M7 reframe-of-failure, M8 scene, M9 a dare/real story (Jia Jiang),
  M10 scene, M11 the 2 a.m. replay, M12 toolkit synthesis. No two collide.
- **Rhetorical-question openers: zero** (cap ≤4) — well under.
- Recap headings vary ("Recap", "Closing", "So that's the move", "Where this leaves you", "So that's
  the dare", "The loop has nothing left to run on"). Roughly half forward-point; not a uniform
  "next module" formula. No leveling needed.
- Trimmed three self-narration/metadiscourse tics: M7 "We'll come back to why this matters so much"
  (the next subsection is the why); M3 "This module is about getting your hand on it" → enacted;
  M2 "If you only remember one thing from this module" → "the rule that matters more than the
  technique."

## Density

Total ~26.3k words; modules 1,500–2,730. The longer ones (M7, M9, M11, M12) earn their length with
distinct teaching, live drills, and distributed `<details>` checks; no JEPA-style restatement found.
Padding trims were limited to the metadiscourse cuts above — the prose is otherwise tight, and
cutting further would have stripped intro-level scaffolding or the live drills.

## Metaphor audit

All twelve canon images present, owned by the right module, pointing true and paying off: loop/spiral
(M1), tap-the-brake (M2), spotlight-you-can-swing (M3), free-info handholds (M4), pull-the-thread
(M5), nerves-behind-glass (M6), scientist-running-a-test (M7), training-wheels (M8),
small-safe-dose/vaccine (M9), taking-up-your-space (M10), kind-friend-vs-prosecutor (M11), the-ladder
(M12). No competing or abandoned images; "machine" in M1 reinforces the loop rather than competing.
No module implies you must ELIMINATE anxiety to succeed — every "cure"/"eliminate" mention is the
correct anti-cure framing (M2 "not a cure," M11 "trying to eliminate the anxiety first is the trap,"
M12 "don't treat it as a cure").

## Honesty & safety hygiene

- Methods graded honestly: M9 labels mishap drills (best-evidenced, from CBT), shame-attacking
  (practitioner tradition, not controlled trials), rejection practice (popular practice, least
  studied), each noting the underlying mechanism (exposure + a violated prediction) is well-supported.
  M12 grades improv (*emerging*), VR exposure (*strong*), guided internet CBT (*strong*),
  social-skills training (*moderate and mixed*).
- The Mehrabian "93% nonverbal" claim appears ONLY as a debunk, in M6.
- No fabricated statistics or studies: all findings (Clark & Wells model, spotlight effect,
  illusion of transparency, speed-dating follow-up effect, liking gap, the 2023 cyclic-sighing study,
  Jia Jiang / Jason Comely / Albert Ellis / Kristin Neff) are named in plain language without invented
  numbers. The only percentages in the body are the learner's own 0–100 prediction-rating examples
  and the debunked Mehrabian figures. No diagnostic or medical claims.

## For the verify stage to double-check

- Run `lint-prose.mjs` (checks 3, 5, 6) over all 12 files: confirm zero em dashes and no
  soothing-adverb/hand-holding flags after the M2 "gentle note" → "One note" change.
- Confirm all 12 `summary:` lines parse as valid YAML (esp. M6, where inner quotes were removed) and
  that frontmatter still validates against the content schema.
- Spot-check the §6 rubric blocks render correctly inside `<details>` (M5 has a nested `<details>` in
  its second check — confirm it still opens/closes cleanly).
- Confirm the "while anxious" (now 5) and "showing up is the win" (now 2 literal) counts read as
  intended and don't trip any course-wide phrase-cap lint.
