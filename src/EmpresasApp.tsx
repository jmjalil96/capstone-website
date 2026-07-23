import type { CSSProperties } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/Quote'
import EmpresasHero from './components/empresas/EmpresasHero'
import LandingCoverage from './components/landing/LandingCoverage'
import LandingFaq from './components/landing/LandingFaq'
import { coverageIcons } from './components/landing/coverageIcons'
import { generalCarriers } from './components/landing/carriers'

/* La firma de la página: el perfil escalonado del hero, dibujándose en
   la costura. Tramos de 20+9+20+9+20 ≈ 78. */
const empresasSeam = (
  <svg viewBox="0 0 160 40" focusable="false">
    <path
      className="landing-coverage__trace"
      style={{ '--trace-length': 78 } as CSSProperties}
      d="M50 32 H70 V23 H90 V14 H110"
    />
  </svg>
)

const empresasCoverages = [
  {
    icon: coverageIcons.incendio,
    name: 'Incendio y aliadas',
    detail: 'Tus activos, incluso ante desastres naturales.',
  },
  {
    icon: coverageIcons.riesgos,
    name: 'Ramos técnicos',
    detail: 'Maquinaria, montaje y equipo electrónico.',
  },
  {
    icon: coverageIcons.flota,
    name: 'Transporte',
    detail: 'Tu mercadería por tierra, mar o aire.',
  },
  {
    icon: coverageIcons.escudo,
    name: 'Responsabilidad civil',
    detail: 'Respaldo ante daños a terceros.',
  },
  {
    icon: coverageIcons.documento,
    name: 'Fianzas',
    detail: 'Cumplimiento de contrato y anticipos.',
  },
  {
    icon: coverageIcons.equipo,
    name: 'Salud y vida para tu equipo',
    detail: 'Beneficios que cuidan a tu gente.',
  },
]

const empresasQuestions = [
  {
    question: '¿Qué hace un broker para una empresa?',
    answer:
      'Somos tu departamento de seguros: cotizamos cada ramo con varias aseguradoras, negociamos condiciones y gestionamos contigo pólizas, renovaciones y siniestros. Tú te dedicas a tu negocio.',
  },
  {
    question: '¿Cotizar tiene algún costo o compromiso?',
    answer:
      'No. Nos cuentas tu operación, comparamos el mercado y te presentamos un programa claro por ramo. Tú decides qué contratas y con quién.',
  },
  {
    question: 'Mi empresa es pequeña, ¿igual me conviene?',
    answer:
      'Sí. El programa se arma a la medida de tu operación, grande o pequeña: empezamos por los riesgos que podrían pararla y crecemos desde ahí.',
  },
  {
    question: '¿Cómo funciona un siniestro empresarial?',
    answer:
      'Nos avisas y armamos el reclamo contigo: documentación, aviso a la aseguradora y seguimiento hasta la reparación o el pago. Nuestro trabajo es que la operación se detenga lo menos posible.',
  },
  {
    question: '¿Ofrecen beneficios para empleados?',
    answer:
      'Sí, cotizamos salud y vida grupo para equipos de todo tamaño. Escríbenos por WhatsApp y lo armamos contigo.',
  },
]

/* Landing /seguros-para-empresas/: una sola página para los ramos
   empresariales — entrada propia con <head> estático para buscadores. */
function EmpresasApp() {
  return (
    <>
      <Header isLanding />
      <main>
        <EmpresasHero />
        <LandingCoverage
          title="Lo que un buen programa empresarial puede cubrir."
          lede="Cada operación es distinta. Comparamos coberturas y precios por ramo y armamos el programa que va con tu empresa — no un paquete genérico."
          items={empresasCoverages}
          seam={empresasSeam}
          carriersLabel="Cotizamos tu empresa con"
          carriers={generalCarriers}
          note="¿Flota vehicular, crédito u otro riesgo? Pregúntanos al cotizar."
        />
        <LandingFaq
          title="Lo que nos preguntan las empresas."
          lede="Un asesor de tu lado, no un vendedor: respuestas directas antes de que firmes nada."
          questions={empresasQuestions}
        />
        <Quote defaultWhat="mi empresa" />
      </main>
      <Footer isLanding />
    </>
  )
}

export default EmpresasApp
