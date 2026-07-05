import type { Testimonial } from "@/lib/types";

interface AboutProps {
  testimonials: Testimonial[];
}

export function About({ testimonials }: AboutProps) {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-11 px-5 pt-16 sm:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="mb-1.5 text-[0.72rem] font-medium tracking-[0.28em] text-heart-wine-soft uppercase">
          Nosotros
        </p>
        <h2 className="mb-3.5 font-[family-name:var(--font-display)] text-3xl text-heart-wine">
          Hecho a mano, con cariño
        </h2>
        <p className="max-w-lg text-[0.95rem] leading-relaxed text-heart-wine-soft">
          En Heart Desserts horneamos cada postre por encargo, con ingredientes
          frescos y sin conservantes. Somos un emprendimiento salvadoreño que
          cree en endulzar momentos importantes: cumpleaños, aniversarios, o
          simplemente un antojo del día.
        </p>
      </div>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-2xl border border-heart-wine/15 bg-heart-cream-card p-5 shadow-[0_8px_30px_rgba(62,27,38,0.08)]"
          >
            <div className="mb-2 tracking-[2px] text-heart-berry">★★★★★</div>
            <p className="text-[0.86rem] leading-relaxed text-heart-wine-soft italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="mt-2.5 text-[0.78rem] font-medium text-heart-wine not-italic">
              — {testimonial.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
