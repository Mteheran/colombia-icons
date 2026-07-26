# 004 — Paquetes npm React y Angular (primera versión)

## Objetivo

Generar y compilar la primera versión publicable de los paquetes `@mteherandev/colombia-icons-react`
y `@mteherandev/colombia-icons-angular`, a partir de los íconos **aprobados** actualmente en
`icons/svg/` (según `icons/manifest.json`). Esta tarea **no** publica a npm — solo genera los
componentes y valida que ambos paquetes compilen.

## Contexto / estado de partida

- 109 íconos en estado `aprobado` (genéricos 81, naturaleza 11, gastronomía 7, cultura 6, deportes 4).
- Scaffolding de `packages/react` y `packages/angular` ya existe, con `src` vacío (`export {}`).
- `scripts/generate/` estaba vacío (solo `.gitkeep`).
- Todos los SVG comparten grid 24x24 y `stroke="currentColor"`, excepto `estrella-llena`
  que es sólido (`fill="currentColor" stroke="none"`) → la generación preserva los atributos
  raíz de cada SVG en vez de asumirlos uniformes.

## Decisiones de diseño

### Script de generación — `scripts/generate/index.js`
- Node puro (sin dependencias nuevas), ejecutable con `node scripts/generate/index.js`.
- Lee `icons/manifest.json`, filtra `estado === "aprobado"`.
- Para cada ícono: lee `icons/svg/<categoria>/<id>.svg`, separa los atributos del `<svg>` raíz
  del contenido interno.
- No re-optimiza con SVGO en esta versión: se publican los íconos "como están" para ser fieles
  a lo aprobado y no arriesgar los `fill="currentColor"` internos.
- Nombre de componente: `kebab-case` → `PascalCase` (`circle-check` → `CircleCheck`,
  `maximizar-2-flechas` → `Maximizar2Flechas`).

### React — `@mteherandev/colombia-icons-react`
- Un archivo `.tsx` por ícono en `packages/react/src/icons/`, re-exportado desde `src/index.ts`.
- Tipo compartido `IconProps` en `src/types.ts` (`size`, `color` + `SVGProps<SVGSVGElement>`).
- Componente `forwardRef`; `width`/`height` = `size`; `style={{ color, ...style }}` para que
  `currentColor` (stroke y fills internos) siga la prop `color`. Contenido interno vía
  `dangerouslySetInnerHTML` para preservar el SVG fuente exacto.
- Atributos raíz kebab → camelCase para JSX (`stroke-width` → `strokeWidth`, etc.).
- Build con `tsup` (ya configurado): ESM + CJS + `.d.ts`, tree-shakeable.

### Angular — `@mteherandev/colombia-icons-angular`
- Un componente standalone por ícono en `packages/angular/src/icons/<id>.component.ts`,
  re-exportado desde `src/public-api.ts`.
- Selector `ci-<id>`, clase `<Pascal>Icon` (`ci-check` → `CheckIcon`).
- Template inline con el SVG fuente; `[attr.width]`/`[attr.height]` = `size`,
  `[style.color]` = `color`. Angular parsea SVG nativamente (atributos kebab se mantienen).
- Inputs `size` (number|string, default 24) y `color` (string, default `currentColor`).
- `ChangeDetectionStrategy.OnPush`.
- Build con `ng-packagr` (ya configurado).

## Pasos

1. Escribir `scripts/generate/index.js` + añadir script `generate` en `package.json` raíz.
2. Ejecutar la generación → poblar `packages/react/src` y `packages/angular/src`.
3. `npm run build -w @mteherandev/colombia-icons-react` y verificar `dist` (ESM/CJS/tipos).
4. `npm run build -w @mteherandev/colombia-icons-angular` y verificar `dist` (FESM/tipos).
5. Registrar resultado en `resultado.md`.

## Fuera de alcance

- Publicación real a npm (requiere `NPM_TOKEN` / `npm login`; acción externa del usuario).
- Paquete Blazor.
- Íconos en estado distinto de `aprobado`.
