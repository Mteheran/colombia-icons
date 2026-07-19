---
name: actualizar-changelog
description: Actualiza CHANGELOG.md y sube la versión antes de crear el commit. Úsalo SIEMPRE que vayas a hacer un commit en este repo — el usuario diga "haz commit", "commitea esto", "sube los cambios", "git commit", o cualquier variante. También úsalo si el usuario pide directamente actualizar el changelog, liberar una versión, o hacer un major release.
---

# Actualizar el CHANGELOG y la versión antes de commitear

En `colombia-icons` cada commit cierra una versión. El `CHANGELOG.md` y los
campos de versión se actualizan **dentro del mismo commit** que introduce el
cambio, nunca en un commit aparte.

## Política de versionado

- **Por defecto, cada commit sube el minor:** `0.2.0` → `0.3.0` → `0.4.0`.
  El patch se queda en `0`.
- **El major solo sube si el usuario lo pide explícitamente** ("hagamos un
  major", "esto es la 1.0"). Nunca lo decidas por tu cuenta, ni siquiera
  ante un breaking change — proponelo y esperá la respuesta.
- **Las tres librerías comparten versión** (React, Angular, Blazor), aunque
  se publiquen por separado.
- No uses la sección `[Unreleased]`. Cada cambio nace ya versionado y
  fechado.

## Flujo

1. **Mirá qué cambió realmente.** No lo deduzcas de la conversación:

   ```bash
   git status --short
   git diff HEAD --stat
   ```

   Si hay cambios sin stagear que no van en este commit, aclarálo con el
   usuario antes de seguir.

2. **Calculá la versión nueva** a partir de la más alta del `CHANGELOG.md`,
   subiendo el minor (o el major si el usuario lo pidió).

3. **Agregá la sección nueva arriba de todo**, después del encabezado del
   archivo, con la fecha de hoy en formato `YYYY-MM-DD`:

   ```markdown
   ## [0.3.0] - 2026-07-19

   ### Added
   ...
   ```

   Usá las subsecciones de Keep a Changelog que apliquen: `Added`,
   `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`.

4. **Escribí las entradas** en inglés, igual que `README.md`:

   - **Íconos nuevos:** nombrados uno por uno, agrupados por categoría.

     ```markdown
     ### Added
     - Icons (naturaleza): `condor`, `colibri`, `orquidea`
     - Icons (mapas): `silueta-colombia`
     ```

     Sacá los aprobados desde el manifest, no de la conversación:

     ```bash
     git diff HEAD --name-only -- icons/svg | sed 's|icons/svg/||;s|\.svg$||'
     ```

   - **Sitio y paquetes:** una entrada por cambio con valor para quien
     consume la librería, no una por archivo tocado. Redactá el efecto, no
     el mecanismo — "Adds PNG download to the gallery", no "modifies
     App.tsx and svg.ts".

5. **Sincronizá los campos de versión** con la versión nueva:

   - `package.json` (raíz)
   - `packages/react/package.json`
   - `packages/angular/package.json`
   - `packages/blazor/*.csproj` → `<Version>`

   `apps/site/package.json` queda en `0.0.0` — es una app privada, no se
   publica.

6. **Verificá que los READMEs sigan sincronizados** si cambió el set de
   íconos: `README.md` y `README.es.md` listan los nombres por categoría y
   llevan el conteo en el badge y en la tabla resumen. Este comando da los
   totales:

   ```bash
   node -e "const m=require('./icons/manifest.json');const a=m.icons;const c={};a.filter(i=>i.estado==='aprobado').forEach(i=>c[i.categoria]=(c[i.categoria]||0)+1);console.log(c,'total',Object.values(c).reduce((x,y)=>x+y,0))"
   ```

7. **Stageá todo junto** y creá el commit:

   ```bash
   git add CHANGELOG.md package.json packages/*/package.json packages/blazor/*.csproj
   git commit -m "..."
   ```

## Excepciones

Estos cambios **no** suben versión ni entran al changelog. Si el commit es
solo de esto, decíselo al usuario y commiteá sin tocar nada más:

- Archivos en `logs/`
- Cambios en `.claude/` (skills, settings, launch.json)
- Formateo, renombres internos y otros cambios sin efecto observable

Si el commit mezcla cambios reales con estos, versioná normalmente y dejá
los excluidos fuera del changelog.

## Qué no hacer

- No hagas push salvo que el usuario lo pida.
- No subas el major por tu cuenta.
- No reescribas secciones de versiones anteriores.
