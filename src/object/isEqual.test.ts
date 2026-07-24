// src/object/isEqual.test.ts
import { describe, it, expect } from "vitest";
import { isEqual } from "./isEqual";

describe("isEqual", () => {
  it("returns true for deeply equal objects", () => {
    expect(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })).toBe(true);
  });

  it("returns true for deeply equal arrays", () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it("returns false for objects with different values", () => {
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
  });

  it("returns false for objects with different key counts", () => {
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it("returns true for identical primitives", () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  it("returns false when comparing different types", () => {
    expect(isEqual(1, "1")).toBe(false);
  });
});
