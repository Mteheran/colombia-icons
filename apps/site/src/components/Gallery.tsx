import {
  CATEGORY_LABELS_I18N,
  type Copy,
  type Lang,
  SET_INFO,
  guideDoc,
} from '../i18n'
import type { Categoria, Icon, IconSet } from '../data/icons'
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

const SETS: IconSet[] = ['base', 'large', 'symbols']

/**
 * Preview size per set, in grid and in list view: each one renders near its own
 * canvas size, so the sets stay distinguishable at a glance.
 */
const GRID_SIZE: Record<IconSet, number> = { base: 34, large: 48, symbols: 60 }
const LIST_SIZE: Record<IconSet, number> = { base: 26, large: 34, symbols: 40 }

type Props = {
  t: Copy
  lang: Lang
  fw: Framework
  allIcons: Icon[]
  filtered: Icon[]
  categories: Categoria[]
  set: IconSet
  onSet: (set: IconSet) => void
  /** Approved icons per set — the tab badges show the whole set, not the filter. */
  setCounts: Record<IconSet, number>
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
  set,
  onSet,
  setCounts,
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
  const isBase = set === 'base'
  const iconSize = isList ? LIST_SIZE[set] : GRID_SIZE[set]
  const info = SET_INFO[lang][set]
  const doc = guideDoc(lang, set)

  return (
    <section className="section gallery" id="galeria">
      <div className="gallery-head">
        <h2 className="h2">{t.gallery}</h2>
        <span className="gallery-count">
          {filtered.length} / {allIcons.length}
        </span>

        <div className="set-tabs" role="tablist" aria-label={t.gallery}>
          {SETS.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              className="set-tab"
              aria-selected={set === key}
              data-active={set === key}
              onClick={() => onSet(key)}
            >
              {SET_INFO[lang][key].label}
              <span className="set-tab-badge">{SET_INFO[lang][key].badge}</span>
              <span className="set-tab-count">{setCounts[key]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="set-note">
        <div className="set-note-copy">
          <h3 className="set-note-title">{info.title}</h3>
          <p className="set-note-body">{info.body}</p>
          <a className="set-note-link" href={doc.url} target="_blank" rel="noreferrer">
            {info.cta} →
          </a>
        </div>
        <div className="set-note-specs">
          {info.specs.map(([label, value]) => (
            <div key={label} className="spec">
              <div className="mono-9">{label}</div>
              <div className="spec-value">{value}</div>
            </div>
          ))}
        </div>
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

      {allIcons.length === 0 ? (
        <div className="empty">
          <p>{t.setEmpty}</p>
          <p>
            <a href={doc.url} target="_blank" rel="noreferrer">
              {t.setEmptyCta} →
            </a>
          </p>
        </div>
      ) : filtered.length === 0 ? (
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
              <span className="icon-row-cmp">
                {isBase ? componentRef(fw, icon.id) : info.specs[0][1]}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className={`icon-grid icon-grid-${view}`} data-set={set}>
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
