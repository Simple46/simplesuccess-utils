/**
 * Creates a new object excluding the specified keys from the source object.
 *
 * @param obj - The source object.
 * @param keys - The keys to exclude from the result.
 * @returns A new object without the omitted keys.
 *
 * @example
 * ```ts
 * omit({ a: 1, b: 2, c: 3 }, ["b"]); // { a: 1, c: 3 }
 * ```
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
