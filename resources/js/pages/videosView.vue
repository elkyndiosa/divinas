<template >
<v-container fluid>
        <v-row justify="center">
            <h4 class="text-h4">Mis Videos</h4>
            <v-col cols="12">
                <vue-dropzone
                    ref="myVueDropzone"
                    id="dropzone"
                    :options="dropzoneOptions"
                    @vdropzone-success="cleanFiles()"
                ></vue-dropzone>
            </v-col>
        </v-row>
        <v-row justify="center" v-if="busy">
            <v-col cols="12" sm="8" md="6">
                <v-progress-linear
                    color="primary"
                    indeterminate
                ></v-progress-linear>
            </v-col>
        </v-row>
        <v-row justify="center" v-else>
            <v-col cols="6" sm="4" md="2" v-for="(v, i) in list" :key="i">
                <v-hover v-slot:default="{ hover }">
                    <v-card @click="toPlay(v)" height="200" class="portrait" style="cursor: pointer;">
                        <v-img
                            :src="'/uploads/images/'+v.image_path+'.png'"
                            height="100%"
                            width="100%"
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
        <VideoPlayer @close="showing = false" :showing="showing" :item="selected" />
  </v-container>
</template>
<script>
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    vueDropzone: vue2Dropzone,
    VideoPlayer: () => import(
        /*webpackChunckName: "VideoPlayerComponent"*/
        '../components/VideoPlayer.vue'
    )
  },
  data() {
    return {
      dropzoneOptions: {
          url: '/api/upload/video',
          thumbnailHeight: 150,
          maxFilesize: 5,
          headers: { "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content},
          dictDefaultMessage: "Click para buscar un video o arrastre aqui"
      },
      list: [],
      busy: false,
      showing: false,
      selected: {},
    };
  },
  created() {
      this.getVideos()
  },
  watch: {

  },
  destroyed() {},
  computed: {
      player() {
        let player = this.$refs.video_player.player
        return player
      }
  },
  methods: {
    cleanFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
      this.getVideos()
    },
    async getVideos() {
        this.busy = true
        let url = '/api/user-videos'
        try {
            let response = await axios.get(url)
            this.list = response.data.list
        } catch (error) {
            ErrorHandler.render(error)
        }
        this.busy = false
    },
    toPlay(v) {
        this.selected = v
        this.$nextTick(() => {
            this.showing = true
        })
    }
  },
};
</script>
<style>
</style>
