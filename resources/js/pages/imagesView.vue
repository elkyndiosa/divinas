<template >
  <div class="mt-16 pt-16 d-flex justify-center flex-wrap">
    <h4 class="text-h4 text-center font-weight-bold">Mis Imagenes</h4>
    <v-col cols="12">
      <vue-dropzone 
      ref="myVueDropzone" 
      id="dropzone" 
      :options="dropzoneOptions"
      @vdropzone-success="cleanFiles()"
      ></vue-dropzone>
    </v-col> 
    <transition name="slide-image" mode="out-in">
      <gallery dash="true" :key="galleryKey" :userData="user" search="allUser"></gallery>
    </transition>
  </div>
</template>
<script>
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    Gallery: () => import('../components/publication/ImageComponent.vue'),
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
          url: '/api/upload/image',
          thumbnailHeight: 150,
          maxFilesize: 2,
          headers: { "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content},
          dictDefaultMessage: "Click para buscar una imagen o arrastre aqui"
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
      this.galleryKey += 1;
    },
    
  },
};
</script>
<style>

</style>