import type { Copy } from '../i18n'
import { DOC, PKG, REPO, REPO_ISSUES } from '../lib/site'
import { Logo } from './Nav'

type Props = {
  t: Copy
  total: number
}

export function SiteFooter({ t, total }: Props) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo size="footer" />
          <div className="footer-wordmark">colombia-icons</div>
          <p className="footer-desc">{t.footerP}</p>
        </div>
        <div className="footer-col">
          <span className="mono-label">{t.footerProject}</span>
          <a href={REPO}>Repositorio</a>
          <a href={DOC.guideEn}>Icon design guide</a>
          <a href={DOC.guideEs}>Guía de diseño</a>
          <a href={REPO_ISSUES}>Issues</a>
        </div>
        <div className="footer-col">
          <span className="mono-label">{t.footerPackages}</span>
          <a href={PKG.react}>React · npm</a>
          <a href={PKG.angular}>Angular · npm</a>
          <a href={PKG.blazor}>Blazor · NuGet</a>
        </div>
      </div>
      <div className="footer-bar">
        <span>
          {total} {t.iconsWord} · 24×24 · 1.5px · MIT
        </span>
        <span>github.com/Mteheran/colombia-icons</span>
      </div>
    </footer>
  )
}
