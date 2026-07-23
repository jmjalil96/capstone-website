import { Fragment, useEffect, useRef, useState } from 'react'
import { glossaryGroups } from './glossaryData'
import './Glossary.css'

/* La costura del glosario: un libro abierto dibujándose entre los
   rieles — el motivo de la página de referencia. Subtrazos ≤ 80. */
const glossarySeam = (
  <svg viewBox="0 0 160 40" focusable="false">
    <path
      className="glossary__trace"
      d="M80 11 V30 M80 14 C74 9 62 8 56 10 V26 C62 24 74 25 80 30 M80 14 C86 9 98 8 104 10 V26 C98 24 86 25 80 30"
    />
  </svg>
)

/* La página de referencia: mástil navy de portada, costura con el
   libro, y el cuerpo en dos columnas — índice de pulgar fijo a la
   izquierda (la piedra clave marca el grupo activo) y las entradas
   como filas de diccionario: término a la izquierda, definición a la
   derecha. Los ids de las entradas son las anclas públicas. */
function Glossary() {
  const seamRef = useRef<HTMLDivElement>(null)
  const [activeGroup, setActiveGroup] = useState(glossaryGroups[0].id)

  /* El libro se dibuja una sola vez al entrar en vista. */
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

  /* Scrollspy del índice: la franja central del viewport decide qué
     grupo "es" — la misma mecánica que el nav del home. */
  useEffect(() => {
    const sections = glossaryGroups
      .map((group) => document.getElementById(group.id))
      .filter((el): el is HTMLElement => el !== null)

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveGroup(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach((el) => spy.observe(el))
    return () => spy.disconnect()
  }, [])

  return (
    <div className="glossary">
      <section className="glossary__mast" aria-labelledby="glossary-title">
        <div className="shell">
          <p className="glossary__eyebrow">Glosario</p>
          <h1 className="glossary__title" id="glossary-title">
            Glosario de seguros: el idioma de tu póliza, en claro.
          </h1>
          <p className="glossary__lede">
            Los términos que verás al cotizar y al leer tu póliza, explicados como te los
            explicaríamos en persona — sin letra pequeña ni vueltas.
          </p>
          <p className="glossary__mast-note">
            Cada aseguradora define los detalles en su contrato. Aquí está el concepto; para tu
            caso, estamos nosotros.
          </p>
        </div>
      </section>

      {/* La costura entre la banda navy y el papel. */}
      <div className="glossary__seam" ref={seamRef} aria-hidden="true">
        {glossarySeam}
      </div>

      <div className="shell">
        {/* En pantallas angostas el índice fijo no cabe: las fichas
            saltan a cada grupo desde arriba. */}
        <nav className="glossary__chips" aria-label="Grupos del glosario">
          {glossaryGroups.map((group) => (
            <a className="glossary__chip" href={`#${group.id}`} key={group.id}>
              {group.label}
            </a>
          ))}
        </nav>

        <div className="glossary__layout">
          <nav className="glossary__rail" aria-label="Índice del glosario">
            <p className="glossary__rail-label">En esta página</p>
            <ul className="glossary__rail-list">
              {glossaryGroups.map((group) => (
                <li key={group.id}>
                  <a
                    className="glossary__rail-link"
                    href={`#${group.id}`}
                    aria-current={activeGroup === group.id ? 'true' : undefined}
                  >
                    {group.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="glossary__rail-note">
              ¿No está tu término?{' '}
              <a href="https://wa.me/message/XM5YAG5TH4IEA1">Escríbenos y te lo explicamos</a>
            </p>
          </nav>

          <div className="glossary__groups">
            {glossaryGroups.map((group) => (
              <section
                className="glossary__group"
                id={group.id}
                key={group.id}
                aria-labelledby={`${group.id}-title`}
              >
                <h2 className="glossary__group-title" id={`${group.id}-title`}>
                  {group.label}
                </h2>
                <p className="glossary__group-lede">{group.lede}</p>

                {group.terms.map((item) => (
                  <article className="glossary__entry" id={item.id} key={item.id}>
                    <h3 className="glossary__term">{item.term}</h3>
                    <div className="glossary__body">
                      <p className="glossary__def">{item.def}</p>
                      {(item.see || item.cta) && (
                        <p className="glossary__refs">
                          {item.see && (
                            <span className="glossary__see">
                              Ver también:{' '}
                              {item.see.map((link, index) => (
                                <Fragment key={link.href}>
                                  {index > 0 && <span aria-hidden="true"> · </span>}
                                  <a href={link.href}>{link.label}</a>
                                </Fragment>
                              ))}
                            </span>
                          )}
                          {item.cta && (
                            <a className="glossary__cta" href={item.cta.href}>
                              {item.cta.label} <span aria-hidden="true">→</span>
                            </a>
                          )}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Glossary
