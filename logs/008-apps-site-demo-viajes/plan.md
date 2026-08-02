# 008 — Demo "Colombia Travel" en apps/site — Plan

## Objetivo

Agregar dentro de `apps/site` una página/demo que muestre los íconos usados en una interfaz real:
una app de viajes y turismo por Colombia que usa los íconos para **navegación** (barra inferior,
buscador) y para los **servicios/experiencias** ofrecidos. Es un showcase de "cómo se ven en uso",
complementando la galería de descarga.

## Enfoque

- **Sin router**: el sitio es una SPA de una sola vista y despliega en GitHub Pages con base path.
  Agrego un switch de vista en `App.tsx` (dos botones: "Galería" | "Demo de uso"), por estado, sin
  dependencias nuevas ni rutas — evita romper el base path.
- **Dogfooding real**: la demo renderiza los mismos SVG de `icons/svg/` (fuente de verdad) que ya
  carga `data/icons.ts`, vía un componente `Icon` reutilizable (`<Icon name="buscar" />`).
- Solo se usan íconos **aprobados existentes** (mapas tiene 0 aprobados, así que no se referencian).

## Piezas

1. `data/icons.ts` → exportar `svgById: Record<string,string>` para lookup por id.
2. `components/Icon.tsx` → renderiza el SVG inline a un tamaño/color dados (usa `currentColor`).
3. `components/TravelDemo.tsx` → la pantalla de la app:
   - Top bar (marca con `mundo`, perfil con `usuario`).
   - Buscador hero: `buscar` (destino), `calendario` (fechas), `usuario` (viajeros).
   - "Explora Colombia": categorías con íconos temáticos (`mar-caribe`, `jaguar`,
     `sombrero-vueltiao`, `arepa`, `grano-de-cafe`, `feria-de-las-flores`, `ciclismo`, `cascada`).
   - "Experiencias destacadas": tarjetas con banner temático + meta (`estrella-llena` rating,
     `marcador` ubicación, `reloj` duración, `dolar` precio, `me-gusta` guardar).
   - Fila de servicios incluidos: `wifi`, `candado` (pago seguro), `telefono` (soporte),
     `verificado`, `compartir`.
   - Barra de navegación inferior: `inicio`, `buscar`, `marcador`, `calendario`, `usuario`.
   - Leyenda "íconos en uso" mapeando ícono → propósito (valor educativo).
4. `Demo.css` → estilos de la demo, theme-aware con las variables existentes
   (`--bg/--surface/--border/--text/--text-h/--accent`) y los colores de bandera para acentos.

## Verificación

- `npm run dev` + navegador: revisar render, tema claro/oscuro, responsive (móvil/desktop),
  consola sin errores.
- `npm run build` (tsc -b + vite) sin errores de tipos.

## Fuera de alcance

- No se publica nada. No se toca el flujo de paquetes. El fix de la nota de instalación desactualizada
  ("los paquetes no están publicados") se puede hacer aparte.
