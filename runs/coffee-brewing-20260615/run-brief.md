---
runId: coffee-brewing-20260615
topic: Brewing a better cup of coffee at home
slug: coffee-brewing
assumedBackground: A complete beginner who drinks coffee but has never thought about how brewing works. No equipment assumed beyond a basic brewer and access to ground coffee.
kind: skill
mode: autonomous
gates: []          # audit run — no human gate; we want all stage artifacts on disk
createdAt: 20260615
---

## Interpretation notes

This run exists as a **prose-construction audit**, not a shipping course. The point is to watch a
single module's prose change across stages, so the pipeline is run faithfully but scaled down:

- **Scope (in):** what extraction is and the taste it produces; the four levers a home brewer can
  actually change (grind, brew ratio, water, time); how to diagnose and fix a bad cup by moving one
  lever at a time. **(out):** roasting, espresso machines, latte art, bean origin chemistry.
- **Rigor:** none formal — this is a `skill` course. Competence = applying the framework to a cup.
- **Assumed background:** "no prior exposure" (`intro`-equivalent). Unpack every term on first use.
- **Scale:** 3 modules, ~600–900 words each (a real first course would be larger; trimmed here so the
  stage-to-stage diffs stay readable).
- **Why this topic:** three modules that all lean on one shared idea (*extraction*) and one shared
  taste-compass (*sour = under, bitter = over*). Blind-parallel authors will re-explain and rename
  these — which is precisely what stage 04 is built to catch.
