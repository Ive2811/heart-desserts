const SEP = "::";

/** Llave del carrito: "id" o "id::sabor" cuando el producto tiene opciones. */
export function cartKey(productId: string, option?: string): string {
  return option ? `${productId}${SEP}${option}` : productId;
}

export function parseCartKey(key: string): { productId: string; option?: string } {
  const i = key.indexOf(SEP);
  if (i === -1) return { productId: key };
  return { productId: key.slice(0, i), option: key.slice(i + SEP.length) };
}
