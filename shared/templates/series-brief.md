---
seriesId: SERIES-ID
seriesTitle: "SERIES TITLE"
audience: AUDIENCE
assumedBackground: BACKGROUND
mode: autonomous        # autonomous | gated
gates: [curriculum]     # gates that still block even in autonomous mode (per member run)
createdAt: DATE
---

## Members

A series is a set of *mini*-courses that share one vocabulary and one set of metaphors. **Exactly
one** member has `role: essentials` — the short primer that establishes the shared canon — and it is
**authored first**. Every other member is a standalone mini-course, takeable on its own, but authored
*against* the Essentials canon. List the members below; each becomes its own run
(`bash shared/scripts/scaffold-run.sh <member-slug>`) walked through the normal six stages.

| slug | title | role | order | one-line scope |
|------|-------|------|-------|----------------|
| SLUG-essentials | "Essentials: …" | essentials | 1 | the shared vocabulary and metaphors every sibling reuses |
| … | "…" | course | 2 | … |
| … | "…" | course | 3 | … |

- **role** is `essentials` for exactly one member; the rest are `course`.
- **order** is unique within the series; the Essentials course is `1`.
- The `slug` here is each member's course slug **and** its run id base; `seriesId` is shared verbatim
  by every member and becomes the `/series/<slug>` route.

## Authoring order & ownership

- The **Essentials** course is produced **first**. Its curriculum stage (02) writes the shared
  series-canon at `runs/<series-id>/series-canon.md` (see `shared/templates/series-canon.md`): the
  shared terms, the shared metaphor map, the shared voice target, and the ledger of concepts **owned
  by Essentials**.
- Every **sibling** mini-course then runs the normal pipeline, reading `runs/<series-id>/series-canon.md`
  as a binding L3 input at its curriculum (02) and authoring (03) stages: it aligns all shared
  names/metaphors to the canon and **calls back** to Essentials for shared concepts (re-grounded just
  enough to stand alone) rather than re-deriving them. Each member's own
  `runs/<member-id>/02_curriculum/output/canon.md` still governs that course's internal consistency.

## Interpretation notes

<!--
Write down, in plain words, how you are reading this series prompt BEFORE doing any work:
- What single idea-cluster the Essentials primer must establish (the shared spine).
- Which terms / metaphors are genuinely shared across members, and which belong to one mini only.
- The boundary of each sibling: what it covers, what it leans on Essentials for.
- Anything ambiguous in the prompt and the call you made.
The curriculum gate on the Essentials course is where a wrong reading of the shared canon gets
caught cheaply, before any sibling authors against it.
-->
