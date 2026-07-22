import './SaludHero.css'

/* Foto provisional: se reemplaza por la foto de salud aprobada
   (salud-800/1200/1600.webp) manteniendo el mismo srcSet. */
import saludPhoto from '../../assets/personas-1200.webp'

function SaludHero() {
  return (
    <section className="salud-hero" aria-labelledby="salud-hero-title">
      <div className="shell salud-hero__shell">
        <div className="salud-hero__content">
          <p className="salud-hero__eyebrow">Seguros de salud</p>
          <h1 className="salud-hero__title" id="salud-hero-title">
            Tu salud, con alguien de tu lado.
          </h1>
          <p className="salud-hero__lede">
            Un seguro de salud no se elige por el folleto: se elige entendiendo coberturas,
            deducibles y letra pequeña. Comparamos los planes de nuestras aseguradoras aliadas y te
            acompañamos después de firmar — reembolsos, siniestros y renovaciones incluidos.
          </p>
          <div className="salud-hero__actions">
            <a className="salud-hero__button salud-hero__button--primary" href="#quote">
              Cotiza tu seguro de salud <span aria-hidden="true">→</span>
            </a>
            <a
              className="salud-hero__button salud-hero__button--secondary"
              href="https://wa.me/message/XM5YAG5TH4IEA1"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="salud-hero__media salud-hero__media--desktop" aria-hidden="true">
        <img src={saludPhoto} sizes="(max-width: 720px) 100vw, 64vw" fetchPriority="high" alt="" />
      </div>

      <div className="salud-hero__media salud-hero__media--mobile" aria-hidden="true">
        <img src={saludPhoto} sizes="(max-width: 720px) 100vw, 64vw" alt="" />
      </div>

      <svg
        className="salud-hero__clip-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="salud-photo-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.70556 0 H 1 V 1 L 0.53889 0.565 Q 0.42389 0.456 0.53889 0.27 Z" />
          </clipPath>
          <clipPath id="salud-photo-curve-mobile" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.24 L 0.5 0.09 Q 0.8 0 0.95 0 H 1 V 1 H 0.95 Q 0.8 1 0.5 0.955 L 0 0.88 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default SaludHero
