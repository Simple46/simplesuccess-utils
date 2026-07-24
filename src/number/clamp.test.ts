// src/number/clamp.test.ts
import { describe, it, expect } from "vitest";
import { clamp } from "./clamp";

describe("clamp", () => {
  it("clamps a value above the max", () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });

  it("clamps a value below the min", () => {
    expect(clamp(-3, 0, 5)).toBe(0);
  });

  it("returns the value unchanged when within range", () => {
    expect(clamp(3, 0, 5)).toBe(3);
  });

  it("handles value equal to min", () => {
    expect(clamp(0, 0, 5)).toBe(0);
  });

  it("handles value equal to max", () => {
    expect(clamp(5, 0, 5)).toBe(5);
  });
});
