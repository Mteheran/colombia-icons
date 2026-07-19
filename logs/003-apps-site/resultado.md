# 003 — Resultado

## Qué se construyó

**`apps/site`** pasó de esqueleto a galería funcional:

- `src/data/icons.ts` — carga los SVG con `import.meta.glob` desde
  `icons/svg/` y los cruza con `icons/manifest.json`, quedándose solo con
  los `estado: aprobado`. Hoy son 109; los que se aprueben después
  aparecen solos, sin tocar código.
- `src/lib/svg.ts` — `withColor` reemplaza `currentColor` por el hex
  elegido, `downloadSvg` serializa y `downloadPng` rasteriza con `<canvas>`
  a 256×256 en el momento del clic.
- `src/components/` — `IconCard`, `IconModal`, `Swatches`.
- `src/App.tsx` — hero, instalación por framework con tabs, buscador,
  filtro por categoría, grid y footer.
- Estilos con tema claro y oscuro.
- `vite.config.ts` — `base: '/colombia-icons/'` para Pages y
  `server.fs.allow` con la raíz del repo.

**`.github/workflows/deploy-pages.yml`** — lint, build y publicación en
GitHub Pages en cada push a `main` que toque `apps/site` o `icons`.

**READMEs** — se quitó la columna de previews de las tablas de íconos, que
pasaron a ser listas de nombres, y se agregó el link a la galería.

## Decisión de diseño: el canvas de preview

Los previews se muestran sobre un fondo claro fijo en ambos temas. Es el
mismo problema que hacía invisibles los íconos en el README de GitHub: con
el color negro por defecto sobre un fondo oscuro no se ve nada. Un canvas
claro constante deja legibles los 5 colores, y de paso hace que el preview
represente cómo se va a ver el ícono descargado.

## Verificación en el navegador

- 109 cards renderizadas, `109 íconos` en el contador.
- Buscar `cafe` → 1 resultado (`grano-de-cafe`), con singular correcto.
- Buscador y filtro combinan: `cafe` + Naturaleza → 0 resultados y estado
  vacío. Son independientes, como pide la sección 6.
- Elegir rojo en `estrella` → el preview cambia a `rgb(206, 17, 38)`.
- Descarga SVG con ese color → `stroke="#CE1126"` en el archivo.
- Descarga PNG → 256×256, 5790 bytes, único color opaco `206,17,38`, fondo
  transparente.
- Modal: abre con el color de la card, muestra nombre y categoría, cierra
  con Escape.
- Mobile 375px: 2 columnas, sin scroll horizontal. Tema claro y oscuro OK.
- `npm run build` y `npm run lint` pasan.

## Corrección hecha durante la verificación

`URL.revokeObjectURL` se llamaba sincrónicamente justo después del click,
lo que puede cancelar la descarga en algunos navegadores. Ahora se libera
en el siguiente tick, y ambas descargas comparten un solo `triggerDownload`.

## Desviaciones respecto al plan

Ninguna en el alcance. Las dos desviaciones respecto a `CLAUDE.md` ya
estaban anotadas en `plan.md`: se construyó el sitio antes de tener todos
los íconos aprobados, y todavía no hace dogfooding del paquete React
porque ese paquete no existe.

## Pendiente

- **Acción manual de Miguel:** Settings → Pages → Source: GitHub Actions.
  Sin eso el workflow corre pero no publica.
- Volver al dogfooding de `@mteherandev/colombia-icons-react` cuando exista
  el paquete (tarea del script de generación, sección 7).
