# 006 — CI/CD de publicación + skill de release — Resultado

## Qué se hizo

Se automatizó la publicación de los 3 paquetes con GitHub Actions, disparada por un tag, y se
creó un skill que prepara y empuja ese tag con un solo slash command.

### Archivos nuevos
- `.github/workflows/publish-npm.yml` — publica React y Angular a npm en push de tag `v*.*.*`.
- `.github/workflows/publish-nuget.yml` — publica `ColombiaIcons.Blazor` a NuGet.org en push de
  tag `v*.*.*`.
- `.claude/skills/publicar-version/SKILL.md` — skill/slash command `/publicar-version`.

## Diseño

- **Un tag `vX.Y.Z` → publica en las 3 plataformas.** Ambos workflows escuchan el mismo trigger
  (`push: tags: ['v*.*.*']`) y además `workflow_dispatch` como respaldo manual.
- **Separación de responsabilidades:** el skill hace lo local y sin secrets (validaciones, tag,
  push tras confirmación); los workflows hacen lo que necesita secrets (`npm publish`,
  `dotnet nuget push`).
- **Guards de coherencia:** cada workflow verifica que el tag empujado coincida con la versión de
  los manifiestos (`package.json` / `<Version>` del `.csproj`) y falla si no.
- **npm:** `npm ci` → `npm run generate` → build de react y angular → `npm publish` de React
  (workspace) y de Angular (desde `packages/angular/dist`), ambos `--access public`, auth con
  `NPM_TOKEN`.
- **NuGet:** `setup-dotnet 10.0.x` → `dotnet pack -c Release` → `dotnet nuget push` con
  `--skip-duplicate` y `NUGET_API_KEY`.

## Verificación

- YAML de ambos workflows parseado con `python3 -yaml`: jobs y triggers correctos
  (`push` + `workflow_dispatch`).
- El `sed` del guard de NuGet extrae `0.2.0` del `.csproj`; el de npm lee `0.2.0` de
  `package.json`. Coinciden entre sí y con las 4 fuentes de versión.
- El skill quedó registrado y disponible como `/publicar-version`.

## Requiere acción del usuario (una sola vez, antes del primer release)

- Cargar en el repo los secrets `NPM_TOKEN` (scope `@mteherandev`) y `NUGET_API_KEY`
  (`ColombiaIcons.Blazor`).
- Tener la cuenta/scope de npm y disponibilidad del id en NuGet.org.

## Nota

Los archivos de esta tarea (`.github/**`, `.claude/**`, `logs/**`) según el skill
`actualizar-changelog` **no** suben versión ni entran al changelog por sí solos.
