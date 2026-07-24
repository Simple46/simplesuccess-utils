// src/array/intersection.test.ts
import { describe, it, expect } from "vitest";
import { intersection } from "./intersection";

describe("intersection", () => {
  it("returns elements present in both arrays", () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it("returns empty array when no overlap", () => {
    expect(intersection(["a", "b"], ["c"])).toEqual([]);
  });

  it("returns empty array when either input is empty", () => {
    expect(intersection([], [1, 2])).toEqual([]);
  });

  it("does not duplicate repeated matches", () => {
    expect(intersection([1, 1, 2], [1, 2])).toEqual([1, 1, 2]);
  });

  it("returns full array when identical", () => {
    expect(intersection([1, 2], [1, 2])).toEqual([1, 2]);
  });
});
