import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Cuéntanos qué quieres proteger',
    description: 'Identificamos contigo los riesgos que enfrentas, en tu vida o tu empresa.',
  },
  {
    number: '02',
    title: 'Comparamos el mercado por ti',
    description:
      'Cotizamos tu riesgo con nuestras más de 30 aseguradoras aliadas y te mostramos opciones reales.',
  },
  {
    number: '03',
    title: 'Eliges con información clara',
    description: 'Coberturas y precio explicados antes de firmar: tu póliza, simple y accesible.',
  },
  {
    number: '04',
    title: 'Siniestros eficientes',
    description: 'Respuestas rápidas y soluciones eficientes en los momentos más críticos.',
    isKey: true,
  },
]

function BadgeItems() {
  return (
    <>
      <span className="process-section__badge">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4.2 18.5 6.5v4.9c0 4-2.6 6.8-6.5 7.9-3.9-1.1-6.5-3.9-6.5-7.9V6.5z" />
          <path d="m9.4 11.8 1.9 1.9 3.3-3.4" />
        </svg>
        Más de 30 años de experiencia
      </span>
      <span className="process-section__badge-sep" aria-hidden="true" />
      <span className="process-section__badge">
        <strong>+3000</strong> pólizas activas
      </span>
      <span className="process-section__badge-sep" aria-hidden="true" />
      <span className="process-section__badge">
        <strong>+30</strong> aseguradoras aliadas
      </span>
      <span className="process-section__badge-sep" aria-hidden="true" />
      <span className="process-section__badge">
        <strong>+1.5MM</strong> reembolsos 2022
      </span>
      {/* Trailing separator closes the marquee loop; desktop hides it. */}
      <span
        className="process-section__badge-sep process-section__badge-sep--loop"
        aria-hidden="true"
      />
    </>
  )
}

function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const capsuleRef = useRef<HTMLDivElement>(null)

  /* El otro momento narrativo: los cuatro pasos entran escalonados. */
  useReveal(sectionRef, '.process-section__step')

  /* Las cifras de la cápsula cuentan hasta su valor al entrar en vista. */
  useEffect(() => {
    const capsule = capsuleRef.current
    if (!capsule) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nums = [...capsule.querySelectorAll<HTMLElement>('.process-section__badge strong')]
      .map((el) => {
        const final = el.textContent ?? ''
        const match = final.match(/[\d.]+/)
        if (!match || match.index === undefined) return null
        return {
          el,
          final,
          target: parseFloat(match[0]),
          decimals: (match[0].split('.')[1] || '').length,
          prefix: final.slice(0, match.index),
          suffix: final.slice(match.index + match[0].length),
        }
      })
      .filter((num) => num !== null)

    let frame = 0
    const counter = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        /* Ancho fijado antes de contar: los vecinos no tiemblan. */
        nums.forEach(({ el }) => {
          el.style.minWidth = `${el.offsetWidth}px`
          el.style.display = 'inline-block'
        })
        const start = performance.now()
        const duration = 1100
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          nums.forEach(({ el, final, target, decimals, prefix, suffix }) => {
            el.textContent = p === 1 ? final : prefix + (target * eased).toFixed(decimals) + suffix
          })
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    counter.observe(capsule)

    return () => {
      counter.disconnect()
      cancelAnimationFrame(frame)
      nums.forEach(({ el, final }) => {
        el.textContent = final
      })
    }
  }, [])

  return (
    <section
      className="process-section"
      id="process"
      aria-labelledby="process-title"
      ref={sectionRef}
    >
      <div className="process-section__seam" aria-hidden="true" />

      <div className="process-section__body">
        <div className="shell">
          <div className="process-section__grid">
            <div className="process-section__aside">
              <div className="process-section__head">
                <p className="process-section__eyebrow">Cómo trabajamos</p>
                <h2 className="process-section__title" id="process-title">
                  Nuestra promesa: seguros sin complicaciones.
                </h2>
                <p className="process-section__lede">
                  Nuestra misión es clara: guiarte hacia decisiones informadas para que elegir tu
                  póliza sea simple y accesible.
                </p>
              </div>

              <div className="process-section__cta-group">
                <a className="process-section__cta" href="#quote">
                  Cotiza aquí
                </a>
                <p className="process-section__note">
                  <span className="process-section__note-long">
                    Más de 30 años de experiencia en la industria de seguros.
                  </span>
                  <span className="process-section__note-short">
                    Más de 30 años de experiencia.
                  </span>
                </p>
              </div>
            </div>

            <ol className="process-section__ledger">
              {steps.map((step) => (
                <li
                  className={`process-section__step${step.isKey ? ' process-section__step--key' : ''}`}
                  key={step.number}
                >
                  <span className="process-section__number" aria-hidden="true">
                    {step.number}
                  </span>
                  <div className="process-section__step-text">
                    <div className="process-section__step-titles">
                      <h3>{step.title}</h3>
                      {step.isKey && <span className="process-section__tag">La diferencia</span>}
                    </div>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="process-section__badges">
        <div className="process-section__capsule" ref={capsuleRef}>
          <div className="process-section__badge-track">
            <BadgeItems />
          </div>
          {/* Second copy feeds the mobile marquee loop; hidden from readers and desktop. */}
          <div className="process-section__badge-track" aria-hidden="true">
            <BadgeItems />
          </div>
        </div>
      </div>

      <svg
        className="process-section__clip-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="process-section-seam" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 V 0.62 L 0.5 0.25 Q 0.838 0 0.95 0 H 1 V 1 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default Process
