// Build an internal URL that respects the GitHub Pages `base` path.
// import.meta.env.BASE_URL already includes a trailing slash (e.g. "/fable-mode/").
// Always route internal links through here — never hand-write absolute paths,
// or they will 404 in production under the project-page base.
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL; // e.g. "/fable-mode/"
  const clean = path.replace(/^\/+/, ''); // strip any leading slash
  const joined = `${base}${clean}`;
  if (clean === '' || joined.endsWith('/')) return joined;
  // Leave file paths (last segment has an extension) alone; only add a trailing
  // slash to directory-style routes (trailingSlash: 'always').
  const lastSegment = clean.split('/').pop() ?? '';
  if (lastSegment.includes('.')) return joined;
  return `${joined}/`;
}

// Convenience builders for the two route shapes.
export const courseUrl = (slug: string) => url(`courses/${slug}/`);
export const moduleUrl = (slug: string, moduleId: string) =>
  url(`courses/${slug}/${moduleId}/`);
export const seriesUrl = (slug: string) => url(`series/${slug}/`);
export const pathUrl = (slug: string) => url(`paths/${slug}/`);
// Subjects route by a URL-safe slug of the subject name (see subjectSlug()).
export const subjectUrl = (subjectSlug: string) => url(`subjects/${subjectSlug}/`);
