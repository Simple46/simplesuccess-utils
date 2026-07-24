// src/validation/isUUID.test.ts
import { describe, it, expect } from "vitest";
import { isUUID } from "./isUUID";

describe("isUUID", () => {
  it("returns true for a valid UUID", () => {
    expect(isUUID("123e4567-e89b-12d3-a456-426614174000")).toBe(true);
  });

  it("returns false for a non-UUID string", () => {
    expect(isUUID("not-a-uuid")).toBe(false);
  });

  it("returns false for a UUID with wrong segment lengths", () => {
    expect(isUUID("123-456-789")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isUUID("")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isUUID("123E4567-E89B-12D3-A456-426614174000")).toBe(true);
  });
});
