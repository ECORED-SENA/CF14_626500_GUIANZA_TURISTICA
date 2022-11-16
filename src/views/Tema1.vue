<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Implementación de la experiencia

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-5.col-12
        figure
          img(src='@/assets/curso/tema1/img1.jpg', alt='')
      .col-lg-8.col-md-7.col-12
        p.mb-2 El perfil del guía de turismo integra calidad y capacidades específicas para manejar todo tipo de situaciones que se presentan en el presente siglo que trae sus dinámicas complejas y cambios vertiginosos.  De este modo, el servicio al cliente presenta pautas de atención en la felicitación, peticiones, quejas y reclamos (FPQR), protocolos y buenas prácticas, por lo que se marca un camino de la actuación del guía a través de un marco que describe la prestación de este servicio.
        p.mb-2El servicio en guianza se realiza antes, durante y después de la adquisición de un producto o del disfrute de un servicio por parte de un cliente, de ahí su relevancia. El servicio es un concepto técnico y debe diferenciarse del servilismo, caracterizado por un cliente que tiene la suficiente autoridad, como para que el guía haga, todo lo que él diga, es decir, seguir la corriente o hacer caso a lo que solicite sin ningún análisis o criterio valorativo, por el contrario, el servicio el cliente tiene como premisa lo que el cliente pueda comunicar de sus intereses, deseos o necesidades y todas las acciones se enfocan en aumentar el nivel de su satisfacción.  
        .cajon.color-primario(style='background-color: #FFD667').p-4
          p.mb-0 La satisfacción o la falta de ella, es la diferencia entre cómo espera el cliente que le traten y cómo percibe que lo están tratando. Al respecto se vale las técnicas de comunicación y atención que se usan entre otras.

    p.mb-4 El servicio tiene dos dimensiones: la prestación y la experiencia que vivió en el momento del servicio. En la siguiente tabla se desarrollan los dos conceptos claramente:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Dimensiones del servicio al cliente.
    .row.mb-4
      .col-lg-12
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Prestación
                th Encabezado 2
            tbody
              tr
                td.p-5 La prestación es precisamente el desarrollo del servicio que recibe el cliente conforme a las expectativas que se han creado.
                td.p-5 La experiencia, puede provocar un impacto fundamental y determinar el grado de satisfacción, ésta puede ser positiva o negativa según los siguientes criterios: la disponibilidad, el ambiente, la actitud del profesional que presta el servicio (amabilidad, ayuda, expectativa), el riesgo percibido al escoger el servicio (unido a la reputación e imagen del Prestador del Servicio Turístico o PST), el entorno o los otros clientes, la rapidez y precisión de las respuestas a preguntas, las reacciones a sus reclamaciones y la personalización del servicio guiado (Pérez Rodríguez, M. D., 2012).
    p.mb-4 Albercht y Brandford citados por Pérez, analizan los siete (7) pecados en el servicio al usuario, los cuales son comportamientos recurrentes en las relaciones humanas, que en el caso de quienes atienden al público, cliente o usuarios, pueden aumentar la presentación de los conflictos e inclusive hacer inmanejable la situación. Se debe leer atentamente el siguiente contenido y se debe evitar cometer los comportamientos:
           
    .row.mb-4
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Apatía")
            .row 
              .col-lg-7
                h5 Apatía
                p Manifestar al público una actitud de no importarle nada, de desgano o simplemente dar la impresión al grupo de estar desmotivado y sin entusiasmo.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/1.png', alt='')

          .tarjeta.clr-paleYellow.p-4(titulo="Desaire")
            .row 
              .col-lg-7
                h5 Desaire
                p Dejar de prestar atención a la necesidad, problema o argumentos del cliente, lo que se puede entender como irrespeto y generar enfado y disgusto, siempre evitar a toda costa discutir con él.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/2.png', alt='')

          .tarjeta.clr-paleYellow.p-4(titulo="Frialdad")
            .row 
              .col-lg-7
                h5 Frialdad
                p Especialmente mostrarse hostil cortante, mezquino, o impaciente ante el usuario, lejos de ayudarle a buscar una solución indispone al equipo de trabajo y al usuario haciéndolo sentir torpe y la situación pasa a ser un problema que es difícil de manejar.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/3.png', alt='')

          .tarjeta.clr-paleYellow.p-4(titulo="Superioridad")
            .row 
              .col-lg-7
                h5 Superioridad
                p Tratar a los usuarios con aires de grandeza o hacerle sentir que cometió un error sin solución, o centrarse en explicar lo que debió haber hecho (pasado es pasado).  Es común que el cliente obvie leer las condiciones del servicio, por lo que es importante preverlo a través de disponer de variados canales de comunicación privilegiando las imágenes y textos cortos. 
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/4.png', alt='')

          .tarjeta.clr-paleYellow.p-4(titulo="Frialdad")
            .row 
              .col-lg-7
                h5 Evasivas
                p Lo siento la persona encargada no está”, “en este momento no puedo atenderlo”, “nosotros no prestamos ese tipo de servicios”, frases que evaden o evitan una respuesta. Es más eficiente mostrar alternativas, aconsejar opciones frente a la situación que le presenta el cliente.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/5.png', alt='')
    p.mb-4 El servicio al cliente es una gran responsabilidad, por eso los servidores evitan tener como respuesta el famoso “NO”, se debe prestar atención a los siguientes comentarios vitales para los guías:
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-4.col-md-8.col-10.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.coloroscuroverd(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/flip1.svg')})`}")
            .tarjeta-flip__contenido.coloroscuroverd.p-4.p-xl-4
              h4.text-center Existen alternativas al ”NO”
              p.text-center La responsabilidad de asumir el servicio al cliente es vital, no hay espacio para decir “no es mi trabajo”, los clientes tienen expectativas y el reto continuo es superarlas.

      .col-lg-6.col-xl-4.col-md-8.col-10.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.coloroscuroverd(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/flip2.svg')})`}")
            .tarjeta-flip__contenido.coloroscuroverd.p-4.p-xl-4
              h4.text-center La mejor publicidad es el buen servicio.
              p.text-center La publicidad puede hacer que los clientes lleguen, pero es quien presta el servicio el que se encarga de que regresen o se retiren.

      .col-lg-6.col-xl-4.col-md-8.col-10.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.coloroscuroverd(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/flip3.svg')})`}")
            .tarjeta-flip__contenido.coloroscuroverd.p-4.p-xl-4
              h4.text-center El valor agregado se llama servicio
              p.text-center El prestador que descubre el servicio al cliente como una ventaja competitiva, puede cobrar más por sus servicios, realiza más ventas y supera a la competencia en la participación del mercado (Pérez Rodríguez, M. D., 2012).

  
    p.mb-4 El guía en el ejercicio de prestar un servicio necesita demostrar las habilidades específicas.  Las empresas de turismo quieren que los turistas atendidos por sus guías queden satisfechos con los servicios prestados, como una estrategia de mercadeo para aumentar la base de clientes, ya que así se generan recomendaciones de los servicios a amigos o familiares. A veces, lograr esta tarea no significa llenar de información al cliente, simplemente tiene que ver con entender la motivación del turista y cumplir con sus expectativas.

    .row.align-items-center.mb-4 
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/vec1.svg', alt='') 
      .col-lg-6
        p.mb-4 La amabilidad en el trato con los turistas tiene que ver con:
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane 
            | Actitud positiva y atención inmediata a los requerimientos del turista.
          li
            i.fas.fa-paper-plane 
            | Comunicación efectiva, donde se interrelacionan el mensaje y la respuesta eficaz, al escuchar activamente al cliente, lo que facilita una atención oportuna.
          li
            i.fas.fa-paper-plane 
            | El guía debe cuidar que sus gestos y movimientos corporales no incomoden al turista.
          li
            i.fas.fa-paper-plane 
            | Capacidad de controlar la agresividad: manejo y control de las emociones.
          li
            i.fas.fa-paper-plane 
            | Sonreír, ya que una sonrisa es un gesto que no cuesta, pero quien la recibe siente haber obtenido mucho.
          li
            i.fas.fa-paper-plane 
            | El guía de turismo debe mantener contacto visual permanentemente con las personas con las que está hablando o entregando una información determinada.  Al mirar a los ojos, se entrega al interlocutor una imagen de veracidad y seguridad en lo que se está informando. A partir de lo anterior el guía de turismo logrará la confianza del grupo que está asistiendo (SENA, 2018b).
    .row.align-items-center.mb-4
      .col-lg-7
        p.mb-0 Los momentos de verdad son las ocasiones en que el cliente está en contacto directo con un asesor o profesional de servicio.  Durante la ejecución del servicio, los guías de turismo tienen ese contacto directo con los visitantes y es muy importante que cada momento esté enmarcado en la verdad, Restrepo  (2006) refuerza esta idea, al definir que este
        <b> <FONT COLOR="#FD6300"> “episodio de contacto personal o impersonal entre el cliente y la organización que genera en él impactos positivos o negativos según su percepción” </FONT> </b> debe ser sincero.   Lo anterior, también reafirma que, en la industria de servicios, más específicamente en el turismo, la calidad se mide por momentos de verdad. Un momento de verdad es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la organización, teniendo una impresión sobre la calidad de su servicio, ya sea telefónico, por la web o personalmente, y termina cuando el turista pierde ya contacto con el operador.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img2.jpg', alt='')
    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img3.jpg', alt='')
      .col-lg-8
        p.mb-0 Por ello se recomienda que el último momento de este servicio, sea cuando el visitante ya se encuentra en su lugar de origen, para recoger la opinión sobre la calidad recibida y poder confirmar que la visita haya sido, una experiencia inolvidable; <b> <FONT COLOR="#FD6300"> es necesario demostrarle al visitante que la empresa que contrató está comprometida con él y su bienestar. </FONT> </b> La descripción realizada hace referencia a los momentos de verdad, es así como se explica que la prestación del servicio de guianza, está llena de estos momentos, ya que el visitante, está en constante y permanente contacto con el guía de turismo.  Una sucesión continua de momentos de verdad es lo que constituye el ciclo de servicio; es una visión general de los momentos de verdad, conformado por los contactos, acciones, pasos y detalles que el cliente experimenta para la obtención de un servicio de su interés. Es importante anotar que dentro de un proceso pueden coexistir varios ciclos de servicio, lo importante es tener en cuenta su plena identificación, tal y como se muestra en la figura 1 a continuación (p. 19):
    
    .bg_grad-01
      .row.justify-content-center.mb-0
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 1
            span Ciclo del servicio
      .row.justify-content-center.mb-5
        .col-lg-10
          figure
            img(src='@/assets/curso/tema1/info1.svg', alt='')

    .row.align-items-center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/6.png', alt='')
      .col-lg-8
        p.mb-4 La figura 1 explica la sucesión de acontecimientos por los que pasa un turista cuando contrata un servicio con un prestador, en este caso, un guía de turismo.  Al observar y definir cada momento, se puede establecer acciones concretas del servicio.
        p.mb-4 Por otra parte, identificar cuál es el ciclo de servicios de la empresa o las acciones del guía de turismo, permite orientar la atención hacia el cliente al integrar tareas como:
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane 
            | Realizar una lista de situaciones (actividades) que deben hacer para ejecutar cualquier actividad.
          li
            i.fas.fa-paper-plane 
            | Definir el ciclo de servicio (determine los momentos de verdad).
          li
            i.fas.fa-paper-plane 
            | Analizar qué posibles fallas tiene la organización para realizar un servicio de calidad.
          li
            i.fas.fa-paper-plane 
            | Presentar las posibles soluciones ante las fallas.
          li
            i.fas.fa-paper-plane 
            | Definir cómo debería ser el proceso adecuado para realizar un verdadero servicio.
          li
            i.fas.fa-paper-plane 
            | Concluir qué sucedió de acuerdo con la observación.
    p.mb-4 Lo anterior, sugiere que la empresa prestadora de servicios o el guía de turismo, debe tener un método e instrumentos para atender de manera ágil y adecuada las quejas y reclamos que se presentan en la prestación de servicios (SENA, 2018b).
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1. Herramientas de comunicación interpretativaPautas de atención y manejo de felicitaciones, peticiones, quejas y reclamos (FPQR).

    .row.align-items-center.mb-4
      .col-lg-6
        p.mb-4 Es usual que en las empresas se utilicen mecanismos para mejorar y fortalecer los servicios prestados y el sector del turismo no es la excepción.  Para tener una atención eficiente que conduzca a la satisfacción de las exigencias de los clientes, es conveniente establecer procedimientos claros para lograr este objetivo.  Por lo general, este proceso empieza con la recepción de la solicitud, bien sea una felicitación, petición, queja, reclamo o sugerencia, la cual al ser identificada se remite a la dependencia encargada para dar eficaz y oportuna respuesta, en los tiempos preestablecidos por la organización. A partir de esta respuesta, se generan una serie de acciones que permitan dar solución o responder parcial o totalmente a la solicitud recibida y se establecen unas estrategias para lograr la mejora en el servicio.
        .cajon.color-secundario(style='background-color: #B7CEAC').p-4
          p.mb-0 Los buzones o las páginas web son la forma más común de recibir estos requerimientos, pero, en la guianza turística, muchas veces es el guía quién recepciona estas solicitudes. Este tratará de dar una solución eficaz al inconveniente cuando se trata de una queja o reclamo que suceda durante el servicio, y en estos casos es la agencia quien apoya a dar una solución eficiente y poder hacer un cierre al caso.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img4.jpg', alt='')
    p.mb-4 A continuación, se puede estudiar las definiciones relacionadas con las FPQR:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/avatar1.svg' alt='AvatarTop')
          .tarjeta.color-ama
            .p-4
              h4.text-center Felicitación
              p Acción y efecto de felicitar. Manifestación de satisfacción que se experimenta con motivo de algo por lo que se está conforme. 

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/avatar2.svg' alt='AvatarTop')
          .tarjeta.color-ama
            .p-4
              h4.text-center Petición
              p Es la acción de solicitar o demandar para que algo se haga o se lleve a cabo.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/avatar3.svg' alt='AvatarTop')
          .tarjeta.color-ama
            .p-4
              h4.text-center Queja
              p Reclamación o manifestación de inconformidad en relación a una conducta o un servicio que se considera irregular. 

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/avatar4.svg' alt='AvatarTop')
          .tarjeta.color-ama
            .p-4
              h4.text-center Reclamo.
              p Derecho que se tiene a hacer una acción de protestar por algo que se cree que no está bien hecho o con lo que no se está de acuerdo.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/avatar5.svg' alt='AvatarTop')
          .tarjeta.color-ama
            .p-4
              h4.text-center Sugerencia
              p Propuesta de acción que pretende una mejora en la prestación de un servicio o la gestión de una organización.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/avatar6.svg' alt='AvatarTop')
          .tarjeta.color-ama
            .p-4
              h4.text-center Solicitud
              p Documentos físicos o virtuales en el que se busca pedir algo formalmente.
    p.mb-4 Las reacciones del cliente al momento de presentarse un inconveniente pueden ser variadas, muchas veces generando frustración por esa sensación de insatisfacción, lo que se convierte en un problema para el guía. Para solucionar dicho problema, lo mejor es establecer un procedimiento, que no es más que el paso a paso a seguir para ejecutar una acción o actuar de una forma adecuada: 

    .row.align-items-center.mb-4
      .col-lg-6.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Escuchar con atención ayuda mucho") Lo primero es identificar las causas que ocasionaron el malestar, esto es para entender el problema. 
          
          p.text-small(numero="2" titulo="Revisar la historia ayuda mucho") Hay que definir las estrategias de solución de dicho problema, se recomienda buscar semejanzas con otros problemas para ver qué solución se les da.
          
          p.text-small(numero="3" titulo="La solución puede ser progresiva") Comenzar por dar solución a lo fácil para resolver luego lo más difícil, proponer alternativas de soluciones y evaluar los posibles desenlaces.
          
          p.text-small(numero="4" titulo="Esa solución puede servir varias veces") Finalmente dar solución al problema y reportar el caso para posteriores eventos.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img5.jpg', alt='')
    p.mb-4 Por otra parte, es importante conocer que al momento de realizar recorridos guiados los turistas por lo general llegan con una serie de expectativas a la actividad turística, y en algunas ocasiones, lo que ellos encuentran es algo diferente o no se otorga el servicio que ha sido ofrecido, lo que genera sentimientos de frustración en el visitante, ocasionando una experiencia negativa en el recorrido.

    .row.align-items-center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/7.png', alt='')
      .col-lg-8
        p.mb-4 Con el ánimo de no generar este tipo de sentimientos en los visitantes, se recomienda:
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane 
            | Informar previamente al turista el itinerario de viaje a desarrollar durante el recorrido.
          li
            i.fas.fa-paper-plane 
            | Evitar el uso indiscriminado de fotografías retocadas o falseadas, pues generan expectativas que no es posible cumplir después.
          li
            i.fas.fa-paper-plane 
            | Socializar todas las recomendaciones antes y repetirlas durante algunos momentos en el desarrollo del recorrido. 
          li
            i.fas.fa-paper-plane 
            | Desarrollar una metodología para el recorrido, para que el turista tenga la oportunidad de vivir una experiencia significativa.  
          li
            i.fas.fa-paper-plane 
            | Innovar en la manera de presentación del recorrido, lo que va a permitir generar mayor interés durante la actividad.  
          li
            i.fas.fa-paper-plane 
            | Generar expectativas frente al tema del recorrido, pero no a los atractivos, ya que en ocasiones no se puede acceder a los mismos.
          li
            i.fas.fa-paper-plane 
            | No emplear superlativos para promocionar o al ejecutar el recorrido.
          li
            i.fas.fa-paper-plane 
            | No hacer comparaciones durante el recorrido de otras experiencias vividas de la misma actividad.
          li
            i.fas.fa-paper-plane 
            | Hable con la verdad durante el desarrollo del recorrido  (Servicio Nacional de Turismo, SENATUR, 2016).   
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2 Protocolos para el servicio guiado   

    p.mb-4 Por antecedentes históricos, las reglas y costumbres protocolarias sirven para normalizar cualquiera de las instituciones y gobiernos o las personas mismas que los constituyen. Todo el mundo sabe también que el protocolo determina la precedencia, así́ como el tratamiento y la equivalencia entre autoridades gubernamentales, diplomáticas, religiosas, militares, pero también en el sector y empresas privadas, en este caso en el sector turístico y hotelero, que es un gremio especialmente particular.

    .row.align-items-center.mb-4
      .col-lg-6
        p.mb-4 El sector turístico es reconocido por poner en práctica, reglas y métodos diferenciadores, conocidos como valor agregado al momento de entrar en contacto con clientes y actores relacionados con la actividad turística.
        .bloque-texto-c.color-acento-contenido.opa.p-4
          i.fas.fa-quote-right
          p.mb-0 <b>Un protocolo se define como el conjunto de reglas que se deben seguir en el cumplimiento del ejercicio del guionaje turístico. El momento de la ejecución es aquel donde el guía tiene el contacto con el turista y es allí donde se ponen en práctica los pasos o requisitos a realizar durante la apertura del servicio hasta la finalización de este.</b>
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img6.jpg', alt='')

    .row.align-items-center.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img7.jpg', alt='')
      .col-lg-6
        p.mb-4 Con el fin de realizar el procedimiento de apertura y cierre en la atención y servicio al cliente, es importante diseñar listas de chequeo que permitan realizar el seguimiento a cada uno de los pasos involucrados en la prestación del servicio en la guianza turística.  
        p.mb-0 En suma, el guía de turismo debe tener claro que desde la contratación de sus servicios ya sea directo con el cliente o a través de un contratante como la agencia de viajes, se verifica que conozca e interprete los protocolos de servicio al cliente; es el guía quien solicita a la agencia de viajes las listas de chequeo de la empresa, o si no, elabora sus propios protocolos de servicio. En estos casos, debe cumplir con las normas generales de la prestación del servicio.

    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4 Un protocolo de atención es un documento que expresa un proceso determinado de la empresa, definiendo la unidad técnica, y por ende la forma de actuar homogénea frente a algo. Los protocolos de servicio fortalecen la imagen de la empresa, garantizan una prestación del servicio con calidad, generan confianza y lealtad con los clientes y crean sentido de pertenencia a los equipos de trabajo.
        p.mb-0 Según la Real Academia Española, RAE, un protocolo es <b> <FONT COLOR="#FD6300"> es “una secuencia detallada de un proceso de actuación científica, técnica, médica, etc”. </FONT> </b> Para la guianza proporciona los parámetros a seguir en recorridos turísticos naturales o culturales, en el cumplimiento de la labor. Los pasos para acoplar los protocolos en el servicio son (ver figuras 2 y 3):
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/8.png', alt='')

    .row.justify-content-center.mb-0
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Pasos para apropiar protocolos
      .col-lg-10
        figure.mb-4
          img(src='@/assets/curso/tema1/vec2.svg', alt='')

    .row.justify-content-center.mb-0
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3
          span Protocolos relacionados con el servicio guiado

      .col-lg-12
        figure
          img(src='@/assets/curso/tema1/vec3.svg', alt='')
        figcaption.mb-4 Nota. Adaptado de Norma Técnica Sectorial para Guías de turismo 012.
    p.mb-4 Clasificar los protocolos necesita de herramientas de organización de la información, a continuación, se presenta un modelo (ver tabla 2):

    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2  
          span Ejemplo formato para la clasificación y diseño de los protocolos para la guianza
      .col-lg-12
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th.ancho Criterios de desempeño 
                th.ancho1 Descripción de cómo se presenta (Protocolo)
                th Cumple 
                th No cumple 
                th Observaciones
            tbody
              tr
                td
                  p.text-center.mb-4 Antes
                  p.text-center.mb-0 Informa sobre la indumentaria necesaria para la ruta.
                td.p-4 Por medio de un correo o mensaje de texto a los turistas se enlistará cuál es la indumentaria necesaria para el recorrido. 
                td
                td
                td
              tr
                td
                  p.text-center.mb-4 Durante
                  p.text-center.mb-0 Comunica aspectos generales del destino: número de habitantes, ubicación geográfica y su clima.
                td.p-4 El guion contiene la información de los datos geográficos de ubicación, direcciones exactas, mapas del recorrido y el clima para informar a los turistas.  
                td
                td
                td
              tr
                td
                  p.text-center.mb-4 Después
                  p.text-center.mb-0 Realiza una retroalimentación con el usuario sobre el desarrollo del programa y la prestación del servicio.
                td.p-4 Se envía la encuesta electrónicamente al final del recorrido. 
                td
                td
                td
    p.mb-4 Este formato funciona como verificación y permite al guía, planear el servicio y luego hacer el seguimiento de la efectividad de dicha planeación. 

    .row.align-items-center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img8.jpg', alt='')
      .col-lg-8
        p.mb-4 De otra parte, en Colombia hay servicios especializados, que tienen sus propias normas que detallan los protocolos. Estos se están actualizando cada cinco (5) años, para el año 2021 están vigentes las que se enuncian: 
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane 
            | NTS-GT005 NTS-GT005 Conducción de grupos en recorridos ecoturísticos.
          li
            i.fas.fa-paper-plane 
            | NTS-GT008 Recorridos guiados en museos.
          li
            i.fas.fa-paper-plane 
            | NTS-GT009 Conducción de grupos en recorridos de alta montaña.
          li
            i.fas.fa-paper-plane 
            | NTS-GT010 Prestación del servicio de guianza de acuerdo con lo requerido por el pasajero de cruceros, sujeto a un itinerario de llegada y salida del barco. 
          li
            i.fas.fa-paper-plane 
            | NTS-GT011 Conducción de grupos en recorridos de cabalgata. Es un deber conocer esta normativa, por eso se invita a revisarlas en línea en el siguiente enlace.

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-1.col-sm-1.col-lg-1
              span
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/vec4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normatividad
                  p.text-small Es un deber conocer esta normativa, por eso se invita a revisarlas en línea en el siguiente enlace.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href=" https://portucolombia.mincit.gov.co/noticias/viceministerio-de-turismo-direccion-de-analisis-se#gsc.tab=0 " target="_blank")
                    span Ir al enlace
                    i.fas.fa-file-download
    .row.align-items-center.mb-4
      .col-lg-8
        .cajon.color-secundario(style='background-color: #E2EBDE').p-4
          p.mb-0 Las Normas Técnicas Sectoriales son los parámetros especializados que definen el paso a paso, condiciones de calidad y pertinencia de las acciones de profesionales del turismo. Se proyectan desde la política pública con la participación de los sectores, empresas, educación y capacitación, y tienen como función orientar y parametrizar de forma específica los procesos y procedimientos laborales de prestadores de servicios.
        p.mb-4 Desde las normas de seguridad y medio ambiente hasta las normas sectoriales relacionadas con la prestación del servicio de guianza turística, se establecen orientaciones que el guía de turismo debe tener en cuenta para darle calidad al servicio guiado al elaborar los planes de acción y de contingencia de acuerdo con los objetivos establecidos. 
        p.mb-4 La normatividad en general es materia de estudio para el guía, entendiendo que al ser un conjunto de normas algunas legales, sectoriales o de desarrollo, definen, regulan o se rige determinada materia o actividad incluido el servicio.
        p.mb-4 Toda actividad humana relacionada con el trabajo necesita regirse por procesos y procedimientos; los procesos organizan los momentos, tiempos, acciones relacionadas con la labor que llevan al cumplimiento de objetivos. Los procedimientos, constituyen los métodos y técnicas que  identifican el paso a paso e integración de momentos y acciones de individuos bajo unos propósitos de orden, base legal y alcance, que hacen parte de la estructuración y metas de la organización, que identifica a la empresa y refleja la cultura de hacer las cosas.
        p.mb-0 A continuación, se presentan procesos y procedimientos del servicio prestado por un guía(ver tabla 3):
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img9.jpg', alt='')
    
    .row.justify-content-center.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3
          span Ejemplos procesos y procedimientos
      .col-lg-12
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Proceso
                th Procedimiento
            tbody
              tr
                td Verificación anticipada documentos de viajeros 
                td Revisar seguros y condiciones de salud, pago, servicios especiales de viajeros según contrato de servicios.  Uso de lista de chequeo.
              tr
                td Control de inventario de materiales, equipos e insumos de recorrido
                td Registro de inventario, actualización de cantidades y calidad de materiales, equipos e insumos para las actividades.
              tr
                td Evaluación posterior al servicio prestado en recorrido
                td Diseño o análisis de instrumentos.  Recolección de información sobre satisfacción del servicio prestado. Sistematización y análisis de resultados.  Presentación de informe.  Solución a situaciones.  Plan de mejora.  
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3. Marco de la actuación del guía en Colombia

    .tarjeta.colordesborde.p-3.mb-4
      .row.align-items-center
        .col-lg-1
          figure
            img(src='@/assets/curso/tema1/vec5.svg', alt='')
        .col-lg-11
          p.mb-0 El guía de turismo enmarca sus acciones en una normativa internacional denominada:  Código ético mundial para el turismo que impacta el contexto normativo nacional.

    .row.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/vec6.svg', alt='')
      .col-lg-7
        p.mb-4 En el código de ética de turismo se expone el derecho al turismo y a la libertad de desplazamiento turístico con el fin de promover el turismo equitativo, responsable y sostenible, en beneficio mutuo de todos los sectores de la sociedad en un entorno mundial; su importancia está descrita en los fines:
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane 
            | Fortalecer una cultura ética y de servicio.  
          li
            i.fas.fa-paper-plane 
            | Permitir un diálogo reflexivo y solidario entre los miembros de una organización.   
          li
            i.fas.fa-paper-plane 
            | Ayudar a priorizar principios y valores que se dirijan hacia la humanización de los recursos existentes.    
          li
            i.fas.fa-paper-plane 
            | Diferenciar entre lo correcto y lo incorrecto.   
          li
            i.fas.fa-paper-plane 
            | Tener en consideración las reglas de algún lugar en específico. 
          li
            i.fas.fa-paper-plane 
            | Saber sobre las obligaciones en determinados lugares.      
          li
            i.fas.fa-paper-plane 
            | Tener una buena interacción con las personas alrededor.
    p.mb-4 El Código Ético Mundial para el Turismo presenta principios que orientan a los principales actores del desarrollo turístico, está dirigido a la gobernabilidad, sector, empresas turísticas, comunidades receptoras y a turistas por igual. Su objetivo es maximizar los beneficios del sector, analizando y previendo las consecuencias negativas para el medio ambiente, el patrimonio cultural, las sociedades de alrededor del mundo y la práctica de un turismo sin responsabilidad, ante todo social.   

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imgtext.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 TAprobado en 1999 por la asamblea general de la Organización Mundial del Turismo, fue reconocido por las Naciones Unidas que explícitamente acompaña y apoya a la OMT, a promover el cumplimiento eficiente de las disposiciones escritas en este documento.  El código carece de jurisprudencia, es decir, no relaciona castigo alguno y es un mecanismo de aplicación voluntaria, con reconocimiento del papel del Comité Mundial de Ética del Turismo, si las partes pueden remitir cualquier cuestión relativa a la aplicación e interpretación del documento especialmente cuando hay incumplimiento.

    p.mb-4 Con tan sólo diez artículos el código cubre los componentes de las estructuras relacionadas con el turismo en cuanto a lo económico, social, cultural y ambiental de los viajes:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 1
              p Contribución del turismo al entendimiento y al respeto mutuo entre hombres y sociedades.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 2
              p El turismo, instrumento de desarrollo personal y colectivo.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 3
              p El turismo, factor de desarrollo sostenible.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 4
              p El turismo, factor de aprovechamiento y enriquecimiento del patrimonio cultural de la humanidad.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 5
              p El turismo, actividad beneficiosa para los países y las comunidades de destino.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 6
              p Obligaciones de los agentes del desarrollo turístico.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 7
              p Derecho al turismo.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 8
              p Libertad de desplazamiento turístico.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 9
              p Derechos de los trabajadores y de los empresarios del sector turístico.

      .col-md-12.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/tema1/avatar7.svg' alt='AvatarTop')
          .tarjeta.color-ama2
            .p-4
              h4.text-center Artículo 10
              p Aplicación de los principios del Código Ético Mundial para el Turismo.  (Organización Mundial del Turismo, s.f.)

    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-0 En Colombia, el guía de turismo cuenta con un código de ética emanado de la interpretación de la normativa internacional, el cual comprende las reglas de juego claras en el ejercicio de la profesión. Para ello, se dictó el Código de Ética del Guía de Turismo, mediante la resolución 221 del 8 de abril de 1999, por el cual se deroga la resolución 002 del 10 de octubre de 1997 y se dicta el código de ética  profesional  del  guía  de  turismo  cuya  finalidad  es orientar a partir de  los  parámetros de  la  legislación  turística  de  país,  constituyéndose  en  un  conjunto  de  reglas  de comportamiento  que,  aplicadas  a  la  profesión,  inducen  a  los  guías  de  turismo a ejecutar sus  funciones  y  a  evitar  cualquier  acción  negativa  que  vaya  en detrimento de la profesión, de sus colegas o de la nación en general. Detalla las funciones de guía y otros aspectos como deberes y obligaciones, prohibiciones a los guías de turismo, principios de lealtad y respeto, procedimientos para infracción y sanciones.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img10.jpg', alt='')
    p.mb-4 En el año 2016, la resolución 135 modificó el Código de ética del guía, algunos aspectos a resaltar son: 

    .row.justify-content-center.mb-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.tarjetaver.p-4
          .row.justify-content-center.mb-3
            .col-7
              .tarjeta.coloravatar.p-4
                figure
                  img(src='@/assets/curso/tema1/vec7.svg', alt='Texto que describa la imagen')
          h4.text-center Principios
          p.text-small Honestidad, lealtad y respeto.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.tarjetaver.p-4
          .row.justify-content-center.mb-3
            .col-7
              .tarjeta.coloravatar.p-4
                figure
                  img(src='@/assets/curso/tema1/vec8.svg', alt='Texto que describa la imagen')
          h4.text-center Deberes
          p.text-small Actualizar el RNT, poseer las competencias lingüísticas en el idioma que se requiera.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.tarjetaver.p-4
          .row.justify-content-center.mb-3
            .col-7
              .tarjeta.coloravatar.p-4
                figure
                  img(src='@/assets/curso/tema1/vec9.svg', alt='Texto que describa la imagen')
          h4.text-center Reportes
          p.text-small Poner en conocimiento de las autoridades obstáculos o dificultades durante la prestación del servicio.

    .row.justify-content-center.mb-4  
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.tarjetaver.p-4
          .row.justify-content-center.mb-3
            .col-7
              .tarjeta.coloravatar.p-4
                figure
                  img(src='@/assets/curso/tema1/vec10.svg', alt='Texto que describa la imagen')
          h4.text-center Actualización
          p.text-small Mantenerse actualizado de las novedades legales y regulares de su profesión. 

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.tarjetaver.p-4
          .row.justify-content-center.mb-3
            .col-7
              .tarjeta.coloravatar.p-4
                figure
                  img(src='@/assets/curso/tema1/vec11.svg', alt='Texto que describa la imagen')
          h4.text-center Tarjeta profesional de guía de turismo
          p.text-small Portar el documento personal e intransferible, en caso de pérdida es obligatoria la denuncia.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.tarjetaver.p-4
          .row.justify-content-center.mb-3
            .col-7
              .tarjeta.coloravatar.p-4
                figure
                  img(src='@/assets/curso/tema1/vec12.svg', alt='Texto que describa la imagen')
          h4.text-center Sanciones
          p.text-small Suspensión el RNT, procesos disciplinarios tendrán libertad probatoria

    .row.align-items-center.mb-4 
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img11.jpg', alt='Texto que describa la imagen')
      .col-lg-7
        p.mb-4 Un modificación muy importante que se debe tener siempre presente es en relación a las prohibiciones del Código de Ética:
        .bloque-texto-c.color-acento-contenido.opa.p-4
          i.fas.fa-quote-right
          p.mb-0 <b>Emplear recursos o mecanismos diferentes a sus capacidades profesionales, ejercer su actividad fuera del ámbito de su especialidad, suministrar información errónea, poner en riesgo la integridad física, moral, económica y psicológica del turista o pasajero a cargo, subestimar enfermedades o dolencias de los turistas, coaccionar los turistas a realizar compras.</b>
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      .h2 1.4. Buenas prácticas para el guía de turismo

    .row.mb-4
      .col-lg-12
        .bloque-texto-g.fondo1.p-3.p-sm-4.p-md-4.my-4.otrobloque
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.py-5.px-4
            p Una buena práctica se define como los medios ideales para ejecutar un proceso, implementándolo en todas y cada una de las áreas de gestión y operación del prestador de servicios turísticos -PST-; permite garantizar que la ejecución se desarrolle con un grado de calidad de excelencia produciendo el menor impacto negativo posible, es decir sin dejar huella, lo cual mejora la imagen de prestador frente al cliente, frente a su relación son el entorno y por ende el desempeño socioeconómico (Ministerio de Comercio y Colombia Productiva. 2021)(ver figura 4).   
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4
          span Buenas prácticas
      .col-lg-10
        figure.mb-2
          img(src='@/assets/curso/tema1/info2.svg', alt='')
          figcaption.mb-4 Nota. Cartilla de buenas prácticas de sostenibilidad para empresarios turísticos de IDT y Alcaldía Local de Teusaquillo (s.f.).

    .row.align-items-center.mb-4 
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')  
      .col-lg-6
        p.mb-4 Las buenas prácticas en el turismo impactan las acciones del guía favoreciendo por ejemplo las de cultura y visitas en recorridos que se hacen a través de observaciones como:
        AcordionA(tipo="b" clase-tarjeta="color-ver")
          .row(titulo="Limitar el número de visitas del recurso")
            .col-md-12.mb-4.mb-md-0
              p La visita a una ermita o a un espacio natural protegido, puede verse afectada por un número elevado de visitantes al año, por eso, es importante controlar la afluencia de visitantes, va a permitir alargar la vida de este.
          
          .row(titulo="Realizar reproducciones de recursos únicos")
            .col-md-12.mb-4.mb-md-0
              p La visita a una cueva con restos prehistóricos o una pieza arqueológica puede verse afectada por un exceso de visitas, la reproducción de algunos espacios o bienes permite impide limitar el número de visitas y alargar su vida.
          
          .row(titulo="Mantener las tradiciones locales tal y como se crearon")
            .col-md-12.mb-4.mb-md-0
              p Evitar cambiar la fecha a otra con mayor afluencia de visitantes donde la tradición pierda el motivo por el que fue creada.
    p.mb-4 También existe normativa de las buenas prácticas en el turismo cultural y naturaleza, se rescatan los siguientes principios:

    .row.align-items-center.mb-4 
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/vec13.svg', alt='Texto que describa la imagen')    
      .col-lg-8
        ul.lista-ul--color
          li
            i.fas.fa-paper-plane 
            | Elabore un plan de acción y respaldarlo.
          li
            i.fas.fa-paper-plane 
            | Enliste la totalidad de elementos necesarios para el desarrollo de la actividad de manera adecuada
          li
            i.fas.fa-paper-plane 
            | Verifique que se cuenta con los permisos y autorizaciones.
          li
            i.fas.fa-paper-plane 
            | Manténgase informado sobre los materiales y propiedades físicas y químicas de los productos a utilizar en las actividades.
          li
            i.fas.fa-paper-plane 
            | Cuente con una estrategia clara para minimizar la compra de provisiones e insumos.
          li
            i.fas.fa-paper-plane 
            | Identifique las relaciones positivas de la población local con el ambiente.
          li
            i.fas.fa-paper-plane 
            | Vista profesionalmente.
          li
            i.fas.fa-paper-plane 
            | Defina responsabilidades específicas.
          li
            i.fas.fa-paper-plane 
            | En el desarrollo de los programas y otros vincule intérpretes.
          li
            i.fas.fa-paper-plane 
            | Prohíba explícitamente el ESCNNA Explotación Sexual Comercial de Niñas, y Adolescentes (Ministerio de Comercio & Colombia Productiva, 2021).   Mayor información Cartilla anexo 1 y en el material complementario.

</template>

<script>
import Muestras from '../components/Muestras'
import Separador from 'ecored-base-pkg/src/components/Separador.vue' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras,
    Separador,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
