/**
 * Checks whether a string is a valid hex color code.
 *
 * @param value - The string to validate.
 * @returns True if the string is a valid 3, 4, 6, or 8 digit hex color.
 *
 * @example
 * ```ts
 * isHexColor("#fff");     // true
 * isHexColor("#ff5733");  // true
 * isHexColor("red");      // false
 * ```
 */
export function isHexColor(value: string): boolean {
  return /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value);
}
