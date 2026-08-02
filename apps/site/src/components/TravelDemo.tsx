import { useState } from 'react'
import { Icon } from './Icon'
import './Demo.css'

/* A mock travel & tourism app for Colombia, built entirely with colombia-icons —
   navigation, search, categories and services all use icons from the package.
   It renders the same source SVGs the gallery does (dogfooding). */

const CATEGORIES = [
  { name: 'Playas', icon: 'mar-caribe' },
  { name: 'Naturaleza', icon: 'mariposa' },
  { name: 'Cultura', icon: 'mochila-wayuu' },
  { name: 'Gastronomía', icon: 'arepa' },
  { name: 'Café', icon: 'grano-de-cafe' },
  { name: 'Festivales', icon: 'feria-de-las-flores' },
  { name: 'Ciclismo', icon: 'ciclismo' },
  { name: 'Aventura', icon: 'volcan' },
] as const

const EXPERIENCES = [
  {
    icon: 'mar-caribe',
    title: 'Tarde en yate privado en San Andrés',
    place: 'San Andrés',
    hours: '3 h',
    price: 120,
    rating: '4.9',
    accent: '#003893',
  },
  {
    icon: 'vuelta-a-colombia',
    title: 'Ciclomontañismo en Jardín, Antioquia',
    place: 'Jardín',
    hours: 'Medio día',
    price: 85,
    rating: '4.8',
    accent: '#0f7a4f',
  },
  {
    icon: 'grano-de-cafe',
    title: 'Ruta del café',
    place: 'Eje Cafetero',
    hours: '5 h',
    price: 95,
    rating: '4.9',
    accent: '#8a5a2b',
  },
  {
    icon: 'acordeon-vallenato',
    title: 'Noche de vallenato',
    place: 'Valledupar',
    hours: '4 h',
    price: 60,
    rating: '4.7',
    accent: '#CE1126',
  },
] as const

const SERVICES = [
  { icon: 'wifi', label: 'Wi-Fi' },
  { icon: 'candado', label: 'Pago seguro' },
  { icon: 'telefono', label: 'Soporte 24/7' },
  { icon: 'verificado', label: 'Guías certificados' },
  { icon: 'compartir', label: 'Compartir plan' },
] as const

const NAV = [
  { id: 'inicio', icon: 'inicio', label: 'Inicio' },
  { id: 'explorar', icon: 'buscar', label: 'Explorar' },
  { id: 'guardados', icon: 'marcador', label: 'Guardados' },
  { id: 'viajes', icon: 'calendario', label: 'Viajes' },
  { id: 'perfil', icon: 'usuario', label: 'Perfil' },
] as const

const LEGEND = [
  { icon: 'buscar', use: 'Buscador de destinos' },
  { icon: 'calendario', use: 'Selección de fechas' },
  { icon: 'usuario', use: 'Viajeros y perfil' },
  { icon: 'marcador', use: 'Ubicación y guardados' },
  { icon: 'estrella-llena', use: 'Calificación' },
  { icon: 'reloj', use: 'Duración' },
  { icon: 'dolar', use: 'Precio' },
  { icon: 'inicio', use: 'Navegación inferior' },
] as const

export function TravelDemo() {
  const [nav, setNav] = useState('inicio')
  const [saved, setSaved] = useState<Record<string, boolean>>({})

  return (
    <section className="section demo">
      <h2>Los íconos en una app real</h2>
      <p className="demo-lead">
        Una app de viajes por Colombia construida con <code>colombia-icons</code>:
        los mismos íconos del paquete usados para la navegación y los servicios.
      </p>

      <div className="demo-layout">
        {/* Phone-framed app screen */}
        <div className="phone" role="img" aria-label="Demo de app de viajes usando los íconos">
          <div className="phone-screen">
            {/* App bar */}
            <div className="app-bar">
              <span className="brand">
                <Icon name="mundo" size={22} color="#003893" aria-hidden />
                Colombia&nbsp;Travel
              </span>
              <span className="app-bar-actions">
                <Icon name="comentario" size={20} aria-hidden />
                <Icon name="usuario" size={20} aria-hidden />
              </span>
            </div>

            <div className="app-scroll">
              {/* Search */}
              <div className="search-card">
                <label className="field">
                  <Icon name="buscar" size={18} aria-hidden />
                  <span>¿A dónde vas?</span>
                </label>
                <div className="field-row">
                  <label className="field">
                    <Icon name="calendario" size={18} aria-hidden />
                    <span>Fechas</span>
                  </label>
                  <label className="field">
                    <Icon name="usuario" size={18} aria-hidden />
                    <span>2 viajeros</span>
                  </label>
                </div>
                <button type="button" className="search-cta">
                  <Icon name="buscar" size={18} aria-hidden />
                  Buscar experiencias
                </button>
              </div>

              {/* Categories */}
              <h3 className="block-title">Explora Colombia</h3>
              <div className="cats">
                {CATEGORIES.map((c) => (
                  <div className="cat" key={c.name}>
                    <span className="cat-icon">
                      <Icon name={c.icon} size={26} aria-hidden />
                    </span>
                    <span className="cat-name">{c.name}</span>
                  </div>
                ))}
              </div>

              {/* Experiences */}
              <h3 className="block-title">Experiencias destacadas</h3>
              <div className="exps">
                {EXPERIENCES.map((e) => {
                  const isSaved = !!saved[e.title]
                  return (
                    <article className="exp" key={e.title}>
                      <div className="exp-banner" style={{ background: e.accent }}>
                        <Icon name={e.icon} size={52} color="#fff" aria-hidden />
                        <button
                          type="button"
                          className="exp-save"
                          aria-pressed={isSaved}
                          aria-label={isSaved ? 'Quitar de guardados' : 'Guardar'}
                          onClick={() =>
                            setSaved((s) => ({ ...s, [e.title]: !s[e.title] }))
                          }
                        >
                          <Icon name={isSaved ? 'estrella-llena' : 'estrella'} size={18} />
                        </button>
                      </div>
                      <div className="exp-body">
                        <p className="exp-title">{e.title}</p>
                        <div className="exp-meta">
                          <span>
                            <Icon name="estrella-llena" size={14} color="#FCD116" aria-hidden />
                            {e.rating}
                          </span>
                          <span>
                            <Icon name="marcador" size={14} aria-hidden />
                            {e.place}
                          </span>
                          <span>
                            <Icon name="reloj" size={14} aria-hidden />
                            {e.hours}
                          </span>
                        </div>
                        <p className="exp-price">
                          <Icon name="dolar" size={15} aria-hidden />
                          {e.price} <span>/ persona</span>
                        </p>
                      </div>
                    </article>
                  )
                })}
              </div>

              {/* Services */}
              <h3 className="block-title">Incluye</h3>
              <div className="services">
                {SERVICES.map((s) => (
                  <span className="service" key={s.label}>
                    <Icon name={s.icon} size={18} aria-hidden />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom nav */}
            <nav className="bottom-nav" aria-label="Navegación de la app">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className="nav-item"
                  data-active={nav === n.id}
                  aria-current={nav === n.id ? 'page' : undefined}
                  onClick={() => setNav(n.id)}
                >
                  <Icon name={n.icon} size={22} aria-hidden />
                  <span>{n.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Legend */}
        <aside className="legend">
          <h3 className="block-title">Íconos en uso</h3>
          <p className="legend-lead">
            Cada elemento de la interfaz usa un ícono del paquete. Estos son
            algunos y su propósito en la pantalla:
          </p>
          <ul className="legend-list">
            {LEGEND.map((l) => (
              <li key={l.icon}>
                <span className="legend-icon">
                  <Icon name={l.icon} size={20} aria-hidden />
                </span>
                <code>{l.icon}</code>
                <span className="legend-use">{l.use}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
