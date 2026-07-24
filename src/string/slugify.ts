/**
 * Converts a string into a URL-friendly slug: lowercase, hyphen-separated,
 * with special characters stripped.
 *
 * @param text - The string to slugify.
 * @returns A lowercase, hyphenated, URL-safe version of the input.
 *
 * @example
 * ```ts
 * slugify("Hello World!");        // "hello-world"
 * slugify("  Extra   Spaces  ");  // "extra-spaces"
 * slugify("Café & Bar");          // "cafe-bar"
 * ```
 *
 * @remarks
 * Accented characters are normalized to their closest ASCII equivalent
 * (e.g. "é" becomes "e") rather than stripped entirely.
 */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
