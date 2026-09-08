# 012 — Primeros 8 symbols · resultado

Fecha: 2026-09-08
Branch: `feat/symbols-guia-diseno`

## Qué se hizo

### Los 8 symbols

Quedan en `icons/symbols/naturaleza/`, los ocho en categoría `naturaleza`:
`condor-frontal`, `colibri`, `jaguar`, `sabueso-fino-colombiano`, `planta-cafe`,
`montanas-y-frailejones`, `cascada`, `pico-nevado`.

Normalización aplicada a cada uno:

- `viewBox="0 0 64 64"` y `width`/`height` a 64. `perro-orejudo` venía en lienzo
  267: se reescaló ×0.23970 multiplicando las coordenadas del `d` (no hay arcos
  en ningún archivo, así que la escala uniforme es exacta). Se verificó
  renderizado antes y después: idéntico.
- `fill="currentColor"` + `fill-rule="evenodd"` en el raíz; fuera el `fill`
  negro implícito de `perro-orejudo`.
- Fuera DOCTYPE, `xmlns:serif`, `xml:space`, `style` y `width="100%"`.
- SVGO 4.1.0 con `removeViewBox: false`. Reducción de ~35–47 %.

Registrados en `icons/symbols/manifest.json` como `aprobado`, con el archivo de
origen y el renombre en el `historial` de cada uno.

### Guías (es/en, sincronizadas, 260 líneas cada una)

Nueva sección **2.1 — Dos formas de entrega**:

- **Forma A, trazo vivo (preferida):** `stroke="currentColor"`, `fill="none"`,
  `stroke-width="2"`, caps y joins `round`. El peso queda editable.
- **Forma B, contorno expandido (aceptada):** `fill="currentColor"` +
  `fill-rule="evenodd"`, sin `stroke`. Caps y joins van dibujados en el contorno.
  El peso visual debe medir ≈2 px sobre el lienzo de 64.
- Advertencia explícita de que la forma B **congela el grosor**, y recomendación
  de que el diseñador conserve el archivo con el trazo vivo.

Se ajustaron en consecuencia la tabla de spec (sección 2), la estructura del SVG
exportado (9, ahora con las dos plantillas), la verificación post-SVGO (10, que
ahora avisa de no perder el `fill-rule`), el checklist (12) y los errores
comunes (14).

### Skill `nuevo-icono`

Sección 2 ampliada con la forma B y los pasos para normalizar un aporte externo,
incluyendo el aviso de que si SVGO se come el `fill-rule` el symbol queda como
una mancha, y de que un peso fuera de ≈2 px no se "arregla": se pide de vuelta.

### Sitio

`IconModal` mostraba `Fill: none` fijo, que dejó de ser cierto. Ahora se deriva
del propio SVG: `none` si el raíz lo declara, `currentColor` si no.

## Medición del peso de línea

Método: rasterizar a 640 px con `qlmanage`, decodificar el PNG y estimar el
ancho como `2·área/perímetro`, calibrando el estimador contra dos íconos de
grosor conocido del repo (ambos 1.5 px). Los dos calibradores dieron factores de
1.16 y 1.31, así que el método tiene ~±0.2 u de margen.

| Symbol | Ancho estimado |
|---|---|
| cascada | ~1.8 u |
| pico-nevado | ~1.7 u |
| condor-frontal | ~1.6 u |
| colibri | ~1.5 u |
| planta-cafe | ~1.5 u |
| jaguar | ~1.4 u |
| sabueso-fino-colombiano | ~1.3 u |
| montanas-y-frailejones | ~1.2 u |

Ninguno llega a 2 u y hay dispersión visible entre piezas. Se dejan como están
(decisión de Miguel al ajustar la guía), pero queda anotado para cuando se
revise la uniformidad del set completo.

## Verificación

- `tsc -b` y build del sitio OK. `npm run validate` OK (274, sólo mira el base).
- Sitio en dev: la pestaña Symbols lista los 8, chip `Naturaleza 7→8`, tarjetas a
  60 px con `viewBox 0 0 64 64`, modal con previews 32/64/128, specs
  `64 × 64` / `2 px` / `Fill: currentColor`, nota de descarga y sin snippet.
- Prueba de color: al elegir un swatch, el `fill` se hornea al hex (`#003893`),
  confirmando que `currentColor` funciona igual en la forma B.

## Pendiente

- **`flor-botacia.svg` no llegó.** Cuando aparezca, entra como
  `frailejon-florecido.svg`.
- Los símbolos siguen sin cubrirse en `scripts/validate` (igual que el set large).
  Con la forma B admitida, una validación útil sería: `viewBox` correcto, color
  en `currentColor`, y `fill-rule` presente cuando no hay `stroke`.
