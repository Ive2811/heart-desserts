"use client";

import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

interface CartBarProps {
  totalItems: number;
  fixedTotal: number;
  hasVariablePricing: boolean;
  onOrder: () => void;
}

export function CartBar({ totalItems, fixedTotal, hasVariablePricing, onOrder }: CartBarProps) {
  const visible = totalItems > 0;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3.5 bg-heart-wine px-5 py-3.5 text-heart-bg-cream shadow-[0_-6px_20px_rgba(0,0,0,0.18)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-[110%]"
      }`}
    >
      <div className="text-[0.85rem]">
        <b className="font-[family-name:var(--font-display)] text-lg text-heart-bg-cream">
          {totalItems}
        </b>{" "}
        productos ·{" "}
        <b className="font-[family-name:var(--font-display)] text-lg text-heart-bg-cream">
          ${fixedTotal.toFixed(2)}
          {hasVariablePricing ? " + cotización" : ""}
        </b>
      </div>

      <button
        type="button"
        onClick={onOrder}
        className="flex items-center gap-2 rounded-full bg-heart-whatsapp px-[22px] py-3 text-[0.85rem] font-medium whitespace-nowrap text-white transition-colors hover:bg-heart-whatsapp-dark"
      >
        <WhatsappIcon className="h-4 w-4" /> Pedir por WhatsApp
      </button>
    </div>
  );
}
