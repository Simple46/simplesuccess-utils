// src/object/deepMerge.test.ts
import { describe, it, expect } from "vitest";
import { deepMerge } from "./deepMerge";

describe("deepMerge", () => {
  it("merges nested objects recursively", () => {
    expect(
      deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 99, z: 3 } } as any),
    ).toEqual({
      a: { x: 1, y: 99, z: 3 },
    });
  });

  it("replaces arrays instead of merging them", () => {
    expect(deepMerge({ a: [1, 2] }, { a: [3] })).toEqual({ a: [3] });
  });

  it("handles top-level primitive overrides", () => {
    expect(deepMerge({ a: 1, b: 2 }, { b: 99 })).toEqual({ a: 1, b: 99 });
  });

  it("does not mutate the original target", () => {
    const target = { a: { x: 1 } };
    deepMerge(target, { a: { y: 2 } } as any);
    expect(target).toEqual({ a: { x: 1 } });
  });

  it("handles empty source", () => {
    expect(deepMerge({ a: 1 }, {})).toEqual({ a: 1 });
  });
});
