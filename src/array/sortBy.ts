/**
 * Returns a new array sorted by the result of a callback, ascending.
 *
 * @param array - The array to sort.
 * @param getValue - A function returning the value to sort by for each element.
 * @returns A new sorted array (the original is not mutated).
 *
 * @example
 * ```ts
 * sortBy([{ age: 30 }, { age: 20 }], (p) => p.age);
 * // [{ age: 20 }, { age: 30 }]
 * ```
 *
 * @remarks
 * Stable sort — elements with equal values retain their relative order.
 * Does not mutate the input array.
 */
export function sortBy<T>(
  array: T[],
  getValue: (item: T) => number | string,
): T[] {
  return [...array].sort((a, b) => {
    const valA = getValue(a);
    const valB = getValue(b);
    if (valA < valB) return -1;
    if (valA > valB) return 1;
    return 0;
  });
}
