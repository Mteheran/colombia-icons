# Diseño del sitio web (`apps/site`)

Documento de referencia de la **estructura** y el **estándar de diseño** de la
página pública de colombia-icons. Léelo antes de tocar `apps/site`: define de
dónde salen los datos, cómo está organizado el código, qué tokens de diseño
existen y cómo extender la página sin romper la coherencia visual.

> Origen: rediseño basado en el handoff de Claude Design
> (`design_handoff_colombia_icons_site/`). Este documento es la fuente de verdad
> del sitio ya implementado; el handoff es solo el prototipo de partida.

---

## 1. Qué es y stack

Una **sola página** (single-page, scroll vertical) que:

- Presenta la biblioteca y su instalación por framework (React / Angular / Blazor).
- Deja explorar los ~174 iconos aprobados: buscar, filtrar por categoría,
  cambiar color y ver/descargar cada uno en SVG y PNG.
- Muestra un demo móvil, la guía de diseño y cómo reportar issues.

**Stack:** React 18 + TypeScript + **Vite**, con **CSS plano** (variables +
clases, sin framework CSS). No hay backend ni fetch: todo es estático.

- Tipografías: **Archivo** (texto) y **JetBrains Mono** (código, ids, labels),
  cargadas desde Google Fonts en `index.html`.
- Idiomas: **ES · EN · PT** (ver sección 6).
- Tema: claro / oscuro con toggle (ver sección 5). Oscuro es el default.

---

## 2. Fuente de datos (no se toca desde el sitio)

La galería **no** mantiene su propia lista de iconos. Todo sale de
`src/data/icons.ts`, que:

- Lee `icons/manifest.json` y filtra `estado === 'aprobado'`.
- Hace `import.meta.glob('../../../../icons/svg/**/*.svg', { query: '?raw' })`
  para traer el markup SVG completo de cada archivo.
- Expone: `icons: Icon[]`, `svgById: Record<string,string>`,
  `categories: Categoria[]` (solo las que tienen iconos aprobados) y
  `CATEGORY_LABELS` (español; los labels multi-idioma están en `i18n.ts`).

**Regla:** para agregar/quitar iconos se edita `icons/svg/` + `icons/manifest.json`
(flujo de la sección 11 del `CLAUDE.md`), nunca el sitio. La página se actualiza
sola porque lee ese manifest.

El SVG fuente es el elemento `<svg>` completo con `stroke="currentColor"`
(o `fill="currentColor"` en los pocos iconos sólidos, p.ej. `estrella-llena`).

---

## 3. Mapa de archivos

```
apps/site/src/
├── main.tsx              # entry; monta <App/>, importa index.css
├── App.tsx               # orquestador: estado global + composición de secciones
├── index.css             # tokens de diseño (light/dark) + estilos base
├── App.css               # todas las clases de componentes (top→bottom de la página)
├── i18n.ts               # diccionarios ES/EN/PT: T, RULES, STEPS, ISSUE_TEMPLATE,
│                         #   CATEGORY_LABELS_I18N, GUIDE_DOC, detectLang()
├── data/icons.ts         # fuente de datos (sección 2)
├── lib/
│   ├── colors.ts         # 6 colores + tricolor, gradiente, helpers de color
│   ├── frameworks.ts     # snippets/instalación por framework, pascalCase
│   ├── compositions.ts   # ids fijos: tira del hero, categorías y tabs del demo
│   ├── site.ts           # URLs del repo, paquetes y docs
│   └── svg.ts            # bakeColor() + descarga SVG/PNG (incluye tricolor)
└── components/
    ├── Nav.tsx           # nav sticky + Logo (reutilizado en footer)
    ├── Hero.tsx          # hero editorial + tarjeta de instalación
    ├── Stats.tsx         # barra de totales (4 celdas)
    ├── Gallery.tsx       # controles + vistas grid/compact/list + estado vacío
    ├── IconModal.tsx     # modal de detalle de un icono
    ├── TravelDemo.tsx    # demo móvil (maqueta de teléfono)
    ├── DesignGuide.tsx   # guía de diseño (6 reglas)
    ├── Issues.tsx        # cómo reportar + plantilla de issue
    ├── SiteFooter.tsx    # footer
    ├── IconSvg.tsx       # renderer de un icono (tamaño + color)
    └── ColorSwatches.tsx # selector de color compartido (galería y modal)
```

Principio: **componentes tontos + estado en `App.tsx`**. Los datos derivados
(lista filtrada, snippet, PascalCase, conteos) se calculan en el render, no se
guardan en estado.

---

## 4. Estructura de la página (de arriba a abajo)

| # | Sección | Componente | Ancla | Fondo |
|---|---------|------------|-------|-------|
| 1 | Nav sticky | `Nav` | — | `--nav-bg` (blur) |
| 2 | Hero editorial + tarjeta de instalación | `Hero` | — | `--bg` |
| 3 | Barra de totales | `Stats` | — | `--bg` |
| 4 | Galería (controles + vistas) | `Gallery` | `#galeria` | `--bg` |
| 5 | Modal de detalle (overlay) | `IconModal` | — | overlay |
| 6 | Demo móvil | `TravelDemo` | `#demo` | oscuro fijo |
| 7 | Guía de diseño | `DesignGuide` | `#guia` | `--bg` |
| 8 | Issues | `Issues` | `#issues` | `--surface-alt` |
| 9 | Footer | `SiteFooter` | — | oscuro fijo |

- Ancho de contenido: `max-width: 1200px`, centrado, `padding: 0 28px`.
- Solo **dos** secciones usan fondo intencionalmente oscuro en ambos temas
  (demo y footer). En tema claro contrastan; en tema oscuro se integran.
- `scroll-margin-top` en las secciones con ancla por el nav sticky.

Detalle visual fino de cada sección (medidas, tipos, estados) está codificado en
`App.css`, ordenado igual que esta tabla. El handoff original (secciones 5.1–5.11)
es la referencia de esas medidas.

---

## 5. Design tokens

Definidos en `src/index.css`. **Regla de oro:** todo color de UI usa un token; los
colores de bandera y las superficies oscuras fijas son la única excepción.

### Color (semántico, cambia con el tema)

| Token | Light | Rol |
|---|---|---|
| `--bg` | `#faf8f4` | Fondo de página |
| `--surface` | `#ffffff` | Tarjetas, controles, panel izq. del modal |
| `--surface-alt` | `#f4f1ea` | Inputs, tabs inactivos, sección issues |
| `--surface-alt-2` | `#f1ede4` | Contenedor de pills |
| `--ink` | `#1c1a17` | Texto, botones primarios |
| `--ink-70 … --ink-40` | rgba de `--ink` | Párrafos, labels, placeholders |
| `--hairline` | `rgba(28,26,23,.12)` | Bordes y separadores (grids de 1px) |
| `--nav-bg` | `rgba(250,248,244,.9)` | Fondo del nav (con blur) |

En `:root[data-theme='dark']` estos tokens se redefinen a una paleta cálida
oscura (`--bg: #141310`, `--ink: #f2efe8`, etc.). **Al agregar un color nuevo,
defínelo en ambos bloques.**

### Color (fijo, NO cambia con el tema)

`--amarillo #FCD116`, `--azul #003893`, `--rojo #CE1126` (bandera);
`--dark-ground #1c1a17`, `--on-dark #f6f3ec` (superficies oscuras fijas);
`--code-bg #1c1a17` / `--code-fg #f2efe8` (bloques de código, oscuros en ambos temas).

### Tipografía

| Rol | Tamaño / peso / tracking |
|---|---|
| H1 hero | 64px · 800 · -.035em |
| H2 sección | 32–42px · 700–800 · -.03em |
| H3 modal | 24px mono · 700 · -.025em |
| Lead | 18.5px · line-height 1.55 |
| Cuerpo | 16.5px · 1.6 |
| UI / botones | 13.5–15px · 600 |
| Chips | 12.5px · 500/600 |
| Label mono | 10.5–11.5px · uppercase · +.07em |
| Id de icono (grid) | mono 10px |

### Otros

- **Radios:** 7px (pills), 8px (botones/chips), 9px (inputs/pre), 10px (CTAs),
  12px (tarjetas/totales), 14px (tarjetas grandes), 16px (modal), 44px (teléfono),
  99px (pills/puntos).
- **Sombras:** `--card-shadow` (hover de tarjeta); modal y teléfono usan sombras
  fijas más profundas.
- **Z-index:** nav 40, barra de controles 20, overlay del modal 80.
- **Animación:** `ciFade .18s` (modal). Respeta `prefers-reduced-motion`.

---

## 6. Internacionalización (ES · EN · PT)

Todo el texto vive en `src/i18n.ts` — **ningún string va hardcodeado en un
componente**. El original solo tenía español; el handoff añadió inglés; el
portugués se agregó como tercer idioma.

Estructura:

- `T: Record<Lang, Copy>` — todos los textos de UI.
- `RULES`, `STEPS`, `ISSUE_TEMPLATE` — contenido largo por idioma.
- `CATEGORY_LABELS_I18N` — nombres de categoría por idioma.
- `GUIDE_DOC` — nombre/URL del doc de guía por idioma. **PT no tiene doc propio
  todavía**, así que cae al doc en inglés (`icon-design-guide.md`).
- `detectLang()` — resuelve idioma inicial: `localStorage` → `navigator.language`
  → `es`.

El idioma se guarda en `localStorage` (`colombia-icons-lang`) y se refleja en
`<html lang>`. El estado `lang` vive en `App.tsx` y baja como prop `t = T[lang]`.

**Para agregar un string:** añádelo a `Copy` y a los tres bloques de `T`.
**Para agregar un idioma:** amplía `Lang`, `LANGS`, `LANG_LABELS` y cada mapa de
`i18n.ts`; crea (o apunta el fallback de) su doc en `GUIDE_DOC`.

---

## 7. Sistema de color de iconos (6 + tricolor)

Definido en `src/lib/colors.ts`. Colores seleccionables:
`negro`, `gris`, `amarillo`, `azul`, `rojo`, `tricolor`.

- Los planos reemplazan `currentColor` por su hex.
- **Tricolor** usa `stroke="url(#ci-tri)"`, un `<linearGradient>` vertical con
  las proporciones de la bandera (amarillo 50%, azul 25%, rojo 25%). El gradiente
  se define **una sola vez** en `App.tsx` (un `<svg width=0>` oculto) y los
  previews lo referencian por id. El swatch replica el gradiente en CSS.

### Cómo se pinta en pantalla (`IconSvg.tsx`)

- Si se pasa `stroke` explícito (composiciones fijas: hero, demo) → se hornea ese.
- Si el color es **`negro`** (default) → **no** se hornea: el SVG mantiene
  `currentColor` y hereda `--ink` desde `.ci`. Esto es clave para el **modo
  oscuro**: los iconos negros por defecto se ven claros sobre fondo oscuro, sin
  perder legibilidad.
- Cualquier otro color → se hornea el hex/gradiente literal.

### Cómo se exporta (`lib/svg.ts`)

`bakeColor(svg, colorKey, size?)` hornea el color elegido (para tricolor inyecta
el `<defs>` del gradiente **dentro** del SVG, si no el PNG sale sin color).
La descarga nombra el archivo `<id>-<color>.svg|png`; el PNG se rasteriza en un
`<canvas>` a 512px en el navegador (sin build extra).

> Nota: al exportar `negro` sí se hornea un hex real (`#1c1a17`), independiente
> del tema del sitio — WYSIWYG respecto a lo que el usuario ve en modo claro.

---

## 8. Estado e interacciones

Estado en `App.tsx` (todo se comparte entre secciones):

| Estado | Tipo | Inicial |
|---|---|---|
| `lang` | `es\|en\|pt` | `detectLang()` |
| `theme` | `dark\|light` | `localStorage` → `dark` |
| `query` | `string` | `''` |
| `cat` | `Categoria\|'todas'` | `'todas'` |
| `color` | `ColorKey` | `'negro'` |
| `fw` | `react\|angular\|blazor` | `'react'` |
| `view` | `grid\|compact\|list` | `'grid'` |
| `open` | `string\|null` | `null` (id del icono del modal) |

Comportamiento:

- **Búsqueda + categoría** son filtros independientes que se combinan. La
  búsqueda normaliza NFD y quita diacríticos en query e id.
- **Color** afecta a la vez galería, tira del hero, modal y descarga.
- **Framework** (`fw`) lo comparten los tabs del hero, el snippet del modal y el
  código del demo.
- **Modal:** abre con click en tarjeta/fila; cierra con overlay, con `×` o `Escape`.
- **Copiar snippet:** `navigator.clipboard`; el botón pasa a «Copiado» ~1.5s.

---

## 9. Responsive

Pensado para escritorio; los breakpoints están al final de `App.css`:

- **≤1000px:** los grids de dos columnas (hero, demo, guía, issues) colapsan a una.
- **≤860px:** se ocultan los links del nav.
- **≤760px:** el modal pasa a una columna con scroll; la barra de controles deja
  de ser sticky; se reducen los H1.

---

## 10. Cómo extender sin romper el estándar

- **Nuevo icono:** solo `icons/svg/` + `manifest.json`. El sitio lo toma solo.
- **Nueva sección:** crea el componente en `components/`, sus clases al final del
  bloque correspondiente de `App.css` usando **tokens** (no hex sueltos), y
  monta la sección en `App.tsx`. Si lleva ancla, añade `scroll-margin-top`.
- **Nuevo texto / idioma:** ver sección 6 (todo pasa por `i18n.ts`).
- **Cambiar el hero:** el handoff traía 3 variantes; en producción va la
  **editorial**. Si se cambia, se reemplaza `Hero.tsx` y sus clases `.hero*`.
- **Modo oscuro:** cualquier color nuevo debe definirse en `:root` **y** en
  `:root[data-theme='dark']`. Verifica que los iconos negros por defecto sigan
  visibles (dependen de `--ink` vía `.ci`, no de un hex horneado).
- **Verificación:** `npm run build` (typecheck + build) y revisión visual con el
  dev server (`npm run dev`) en ambos temas y en ES/EN/PT.
```
