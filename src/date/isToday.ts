/**
 * Checks whether a given date falls on today's calendar date.
 *
 * @param date - The date to check.
 * @returns True if the date is today (same year, month, and day).
 *
 * @example
 * ```ts
 * isToday(new Date()); // true
 * isToday(new Date(2020, 0, 1)); // false
 * ```
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}
