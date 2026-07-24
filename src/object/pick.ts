/**
 * Creates a new object with only the specified keys from the source object.
 *
 * @param obj - The source object.
 * @param keys - The keys to include in the result.
 * @returns A new object containing only the picked keys.
 *
 * @example
 * ```ts
 * pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
 * ```
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}
