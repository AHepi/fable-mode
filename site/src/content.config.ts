import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { buildSchemas } from './schema/course-schema.mjs';

// ---------------------------------------------------------------------------
// The content schema IS the interface between the production pipeline and the
// site. Field definitions live in a single source of truth,
// src/schema/course-schema.mjs, which the out-of-band validator
// (shared/scripts/validate-schema.mjs) consumes too — so the two never drift.
// The prose form of this contract is in _config/content-schema.md.
// ---------------------------------------------------------------------------

const { courses: courseSchema, modules: moduleSchema } = buildSchemas(z);

// One entry per course: courses/<slug>/_course.md
const courses = defineCollection({
  loader: glob({ pattern: '**/_course.md', base: './src/content/courses' }),
  schema: courseSchema,
});

// One entry per module: courses/<slug>/NN-*.md  (the [!_] glob skips _course.md)
const modules = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/courses' }),
  schema: moduleSchema,
});

// One entry per path: paths/<slug>.md
const paths = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/paths' }),
  schema: z.object({
    title: z.string(),
    subject: z.string().optional(),
    blurb: z.string(),
    order: z.number().int().positive(),
    steps: z.array(
      z.object({
        course: z.string().optional(),
        series: z.string().optional(),
        note: z.string().optional(),
      }),
    ),
    outcomes: z.array(z.string()).default([]),
  }),
});

export const collections = { courses, modules, paths };
