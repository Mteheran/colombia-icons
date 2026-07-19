# Colombia Icons

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Icons](https://img.shields.io/badge/icons-109-blue.svg)](#available-icons)
[![Status](https://img.shields.io/badge/status-pre--release-orange.svg)](./CHANGELOG.md)
[![GitHub](https://img.shields.io/badge/GitHub-Mteheran%2Fcolombia--icons-181717?logo=github)](https://github.com/Mteheran/colombia-icons)

A line-icon (outline) SVG icon library inspired by Colombia — available for
React, Angular, and Blazor, plus a companion site to browse and download
every icon individually as SVG or PNG.

All icons are drawn on a 24x24 grid with a 1.5px stroke and
`stroke="currentColor"`, so they inherit color from your CSS.

Read this in other languages: [Español](./README.es.md)

## Packages

| Package | Framework | Registry |
|---|---|---|
| [`@mteherandev/colombia-icons-react`](./packages/react) | React | npm |
| [`@mteherandev/colombia-icons-angular`](./packages/angular) | Angular | npm |
| `ColombiaIcons.Blazor` | Blazor | NuGet |

> None of the packages are published yet. Installation instructions below
> will work once v1.0 ships.

## Installation

### React

```bash
npm install @mteherandev/colombia-icons-react
```

```tsx
import { Condor } from '@mteherandev/colombia-icons-react';

function Example() {
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

```razor
<Condor Size="24" />
```

## Available Icons

Icons are reviewed and added one at a time — see [`CLAUDE.md`](./CLAUDE.md)
(section 11) for the review workflow. The lists below fill in as icons are
approved.

To see the icons rendered, search them, and download them as SVG or PNG, use
the [gallery site](https://mteheran.github.io/colombia-icons/). Previews are
not embedded here because the source
SVGs use `stroke="currentColor"`, which renders as invisible black when
GitHub displays them outside a styled page.

| Category | Approved |
|---|---:|
| Naturaleza | 11 |
| Cultura | 6 |
| Gastronomía | 7 |
| Mapas | 0 |
| Deportes | 4 |
| Genéricos | 81 |
| **Total** | **109** |

### Naturaleza (11)

`ceiba`, `palma-de-cera`, `rio`, `mar-caribe`, `volcan`, `mariposa`, `jaguar`, `arrecife-coral`, `cascada`, `frailejon`, `arbol-tropical`

### Cultura (6)

`sombrero-vueltiao`, `mochila-wayuu`, `acordeon-vallenato`, `mola-kuna`, `feria-de-las-flores`, `sombrero-aguadeno`

### Gastronomía (7)

`arepa`, `taza-de-tinto`, `grano-de-cafe`, `aguardiente`, `empanada`, `patacon`, `arepa-boyacense`

### Mapas (0)

_None approved yet._

### Deportes (4)

`ciclismo`, `futbol`, `vuelta-a-colombia`, `natacion`

### Genéricos (81)

`guardar`, `eliminar`, `cancelar`, `cerrar`, `estrella`, `estrella-llena`, `archivo`, `carpeta`, `carpetas`, `editar`, `buscar`, `configuracion`, `agregar`, `quitar`, `check`, `alerta`, `informacion`, `candado`, `candado-abierto`, `usuario`, `calendario`, `reloj`, `descargar`, `subir`, `compartir`, `copiar`, `imprimir`, `menu-opciones`, `refrescar`, `camara`, `puntero`, `mundo`, `microfono`, `terminal`, `flecha-derecha`, `flecha-abajo`, `flecha-izquierda`, `flecha-arriba`, `camara-video`, `telefono`, `wifi`, `hashtag`, `inicio`, `emoji`, `libro`, `imagen`, `enter`, `puzzle`, `verificado`, `menu-hamburguesa`, `correo`, `comentario`, `me-gusta`, `no-me-gusta`, `circle-check`, `square-check`, `marcador`, `musica`, `maximizar`, `maximizar-2-flechas`, `maximizar-4-flechas`, `bombillo-encendido`, `bombillo-apagado`, `mano`, `volumen`, `volumen-silenciado`, `corneta`, `teclado`, `controles`, `mando`, `dolar`, `dolar-circulo`, `trofeo`, `codigo`, `bandera`, `rayo`, `bateria-horizontal`, `bateria-horizontal-cargada`, `bateria-vertical`, `bateria-vertical-cargada`, `dolar-cuadrado`

## Development

This repo is an npm-workspaces monorepo. See [`CLAUDE.md`](./CLAUDE.md) for
the full architecture and contribution workflow.

```bash
npm install
```

## License

MIT — see [LICENSE](./LICENSE).
