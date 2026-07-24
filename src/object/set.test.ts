// src/object/set.test.ts
import { describe, it, expect } from "vitest";
import { set } from "./set";

describe("set", () => {
  it("sets a nested value, creating intermediate objects", () => {
    expect(set({}, "user.name", "Ada")).toEqual({ user: { name: "Ada" } });
  });

  it("overwrites an existing value at the path", () => {
    expect(set({ user: { name: "Old" } }, "user.name", "New")).toEqual({
      user: { name: "New" },
    });
  });

  it("does not mutate the original object", () => {
    const input = { user: { name: "Ada" } };
    set(input, "user.name", "Changed");
    expect(input.user.name).toBe("Ada");
  });

  it("sets a top-level value", () => {
    expect(set({}, "a", 1)).toEqual({ a: 1 });
  });
});
