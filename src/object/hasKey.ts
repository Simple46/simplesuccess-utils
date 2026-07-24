/**
 * Checks whether an object has a given key as its own property
 * (not inherited from the prototype chain).
 *
 * @param obj - The object to check.
 * @param key - The key to look for.
 * @returns True if the object has its own property with that key.
 *
 * @example
 * ```ts
 * hasKey({ a: 1 }, "a");        // true
 * hasKey({ a: 1 }, "toString"); // false (inherited, not own)
 * ```
 */
export function hasKey<T extends object>(
  obj: T,
  key: PropertyKey,
): key is keyof T & PropertyKey {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
