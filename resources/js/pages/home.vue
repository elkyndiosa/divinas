<template >
  <div class="mt-16">
      <banner />
    <articles @addFavorities="addFavorities">
    </articles>
    <about />
    <!-- <subscribe /> -->
    <!-- <social /> -->
    <footer-component/>
  <v-dialog
      v-model="alert"
      scrollable 
      persistent 
      max-width="600"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2" fixed>
          Politicas de Pivacidad
        </v-card-title>
        <v-card-text class="mt-4">
          <p>Tengo más de 18 años y tengo capacidad legal para visualizar la publicidad ofrecida en esta página.</p>
          <p>El usuario de la página de divinasprepago.com  entiende y acepta la responsabilidad por sus propias acciones y conductas, así como las de sus hijos menores transgresores por su no diligencia y cuido.</p>
          <p>Ingreso a la página de divinasprepago.com por mi decisión voluntaria y personal porque quiero ver la publicidad que en ella se publica y con mi declaración de voluntad, no considero ofensivas o lesivas las imágenes o mensajes que pudiera encontrar en la página de divinasprepago.com</p>
          <p>Soy exclusivamente responsable y libero a la página de divinasprepago.com de toda responsabilidad relacionada con la exactitud, veracidad, fidelidad o legalidad del contenido de la publicidad.</p>
          <p>Los creadores y los propietarios de la página de divinaprepagos.com, aportan las normas aquí señaladas, liberándose así como consecuencia de acción u omisión de los usuarios, de toda obligación y/o responsabilidad legal.</p>
          <p>Usted está aceptando completamente estos términos, siendo la única prueba necesaria para ello su acceso, haciendo click aquí: </p>
       </v-card-text>
        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn
            dark
            class="primary text-none text-body-2"
            text
            @click="alert = false"
          >
            Acepto Terminos
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


</div>
</template>
<script>
export default {
  components:{
      Banner: () => import('../components/home/Banner.vue'),
      About: () => import('../components/home/About.vue'),
      Articles: () => import('../components/home/Articles.vue'),
      // Social: () => import('../components/home/Social.vue'),
      // Subscribe: () => import('../components/home/Subscribe.vue'),
      FooterComponent: () => import('../components/home/Footer.vue'),
  },
  data() {
    return {
      alert: true
    };
  },
  created(){},
  destroyed(){},
  computed: {},
  methods: {
    addFavorities(uuid){
        this.$store.state.favorities.push(uuid);
        const parsed = JSON.stringify(this.$store.state.favorities);
        localStorage.favorities = parsed;
        api/increment/favorites/{uuid} 
        let url = '/api/increment/favorites/'+this.data.user.uuid;
      axios.get(url).then(response =>{
        console.log(response)
      }).catch(rerro => {
        console.log(error)
      })
    }
    
  },
};
</script>
<style>
</style>