/**
 * Converts a string to snake_case.
 *
 * @param text - The string to convert (supports camelCase, spaces, hyphens).
 * @returns The snake_case version of the input.
 *
 * @example
 * ```ts
 * snakeCase("helloWorld");   // "hello_world"
 * snakeCase("Hello World");  // "hello_world"
 * snakeCase("hello-world");  // "hello_world"
 * ```
 */
export function snakeCase(text: string): string {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase()
    .replace(/^_+|_+$/g, "");
}
