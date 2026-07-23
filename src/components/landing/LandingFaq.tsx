import './LandingFaq.css'

export type LandingFaqQuestion = {
  question: string
  answer: string
}

type LandingFaqProps = {
  title: string
  lede: string
  questions: LandingFaqQuestion[]
}

/* La banda navy de cierre compartida por las landings: costura, aside
   con el CTA dorado y el acordeón de preguntas. Sin FAQPage JSON-LD a
   propósito — Google restringió ese rich result. */
function LandingFaq({ title, lede, questions }: LandingFaqProps) {
  return (
    <section className="landing-faq" aria-labelledby="landing-faq-title">
      <div className="landing-faq__seam" aria-hidden="true" />

      <div className="landing-faq__body">
        <div className="shell">
          <div className="landing-faq__grid">
            <div className="landing-faq__aside">
              <div className="landing-faq__head">
                <p className="landing-faq__eyebrow">Preguntas frecuentes</p>
                <h2 className="landing-faq__title" id="landing-faq-title">
                  {title}
                </h2>
                <p className="landing-faq__lede">{lede}</p>
              </div>

              <div className="landing-faq__cta-group">
                <a className="landing-faq__cta" href="#quote">
                  Cotiza aquí
                </a>
                <p className="landing-faq__note">
                  Más de 35 años de experiencia en la industria de seguros.
                </p>
              </div>
            </div>

            <div className="landing-faq__list">
              {questions.map((item) => (
                <details className="landing-faq__item" key={item.question}>
                  <summary className="landing-faq__question">
                    {item.question}
                    <span className="landing-faq__marker" aria-hidden="true" />
                  </summary>
                  <p className="landing-faq__answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <svg
        className="landing-faq__clip-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="landing-faq-seam" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 V 0.62 L 0.5 0.25 Q 0.838 0 0.95 0 H 1 V 1 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default LandingFaq
