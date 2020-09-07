<template >
   <v-app>
    <v-main class="mt-12 container-global ma-auto">
      <v-container class="full-height d-flex justify-center flex-wrap align-center" fluid>
        <v-col cols="12" md="6" class="mt-6">
          <v-img
            v-if="images.length > 0"
            :src="'uploads/images/'+images[0]"
            max-height="500px"
            class="rounded-lg"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="black--text text-capitalize text-left text-h5 font-weight-bold mt-6">{{data.publication.name}} - {{data.publication.years}}</div>
          <div class="grey--text darken-2 text-capitalize text-left text-subtitle-2 font-weight-light mb-6">Publicacion {{moment(data.publication.created_at).startOf('hour').format('DD-MMMM-YYYY')}}</div>

          <p class="black--text text-none text-justify text-body-1" style="line-height: 25px;">{{data.publication.description}}</p>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="ml-4" color="red" dark ><a :href="'tel:3145780315'" class="white--text">Llamar</a></v-btn>
            <v-btn @click="redirectWhatsapp(data.publication.whatsapp)" class="ml-4" color="success">Whatsapp</v-btn>
          </v-col>

        </v-col>
        <v-row style="width: 100%" >
          <table-data :userDataTable="data.publication" :times="data.times" style="width: 100%" ></table-data>
        </v-row>
        <v-row style="width: 100%" >
          <v-col cols="12">
            <h4 class="text-center">Mis servicios</h4>
          </v-col>
          <v-col cols="12">
            <v-chip-group
              column
              active-class="primary--text"
            >
              <v-chip v-for="(item, index) in data.services" :key="index" disabled>
                 {{item.name}}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center pb-0">
            <v-btn @click="media = 'fotos'" elevation="0" :class="media == 'fotos' ? 'red white--text' : '' " color="transparent">Fotos</v-btn>
            <v-btn @click="media = 'videos'" elevation="0" :class="media == 'videos' ? 'red white--text' : '' " color="transparent">Videos</v-btn>
          </v-col>
          <v-col cols="12">

          <transition name="slide-image" mode="out-in">
            <gallery v-if="media == 'fotos'" :userData="data.publication" :uuid="data.user.uuid"  search="publication"></gallery>
          </transition>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import moment from 'moment'
Vue.prototype.moment = moment
export default {
  props: ["uuid"],
  components:{
    Gallery: () => import('../components/publication/ImageComponent.vue'),
    TableData: () => import('../components/publication/TableInfo.vue'),
  },
  data() {
    return {
      media: 'fotos',
      data: {
            publication: {
                imgages_path: null
            },
            user: {
                uuid: ""
            }
      }
    };
  },
  created() {
    this.getPublication()
  },
  destroyed() {},
  computed: {
    getUuid(){
      return ;
    },
    images() {
        if(!this.data.publication.imgages_path) {
            return []
        }
        return JSON.parse(this.data.publication.imgages_path)
    }
  },
  watch: {
  },
  methods: {
    redirectWhatsapp(whatsapp){
      window.open("https://api.whatsapp.com/send?phone="+whatsapp+"&text=Hola,%20vi%20tu%20anuncio%20en%20www.divinasprepagos.com,%20quisiera%20conocerte!", '_blank');
      let url = '/api/increment/clickwatsapp/'+this.publication.user.uuid;
      axios.get(url).then(response =>{
        console.log(response)
      }).catch(rerro => {
        console.log(error)
      })
    },
    getPublication(){
      let url = "/api/publication/"+this.uuid;
      axios.get(url).then(response => {
        this.data= response.data;
      }).catch(error => {
        console.log(error)
      })

    }
  },
};
</script>
<style>

</style>
