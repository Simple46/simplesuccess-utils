/**
 * Returns a random element from an array.
 *
 * @param array - The array to sample from.
 * @returns A randomly selected element.
 *
 * @example
 * ```ts
 * sample([1, 2, 3, 4, 5]); // e.g. 3
 * ```
 *
 * @throws {Error} If the array is empty.
 */
export function sample<T>(array: T[]): T {
  if (array.length === 0) throw new Error("sample: array must not be empty");
  return array[Math.floor(Math.random() * array.length)];
}
