# 001 — Resultado del scaffolding inicial

Ejecutado el 2026-07-13/14. Todo lo planeado en `plan.md` se completó; el
árbol final coincide con la sección 2 del `CLAUDE.md`. Sin íconos SVG, sin
workflows de CI/CD, sin galería real en `apps/site` — tal como estaba
acotado.

## Verificación realizada

Más allá de lo mínimo planeado (`npm install` + `dotnet build`), se corrió
el build real de cada paquete para confirmar que la configuración no solo
instala sino que compila:

| Paquete | Comando | Resultado |
|---|---|---|
| `packages/react` | `npm run build --workspace=packages/react` (tsup) | ✅ tras un fix (ver abajo) |
| `packages/angular` | `npm run build --workspace=packages/angular` (ng-packagr) | ✅ sin cambios |
| `packages/blazor` | `dotnet build packages/blazor` | ✅ 0 warnings, 0 errors |
| `apps/site` | `npm run build --workspace=apps/site` (tsc -b + vite build) | ✅ sin cambios |

`npm install` en la raíz: 193 paquetes instalados correctamente.
`git status` confirmado limpio de `node_modules/`, `dist/`, `bin/`, `obj/`
(el `.gitignore` funciona como se esperaba).

## Desviaciones respecto al plan

- **Bug real encontrado y corregido**: el build de `packages/react` fallaba
  en el paso de generación de `.d.ts` con `TS5101` ("Option 'baseUrl' is
  deprecated and will stop functioning in TypeScript 7.0"), disparado
  internamente por el bundling de tipos de tsup, no por nada explícito en
  el `tsconfig.json` original. Se agregó `"ignoreDeprecations": "6.0"` a
  `packages/react/tsconfig.json` (línea sugerida por el propio mensaje de
  error de TypeScript) y el build pasó a compilar limpio.
- El generador de `dotnet new razorclasslib` creó además un
  `ExampleJsInterop.cs` que el plan no había anticipado — se borró junto
  con `Component1.razor`, `Component1.razor.css` y `wwwroot/`, mismo
  criterio que el resto de archivos de ejemplo.
- La versión resuelta de `Microsoft.AspNetCore.Components.Web` quedó en
  `10.0.0` (la que trae el propio template y restauró sin problema), no
  `10.0.9` como se había anotado en el plan — se dejó la real.
- `npm create vite@latest` (create-vite 9.1.1) generó una plantilla
  ligeramente distinta a la anticipada: usa `oxlint` en vez de
  `eslint.config.js`, y trae assets/README adicionales (`hero.png`,
  `public/icons.svg`, `README.md` propio). Se limpiaron todos siguiendo el
  mismo criterio del plan (fuera `react.svg`, `vite.svg`, `hero.png`,
  `public/icons.svg`, `.gitignore` y `README.md` anidados). El
  `package.json` generado ya traía `"private": true` por defecto — solo
  se renombró `"name"` a `colombia-icons-site`.
- Se actualizó también el `<title>` de `apps/site/index.html` de "site" a
  "Colombia Icons" (no estaba explícito en el plan, pero es del mismo
  espíritu de placeholder mínimo).

## Riesgo confirmado (ya anotado en el plan)

`npm install` sí mostró el warning `EBADENGINE` para los 5 paquetes de
Angular (`@angular/common`, `@angular/core`, `@angular/compiler`,
`@angular/compiler-cli`, `ng-packagr`) contra Node v25.2.0. No bloqueó la
instalación ni el build. Si en el futuro esto causa un problema real, la
solución es cambiar a una versión LTS de Node (`^22.22.3` o `^24.15.0`) vía
nvm/fnm.

## Estado de git

`git init` ejecutado, rama por defecto `main`, sin ningún `git add`/commit
— queda pendiente de que se apruebe el árbol completo y se pida
explícitamente el primer commit.

## Siguiente paso

Paso 2 del brief (sección 12): flujo de revisión ícono por ícono (sección
11), empezando por la categoría "genericos".
