import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { contactEmail } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata(
  "Privacy",
  "A plain-language overview of privacy in this website preview.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Your information deserves care."
        summary="This draft describes the embedded Google Forms used for contact and consultation requests. The practice owner must confirm the exact form questions, data access, retention and applicable requirements before launch."
      />
      <section className="page-body">
        <div className="page-width content-narrow">
          <p className="notice">Draft policy. This is not legal advice and is not ready for publication.</p>
          <h2>Information you provide</h2>
          <p>
            Contact and consultation requests are collected in separate embedded Google
            Forms. The practice owner must review their exact questions, settings and who
            can access responses. Do not include diagnoses, medical records, medication
            details, laboratory results or other health information in either form.
          </p>
          <h2>How inquiries are handled</h2>
          <p>
            Responses are submitted directly to Google Forms and are subject to Google&apos;s{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">privacy terms</a>.
            The practice owner must review form access and retention settings before
            launch. This website does not create a client record or run advertising analytics.
          </p>
          <p>
            To limit abuse, the current prototype keeps a client network address in
            process memory for rate limiting. Expired entries are removed when another
            inquiry arrives; the address is not written to a website database. The
            production host must provide a trusted client-IP header.
            The production host and its logging practices must be reviewed before launch.
          </p>
          <h2>Providers, access and retention</h2>
          <p>
            The practice intends to delete inquiry responses after 90 days. The owner must
            confirm how deletion is enforced in Google Forms and who can access responses.
            Hosting and other provider terms must be reviewed before launch. Clinical records
            belong in a separately approved secure intake system, not these forms or ordinary
            inquiry email.
          </p>
          <h2>Your choices and urgent needs</h2>
          <p>
            Use the contact page for a non-clinical question. For requests about submitted
            information, email {contactEmail}.
            This site is not monitored for urgent needs; contact local emergency services
            or an appropriate urgent-care service.
          </p>
        </div>
      </section>
    </>
  );
}
