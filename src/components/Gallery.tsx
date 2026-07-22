import Image from "next/image";
import { getInstagramMedia } from "@/lib/instagram";

const PLACEHOLDER_EMOJIS = ["🍓", "🎂", "🧁", "🍰", "🍋", "☕", "🍫", "🍓"];

interface GalleryProps {
  instagramUrl: string;
}

export async function Gallery({ instagramUrl }: GalleryProps) {
  const media = await getInstagramMedia(8);
  const hasLiveFeed = media.length > 0;

  return (
    <section className="mx-auto max-w-5xl px-5 pt-16">
      <div className="mb-7 text-center">
        <p className="text-[0.72rem] font-medium tracking-[0.28em] text-heart-wine-soft uppercase">
          Galería
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-heart-wine">
          Nuestros postres en acción
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3.5">
        {hasLiveFeed
          ? media.map((item) => (
              <a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-heart-gold-cream"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.caption?.slice(0, 100) ?? "Publicación de Heart Desserts en Instagram"}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))
          : PLACEHOLDER_EMOJIS.map((emoji, index) => (
              <div
                key={index}
                className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-heart-gold-cream to-heart-pink-blush text-4xl text-heart-wine"
              >
                {emoji}
              </div>
            ))}
      </div>

      <div className="mt-5 text-center">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-heart-berry pb-0.5 text-[0.85rem] font-medium text-heart-berry"
        >
          Ver más en Instagram →
        </a>
      </div>
    </section>
  );
}
