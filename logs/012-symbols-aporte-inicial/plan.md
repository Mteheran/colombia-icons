# 012 — Primeros 8 symbols (aporte del diseñador)

Fecha: 2026-09-08
Branch: `feat/symbols-guia-diseno` (continúa la tarea 011)

## Contexto

Llegan 8 SVG del diseñador para estrenar el set symbols creado en la tarea 011.
Miguel pide agregarlos con estos renombres:

| Archivo recibido | Nombre final |
|---|---|
| `rama-con-bayas.svg` | `planta-cafe` |
| `perro-orejudo.svg` | `sabueso-fino-colombiano` |
| `rostro-felino.svg` | `jaguar` |
| `montanas-nevadas.svg` | `pico-nevado` |
| `cascada.svg` | `cascada` |
| `colibri.svg` | `colibri` |
| `condor-frontal.svg` | `condor-frontal` |
| `montanas-y-frailejones.svg` | (sin renombre — ver abajo) |

El pedido incluía un quinto renombre, `flor-botacia` → `frailejon-florecido`,
pero ningún archivo adjunto se llama así. Confirmado con Miguel: es un archivo
aparte que todavía no llega, así que `montanas-y-frailejones` conserva su
nombre y `frailejon-florecido` queda para cuando aparezca `flor-botacia.svg`.

## Hallazgo: los 8 no cumplen la spec del set

Los archivos vienen con el **trazo expandido a contorno**: `fill="currentColor"`
con `fill-rule="evenodd"` y sin `stroke`, que es lo que exporta el pipeline del
diseñador (Illustrator / Affinity, *expand stroke*). La guía escrita en la tarea
011 pide `fill="none"` + `stroke-width="2"` con caps y joins `round`.

Recuperar la línea central de un contorno expandido no es una conversión sino un
rediseño, así que no hay normalización automática posible.

Se midió el peso efectivo rasterizando cada archivo a 640 px y estimando
`2·área/perímetro`, calibrando contra dos íconos del repo de grosor conocido
(`icons/svg/naturaleza/colibri.svg` y `icons/large-icons/naturaleza/orquidea.svg`,
ambos 1.5 px). Resultado: **~1.3 a ~1.8 unidades**, no 2, y con variación entre
piezas (±0.2 u de margen del método).

Decisión de Miguel: **ajustar la guía**, aceptando el contorno expandido como
forma de entrega válida y pidiendo peso visual ≈2 px en vez de un `stroke-width`
literal.

## Pasos

1. Normalizar los 8: `viewBox 0 0 64 64` (reescalando `perro-orejudo`, que venía
   en lienzo 267), `fill="currentColor"`, sin DOCTYPE/metadata/namespaces del
   editor, y SVGO.
2. Guardarlos en `icons/symbols/naturaleza/` y registrarlos en
   `icons/symbols/manifest.json` como `aprobado`, con el origen en el historial.
3. Ajustar ambas guías (es/en) con la sección 2.1 "dos formas de entrega".
4. Actualizar el skill `nuevo-icono` con cómo normalizar un aporte en forma B.
5. Corregir el sitio: el modal mostraba `Fill: none` fijo.
6. Verificar en el sitio y commitear con `actualizar-changelog`.
