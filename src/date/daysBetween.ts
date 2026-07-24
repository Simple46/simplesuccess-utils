/**
 * Calculates the number of whole days between two dates.
 *
 * @param start - The starting date.
 * @param end - The ending date.
 * @returns The absolute number of days between the two dates.
 *
 * @example
 * ```ts
 * daysBetween(new Date(2026, 0, 1), new Date(2026, 0, 11)); // 10
 * ```
 *
 * @remarks
 * Returns an absolute value — order of start/end doesn't affect the sign.
 * Time-of-day components are ignored; only calendar days are counted.
 */
export function daysBetween(start: Date, end: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const startUTC = Date.UTC(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );
  const endUTC = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.abs(Math.round((endUTC - startUTC) / msPerDay));
}
