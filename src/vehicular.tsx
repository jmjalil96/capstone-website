import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Tipografías auto-hospedadas: mismos pesos que cargaba Google Fonts,
   sin depender de un CDN externo ni bloquear el primer pintado. */
import '@fontsource/bricolage-grotesque/700.css'
import '@fontsource/bricolage-grotesque/800.css'
import '@fontsource/figtree/400.css'
import '@fontsource/figtree/500.css'
import '@fontsource/figtree/600.css'
import '@fontsource/figtree/700.css'
import '@fontsource/figtree/700-italic.css'
import '@fontsource/ibm-plex-mono/500.css'

import './index.css'
import VehicularApp from './VehicularApp.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <VehicularApp />
    </ErrorBoundary>
  </StrictMode>,
)
