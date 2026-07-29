/**
 * Dirección del negocio. Se lee de una variable de entorno para no
 * hardcodear el dato — edítala en .env.local (ver .env.local.example).
 * Mientras tanto usa un valor de ejemplo (San Miguel, El Salvador).
 */
export const BUSINESS_ADDRESS =
  process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "Heart Desserts, San Miguel, El Salvador";

/** URL de vista previa embebida (no necesita API key de Google). */
export function mapsEmbedUrl(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

/**
 * Deep link universal: abre la app de Google Maps en celular
 * (Android/iOS) o maps.google.com en el navegador de escritorio.
 */
export function mapsAppUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
