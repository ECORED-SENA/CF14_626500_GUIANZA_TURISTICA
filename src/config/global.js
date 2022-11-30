export default {
  global: {
    componenteFormativo: 'Guionaje de grupos',
    descripcionCurso:
      'A partir del servicio al cliente se desprenden las bases de la atención y la implementación de técnicas, protocolos, normativas y procedimientos que dan calidad a la prestación mediante la aplicación del código de ética del turismo y las buenas prácticas, que son los medios ideales para ejecutar un proceso mediante el principio de NO dejar huella.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicio al cliente en el guionaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Pautas de atención y manejo de felicitación, peticiones, quejas y reclamos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Protocolos para el servicio guiado',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Marco de la actuación del guía en Colombia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Buenas prácticas para el guía de turismo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manejo de grupos guiados en escenarios culturales y naturales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipología de grupos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas para atención de grupos guiados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas para recorrido peatonal',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Técnicas para el recorrido en espacio naturaleza',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Técnica para recorrido panorámico',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Dinámicas de grupos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Turismo accesible',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Beneficiarios y técnicas específicas de guianza',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Condiciones en la infraestructura y los servicios',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Asociación Colombiana para el Desarrollo de Personas con Discapacidad. (s.f.). Decálogo para relacionarse con personas en condición de discapacidad. ASCOPAR.',
    },
    {
      referencia:
        'Fernández, J (2015) Introducción al protocolo Turístico Hotelero. Revista Estudios Institucionales, VOL. II, No 3,  pp. 201-206.',
    },
    {
      referencia:
        'Fuentes C., F. (2015). Accesibilidad en los servicios turísticos de hoteles y agencias de viaje de la ciudad de la Paz [Tesis de pregrado]. Repositorio Institucional UMSA. ',
      link: 'http://repositorio.umsa.bo/xmlui/handle/123456789/13785',
    },
    {
      referencia:
        'FIR Consultoría & Servicio Andaluz de Empleo. (2018). Materiales Didácticos—Curso Guía de Ruta.',
      link:
        'http://www.juntadeandalucia.es/empleo/recursos/material_didactico/especialidades/materialdidactico_guia_de_ruta/GR/presen.htm',
    },
    {
      referencia:
        'Gobierno de provincia de Salta, Ministerio de Cultura y Turismo. (2006). Técnicas de guiado. Material orientativo y de consulta para el examen de guías idóneos.',
      link:
        'https://fhcevirtual.umsa.bo/btecavirtual/?q=T%C3%A9cnicasdeGuiadoMaterialorientativoydeconsultaparaelex%C3%A1mendegu%C3%ADasid%C3%B3neos',
    },
    {
      referencia:
        'Instituto Distrital de Turismo & Alcaldía Local de Teusaquillo. (2014). Cartilla de buenas prácticas de sostenibilidad para empresarios turísticos.',
      link: 'https://es.slideshare.net/alvargoe/07-sept-cartillafinal1',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (MINCIT). (2019). Manual de turismo accesible "Turismo para Todos" (primera ed.). MINCIT.',
      link:
        'http://acolap.org.co/wp-content/uploads/2019/07/MANUAL-TURISMO-PARA-TODOS.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio & Colombia Productiva. (2021). Guía de buenas prácticas en sostenibilidad. Prestadores de servicios en turismo de naturaleza. Organización para la educación y protección ambiental OPEPA.',
      link:
        'https://www.colombiaproductiva.com/ptp-capacita/publicaciones/sectoriales/publicaciones-turismo-de-naturaleza/guia-de-buenas-practicas-guias-turisticos',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Sala situacional de las Personas con Discapacidad (PCD). MINSALUD.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PES/presentacion-sala-situacional-discapacidad-2017.pdf',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (2012). Calidad de servicio y Atención al Cliente (2a. ed.). Editorial ICB, 2012. p.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/113201',
    },
    {
      referencia: 'Puedo Viajar. (2021). Accessible tourism website',
      link: 'https://www.puedoviajar.es/',
    },
    {
      referencia:
        'Restrepo, C., Restrepo, L. y Estrada, S. (2006). Enfoque estratégico del servicio al cliente.',
      link: 'https://www.redalyc.org/pdf/849/84911652051.pdf',
    },
    {
      referencia:
        'Servicio Nacional de aprendizaje SENA. (2018a). Manejo de grupos. Material de estudio programa Tecnología en Guianza Turística.',
    },
    {
      referencia:
        'Servicio Nacional de aprendizaje SENA (2018b) Caracterización del usuario y servicio al cliente. Material estudio programa Tecnología en Guianza Turística.',
    },
    {
      referencia:
        'Servicio Nacional de Turismo SENATUR. (2016). Manual de Diseño Experiencias Turísticas.',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf',
    },
    {
      referencia:
        'Sociedad Insular para la promoción de las personas con discapacidad. (2021). Tenerife, destino accesible.',
      link: 'https://guianatura.net/tenerife-destino-accesible/',
    },
    {
      referencia:
        'Universidad Nacional de Colombia, Instituto Distrital de Turismo, Alcaldía Local de Teusaquillo (2011). Protocolos de servicio para el turismo accesible de turistas y visitantes Jóvenes, Adultos Mayores y Personas en Situación de Discapacidad. ',
      link:
        'https://www.researchgate.net/publication/273319491_Protocolos_de_servicio_para_el_turismo_accesible_de_turistas_y_visitantes_Jovenes_Adultos_Mayores_y_Personas_en_Situacion_de_Discapacidad',
    },
  ],
  glosario: [
    {
      termino: 'Accesible',
      significado: 'Entrada, paso.',
    },
    {
      termino: 'Celiaco',
      significado:
        'Que padece una enfermedad celíaca es decir que tiene una intolerancia al gluten, por lo tanto, no puede consumir alimentos que contengan harina de trigo, cebada o avena.',
    },
    {
      termino: 'Itinerario',
      significado: 'Camino, ruta, descripción de lugares en un recorrido.',
    },
    {
      termino: 'Modulación de la voz',
      significado:
        'Hace referencia al cambio en el volumen, tono, ritmo o pronunciación y velocidad en el sonido de la voz.',
    },
    {
      termino: 'Perfil altimétrico',
      significado:
        'Se refiere a una representación de la altura de los diferentes desniveles del terreno, tomando como referencia un valor de base.',
    },
    {
      termino: 'PST',
      significado: 'Prestador de Servicio Turístico.',
    },
    {
      termino: 'Superlativo',
      significado: 'Muy grande, desmesurado.',
    },
    {
      termino: 'Técnica',
      significado:
        'Conjunto de procedimientos y recursos de que se sirve una ciencia o un arte.',
    },
    {
      termino: '<em>Váuchers</em>',
      significado:
        'Vale que da derecho a quien lo posee a adquirir determinados artículos o a disfrutar de un servicio.',
    },
    {
      termino: 'Vegano',
      significado:
        'Persona que practica el veganismo, una actitud a rechazar alimentos de origen animal. En su dieta no está la carne, los huevos, la miel, también rechazan las actividades relacionadas con la producción del cuero o la seda.',
    },
    {
      termino: 'Vegetariano',
      significado:
        'Practica el vegetarianismo, un régimen alimenticio basado principalmente en el consumo de productos vegetales y admite productos de origen animal como los huevos y la leche, no admiten la carne.',
    },
  ],
  complementario: [
    {
      tema: 'Protocolos para el servicio guiado',
      referencia:
        'Organización Mundial del Turismo (2020), Convención marco sobre ética del turismo. OMT.',
      tipo: 'Documento',
      link: 'https://www.e-unwto.org/doi/pdf/10.18111/9789284421695',
    },
    {
      tema: 'Buenas prácticas para el guía de turismo',
      referencia:
        'Ministerio de Comercio Industria y Turismo. (2014). Guía de buenas prácticas para prestadores de servicios en turismo de naturaleza.',
      tipo: 'Libro',
      link:
        'https://www.colombiaproductiva.com/CMSPages/GetFile.aspx?guid=f01cde94-55d0-4d6d-b397-1cdc4d682696',
    },
    {
      tema: 'Técnicas para el recorrido en espacio naturaleza',
      referencia:
        'Gobernación de Antioquia (2015). Protocolos de autocuidado y caminería segura en Antioquia.',
      tipo: 'Documento',
      link:
        'https://www.academia.edu/42914672/Protocolos_de_autocuidado_y_caminer%C3%ADa_segura_en_Antioquia',
    },
    {
      tema: 'Técnicas para el recorrido en espacio naturaleza',
      referencia:
        'Fundación para la Conservación y el Desarrollo Sostenible (2020). Manual de operación turística para el avistamiento de aves.',
      tipo: 'Libro',
      link:
        'https://fcds.org.co/wp-content/uploads/2021/02/manual-operacion-turismo.pdf',
    },
    {
      tema: 'Técnicas para el recorrido en espacio naturaleza',
      referencia:
        'Ministerio de Comercio industria y turismo. (2017). Guía de buenas prácticas para la actividad de aviturismo en Colombia.',
      tipo: 'Libro',
      link:
        'https://www.mincit.gov.co/CMSPages/GetFile.aspx?guid=2aaff59c-e5b5-45c7-b0e7-e78304e362f5',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo Diseño y Desarrollo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gomez Delgado',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
