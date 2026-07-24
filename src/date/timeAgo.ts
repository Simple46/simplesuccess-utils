/**
 * Converts a past date into a human-readable relative time string.
 *
 * @param date - The date to compare against now.
 * @returns A string like "5 minutes ago", "2 days ago", or "just now".
 *
 * @example
 * ```ts
 * timeAgo(new Date(Date.now() - 60000));      // "1 minute ago"
 * timeAgo(new Date(Date.now() - 86400000));   // "1 day ago"
 * ```
 *
 * @remarks
 * Only handles past dates meaningfully — future dates will return "just now"
 * since the calculation is clamped at 0.
 */
export function timeAgo(date: Date): string {
  const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));

  const intervals: [string, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];

  for (const [unit, secondsInUnit] of intervals) {
    const count = Math.floor(seconds / secondsInUnit);
    if (count >= 1) {
      return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
