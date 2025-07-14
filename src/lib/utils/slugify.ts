export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export function generateSolutionSlug(title: string): string {
  return `/solutions/${slugify(title)}`;
}

export function generateServiceSlug(title: string): string {
  return `/services/${slugify(title)}`;
}

export function generateAboutSlug(title: string): string {
  return `/about/${slugify(title)}`;
}

export function generateResourceSlug(title: string): string {
  return `/resources/${slugify(title)}`;
}

export function generateCaseStudySlug(title: string): string {
  return `/case-studies/${slugify(title)}`;
}

export function generateAICenterSlug(title: string): string {
  return `/ai-center/${slugify(title)}`;
}
