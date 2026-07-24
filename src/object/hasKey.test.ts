// src/object/hasKey.test.ts
import { describe, it, expect } from "vitest";
import { hasKey } from "./hasKey";

describe("hasKey", () => {
  it("returns true for an own property", () => {
    expect(hasKey({ a: 1 }, "a")).toBe(true);
  });

  it("returns false for a missing key", () => {
    expect(hasKey({ a: 1 }, "b")).toBe(false);
  });

  it("returns false for inherited properties", () => {
    expect(hasKey({ a: 1 }, "toString")).toBe(false);
  });

  it("handles empty objects", () => {
    expect(hasKey({}, "a")).toBe(false);
  });

  it("works with symbol keys", () => {
    const sym = Symbol("test");
    expect(hasKey({ [sym]: 1 }, sym)).toBe(true);
  });
});
