// src/number/formatCurrency.test.ts
import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("formats a number as USD by default", () => {
    expect(formatCurrency(1234.5)).toBe("$1,234.50");
  });

  it("formats using a different currency", () => {
    expect(formatCurrency(1234.5, "NGN", "en-NG")).toContain("1,234.50");
  });

  it("handles zero", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("handles negative values", () => {
    expect(formatCurrency(-50)).toBe("-$50.00");
  });
});
