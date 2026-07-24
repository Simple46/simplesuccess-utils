// src/number/sum.test.ts
import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("adds an array of numbers", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("returns 0 for an empty array", () => {
    expect(sum([])).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(sum([-1, -2, 3])).toBe(0);
  });

  it("handles a single-element array", () => {
    expect(sum([5])).toBe(5);
  });

  it("handles decimal numbers", () => {
    expect(sum([1.1, 2.2])).toBeCloseTo(3.3);
  });
});
