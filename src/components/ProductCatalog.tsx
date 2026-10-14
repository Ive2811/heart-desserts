"use client";

import { useMemo, useState } from "react";
import type { CartState, Category, Product } from "@/lib/types";
import { CategoryTabs } from "@/components/CategoryTabs";
import { FadeIn } from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";

interface ProductCatalogProps {
  products: Product[];
  categories: Category[];
  cart: CartState;
  onIncrement: (key: string) => void;
  onDecrement: (key: string) => void;
}

export function ProductCatalog({
  products,
  categories,
  cart,
  onIncrement,
  onDecrement,
}: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState("todos");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "todos") return products;
    return products.filter((product) => product.categoryKey === activeCategory);
  }, [products, activeCategory]);

  return (
    <main id="catalogo" className="mx-auto max-w-5xl px-5 pt-12 pb-5">
      <div className="mb-7 text-center">
        <p className="text-[0.72rem] font-medium tracking-[0.28em] text-heart-wine-soft uppercase">
          Nuestros productos
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-heart-wine">
          Elige y arma tu pedido
        </h2>
      </div>

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
        {visibleProducts.map((product, index) => (
          <FadeIn key={product.id} delayMs={(index % 4) * 80} className="h-full">
            <ProductCard
              product={product}
              cart={cart}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
