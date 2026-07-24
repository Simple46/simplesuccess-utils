/**
 * Rejects if a promise doesn't resolve within a given time limit.
 *
 * @param promise - The promise to race against the timeout.
 * @param ms - The timeout duration in milliseconds.
 * @returns The resolved value, if it completes in time.
 * @throws {Error} If the timeout is reached before the promise resolves.
 *
 * @example
 * ```ts
 * await timeout(fetchData(), 5000); // rejects if fetchData takes > 5s
 * ```
 */
export function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms);
  });

  return Promise.race([promise, timeoutPromise]);
}
