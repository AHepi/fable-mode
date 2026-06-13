import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ---------------------------------------------------------------------------
// The content schema IS the interface between the production pipeline and the
// site. The pipeline's assembly stage (pipeline/04_assembly) writes files that
// must validate against these schemas. The prose form of this contract lives
// in _config/content-schema.md. Keep the two in sync.
// ---------------------------------------------------------------------------

const SCHEMA_VERSION = 1;

// One entry per course: courses/<slug>/_course.md
const courses = defineCollection({
  loader: glob({ pattern: '**/_course.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['intro', 'highschool', 'undergrad', 'grad']),
    prerequisites: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    estimatedHours: z.number().positive(),
    // Authoritative module ordering: filenames without the .md extension.
    moduleOrder: z.array(z.string()).min(1),
    schemaVersion: z.literal(SCHEMA_VERSION).default(SCHEMA_VERSION),
    // Provenance & governance (2024–26 AI-content standards: disclosure, sources,
    // SME sign-off). Optional with defaults so older courses keep validating.
    aiGenerated: z.boolean().default(true),
    model: z.string().optional(),
    generatedDate: z.string().optional(), // ISO date the pipeline produced it
    reviewed: z.boolean().default(false), // true once a human SME signs off
    sources: z
      .array(z.object({ title: z.string(), url: z.string().optional() }))
      .default([]),
  }),
});

// One entry per module: courses/<slug>/NN-*.md  (the [!_] glob skips _course.md)
const modules = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    course: z.string(), // course slug == folder name (self-describing)
    order: z.number().int().positive(), // 1-based; cross-checked against moduleOrder
    summary: z.string(),
    estimatedMinutes: z.number().positive(),
    objectives: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
  }),
});

export const collections = { courses, modules };
