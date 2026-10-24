import type { MetadataRoute } from "next";
import { siteApproved, siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: siteApproved ? "/" : [],
      disallow: siteApproved ? [] : "/",
    },
    sitemap: siteApproved ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
