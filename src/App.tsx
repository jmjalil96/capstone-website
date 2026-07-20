import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Process from './components/Process'
import Quote from './components/Quote'
import Footer from './components/Footer'
import Access from './components/Access'

function App() {
  /* El portal es su propia vista: #acceso la abre sobre toda la página y
     el hash conserva el botón "atrás" sin necesidad de un router. */
  const [isAccess, setIsAccess] = useState(() => window.location.hash === '#acceso')

  useEffect(() => {
    const sync = () => setIsAccess(window.location.hash === '#acceso')
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  useEffect(() => {
    if (isAccess) window.scrollTo(0, 0)
  }, [isAccess])

  if (isAccess) return <Access />

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Process />
        <Quote />
      </main>
      <Footer />
    </>
  )
}

export default App
