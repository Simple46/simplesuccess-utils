/**
 * Creates a throttled version of a function that only invokes it at most
 * once per specified time window.
 *
 * @param fn - The function to throttle.
 * @param waitMs - The minimum time between invocations, in milliseconds.
 * @returns A throttled version of the function.
 *
 * @example
 * ```ts
 * const throttledScroll = throttle(() => handleScroll(), 200);
 * window.addEventListener("scroll", throttledScroll);
 * ```
 */
export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  waitMs: number,
): (...args: Args) => void {
  let lastCall = 0;

  return (...args: Args) => {
    const now = Date.now();
    if (now - lastCall >= waitMs) {
      lastCall = now;
      fn(...args);
    }
  };
}
