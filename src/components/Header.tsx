import { useRef, useState } from 'react'
import './Header.css'

const navigationItems = [
  { href: '#coverage', label: 'Coverage' },
  { href: '#industries', label: 'Industries' },
  { href: '#claims', label: 'Claims' },
  { href: '#about', label: 'About' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

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
        <div className="utility-bar__contact">
          <span className="utility-bar__hours">Mon–Fri 8–6</span>
          <span className="utility-bar__separator" aria-hidden="true">
            •
          </span>
          <a
            className="utility-bar__link utility-bar__phone"
            href="tel:+15550100100"
            aria-label="Call Capstone at 555 010 0100"
          >
            (555) 010-0100
          </a>
        </div>

        <a className="utility-bar__link utility-bar__portal" href="#client-portal">
          Client portal
        </a>
      </div>

      <div className="primary-header">
        <a className="brand" href="#top" aria-label="Capstone home">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">Capstone</span>
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="primary-header__actions">
          <a className="quote-link" href="#quote">
            <span className="quote-link__full">Request a quote</span>
            <span className="quote-link__compact">Get quote</span>
          </a>

          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        className="mobile-navigation"
        id="mobile-navigation"
        aria-label="Mobile primary navigation"
        hidden={!isMenuOpen}
      >
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
