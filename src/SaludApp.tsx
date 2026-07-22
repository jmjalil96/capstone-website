import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/Quote'
import SaludHero from './components/salud/SaludHero'
import SaludCoverage from './components/salud/SaludCoverage'
import SaludFaq from './components/salud/SaludFaq'

/* Landing /seguro-de-salud/: entrada propia con <head> estático para
   buscadores. Sin vista #acceso — esa vive solo en la página principal. */
function SaludApp() {
  return (
    <>
      <Header isLanding />
      <main>
        <SaludHero />
        <SaludCoverage />
        <SaludFaq />
        <Quote />
      </main>
      <Footer isLanding />
    </>
  )
}

export default SaludApp
