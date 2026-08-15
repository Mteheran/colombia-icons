import { type ColorKey, GRADIENT_MARKUP, colorValue } from './colors'

/**
 * Source SVGs use stroke="currentColor" (or fill="currentColor" for the few
 * solid icons) so they inherit color from CSS on screen. Downloaded files and
 * the tricolor variant have no CSS to inherit from, so the chosen color is
 * baked into the markup before serializing or rasterizing.
 */
export function bakeColor(svg: string, key: ColorKey, size?: number): string {
  let out = svg.replaceAll('currentColor', colorValue(key))

  // Tricolor references a gradient by id; that gradient must travel inside the
  // exported file (otherwise the PNG/SVG comes out uncolored).
  if (key === 'tricolor') {
    out = out.replace(/<svg([^>]*)>/, `<svg$1><defs>${GRADIENT_MARKUP}</defs>`)
  }

  if (size) {
    out = out
      .replace(/\bwidth="\d+"/, `width="${size}"`)
      .replace(/\bheight="\d+"/, `height="${size}"`)
  }
  return out
}

/**
 * Revoking the object URL synchronously after click can cancel the download in
 * some browsers, so it is released on a later tick instead.
 */
function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 3000)
}

export function downloadSvg(id: string, svg: string, key: ColorKey) {
  const blob = new Blob([bakeColor(svg, key)], { type: 'image/svg+xml' })
  triggerDownload(blob, `${id}-${key}.svg`)
}

/**
 * Rasterizes in the browser at click time via <canvas> — no pre-generated PNGs,
 * no extra build step. Exported at 512px so the file is usable as a real asset.
 */
export async function downloadPng(
  id: string,
  svg: string,
  key: ColorKey,
  size = 512,
): Promise<void> {
  const markup = bakeColor(svg, key, size)
  const url =
    'data:image/svg+xml;base64,' +
    btoa(unescape(encodeURIComponent(markup)))

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
  triggerDownload(png, `${id}-${key}.png`)
}
