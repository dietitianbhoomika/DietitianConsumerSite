import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { practiceName } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Meet Bhoomika G A, Clinical Nutritionist and Dietician offering online consultations across India.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet your dietician"
        title={`A thoughtful approach with ${practiceName}.`}
        summary="Clinical nutrition guidance shaped around each person's needs, preferences and everyday circumstances."
      />
      <section className="page-body">
        <div className="page-width content-narrow">
          <p className="eyebrow">Clinical nutrition, with context</p>
          <h2>Meet {practiceName}.</h2>
          <p>
            Bhoomika holds a BSc and MSc in Clinical Nutrition and Dietetics and
            identifies as a Registered Dietitian (RD) with the Indian Dietetic
            Association (IDA). She also practices at a multispecialty hospital in
            Bengaluru and offers online, individualized diet plans for varied medical
            nutrition needs through Google Meet.
          </p>
          <p>
            The approach is systematic and collaborative, with attention to food
            preferences and individual circumstances. Nutrition support does not
            replace diagnosis, medical treatment or the care of your existing health team.
          </p>
          <dl className="detail-list">
            <div className="detail-list__row">
              <dt>Qualifications</dt>
              <dd>BSc and MSc in Clinical Nutrition and Dietetics; RD, Indian Dietetic Association.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Consultations</dt>
              <dd>Online through Google Meet for clients in India aged 8 and above.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Practice location</dt>
              <dd>Online practice; Bhoomika also works at a multispecialty hospital in Bengaluru.</dd>
            </div>
            <div className="detail-list__row">
              <dt>Scope</dt>
              <dd>Personalized nutrition and diet planning. Weight-loss-specific diet plans are not offered.</dd>
            </div>
          </dl>
          <div className="page-actions">
            <Link className="button button--dark" href="/services">View service details <span aria-hidden="true">→</span></Link>
            <Link className="text-link" href="/book">Booking information <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
