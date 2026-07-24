// src/date/isToday.test.ts
import { describe, it, expect } from "vitest";
import { isToday } from "./isToday";

describe("isToday", () => {
  it("returns true for the current date", () => {
    expect(isToday(new Date())).toBe(true);
  });

  it("returns false for a past date", () => {
    expect(isToday(new Date(2020, 0, 1))).toBe(false);
  });

  it("returns false for a future date", () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(isToday(future)).toBe(false);
  });
});
