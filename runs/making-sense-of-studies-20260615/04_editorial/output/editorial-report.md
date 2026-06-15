# Editorial Report — Making Sense of Studies

Stage 04 whole-book pass over the 3 modules of this standalone sibling mini, read together
against the series-canon, the internal canon, and research §5 (the accuracy source of truth).

## Per-module one-line change summary

- **M1 — Could This Just Be Chance?** No edits. The p-value careful statement, the four
  "what it is not" beats, the null/dedup ownership, the Essentials callbacks (sampling variation,
  signal vs. noise), and the single "A tempting wrong answer:" all already met contract. Copied
  verbatim.
- **M2 — Significant Isn't the Same as Big.** No edits. Owns significance≠importance and
  absence-of-evidence; calls back to the null/p-value in one line each; reuses the shared
  signal-through-noise image by name; no leaked tags, no stray symbols. Copied verbatim.
- **M3 — A Range, Not a Point.** Edited only to convert sibling-module shorthand into natural
  reading-flow references (see below). The confidence-interval careful statement, the
  net/batting-average image with its guard, and the "what it does not mean" beat were left
  byte-identical — they are accurate and well-guarded, so the contract forbids touching them.

## Accuracy confirmation (highest-stakes; checked against research §5)

- **p-value (M1) — matches §5.2 / Pitfall #1 exactly.** The boxed statement keeps the full
  "at least as extreme as the ones observed, assuming the null hypothesis — no real effect — is
  true" wording. All four negations are present and correct: NOT P(null true), NOT P(effect real),
  NOT "the probability the result is just chance" (explicitly flagged as the loose everyday
  misreading), NOT a measure of effect size. ASA principles are paraphrased, never quoted verbatim.
  "Prove the null" appears only in its sanctioned negative form ("we never set out to prove the
  null is true"). Nothing was loosened.
- **confidence interval (M3) — matches §5.4 / Pitfall #3 exactly.** The boxed statement keeps the
  long-run-coverage-of-the-method wording: "if you repeated the whole process... many, many times,
  then about 95% of the intervals you produced would contain the true value." The "what it does
  NOT mean" beat is intact, with the correct reasoning (once computed, the interval either contains
  the truth or doesn't; the sampling is done, so no probability attaches to the single realized
  interval). The two secondary misreadings (inside-equally-likely/outside-impossible; includes-zero-
  proves-zero) are both present. Nothing was loosened.

## How the "(M1)/(M2)" cross-refs were handled

M1 and M2 already used natural prose ("the previous module", "when we set up the p-value", "when we
met the p-value") — no scaffolding tags to fix. All literal sibling-module markers lived in M3 and
were converted to reading-flow references a standalone learner won't trip on:

- Objective: "...from M2" -> "...back to the absence-of-evidence idea from the previous module."
- Body bullet: "the absence-of-evidence trap from M2, in new clothing... proving there's none (M2)"
  -> "the absence-of-evidence trap in new clothing — the same one we met in the previous module...
  proving there's none." (the trailing "(M2)" parenthetical removed; the idea is self-contained).
- Exercise 5 heading: "(Connect to M2.)" -> "(Including zero.)" (names the concept, not the module).
- Exercise 5 solution: "the absence-of-evidence point from M2 again" -> "...from the previous
  module again."

No remaining `M1`/`M2` token survives in the edited output (verified by scan).

## Metaphor & bridge audit

- **Signal through noise** (shared, owned by Essentials) is reused by name in M1 and M2 and points
  true — it leaves room for false positives (M2's p-hacking "face in the wallpaper"). Correct.
- **CI net / batting-average** (M3-local) carries its required guard verbatim: it is the *casting*
  (the method's long-run rate) that succeeds 95% of the time, NOT any one net you are holding. The
  image clarifies rather than muddies, so it was kept, not cut.
- **Bridges to the careful statements:** both boxed definitions (p-value, CI) are reached by an
  intuition->definition bridge ("Suppose the null is true... that long-run fraction is the p-value";
  "A confidence interval is a range produced by a procedure... the 95% is a property of that
  recipe"), then decoded clause by clause. No definition lands as a cliff.
- The courtroom "presumption of innocence" image (canon-optional for M1) was never used by the
  author; nothing to vet or cut.

## Dedup / caps / variety / leaks

- **Ownership held.** null + p-value owned by M1; M2/M3 call back in one line, no re-derivation.
  significance≠importance owned by M2; M3 calls back without re-teaching. estimate/sampling
  variation are one-line Essentials callbacks, self-contained.
- **Caps clean.** "A tempting wrong answer:" appears once total (M1); none in M2/M3 (cap is ≤1 per
  module). The p-value "surprising if nothing were really going on" gloss is concentrated in its
  keeper module (M1); M2/M3 reference rather than restate.
- **Variety.** Hooks differ (M1 health headline, M2 trial scenario, M3 poll headline); recaps
  differ and each ends on a strong stressed close, none on "Next we...".
- **Banned language.** No "magic"/hype. "Proves" appears only in the sanctioned "we never prove the
  null" sense.
- **Integrity.** Each file ends on its Recap with no leaked tags; no stray `$` anywhere (stem
  course writes "0.05", "52%", "p-value" as plain text); frontmatter preserved including the quoted
  colon strings in M3 and full-slug prerequisites. Verified by scan — no introduced fragments.
</content>
</invoke>
