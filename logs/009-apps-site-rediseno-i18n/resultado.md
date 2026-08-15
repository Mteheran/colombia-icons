# 009 — Resultado

Rediseño de `apps/site` implementado según el handoff, con las 3 decisiones del
usuario (hero editorial, tricolor, dark mode con paleta derivada) y ES/EN/PT.

## Qué se hizo

- **Branch:** `feat/site-redesign-i18n`.
- **i18n nuevo** (`src/i18n.ts`): ES/EN/PT completos. `detectLang()` resuelve
  `localStorage → navigator.language → es`; el idioma persiste y se refleja en
  `<html lang>`. PT es traducción nueva; su guía cae a `icon-design-guide.md`.
- **Color** (`src/lib/colors.ts`, `svg.ts`, `IconSvg.tsx`): 6 colores + tricolor.
  El gradiente `#ci-tri` se define una vez en `App.tsx`. `negro` (default) hereda
  `--ink` en pantalla → sigue visible en modo oscuro; al descargar se hornea hex
  real. Tricolor inyecta `<defs>` en el SVG/PNG exportado.
- **Componentes nuevos/reescritos:** `Nav`, `Hero`, `Stats`, `Gallery`,
  `IconModal`, `TravelDemo`, `DesignGuide`, `Issues`, `SiteFooter`, `IconSvg`,
  `ColorSwatches`. Estado global (`lang, theme, query, cat, color, fw, view,
  open`) en `App.tsx`.
- **CSS reescrito:** `index.css` (tokens light + dark, base) y `App.css` (todas
  las clases, responsive, `prefers-reduced-motion`). Fuentes Archivo + JetBrains
  Mono cargadas en `index.html`.
- **Doc de diseño:** `docs/diseno-sitio-web.md`.
- **Limpieza:** eliminados `Icon.tsx`, `IconCard.tsx`, `Swatches.tsx`,
  `ThemeToggle.tsx`, `Demo.css` (reemplazados).

## Verificación

- `npm run build` (tsc -b + vite build): **OK**, 236 módulos, sin errores.
- Dev server (Browser pane):
  - 174 tarjetas; chips con conteos correctos (Nature 11, Culture 6, Food 12,
    Sports 4, Generic 141) y stats 174 / 5 / 6 / SVG·PNG.
  - Idioma ES/EN/PT: cambia H1, nav, guía (con fallback PT→EN) y `<html lang>`.
  - Tema oscuro↔claro con el toggle; iconos negros visibles en oscuro.
  - Modal: preview 140px + 16/24/48, specs (24×24 / 1.5px / none), snippet por
    framework, acciones SVG / PNG 512 / Copiar(-do).
  - Tricolor: `stroke="url(#ci-tri)"`, gradiente presente, snippet en
    `currentColor`.
  - Fuente `Archivo` aplicada.

## Desviaciones respecto al plan

- La barra de totales muestra **6** colores (no 5): ahora tricolor es
  seleccionable, así que el conteo se calcula de `COLORS.length` para ser honesto.
- El toggle de tema se integró en el nav (antes era un botón flotante).
- Screenshots del pane con desincronización de scroll intermitente (artefacto de
  la herramienta); la verificación de esas secciones se hizo por DOM/JS.

## Pendiente (no incluido, requiere decisión/acción del usuario)

- No se commiteó ni publicó (solo branch).
- Doc de guía de diseño en PT (hoy fallback al inglés).
- `apps/site` no genera changelog/versión: si se libera, seguir `/publicar-version`.
