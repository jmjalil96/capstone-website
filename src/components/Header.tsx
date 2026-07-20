import { useEffect, useRef, useState } from 'react'
import './Header.css'

const navigationItems = [
  { href: '#coverage', label: 'Seguros' },
  { href: '#process', label: 'Cómo trabajamos' },
  { href: '#quote', label: 'Cotización' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  /* Scrollspy: el rombo sigue el scroll, no solo el clic. La franja
     central del viewport decide qué sección "es" en cada momento. */
  useEffect(() => {
    const sections = ['coverage', 'process', 'quote']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    /* Sin id: pasar por el hero apaga el rombo. */
    const hero = document.querySelector<HTMLElement>('.insurance-hero')

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setActiveHref(entry.target.id ? `#${entry.target.id}` : '')
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((el) => spy.observe(el))
    if (hero) spy.observe(hero)
    return () => spy.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setActiveHref(href)
    closeMenu()
  }

  return (
    <header
      className="site-header"
      id="top"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          closeMenu()
          menuButtonRef.current?.focus()
        }
      }}
    >
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <span className="utility-bar__contact">
            <span className="utility-bar__hours">Lun–Vie 8:30–17:00</span>
            <span className="utility-bar__separator" aria-hidden="true">
              ·
            </span>
            <a
              className="utility-bar__link utility-bar__phone"
              href="tel:+59343917828"
              aria-label="Llama a CAPSTONE al (04) 391-7828"
            >
              (04) 391-7828
            </a>
          </span>

          <a className="utility-bar__link utility-bar__portal" href="#acceso">
            Acceso
          </a>
        </div>
      </div>

      <div className="primary-header">
        <div className="shell primary-header__inner">
          <a className="brand" href="#top" aria-label="Capstone — inicio">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__name">Capstone</span>
          </a>

          <nav className="desktop-navigation" aria-label="Navegación principal">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHref === item.href ? 'active' : undefined}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="primary-header__actions">
            <a className="quote-link" href="#quote">
              <span className="quote-link__full">Cotiza aquí</span>
              <span className="quote-link__compact">Cotizar</span>
            </a>

            <button
              ref={menuButtonRef}
              className="menu-button"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Cerrar el menú de navegación' : 'Abrir el menú de navegación'}
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <nav
        className="mobile-navigation"
        id="mobile-navigation"
        aria-label="Navegación principal móvil"
        hidden={!isMenuOpen}
      >
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
