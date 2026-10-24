import Image from "next/image";
import Link from "next/link";
import { resourceSummaries } from "@/lib/content";
import { practiceName, siteBasePath } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero__image"
          src={`${siteBasePath}/dietitian-table.jpg`}
          alt="A colorful spread of fresh foods arranged across a table."
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content page-width">
          <p className="eyebrow hero__eyebrow">BSc · MSc Clinical Nutrition and Dietetics · RD (IDA)</p>
          <h1 id="hero-title">Nutrition care,<br />with {practiceName}.</h1>
          <p className="hero__summary">
            Online nutrition consultations and personalized diet plans for clients
            aged 8 and above across India.
          </p>
          <div className="hero__actions">
            <Link className="button button--light" href="/book">
              Request a consultation <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link text-link--light" href="/services">
              Explore nutrition support
            </Link>
          </div>
          <p className="hero__caption">Online via Google Meet · Consultations from ₹999</p>
        </div>
        <span className="hero__index" aria-hidden="true">01 / A GOOD PLACE TO BEGIN</span>
      </section>

      <section className="intro-section section-pad">
        <div className="page-width intro-grid">
          <p className="eyebrow">Start with what matters to you</p>
          <div>
            <h2>Food is personal.<br />Support should be, too.</h2>
            <p className="body-copy">
              Your routines, culture, health and circumstances all belong in the
              conversation. Nutrition support follows a systematic, individualized
              approach shaped around your preferences and circumstances.
            </p>
            <Link className="text-link" href="/about">
              Learn about the approach <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="intro-aside" aria-label="Care principles">
            <p><span>01</span> Your priorities come first</p>
            <p><span>02</span> Advice stays practical</p>
            <p><span>03</span> Progress is a conversation</p>
          </div>
        </div>
      </section>

      <section className="approach-section section-pad" aria-labelledby="approach-title">
        <div className="page-width">
          <div className="section-heading">
            <p className="eyebrow">A considered way forward</p>
            <h2 id="approach-title">Begin with a conversation.</h2>
          </div>
          <div className="steps-grid">
            <article className="step-item">
              <span className="step-item__number">01</span>
              <h3>Listen</h3>
              <p>Make space for what brought you here and what you want support with.</p>
            </article>
            <article className="step-item">
              <span className="step-item__number">02</span>
              <h3>Understand</h3>
              <p>Explore your questions and the context that makes your experience yours.</p>
            </article>
            <article className="step-item">
              <span className="step-item__number">03</span>
              <h3>Plan together</h3>
              <p>Discuss a next step that feels useful, realistic and suited to your needs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="offer-section section-pad" aria-labelledby="offer-title">
        <div className="page-width offer-row">
          <div>
            <p className="eyebrow">Online nutrition consultation</p>
            <h2 id="offer-title">Personalized diet plans, made together.</h2>
          </div>
          <p className="body-copy">
            Consultations run for 30-60 minutes on Google Meet and include a
            personalized diet chart. Initial and follow-up sessions are available;
            fees start at ₹999.
          </p>
          <Link className="button button--dark" href="/services">
            View fees and service details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="resources-section section-pad" aria-labelledby="resources-title">
        <div className="page-width">
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">A little more to explore</p>
              <h2 id="resources-title">Notes for curious minds.</h2>
            </div>
            <Link className="text-link" href="/resources">
              All resources <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="resource-list">
            {resourceSummaries.slice(0, 2).map((resource, index) => (
              <Link className="resource-row" href={`/resources/${resource.slug}`} key={resource.slug}>
                <span className="resource-row__number">0{index + 1}</span>
                <span className="resource-row__title">{resource.title}</span>
                <span className="resource-row__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <p className="review-note">
            Educational drafts for this preview. A qualified practitioner must
            review them before publication.
          </p>
        </div>
      </section>

      <section className="closing-section section-pad">
        <div className="page-width closing-row">
          <div>
            <p className="eyebrow">Whenever you are ready</p>
            <h2>Let&apos;s start with a conversation.</h2>
          </div>
          <Link className="button button--light" href="/book">
            Book an initial consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
