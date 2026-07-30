export type PriceType = "fixed" | "from" | "tbd" | "range";

export interface Product {
  id: string;
  categoryKey: string;
  name: string;
  description: string;
  price: number;
  priceMax?: number;
  priceMinLabel?: string;
  priceMaxLabel?: string;
  priceType: PriceType;
  emoji: string;
  imageUrl?: string | null;
}

export interface Category {
  key: string;
  label: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

/** Cantidad de un producto dentro del carrito, indexado por product id. */
export type CartState = Record<string, number>;
