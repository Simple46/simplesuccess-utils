/**
 * Restricts a number to be within a specified range.
 *
 * @param value - The number to clamp.
 * @param min - The minimum allowed value.
 * @param max - The maximum allowed value.
 * @returns The value clamped between min and max.
 *
 * @example
 * ```ts
 * clamp(10, 0, 5);  // 5
 * clamp(-3, 0, 5);  // 0
 * clamp(3, 0, 5);   // 3
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
