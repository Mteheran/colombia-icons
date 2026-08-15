import { useEffect, useRef, useState } from 'react'
import { CATEGORY_LABELS_I18N, type Copy, type Lang } from '../i18n'
import type { Icon } from '../data/icons'
import type { ColorKey } from '../lib/colors'
import {
  FRAMEWORKS,
  type Framework,
  componentRef,
  iconSnippet,
} from '../lib/frameworks'
import { downloadPng, downloadSvg } from '../lib/svg'
import { ColorSwatches } from './ColorSwatches'
import { IconSvg } from './IconSvg'

type Props = {
  t: Copy
  lang: Lang
  icon: Icon
  color: ColorKey
  onColor: (color: ColorKey) => void
  fw: Framework
  onFw: (fw: Framework) => void
  onClose: () => void
}

const SIZES = [16, 24, 48]

export function IconModal({ t, lang, icon, color, onColor, fw, onFw, onClose }: Props) {
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  // Reset the copy feedback whenever a different icon opens.
  useEffect(() => setCopied(false), [icon.id])

  const snippet = iconSnippet(fw, icon.id, color)

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable — no-op */
    }
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
        <div className="modal-left">
          <IconSvg svg={icon.svg} size={140} color={color} />
          <div className="modal-sizes">
            {SIZES.map((px) => (
              <div key={px} className="modal-size">
                <IconSvg svg={icon.svg} size={px} color={color} />
                <span className="mono-9">{px}</span>
              </div>
            ))}
          </div>
          <ColorSwatches value={color} onChange={onColor} lang={lang} />
        </div>

        <div className="modal-right">
          <div className="modal-head">
            <div>
              <h3 className="modal-title">{icon.id}</h3>
              <div className="modal-sub">
                {CATEGORY_LABELS_I18N[icon.categoria][lang]} · {componentRef(fw, icon.id)}
              </div>
            </div>
            <button
              type="button"
              className="modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="specs">
            <div className="spec">
              <div className="mono-9">Grid</div>
              <div className="spec-value">24 × 24</div>
            </div>
            <div className="spec">
              <div className="mono-9">{t.stroke}</div>
              <div className="spec-value">1.5 px</div>
            </div>
            <div className="spec">
              <div className="mono-9">Fill</div>
              <div className="spec-value">none</div>
            </div>
          </div>

          <div className="pill-group modal-fw">
            {FRAMEWORKS.map((f) => (
              <button
                key={f.key}
                type="button"
                className="pill"
                data-active={fw === f.key}
                onClick={() => onFw(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <pre className="code code-dark modal-snippet">{snippet}</pre>

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => downloadSvg(icon.id, icon.svg, color)}
            >
              SVG
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => downloadPng(icon.id, icon.svg, color)}
            >
              PNG 512
            </button>
            <button type="button" className="btn btn-outline" onClick={copySnippet}>
              {copied ? t.copied : t.copy}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
