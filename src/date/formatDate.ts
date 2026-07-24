/**
 * Formats a Date object into a readable string.
 *
 * @param date - The date to format.
 * @param locale - The locale to format for. Defaults to "en-US".
 * @returns A human-readable date string, e.g. "July 24, 2026".
 *
 * @example
 * ```ts
 * formatDate(new Date(2026, 6, 24)); // "July 24, 2026"
 * ```
 */
export function formatDate(date: Date, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
