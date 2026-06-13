// Single source of truth for the course/module content schema.
//
// Both the Astro content collection (site/src/content.config.ts) and the
// out-of-band validator (shared/scripts/validate-schema.mjs) build their schema
// from THIS file, so field definitions never drift across the two. The factory
// takes a Zod instance (`z`) so each caller uses its own zod (Astro's re-exported
// `z` vs. the plain `zod` package) without cross-instance issues.

export const SCHEMA_VERSION = 1;

// Background level the course is calibrated to (see _config/course-design.md).
export const LEVELS = ['intro', 'highschool', 'undergrad', 'grad'];

// Course "kind" decides domain-specific behavior: which module template applies,
// whether math (KaTeX) rules and validation are in force, etc. Default 'stem'
// keeps existing math courses behaving exactly as before.
export const KINDS = ['stem', 'humanities', 'language', 'skill', 'general'];

// Kinds for which mathematical (KaTeX) content is expected and validated.
export const MATH_KINDS = ['stem'];

export function buildSchemas(z) {
  const courses = z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(LEVELS),
    kind: z.enum(KINDS).default('stem'),
    prerequisites: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    estimatedHours: z.number().positive(),
    // Authoritative module ordering: filenames without the .md extension.
    moduleOrder: z.array(z.string()).min(1),
    schemaVersion: z.literal(SCHEMA_VERSION).default(SCHEMA_VERSION),
    // Provenance & governance (2024–26 AI-content norms). Optional w/ defaults.
    aiGenerated: z.boolean().default(true),
    model: z.string().optional(),
    generatedDate: z.string().optional(),
    reviewed: z.boolean().default(false),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().optional() }))
      .default([]),
  });

  const modules = z.object({
    title: z.string(),
    course: z.string(),
    order: z.number().int().positive(),
    summary: z.string(),
    estimatedMinutes: z.number().positive(),
    objectives: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
  });

  return { courses, modules };
}

// --- Migration scaffold -----------------------------------------------------
// When SCHEMA_VERSION bumps, register a migration from each prior version to the
// next here. migrateCourseData walks a course's data up to the current version.
// New fields added so far have all been optional-with-default (back-compatible),
// so no migrations are needed yet — the mechanism exists for when one is.
export const MIGRATIONS = {
  // 1: (data) => ({ ...data, schemaVersion: 2, /* transform */ }),
};

export function migrateCourseData(data) {
  let out = { ...data };
  let v = Number(out.schemaVersion) || 1;
  while (v < SCHEMA_VERSION && MIGRATIONS[v]) {
    out = MIGRATIONS[v](out);
    v = Number(out.schemaVersion);
  }
  return out;
}
