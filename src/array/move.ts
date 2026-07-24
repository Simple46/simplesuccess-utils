/**
 * Moves an array element from one index to another.
 *
 * @param array - The source array.
 * @param fromIndex - The index of the element to move.
 * @param toIndex - The index to move it to.
 * @returns A new array with the element repositioned.
 *
 * @example
 * ```ts
 * move(["a", "b", "c"], 0, 2); // ["b", "c", "a"]
 * move([1, 2, 3, 4], 3, 0);   // [4, 1, 2, 3]
 * ```
 *
 * @throws {Error} If fromIndex or toIndex is out of bounds.
 */
export function move<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  if (
    fromIndex < 0 ||
    fromIndex >= array.length ||
    toIndex < 0 ||
    toIndex >= array.length
  ) {
    throw new Error("move: fromIndex or toIndex is out of bounds");
  }
  const result = [...array];
  const [item] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, item);
  return result;
}
