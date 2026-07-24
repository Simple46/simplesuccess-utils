/**
 * Pauses execution for a given number of milliseconds.
 *
 * @param ms - The number of milliseconds to wait.
 * @returns A promise that resolves after the delay.
 *
 * @example
 * ```ts
 * await sleep(1000); // waits 1 second
 * console.log("done waiting");
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
