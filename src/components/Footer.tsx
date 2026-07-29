import { NAV_LINKS } from "@/lib/navLinks";

interface FooterProps {
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl: string;
}

export function Footer({ instagramHandle, instagramUrl, facebookUrl }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-heart-wine/10 bg-heart-pink-soft/40 px-5 pt-12 pb-8 text-heart-wine-soft">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-9 text-center sm:grid-cols-3 sm:text-left">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-heart-wine">
            Heart Desserts
          </p>
          <p className="mt-2 text-[0.85rem] leading-relaxed">
            Postres artesanales hechos con cariño en El Salvador.
          </p>
        </div>

        <div>
          <p className="mb-2 text-[0.72rem] font-medium tracking-[0.2em] text-heart-wine uppercase">
            Enlaces
          </p>
          <ul className="flex flex-col gap-1.5 text-[0.85rem]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-heart-berry">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-[0.72rem] font-medium tracking-[0.2em] text-heart-wine uppercase">
            Horario
          </p>
          <p className="text-[0.85rem]">Miércoles a Domingo</p>
          <p className="text-[0.85rem]">1:00 pm – 7:00 pm</p>

          <p className="mt-4 mb-2 text-[0.72rem] font-medium tracking-[0.2em] text-heart-wine uppercase">
            Síguenos
          </p>
          {/* Cambié a flex-col o flex-row dependiendo del diseño deseado. Usando flex-col se apilan ordenadamente. */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.85rem] text-heart-wine transition-colors hover:text-heart-berry"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              {instagramHandle}
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.85rem] text-heart-wine transition-colors hover:text-heart-berry"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              @heart_desserts
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 max-w-5xl border-t border-heart-wine/10 pt-5 text-center text-[0.78rem]">
        © {new Date().getFullYear()} Heart Desserts. Repostería artesanal hecha en El Salvador.
      </div>
    </footer>
  );
}