# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
The three published packages (React, Angular, Blazor) share a single version.

Every commit closes a minor version; major versions are cut only on request.

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
