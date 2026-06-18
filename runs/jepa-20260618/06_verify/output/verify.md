# Verify — JEPA (redo)

- **Schema:** ✓ valid (6 modules; moduleOrder derived; quoted the two colon-bearing objectives in M3/M5).
- **Prose lint:** ✓ `hard flags: 0`. Check 5 (soothing adverbs): **"no soothing manner adverbs found"**
  (the old course hard-failed here with *"quietly" 10× across 9 modules*). Check 6: clean. The 82 soft
  flags are unavoidable domain vocabulary ("target", "representation", "loss" must repeat in a technical
  course) and em-dash density — advisory only.
- **Build:** ✓ `build-site.sh` 85 pages, 0 errors. KaTeX equations, pseudocode fences, and ASCII
  diagrams all render.

## Redo vs. the boring original (what the fixed pipeline produced)

| | old jepa | redo |
|---|---|---|
| modules / words | 12 / ~22k | 6 / ~9k |
| artifacts (diagram / equation / code / worked number) | 0 | every module |
| soothing-adverb tic | "quietly" 10× / 9 modules | 0 |
| openings | everyday analogy ×11 | claim / computation / diagram / contrast / failure / instantiation |
| core one-liner | restated ~15×/module | stated once (M1), called back |

Shipped to `site/src/content/courses/jepa/` (old 12 modules removed).
