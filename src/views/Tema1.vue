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
    
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.coloroscuroverd(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/flip1.svg')})`}")
            .tarjeta-flip__contenido.coloroscuroverd.p-4.p-xl-4
              h4.text-center Existen alternativas al ”NO”
              p.text-center La responsabilidad de asumir el servicio al cliente es vital, no hay espacio para decir “no es mi trabajo”, los clientes tienen expectativas y el reto continuo es superarlas.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.coloroscuroverd(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/flip2.svg')})`}")
            .tarjeta-flip__contenido.coloroscuroverd.p-4.p-xl-4
              h4.text-center La mejor publicidad es el buen servicio.
              p.text-center La publicidad puede hacer que los clientes lleguen, pero es quien presta el servicio el que se encarga de que regresen o se retiren.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
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
            span Tipos de herramientas para la comunicación interpretativa
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
      .h2 1.1. Herramientas de comunicación interpretativa

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
      .h2 1.2. Comunicación no verbal en el guionaje 


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
