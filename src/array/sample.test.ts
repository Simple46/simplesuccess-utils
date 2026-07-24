// src/array/sample.test.ts
import { describe, it, expect } from "vitest";
import { sample } from "./sample";

describe("sample", () => {
  it("returns an element that exists in the array", () => {
    const input = [1, 2, 3, 4, 5];
    expect(input).toContain(sample(input));
  });

  it("returns the only element in a single-item array", () => {
    expect(sample([42])).toBe(42);
  });

  it("throws when the array is empty", () => {
    expect(() => sample([])).toThrow();
  });

  it("works with an array of strings", () => {
    const input = ["a", "b", "c"];
    expect(input).toContain(sample(input));
  });
});
