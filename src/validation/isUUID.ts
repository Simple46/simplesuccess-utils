/**
 * Checks whether a string is a valid UUID (versions 1-5).
 *
 * @param value - The string to validate.
 * @returns True if the string matches the UUID format.
 *
 * @example
 * ```ts
 * isUUID("123e4567-e89b-12d3-a456-426614174000"); // true
 * isUUID("not-a-uuid");                            // false
 * ```
 */
export function isUUID(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}
