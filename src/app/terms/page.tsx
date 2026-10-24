import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Terms",
  "Consultation, cancellation, and website terms for Bhoomika G A.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="A few important boundaries."
        summary="Consultations are online through Google Meet. These terms still require review for the jurisdictions served."
      />
      <section className="page-body">
        <div className="page-width content-narrow">
          <p className="notice">Draft terms only. They are not a substitute for jurisdiction-specific legal advice.</p>
          <h2>Educational information</h2>
          <p>
            Website articles offer general education, not individualized diagnosis,
            treatment or medical advice. They do not replace care from your doctor or
            another qualified professional. Discuss health decisions with your care team.
          </p>
          <h2>Urgent and emergency care</h2>
          <p>
            This website and its contact form are not monitored for urgent or emergency
            needs. Contact local emergency services or an appropriate urgent-care service.
          </p>
          <h2>Appointments and practice policies</h2>
          <p>
            Online diet plan consultations are for clients in India aged 8 and above.
            Sessions last 30-60 minutes and start at ₹999, including applicable taxes.
            UPI and card payments are accepted. Insurance, lab tests and food purchases
            are not included. A consultation is not confirmed until the practice sends
            an email confirmation.
          </p>
          <h2>Cancellation and refunds</h2>
          <p>
            Cancellations made 48 hours or more before the appointment receive a full
            refund. Cancellations from 24 hours up to 48 hours before receive a 50% refund.
            Cancellations less than 24 hours before the appointment are not refundable.
            The practice should confirm this wording and any rescheduling or no-show rules
            before accepting payment.
          </p>
          <p>This is a draft for India-based services, not legal advice. Governing-law details and review by a qualified local professional remain outstanding.</p>
        </div>
      </section>
    </>
  );
}
