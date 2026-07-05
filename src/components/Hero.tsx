export function Hero() {
  return (
    <section className="bg-gradient-to-b from-heart-pink-blush to-heart-pink-soft px-6 pt-16 pb-11 text-center sm:pt-20">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-1.5 text-[0.68rem] tracking-[0.2em] text-heart-wine uppercase">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-heart-berry" />
        Catálogo digital
      </div>

      <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-none tracking-wide text-heart-wine sm:text-7xl">
        Heart Desserts
      </h1>

      <p className="mt-2.5 font-[family-name:var(--font-display)] text-lg tracking-[0.32em] text-heart-berry-dark italic uppercase">
        Repostería
      </p>

      <p className="mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-heart-wine-soft">
        Postres artesanales hechos con cariño. Elige tus favoritos y arma tu
        pedido en segundos — nosotros nos encargamos del resto.
      </p>

      <svg
        className="mx-auto mt-8 block h-11 w-56"
        viewBox="0 0 220 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 6 C 22 -2, 34 -2, 34 8 C 34 18, 20 20, 14 12 C 8 4, 20 -4, 32 4 C 60 22, 130 30, 200 14"
          stroke="#3E1B26"
          strokeWidth="1.3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <a
        href="#catalogo"
        className="mt-7 inline-block rounded-full bg-heart-wine px-8 py-4 text-[0.85rem] tracking-[0.14em] text-heart-bg-cream uppercase transition-colors hover:bg-heart-berry-dark"
      >
        Ver catálogo
      </a>
    </section>
  );
}
