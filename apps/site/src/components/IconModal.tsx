import { useEffect, useRef, useState } from 'react'
import { CATEGORY_LABELS, type Icon } from '../data/icons'
import { downloadPng, downloadSvg } from '../lib/svg'
import { Swatches } from './Swatches'

type Props = {
  icon: Icon
  initialColor: string
  onClose: () => void
}

export function IconModal({ icon, initialColor, onClose }: Props) {
  const [color, setColor] = useState(initialColor)
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const copySvg = async () => {
    await navigator.clipboard.writeText(icon.svg)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      className="backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={icon.id}
        tabIndex={-1}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <div
          className="modal-preview"
          style={{ color }}
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />

        <h2 className="modal-name">{icon.id}</h2>
        <p className="modal-category">{CATEGORY_LABELS[icon.categoria]}</p>

        <Swatches value={color} onChange={setColor} label={`Color de ${icon.id}`} />

        <div className="modal-actions">
          <button type="button" onClick={() => downloadSvg(icon.id, icon.svg, color)}>
            Descargar SVG
          </button>
          <button type="button" onClick={() => downloadPng(icon.id, icon.svg, color)}>
            Descargar PNG
          </button>
          <button type="button" className="ghost" onClick={copySvg}>
            {copied ? '¡Copiado!' : 'Copiar SVG'}
          </button>
        </div>
      </div>
    </div>
  )
}
