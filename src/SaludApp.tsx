import Header from './components/Header'
import Footer from './components/Footer'
import Quote from './components/Quote'
import SaludHero from './components/salud/SaludHero'
import LandingCoverage from './components/landing/LandingCoverage'
import LandingFaq from './components/landing/LandingFaq'
import { coverageIcons } from './components/landing/coverageIcons'

/* Solo las aliadas de salud del listado del footer — nada inventado. */
const saludCarriers = ['Saludsa', 'BMI', 'BUPA', 'Best Doctors', 'Pan American Life', 'Asisken']

/* La firma de la página: una línea de vida entre el navy y el papel. */
const saludSeam = (
  <svg viewBox="0 0 160 40" focusable="false">
    <path className="landing-coverage__trace" d="M0 20 H50 L58 5 L70 35 L78 20 H160" />
  </svg>
)

const saludCoverages = [
  {
    icon: coverageIcons.hospital,
    name: 'Hospitalización',
    detail: 'Habitación, cirugías y cuidados clínicos.',
  },
  {
    icon: coverageIcons.persona,
    name: 'Consultas y especialistas',
    detail: 'Medicina general y especialidades.',
  },
  {
    icon: coverageIcons.medicinas,
    name: 'Medicinas',
    detail: 'Tus recetas, dentro y fuera del hospital.',
  },
  {
    icon: coverageIcons.corazon,
    name: 'Maternidad',
    detail: 'Control prenatal, parto y recién nacido.',
  },
  {
    icon: coverageIcons.escudo,
    name: 'Enfermedades graves',
    detail: 'Respaldo ante diagnósticos mayores.',
  },
  {
    icon: coverageIcons.avion,
    name: 'Cobertura internacional',
    detail: 'Atención médica fuera del Ecuador.',
  },
]

const saludQuestions = [
  {
    question: '¿Qué hace un broker de seguros de salud?',
    answer:
      'Somos tu asesor, no el vendedor de una sola aseguradora. Cotizamos tu caso con varias compañías, te explicamos las diferencias entre planes y, cuando ya tienes tu póliza, gestionamos contigo reembolsos, siniestros y renovaciones.',
  },
  {
    question: '¿Cotizar tiene algún costo o compromiso?',
    answer:
      'No. Nos cuentas tu caso, comparamos el mercado y te presentamos opciones claras. Tú decides si contratas y con quién.',
  },
  {
    question: '¿Cómo funciona un reembolso?',
    answer:
      'Depende de tu plan: en general, pagas tu atención, reúnes facturas y documentos, y la aseguradora te devuelve lo que tu cobertura contempla. Nosotros armamos el trámite contigo y le damos seguimiento hasta que se resuelve.',
  },
  {
    question: '¿Puedo incluir a mi familia?',
    answer:
      'Sí. Existen planes individuales y familiares; comparamos ambos caminos y te mostramos qué conviene según las edades y necesidades de cada uno.',
  },
  {
    question: '¿Tienen planes de salud para empresas?',
    answer:
      'Sí, cotizamos asistencia médica para equipos de todo tamaño. Escríbenos por WhatsApp y lo armamos contigo.',
  },
]

/* Landing /seguro-de-salud/: entrada propia con <head> estático para
   buscadores. Sin vista #acceso — esa vive solo en la página principal. */
function SaludApp() {
  return (
    <>
      <Header isLanding />
      <main>
        <SaludHero />
        <LandingCoverage
          title="Lo que un buen plan de salud puede cubrir."
          lede="Cada aseguradora arma sus planes distinto. Comparamos coberturas, deducibles y precios por ti, para armar el plan que va con tu caso — no el que le conviene a una sola compañía."
          items={saludCoverages}
          seam={saludSeam}
          carriersLabel="Cotizamos tu salud con nuestras aseguradoras aliadas"
          carriers={saludCarriers}
          note="¿Buscas algo puntual — ambulatorio, dental, visión? Pregúntanos al cotizar."
        />
        <LandingFaq
          title="Lo que nos preguntan antes de decidir."
          lede="Un asesor de tu lado, no un vendedor: respuestas directas antes de que firmes nada."
          questions={saludQuestions}
        />
        <Quote />
      </main>
      <Footer isLanding />
    </>
  )
}

export default SaludApp
