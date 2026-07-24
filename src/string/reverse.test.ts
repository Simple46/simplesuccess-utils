// src/string/reverse.test.ts
import { describe, it, expect } from "vitest";
import { reverse } from "./reverse";

describe("reverse", () => {
  it("reverses a simple string", () => {
    expect(reverse("hello")).toBe("olleh");
  });

  it("returns empty string unchanged", () => {
    expect(reverse("")).toBe("");
  });

  it("handles a single character", () => {
    expect(reverse("a")).toBe("a");
  });

  it("handles palindromes unchanged", () => {
    expect(reverse("racecar")).toBe("racecar");
  });

  it("handles unicode characters correctly", () => {
    expect(reverse("héllo")).toBe("olléh");
  });

  it("handles emoji without corrupting them", () => {
    expect(reverse("a😀b")).toBe("b😀a");
  });
});
