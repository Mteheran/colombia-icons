# 011 — Set Symbols (64 × 64)

Fecha: 2026-09-08
Branch: `feat/symbols-guia-diseno` (desde `origin/main` @ 4f90c54)

## Contexto

Se recibió el documento *Directrices de Diseño para Symbols — Colombia Icons*
(PDF del diseñador). Define un **tercer set**, independiente de los dos ya
existentes:

| Set | Lienzo | Trazo | Propósito |
|---|---|---|---|
| base | 24 × 24 | 1.5 px | UI: acción, navegación, controles |
| large | 48 × 48 | 1.5 px (+1 px detalle) | UI grande: encabezados, tarjetas, hero |
| **symbols** | **64 × 64** | **2 px** | Representación cultural / natural / territorial: diapositivas, Canva, mapas, fichas, infografías |

Los symbols **no son íconos de interfaz**: buscan cobertura gráfica para piezas
(presentaciones, infografías, colecciones), con rasgos reconocibles del
referente real y un nivel de detalle medio y controlado.

## Alcance de esta tarea

1. Guía para el diseñador, en español e inglés, con la misma estructura y nivel
   de detalle que las guías ya existentes (`guia-diseno-iconos-large.es.md` /
   `large-icon-design-guide.md`), pero con la spec del PDF.
2. Sección en el sitio (`apps/site`) para mostrar los symbols: tercera pestaña
   de set en la galería, con su nota de spec, su enlace a la guía y un estado
   vacío propio mientras no haya symbols aprobados.
3. **No se genera ningún SVG** en esta tarea. Los symbols entran uno por uno
   por el flujo de revisión (CLAUDE.md §11), con su propio manifest.

## Decisiones de spec

- **Trazo 2 px** (la recomendación del PDF), no la alternativa de 1.5 px. A
  64 px de lienzo, 2 px da un peso relativo de **1/32** — exactamente el mismo
  peso relativo que 1.5 px sobre el lienzo de 48 del set large. Así los tres
  sets se leen como una familia y el symbol conserva aire para su detalle.
- **Un solo grosor**: a diferencia del set large, no hay trazo secundario de
  1 px. El PDF es explícito: "No mezclar grosores dentro del set".
- Margen visual 6 px → área útil ≈ 52 × 52.
- `currentColor`, `fill="none"`, caps y joins `round`, igual que los otros sets.
- Nombres en español, `kebab-case`, sin tildes ni `ñ`. El PDF sugiere nombres
  más descriptivos que en el set base (`condor-de-los-andes`,
  `mascara-carnaval-barranquilla`) porque el symbol nombra al referente real,
  no a una acción de UI.

## Pasos

1. `docs/guia-diseno-symbols.es.md` y `docs/symbol-design-guide.md`
   (sincronizadas entre sí y enlazadas cruzadamente con las otras guías).
2. `icons/symbols/manifest.json` vacío (`{ "icons": [] }`), listo para el flujo
   de revisión.
3. `apps/site`:
   - `data/icons.ts`: cargar el set `symbols` desde su manifest.
   - `i18n.ts`: `SET_INFO` y `GUIDE_DOC_SYMBOLS` en es/en/pt.
   - `Gallery.tsx`: tercera pestaña + estado vacío de set sin íconos.
   - `IconModal.tsx`: tamaños de preview y specs del set de 64.
   - `App.tsx`: conteos por set.
4. Actualizar las referencias a las guías en `README.md` / `README.es.md` y en
   `CLAUDE.md` si aplica.
5. Build del sitio para verificar.
