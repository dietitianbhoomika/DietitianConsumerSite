import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Accessibility",
  "Accessibility information and support for using this website.",
  "/accessibility",
);

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="A website should make room for everyone."
        summary="This draft is being built for keyboard use, clear focus, readable layouts and reduced motion. An accessibility review is still needed before launch."
      />
      <section className="page-body">
        <div className="page-width content-narrow">
          <p className="notice">The site has not been independently audited and does not claim conformance with WCAG 2.2 AA.</p>
          <h2>Ongoing checks</h2>
          <p>
            The implementation includes semantic page landmarks, a skip link, visible
            keyboard focus, labelled form controls and reduced-motion support. Automated
            checks and manual keyboard, zoom, contrast and assistive-technology review
            remain part of the pre-launch checklist.
          </p>
          <h2>Request help or report a barrier</h2>
          <p>
            Add a verified contact method and expected response time here before launch.
            Until then, the preview does not have a staffed accessibility contact.
          </p>
          <p>Operating jurisdiction and the practice accessibility contact are to be confirmed.</p>
        </div>
      </section>
    </>
  );
}
