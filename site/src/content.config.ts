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

export const collections = { courses, modules };
