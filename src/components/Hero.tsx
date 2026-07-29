export function Hero() {
  return (
    <section className="bg-gradient-to-b from-heart-pink-blush to-heart-pink-soft px-6 pt-16 pb-11 text-center sm:pt-20">
      <h1
        className="animate-hero-in font-[family-name:var(--font-display)] text-5xl leading-none tracking-wide text-heart-wine sm:text-7xl"
        style={{ animationDelay: "0ms" }}
      >
        Heart Desserts
      </h1>

      <p
        className="animate-hero-in mt-2.5 font-[family-name:var(--font-display)] text-lg tracking-[0.32em] text-heart-berry-dark italic uppercase"
        style={{ animationDelay: "120ms" }}
      >
        Repostería
      </p>

      <p
        className="animate-hero-in mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-heart-wine-soft"
        style={{ animationDelay: "240ms" }}
      >
        Postres artesanales hechos con cariño. Elige tus favoritos y arma tu
        pedido en segundos — nosotros nos encargamos del resto.
      </p>

      <svg
        className="animate-hero-float mx-auto mt-8 block h-11 w-56 text-heart-wine"
        style={{ animationDelay: "360ms, 1160ms" }}
        viewBox="0 0 220 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 6 C 22 -2, 34 -2, 34 8 C 34 18, 20 20, 14 12 C 8 4, 20 -4, 32 4 C 60 22, 130 30, 200 14"
          stroke="currentColor"
          strokeWidth="1.3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <a
        href="#catalogo"
        className="animate-hero-in mt-7 inline-block rounded-full bg-heart-wine px-8 py-4 text-[0.85rem] tracking-[0.14em] text-heart-bg-cream uppercase transition-all hover:-translate-y-0.5 hover:bg-heart-berry-dark"
        style={{ animationDelay: "480ms" }}
      >
        Ver catálogo
      </a>
    </section>
  );
}
