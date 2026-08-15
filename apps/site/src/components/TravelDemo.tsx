import { useState } from 'react'
import type { Copy } from '../i18n'
import { type Framework, demoCode } from '../lib/frameworks'
import {
  DEMO_CATS,
  DEMO_CAT_STROKES,
  DEMO_TABS,
} from '../lib/compositions'
import { REPO_SITE } from '../lib/site'
import { IconSvg } from './IconSvg'

type Props = {
  t: Copy
  fw: Framework
  svgById: Record<string, string>
}

const INK = '#1c1a17'
const INK_45 = 'rgba(28,26,23,.45)'
const INK_50 = 'rgba(28,26,23,.5)'
const RED = '#CE1126'

/** Mobile tourism demo built only from set icons (handoff section 5.8). It is a
    working mini-app, not a static mockup: the tabs, category tiles, the like
    heart and the search field all respond. The phone keeps its own light
    palette regardless of the site theme. */
export function TravelDemo({ t, fw, svgById }: Props) {
  const icon = (id: string) => svgById[id]
  const [tab, setTab] = useState(DEMO_TABS[0])
  const [activeCat, setActiveCat] = useState(0)
  const [liked, setLiked] = useState(false)
  const [search, setSearch] = useState('')

  // The heart fills when liked: swap fill="none" for a fill and paint it red.
  const heartMarkup = (id: string) =>
    liked ? icon(id).replace('fill="none"', 'fill="currentColor"') : icon(id)

  return (
    <section className="section demo" id="demo">
      <div className="demo-inner">
        <div className="demo-phone-wrap">
          <div className="demo-phone">
            <div className="demo-statusbar">
              <span>9:41</span>
              <span className="demo-status-icons">
                {['wifi', 'bateria-horizontal-cargada'].map(
                  (id) =>
                    icon(id) && (
                      <IconSvg key={id} svg={icon(id)} size={13} stroke={INK} />
                    ),
                )}
              </span>
            </div>

            <div className="demo-header">
              <div>
                <div className="demo-kicker">{t.demoKicker}</div>
                <div className="demo-title">{t.demoTitle}</div>
              </div>
              {icon('campana') && (
                <IconSvg svg={icon('campana')} size={20} stroke={INK} />
              )}
            </div>

            <label className="demo-search">
              {icon('buscar') && (
                <IconSvg svg={icon('buscar')} size={15} stroke={INK_45} />
              )}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.demoSearchPh}
                aria-label={t.demoSearchPh}
              />
            </label>

            <div className="demo-cats">
              {DEMO_CATS.map((id, n) => (
                <button
                  key={id}
                  type="button"
                  className="demo-cat"
                  data-active={activeCat === n}
                  onClick={() => setActiveCat(n)}
                >
                  <span
                    className="demo-cat-tile"
                    style={
                      activeCat === n
                        ? {
                            borderColor: DEMO_CAT_STROKES[n],
                            boxShadow: `0 0 0 1px ${DEMO_CAT_STROKES[n]}`,
                          }
                        : undefined
                    }
                  >
                    {icon(id) && (
                      <IconSvg svg={icon(id)} size={22} stroke={DEMO_CAT_STROKES[n]} />
                    )}
                  </span>
                  <span className="demo-cat-label">{t.demoCatLabels[n]}</span>
                </button>
              ))}
            </div>

            <div className="demo-card-wrap">
              <div className="demo-card">
                <div className="demo-card-photo">
                  <span className="mono-8">foto · destino</span>
                  {icon('corazon') && (
                    <button
                      type="button"
                      className="demo-heart"
                      onClick={() => setLiked((v) => !v)}
                      aria-pressed={liked}
                      aria-label={liked ? 'Quitar de guardados' : 'Guardar'}
                    >
                      <IconSvg svg={heartMarkup('corazon')} size={17} stroke={RED} />
                    </button>
                  )}
                </div>
                <div className="demo-card-body">
                  <div className="demo-card-title">Valle de Cocora</div>
                  <div className="demo-card-meta">
                    {['ubicacion', 'estrella-llena'].map(
                      (id) =>
                        icon(id) && (
                          <IconSvg key={id} svg={icon(id)} size={12} stroke={INK_50} />
                        ),
                    )}
                    <span>Quindío · 4.8 km · 4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-tabbar">
              {DEMO_TABS.map((id, n) => {
                const active = tab === id
                return (
                  <button
                    key={id}
                    type="button"
                    className="demo-tab"
                    data-active={active}
                    onClick={() => setTab(id)}
                  >
                    {icon(id) && (
                      <IconSvg
                        svg={icon(id)}
                        size={20}
                        stroke={active ? RED : INK_45}
                      />
                    )}
                    <span>{t.demoTabLabels[n]}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="demo-copy">
          <div className="demo-kicker2">{t.demoKicker2}</div>
          <h2 className="demo-h2">{t.demoH2}</h2>
          <p className="demo-p">{t.demoP}</p>
          <pre className="code demo-code">{demoCode(fw)}</pre>
          <div className="demo-ctas">
            <a className="btn btn-light" href={REPO_SITE}>
              {t.demoCta}
            </a>
            <a className="btn btn-ghost-dark" href="#guia">
              {t.navGuide}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
