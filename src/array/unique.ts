/**
 * Removes duplicate values from an array, preserving the first occurrence.
 *
 * @param array - The array to deduplicate.
 * @returns A new array with duplicate values removed.
 *
 * @example
 * ```ts
 * unique([1, 2, 2, 3, 1]);       // [1, 2, 3]
 * unique(["a", "b", "a"]);       // ["a", "b"]
 * ```
 *
 * @remarks
 * Uses strict equality (via Set), so objects/arrays are compared by
 * reference, not deep value — [{}, {}] will not be deduplicated.
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
