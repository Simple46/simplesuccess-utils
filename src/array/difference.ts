/**
 * Returns elements present in the first array but not the second.
 *
 * @param array - The source array.
 * @param exclude - The array of values to exclude.
 * @returns A new array with excluded values removed.
 *
 * @example
 * ```ts
 * difference([1, 2, 3, 4], [2, 4]); // [1, 3]
 * difference(["a", "b"], ["a"]);    // ["b"]
 * ```
 *
 * @remarks
 * Uses strict equality — objects are compared by reference, not deep value.
 */
export function difference<T>(array: T[], exclude: T[]): T[] {
  const excludeSet = new Set(exclude);
  return array.filter((item) => !excludeSet.has(item));
}
