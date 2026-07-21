import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { createSession } from '../lib/portalSession'
import type { Realm } from '../lib/portalSession'
import { CapstoneLogo } from './CapstoneLogo'
import KeystoneMark from './KeystoneMark'
import './Access.css'

/* Foto en el repo, no en Unsplash; bajo la tinta navy no hace falta
   más resolución que 1200. */
import aside700 from '../assets/acceso-700.webp'
import aside1200 from '../assets/acceso-1200.webp'

type Status = 'idle' | 'checking' | 'error'

const asideImageUrl = aside1200

const asideImageSrcSet = `${aside700} 700w, ${aside1200} 1200w`

const realms: { id: Realm; label: string; hint: string; userLabel: string; userHint: string }[] = [
  {
    id: 'agentes',
    label: 'Portal de agentes',
    hint: 'Producción, comisiones y emisión',
    userLabel: 'Código de agente o correo',
    userHint: 'código de agente o correo',
  },
  {
    id: 'clientes',
    label: 'Portal de clientes',
    hint: 'Pólizas, reembolsos y siniestros',
    userLabel: 'Cédula o correo',
    userHint: 'cédula o correo',
  },
]

function Access() {
  const [realm, setRealm] = useState<Realm>('agentes')
  const [status, setStatus] = useState<Status>('idle')
  const headingRef = useRef<HTMLHeadingElement>(null)

  /* Al abrir la ventanilla el foco cae en el título: quien llega por
     teclado sabe dónde está antes de tabular hacia el formulario. */
  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  const active = realms.find((option) => option.id === realm) ?? realms[0]

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'checking') return

    const fields = new FormData(event.currentTarget)
    setStatus('checking')
    const result = await createSession(
      realm,
      String(fields.get('user') ?? ''),
      String(fields.get('password') ?? ''),
    )
    /* En la práctica siempre cae acá: el directorio local no reconoce
       credenciales reales, así que la ventanilla nunca abre. */
    setStatus(result.ok ? 'idle' : 'error')
  }

  return (
    <div className="access">
      <aside className="access__aside">
        {/* La foto bajo tinta navy: la misma calidez del hero, recortada
            por la curva de la marca en lugar de la cuña recta. */}
        <div className="access__media" aria-hidden="true">
          <img
            src={asideImageUrl}
            srcSet={asideImageSrcSet}
            sizes="(max-width: 880px) 100vw, 50vw"
            alt=""
          />
        </div>

        <div className="access__aside-inner">
          <a className="access__brand" href="#top" aria-label="Capstone — inicio">
            <CapstoneLogo className="access__brand-img" />
          </a>

          <div className="access__lede">
            <p className="access__aside-eyebrow">Portal privado</p>
            <p className="access__aside-title">
              Todo tu seguro,
              <br />
              en un solo acceso.
            </p>
            <p className="access__aside-note">
              Pólizas, reembolsos y comisiones — a la mano, donde estés.
            </p>
          </div>

          <p className="access__stamp">Capstone · Acceso seguro</p>
        </div>

        {/* La curva del hero, girada a eje vertical: el borde del mostrador
            se entalla hacia el formulario y vuelve a abrirse al pie. */}
        <svg className="access__clip-defs" width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="access-curve" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 H 0.96 L 0.88 0.3 Q 0.845 0.44 0.88 0.56 L 1 1 H 0 Z" />
            </clipPath>
            <clipPath id="access-curve-mobile" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 H 1 V 0.9 Q 0.6 1 0 0.93 Z" />
            </clipPath>
          </defs>
        </svg>
      </aside>

      <main className="access__panel">
        <div className="access__card">
          <a className="access__back" href="#top">
            <span aria-hidden="true">←</span> Volver al sitio
          </a>

          <p className="access__eyebrow">Acceso a tu cuenta</p>
          <h1 className="access__title" tabIndex={-1} ref={headingRef}>
            Entra a tu portal
          </h1>

          <form className="access__form" onSubmit={onSubmit}>
            <fieldset className="access__realm">
              <legend className="access__legend">¿A qué portal entras?</legend>
              <div className="access__realm-options">
                {realms.map((option) => (
                  <label
                    key={option.id}
                    className={`access__realm-option${
                      realm === option.id ? ' access__realm-option--on' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="realm"
                      value={option.id}
                      checked={realm === option.id}
                      onChange={() => {
                        setRealm(option.id)
                        if (status === 'error') setStatus('idle')
                      }}
                    />
                    <KeystoneMark className="access__realm-mark" />
                    <span className="access__realm-text">
                      <span className="access__realm-name">{option.label}</span>
                      <span className="access__realm-hint">{option.hint}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="access__field">
              <label className="access__label" htmlFor="access-user">
                {active.userLabel}
              </label>
              <input
                className="access__input"
                id="access-user"
                name="user"
                type="text"
                autoComplete="username"
                placeholder={active.userHint}
                required
              />
            </div>

            <div className="access__field">
              <label className="access__label" htmlFor="access-password">
                Contraseña
              </label>
              <input
                className="access__input"
                id="access-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="tu contraseña"
                required
              />
            </div>

            <div className="access__actions">
              <button className="access__cta" type="submit" disabled={status === 'checking'}>
                {status === 'checking' ? 'Verificando…' : 'Ingresar'}{' '}
                <span className="access__arrow" aria-hidden="true">
                  →
                </span>
              </button>
              <a className="access__help" href="https://wa.me/message/XM5YAG5TH4IEA1">
                ¿Problemas para entrar?
              </a>
            </div>

            {status === 'error' && (
              <p className="access__feedback" role="alert">
                Usuario o contraseña incorrectos. Verifica tus datos e intenta de nuevo.
              </p>
            )}
          </form>

          <p className="access__secure">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="10.5" width="14" height="9" rx="2" />
              <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
            </svg>
            Conexión cifrada · uso exclusivo de clientes y agentes Capstone.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Access
