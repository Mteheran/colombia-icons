import type { Copy } from '../i18n'
import { COLORS } from '../lib/colors'

type Props = {
  t: Copy
  iconCount: number
  catCount: number
}

/** The four-cell totals bar. Icon and category counts come from live data. */
export function Stats({ t, iconCount, catCount }: Props) {
  const cells = [
    { value: iconCount || '—', label: t.statIcons },
    { value: catCount || '—', label: t.statCats },
    { value: String(COLORS.length), label: t.statColors },
    { value: 'SVG · PNG', label: t.statFormats },
  ]

  return (
    <section className="stats-wrap">
      <div className="stats">
        {cells.map((cell) => (
          <div key={cell.label} className="stat">
            <div className="stat-value">{cell.value}</div>
            <div className="mono-label">{cell.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
