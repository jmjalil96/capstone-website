import LandingHero from '../landing/LandingHero'
import './HogarHero.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import hogar800 from '../../assets/hogar-800.webp'
import hogar1200 from '../../assets/hogar-1200.webp'
import hogar1600 from '../../assets/hogar-1600.webp'

const hogarPhoto = hogar1600

const hogarPhotoSrcSet = `${hogar800} 800w, ${hogar1200} 1200w, ${hogar1600} 1600w`

/* La composición de hogar: "el gablete" — la foto vive dentro de una
   silueta de casa (rectángulo con techo a dos aguas) y una línea
   dorada recorre la cumbrera. Base plana sobre el borde del hero. */
function HogarHero() {
  return (
    <LandingHero
      variant="hogar"
      eyebrow="Seguro de hogar"
      title="Tu hogar, protegido de techo a cimientos."
      lede="Tu casa es más que un bien: es donde vive todo lo demás. Comparamos los planes de hogar de nuestras aseguradoras aliadas — estructura, contenidos y responsabilidad — y te acompañamos cuando algo pasa."
      ctaLabel="Cotiza tu seguro de hogar"
      media={
        <div className="hogar-hero__casa" aria-hidden="true">
          <svg
            className="hogar-hero__roofline"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            focusable="false"
          >
            <polyline points="0,22 50,0 100,22" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="hogar-hero__window">
            <img
              src={hogarPhoto}
              srcSet={hogarPhotoSrcSet}
              sizes="(max-width: 720px) 80vw, 36vw"
              fetchPriority="high"
              alt=""
            />
          </div>
        </div>
      }
    />
  )
}

export default HogarHero
