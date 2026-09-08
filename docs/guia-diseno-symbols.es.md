# Guía de diseño de symbols (64×64) — colombia-icons

> 🇬🇧 English version: [symbol-design-guide.md](./symbol-design-guide.md)
> 📐 Set base (24×24): [guia-diseno-iconos.es.md](./guia-diseno-iconos.es.md)
> 🔎 Set grande (48×48): [guia-diseno-iconos-large.es.md](./guia-diseno-iconos-large.es.md)

Esta guía define los estándares del set **symbols**: piezas gráficas de `colombia-icons` dibujadas sobre un lienzo de **64×64 px**, pensadas para **representar** fauna, flora, cultura y paisaje colombiano, no para operar una interfaz. Es un set **independiente**: vive en `icons/symbols/`, tiene su propio manifest, y **no reutiliza** los SVG del set base ni los del set large.

El objetivo es tener una familia de símbolos de Colombia con suficiente tamaño para conservar rasgos reconocibles del referente real, **sin llegar a la ilustración detallada o realista**. Se usan en diapositivas, infografías, mapas, fichas, colecciones y piezas gráficas (Canva, Figma, PowerPoint, Keynote), donde un ícono de 24 px se queda corto.

La regla de oro no cambia: **`icons/symbols/` es la única fuente de verdad de este set.** Un symbol no existe hasta que su SVG cumple esta guía y queda aprobado. Nunca se dibuja directamente dentro de `packages/*` ni de `apps/site`.

---

## 1. Ícono vs. symbol: cuál estás dibujando

Antes de abrir el editor, ten claro en cuál de los dos lenguajes estás trabajando. No son el mismo dibujo a distinto tamaño.

| Criterio | Íconos (24 / 48) | Symbols (64) |
|---|---|---|
| **Función** | Acción, navegación, interacción del usuario | Representación cultural, natural o territorial |
| **Escala principal** | 16–24 px (48 px el set large) | 64 × 64 px |
| **Detalle** | Muy bajo | Medio, controlado |
| **Reconocimiento** | Forma genérica | Rasgos propios del referente real |
| **Trazos internos** | Muy pocos | Permitidos si aportan identidad |
| **Uso** | UI y controles | Colecciones, mapas, fichas, sistemas visuales, piezas gráficas, infografías |

Si lo que dibujas es un *guardar*, un *buscar* o una *flecha*, es un ícono del set base: no pertenece a symbols. Si es un cóndor, un frailejón, una máscara del Carnaval de Barranquilla o la Sierra Nevada, es un symbol.

---

## 2. Especificación técnica (obligatoria)

Todo symbol debe cumplir exactamente esto:

| Parámetro | Valor | Notas |
|---|---|---|
| **Grid / lienzo** | `64 × 64 px` | `viewBox="0 0 64 64"` |
| **Margen visual** | `6 px` aprox. | El symbol nunca toca los límites del lienzo |
| **Área útil** | `≈ 52 × 52 px` | Puede variar levemente según la forma del referente |
| **Estilo** | Line / outline | Sólo contornos — misma familia que los otros dos sets |
| **Peso de línea** | `2 px` | **Único** peso en todo el symbol y en todo el set (ver 2.1) |
| **Color** | `currentColor` | En `stroke` o en `fill` según la forma de entrega (ver 2.1) |
| **Terminaciones y uniones** | redondeadas | `round` en el trazo vivo; dibujadas en el contorno si va expandido |
| **Formato** | SVG optimizado (SVGO) | Editable y escalable, sin metadata ni IDs |

**Por qué 2 px y no 1.5 px:** lo que define el "peso" visual de una pieza es el grosor **relativo** al lienzo (grosor ÷ lienzo), no el número absoluto.

| Set | Lienzo | Grosor | Peso relativo |
|---|---|---|---|
| base | 24 | 1.5 px | 1/16 |
| large | 48 | 1.5 px | 1/32 |
| **symbols** | **64** | **2 px** ✅ | **1/32** |

2 px sobre 64 da **exactamente el mismo peso relativo** que el set large: los tres sets se leen como una sola familia, y el symbol conserva aire suficiente para su detalle interior. Un trazo de 1.5 px a 64 px (1/42) se vería frágil junto al resto; 3 px empastaría el detalle.

> ⚠️ **Un solo peso.** A diferencia del set large, aquí **no** existe un trazo secundario más fino. Si un detalle sólo funciona adelgazando la línea, ese detalle sobra.

Estos valores **no son negociables por symbol**: si algo obliga a cambiarlos, es un cambio global de spec que se discute aparte, no una excepción local.

### 2.1 Dos formas de entrega: trazo vivo y contorno expandido

El peso de 2 px puede llegar de dos maneras. **Las dos son válidas**, pero no son equivalentes:

**Forma A — trazo vivo (preferida).** La línea sigue siendo un `stroke`:

- `stroke="currentColor"`, `fill="none"`, `stroke-width="2"`
- `stroke-linecap="round"` y `stroke-linejoin="round"`
- El grosor queda **editable**: se puede reajustar todo el set con un cambio de atributo.

**Forma B — contorno expandido (aceptada).** El trazo se expandió a contorno antes de exportar, que es lo que producen Illustrator y Affinity al hacer *expand stroke*:

- `fill="currentColor"` y `fill-rule="evenodd"` en el `<svg>` raíz; **sin** `stroke`
- Las terminaciones y uniones redondeadas quedan **dibujadas dentro del contorno** — no hay `linecap` que las controle, así que tienen que estar bien desde el editor
- El peso visual debe medir **≈2 px sobre el lienzo de 64**, y ser el mismo en todos los symbols del set

> ⚠️ **En la forma B el grosor queda congelado.** Recuperar la línea central de un contorno expandido no es una conversión: es rediseñar el symbol. Por eso el peso tiene que salir correcto desde la entrega, y por eso conviene que el diseñador conserve el archivo original con el trazo vivo aunque entregue el expandido.

Lo que **no** cambia entre las dos formas: `currentColor` (nunca un color fijo), el lienzo, los márgenes, la regla de respiración y el nivel de detalle.

---

## 3. Antes de dibujar: buscar referencias

**No diseñes de memoria.** Antes del primer trazo:

1. Busca **el objeto real** (fotos: cómo se ve de verdad un frailejón, un acordeón vallenato, una mochila wayuu, un cóndor de los Andes). Un symbol reconocible parte de la forma real, no de una idea aproximada. Esto pesa más aquí que en el set base: el symbol se juzga precisamente por sus rasgos propios.
2. Mira **cómo lo resuelven sets de referencia** de estilo line — principalmente [Lucide](https://lucide.dev) y [Tabler Icons](https://tabler.io/icons) — para calibrar **cuánto detalle interior** admite una línea sin volverse ruido.
3. Recién entonces decide **qué conservar**: aquí sí puedes mantener rasgos secundarios, pero eliges los que refuerzan el reconocimiento, no todos los que existen.

---

## 4. Área de dibujo y márgenes

- Dibuja dentro del lienzo de **64×64** dejando **~6 px de aire por lado**: el symbol vive cómodamente en un área de **~52 × 52**.
- El trazo **nunca** debe tocar el borde del lienzo, salvo que el concepto lo exija (por ejemplo, una línea que representa un horizonte).
- Centra **ópticamente, no matemáticamente**. Un symbol puede estar centrado por coordenadas y verse desbalanceado; ajústalo a ojo hasta que "pese" en el centro.
- Mantén la **consistencia de tamaño percibido** entre symbols: uno simple y uno complejo deben ocupar aproximadamente la misma caja visual, para que en una galería o en una diapositiva no se vean unos gigantes y otros diminutos.
- **No llenes el lienzo.** El espacio negativo es parte del diseño.

---

## 5. Regla de trazo y respiración

La legibilidad depende tanto del grosor como del **espacio entre líneas**. En 64 × 64 se prioriza el aire visual: las líneas no deben pegarse por obligación ni formar masas oscuras.

- Mantén un **único grosor** (2 px) en toda la familia.
- **Separa** contorno, rasgos internos y elementos secundarios cuando su unión no sea necesaria.
- Evita **intersecciones o encuentros de tres o más líneas** en espacios pequeños.
- Usa **cortes intencionales**: deja que el ojo complete la forma en vez de cerrar cada contorno.
- **Distancia mínima entre trazos independientes: 3 px**; preferible **4 px** cuando el detalle lo permita.
- No conviertas "un solo trazo" en una obligación visual. Un symbol puede tener **varios subtrazos separados** si eso mejora el reconocimiento.
- **Alinea al pixel grid** cuando sea posible: rectas horizontales/verticales sobre coordenadas enteras o medias (.5) para que se vean nítidas.
- **Radios de esquina** coherentes y suaves — el estilo del set es redondeado, no de esquinas duras.

---

## 6. Nivel de detalle

El lienzo de 64 × 64 permite recuperar detalles que a 24 × 24 había que eliminar. Aun así, el symbol **sigue siendo una abstracción**. Cada detalle responde a una sola pregunta: *¿ayuda a reconocer el referente?*

- **Prioridad 1 — silueta general.** Debe funcionar incluso antes de mirar los detalles internos. Si la silueta no se reconoce, ningún detalle interior la salva.
- **Prioridad 2 — rasgos identificadores.** Orejas, pico, cresta, hojas, nieve, frutos, patrones culturales: lo que hace que ese referente sea ése y no otro.
- **Prioridad 3 — detalle secundario.** Sólo se agrega si **no compite** con los rasgos principales.

Evita **texturas, sombreado, rayado, tramas y microdetalles decorativos**. Nada de degradados, sombras, doble contorno, relleno sólido, duotono ni texto dentro del symbol: el set sigue siendo **line**, no ilustración.

---

## 7. Tamaño de uso previsto

- El set symbols está pensado para mostrarse **grande: ≥ 64 px** (diapositivas, infografías, mapas, tarjetas, portadas de sección, piezas gráficas).
- Debe **seguir siendo comprensible a 32 px**, aunque ése no sea su uso principal. Si a 32 px se convierte en mancha, tiene demasiado detalle.
- **No** está pensado para 16–24 px: para tamaños pequeños se usa el **set base de 24×24**.
- Al revisar un symbol, evalúalo **al tamaño grande en el que se usará** — y luego una vez a 32 px como prueba de estrés.

---

## 8. Naming del archivo

- Nombre en **`kebab-case`**, en **español**, en minúsculas y **sin tildes** ni `ñ` (usa `n`). Sin espacios, sin mayúsculas.
- El nombre **describe el referente real**, y aquí puede ser más específico que en el set base, porque el symbol nombra un objeto concreto y no una acción de UI:
  `condor-de-los-andes.svg`, `sierra-nevada-santa-marta.svg`, `mascara-carnaval-barranquilla.svg`.
- **Sin sufijo de tamaño** (`condor-de-los-andes.svg`, no `condor-64.svg`): la carpeta `symbols/` ya identifica el set.
- Guarda el archivo en la carpeta de su **categoría**, dentro del set symbols:
  `icons/symbols/<categoria>/<id>.svg`

Categorías válidas: `naturaleza`, `cultura`, `gastronomia`, `mapas`, `urbano`, `historia`, `deportes`. **`genericos` no aplica a este set**: los genéricos son íconos de interfaz y viven en el set base (ver sección 1).

---

## 9. Estructura del SVG exportado

El SVG debe quedar **exactamente** con una de estas dos formas (mismo orden de atributos, todo el estilo en el `<svg>` raíz, geometría en `<path>`):

```svg
<!-- Forma A — trazo vivo -->
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 12V52M12 32H52"/>
</svg>
```

```svg
<!-- Forma B — contorno expandido -->
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="currentColor" fill-rule="evenodd">
  <path d="…"/>
</svg>
```

Reglas de estas plantillas:

- Los atributos de estilo van en el `<svg>` raíz y **no se sobreescriben** en ningún `<path>`. En este set no hay excepciones de peso (sección 2).
- No mezcles las dos formas dentro de un mismo archivo: o todo es `stroke`, o todo es contorno relleno.
- Prefiere **el menor número de paths** posible; puedes usar varios subtrazos dentro de un mismo `d` separados por un nuevo comando `M`.
- **Prohibido** dentro del SVG final:
  - `fill="#..."` o cualquier color fijo (el color siempre es `currentColor`)
  - `id`, `class`, `<style>`, `data-*`
  - `<title>`, `<desc>`, metadata del editor
  - `transform` innecesarios (aplana las transformaciones antes de exportar)
  - `width`/`height` distintos de 64, o `viewBox` distinto de `0 0 64 64`

> ⚠️ Los editores gráficos suelen exportar SVG "sucio" (con `id`, `style`, transforms y a veces `fill` fijo). Siempre pasa por el paso de optimización de la sección 10 antes de considerarlo terminado.

---

## 10. Optimización con SVGO

Antes de entregar, optimiza el SVG. La forma rápida sin instalar nada permanente:

```bash
npx svgo icons/symbols/<categoria>/<id>.svg
```

Después de optimizar, **verifica a mano** que el resultado siga cumpliendo la sección 9: color `currentColor`, sin `id`/`style`, `viewBox` `0 0 64 64`, y —según la forma— `stroke-width="2"` intacto (forma A) o `fill-rule="evenodd"` intacto (forma B; sin él, los huecos interiores se rellenan y el symbol se convierte en una mancha).

Si necesitas versiones raster, expórtalas **desde el SVG maestro** a 64, 128 y 256 px, sin modificar el dibujo. (El sitio ya ofrece la descarga PNG generada al vuelo desde el mismo SVG.)

---

## 11. Prueba rápida de renderizado

Para verificar que el symbol hereda el color y se ve bien en distintos fondos, pégalo en un HTML mínimo, **al tamaño grande de uso**:

```html
<div style="color:#003893; width:96px; height:96px">
  <!-- pega aquí el contenido del <svg> (ocupará 96px de ancho) -->
</div>
```

Cambia el `color` a negro `#000000`, gris `#6B7280`, amarillo `#FCD116`, azul `#003893` y rojo `#CE1126` (los 5 colores soportados por el sitio) y confirma que el symbol responde a todos. Repite la vista a **32 px** para la prueba de estrés de la sección 7.

---

## 12. Lista de control antes de aprobar un symbol

- [ ] ¿Se **reconoce el referente** sin leer su nombre?
- [ ] ¿La **silueta** conserva los rasgos principales del objeto, animal, planta o paisaje real?
- [ ] Lienzo `64×64`, `viewBox="0 0 64 64"`, margen de ~6 px respetado (no toca los bordes)
- [ ] Peso **2 px uniforme**, sin ningún override; mismo peso que el resto del set
- [ ] Estilo outline: la figura se lee como línea, **no** como silueta maciza, y sin texturas, sombras ni degradados
- [ ] Color en `currentColor` — `stroke` (forma A) o `fill` (forma B), nunca un hex fijo
- [ ] Terminaciones y uniones redondeadas: por `linecap`/`linejoin` (A) o dibujadas en el contorno (B)
- [ ] Separación mínima de **3 px** (idealmente 4) entre trazos independientes; sin nudos de 3+ líneas
- [ ] Se lee bien a **64 px** y **sigue siendo comprensible a 32 px**
- [ ] Tamaño percibido coherente con el resto del set symbols
- [ ] SVG limpio: sin `id`, `class`, `style`, metadata ni transforms innecesarios
- [ ] Nombre en `kebab-case` sin tildes ni `ñ`, sin sufijo de tamaño, en la carpeta de su categoría dentro de `symbols/`
- [ ] Optimizado con SVGO y re-verificado a mano
- [ ] **Prueba de color:** al cambiar el `color` CSS del contenedor, el symbol cambia por completo (confirma que no quedó ningún color fijo)
- [ ] La abstracción **se siente coherente** con los demás symbols de Colombia

---

## 13. Entrega y flujo de aprobación

1. Coloca el `.svg` final en `icons/symbols/<categoria>/<id>.svg`.
2. El symbol entra al **flujo de revisión uno por uno** (ver `CLAUDE.md`, sección 11), pero registrado en el **manifest propio del set**: `icons/symbols/manifest.json`, con `estado: pendiente` y su `historial`.
3. Se revisa **uno a la vez**. La respuesta puede ser:
   - **Aprobado** → pasa a `estado: aprobado` y aparece en la galería del sitio.
   - **Feedback** → se ajusta el mismo symbol y se vuelve a mostrar (sube `intentos`).
   - **Rechazado, saltar** → queda `rechazado` para retomarlo después.
4. **Prioridad: calidad sobre velocidad.** No se aprueban symbols en lote.

> Por ahora el set symbols **no viaja en los paquetes** de React, Angular ni Blazor: se usa descargando el SVG o el PNG desde el sitio.

---

## 14. Errores comunes a evitar

- Escalar un ícono del set base o del set large a 64 px en vez de **redibujarlo**: queda "inflado", no detallado.
- Dibujar un **ícono de interfaz** (guardar, buscar, flecha) como symbol. Ese es el set base (sección 1).
- Mezclar pesos "para dar jerarquía". En este set el peso es uno solo: **2 px**.
- Entregar el contorno expandido (forma B) con un peso distinto al del resto del set: ahí ya no se puede corregir con un atributo, hay que rediseñar.
- Pegar las líneas hasta formar masas oscuras, o cruzar 3+ trazos en un espacio de pocos píxeles.
- Convertirlo en ilustración: texturas, rayados, sombras, duotono, relleno sólido.
- Llenar el lienzo hasta el borde: el margen de 6 px es parte de la spec.
- Diseñar y revisar el symbol reducido a 16–24 px, cuando su uso real es ≥ 64 px.
- Exportar con `fill` fijo en negro (no responderá al color del proyecto).
- Nombres con tildes, `ñ`, mayúsculas, espacios o sufijo `-64`.
- Dejar `id`, `class` o `transform` del editor en el SVG final.
