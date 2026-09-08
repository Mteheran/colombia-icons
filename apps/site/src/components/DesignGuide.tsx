import { useState } from 'react'
import {
  type Copy,
  GUIDE_H2,
  type Lang,
  RULES,
  SET_INFO,
  guideDoc,
} from '../i18n'
import type { IconSet } from '../data/icons'

type Props = {
  t: Copy
  lang: Lang
}

const SETS: IconSet[] = ['base', 'large', 'symbols']

/**
 * The root element each set is drawn on. Symbols also accept an already
 * expanded outline (see docs/symbol-design-guide.md §2.1); the live stroke is
 * shown here because it is the preferred form, and rule 03 covers the other.
 */
const SPEC_SVG: Record<IconSet, string> = {
  base: `<svg xmlns="http://www.w3.org/2000/svg"
  width="24" height="24" viewBox="0 0 24 24"
  fill="none" stroke="currentColor"
  stroke-width="1.5" stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M12 5V19M5 12H19"/>
</svg>`,
  large: `<svg xmlns="http://www.w3.org/2000/svg"
  width="48" height="48" viewBox="0 0 48 48"
  fill="none" stroke="currentColor"
  stroke-width="1.5" stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M24 10V38M10 24H38"/>
</svg>`,
  symbols: `<svg xmlns="http://www.w3.org/2000/svg"
  width="64" height="64" viewBox="0 0 64 64"
  fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M32 12V52M12 32H52"/>
</svg>`,
}

export function DesignGuide({ t, lang }: Props) {
  // Independent from the gallery's set: reading the rules for one set while
  // browsing another is a reasonable thing to want.
  const [set, setSet] = useState<IconSet>('base')
  const doc = guideDoc(lang, set)

  return (
    <section className="section guide" id="guia">
      <div className="guide-inner">
        <div className="guide-copy">
          <div className="mono-label">{doc.file}</div>
          <h2 className="guide-h2">{GUIDE_H2[lang][set]}</h2>
          <p className="guide-p">{t.guideP}</p>

          <div className="set-tabs guide-tabs" role="tablist" aria-label={t.navGuide}>
            {SETS.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                className="set-tab"
                aria-selected={set === key}
                data-active={set === key}
                onClick={() => setSet(key)}
              >
                {SET_INFO[lang][key].label}
                <span className="set-tab-badge">{SET_INFO[lang][key].badge}</span>
              </button>
            ))}
          </div>

          <pre className="code code-dark guide-spec">{SPEC_SVG[set]}</pre>
          <a className="guide-link" href={doc.url} target="_blank" rel="noreferrer">
            {t.guideCta} →
          </a>
        </div>
        <div className="guide-rules">
          {RULES[lang][set].map(([n, title, body]) => (
            <div key={n} className="rule">
              <div className="rule-n">{n}</div>
              <div className="rule-title">{title}</div>
              <p className="rule-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
