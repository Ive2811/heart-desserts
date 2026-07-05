"use client";

import type { Category, Product } from "@/lib/types";
import { useCart } from "@/hooks/useCart";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CartBar } from "@/components/CartBar";
import { WhatsappFab } from "@/components/WhatsappFab";
import { generalInquiryUrl, getCartSummary, orderUrl } from "@/lib/whatsapp";

interface ShopExperienceProps {
  products: Product[];
  categories: Category[];
}

export function ShopExperience({ products, categories }: ShopExperienceProps) {
  const { cart, increment, decrement } = useCart();
  const { totalItems, fixedTotal, hasVariablePricing } = getCartSummary(cart, products);

  const handleOrder = () => {
    window.open(orderUrl(cart, products), "_blank");
  };

  return (
    <>
      <ProductCatalog
        products={products}
        categories={categories}
        cart={cart}
        onIncrement={increment}
        onDecrement={decrement}
      />

      <WhatsappFab href={generalInquiryUrl()} lifted={totalItems > 0} />

      <CartBar
        totalItems={totalItems}
        fixedTotal={fixedTotal}
        hasVariablePricing={hasVariablePricing}
        onOrder={handleOrder}
      />
    </>
  );
}
