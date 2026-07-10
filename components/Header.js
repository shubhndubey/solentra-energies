"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/housing-societies", label: "Housing Societies" },
  { href: "/cities", label: "Cities" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg text-white tracking-tight">
  <img
    src="/logo.png"
    alt="Solentra Energies Logo"
    className="w-7 h-7 object-contain shrink-0"
  />
  Solentra Energies
</Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/85 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:+919977030962"
            className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-semibold rounded px-4 py-2.5 hover:border-white hover:bg-white/10 transition-colors"
          >
            📞 <span className="text-sun font-semibold">+91-9977030962</span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl leading-none"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium bg-ink">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/85" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="tel:+919977030962" className="text-sun font-semibold">
            📞 +91-9977030962
          </a>
        </div>
      )}
    </header>
  );
}
