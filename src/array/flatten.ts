/**
 * Flattens a nested array by a given depth.
 *
 * @param array - The (possibly nested) array to flatten.
 * @param depth - How many levels deep to flatten. Defaults to 1.
 * @returns A new flattened array.
 *
 * @example
 * ```ts
 * flatten([1, [2, 3], [4, [5, 6]]]);    // [1, 2, 3, 4, [5, 6]]
 * flatten([1, [2, [3, [4]]]], Infinity); // [1, 2, 3, 4]
 * ```
 */
export function flatten<T>(array: unknown[], depth = 1): T[] {
  return array.flat(depth) as T[];
}
