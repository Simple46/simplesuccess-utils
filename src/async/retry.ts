/**
 * Retries an async function a specified number of times if it throws.
 *
 * @param fn - The async function to attempt.
 * @param attempts - Maximum number of attempts. Defaults to 3.
 * @param delayMs - Delay between attempts in milliseconds. Defaults to 0.
 * @returns The resolved value of fn, once it succeeds.
 * @throws The last error thrown, if all attempts fail.
 *
 * @example
 * ```ts
 * await retry(() => fetchData(), 3, 1000);
 * ```
 */
export async function retry<T>(
  fn: () => Promise<T>,
  attempts = 3,
  delayMs = 0,
): Promise<T> {
  let lastError: unknown;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (i < attempts - 1 && delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }

  throw lastError;
}
