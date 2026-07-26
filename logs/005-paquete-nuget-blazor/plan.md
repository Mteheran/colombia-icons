# 005 — Paquete NuGet Blazor (primera versión)

## Objetivo

Generar y compilar la primera versión publicable del paquete `ColombiaIcons.Blazor`
(Razor Class Library → NuGet), a partir de los mismos **109 íconos aprobados** que ya alimentan
los paquetes React y Angular (tarea 004). Esta tarea **no** publica a NuGet.org — solo genera los
componentes, compila la RCL y produce el `.nupkg` localmente para validar.

## Contexto / estado de partida

- Scaffolding de `packages/blazor` ya existe:
  - `ColombiaIcons.Blazor.csproj` — RCL `Microsoft.NET.Sdk.Razor`, `net10.0`,
    `PackageId=ColombiaIcons.Blazor`, `Version=0.2.0`, licencia MIT.
  - `_Imports.razor` con `@using Microsoft.AspNetCore.Components.Web`.
- `dotnet 10.0.100` disponible.
- Sin componentes de íconos todavía.
- El script `scripts/generate/index.js` ya genera React y Angular; se extiende para Blazor.

## Decisiones de diseño

### Extensión del script de generación
- Se añade `generateBlazor(icons)` a `scripts/generate/index.js` (reutiliza el mismo parseo de
  SVG y la lista de aprobados). Sin dependencias nuevas.
- Un archivo `.razor` por ícono en `packages/blazor/Icons/<Pascal>.razor`.
- Nombre de componente = PascalCase del id (igual que React): `circle-check` → `CircleCheck`.

### Componente Blazor
- `@namespace ColombiaIcons.Blazor.Icons` (según CLAUDE.md §5).
- Template con el SVG fuente; se preservan los atributos raíz de cada SVG salvo:
  - `width`/`height` → `@Size`,
  - se inyecta `style="color:@Color"` para que `currentColor` (stroke y `fill` internos) siga el
    parámetro `Color` (incluye el caso sólido `estrella-llena`).
- `@attributes="AdditionalAttributes"` para splatting de atributos extra (class, aria-*, etc.).
- Parámetros:
  - `Size` (string, default `"24"`) — acepta `"32"`, `"2em"`, etc.
  - `Color` (string, default `"currentColor"`).
  - `AdditionalAttributes` (`CaptureUnmatchedValues`).
- Uso: `<Condor Size="32" Color="#CE1126" />`.

## Pasos

1. Extender `scripts/generate/index.js` con la generación de Blazor.
2. `npm run generate` → poblar `packages/blazor/Icons/`.
3. `dotnet build packages/blazor -c Release` → validar compilación de las 109 RCL.
4. `dotnet pack packages/blazor -c Release` → producir `ColombiaIcons.Blazor.0.2.0.nupkg`.
5. Verificar contenido del `.nupkg`.
6. Registrar `resultado.md`.

## Fuera de alcance

- Publicación real a NuGet.org (requiere `NUGET_API_KEY`; acción externa del usuario).
- Íconos en estado distinto de `aprobado`.
