"use client";

import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

interface WhatsappFabProps {
  href: string;
  lifted: boolean;
}

export function WhatsappFab({ href, lifted }: WhatsappFabProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Escríbenos por WhatsApp"
      className={`fixed right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-heart-whatsapp text-white shadow-[0_8px_20px_rgba(37,211,102,0.4)] transition-all hover:scale-105 ${
        lifted ? "bottom-[86px]" : "bottom-5"
      }`}
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
