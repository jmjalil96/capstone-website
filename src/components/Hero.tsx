import './Hero.css'

const heroImageUrl =
  'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=85&w=1600'

const heroImageSrcSet = [800, 1200, 1600, 2400]
  .map(
    (width) =>
      `https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=85&w=${width} ${width}w`,
  )
  .join(', ')

function Hero() {
  return (
    <>
      <section className="insurance-hero" aria-labelledby="hero-title">
        <div className="insurance-hero__content">
          <p className="insurance-hero__eyebrow">Independent insurance brokerage</p>
          <h1 className="insurance-hero__title" id="hero-title">
            Insurance, brokered around you.
          </h1>
          <p className="insurance-hero__lede">
            We compare coverage across trusted carriers, make the fine print clear, and stay in
            your corner from quote to claim.
          </p>
          <div className="insurance-hero__actions">
            <a
              className="insurance-hero__button insurance-hero__button--primary"
              href="#quote"
            >
              Request a quote <span aria-hidden="true">→</span>
            </a>
            <a
              className="insurance-hero__button insurance-hero__button--secondary"
              href="#coverage"
            >
              Explore coverage
            </a>
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
    </>
  )
}

export default Hero
