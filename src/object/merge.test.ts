// src/object/merge.test.ts
import { describe, it, expect } from "vitest";
import { merge } from "./merge";

describe("merge", () => {
  it("merges two objects, source taking priority", () => {
    expect(merge({ a: 1, b: 2 }, { b: 99, c: 3 })).toEqual({
      a: 1,
      b: 99,
      c: 3,
    });
  });

  it("does not mutate either input", () => {
    const target = { a: 1 };
    const source = { b: 2 };
    merge(target, source);
    expect(target).toEqual({ a: 1 });
    expect(source).toEqual({ b: 2 });
  });

  it("replaces nested objects instead of merging them", () => {
    expect(merge({ a: { x: 1 } }, { a: { y: 2 } })).toEqual({ a: { y: 2 } });
  });

  it("handles empty source", () => {
    expect(merge({ a: 1 }, {})).toEqual({ a: 1 });
  });
});
