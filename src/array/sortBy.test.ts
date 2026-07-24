// src/array/sortBy.test.ts
import { describe, it, expect } from "vitest";
import { sortBy } from "./sortBy";

describe("sortBy", () => {
  it("sorts objects by a numeric key", () => {
    expect(sortBy([{ age: 30 }, { age: 20 }], (p) => p.age)).toEqual([
      { age: 20 },
      { age: 30 },
    ]);
  });

  it("sorts strings alphabetically", () => {
    expect(sortBy(["banana", "apple"], (s) => s)).toEqual(["apple", "banana"]);
  });

  it("does not mutate the original array", () => {
    const input = [{ age: 30 }, { age: 20 }];
    const copy = [...input];
    sortBy(input, (p) => p.age);
    expect(input).toEqual(copy);
  });

  it("returns empty array unchanged", () => {
    expect(sortBy([], (n: number) => n)).toEqual([]);
  });

  it("preserves order of equal values (stable sort)", () => {
    const input = [
      { id: 1, v: 1 },
      { id: 2, v: 1 },
    ];
    expect(sortBy(input, (i) => i.v).map((i) => i.id)).toEqual([1, 2]);
  });
});
