// src/string/snakeCase.test.ts
import { describe, it, expect } from "vitest";
import { snakeCase } from "./snakeCase";

describe("snakeCase", () => {
  it("converts camelCase", () => {
    expect(snakeCase("helloWorld")).toBe("hello_world");
  });

  it("converts space-separated words", () => {
    expect(snakeCase("Hello World")).toBe("hello_world");
  });

  it("converts hyphen-separated words", () => {
    expect(snakeCase("hello-world")).toBe("hello_world");
  });

  it("returns empty string for empty input", () => {
    expect(snakeCase("")).toBe("");
  });

  it("handles already-snake_case input unchanged", () => {
    expect(snakeCase("hello_world")).toBe("hello_world");
  });

  it("handles a single word", () => {
    expect(snakeCase("Hello")).toBe("hello");
  });
});
