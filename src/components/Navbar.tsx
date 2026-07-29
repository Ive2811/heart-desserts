"use client";

import { useState } from "react";
import Image from "next/image";
import { generalInquiryUrl } from "@/lib/whatsapp";
import { NAV_LINKS } from "@/lib/navLinks";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-heart-wine/10 bg-heart-bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Heart Desserts"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-wide text-heart-wine">
            Heart Desserts
          </span>
          {/* Detalle de marca: el hilo con corazón del logo, animado con un flotar sutil */}
          <svg
            className="animate-float hidden h-5 w-9 text-heart-berry sm:block"
            viewBox="0 0 90 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 4 C 10 -1, 16 -1, 16 5 C 16 11, 9 12, 6 7 C 3 2, 9 -2, 15 2 C 30 13, 55 18, 85 9"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </a>

        {/* Nav de escritorio */}
        <nav className="hidden items-center gap-7 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.85rem] tracking-wide text-heart-wine-soft transition-colors hover:text-heart-berry"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={generalInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-heart-whatsapp px-4 py-2 text-[0.8rem] font-medium text-white transition-colors hover:bg-heart-whatsapp-dark"
          >
            <WhatsappIcon className="h-4 w-4" />
            Escríbenos
          </a>
        </nav>

        {/* Botón hamburguesa (móvil) */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-heart-wine"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-heart-wine/10 bg-heart-bg-cream px-5 pb-4 sm:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-[0.9rem] text-heart-wine-soft hover:bg-heart-pink-soft hover:text-heart-wine"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between px-2 py-2.5">
            <span className="text-[0.9rem] text-heart-wine-soft">Modo oscuro</span>
            <ThemeToggle />
          </div>
          <a
            href={generalInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-heart-whatsapp px-4 py-2.5 text-[0.85rem] font-medium text-white"
          >
            <WhatsappIcon className="h-4 w-4" />
            Escríbenos por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
