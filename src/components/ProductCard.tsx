"use client";

import { useState } from "react";
import Image from "next/image";
import type { CartState, Product } from "@/lib/types";
import { cartKey } from "@/lib/cart";

interface ProductCardProps {
  product: Product;
  cart: CartState;
  onIncrement: (key: string) => void;
  onDecrement: (key: string) => void;
}

function priceLabel(product: Product): string {
  if (product.priceType === "tbd") return "Precio a confirmar";
  if (product.priceType === "from") return `Desde $${product.price.toFixed(2)}`;
  if (product.priceType === "range" && product.priceMax != null) {
    return `$${product.price.toFixed(2)} - $${product.priceMax.toFixed(2)}`;
  }
  return `$${product.price.toFixed(2)}`;
}

export function ProductCard({ product, cart, onIncrement, onDecrement }: ProductCardProps) {
  const [option, setOption] = useState("");
  const options = product.options ?? [];
  const needsOption = options.length > 0 && option === "";
  const key = cartKey(product.id, options.length > 0 ? option : undefined);
  const quantity = cart[key] ?? 0;
  const inOrder = quantity > 0;
  const picked = options.filter((o) => (cart[cartKey(product.id, o)] ?? 0) > 0);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-heart-wine/15 bg-heart-cream-card shadow-[0_8px_30px_rgba(62,27,38,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(62,27,38,0.14)]">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-heart-gold-cream to-heart-pink-soft text-5xl">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, 240px"
            className="object-cover"
          />
        ) : (
          <span aria-hidden="true">{product.emoji}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-[18px]">
        <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-heart-wine">
          {product.name}
        </h3>
        <p className="line-clamp-2 h-9 text-[0.82rem] leading-snug text-heart-wine-soft">
          {product.description}
        </p>

        {options.length > 0 && (
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            aria-label={`Sabor de ${product.name}`}
            className="w-full rounded-full border border-heart-wine/15 bg-heart-cream-card px-3 py-1.5 text-[0.82rem] text-heart-wine"
          >
            <option value="">Elige tu sabor</option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        )}
        {picked.length > 0 && (
          <p className="text-[0.75rem] text-heart-berry-dark">
            {picked.map((o) => `${o} ×${cart[cartKey(product.id, o)]}`).join(" · ")}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <span
            className={`font-[family-name:var(--font-display)] font-bold text-heart-berry-dark ${
              product.priceType === "tbd" || product.priceType === "range"
  ? "text-[0.95rem]"
  : "text-xl"
            }`}
          >
            {priceLabel(product)}
          </span>

          <div className="flex items-center gap-2.5 rounded-full border border-heart-wine/15 px-1.5 py-1">
            <button
              type="button"
              onClick={() => onDecrement(key)}
              disabled={needsOption}
              aria-label={`Quitar una unidad de ${product.name}`}
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-heart-pink-soft text-heart-wine hover:bg-heart-pink-blush disabled:opacity-40"
            >
              −
            </button>
            <span className="min-w-3.5 text-center text-sm">{quantity}</span>
            <button
              type="button"
              onClick={() => onIncrement(key)}
              disabled={needsOption}
              aria-label={`Agregar una unidad de ${product.name}`}
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-heart-pink-soft text-heart-wine hover:bg-heart-pink-blush disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onIncrement(key)}
          disabled={needsOption}
          className={`mt-3 w-full rounded-full py-2.5 text-[0.78rem] tracking-wide text-white uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
            inOrder ? "bg-heart-wine" : "bg-heart-berry hover:bg-heart-berry-dark"
          }`}
        >
          {inOrder ? "En el pedido ✓" : needsOption ? "Elige un sabor" : "Agregar"}
        </button>
      </div>
    </div>
  );
}
