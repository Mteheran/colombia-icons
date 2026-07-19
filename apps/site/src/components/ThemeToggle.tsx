import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'colombia-icons-theme'

/** Dark is the default; only an explicit choice is stored. */
function readStoredTheme(): Theme {
  return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readStoredTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Cambiar a modo ${next === 'dark' ? 'oscuro' : 'claro'}`}
      title={`Cambiar a modo ${next === 'dark' ? 'oscuro' : 'claro'}`}
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      <span className="theme-toggle-label">
        {theme === 'dark' ? 'Claro' : 'Oscuro'}
      </span>
    </button>
  )
}
