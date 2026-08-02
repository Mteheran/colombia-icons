# 008 — Demo "Colombia Travel" en apps/site — Resultado

## Qué se hizo

Se agregó a `apps/site` una demo interactiva que muestra los íconos usados en una interfaz real:
una app de viajes y turismo por Colombia ("Colombia Travel") donde los íconos del paquete se usan
para la **navegación** (barra inferior, app bar, buscador) y para los **servicios/experiencias**
ofrecidos. Convive con la galería mediante un switch de vista, sin router.

### Archivos nuevos
- `apps/site/src/components/Icon.tsx` — renderizador de íconos inline por nombre
  (`<Icon name="buscar" size={20} />`), reutilizable; usa `currentColor`.
- `apps/site/src/components/TravelDemo.tsx` — la pantalla de la app (app bar, buscador,
  categorías, experiencias, servicios, nav inferior) + leyenda "íconos en uso".
- `apps/site/src/components/Demo.css` — estilos theme-aware (marco de teléfono, responsive).

### Archivos modificados
- `apps/site/src/data/icons.ts` — se exporta `svgById` (lookup de SVG por id).
- `apps/site/src/App.tsx` — switch de vista `Galería | Demo de uso` (por estado, sin router);
  además se corrigió la nota de instalación desactualizada ("los paquetes no están publicados")
  para reflejar que React/Angular ya están en npm y Blazor llegará a NuGet.
- `apps/site/src/App.css` — estilos del `.view-switch`.

## Diseño

- **Sin router**: switch de vista por `useState` en `App.tsx`, para no romper el base path de
  GitHub Pages ni sumar dependencias.
- **Dogfooding**: la demo renderiza los mismos SVG de `icons/svg/` que carga la galería
  (`svgById`), no copias.
- **Solo íconos aprobados existentes**. `mapas` tiene 0 aprobados, así que no se referencia.
  Íconos usados: navegación (`inicio`, `buscar`, `marcador`, `calendario`, `usuario`, `mundo`,
  `comentario`), meta (`estrella`/`estrella-llena`, `reloj`, `dolar`), servicios (`wifi`,
  `candado`, `telefono`, `verificado`, `compartir`) y temáticos por categoría (`mar-caribe`,
  `jaguar`, `sombrero-vueltiao`, `arepa`, `grano-de-cafe`, `feria-de-las-flores`, `ciclismo`,
  `cascada`, `arrecife-coral`, `acordeon-vallenato`).
- Interactividad real: guardar/quitar experiencia (toggle `estrella`↔`estrella-llena`) y tab
  activo en la barra inferior.

## Verificación

- `npm run build` (tsc -b + vite) sin errores de tipos, dos veces (antes y después de ajustes).
- Navegador (`npm run dev`): sin errores de consola; demo renderiza en **tema oscuro y claro**;
  galería intacta; switch de vista funciona; responsive (el marco de teléfono se centra y la
  leyenda pasa a una sola columna en pantallas angostas).

## Fuera de alcance / notas

- No se publicó nada; `apps/site` sigue en versión `0.0.0` (app privada, no versionada).
- El commit de esta tarea puede incluir además los READMEs de los paquetes npm creados en la
  sesión (`packages/react/README.md`, `packages/angular/README.md`), pendientes de decidir el
  release que los publique.
