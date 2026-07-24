/**
 * Reverses the characters of a string.
 *
 * @param text - The string to reverse.
 * @returns The reversed string.
 *
 * @example
 * ```ts
 * reverse("hello");  // "olleh"
 * reverse("");        // ""
 * ```
 *
 * @remarks
 * Uses Array.from instead of a plain split("") so multi-byte unicode
 * characters (like emoji) are not corrupted during reversal.
 */
export function reverse(text: string): string {
  return Array.from(text).reverse().join("");
}
