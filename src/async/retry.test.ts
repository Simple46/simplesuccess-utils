// src/async/retry.test.ts
import { describe, it, expect, vi } from "vitest";
import { retry } from "./retry";

describe("retry", () => {
  it("returns the result on first success", async () => {
    const fn = vi.fn().mockResolvedValue("success");
    expect(await retry(fn)).toBe("success");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("retries after a failure and eventually succeeds", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValueOnce("success");
    expect(await retry(fn, 2)).toBe("success");
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("throws the last error after all attempts fail", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("always fails"));
    await expect(retry(fn, 2)).rejects.toThrow("always fails");
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
