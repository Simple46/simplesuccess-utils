// src/string/slugify.test.ts
import { describe, it, expect } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
  it("converts spaces to hyphens and lowercases", () => {
    expect(slugify("Hello World!")).toBe("hello-world");
  });

  it("collapses multiple spaces into one hyphen", () => {
    expect(slugify("  Extra   Spaces  ")).toBe("extra-spaces");
  });

  it("normalizes accented characters", () => {
    expect(slugify("Café & Bar")).toBe("cafe-bar");
  });

  it("returns empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });

  it("strips leading/trailing hyphens", () => {
    expect(slugify("-hello-")).toBe("hello");
  });

  it("handles already-slugified input unchanged", () => {
    expect(slugify("already-a-slug")).toBe("already-a-slug");
  });
});
