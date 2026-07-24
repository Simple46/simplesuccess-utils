// src/string/kebabCase.test.ts
import { describe, it, expect } from "vitest";
import { kebabCase } from "./kebabCase";

describe("kebabCase", () => {
  it("converts camelCase", () => {
    expect(kebabCase("helloWorld")).toBe("hello-world");
  });

  it("converts space-separated words", () => {
    expect(kebabCase("Hello World")).toBe("hello-world");
  });

  it("converts underscore-separated words", () => {
    expect(kebabCase("hello_world")).toBe("hello-world");
  });

  it("returns empty string for empty input", () => {
    expect(kebabCase("")).toBe("");
  });

  it("handles already-kebab-case input unchanged", () => {
    expect(kebabCase("hello-world")).toBe("hello-world");
  });

  it("handles a single word", () => {
    expect(kebabCase("Hello")).toBe("hello");
  });
});
