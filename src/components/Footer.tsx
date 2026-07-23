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
          <div className="flex justify-center gap-4 sm:justify-start">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] text-heart-wine hover:text-heart-berry"
            >
              📷 {instagramHandle}
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] text-heart-wine hover:text-heart-berry"
            >
              📘 Facebook
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
