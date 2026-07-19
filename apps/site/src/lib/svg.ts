export type Swatch = { name: string; hex: string }

/** Black, gray, and the three flag colors (CLAUDE.md section 6). */
export const SWATCHES: Swatch[] = [
  { name: 'Negro', hex: '#000000' },
  { name: 'Gris', hex: '#6B7280' },
  { name: 'Amarillo', hex: '#FCD116' },
  { name: 'Azul', hex: '#003893' },
  { name: 'Rojo', hex: '#CE1126' },
]

export const DEFAULT_COLOR = SWATCHES[0].hex

/**
 * Source SVGs use stroke="currentColor" so they inherit color from CSS. A
 * downloaded file has no page to inherit from, so the chosen color gets
 * baked in before serializing or rasterizing.
 */
export function withColor(svg: string, color: string, size?: number): string {
  let out = svg.replaceAll('currentColor', color)
  if (size) {
    out = out
      .replace(/\bwidth="\d+"/, `width="${size}"`)
      .replace(/\bheight="\d+"/, `height="${size}"`)
  }
  return out
}

/**
 * Revoking the object URL synchronously after click can cancel the download
 * in some browsers, so it is released on the next tick instead.
 */
function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

export function downloadSvg(id: string, svg: string, color: string) {
  const blob = new Blob([withColor(svg, color)], { type: 'image/svg+xml' })
  triggerDownload(blob, `${id}.svg`)
}

/**
 * Rasterizes in the browser at click time via <canvas> — no pre-generated
 * PNGs, no extra build step. Exported at 256px so the file is usable as a
 * real asset rather than a 24px thumbnail.
 */
export async function downloadPng(
  id: string,
  svg: string,
  color: string,
  size = 256,
): Promise<void> {
  const blob = new Blob([withColor(svg, color, size)], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)

  try {
    const image = new Image()
    image.width = size
    image.height = size

    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve()
      image.onerror = () => reject(new Error(`Could not rasterize ${id}`))
      image.src = url
    })

    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext('2d')
    if (!context) throw new Error('Canvas 2D context unavailable')
    context.drawImage(image, 0, 0, size, size)

    const png = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/png'),
    )
    if (!png) throw new Error(`Could not encode ${id} as PNG`)

    triggerDownload(png, `${id}.png`)
  } finally {
    URL.revokeObjectURL(url)
  }
}
