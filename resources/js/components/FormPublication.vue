<template>
  <v-container>
    <v-form>
        <v-container class="py-0">
          <v-row>
            <v-col cols="12" class="ma-auto d-flex justify-center">
            <v-col cols="12" md="6">
              <v-textarea
                class="purple-input"
                label="Sobre mi"
                v-model="data.description"
                value="Soy una persona muy apasionada por complacer..."
              />
            </v-col>
            </v-col>
            <v-col cols="12" class="ma-auto d-flex justify-center">

            <v-col cols="12" md="6" class="ma-auto">
              <v-text-field type="number" v-model="data.price" label="Precio" class="purple-input" />
            </v-col>
            </v-col>
            <v-col cols="12" class="ma-auto">
            <v-col cols="12" md="6" class="ma-auto d-flex justify-center">
              <v-btn color="primary" outlined class="mr-0 text-capitalize" @click="dialogSelectImagePublication = true">
                <v-icon left class="material-icons">cloud_upload</v-icon> Imagen Principal</v-btn>
            </v-col>
            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn color="primary" class="mr-0 text-capitalize" @click="savePublication()">Guardar</v-btn>
            </v-col>
          </v-row>
          <v-dialog
            v-model="dialogSelectImagePublication"
            max-width="800"
          >
          <image-select type="publication" @selectImagePrimaryPublication="selectImagePrimaryPublication">></image-select>
        </v-dialog>
        </v-container>
      </v-form>
  </v-container>
</template>

<script>

export default {
  components: {
    ImageSelect: () => import('../components/ImagesSelect.vue'),

  },
  data: () => ({
    dialogSelectImagePublication:false,
    data:{
      description: '',
      price: '',
      images: [],
      videos: []
    }
  }),
  methods: {
    restartData(){
      this.data={
        description: '',
        price: '',
        images: [],
        videos: []
      }
    },
    savePublication(){
       var url = '/api/publication';
      axios.post(url, this.data).then(response =>{
        this.restartData();
        this.$emit("updatePublication");
      }).catch(error => {
        console.log(error);
      })
    },
    updateImageProfile(){
        this.$emit("updateImageProfile", this.imageSelect);
    },
    selectImagePrimaryPublication(imagenPath){  
      this.data.images = imagenPath;
      this.dialogSelectImagePublication = false;
    }
  },
};
</script>
