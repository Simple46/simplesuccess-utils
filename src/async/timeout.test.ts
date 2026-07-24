// src/async/timeout.test.ts
import { describe, it, expect } from "vitest";
import { timeout } from "./timeout";

describe("timeout", () => {
  it("resolves when the promise finishes in time", async () => {
    const fast = new Promise((resolve) =>
      setTimeout(() => resolve("done"), 10),
    );
    await expect(timeout(fast, 100)).resolves.toBe("done");
  });

  it("rejects when the promise takes too long", async () => {
    const slow = new Promise((resolve) =>
      setTimeout(() => resolve("done"), 200),
    );
    await expect(timeout(slow, 10)).rejects.toThrow("Timed out after 10ms");
  });
});
