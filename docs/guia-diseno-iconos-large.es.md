# Guía de diseño de íconos grandes (48×48) — colombia-icons

> 🇬🇧 English version: [large-icon-design-guide.md](./large-icon-design-guide.md)
> 📐 Set base (24×24): [guia-diseno-iconos.es.md](./guia-diseno-iconos.es.md)

Esta guía define los estándares para el set **large-icons**: íconos de `colombia-icons` dibujados sobre un lienzo de **48×48 px**, pensados para mostrarse en tamaño grande y con **más detalle** que el set base de 24×24. Es un set **independiente**: vive en `icons/large-icons/`, tiene su propio manifest, y **no reutiliza** los SVG del set base.

El objetivo es el mismo que en el set base: que cualquier diseñador pueda construir un ícono indistinguible del resto del set large — mismo grid, mismo grosor, mismo estilo — en la herramienta de su preferencia (Figma, Illustrator, Inkscape, Boxy SVG, etc.).

La regla de oro no cambia: **`icons/large-icons/` es la única fuente de verdad de este set.** Un ícono no existe hasta que su SVG cumple esta guía y queda aprobado. Nunca se dibuja directamente dentro de `packages/*` ni de `apps/site`.

---

## 1. Especificación técnica (obligatoria)

Todo ícono del set large debe cumplir exactamente esto:

| Parámetro | Valor | Notas |
|---|---|---|
| **Grid / lienzo** | `48 × 48 px` | `viewBox="0 0 48 48"` — exactamente 2× el grid base |
| **Estilo** | Line icon / outline | Sólo contornos, nunca relleno sólido — misma familia que el set base |
| **Grosor de línea principal** | `1.5 px` | Idéntico en todo el trazo principal y en todo el set |
| **Grosor de detalle secundario** | `1 px` (opcional) | Sólo para detalle interior fino (texturas, líneas de apoyo). No abusar |
| **Color** | `stroke="currentColor"` | Hereda el color por CSS del proyecto consumidor |
| **Relleno** | `fill="none"` | Ningún `fill` de color fijo |
| **Terminaciones** | `stroke-linecap="round"` | Puntas redondeadas |
| **Uniones** | `stroke-linejoin="round"` | Esquinas redondeadas |
| **Formato** | SVG optimizado (SVGO) | Sin metadata, sin IDs, sin `<style>`, sin transforms innecesarios |

**Por qué 1.5 px en un lienzo de 48 y no 3 px:** lo que define el "peso" visual de un ícono es el grosor **relativo** al grid (grosor ÷ lienzo), no el número absoluto.

| Grosor @ 48 | Peso relativo | Resultado |
|---|---|---|
| 3 px | 1/16 | Idéntico al set base, sólo "inflado" — no gana detalle |
| 2 px | 1/24 | Refinado, detalle medio |
| **1.5 px** ✅ | **1/32** | **Trazo fino: máximo espacio para detalle interior** |

Mantener 1.5 px (la mitad del peso relativo del base) deja respirar el detalle interior — plumas, granos, el tejido de un sombrero vueltiao — sin que las líneas se empasten. Ese es el propósito del set large.

Estos valores **no son negociables por ícono**: si algo obliga a cambiarlos, es un cambio global de spec que se discute aparte, no una excepción local.

---

## 2. Cuándo hacer un ícono large (y cuándo no)

El set large **no** es "el set base más grande". Un ícono merece versión large sólo si el tamaño extra se aprovecha con detalle real. Antes de dibujar, pregúntate:

- ¿El objeto tiene **textura o detalle** que a 24 px se pierde pero a 48 px enriquece? (plumas del cóndor, tejido de la mochila wayuu, granos del café) → **sí, buen candidato**.
- ¿Es una forma simple (una flecha, un check, un cuadrado)? → probablemente **no** aporta nada en large; deja que el set base lo cubra.
- Un ícono large puede **no tener equivalente** en el set base, y viceversa. Los dos sets son independientes.

> ⚠️ El set large **no copia** los SVG del set base. Aunque un ícono se llame igual (`condor.svg` existe en ambos), el archivo del set large se **redibuja desde cero** para 48×48, no se escala el de 24×24.

---

## 3. Antes de dibujar: buscar referencias

**No diseñes de memoria.** Antes del primer trazo:

1. Busca **el objeto real** (fotos, cómo se ve de verdad un frailejón, un acordeón vallenato, un cóndor). Un ícono reconocible parte de la forma real, no de una idea aproximada.
2. Mira **cómo lo resuelven sets de referencia** de estilo line-icon — principalmente [Lucide](https://lucide.dev) y [Tabler Icons](https://tabler.io/icons). En el set large, fíjate especialmente en **cuánto detalle interior** admiten sin volverse ruido.
3. Recién entonces decide **qué detalle agregar**: a diferencia del set base, aquí sí puedes conservar rasgos secundarios — pero elige los que refuerzan el reconocimiento, no todos los que existen.

---

## 4. Área de dibujo y márgenes

- Dibuja dentro del lienzo de **48×48**, dejando un **margen de seguridad**: la mayoría de los íconos viven cómodamente dentro de un área de **~40×40** (aprox. 4 px de aire por lado — el doble del set base).
- El trazo nunca debe tocar el borde del lienzo salvo que el concepto lo exija (p. ej. una línea que representa un horizonte).
- Centra **ópticamente, no matemáticamente**. Un ícono puede estar centrado por coordenadas y aun así verse desbalanceado; ajústalo a ojo hasta que "pese" en el centro.
- Mantén la **consistencia de tamaño percibido** entre íconos del set large: un ícono simple y uno complejo deben ocupar aproximadamente la misma caja visual, para que en una galería no se vean unos gigantes y otros diminutos.

---

## 5. Reglas de trazo y forma

- **Grosor principal uniforme:** todo el trazo estructural se dibuja a **1.5 px**. No mezcles grosores en el trazo principal para "dar jerarquía".
- **Detalle secundario a 1 px (opcional):** sólo para texturas o líneas de apoyo internas (venas de una hoja, líneas de un tejido). Es la única excepción al grosor único, y debe usarse con moderación — si un ícono necesita mucho 1 px, probablemente está sobrecargado.
- **Tamaño mínimo de detalle:** evita rasgos más pequeños que **~1.5 px**. Como el set se muestra grande (ver sección 6), el detalle fino sí se aprecia, pero por debajo de eso se vuelve mancha.
- **Alinea al pixel grid** cuando sea posible: líneas rectas horizontales/verticales sobre coordenadas enteras o medias (.5) para que se vean nítidas.
- **Radios de esquina** coherentes y suaves — el estilo del set es redondeado, no de esquinas duras.
- **Simplicidad dentro del detalle:** más detalle que el set base no significa "todos los nodos posibles". Cada trazo debe justificar su presencia.
- **Sin degradados, sin sombras, sin doble contorno, sin relleno sólido, sin texto** dentro del ícono. El set large sigue siendo **line-icon**, no ilustración ni duotono.

---

## 6. Tamaño de uso previsto

- El set large está pensado para mostrarse **grande: ≥ 40 px en pantalla** (encabezados, tarjetas destacadas, empty states, hero de sección).
- **No** está pensado para tamaños pequeños. A 1.5 px sobre 48 px el trazo es fino y delicado; si se encoge a 16–24 px se ve frágil. Para tamaños pequeños se usa el **set base de 24×24**.
- Al revisar un ícono large, evalúalo **al tamaño grande en el que se usará**, no reducido.

---

## 7. Naming del archivo

- Nombre en **`kebab-case`**, en **español**, descriptivo: `condor.svg`, `sombrero-vueltiao.svg`, `mochila-wayuu.svg`.
- Sólo minúsculas, números y guiones. Sin tildes, sin `ñ` (usa `n`), sin espacios, sin mayúsculas.
- El nombre describe el objeto, no su uso hipotético.
- **Sin sufijo de tamaño** (`condor.svg`, no `condor-48.svg`): la carpeta `large-icons/` ya identifica el set. Esto permite mapear fácilmente base ↔ large cuando existe el mismo ícono en ambos.
- Guarda el archivo en la carpeta de su **categoría**, dentro del set large:
  `icons/large-icons/<categoria>/<id>.svg`

Categorías válidas (espejo del set base): `naturaleza`, `cultura`, `gastronomia`, `mapas`, `deportes`, `genericos`. No es obligatorio llenar todas — el set large sólo incluye los íconos que aportan en tamaño grande (sección 2).

---

## 8. Estructura del SVG exportado

El SVG debe quedar **exactamente** con esta forma (mismo orden de atributos, todo el estilo del trazo principal en el `<svg>` raíz, geometría en `<path>`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M24 10V38M10 24H38"/>
</svg>
```

Si usas detalle secundario a **1 px**, ponlo en un `<path>` aparte con su propio `stroke-width="1"` (única excepción a "todo el estilo en el raíz"):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="..."/>                          <!-- trazo principal, 1.5px hereda del raíz -->
  <path stroke-width="1" d="..."/>          <!-- detalle secundario, 1px -->
</svg>
```

Reglas de esta plantilla:

- Los atributos de estilo del trazo principal (`stroke`, `stroke-width="1.5"`, `linecap`, `linejoin`, `fill="none"`) van en el `<svg>` raíz.
- El **único** override permitido por `<path>` es `stroke-width="1"` para detalle secundario. Nada más se repite ni se sobreescribe.
- Preferir **el menor número de paths** posible; se pueden usar varios sub-paths dentro de un mismo `d` separados por un nuevo comando `M`.
- **Prohibido** dentro del SVG final:
  - `fill="#..."` o cualquier color fijo (el color siempre es `currentColor`)
  - `id`, `class`, `<style>`, `data-*`
  - `<title>`, `<desc>`, metadata del editor
  - `transform` innecesarios (aplana las transformaciones antes de exportar)
  - `width`/`height` distintos de 48, o `viewBox` distinto de `0 0 48 48`

> ⚠️ Los editores gráficos suelen exportar SVG "sucio" (con `id`, `style`, transforms, y a veces `fill` fijo). Siempre pasa por el paso de optimización de la sección 9 antes de considerarlo terminado.

---

## 9. Optimización con SVGO

Antes de entregar, optimiza el SVG. La forma rápida sin instalar nada permanente:

```bash
npx svgo icons/large-icons/<categoria>/<id>.svg
```

Después de optimizar, **verifica a mano** que el resultado siga cumpliendo la sección 8: que el color sea `currentColor`, que `fill="none"`, que no haya `id`/`style`, que el `viewBox` siga siendo `0 0 48 48`, y que SVGO **no haya colapsado** el `stroke-width="1"` del detalle secundario.

---

## 10. Verificación antes de entregar (checklist)

- [ ] Lienzo `48×48`, `viewBox="0 0 48 48"`
- [ ] Estilo outline, **sin rellenos sólidos**
- [ ] Grosor principal **1.5 px** uniforme; detalle secundario sólo a 1 px y con moderación
- [ ] `stroke="currentColor"` y `fill="none"`
- [ ] `stroke-linecap="round"` y `stroke-linejoin="round"`
- [ ] Márgenes de seguridad respetados (~4 px, no toca los bordes sin razón)
- [ ] El detalle **aprovecha** el tamaño 48 (si no, quizá debería ser sólo set base)
- [ ] Tamaño percibido coherente con el resto del set large
- [ ] Se ve nítido y equilibrado **al tamaño grande de uso (≥40 px)**
- [ ] Atributos de estilo en el `<svg>` raíz; único override permitido: `stroke-width="1"`
- [ ] Sin `id`, `class`, `style`, metadata ni transforms innecesarios
- [ ] Nombre en `kebab-case` sin tildes ni `ñ`, sin sufijo de tamaño, en la carpeta de su categoría dentro de `large-icons/`
- [ ] Optimizado con SVGO y re-verificado a mano
- [ ] **Prueba de color:** al cambiar el `color` CSS del contenedor, el ícono cambia de color por completo (confirma que no quedó ningún color fijo)

---

## 11. Prueba rápida de renderizado

Para verificar que el ícono hereda el color y se ve bien en distintos fondos, pégalo en un HTML mínimo, **al tamaño grande de uso**:

```html
<div style="color:#003893; width:64px; height:64px">
  <!-- pega aquí el contenido del <svg> (ocupará 64px de ancho) -->
</div>
```

Cambia el `color` a negro `#000000`, gris `#6B7280`, amarillo `#FCD116`, azul `#003893` y rojo `#CE1126` (los 5 colores soportados por el sitio) y confirma que el ícono responde a todos.

---

## 12. Entrega y flujo de aprobación

1. Coloca el `.svg` final en `icons/large-icons/<categoria>/<id>.svg`.
2. El ícono entra al **flujo de revisión ícono por ícono** (ver `CLAUDE.md`, sección 11), pero registrado en el **manifest propio del set large**: `icons/large-icons/manifest.json`, con `estado: pendiente` y su `historial`.
3. Se revisa **uno a la vez**. La respuesta puede ser:
   - **Aprobado** → pasa a `estado: aprobado`.
   - **Feedback** → se ajusta el mismo ícono y se vuelve a mostrar (sube `intentos`).
   - **Rechazado, saltar** → queda `rechazado` para retomarlo después.
4. **Prioridad: calidad sobre velocidad.** No se aprueban íconos en lote.

---

## 13. Errores comunes a evitar

- Escalar el SVG del set base a 48 px en vez de **redibujarlo** con detalle propio (queda "inflado", no detallado).
- Usar 3 px de grosor "porque el lienzo es más grande" — pierde todo el propósito del set (ver sección 1).
- Abusar del detalle a 1 px hasta convertir el ícono en una maraña de líneas.
- Convertir el ícono en ilustración: rellenos, duotono, sombras. El set large **sigue siendo line-icon**.
- Diseñar y revisar el ícono reducido a 16–24 px, cuando su uso real es ≥40 px.
- Exportar con `fill` fijo en negro (el ícono no responderá al color del proyecto).
- Nombres con tildes, `ñ`, mayúsculas, espacios o sufijo `-48`.
- Dejar `id`, `class` o `transform` del editor en el SVG final.
