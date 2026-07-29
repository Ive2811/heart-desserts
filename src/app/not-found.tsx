import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-heart-bg-cream px-6 text-center">
      <Image src="/logo.png" alt="Heart Desserts" width={90} height={90} className="rounded-full" />

      <div>
        <p className="font-[family-name:var(--font-display)] text-6xl text-heart-wine">404</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-heart-wine">
          Esta página se la comió alguien
        </h1>
        <p className="mt-2 max-w-sm text-[0.95rem] text-heart-wine-soft">
          No encontramos lo que buscabas. Pero tenemos postres esperándote en el catálogo.
        </p>
      </div>

      <Link
        href="/"
        className="rounded-full bg-heart-wine px-7 py-3 text-[0.85rem] tracking-wide text-heart-bg-cream uppercase transition-colors hover:bg-heart-berry-dark"
      >
        Volver al inicio
      </Link>
    </div>
  );
}