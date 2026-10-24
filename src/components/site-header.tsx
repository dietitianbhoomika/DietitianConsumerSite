import Link from "next/link";
import { MobileNavigation } from "@/components/mobile-navigation";
import { practiceName } from "@/lib/site-config";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label={`${practiceName}, home`}>
      <span className="wordmark__mark" aria-hidden="true">B</span>
      <span className="wordmark__text">
        <span className="wordmark__name">{practiceName}</span>
        <span className="wordmark__descriptor">Clinical nutrition · Online</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
      <header className="site-header">
        <div className="site-header__inner">
          <Wordmark />
          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
          <MobileNavigation items={navigation} />
          <Link className="button button--dark site-header__booking" href="/book">
            <span className="site-header__booking-long">Book a consultation</span>
            <span className="site-header__booking-short">Book</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>
  );
}
