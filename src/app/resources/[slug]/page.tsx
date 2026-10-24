import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getResource, resourceSummaries } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceSummaries.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  return resource
    ? createPageMetadata(resource.title, resource.summary, `/resources/${resource.slug}`)
    : createPageMetadata("Resource not found", "This resource could not be found.", "/resources");
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <>
      <PageHero eyebrow={resource.category} title={resource.title} summary={resource.summary} />
      <article className="page-body">
        <div className="page-width content-narrow">
          <div className="article-meta">
            <span>Editorial draft</span>
            <span>Written September 2026</span>
            <span>Qualified practitioner review pending</span>
          </div>
          <p className="notice">
            General education only. This article has not been reviewed for this
            practice and is not a substitute for individual medical advice.
          </p>
          {resource.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section aria-labelledby="source-heading">
            <h2 id="source-heading">Sources</h2>
            <ul className="source-list">
              {resource.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
                </li>
              ))}
            </ul>
          </section>
          <Link className="text-link" href="/resources">← Back to resources</Link>
        </div>
      </article>
    </>
  );
}
