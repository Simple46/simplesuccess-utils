/**
 * Returns a new Date with a given number of days added.
 *
 * @param date - The starting date.
 * @param days - Number of days to add (negative to subtract).
 * @returns A new Date object, offset by the given number of days.
 *
 * @example
 * ```ts
 * addDays(new Date(2026, 0, 1), 5);  // Jan 6, 2026
 * addDays(new Date(2026, 0, 1), -1); // Dec 31, 2025
 * ```
 *
 * @remarks
 * Does not mutate the input date — always returns a new Date instance.
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
