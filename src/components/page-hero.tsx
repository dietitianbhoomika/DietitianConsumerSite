type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export function PageHero({ eyebrow, title, summary }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-width">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__summary">{summary}</p>
      </div>
    </section>
  );
}
