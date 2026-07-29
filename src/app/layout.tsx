import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Heart Desserts | Repostería",
  description:
    "Postres artesanales hechos con cariño en El Salvador. Explora el catálogo y haz tu pedido directo por WhatsApp.",
  openGraph: {
    title: "Heart Desserts | Repostería",
    description: "Postres artesanales hechos con cariño en El Salvador.",
    type: "website",
  },
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("heart-desserts-theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        {/* Se ejecuta antes de pintar para evitar el parpadeo claro→oscuro al cargar */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
