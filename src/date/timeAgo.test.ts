// src/date/timeAgo.test.ts
import { describe, it, expect } from "vitest";
import { timeAgo } from "./timeAgo";

describe("timeAgo", () => {
  it("returns 'just now' for the current moment", () => {
    expect(timeAgo(new Date())).toBe("just now");
  });

  it("returns minutes for a time a few minutes ago", () => {
    expect(timeAgo(new Date(Date.now() - 5 * 60000))).toBe("5 minutes ago");
  });

  it("returns singular form for exactly 1 unit", () => {
    expect(timeAgo(new Date(Date.now() - 60000))).toBe("1 minute ago");
  });

  it("returns days for a time a couple days ago", () => {
    expect(timeAgo(new Date(Date.now() - 2 * 86400000))).toBe("2 days ago");
  });

  it("returns 'just now' for a future date", () => {
    expect(timeAgo(new Date(Date.now() + 60000))).toBe("just now");
  });
});
