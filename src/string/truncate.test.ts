// src/string/truncate.test.ts
import { describe, it, expect } from "vitest";
import { truncate } from "./truncate";

describe("truncate", () => {
  it("truncates and appends default suffix when over limit", () => {
    expect(truncate("Hello World", 8)).toBe("Hello...");
  });

  it("returns text unchanged when within limit", () => {
    expect(truncate("Hi", 10)).toBe("Hi");
  });

  it("supports a custom suffix", () => {
    expect(truncate("Hello World", 8, ">>")).toBe("Hello >>");
  });

  it("handles maxLength smaller than suffix", () => {
    expect(truncate("Hello", 2, "...")).toBe("..");
  });

  it("returns empty string unchanged", () => {
    expect(truncate("", 5)).toBe("");
  });

  it("returns exact-length string unchanged", () => {
    expect(truncate("Hello", 5)).toBe("Hello");
  });
});
