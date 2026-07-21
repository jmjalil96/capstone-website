/* La piedra clave — la pieza dorada del arco del logo — como acento
   mínimo de interfaz. El color (fill/stroke) lo decide el CSS de cada
   contexto; el trazo va con margen interno de 3.5 unidades para que un
   contorno no se recorte contra el viewBox: soporta stroke-width hasta
   7 (Access.css usa exactamente 7 — no subirlo sin ampliar el margen). */
function KeystoneMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 42" aria-hidden="true" focusable="false">
      <path d="M3.5 8 A106 106 0 0 1 52.5 8 L42.6 38 A58 58 0 0 0 13.4 38 Z" />
    </svg>
  )
}

export default KeystoneMark
