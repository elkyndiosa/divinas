<template >
      <v-container fluid>
        <v-row justify-sm="center" justify-md="end">
            <v-col cols="12" sm="8" md="6">
                <v-card flat>
                    <v-card-text v-if="busy">
                        <v-skeleton-loader
                            ref="skeleton"
                            type="list-item-avatar-two-line"
                            class="mx-auto"
                            height="100"
                        ></v-skeleton-loader>
                        <v-skeleton-loader
                            ref="skeleton"
                            type="paragraph"
                            class="mx-auto"
                            height="100"
                        ></v-skeleton-loader>
                    </v-card-text>
                    <v-card-text v-else>
                        <v-list-item two-line>
                            <v-list-item-avatar height="100" width="100">
                                <v-img
                                    v-if="data.publication.imgages_path"
                                    :src="'/uploads/images/'+JSON.parse(data.publication.imgages_path)[0]"
                                    aspect-ratio="1"
                                    class="grey lighten-2"
                                ></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="black--text text-capitalize text-h4 font-weight-bold">
                                    {{ data.publication.name }}
                                </v-list-item-title>
                                <v-list-item-subtitle class="grey--text text-capitalize text-h6 font-weight-bold">
                                    Publicacion {{ moment(data.publication.created_at).startOf('hour').format('DD-MMMM-YYYY') }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <p class="black--text text-none text-justify text-body-1" style="line-height: 25px;">
                            {{ data.publication.description }}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            class="mx-2"
                            :disabled="busy" 
                            color="red" 
                            :href="'tel:3145780315'"  
                            :dark="!busy"
                        >
                            Llamar
                        </v-btn>
                        <v-btn 
                            @click="redirectWhatsapp(data.publication.whatsapp)" 
                            class="mx-2" 
                            :disabled="busy"
                            color="success"
                        >
                            Whatsapp
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12 " md="10" v-if="busy">
                <v-skeleton-loader

                    ref="skeleton"
                    type="text"
                    class="mx-auto"
                    height="50"
                    v-for="n in 6"
                    :key="n"
                ></v-skeleton-loader>
            </v-col>
            <v-col cols="12" v-else>
                <table-data :userDataTable="data.publication" :times="data.times"></table-data>
            </v-col>
        </v-row>
        <v-row v-if="!busy">
          <v-col cols="12">
            <h4 class="text-center">Mis servicios</h4>
          </v-col>
          <v-col cols="12">
            <v-chip-group
              column
              active-class="primary--text"
              v-if="data.services.length > 0"
            >
              <v-chip v-for="(item, index) in data.services" :key="index" disabled>
                 {{item.name}}
              </v-chip>
            </v-chip-group>
            <v-subheader v-else>
                Sin servicios.
            </v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center pb-0">
            <v-btn @click="media = 'fotos'" elevation="0" :class="media == 'fotos' ? 'red white--text' : '' " color="transparent">Fotos</v-btn>
            <v-btn @click="media = 'videos'" elevation="0" :class="media == 'videos' ? 'red white--text' : '' " color="transparent">Videos</v-btn>
          </v-col>
          <v-col cols="12">

          <transition name="slide-image" mode="out-in">
            <gallery v-if="media == 'fotos'" :userData="data.user" :uuid="data.user.uuid"  search="publication"></gallery>
          </transition>
          </v-col>
        </v-row>
      </v-container>
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
      busy: false,
      data: {
            publication: {
                imgages_path: null
            },
            user: {
                uuid: ""
            },
            servicios: []
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
    image() {
        return this.data.user.image_profile
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
    async getPublication(){
        this.busy = true
        let url = "/api/publication/"+this.uuid;
        try {
            let response = await axios.get(url)
            this.data= response.data;
        } catch(error) {
            console.log(error)
        }
        this.busy = false
    }
  },
};
</script>
<style>

</style>
