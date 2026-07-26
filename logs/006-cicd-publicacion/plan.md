# 006 — CI/CD de publicación + skill de release

## Objetivo

Dejar la publicación de los 3 paquetes (React, Angular, Blazor) automatizada por CI/CD y
disparable con un solo slash command:

- Un tag `vX.Y.Z` empujado a GitHub dispara la publicación en las 3 plataformas.
- Un skill `/publicar-version` prepara y empuja ese tag de forma segura (con confirmación antes
  del push, que es lo irreversible).

## Arquitectura

```
/publicar-version  ──(crea + push tag vX.Y.Z)──▶  GitHub
                                                     │
                        ┌────────────────────────────┴───────────────────────────┐
                        ▼                                                          ▼
              publish-npm.yml                                          publish-nuget.yml
      (React → npm, Angular → npm)                              (Blazor → NuGet.org)
```

- El **skill** hace lo que se puede hacer localmente y sin secrets: valida estado, sincronía de
  versiones y del árbol git, crea el tag anotado y (tras confirmación) lo empuja.
- Los **workflows** hacen lo que necesita secrets: `npm publish` / `dotnet nuget push`.
- La versión a publicar es la que ya está en los manifiestos (la sube el skill
  `actualizar-changelog` en cada commit). El tag debe coincidir; los workflows lo verifican.

## Decisiones

### `.github/workflows/publish-npm.yml`
- Trigger: `push: tags: ['v*.*.*']` + `workflow_dispatch`.
- Node 22, `npm ci`, `npm run generate`, build de react y angular.
- Guard: el tag debe igualar `package.json.version`, si no falla.
- `npm publish` de React (workspace) y de Angular (desde `packages/angular/dist`, salida de
  ng-packagr), ambos con `--access public`. Auth vía `NODE_AUTH_TOKEN=${{ secrets.NPM_TOKEN }}`.

### `.github/workflows/publish-nuget.yml`
- Trigger: `push: tags: ['v*.*.*']` + `workflow_dispatch`.
- `setup-dotnet` 10.0.x.
- Guard: el tag debe igualar `<Version>` del `.csproj`.
- `dotnet pack -c Release` y `dotnet nuget push` a nuget.org con `--skip-duplicate`, api-key
  `${{ secrets.NUGET_API_KEY }}`.

### `.claude/skills/publicar-version/SKILL.md`
- Slash command `/publicar-version`.
- Pre-vuelo: versiones sincronizadas (root/react/angular/csproj), rama `main`, árbol limpio,
  local == `origin/main`, tag inexistente.
- Sanity build local opcional de los 3 paquetes.
- Crea tag anotado `vX.Y.Z`; confirma con el usuario; empuja; enlaza a Actions.
- Recordatorio de setup único (secrets) en el primer release.

## Fuera de alcance / requiere acción del usuario

- Cargar los secrets `NPM_TOKEN` y `NUGET_API_KEY` en el repo (una sola vez).
- Tener cuenta/scope `@mteherandev` en npm y el paquete `ColombiaIcons.Blazor` reservable en
  NuGet.org.
