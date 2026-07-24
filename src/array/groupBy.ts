/**
 * Groups array elements into an object keyed by the result of a callback.
 *
 * @param array - The array to group.
 * @param getKey - A function that returns the group key for each element.
 * @returns An object mapping each key to an array of matching elements.
 *
 * @example
 * ```ts
 * groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? "even" : "odd"));
 * // { odd: [1, 3, 5], even: [2, 4] }
 *
 * groupBy(["apple", "banana", "avocado"], (s) => s[0]);
 * // { a: ["apple", "avocado"], b: ["banana"] }
 * ```
 */
export function groupBy<T, K extends string | number>(
  array: T[],
  getKey: (item: T) => K,
): Record<K, T[]> {
  return array.reduce(
    (groups, item) => {
      const key = getKey(item);
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
      return groups;
    },
    {} as Record<K, T[]>,
  );
}
