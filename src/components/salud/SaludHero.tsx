import KeystoneMark from '../KeystoneMark'
import LandingHero from '../landing/LandingHero'
import './SaludHero.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import salud800 from '../../assets/salud-800.webp'
import salud1200 from '../../assets/salud-1200.webp'
import salud1600 from '../../assets/salud-1600.webp'

const saludPhoto = salud1600

const saludPhotoSrcSet = `${salud800} 800w, ${salud1200} 1200w, ${salud1600} 1600w`

/* La composición de salud: el arco del logo a escala de ventana — la
   foto vive dentro de la silueta de la marca y la piedra clave dorada
   la corona. El borde inferior queda plano para el pulso. */
function SaludHero() {
  return (
    <LandingHero
      variant="salud"
      eyebrow="Seguros de salud"
      title="Tu salud, con alguien de tu lado."
      lede="Un seguro de salud no se elige por el folleto: se elige entendiendo coberturas, deducibles y letra pequeña. Comparamos los planes de nuestras aseguradoras aliadas y te acompañamos después de firmar — reembolsos, siniestros y renovaciones incluidos."
      ctaLabel="Cotiza tu seguro de salud"
      media={
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
      }
    />
  )
}

export default SaludHero
