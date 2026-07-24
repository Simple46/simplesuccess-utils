// src/array/unique.test.ts
import { describe, it, expect } from "vitest";
import { unique } from "./unique";

describe("unique", () => {
  it("removes duplicate numbers", () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("removes duplicate strings", () => {
    expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
  });

  it("returns empty array unchanged", () => {
    expect(unique([])).toEqual([]);
  });

  it("returns array with no duplicates unchanged", () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("does not deep-compare objects", () => {
    expect(unique([{}, {}])).toHaveLength(2);
  });
});
