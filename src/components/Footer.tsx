interface FooterProps {
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl: string;
}

export function Footer({ instagramHandle, instagramUrl, facebookUrl }: FooterProps) {
  return (
    <footer className="px-5 pt-16 pb-10 text-center text-[0.82rem] text-heart-wine-soft">
      <div className="mb-4 flex justify-center gap-[22px]">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[0.85rem] text-heart-wine"
        >
          📷 {instagramHandle}
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[0.85rem] text-heart-wine"
        >
          📘 Heart Desserts
        </a>
      </div>
      © {new Date().getFullYear()} Heart Desserts. Repostería artesanal hecha en El Salvador.
    </footer>
  );
}
