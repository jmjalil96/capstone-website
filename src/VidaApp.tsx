import type { CSSProperties } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/Quote'
import VidaHero from './components/vida/VidaHero'
import LandingCoverage from './components/landing/LandingCoverage'
import LandingFaq from './components/landing/LandingFaq'
import { coverageIcons } from './components/landing/coverageIcons'
import { generalCarriers } from './components/landing/carriers'

/* La firma de la página: el anillo del hero, dibujándose en la costura.
   Circunferencia 2π·13 ≈ 82. */
const vidaSeam = (
  <svg viewBox="0 0 160 40" focusable="false">
    <circle
      className="landing-coverage__trace"
      style={{ '--trace-length': 82 } as CSSProperties}
      cx="80"
      cy="20"
      r="13"
    />
  </svg>
)

const vidaCoverages = [
  {
    icon: coverageIcons.corazon,
    name: 'Fallecimiento',
    detail: 'Un respaldo económico para tu familia.',
  },
  {
    icon: coverageIcons.persona,
    name: 'Invalidez total y permanente',
    detail: 'Protección si ya no puedes generar ingresos.',
  },
  {
    icon: coverageIcons.escudo,
    name: 'Enfermedades graves',
    detail: 'Apoyo económico ante un diagnóstico mayor.',
  },
  {
    icon: coverageIcons.documento,
    name: 'Gastos funerarios',
    detail: 'Para que los trámites no sean una carga.',
  },
  {
    icon: coverageIcons.rayo,
    name: 'Doble indemnización por accidente',
    detail: 'Cobertura ampliada si la causa es accidental.',
  },
  {
    icon: coverageIcons.crecimiento,
    name: 'Planes con ahorro',
    detail: 'Protección que además acumula un fondo.',
  },
]

const vidaQuestions = [
  {
    question: '¿Qué hace un broker en un seguro de vida?',
    answer:
      'Somos tu asesor, no el vendedor de una sola aseguradora. Comparamos los planes de vida del mercado, te explicamos coberturas y beneficios en claro y, cuando tu familia lo necesite, la acompañamos en el reclamo.',
  },
  {
    question: '¿Cotizar tiene algún costo o compromiso?',
    answer:
      'No. Nos cuentas tu caso, comparamos el mercado y te presentamos opciones claras. Tú decides si contratas y con quién.',
  },
  {
    question: '¿Quiénes pueden ser mis beneficiarios?',
    answer:
      'Tú los eliges — tu familia, tu pareja o quien decidas — y puedes actualizarlos cuando tu vida cambie. Te ayudamos a dejarlos bien definidos para que el pago nunca se complique.',
  },
  {
    question: '¿El seguro de vida sirve solo si fallezco?',
    answer:
      'No necesariamente. Hay planes con coberturas en vida — invalidez, enfermedades graves o componentes de ahorro — y cada aseguradora los arma distinto. Te mostramos las diferencias antes de decidir.',
  },
  {
    question: '¿Puedo contratar vida para mi equipo?',
    answer:
      'Sí, cotizamos planes de vida grupo para empresas de todo tamaño. Escríbenos por WhatsApp y lo armamos contigo.',
  },
]

/* Landing /seguro-de-vida/: entrada propia con <head> estático para
   buscadores. Sin vista #acceso — esa vive solo en la página principal. */
function VidaApp() {
  return (
    <>
      <Header isLanding />
      <main>
        <VidaHero />
        <LandingCoverage
          title="Lo que un buen seguro de vida puede cubrir."
          lede="Cada aseguradora arma sus planes distinto. Comparamos coberturas, beneficios y precios por ti, para que protejas a los tuyos con el plan que va con tu momento de vida."
          items={vidaCoverages}
          seam={vidaSeam}
          carriersLabel="Cotizamos tu seguro de vida con"
          carriers={generalCarriers}
          note="¿Vida individual, en pareja o para tu equipo? Pregúntanos al cotizar."
        />
        <LandingFaq
          title="Lo que nos preguntan sobre el seguro de vida."
          lede="Un asesor de tu lado, no un vendedor: respuestas directas antes de que firmes nada."
          questions={vidaQuestions}
        />
        <Quote defaultWhat="mi vida" />
      </main>
      <Footer isLanding />
    </>
  )
}

export default VidaApp
