import { SWATCHES } from '../lib/svg'

type Props = {
  value: string
  onChange: (hex: string) => void
  label: string
}

export function Swatches({ value, onChange, label }: Props) {
  return (
    <div className="swatches" role="radiogroup" aria-label={label}>
      {SWATCHES.map((swatch) => (
        <button
          key={swatch.hex}
          type="button"
          role="radio"
          aria-checked={value === swatch.hex}
          aria-label={swatch.name}
          title={swatch.name}
          className="swatch"
          data-active={value === swatch.hex}
          style={{ background: swatch.hex }}
          onClick={() => onChange(swatch.hex)}
        />
      ))}
    </div>
  )
}
