import KeystoneMark from '../KeystoneMark'
import './SaludInsurers.css'

/* Solo las aliadas de salud del listado del footer — nada inventado. */
const healthInsurers = ['Saludsa', 'BMI', 'BUPA', 'Pan American Life', 'Asisken']

function SaludInsurers() {
  return (
    <section className="salud-insurers" aria-label="Aseguradoras de salud aliadas">
      <div className="shell">
        <p className="salud-insurers__label">Cotizamos tu salud con</p>
        <ul className="salud-insurers__row">
          {healthInsurers.map((name, index) => (
            <li className="salud-insurers__item" key={name}>
              {index > 0 && <KeystoneMark className="salud-insurers__sep" />}
              <span className="salud-insurers__name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SaludInsurers
