// src/async/sleep.test.ts
import { describe, it, expect, vi } from "vitest";
import { sleep } from "./sleep";

describe("sleep", () => {
  it("resolves after the specified delay", async () => {
    vi.useFakeTimers();
    const promise = sleep(1000);
    vi.advanceTimersByTime(1000);
    await expect(promise).resolves.toBeUndefined();
    vi.useRealTimers();
  });

  it("resolves immediately for 0ms", async () => {
    await expect(sleep(0)).resolves.toBeUndefined();
  });
});
