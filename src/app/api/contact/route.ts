import { allowContactRequest } from "@/lib/contact-rate-limit";
import { validateContactPayload } from "@/lib/contact-validation";
import { contactEmail } from "@/lib/site-config";

const topicLabels = {
  "diet-plans": "Diet plan consultation",
  fees: "Fees and payment",
} as const;

function response(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  if (!allowContactRequest(request.headers)) {
    return response({
      ok: false,
      message: `The daily inquiry limit has been reached. Please email ${contactEmail} with your contact number.`,
    }, 429);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 4096) {
    return response({ ok: false, message: "The request was too large. Please refresh and try again." }, 413);
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > 4096) {
      return response({ ok: false, message: "The request was too large. Please refresh and try again." }, 413);
    }
    payload = JSON.parse(body);
  } catch {
    return response({ ok: false, message: "The form could not be read. Please refresh and try again." }, 400);
  }

  const result = validateContactPayload(payload);
  if (!result.success) {
    return response({ ok: false, errors: result.errors }, 400);
  }

  if (result.isSpam) {
    return response({ ok: true, preview: false });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV === "production") {
      return response({
        ok: false,
        message: "Inquiry delivery is not configured. Please use the practice's verified contact details.",
      }, 503);
    }

    return response({
      ok: true,
      preview: true,
      message: "Preview only: your inquiry passed validation but was not sent or saved.",
    });
  }

  const inquiry = result.data;
  const text = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Preferred contact: ${inquiry.preferredContact}`,
    `Topic: ${topicLabels[inquiry.topic]}`,
    `Message: ${inquiry.message || "Not provided"}`,
  ].join("\n");

  try {
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email,
        subject: `Website inquiry: ${topicLabels[inquiry.topic]}`,
        text,
      }),
    });

    if (!delivery.ok) {
      return response({
        ok: false,
        message: "The inquiry could not be delivered. Please try again later.",
      }, 502);
    }
  } catch {
    return response({
      ok: false,
      message: "The inquiry could not be delivered. Please try again later.",
    }, 502);
  }

  return response({ ok: true, preview: false });
}
