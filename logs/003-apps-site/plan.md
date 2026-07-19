# 003 — Implementación de `apps/site` y despliegue en GitHub Pages

## Contexto

`apps/site` hoy es el esqueleto Vite + React del scaffolding: un `App.tsx`
con un "sitio en construcción". Toca implementar la galería real y
desplegarla en GitHub Pages.

## Desviación consciente respecto a `CLAUDE.md`

- **Sección 11, punto 7** dice que `apps/site` se implementa solo cuando
  *todos* los íconos estén aprobados. Miguel pidió construirlo ahora, con
  los 109 aprobados actuales. Como la galería lee del manifest filtrando
  por `estado: aprobado`, el sitio se mantiene correcto solo: los íconos
  que falten aparecen cuando se aprueben, sin tocar código.
- **Sección 6** dice que el sitio hace dogfooding de
  `@mteherandev/colombia-icons-react`. Ese paquete todavía no existe — el
  script de generación (sección 7) va después. Por ahora el sitio lee
  directamente de `icons/svg/`, que es exactamente lo que la misma sección
  6 define como fuente de datos de la galería. El dogfooding se retoma
  cuando exista el paquete.

## Alcance

Requisitos de la sección 6 más lo que pidió Miguel:

- Hero con intro del proyecto y links a los 3 paquetes.
- Instrucciones de instalación por framework (React / Angular / Blazor).
- Buscador por nombre, client-side, en vivo.
- Filtro por categoría, independiente del buscador.
- Grid de íconos con preview renderizado.
- Selector de color individual por ícono, 5 opciones: negro `#000000`,
  gris `#6B7280`, amarillo `#FCD116`, azul `#003893`, rojo `#CE1126`.
- Descarga SVG y PNG, ambas generadas en el navegador con el color elegido.
- **Nuevo:** modal con preview en grande, con selector de color y descargas.
- Licencia y link al repo.

## Enfoque técnico

- **Carga de íconos:** `import.meta.glob('../../../icons/svg/**/*.svg', {
  query: '?raw', eager: true })` más el import de `icons/manifest.json`,
  filtrando `estado === 'aprobado'`. Requiere `server.fs.allow` en
  `vite.config.ts` para que dev pueda leer fuera de `apps/site`.
- **Color:** los SVG usan `stroke="currentColor"`, así que el preview solo
  cambia el `color` CSS del contenedor. Al descargar se reemplaza
  `currentColor` por el hex elegido antes de serializar o rasterizar.
- **PNG:** `<canvas>` en el momento del clic, sin PNGs pre-generados.
  Se exporta a 256x256 para que sirva como asset real, no a 24x24.
- **GitHub Pages:** `base: '/colombia-icons/'` en Vite y un workflow
  `.github/workflows/deploy-pages.yml` que construye y publica con las
  actions oficiales de Pages.

## Pasos

1. `vite.config.ts`: base para Pages y `server.fs.allow`.
2. `src/data/icons.ts`: carga y normalización de íconos + categorías.
3. `src/lib/svg.ts`: aplicar color, descargar SVG, descargar PNG.
4. Componentes: `Hero`, `Install`, `Toolbar` (buscador + categorías),
   `IconCard`, `IconModal`, `Footer`.
5. Estilos, con soporte de tema claro y oscuro.
6. Verificar en el navegador: búsqueda, filtro, colores, ambas descargas,
   modal.
7. Workflow de Pages, commit y push.

## Pendiente para después

- Habilitar Pages en la configuración del repo (acción manual de Miguel:
  Settings → Pages → Source: GitHub Actions).
- Agregar el link al sitio publicado en ambos READMEs.
