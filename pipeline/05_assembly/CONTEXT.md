# Stage 05 — Assembly

Cross the boundary from workshop to shelf. This is the **only** stage that writes into the site.
Mechanical work: write the course metadata, ship the module files, and derive the authoritative
ordering from the files themselves so it cannot drift.

## Inputs

- **L4** `runs/<run-id>/run-brief.md` — for the slug.
- **L4** `runs/<run-id>/02_curriculum/output/curriculum.md` — for the course-level metadata.
- **L4** `runs/<run-id>/04_editorial/output/*.md` — the **edited** modules (copy-artifacts falls back
  to `03_authoring/output/` if the editorial stage was skipped).
- **L3** `_config/content-schema.md` — the exact shape every file must take.
- **L3** `shared/templates/_course.md` — the metadata skeleton.

## Process

Most of this stage is scripts, not judgement:

1. `bash shared/scripts/scaffold-course.sh <slug>` — create
   `site/src/content/courses/<slug>/` and seed `_course.md` from the template if absent.
2. Write the real `_course.md`: fill the metadata from `curriculum.md` (title, description, level,
   prerequisites, tags, estimatedHours, `schemaVersion: 1`) and write the course-intro prose in the
   body (literary-maverick). Also fill the **provenance** fields: `aiGenerated: true`,
   `model: Fable Academy pipeline`, `generatedDate` (today, ISO), `reviewed: false`, and `sources`
   (real, resolvable references drawn from `runs/<run-id>/01_research/output/research.md` — no
   fabricated citations). Stage it at `runs/<run-id>/05_assembly/output/_course.md`.
3. `node shared/scripts/copy-artifacts.mjs <run-id> <slug>` — copy the edited module files (from the
   editorial stage, or authoring as fallback) and the staged `_course.md` into
   `site/src/content/courses/<slug>/`.
4. `node shared/scripts/build-course-json.mjs <slug>` — derive `moduleOrder` from the module files'
   `order` frontmatter and write it into `_course.md`. Never hand-maintain `moduleOrder`.

## Series mode

When this course is a member of a **series**, the assembled `_course.md` **MUST** include the `series`
frontmatter block, with values taken from `runs/<series-id>/series-brief.md`:

- `slug` (the `series-id`, shared verbatim by every member; the `/series/<slug>` route),
- `title` (identical across all members),
- `role` (`essentials` for exactly one member, `course` for the rest),
- `order` (unique within the series; Essentials is `1`),
- `blurb` (optional one-line series description, conventionally set on the Essentials course).

See `_config/content-schema.md` (the `series` section) for the exact shape. The verify stage then runs
`node shared/scripts/validate-series.mjs` to enforce the series invariants (exactly one `essentials`,
identical `title`, unique `order`) across all shipped members.

## Outputs

- `site/src/content/courses/<slug>/_course.md` and `NN-<slug>.md` files — the shipped course.
- `runs/<run-id>/05_assembly/output/_course.md` — the staged metadata (provenance for this run).

## Verify

- `site/src/content/courses/<slug>/` contains `_course.md` + one file per curriculum module.
- `moduleOrder` (generated) matches the module files one-to-one.
- No working drafts or run artifacts were written into the site beyond the course folder.

## Gate

None. Assembly is mechanical; correctness is checked by the verify stage.
