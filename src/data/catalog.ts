import type { Category, Product, Testimonial } from "@/lib/types";

/**
 * Datos de ejemplo para desarrollo local.
 * En la Fase 3 esto se reemplaza por una consulta a Supabase
 * (ver src/lib/supabase/products.ts), sin tener que tocar
 * los componentes que consumen estos datos.
 */
export const categories: Category[] = [
  { key: "todos", label: "Todos" },
  { key: "cheesecakes", label: "Cheesecakes" },
  { key: "tortas", label: "Tortas" },
  { key: "cupcakes", label: "Cupcakes" },
  { key: "individuales", label: "Individuales" },
];

export const products: Product[] = [
  {
    id: "1",
    categoryKey: "cheesecakes",
    name: "Cheesecake de Fresa",
    description: "Base de galleta, relleno cremoso y fresas frescas.",
    price: 8.5,
    priceType: "fixed",
    emoji: "🍓",
  },
  {
    id: "2",
    categoryKey: "cheesecakes",
    name: "Cheesecake de Nutella",
    description: "Suave, intenso y con topping de chocolate.",
    price: 9.0,
    priceType: "fixed",
    emoji: "🍫",
  },
  {
    id: "3",
    categoryKey: "tortas",
    name: "Torta Red Velvet",
    description: "Clásica, húmeda, con frosting de queso crema. Tamaño y decoración a elegir.",
    price: 15.0,
    priceType: "from",
    emoji: "🎂",
  },
  {
    id: "4",
    categoryKey: "tortas",
    name: "Torta Tres Leches",
    description: "Bizcocho esponjoso bañado en tres leches. Tamaño y decoración a elegir.",
    price: 14.0,
    priceType: "from",
    emoji: "🍰",
  },
  {
    id: "5",
    categoryKey: "cupcakes",
    name: "Cupcake Vainilla",
    description: "Frosting suave de vainilla, individual.",
    price: 2.25,
    priceType: "fixed",
    emoji: "🧁",
  },
  {
    id: "6",
    categoryKey: "cupcakes",
    name: "Cupcake Red Velvet",
    description: "Mini versión de nuestra torta favorita.",
    price: 2.5,
    priceType: "fixed",
    emoji: "🧁",
  },
  {
    id: "7",
    categoryKey: "individuales",
    name: "Mini Tarta de Limón",
    description: "Fresca, cítrica, con merengue tostado.",
    price: 3.75,
    priceType: "fixed",
    emoji: "🍋",
  },
  {
    id: "8",
    categoryKey: "individuales",
    name: "Copa de Tiramisú",
    description: "Capas de café, mascarpone y cacao.",
    price: 4.25,
    priceType: "fixed",
    emoji: "☕",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    text: "El cheesecake de fresa fue el hit de la fiesta, quedó espectacular y llegó a tiempo.",
    author: "Claudia R.",
  },
  {
    id: "t2",
    text: "Pedí la torta Red Velvet para un cumpleaños y superó lo que esperaba, buenísima atención.",
    author: "Douglas M.",
  },
  {
    id: "t3",
    text: "Los cupcakes son mi antojo de cada quincena, siempre frescos y bien empacados.",
    author: "Fátima G.",
  },
];
