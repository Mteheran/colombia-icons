# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
The three published packages (React, Angular, Blazor) share a single version.

## [Unreleased]

### Added

- Monorepo scaffolding: npm workspaces covering `packages/*` and `apps/*`.
- Empty package skeletons for `packages/react`, `packages/angular` and
  `packages/blazor`, plus the Vite + React skeleton for `apps/site`.
- `icons/manifest.json` as the review-and-approval control file, with a
  per-icon `historial`.
- 109 approved source icons in `icons/svg/`: 81 genéricos, 11 naturaleza,
  7 gastronomía, 6 cultura, 4 deportes.
- `README.md` (English) and `README.es.md` (Spanish) with badges, per-category
  icon counts, and the full icon tables.
- This changelog.

### Notes

- No package has been published to npm or NuGet yet.
- The `mapas` category has no approved icons so far.
- 30 icons are currently marked `rechazado` in the manifest and are pending
  a redesign pass.
