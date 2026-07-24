// src/array/shuffle.test.ts
import { describe, it, expect } from "vitest";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
  it("returns an array of the same length", () => {
    expect(shuffle([1, 2, 3, 4, 5])).toHaveLength(5);
  });

  it("contains the same elements as the input", () => {
    const input = [1, 2, 3, 4, 5];
    expect(shuffle(input).sort()).toEqual(input.sort());
  });

  it("does not mutate the original array", () => {
    const input = [1, 2, 3];
    const copy = [...input];
    shuffle(input);
    expect(input).toEqual(copy);
  });

  it("returns empty array unchanged", () => {
    expect(shuffle([])).toEqual([]);
  });

  it("handles a single-element array", () => {
    expect(shuffle([1])).toEqual([1]);
  });
});
