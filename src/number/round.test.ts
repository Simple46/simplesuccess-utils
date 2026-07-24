// src/number/round.test.ts
import { describe, it, expect } from "vitest";
import { round } from "./round";

describe("round", () => {
  it("rounds to two decimal places", () => {
    expect(round(3.14159, 2)).toBe(3.14);
  });

  it("rounds to whole number by default", () => {
    expect(round(2.5)).toBe(3);
  });

  it("handles negative numbers", () => {
    expect(round(-2.567, 1)).toBe(-2.6);
  });

  it("handles zero", () => {
    expect(round(0, 2)).toBe(0);
  });

  it("handles a value that needs no rounding", () => {
    expect(round(5, 2)).toBe(5);
  });
});
