/**
 * Creates a debounced version of a function that delays invoking it until
 * after a given wait time has elapsed since the last call.
 *
 * @param fn - The function to debounce.
 * @param waitMs - The delay in milliseconds.
 * @returns A debounced version of the function.
 *
 * @example
 * ```ts
 * const debouncedSearch = debounce((query: string) => search(query), 300);
 * debouncedSearch("a");
 * debouncedSearch("ab"); // only this call fires, after 300ms of silence
 * ```
 */
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  waitMs: number,
): (...args: Args) => void {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: Args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}
