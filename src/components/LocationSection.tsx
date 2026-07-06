import { BUSINESS_ADDRESS, mapsAppUrl, mapsEmbedUrl } from "@/lib/googleMaps";

export function LocationSection() {
  const embedUrl = mapsEmbedUrl(BUSINESS_ADDRESS);
  const appUrl = mapsAppUrl(BUSINESS_ADDRESS);

  return (
    <section className="mx-auto max-w-5xl px-5 pt-16">
      <div className="mb-7 text-center">
        <p className="text-[0.72rem] font-medium tracking-[0.28em] text-heart-wine-soft uppercase">
          Ubicación
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-heart-wine">
          Encuéntranos
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[0.9rem] text-heart-wine-soft">
          {BUSINESS_ADDRESS}
        </p>
      </div>

      <a
        href={appUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-heart-wine/15 shadow-[0_8px_30px_rgba(62,27,38,0.08)] transition-transform hover:-translate-y-1"
      >
        <iframe
          src={embedUrl}
          title="Ubicación de Heart Desserts en Google Maps"
          loading="lazy"
          className="pointer-events-none h-72 w-full sm:h-80"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay transparente: el clic en cualquier parte del mapa abre la app */}
        <span className="absolute inset-0 bg-heart-wine/0 transition-colors group-hover:bg-heart-wine/5" />

        <span className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-heart-wine px-4 py-2 text-[0.78rem] font-medium text-heart-bg-cream shadow-md">
          Abrir en Google Maps ↗
        </span>
      </a>
    </section>
  );
}
