/**
 * Sets a nested value on an object using a dot-notation path, creating
 * intermediate objects as needed.
 *
 * @param obj - The object to modify.
 * @param path - Dot-notation path to set, e.g. "user.address.city".
 * @param value - The value to set at that path.
 * @returns A new object with the value set (does not mutate the original).
 *
 * @example
 * ```ts
 * set({}, "user.name", "Ada");
 * // { user: { name: "Ada" } }
 * ```
 */
export function set<T extends object>(obj: T, path: string, value: unknown): T {
  const keys = path.split(".");
  const result = structuredClone(obj) as Record<string, any>;
  let current = result;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (typeof current[key] !== "object" || current[key] === null) {
        current[key] = {};
      }
      current = current[key];
    }
  });

  return result as T;
}
