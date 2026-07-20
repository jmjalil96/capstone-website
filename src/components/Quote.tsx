import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import './Quote.css'

const insurables = ['mi salud', 'mi familia', 'mi auto', 'mi casa', 'mi empresa', 'otra cosa']

function Quote() {
  const [what, setWhat] = useState(insurables[0])
  const [isOpen, setIsOpen] = useState(false)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<(HTMLSpanElement | null)[]>([])

  /* Al abrir, el foco cae en la opción elegida; clic afuera cierra. */
  useEffect(() => {
    if (!isOpen) return
    optionRefs.current[Math.max(insurables.indexOf(what), 0)]?.focus()

    const onDocumentClick = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const select = (option: string) => {
    setWhat(option)
    setIsOpen(false)
    buttonRef.current?.focus()
  }

  const onOptionKeyDown = (event: KeyboardEvent<HTMLSpanElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      optionRefs.current[Math.min(index + 1, insurables.length - 1)]?.focus()
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      optionRefs.current[Math.max(index - 1, 0)]?.focus()
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      select(insurables[index])
    } else if (event.key === 'Escape') {
      setIsOpen(false)
      buttonRef.current?.focus()
    } else if (event.key === 'Tab') {
      setIsOpen(false)
    }
  }

  return (
    <section className="quote-section" id="quote" aria-labelledby="quote-title">
      {/* [F6] El shell es el ancla del sello, no la sección: la punta
          rotada queda dentro del riel de contenido en todo ancho. */}
      <div className="shell quote-section__shell">
        <div className="quote-section__inner">
          <p className="quote-section__eyebrow" id="quote-title">
            Cotización
          </p>

          <form className="quote-section__form" action="#" onSubmit={(event) => event.preventDefault()}>
            <p className="quote-section__sentence">
              Quiero asegurar{' '}
              {/* Un botón, no un select: el texto es un nodo real, así que
                  el ancho es intrínseco — imposible recortar la última
                  letra — y la lista desplegada es nuestra, no del sistema. */}
              <span
                ref={wrapRef}
                className={`quote-section__select-wrap${isOpen ? ' open' : ''}`}
              >
                <button
                  ref={buttonRef}
                  className="quote-section__input quote-section__select-button"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isOpen}
                  aria-label="Qué quieres asegurar"
                  onClick={() => setIsOpen((open) => !open)}
                >
                  {what}
                </button>
                <input type="hidden" name="what" value={what} />
                <span
                  className="quote-section__options"
                  role="listbox"
                  aria-label="Qué quieres asegurar"
                  hidden={!isOpen}
                >
                  {insurables.map((option, index) => (
                    <span
                      key={option}
                      ref={(el) => {
                        optionRefs.current[index] = el
                      }}
                      role="option"
                      aria-selected={option === what}
                      tabIndex={-1}
                      onClick={() => select(option)}
                      onKeyDown={(event) => onOptionKeyDown(event, index)}
                    >
                      {option}
                    </span>
                  ))}
                </span>
              </span>
              . Soy{' '}
              <input
                className="quote-section__input quote-section__input--name"
                name="name"
                type="text"
                autoComplete="name"
                aria-label="Tu nombre"
                placeholder="tu nombre"
              />
              , llámame al{' '}
              <input
                className="quote-section__input quote-section__input--phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-label="Tu teléfono"
                placeholder="tu teléfono"
              />
              .
            </p>

            <div className="quote-section__actions">
              <button className="quote-section__cta" type="submit">
                Enviar <span className="quote-section__arrow" aria-hidden="true">→</span>
              </button>
              <a className="quote-section__alt" href="https://wa.me/message/XM5YAG5TH4IEA1">
                Mejor por WhatsApp
              </a>
            </div>
          </form>

          <p className="quote-section__note">
            Tu próximo seguro al alcance de un click. Te respondemos Lun–Vie de 8:30 a 17:00.
          </p>
        </div>

        <div className="quote-section__mark" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Quote
