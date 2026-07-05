"use client";

import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
}

export function ProductCard({ product, quantity, onIncrement, onDecrement }: ProductCardProps) {
  const priceLabel =
    product.priceType === "from" ? `Desde $${product.price.toFixed(2)}` : `$${product.price.toFixed(2)}`;

  const inOrder = quantity > 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-heart-wine/15 bg-heart-cream-card shadow-[0_8px_30px_rgba(62,27,38,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(62,27,38,0.14)]">
      <div className="flex h-[150px] items-center justify-center bg-gradient-to-br from-heart-gold-cream to-heart-pink-soft text-5xl">
        {product.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <span aria-hidden="true">{product.emoji}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-[18px]">
        <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-heart-wine">
          {product.name}
        </h3>
        <p className="min-h-9 text-[0.82rem] leading-snug text-heart-wine-soft">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-[family-name:var(--font-display)] text-xl font-bold text-heart-berry-dark">
            {priceLabel}
          </span>

          <div className="flex items-center gap-2.5 rounded-full border border-heart-wine/15 px-1.5 py-1">
            <button
              type="button"
              onClick={() => onDecrement(product.id)}
              aria-label={`Quitar una unidad de ${product.name}`}
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-heart-pink-soft text-heart-wine hover:bg-heart-pink-blush"
            >
              −
            </button>
            <span className="min-w-3.5 text-center text-sm">{quantity}</span>
            <button
              type="button"
              onClick={() => onIncrement(product.id)}
              aria-label={`Agregar una unidad de ${product.name}`}
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-heart-pink-soft text-heart-wine hover:bg-heart-pink-blush"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onIncrement(product.id)}
          className={`mt-3 w-full rounded-full py-2.5 text-[0.78rem] tracking-wide text-white uppercase transition-colors ${
            inOrder ? "bg-heart-wine" : "bg-heart-berry hover:bg-heart-berry-dark"
          }`}
        >
          {inOrder ? "En el pedido ✓" : "Agregar"}
        </button>
      </div>
    </div>
  );
}
