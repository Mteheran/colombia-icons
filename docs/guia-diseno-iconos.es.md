# Guía de diseño de íconos — colombia-icons

> 🇬🇧 English version: [icon-design-guide.md](./icon-design-guide.md)

Esta guía define, paso a paso, los estándares que **cualquier diseñador** debe seguir para crear un ícono de `colombia-icons` manualmente en la herramienta de su preferencia (Figma, Illustrator, Inkscape, Boxy SVG, etc.). El objetivo es que cada ícono nuevo sea indistinguible del resto del set: mismo grid, mismo grosor, mismo estilo.

La regla de oro del proyecto: **`icons/svg/` es la única fuente de verdad.** Un ícono no existe hasta que su SVG cumple esta guía y queda aprobado. Nunca se dibuja directamente dentro de `packages/*` ni de `apps/site`.

---

## 1. Especificación técnica (obligatoria)

Todo ícono debe cumplir exactamente esto:

| Parámetro | Valor | Notas |
|---|---|---|
| **Grid / lienzo** | `24 × 24 px` | `viewBox="0 0 24 24"` |
| **Estilo** | Line icon / outline | Sólo contornos, nunca relleno sólido |
| **Grosor de línea** | `1.5 px` | Idéntico en todo el trazo del ícono y en todo el set |
| **Color** | `stroke="currentColor"` | Hereda el color por CSS del proyecto consumidor |
| **Relleno** | `fill="none"` | Ningún `fill` de color fijo |
| **Terminaciones** | `stroke-linecap="round"` | Puntas redondeadas |
| **Uniones** | `stroke-linejoin="round"` | Esquinas redondeadas |
| **Formato** | SVG optimizado (SVGO) | Sin metadata, sin IDs, sin `<style>`, sin transforms innecesarios |

Estos valores **no son negociables por ícono**: si algo obliga a cambiarlos, es un cambio global de spec que se discute aparte, no una excepción local.

---

## 2. Antes de dibujar: buscar referencias

**No diseñes de memoria.** Antes del primer trazo:

1. Busca **el objeto real** (fotos, cómo se ve de verdad un sombrero vueltiao, un frailejón, un acordeón vallenato). Un ícono reconocible parte de la forma real, no de una idea aproximada.
2. Mira **cómo lo resuelven sets de referencia** de estilo line-icon — principalmente [Lucide](https://lucide.dev) y [Tabler Icons](https://tabler.io/icons). Fíjate en el nivel de detalle, cómo simplifican, y cómo distribuyen el peso visual en 24×24.
3. Recién entonces decide **qué simplificar**: un ícono a 24 px no puede tener todos los detalles del objeto real; conserva sólo los rasgos que lo hacen reconocible de un vistazo.

---

## 3. Área de dibujo y márgenes

- Dibuja dentro del lienzo de **24×24**, pero deja un **margen de seguridad**: la mayoría de los íconos viven cómodamente dentro de un área de **~20×20** (aprox. 2 px de aire por lado).
- El trazo nunca debe tocar el borde del lienzo salvo que el concepto lo exija (p. ej. una línea que representa un horizonte).
- Centra ópticamente, no matemáticamente. Un ícono puede estar centrado por coordenadas y aun así verse desbalanceado; ajústalo a ojo hasta que "pese" en el centro.
- Mantén la **consistencia de tamaño percibido** entre íconos: un ícono simple (una estrella) y uno complejo (una bandeja paisa) deben ocupar aproximadamente la misma caja visual, para que en una galería no se vean unos gigantes y otros diminutos.

---

## 4. Reglas de trazo y forma

- **Un solo grosor:** todo se dibuja a 1.5 px. No mezcles grosores para "dar jerarquía".
- **Alinea al pixel grid** cuando sea posible: líneas rectas horizontales/verticales sobre coordenadas enteras o medias (.5) para que se vean nítidas.
- **Radios de esquina** coherentes y suaves — el estilo del set es redondeado, no de esquinas duras.
- **Simplicidad primero:** menos nodos = mejor. Si puedes representar la idea con menos trazos, hazlo.
- **Sin degradados, sin sombras, sin doble contorno, sin texto** dentro del ícono.
- **Expande los trazos a contornos sólo si es necesario** para la geometría; el resultado final debe seguir exportándose como líneas con `stroke`, no como formas rellenas.
- Evita detalles más pequeños que ~2 px: desaparecen al renderizar el ícono a 16 px.

---

## 5. Naming del archivo

- Nombre en **`kebab-case`**, en **español**, descriptivo: `sombrero-vueltiao.svg`, `taza-de-tinto.svg`, `usuario-agregar.svg`.
- Sólo minúsculas, números y guiones. Sin tildes, sin `ñ` (usa `n`), sin espacios, sin mayúsculas.
- El nombre debe describir el objeto, no su uso hipotético (`candado.svg`, no `seguridad.svg`).
- Guarda el archivo en la carpeta de su **categoría**:
  `icons/svg/<categoria>/<id>.svg`

Categorías válidas: `naturaleza`, `cultura`, `gastronomia`, `mapas`, `deportes`, `genericos`.

---

## 6. Estructura del SVG exportado

El SVG debe quedar **exactamente** con esta forma (mismo orden de atributos, todo el estilo en el `<svg>` raíz, geometría en `<path>`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5V19M5 12H19"/>
</svg>
```

Reglas de esta plantilla:

- Los atributos de estilo (`stroke`, `stroke-width`, `linecap`, `linejoin`, `fill="none"`) van en el `<svg>` raíz, **no repetidos** en cada `<path>`.
- Preferir **un solo `<path>`** cuando sea posible; se pueden usar varios sub-paths dentro de un mismo `d` separados por un nuevo comando `M`.
- **Prohibido** dentro del SVG final:
  - `fill="#..."` o cualquier color fijo (el color siempre es `currentColor`)
  - `id`, `class`, `<style>`, `data-*`
  - `<title>`, `<desc>`, metadata del editor
  - `transform` innecesarios (aplana las transformaciones antes de exportar)
  - `width`/`height` distintos de 24, o `viewBox` distinto de `0 0 24 24`

> ⚠️ Los editores gráficos suelen exportar SVG "sucio" (con `id`, `style`, transforms, y a veces `fill` fijo). Siempre pasa por el paso de optimización de la sección 7 antes de considerarlo terminado.

---

## 7. Optimización con SVGO

Antes de entregar, optimiza el SVG. La forma rápida sin instalar nada permanente:

```bash
npx svgo icons/svg/<categoria>/<id>.svg
```

Después de optimizar, **verifica a mano** que el resultado siga cumpliendo la sección 6 (a veces SVGO deja o convierte cosas): que el color sea `currentColor`, que `fill="none"`, que no haya `id`/`style`, y que el `viewBox` siga siendo `0 0 24 24`.

---

## 8. Verificación antes de entregar (checklist)

- [ ] Lienzo `24×24`, `viewBox="0 0 24 24"`
- [ ] Estilo outline, **sin rellenos sólidos**
- [ ] Grosor **1.5 px** uniforme en todo el ícono
- [ ] `stroke="currentColor"` y `fill="none"`
- [ ] `stroke-linecap="round"` y `stroke-linejoin="round"`
- [ ] Márgenes de seguridad respetados (no toca los bordes sin razón)
- [ ] Tamaño percibido coherente con el resto del set
- [ ] Se ve nítido y reconocible **también a 16 px**
- [ ] Estilo de estilo (atributos en el `<svg>` raíz, un `<path>` si es posible)
- [ ] Sin `id`, `class`, `style`, metadata ni transforms innecesarios
- [ ] Nombre en `kebab-case` sin tildes ni `ñ`, en la carpeta de su categoría
- [ ] Optimizado con SVGO y re-verificado a mano
- [ ] **Prueba de color:** al cambiar el `color` CSS del contenedor, el ícono cambia de color por completo (confirma que no quedó ningún color fijo)

---

## 9. Prueba rápida de renderizado

Para verificar que el ícono realmente hereda el color y se ve bien en distintos fondos, pégalo en un HTML mínimo:

```html
<div style="color:#003893; font-size:0; padding:24px">
  <!-- pega aquí el contenido del <svg> -->
</div>
```

Cambia el `color` a negro `#000000`, gris `#6B7280`, amarillo `#FCD116`, azul `#003893` y rojo `#CE1126` (los 5 colores soportados por el sitio) y confirma que el ícono responde a todos.

---

## 10. Entrega y flujo de aprobación

1. Coloca el `.svg` final en `icons/svg/<categoria>/<id>.svg`.
2. El ícono entra al **flujo de revisión ícono por ícono** (ver `CLAUDE.md`, sección 11): se registra en `icons/manifest.json` con `estado: pendiente` y su `historial`.
3. Se revisa **uno a la vez**. La respuesta puede ser:
   - **Aprobado** → pasa a `estado: aprobado` y se agrega a `README.md` / `README.es.md`.
   - **Feedback** → se ajusta el mismo ícono y se vuelve a mostrar (sube `intentos`).
   - **Rechazado, saltar** → queda `rechazado` para retomarlo después.
4. **Prioridad: calidad sobre velocidad.** No se aprueban íconos en lote. Un ícono no entra a los paquetes hasta estar `aprobado`.

---

## 11. Errores comunes a evitar

- Exportar con `fill` fijo en negro (el ícono no responderá al color del proyecto).
- Dejar el grosor por defecto del editor (1 px o 2 px) en vez de 1.5 px.
- Mezclar terminaciones rectas y redondeadas.
- Íconos que tocan el borde y se ven "apretados" comparados con el resto.
- Demasiado detalle: se ve bien a 48 px pero se vuelve una mancha a 16 px.
- Nombres con tildes, `ñ`, mayúsculas o espacios.
- Dejar `id`, `class` o `transform` del editor en el SVG final.
