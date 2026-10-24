"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  useEffect(() => {
    function closeWhenOutside(event: PointerEvent) {
      const menu = menuRef.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      const menu = menuRef.current;
      if (event.key !== "Escape" || !menu?.open) return;

      menu.open = false;
      menu.querySelector("summary")?.focus();
    }

    document.addEventListener("pointerdown", closeWhenOutside, true);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside, true);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details className="mobile-nav" ref={menuRef}>
      <summary aria-label="Toggle site navigation">Menu</summary>
      <nav className="mobile-nav__menu" aria-label="Mobile navigation">
        {items.map((item) => (
          <Link href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Link href="/book" onClick={closeMenu}>Book a consultation</Link>
      </nav>
    </details>
  );
}