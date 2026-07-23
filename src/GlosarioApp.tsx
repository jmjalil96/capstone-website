import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/Quote'
import Glossary from './components/glosario/Glossary'

/* Página /glosario/: la obra de referencia del sitio — entrada propia
   con <head> estático (DefinedTermSet) para buscadores. Cierra con el
   cotizador para que el nav (#quote) siempre tenga destino. */
function GlosarioApp() {
  return (
    <>
      <Header isLanding />
      <main>
        <Glossary />
        <Quote />
      </main>
      <Footer isLanding />
    </>
  )
}

export default GlosarioApp
