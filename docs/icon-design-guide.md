# Icon design guide — colombia-icons

> 🇪🇸 Versión en español: [guia-diseno-iconos.es.md](./guia-diseno-iconos.es.md)

This guide defines, step by step, the standards **any designer** must follow to create a `colombia-icons` icon by hand in the tool of their choice (Figma, Illustrator, Inkscape, Boxy SVG, etc.). The goal is that every new icon is indistinguishable from the rest of the set: same grid, same stroke, same style.

The project's golden rule: **`icons/svg/` is the single source of truth.** An icon does not exist until its SVG meets this guide and is approved. Never draw directly inside `packages/*` or `apps/site`.

---

## 1. Technical specification (mandatory)

Every icon must match this exactly:

| Parameter | Value | Notes |
|---|---|---|
| **Grid / canvas** | `24 × 24 px` | `viewBox="0 0 24 24"` |
| **Style** | Line icon / outline | Outlines only, never solid fills |
| **Stroke width** | `1.5 px` | Identical across the whole icon and the whole set |
| **Color** | `stroke="currentColor"` | Inherits color via the consumer project's CSS |
| **Fill** | `fill="none"` | No fixed color fill |
| **Line caps** | `stroke-linecap="round"` | Rounded ends |
| **Line joins** | `stroke-linejoin="round"` | Rounded corners |
| **Format** | Optimized SVG (SVGO) | No metadata, no IDs, no `<style>`, no unneeded transforms |

These values are **not negotiable per icon**: if something forces a change, that's a global spec change discussed separately — not a local exception.

---

## 2. Before drawing: find references

**Don't design from memory.** Before the first stroke:

1. Look up **the real object** (photos — what a sombrero vueltiao, a frailejón, or a vallenato accordion actually looks like). A recognizable icon starts from the real shape, not an approximate idea.
2. See **how reference line-icon sets solve it** — mainly [Lucide](https://lucide.dev) and [Tabler Icons](https://tabler.io/icons). Study their level of detail, how they simplify, and how they distribute visual weight in 24×24.
3. Only then decide **what to simplify**: a 24 px icon can't carry every detail of the real object; keep only the traits that make it recognizable at a glance.

---

## 3. Drawing area and margins

- Draw inside the **24×24** canvas, but keep a **safe margin**: most icons live comfortably within a **~20×20** area (about 2 px of air on each side).
- The stroke should never touch the canvas edge unless the concept requires it (e.g. a line representing a horizon).
- Center **optically, not mathematically**. An icon can be centered by coordinates and still look unbalanced; nudge it by eye until it "sits" in the center.
- Keep **perceived size consistent** across icons: a simple icon (a star) and a complex one (a bandeja paisa) should fill roughly the same visual box, so a gallery doesn't show some giant and some tiny.

---

## 4. Stroke and shape rules

- **One stroke weight only:** everything is drawn at 1.5 px. Don't mix widths to "add hierarchy".
- **Align to the pixel grid** when possible: straight horizontal/vertical lines on integer or half (.5) coordinates so they render crisp.
- **Corner radii** consistent and soft — the set's style is rounded, not hard-cornered.
- **Simplicity first:** fewer nodes = better. If you can express the idea with fewer strokes, do it.
- **No gradients, no shadows, no double outlines, no text** inside the icon.
- **Expand strokes to outlines only if the geometry needs it**; the final result must still export as `stroke` lines, not filled shapes.
- Avoid details smaller than ~2 px: they vanish when the icon renders at 16 px.

---

## 5. File naming

- Name in **`kebab-case`**, in **Spanish**, descriptive: `sombrero-vueltiao.svg`, `taza-de-tinto.svg`, `usuario-agregar.svg`.
- Lowercase, numbers and hyphens only. No accents, no `ñ` (use `n`), no spaces, no uppercase.
- The name describes the object, not a hypothetical use (`candado.svg`, not `seguridad.svg`).
- Save the file in its **category** folder:
  `icons/svg/<category>/<id>.svg`

Valid categories: `naturaleza`, `cultura`, `gastronomia`, `mapas`, `deportes`, `genericos`.

---

## 6. Structure of the exported SVG

The SVG must end up **exactly** in this shape (same attribute order, all styling on the root `<svg>`, geometry in `<path>`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5V19M5 12H19"/>
</svg>
```

Rules for this template:

- Styling attributes (`stroke`, `stroke-width`, `linecap`, `linejoin`, `fill="none"`) live on the root `<svg>`, **not repeated** on each `<path>`.
- Prefer **a single `<path>`** when possible; you can use several sub-paths inside one `d` separated by a new `M` command.
- **Forbidden** in the final SVG:
  - `fill="#..."` or any fixed color (color is always `currentColor`)
  - `id`, `class`, `<style>`, `data-*`
  - `<title>`, `<desc>`, editor metadata
  - Unnecessary `transform` (flatten transforms before exporting)
  - `width`/`height` other than 24, or a `viewBox` other than `0 0 24 24`

> ⚠️ Graphic editors usually export "dirty" SVG (with `id`, `style`, transforms, sometimes a fixed `fill`). Always run the optimization step in section 7 before considering it done.

---

## 7. Optimize with SVGO

Before handing off, optimize the SVG. The quick way with nothing permanently installed:

```bash
npx svgo icons/svg/<category>/<id>.svg
```

After optimizing, **verify by hand** that the result still meets section 6 (SVGO sometimes leaves or converts things): color is `currentColor`, `fill="none"`, no `id`/`style`, and the `viewBox` is still `0 0 24 24`.

---

## 8. Pre-handoff verification (checklist)

- [ ] Canvas `24×24`, `viewBox="0 0 24 24"`
- [ ] Outline style, **no solid fills**
- [ ] Uniform **1.5 px** stroke across the whole icon
- [ ] `stroke="currentColor"` and `fill="none"`
- [ ] `stroke-linecap="round"` and `stroke-linejoin="round"`
- [ ] Safe margins respected (doesn't touch edges without reason)
- [ ] Perceived size consistent with the rest of the set
- [ ] Crisp and recognizable **at 16 px too**
- [ ] Styling on the root `<svg>` (single `<path>` if possible)
- [ ] No `id`, `class`, `style`, metadata, or unnecessary transforms
- [ ] `kebab-case` name without accents or `ñ`, in its category folder
- [ ] Optimized with SVGO and re-verified by hand
- [ ] **Color test:** changing the container's CSS `color` recolors the whole icon (confirms no fixed color remains)

---

## 9. Quick render test

To confirm the icon truly inherits color and looks good on different backgrounds, drop it into a minimal HTML:

```html
<div style="color:#003893; font-size:0; padding:24px">
  <!-- paste the <svg> content here -->
</div>
```

Change `color` to black `#000000`, gray `#6B7280`, yellow `#FCD116`, blue `#003893`, and red `#CE1126` (the 5 colors the site supports) and confirm the icon responds to all of them.

---

## 10. Handoff and approval flow

1. Place the final `.svg` at `icons/svg/<category>/<id>.svg`.
2. The icon enters the **icon-by-icon review flow** (see `CLAUDE.md`, section 11): it's registered in `icons/manifest.json` with `estado: pendiente` and its `historial`.
3. It's reviewed **one at a time**. The response can be:
   - **Approved** → moves to `estado: aprobado` and is added to `README.md` / `README.es.md`.
   - **Feedback** → the same icon is adjusted and shown again (increments `intentos`).
   - **Rejected, skip** → stays `rechazado` to revisit later.
4. **Priority: quality over speed.** Icons are not approved in batches. An icon doesn't enter the packages until it's `aprobado`.

---

## 11. Common mistakes to avoid

- Exporting with a fixed black `fill` (the icon won't respond to the project's color).
- Leaving the editor's default stroke width (1 px or 2 px) instead of 1.5 px.
- Mixing straight and rounded line caps.
- Icons that touch the edge and look "cramped" compared to the rest.
- Too much detail: looks fine at 48 px but turns into a blob at 16 px.
- Names with accents, `ñ`, uppercase, or spaces.
- Leaving the editor's `id`, `class`, or `transform` in the final SVG.
