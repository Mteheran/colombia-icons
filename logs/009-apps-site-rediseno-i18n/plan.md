# 009 — Rediseño de apps/site (handoff Claude Design) + i18n ES/EN/PT

## Contexto

`apps/site` existía como una página en español, sin i18n, con un `ThemeToggle`
(oscuro por defecto). Claude Design entregó un handoff (prototipo HTML + tokens +
copy ES/EN) para rediseñar la página a alta fidelidad. El pedido añade el
portugués como tercer idioma y un documento de diseño de referencia.

## Decisiones (confirmadas con el usuario)

1. **Hero:** variante A (editorial). Se descartan `muro` y `terminal`.
2. **Tricolor:** se incluye el 6º swatch (gradiente de bandera).
3. **Modo oscuro:** se mantiene el toggle y se deriva una paleta oscura de los
   tokens nuevos (el prototipo era solo claro).

## Plan

1. **Branch** `feat/site-redesign-i18n`.
2. **i18n** (`src/i18n.ts`): diccionarios ES/EN/PT (`T`, `RULES`, `STEPS`,
   `ISSUE_TEMPLATE`, `CATEGORY_LABELS_I18N`, `GUIDE_DOC`, `detectLang`). PT nuevo,
   traducido; su doc de guía cae al inglés (no existe PT todavía).
3. **Sistema de color** (`src/lib/colors.ts`): 6 colores + tricolor, gradiente,
   helpers. `svg.ts`: `bakeColor` con `<defs>` para tricolor y descarga SVG/PNG
   512. `IconSvg.tsx`: `negro` hereda `--ink` (visible en oscuro), el resto se
   hornea literal.
4. **Componentes** por sección: `Nav`, `Hero`, `Stats`, `Gallery`, `IconModal`,
   `TravelDemo` (maqueta de teléfono), `DesignGuide`, `Issues`, `SiteFooter`,
   más `IconSvg` y `ColorSwatches`. Estado global en `App.tsx`.
5. **CSS** (`index.css` tokens light/dark + base; `App.css` clases): migrar los
   estilos inline del prototipo a clases con variables, en ambos temas.
6. **Datos**: reusar `src/data/icons.ts` (manifest + glob). No tocar
   `icons/svg/` ni `packages/`.
7. **Doc de diseño**: `docs/diseno-sitio-web.md` (estructura + estándar).
8. **Verificar**: `npm run build` + revisión en el dev server (temas e idiomas).

## Fuera de alcance

- No se commitea ni publica (solo branch + implementación).
- No se genera doc de guía en PT (fallback al inglés).
- `packages/` e `icons/` intactos.
