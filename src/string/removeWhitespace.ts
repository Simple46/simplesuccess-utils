/**
 * Removes all whitespace characters from a string.
 *
 * @param text - The string to strip whitespace from.
 * @returns The input with all spaces, tabs, and newlines removed.
 *
 * @example
 * ```ts
 * removeWhitespace("hello world");     // "helloworld"
 * removeWhitespace("  hi \n there  "); // "hithere"
 * ```
 *
 * @remarks
 * Removes *all* whitespace, including internal spaces — not just leading
 * and trailing (use the built-in `.trim()` if that's all you need).
 */
export function removeWhitespace(text: string): string {
  return text.replace(/\s+/g, "");
}
