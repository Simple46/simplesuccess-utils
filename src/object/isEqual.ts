/**
 * Performs a deep equality check between two values.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if both values are deeply equal.
 *
 * @example
 * ```ts
 * isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // true
 * isEqual([1, 2, 3], [1, 2, 3]);                          // true
 * isEqual({ a: 1 }, { a: 2 });                            // false
 * ```
 */
export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;

  if (typeof a !== typeof b || a === null || b === null) return false;

  if (typeof a === "object" && typeof b === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every((key) =>
      isEqual(
        (a as Record<string, unknown>)[key],
        (b as Record<string, unknown>)[key],
      ),
    );
  }

  return false;
}
