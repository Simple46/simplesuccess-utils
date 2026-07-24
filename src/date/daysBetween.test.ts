// src/date/daysBetween.test.ts
import { describe, it, expect } from "vitest";
import { daysBetween } from "./daysBetween";

describe("daysBetween", () => {
  it("calculates days between two dates", () => {
    expect(daysBetween(new Date(2026, 0, 1), new Date(2026, 0, 11))).toBe(10);
  });

  it("returns 0 for the same date", () => {
    expect(daysBetween(new Date(2026, 0, 1), new Date(2026, 0, 1))).toBe(0);
  });

  it("returns absolute value regardless of order", () => {
    expect(daysBetween(new Date(2026, 0, 11), new Date(2026, 0, 1))).toBe(10);
  });

  it("ignores time-of-day differences", () => {
    const start = new Date(2026, 0, 1, 23, 59);
    const end = new Date(2026, 0, 2, 0, 1);
    expect(daysBetween(start, end)).toBe(1);
  });
});
