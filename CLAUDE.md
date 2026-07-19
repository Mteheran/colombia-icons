
## 1. Resumen del proyecto

**Nombre del repo:** `colombia-icons`
**Descripción:** Librería de íconos line-icon (outline, minimalista) inspirada en Colombia, distribuible como paquete para React, Angular y Blazor, más una base de íconos genéricos de UI reutilizables en cualquier proyecto.

**Objetivo v1.0:** Publicar 3 paquetes instalables (npm x2, NuGet x1) generados desde una única fuente de verdad en SVG.

---

## 2. Arquitectura del monorepo

```
colombia-icons/
├── icons/
│   └── svg/
│       ├── naturaleza/
│       ├── cultura/
│       ├── gastronomia/
│       ├── mapas/
│       ├── deportes/
│       └── genericos/
│
├── packages/
│   ├── react/          → npm: @mteherandev/colombia-icons-react
│   ├── angular/         → npm: @mteherandev/colombia-icons-angular
│   ├── blazor/          → NuGet: ColombiaIcons.Blazor
│   └── web-components/  → (opcional, fase 2) <ci-icon name="condor" />
│
├── apps/
│   └── site/             → Vite + React, landing informativo + galería de descarga (SVG/PNG)
│
├── scripts/
│   └── generate/         # genera componentes de cada paquete a partir de icons/svg
│
├── logs/
│   └── <NNN>-<tarea>/    # plan.md + resultado.md por tarea grande (sección 10)
│
├── .github/
│   └── workflows/
│       ├── build-and-test.yml
│       ├── publish-npm.yml
│       └── publish-nuget.yml
│
├── package.json           # raíz, npm workspaces
├── LICENSE
├── README.md              # inglés (default, visible en GitHub/npm)
└── README.es.md           # español
```

**Principio clave:** `icons/svg/` es la única fuente de verdad. Nunca se edita un ícono directamente en `packages/*` ni en `apps/site`; todo se regenera o se lee en vivo desde `scripts/generate/` e `icons/svg/` respectivamente.

**Tooling del monorepo:** npm workspaces (sin Nx/Turborepo), incluyendo `apps/*` además de `packages/*`.

---

## 3. Especificación técnica de cada ícono

- **Grid:** 24x24px
- **Stroke width:** 1.5px, consistente en todo el set
- **Color:** `stroke="currentColor"` (hereda color vía CSS del proyecto consumidor)
- **Estilo:** line icon / outline, esquinas redondeadas (`stroke-linecap="round"`, `stroke-linejoin="round"`)
- **Formato fuente:** SVG optimizado con SVGO (sin metadata, sin IDs redundantes, sin `fill` fijo)
- **Naming de archivo:** `kebab-case.svg` (ej. `sombrero-vueltiao.svg`, `carpeta-abierta.svg`)

---

## 4. Lista de íconos v1.0 (propuesta editable)

### 4.1 Naturaleza (~18)
cóndor, colibrí, ceiba, palma-de-cera, planta-de-cafe, flor-de-mayo, rio, paramo, selva-amazonica, mar-caribe, volcan, mariposa, orquidea, jaguar, delfin-rosado, arrecife-coral, cascada, arbol-tropical, frailejon, sabueso-fino

### 4.2 Cultura (~11)
sombrero-vueltiao, mochila-wayuu, carnaval-barranquilla, acordeon-vallenato, mola-kuna, ruana, feria-de-las-flores, tejo, chiva-bus, guacharaca, sombrero-aguadeño

### 4.3 Gastronomía (~14)
arepa, bandeja-paisa, taza-de-tinto, aguardiente, empanada, arepa-de-choclo, sancocho, patacón, arepa-de-huevo, ajiaco, arepa-boyacense, pescado-frito, chicharrón, grano-de-cafe

### 4.4 Mapas y geografía (~14)
silueta-colombia, region-caribe, region-andina, region-pacifica, region-orinoquia, region-amazonia, bogota-torre, cartagena-murallas, medellin-metro, salto-del-tequendama, sierra-nevada, ciudad-perdida, cocora-valle, isla-san-andres

### 4.5 Deportes (~8)
ciclismo, futbol, vuelta-a-colombia, patinaje, tejo-deporte, boxeo, atletismo, natacion

### 4.6 Genéricos de UI (~28)
guardar, eliminar, cancelar, cerrar, estrella, estrella-llena, archivo, carpeta, carpetas, editar, buscar, configuracion, agregar, quitar, check, alerta, informacion, candado, candado-abierto, usuario, calendario, reloj, descargar, subir, compartir, copiar, imprimir, menu-opciones, refrescar

**Total v1.0: ~93 íconos.** (Ajustable — se puede recortar o ampliar por categoría antes de iniciar la generación.)

---

## 5. Empaquetado por framework

### React — `@mteherandev/colombia-icons-react`
- Un componente `.tsx` por ícono (ej. `<Condor size={24} color="currentColor" />`)
- Props: `size`, `color`, `className`, resto de `SVGProps`
- Build con `tsup` o `rollup`, salida ESM + CJS + tipos `.d.ts`
- Tree-shakeable (exports individuales, no un solo bundle gigante)

### Angular — `@mteherandev/colombia-icons-angular`
- Librería generada con `ng-packagr`
- Componente único `<ci-icon name="condor">` con input `name`, o componentes individuales (decidir según preferencia de DX)
- Compatible con Angular standalone components

### Blazor — `ColombiaIcons.Blazor`
- Un componente `.razor` por ícono (ej. `<Condor Size="24" />`)
- Empaquetado como librería `Razor Class Library (RCL)`
- Publicado como paquete NuGet
- Namespace sugerido: `ColombiaIcons.Blazor.Icons`

---

## 6. Sitio web informativo (`apps/site`)

**Propósito:** landing page pública del proyecto — explica qué es colombia-icons y cómo instalarlo en cada framework, y permite explorar y descargar cualquier ícono individualmente en SVG y PNG sin instalar ningún paquete.

**Stack técnico:** Vite + React, reutilizando los componentes de `@mteherandev/colombia-icons-react` para renderizar la galería (dogfooding del propio paquete). Compila a `apps/site/dist/index.html` + assets estáticos, listos para publicar en cualquier hosting estático (GitHub Pages, Vercel, Netlify) — el despliegue real queda fuera del alcance de v1.0 y se configura más adelante.

**Contenido:**
- Hero / introducción del proyecto, con link a los 3 paquetes
- Instrucciones de instalación por framework (React / Angular / Blazor), alineadas con la sección 5
- Buscador de íconos por nombre: filtra la galería en vivo (client-side, sin backend), independiente del filtro por categoría
- Galería de íconos navegable por categoría (naturaleza, cultura, gastronomía, mapas, deportes, genéricos)
- Cada ícono en la galería: preview renderizado + selector de color + botón "Descargar SVG" + botón "Descargar PNG"
- Licencia y link al repo

**Fuente de datos:** la galería lee directamente de `icons/svg/` (filtrando por `icons/manifest.json` con `estado: aprobado`) — no mantiene una copia propia. Mientras corre el flujo de revisión (sección 11), `apps/site` en modo desarrollo (`npm run dev`) siempre refleja el set de íconos ya aprobado.

**Descarga PNG:** se genera en el navegador al momento del clic ("Descargar PNG"), convirtiendo el SVG a PNG vía `<canvas>` — sin archivos PNG pre-generados ni pasos extra de build.

**Selector de color:** cada ícono de la galería tiene un selector individual (no global) con 5 opciones — negro `#000000`, gris `#6B7280`, y los 3 colores de la bandera: amarillo `#FCD116`, azul `#003893`, rojo `#CE1126` (hex de referencia, ajustables). No se genera un ícono por color: el SVG fuente ya usa `stroke="currentColor"` (sección 3), así que el preview en pantalla solo cambia el `color` CSS del contenedor. Al descargar (SVG o PNG), se fija ese mismo color en el `<svg>` exportado — reemplazando `currentColor` por el hex elegido — antes de serializarlo o rasterizarlo; usa el mismo paso client-side que ya hace la descarga PNG, sin archivos ni builds extra por color.

---

## 7. Script de generación

Un script Node.js (`scripts/generate/index.js`) que:
1. Lee todos los `.svg` de `icons/svg/**`
2. Optimiza cada uno con SVGO
3. Genera el componente equivalente para React, Angular y Blazor a partir de una plantilla por framework
4. Actualiza el archivo de exports/index de cada paquete automáticamente
5. Corre en CI antes de cada build, para garantizar que los paquetes nunca queden desincronizados de `icons/svg/`

---

## 8. CI/CD (GitHub Actions)

- **`build-and-test.yml`**: en cada push/PR — corre generación, build de los 3 paquetes, valida que no haya SVGs rotos o duplicados.
- **`publish-npm.yml`**: en push de tag (ej. `v1.0.0`) — build + publish a npm de `react` y `angular` bajo el scope `@mteherandev`.
- **`publish-nuget.yml`**: en push de tag — build + publish del paquete `ColombiaIcons.Blazor` a NuGet.org.

**Nota de credenciales:** los workflows quedan documentados y listos, pero el publish real requiere `NPM_TOKEN` y `NUGET_API_KEY` configurados como secrets del repo — esto se deja como tarea pendiente de configurar manualmente antes del primer release.

---

## 9. Licencia y versionado

- **Licencia:** MIT (ajustable)
- **Versionado:** Semantic Versioning (semver), sincronizado entre los 3 paquetes (misma versión para los 3 aunque se publiquen por separado)

---

## 10. Registro de ejecución de tareas (`logs/`)

Todo el trabajo queda documentado, no solo el código — el nivel de detalle depende del tamaño de la tarea:

**Tareas grandes y no repetitivas** (scaffolding inicial, script de generación, CI/CD, build de `apps/site`, y cualquier otra tarea estructural): cada una vive en `logs/<NNN>-<slug>/`, numerada secuencialmente en el orden en que se ejecuta, con dos archivos:
- `plan.md` — análisis de la tarea y los pasos que se van a seguir, escrito **antes** de empezar.
- `resultado.md` — qué se hizo realmente, qué cambió, y cualquier desviación respecto al plan, escrito **al terminar**.

Ejemplo: `logs/001-scaffolding-inicial/plan.md`, `logs/001-scaffolding-inicial/resultado.md`.

**Íconos individuales** (la tarea repetitiva de la sección 11): no usan `logs/`. Su historial vive directamente en `icons/manifest.json`, en un campo `historial` por ícono — así se evita generar ~180 archivos adicionales para un flujo que ya es uniforme y repetitivo.

---

## 11. Flujo de revisión y aprobación ícono por ícono

Prioridad: **calidad sobre velocidad**. No se generan íconos en lote sin revisión. El flujo es:

1. Claude Code crea/actualiza un archivo de control: `icons/manifest.json`, con un registro por ícono:
   ```json
   {
     "id": "condor",
     "categoria": "naturaleza",
     "estado": "pendiente",   // pendiente | en-revision | aprobado | rechazado
     "intentos": 0,
     "notas": "",
     "historial": []          // [{ "fecha": "2026-07-13", "accion": "generado" | "feedback" | "aprobado" | "rechazado", "nota": "" }]
   }
   ```
2. Para **un solo ícono a la vez**: Claude Code genera el SVG, lo guarda en `icons/svg/<categoria>/<id>.svg`, y muestra el SVG (código + una vista previa renderizada si es posible) para tu revisión.
3. Tú respondes con una de estas tres cosas:
   - **"Aprobado"** → el ícono pasa a `estado: aprobado`, se agrega su entrada en `README.md` y `README.es.md` (dentro de la tabla de íconos de su categoría), se agrega una entrada al `historial`, y se avanza al siguiente.
   - **Feedback específico** (ej. "el pico está muy grueso", "muévelo más al centro") → Claude Code ajusta ese mismo ícono, agrega una entrada al `historial` con el feedback recibido, y lo vuelve a mostrar (incrementa `intentos`).
   - **"Rechazado, saltar"** → se marca `rechazado`, se agrega una entrada al `historial`, y se sigue con el siguiente, para retomarlo después.
4. Claude Code **nunca avanza automáticamente** al siguiente ícono sin una aprobación explícita tuya.
5. `README.md` y `README.es.md` se actualizan ícono por ícono, nunca en lote — quedan sincronizados entre sí en todo momento.
6. Al final de cada categoría, Claude Code te muestra un resumen (aprobados / rechazados / pendientes) antes de pasar a la siguiente categoría.
7. Solo cuando **todos** los íconos de `icons/svg/` estén `aprobado`, se ejecuta el script de generación de los 3 paquetes (sección 7) y se completa la implementación real de `apps/site`. Esto evita regenerar componentes o la galería con íconos a medio revisar.

---

## 12. Prompt inicial para Claude Code

Copia y pega esto como primer mensaje en Claude Code, dentro del repo ya clonado (asegúrate de que este archivo esté guardado como `CLAUDE.md` en la raíz para que quede como contexto persistente):

```
Vas a ayudarme a construir el proyecto "colombia-icons", una librería de íconos
line-icon inspirada en Colombia, distribuible para React, Angular y Blazor.

Todo el contexto completo del proyecto (arquitectura, specs técnicas, lista de
íconos, empaquetado, CI/CD y criterios de aceptación) está en el archivo
CLAUDE.md en la raíz de este repo. Léelo primero y trabaja siguiéndolo al pie
de la letra.

Quiero que arranquemos en este orden, sin saltarte pasos:

1. Scaffolding inicial del monorepo:
   - Inicializa el repo con la estructura de carpetas de la sección 2 del brief.
   - Configura npm workspaces en la raíz (incluyendo apps/* además de packages/*).
   - Crea el esqueleto vacío de packages/react, packages/angular y
     packages/blazor (sin componentes todavía, solo la config base de cada
     paquete: package.json, tsconfig, ng-package.json, .csproj según aplique).
   - Crea el esqueleto vacío de apps/site (proyecto Vite + React base, sin
     galería ni contenido real todavía).
   - Crea icons/manifest.json vacío, listo para ir registrando cada ícono
     (con su campo historial, ver sección 11).
   - Crea README.md (inglés) y README.es.md (español) con la estructura fija
     inicial (intro, instalación por framework, licencia) y una sección
     "Íconos disponibles" vacía que se irá llenando ícono por ícono.
   - Crea la carpeta logs/ vacía, y registra este mismo scaffolding como
     logs/001-scaffolding-inicial/ (plan.md + resultado.md), según la
     sección 10.
   - No generes ningún SVG todavía en este paso.

2. Una vez el scaffolding esté listo y yo lo confirme, empezamos el flujo de
   revisión ícono por ícono descrito en la sección 11 del brief:
   - Empieza por la categoría "genericos" (son los de uso más inmediato).
   - Preséntame un ícono a la vez: muéstrame el código SVG y, si es posible,
     algún tipo de vista previa.
   - NO avances al siguiente ícono hasta que yo diga explícitamente
     "aprobado". Si te doy feedback, ajusta ese mismo ícono y vuelve a
     mostrármelo.
   - Actualiza icons/manifest.json (incluyendo su historial), README.md y
     README.es.md después de cada aprobación.

3. El script de generación de componentes (sección 7) y los workflows de
   CI/CD (sección 8) los construimos DESPUÉS de que todos los íconos de la
   v1.0 estén aprobados — no antes. Cada uno se registra como su propia
   tarea en logs/.

4. La implementación real de apps/site (galería navegable, descarga SVG/PNG)
   también se construye DESPUÉS de que todos los íconos estén aprobados — en
   el paso 1 solo existe su esqueleto vacío. También se registra en logs/.

Antes de escribir cualquier código, confírmame que entendiste el orden de
estos 4 pasos y muéstrame el plan de la estructura de carpetas que vas a
crear en el paso 1, para que yo la apruebe primero.
```

---

## 13. Criterios de aceptación v1.0

- [ ] Los ~93 SVG fuente están creados, optimizados y siguen la spec de la sección 3
- [ ] El script de generación produce correctamente los 3 paquetes sin intervención manual
- [ ] `npm install @mteherandev/colombia-icons-react` funciona en un proyecto React de prueba
- [ ] `npm install @mteherandev/colombia-icons-angular` funciona en un proyecto Angular de prueba
- [ ] El paquete Blazor se instala y renderiza correctamente en un proyecto de prueba
- [ ] CI corre build+test en cada PR sin fallos
- [ ] `README.md` (inglés) y `README.es.md` (español) están sincronizados, documentan instalación/uso para los 3 frameworks, y listan los ~93 íconos finales de v1.0
- [ ] `apps/site` compila a un `index.html` estático que muestra la galería completa de íconos por categoría, permite buscarlos por nombre, y permite descargar cada uno en SVG y PNG, en cualquiera de los 5 colores soportados (negro, gris, amarillo, azul, rojo)
- [ ] Cada tarea grande (scaffolding, script de generación, CI/CD, `apps/site`) tiene su `plan.md` y `resultado.md` en `logs/`, y cada ícono en `icons/manifest.json` tiene su `historial` completo