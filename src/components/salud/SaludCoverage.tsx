import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './SaludCoverage.css'

function CoverageIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

const coverages = [
  {
    icon: (
      <CoverageIcon>
        <path d="M5 19.5V7.5h14v12" />
        <path d="M3.5 19.5h17" />
        <path d="M12 10.2v4M10 12.2h4" />
      </CoverageIcon>
    ),
    name: 'Hospitalización',
    detail: 'Habitación, cirugías y cuidados clínicos.',
  },
  {
    icon: (
      <CoverageIcon>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19.2a6.5 6.5 0 0 1 13 0" />
      </CoverageIcon>
    ),
    name: 'Consultas y especialistas',
    detail: 'Medicina general y especialidades.',
  },
  {
    icon: (
      <CoverageIcon>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 8.5v7M8.5 12h7" />
      </CoverageIcon>
    ),
    name: 'Medicinas',
    detail: 'Tus recetas, dentro y fuera del hospital.',
  },
  {
    icon: (
      <CoverageIcon>
        <path d="M12 19.4c-4.5-3.1-7.4-5.9-7.4-9A4 4 0 0 1 8.4 6.3c1.5 0 2.8.8 3.6 2.1.8-1.3 2.1-2.1 3.6-2.1a4 4 0 0 1 3.8 4.1c0 3.1-2.9 5.9-7.4 9z" />
      </CoverageIcon>
    ),
    name: 'Maternidad',
    detail: 'Control prenatal, parto y recién nacido.',
  },
  {
    icon: (
      <CoverageIcon>
        <path d="M12 4.2 18.5 6.5v4.9c0 4-2.6 6.8-6.5 7.9-3.9-1.1-6.5-3.9-6.5-7.9V6.5z" />
        <path d="m9.4 11.8 1.9 1.9 3.3-3.4" />
      </CoverageIcon>
    ),
    name: 'Enfermedades graves',
    detail: 'Respaldo ante diagnósticos mayores.',
  },
  {
    icon: (
      <CoverageIcon>
        <path d="M21 3 3 10.7l6 2.1L11.2 19 21 3z" />
        <path d="M9 12.8 21 3" />
      </CoverageIcon>
    ),
    name: 'Cobertura internacional',
    detail: 'Atención médica fuera del Ecuador.',
  },
]

function SaludCoverage() {
  const sectionRef = useRef<HTMLElement>(null)
  const pulseRef = useRef<HTMLDivElement>(null)

  useReveal(sectionRef, '.salud-coverage__item')

  /* La firma de la página: el electro se dibuja una sola vez al entrar
     en vista. El CSS decide si anima — con reduced motion queda quieto. */
  useEffect(() => {
    const pulse = pulseRef.current
    if (!pulse) return
    const observer = new IntersectionObserver(
      (entries, self) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        pulse.classList.add('is-live')
        self.disconnect()
      },
      { threshold: 0.6 },
    )
    observer.observe(pulse)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="salud-coverage" aria-labelledby="salud-coverage-title" ref={sectionRef}>
      {/* La costura entre la banda navy y el papel: una línea de vida. */}
      <div className="salud-coverage__pulse" ref={pulseRef} aria-hidden="true">
        <svg viewBox="0 0 160 40" focusable="false">
          <path className="salud-coverage__trace" d="M0 20 H50 L58 5 L70 35 L78 20 H160" />
        </svg>
      </div>

      <div className="shell">
        <div className="salud-coverage__intro">
          <p className="salud-coverage__eyebrow">Coberturas</p>
          <h2 className="salud-coverage__title" id="salud-coverage-title">
            Lo que un buen plan de salud puede cubrir.
          </h2>
          <p className="salud-coverage__lede">
            Cada aseguradora arma sus planes distinto. Comparamos coberturas, deducibles y precios
            por ti, para armar el plan que va con tu caso — no el que le conviene a una sola
            compañía.
          </p>
        </div>

        <ul className="salud-coverage__grid">
          {coverages.map((coverage) => (
            <li className="salud-coverage__item" key={coverage.name}>
              <span className="salud-coverage__ico" aria-hidden="true">
                {coverage.icon}
              </span>
              <span className="salud-coverage__text">
                <span className="salud-coverage__what">{coverage.name}</span>
                <span className="salud-coverage__how">{coverage.detail}</span>
              </span>
            </li>
          ))}
        </ul>

        <p className="salud-coverage__note">
          ¿Buscas algo puntual — ambulatorio, dental, visión? Pregúntanos al cotizar.
        </p>
      </div>
    </section>
  )
}

export default SaludCoverage
