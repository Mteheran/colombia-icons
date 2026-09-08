# Symbol design guide (64×64) — colombia-icons

> 🇪🇸 Versión en español: [guia-diseno-symbols.es.md](./guia-diseno-symbols.es.md)
> 📐 Base set (24×24): [icon-design-guide.md](./icon-design-guide.md)
> 🔎 Large set (48×48): [large-icon-design-guide.md](./large-icon-design-guide.md)

This guide defines the standards for the **symbols** set: `colombia-icons` graphics drawn on a **64×64 px** canvas, meant to **represent** Colombian wildlife, plants, culture and landscape — not to operate an interface. It is an **independent** set: it lives in `icons/symbols/`, has its own manifest, and **does not reuse** the base-set or large-set SVGs.

The goal is a family of Colombian symbols large enough to keep the recognizable traits of the real referent, **without becoming a detailed or realistic illustration**. They are used in slides, infographics, maps, cards, collections and graphic pieces (Canva, Figma, PowerPoint, Keynote), where a 24 px icon falls short.

The golden rule stands: **`icons/symbols/` is the single source of truth for this set.** A symbol does not exist until its SVG meets this guide and is approved. Symbols are never drawn directly inside `packages/*` or `apps/site`.

---

## 1. Icon vs. symbol: which one are you drawing

Before opening the editor, be clear about which of the two languages you are working in. They are not the same drawing at a different size.

| Criterion | Icons (24 / 48) | Symbols (64) |
|---|---|---|
| **Function** | Action, navigation, user interaction | Cultural, natural or territorial representation |
| **Primary scale** | 16–24 px (48 px for the large set) | 64 × 64 px |
| **Detail** | Very low | Medium, controlled |
| **Recognition** | Generic shape | Traits specific to the real referent |
| **Interior strokes** | Very few | Allowed when they add identity |
| **Use** | UI and controls | Collections, maps, cards, visual systems, graphic pieces, infographics |

If what you are drawing is a *save*, a *search* or an *arrow*, it belongs to the base set, not to symbols. If it is a condor, a frailejón, a Barranquilla Carnival mask or the Sierra Nevada, it is a symbol.

---

## 2. Technical specification (mandatory)

Every symbol must meet exactly this:

| Parameter | Value | Notes |
|---|---|---|
| **Grid / canvas** | `64 × 64 px` | `viewBox="0 0 64 64"` |
| **Visual margin** | `6 px` approx. | The symbol never touches the canvas edges |
| **Usable area** | `≈ 52 × 52 px` | May vary slightly with the referent's shape |
| **Style** | Line / outline | Outlines only — same family as the other two sets |
| **Stroke width** | `2 px` | The **only** width across the symbol and the whole set |
| **Color** | `stroke="currentColor"` | Inherits color via CSS from the consuming project |
| **Fill** | `fill="none"` | No fixed color fill |
| **Line caps** | `stroke-linecap="round"` | Rounded ends |
| **Line joins** | `stroke-linejoin="round"` | Rounded corners |
| **Format** | Optimized SVG (SVGO) | Editable and scalable, no metadata, no IDs |

**Why 2 px and not 1.5 px:** what defines a piece's visual "weight" is stroke width **relative** to the canvas (stroke ÷ canvas), not the absolute number.

| Set | Canvas | Stroke | Relative weight |
|---|---|---|---|
| base | 24 | 1.5 px | 1/16 |
| large | 48 | 1.5 px | 1/32 |
| **symbols** | **64** | **2 px** ✅ | **1/32** |

2 px on 64 gives **exactly the same relative weight** as the large set: the three sets read as one family, and the symbol keeps enough air for its interior detail. A 1.5 px stroke at 64 px (1/42) would look fragile next to the rest; 3 px would clog the detail.

> ⚠️ **One single width.** Unlike the large set, there is **no** thinner secondary stroke here. If a detail only works by thinning the line, that detail is unnecessary.

These values are **not negotiable per symbol**: if something forces a change, it's a global spec change discussed separately, not a local exception.

---

## 3. Before drawing: find references

**Don't design from memory.** Before the first stroke:

1. Look up **the real object** (photos — how a frailejón, a vallenato accordion, a wayuu bag or an Andean condor actually looks). A recognizable symbol starts from the real shape, not an approximate idea. This matters more here than in the base set: a symbol is judged precisely on its specific traits.
2. Study **how reference line sets solve it** — mainly [Lucide](https://lucide.dev) and [Tabler Icons](https://tabler.io/icons) — to calibrate **how much interior detail** a line can carry before it turns into noise.
3. Only then decide **what to keep**: here you can preserve secondary traits, but pick the ones that reinforce recognition, not every one that exists.

---

## 4. Drawing area and margins

- Draw inside the **64×64** canvas leaving **~6 px of air per side**: the symbol sits comfortably in a **~52 × 52** area.
- The stroke must **never** touch the canvas edge, unless the concept demands it (a line representing a horizon, for example).
- Center **optically, not mathematically**. A symbol can be centered by coordinates and still look unbalanced; nudge it by eye until it "weighs" in the center.
- Keep a **consistent perceived size** across symbols: a simple one and a complex one should fill roughly the same visual box, so a gallery or a slide has no giants and no tiny pieces.
- **Don't fill the canvas.** Negative space is part of the design.

---

## 5. Stroke and breathing rules

Legibility depends as much on the width as on the **space between lines**. At 64 × 64 visual air comes first: lines must not stick together out of obligation, nor form dark masses.

- Keep a **single width** (2 px) across the whole family.
- **Separate** the outline, the interior traits and the secondary elements when joining them isn't necessary.
- Avoid **intersections or meetings of three or more lines** in small spaces.
- Use **intentional gaps**: let the eye complete the shape instead of closing every contour.
- **Minimum distance between independent strokes: 3 px**; prefer **4 px** when the detail allows.
- Don't turn "a single stroke" into a visual obligation. A symbol may contain **several separate sub-strokes** if that improves recognition.
- **Align to the pixel grid** where possible: straight horizontal/vertical lines on whole or half (.5) coordinates so they stay crisp.
- **Corner radii** consistent and soft — the set's style is rounded, not hard-cornered.

---

## 6. Level of detail

The 64 × 64 canvas brings back detail that had to be dropped at 24 × 24. Even so, a symbol **is still an abstraction**. Every detail answers one question: *does it help recognize the referent?*

- **Priority 1 — the overall silhouette.** It must work even before you look at the interior detail. If the silhouette isn't recognizable, no interior detail saves it.
- **Priority 2 — identifying traits.** Ears, beak, crest, leaves, snow, fruit, cultural patterns: whatever makes this referent *this* one and not another.
- **Priority 3 — secondary detail.** Added only when it **does not compete** with the main traits.

Avoid **textures, shading, hatching, patterns and decorative micro-detail**. No gradients, shadows, double outlines, solid fills, duotone or text inside the symbol: the set is still **line**, not illustration.

---

## 7. Intended display size

- The symbols set is meant to be shown **large: ≥ 64 px** (slides, infographics, maps, cards, section covers, graphic pieces).
- It must **still be understandable at 32 px**, even though that is not its primary use. If it turns into a blob at 32 px, it carries too much detail.
- It is **not** meant for 16–24 px: for small sizes use the **24×24 base set**.
- When reviewing a symbol, judge it **at the large size where it will be used** — then check it once at 32 px as a stress test.

---

## 8. File naming

- Name in **`kebab-case`**, in **Spanish**, lowercase, **no accents** and no `ñ` (use `n`). No spaces, no uppercase.
- The name **describes the real referent**, and here it can be more specific than in the base set, because a symbol names a concrete object rather than a UI action:
  `condor-de-los-andes.svg`, `sierra-nevada-santa-marta.svg`, `mascara-carnaval-barranquilla.svg`.
- **No size suffix** (`condor-de-los-andes.svg`, not `condor-64.svg`): the `symbols/` folder already identifies the set.
- Save the file in its **category** folder inside the symbols set:
  `icons/symbols/<category>/<id>.svg`

Valid categories: `naturaleza`, `cultura`, `gastronomia`, `mapas`, `urbano`, `historia`, `deportes`. **`genericos` does not apply to this set**: generic pieces are interface icons and live in the base set (see section 1).

---

## 9. Exported SVG structure

The SVG must come out **exactly** in this shape (same attribute order, all styling on the root `<svg>`, geometry in `<path>`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 12V52M12 32H52"/>
</svg>
```

Rules for this template:

- The styling attributes (`stroke`, `stroke-width="2"`, `linecap`, `linejoin`, `fill="none"`) live on the root `<svg>` and are **never overridden** on a `<path>`. This set has no stroke-width exceptions (section 2).
- Prefer **the fewest paths** possible; you can put several sub-strokes in one `d` separated by a new `M` command.
- **Not allowed** in the final SVG:
  - `fill="#..."` or any fixed color (the color is always `currentColor`)
  - `id`, `class`, `<style>`, `data-*`
  - `<title>`, `<desc>`, editor metadata
  - unnecessary `transform` (flatten transforms before exporting)
  - `width`/`height` other than 64, or a `viewBox` other than `0 0 64 64`

> ⚠️ Graphic editors usually export "dirty" SVG (with `id`, `style`, transforms and sometimes a fixed `fill`). Always run the optimization step in section 10 before calling it done.

---

## 10. Optimizing with SVGO

Optimize the SVG before handing it over. The quick way, with nothing installed permanently:

```bash
npx svgo icons/symbols/<category>/<id>.svg
```

After optimizing, **check by hand** that the result still meets section 9: color is `currentColor`, `fill="none"`, no `id`/`style`, the `viewBox` is still `0 0 64 64`, and `stroke-width="2"` is intact.

If you need raster versions, export them **from the master SVG** at 64, 128 and 256 px, without touching the drawing. (The site already offers a PNG download generated on the fly from that same SVG.)

---

## 11. Quick render test

To verify the symbol inherits color and reads well on different backgrounds, drop it into a minimal HTML page, **at its large display size**:

```html
<div style="color:#003893; width:96px; height:96px">
  <!-- paste the <svg> contents here (it will fill 96px wide) -->
</div>
```

Switch `color` to black `#000000`, gray `#6B7280`, yellow `#FCD116`, blue `#003893` and red `#CE1126` (the 5 colors the site supports) and confirm the symbol responds to all of them. Then repeat the view at **32 px** for the stress test in section 7.

---

## 12. Checklist before approving a symbol

- [ ] Is the **referent recognizable** without reading its name?
- [ ] Does the **silhouette** keep the main traits of the real object, animal, plant or landscape?
- [ ] `64×64` canvas, `viewBox="0 0 64 64"`, ~6 px margin respected (never touching the edges)
- [ ] **Uniform 2 px** stroke, with no `stroke-width` override anywhere
- [ ] Outline style, **no solid fills**, no textures, shadows or gradients
- [ ] `stroke="currentColor"` and `fill="none"`
- [ ] `stroke-linecap="round"` and `stroke-linejoin="round"`
- [ ] Minimum **3 px** (ideally 4) between independent strokes; no knots of 3+ lines
- [ ] Reads well at **64 px** and **still makes sense at 32 px**
- [ ] Perceived size consistent with the rest of the symbols set
- [ ] Clean SVG: no `id`, `class`, `style`, metadata or unnecessary transforms
- [ ] `kebab-case` name with no accents or `ñ`, no size suffix, in its category folder inside `symbols/`
- [ ] Optimized with SVGO and re-checked by hand
- [ ] **Color test:** changing the container's CSS `color` recolors the symbol completely (confirms no fixed color survived)
- [ ] The abstraction **feels coherent** with the other Colombia symbols

---

## 13. Handoff and approval flow

1. Put the final `.svg` in `icons/symbols/<category>/<id>.svg`.
2. The symbol enters the **one-at-a-time review flow** (see `CLAUDE.md`, section 11), recorded in the **set's own manifest**: `icons/symbols/manifest.json`, with `estado: pendiente` and its `historial`.
3. It is reviewed **one at a time**. The answer can be:
   - **Approved** → moves to `estado: aprobado` and shows up in the site gallery.
   - **Feedback** → the same symbol is adjusted and shown again (`intentos` goes up).
   - **Rejected, skip** → stays `rechazado` to be picked up later.
4. **Quality over speed.** Symbols are never approved in batches.

> For now the symbols set **does not ship in the packages** for React, Angular or Blazor: you use it by downloading the SVG or PNG from the site.

---

## 14. Common mistakes to avoid

- Scaling a base-set or large-set icon up to 64 px instead of **redrawing** it: it comes out inflated, not detailed.
- Drawing a **UI icon** (save, search, arrow) as a symbol. That's the base set (section 1).
- Mixing stroke widths "for hierarchy". This set has one width: **2 px**.
- Letting lines stick together into dark masses, or crossing 3+ strokes within a few pixels.
- Turning it into illustration: textures, hatching, shadows, duotone, solid fills.
- Filling the canvas to the edge: the 6 px margin is part of the spec.
- Designing and reviewing the symbol shrunk to 16–24 px when its real use is ≥ 64 px.
- Exporting with a fixed black `fill` (it won't respond to the project's color).
- Names with accents, `ñ`, uppercase, spaces or a `-64` suffix.
- Leaving the editor's `id`, `class` or `transform` in the final SVG.
