---
name: publicar-version
description: Publica una versión de los 3 paquetes (React, Angular, Blazor) empujando un tag que dispara los workflows de CI/CD. Úsalo SIEMPRE que el usuario quiera publicar/liberar/releasear una versión — diga "publicá la versión", "saquemos el release", "publicá a npm y nuget", "hacé el release", "/publicar-version", o cualquier variante. NO publica a mano; prepara y empuja el tag vX.Y.Z.
---

# Publicar una versión (release de los 3 paquetes)

La publicación real a npm y NuGet **la hacen los workflows de GitHub Actions**
(`.github/workflows/publish-npm.yml` y `publish-nuget.yml`), disparados al
empujar un tag `vX.Y.Z`. Este skill **no** corre `npm publish` ni
`dotnet nuget push` localmente: prepara el estado, crea el tag y lo empuja.

Un solo tag publica en las **3 plataformas** a la vez:
React → npm, Angular → npm, Blazor → NuGet.org.

## Requisito único (solo la primera vez)

Antes del primer release, el usuario debe cargar 2 secrets en el repo
(Settings → Secrets and variables → Actions):

- `NPM_TOKEN` — token de automatización de npm con publish sobre el scope
  `@mteherandev`.
- `NUGET_API_KEY` — API key de NuGet.org con push sobre `ColombiaIcons.Blazor`.

No podés verificarlos desde la CLI. En el primer release, recordáselo al
usuario y confirmá que ya los cargó antes de empujar el tag.

## Flujo

1. **Determiná la versión a publicar** desde la fuente de verdad y verificá que
   los 4 manifiestos coincidan:

   ```bash
   node -p "require('./package.json').version"
   node -p "require('./packages/react/package.json').version"
   node -p "require('./packages/angular/package.json').version"
   sed -n 's|.*<Version>\(.*\)</Version>.*|\1|p' packages/blazor/ColombiaIcons.Blazor.csproj
   ```

   Si no coinciden, **pará**: la versión se sincroniza al commitear con el skill
   `actualizar-changelog`, no acá. Avisale al usuario para que cierre ese commit
   primero.

2. **Verificá que el release ya esté commiteado y pusheado.** El CI hace
   checkout del tag, así que el commit debe existir en `origin/main`:

   ```bash
   git rev-parse --abbrev-ref HEAD        # debe ser main
   git status --short                     # debe estar vacío
   git fetch origin
   git rev-parse HEAD                      # debe igualar a...
   git rev-parse origin/main              # ...esto
   ```

   Si hay cambios sin commitear o el local está adelante de `origin/main`,
   pará y decile al usuario que primero cierre y pushee el commit (con
   `actualizar-changelog`).

3. **Verificá que el tag no exista ya** (local ni remoto):

   ```bash
   VER="<version>"
   git tag -l "v$VER"
   git ls-remote --tags origin "v$VER"
   ```

   Si ya existe, pará: esa versión ya se liberó. Hay que subir versión con
   `actualizar-changelog` antes de re-publicar.

4. **Sanity build local de los 3 paquetes** (rápido, atrapa errores antes de
   gastar una corrida de CI):

   ```bash
   npm run generate
   npm run build --workspace @mteherandev/colombia-icons-react
   npm run build --workspace @mteherandev/colombia-icons-angular
   dotnet build packages/blazor/ColombiaIcons.Blazor.csproj -c Release
   ```

5. **Creá el tag anotado:**

   ```bash
   git tag -a "v$VER" -m "Release v$VER"
   ```

6. **Confirmá con el usuario antes de empujar.** El push del tag dispara la
   publicación real e irreversible en npm y NuGet. Mostrá qué se va a publicar
   (versión + los 3 paquetes) y esperá un "sí" explícito. En el primer release,
   confirmá también que los secrets ya están cargados (requisito de arriba).

7. **Empujá el tag:**

   ```bash
   git push origin "v$VER"
   ```

8. **Enlazá las corridas** para que el usuario siga el progreso:
   `https://github.com/Mteheran/colombia-icons/actions`
   (se disparan `Publish npm packages` y `Publish NuGet package`).

## Qué no hacer

- No corras `npm publish` ni `dotnet nuget push` a mano — de eso se encargan los
  workflows.
- No empujes el tag sin confirmación explícita del usuario.
- No subas la versión acá; eso es del skill `actualizar-changelog` al commitear.
- No borres ni reescribas un tag ya publicado.
