---
name: actualizar-changelog
description: Actualiza CHANGELOG.md con los cambios que se van a commitear, antes de crear el commit. Úsalo SIEMPRE que vayas a hacer un commit en este repo — el usuario diga "haz commit", "commitea esto", "sube los cambios", "git commit", o cualquier variante. También úsalo si el usuario pide directamente actualizar o revisar el changelog.
---

# Actualizar el CHANGELOG antes de commitear

En `colombia-icons` el `CHANGELOG.md` es el registro de seguimiento del
proyecto y debe quedar al día en **cada** commit. El changelog se actualiza
como parte del mismo commit que introduce el cambio, nunca en un commit
aparte "de changelog".

## Flujo

1. **Mirá qué cambió realmente.** No adivines a partir de la conversación:

   ```bash
   git status --short
   git diff HEAD --stat
   ```

   Si hay cambios sin stagear que no forman parte de este commit, aclarálo
   con el usuario antes de seguir.

2. **Leé `CHANGELOG.md`** y ubicá la sección `## [Unreleased]`.

3. **Agregá las entradas** bajo la subsección de Keep a Changelog que
   corresponda, creándola si no existe: `Added`, `Changed`, `Deprecated`,
   `Removed`, `Fixed`, `Security`. Reglas de estilo de este repo:

   - En inglés, igual que `README.md`.
   - Una entrada por cambio con valor para quien consume la librería — no
     una por archivo tocado.
   - Redactá el efecto, no el mecanismo: "Adds the `mapas` category with 6
     icons", no "modifies manifest.json and README".
   - Si ya existe una entrada que cubre el mismo tema, actualizála en lugar
     de agregar una nueva línea redundante.

4. **Caso especial — aprobación de íconos.** Es el cambio más frecuente del
   repo y NO lleva una línea por ícono. Actualizá el conteo agregado
   existente en `[Unreleased]` (ej. "109 approved source icons: 81
   genéricos, …") con los números nuevos, sacándolos del manifest:

   ```bash
   node -e "const m=require('./icons/manifest.json');const a=Array.isArray(m)?m:(m.iconos||m.icons||[]);const c={};a.filter(i=>i.estado==='aprobado').forEach(i=>c[i.categoria]=(c[i.categoria]||0)+1);console.log(c,'total',Object.values(c).reduce((x,y)=>x+y,0))"
   ```

   Ese mismo conteo alimenta los badges y las tablas de los READMEs — si
   cambió, verificá que `README.md` y `README.es.md` estén sincronizados
   antes de commitear.

5. **Cambios que NO van al changelog:** archivos en `logs/`, ajustes de
   scratchpad, y cambios internos sin efecto observable (formateo, renombres
   privados). Si el commit es solo de eso, decíselo al usuario y commiteá
   sin tocar el changelog.

6. **Al liberar una versión**, convertí `[Unreleased]` en
   `## [X.Y.Z] - YYYY-MM-DD` y abrí una `[Unreleased]` nueva y vacía arriba.
   Las tres librerías (React, Angular, Blazor) comparten versión.

7. **Stageá el changelog junto al resto** y creá el commit:

   ```bash
   git add CHANGELOG.md
   git commit -m "..."
   ```

## Qué no hacer

- No hagas push salvo que el usuario lo pida explícitamente.
- No inventes una versión ni una fecha de release si el usuario no está
  liberando una versión — los cambios en curso van en `[Unreleased]`.
- No reescribas entradas de versiones ya liberadas.
