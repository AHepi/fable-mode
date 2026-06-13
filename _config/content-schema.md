# Content Schema — the Pipeline ↔ Site Contract (Layer 3)

This is the **interface** between the factory and the shelf. The assembly stage
(`pipeline/04_assembly`) writes files that must validate against this contract; the site enforces it
in code at `site/src/content.config.ts`. If the two ever disagree, the code is authoritative — fix
this doc to match, then keep them in sync.

A shipped course is a folder:

```
site/src/content/courses/<slug>/
  _course.md          # course metadata + intro prose   (the "courses" collection)
  01-<module-slug>.md # module                            (the "modules" collection)
  02-<module-slug>.md
  ...
```

- `<slug>` is the course slug (URL-safe, from `shared/scripts/slugify.mjs`). It is also the folder
  name and every module's `course` field.
- Module filenames are `NN-<module-slug>.md`, where `NN` is the zero-padded 1-based order.
- The filename **without** `.md` is the module's id (e.g. `01-what-is-a-group`) and is what appears
  in the course's `moduleOrder` list and in URLs.

## `_course.md` frontmatter

| Field | Type | Notes |
|-------|------|-------|
| `title` | string | Course title, e.g. `Abstract Algebra` |
| `description` | string | One sentence; shown on the catalog card and landing page |
| `level` | enum | one of `intro` \| `highschool` \| `undergrad` \| `grad` |
| `prerequisites` | string[] | Plain-language; may be empty |
| `tags` | string[] | Lowercase topical tags; may be empty |
| `estimatedHours` | number > 0 | Whole-course estimate |
| `moduleOrder` | string[] | **Authoritative ordering**: module ids (filenames w/o `.md`), in order. ≥ 1 entry |
| `schemaVersion` | literal `1` | Must equal the version the site expects |

The **body** of `_course.md` (below the frontmatter) is the course introduction. It renders on the
landing page and is prose — apply literary-maverick here.

## Module `NN-<slug>.md` frontmatter

| Field | Type | Notes |
|-------|------|-------|
| `title` | string | Module title |
| `course` | string | Must equal `<slug>` (the folder name) — modules are self-describing |
| `order` | int > 0 | 1-based position; must equal this module's index in `moduleOrder` |
| `summary` | string | One sentence; shown in the module list |
| `estimatedMinutes` | number > 0 | Reading/working time |
| `objectives` | string[] | Observable "you'll be able to…" outcomes; may be empty |
| `prerequisites` | string[] | Module-level prereqs (e.g. earlier module ids or concepts); may be empty |

The body is the module content: a mix of **prose** (governed by `voice/literary-maverick.md`) and
**formal math** (governed by `voice/math-style.md`). See `course-design.md` for the section shape.

## Frontmatter must be valid YAML

Frontmatter is parsed by a strict YAML loader at build time. The trap: any **unquoted** string value
containing a colon-space (`: `) — common in titles and summaries — is read as a nested mapping and
**breaks the build**. Always double-quote `title`, `summary`, and `description` when in doubt:

```yaml
summary: "Strip arithmetic down to its bones: a set, a way to combine two things."
title: "Counting Tells the Truth: Lagrange's Theorem"
```

`validate-schema.mjs` runs the same strict parser, so the verify stage catches this before a build.

## Invariants (the verify stage checks all of these)

1. Every id in `moduleOrder` has a matching `NN-<id>.md` file, and every module file appears in
   `moduleOrder`. No orphans, no missing files.
2. Each module's `course` equals the folder name.
3. Each module's `order` equals its 1-based index in `moduleOrder`, and the filename prefix `NN`
   matches `order` (zero-padded to 2 digits).
4. `schemaVersion` equals `1`.
5. Every `$…$` / `$$…$$` block is valid KaTeX (a bad equation breaks the build — catch it here).
6. The course folder validates: `node shared/scripts/validate-schema.mjs <slug>` exits 0.

## Why `_course.md` and not `course.json`

Markdown-with-frontmatter keeps the metadata machine-checkable *and* lets the course intro carry
real prose with a human-editable review surface — the ICM "plain text as interface" principle.
`moduleOrder` is never hand-maintained: `shared/scripts/build-course-json.mjs` derives it from the
module files' `order` frontmatter, so it can't drift out of sync.
