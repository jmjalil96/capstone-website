import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import KeystoneMark from '../KeystoneMark'
import './LandingCoverage.css'

export type LandingCoverageItem = {
  icon: ReactNode
  name: string
  detail: string
}

type LandingCoverageProps = {
  title: string
  lede: string
  items: LandingCoverageItem[]
  /* El motivo de la costura (un svg 160×40 con .landing-coverage__trace):
     cada ramo dibuja el suyo entre los mismos rieles grises. */
  seam: ReactNode
  /* La frase completa del cierre ("Cotizamos X con nuestras aseguradoras
     aliadas"); note es su línea de apoyo — la invitación del ramo. */
  carriersLabel: string
  carriers: string[]
  note: string
}

/* El libro mayor de coberturas compartido por las landings: costura con
   motivo propio, seis ítems con filete, y la fila de aliadas que prueba
   el "comparamos por ti". */
function LandingCoverage({
  title,
  lede,
  items,
  seam,
  carriersLabel,
  carriers,
  note,
}: LandingCoverageProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const seamRef = useRef<HTMLDivElement>(null)

  useReveal(sectionRef, '.landing-coverage__item')

  /* El motivo se dibuja una sola vez al entrar en vista. El CSS decide
     si anima — con reduced motion queda quieto. */
  useEffect(() => {
    const seamNode = seamRef.current
    if (!seamNode) return
    const observer = new IntersectionObserver(
      (entries, self) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        seamNode.classList.add('is-live')
        self.disconnect()
      },
      { threshold: 0.6 },
    )
    observer.observe(seamNode)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="landing-coverage" aria-labelledby="landing-coverage-title" ref={sectionRef}>
      {/* La costura entre la banda navy y el papel. */}
      <div className="landing-coverage__seam" ref={seamRef} aria-hidden="true">
        {seam}
      </div>

      <div className="shell">
        <div className="landing-coverage__intro">
          <p className="landing-coverage__eyebrow">Coberturas</p>
          <h2 className="landing-coverage__title" id="landing-coverage-title">
            {title}
          </h2>
          <p className="landing-coverage__lede">{lede}</p>
        </div>

        <ul className="landing-coverage__grid">
          {items.map((item) => (
            <li className="landing-coverage__item" key={item.name}>
              <span className="landing-coverage__ico" aria-hidden="true">
                {item.icon}
              </span>
              <span className="landing-coverage__text">
                <span className="landing-coverage__what">{item.name}</span>
                <span className="landing-coverage__how">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* El cierre del libro mayor: la frase del broker con su piedra
            clave, y las aliadas como colofón — evidencia en voz baja. */}
        <div className="landing-coverage__carriers">
          <div className="landing-coverage__carriers-lockup">
            <KeystoneMark className="landing-coverage__carriers-key" />
            <p className="landing-coverage__carriers-label">{carriersLabel}</p>
            <p className="landing-coverage__carriers-note">{note}</p>
          </div>
          <ul className="landing-coverage__carriers-row" aria-label="Aseguradoras aliadas">
            {carriers.map((name) => (
              <li className="landing-coverage__carrier" key={name}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default LandingCoverage
