/**
 * Checks whether a string is a valid, well-formed URL.
 *
 * @param value - The string to validate.
 * @returns True if the string can be parsed as a valid URL.
 *
 * @example
 * ```ts
 * isURL("https://example.com"); // true
 * isURL("not a url");           // false
 * ```
 */
export function isURL(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
