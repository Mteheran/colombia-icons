import type { Lang } from '../i18n'

/**
 * The six icon colors offered on the site: black, gray, the three flag colors,
 * and the tricolor gradient. Icons ship with stroke="currentColor", so a plain
 * color is baked by replacing currentColor with its hex; tricolor swaps in a
 * reference to the shared <linearGradient id="ci-tri"> defined once per page.
 */
export type ColorKey = 'negro' | 'gris' | 'amarillo' | 'azul' | 'rojo' | 'tricolor'

export type SwatchColor = {
  key: ColorKey
  /** Value that replaces currentColor in the SVG markup. */
  value: string
  labels: Record<Lang, string>
}

export const COLORS: SwatchColor[] = [
  { key: 'negro', value: '#1c1a17', labels: { es: 'Negro', en: 'Black', pt: 'Preto' } },
  { key: 'gris', value: '#6B7280', labels: { es: 'Gris', en: 'Gray', pt: 'Cinza' } },
  { key: 'amarillo', value: '#FCD116', labels: { es: 'Amarillo', en: 'Yellow', pt: 'Amarelo' } },
  { key: 'azul', value: '#003893', labels: { es: 'Azul', en: 'Blue', pt: 'Azul' } },
  { key: 'rojo', value: '#CE1126', labels: { es: 'Rojo', en: 'Red', pt: 'Vermelho' } },
  { key: 'tricolor', value: 'url(#ci-tri)', labels: { es: 'Tricolor', en: 'Tricolor', pt: 'Tricolor' } },
]

export const DEFAULT_COLOR: ColorKey = 'negro'

/** The vertical flag gradient, flag proportions: yellow 50%, blue 25%, red 25%. */
export const GRADIENT_ID = 'ci-tri'
export const GRADIENT_MARKUP = `<linearGradient id="${GRADIENT_ID}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FCD116"/><stop offset=".5" stop-color="#FCD116"/><stop offset=".5" stop-color="#003893"/><stop offset=".75" stop-color="#003893"/><stop offset=".75" stop-color="#CE1126"/><stop offset="1" stop-color="#CE1126"/></linearGradient>`

/** CSS gradient that mirrors the SVG flag gradient, for the color-dot swatch. */
export const TRICOLOR_CSS = 'linear-gradient(#FCD116 50%, #003893 50% 75%, #CE1126 75%)'

export function colorByKey(key: ColorKey): SwatchColor {
  return COLORS.find((c) => c.key === key) ?? COLORS[0]
}

export function colorValue(key: ColorKey): string {
  return colorByKey(key).value
}

export function colorLabel(key: ColorKey, lang: Lang): string {
  return colorByKey(key).labels[lang]
}
