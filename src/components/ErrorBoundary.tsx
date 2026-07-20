import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import './ErrorBoundary.css'

type Props = { children: ReactNode }
type State = { failed: boolean }

/* Red de seguridad de toda la app: si algo revienta en producción, en
   lugar de una página en blanco queda una salida — recargar o WhatsApp. */
class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error no capturado en la interfaz:', error, info.componentStack)
  }

  render() {
    if (!this.state.failed) return this.props.children

    return (
      <div className="app-fallback" role="alert">
        <span className="app-fallback__mark" aria-hidden="true" />
        <h1 className="app-fallback__title">Algo salió mal de nuestro lado.</h1>
        <p className="app-fallback__note">
          Recarga la página para intentar de nuevo. Si sigue fallando, escríbenos y te atendemos
          directo.
        </p>
        <div className="app-fallback__actions">
          <button
            className="app-fallback__reload"
            type="button"
            onClick={() => window.location.reload()}
          >
            Recargar la página
          </button>
          <a className="app-fallback__whatsapp" href="https://wa.me/message/XM5YAG5TH4IEA1">
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    )
  }
}

export default ErrorBoundary
