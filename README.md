# Heart Desserts — Catálogo web

Catálogo digital para Heart Desserts (repostería, El Salvador). Permite explorar
productos por categoría, armar un pedido y enviarlo directo a WhatsApp con el
mensaje ya redactado — sin login, pensado para estar abierto al público.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** (tokens de marca definidos en `src/app/globals.css`)
- **Supabase** (Postgres + Storage) — se integra en la Fase 3, ver más abajo
- **Vercel** para hosting (deploy automático desde este repo)

Todo dentro del free tier de cada servicio.

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx        # Fuentes de marca (Cormorant Garamond + Jost) y metadata SEO
│   ├── page.tsx           # Composición de secciones (server component)
│   └── globals.css        # Tokens de color/tipografía (paleta del logo)
├── components/
│   ├── Hero.tsx
│   ├── ShopExperience.tsx # Conecta el carrito con catálogo, barra y WhatsApp
│   ├── ProductCatalog.tsx # Tabs de categoría + grid de productos
│   ├── CategoryTabs.tsx
│   ├── ProductCard.tsx
│   ├── CartBar.tsx        # Barra flotante con total y botón de pedido
│   ├── WhatsappFab.tsx    # Botón flotante para consultas generales
│   ├── About.tsx          # Nosotros + testimonios
│   ├── Gallery.tsx
│   ├── InfoSection.tsx    # Horarios / entregas / anticipación
│   └── Footer.tsx
├── data/
│   └── catalog.ts          # Datos de ejemplo (categorías, productos, testimonios)
├── hooks/
│   └── useCart.ts           # Estado del carrito, persistido en localStorage
└── lib/
    ├── types.ts              # Tipos del dominio (Product, Category, CartState...)
    └── whatsapp.ts            # Construcción del mensaje y URLs de wa.me
```

La idea de esta separación: cada archivo tiene una sola responsabilidad, y
`data/catalog.ts` es el único lugar que hay que cambiar por una consulta a
Supabase en la Fase 3 — los componentes no se enteran de dónde vienen los datos.

## Cómo correrlo en local

```bash
npm install
cp .env.local.example .env.local
# edita .env.local y pon tu número real de WhatsApp
npm run dev
```

Abre http://localhost:3000

## Variables de entorno

Ver `.env.local.example`. Por ahora solo se usa:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número de WhatsApp del negocio, formato
  internacional sin "+" ni espacios (ej. `50370000000`).

## Roadmap

- [x] **Fase 1** — Prototipo visual (HTML) validado con el cliente
- [x] **Fase 2** — Repo Next.js + estructura de componentes (este commit)
- [ ] **Fase 3** — Supabase: tabla de productos/categorías + fetch real en `data/catalog.ts`
- [ ] **Fase 4** — Panel para cargar productos (definido: por ahora se cargan directo en la BD, sin login)
- [ ] **Fase 5** — Ajustes finales de WhatsApp (número real, pruebas de mensaje)
- [ ] **Fase 6** — Deploy en Vercel + dominio

## Convención de commits

Se usa [Conventional Commits](https://www.conventionalcommits.org/) para mantener
el historial legible:

- `feat: ...` — nueva funcionalidad
- `fix: ...` — corrección de bug
- `chore: ...` — configuración, dependencias, tareas de mantenimiento
- `style: ...` — cambios de diseño/estilos sin lógica nueva
- `refactor: ...` — reestructuración de código sin cambiar comportamiento
