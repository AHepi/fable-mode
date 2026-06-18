# Verify — JEPA redo 2 (prose ↔ pedagogy precedence)

- **Schema:** ✓ valid (quoted M6's colon-bearing `summary`; moduleOrder = 6).
- **Prose lint:** ✓ `hard flags: 0`. Check 5: **"no soothing manner adverbs found"** (editorial cut the
  one "quietly" in M3 and "simply" in M4); check 6 clean. Soft flags are domain vocab + em-dash density.
- **Build:** ✓ 85 pages, 0 errors — KaTeX, pseudocode fences, and ASCII diagrams render.

## What the precedence changed vs. redo 1 (`jepa-20260618`)

The teaching body is the same dense, artifact-bearing 6 modules. The precedence
(`course-design.md`, "When prose and pedagogy conflict") gave prose the lead in its four zones:

- **Stakes** — M1 opens on the *intellectual bet* (gist vs pixels as a claim about machine
  intelligence), and the landing intro is stakes-led, rather than starting from the mechanism.
- **Historical / philosophical context** — M6 gives LeCun's world-model thesis real room and an honest
  "it could lose" close (kept at full length, ~2,080 words; density did not cut it).
- **Transitions** — the editor fixed transitions only where they were *wrong*, catching two real
  cross-module bugs: M3's recap pointed to the wrong next module, and M4 mis-credited the EMA to M3.
- **Pedagogy held everywhere else** — architecture, loss, collapse/EMA, worked numbers, pseudocode,
  checks; no teaching prose cut for flourish, no flourish that blurs a definition.

Shipped to `site/src/content/courses/jepa/` (replaces redo 1's modules).
