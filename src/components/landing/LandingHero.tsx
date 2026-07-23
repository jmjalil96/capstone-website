import type { ReactNode } from 'react'
import './LandingHero.css'

type LandingHeroProps = {
  /* Sufijo de clase (landing-hero--<ramo>): cada landing engancha ahí
     el CSS de su composición fotográfica. */
  variant: string
  eyebrow: string
  title: string
  lede: string
  ctaLabel: string
  media: ReactNode
}

/* El esqueleto común de los heros de landing: banda navy y columna de
   contenido compartidas; la composición fotográfica (el slot `media`)
   es lo único que cambia de un ramo a otro. */
function LandingHero({ variant, eyebrow, title, lede, ctaLabel, media }: LandingHeroProps) {
  return (
    <section
      className={`landing-hero landing-hero--${variant}`}
      aria-labelledby="landing-hero-title"
    >
      <div className="shell landing-hero__shell">
        <div className="landing-hero__content">
          <p className="landing-hero__eyebrow">{eyebrow}</p>
          <h1 className="landing-hero__title" id="landing-hero-title">
            {title}
          </h1>
          <p className="landing-hero__lede">{lede}</p>
          <div className="landing-hero__actions">
            <a className="landing-hero__button landing-hero__button--primary" href="#quote">
              {ctaLabel} <span aria-hidden="true">→</span>
            </a>
            <a
              className="landing-hero__button landing-hero__button--secondary"
              href="https://wa.me/message/XM5YAG5TH4IEA1"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {media}
    </section>
  )
}

export default LandingHero
