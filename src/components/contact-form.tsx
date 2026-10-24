"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { contactEmail } from "@/lib/site-config";

type FormStatus = {
  kind: "idle" | "success" | "error";
  message: string;
};

type ApiResponse = {
  ok?: boolean;
  preview?: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "idle", message: "" });
    setErrors({});
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent: formData.has("consent") }),
      });
      const response = (await result.json()) as ApiResponse;

      if (!result.ok) {
        setErrors(response.errors || {});
        setStatus({
          kind: "error",
          message: response.message || "Check the highlighted fields and try again.",
        });
        return;
      }

      setStatus({
        kind: "success",
        message: response.preview
          ? "Preview only: your inquiry passed validation but was not sent or saved."
          : "Your inquiry has been sent to the practice.",
      });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message: "The form could not be submitted. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Your name</label>
        <input
          autoComplete="name"
          id="name"
          name="name"
          minLength={2}
          maxLength={80}
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          autoComplete="email"
          id="email"
          name="email"
          type="email"
          maxLength={254}
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="topic">What is your question about?</label>
        <select
          id="topic"
          name="topic"
          defaultValue=""
          required
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "topic-error" : undefined}
        >
          <option value="" disabled>Choose a topic</option>
          <option value="diet-plans">Personalized diet plans</option>
          <option value="fees">Fees and payment</option>
        </select>
        {errors.topic && <span className="field-error" id="topic-error">{errors.topic}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone number (optional)</label>
        <input
          autoComplete="tel"
          id="phone"
          name="phone"
          type="tel"
          maxLength={25}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="preferredContact">How would you prefer a reply?</label>
        <select
          id="preferredContact"
          name="preferredContact"
          defaultValue="email"
          required
          aria-invalid={Boolean(errors.preferredContact)}
          aria-describedby={errors.preferredContact ? "preference-error" : undefined}
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="no-preference">No preference</option>
        </select>
        {errors.preferredContact && <span className="field-error" id="preference-error">{errors.preferredContact}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="message">More details about the service you need (optional)</label>
        <textarea
          id="message"
          name="message"
          maxLength={300}
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-help"
        />
        <span className="form-help" id="message-help">
          Up to 300 characters. Keep this non-clinical; do not include medical records,
          diagnoses, medications or test results.
        </span>
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="form-checkbox" htmlFor="consent">
        <input id="consent" name="consent" type="checkbox" required />
        <span>
          I agree that Bhoomika G A may use these contact details and this non-clinical
          message to respond to my inquiry. See the{" "}
          <Link href="/privacy">privacy notice</Link>.
        </span>
      </label>
      {errors.consent && <span className="field-error">{errors.consent}</span>}
      <p className="form-privacy">
        Do not send medical records or health details by form or email. For urgent medical
        needs, visit the nearest hospital or contact local emergency services.
      </p>
      {status.message && (
        <p className={`form-message${status.kind === "error" ? " form-message--error" : ""}`} role={status.kind === "error" ? "alert" : "status"}>
          {status.message}
        </p>
      )}
      {status.kind === "error" && (
        <p className="form-privacy">
          If the form is unavailable, email{" "}
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent("Diet plan or fee inquiry")}`}>
            {contactEmail}
          </a>{" "}
          and include a phone number if you would like a call. Do not include health details.
        </p>
      )}
      <button className="button button--dark" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send inquiry"}
        {!isSubmitting && <span aria-hidden="true">→</span>}
      </button>
    </form>
  );
}
