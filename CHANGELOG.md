# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
The three published packages (React, Angular, Blazor) share a single version.

Every commit closes a minor version; major versions are cut only on request.

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
