/**
 * Merges two objects shallowly — top-level keys from the source override
 * the target.
 *
 * @param target - The base object.
 * @param source - The object whose keys take priority.
 * @returns A new merged object (shallow merge only).
 *
 * @example
 * ```ts
 * merge({ a: 1, b: 2 }, { b: 99, c: 3 }); // { a: 1, b: 99, c: 3 }
 * ```
 *
 * @remarks
 * This is a shallow merge — nested objects are replaced, not merged.
 * Use `deepMerge` if you need nested objects combined recursively.
 */
export function merge<T extends object, U extends object>(
  target: T,
  source: U,
): T & U {
  return { ...target, ...source };
}
