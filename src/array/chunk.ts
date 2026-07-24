/**
 * Splits an array into chunks of a specified size.
 *
 * @param array - The array to split.
 * @param size - The maximum size of each chunk.
 * @returns An array of chunks (sub-arrays).
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3], 5);       // [[1, 2, 3]]
 * ```
 *
 * @throws {Error} If size is less than 1.
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size < 1) throw new Error("chunk: size must be at least 1");
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
