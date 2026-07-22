import { useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './SaludBroker.css'

const steps = [
  {
    number: '01',
    title: 'Cuéntanos tu caso',
    description:
      'Tu edad, tu familia, tus prioridades: el punto de partida para buscar el plan correcto.',
  },
  {
    number: '02',
    title: 'Comparamos los planes por ti',
    description:
      'Cotizamos tu salud con nuestras aseguradoras aliadas y te mostramos opciones reales, lado a lado.',
  },
  {
    number: '03',
    title: 'Eliges con información clara',
    description: 'Coberturas, deducibles y precio explicados antes de firmar — sin letra pequeña.',
  },
  {
    number: '04',
    title: 'Te acompañamos al usarlo',
    description:
      'Reembolsos, siniestros y renovaciones: gestionamos contigo cada trámite cuando más lo necesitas.',
    isKey: true,
  },
]

function SaludBroker() {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef, '.salud-broker__step')

  return (
    <section className="salud-broker" aria-labelledby="salud-broker-title" ref={sectionRef}>
      <div className="salud-broker__seam" aria-hidden="true" />

      <div className="salud-broker__body">
        <div className="shell">
          <div className="salud-broker__grid">
            <div className="salud-broker__aside">
              <div className="salud-broker__head">
                <p className="salud-broker__eyebrow">Por qué con un broker</p>
                <h2 className="salud-broker__title" id="salud-broker-title">
                  Un asesor de tu lado, no un vendedor.
                </h2>
                <p className="salud-broker__lede">
                  Una aseguradora te ofrece sus planes; nosotros comparamos los de todas nuestras
                  aliadas y seguimos contigo después de firmar.
                </p>
              </div>

              <div className="salud-broker__cta-group">
                <a className="salud-broker__cta" href="#quote">
                  Cotiza aquí
                </a>
                <p className="salud-broker__note">
                  Más de 35 años de experiencia en la industria de seguros.
                </p>
              </div>
            </div>

            <ol className="salud-broker__ledger">
              {steps.map((step) => (
                <li
                  className={`salud-broker__step${step.isKey ? ' salud-broker__step--key' : ''}`}
                  key={step.number}
                >
                  <span className="salud-broker__number" aria-hidden="true">
                    {step.number}
                  </span>
                  <div className="salud-broker__step-text">
                    <div className="salud-broker__step-titles">
                      <h3>{step.title}</h3>
                      {step.isKey && <span className="salud-broker__tag">La diferencia</span>}
                    </div>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <svg
        className="salud-broker__clip-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="salud-broker-seam" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 V 0.62 L 0.5 0.25 Q 0.838 0 0.95 0 H 1 V 1 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default SaludBroker
