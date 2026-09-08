# 011 — Set Symbols (64 × 64) · resultado

Fecha: 2026-09-08
Branch: `feat/symbols-guia-diseno` (desde `origin/main` @ 4f90c54)

## Qué se hizo

### 1. Guías para el diseñador (español e inglés)

- `docs/guia-diseno-symbols.es.md`
- `docs/symbol-design-guide.md`

Ambas de 232 líneas, sincronizadas 1:1 y con la misma estructura que las guías
del set base y del set large: spec obligatoria, referencias antes de dibujar,
área y márgenes, reglas de trazo, naming, estructura del SVG exportado, SVGO,
prueba de render, checklist, flujo de aprobación y errores comunes.

Contenido tomado del PDF *Directrices de Diseño para Symbols — Colombia Icons*:
tabla comparativa ícono vs. symbol, lienzo 64 × 64, margen 6 px, área útil
≈ 52 × 52, regla de respiración (3 px mínimo entre trazos, 4 preferible; sin
nudos de 3+ líneas; cortes intencionales), prioridades de detalle (silueta →
rasgos identificadores → detalle secundario), naming descriptivo del referente
y la lista de control de aprobación.

Además se agregó el enlace cruzado a la guía de symbols en las cuatro guías ya
existentes (base es/en y large es/en), que además ahora enlazan entre sí.

### 2. Sitio (`apps/site`) — sección para mostrarlos

Los symbols se muestran como **tercera pestaña de set en la galería**, el mismo
patrón que ya usaba el set large:

- `data/icons.ts`: `IconSet` pasa a `'base' | 'large' | 'symbols'`; se carga el
  set desde `icons/symbols/manifest.json` + `import.meta.glob` de
  `icons/symbols/**`, filtrando por `estado: aprobado`. `iconsOf` /
  `categoriesOf` pasan de ternarios a un mapa por set.
- `i18n.ts`: `SET_INFO.symbols` en es/en/pt (título, descripción, specs
   64 × 64 / 2 px / 52 × 52 / descarga, CTA y nota de "no viaja en los
  paquetes"), `GUIDE_DOC_SYMBOLS` y `guideDoc()` con la tercera rama. Copys
  nuevos `setEmpty` / `setEmptyCta` para un set todavía sin piezas.
- `Gallery.tsx`: pestaña `symbols`; tamaños de preview por set movidos a
  `GRID_SIZE` / `LIST_SIZE` (symbols a 60 px en grilla, 40 en lista); estado
  vacío propio cuando el set no tiene nada aprobado, que enlaza a la guía en
  vez de decir "sin resultados para «»".
- `IconModal.tsx`: previews 32 / 64 / 128, specs `64 × 64` y `2 px` por set, y
  `isLarge` reemplazado por `inPackages` (sólo el set base muestra snippet y
  botón de copiar; los otros dos muestran la nota de descarga).
- `App.tsx`: conteo del tercer set en `setCounts`.
- `App.css`: celdas más anchas para la grilla de symbols (172 / 126 px).

### 3. Datos

- `icons/symbols/manifest.json` creado vacío (`{ "icons": [] }`), listo para el
  flujo de revisión uno por uno.

### 4. READMEs

`README.md` y `README.es.md` (sincronizados): la sección de diseño ahora
describe los **tres** sets en una tabla y enlaza las seis guías. Antes sólo
enlazaba la guía del set base — el set large nunca se había agregado ahí.

## Verificación

- `tsc -b` sin errores; `npm run build --workspace=apps/site` OK.
- `npm run validate` OK (274 íconos aprobados). El script sólo valida el set
  base; ni large ni symbols están cubiertos — igual que antes de esta tarea.
- Se probó el sitio en dev con un symbol temporal de prueba: la tarjeta
  renderiza a 60 px con `viewBox="0 0 64 64"`, el modal muestra 32/64/128, las
  specs `64 × 64` / `2 px`, la nota de descarga en lugar del snippet, y sin
  botón de copiar. El symbol de prueba se borró después.
- Set vacío verificado en es y en: nota del set + estado vacío enlazando a
  `docs/guia-diseno-symbols.es.md` / `docs/symbol-design-guide.md`.

## Desviaciones respecto al plan

- **`CLAUDE.md` no se tocó.** El brief tampoco menciona el set large; alinearlo
  con los tres sets es un cambio de documento aparte.
- Los READMEs se ampliaron un poco más de lo planeado: se aprovechó para
  agregar también los enlaces faltantes a la guía del set large.

## Pendiente

- **No se generó ningún SVG.** Los symbols entran uno por uno por el flujo de
  revisión (CLAUDE.md §11) contra `icons/symbols/manifest.json`.
- El skill `nuevo-icono` describe sólo el set base (24 × 24, `icons/svg/`,
  tablas de los READMEs). Antes de empezar a dibujar symbols conviene
  extenderlo — o crear uno paralelo — para que el flujo apunte al manifest y a
  la spec correctos.
- `scripts/validate` podría cubrir también `icons/symbols/` (grosor 2 px,
  `viewBox 0 0 64 64`, sin overrides de `stroke-width`).
