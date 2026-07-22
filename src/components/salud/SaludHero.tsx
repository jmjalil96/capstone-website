import KeystoneMark from '../KeystoneMark'
import './SaludHero.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import salud800 from '../../assets/salud-800.webp'
import salud1200 from '../../assets/salud-1200.webp'
import salud1600 from '../../assets/salud-1600.webp'

const saludPhoto = salud1600

const saludPhotoSrcSet = `${salud800} 800w, ${salud1200} 1200w, ${salud1600} 1600w`

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

      {/* El arco del logo, a escala de ventana: la foto vive dentro de la
          silueta de la marca y la piedra clave dorada la corona. El borde
          inferior queda plano para que el pulso lo recorra limpio. */}
      <div className="salud-hero__arch" aria-hidden="true">
        <KeystoneMark className="salud-hero__keystone" />
        <div className="salud-hero__window">
          <img
            src={saludPhoto}
            srcSet={saludPhotoSrcSet}
            sizes="(max-width: 720px) 82vw, 38vw"
            fetchPriority="high"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default SaludHero
