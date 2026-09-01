import manifest from '../../../../icons/manifest.json'
import largeManifest from '../../../../icons/large-icons/manifest.json'

const baseSources = import.meta.glob('../../../../icons/svg/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const largeSources = import.meta.glob('../../../../icons/large-icons/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export type Categoria =
  | 'naturaleza'
  | 'cultura'
  | 'gastronomia'
  | 'mapas'
  | 'urbano'
  | 'historia'
  | 'deportes'
  | 'genericos'

/**
 * The two icon sets are independent (see docs/large-icon-design-guide.md):
 * `base` is the 24×24 set that ships in the packages, `large` the 48×48 set
 * redrawn from scratch for detail. They never share an SVG.
 */
export type IconSet = 'base' | 'large'

export type Icon = {
  id: string
  categoria: Categoria
  svg: string
  set: IconSet
}

type ManifestEntry = {
  id: string
  categoria: Categoria
  estado: 'pendiente' | 'en-revision' | 'aprobado' | 'rechazado'
}

export const CATEGORY_LABELS: Record<Categoria, string> = {
  naturaleza: 'Naturaleza',
  cultura: 'Cultura',
  gastronomia: 'Gastronomía',
  mapas: 'Mapas',
  urbano: 'Urbano',
  historia: 'Historia',
  deportes: 'Deportes',
  genericos: 'Genéricos',
}

/**
 * Only approved icons ship to the gallery — the manifest is the source of
 * truth for review state, so icons appear here as they get approved without
 * any change to this file.
 */
function loadSet(
  entries: ManifestEntry[],
  sources: Record<string, string>,
  dir: string,
  set: IconSet,
): Icon[] {
  return entries
    .filter((entry) => entry.estado === 'aprobado')
    .map((entry) => {
      const path = `../../../../icons/${dir}/${entry.categoria}/${entry.id}.svg`
      const svg = sources[path]
      return svg ? { id: entry.id, categoria: entry.categoria, svg, set } : null
    })
    .filter((icon): icon is Icon => icon !== null)
}

export const icons: Icon[] = loadSet(
  (manifest as { icons: ManifestEntry[] }).icons,
  baseSources,
  'svg',
  'base',
)

export const largeIcons: Icon[] = loadSet(
  (largeManifest as { icons: ManifestEntry[] }).icons,
  largeSources,
  'large-icons',
  'large',
)

/** Raw SVG markup by icon id — lets any component render an icon by name. */
export const svgById: Record<string, string> = Object.fromEntries(
  icons.map((icon) => [icon.id, icon.svg]),
)

const categoriesIn = (list: Icon[]) =>
  (Object.keys(CATEGORY_LABELS) as Categoria[]).filter((categoria) =>
    list.some((icon) => icon.categoria === categoria),
  )

export const categories = categoriesIn(icons)
export const largeCategories = categoriesIn(largeIcons)

export const iconsOf = (set: IconSet): Icon[] => (set === 'large' ? largeIcons : icons)
export const categoriesOf = (set: IconSet): Categoria[] =>
  set === 'large' ? largeCategories : categories

export const countByCategory = (categoria: Categoria) =>
  icons.filter((icon) => icon.categoria === categoria).length
