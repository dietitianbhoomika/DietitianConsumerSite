import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  contactEmail,
  getContactFormUrl,
  practiceHours,
  responseTime,
} from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Contact Bhoomika G A about online nutrition consultations and personalized diet plans.",
  "/contact",
);

export default function ContactPage() {
  const contactFormUrl = getContactFormUrl();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with Bhoomika G A."
        summary="Ask about diet plan consultations, fees or available appointment times."
      />
      <section className="page-body">
        <div className="page-width form-layout">
          <div>
            <p className="eyebrow">General inquiries</p>
            <p className="body-copy">
              Use the form to ask about services, fees or appointments. The practice
              will reply by email; a consultation request is not confirmed until you
              receive a reply.
            </p>
            {contactFormUrl ? (
              <iframe
                className="google-form-embed"
                src={contactFormUrl.toString()}
                title="General inquiry form"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <p className="form-help">
                The inquiry form is unavailable. Email the practice at{" "}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
              </p>
            )}
          </div>
          <aside className="booking-panel">
            <p className="eyebrow">Practical details</p>
            <h2>Before you get in touch.</h2>
            <p>
              <strong>Email</strong><br />
              {contactEmail}
            </p>
            <p><strong>Hours</strong><br />{practiceHours}; working days and time zone to be confirmed.</p>
            <p><strong>Expected reply</strong><br />{responseTime}.</p>
            <p><a href={`mailto:${contactEmail}`}>Email the practice directly</a></p>
            <p className="notice">
              This form is not monitored for urgent needs. For emergencies, contact local
              emergency services. Do not submit diagnoses, lab results, medication details
              or other health information.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
