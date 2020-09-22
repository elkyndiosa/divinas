<template >
      <v-container fluid>
        <v-row justify-sm="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card>
                    <v-skeleton-loader
                        type="image"
                        class="mx-auto"
                        width="100%"
                        height="100%"
                        v-if="busy"
                    ></v-skeleton-loader>
                    <v-img
                        v-else
                        :src="'/uploads/images/'+image"
                        contain
                        class="white"
                        width="100%"
                        height="400"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular indeterminate color="grey lighten-5">
                                </v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="12" sm="8" md="6" lg="5">
                <v-card flat>
                    <v-card-text v-if="busy">
                        <v-skeleton-loader
                            type="article"
                            class="mx-auto"
                            height="100"
                        ></v-skeleton-loader>
                    </v-card-text>
                    <v-card-text v-else>
                        <v-card-title class="black--text text-capitalize text-h4 font-weight-bold px-0">
                            {{ data.publication.name }}
                        </v-card-title>
                        <v-card-subtitle class="grey--text text-capitalize text-h6 font-weight-bold px-0">
                            Publicacion {{ moment(data.publication.created_at).startOf('hour').format('DD-MMMM-YYYY') }}
                        </v-card-subtitle>
                        <p class="black--text text-none text-justify text-body-1" style="line-height: 25px;">
                            {{ data.publication.description }}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="mx-2 text-capitalize"
                            :disabled="busy"
                            color="blue"
                            :href="'tel:'+data.publication.phone"
                            :dark="!busy"
                        >
                        <v-icon class="material-icons mr-2">phone</v-icon>
                            Llamar
                        </v-btn>
                        <v-btn
                            @click="redirectWhatsapp(data.publication.whatsapp)"
                            class="mx-2 text-capitalize"
                            :disabled="busy"
                            color="success"
                        >
                        <i class="fab fa-whatsapp mr-2 fa-lg"></i>
                            Whatsapp
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card flat>
                    <v-card-title class="text-center text-bold">
                        Servicios
                    </v-card-title>
                    <v-card-text v-if="busy">
                        <v-skeleton-loader
                            ref="skeleton"
                            type="table-thead"
                            class="mx-auto"
                        ></v-skeleton-loader>
                    </v-card-text>
                    <v-card-text v-else>
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
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="10" lg="9">
                <v-card flat>
                    <v-card-text v-if="busy">
                        <v-skeleton-loader
                            type="text"
                            class="mx-auto"
                            height="50"
                            v-for="n in 6"
                            :key="n"
                        ></v-skeleton-loader>
                    </v-card-text>
                    <v-card-text v-else>
                        <table-data :userDataTable="data.publication" :times="data.times"></table-data>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center pb-0">
            <v-btn
                @click="media = 'fotos'"
                class="mx-2"
                :dark="!busy"
                color="red"
                :disabled="busy"
                :text="media != 'fotos'"
                depressed
            >
                Fotos
            </v-btn>
            <v-btn
                @click="media = 'videos'"
                class="mx-2"
                :dark="!busy"
                color="red"
                :disabled="busy"
                :text="media != 'videos'"
                depressed
            >
                Videos
            </v-btn>
          </v-col>
          <v-col cols="12" v-if="busy">
                <v-row justify="center">
                    <v-col cols="6" sm="4" md="3" lg="2" v-for="n in 3" :key="n">
                        <v-skeleton-loader
                            type="image"
                            class="mx-auto"
                            height="50"
                        ></v-skeleton-loader>
                    </v-col>
                </v-row>
          </v-col>
          <v-col cols="12" v-else>
                <v-expand-transition>
                    <v-sheet class="slide-x-transition" v-if="media == 'fotos'" min-height="200">
                        <v-row justify="center">
                            <v-col cols="6" sm="4" md="3" lg="2" v-for="(item, index) in images" :key="index">
                                <v-card
                                    height="150"
                                    @click="openImage(index)"
                                    color="grey lighten-1"
                                >
                                    <v-img
                                        :src="'/uploads/images/'+item"
                                        height="100%"
                                        width="100%"
                                        color="grey lighten-1"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                class="fill-height ma-0"
                                                align="center"
                                                justify="center"
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5">
                                                </v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-dialog v-model="dialog" width="700">
                            <v-card flat>
                                <v-carousel
                                    hide-delimiter-background
                                    v-model="indexImage"
                                >
                                    <v-carousel-item
                                        v-for="(slide, i) in images"
                                        :key="i"
                                        :src="'/uploads/images/'+slide"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                    >
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </v-dialog>
                    </v-sheet>
                    <v-sheet class="slide-x-reverse-transition" v-if="media == 'videos'" min-height="200">
                        <v-row justify="center">
                            <v-col cols="6" sm="4" md="3" lg="2" v-for="(item, index) in data.videos" :key="index">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        color="black"
                                        height="150"
                                        @click="openVideo(item)"
                                    >
                                        <v-img
                                            :src="'/uploads/images/'+item.image_path+'.png'"
                                            height="100%"
                                            width="100%"
                                            color="black"
                                        >
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular indeterminate color="grey lighten-5">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                        <v-overlay absolute :value="hover">
                                            <v-icon class="material-icons" color="primary" large>
                                                play_circle_outline
                                            </v-icon>
                                        </v-overlay>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-expand-transition>
          </v-col>
        </v-row>
        <VideoPlayer @close="video.playing = false" :showing="video.playing" :item="video.data" />
      </v-container>
</template>
<script>
import moment from 'moment'
Vue.prototype.moment = moment
export default {
  props: ["uuid"],
  components:{
    TableData: () => import('../components/publication/TableInfo.vue'),
    VideoPlayer: () => import(
        /*webpackChunckName: "VideoPlayerComponent"*/
        '../components/VideoPlayer.vue'
    )
  },
  data() {
    return {
      media: 'fotos',
      dialog: false,
      indexImage: 0,
      busy: false,
      data: {
            publication: {
                imgages_path: null
            },
            user: {
                uuid: ""
            },
            servicios: [],
            videos: [],
      },
      video: {
          data: {},
          playing: false,
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
        if(!this.data.publication.imgages_path)
            return null
        return JSON.parse(this.data.publication.imgages_path)[0]
    },
    images() {
        if(!this.data.publication.imgages_path)
            return []
        let images = JSON.parse(this.data.publication.imgages_path)
        return images
    }
  },
  methods: {
    openImage(index) {
      this.indexImage = index;
      this.dialog = true;
    },
    redirectWhatsapp(whatsapp){
      window.open("https://api.whatsapp.com/send?phone="+whatsapp+"&text=Hola,%20vi%20tu%20anuncio%20en%20www.divinasprepagos.com,%20quisiera%20conocerte!", '_blank');
      let url = '/api/increment/clickwatsapp/'+this.data.user.uuid;
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
            let name = response.data.publication.name
            this.$nextTick(() => {
                document.title = 'Divinas Prepagos | '+name
            })
        } catch(error) {
            console.log(error)
        }
        this.busy = false
    },
    openVideo(video) {
        this.video.data = video
        this.$nextTick(() => {
            this.video.playing = true
        })
    }
  },
};
</script>
<style>

</style>
