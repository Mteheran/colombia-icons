import { useMemo } from 'react'
import { type ColorKey, colorValue } from '../lib/colors'

type Props = {
  /** Full <svg> markup from the source files. */
  svg: string
  /** Rendered box size in px. */
  size: number
  /** Color key (plain hex or tricolor gradient). Defaults to black. */
  color?: ColorKey
  /** Raw stroke override for fixed compositions (hero, demo). Wins over color. */
  stroke?: string
  className?: string
}

/**
 * Renders a source icon at a given size and color. Non-default colors are baked
 * into the markup (so the tricolor gradient works like the plain colors). The
 * default "negro" is left as currentColor and inherits the themed `--ink` from
 * `.ci`, so black icons stay visible in dark mode — while a download still bakes
 * a real dark hex. The wrapping <span> is sized; the inner <svg> fills it.
 */
export function IconSvg({ svg, size, color = 'negro', stroke, className }: Props) {
  const html = useMemo(() => {
    if (stroke) return svg.replaceAll('currentColor', stroke)
    if (color === 'negro') return svg
    return svg.replaceAll('currentColor', colorValue(color))
  }, [svg, color, stroke])

  return (
    <span
      aria-hidden="true"
      className={className ? `ci ${className}` : 'ci'}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
