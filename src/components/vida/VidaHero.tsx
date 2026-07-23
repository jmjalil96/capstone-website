import LandingHero from '../landing/LandingHero'
import './VidaHero.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import vida800 from '../../assets/vida-800.webp'
import vida1200 from '../../assets/vida-1200.webp'
import vida1600 from '../../assets/vida-1600.webp'

const vidaPhoto = vida1600

const vidaPhotoSrcSet = `${vida800} 800w, ${vida1200} 1200w, ${vida1600} 1600w`

/* La composición de vida: "el anillo" — la foto en un círculo pleno y
   un aro dorado desplazado detrás, como dos generaciones en órbita.
   Ni arco ni diagonal: la forma más serena del kit. */
function VidaHero() {
  return (
    <LandingHero
      variant="vida"
      eyebrow="Seguro de vida"
      title="El futuro de los tuyos, protegido."
      lede="Un seguro de vida no es para ti: es para los que dependen de ti. Comparamos los planes de vida de nuestras aseguradoras aliadas — coberturas, beneficios y costos — y te ayudamos a dejar ese pendiente resuelto."
      ctaLabel="Cotiza tu seguro de vida"
      media={
        <div className="vida-hero__orbit" aria-hidden="true">
          <span className="vida-hero__ring" />
          <div className="vida-hero__circle">
            <img
              src={vidaPhoto}
              srcSet={vidaPhotoSrcSet}
              sizes="(max-width: 720px) 70vw, 34vw"
              fetchPriority="high"
              alt=""
            />
          </div>
        </div>
      }
    />
  )
}

export default VidaHero
