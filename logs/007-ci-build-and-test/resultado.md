# 007 — CI de build & test (build-and-test.yml) — Resultado

## Qué se hizo

Se creó el workflow de **CI** que faltaba (§8 de CLAUDE.md). El **CD** ya existía (tarea 006:
`publish-npm.yml` + `publish-nuget.yml`, disparados por tag); lo nuevo es la validación en cada
push/PR de que la fuente de verdad compila en los 3 paquetes, incluyendo el `dotnet build` del
paquete NuGet de Blazor — que hasta ahora sólo se ejercitaba en el momento del release.

### Archivos nuevos
- `.github/workflows/build-and-test.yml` — CI en `push` / `pull_request` / `workflow_dispatch`.
- `scripts/validate/index.js` — valida la fuente de verdad (SVGs rotos / duplicados).

### Archivos modificados
- `package.json` — nuevo script `"validate": "node scripts/validate/index.js"`.
- `.github/workflows/publish-nuget.yml` — (del turno previo) ahora regenera con
  `npm run generate` antes de `dotnet pack`, para que el `.nupkg` publicado no derive de la
  fuente de verdad.
- `.gitignore` — (del turno previo) se ignora `nupkg/`.
- Regeneración de los 3 paquetes: 109 → **120** componentes (11 íconos que estaban aprobados en
  el manifest pero sin componente generado).

## Diseño del workflow

Job único `build` en `ubuntu-latest`:
1. checkout + setup-node 22 (cache npm) + setup-dotnet 10.0.x
2. `npm ci`
3. `npm run validate` — falla si un ícono aprobado no tiene SVG, si hay `id` duplicados o
   colisiones de nombre de componente (PascalCase).
4. `npm run generate` — regenera React/Angular/Blazor desde `icons/svg/`.
5. **Drift guard**: `git status --porcelain -- packages` — falla si los componentes commiteados
   difieren de lo que produce la fuente de verdad (captura tanto cambios como archivos nuevos
   sin commitear). Fue el bug real de esta sesión (109 vs 120).
6. Build React (`tsup`), Angular (`ng-packagr`), Blazor (`dotnet build -c Release`).

Sin secrets ni publish: eso vive en los workflows de tag.

## Verificación

- Los 3 builds pasan localmente: React (`tsup` OK), Angular (`ng-packagr` OK),
  Blazor (`dotnet build` — 0 warnings, 0 errors).
- `npm run validate` → "Validación OK — 120 íconos aprobados, sin SVGs rotos ni duplicados".
- YAML parseado con `python3 yaml.safe_load` — job `build`, 10 pasos.
- **Determinismo de `generate` confirmado** (dos corridas → mismo shasum agregado), lo que
  garantiza que el drift guard no dé falsos positivos: en CI, regenerar sobre lo commiteado deja
  `git status --porcelain` vacío.
- Drift guard endurecido de `git diff --quiet` (sólo tracked) a `git status --porcelain`
  (también archivos nuevos), tras detectar que un ícono nuevo sin regenerar se escaparía.

## Nota

Estos cambios son `.github/**`, `scripts/**`, `logs/**` y un script en `package.json`; según el
skill `actualizar-changelog` no suben versión ni entran al changelog por sí solos. Los 33
componentes regenerados (packages/*) sí son código publicable, pero son salida derivada de íconos
ya aprobados, no un cambio de API.
