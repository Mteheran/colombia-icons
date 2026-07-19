---
name: nuevo-icono
description: Flujo completo para crear, revisar y aprobar un ícono de colombia-icons. Úsalo SIEMPRE que se vaya a generar, rediseñar o revisar un ícono — el usuario diga "sigamos con los íconos", "generá el ícono X", "siguiente ícono", "aprobado", "rechazado, saltar", o dé feedback sobre un ícono que le mostraste. También al retomar íconos en estado rechazado.
---

# Crear y aprobar un ícono

Prioridad: **calidad sobre velocidad**. Un ícono a la vez, nunca en lote, y
nunca se avanza al siguiente sin aprobación explícita de Miguel.

## 1. Buscar referencias — antes del primer intento

No diseñes de memoria. Antes de escribir una sola línea de SVG, buscá:

1. **El objeto real** y su rasgo característico — lo que lo hace
   reconocible de un vistazo.
2. **Cómo lo resuelven librerías line-icon establecidas** (Lucide, Tabler)
   para un objeto igual o parecido.

Citá las fuentes al presentar el ícono.

Esto no es opcional ni una reacción a un rechazo. Varios íconos se
rechazaron justamente por saltarse este paso: `arbol-tropical` parecía un
engranaje, al `patacon` le faltaban las grietas del borde, el `chicharron`
no tenía la forma de peine. En los tres casos la búsqueda reveló el rasgo
que faltaba.

## 2. Generar el SVG

Spec obligatoria (`CLAUDE.md`, sección 3):

- Grid de 24×24, `viewBox="0 0 24 24"`
- `stroke="currentColor"`, `fill="none"`, `stroke-width="1.5"`
- `stroke-linecap="round"` y `stroke-linejoin="round"`
- Sin metadata, sin IDs redundantes, sin colores fijos
- Nombre de archivo en `kebab-case.svg`, sin tildes ni ñ
  (`sombrero-aguadeno`, no `sombrero-aguadeño`)

Guardalo en `icons/svg/<categoria>/<id>.svg`.

## 3. Mostrarlo y esperar

Mostrale a Miguel el código SVG y una vista previa renderizada. Después
**pará**. No generes el siguiente, no toques el manifest, no toques los
READMEs.

Miguel responde una de tres cosas:

| Respuesta | Qué hacer |
|---|---|
| **"Aprobado"** | Paso 4 |
| **Feedback** ("el pico está muy grueso") | Ajustá ese mismo ícono, `intentos += 1`, entrada de `historial` con `accion: "feedback"` y el feedback recibido en `nota`, y mostralo de nuevo |
| **"Rechazado, saltar"** | `estado: "rechazado"`, entrada de `historial`, y seguí con el siguiente. Se retoma después |

## 4. Al aprobar: qué actualizar

### `icons/manifest.json`

Poné `estado: "aprobado"` y agregá la entrada al `historial`. La estructura
por ícono es:

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
`fecha` va en `YYYY-MM-DD`. El `historial` es el registro de los íconos —
no se usa `logs/` para esto.

### `README.md` y `README.es.md`

Ambos se actualizan ícono por ícono y quedan sincronizados entre sí en todo
momento. Hay **cuatro** lugares que dependen del conteo:

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

`apps/site` **no** requiere ningún cambio. Lee `icons/svg/` con
`import.meta.glob` y lo cruza contra `icons/manifest.json`, filtrando por
`estado: "aprobado"` — ver `apps/site/src/data/icons.ts`. Un ícono aprobado
aparece solo, en dev y en el sitio publicado.

El deploy también es automático: `.github/workflows/deploy-pages.yml`
dispara ante cambios en `icons/**`.

Si alguna vez hace falta editar el sitio para que aparezca un ícono, algo
se rompió en esa carga — arreglá la carga, no agregues el ícono a mano.

## 5. Al terminar una categoría

Mostrale a Miguel un resumen antes de pasar a la siguiente: cuántos
aprobados, cuántos rechazados, cuántos pendientes.

```bash
node -e "const m=require('./icons/manifest.json');const c={};m.icons.forEach(i=>{c[i.categoria]??={};c[i.categoria][i.estado]=(c[i.categoria][i.estado]||0)+1});console.log(JSON.stringify(c,null,1))"
```

## 6. Commit

El commit lo cubre el skill `actualizar-changelog`, que sube la versión y
lista los íconos nuevos por nombre y categoría. No dupliques ese trabajo
acá.

## Qué no hacer

- No generes varios íconos de corrido esperando aprobarlos todos juntos.
- No marques `aprobado` sin que Miguel lo haya dicho explícitamente.
- No edites un SVG en `packages/*` ni en `apps/site`. `icons/svg/` es la
  única fuente de verdad.
