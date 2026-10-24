import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getBookingUrl, getConsultationFormUrl } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Book a consultation",
  "Request an online nutrition consultation with Bhoomika G A.",
  "/book",
);

export default function BookPage() {
  const bookingUrl = getBookingUrl();
  const consultationFormUrl = getConsultationFormUrl();

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Request an online consultation."
        summary={bookingUrl
          ? "Choose a time in the appointment scheduler. The practice will confirm your booking by email."
          : "Send a consultation request using the form below. The practice will reply by email about availability."}
      />
      <section className="page-body">
        <div className="page-width form-layout">
          <div className="content-narrow">
            <p className="eyebrow">Initial consultation</p>
            <h2>{bookingUrl ? "Choose a time with the practice." : "Request an available time."}</h2>
            <p>
              {bookingUrl
                ? "The appointment calendar is hosted by the practice's scheduling provider. Review its privacy information before sharing any details."
                : "Submit your request through the form. This does not confirm an appointment; the practice will reply by email."}
            </p>
            {bookingUrl ? (
              <div className="page-actions">
                <a className="button button--dark" href={bookingUrl.toString()} target="_blank" rel="noreferrer">
                  Open the appointment scheduler <span aria-hidden="true">↗</span>
                </a>
                <Link className="text-link" href="/contact">Ask a general question <span aria-hidden="true">→</span></Link>
              </div>
            ) : consultationFormUrl ? (
              <iframe
                className="google-form-embed"
                src={consultationFormUrl.toString()}
                title="Consultation request form"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="consultation-form-missing">
                <p>The consultation form is being set up. You can send a general, non-clinical question through the contact page.</p>
                <Link className="text-link" href="/contact">Go to the contact form <span aria-hidden="true">→</span></Link>
              </div>
            )}
            <p className="form-help">
              Do not submit medical records, diagnoses, medications, test results or other
              clinical information through this form.
            </p>
          </div>
          <aside className="booking-panel">
            <p className="eyebrow">Before you book</p>
            <h2>How booking works</h2>
            <p>Appointments are online through Google Meet. {bookingUrl ? "Choose a time in the scheduler" : "Submit a request in the form"}; the practice will reply by email to confirm availability.</p>
            <p>From ₹999 · 30-60 minutes · UPI and card payments.</p>
            <p>Do not include health details. Any clinical intake must use a separately approved secure process.</p>
            <p><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google privacy information ↗</a></p>
          </aside>
        </div>
      </section>
    </>
  );
}
