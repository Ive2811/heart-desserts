export interface InstagramMediaItem {
  id: string;
  caption: string | null;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  imageUrl: string;
  permalink: string;
}

interface RawInstagramMedia {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

// Host de la "Instagram API with Instagram Login" (reemplazo de la Basic Display API,
// retirada en dic. 2024). No necesita Página de Facebook, solo cuenta profesional.
// Ver instrucciones completas de configuración en README.md.
const GRAPH_HOST = "https://graph.instagram.com";

// Refresca cada 6 horas: suficiente para que la galería se sienta "viva"
// sin gastar de más la cuota de la API (200 llamadas/hora por token).
const REVALIDATE_SECONDS = 60 * 60 * 6;

/**
 * Trae las publicaciones recientes del feed de Instagram del negocio.
 * Si no hay token configurado o la API falla, devuelve una lista vacía
 * (el componente que lo consume debe manejar ese caso con un fallback).
 */
export async function getInstagramMedia(limit = 8): Promise<InstagramMediaItem[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
  const url = `${GRAPH_HOST}/me/media?fields=${fields}&limit=${limit}&access_token=${token}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.error("Instagram API error:", response.status, await response.text());
      return [];
    }

    const data = (await response.json()) as { data?: RawInstagramMedia[] };

    return (data.data ?? [])
      .filter((item) => item.media_type !== "VIDEO") // la galería solo muestra fotos
      .map((item) => ({
        id: item.id,
        caption: item.caption ?? null,
        mediaType: item.media_type,
        imageUrl: item.media_type === "CAROUSEL_ALBUM" ? item.media_url : item.media_url,
        permalink: item.permalink,
      }));
  } catch (error) {
    console.error("No se pudo obtener el feed de Instagram:", error);
    return [];
  }
}
