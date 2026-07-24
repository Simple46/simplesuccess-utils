// src/validation/isEmpty.test.ts
import { describe, it, expect } from "vitest";
import { isEmpty } from "./isEmpty";

describe("isEmpty", () => {
  it("returns true for an empty string", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("returns true for an empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("returns true for an empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("returns true for null and undefined", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it("returns false for non-empty values", () => {
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
  });

  it("returns false for the number 0", () => {
    expect(isEmpty(0)).toBe(false);
  });
});
