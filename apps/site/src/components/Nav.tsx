import { type Copy, type Lang, LANGS, LANG_LABELS } from '../i18n'
import { REPO } from '../lib/site'

type Theme = 'dark' | 'light'

type Props = {
  t: Copy
  lang: Lang
  onLang: (lang: Lang) => void
  theme: Theme
  onToggleTheme: () => void
}

/** The tricolor bar logo, reused in the nav and footer. */
export function Logo({ size = 'nav' }: { size?: 'nav' | 'footer' }) {
  return (
    <span className={`logo logo-${size}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

export function Nav({ t, lang, onLang, theme, onToggleTheme }: Props) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo />
        <span className="wordmark">colombia-icons</span>
        <span className="badge-mit">MIT</span>
        <div className="nav-spacer" />
        <div className="nav-links">
          <a href="#galeria">{t.navIcons}</a>
          <a href="#demo">{t.navDemo}</a>
          <a href="#guia">{t.navGuide}</a>
          <a href="#issues">{t.navReport}</a>
        </div>
        <div className="pill-group" role="group" aria-label="Idioma">
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              className="pill"
              data-active={lang === code}
              onClick={() => onLang(code)}
            >
              {LANG_LABELS[code]}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark}
          title={theme === 'dark' ? t.themeToLight : t.themeToDark}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <a className="btn btn-dark nav-cta" href={REPO}>
          GitHub
        </a>
      </div>
    </nav>
  )
}
