import './Hero.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import hero800 from '../assets/hero-800.webp'
import hero1200 from '../assets/hero-1200.webp'
import hero1600 from '../assets/hero-1600.webp'
import hero2400 from '../assets/hero-2400.webp'

const heroImageUrl = hero1600

const heroImageSrcSet = `${hero800} 800w, ${hero1200} 1200w, ${hero1600} 1600w, ${hero2400} 2400w`

function Hero() {
  return (
    <section className="insurance-hero" aria-labelledby="hero-title">
      <div className="shell insurance-hero__shell">
        <div className="insurance-hero__content">
          <p className="insurance-hero__eyebrow">Bienvenido a CAPSTONE Seguros</p>
          <h1 className="insurance-hero__title" id="hero-title">
            La nueva era de los seguros.
          </h1>
          <p className="insurance-hero__lede">
            Una solución para cada problema, un seguro para cada necesidad. Más de 35 años de
            experiencia creando soluciones personalizadas, con tecnología y compromiso.
          </p>
          <div className="insurance-hero__actions">
            <a
              className="insurance-hero__button insurance-hero__button--primary"
              href="#quote"
            >
              Cotiza aquí <span aria-hidden="true">→</span>
            </a>
            <a
              className="insurance-hero__button insurance-hero__button--secondary"
              href="#coverage"
            >
              Ver seguros
            </a>
          </div>
        </div>
      </div>

      <div className="insurance-hero__media insurance-hero__media--desktop" aria-hidden="true">
        <img
          src={heroImageUrl}
          srcSet={heroImageSrcSet}
          sizes="(max-width: 720px) 100vw, 64vw"
          fetchPriority="high"
          alt=""
        />
      </div>

      <div className="insurance-hero__media insurance-hero__media--mobile" aria-hidden="true">
        <img
          src={heroImageUrl}
          srcSet={heroImageSrcSet}
          sizes="(max-width: 720px) 100vw, 64vw"
          alt=""
        />
      </div>

      <svg
        className="insurance-hero__clip-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="hero-photo-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.70556 0 H 1 V 1 L 0.53889 0.565 Q 0.42389 0.456 0.53889 0.27 Z" />
          </clipPath>
          <clipPath id="hero-photo-curve-mobile" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.24 L 0.5 0.09 Q 0.8 0 0.95 0 H 1 V 1 H 0.95 Q 0.8 1 0.5 0.955 L 0 0.88 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default Hero
