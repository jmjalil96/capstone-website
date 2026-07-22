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
      <div className="shell">
        <div className="salud-faq__intro">
          <p className="salud-faq__eyebrow">Preguntas frecuentes</p>
          <h2 className="salud-faq__title" id="salud-faq-title">
            Lo que nos preguntan antes de decidir.
          </h2>
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
    </section>
  )
}

export default SaludFaq
