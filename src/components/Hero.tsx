import './Hero.css'

const heroPhotoBase = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'

const heroImageUrl = `${heroPhotoBase}?auto=format&fit=crop&q=85&w=1600`

const heroImageSrcSet = [800, 1200, 1600, 2400]
  .map((width) => `${heroPhotoBase}?auto=format&fit=crop&q=85&w=${width} ${width}w`)
  .join(', ')

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
            Una solución para cada problema, un seguro para cada necesidad. Más de 30 años de
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
