// src/date/formatDate.test.ts
import { describe, it, expect } from "vitest";
import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("formats a date into a readable string", () => {
    expect(formatDate(new Date(2026, 6, 24))).toBe("July 24, 2026");
  });

  it("formats a different month correctly", () => {
    expect(formatDate(new Date(2026, 0, 1))).toBe("January 1, 2026");
  });

  it("handles a leap year date", () => {
    expect(formatDate(new Date(2024, 1, 29))).toBe("February 29, 2024");
  });
});
