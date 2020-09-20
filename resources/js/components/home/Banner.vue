<template>
  <base-card dark>
    <v-img
      src="/images/banner2.jpg"
      class="grey lighten-2"
      width="100%"
    >
      <v-row
        class="fill-height pa-3 px-md-16"
        align="center"
      >
        <v-col
          cols="12"
          md="6" 
          class="d-flex justify-start flex-wrap black--text"
        >
          <h1 class="text-primary-headers" style="width: 100%">
            Las mejores prepagos y escorts de Medellin
          </h1>

          <div class="subheading text-capitalize pl-2 mb-4" style="width: 100%">
            Vive los mejores momentos con las acompañantes de DivinasPrepagos.com
          </div>

          <v-text-field
          v-model="search"
          label="Buscar"
          type="search"
          single-line
          filled
          hide-details
          dense
          light
          append-icon="search"
          style="max-width: 300px;"
          class=""
        ></v-text-field>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>

  export default {
    components:{
      BaseCard: () => import('../base/Card'),
    },
    name: 'HomeBanner',
    data: () => ({
      search: ""
    }),
  }
</script>
