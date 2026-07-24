/**
 * Calculates the sum of an array of numbers.
 *
 * @param numbers - The numbers to add together.
 * @returns The total sum.
 *
 * @example
 * ```ts
 * sum([1, 2, 3, 4]); // 10
 * sum([]);            // 0
 * ```
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
