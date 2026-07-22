import './SaludFaq.css'

const questions = [
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

function SaludFaq() {
  return (
    <section className="salud-faq" aria-labelledby="salud-faq-title">
      <div className="salud-faq__seam" aria-hidden="true" />

      <div className="salud-faq__body">
        <div className="shell">
          <div className="salud-faq__grid">
            <div className="salud-faq__aside">
              <div className="salud-faq__head">
                <p className="salud-faq__eyebrow">Preguntas frecuentes</p>
                <h2 className="salud-faq__title" id="salud-faq-title">
                  Lo que nos preguntan antes de decidir.
                </h2>
                <p className="salud-faq__lede">
                  Un asesor de tu lado, no un vendedor: respuestas directas antes de que firmes
                  nada.
                </p>
              </div>

              <div className="salud-faq__cta-group">
                <a className="salud-faq__cta" href="#quote">
                  Cotiza aquí
                </a>
                <p className="salud-faq__note">
                  Más de 35 años de experiencia en la industria de seguros.
                </p>
              </div>
            </div>

            <div className="salud-faq__list">
              {questions.map((item) => (
                <details className="salud-faq__item" key={item.question}>
                  <summary className="salud-faq__question">
                    {item.question}
                    <span className="salud-faq__marker" aria-hidden="true" />
                  </summary>
                  <p className="salud-faq__answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <svg
        className="salud-faq__clip-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="salud-faq-seam" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 V 0.62 L 0.5 0.25 Q 0.838 0 0.95 0 H 1 V 1 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default SaludFaq
