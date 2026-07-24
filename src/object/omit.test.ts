// src/object/omit.test.ts
import { describe, it, expect } from "vitest";
import { omit } from "./omit";

describe("omit", () => {
  it("omits the specified keys", () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ["b"])).toEqual({ a: 1, c: 3 });
  });

  it("returns full object unchanged when keys array is empty", () => {
    expect(omit({ a: 1, b: 2 }, [])).toEqual({ a: 1, b: 2 });
  });

  it("handles omitting all keys", () => {
    expect(omit({ a: 1, b: 2 }, ["a", "b"])).toEqual({});
  });

  it("does not mutate the original object", () => {
    const input = { a: 1, b: 2 };
    omit(input, ["a"]);
    expect(input).toEqual({ a: 1, b: 2 });
  });
});
