/**
 * Capitalizes the first letter of a string, leaving the rest unchanged.
 *
 * @param text - The string to capitalize.
 * @returns The input string with its first character uppercased.
 *
 * @example
 * ```ts
 * capitalize("hello world"); // "Hello world"
 * capitalize("Hello");       // "Hello" (unchanged)
 * capitalize("");            // "" (empty string returned as-is)
 * ```
 *
 * @remarks
 * Only the first character is affected — this does not lowercase the rest
 * of the string (compare to a "title case" function, which is separate).
 */
export function capitalize(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}
