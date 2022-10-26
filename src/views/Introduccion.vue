<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Una bienvenida al guionaje de grupos que es la principal parte del trabajo como guía tal como se puede revisar en el siguiente video:
    
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/OkpCtbomsKo" title="Guionaje de grupos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

   
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
