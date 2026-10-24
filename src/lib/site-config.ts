const defaultSiteUrl = "http://localhost:3000";

export const practiceName =
  process.env.NEXT_PUBLIC_PRACTICE_NAME?.trim() || "Bhoomika G A";

export const siteUrl = (() => {
  try {
    const value = new URL(process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl);
    if (value.protocol === "https:" || value.hostname === "localhost") {
      return value.toString().replace(/\/$/, "");
    }
  } catch {
    return defaultSiteUrl;
  }

  return defaultSiteUrl;
})();

export const siteApproved = process.env.NEXT_PUBLIC_SITE_APPROVED === "true";

const defaultConsultationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSezKqrMmppn_qQbgvGYlqQ4yXRE6fHebrP5Mm_VeSlEyinu6g/viewform";
const defaultContactFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSc5mw0SuF3hzb93wWlMEskZM1hpBnfCTUtZbNQ9lKvGXqsCmg/viewform";

function getGoogleFormUrl(value: string): URL | null {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && url.hostname === "docs.google.com" && url.pathname.startsWith("/forms/")) {
      url.searchParams.set("embedded", "true");
      return url;
    }
  } catch {
    return null;
  }

  return null;
}

export function getBookingUrl(): URL | null {
  try {
    const value = new URL(process.env.NEXT_PUBLIC_BOOKING_URL || "");
    if (value.protocol === "https:" || value.hostname === "localhost") {
      return value;
    }
  } catch {
    return null;
  }

  return null;
}

export function getConsultationFormUrl(): URL | null {
  return getGoogleFormUrl(
    process.env.NEXT_PUBLIC_CONSULTATION_FORM_URL || defaultConsultationFormUrl,
  );
}

export function getContactFormUrl(): URL | null {
  return getGoogleFormUrl(
    process.env.NEXT_PUBLIC_CONTACT_FORM_URL || defaultContactFormUrl,
  );
}

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "dietitianbhoomika@gmail.com";

export const practiceHours = "9:00 am to 9:00 pm";
export const responseTime = "within four hours";
