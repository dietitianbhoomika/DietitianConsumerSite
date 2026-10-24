import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ResourceExplorer } from "@/components/resource-explorer";
import { resourceSummaries } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Resources",
  "Browse general nutrition education drafts with links to their sources.",
  "/resources",
);

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="A place to follow your curiosity."
        summary="Short, sourced introductions to nutrition topics. These drafts are for education, not personal medical advice."
      />
      <section className="page-body">
        <div className="page-width">
          <p className="notice resource-disclaimer">
            Articles in this preview are not yet reviewed by the practitioner. They
            cite their sources and must be clinically reviewed and dated before publication.
          </p>
          <ResourceExplorer resources={resourceSummaries} />
        </div>
      </section>
    </>
  );
}
