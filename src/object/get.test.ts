// src/object/get.test.ts
import { describe, it, expect } from "vitest";
import { get } from "./get";

describe("get", () => {
  it("retrieves a nested value", () => {
    expect(get({ user: { name: "Ada" } }, "user.name")).toBe("Ada");
  });

  it("returns default value when path is missing", () => {
    expect(get({ user: { name: "Ada" } }, "user.age", 0)).toBe(0);
  });

  it("returns undefined when path is missing and no default given", () => {
    expect(get({}, "a.b.c")).toBeUndefined();
  });

  it("returns default when intermediate path is not an object", () => {
    expect(get({ a: 1 }, "a.b", "fallback")).toBe("fallback");
  });

  it("retrieves a top-level value", () => {
    expect(get({ a: 1 }, "a")).toBe(1);
  });
});
