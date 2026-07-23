"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-heart-wine/10 bg-heart-bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-wide text-heart-wine"
        >
          Heart Desserts
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.82rem] tracking-wide text-heart-wine-soft uppercase transition-colors hover:text-heart-berry"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`block h-[1.5px] w-5 bg-heart-wine transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span className={`block h-[1.5px] w-5 bg-heart-wine transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[1.5px] w-5 bg-heart-wine transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`overflow-hidden border-t border-heart-wine/10 bg-heart-bg-cream transition-all sm:hidden ${
          open ? "max-h-60 py-2" : "max-h-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block px-5 py-2.5 text-[0.85rem] tracking-wide text-heart-wine-soft uppercase"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
