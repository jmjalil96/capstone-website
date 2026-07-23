import LandingHero from '../landing/LandingHero'
import './EmpresasHero.css'

/* Fotos en el repo, no en Unsplash: el sitio no depende de un CDN ajeno. */
import empresas800 from '../../assets/empresas-hero-800.webp'
import empresas1200 from '../../assets/empresas-hero-1200.webp'
import empresas1600 from '../../assets/empresas-hero-1600.webp'

const empresasPhoto = empresas1600

const empresasPhotoSrcSet = `${empresas800} 800w, ${empresas1200} 1200w, ${empresas1600} 1600w`

/* Cada bloque muestra otra franja de la misma foto: un tríptico. */
const slices = ['empresas-hero__block--a', 'empresas-hero__block--b', 'empresas-hero__block--c']

/* La composición de empresas: "el perfil urbano" — la foto en tres
   bloques verticales de alturas escalonadas, como manzanas de ciudad
   que crecen hacia la derecha. Base plana sobre el borde del hero. */
function EmpresasHero() {
  return (
    <LandingHero
      variant="empresas"
      eyebrow="Seguros para empresas"
      title="Los riesgos de tu empresa, bajo control."
      lede="Del incendio a las fianzas, cada operación tiene sus riesgos. Armamos el programa de seguros de tu empresa con nuestras aseguradoras aliadas y lo gestionamos contigo — pólizas, renovaciones y siniestros."
      ctaLabel="Cotiza los seguros de tu empresa"
      media={
        <div className="empresas-hero__skyline" aria-hidden="true">
          {slices.map((slice) => (
            <div className={`empresas-hero__block ${slice}`} key={slice}>
              <img
                src={empresasPhoto}
                srcSet={empresasPhotoSrcSet}
                sizes="(max-width: 720px) 30vw, 14vw"
                fetchPriority="high"
                alt=""
              />
            </div>
          ))}
        </div>
      }
    />
  )
}

export default EmpresasHero
