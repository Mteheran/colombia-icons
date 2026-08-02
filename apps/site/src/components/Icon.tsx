import { svgById } from '../data/icons'

type Props = {
  /** Icon id (kebab-case), e.g. "buscar". */
  name: string
  /** Size in px. Default 24. */
  size?: number
  /** Overrides the inherited color (icons use currentColor). */
  color?: string
  className?: string
  'aria-hidden'?: boolean
}

/**
 * Renders a colombia-icon by name from the source SVGs. The inner <svg> uses
 * currentColor, so color follows CSS `color` unless `color` is passed.
 */
export function Icon({ name, size = 24, color, className, ...rest }: Props) {
  const svg = svgById[name]
  if (!svg) return null
  return (
    <span
      className={className ? `ci ${className}` : 'ci'}
      style={{ width: size, height: size, color }}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  )
}
