import { type Copy, ISSUE_TEMPLATE, type Lang, STEPS } from '../i18n'
import { REPO_NEW_ISSUE } from '../lib/site'

type Props = {
  t: Copy
  lang: Lang
}

export function Issues({ t, lang }: Props) {
  return (
    <section className="section-alt issues" id="issues">
      <div className="issues-inner">
        <div className="issues-copy">
          <h2 className="issues-h2">{t.issuesH2}</h2>
          <p className="issues-p">{t.issuesP}</p>
          <div className="steps">
            {STEPS[lang].map(([n, title, body]) => (
              <div key={n} className="step">
                <span className="step-badge">{n}</span>
                <div>
                  <div className="step-title">{title}</div>
                  <div className="step-body">{body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="issues-ctas">
            <a className="btn btn-bug" href={REPO_NEW_ISSUE}>
              {t.ctaBug}
            </a>
            <a className="btn btn-icon" href={REPO_NEW_ISSUE}>
              {t.ctaIcon}
            </a>
          </div>
        </div>
        <div className="issue-template">
          <div className="issue-template-head mono-label">{t.issueTplTitle}</div>
          <pre className="issue-template-body">{ISSUE_TEMPLATE[lang]}</pre>
        </div>
      </div>
    </section>
  )
}
