<template>
  <v-app>
    <v-row>
      <v-col class="global-404 fill-height d-flex flex-column justify-center white--text align-center flex-wrap ">
        <h1 class="text-center" style="width: 100%; letter-spacing: 20px !important; font-size: 150px">404</h1>
        <h2 class="text-h6 text-center" style="width: 100%">Lo sentimos, la pagina que buscas no existe</h2>
         <v-btn
            dark
            class="primary text-none text-body-2 mt-8"
            text
          >
            Volver a la pagina de inicio
          </v-btn>
      </v-col>
    </v-row>
        
  </v-app>
</template>

<script>

export default {
  data: () => ({}),
};
</script>
<style>
  .global-404{
    background-image: url("/images/404.jpg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
  }
</style>