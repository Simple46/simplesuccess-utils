// src/array/move.test.ts
import { describe, it, expect } from "vitest";
import { move } from "./move";

describe("move", () => {
  it("moves an element forward", () => {
    expect(move(["a", "b", "c"], 0, 2)).toEqual(["b", "c", "a"]);
  });

  it("moves an element backward", () => {
    expect(move([1, 2, 3, 4], 3, 0)).toEqual([4, 1, 2, 3]);
  });

  it("does not mutate the original array", () => {
    const input = ["a", "b", "c"];
    const copy = [...input];
    move(input, 0, 2);
    expect(input).toEqual(copy);
  });

  it("throws when fromIndex is out of bounds", () => {
    expect(() => move([1, 2, 3], 5, 0)).toThrow();
  });

  it("returns unchanged array when moving to the same index", () => {
    expect(move([1, 2, 3], 1, 1)).toEqual([1, 2, 3]);
  });
});
