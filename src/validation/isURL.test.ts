// src/validation/isURL.test.ts
import { describe, it, expect } from "vitest";
import { isURL } from "./isURL";

describe("isURL", () => {
  it("returns true for a valid https URL", () => {
    expect(isURL("https://example.com")).toBe(true);
  });

  it("returns false for a plain string", () => {
    expect(isURL("not a url")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isURL("")).toBe(false);
  });

  it("returns true for a URL with a path and query", () => {
    expect(isURL("https://example.com/path?query=1")).toBe(true);
  });
});
