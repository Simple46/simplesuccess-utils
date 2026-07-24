/**
 * Deeply freezes an object, making it and all nested objects immutable.
 *
 * @param obj - The object to freeze.
 * @returns The same object, deeply frozen (mutation attempts will fail
 * silently in non-strict mode, or throw in strict mode).
 *
 * @example
 * ```ts
 * const config = freeze({ nested: { value: 1 } });
 * config.nested.value = 2; // has no effect — value stays 1
 * ```
 */
export function freeze<T extends object>(obj: T): Readonly<T> {
  Object.values(obj).forEach((value) => {
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      freeze(value);
    }
  });
  return Object.freeze(obj);
}
