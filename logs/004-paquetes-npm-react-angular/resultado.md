# 004 — Paquetes npm React y Angular — Resultado

## Qué se hizo

Se generó y compiló la primera versión de los paquetes React y Angular a partir de los
**109 íconos aprobados** en `icons/manifest.json`. No se publicó a npm (fuera de alcance, según
decisión del usuario).

### Archivos nuevos / modificados
- `scripts/generate/index.js` — script de generación (Node puro, sin dependencias nuevas).
- `package.json` (raíz) — añadido script `"generate"`.
- `packages/react/src/` — regenerado:
  - `types.ts` (`IconProps`), `index.ts` (barrel con 109 exports + tipo),
  - `icons/<Pascal>.tsx` × 109.
- `packages/angular/src/` — regenerado:
  - `public-api.ts` (109 exports),
  - `icons/<id>.component.ts` × 109 (componentes standalone).

## Diseño final

- **React**: componente `forwardRef` por ícono. `size` → `width`/`height`; `color` inyectado vía
  `style={{ color }}` para que `currentColor` (stroke y `fill` internos) lo respete. Contenido
  interno del SVG vía `dangerouslySetInnerHTML` (fidelidad exacta al fuente). Atributos raíz
  kebab → camelCase para JSX. Se preservan los atributos propios de cada SVG, incluido el caso
  sólido `estrella-llena` (`fill="currentColor" stroke="none"`).
- **Angular**: componente standalone por ícono, selector `ci-<id>`, clase `<Pascal>Icon`.
  Template inline con el SVG fuente; `[attr.width]`/`[attr.height]` = `size`, `[style.color]` =
  `color`. Inputs `size` (default 24) y `color` (default `currentColor`). `OnPush`.

## Verificación

- `npm run generate` → "Generados 109 íconos aprobados…".
- `npm run build -w @mteherandev/colombia-icons-react` → OK. `dist/`: ESM (`index.mjs`), CJS
  (`index.js`), tipos (`index.d.ts` / `index.d.mts`) con 109 `declare const`.
- `npm run build -w @mteherandev/colombia-icons-angular` → OK. `dist/`: `fesm2022/`, `types/`
  (109 clases `*Icon`), `package.json` con `exports`.
- `npm pack --dry-run`:
  - React: 42.5 kB tarball, 7 archivos (se publica desde `packages/react`, `files: ["dist"]`).
  - Angular: 28.1 kB tarball, 4 archivos (se publica desde `packages/angular/dist`, salida de
    ng-packagr).

## Desviaciones respecto al plan

- Ninguna significativa. Se mantuvo la decisión de no re-optimizar con SVGO para ser fieles a los
  SVG aprobados.

## Pendiente para publicar realmente (fuera de esta tarea)

- Definir versión de release (actualmente `0.2.0` en ambos) y sincronizarla — usar el flujo del
  skill de changelog.
- `NPM_TOKEN` / `npm login` con acceso al scope `@mteherandev`.
- Publicar: React desde `packages/react`; Angular desde `packages/angular/dist`.
  (El workflow `publish-npm.yml` de la §8 automatizaría esto en push de tag.)
