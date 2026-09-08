---
name: nuevo-icono
description: Flujo completo para crear, revisar y aprobar una pieza de colombia-icons — ícono del set base (24×24), ícono grande (48×48) o symbol (64×64). Úsalo SIEMPRE que se vaya a generar, rediseñar o revisar una de esas piezas — el usuario diga "sigamos con los íconos", "generá el ícono X", "hagamos el symbol X", "sigamos con los symbols", "siguiente ícono", "aprobado", "rechazado, saltar", o dé feedback sobre algo que le mostraste. También al retomar piezas en estado rechazado.
---

# Crear y aprobar una pieza

Prioridad: **calidad sobre velocidad**. Una pieza a la vez, nunca en lote, y
nunca se avanza a la siguiente sin aprobación explícita de Miguel.

## 0. Primero: ¿de qué set es?

Hay **tres sets independientes**. No son el mismo dibujo a distinto tamaño: no
se escala uno para producir otro, cada uno se dibuja desde cero. Antes de
buscar referencias, confirmá en cuál estás — si el pedido es ambiguo,
preguntale a Miguel en vez de asumir.

| | **base** | **large** | **symbols** |
|---|---|---|---|
| Lienzo | 24 × 24 | 48 × 48 | 64 × 64 |
| Trazo | 1.5 px | 1.5 px (+1 px detalle) | 2 px, único (trazo vivo o contorno expandido) |
| Área útil | ~20 × 20 | ~40 × 40 | ~52 × 52 (margen 6 px) |
| Carpeta | `icons/svg/<cat>/` | `icons/large-icons/<cat>/` | `icons/symbols/<cat>/` |
| Manifest | `icons/manifest.json` | `icons/large-icons/manifest.json` | `icons/symbols/manifest.json` |
| Guía | `docs/guia-diseno-iconos.es.md` | `docs/guia-diseno-iconos-large.es.md` | `docs/guia-diseno-symbols.es.md` |
| ¿Viaja en los paquetes? | **Sí** | No | No |
| ¿Se lista en los READMEs? | **Sí** | No | No |
| Categorías | las 8, incluida `genericos` | las 8 | las 7 — **sin `genericos`** |
| Para qué es | acción, navegación, controles | lo mismo, redibujado con detalle interior | representar fauna, flora, cultura y paisaje: diapositivas, infografías, mapas, piezas gráficas |

Señal para distinguirlos: si es *guardar*, *buscar* o una flecha, es del set
base. Si es un cóndor, un frailejón o una máscara del Carnaval, y se va a usar
grande en una pieza gráfica, es un symbol.

**La guía del set manda.** Este skill es el flujo; la spec completa (márgenes,
separación entre trazos, estructura del SVG exportado, checklist) está en la
guía de cada set. Léela antes de dibujar en un set que no venías trabajando.

## 1. Buscar referencias — antes del primer intento

No diseñes de memoria. Antes de escribir una sola línea de SVG, buscá:

1. **El objeto real** y su rasgo característico — lo que lo hace
   reconocible de un vistazo.
2. **Cómo lo resuelven librerías line-icon establecidas** (Lucide, Tabler)
   para un objeto igual o parecido.

Citá las fuentes al presentar la pieza.

Esto no es opcional ni una reacción a un rechazo. Varios íconos se
rechazaron justamente por saltarse este paso: `arbol-tropical` parecía un
engranaje, al `patacon` le faltaban las grietas del borde, el `chicharron`
no tenía la forma de peine. En los tres casos la búsqueda reveló el rasgo
que faltaba.

En **symbols** pesa todavía más: la pieza se juzga por los rasgos propios del
referente real, no por una silueta genérica. Y el detalle que agregues tiene
que ganarse el lugar — silueta primero, después los rasgos identificadores,
y sólo al final el detalle secundario si no compite con los anteriores.

## 2. Generar el SVG

Spec obligatoria, según el set (tabla de la sección 0). Común a los tres:

- `stroke="currentColor"`, `fill="none"`
- `stroke-linecap="round"` y `stroke-linejoin="round"`
- Todo el estilo en el `<svg>` raíz; sin metadata, sin `id`, sin `class`, sin
  `style`, sin transforms, sin colores fijos
- Nombre de archivo en `kebab-case.svg`, sin tildes ni ñ
  (`sombrero-aguadeno`, no `sombrero-aguadeño`)

Lo que cambia por set:

```svg
<!-- base: icons/svg/<categoria>/<id>.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">

<!-- large: icons/large-icons/<categoria>/<id>.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">

<!-- symbols: icons/symbols/<categoria>/<id>.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
```

En **large** el único override permitido es un `<path stroke-width="1">` para
detalle secundario. En **symbols** no hay overrides: un solo peso, 2 px. Y
respetá su regla de respiración — 6 px de margen, mínimo 3 px (mejor 4) entre
trazos independientes, sin nudos de tres o más líneas.

**Symbols admite dos formas de entrega** (guía, sección 2.1). La de arriba es la
forma A, trazo vivo. La forma B es el **contorno expandido** que producen
Illustrator y Affinity al hacer *expand stroke*, y es la que suele llegar de un
aporte externo:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="currentColor" fill-rule="evenodd">
```

Al normalizar un aporte así: reescalá el `viewBox` a `0 0 64 64` si viene en
otro lienzo, poné `fill="currentColor"` y `fill-rule="evenodd"` en el raíz, sacá
DOCTYPE, `style`, namespaces del editor y cualquier color fijo, y pasalo por
SVGO — verificando que **no se pierda el `fill-rule`**: sin él los huecos
interiores se rellenan y el symbol queda como una mancha. El peso ya no se puede
reajustar por atributo, así que si no está en ≈2 px hay que pedir el archivo de
vuelta, no "arreglarlo".

## 3. Mostrarlo y esperar

Mostrale a Miguel el código SVG y una vista previa renderizada. Después
**pará**. No generes la siguiente, no toques el manifest, no toques los
READMEs.

La preview se hace con Quick Look (en este Mac no hay `rsvg-convert` ni
ImageMagick):

```bash
qlmanage -t -s 1600 -o <dir_salida> <archivo>.svg
```

Revisá el PNG vos primero — un `d` que lee bien en código puede renderizar
como una mancha. Y evaluá la pieza **al tamaño en que se va a usar**:

| Set | Revisar a | Prueba de estrés |
|---|---|---|
| base | 16–24 px | — |
| large | ≥ 40 px | — |
| symbols | ≥ 64 px | debe seguir entendiéndose a 32 px |

Miguel responde una de tres cosas:

| Respuesta | Qué hacer |
|---|---|
| **"Aprobado"** | Paso 4 |
| **Feedback** ("el pico está muy grueso") | Ajustá esa misma pieza, `intentos += 1`, entrada de `historial` con `accion: "feedback"` y el feedback recibido en `nota`, y mostrala de nuevo |
| **"Rechazado, saltar"** | `estado: "rechazado"`, entrada de `historial`, y seguí con la siguiente. Se retoma después |

## 4. Al aprobar: qué actualizar

### El manifest del set

El de la tabla de la sección 0 — `icons/manifest.json`,
`icons/large-icons/manifest.json` o `icons/symbols/manifest.json`. Poné
`estado: "aprobado"` y agregá la entrada al `historial`. La estructura por
pieza es la misma en los tres:

```json
{
  "id": "condor",
  "categoria": "naturaleza",
  "estado": "aprobado",
  "intentos": 3,
  "notas": "",
  "historial": [
    { "fecha": "2026-07-14", "accion": "generado", "nota": "" },
    { "fecha": "2026-07-14", "accion": "feedback", "nota": "pico más fino" },
    { "fecha": "2026-07-14", "accion": "aprobado", "nota": "" }
  ]
}
```

`accion` es uno de: `generado`, `feedback`, `aprobado`, `rechazado`. La
`fecha` va en `YYYY-MM-DD`. El `historial` es el registro de las piezas —
no se usa `logs/` para esto.

### `README.md` y `README.es.md` — sólo para el set base

Los READMEs listan **únicamente el set base**. Si aprobaste una pieza de
`large` o de `symbols`, no los toques: no hay tabla que actualizar y meterla
descuadraría los conteos del set base.

Para el set base, ambos se actualizan ícono por ícono y quedan sincronizados
entre sí en todo momento. Hay **cuatro** lugares que dependen del conteo:

1. El badge de cantidad — `icons-109-blue.svg` en `README.md` y
   `%C3%ADconos-109` en `README.es.md`
2. La fila de la categoría en la tabla resumen, y la fila `**Total**`
3. El conteo del encabezado — `### Naturaleza (11)`
4. La lista de nombres de esa categoría, en backticks separados por comas

Los totales salen del manifest, no de la conversación:

```bash
node -e "const m=require('./icons/manifest.json');const c={};m.icons.filter(i=>i.estado==='aprobado').forEach(i=>c[i.categoria]=(c[i.categoria]||0)+1);console.log(c,'total',Object.values(c).reduce((x,y)=>x+y,0))"
```

**No embebas previews `<img>` en los READMEs.** GitHub sirve los SVG
directamente, donde `currentColor` se resuelve a negro y los vuelve
invisibles en tema oscuro. Por eso las tablas son listas de nombres.

### El sitio: no se toca

`apps/site` **no** requiere ningún cambio, en ninguno de los tres sets. Lee las
tres carpetas con `import.meta.glob` y las cruza contra el manifest de cada
set, filtrando por `estado: "aprobado"` — ver `apps/site/src/data/icons.ts`.
Una pieza aprobada aparece sola en su pestaña, en dev y en el sitio publicado.

El deploy también es automático: `.github/workflows/deploy-pages.yml`
dispara ante cambios en `icons/**`, que cubre los tres sets.

Si alguna vez hace falta editar el sitio para que aparezca una pieza, algo
se rompió en esa carga — arreglá la carga, no la agregues a mano.

## 5. Al terminar una categoría

Mostrale a Miguel un resumen antes de pasar a la siguiente: cuántas
aprobadas, cuántas rechazadas, cuántas pendientes. Cambiá la ruta del
manifest según el set:

```bash
node -e "const m=require('./icons/manifest.json');const c={};m.icons.forEach(i=>{c[i.categoria]??={};c[i.categoria][i.estado]=(c[i.categoria][i.estado]||0)+1});console.log(JSON.stringify(c,null,1))"
```

## 6. Commit

El commit lo cubre el skill `actualizar-changelog`, que sube la versión y
lista las piezas nuevas por nombre y categoría. No dupliques ese trabajo acá.

Para el **set base**, ese skill además **regenera los componentes con
`npm run generate`** e incluye `packages/` en el commit — no cierres el commit
sin eso: CI (`build-and-test.yml`) falla con `Generated components are out of
date` si `packages/` no refleja el ícono nuevo.

Para **large** y **symbols** no hay nada que regenerar: no viajan en los
paquetes. `npm run generate` y `npm run validate` sólo miran el set base, así
que la verificación de esas piezas es visual (paso 3) más el checklist de su
guía.

## Qué no hacer

- No generes varias piezas de corrido esperando aprobarlas todas juntas.
- No marques `aprobado` sin que Miguel lo haya dicho explícitamente.
- No escales una pieza de un set para producir la de otro: cada set se dibuja
  desde cero (un ícono de 24 inflado a 64 no es un symbol, es un ícono gordo).
- No dibujes íconos de UI como symbols, ni uses la categoría `genericos` en
  el set symbols.
- No edites un SVG en `packages/*` ni en `apps/site`. Las carpetas de
  `icons/` son la única fuente de verdad de cada set.
