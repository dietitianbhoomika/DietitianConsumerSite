"use client";

import Link from "next/link";
import { useState } from "react";
import type { Resource } from "@/lib/content";

const categories = ["All topics", "Everyday nutrition", "Food information"];

export function ResourceExplorer({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredResources = resources.filter((resource) => {
    const matchesCategory = category === categories[0] || resource.category === category;
    const matchesQuery = `${resource.title} ${resource.summary} ${resource.category}`
      .toLocaleLowerCase()
      .includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <div className="resource-filters">
        <label className="form-field resource-search" htmlFor="resource-search">
          <span>Search by topic or phrase</span>
          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try ‘food labels’"
          />
        </label>
        <label className="form-field resource-category" htmlFor="resource-category">
          <span>Topic</span>
          <select
            id="resource-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        {(query || category !== categories[0]) && (
          <button
            className="text-link resource-clear"
            onClick={() => {
              setQuery("");
              setCategory(categories[0]);
            }}
            type="button"
          >
            Clear filters
          </button>
        )}
      </div>
      <p className="resource-count" aria-live="polite">
        {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
      </p>
      {filteredResources.length > 0 ? (
        <div className="resource-grid">
          {filteredResources.map((resource) => (
            <article className="resource-card" key={resource.slug}>
              <p className="eyebrow">{resource.category}</p>
              <h2><Link href={`/resources/${resource.slug}`}>{resource.title}</Link></h2>
              <p>{resource.summary}</p>
              <Link className="text-link" href={`/resources/${resource.slug}`}>
                Read draft article <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state" role="status">No resources match these filters.</p>
      )}
    </>
  );
}
