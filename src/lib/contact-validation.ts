const allowedFields = new Set([
  "name",
  "email",
  "phone",
  "preferredContact",
  "topic",
  "message",
  "website",
  "consent",
]);

const topics = ["diet-plans", "fees"] as const;
const contactPreferences = ["email", "phone", "no-preference"] as const;

export type ContactInquiry = {
  name: string;
  email: string;
  phone: string;
  preferredContact: (typeof contactPreferences)[number];
  topic: (typeof topics)[number];
  message: string;
};

export type ContactValidation =
  | { success: true; data: ContactInquiry; isSpam: boolean }
  | { success: false; errors: Record<string, string> };

export function validateContactPayload(payload: unknown): ContactValidation {
  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return { success: false, errors: { form: "Please check the form and try again." } };
  }

  const input = payload as Record<string, unknown>;
  if (Object.keys(input).some((field) => !allowedFields.has(field))) {
    return {
      success: false,
      errors: { form: "The form included unexpected information. Please refresh and try again." },
    };
  }

  const errors: Record<string, string> = {};
  const name = typeof input.name === "string" ? input.name.trim().replace(/\s+/g, " ") : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  const preferredContact = input.preferredContact;
  const topic = input.topic;
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const website = typeof input.website === "string" ? input.website.trim() : "";

  if (name.length < 2 || name.length > 80) {
    errors.name = "Enter a name between 2 and 80 characters.";
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (typeof input.phone !== "undefined" && typeof input.phone !== "string") {
    errors.phone = "Enter a valid phone number.";
  } else if (phone.length > 25 || (phone && !/^\+?[0-9 ().-]{7,24}$/.test(phone))) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!contactPreferences.includes(preferredContact as (typeof contactPreferences)[number])) {
    errors.preferredContact = "Choose a contact preference.";
  }
  if (preferredContact === "phone" && !phone) {
    errors.phone = "Enter a phone number if you would like a phone call.";
  }
  if (!topics.includes(topic as (typeof topics)[number])) {
    errors.topic = "Choose a topic.";
  }
  if (typeof input.message !== "undefined" && typeof input.message !== "string") {
    errors.message = "Enter a short, non-clinical service question.";
  } else if (message.length > 300) {
    errors.message = "Keep your message to 300 characters or fewer.";
  }
  if (typeof input.consent !== "boolean" || !input.consent) {
    errors.consent = "Consent is required before the practice can reply.";
  }
  if (typeof input.website !== "undefined" && typeof input.website !== "string") {
    errors.website = "Refresh the form and try again.";
  }
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      email,
      phone,
      preferredContact: preferredContact as ContactInquiry["preferredContact"],
      topic: topic as ContactInquiry["topic"],
      message,
    },
    isSpam: website.length > 0,
  };
}
