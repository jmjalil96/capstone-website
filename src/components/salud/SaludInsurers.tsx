import KeystoneMark from '../KeystoneMark'
import './SaludInsurers.css'

/* Solo las aliadas de salud del listado del footer — nada inventado. */
const healthInsurers = ['Saludsa', 'BMI', 'BUPA', 'Pan American Life', 'Asisken']

function SaludInsurers() {
  return (
    <section className="salud-insurers" aria-label="Aseguradoras de salud aliadas">
      <div className="shell">
        <p className="salud-insurers__label">Cotizamos tu salud con</p>
        {/* Piedra clave como prefijo de cada nombre, no como separador:
            así ninguna línea envuelta arranca con una marca huérfana. */}
        <ul className="salud-insurers__row">
          {healthInsurers.map((name) => (
            <li className="salud-insurers__item" key={name}>
              <KeystoneMark className="salud-insurers__mark" />
              <span className="salud-insurers__name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SaludInsurers
