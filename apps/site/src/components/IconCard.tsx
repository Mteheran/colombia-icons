import { useState } from 'react'
import type { Icon } from '../data/icons'
import { DEFAULT_COLOR, downloadPng, downloadSvg } from '../lib/svg'
import { Swatches } from './Swatches'

type Props = {
  icon: Icon
  onExpand: (icon: Icon, color: string) => void
}

export function IconCard({ icon, onExpand }: Props) {
  const [color, setColor] = useState(DEFAULT_COLOR)

  return (
    <article className="card">
      <button
        type="button"
        className="card-preview"
        style={{ color }}
        onClick={() => onExpand(icon, color)}
        aria-label={`Ver ${icon.id} en grande`}
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />

      <p className="card-name" title={icon.id}>
        {icon.id}
      </p>

      <Swatches value={color} onChange={setColor} label={`Color de ${icon.id}`} />

      <div className="card-actions">
        <button type="button" onClick={() => downloadSvg(icon.id, icon.svg, color)}>
          SVG
        </button>
        <button type="button" onClick={() => downloadPng(icon.id, icon.svg, color)}>
          PNG
        </button>
      </div>
    </article>
  )
}
