# 001 — Scaffolding inicial del monorepo

## Objetivo
Crear la estructura base del monorepo (sección 2 del CLAUDE.md) sin generar
ningún ícono SVG ni implementar funcionalidad real — solo los esqueletos
configurables de cada paquete/app, listos para recibir contenido en los
pasos siguientes (sección 12).

## Pasos
1. Crear árbol de carpetas (icons/svg/<categorias>, packages/{react,angular,blazor},
   apps/site, scripts/generate, logs/).
2. Root: package.json (npm workspaces), .gitignore, LICENSE (MIT), README.md,
   README.es.md.
3. icons/manifest.json vacío ({"icons": []}).
4. packages/react: package.json + tsconfig.json + tsup.config.ts + src/index.ts
   (build con tsup).
5. packages/angular: package.json + ng-package.json + tsconfig.lib.json +
   src/public-api.ts (build con ng-packagr, sin Angular CLI).
6. packages/blazor: Razor Class Library vía `dotnet new razorclasslib`,
   target net10.0, empaquetado para NuGet.
7. apps/site: scaffold con `npm create vite@latest -- --template react-ts`,
   renombrado y con placeholder mínimo (sin galería todavía).
8. git init local (sin commit todavía — queda pendiente de tu revisión).

## Decisiones tomadas
- tsup (no rollup) para el build de React.
- Angular: ng-packagr artesanal, sin Angular CLI (no está instalado).
- Blazor: net10.0 (LTS actual instalado).
- TypeScript fijado en ~6.0.3 en todo el repo (ng-packagr@22 exige <6.1).
- apps/site vía generador oficial de Vite, no a mano.

Plan completo: ver conversación y `/Users/miguelteheran/.claude/plans/memoized-dreaming-volcano.md`.
