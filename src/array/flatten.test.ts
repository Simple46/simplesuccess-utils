// src/array/flatten.test.ts
import { describe, it, expect } from "vitest";
import { flatten } from "./flatten";

describe("flatten", () => {
  it("flattens one level by default", () => {
    expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
  });

  it("flattens fully with Infinity depth", () => {
    expect(flatten([1, [2, [3, [4]]]], Infinity)).toEqual([1, 2, 3, 4]);
  });

  it("returns empty array unchanged", () => {
    expect(flatten([])).toEqual([]);
  });

  it("returns already-flat array unchanged", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("handles depth of 0 (no flattening)", () => {
    expect(flatten([1, [2, 3]], 0)).toEqual([1, [2, 3]]);
  });
});
