import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-width not-found">
      <p className="eyebrow">404 · Not found</p>
      <h1>This page isn&apos;t here.</h1>
      <p className="body-copy">Try another section, or get in touch with a general question.</p>
      <div className="page-actions">
        <Link className="button button--dark" href="/">Back to home</Link>
        <Link className="text-link" href="/contact">Contact the practice <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
