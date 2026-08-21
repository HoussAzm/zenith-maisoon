"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/hebergements", label: "Hébergements" },
  { href: "/galerie", label: "Galerie" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/95 shadow-soft backdrop-blur-sm"
          : "bg-ink-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group absolute left-1/2 flex -translate-x-1/2 items-center gap-2 lg:static lg:left-auto lg:translate-x-0"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-clay-400/60 text-clay-300">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.5 21V14C6.5 11 9 9.2 12 9.2C15 9.2 17.5 11 17.5 14V21" />
              <path d="M12 1L13.07 3.93L16 5L13.07 6.07L12 9L10.93 6.07L8 5L10.93 3.93Z" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span className="font-display text-lg tracking-wide text-sand-50">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sand-100/90 transition-colors hover:text-clay-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink("Bonjour, je souhaite avoir plus d'informations.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-clay-600"
          >
            Réserver maintenant
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-sand-100/20 text-sand-50 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-sand-100/10 bg-ink-950/98 px-5 pb-6 pt-2 backdrop-blur-sm lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-sand-100/90 transition hover:bg-white/5 hover:text-clay-300"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Bonjour, je souhaite avoir plus d'informations.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-clay-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Réserver maintenant
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
