<template>
  <v-container
    id="about"
    tag="section"
  > 
    <base-subheading>Sobre Nosotros</base-subheading>

    <p>
      Divinasprepagos.com es exclusivamente una guía publicitaria de avisos foto-clasificados. Todo el contenido de los avisos foto-clasificados es de única y exclusiva responsabilidad de los anunciantes y de ninguna manera la empresa conoce, participa o interfiere en forma o manera alguna en las actividades que estos realizan.
    </p>
  </v-container>
</template>

<script>
  export default {
    components:{
      BaseSubheading: () => import('../base/Subheading'),

    },
    name: 'HomeAbout',
  }
</script>
