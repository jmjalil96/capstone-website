import type { CSSProperties } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/Quote'
import VehicularHero from './components/vehicular/VehicularHero'
import LandingCoverage from './components/landing/LandingCoverage'
import LandingFaq from './components/landing/LandingFaq'
import { coverageIcons } from './components/landing/coverageIcons'
import { generalCarriers } from './components/landing/carriers'

/* La firma de la página: la línea central de la vía, en cuatro trazos.
   Subtrazos de 24 unidades — 96 en total para el dibujado. */
const vehicularSeam = (
  <svg viewBox="0 0 160 40" focusable="false">
    <path
      className="landing-coverage__trace"
      style={{ '--trace-length': 96 } as CSSProperties}
      d="M20 20h24M52 20h24M84 20h24M116 20h24"
    />
  </svg>
)

const vehicularCoverages = [
  {
    icon: coverageIcons.auto,
    name: 'Daños propios',
    detail: 'Choques, volcaduras y daños accidentales.',
  },
  {
    icon: coverageIcons.candado,
    name: 'Robo total y parcial',
    detail: 'El vehículo, sus partes y accesorios.',
  },
  {
    icon: coverageIcons.escudo,
    name: 'Responsabilidad civil',
    detail: 'Daños a terceros: personas y bienes.',
  },
  {
    icon: coverageIcons.asistencia,
    name: 'Asistencia vial y grúa',
    detail: 'Auxilio mecánico y remolque en la vía.',
  },
  {
    icon: coverageIcons.persona,
    name: 'Accidentes de ocupantes',
    detail: 'Respaldo para quienes viajan contigo.',
  },
  {
    icon: coverageIcons.flota,
    name: 'Auto de reemplazo',
    detail: 'Movilidad mientras el tuyo está en el taller.',
  },
]

const vehicularQuestions = [
  {
    question: '¿Qué hace un broker en un seguro vehicular?',
    answer:
      'Somos tu asesor, no el vendedor de una sola aseguradora. Cotizamos tu vehículo con varias compañías, te explicamos qué cubre cada plan y, cuando algo pasa, llevamos el reclamo contigo hasta que se resuelve.',
  },
  {
    question: '¿Cotizar tiene algún costo o compromiso?',
    answer:
      'No. Nos cuentas qué vehículo tienes, comparamos el mercado y te presentamos opciones claras. Tú decides si contratas y con quién.',
  },
  {
    question: '¿Qué hago si tengo un accidente?',
    answer:
      'Nos avisas y te guiamos paso a paso: qué documentar, a quién llamar y cómo presentar el reclamo a tu aseguradora. Le damos seguimiento contigo hasta la reparación o el pago.',
  },
  {
    question: '¿Qué es el deducible?',
    answer:
      'Es la parte del daño que asumes tú antes de que responda la aseguradora, y cambia de un plan a otro. Antes de contratar te mostramos cómo funciona en cada opción, para que no haya sorpresas.',
  },
  {
    question: '¿Aseguran motos y flotas?',
    answer:
      'Sí, cotizamos distintos tipos de vehículos, incluidas flotas para empresas. Escríbenos por WhatsApp y lo armamos contigo.',
  },
]

/* Landing /seguro-vehicular/: entrada propia con <head> estático para
   buscadores. Sin vista #acceso — esa vive solo en la página principal. */
function VehicularApp() {
  return (
    <>
      <Header isLanding />
      <main>
        <VehicularHero />
        <LandingCoverage
          title="Lo que un buen seguro vehicular puede cubrir."
          lede="Cada aseguradora arma su producto vehicular distinto. Comparamos coberturas, deducibles y precios por ti, para que elijas informado — no a ciegas."
          items={vehicularCoverages}
          seam={vehicularSeam}
          carriersLabel="Cotizamos tu vehículo con"
          carriers={generalCarriers}
          note="¿Moto, camioneta de trabajo o flota? Pregúntanos al cotizar."
        />
        <LandingFaq
          title="Lo que nos preguntan antes de asegurar el auto."
          lede="Un asesor de tu lado, no un vendedor: respuestas directas antes de que firmes nada."
          questions={vehicularQuestions}
        />
        <Quote defaultWhat="mi auto" />
      </main>
      <Footer isLanding />
    </>
  )
}

export default VehicularApp
