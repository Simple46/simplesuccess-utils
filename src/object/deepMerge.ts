/**
 * Recursively merges two objects — nested objects are combined instead
 * of being replaced.
 *
 * @param target - The base object.
 * @param source - The object whose keys take priority, merged recursively.
 * @returns A new deeply merged object.
 *
 * @example
 * ```ts
 * deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 99, z: 3 } });
 * // { a: { x: 1, y: 99, z: 3 } }
 * ```
 *
 * @remarks
 * Arrays are NOT merged element-by-element — an array value in source
 * fully replaces an array value in target, same as a primitive would.
 */
export function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const result: Record<string, any> = { ...target };

  for (const key in source) {
    const sourceVal = source[key];
    const targetVal = result[key];

    if (
      sourceVal &&
      typeof sourceVal === "object" &&
      !Array.isArray(sourceVal) &&
      targetVal &&
      typeof targetVal === "object" &&
      !Array.isArray(targetVal)
    ) {
      result[key] = deepMerge(targetVal, sourceVal);
    } else {
      result[key] = sourceVal;
    }
  }

  return result as T;
}
