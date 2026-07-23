import LandingHero from '../landing/LandingHero'
import './VehicularHero.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import vehicular800 from '../../assets/vehicular-800.webp'
import vehicular1200 from '../../assets/vehicular-1200.webp'
import vehicular1600 from '../../assets/vehicular-1600.webp'

const vehicularPhoto = vehicular1600

const vehicularPhotoSrcSet = `${vehicular800} 800w, ${vehicular1200} 1200w, ${vehicular1600} 1600w`

/* La composición de vehicular: "la ruta" — un panel diagonal a toda
   altura, cortado como carril, con la línea central dorada dibujándose
   sobre el filo. Contrapunto angular al arco curvo de salud. */
function VehicularHero() {
  return (
    <LandingHero
      variant="vehicular"
      eyebrow="Seguro vehicular"
      title="Maneja tranquilo. De lo demás nos encargamos."
      lede="Un choque, un rayón o quedarte botado en la vía no se planifican. Comparamos los planes vehiculares de nuestras aseguradoras aliadas — coberturas, deducibles y asistencias — y cuando algo pasa, el reclamo lo llevamos contigo."
      ctaLabel="Cotiza tu seguro vehicular"
      media={
        <div className="vehicular-hero__road" aria-hidden="true">
          <div className="vehicular-hero__panel">
            <img
              src={vehicularPhoto}
              srcSet={vehicularPhotoSrcSet}
              sizes="(max-width: 720px) 100vw, 46vw"
              fetchPriority="high"
              alt=""
            />
            <span className="vehicular-hero__line" />
          </div>
        </div>
      }
    />
  )
}

export default VehicularHero
