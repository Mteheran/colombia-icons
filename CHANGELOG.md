# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
The three published packages (React, Angular, Blazor) share a single version.

Every commit closes a minor version; major versions are cut only on request.

## [0.28.0] - 2026-09-08

### Added

- Symbols: a third icon set, drawn on a 64 × 64 canvas with a single 2 px
  stroke. Symbols are not interface icons — they represent Colombian wildlife,
  plants, culture and landscape with the traits of the real referent, for
  slides, infographics, maps and graphic pieces (Canva, Figma, PowerPoint).
- Design guides for the symbols set, in Spanish and English:
  `docs/guia-diseno-symbols.es.md` and `docs/symbol-design-guide.md`. They
  cover the icon-vs-symbol distinction, the technical spec, the breathing rules
  (6 px margin, ~52 × 52 usable area, 3 px minimum between strokes), the detail
  priorities, naming, SVG structure and the approval checklist.
- Site: a Symbols tab in the gallery, with its own spec strip, guide link and
  preview sizes (32 / 64 / 128 in the icon dialog), plus an empty-set state
  that points to the guide while no symbol is approved yet.

### Changed

- Site: the icon dialog now shows the code snippet and copy button only for the
  base set — the sets that do not ship in the packages show the download note
  instead.
- READMEs: the design section now describes the three sets (24 × 24, 48 × 48,
  64 × 64) in a table and links all six guides. The large-set guides were
  missing from both READMEs.
- All design guides cross-link to each other.

## [0.27.0] - 2026-09-04

### Fixed

- Icons (cultura): `chiva-bus`, `guiro` — restores the solid fills that were
  lost when the designer's Illustrator files were normalized. Fifteen shapes
  across three icons (the chiva's front sign and side dots, the guiro's ten
  notches, the sierra's two sky dots) were rendering as hollow outlines
  because the root `fill="none"` overrode them.
- Icons (naturaleza): `sierra-nevada` — same fill restoration; geometry is
  unchanged and now matches the designer's originals exactly.

## [0.26.0] - 2026-09-03

### Added

- Icons (genericos): `carpeta-abierta`, `minimizar`, `alinear-justificado`,
  `tachado`, `campana-silenciada`, `usuario-check`, `usuario-editar`,
  `escudo-alerta`, `grabar`, `aleatorio`, `nublado-parcial`, `niebla`,
  `gota`, `alarma`, `historial`, `calendario-evento`, `tendencia-arriba`,
  `tendencia-abajo`

All eighteen close gaps in families the set already had: the fourth text
alignment and the fourth text style, the counterpart to `maximizar`, the
muted bell alongside `volumen-silenciado`, two more user badges, the two
transport controls missing next to `reproducir`/`pausa`/`detener`, three
weather states, three time icons, and the trend pair for the chart family.
The approved icon count goes from 256 to 274.

## [0.25.0] - 2026-09-01

### Removed

- Icons (naturaleza): `frailejon`, `arrecife-coral`

Both are deactivated for legibility: they did not read clearly at small sizes.
They move to `rechazado` in the manifest and drop out of the packages, the
gallery and the READMEs, but their SVG files are kept so they can be redrawn
and brought back later. The approved icon count goes from 258 to 256.

**Breaking:** the `Frailejon` and `ArrecifeCoral` components (and the
`frailejon` / `arrecife-coral` names for `<ci-icon>`) are no longer exported by
any of the three packages.

### Changed

- The home page no longer uses either icon: the hero strip swaps them for
  `colibri` and `mar-caribe`, and the install snippet now shows `Colibri`
  instead of `Frailejon`
- The demo phone's fifth category tile becomes "Palmas" / "Palms" /
  "Palmeiras" with `palma-de-cera`, replacing the "Páramo" tile that depended
  on `frailejon`
- The gallery search placeholder suggests `colibri` instead of `frailejon`

## [0.24.0] - 2026-09-01

### Added

- Icons (naturaleza): `colibri`, `planta-de-cafe`, `sierra-nevada-santa-marta`
- Icons (cultura): `mascara-carnaval-barranquilla`

All four are designer contributions. `colibri` and `planta-de-cafe` replace
drafts that had been rejected and never published, so this is their first
release. `sierra-nevada-santa-marta` and `mascara-carnaval-barranquilla` are
new ids that sit alongside the already published `sierra-nevada` and
`carnaval-barranquilla` rather than replacing them, giving each subject a
second treatment. The approved icon count goes from 254 to 258.

## [0.23.0] - 2026-08-31

### Added

- Categories `urbano` and `historia`, so city landmarks and heritage sites are
  no longer filed under maps
- Gallery on the site now has two icon-set tabs: **Icons** (24 × 24, selected
  by default and showing exactly what it showed before) and **Large icons**
  (48 × 48)
- Each tab carries a spec card with the set's canvas, stroke, safe area and how
  it is consumed, plus a link to that set's design guide — in Spanish, English
  and Portuguese

### Changed

- Icons moved out of `mapas`: `bogota-torre` and `medellin-metro` to `urbano`;
  `cartagena-murallas`, `cartagena-iglesia` and `ciudad-perdida` to `historia`;
  `sierra-nevada`, `cocora-valle` and `salto-del-tequendama` to `naturaleza`.
  Icon ids and artwork are untouched, so the generated components are
  unchanged and no import breaks
- The icon modal now reads the specs from the icon's own set (48 × 48 and a
  1.5 + 1 px stroke for the large set) and previews it at 24/48/96
- Large icons are offered as SVG/PNG downloads only, with a note explaining
  that the set does not ship in the React, Angular or Blazor packages yet

## [0.22.0] - 2026-08-31

### Added

- Icons (mapas): `bogota-torre`, `cartagena-murallas`, `cartagena-iglesia`, `medellin-metro`, `salto-del-tequendama`, `ciudad-perdida`, `isla-san-andres`, `sierra-nevada`, `cocora-valle`
- Icons (naturaleza): `selva-amazonica`

Ten of the eleven icons in this release are new to the packages. Four of
them (`bogota-torre`, `cartagena-murallas`, `medellin-metro`,
`selva-amazonica`) replace drafts that had been rejected and never
published, so this is their first release. `cartagena-iglesia` is new to
the icon spec, which listed only `cartagena-murallas` for Cartagena. The
approved icon count goes from 244 to 254, and `mapas` grows from 6 icons to
15 — it now covers all the landmarks the spec reserved for it.

### Changed

- `ruana` is redrawn: it now shows the garment spread open with the collar
  flaps falling forward and the fringe running along both lower edges,
  instead of the front-facing version shipped in 0.21.0.

## [0.21.0] - 2026-08-25

### Added

- Icons (cultura): `tejo`, `ruana`, `carnaval-barranquilla`, `chiva-bus`, `guacharaca`, `guiro`
- Icons (gastronomia): `bandeja-paisa`
- Icons (mapas): `silueta-colombia`, `region-caribe`, `region-andina`, `region-pacifica`, `region-orinoquia`, `region-amazonica`

All thirteen were contributed by an external designer. Seven of them
(`tejo`, `ruana`, `carnaval-barranquilla`, `chiva-bus`, `guacharaca`,
`bandeja-paisa`, `silueta-colombia`) replace earlier drafts that had been
rejected and were never published, so this is their first release. The
approved icon count goes from 231 to 244, and `mapas` ships for the first
time.

### Changed

- `guiro` joins the cultura list in the icon spec, and the Amazon region
  icon ships as `region-amazonica` rather than the `region-amazonia` name
  the spec originally reserved.

## [0.20.0] - 2026-08-22

### Added

- Icons (genericos): `usuarios`, `fuego`, `fuego-llama`, `brujula`

## [0.19.0] - 2026-08-22

### Added

- Icons (genericos — Tier 1 UI): `deshacer`, `rehacer`, `interruptor`, `tabla`, `documento`, `mensajes`, `responder`, `reenviar`, `bandeja-entrada`, `arroba`, `diana`, `cronometro`, `reloj-arena`

## [0.18.0] - 2026-08-20

### Added

- Icons (genericos — text formatting): `negrita`, `cursiva`, `subrayado`, `alinear-izquierda`, `alinear-centro`, `alinear-derecha`, `lista-numerada`, `lista-vinetas`
- Icons (genericos — drawing & editing): `paleta`, `cuentagotas`, `tijeras`, `pegar`, `resaltador`

## [0.17.0] - 2026-08-18

### Added

- Icons (genericos — accessibility): `accesibilidad`, `huella`, `idioma`, `qr`, `sincronizar`
- Icons (genericos — weather): `lluvia`, `nieve`, `viento`, `termometro`
- Icons (genericos — data & charts): `grafico-barras`, `grafico-lineas`, `grafico-circular`, `grafico-area`, `analitica`, `embudo`
- Icons (genericos — system & infrastructure): `base-de-datos`, `bases-de-datos`, `servidor`, `papelera-reciclaje`, `calculadora`, `disco`
- Icons (genericos — devices): `laptop`, `tablet`, `auriculares`, `mouse`, `reloj-inteligente`, `altavoz`

## [0.16.0] - 2026-08-15

### Added
- Contributors section in `README.md` and `README.es.md`, following the [all-contributors](https://allcontributors.org/) specification, crediting Miguel Teheran and Anyi Orrego (icon design)
- `.all-contributorsrc` config and `contributors:add` / `contributors:generate` / `contributors:check` npm scripts to manage contributor credits

## [0.15.0] - 2026-08-15

### Changed
- Icons (cultura): redesigned `acordeon-vallenato` and `sombrero-aguadeno` from hand-refined artwork
- Icons (gastronomia): redesigned `patacon` and `sancocho` from hand-refined artwork
- Icons (naturaleza): redesigned `jaguar` from hand-refined artwork

## [0.14.0] - 2026-08-14

### Added

- Site: Portuguese (`pt`) alongside Spanish and English, with an ES / EN / PT switch that persists and follows the browser locale.
- Site: a sixth `tricolor` icon color — the flag gradient — available in the gallery, the detail modal and both SVG and PNG downloads, next to black, gray, yellow, blue and red.
- Site: a design-guide section (the icon rules, per language) and an issues section with a ready-to-copy bug / new-icon template.
- Docs: `docs/diseno-sitio-web.md` documenting the site structure, layout, design tokens and conventions for future changes.

### Changed

- Site: redesigned the gallery page from the design handoff — sticky nav, an editorial hero with a per-framework install card, a live totals bar, and a gallery with instant search, category chips with counts, and grid / compact / list views.
- Site: the icon detail modal now shows 16 / 24 / 48 px previews, a spec table, a per-framework snippet with copy-to-clipboard, and SVG / PNG 512 downloads.
- Site: the travel demo is now an interactive mini-app — switchable tabs, selectable categories, a like toggle and a live search field — instead of a static preview.

### Fixed

- Site: buttons no longer repaint their label red on hover; the red "Report a bug" button stayed unreadable (red-on-red) and now darkens instead.

## [0.13.0] - 2026-08-12

### Changed

- Icon (cultura): `sombrero-vueltiao` redesigned from a flat front view with a zigzag band to a 3/4 profile — crown with band lines on the left and a wide curved brim projecting to the right — making it read more clearly as a hat.
- Site: replaced the placeholder favicon with the `arepa` icon in the flag palette (yellow `#FCD116` on a rounded blue `#003893` tile).

## [0.12.0] - 2026-08-11

### Added

- Icons (genericos): `filtro`, `ordenar`, `enlace-externo`, `cuadricula`, `lista-vista`, `escudo`, `llave`, `cerrar-sesion`, `iniciar-sesion`, `interrogacion`, `power`, `chevron-arriba`, `chevron-abajo`, `chevron-izquierda`, `chevron-derecha`, `mas-circulo`, `menos-circulo`, `zoom-mas`, `zoom-menos`, `detener`, `anterior`, `siguiente`, `adelantar`, `retroceder`, `nube`, `nube-descargar`, `nube-subir`, `etiqueta`, `mapa`, `bolsa-compras` — 30 new generic UI icons: navigation/UI helpers (filter, sort, external link, grid/list view toggle, four chevrons), plus/minus-in-circle, zoom in/out, media transport (stop, previous, next, skip forward, rewind), cloud trio (cloud, download, upload), tag, map and shopping bag, plus account/security icons (shield, key, log-out/log-in pair, help, power). Library now at 174 icons total.

## [0.11.0] - 2026-08-10

### Added

- Icons (gastronomía): `ajiaco`, `arepa-de-choclo`, `arepa-de-huevo`,
  `chicharron`, `sancocho` — five dishes that were previously skipped,
  contributed as new designs and normalized to the icon spec (24x24,
  1.5px stroke, `currentColor`). Gastronomía now has 12 approved icons.

### Changed

- Redesigned four gastronomía icons with contributed artwork:
  `arepa`, `arepa-boyacense`, `empanada`, `patacon`.

## [0.10.0] - 2026-08-10

### Added

- Icons (genericos): `enviar`, `sol`, `luna` — completes the "Top 10 most-used app icons" set with send (paper plane) and the light/dark theme toggle pair (sun and moon). Library now at 139 icons total.

## [0.9.0] - 2026-08-10

### Added

- Icons (genericos): `microfono-estudio`, `cohete`, `maletin`, `bug`, `bug-mariquita`, `campana`, `campana-sonando`, `corazon`, `ojo`, `ojo-cerrado`, `ubicacion`, `carrito`, `tarjeta`, `enlace`, `reproducir`, `pausa` — 16 new generic UI icons, bringing the library to 136 icons total. Includes a second microphone style (studio/podcast), a rocket, a briefcase, two bug styles (beetle and ladybug), a bell plus a ringing variant, and the first batch of the "most-used app icons" set: heart, show/hide password (eye / eye-closed), map pin, shopping cart, credit card, link, and play/pause media controls.

## [0.8.0] - 2026-08-02

### Fixed

- Companion site (`apps/site`) rendered a blank page on the custom domain
  `https://colombia-icons.com/`. The build used a `/colombia-icons/` base
  path (for the old `github.io/colombia-icons/` project URL), so the app's
  JS and CSS were requested under `/colombia-icons/assets/…` and 404'd on
  the apex domain, leaving `#root` empty. The base is now `/` so assets load
  from the domain root.

### Added

- `CNAME` file for the site (`apps/site/public/CNAME` → `colombia-icons.com`)
  so the custom domain is preserved on every GitHub Pages deploy.

## [0.7.0] - 2026-08-01

### Added

- README files for the React and Angular npm packages
  (`@mteherandev/colombia-icons-react`, `@mteherandev/colombia-icons-angular`),
  so their npm pages show installation, usage, props and an icon overview
  (previously the npm pages had no README).
- Interactive "Colombia Travel" demo on the companion site (`apps/site`): a
  travel & tourism app mockup that uses the icons for navigation (bottom bar,
  search) and for the services/experiences it offers, switchable from the
  gallery. Renders the same source SVGs the gallery does (dogfooding).

### Changed

- The root README's package table now links the "npm" column to the published
  React and Angular package pages, and the site's install note reflects that
  both packages are already published (Blazor pending on NuGet).

## [0.6.0] - 2026-08-01

### Fixed

- Regenerated the React, Angular and Blazor packages so the 11 generic icons
  documented back in 0.3.0 (`lista-tareas`, `clip`, `clip-vertical`,
  `usuario-agregar`, `usuario-eliminar`, `usuario-inactivo`, `monitor`,
  `monitor-configuracion`, `monitor-editar`, `regalo`, `pergamino`) are now
  actually shipped as components — they were listed and approved but had never
  been generated into the packages (109 vs 120).

## [0.5.0] - 2026-07-31

### Added

- Large icon set (`icons/large-icons/`): a separate, more-detailed 48×48
  line-icon set with its own manifest and category folders, independent from
  the 24×24 base set and drawn from scratch rather than scaled up.
- Large-set design guide (English and Spanish): `docs/large-icon-design-guide.md`
  and `docs/guia-diseno-iconos-large.es.md`, documenting the 48×48 / 1.5px spec,
  optional 1px secondary detail, when an icon earns a large version, and the
  review flow.
- Large icons (gastronomia): `pescado-frito`
- Large icons (naturaleza): `orquidea`

## [0.4.0] - 2026-07-25

### Added

- README section (English and Spanish) explaining how to register
  colombia-icons in a consuming project's `CLAUDE.md` / `AGENTS.md`, with a
  ready-to-paste block and usage conventions so AI coding assistants reach for
  the library instead of inlining raw SVG or another icon set.

## [0.3.0] - 2026-07-25

### Added

- Icons (genéricos): `lista-tareas`, `clip`, `clip-vertical`, `usuario-agregar`,
  `usuario-eliminar`, `usuario-inactivo`, `monitor`, `monitor-configuracion`,
  `monitor-editar`, `regalo`, `pergamino`.
- Component generation script (`scripts/generate/index.js`) that turns the
  `icons/svg/` source of truth into React, Angular and Blazor components.
- React and Angular packages now ship generated, tree-shakeable icon
  components built from the approved icon set.
- Blazor Razor Class Library (`ColombiaIcons.Blazor`) with one component per
  icon, ready to publish to NuGet.
- CI/CD workflows to publish the npm packages (`publish-npm.yml`) and the
  NuGet package (`publish-nuget.yml`) on version tags.
- Designer documentation: step-by-step icon design guides in English
  (`docs/icon-design-guide.md`) and Spanish (`docs/guia-diseno-iconos.es.md`),
  linked from both READMEs.

## [0.2.0] - 2026-07-19

### Changed

- The site deploy workflow now runs on actions built for the Node 24 runtime
  (`checkout@v7`, `setup-node@v7`, `configure-pages@v6`,
  `upload-pages-artifact@v5`, `deploy-pages@v5`), clearing the Node 20
  deprecation warning GitHub raises on every run.
- The workflow builds the site with Node 22 instead of Node 20.

## [0.1.0] - 2026-07-19

### Added

- Monorepo scaffolding: npm workspaces covering `packages/*` and `apps/*`.
- Empty package skeletons for `packages/react`, `packages/angular` and
  `packages/blazor`, plus the Vite + React skeleton for `apps/site`.
- `icons/manifest.json` as the review-and-approval control file, with a
  per-icon `historial`.
- 109 approved source icons in `icons/svg/`: 81 genéricos, 11 naturaleza,
  7 gastronomía, 6 cultura, 4 deportes.
- `README.md` (English) and `README.es.md` (Spanish) with badges, per-category
  icon counts, links to the GitHub repo, and the full icon tables.
- This changelog.
- Repository metadata (`repository`, `bugs`, `homepage`) in the root
  `package.json`.
- `actualizar-changelog` project skill, which keeps this file up to date as
  part of every commit.
- Gallery site (`apps/site`): searchable, category-filtered icon browser with
  a per-icon color selector (black, gray, and the three flag colors), SVG and
  PNG download, and an enlarged preview modal. Deployed to GitHub Pages at
  https://mteheran.github.io/colombia-icons/.
- `deploy-pages.yml` workflow, which lints, builds, and publishes the site on
  every push to `main` that touches `apps/site` or `icons`.
- Light/dark theme toggle on the site. Dark is the default regardless of the
  operating system setting; the choice persists across visits and is applied
  before first paint so the page never flashes the wrong theme.

### Changed

- The READMEs list icon names instead of embedding SVG previews. GitHub
  renders `stroke="currentColor"` as black when serving the files directly,
  which made every preview invisible in dark mode.

### Notes

- No package has been published to npm or NuGet yet.
- The `mapas` category has no approved icons so far.
- 30 icons are currently marked `rechazado` in the manifest and are pending
  a redesign pass.
