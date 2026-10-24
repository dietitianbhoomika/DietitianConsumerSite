import Link from "next/link";
import {
  contactEmail,
  practiceHours,
  practiceName,
} from "@/lib/site-config";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="site-footer__main">
          <Link className="wordmark" href="/" aria-label={`${practiceName}, home`}>
            <span className="wordmark__mark" aria-hidden="true">B</span>
            <span className="wordmark__text">
              <span className="wordmark__name">{practiceName}</span>
              <span className="wordmark__descriptor">Clinical nutrition · Online</span>
            </span>
          </Link>
          <nav className="site-footer__links" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/book">Book</Link>
          </nav>
        </div>
        <div className="site-footer__contact">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <span>Online consultations across India</span>
          <span>{practiceHours}; working days and time zone to be confirmed</span>
        </div>
        <div className="site-footer__bottom">
          <span>Educational information is not a substitute for medical care.</span>
          <span>For urgent needs, contact local emergency services.</span>
        </div>
      </div>
    </footer>
  );
}
