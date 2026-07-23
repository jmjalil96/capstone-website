import type { CSSProperties } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/Quote'
import HogarHero from './components/hogar/HogarHero'
import LandingCoverage from './components/landing/LandingCoverage'
import LandingFaq from './components/landing/LandingFaq'
import { coverageIcons } from './components/landing/coverageIcons'
import { generalCarriers } from './components/landing/carriers'

/* La firma de la página: la cumbrera del hero, dibujándose en la
   costura. Dos aguas de ~33 unidades cada una. */
const hogarSeam = (
  <svg viewBox="0 0 160 40" focusable="false">
    <path
      className="landing-coverage__trace"
      style={{ '--trace-length': 68 } as CSSProperties}
      d="M55 31 L80 9 L105 31"
    />
  </svg>
)

const hogarCoverages = [
  {
    icon: coverageIcons.incendio,
    name: 'Incendio',
    detail: 'Tu casa ante el fuego y sus consecuencias.',
  },
  {
    icon: coverageIcons.montana,
    name: 'Desastres naturales',
    detail: 'Terremoto, inundación y eventos de la naturaleza.',
  },
  {
    icon: coverageIcons.candado,
    name: 'Robo y asalto',
    detail: 'Tus cosas, ante el robo en casa.',
  },
  {
    icon: coverageIcons.gota,
    name: 'Daños por agua',
    detail: 'Roturas de tubería y filtraciones.',
  },
  {
    icon: coverageIcons.pantalla,
    name: 'Contenidos y electrodomésticos',
    detail: 'Muebles, equipos y lo que valoras.',
  },
  {
    icon: coverageIcons.escudo,
    name: 'Responsabilidad civil familiar',
    detail: 'Daños involuntarios a terceros.',
  },
]

const hogarQuestions = [
  {
    question: '¿Qué hace un broker en un seguro de hogar?',
    answer:
      'Somos tu asesor, no el vendedor de una sola aseguradora. Cotizamos tu casa con varias compañías, te explicamos qué cubre cada plan — estructura, contenidos o ambos — y cuando algo pasa, llevamos el reclamo contigo.',
  },
  {
    question: '¿Cotizar tiene algún costo o compromiso?',
    answer:
      'No. Nos cuentas cómo es tu casa, comparamos el mercado y te presentamos opciones claras. Tú decides si contratas y con quién.',
  },
  {
    question: '¿Qué hago si algo se daña en mi casa?',
    answer:
      'Nos avisas y te guiamos: qué documentar, qué no mover y cómo presentar el reclamo a tu aseguradora. Le damos seguimiento contigo hasta la reparación o el pago.',
  },
  {
    question: '¿Por qué valor aseguro mi casa?',
    answer:
      'Depende del plan: en general se asegura por lo que costaría reconstruirla o reponer lo que hay dentro, no por su precio de venta. Te ayudamos a definir bien los valores para que no pagues de más ni te quedes corto.',
  },
  {
    question: '¿Aseguran departamentos alquilados?',
    answer:
      'Sí. Hay planes para propietarios y también para inquilinos que quieren proteger sus contenidos. Escríbenos por WhatsApp y lo armamos contigo.',
  },
]

/* Landing /seguro-de-hogar/: entrada propia con <head> estático para
   buscadores. Sin vista #acceso — esa vive solo en la página principal. */
function HogarApp() {
  return (
    <>
      <Header isLanding />
      <main>
        <HogarHero />
        <LandingCoverage
          title="Lo que un buen seguro de hogar puede cubrir."
          lede="Cada aseguradora arma sus planes distinto. Comparamos coberturas, deducibles y precios por ti, para proteger tu casa y lo que hay dentro — sin pagar por lo que no necesitas."
          items={hogarCoverages}
          seam={hogarSeam}
          carriersLabel="Cotizamos tu hogar con"
          carriers={generalCarriers}
          note="¿Departamento alquilado o casa de descanso? Pregúntanos al cotizar."
        />
        <LandingFaq
          title="Lo que nos preguntan antes de asegurar la casa."
          lede="Un asesor de tu lado, no un vendedor: respuestas directas antes de que firmes nada."
          questions={hogarQuestions}
        />
        <Quote defaultWhat="mi casa" />
      </main>
      <Footer isLanding />
    </>
  )
}

export default HogarApp
