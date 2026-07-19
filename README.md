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
(section 11) for the review workflow. Tables below fill in as icons are
approved.

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

| Preview | Name |
|---|---|
| <img src="icons/svg/naturaleza/ceiba.svg" width="24" height="24" alt="ceiba" /> | ceiba |
| <img src="icons/svg/naturaleza/palma-de-cera.svg" width="24" height="24" alt="palma-de-cera" /> | palma-de-cera |
| <img src="icons/svg/naturaleza/rio.svg" width="24" height="24" alt="rio" /> | rio |
| <img src="icons/svg/naturaleza/mar-caribe.svg" width="24" height="24" alt="mar-caribe" /> | mar-caribe |
| <img src="icons/svg/naturaleza/volcan.svg" width="24" height="24" alt="volcan" /> | volcan |
| <img src="icons/svg/naturaleza/mariposa.svg" width="24" height="24" alt="mariposa" /> | mariposa |
| <img src="icons/svg/naturaleza/jaguar.svg" width="24" height="24" alt="jaguar" /> | jaguar |
| <img src="icons/svg/naturaleza/arrecife-coral.svg" width="24" height="24" alt="arrecife-coral" /> | arrecife-coral |
| <img src="icons/svg/naturaleza/cascada.svg" width="24" height="24" alt="cascada" /> | cascada |
| <img src="icons/svg/naturaleza/frailejon.svg" width="24" height="24" alt="frailejon" /> | frailejon |
| <img src="icons/svg/naturaleza/arbol-tropical.svg" width="24" height="24" alt="arbol-tropical" /> | arbol-tropical |

### Cultura (6)

| Preview | Name |
|---|---|
| <img src="icons/svg/cultura/sombrero-vueltiao.svg" width="24" height="24" alt="sombrero-vueltiao" /> | sombrero-vueltiao |
| <img src="icons/svg/cultura/mochila-wayuu.svg" width="24" height="24" alt="mochila-wayuu" /> | mochila-wayuu |
| <img src="icons/svg/cultura/acordeon-vallenato.svg" width="24" height="24" alt="acordeon-vallenato" /> | acordeon-vallenato |
| <img src="icons/svg/cultura/mola-kuna.svg" width="24" height="24" alt="mola-kuna" /> | mola-kuna |
| <img src="icons/svg/cultura/feria-de-las-flores.svg" width="24" height="24" alt="feria-de-las-flores" /> | feria-de-las-flores |
| <img src="icons/svg/cultura/sombrero-aguadeno.svg" width="24" height="24" alt="sombrero-aguadeno" /> | sombrero-aguadeno |

### Gastronomía (7)

| Preview | Name |
|---|---|
| <img src="icons/svg/gastronomia/arepa.svg" width="24" height="24" alt="arepa" /> | arepa |
| <img src="icons/svg/gastronomia/taza-de-tinto.svg" width="24" height="24" alt="taza-de-tinto" /> | taza-de-tinto |
| <img src="icons/svg/gastronomia/grano-de-cafe.svg" width="24" height="24" alt="grano-de-cafe" /> | grano-de-cafe |
| <img src="icons/svg/gastronomia/aguardiente.svg" width="24" height="24" alt="aguardiente" /> | aguardiente |
| <img src="icons/svg/gastronomia/empanada.svg" width="24" height="24" alt="empanada" /> | empanada |
| <img src="icons/svg/gastronomia/patacon.svg" width="24" height="24" alt="patacon" /> | patacon |
| <img src="icons/svg/gastronomia/arepa-boyacense.svg" width="24" height="24" alt="arepa-boyacense" /> | arepa-boyacense |

### Mapas (0)

| Preview | Name |
|---|---|

### Deportes (4)

| Preview | Name |
|---|---|
| <img src="icons/svg/deportes/ciclismo.svg" width="24" height="24" alt="ciclismo" /> | ciclismo |
| <img src="icons/svg/deportes/futbol.svg" width="24" height="24" alt="futbol" /> | futbol |
| <img src="icons/svg/deportes/vuelta-a-colombia.svg" width="24" height="24" alt="vuelta-a-colombia" /> | vuelta-a-colombia |
| <img src="icons/svg/deportes/natacion.svg" width="24" height="24" alt="natacion" /> | natacion |

### Genéricos (81)

| Preview | Name |
|---|---|
| <img src="icons/svg/genericos/guardar.svg" width="24" height="24" alt="guardar" /> | guardar |
| <img src="icons/svg/genericos/eliminar.svg" width="24" height="24" alt="eliminar" /> | eliminar |
| <img src="icons/svg/genericos/cancelar.svg" width="24" height="24" alt="cancelar" /> | cancelar |
| <img src="icons/svg/genericos/cerrar.svg" width="24" height="24" alt="cerrar" /> | cerrar |
| <img src="icons/svg/genericos/estrella.svg" width="24" height="24" alt="estrella" /> | estrella |
| <img src="icons/svg/genericos/estrella-llena.svg" width="24" height="24" alt="estrella-llena" /> | estrella-llena |
| <img src="icons/svg/genericos/archivo.svg" width="24" height="24" alt="archivo" /> | archivo |
| <img src="icons/svg/genericos/carpeta.svg" width="24" height="24" alt="carpeta" /> | carpeta |
| <img src="icons/svg/genericos/carpetas.svg" width="24" height="24" alt="carpetas" /> | carpetas |
| <img src="icons/svg/genericos/editar.svg" width="24" height="24" alt="editar" /> | editar |
| <img src="icons/svg/genericos/buscar.svg" width="24" height="24" alt="buscar" /> | buscar |
| <img src="icons/svg/genericos/configuracion.svg" width="24" height="24" alt="configuracion" /> | configuracion |
| <img src="icons/svg/genericos/agregar.svg" width="24" height="24" alt="agregar" /> | agregar |
| <img src="icons/svg/genericos/quitar.svg" width="24" height="24" alt="quitar" /> | quitar |
| <img src="icons/svg/genericos/check.svg" width="24" height="24" alt="check" /> | check |
| <img src="icons/svg/genericos/alerta.svg" width="24" height="24" alt="alerta" /> | alerta |
| <img src="icons/svg/genericos/informacion.svg" width="24" height="24" alt="informacion" /> | informacion |
| <img src="icons/svg/genericos/candado.svg" width="24" height="24" alt="candado" /> | candado |
| <img src="icons/svg/genericos/candado-abierto.svg" width="24" height="24" alt="candado-abierto" /> | candado-abierto |
| <img src="icons/svg/genericos/usuario.svg" width="24" height="24" alt="usuario" /> | usuario |
| <img src="icons/svg/genericos/calendario.svg" width="24" height="24" alt="calendario" /> | calendario |
| <img src="icons/svg/genericos/reloj.svg" width="24" height="24" alt="reloj" /> | reloj |
| <img src="icons/svg/genericos/descargar.svg" width="24" height="24" alt="descargar" /> | descargar |
| <img src="icons/svg/genericos/subir.svg" width="24" height="24" alt="subir" /> | subir |
| <img src="icons/svg/genericos/compartir.svg" width="24" height="24" alt="compartir" /> | compartir |
| <img src="icons/svg/genericos/copiar.svg" width="24" height="24" alt="copiar" /> | copiar |
| <img src="icons/svg/genericos/imprimir.svg" width="24" height="24" alt="imprimir" /> | imprimir |
| <img src="icons/svg/genericos/menu-opciones.svg" width="24" height="24" alt="menu-opciones" /> | menu-opciones |
| <img src="icons/svg/genericos/refrescar.svg" width="24" height="24" alt="refrescar" /> | refrescar |
| <img src="icons/svg/genericos/camara.svg" width="24" height="24" alt="camara" /> | camara |
| <img src="icons/svg/genericos/puntero.svg" width="24" height="24" alt="puntero" /> | puntero |
| <img src="icons/svg/genericos/mundo.svg" width="24" height="24" alt="mundo" /> | mundo |
| <img src="icons/svg/genericos/microfono.svg" width="24" height="24" alt="microfono" /> | microfono |
| <img src="icons/svg/genericos/terminal.svg" width="24" height="24" alt="terminal" /> | terminal |
| <img src="icons/svg/genericos/flecha-derecha.svg" width="24" height="24" alt="flecha-derecha" /> | flecha-derecha |
| <img src="icons/svg/genericos/flecha-abajo.svg" width="24" height="24" alt="flecha-abajo" /> | flecha-abajo |
| <img src="icons/svg/genericos/flecha-izquierda.svg" width="24" height="24" alt="flecha-izquierda" /> | flecha-izquierda |
| <img src="icons/svg/genericos/flecha-arriba.svg" width="24" height="24" alt="flecha-arriba" /> | flecha-arriba |
| <img src="icons/svg/genericos/camara-video.svg" width="24" height="24" alt="camara-video" /> | camara-video |
| <img src="icons/svg/genericos/telefono.svg" width="24" height="24" alt="telefono" /> | telefono |
| <img src="icons/svg/genericos/wifi.svg" width="24" height="24" alt="wifi" /> | wifi |
| <img src="icons/svg/genericos/hashtag.svg" width="24" height="24" alt="hashtag" /> | hashtag |
| <img src="icons/svg/genericos/inicio.svg" width="24" height="24" alt="inicio" /> | inicio |
| <img src="icons/svg/genericos/emoji.svg" width="24" height="24" alt="emoji" /> | emoji |
| <img src="icons/svg/genericos/libro.svg" width="24" height="24" alt="libro" /> | libro |
| <img src="icons/svg/genericos/imagen.svg" width="24" height="24" alt="imagen" /> | imagen |
| <img src="icons/svg/genericos/enter.svg" width="24" height="24" alt="enter" /> | enter |
| <img src="icons/svg/genericos/puzzle.svg" width="24" height="24" alt="puzzle" /> | puzzle |
| <img src="icons/svg/genericos/verificado.svg" width="24" height="24" alt="verificado" /> | verificado |
| <img src="icons/svg/genericos/menu-hamburguesa.svg" width="24" height="24" alt="menu-hamburguesa" /> | menu-hamburguesa |
| <img src="icons/svg/genericos/correo.svg" width="24" height="24" alt="correo" /> | correo |
| <img src="icons/svg/genericos/comentario.svg" width="24" height="24" alt="comentario" /> | comentario |
| <img src="icons/svg/genericos/me-gusta.svg" width="24" height="24" alt="me-gusta" /> | me-gusta |
| <img src="icons/svg/genericos/no-me-gusta.svg" width="24" height="24" alt="no-me-gusta" /> | no-me-gusta |
| <img src="icons/svg/genericos/circle-check.svg" width="24" height="24" alt="circle-check" /> | circle-check |
| <img src="icons/svg/genericos/square-check.svg" width="24" height="24" alt="square-check" /> | square-check |
| <img src="icons/svg/genericos/marcador.svg" width="24" height="24" alt="marcador" /> | marcador |
| <img src="icons/svg/genericos/musica.svg" width="24" height="24" alt="musica" /> | musica |
| <img src="icons/svg/genericos/maximizar.svg" width="24" height="24" alt="maximizar" /> | maximizar |
| <img src="icons/svg/genericos/maximizar-2-flechas.svg" width="24" height="24" alt="maximizar-2-flechas" /> | maximizar-2-flechas |
| <img src="icons/svg/genericos/maximizar-4-flechas.svg" width="24" height="24" alt="maximizar-4-flechas" /> | maximizar-4-flechas |
| <img src="icons/svg/genericos/bombillo-encendido.svg" width="24" height="24" alt="bombillo-encendido" /> | bombillo-encendido |
| <img src="icons/svg/genericos/bombillo-apagado.svg" width="24" height="24" alt="bombillo-apagado" /> | bombillo-apagado |
| <img src="icons/svg/genericos/mano.svg" width="24" height="24" alt="mano" /> | mano |
| <img src="icons/svg/genericos/volumen.svg" width="24" height="24" alt="volumen" /> | volumen |
| <img src="icons/svg/genericos/volumen-silenciado.svg" width="24" height="24" alt="volumen-silenciado" /> | volumen-silenciado |
| <img src="icons/svg/genericos/corneta.svg" width="24" height="24" alt="corneta" /> | corneta |
| <img src="icons/svg/genericos/teclado.svg" width="24" height="24" alt="teclado" /> | teclado |
| <img src="icons/svg/genericos/controles.svg" width="24" height="24" alt="controles" /> | controles |
| <img src="icons/svg/genericos/mando.svg" width="24" height="24" alt="mando" /> | mando |
| <img src="icons/svg/genericos/dolar.svg" width="24" height="24" alt="dolar" /> | dolar |
| <img src="icons/svg/genericos/dolar-circulo.svg" width="24" height="24" alt="dolar-circulo" /> | dolar-circulo |
| <img src="icons/svg/genericos/dolar-cuadrado.svg" width="24" height="24" alt="dolar-cuadrado" /> | dolar-cuadrado |
| <img src="icons/svg/genericos/trofeo.svg" width="24" height="24" alt="trofeo" /> | trofeo |
| <img src="icons/svg/genericos/codigo.svg" width="24" height="24" alt="codigo" /> | codigo |
| <img src="icons/svg/genericos/bandera.svg" width="24" height="24" alt="bandera" /> | bandera |
| <img src="icons/svg/genericos/rayo.svg" width="24" height="24" alt="rayo" /> | rayo |
| <img src="icons/svg/genericos/bateria-horizontal.svg" width="24" height="24" alt="bateria-horizontal" /> | bateria-horizontal |
| <img src="icons/svg/genericos/bateria-horizontal-cargada.svg" width="24" height="24" alt="bateria-horizontal-cargada" /> | bateria-horizontal-cargada |
| <img src="icons/svg/genericos/bateria-vertical.svg" width="24" height="24" alt="bateria-vertical" /> | bateria-vertical |
| <img src="icons/svg/genericos/bateria-vertical-cargada.svg" width="24" height="24" alt="bateria-vertical-cargada" /> | bateria-vertical-cargada |

## Development

This repo is an npm-workspaces monorepo. See [`CLAUDE.md`](./CLAUDE.md) for
the full architecture and contribution workflow.

```bash
npm install
```

## License

MIT — see [LICENSE](./LICENSE).
