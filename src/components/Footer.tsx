import { CapstoneLogo, CapstoneWordmark } from './CapstoneLogo'
import './Footer.css'

/* Aseguradoras aliadas: las aseguradoras del país con más de US$20MM
   de prima neta (SCVS 2025) más las prepagadas aliadas. Tratamientos
   tipográficos genéricos en rotación — sugieren logos sin imitar
   marcas; cada nombre conserva el mismo tratamiento en ambas pistas. */
const insurers = [
  'Equisuiza',
  'Seguros Pichincha',
  'Chubb',
  'Zurich',
  'Latina Seguros',
  'Hispana de Seguros',
  'Aseguradora del Sur',
  'AIG Metropolitana',
  'Sweaden',
  'MAPFRE',
  'Atlántida Seguros',
  'Seguros Alianza',
  'Seguros Unidos',
  'Seguros Cóndor',
  'Generali',
  'BMI',
  'Pan American Life',
  'BUPA',
  'Best Doctors',
  'Vaz Seguros',
  'Saludsa',
  'Asisken',
]

/* Doubled so a single track always outspans the viewport (no loop gap). */
const trackMarks = [...insurers, ...insurers]

function LogoTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="site-footer__track" aria-hidden={hidden || undefined}>
      {trackMarks.map((name, index) => (
        <span
          key={`${name}-${index}`}
          className={`site-footer__insurer site-footer__insurer--s${((index % insurers.length) % 6) + 1}`}
        >
          {name}
        </span>
      ))}
    </div>
  )
}

function Footer({ isLanding = false }: { isLanding?: boolean }) {
  /* En una landing, las secciones del home viven en "/"; #quote sí
     existe en la propia página. */
  const homePrefix = isLanding ? '/' : ''

  return (
    <footer className="site-footer">
      <div className="site-footer__band">
        <p className="site-footer__band-label">Nuestras aseguradoras aliadas</p>
        <div className="site-footer__strip" aria-label="Aseguradoras con las que trabajamos">
          <LogoTrack />
          <LogoTrack hidden />
        </div>
      </div>

      <div className="shell site-footer__body">
        <div className="site-footer__columns">
          <div className="site-footer__brand">
            <a className="site-footer__logo" href="#top" aria-label="Capstone — inicio">
              <CapstoneLogo className="site-footer__logo-img" />
            </a>
            <p className="site-footer__pitch">
              Broker de seguros. Nuestra visión es inspirar y desafiar la industria de seguros: un
              aliado que te acompaña en cada etapa.
            </p>
          </div>

          {/* Una landing por ramo: esta columna crece con cada página nueva. */}
          <nav aria-label="Seguros">
            <p className="site-footer__heading">Seguros</p>
            <ul className="site-footer__list">
              <li>
                <a href="/seguro-de-salud/">Seguro de salud</a>
              </li>
              <li>
                <a href="/seguro-vehicular/">Seguro vehicular</a>
              </li>
              <li>
                <a href="/seguro-de-vida/">Seguro de vida</a>
              </li>
              <li>
                <a href="/seguro-de-hogar/">Seguro de hogar</a>
              </li>
              <li>
                <a href="/seguros-para-empresas/">Seguros para empresas</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Secciones">
            <p className="site-footer__heading">Secciones</p>
            <ul className="site-footer__list">
              <li>
                <a href={`${homePrefix}#coverage`}>Personas</a>
              </li>
              <li>
                <a href={`${homePrefix}#coverage`}>Empresas</a>
              </li>
              <li>
                <a href="#quote">Cotización</a>
              </li>
              <li>
                <a href={`${homePrefix}#acceso`}>Acceso</a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="site-footer__heading">Contacto</p>
            <ul className="site-footer__list">
              <li>
                <a href="tel:+59343917828">(04) 391-7828</a>
              </li>
              <li>
                <a href="https://wa.me/message/XM5YAG5TH4IEA1">WhatsApp +593 96-894-6779</a>
              </li>
              <li>
                <a href="https://www.instagram.com/capstone.ec">@capstone.ec</a>
              </li>
              <li>Arcos Plaza I, Oficina 01, Samborondón</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>
            CAPSTONE Seguros — Samborondón, Ecuador —{' '}
            <a href="https://capstone.com.ec" rel="noreferrer">
              capstone.com.ec
            </a>
          </p>
          <p>© 2026 CAPSTONE Seguros</p>
        </div>
      </div>

      <div className="site-footer__word" aria-hidden="true">
        <CapstoneWordmark />
      </div>
    </footer>
  )
}

export default Footer
