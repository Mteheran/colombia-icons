# 002 — Publicación en GitHub y changelog

## Contexto

El repo local está en `main` sin ningún commit. No hay remote configurado y
`gh` CLI no está instalado en la máquina, así que el repo en GitHub lo crea
Miguel manualmente desde github.com y luego se conecta el remote.

Los READMEs ya estaban sincronizados con `icons/manifest.json` (109 íconos
aprobados listados en ambos, sin faltantes ni sobrantes), así que la
actualización pedida es de presentación y seguimiento, no de contenido.

## Pasos

1. **Actualizar `README.md` y `README.es.md`** (sincronizados entre sí):
   - Badges de licencia MIT, cantidad de íconos y estado pre-release.
   - Nota de la spec técnica (grilla 24x24, stroke 1.5px, `currentColor`).
   - Tabla resumen de aprobados por categoría bajo "Available Icons" /
     "Íconos disponibles".
   - Conteo por categoría en cada encabezado `###`.
2. **Crear `CHANGELOG.md`** en formato Keep a Changelog + semver, con la
   sección `[Unreleased]` describiendo el estado actual del proyecto.
3. **Commit inicial** con todo el trabajo hecho hasta ahora (scaffolding,
   139 SVGs, manifest, READMEs, logs).
4. **Conectar el remote y hacer push** una vez Miguel cree el repo vacío en
   github.com y pase la URL.
5. **Después del push**, crear un skill de proyecto que actualice el
   `CHANGELOG.md` como parte del flujo de commit, para que el seguimiento
   quede automatizado de aquí en adelante.

## Decisiones

- El changelog se escribe en inglés, igual que `README.md`, que es el
  default visible en GitHub y npm.
- Los pasos 4 y 5 dependen de una acción manual de Miguel (crear el repo),
  así que el trabajo se corta ahí y se retoma con la URL.
