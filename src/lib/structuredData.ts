import { SITE_URL } from "@/lib/siteConfig";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { BUSINESS_ADDRESS } from "@/lib/googleMaps";

export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Heart Desserts",
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: WHATSAPP_NUMBER ? `+${WHATSAPP_NUMBER}` : undefined,
    address: { "@type": "PostalAddress", addressLocality: BUSINESS_ADDRESS, addressCountry: "SV" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "13:00",
        closes: "19:00",
      },
    ],
    sameAs: ["https://instagram.com/heart.desserts_sv", "https://www.facebook.com/heart.desserts.2023"],
  };
}