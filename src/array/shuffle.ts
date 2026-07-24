/**
 * Returns a new array with elements shuffled into random order.
 *
 * @param array - The array to shuffle.
 * @returns A new shuffled array (the original is not mutated).
 *
 * @example
 * ```ts
 * shuffle([1, 2, 3, 4, 5]); // e.g. [3, 1, 5, 2, 4]
 * ```
 *
 * @remarks
 * Uses the Fisher-Yates algorithm for unbiased shuffling. Does not
 * mutate the input array — always returns a new one.
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
