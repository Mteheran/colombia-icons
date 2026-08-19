# Colombia Icons

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg)](./LICENSE)
[![Íconos](https://img.shields.io/badge/%C3%ADconos-201-blue.svg)](#íconos-disponibles)
[![Estado](https://img.shields.io/badge/estado-pre--release-orange.svg)](./CHANGELOG.md)
[![GitHub](https://img.shields.io/badge/GitHub-Mteheran%2Fcolombia--icons-181717?logo=github)](https://github.com/Mteheran/colombia-icons)
[![Sitio web](https://img.shields.io/badge/sitio%20web-colombia--icons-2ea44f)](https://mteheran.github.io/colombia-icons/)
[![NuGet](https://img.shields.io/nuget/v/ColombiaIcons.Blazor?logo=nuget&label=NuGet)](https://www.nuget.org/packages/ColombiaIcons.Blazor)

Librería de íconos line-icon (outline) inspirada en Colombia — disponible
para React, Angular y Blazor, más un sitio web para explorar y descargar
cada ícono individualmente en SVG o PNG.

Todos los íconos están dibujados sobre una grilla de 24x24 con stroke de
1.5px y `stroke="currentColor"`, así que heredan el color de tu CSS.

**Sitio web:** <https://mteheran.github.io/colombia-icons/> — explora, busca y
descarga cada ícono en SVG o PNG, sin instalar nada.

Read this in other languages: [English](./README.md)

## Paquetes

| Paquete | Framework | Registro |
|---|---|---|
| [`@mteherandev/colombia-icons-react`](./packages/react) | React | [npm](https://www.npmjs.com/package/@mteherandev/colombia-icons-react) |
| [`@mteherandev/colombia-icons-angular`](./packages/angular) | Angular | [npm](https://www.npmjs.com/package/@mteherandev/colombia-icons-angular) |
| [`ColombiaIcons.Blazor`](./packages/blazor) | Blazor | [NuGet](https://www.nuget.org/packages/ColombiaIcons.Blazor) |

> Los tres paquetes están publicados: React y Angular en npm, y
> `ColombiaIcons.Blazor` en
> [NuGet.org](https://www.nuget.org/packages/ColombiaIcons.Blazor).

## Instalación

### React

```bash
npm install @mteherandev/colombia-icons-react
```

```tsx
import { Condor } from '@mteherandev/colombia-icons-react';

function Ejemplo() {
  return <Condor size={24} color="currentColor" />;
}
```

### Angular

```bash
npm install @mteherandev/colombia-icons-angular
```

```html
<ci-icon name="condor" />
```

### Blazor

```bash
dotnet add package ColombiaIcons.Blazor
```

Importá el namespace de los íconos una vez en tu `_Imports.razor`:

```razor
@using ColombiaIcons.Blazor.Icons
```

Después usá cualquier componente de ícono:

```razor
<Condor Size="24" />
<EstrellaLlena Size="48" Color="#FCD116" />
```

Cada componente acepta `Size` (por defecto `"24"`) y `Color` (por defecto
`"currentColor"`); cualquier atributo extra (`class`, `aria-*`, …) se reenvía al
elemento raíz `<svg>`.

## Íconos disponibles

Los íconos se revisan y agregan de a uno — ver [`CLAUDE.md`](./CLAUDE.md)
(sección 11) para el flujo de revisión. Las listas se van llenando a medida
que se aprueban íconos.

Para ver los íconos renderizados, buscarlos y descargarlos en SVG o PNG, usá
el [sitio de la galería](https://mteheran.github.io/colombia-icons/). Los
previews no van embebidos acá porque los
SVG fuente usan `stroke="currentColor"`, que GitHub renderiza en negro
invisible al mostrarlos fuera de una página con estilos.

| Categoría | Aprobados |
|---|---:|
| Naturaleza | 11 |
| Cultura | 6 |
| Gastronomía | 12 |
| Mapas | 0 |
| Deportes | 4 |
| Genéricos | 168 |
| **Total** | **201** |

### Naturaleza (11)

`ceiba`, `palma-de-cera`, `rio`, `mar-caribe`, `volcan`, `mariposa`, `jaguar`, `arrecife-coral`, `cascada`, `frailejon`, `arbol-tropical`

### Cultura (6)

`sombrero-vueltiao`, `mochila-wayuu`, `acordeon-vallenato`, `mola-kuna`, `feria-de-las-flores`, `sombrero-aguadeno`

### Gastronomía (12)

`arepa`, `taza-de-tinto`, `grano-de-cafe`, `aguardiente`, `empanada`, `patacon`, `arepa-boyacense`, `arepa-de-choclo`, `arepa-de-huevo`, `ajiaco`, `sancocho`, `chicharron`

### Mapas (0)

_Ninguno aprobado todavía._

### Deportes (4)

`ciclismo`, `futbol`, `vuelta-a-colombia`, `natacion`

### Genéricos (168)

`guardar`, `eliminar`, `cancelar`, `cerrar`, `estrella`, `estrella-llena`, `archivo`, `carpeta`, `carpetas`, `editar`, `buscar`, `configuracion`, `agregar`, `quitar`, `check`, `alerta`, `informacion`, `candado`, `candado-abierto`, `usuario`, `calendario`, `reloj`, `descargar`, `subir`, `compartir`, `copiar`, `imprimir`, `menu-opciones`, `refrescar`, `camara`, `puntero`, `mundo`, `microfono`, `microfono-estudio`, `terminal`, `flecha-derecha`, `flecha-abajo`, `flecha-izquierda`, `flecha-arriba`, `camara-video`, `telefono`, `wifi`, `hashtag`, `inicio`, `emoji`, `libro`, `imagen`, `enter`, `puzzle`, `verificado`, `menu-hamburguesa`, `correo`, `comentario`, `me-gusta`, `no-me-gusta`, `circle-check`, `square-check`, `marcador`, `musica`, `maximizar`, `maximizar-2-flechas`, `maximizar-4-flechas`, `bombillo-encendido`, `bombillo-apagado`, `mano`, `volumen`, `volumen-silenciado`, `corneta`, `teclado`, `controles`, `mando`, `dolar`, `dolar-circulo`, `trofeo`, `codigo`, `bandera`, `rayo`, `bateria-horizontal`, `bateria-horizontal-cargada`, `bateria-vertical`, `bateria-vertical-cargada`, `dolar-cuadrado`, `lista-tareas`, `clip`, `clip-vertical`, `usuario-agregar`, `usuario-eliminar`, `usuario-inactivo`, `monitor`, `monitor-configuracion`, `monitor-editar`, `regalo`, `pergamino`, `cohete`, `maletin`, `bug`, `bug-mariquita`, `campana`, `campana-sonando`, `corazon`, `ojo`, `ojo-cerrado`, `ubicacion`, `carrito`, `tarjeta`, `enlace`, `reproducir`, `pausa`, `enviar`, `sol`, `luna`, `filtro`, `ordenar`, `enlace-externo`, `cuadricula`, `lista-vista`, `escudo`, `llave`, `cerrar-sesion`, `iniciar-sesion`, `interrogacion`, `power`, `chevron-derecha`, `chevron-izquierda`, `chevron-arriba`, `chevron-abajo`, `mas-circulo`, `menos-circulo`, `detener`, `siguiente`, `anterior`, `adelantar`, `retroceder`, `nube`, `nube-descargar`, `nube-subir`, `etiqueta`, `mapa`, `zoom-mas`, `zoom-menos`, `bolsa-compras`, `accesibilidad`, `huella`, `idioma`, `qr`, `sincronizar`, `lluvia`, `nieve`, `viento`, `termometro`, `grafico-barras`, `grafico-lineas`, `grafico-circular`, `grafico-area`, `analitica`, `embudo`, `base-de-datos`, `bases-de-datos`, `servidor`, `papelera-reciclaje`, `calculadora`, `disco`, `laptop`, `tablet`, `auriculares`, `mouse`, `reloj-inteligente`, `altavoz`

## Desarrollo

Este repo es un monorepo con npm workspaces. Ver [`CLAUDE.md`](./CLAUDE.md)
para la arquitectura completa y el flujo de contribución.

```bash
npm install
```

## Diseñar íconos

¿Vas a crear un ícono a mano en cualquier herramienta (Figma, Illustrator,
Inkscape…)? Sigue los estándares de diseño para que quede idéntico al resto
del set:

- 🇪🇸 [Guía de diseño de íconos](./docs/guia-diseno-iconos.es.md)
- 🇬🇧 [Icon design guide](./docs/icon-design-guide.md)

## Uso con asistentes de IA (CLAUDE.md / AGENTS.md)

Si tu proyecto usa un asistente de IA (Claude Code, Cursor, Copilot, etc.) y
depende de colombia-icons, agrega una nota corta al `CLAUDE.md` o `AGENTS.md`
de tu proyecto para que el asistente use estos íconos en lugar de meter SVG
crudo o traer otra librería de íconos. Copia el bloque de abajo y deja la
línea del framework que uses:

```markdown
## Íconos — colombia-icons

Este proyecto usa la librería colombia-icons para los íconos de UI. Prefiérela
sobre SVG en línea u otras librerías de íconos.

- React: importa desde `@mteherandev/colombia-icons-react`, ej.
  `import { Condor } from '@mteherandev/colombia-icons-react'` →
  `<Condor size={24} color="currentColor" />`.
- Angular: `@mteherandev/colombia-icons-angular`, ej. `<ci-icon name="condor" />`.
- Blazor: `ColombiaIcons.Blazor`, ej. `<Condor Size="24" />`.

Convenciones:
- Los íconos son 24×24, stroke de 1.5px y usan `stroke="currentColor"` — define
  el color con `color` de CSS, no con un fill fijo.
- Los nombres de ícono son `kebab-case` (en español), ej. `sombrero-vueltiao`,
  `usuario-agregar`. Los componentes React/Blazor son su forma PascalCase.
- Explora y busca cada nombre de ícono disponible en
  <https://mteheran.github.io/colombia-icons/>. No inventes nombres de íconos —
  si falta alguno, usa el ícono existente más cercano o pregunta.
```

## Licencia

MIT — ver [LICENSE](./LICENSE).
