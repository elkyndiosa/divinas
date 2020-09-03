<template>
  <div class="full-width mt-3 m-auto d-flex justify-center flex-wrap">
    <v-col cols="12" v-if="images.length >= 1" class="d-flex justify-center flex-wrap" style="max-width: 100%" >
      <v-col cols="6" sm="4" md="3" lg="2" v-for="(item, index) in images" :key="index">
        <v-card
          class="portrait"
          :img="'/uploads/images/'+item.path"
          height="150"
          @click="openCarousel(index)"
        ></v-card>
        <v-col cols="12" class="d-flex justify-center" v-if="user != null && user.id == item.user_id">
          <v-btn small color="primary" @click="destroy(item.uuid)" style="margin-bottom: 15px;">
            Eliminar
            <v-icon small class="material-icons">delete</v-icon>
          </v-btn>
        </v-col>
      </v-col>
    </v-col>

    <v-dialog v-model="dialog" max-width="700px">
      <v-card elevation="0" width="100%">
        <v-carousel
          hide-delimiter-background
          delimiter-icon="minus"
          height="400"
          v-model="indexImage"
        >
          <v-carousel-item v-for="(slide, i) in imagesArray" :key="i" :src="'/uploads/images/'+slide"></v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-list-item v-if="userData">
            <v-list-item-avatar>
              <v-img  :src="'/uploads/images/'+userData.image_profile"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{userData.name}}</v-list-item-title>
              <v-list-item-subtitle>Disponible</v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-btn @click="redirectWhatsapp(userData.whatsapp)" class="ml-4" color="success">Whatsapp</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["search", "uuid", "userData", "dash"],
  data() {
    return {
      images: [],
      imagesArray: [],
      dialog: false,
      indexImage: 0,
    };
  },
  mounted() {
    
    switch (this.search) {
      case "allUser":
        this.getImages();
        break;

      case "publication":
        this.getImagesPublication();
        break;

      default:
        break;
    }
  },
  computed: {
   
  },
  methods: {
    openCarousel(index) {
      this.indexImage = index;
      this.dialog = true;
    },
    redirectWhatsapp(whatsapp){
      window.open("https://api.whatsapp.com/send?phone="+whatsapp+"&text=Hola,%20vi%20tu%20anuncio%20en%20www.divinasprepagos.com,%20quisiera%20conocerte!", '_blank');
    },
    getImagesPublication() {
      setTimeout(() => {
        let url = "/api/images/publication/" + this.uuid;
        axios
          .get(url)
          .then((response) => {
            this.images = response.data;
            this.getImagesArray(this.images)
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    },
    getImages() {
      var url = "/api/images";
      axios
        .get(url)
        .then((response) => {
          this.images = response.data;
          this.getImagesArray(this.images)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getImagesArray(objectImage) {
      for (let index = 0; index < objectImage.length; index++) {
        this.imagesArray.push(objectImage[index].path)
      }
    },
    destroy(uuid) {
      var url = "/api/destroy/images/" + uuid;
      axios
        .get(url)
        .then((response) => {
          for (let index = 0; index < this.images.length; index++) {
            if (this.images[index].uuid == uuid) {
              this.images.splice(index, 1);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
</style>