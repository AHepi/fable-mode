// The catalog's organising axes, in one place: SUBJECT (breadth, colour-coded
// for wayfinding) and DIFFICULTY (a clean public ladder derived from the
// schema's `level`). The controlled subject list lives in the schema (single
// source of truth); the display metadata — hue, blurb, ordering — lives here.
import { LEVELS } from '../schema/course-schema.mjs';

// Per-subject accent hue (HSL channels so CSS can build tints/shades from one
// value). These flow into cards, course headers, and module accents.
export interface SubjectMeta {
  hue: string; // "h s% l%" channel string for hsl()/color-mix
  blurb: string;
}

export const SUBJECT_META: Record<string, SubjectMeta> = {
  'Mathematics': { hue: '258 90% 70%', blurb: 'Proof, structure, and the shapes behind the symbols.' },
  'Statistics & Data': { hue: '172 66% 50%', blurb: 'Reading the world through variation, evidence, and uncertainty.' },
  'Economics & Policy': { hue: '38 92% 58%', blurb: 'How money, incentives, and public choices actually work.' },
  'Computer Science': { hue: '142 64% 58%', blurb: 'Machines, models, and the ideas that make them tick.' },
  'Natural Sciences': { hue: '199 90% 60%', blurb: 'The physical and living world, from first principles.' },
  'Humanities': { hue: '347 90% 67%', blurb: 'Texts, history, and the long argument about being human.' },
  'Language': { hue: '24 92% 60%', blurb: 'Learning to mean things in another tongue.' },
  'Skills & Craft': { hue: '84 62% 55%', blurb: 'Practical capabilities, built deliberately.' },
};

// Derive the ordered subject list from SUBJECT_META (the canonical definition
// of subjects lives here, not in the schema — schema has no SUBJECTS export).
export const SUBJECTS = Object.keys(SUBJECT_META) as string[];
export const SUBJECT_ORDER = SUBJECTS;

export type Subject = (typeof SUBJECTS)[number];
export type Level = string;
export const DEFAULT_HUE = '231 100% 71%'; // primary indigo — used when subject is absent

export function subjectHue(subject?: string | null): string {
  return (subject && SUBJECT_META[subject]?.hue) || DEFAULT_HUE;
}
export function subjectBlurb(subject?: string | null): string {
  return (subject && SUBJECT_META[subject]?.blurb) || '';
}

// DIFFICULTY ladder — derived from `level` (the background a course assumes).
// Order is the difficulty ranking; label is the public-facing rung.
export interface LevelMeta {
  rank: number;
  label: string;
  blurb: string;
}
export const LEVEL_META: Record<string, LevelMeta> = {
  intro: { rank: 1, label: 'Beginner', blurb: 'No background assumed.' },
  highschool: { rank: 2, label: 'Foundational', blurb: 'Assumes high-school background.' },
  undergrad: { rank: 3, label: 'Intermediate', blurb: 'Assumes undergraduate background.' },
  grad: { rank: 4, label: 'Advanced', blurb: 'Assumes graduate background.' },
};
export const LEVELS_BY_DIFFICULTY = [...LEVELS].sort(
  (a, b) => (LEVEL_META[a]?.rank ?? 9) - (LEVEL_META[b]?.rank ?? 9),
);
export function levelLabel(level?: string | null): string {
  return (level && LEVEL_META[level]?.label) || (level ?? '');
}
export function levelRank(level?: string | null): number {
  return (level && LEVEL_META[level]?.rank) || 9;
}

// Slug helper shared by listing pages: courses are stored as `<slug>/_course.md`.
export const slugOf = (id: string) => id.split('/')[0];

// URL-safe slug for a subject name, e.g. "Statistics & Data" -> "statistics-data".
// /subjects/[subject].astro generates one route per subject from SUBJECT_ORDER,
// so we never need to parse the slug back — just match on the generated value.
export const subjectSlug = (subject: string) =>
  subject.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
