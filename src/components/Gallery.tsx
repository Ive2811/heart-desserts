import Image from "next/image";
import { products } from "@/data/catalog";
import { getInstagramMedia } from "@/lib/instagram";

interface GalleryProps {
  instagramUrl: string;
}

export async function Gallery({ instagramUrl }: GalleryProps) {
  const media = await getInstagramMedia(8);
  const hasLiveFeed = media.length > 0;

  // Respaldo mientras no hay token de Instagram configurado: reutiliza las
  // fotos reales del catálogo en vez de emojis genéricos. En cuanto se
  // configure INSTAGRAM_ACCESS_TOKEN (ver README), esto se reemplaza solo
  // por el feed real, sin tocar este componente.
  const fallbackPhotos = products
    .filter((product) => product.imageUrl)
    .slice(0, 8)
    .map((product) => ({ src: product.imageUrl as string, alt: product.name }));

  return (
    <section id="galeria" className="mx-auto max-w-5xl px-5 pt-16">
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
          : fallbackPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-2xl bg-heart-gold-cream"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
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
