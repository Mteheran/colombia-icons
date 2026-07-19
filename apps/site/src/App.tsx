import { useMemo, useState } from 'react'
import {
  CATEGORY_LABELS,
  categories,
  countByCategory,
  icons,
  type Categoria,
  type Icon,
} from './data/icons'
import { IconCard } from './components/IconCard'
import { IconModal } from './components/IconModal'
import { ThemeToggle } from './components/ThemeToggle'
import './App.css'

const REPO = 'https://github.com/Mteheran/colombia-icons'

const INSTALL = [
  {
    id: 'react',
    label: 'React',
    install: 'npm install @mteherandev/colombia-icons-react',
    usage: `import { Condor } from '@mteherandev/colombia-icons-react';

<Condor size={24} color="currentColor" />`,
  },
  {
    id: 'angular',
    label: 'Angular',
    install: 'npm install @mteherandev/colombia-icons-angular',
    usage: '<ci-icon name="condor" />',
  },
  {
    id: 'blazor',
    label: 'Blazor',
    install: 'dotnet add package ColombiaIcons.Blazor',
    usage: '<Condor Size="24" />',
  },
] as const

type Expanded = { icon: Icon; color: string }

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Categoria | 'todas'>('todas')
  const [framework, setFramework] = useState<string>('react')
  const [expanded, setExpanded] = useState<Expanded | null>(null)

  // Search and category filter are independent (CLAUDE.md section 6).
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return icons.filter(
      (icon) =>
        (category === 'todas' || icon.categoria === category) &&
        (needle === '' || icon.id.includes(needle)),
    )
  }, [query, category])

  const active = INSTALL.find((entry) => entry.id === framework) ?? INSTALL[0]

  return (
    <>
      <ThemeToggle />

      <header className="hero">
        <h1>Colombia Icons</h1>
        <p className="tagline">
          Librería de íconos line-icon inspirada en Colombia. {icons.length} íconos
          en grilla de 24×24, stroke de 1.5px y <code>currentColor</code>, para
          React, Angular y Blazor.
        </p>
        <div className="hero-links">
          <a className="button" href={REPO}>
            Ver en GitHub
          </a>
          <a className="button ghost" href="#galeria">
            Explorar íconos
          </a>
        </div>
      </header>

      <section className="section" id="instalacion">
        <h2>Instalación</h2>
        <div className="tabs" role="tablist" aria-label="Framework">
          {INSTALL.map((entry) => (
            <button
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={framework === entry.id}
              data-active={framework === entry.id}
              onClick={() => setFramework(entry.id)}
            >
              {entry.label}
            </button>
          ))}
        </div>
        <pre>
          <code>{active.install}</code>
        </pre>
        <pre>
          <code>{active.usage}</code>
        </pre>
        <p className="note">
          Los paquetes todavía no están publicados — estas instrucciones aplican
          desde la v1.0. Mientras tanto podés descargar cada ícono acá abajo.
        </p>
      </section>

      <section className="section" id="galeria">
        <h2>Íconos</h2>

        <div className="toolbar">
          <input
            type="search"
            className="search"
            placeholder="Buscar por nombre…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Buscar íconos por nombre"
          />
          <div className="chips">
            <button
              type="button"
              data-active={category === 'todas'}
              onClick={() => setCategory('todas')}
            >
              Todas ({icons.length})
            </button>
            {categories.map((categoria) => (
              <button
                key={categoria}
                type="button"
                data-active={category === categoria}
                onClick={() => setCategory(categoria)}
              >
                {CATEGORY_LABELS[categoria]} ({countByCategory(categoria)})
              </button>
            ))}
          </div>
        </div>

        <p className="results" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'ícono' : 'íconos'}
        </p>

        {visible.length === 0 ? (
          <p className="empty">Ningún ícono coincide con «{query}».</p>
        ) : (
          <div className="grid">
            {visible.map((icon) => (
              <IconCard
                key={`${icon.categoria}/${icon.id}`}
                icon={icon}
                onExpand={(target, color) => setExpanded({ icon: target, color })}
              />
            ))}
          </div>
        )}
      </section>

      <footer className="footer">
        <p>
          MIT · <a href={`${REPO}/blob/main/LICENSE`}>Licencia</a> ·{' '}
          <a href={REPO}>Repositorio</a>
        </p>
      </footer>

      {expanded && (
        <IconModal
          icon={expanded.icon}
          initialColor={expanded.color}
          onClose={() => setExpanded(null)}
        />
      )}
    </>
  )
}
