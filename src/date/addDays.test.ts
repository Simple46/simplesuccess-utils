// src/date/addDays.test.ts
import { describe, it, expect } from "vitest";
import { addDays } from "./addDays";

describe("addDays", () => {
  it("adds days to a date", () => {
    const result = addDays(new Date(2026, 0, 1), 5);
    expect(result.getDate()).toBe(6);
  });

  it("subtracts days when given a negative number", () => {
    const result = addDays(new Date(2026, 0, 1), -1);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getFullYear()).toBe(2025);
  });

  it("does not mutate the original date", () => {
    const original = new Date(2026, 0, 1);
    addDays(original, 5);
    expect(original.getDate()).toBe(1);
  });

  it("handles adding 0 days", () => {
    const original = new Date(2026, 0, 1);
    expect(addDays(original, 0).getTime()).toBe(original.getTime());
  });
});
