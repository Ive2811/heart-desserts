import type { CartState, Product } from "@/lib/types";

/**
 * Número de WhatsApp del negocio, en formato internacional sin signos
 * (código de país + número, sin "+" ni espacios). Ej: El Salvador -> 503XXXXXXXX
 * Se lee de una variable de entorno para no hardcodear el número en el código.
 */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const WHATSAPP_GENERAL_MESSAGE =
  "¡Hola Heart Desserts! 👋 Tengo una consulta sobre sus postres.";

function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generalInquiryUrl(): string {
  return buildWhatsappUrl(WHATSAPP_GENERAL_MESSAGE);
}

interface CartLine {
  product: Product;
  quantity: number;
}

function getCartLines(cart: CartState, products: Product[]): CartLine[] {
  return Object.entries(cart)
    .filter(([, quantity]) => quantity > 0)
    .map(([productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      if (!product) return null;
      return { product, quantity };
    })
    .filter((line): line is CartLine => line !== null);
}

/** Arma el mensaje de pedido, separando precio fijo / "desde" / "a confirmar". */
export function buildOrderMessage(cart: CartState, products: Product[]): string {
  const lines = getCartLines(cart, products);

  const messageLines: string[] = [
    "¡Hola Heart Desserts! 🍓 Quisiera hacer el siguiente pedido:",
    "",
  ];

  let fixedTotal = 0;
  let hasVariablePricing = false;

  for (const { product, quantity } of lines) {
    if (product.priceType === "tbd") {
      hasVariablePricing = true;
      messageLines.push(`• ${quantity}x ${product.name} — precio a confirmar`);
} else if (product.priceType === "range" && product.priceMax != null) {
      hasVariablePricing = true;
      const minPart = product.priceMinLabel
        ? `${product.priceMinLabel} $${product.price.toFixed(2)}`
        : `$${product.price.toFixed(2)}`;
      const maxPart = product.priceMaxLabel
        ? `${product.priceMaxLabel} $${product.priceMax.toFixed(2)}`
        : `$${product.priceMax.toFixed(2)}`;
      messageLines.push(
        `• ${quantity}x ${product.name} — a confirmar (${minPart} / ${maxPart})`
      );
    } else {
      const subtotal = product.price * quantity;
      fixedTotal += subtotal;
      messageLines.push(`• ${quantity}x ${product.name} — $${subtotal.toFixed(2)}`);
    }
  }

  messageLines.push("");
  messageLines.push(
    hasVariablePricing
      ? `Subtotal (precio fijo): $${fixedTotal.toFixed(2)} + productos a confirmar`
      : `Total: $${fixedTotal.toFixed(2)}`
  );
  messageLines.push("");
  messageLines.push("Quedo atento/a para confirmar precio final y entrega. ¡Gracias!");

  return messageLines.join("\n");
}

export function orderUrl(cart: CartState, products: Product[]): string {
  return buildWhatsappUrl(buildOrderMessage(cart, products));
}

/** Totales del carrito para mostrar en la UI (separa precio fijo de variable/por confirmar). */
export function getCartSummary(cart: CartState, products: Product[]) {
  const lines = getCartLines(cart, products);
  const totalItems = lines.reduce((sum, l) => sum + l.quantity, 0);
  const fixedTotal = lines
    .filter((l) => l.product.priceType === "fixed")
    .reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const hasVariablePricing = lines.some((l) => l.product.priceType !== "fixed");

  return { totalItems, fixedTotal, hasVariablePricing };
}