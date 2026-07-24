/**
 * Creates a deep clone of an object or array, so nested values are not
 * shared by reference with the original.
 *
 * @param value - The value to deep clone.
 * @returns A deep copy of the input.
 *
 * @example
 * ```ts
 * const original = { a: 1, nested: { b: 2 } };
 * const copy = deepClone(original);
 * copy.nested.b = 99;
 * // original.nested.b is still 2
 * ```
 *
 * @remarks
 * Uses structuredClone under the hood — this means functions, Symbols,
 * and prototype chains are NOT supported (structuredClone throws on
 * functions). For plain data objects/arrays, this is the safest and
 * fastest approach available in modern JS runtimes.
 */
export function deepClone<T>(value: T): T {
  return structuredClone(value);
}
