// src/async/throttle.test.ts
import { describe, it, expect, vi } from "vitest";
import { throttle } from "./throttle";

describe("throttle", () => {
  it("calls immediately on the first invocation", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 200);
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("ignores calls within the wait window", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 200);
    throttled();
    throttled();
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it("allows a call again after the wait window passes", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 200);
    throttled();
    vi.advanceTimersByTime(250);
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });
});
