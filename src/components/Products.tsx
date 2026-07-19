import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './Products.css'

type Coverage = {
  icon: ReactNode
  name: string
  detail: string
}

type CardData = {
  id: string
  eyebrow: string
  title: string
  photo: string
  coverages: Coverage[]
  moreLabel: string
  ctaLabel: string
}

function CoverageIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

const icons = {
  auto: (
    <CoverageIcon>
      <path d="M4 16.5v-3l1.6-4.2A2 2 0 0 1 7.5 8h9a2 2 0 0 1 1.9 1.3l1.6 4v3.2" />
      <path d="M4 13.5h16" />
      <circle cx="7.8" cy="16.8" r="1.6" />
      <circle cx="16.2" cy="16.8" r="1.6" />
    </CoverageIcon>
  ),
  hogar: (
    <CoverageIcon>
      <path d="M4 11.2 12 4.8l8 6.4" />
      <path d="M6.2 9.8V19h11.6V9.8" />
      <path d="M10.2 19v-4.6h3.6V19" />
    </CoverageIcon>
  ),
  vida: (
    <CoverageIcon>
      <path d="M12 19.4c-4.5-3.1-7.4-5.9-7.4-9A4 4 0 0 1 8.4 6.3c1.5 0 2.8.8 3.6 2.1.8-1.3 2.1-2.1 3.6-2.1a4 4 0 0 1 3.8 4.1c0 3.1-2.9 5.9-7.4 9z" />
    </CoverageIcon>
  ),
  salud: (
    <CoverageIcon>
      <path d="M3.5 12h3.6l2.2-5.4 3.4 10.8 2.2-5.4h5.6" />
    </CoverageIcon>
  ),
  viajes: (
    <CoverageIcon>
      <path d="M21 3 3 10.7l6 2.1L11.2 19 21 3z" />
      <path d="M9 12.8 21 3" />
    </CoverageIcon>
  ),
  comercios: (
    <CoverageIcon>
      <path d="M4.5 9.5 5.8 5h12.4l1.3 4.5" />
      <path d="M4.5 9.5h15" />
      <path d="M5 9.5V19h14V9.5" />
      <path d="M9.5 19v-5h5v5" />
    </CoverageIcon>
  ),
  flota: (
    <CoverageIcon>
      <path d="M3 16V7.5h10.5V16" />
      <path d="M13.5 10.5h3.6l2.9 3V16" />
      <circle cx="7" cy="16.8" r="1.6" />
      <circle cx="16.5" cy="16.8" r="1.6" />
    </CoverageIcon>
  ),
  responsabilidad: (
    <CoverageIcon>
      <path d="M12 4.2 18.5 6.5v4.9c0 4-2.6 6.8-6.5 7.9-3.9-1.1-6.5-3.9-6.5-7.9V6.5z" />
      <path d="m9.4 11.8 1.9 1.9 3.3-3.4" />
    </CoverageIcon>
  ),
  riesgos: (
    <CoverageIcon>
      <path d="M4.5 14.5a7.5 7.5 0 0 1 15 0" />
      <path d="M3.5 14.5h17v2.2h-17z" />
      <path d="M12 5.5v2" />
    </CoverageIcon>
  ),
  caucion: (
    <CoverageIcon>
      <path d="M6.8 3.5h7.4l3.6 3.7v13.3H6.8z" />
      <path d="M14.2 3.5v3.7h3.6" />
      <path d="m9.6 13.6 1.8 1.8 3-3.1" />
    </CoverageIcon>
  ),
  plus: (
    <CoverageIcon>
      <path d="M12 5v14M5 12h14" />
    </CoverageIcon>
  ),
}

const cards: CardData[] = [
  {
    id: 'personas',
    eyebrow: 'Para tu vida',
    title: 'Personas',
    photo:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200',
    coverages: [
      { icon: icons.auto, name: 'Auto', detail: 'Todo riesgo o terceros' },
      { icon: icons.hogar, name: 'Hogar', detail: 'Incendio, robo y cristales' },
      { icon: icons.vida, name: 'Vida', detail: 'Individual y con ahorro' },
      { icon: icons.salud, name: 'Salud', detail: 'Accidentes personales' },
      { icon: icons.viajes, name: 'Viajes', detail: 'Asistencia al viajero' },
    ],
    moreLabel: '¿Otra cobertura? Preguntanos',
    ctaLabel: 'Pedir cotización',
  },
  {
    id: 'empresas',
    eyebrow: 'Para tu negocio',
    title: 'Empresas',
    photo:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200',
    coverages: [
      { icon: icons.comercios, name: 'Pyme y comercios', detail: 'Multicobertura integral' },
      { icon: icons.flota, name: 'Flota vehicular', detail: 'Autos y utilitarios' },
      {
        icon: icons.responsabilidad,
        name: 'Responsabilidad civil',
        detail: 'Profesional y de operaciones',
      },
      { icon: icons.riesgos, name: 'Riesgos del trabajo', detail: 'ART para tu equipo' },
      { icon: icons.caucion, name: 'Caución', detail: 'Garantías de contrato' },
    ],
    moreLabel: '¿Un riesgo específico? Preguntanos',
    ctaLabel: 'Hablar con un asesor',
  },
]

function CoverCard({ card }: { card: CardData }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const openButtonRef = useRef<HTMLButtonElement>(null)

  const close = () => {
    setIsFlipped(false)
    openButtonRef.current?.focus()
  }

  return (
    <article
      className={`cover-card${isFlipped ? ' cover-card--flipped' : ''}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isFlipped) close()
      }}
    >
      <div className="cover-card__inner">
        {/* The hidden face is inert so focus can't land behind the card. */}
        <div
          className="cover-card__face cover-card__front"
          inert={isFlipped}
          onClick={(event) => {
            if (!(event.target as HTMLElement).closest('a')) setIsFlipped(true)
          }}
        >
          <div className="cover-card__photo" aria-hidden="true">
            <img src={card.photo} alt="" loading="lazy" />
          </div>
          <div className="cover-card__foot">
            <div className="cover-card__titles">
              <p className="cover-card__eyebrow">{card.eyebrow}</p>
              <h3 className="cover-card__name">{card.title}</h3>
            </div>
            <button
              ref={openButtonRef}
              className="cover-card__open"
              type="button"
              aria-expanded={isFlipped}
            >
              Ver coberturas{' '}
              <span className="cover-card__chip" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="cover-card__face cover-card__back" inert={!isFlipped}>
          <p className="cover-card__eyebrow">{card.title}</p>
          <ul className="cover-card__list">
            {card.coverages.map((coverage) => (
              <li className="cover-card__item" key={coverage.name}>
                <span className="cover-card__ico" aria-hidden="true">
                  {coverage.icon}
                </span>
                <span className="cover-card__text">
                  <span className="cover-card__what">{coverage.name}</span>
                  <span className="cover-card__how">{coverage.detail}</span>
                </span>
              </li>
            ))}
            <li className="cover-card__item cover-card__more">
              <a href="#contact">
                <span className="cover-card__ico" aria-hidden="true">
                  {icons.plus}
                </span>
                {card.moreLabel}
              </a>
            </li>
          </ul>
          <div className="cover-card__actions">
            <a className="cover-card__cta" href="#quote">
              {card.ctaLabel}
            </a>
            <button className="cover-card__close" type="button" onClick={close}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function Products() {
  return (
    <section className="products" lang="es" aria-label="Coberturas">
      <div className="products__intro">
        <p className="products__eyebrow">Coberturas</p>
        <h2 className="products__title">Dos maneras de empezar.</h2>
        <p className="products__lede">
          Elige tu perfil y da vuelta la tarjeta: ahí están las coberturas que comparamos y
          cotizamos por ti.
        </p>
      </div>

      <div className="products__cards">
        {cards.map((card) => (
          <CoverCard key={card.id} card={card} />
        ))}
      </div>

      <svg
        className="products__clip-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Unit-space clip; the quadratic's control point is the intersection
              of the adjoining line tangents, so the seam has no break. */}
          <clipPath id="card-photo-seam" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 H 1 V 0.82 L 0.5 0.93 Q 0.18 1 0.05 1 H 0 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default Products
