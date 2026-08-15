import type { Copy } from '../i18n'
import type { ColorKey } from '../lib/colors'
import {
  FRAMEWORKS,
  type Framework,
  installCmd,
  usageCode,
} from '../lib/frameworks'
import { HERO_STRIP } from '../lib/compositions'
import { IconSvg } from './IconSvg'

type Props = {
  t: Copy
  fw: Framework
  onFw: (fw: Framework) => void
  color: ColorKey
  svgById: Record<string, string>
}

/** Editorial hero (variant A of the handoff): copy + install card + icon strip. */
export function Hero({ t, fw, onFw, color, svgById }: Props) {
  const strip = HERO_STRIP.filter((id) => svgById[id])

  return (
    <header className="hero">
      <div className="hero-copy">
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          React · Angular · Blazor
        </div>
        <h1 className="hero-h1">
          {t.h1a}
          <br />
          <span className="hero-h1-dim">{t.h1b}</span>
        </h1>
        <p className="hero-sub">{t.sub}</p>
        <div className="hero-ctas">
          <a className="btn btn-dark" href="#galeria">
            {t.ctaBrowse}
          </a>
          <a className="btn btn-outline" href="#demo">
            {t.ctaDemo}
          </a>
        </div>
        <div className="hero-strip">
          {strip.map((id) => (
            <IconSvg key={id} svg={svgById[id]} size={40} color={color} />
          ))}
        </div>
      </div>

      <div className="install-card">
        <div className="install-tabs" role="tablist" aria-label="Framework">
          {FRAMEWORKS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={fw === f.key}
              className="install-tab"
              data-active={fw === f.key}
              onClick={() => onFw(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="install-block">
          <div className="mono-label">{t.install}</div>
          <pre className="code code-light">{installCmd(fw)}</pre>
        </div>
        <div className="install-block">
          <div className="mono-label">{t.usage}</div>
          <pre className="code code-dark">{usageCode(fw)}</pre>
        </div>
      </div>
    </header>
  )
}
