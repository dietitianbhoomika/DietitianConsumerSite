import type { Metadata } from "next";
import { practiceName, siteUrl } from "@/lib/site-config";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = new URL(path.replace(/^\/+/, ""), `${siteUrl}/`);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: practiceName,
      title,
      description,
      url: canonical,
      images: [`${siteUrl}/dietitian-table.jpg`],
    },
  };
}