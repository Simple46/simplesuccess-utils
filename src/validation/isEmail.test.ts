// src/validation/isEmail.test.ts
import { describe, it, expect } from "vitest";
import { isEmail } from "./isEmail";

describe("isEmail", () => {
  it("returns true for a valid email", () => {
    expect(isEmail("test@example.com")).toBe(true);
  });

  it("returns false for a string with no @ symbol", () => {
    expect(isEmail("not-an-email")).toBe(false);
  });

  it("returns false for a string with no domain", () => {
    expect(isEmail("test@")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isEmail("")).toBe(false);
  });

  it("returns true for email with subdomain", () => {
    expect(isEmail("user@mail.example.com")).toBe(true);
  });
});
