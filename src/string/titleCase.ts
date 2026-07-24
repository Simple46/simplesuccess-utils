/**
 * Converts a string to Title Case, capitalizing the first letter of each word.
 *
 * @param text - The string to convert.
 * @returns The Title Case version of the input.
 *
 * @example
 * ```ts
 * titleCase("hello world");        // "Hello World"
 * titleCase("the lord of the rings"); // "The Lord Of The Rings"
 * ```
 *
 * @remarks
 * Unlike some title-case implementations, this does not skip small words
 * like "of" or "the" — every word is capitalized.
 */
export function titleCase(text: string): string {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}
