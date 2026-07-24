// src/array/difference.test.ts
import { describe, it, expect } from "vitest";
import { difference } from "./difference";

describe("difference", () => {
  it("removes elements present in the exclude array", () => {
    expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  it("works with strings", () => {
    expect(difference(["a", "b"], ["a"])).toEqual(["b"]);
  });

  it("returns original array when exclude is empty", () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("returns empty array when all elements excluded", () => {
    expect(difference([1, 2], [1, 2])).toEqual([]);
  });

  it("returns empty array for empty source", () => {
    expect(difference([], [1, 2])).toEqual([]);
  });
});
