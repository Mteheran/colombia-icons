# Large icon design guide (48×48) — colombia-icons

> 🇪🇸 Versión en español: [guia-diseno-iconos-large.es.md](./guia-diseno-iconos-large.es.md)
> 📐 Base set (24×24): [icon-design-guide.md](./icon-design-guide.md)

This guide defines the standards for the **large-icons** set: `colombia-icons` drawn on a **48×48 px** canvas, meant to be displayed at a large size and with **more detail** than the 24×24 base set. It is an **independent** set: it lives in `icons/large-icons/`, has its own manifest, and **does not reuse** the base set's SVGs.

The goal is the same as the base set: any designer should be able to build an icon indistinguishable from the rest of the large set — same grid, same stroke, same style — in the tool of their choice (Figma, Illustrator, Inkscape, Boxy SVG, etc.).

The golden rule stands: **`icons/large-icons/` is the single source of truth for this set.** An icon does not exist until its SVG meets this guide and is approved. Icons are never drawn directly inside `packages/*` or `apps/site`.

---

## 1. Technical specification (mandatory)

Every large-set icon must meet exactly this:

| Parameter | Value | Notes |
|---|---|---|
| **Grid / canvas** | `48 × 48 px` | `viewBox="0 0 48 48"` — exactly 2× the base grid |
| **Style** | Line icon / outline | Outlines only, never a solid fill — same family as the base set |
| **Primary stroke width** | `1.5 px` | Identical across the primary stroke and the whole set |
| **Secondary detail width** | `1 px` (optional) | Interior fine detail only (textures, support lines). Don't overuse |
| **Color** | `stroke="currentColor"` | Inherits color via CSS from the consuming project |
| **Fill** | `fill="none"` | No fixed color fill |
| **Line caps** | `stroke-linecap="round"` | Rounded ends |
| **Line joins** | `stroke-linejoin="round"` | Rounded corners |
| **Format** | Optimized SVG (SVGO) | No metadata, no IDs, no `<style>`, no unnecessary transforms |

**Why 1.5 px on a 48 canvas and not 3 px:** what defines an icon's visual "weight" is stroke width **relative** to the grid (stroke ÷ canvas), not the absolute number.

| Stroke @ 48 | Relative weight | Result |
|---|---|---|
| 3 px | 1/16 | Identical to the base set, just "inflated" — gains no detail |
| 2 px | 1/24 | Refined, medium detail |
| **1.5 px** ✅ | **1/32** | **Fine stroke: maximum room for interior detail** |

Keeping 1.5 px (half the base set's relative weight) lets interior detail breathe — feathers, coffee beans, the weave of a sombrero vueltiao — without the lines clogging. That is the whole point of the large set.

These values are **not negotiable per icon**: if something forces a change, it's a global spec change discussed separately, not a local exception.

---

## 2. When to make a large icon (and when not)

The large set is **not** "the base set, bigger." An icon earns a large version only if the extra size is used for real detail. Before drawing, ask:

- Does the object have **texture or detail** that is lost at 24 px but enriches at 48 px? (condor feathers, wayuu bag weave, coffee beans) → **yes, good candidate**.
- Is it a simple shape (an arrow, a check, a square)? → it probably **adds nothing** at large size; let the base set cover it.
- A large icon may have **no base-set counterpart**, and vice versa. The two sets are independent.

> ⚠️ The large set **does not copy** base-set SVGs. Even when an icon shares a name (`condor.svg` exists in both), the large-set file is **redrawn from scratch** for 48×48, never scaled up from the 24×24 one.

---

## 3. Before drawing: find references

**Don't design from memory.** Before the first stroke:

1. Look up **the real object** (photos — how a frailejón, a vallenato accordion, or a condor actually looks). A recognizable icon starts from the real shape, not an approximate idea.
2. See **how reference line-icon sets solve it** — mainly [Lucide](https://lucide.dev) and [Tabler Icons](https://tabler.io/icons). For the large set, pay special attention to **how much interior detail** they allow before it turns to noise.
3. Only then decide **what detail to add**: unlike the base set, here you can keep secondary features — but choose the ones that reinforce recognition, not every one that exists.

---

## 4. Drawing area and margins

- Draw inside the **48×48** canvas, leaving a **safety margin**: most icons sit comfortably within a **~40×40** area (about 4 px of air per side — double the base set).
- The stroke should never touch the canvas edge unless the concept demands it (e.g. a line representing a horizon).
- Center **optically, not mathematically**. An icon can be centered by coordinates and still look unbalanced; nudge it by eye until it "weighs" in the center.
- Keep **perceived size consistent** across large-set icons: a simple icon and a complex one should occupy roughly the same visual box, so a gallery doesn't show some giant and some tiny.

---

## 5. Stroke and shape rules

- **Uniform primary stroke:** all structural strokes are drawn at **1.5 px**. Don't mix widths in the primary stroke to "add hierarchy."
- **Secondary detail at 1 px (optional):** only for interior textures or support lines (leaf veins, weave lines). It's the only exception to the single-width rule, and must be used sparingly — if an icon needs a lot of 1 px, it's probably overloaded.
- **Minimum detail size:** avoid features smaller than **~1.5 px**. Since the set is shown large (see section 6), fine detail does read, but below that it becomes a blob.
- **Snap to the pixel grid** where possible: straight horizontal/vertical lines on whole or half (.5) coordinates so they stay crisp.
- **Corner radii** consistent and soft — the set style is rounded, not hard-cornered.
- **Simplicity within detail:** more detail than the base set doesn't mean "every possible node." Every stroke must justify its presence.
- **No gradients, no shadows, no double outlines, no solid fill, no text** inside the icon. The large set is still **line-icon**, not illustration or duotone.

---

## 6. Intended usage size

- The large set is meant to be shown **large: ≥ 40 px on screen** (headers, featured cards, empty states, section heroes).
- It is **not** meant for small sizes. At 1.5 px over 48 px the stroke is fine and delicate; shrunk to 16–24 px it looks fragile. For small sizes, use the **24×24 base set**.
- When reviewing a large icon, evaluate it **at the large size it will be used at**, not shrunk down.

---

## 7. File naming

- Name in **`kebab-case`**, in **Spanish**, descriptive: `condor.svg`, `sombrero-vueltiao.svg`, `mochila-wayuu.svg`.
- Lowercase, numbers and hyphens only. No accents, no `ñ` (use `n`), no spaces, no uppercase.
- The name describes the object, not its hypothetical use.
- **No size suffix** (`condor.svg`, not `condor-48.svg`): the `large-icons/` folder already identifies the set. This makes it easy to map base ↔ large when the same icon exists in both.
- Store the file in its **category** folder, within the large set:
  `icons/large-icons/<category>/<id>.svg`

Valid categories (mirroring the base set): `naturaleza`, `cultura`, `gastronomia`, `mapas`, `deportes`, `genericos`. Filling all of them is not required — the large set only includes icons that benefit from large size (section 2).

---

## 8. Exported SVG structure

The SVG must end up **exactly** in this shape (same attribute order, all primary-stroke styling on the root `<svg>`, geometry in `<path>`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M24 10V38M10 24H38"/>
</svg>
```

If you use secondary detail at **1 px**, put it in a separate `<path>` with its own `stroke-width="1"` (the only exception to "all styling on the root"):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="..."/>                          <!-- primary stroke, inherits 1.5px from root -->
  <path stroke-width="1" d="..."/>          <!-- secondary detail, 1px -->
</svg>
```

Rules for this template:

- Primary-stroke style attributes (`stroke`, `stroke-width="1.5"`, `linecap`, `linejoin`, `fill="none"`) go on the root `<svg>`.
- The **only** allowed per-`<path>` override is `stroke-width="1"` for secondary detail. Nothing else is repeated or overridden.
- Prefer the **fewest paths** possible; multiple sub-paths can live in one `d` separated by a new `M` command.
- **Forbidden** in the final SVG:
  - `fill="#..."` or any fixed color (color is always `currentColor`)
  - `id`, `class`, `<style>`, `data-*`
  - `<title>`, `<desc>`, editor metadata
  - unnecessary `transform`s (flatten transforms before exporting)
  - `width`/`height` other than 48, or `viewBox` other than `0 0 48 48`

> ⚠️ Graphic editors often export "dirty" SVG (with `id`, `style`, transforms, and sometimes a fixed `fill`). Always run the optimization step in section 9 before considering it done.

---

## 9. Optimize with SVGO

Before delivering, optimize the SVG. The quick way without a permanent install:

```bash
npx svgo icons/large-icons/<category>/<id>.svg
```

After optimizing, **verify by hand** that the result still meets section 8: color is `currentColor`, `fill="none"`, no `id`/`style`, `viewBox` is still `0 0 48 48`, and SVGO did **not** collapse the `stroke-width="1"` on the secondary detail.

---

## 10. Pre-delivery checklist

- [ ] Canvas `48×48`, `viewBox="0 0 48 48"`
- [ ] Outline style, **no solid fills**
- [ ] Primary stroke **1.5 px** uniform; secondary detail only at 1 px and sparingly
- [ ] `stroke="currentColor"` and `fill="none"`
- [ ] `stroke-linecap="round"` and `stroke-linejoin="round"`
- [ ] Safety margins respected (~4 px, doesn't touch edges without reason)
- [ ] Detail **uses** the 48 size (if not, maybe it should be base-set only)
- [ ] Perceived size consistent with the rest of the large set
- [ ] Crisp and balanced **at the large usage size (≥40 px)**
- [ ] Style attributes on the root `<svg>`; only allowed override: `stroke-width="1"`
- [ ] No `id`, `class`, `style`, metadata or unnecessary transforms
- [ ] Name in `kebab-case`, no accents/`ñ`, no size suffix, in its category folder under `large-icons/`
- [ ] Optimized with SVGO and re-verified by hand
- [ ] **Color test:** changing the container's CSS `color` recolors the whole icon (confirms no fixed color remains)

---

## 11. Quick render test

To verify the icon inherits color and looks good on different backgrounds, drop it into a minimal HTML, **at the large usage size**:

```html
<div style="color:#003893; width:64px; height:64px">
  <!-- paste the <svg> content here (it will fill 64px wide) -->
</div>
```

Change `color` to black `#000000`, gray `#6B7280`, yellow `#FCD116`, blue `#003893` and red `#CE1126` (the 5 colors the site supports) and confirm the icon responds to all of them.

---

## 12. Delivery and approval flow

1. Place the final `.svg` in `icons/large-icons/<category>/<id>.svg`.
2. The icon enters the **icon-by-icon review flow** (see `CLAUDE.md`, section 11), but recorded in the large set's **own manifest**: `icons/large-icons/manifest.json`, with `estado: pendiente` and its `historial`.
3. It is reviewed **one at a time**. The response can be:
   - **Approved** → moves to `estado: aprobado`.
   - **Feedback** → the same icon is adjusted and shown again (`intentos` increments).
   - **Rejected, skip** → stays `rechazado` to revisit later.
4. **Priority: quality over speed.** Icons are never approved in bulk.

---

## 13. Common mistakes to avoid

- Scaling the base-set SVG up to 48 px instead of **redrawing** it with its own detail (ends up "inflated," not detailed).
- Using a 3 px stroke "because the canvas is bigger" — defeats the set's whole purpose (see section 1).
- Overusing 1 px detail until the icon becomes a tangle of lines.
- Turning the icon into illustration: fills, duotone, shadows. The large set is **still line-icon**.
- Designing and reviewing the icon shrunk to 16–24 px when its real use is ≥40 px.
- Exporting with a fixed black `fill` (the icon won't respond to the project's color).
- Names with accents, `ñ`, uppercase, spaces, or a `-48` suffix.
- Leaving editor `id`, `class` or `transform` in the final SVG.
