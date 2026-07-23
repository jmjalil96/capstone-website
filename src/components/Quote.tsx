import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { ArchMark } from './CapstoneLogo'
import './Quote.css'

const insurables = ['mi salud', 'mi familia', 'mi vida', 'mi auto', 'mi casa', 'mi empresa', 'otra cosa']

/* Web app de Apps Script: anota el lead en la hoja y avisa por correo.
   El POST va sin header JSON — como text/plain es una petición simple,
   sin el preflight que Apps Script no sabe responder. */
const LEADS_URL =
  'https://script.google.com/macros/s/AKfycbyfpG_IroFCWlsIZa5nIzUSGQhdwZW3vFdy2IDSGObUnrq0UwQHksrpB2ZaB7sRry0Q/exec'

type Status = 'idle' | 'sending' | 'sent' | 'error'

/* Cada landing preselecciona su opción (defaultWhat); sin prop, el
   formulario abre en la primera — el home queda igual que siempre. */
function Quote({ defaultWhat }: { defaultWhat?: string } = {}) {
  const [what, setWhat] = useState(
    defaultWhat && insurables.includes(defaultWhat) ? defaultWhat : insurables[0],
  )
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [sentName, setSentName] = useState('')
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

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    const fields = new FormData(event.currentTarget)
    const payload = {
      what,
      name: String(fields.get('name') ?? '').trim(),
      phone: String(fields.get('phone') ?? '').trim(),
      email: String(fields.get('email') ?? '').trim(),
      botcheck: fields.get('botcheck') === 'on',
    }

    setStatus('sending')
    try {
      const response = await fetch(LEADS_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        /* Si Apps Script se cuelga, a los 15s cae al mensaje de error
           en vez de dejar el botón en "Enviando…" para siempre. */
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      setSentName(payload.name)
      setStatus('sent')
    } catch {
      setStatus('error')
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

          {status === 'sent' ? (
            <div role="status">
              <p className="quote-section__sentence">
                ¡Listo, {sentName}! Recibimos tu solicitud.
              </p>
              <p className="quote-section__note">
                Te llamamos Lun–Vie de 8:30 a 17:00 para cotizar tu seguro.
              </p>
            </div>
          ) : (
            <>
              <form className="quote-section__form" onSubmit={onSubmit}>
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
                    required
                  />
                  , llámame al{' '}
                  <input
                    className="quote-section__input quote-section__input--phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    aria-label="Tu teléfono"
                    placeholder="tu teléfono"
                    required
                  />{' '}
                  o escríbeme a{' '}
                  <input
                    className="quote-section__input quote-section__input--email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-label="Tu correo (opcional)"
                    placeholder="tu correo (opcional)"
                  />
                  .
                </p>

                {/* Trampa antibots: fuera de pantalla, nunca display:none —
                    el script descarta cualquier envío que la marque. */}
                <input
                  className="quote-section__botcheck"
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="quote-section__actions">
                  <button
                    className="quote-section__cta"
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Enviando…' : 'Enviar'}{' '}
                    <span className="quote-section__arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                  <a className="quote-section__alt" href="https://wa.me/message/XM5YAG5TH4IEA1">
                    Mejor por WhatsApp
                  </a>
                </div>

                {status === 'error' && (
                  <p className="quote-section__feedback quote-section__feedback--error" role="alert">
                    No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
                  </p>
                )}
              </form>

              <p className="quote-section__note">
                Tu próximo seguro al alcance de un click. Te respondemos Lun–Vie de 8:30 a 17:00.
              </p>
            </>
          )}
        </div>

        <ArchMark className="quote-section__mark" keyClassName="quote-section__mark-key" />
      </div>
    </section>
  )
}

export default Quote
