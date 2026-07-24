// src/array/groupBy.test.ts
import { describe, it, expect } from "vitest";
import { groupBy } from "./groupBy";

describe("groupBy", () => {
  it("groups numbers by even/odd", () => {
    expect(
      groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? "even" : "odd")),
    ).toEqual({
      odd: [1, 3, 5],
      even: [2, 4],
    });
  });

  it("groups strings by first letter", () => {
    expect(groupBy(["apple", "banana", "avocado"], (s) => s[0])).toEqual({
      a: ["apple", "avocado"],
      b: ["banana"],
    });
  });

  it("returns empty object for empty array", () => {
    expect(groupBy([], (n: number) => n)).toEqual({});
  });

  it("handles a single group", () => {
    expect(groupBy([1, 2, 3], () => "all")).toEqual({ all: [1, 2, 3] });
  });

  it("handles duplicate keys correctly", () => {
    expect(groupBy([1, 1, 1], (n) => n)).toEqual({ 1: [1, 1, 1] });
  });
});
