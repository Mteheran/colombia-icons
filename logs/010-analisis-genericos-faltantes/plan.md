# 010 — Análisis: íconos genéricos faltantes

Fecha: 2026-09-03
Branch: `feat/analisis-genericos-faltantes` (desde `origin/main` @ 04aa1b3)

## Estado actual

| Categoría | Íconos |
|---|---|
| genericos | 203 (198 aprobados, 5 rechazados) |
| naturaleza | 24 |
| gastronomia | 14 |
| cultura | 13 |
| mapas | 7 |
| deportes | 7 |
| historia | 3 |
| urbano | 2 |

Rechazados pendientes de retomar en genéricos: `usuario-alerta`, `cerebro`,
`mano-cerrada`, `tormenta`, `pincel`.

Método: se cruzó el set actual de `icons/svg/genericos/` contra las familias
funcionales que cubren los sets de referencia (Lucide, Tabler, Feather,
Heroicons), buscando huecos dentro de familias **ya presentes** en el repo —
es decir, íconos cuya ausencia rompe la simetría de un grupo que ya existe.

## Hallazgo prioritario

`carpeta-abierta` aparece en `CLAUDE.md` §3 como ejemplo de naming del propio
proyecto y **no existe** en `icons/svg/genericos/`.

## Huecos por familia

### A. Simetría rota (alta prioridad — la familia ya existe e está incompleta)
| Ícono | Familia | Por qué |
|---|---|---|
| `minimizar` | maximizar, maximizar-2-flechas, maximizar-4-flechas | no hay contraparte |
| `alinear-justificado` | alinear-izquierda/centro/derecha | falta la 4ª alineación |
| `tachado` | negrita, cursiva, subrayado | falta el 4º estilo de texto |
| `carpeta-abierta` | carpeta, carpetas | estado abierto; citado en CLAUDE.md |
| `campana-silenciada` | campana, campana-sonando | como volumen-silenciado |
| `usuario-check` | usuario-agregar/eliminar/inactivo | confirmación de usuario |
| `usuario-editar` | idem | edición de perfil |
| ~~`escudo-check`~~ → `escudo-alerta` | escudo, verificado | descartado: `verificado` ya es un shield-check; se reemplaza por la variante de advertencia |
| `grabar` | reproducir, pausa, detener | control de transporte faltante |
| ~~`repetir`~~ | idem | descartado: `sincronizar` ya es el `repeat` de Lucide, coordenada por coordenada |
| `aleatorio` | idem | shuffle |
| `nublado-parcial` | sol, luna, nube, lluvia, nieve, viento | el clima más usado |
| `niebla` | idem | |
| `gota` (humedad) | idem | |
| `alarma` | reloj, cronometro, reloj-arena | |
| `historial` | idem | reloj con flecha de retroceso |
| `calendario-evento` | calendario | día marcado |
| `tendencia-arriba` / `tendencia-abajo` | grafico-lineas, analitica | KPI up/down |

### B. Familias ausentes por completo (media prioridad)
- **Conectividad:** `bluetooth`, `usb`, `senal-celular`, `enchufe`, `chip`
  (existe `wifi` suelto sin su familia).
- **Transporte / envíos:** `avion`, `carro`, `camion`, `bicicleta`, `caja`
  (útil para e-commerce; ya hay `carrito`, `bolsa-compras`, `etiqueta`).
- **Finanzas:** `billetera`, `recibo`, `moneda`, `porcentaje`
  (ya hay `dolar`, `dolar-circulo`, `dolar-cuadrado`, `tarjeta`).
- **Layout de app:** `barra-lateral`, `columnas`, `ventana-navegador`,
  `pestanas`, `tablero-kanban`, `puntos-arrastrar`
  (ya hay `cuadricula`, `lista-vista`, `menu-hamburguesa`).
- **Dev / git:** `git-rama`, `git-commit`, `git-merge`, `llave-inglesa`
  (ya hay `codigo`, `terminal`, `bug`, `servidor`).
- **Archivos avanzado:** `archivo-agregar`, `importar`, `exportar`,
  `comprimir-zip`.

### C. Estado / feedback (media)
`cargando` (spinner), `prohibido`, `alerta-triangulo` (hoy solo hay `alerta`
circular), `credencial` (tarjeta de identificación).

### D. Complementarios (baja)
`corona`, `medalla`, `tamano-texto`, `cita`, `sangria`, `expulsar`,
`lista-reproduccion`, `video-llamada`, `telefono-colgar`, `ruta`.

## Propuesta de lote

Tanda 1 (18) = bloque A completo — cierra simetrías existentes, riesgo de
diseño bajo, alto valor inmediato.
Tanda 2 = bloque B por familias (conectividad, transporte, finanzas, layout,
dev, archivos).
Tanda 3 = bloques C y D.

Total propuesto: ~55 íconos nuevos → llevaría genéricos de 203 a ~258.

## Siguiente paso

Ejecutar el flujo de §11 (uno a uno, con aprobación explícita) empezando por
la tanda 1, vía la skill `nuevo-icono`.
