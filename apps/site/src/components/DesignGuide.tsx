import { type Copy, GUIDE_DOC, type Lang, RULES } from '../i18n'

type Props = {
  t: Copy
  lang: Lang
}

const SPEC_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
  width="24" height="24" viewBox="0 0 24 24"
  fill="none" stroke="currentColor"
  stroke-width="1.5" stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M12 5V19M5 12H19"/>
</svg>`

export function DesignGuide({ t, lang }: Props) {
  const doc = GUIDE_DOC[lang]

  return (
    <section className="section guide" id="guia">
      <div className="guide-inner">
        <div className="guide-copy">
          <div className="mono-label">{doc.file}</div>
          <h2 className="guide-h2">{t.guideH2}</h2>
          <p className="guide-p">{t.guideP}</p>
          <pre className="code code-dark guide-spec">{SPEC_SVG}</pre>
          <a className="guide-link" href={doc.url}>
            {t.guideCta} →
          </a>
        </div>
        <div className="guide-rules">
          {RULES[lang].map(([n, title, body]) => (
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
