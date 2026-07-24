// src/object/pick.test.ts
import { describe, it, expect } from "vitest";
import { pick } from "./pick";

describe("pick", () => {
  it("picks the specified keys", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  it("returns empty object when keys array is empty", () => {
    expect(pick({ a: 1, b: 2 }, [])).toEqual({});
  });

  it("ignores keys not present on the object", () => {
    expect(pick({ a: 1 } as any, ["a", "z"])).toEqual({ a: 1 });
  });

  it("handles picking all keys", () => {
    expect(pick({ a: 1, b: 2 }, ["a", "b"])).toEqual({ a: 1, b: 2 });
  });
});
