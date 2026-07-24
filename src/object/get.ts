/**
 * Safely retrieves a nested value from an object using a dot-notation path.
 *
 * @param obj - The object to read from.
 * @param path - Dot-notation path to the value, e.g. "user.address.city".
 * @param defaultValue - Value returned if the path doesn't resolve.
 * @returns The value at the path, or defaultValue if not found.
 *
 * @example
 * ```ts
 * get({ user: { name: "Ada" } }, "user.name");        // "Ada"
 * get({ user: { name: "Ada" } }, "user.age", 0);       // 0 (path missing)
 * get({}, "a.b.c");                                    // undefined
 * ```
 */
export function get(
  obj: unknown,
  path: string,
  defaultValue?: unknown,
): unknown {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== "object"
    ) {
      return defaultValue;
    }
    current = (current as Record<string, unknown>)[key];
  }

  return current === undefined ? defaultValue : current;
}
