# 007 — CI de build & test (build-and-test.yml) — Plan

## Contexto

El CD ya existe (`publish-npm.yml`, `publish-nuget.yml`, tarea 006): publica los 3 paquetes en
push de tag. Lo que falta es el **CI** que la §8 de CLAUDE.md define: un workflow
`build-and-test.yml` que en cada push/PR **regenere + compile los 3 paquetes + valide que no haya
SVGs rotos o duplicados**. Hoy nada valida en PR que el paquete NuGet de Blazor (ni React/Angular)
compile antes de mergear — el disparador de esta tarea fue justamente pedir el CI/CD del paquete
Blazor, y su build sólo se ejercita hoy en el momento del release.

## Objetivo

Crear `.github/workflows/build-and-test.yml` que corra en cada `push` y `pull_request` y garantice
que la fuente de verdad (`icons/svg/` + `icons/manifest.json`) siempre produce los 3 paquetes sin
errores. Cubre Blazor (`dotnet build`) además de React y Angular, en un solo workflow según §8.

## Pasos

1. **Script de validación** `scripts/validate/index.js` (+ `npm run validate`) — la parte
   "valida que no haya SVGs rotos o duplicados" de §8:
   - Cada ícono `aprobado` en el manifest tiene su archivo en `icons/svg/<categoria>/<id>.svg`.
   - No hay `id` duplicados en el manifest.
   - No hay colisiones de PascalCase entre íconos aprobados (romperían la generación de
     componentes, que usan el mismo nombre de archivo en React/Blazor).
   - Cada SVG aprobado parsea (tiene una etiqueta raíz `<svg>` válida).
   - Sale con código ≠ 0 y mensaje claro si algo falla.

2. **Workflow** `.github/workflows/build-and-test.yml`:
   - Triggers: `push` y `pull_request` (todas las ramas), + `workflow_dispatch`.
   - `permissions: contents: read`.
   - Job `build` en `ubuntu-latest`:
     - checkout
     - setup-node 22 (cache npm) + setup-dotnet 10.0.x
     - `npm ci`
     - `npm run validate` (SVGs rotos/duplicados)
     - `npm run generate` (regenera los 3 paquetes desde la fuente de verdad)
     - falla si `git` detecta que los componentes generados difieren de lo commiteado
       (garantiza que el repo no quede desincronizado, como pasó con 109 vs 120)
     - build React (`tsup`) y Angular (`ng-packagr`)
     - `dotnet build` de Blazor en Release

3. **Verificación local** de cada paso antes de dar por hecho el workflow (ya validado: los 3
   builds pasan; falta correr `npm run validate` y el guard de drift).

4. `resultado.md` al terminar.

## Decisiones de diseño

- **Un solo workflow para los 3 paquetes** (no uno por paquete), como manda §8. El pedido nació
  desde Blazor, pero un CI que sólo compilara Blazor dejaría React/Angular sin cobertura y
  contradiría el brief; el build de Blazor queda cubierto dentro de este workflow.
- **Guard de "drift"**: tras `npm run generate`, si `git status` muestra cambios en
  `packages/*`, el CI falla. Esto detecta PRs que editan un SVG/manifest pero olvidan regenerar
  (o al revés), que fue el bug real encontrado en esta sesión.
- **Separación CI/CD**: este workflow nunca publica ni necesita secrets; sólo compila y valida.
