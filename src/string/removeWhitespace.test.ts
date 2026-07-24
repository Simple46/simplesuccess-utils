// src/string/removeWhitespace.test.ts
import { describe, it, expect } from "vitest";
import { removeWhitespace } from "./removeWhitespace";

describe("removeWhitespace", () => {
  it("removes spaces between words", () => {
    expect(removeWhitespace("hello world")).toBe("helloworld");
  });

  it("removes tabs and newlines", () => {
    expect(removeWhitespace("  hi \n there  ")).toBe("hithere");
  });

  it("returns empty string unchanged", () => {
    expect(removeWhitespace("")).toBe("");
  });

  it("returns string with no whitespace unchanged", () => {
    expect(removeWhitespace("nowhitespace")).toBe("nowhitespace");
  });

  it("handles a string of only whitespace", () => {
    expect(removeWhitespace("   ")).toBe("");
  });
});
