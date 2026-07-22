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

Ver `.env.local.example`. Por ahora se usa:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número de WhatsApp del negocio, formato
  internacional sin "+" ni espacios (ej. `50370000000`).
- `NEXT_PUBLIC_BUSINESS_ADDRESS`: dirección para la sección "Encuéntranos".
- `INSTAGRAM_ACCESS_TOKEN`: token para la galería (ver siguiente sección).

## Galería de Instagram (paso a paso)

La sección "Galería" trae automáticamente tus últimas publicaciones desde
Instagram usando la **Instagram API with Instagram Login** (el reemplazo
oficial de la vieja Basic Display API, retirada en diciembre 2024). No
necesita marca de terceros ni página de Facebook — solo una cuenta
profesional de Instagram.

Si no configuras el token, la galería no se rompe: muestra automáticamente
los placeholders de frutas hasta que lo agregues.

### 1. Pasar tu cuenta a profesional

En la app de Instagram: **Configuración → Cuenta → Cambiar a cuenta
profesional** → elige **Creador** (no hace falta vincular página de
Facebook).

### 2. Crear la app en Meta for Developers

1. Ve a [developers.facebook.com](https://developers.facebook.com) → **Mis
   apps → Crear app** → tipo **Negocios**.
2. Dentro de la app, en **Agregar producto**, busca **Instagram** → **Set
   up** (Business Login for Instagram / API setup with Instagram login).

### 3. Autorizar tu cuenta y generar el token

1. En **Instagram → API setup with Instagram login**, sigue el flujo para
   conectar tu cuenta de Instagram (te pedirá iniciar sesión y aceptar
   permisos).
2. Una vez conectada, la misma pantalla te deja **generar el token de
   acceso** (access token). Cópialo.

### 4. Ponerlo en el proyecto

En `.env.local`:

```
INSTAGRAM_ACCESS_TOKEN=el_token_que_copiaste
```

En producción (Vercel): **Project Settings → Environment Variables**, agrega
la misma variable ahí y vuelve a desplegar.

### 5. Renovación (cada ~60 días)

El token dura 60 días. Antes de que expire, vuelve a **Instagram → API
setup with Instagram login** en el dashboard de Meta y presiona **Generate
Token** de nuevo — reemplaza la variable de entorno con el nuevo valor.

> Nota: cuando conectemos Supabase en la Fase 3, esto se puede automatizar
> con un cron job que renueve el token solo y lo guarde en la base de
> datos, para no tener que hacerlo a mano. Por ahora, con renovarlo cada
> par de meses es suficiente.

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
