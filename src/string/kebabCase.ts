/**
 * Converts a string to kebab-case.
 *
 * @param text - The string to convert (supports camelCase, spaces, underscores).
 * @returns The kebab-case version of the input.
 *
 * @example
 * ```ts
 * kebabCase("helloWorld");   // "hello-world"
 * kebabCase("Hello World");  // "hello-world"
 * kebabCase("hello_world");  // "hello-world"
 * ```
 */
export function kebabCase(text: string): string {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");
}
