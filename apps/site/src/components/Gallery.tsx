import { CATEGORY_LABELS_I18N, type Copy, type Lang } from '../i18n'
import type { Categoria, Icon } from '../data/icons'
import type { ColorKey } from '../lib/colors'
import { type Framework, componentRef } from '../lib/frameworks'
import { ColorSwatches } from './ColorSwatches'
import { IconSvg } from './IconSvg'

export type View = 'grid' | 'compact' | 'list'

const VIEWS: { key: View; label: string }[] = [
  { key: 'grid', label: '▦' },
  { key: 'compact', label: '▪' },
  { key: 'list', label: '☰' },
]

type Props = {
  t: Copy
  lang: Lang
  fw: Framework
  allIcons: Icon[]
  filtered: Icon[]
  categories: Categoria[]
  query: string
  onQuery: (value: string) => void
  cat: Categoria | 'todas'
  onCat: (cat: Categoria | 'todas') => void
  color: ColorKey
  onColor: (color: ColorKey) => void
  view: View
  onView: (view: View) => void
  onOpen: (id: string) => void
}

export function Gallery({
  t,
  lang,
  fw,
  allIcons,
  filtered,
  categories,
  query,
  onQuery,
  cat,
  onCat,
  color,
  onColor,
  view,
  onView,
  onOpen,
}: Props) {
  const chips: { key: Categoria | 'todas'; label: string; count: number }[] = [
    { key: 'todas', label: t.all, count: allIcons.length },
    ...categories.map((c) => ({
      key: c,
      label: CATEGORY_LABELS_I18N[c][lang],
      count: allIcons.filter((icon) => icon.categoria === c).length,
    })),
  ]

  const isList = view === 'list'
  const iconSize = view === 'list' ? 26 : 34

  return (
    <section className="section gallery" id="galeria">
      <div className="gallery-head">
        <h2 className="h2">{t.gallery}</h2>
        <span className="gallery-count">
          {filtered.length} / {allIcons.length}
        </span>
      </div>

      <div className="controls">
        <div className="search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5 21 21" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder={t.searchPh}
            aria-label={t.gallery}
          />
        </div>

        <div className="chips">
          {chips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              className="chip"
              data-active={cat === chip.key}
              onClick={() => onCat(chip.key)}
            >
              {chip.label}
              <span className="chip-count">{chip.count}</span>
            </button>
          ))}
        </div>

        <ColorSwatches value={color} onChange={onColor} lang={lang} />

        <div className="pill-group">
          {VIEWS.map((v) => (
            <button
              key={v.key}
              type="button"
              className="pill"
              data-active={view === v.key}
              aria-label={v.key}
              onClick={() => onView(v.key)}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty">
          <p>
            {t.noResults} «{query}»
          </p>
          <p>
            <a href="#issues">{t.proposeIt}</a>
          </p>
        </div>
      ) : isList ? (
        <div className="icon-list">
          {filtered.map((icon) => (
            <button
              key={`${icon.categoria}/${icon.id}`}
              type="button"
              className="icon-row"
              onClick={() => onOpen(icon.id)}
              aria-label={icon.id}
            >
              <IconSvg svg={icon.svg} size={iconSize} color={color} />
              <span className="icon-row-id">{icon.id}</span>
              <span className="icon-row-cat">
                {CATEGORY_LABELS_I18N[icon.categoria][lang]}
              </span>
              <span className="icon-row-cmp">{componentRef(fw, icon.id)}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className={`icon-grid icon-grid-${view}`}>
          {filtered.map((icon) => (
            <button
              key={`${icon.categoria}/${icon.id}`}
              type="button"
              className="icon-card"
              onClick={() => onOpen(icon.id)}
              aria-label={icon.id}
            >
              <IconSvg svg={icon.svg} size={iconSize} color={color} />
              <span className="icon-card-id">{icon.id}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
