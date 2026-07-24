// src/validation/isHexColor.test.ts
import { describe, it, expect } from "vitest";
import { isHexColor } from "./isHexColor";

describe("isHexColor", () => {
  it("returns true for a 3-digit hex color", () => {
    expect(isHexColor("#fff")).toBe(true);
  });

  it("returns true for a 6-digit hex color", () => {
    expect(isHexColor("#ff5733")).toBe(true);
  });

  it("returns false for a named color", () => {
    expect(isHexColor("red")).toBe(false);
  });

  it("returns false when missing the # prefix", () => {
    expect(isHexColor("ff5733")).toBe(false);
  });

  it("returns true for an 8-digit hex color with alpha", () => {
    expect(isHexColor("#ff5733aa")).toBe(true);
  });
});
