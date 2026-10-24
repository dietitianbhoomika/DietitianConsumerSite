import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Online Google Meet nutrition consultations and personalized diet plans, from ₹999.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Working together"
        title="Nutrition support, built around your needs."
        summary="Online initial and follow-up consultations for clients aged 8 and above."
      />
      <section className="page-body">
        <div className="page-width content-narrow">
          <p className="eyebrow">Diet plan consultations</p>
          <h2>Practical details, up front.</h2>
          <p>
            Each appointment includes an online consultation and a personalized diet
            chart. Initial and follow-up sessions are available, with follow-up arranged
            when requested. Nutrition advice is not a substitute for medical diagnosis
            or treatment.
          </p>
          <dl className="detail-list">
            <div className="detail-list__row">
              <dt>Format and duration</dt>
              <dd>Google Meet, 30-60 minutes; available to clients aged 8 and above.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Fee</dt>
              <dd>From ₹999 per consultation. The quoted price includes applicable taxes.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Payment and exclusions</dt>
              <dd>UPI and card. Insurance, laboratory tests and food purchases are not included.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Availability</dt>
              <dd>Appointments depend on available time slots. The booking calendar is being configured.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Cancellation and refund</dt>
              <dd>48 hours or more before the appointment: full refund. From 24 to under 48 hours: 50% refund. Under 24 hours: no refund.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Diet chart and follow-up</dt>
              <dd>A personalized chart is provided for the agreed period. Follow-up sessions are available on request.</dd>
            </div>
          </dl>
          <h2>Before your appointment</h2>
          <ul>
            <li>Appointments take place online through Google Meet.</li>
            <li>Available times are confirmed when your appointment is arranged.</li>
            <li>Do not email or enter medical records in the general website inquiry form.</li>
          </ul>
          <p className="notice">
            This website is not for urgent medical needs and does not provide a clinical
            intake. Do not send diagnoses, medication details, lab results or other
            health information through the general contact form.
          </p>
          <div className="page-actions">
            <Link className="button button--dark" href="/book">Book an initial consultation <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/contact">Ask a general question <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
