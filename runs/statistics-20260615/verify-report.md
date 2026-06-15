# Verify Report — Series "Statistics, From the Ground Up"

Series route: `/series/statistics` · 3 mini-courses · 10 modules · level intro · kind stem (light math)

Members: **Statistics Essentials** (essentials, 4 modules) · **Making Sense of Studies** (3) ·
**Lines Through Data** (3).

| Check | Result | Notes |
|-------|--------|-------|
| Schema, each course (`validate-schema.mjs`) | **PASS** | All three valid; moduleOrder ↔ files bijection; order/filename consistent; only KaTeX is M2's `mean = total ÷ count`. |
| **Series invariants** (`validate-series.mjs`) | **PASS** | "1 series valid" — exactly one `essentials` member, consistent `series.title`, unique `order` (1/2/3). |
| Reference integrity (`validate-references.mjs`) | **PASS** | No broken internal references repo-wide (incl. the new series docs/templates/scripts). |
| Prose continuity (`lint-prose.mjs`), each | **PASS** | **Zero** hard prose flags in all three courses. |
| Base-path lint | **PASS** | No hand-written absolute internal links in any shipped module. |
| Build (`build-site.sh`) | **PASS** | Clean Astro build, **52 pages** (10 modules + 3 course landings + the series page, alongside jepa/topology/abstract-algebra). |
| Series rendering (runtime) | **PASS** | `/series/statistics` lists all three members with Essentials badged "start here"; catalog shows the series group; each sibling course page shows the "Part of the … series" banner and a "Start with the Essentials" pointer. |
| Accuracy (the series' product) | **PASS** | p-value (Studies M1) and confidence-interval (Studies M3) match research §5 exactly, each with an explicit "what it does NOT mean" beat; ASA principles paraphrased, not quoted; correlation≠causation uses the ice-cream/drownings confounder + one figure-free coincidental example; no invented figures. |

## The series mechanism, verified in practice

- **Statistics Essentials owns the shared canon** (`runs/statistics-20260615/series-canon.md`): 12 terms,
  6 metaphors with guards, one voice. Its four modules establish those metaphors cleanly.
- **Both siblings are standalone but author *against* the canon**: they reuse the shared terms/metaphors
  verbatim (notably **signal vs. noise**, the spine both lean on) and **call back** to Essentials
  (sampling variation, variation, estimate) in one self-contained line each — never re-deriving. Verified
  by reading: each sibling's intro states it stands on its own; callbacks are one-liners.

## Defects found and fixed during assembly/verify

1. **Re-leaked `</content></invoke>` fragments** in all three *Making Sense of Studies* editorial outputs
   (the editor reintroduced them when writing) — stripped; each file now ends on its recap.
2. **Raw "(M2)/(M3)" module shorthand** left in *Statistics Essentials* M3/M4 prose (its editor didn't
   convert them as the other two courses did) — removed; the callbacks read naturally now. No `(M#)`
   token survives in any shipped module.
3. **Leaked "Pitfall #N" references** (internal dossier numbering) in Essentials M2/M4 — removed by the
   editorial pass before they reached a learner. None remain in shipped prose.
4. Earlier authoring leaks (Essentials M2; Studies M2; Lines M3) and a `[verify figures]` marker — all
   caught and stripped at the post-authoring sweep.

## Known factory note

The `</content></invoke>` leak recurred at both the authoring **and** editorial stages this run — it is
the single most common artifact the sub-agents emit. The verify-stage sweep catches it reliably, but a
cheap future hardening would be a post-write hook in `copy-artifacts.mjs` that refuses to ship a module
whose body contains a tool-call tag. Left as a note.

## Verdict

**SHIP.** Three mini-courses validate individually, the series invariants hold, every shipped module is
clean, the careful inference statements are exactly right, and the site builds — with the series page,
catalog grouping, and Essentials-first navigation all rendering. Merging to `main` deploys it.
