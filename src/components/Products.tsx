import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Products.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import personasPhoto from '../assets/personas-1200.webp'
import empresasPhoto from '../assets/empresas-1200.webp'

type Coverage = {
  icon: ReactNode
  name: string
  detail: string
  /* Con landing propia: el ítem se vuelve enlace a esa página. */
  href?: string
}

type CardData = {
  id: string
  eyebrow: string
  title: string
  photo: string
  coverages: Coverage[]
  moreLabel: string
  ctaLabel: string
  ctaHref: string
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
  persona: (
    <CoverageIcon>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2a6.5 6.5 0 0 1 13 0" />
    </CoverageIcon>
  ),
  incendio: (
    <CoverageIcon>
      <path d="M12 4.5c1.3 2.3 4.9 4.7 4.9 8.4a4.9 4.9 0 0 1-9.8 0c0-1.4.5-2.7 1.4-3.9.3 1 .9 1.8 1.8 2.2-.4-2.5.2-4.9 1.7-6.7z" />
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
    eyebrow: 'Para ti y tu familia',
    title: 'Personas',
    photo: personasPhoto,
    coverages: [
      {
        icon: icons.salud,
        name: 'Asistencia médica',
        detail: 'Consultas, medicinas y hospitalización',
        href: '/seguro-de-salud/',
      },
      {
        icon: icons.vida,
        name: 'Vida',
        detail: 'El futuro de los tuyos, protegido',
        href: '/seguro-de-vida/',
      },
      {
        icon: icons.persona,
        name: 'Accidentes personales',
        detail: 'Respaldo económico ante imprevistos',
      },
      {
        icon: icons.auto,
        name: 'Vehículos',
        detail: 'Tu auto ante choques, robo o daños',
        href: '/seguro-vehicular/',
      },
      { icon: icons.hogar, name: 'Hogar', detail: 'Tu casa y todo lo que hay en ella' },
    ],
    moreLabel: '¿Viaje u otra cobertura? Pregúntanos',
    ctaLabel: 'Cotiza aquí',
    ctaHref: '#quote',
  },
  {
    id: 'empresas',
    eyebrow: 'Para tu negocio y tu equipo',
    title: 'Empresas',
    photo: empresasPhoto,
    coverages: [
      {
        icon: icons.incendio,
        name: 'Incendio y aliadas',
        detail: 'Tus activos, incluso ante desastres naturales',
      },
      {
        icon: icons.riesgos,
        name: 'Ramos técnicos',
        detail: 'Maquinaria, montaje y equipo electrónico',
      },
      { icon: icons.flota, name: 'Transporte', detail: 'Tu mercadería por tierra, mar o aire' },
      {
        icon: icons.responsabilidad,
        name: 'Responsabilidad civil',
        detail: 'Respaldo ante daños a terceros',
      },
      {
        icon: icons.caucion,
        name: 'Fianzas',
        detail: 'Cumplimiento de contrato y anticipos',
      },
    ],
    moreLabel: '¿Flota vehicular u otro riesgo? Pregúntanos',
    ctaLabel: 'Cotiza por WhatsApp',
    ctaHref: 'https://wa.me/message/XM5YAG5TH4IEA1',
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
              Ver seguros{' '}
              <span className="cover-card__chip" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="cover-card__face cover-card__back" inert={!isFlipped}>
          <p className="cover-card__eyebrow">{card.title}</p>
          <ul className="cover-card__list">
            {card.coverages.map((coverage) => {
              const body = (
                <>
                  <span className="cover-card__ico" aria-hidden="true">
                    {coverage.icon}
                  </span>
                  <span className="cover-card__text">
                    <span className="cover-card__what">
                      {coverage.name}
                      {coverage.href && (
                        <span className="cover-card__go" aria-hidden="true">
                          →
                        </span>
                      )}
                    </span>
                    <span className="cover-card__how">{coverage.detail}</span>
                  </span>
                </>
              )
              return coverage.href ? (
                <li className="cover-card__item cover-card__item--link" key={coverage.name}>
                  <a href={coverage.href}>{body}</a>
                </li>
              ) : (
                <li className="cover-card__item" key={coverage.name}>
                  {body}
                </li>
              )
            })}
            <li className="cover-card__item cover-card__more">
              <a href="#quote">
                <span className="cover-card__ico" aria-hidden="true">
                  {icons.plus}
                </span>
                {card.moreLabel}
              </a>
            </li>
          </ul>
          <div className="cover-card__actions">
            <a className="cover-card__cta" href={card.ctaHref}>
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
  const sectionRef = useRef<HTMLElement>(null)

  /* Solo un momento narrativo acá: las dos puertas aparecen al llegar. */
  useReveal(sectionRef, '.cover-card')

  return (
    <section className="products" id="coverage" aria-label="Coberturas" ref={sectionRef}>
      <div className="shell">
        <div className="products__intro">
          <p className="products__eyebrow">Seguros</p>
          <h2 className="products__title">Un seguro para cada necesidad.</h2>
          <p className="products__lede">
            Una solución para cada problema: elige tu perfil y da vuelta la tarjeta para ver los
            seguros que cotizamos por ti.
          </p>
        </div>

        <div className="products__cards">
          {cards.map((card) => (
            <CoverCard key={card.id} card={card} />
          ))}
        </div>
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
