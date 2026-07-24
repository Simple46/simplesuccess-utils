/**
 * Checks whether a value is "empty" — covers strings, arrays, objects,
 * null, and undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is considered empty.
 *
 * @example
 * ```ts
 * isEmpty("");         // true
 * isEmpty([]);         // true
 * isEmpty({});         // true
 * isEmpty(null);       // true
 * isEmpty("hello");    // false
 * isEmpty([1, 2]);     // false
 * ```
 *
 * @remarks
 * Numbers and booleans are never considered "empty" — isEmpty(0) is false,
 * since 0 is a meaningful value, not an absence of one.
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" || Array.isArray(value))
    return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}
