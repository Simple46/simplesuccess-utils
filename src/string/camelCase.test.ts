// src/string/camelCase.test.ts
import { describe, it, expect } from "vitest";
import { camelCase } from "./camelCase";

describe("camelCase", () => {
  it("converts space-separated words", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
  });

  it("converts hyphen-separated words", () => {
    expect(camelCase("hello-world")).toBe("helloWorld");
  });

  it("converts underscore-separated words", () => {
    expect(camelCase("hello_world")).toBe("helloWorld");
  });

  it("returns empty string for empty input", () => {
    expect(camelCase("")).toBe("");
  });

  it("handles a single word", () => {
    expect(camelCase("Hello")).toBe("hello");
  });

  it("handles multiple separators mixed together", () => {
    expect(camelCase("hello_world-example test")).toBe("helloWorldExampleTest");
  });
});
