/**
 * Truncates a string to a maximum length, appending a suffix if cut off.
 *
 * @param text - The string to truncate.
 * @param maxLength - The maximum length of the result, including the suffix.
 * @param suffix - The string appended when truncation occurs. Defaults to "...".
 * @returns The truncated string, or the original if it's within maxLength.
 *
 * @example
 * ```ts
 * truncate("Hello World", 8);           // "Hello..."
 * truncate("Hi", 10);                   // "Hi" (unchanged, within limit)
 * truncate("Hello World", 8, ">>");     // "Hello >>"
 * ```
 *
 * @remarks
 * If maxLength is smaller than the suffix length, the suffix itself is
 * truncated to fit.
 */
export function truncate(
  text: string,
  maxLength: number,
  suffix = "...",
): string {
  if (text.length <= maxLength) return text;
  if (maxLength <= suffix.length) return suffix.slice(0, maxLength);
  return text.slice(0, maxLength - suffix.length) + suffix;
}
