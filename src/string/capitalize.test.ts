import { describe, it, expect } from "vitest";
import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("capitalizes the first letter of a lowercase string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  it("leaves an already-capitalized string unchanged", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("returns an empty string unchanged", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles a single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("handles strings with leading numbers", () => {
    expect(capitalize("1st place")).toBe("1st place");
  });

  it("handles unicode characters", () => {
    expect(capitalize("émile")).toBe("Émile");
  });
});
