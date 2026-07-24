// src/number/average.test.ts
import { describe, it, expect } from "vitest";
import { average } from "./average";

describe("average", () => {
  it("calculates the mean of an array", () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  it("returns 0 for an empty array", () => {
    expect(average([])).toBe(0);
  });

  it("handles a single-element array", () => {
    expect(average([5])).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(average([-2, 2])).toBe(0);
  });

  it("handles decimal results", () => {
    expect(average([1, 2])).toBe(1.5);
  });
});
