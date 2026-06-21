# Verify — How Capitalism Came to Seem Natural

Run: `the-naturalization-of-capitalism-20260621` · 11 modules · humanities · intro.

| # | Check | Result |
|---|-------|--------|
| 1 | Reference integrity (`validate-references.mjs`) | ✓ PASS (after fixing a pre-existing broken inline path in `_config/pedagogy/evidence-base.md`: `voice/…` → `_config/voice/…`) |
| 2 | Schema + invariants (`validate-schema.mjs`) | ✓ PASS — valid; `moduleOrder` ↔ files 1:1; each `order`/`course` consistent. (No math: humanities.) |
| 3 | Prose continuity (`lint-prose.mjs`) | ✓ PASS — **0 hard flags** (see note) |
| 4 | Cross-stage consistency | ✓ PASS — all 11 curriculum modules present and matching spec; canon terms/attributions consistent; no owned fact re-derived (callbacks re-gloss) |
| 5 / 5a | Voice boundary + metaphor & bridge sweep | ✓ PASS — one essayistic voice; primary-source quotations untouched (the humanities "formal content"); framing-shift seams (price-tag→"relation between things"; household→"social reproduction"; fictitious-commodities→reification) constructed before the naming, not asserted |
| 6 | Pedagogy & governance | ✓ PASS — distributed attempt-before-reveal checks + discussion/rubric in every module; `_course.md` provenance set (`aiGenerated`, `generatedDate`, `sources`, `reviewed: false`); bias screen run per module |
| 6a | Level fit (intro) | ✓ PASS — every specialist term glossed at first use; no orphan terms vs. `prerequisites: []`; every abstraction carries a concrete picture; callbacks re-gloss heavy nouns |
| 7 | Base-path lint | ✓ PASS — no hand-written absolute internal links in shipped markdown |
| 8 | Build (`build-site.sh`) | ✓ PASS — clean Astro build, **99 pages**, 0 errors |

## Fixes made during verify
- **Reference integrity:** corrected a pre-existing broken inline reference in `_config/pedagogy/evidence-base.md` (unrelated to this course; the path `voice/literary-maverick.md` didn't resolve from repo root).
- **Image-word caps (2 hard flags → 0):** the two canon-owned central metaphors were over-invoked. Trimmed in the editorial source and re-copied: **"room"** (module 11) 10→4 — kept the hook, the naming, and the recap; varied the rest to *walls / structure / enclosure*. **"machine"** (module 06) 6→4 — kept the intro and the "built, not grown" recap; varied the middle to *engine / apparatus*. Both metaphors remain paid off; the prose reads less repetitive.

## Remaining soft advisories (not blocking; justified)
- **Em-dash density** above ~12/1000 across all modules — a deliberate feature of the essayistic house voice; the editorial stage did a light reduction without flattening it.
- **Minimizers** (`simply`/`merely`/`plainly`/`naturally`) 24 vs. soft cap 10 — spread across 11 modules (~2 each); none are soothing-narrator tics, all load-bearing "only/by-itself" senses.
- **"integral" (8×) on the beginner-jargon watchlist** — a **false positive**: used throughout in the sense "integral *to* accumulation" (essential/built-in), never the calculus term. No action needed.

## Notes
- **Stance integrity held** (the point of this course): spot-checks confirm each module steelmans the naturalizing claim before answering it, keeps evidence visibly separate from interpretation, and names the live debates rather than resolving them (barter critique in 03; enclosure's coercion in 04; the Williams financing thesis in 05; the marginalism reading in 07; Federici's causation in 09; Polanyi's "disembedding" in 06). Module 11 places the "what instead?" question honestly — eyes, not a blueprint — and ends on the method, not a manifesto. No teleology; "capitalism" treated as a process.
- **Primary sources** are genuine and attributed at author/work/year (no invented page numbers): Thatcher (*Woman's Own* 1987; TINA), Mauss, Smith (*Wealth of Nations*), Marx (*Capital* — "so-called primitive accumulation" and the commodity-fetishism line), Williams (*Capitalism and Slavery*), Polanyi ("laissez-faire was planned"), Thompson, Macpherson, Federici, Fisher.

## Verdict

**SHIP.** Shipped to `site/src/content/courses/the-naturalization-of-capitalism/` (11 modules + `_course.md`). Merge to `main` triggers the GitHub Pages deploy.
