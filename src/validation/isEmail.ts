/**
 * Checks whether a string is a valid email address format.
 *
 * @param value - The string to validate.
 * @returns True if the string matches a standard email pattern.
 *
 * @example
 * ```ts
 * isEmail("test@example.com"); // true
 * isEmail("not-an-email");     // false
 * ```
 *
 * @remarks
 * This checks format only, not deliverability — it does not verify the
 * domain exists or the mailbox is reachable.
 */
export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
