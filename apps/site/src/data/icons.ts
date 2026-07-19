import manifest from '../../../../icons/manifest.json'

const sources = import.meta.glob('../../../../icons/svg/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export type Categoria =
  | 'naturaleza'
  | 'cultura'
  | 'gastronomia'
  | 'mapas'
  | 'deportes'
  | 'genericos'

export type Icon = {
  id: string
  categoria: Categoria
  svg: string
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
  deportes: 'Deportes',
  genericos: 'Genéricos',
}

const entries = (manifest as { icons: ManifestEntry[] }).icons

/**
 * Only approved icons ship to the gallery — the manifest is the source of
 * truth for review state, so icons appear here as they get approved without
 * any change to this file.
 */
export const icons: Icon[] = entries
  .filter((entry) => entry.estado === 'aprobado')
  .map((entry) => {
    const path = `../../../../icons/svg/${entry.categoria}/${entry.id}.svg`
    const svg = sources[path]
    return svg ? { id: entry.id, categoria: entry.categoria, svg } : null
  })
  .filter((icon): icon is Icon => icon !== null)

export const categories = (Object.keys(CATEGORY_LABELS) as Categoria[]).filter(
  (categoria) => icons.some((icon) => icon.categoria === categoria),
)

export const countByCategory = (categoria: Categoria) =>
  icons.filter((icon) => icon.categoria === categoria).length
