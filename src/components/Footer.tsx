import './Footer.css'

/* Aseguradoras aliadas reales (capstone.com.ec) en tratamientos
   tipográficos genéricos variados — sugieren logos sin imitar marcas. */
const insurers = [
  { variant: 'bmi', name: 'BMI' },
  { variant: 'saludsa', name: 'Saludsa' },
  { variant: 'chubb', name: 'Chubb' },
  { variant: 'asisken', name: 'Asisken' },
  { variant: 'generali', name: 'Generali' },
  { variant: 'mapfre', name: 'MAPFRE' },
]

/* Doubled so a single track always outspans the viewport (no loop gap). */
const trackMarks = [...insurers, ...insurers]

function LogoTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="site-footer__track" aria-hidden={hidden || undefined}>
      {trackMarks.map((insurer, index) => (
        <span
          key={`${insurer.variant}-${index}`}
          className={`site-footer__insurer site-footer__insurer--${insurer.variant}`}
        >
          {insurer.name}
        </span>
      ))}
    </div>
  )
}

function Footer() {
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
            <a className="site-footer__logo" href="#top">
              <span className="site-footer__logo-mark" aria-hidden="true" />
              Capstone
            </a>
            <p className="site-footer__pitch">
              Broker de seguros. Nuestra visión es inspirar y desafiar la industria de seguros: un
              aliado que te acompaña en cada etapa.
            </p>
          </div>

          <nav aria-label="Secciones">
            <p className="site-footer__heading">Secciones</p>
            <ul className="site-footer__list">
              <li>
                <a href="#coverage">Personas</a>
              </li>
              <li>
                <a href="#process">Patrimonio</a>
              </li>
              <li>
                <a href="#quote">Cotización</a>
              </li>
              <li>
                <a href="https://creatorapp.zoho.com/juanmario_jalilbrokers/portal-jb-agentes">
                  Portal agente
                </a>
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
        Capstone
      </div>
    </footer>
  )
}

export default Footer
