const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

/* ----------------------------------------------------------------------------------------------------- */
/* ---------------------------------- Respuestas de Licenciatura --------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

const flowSecLic1 = addKeyword(['1', 'Escolarizado', 'ESCOLARIZADO']).addAnswer([
    '🔹Modalidad - ESCOLARIZADO🔹',
    '🗓️ Horario de Lunes a Viernes de 8:00 am a 1:00 pm',
    ' ',
    'Titulación directa sin Tesis',
    '5 materias por cuatrimestre',
    '📆 Inicio 9 de Septiembre ',
    ' ',
    ' 💲 Costos',
    '• Inscripción $1,500.00 ',
    '• Mensualidad $1,400.00 ',
    '• Reinscripción $2,000.00 el costo de la reinscripción ya incluye el pago de la mensualidad de su respectivo mes.',
    ' ',
    '⚠️ La mensualidad debe pagarse durante los primeros 5 días de su respectivo mes cursado, de lo contrario tendrá un cargo adicional del 10% en el costo.',
    ' ',
    '❗️ Inscríbete durante Junio y Julio para tener un descuento del 100% en tu inscripción pagando solo la primer mensualidad.',
])

const flowSecLic2 = addKeyword(['2', 'Sabatino', 'SABATINO']).addAnswer([
    '🔹Modalidad - SABATINO🔹',
    '📆 Sábados de 9:00 am a 2:00pm',
    ' ',
    'Titulación directa sin Tesis',
    'Modular: Periodo y cambio de materias cada 3 sábados.',
    '5 materias por cuatrimestre',
    '📆 Inicio 7 de Septiembre',
    ' ',
    ' 💲 Costos',
    '• Inscripción $1,500.00 ',
    '• Mensualidad $1,800.00 ',
    '• Reinscripción $2,500.00 el costo de la reinscripción ya incluye el pago de la mensualidad de su respectivo mes',
    ' ',
    '⚠️ La mensualidad debe pagarse durante los primeros 5 días de su respectivo mes cursado, de lo contrario generará un cargo adicional del 10% en el costo.',
    ' ',
    '❗️ Inscríbete durante Junio y Julio para tener un descuento del 100% en tu inscripción pagando solo la primer mensualidad.',
])

/* ----------------------------------------------------------------------------------------------------- */
/* ------------------------------------ Respuestas de Maestría ----------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

const flowSecMaest1 = addKeyword(['1', 'presencial', 'Presencial', 'PRESENCIAL', 'sabatino', 'Sabatino', 'SABATINO']).addAnswer([
    '🔹Modalidad - PRESENCIAL - Sabatino🔹',
        'Sabados de 8:00 am a 2:00pm',
        ' ',
        '• Modo autogestivo mediante plataforma con actividades automatizadas',
        '🗓️ Inicio Sabado 7 de Septiembre',
        '📆 Inscripciones abiertas', 
        ' ',
        '💲 Costos',
        '• Inscripción $1,500.00 ',
        '• Mensualidad $1,500.00 ',
        '• Mensualidad con pago puntual $1,000.00 ',
        '• Reinscripción $2,000.00 el costo de la reinscripción ya incluye el pago de la mensualidad de su respectivo mes.',
        ' ',
        '⚠️ Para que se le respete la mensualidad con pago puntual deberá efectuarlo durante los primeros 5 días de su respectivo mes cursado.',
])

const flowSecMaest2 = addKeyword(['2', 'virtual', 'Virtual', 'VIRTUAL']).addAnswer([
    '🔹Modalidad - VIRTUAL🔹',
    '',
    '• Sesiones los días jueves a las 8:00 pm hora del centro del país, asistencia es opcional para fines de asesorías',
    '• Modo autogestivo mediante plataforma con actividades automatizadas',
    '• Desarrollo modular',
    '🗓️ Inicio Jueves 5 de Septiembre',
    '📆 Inscripciones abiertas',
    ' ',
    '💲 Costos',
    '• Inscripción $1,500.00 ',
    '• Mensualidad $1,500.00 ',
    '• Mensualidad con pago puntual $1,000.00 ',
    '• Reinscripción $2,000.00 el costo de la reinscripción ya incluye el pago de la mensualidad de su respectivo mes.',
    ' ',
    '⚠️ Para que se le respete la mensualidad con pago puntual deberá efectuarlo durante los primeros 5 días de su respectivo mes cursado.',
])

/* ----------------------------------------------------------------------------------------------------- */
/* ----------------------------------- Respuestas de Doctorado ----------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */


const flowSecDoc1 = addKeyword(['1', 'presencial', 'Presencial', 'PRESENCIAL', 'sabatino', 'Sabatino', 'SABATINO']).addAnswer([
        '🔹Modalidad - PRESENCIAL - Sabatino🔹',
        'Sabados de 8:00am a 2:00pm',
        '',
        '🗓️ Inicio Sabado 7 de Septiembre',
        '📆 Inscripciones abiertas',
        ' ',
        '💲 Costos',
        '• Inscripción $2,000.00 ',
        '• Mensualidad $2,000.00 ',
        '• Mensualidad con pago puntual $1,500.00 ',
        '• Reinscripción $2,500.00 el costo de la reinscripción ya incluye el pago de la mensualidad de su respectivo mes.',
        ' ',
        '⚠️ Para que se le respete la mensualidad con pago puntual deberá efectuarlo durante los primeros 5 días de su respectivo mes cursado.',
        ' ',
        '❗️ Inscríbete durante Mayo y Junio para tener un descuento del 50% en tu inscripción pagando solo la primer mensualidad',
])

const flowSecDoc2 = addKeyword(['2', 'virtual', 'Virtual', 'VIRTUAL']).addAnswer([
        '🔹Modalidad - VIRTUAL🔹',
        'Sesiones los días viernes a las 8:00 pm hora del centro del país',
        ' ',
        '• Modo autogestivo mediante plataforma con actividades automatizadas',
        '• La asistencia es opcional con fines de asesorías',
        '🗓️ Inicio Viernes 6 de Septiembre',
        '📆 Inscripciones abiertas',
        ' ',
        '💲 Costos',
        '• Inscripción $2,000.00 ',
        '• Mensualidad $2,000.00 ',
        '• Mensualidad con pago puntual $1,500.00 ',
        '• Reinscripción $2,500.00 el costo de la reinscripción ya incluye el pago de la mensualidad de su respectivo mes.',
        ' ',
        '⚠️ Para que se le respete la mensualidad con pago puntual deberá efectuarlo durante los primeros 5 días de su respectivo mes cursado.',
        ' ',
        '❗️ Inscríbete durante Mayo y Junio para tener un descuento del 50% en tu inscripción pagando solo la primer mensualidad',
])

/* ----------------------------------------------------------------------------------------------------- */
/* ------------------------------------ En espera de Atención ------------------------------------------ */
/* ----------------------------------------------------------------------------------------------------- */

const flowAtencion = addKeyword(['ATENCIÓN', 'ATENCION', 'Atención', 'Atencion']).addAnswer(
    [
        '🕰️ Horario de atención: 8:00am a 2:00pm.',
        'El asesor se pondrá en contacto con usted dentro de este horario.',
        ' ',
        'En un momento nos contactamos.'
    ],
    null,
    null,
)

/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------------- Opción Admisión --------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

const flowAdmi = addKeyword(['Admision', 'Admisión', 'ADMISIÓN', 'ADMISION', 'admision', 'admisión']).addAnswer(
    [
        '🌟 ADMISIÓN 🌟',
        ' ',
        'Modalidad Virtual por la plataforma de Zoom.',
        '💲 Tiene un costo de $2,000.00',
        '📆 Inicio Martes 8 de Octubre – Talleres Virtuales',
        ' ',
        ' • Preparación para el Examen',
        ' • 30 elementos normativos.',
        ' • Simuladores',
        /*' • Taller de Habilidades Docentes',
        '       ➢ Planeación didáctica',
        '       ➢ Control del grupo',*/
        ' • Taller de nueva escuela Mexicana',
    ],
    null,
    null,
)

/* ----------------------------------------------------------------------------------------------------- */
/* -------------------------------------- Opción Horizontal -------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

const flowHoriz = addKeyword(['horizontal', 'HORIZONTAL', 'Horizontal']).addAnswer(
    [
        '🌟 PROMOCIÓN HORIZONTA 🌟',
        ' ',
        'Modalidad Virtual por la plataforma de Zoom.',
        'Sesiones 8:00 pm hora de centro del país.',
        '💲Tiene un costo de $7,250.00 ',
        '⚠️📆 Fecha limite de Registro 5 de Octubre',
        ' ',
        '❗ Paga antes del --- de --- y obtendrás un descuento del 20% para pagar únicamente $5,800.00',
        '❗Pago dividido en dos partes, primer pago equivalente a $2,000.00 y segundo pago equivalente a $3,800.00',
        ' ',
        'El pago de tu anualidad incluye…',
        '• 32 elementos normativos.',
        '• Protocolos, Leyes y Compendios de estudio para evaluación.',
        ' ',
        '• Diplomado de 200 horas',
        /*'• Cursos Gratuitos durante todo el Ciclo',
        '   ➢ Taller de nueva escuela Mexicana',
        '   ➢ Taller de habilidades Docentes',
        '        • Planeación didáctica',
        '        • Control del grupo',*/
        
    ],
    null,
    null,
)

/* ----------------------------------------------------------------------------------------------------- */
/* ------------------------------------- Opción Licenciatura ------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */


const flowLic = addKeyword(['LICENCIATURA', 'Licenciatura', 'licenciatura']).addAnswer(
    [
        '🌟 LICENCIATURA EN PEDAGOGÍA 🌟',
        ' ',
        'Titulación directa sin Tesis en 3 años',
        'Cuenta con 2 modalidades',
        'Modalidad – Sabatino o Escolarizado',
        ' ',
        ' Seleccione la Modalidad de la que desea obtener información',
        ' ',
        '▶️ "Escolarizado"',
        '▶️ "Sabatino"'
        
    ],
    null,
    null,
    [flowSecLic1, flowSecLic2]
)

/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------------- Opción Maestría --------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

const flowMaestria = addKeyword(['MAESTRÍA', 'Maestría', 'MAESTRIA', 'Maestria']).addAnswer(
    [
        '🌟 MAESTRÍA EN EDUCACIÓN 🌟',
        ' ',
        'Titulación directa sin Tesis en solo 1 años y 8 meses',
        'Modalidad – Virtual o Presencial (Sabatino)',
        'Reinscipciones cada 4 meses (Enero, Mayo y Septiembre)',
        ' ',
        ' Seleccione la Modalidad de la que desea obtener información',
        ' ',
        '▶️ "Presencial"',
        '▶️ "Virtual"'
    ],
    null,
    null,
    [flowSecMaest1, flowSecMaest2]
)

/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------------- Opción Doctorado -------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */


const flowDoctorado = addKeyword(['DOCTORADO', 'Doctorado', 'doctorado']).addAnswer(
    [
        '🌟 DOCTORADO EN EDUCACIÓN 🌟',
        ' ',
        'Titulación directa sin Tesis',
        'Modalidad – Virtual o Presencial (Sabatino)',
        'Reinscipciones cada 4 meses (Enero, Mayo y Septiembre) ',
        ' ',
        ' Seleccione la Modalidad de la que desea obtener información',
        ' ',
        '▶️ "Presencial"',
        '▶️ "Virtual"',
    ],
    null,
    null,
    [flowSecDoc1, flowSecDoc2]
)

/* ----------------------------------------------------------------------------------------------------- */
/* ----------------------------------------- Opción Menú ----------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

const flowMenu = addKeyword(['menu', 'Menu', 'MENU', 'Menú', 'menú', 'MENÚ'])
    .addAnswer(
        [
            'Si desea información sobre nuestros planes de estudios, cursos o talleres, por favor indique la opción de la cual necesite informes.',
            ' ',
            'Escriba...',
            '🌟 "Admisión" - Admisión en Educacion Básica',
            '🌟 "Horizontal" - Horas adicionales (Promoción Horizontal)',
            '🌟 "Licenciatura" - Licenciatura en Pedagogía',
            '🌟 "Maestría" - Maestría en Educación',
            '🌟 "Doctorado" - Doctorado en Educación',
            ' ',
            '🤳 Si necesita comunicarse con un encargado sobre algún otro asunto, escriba la palabra "Atención" y nos comunicaremos a la brevedad con usted.',
        ],
        null,
        null,
        [flowAtencion, flowAdmi, flowLic, flowHoriz, flowMaestria, flowDoctorado]
    )

/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------------- Opción Ubicación -------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

    const flowUbicacion = addKeyword(['ubicacion', 'Ubicacion', 'UBICACION', 'ubicación', 'Ubicación', 'UBICACIÓN'])
    .addAnswer(
            'Estamos Ubicados en Av. Los Pilares, Jojutla Morelos, México',
            ' ',
            'Ingrese al siguiente enlace para abrir la ubicación en el mapa del Instituto',
    )
    .addAnswer(['https://goo.gl/maps/gYArUYrETNCyeUY7A'],
        null,
        null,
    )

/* ----------------------------------------------------------------------------------------------------- */
/* ---------------------------------------- Opción Redes ----------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

    const flowRedes = addKeyword(['redes', 'Redes', 'REDES'])
    .addAnswer([
        'Siguenos en Nuestras Redes Sociales Oficiales',
        ' ',
        '✅ "Página Oficial" - https://shre.ink/8FcO',
        '✅ "Facebook" - https://shre.ink/8Fad',
        '✅ "Instagram" - https://shre.ink/8FcP',
        '✅ "Tiktok" - Proximamente',

    ],
    null,
    null,
)
/* ----------------------------------------------------------------------------------------------------- */
/* --------------------------------------- Mensaje Inicial --------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------- */

    const flowPrincipal = addKeyword(['hola', 'buenos días', 'buenas tardes', 'Información', 'informacion'])
    .addAnswer('¡Buen día! Ha contactado con el Instituto de Capacitación Docente de Morelos ')
    .addAnswer(
        [
            'Aquí te ofrecemos información sobre nuestros planes de Estudio, nuestra Ubicación, Redes Sociales y como contactarnos',
            '¿En que podemos ayudarte hoy?',
            ' ',
            'Escriba...',
            '📚 "Menú" - Planes de estudios',
            '📍 "Ubicación" - Ubicación del Lugar',
            '✅ "Redes" - Redes Sociales',
            '🤳 "Atención" - Hablar con un encargado',
        ],
        null,
        null,
        [flowMenu, flowUbicacion, flowRedes, flowAtencion]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()