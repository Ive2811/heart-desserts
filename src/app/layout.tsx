import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
