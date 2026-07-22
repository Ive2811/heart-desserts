import type { Category, Product, Testimonial } from "@/lib/types";

/**
 * Datos del catálogo. Los precios marcados como "tbd" (price: 0) están
 * pendientes de confirmar — se ven en la tarjeta como "Precio a confirmar"
 * y no se suman al total del carrito. En cuanto tengas la lista de precios,
 * solo hay que cambiar priceType a "fixed" o "from" y poner el número real
 * en cada producto de aquí abajo.
 *
 * En la Fase 3 este archivo se reemplaza por una consulta a Supabase, sin
 * tener que tocar los componentes que lo consumen.
 */
export const categories: Category[] = [
  { key: "todos", label: "Todos" },
  { key: "tortas", label: "Tortas" },
  { key: "individuales", label: "Individuales" },
  { key: "cupcakes", label: "Cupcakes" },
  { key: "crepas", label: "Crepas" },
  { key: "cajas", label: "Cajas de regalo" },
];

export const products: Product[] = [
  // --- Tortas ---
  {
    id: "torta-frutos-rojos",
    categoryKey: "tortas",
    name: "Cheesecake de Frutos Rojos",
    description: "Base suave, crema chantilly y una corona de fresas, cerezas y arándanos frescos.",
    price: 0,
    priceType: "tbd",
    emoji: "🍓",
    imageUrl: "/products/cheesecake-frutos-rojos.jpg",
  },
  {
    id: "torta-mermelada-moras",
    categoryKey: "tortas",
    name: "Cheesecake con Mermelada de Moras",
    description: "Cubierta brillante de mermelada de moras con fresas, cerezas y arándanos alrededor.",
    price: 0,
    priceType: "tbd",
    emoji: "🍒",
    imageUrl: "/products/cheesecake-mermelada-moras.jpg",
  },
  {
    id: "torta-chocolate-fresas",
    categoryKey: "tortas",
    name: "Cheesecake de Chocolate con Fresas",
    description: "Espolvoreado de cacao con fresas frescas, un clásico elegante y no muy dulce.",
    price: 0,
    priceType: "tbd",
    emoji: "🍫",
    imageUrl: "/products/cheesecake-chocolate-fresas.jpg",
  },
  {
    id: "torta-tres-leches",
    categoryKey: "tortas",
    name: "Pastel Tres Leches",
    description: "Bizcocho húmedo bañado en tres leches, con crema batida y un toque de canela.",
    price: 0,
    priceType: "tbd",
    emoji: "🍰",
    imageUrl: "/products/pastel-tres-leches.jpg",
  },

  // --- Individuales ---
  {
    id: "individual-tartaleta-tropical",
    categoryKey: "individuales",
    name: "Tartaleta Tropical",
    description: "Base crocante con crema, kiwi, mango y fresa.",
    price: 0,
    priceType: "tbd",
    emoji: "🥝",
    imageUrl: "/products/tartaleta-tropical.jpg",
  },
  {
    id: "individual-tartaleta-durazno",
    categoryKey: "individuales",
    name: "Tartaleta de Durazno y Frutos Rojos",
    description: "Crema suave, durazno, cereza, arándano y fresa sobre base artesanal.",
    price: 0,
    priceType: "tbd",
    emoji: "🍑",
    imageUrl: "/products/tartaleta-durazno.jpg",
  },
  {
    id: "individual-cheesecake-caramelo",
    categoryKey: "individuales",
    name: "Rebanada de Cheesecake con Caramelo",
    description: "Cheesecake cremoso bañado en caramelo y nuez tostada picada.",
    price: 0,
    priceType: "tbd",
    emoji: "🥜",
    imageUrl: "/products/cheesecake-caramelo-nuez.jpg",
  },
  {
    id: "individual-flan-napolitano",
    categoryKey: "individuales",
    name: "Flan Napolitano",
    description: "Flan clásico sobre base de chocolate, bañado en caramelo.",
    price: 0,
    priceType: "tbd",
    emoji: "🍮",
    imageUrl: "/products/flan-napolitano.jpg",
  },
  {
    id: "individual-eclairs",
    categoryKey: "individuales",
    name: "Eclairs de Chocolate",
    description: "Masa choux rellena, bañada en chocolate con detalle de oro comestible.",
    price: 0,
    priceType: "tbd",
    emoji: "✨",
    imageUrl: "/products/eclairs-chocolate.jpg",
  },

  // --- Cupcakes ---
  {
    id: "cupcake-choco-fresa",
    categoryKey: "cupcakes",
    name: "Cupcake de Chocolate con Fresa",
    description: "Cupcake de chocolate, frosting de vainilla, fresa fresca y toque de oro comestible.",
    price: 0,
    priceType: "tbd",
    emoji: "🧁",
    imageUrl: "/products/cupcake-chocofresa.jpg",
  },

  // --- Crepas ---
  {
    id: "crepa-red-velvet",
    categoryKey: "crepas",
    name: "Crepa Red Velvet",
    description: "Crepa roja rellena, decorada con fresas y sprinkles. Ideal para fechas especiales.",
    price: 0,
    priceType: "tbd",
    emoji: "❤️",
    imageUrl: "/products/crepa-red-velvet.jpg",
  },
  {
    id: "crepa-malvaviscos",
    categoryKey: "crepas",
    name: "Crepa de Malvaviscos",
    description: "Crepa dulce con chocolate, azúcar glass y mini malvaviscos de colores.",
    price: 0,
    priceType: "tbd",
    emoji: "🍡",
    imageUrl: "/products/crepa-malvaviscos.jpg",
  },
  {
    id: "crepa-oreo-kitkat",
    categoryKey: "crepas",
    name: "Crepa Oreo & KitKat",
    description: "Crepa rellena con oreo triturado, fresa y KitKat, bañada en chocolate.",
    price: 0,
    priceType: "tbd",
    emoji: "🍪",
    imageUrl: "/products/crepa-oreo-kitkat.jpg",
  },

  // --- Cajas de regalo ---
  {
    id: "caja-navidena-tartaletas",
    categoryKey: "cajas",
    name: "Caja Navideña de Mini Tartaletas",
    description: "Set de mini tartaletas de fruta, empacadas con moño para regalo. Tamaño y cantidad a elegir.",
    price: 0,
    priceType: "tbd",
    emoji: "🎄",
    imageUrl: "/products/caja-navidena-tartaletas.jpg",
  },
  {
    id: "caja-sorpresa-cumpleanos",
    categoryKey: "cajas",
    name: "Caja Sorpresa de Cumpleaños",
    description: "Caja personalizada con postres, detalles y tarjeta — perfecta para regalo. Se cotiza según contenido.",
    price: 0,
    priceType: "tbd",
    emoji: "🎁",
    imageUrl: "/products/caja-sorpresa-cumpleanos.jpg",
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
