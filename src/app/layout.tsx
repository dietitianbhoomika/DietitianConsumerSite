import type { Metadata } from "next";
    import { Cormorant_Garamond, DM_Sans } from "next/font/google";
    import { SiteFooter } from "@/components/site-footer";
    import { SiteHeader } from "@/components/site-header";
    import { practiceName, siteApproved, siteUrl } from "@/lib/site-config";
    import "./globals.css";

    const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
    const serif = Cormorant_Garamond({
      variable: "--font-serif",
      subsets: ["latin"],
      weight: ["400", "500", "600"],
    });

    export const metadata: Metadata = {
      metadataBase: new URL(siteUrl),
      title: {
        default: `${practiceName} | Nutrition care with context`,
        template: `%s | ${practiceName}`,
      },
      alternates: { canonical: `${siteUrl}/` },
      description:
        "Thoughtful nutrition support that begins with your questions, priorities and everyday life.",
      robots: {
        index: siteApproved,
        follow: siteApproved,
      },
      openGraph: {
        type: "website",
        siteName: practiceName,
        title: `${practiceName} | Nutrition care with context`,
        description:
          "Thoughtful nutrition support that begins with your questions, priorities and everyday life.",
        url: `${siteUrl}/`,
        images: [`${siteUrl}/dietitian-table.jpg`],
      },
    };

    export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
      return (
        <html lang="en" className={`${sans.variable} ${serif.variable}`} data-scroll-behavior="smooth">
          <body>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <SiteHeader />
            <main id="main-content">{children}</main>
            <SiteFooter />
          </body>
        </html>
      );
    }
