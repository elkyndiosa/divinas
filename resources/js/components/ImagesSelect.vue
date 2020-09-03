<template>
  <div class="full-width mt-3 m-auto d-flex justify-center flex-wrap">
      <v-card elevation="0" width="100%" class="d-flex justify-center flex-wrap">
        <v-col cols="12" class="text-h6 text-center font-weight-bold">Seleccione una imagen de perfil</v-col>
        <v-col cols="6" sm="4" md="2" v-for="(item, index) in images" :key="index">
          <v-card
            class="portrait"
            :img="'/uploads/images/'+item.path"
            height="100"
            @click="toggle(item.path)"
          >
           <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="item.path == imageSelect"
                color="white"
                size="48"
                v-text="'check_circle_outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
          
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-list two-line>
            <v-list-item class="d-flex justify-center">
              <v-list-item-action>
                <v-btn color="primary" @click="mainMethods()">Guardar</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-card>
      
  </div>
</template>
<script>
export default {
  components: {},
  props:['type'],
  data() {
    return {
      images: [],
      imageSelect: '',
    };
  },
  created() {
    this.getImages();
  },
  methods: {
    toggle(path){
      this.imageSelect = path
    },
    mainMethods(){
      switch (this.type) {
        case 'publication':
          this.selectImagePrimaryPublication()
          break;
       case 'profile':
          this.saveImageProfile()
          break;
      
        default:
          break;
      }
    },
    getImages() {
      var url = "/api/images";
      axios
        .get(url)
        .then((response) => {
          this.images = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveImageProfile(){
      var url = '/api/profile/image/'+this.imageSelect;
      axios.get(url).then(response =>{
        this.updateImageProfile();
      }).catch(error => {
        console.log(error);
      })
    },
    selectImagePrimaryPublication(){
      this.$emit("selectImagePrimaryPublication", this.imageSelect);
    },
    updateImageProfile(){
        this.$emit("updateImageProfile", this.imageSelect);
    }
  },
};
</script>
<style>
</style>