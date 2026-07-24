// src/object/freeze.test.ts
import { describe, it, expect } from "vitest";
import { freeze } from "./freeze";

describe("freeze", () => {
  it("freezes the top-level object", () => {
    const obj = freeze({ a: 1 });
    expect(Object.isFrozen(obj)).toBe(true);
  });

  it("freezes nested objects too", () => {
    const obj = freeze({ nested: { value: 1 } });
    expect(Object.isFrozen(obj.nested)).toBe(true);
  });

  it("prevents mutation of nested values", () => {
    "use strict";
    const obj = freeze({ nested: { value: 1 } });
    expect(() => {
      (obj.nested as any).value = 2;
    }).toThrow();
  });

  it("handles empty objects", () => {
    expect(Object.isFrozen(freeze({}))).toBe(true);
  });
});
