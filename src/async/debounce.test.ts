// src/async/debounce.test.ts
import { describe, it, expect, vi } from "vitest";
import { debounce } from "./debounce";

describe("debounce", () => {
  it("only calls the function once after rapid calls", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 300);

    debounced();
    debounced();
    debounced();

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it("passes the latest arguments through", () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 300);

    debounced("first");
    debounced("second");

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledWith("second");
    vi.useRealTimers();
  });
});
