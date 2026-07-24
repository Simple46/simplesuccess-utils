/**
 * Calculates the average (mean) of an array of numbers.
 *
 * @param numbers - The numbers to average.
 * @returns The mean value, or 0 for an empty array.
 *
 * @example
 * ```ts
 * average([1, 2, 3, 4]); // 2.5
 * average([]);            // 0
 * ```
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return numbers.reduce((total, n) => total + n, 0) / numbers.length;
}
