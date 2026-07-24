// src/string/titleCase.test.ts
import { describe, it, expect } from "vitest";
import { titleCase } from "./titleCase";

describe("titleCase", () => {
  it("capitalizes every word", () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });

  it("capitalizes small words too", () => {
    expect(titleCase("the lord of the rings")).toBe("The Lord Of The Rings");
  });

  it("returns empty string for empty input", () => {
    expect(titleCase("")).toBe("");
  });

  it("handles a single word", () => {
    expect(titleCase("hello")).toBe("Hello");
  });

  it("normalizes already-uppercase words", () => {
    expect(titleCase("HELLO WORLD")).toBe("Hello World");
  });

  it("handles multiple spaces between words", () => {
    expect(titleCase("hello  world")).toBe("Hello  World");
  });
});
