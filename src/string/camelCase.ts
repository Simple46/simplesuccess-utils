/**
 * Converts a string to camelCase.
 *
 * @param text - The string to convert (supports spaces, hyphens, underscores).
 * @returns The camelCase version of the input.
 *
 * @example
 * ```ts
 * camelCase("hello world");   // "helloWorld"
 * camelCase("hello-world");   // "helloWorld"
 * camelCase("hello_world");   // "helloWorld"
 * ```
 */
export function camelCase(text: string): string {
  const words = text.replace(/[-_]+/g, " ").trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return "";

  return words
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}
