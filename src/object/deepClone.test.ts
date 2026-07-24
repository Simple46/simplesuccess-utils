// src/object/deepClone.test.ts
import { describe, it, expect } from "vitest";
import { deepClone } from "./deepClone";

describe("deepClone", () => {
  it("clones a nested object without sharing references", () => {
    const original = { a: 1, nested: { b: 2 } };
    const copy = deepClone(original);
    copy.nested.b = 99;
    expect(original.nested.b).toBe(2);
  });

  it("clones arrays deeply", () => {
    const original = [1, [2, 3]];
    const copy = deepClone(original);
    (copy[1] as number[]).push(4);
    expect(original[1]).toEqual([2, 3]);
  });

  it("handles primitive values", () => {
    expect(deepClone(42)).toBe(42);
  });

  it("handles null", () => {
    expect(deepClone(null)).toBeNull();
  });

  it("handles empty objects", () => {
    expect(deepClone({})).toEqual({});
  });
});
