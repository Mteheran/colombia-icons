import { COLORS, type ColorKey, TRICOLOR_CSS } from '../lib/colors'
import type { Lang } from '../i18n'

type Props = {
  value: ColorKey
  onChange: (key: ColorKey) => void
  lang: Lang
}

/** The shared 6-color selector (gallery controls and modal use the same one). */
export function ColorSwatches({ value, onChange, lang }: Props) {
  return (
    <div className="swatches" role="radiogroup" aria-label="Color">
      {COLORS.map((color) => (
        <button
          key={color.key}
          type="button"
          role="radio"
          aria-checked={value === color.key}
          aria-label={color.labels[lang]}
          title={color.labels[lang]}
          className="swatch"
          data-active={value === color.key}
          onClick={() => onChange(color.key)}
        >
          <span
            className="swatch-dot"
            style={{
              background: color.key === 'tricolor' ? TRICOLOR_CSS : color.value,
            }}
          />
        </button>
      ))}
    </div>
  )
}
