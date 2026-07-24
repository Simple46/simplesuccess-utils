/**
 * Returns elements present in both arrays.
 *
 * @param array - The first array.
 * @param other - The second array.
 * @returns A new array of values found in both.
 *
 * @example
 * ```ts
 * intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
 * intersection(["a", "b"], ["c"]);    // []
 * ```
 *
 * @remarks
 * Uses strict equality — objects are compared by reference, not deep value.
 */
export function intersection<T>(array: T[], other: T[]): T[] {
  const otherSet = new Set(other);
  return array.filter((item) => otherSet.has(item));
}
