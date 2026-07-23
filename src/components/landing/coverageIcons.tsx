import type { ReactNode } from 'react'

/* El kit de iconos de trazo compartido por los libros mayores de las
   landings: misma gramática que los de Products (24×24, trazo 1.8).
   Helper en minúscula a propósito: este archivo exporta datos, no
   componentes (regla react-refresh). */
function strokeIcon(children: ReactNode) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export const coverageIcons = {
  hospital: strokeIcon(
    <>
      <path d="M5 19.5V7.5h14v12" />
      <path d="M3.5 19.5h17" />
      <path d="M12 10.2v4M10 12.2h4" />
    </>,
  ),
  persona: strokeIcon(
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2a6.5 6.5 0 0 1 13 0" />
    </>,
  ),
  medicinas: strokeIcon(
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8.5v7M8.5 12h7" />
    </>,
  ),
  corazon: strokeIcon(
    <path d="M12 19.4c-4.5-3.1-7.4-5.9-7.4-9A4 4 0 0 1 8.4 6.3c1.5 0 2.8.8 3.6 2.1.8-1.3 2.1-2.1 3.6-2.1a4 4 0 0 1 3.8 4.1c0 3.1-2.9 5.9-7.4 9z" />,
  ),
  escudo: strokeIcon(
    <>
      <path d="M12 4.2 18.5 6.5v4.9c0 4-2.6 6.8-6.5 7.9-3.9-1.1-6.5-3.9-6.5-7.9V6.5z" />
      <path d="m9.4 11.8 1.9 1.9 3.3-3.4" />
    </>,
  ),
  avion: strokeIcon(
    <>
      <path d="M21 3 3 10.7l6 2.1L11.2 19 21 3z" />
      <path d="M9 12.8 21 3" />
    </>,
  ),
  auto: strokeIcon(
    <>
      <path d="M4 16.5v-3l1.6-4.2A2 2 0 0 1 7.5 8h9a2 2 0 0 1 1.9 1.3l1.6 4v3.2" />
      <path d="M4 13.5h16" />
      <circle cx="7.8" cy="16.8" r="1.6" />
      <circle cx="16.2" cy="16.8" r="1.6" />
    </>,
  ),
  flota: strokeIcon(
    <>
      <path d="M3 16V7.5h10.5V16" />
      <path d="M13.5 10.5h3.6l2.9 3V16" />
      <circle cx="7" cy="16.8" r="1.6" />
      <circle cx="16.5" cy="16.8" r="1.6" />
    </>,
  ),
  candado: strokeIcon(
    <>
      <path d="M6 11.2h12v8.3H6z" />
      <path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" />
      <path d="M12 14.4v1.8" />
    </>,
  ),
  asistencia: strokeIcon(
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="m6.7 6.7 3.2 3.2M14.1 14.1l3.2 3.2M6.7 17.3l3.2-3.2M14.1 9.9l3.2-3.2" />
    </>,
  ),
  rayo: strokeIcon(<path d="M13 3.5 5.5 13.5h5L11 20.5l7.5-10h-5z" />),
  crecimiento: strokeIcon(
    <>
      <path d="M4 18.5 9.5 12l3.5 3.5L20 8" />
      <path d="M20 12V8h-4" />
    </>,
  ),
  incendio: strokeIcon(
    <path d="M12 4.5c1.3 2.3 4.9 4.7 4.9 8.4a4.9 4.9 0 0 1-9.8 0c0-1.4.5-2.7 1.4-3.9.3 1 .9 1.8 1.8 2.2-.4-2.5.2-4.9 1.7-6.7z" />,
  ),
  gota: strokeIcon(
    <path d="M12 4.5c3 3.8 5.6 6.8 5.6 9.8a5.6 5.6 0 0 1-11.2 0c0-3 2.6-6 5.6-9.8z" />,
  ),
  montana: strokeIcon(<path d="M3.5 18.5 9.5 8.5l3.6 6 2.4-3.6 5 7.6z" />),
  pantalla: strokeIcon(
    <>
      <path d="M4.5 6.5h15v10h-15z" />
      <path d="M9.5 20h5M12 16.5V20" />
    </>,
  ),
  riesgos: strokeIcon(
    <>
      <path d="M4.5 14.5a7.5 7.5 0 0 1 15 0" />
      <path d="M3.5 14.5h17v2.2h-17z" />
      <path d="M12 5.5v2" />
    </>,
  ),
  documento: strokeIcon(
    <>
      <path d="M6.8 3.5h7.4l3.6 3.7v13.3H6.8z" />
      <path d="M14.2 3.5v3.7h3.6" />
      <path d="m9.6 13.6 1.8 1.8 3-3.1" />
    </>,
  ),
  equipo: strokeIcon(
    <>
      <circle cx="9" cy="8.5" r="2.8" />
      <path d="M3.8 18.6a5.2 5.2 0 0 1 10.4 0" />
      <path d="M15.5 6.1a2.8 2.8 0 1 1 0 5.4" />
      <path d="M16.8 13.5a5.2 5.2 0 0 1 3.4 5.1" />
    </>,
  ),
  casa: strokeIcon(
    <>
      <path d="M4.5 11.2 12 4.8l7.5 6.4" />
      <path d="M6.5 10.2v9.3h11v-9.3" />
      <path d="M10.3 19.5v-4.6h3.4v4.6" />
    </>,
  ),
}

export type CoverageIconKey = keyof typeof coverageIcons
