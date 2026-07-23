import type { CoverageIconKey } from '../landing/coverageIcons'

/* El contenido del glosario: seis grupos por ramo, cada término con su
   ancla estable (el id es la URL pública /glosario/#id — no renombrar
   sin redirigir). Dos niveles por entrada: `brief` es la esencia
   siempre visible (y el candidato a featured snippet); `def` la
   continúa al desplegar — no la repite. `example` aterriza los
   términos difíciles sin montos ni plazos: los detalles son de cada
   póliza y aquí no se inventan. `see` cruza términos; `cta` enruta. */

export type GlossaryLink = {
  label: string
  href: string
}

export type GlossaryTerm = {
  id: string
  term: string
  brief: string
  def: string
  example?: string
  see?: GlossaryLink[]
  cta?: GlossaryLink
}

export type GlossaryGroup = {
  id: string
  label: string
  lede: string
  icon: CoverageIconKey
  terms: GlossaryTerm[]
}

export const glossaryGroups: GlossaryGroup[] = [
  {
    id: 'fundamentos',
    label: 'Fundamentos',
    lede: 'El idioma que comparten todas las pólizas, del ramo que sean.',
    icon: 'documento',
    terms: [
      {
        id: 'broker-de-seguros',
        term: 'Broker de seguros',
        brief: 'Tu asesor independiente: trabaja de tu lado, no para una sola aseguradora.',
        def: 'Compara los planes de varias aseguradoras, negocia condiciones y te acompaña en reclamos, renovaciones y cada cambio de tu póliza. En Ecuador también se le llama asesor productor de seguros — y su trabajo es que tú decidas informado.',
        cta: { label: 'Así trabajamos', href: '/#process' },
      },
      {
        id: 'aseguradora',
        term: 'Aseguradora',
        brief: 'La compañía que asume el riesgo y paga cuando algo pasa.',
        def: 'Emite la póliza, cobra la prima y paga la indemnización cuando ocurre un siniestro cubierto. El broker te asesora; la aseguradora es quien responde.',
        see: [{ label: 'póliza', href: '#poliza' }],
      },
      {
        id: 'poliza',
        term: 'Póliza',
        brief: 'El contrato que fija qué cubre tu seguro y bajo qué condiciones.',
        def: 'Define qué está cubierto, por cuánto, con qué exclusiones y bajo qué condiciones. Es el documento que manda — léela con alguien que te la traduzca antes de firmar.',
        see: [
          { label: 'cobertura', href: '#cobertura' },
          { label: 'exclusiones', href: '#exclusiones' },
        ],
      },
      {
        id: 'prima',
        term: 'Prima',
        brief: 'El precio de tu seguro: lo que pagas por estar cubierto.',
        def: 'Puede pagarse mensual o anual según el plan, y depende del riesgo, del valor asegurado y del deducible que elijas — por eso la misma cobertura puede costar distinto en cada aseguradora.',
        see: [
          { label: 'deducible', href: '#deducible' },
          { label: 'valor asegurado', href: '#valor-asegurado' },
        ],
      },
      {
        id: 'deducible',
        term: 'Deducible',
        brief: 'La parte de una pérdida que pagas tú; la aseguradora cubre el resto.',
        def: 'Cada plan lo define a su manera — un monto fijo, un porcentaje o una combinación — y suele moverse en sentido contrario a la prima: a mayor deducible, prima más baja.',
        example:
          'Chocas y el arreglo tiene un costo: tú asumes el deducible y la aseguradora paga lo demás.',
        see: [{ label: 'prima', href: '#prima' }],
        cta: { label: 'Cotiza tu vehículo', href: '/seguro-vehicular/' },
      },
      {
        id: 'cobertura',
        term: 'Cobertura',
        brief: 'Lo que tu seguro sí ampara, y hasta qué límite.',
        def: 'Cada cobertura tiene sus condiciones, y dos planes con el mismo nombre pueden amparar cosas distintas — por eso se comparan coberturas, no solo precios.',
        see: [{ label: 'exclusiones', href: '#exclusiones' }],
      },
      {
        id: 'exclusiones',
        term: 'Exclusiones',
        brief: 'Lo que tu póliza no cubre.',
        def: 'Todas las pólizas las tienen; la diferencia está en conocerlas antes de firmar y no en medio de un reclamo.',
      },
      {
        id: 'valor-asegurado',
        term: 'Valor asegurado',
        brief: 'El máximo que la aseguradora pagaría por una pérdida cubierta.',
        def: 'También se le llama suma asegurada. Un valor muy bajo te deja corto al momento del siniestro; uno muy alto te hace pagar prima de más.',
        example:
          'Aseguras tu casa por lo que costaría reconstruirla, no por lo que pedirías al venderla.',
        cta: { label: 'Asegura tu casa', href: '/seguro-de-hogar/' },
      },
      {
        id: 'beneficiario',
        term: 'Asegurado, tomador y beneficiario',
        brief: 'Quién contrata, quién está protegido y quién recibe el pago.',
        def: 'El tomador contrata la póliza y la paga, el asegurado es quien está protegido, y el beneficiario recibe la indemnización. Pueden ser la misma persona — o no. En vida, tú eliges a tus beneficiarios y puedes actualizarlos cuando tu vida cambie.',
        example:
          'Contratas un seguro de vida: tú eres tomador y asegurado, y tus hijos, los beneficiarios que recibirían el pago.',
        cta: { label: 'Cotiza tu seguro de vida', href: '/seguro-de-vida/' },
      },
      {
        id: 'siniestro',
        term: 'Siniestro',
        brief: 'El evento que activa tu seguro: el choque, el robo, la enfermedad.',
        def: 'Cuando ocurre, nos avisas primero a nosotros: te decimos qué documentar y armamos el reclamo contigo.',
        see: [{ label: 'reclamo', href: '#reclamo' }],
      },
      {
        id: 'reclamo',
        term: 'Reclamo',
        brief: 'El trámite para que la aseguradora pague tras un siniestro.',
        def: 'Documentación, aviso formal a la aseguradora y seguimiento hasta la reparación o el pago. Es la parte del proceso donde más se nota tener un asesor de tu lado.',
      },
      {
        id: 'endoso',
        term: 'Endoso',
        brief: 'Un cambio a tu póliza vigente, sin contratar una nueva.',
        def: 'Cambiar un beneficiario, incluir un bien, ajustar un valor: la póliza se actualiza sin empezar de cero. Nos pides el cambio y lo gestionamos con la aseguradora.',
      },
      {
        id: 'renovacion',
        term: 'Renovación',
        brief: 'El cierre de un período de tu póliza — y el momento de recotizar.',
        def: 'Al vencer el período, el plan se renueva. Es el mejor momento para revisar cómo se comportó y volver a comparar el mercado antes de continuar.',
      },
    ],
  },
  {
    id: 'salud',
    label: 'Salud',
    lede: 'Los términos que verás al comparar planes de salud.',
    icon: 'corazon',
    terms: [
      {
        id: 'copago',
        term: 'Copago',
        brief: 'La parte de un gasto médico que pagas tú al usar el plan.',
        def: 'El plan asume el resto del gasto. Cada aseguradora define sus copagos por tipo de servicio, y cambian de un plan a otro.',
        example: 'Vas a consulta: tú pagas tu parte en ventanilla y el plan cubre lo demás.',
        cta: { label: 'Cotiza tu seguro de salud', href: '/seguro-de-salud/' },
      },
      {
        id: 'reembolso',
        term: 'Reembolso',
        brief: 'Pagas la atención y la aseguradora te devuelve lo cubierto.',
        def: 'Aplica cuando te atiendes y pagas primero. La clave es la carpeta: facturas, pedidos y resultados completos hacen que el reembolso fluya.',
        example:
          'Pagas el examen, guardas la factura, presentas el reclamo y te devuelven la parte cubierta.',
      },
      {
        id: 'red-de-prestadores',
        term: 'Red de prestadores',
        brief: 'Los médicos, clínicas y hospitales en convenio con tu plan.',
        def: 'Atenderte dentro de la red suele simplificar pagos y trámites; fuera de ella, el plan define otras condiciones. Cada aseguradora arma la suya — revísala antes de elegir.',
      },
      {
        id: 'preexistencias',
        term: 'Preexistencias',
        brief: 'Condiciones de salud que ya tenías antes de contratar.',
        def: 'Cada aseguradora define cómo las evalúa y qué tratamiento les da. Conviene declararlas siempre: la información completa hoy evita un reclamo negado mañana.',
      },
      {
        id: 'periodo-de-carencia',
        term: 'Período de carencia',
        brief: 'El tiempo inicial en que ciertas coberturas aún no aplican.',
        def: 'Qué coberturas esperan y por cuánto tiempo lo define cada plan.',
        example:
          'Contratas hoy, pero algunas coberturas se activan recién después del tiempo que fija tu plan.',
      },
      {
        id: 'medicina-prepagada',
        term: 'Medicina prepagada y seguro de salud',
        brief: 'Dos figuras distintas en Ecuador, con el mismo objetivo: tu salud.',
        def: 'Las empresas de medicina prepagada y las aseguradoras de salud se rigen por reglas propias, aunque para ti el efecto se parezca. Nosotros cotizamos con ambas, para que compares planes y no etiquetas.',
        cta: { label: 'Cotiza tu seguro de salud', href: '/seguro-de-salud/' },
      },
    ],
  },
  {
    id: 'vehicular',
    label: 'Vehicular',
    lede: 'Lo que aparece en toda póliza de autos.',
    icon: 'auto',
    terms: [
      {
        id: 'responsabilidad-civil',
        term: 'Responsabilidad civil',
        brief: 'Cubre los daños que causes a otros — personas o bienes.',
        def: 'Está presente en pólizas vehiculares, de hogar y empresariales: es la parte de tu seguro que protege tu patrimonio cuando el afectado es otro.',
        cta: { label: 'Cotiza tu vehículo', href: '/seguro-vehicular/' },
      },
      {
        id: 'perdida-total',
        term: 'Pérdida total',
        brief: 'Cuando ya no procede reparar y la aseguradora indemniza.',
        def: 'Cómo se declara y cómo se liquida lo fija cada póliza.',
        example:
          'Tras un choque fuerte, en lugar de reparar, la aseguradora indemniza tomando como referencia el valor asegurado.',
        see: [{ label: 'valor asegurado', href: '#valor-asegurado' }],
      },
      {
        id: 'robo-parcial',
        term: 'Robo parcial',
        brief: 'Te roban partes o accesorios, no el vehículo completo.',
        def: 'Espejos, llantas, el radio. Que esté cubierto — y con qué condiciones — depende del plan.',
      },
      {
        id: 'avaluo',
        term: 'Avalúo',
        brief: 'El valor de tu vehículo, la referencia para asegurar e indemnizar.',
        def: 'Mantenerlo bien fijado evita pagar prima por un valor irreal o quedarte corto en la indemnización.',
        see: [{ label: 'valor asegurado', href: '#valor-asegurado' }],
      },
      {
        id: 'sppat',
        term: 'SPPAT',
        brief: 'El amparo público para víctimas de accidentes de tránsito.',
        def: 'Está vinculado a la matriculación vehicular y es independiente de cualquier seguro privado: ampara a las personas afectadas, no a tu vehículo. Tu seguro empieza donde el SPPAT termina.',
        cta: { label: 'Cotiza tu vehículo', href: '/seguro-vehicular/' },
      },
    ],
  },
  {
    id: 'vida',
    label: 'Vida',
    lede: 'Para leer un plan de vida sin abogado al lado.',
    icon: 'persona',
    terms: [
      {
        id: 'invalidez-total-y-permanente',
        term: 'Invalidez total y permanente',
        brief: 'Respaldo económico si ya no puedes volver a generar ingresos.',
        def: 'Cada plan define cómo se califica la invalidez y qué paga — es de las coberturas que más vale entender antes de firmar.',
        cta: { label: 'Cotiza tu seguro de vida', href: '/seguro-de-vida/' },
      },
      {
        id: 'enfermedades-graves',
        term: 'Enfermedades graves',
        brief: 'Apoyo económico ante un diagnóstico mayor.',
        def: 'La lista de diagnósticos y las condiciones del pago varían de un plan a otro — esa es la letra que hay que leer antes de elegir.',
      },
      {
        id: 'vida-con-ahorro',
        term: 'Vida con ahorro',
        brief: 'Protección que además acumula un fondo a tu favor.',
        def: 'Una parte protege a los tuyos; otra construye un ahorro. Cada aseguradora estructura el suyo distinto.',
      },
      {
        id: 'vida-grupo',
        term: 'Vida grupo',
        brief: 'La póliza que una empresa contrata para su equipo.',
        def: 'Suele lograr condiciones que ninguno conseguiría por separado, y es uno de los beneficios más valorados por los colaboradores.',
        cta: { label: 'Seguros para tu empresa', href: '/seguros-para-empresas/' },
      },
    ],
  },
  {
    id: 'hogar',
    label: 'Hogar',
    lede: 'Tu casa, en el idioma de las pólizas.',
    icon: 'casa',
    terms: [
      {
        id: 'continente-y-contenido',
        term: 'Continente y contenido',
        brief: 'La estructura de tu casa, y lo que hay dentro.',
        def: 'Puedes asegurar uno, otro o ambos — hay planes para propietarios y para inquilinos que solo quieren proteger sus cosas.',
        example:
          'Una tubería rota daña la pared y el televisor: la pared es continente; el televisor, contenido.',
        cta: { label: 'Asegura tu casa', href: '/seguro-de-hogar/' },
      },
      {
        id: 'riesgos-catastroficos',
        term: 'Riesgos catastróficos',
        brief: 'Terremoto, inundación y otros eventos de la naturaleza.',
        def: 'En un país sísmico como el nuestro, es de las primeras coberturas que se revisan en una póliza de hogar — junto con el valor de reconstrucción que la respalda.',
        see: [{ label: 'valor asegurado', href: '#valor-asegurado' }],
      },
      {
        id: 'responsabilidad-civil-familiar',
        term: 'Responsabilidad civil familiar',
        brief: 'Daños involuntarios de tu familia a terceros.',
        def: 'Desde una fuga de agua que afecta al vecino hasta un accidente doméstico: es el lado de tu seguro de hogar que mira hacia afuera.',
        see: [{ label: 'responsabilidad civil', href: '#responsabilidad-civil' }],
      },
    ],
  },
  {
    id: 'empresas',
    label: 'Empresas',
    lede: 'El vocabulario de un programa corporativo.',
    icon: 'equipo',
    terms: [
      {
        id: 'ramos-tecnicos',
        term: 'Ramos técnicos',
        brief: 'Las coberturas para la maquinaria y los equipos de tu operación.',
        def: 'Maquinaria, montaje, equipo electrónico: cada uno es un ramo con su propia póliza y condiciones, y se arman según lo que tu operación realmente usa.',
        cta: { label: 'Seguros para tu empresa', href: '/seguros-para-empresas/' },
      },
      {
        id: 'fianzas',
        term: 'Fianzas',
        brief: 'Garantías que respaldan tus compromisos contractuales.',
        def: 'Cumplimiento de contrato, buen uso del anticipo: son comunes al contratar con el Estado o con grandes empresas.',
        example:
          'Firmas un contrato con anticipo: la fianza le garantiza al contratante el buen uso de ese dinero.',
      },
      {
        id: 'transporte-de-mercaderia',
        term: 'Transporte de mercadería',
        brief: 'Tu carga cubierta mientras viaja.',
        def: 'Por tierra, mar o aire, según la póliza. Importaciones, exportaciones o distribución local — se estructura según tu ruta y tu mercadería.',
      },
      {
        id: 'lucro-cesante',
        term: 'Lucro cesante',
        brief: 'Compensa ingresos que pierdes si un siniestro detiene tu operación.',
        def: 'Se contrata junto a ramos como incendio, y puede ser la diferencia entre una pausa y un cierre.',
        example:
          'Un incendio detiene tu planta por un tiempo: además del daño físico, la póliza compensa la operación detenida.',
        cta: { label: 'Seguros para tu empresa', href: '/seguros-para-empresas/' },
      },
    ],
  },
]
