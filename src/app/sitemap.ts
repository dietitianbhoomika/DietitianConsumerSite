import type { MetadataRoute } from "next";
import { resourceSummaries } from "@/lib/content";
import { siteApproved, siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteApproved) return [];

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/resources",
    "/contact",
    "/book",
    "/privacy",
    "/accessibility",
    "/terms",
  ];
  const routes = [
    ...staticRoutes,
    ...resourceSummaries.map((resource) => `/resources/${resource.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route.startsWith("/resources/") ? "yearly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
