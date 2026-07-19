# Colombia Icons

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg)](./LICENSE)
[![Íconos](https://img.shields.io/badge/%C3%ADconos-109-blue.svg)](#íconos-disponibles)
[![Estado](https://img.shields.io/badge/estado-pre--release-orange.svg)](./CHANGELOG.md)
[![GitHub](https://img.shields.io/badge/GitHub-Mteheran%2Fcolombia--icons-181717?logo=github)](https://github.com/Mteheran/colombia-icons)

Librería de íconos line-icon (outline) inspirada en Colombia — disponible
para React, Angular y Blazor, más un sitio web para explorar y descargar
cada ícono individualmente en SVG o PNG.

Todos los íconos están dibujados sobre una grilla de 24x24 con stroke de
1.5px y `stroke="currentColor"`, así que heredan el color de tu CSS.

Read this in other languages: [English](./README.md)

## Paquetes

| Paquete | Framework | Registro |
|---|---|---|
| [`@mteherandev/colombia-icons-react`](./packages/react) | React | npm |
| [`@mteherandev/colombia-icons-angular`](./packages/angular) | Angular | npm |
| `ColombiaIcons.Blazor` | Blazor | NuGet |

> Ningún paquete está publicado todavía. Las instrucciones de instalación
> funcionarán una vez se publique la v1.0.

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

```razor
<Condor Size="24" />
```

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

_Ninguno aprobado todavía._

### Deportes (4)

`ciclismo`, `futbol`, `vuelta-a-colombia`, `natacion`

### Genéricos (81)

`guardar`, `eliminar`, `cancelar`, `cerrar`, `estrella`, `estrella-llena`, `archivo`, `carpeta`, `carpetas`, `editar`, `buscar`, `configuracion`, `agregar`, `quitar`, `check`, `alerta`, `informacion`, `candado`, `candado-abierto`, `usuario`, `calendario`, `reloj`, `descargar`, `subir`, `compartir`, `copiar`, `imprimir`, `menu-opciones`, `refrescar`, `camara`, `puntero`, `mundo`, `microfono`, `terminal`, `flecha-derecha`, `flecha-abajo`, `flecha-izquierda`, `flecha-arriba`, `camara-video`, `telefono`, `wifi`, `hashtag`, `inicio`, `emoji`, `libro`, `imagen`, `enter`, `puzzle`, `verificado`, `menu-hamburguesa`, `correo`, `comentario`, `me-gusta`, `no-me-gusta`, `circle-check`, `square-check`, `marcador`, `musica`, `maximizar`, `maximizar-2-flechas`, `maximizar-4-flechas`, `bombillo-encendido`, `bombillo-apagado`, `mano`, `volumen`, `volumen-silenciado`, `corneta`, `teclado`, `controles`, `mando`, `dolar`, `dolar-circulo`, `trofeo`, `codigo`, `bandera`, `rayo`, `bateria-horizontal`, `bateria-horizontal-cargada`, `bateria-vertical`, `bateria-vertical-cargada`, `dolar-cuadrado`

## Desarrollo

Este repo es un monorepo con npm workspaces. Ver [`CLAUDE.md`](./CLAUDE.md)
para la arquitectura completa y el flujo de contribución.

```bash
npm install
```

## Licencia

MIT — ver [LICENSE](./LICENSE).
