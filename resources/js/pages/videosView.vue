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
            <transition name="slide-image" mode="out-in">
                <videos dash="true" search="allUser"></videos>
            </transition>
        </v-row>
  </v-container>
</template>
<script>
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    Videos: () => import('../components/publication/VideoComponent.vue'),
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
          url: '/api/upload/video',
          thumbnailHeight: 150,
          maxFilesize: 10000,
          headers: { "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content},
          dictDefaultMessage: "Click para buscar un video o arrastre aqui"
      },
      galleryKey: 0
    };
  },
  created() {
  },
  destroyed() {},
  computed: {},
  methods: {
    cleanFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    //   this.galleryKey += 1;
    },

  },
};
</script>
<style>

</style>
