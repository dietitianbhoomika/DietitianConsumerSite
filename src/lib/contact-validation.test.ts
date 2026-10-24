import { describe, expect, it } from "vitest";
import { validateContactPayload } from "./contact-validation";

const validPayload = {
  name: "  Alex Rivera  ",
  email: "alex@example.com",
  phone: "+91 98765 43210",
  preferredContact: "email",
  topic: "diet-plans",
  message: "I would like to ask about an online diet plan consultation.",
  website: "",
  consent: true,
};

describe("validateContactPayload", () => {
  it("normalizes and accepts a minimal general inquiry", () => {
    const result = validateContactPayload(validPayload);

    expect(result).toEqual({
      success: true,
      isSpam: false,
      data: {
        name: "Alex Rivera",
        email: "alex@example.com",
        phone: "+91 98765 43210",
        preferredContact: "email",
        topic: "diet-plans",
        message: "I would like to ask about an online diet plan consultation.",
      },
    });
  });

  it("rejects unexpected fields instead of accepting clinical details", () => {
    const result = validateContactPayload({ ...validPayload, diagnosis: "example" });

    expect(result.success).toBe(false);
    if (!result.success) expect(result.errors.form).toContain("unexpected");
  });

  it("rejects invalid email and missing consent", () => {
    const result = validateContactPayload({ ...validPayload, email: "not-an-email", consent: false });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.email).toBeDefined();
      expect(result.errors.consent).toBeDefined();
    }
  });

  it("rejects unsupported topics and contact preferences", () => {
    const result = validateContactPayload({
      ...validPayload,
      topic: "medical-advice",
      preferredContact: "whatsapp",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.topic).toBeDefined();
      expect(result.errors.preferredContact).toBeDefined();
    }
  });

  it("identifies a filled honeypot without treating it as an inquiry", () => {
    const result = validateContactPayload({ ...validPayload, website: "automated-link" });

    expect(result.success).toBe(true);
    if (result.success) expect(result.isSpam).toBe(true);
  });

  it("limits the optional service message to 300 characters", () => {
    const result = validateContactPayload({ ...validPayload, message: "x".repeat(301) });

    expect(result.success).toBe(false);
    if (!result.success) expect(result.errors.message).toContain("300 characters");
  });

  it("requires a phone number when phone is selected as the reply method", () => {
    const result = validateContactPayload({ ...validPayload, phone: "", preferredContact: "phone" });

    expect(result.success).toBe(false);
    if (!result.success) expect(result.errors.phone).toContain("phone number");
  });
});
