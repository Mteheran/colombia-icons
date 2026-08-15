import { useEffect, useMemo, useState } from 'react'
import {
  categories as allCategories,
  icons,
  svgById,
  type Categoria,
} from './data/icons'
import { type Lang, T, detectLang } from './i18n'
import { GRADIENT_MARKUP } from './lib/colors'
import { type ColorKey, DEFAULT_COLOR } from './lib/colors'
import type { Framework } from './lib/frameworks'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Gallery, type View } from './components/Gallery'
import { IconModal } from './components/IconModal'
import { TravelDemo } from './components/TravelDemo'
import { DesignGuide } from './components/DesignGuide'
import { Issues } from './components/Issues'
import { SiteFooter } from './components/SiteFooter'
import './App.css'

type Theme = 'dark' | 'light'

const normalize = (value: string) =>
  value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

function readTheme(): Theme {
  return localStorage.getItem('colombia-icons-theme') === 'light' ? 'light' : 'dark'
}

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang)
  const [theme, setTheme] = useState<Theme>(readTheme)
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState<Categoria | 'todas'>('todas')
  const [color, setColor] = useState<ColorKey>(DEFAULT_COLOR)
  const [fw, setFw] = useState<Framework>('react')
  const [view, setView] = useState<View>('grid')
  const [open, setOpen] = useState<string | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('colombia-icons-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('colombia-icons-lang', lang)
  }, [lang])

  const t = T[lang]

  // Search and category filter are independent (CLAUDE.md section 6); search is
  // diacritic-insensitive on both the query and the icon id.
  const filtered = useMemo(() => {
    const needle = normalize(query.trim())
    return icons.filter(
      (icon) =>
        (cat === 'todas' || icon.categoria === cat) &&
        (needle === '' || normalize(icon.id).includes(needle)),
    )
  }, [query, cat])

  const openIcon = open ? icons.find((icon) => icon.id === open) ?? null : null

  return (
    <>
      {/* The flag gradient lives once per page; tricolor previews reference it. */}
      <svg width="0" height="0" className="gradient-defs" aria-hidden="true">
        <defs dangerouslySetInnerHTML={{ __html: GRADIENT_MARKUP }} />
      </svg>

      <Nav
        t={t}
        lang={lang}
        onLang={setLang}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero t={t} fw={fw} onFw={setFw} color={color} svgById={svgById} />
        <Stats t={t} iconCount={icons.length} catCount={allCategories.length} />
        <Gallery
          t={t}
          lang={lang}
          fw={fw}
          allIcons={icons}
          filtered={filtered}
          categories={allCategories}
          query={query}
          onQuery={setQuery}
          cat={cat}
          onCat={setCat}
          color={color}
          onColor={setColor}
          view={view}
          onView={setView}
          onOpen={setOpen}
        />
        <TravelDemo t={t} fw={fw} svgById={svgById} />
        <DesignGuide t={t} lang={lang} />
        <Issues t={t} lang={lang} />
      </main>

      <SiteFooter t={t} total={icons.length} />

      {openIcon && (
        <IconModal
          t={t}
          lang={lang}
          icon={openIcon}
          color={color}
          onColor={setColor}
          fw={fw}
          onFw={setFw}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  )
}
