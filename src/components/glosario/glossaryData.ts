/* El contenido del glosario: seis grupos por ramo, cada término con su
   ancla estable (el id es la URL pública /glosario/#id — no renombrar
   sin redirigir). Las definiciones dan el concepto en voz de asesor;
   los detalles (montos, plazos, porcentajes) son de cada póliza y aquí
   no se inventan. `see` cruza términos; `cta` enruta al ramo. */

export type GlossaryLink = {
  label: string
  href: string
}

export type GlossaryTerm = {
  id: string
  term: string
  def: string
  see?: GlossaryLink[]
  cta?: GlossaryLink
}

export type GlossaryGroup = {
  id: string
  label: string
  lede: string
  terms: GlossaryTerm[]
}

export const glossaryGroups: GlossaryGroup[] = [
  {
    id: 'fundamentos',
    label: 'Fundamentos',
    lede: 'El idioma que comparten todas las pólizas, del ramo que sean.',
    terms: [
      {
        id: 'broker-de-seguros',
        term: 'Broker de seguros',
        def: 'También llamado asesor productor de seguros: un intermediario independiente que trabaja de tu lado, no para una sola aseguradora. Compara los planes del mercado, negocia condiciones y te acompaña en reclamos, renovaciones y cada cambio de tu póliza.',
        cta: { label: 'Así trabajamos', href: '/#process' },
      },
      {
        id: 'aseguradora',
        term: 'Aseguradora',
        def: 'La compañía que asume el riesgo: emite la póliza, cobra la prima y paga la indemnización cuando ocurre un siniestro cubierto. Nosotros te ayudamos a compararlas; ellas son quienes responden cuando algo pasa.',
        see: [{ label: 'póliza', href: '#poliza' }],
      },
      {
        id: 'poliza',
        term: 'Póliza',
        def: 'El contrato de tu seguro: define qué está cubierto, por cuánto, con qué exclusiones y bajo qué condiciones. Es el documento que manda — por eso te lo explicamos en claro antes de que firmes, no después.',
        see: [
          { label: 'cobertura', href: '#cobertura' },
          { label: 'exclusiones', href: '#exclusiones' },
        ],
      },
      {
        id: 'prima',
        term: 'Prima',
        def: 'El precio de tu seguro: lo que pagas por mantener la cobertura activa durante la vigencia de la póliza. Depende, entre otras cosas, del riesgo, del valor asegurado y del deducible que elijas — por eso la misma cobertura puede costar distinto en cada aseguradora.',
        see: [
          { label: 'deducible', href: '#deducible' },
          { label: 'valor asegurado', href: '#valor-asegurado' },
        ],
      },
      {
        id: 'deducible',
        term: 'Deducible',
        def: 'La parte de una pérdida que asumes tú antes de que la aseguradora pague el resto. Cada plan lo define a su manera — un monto fijo, un porcentaje o una combinación — y suele moverse en sentido contrario a la prima: a mayor deducible, prima más baja. Antes de contratar te mostramos cómo funciona en cada opción, para que no haya sorpresas en el reclamo.',
        see: [{ label: 'prima', href: '#prima' }],
        cta: { label: 'Cotiza tu vehículo', href: '/seguro-vehicular/' },
      },
      {
        id: 'cobertura',
        term: 'Cobertura',
        def: 'Lo que tu seguro sí ampara: los eventos y gastos que la póliza se compromete a pagar, y hasta qué límites. Dos planes con el mismo nombre pueden cubrir cosas distintas — comparar coberturas, no solo precios, es la mitad de nuestro trabajo.',
        see: [{ label: 'exclusiones', href: '#exclusiones' }],
      },
      {
        id: 'exclusiones',
        term: 'Exclusiones',
        def: 'Lo que tu póliza no cubre. Todas las pólizas las tienen; la diferencia está en conocerlas antes de firmar y no en medio de un reclamo. Señalártelas es parte de nuestra asesoría.',
      },
      {
        id: 'valor-asegurado',
        term: 'Valor asegurado',
        def: 'También llamado suma asegurada: el monto máximo que la aseguradora pagaría por una pérdida cubierta. Definirlo bien importa — un valor muy bajo te deja corto al momento del siniestro, y uno muy alto te hace pagar prima de más. Te ayudamos a fijarlo con criterio según el bien que aseguras.',
        cta: { label: 'Asegura tu casa', href: '/seguro-de-hogar/' },
      },
      {
        id: 'beneficiario',
        term: 'Asegurado, tomador y beneficiario',
        def: 'Tres roles que pueden coincidir en la misma persona o no: el tomador contrata la póliza y la paga, el asegurado es quien está protegido, y el beneficiario es quien recibe la indemnización. En un seguro de vida tú eliges a tus beneficiarios y puedes actualizarlos cuando tu vida cambie.',
        cta: { label: 'Cotiza tu seguro de vida', href: '/seguro-de-vida/' },
      },
      {
        id: 'siniestro',
        term: 'Siniestro',
        def: 'El evento que activa tu seguro: el choque, el robo, la enfermedad, el incendio. Cuando ocurre, nos avisas primero a nosotros: te decimos qué documentar y armamos el reclamo contigo.',
        see: [{ label: 'reclamo', href: '#reclamo' }],
      },
      {
        id: 'reclamo',
        term: 'Reclamo',
        def: 'El trámite para que la aseguradora responda después de un siniestro: documentación, aviso formal y seguimiento hasta la reparación o el pago. Como tu broker, lo llevamos contigo de principio a fin — es la parte del trabajo donde más se nota tener un asesor.',
      },
      {
        id: 'endoso',
        term: 'Endoso',
        def: 'Una modificación a tu póliza vigente sin necesidad de contratar una nueva: cambiar un beneficiario, incluir un bien, ajustar un valor. Nos pides el cambio y nosotros lo gestionamos con la aseguradora.',
      },
      {
        id: 'renovacion',
        term: 'Renovación',
        def: 'Las pólizas se contratan por períodos; al vencer, toca renovar. Para nosotros es más que un trámite: revisamos cómo se comportó tu plan y volvemos a cotizar el mercado para confirmar que sigues en la mejor opción.',
      },
    ],
  },
  {
    id: 'salud',
    label: 'Salud',
    lede: 'Los términos que verás al comparar planes de salud.',
    terms: [
      {
        id: 'copago',
        term: 'Copago',
        def: 'La parte de un gasto médico que pagas tú al usar un servicio cubierto; el plan asume el resto. Cada aseguradora define sus copagos por tipo de servicio — es uno de los números que comparamos por ti al cotizar.',
        cta: { label: 'Cotiza tu seguro de salud', href: '/seguro-de-salud/' },
      },
      {
        id: 'reembolso',
        term: 'Reembolso',
        def: 'Cuando pagas una atención médica y luego la aseguradora te devuelve la parte cubierta, previa presentación del reclamo. Te ayudamos a armar bien la carpeta para que el reembolso no se trabe.',
      },
      {
        id: 'red-de-prestadores',
        term: 'Red de prestadores',
        def: 'Los médicos, clínicas y hospitales en convenio con tu plan. Atenderte dentro de la red suele simplificar pagos y trámites; fuera de ella, el plan define otras condiciones. Cada aseguradora arma su propia red — revísala antes de elegir.',
      },
      {
        id: 'preexistencias',
        term: 'Preexistencias',
        def: 'Condiciones de salud que ya tenías antes de contratar el plan. Cada aseguradora define cómo las evalúa y qué tratamiento les da, y por eso conviene declararlas siempre: un plan bien elegido con la información completa vale más que una sorpresa en el reclamo.',
      },
      {
        id: 'periodo-de-carencia',
        term: 'Período de carencia',
        def: 'Un tiempo inicial, contado desde que contratas, durante el cual ciertas coberturas todavía no aplican. Qué coberturas y por cuánto tiempo lo define cada plan — te lo mostramos antes de que firmes.',
      },
      {
        id: 'medicina-prepagada',
        term: 'Medicina prepagada y seguro de salud',
        def: 'En Ecuador conviven dos figuras que se parecen pero no son lo mismo: las empresas de medicina prepagada y los seguros de salud de las aseguradoras. Para ti el objetivo es el mismo — proteger tu salud — pero cambian la figura legal y las reglas de cada una. Nosotros cotizamos con ambas, para que compares planes y no etiquetas.',
        cta: { label: 'Cotiza tu seguro de salud', href: '/seguro-de-salud/' },
      },
    ],
  },
  {
    id: 'vehicular',
    label: 'Vehicular',
    lede: 'Lo que aparece en toda póliza de autos.',
    terms: [
      {
        id: 'responsabilidad-civil',
        term: 'Responsabilidad civil',
        def: 'La cobertura que responde por los daños que causes a terceros — personas o bienes. La verás en pólizas vehiculares, de hogar y empresariales: es la parte de tu seguro que protege tu patrimonio cuando el afectado es otro.',
        cta: { label: 'Cotiza tu vehículo', href: '/seguro-vehicular/' },
      },
      {
        id: 'perdida-total',
        term: 'Pérdida total',
        def: 'Cuando el daño o el robo del vehículo es de tal magnitud que, según las condiciones de la póliza, ya no procede repararlo, y la aseguradora indemniza tomando como referencia el valor asegurado. Cómo se declara y cómo se liquida lo fija cada póliza — otra razón para leerla contigo antes.',
        see: [{ label: 'valor asegurado', href: '#valor-asegurado' }],
      },
      {
        id: 'robo-parcial',
        term: 'Robo parcial',
        def: 'El robo de partes, piezas o accesorios sin que se lleven el vehículo completo: espejos, llantas, el radio. Que esté cubierto — y con qué condiciones — depende del plan; te lo señalamos al comparar.',
      },
      {
        id: 'avaluo',
        term: 'Avalúo',
        def: 'El valor estimado de tu vehículo, que sirve de referencia para asegurarlo y para liquidar una pérdida. Mantenerlo bien fijado evita pagar prima por un valor irreal o quedarte corto en la indemnización.',
        see: [{ label: 'valor asegurado', href: '#valor-asegurado' }],
      },
      {
        id: 'sppat',
        term: 'SPPAT',
        def: 'El sistema público ecuatoriano que ampara a las víctimas de accidentes de tránsito, vinculado a la matriculación vehicular. Es independiente de un seguro vehicular privado y no protege tu vehículo: cubre a las personas afectadas. Tu seguro privado empieza donde el SPPAT termina — pregúntanos y te lo explicamos con tu caso.',
        cta: { label: 'Cotiza tu vehículo', href: '/seguro-vehicular/' },
      },
    ],
  },
  {
    id: 'vida',
    label: 'Vida',
    lede: 'Para leer un plan de vida sin abogado al lado.',
    terms: [
      {
        id: 'invalidez-total-y-permanente',
        term: 'Invalidez total y permanente',
        def: 'Una cobertura que te respalda económicamente si un accidente o una enfermedad te impide volver a generar ingresos de forma permanente. Cada plan define cómo se califica y qué paga — es de las coberturas que más vale entender antes de firmar.',
        cta: { label: 'Cotiza tu seguro de vida', href: '/seguro-de-vida/' },
      },
      {
        id: 'enfermedades-graves',
        term: 'Enfermedades graves',
        def: 'Un apoyo económico si recibes uno de los diagnósticos mayores definidos en la póliza. La lista de enfermedades y las condiciones del pago varían de un plan a otro — comparamos esa letra por ti.',
      },
      {
        id: 'vida-con-ahorro',
        term: 'Vida con ahorro',
        def: 'Planes que combinan la protección de un seguro de vida con un componente que acumula un fondo a tu favor. Cada aseguradora estructura el suyo distinto; te mostramos qué parte protege y qué parte ahorra, para que decidas con claridad.',
      },
      {
        id: 'vida-grupo',
        term: 'Vida grupo',
        def: 'La póliza que una empresa contrata para proteger a su equipo, generalmente con condiciones que ninguno conseguiría por separado. Es uno de los beneficios más valorados por los colaboradores — y lo cotizamos para equipos de todo tamaño.',
        cta: { label: 'Seguros para tu empresa', href: '/seguros-para-empresas/' },
      },
    ],
  },
  {
    id: 'hogar',
    label: 'Hogar',
    lede: 'Tu casa, en el idioma de las pólizas.',
    terms: [
      {
        id: 'continente-y-contenido',
        term: 'Continente y contenido',
        def: 'El continente es la estructura de tu casa; el contenido, lo que hay dentro: muebles, equipos, electrodomésticos. Puedes asegurar uno, otro o ambos — hay planes para propietarios y también para inquilinos que solo quieren proteger sus cosas.',
        cta: { label: 'Asegura tu casa', href: '/seguro-de-hogar/' },
      },
      {
        id: 'riesgos-catastroficos',
        term: 'Riesgos catastróficos',
        def: 'Terremoto, inundación y otros eventos de la naturaleza. En un país sísmico como el nuestro es de las primeras coberturas que revisamos en una póliza de hogar — junto con el valor de reconstrucción que la respalda.',
        see: [{ label: 'valor asegurado', href: '#valor-asegurado' }],
      },
      {
        id: 'responsabilidad-civil-familiar',
        term: 'Responsabilidad civil familiar',
        def: 'La cobertura que responde por daños involuntarios que tú o tu familia causen a terceros en la vida diaria — desde una fuga de agua que afecta al vecino hasta un accidente doméstico. Es el lado de tu seguro de hogar que mira hacia afuera.',
        see: [{ label: 'responsabilidad civil', href: '#responsabilidad-civil' }],
      },
    ],
  },
  {
    id: 'empresas',
    label: 'Empresas',
    lede: 'El vocabulario de un programa corporativo.',
    terms: [
      {
        id: 'ramos-tecnicos',
        term: 'Ramos técnicos',
        def: 'La familia de coberturas para los fierros de tu operación: maquinaria, montaje, equipo electrónico. Cada uno es un ramo con su propia póliza y condiciones — se arman según lo que tu empresa realmente usa.',
        cta: { label: 'Seguros para tu empresa', href: '/seguros-para-empresas/' },
      },
      {
        id: 'fianzas',
        term: 'Fianzas',
        def: 'Garantías que respaldan tus compromisos contractuales frente a un tercero: cumplimiento de contrato, buen uso del anticipo. Son comunes al contratar con el Estado o con grandes empresas; te ayudamos a emitirlas a tiempo para que no frenen tu contrato.',
      },
      {
        id: 'transporte-de-mercaderia',
        term: 'Transporte de mercadería',
        def: 'La cobertura de tu carga mientras viaja — por tierra, mar o aire, según la póliza. Importaciones, exportaciones o distribución local: se estructura según tu ruta y tu mercadería.',
      },
      {
        id: 'lucro-cesante',
        term: 'Lucro cesante',
        def: 'La cobertura que compensa los ingresos que tu empresa deja de percibir cuando un siniestro cubierto detiene la operación. Se contrata junto a ramos como incendio, y sus condiciones las fija cada póliza — pero puede ser la diferencia entre una pausa y un cierre.',
        cta: { label: 'Seguros para tu empresa', href: '/seguros-para-empresas/' },
      },
    ],
  },
]
