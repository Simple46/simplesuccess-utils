// src/string/generateInitials.test.ts
import { describe, it, expect } from "vitest";
import { generateInitials } from "./generateInitials";

describe("generateInitials", () => {
  it("generates initials from two words", () => {
    expect(generateInitials("John Doe")).toBe("JD");
  });

  it("respects a custom maxLength", () => {
    expect(generateInitials("John Michael Doe", 3)).toBe("JMD");
  });

  it("handles a single-word name", () => {
    expect(generateInitials("Cher")).toBe("C");
  });

  it("returns empty string for empty input", () => {
    expect(generateInitials("")).toBe("");
  });

  it("caps initials at maxLength even with more words", () => {
    expect(generateInitials("John Michael Doe Smith")).toBe("JM");
  });

  it("handles extra whitespace between words", () => {
    expect(generateInitials("  John   Doe  ")).toBe("JD");
  });
});
