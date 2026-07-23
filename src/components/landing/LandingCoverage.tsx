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

        {/* La fila que cierra el libro mayor: la prueba de "comparamos
            por ti" son las aseguradoras con las que cotizamos. */}
        <div className="landing-coverage__carriers">
          <p className="landing-coverage__carriers-label">{carriersLabel}</p>
          <ul className="landing-coverage__carriers-row" aria-label="Aseguradoras aliadas">
            {carriers.map((name) => (
              <li className="landing-coverage__carrier" key={name}>
                <KeystoneMark className="landing-coverage__mark" />
                <span className="landing-coverage__carrier-name">{name}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="landing-coverage__note">{note}</p>
      </div>
    </section>
  )
}

export default LandingCoverage
