/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param value - The number to round.
 * @param decimals - Number of decimal places. Defaults to 0.
 * @returns The rounded number.
 *
 * @example
 * ```ts
 * round(3.14159, 2); // 3.14
 * round(2.5);         // 3
 * ```
 */
export function round(value: number, decimals = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
