<template>
    <v-container>
        <v-row>
            <v-col cols="12" v-if="busy">
                <v-progress-linear
                    indeterminate
                    color="primary"
                ></v-progress-linear>
            </v-col>
            <v-col cols="12" v-if="images.length >= 1">
                <v-row justify="center">
                    <v-col cols="6" sm="4" md="3" lg="2" v-for="(item, index) in images" :key="index">
                        <v-card
                            class="portrait"
                            :img="'/uploads/images/'+item.path"
                            height="150"
                            @click="openCarousel(index)"
                        >

                        </v-card>
                        <v-btn
                            v-if="user != null && user.id == item.user_id"
                            small
                            class="my-4"
                            color="primary"
                            @click="destroy(item.uuid)"
                            :disabled="busy"
                            block
                        >
                            Eliminar
                            <v-icon small class="material-icons">delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>

            <v-dialog v-model="dialog" width="700">
                <v-card elevation="0" height="600">
                    <v-carousel
                        hide-delimiter-background
                        delimiter-icon="minus"
                        v-model="indexImage"
                    >
                        <v-carousel-item 
                            v-for="(slide, i) in imagesArray" 
                            :key="i" 
                            :src="'/uploads/images/'+slide"
                        >
                        </v-carousel-item>
                    </v-carousel>
                    <v-list two-line>
                        <v-list-item v-if="userData">
                            <v-list-item-avatar>
                                <v-img  :src="'/uploads/images/'+userData.image_profile" contain></v-img>
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
        </v-row>
    </v-container>
</template>
<script>
export default {
  components: {},
  props: ["search", "uuid", "userData", "dash"],
  data() {
    return {
      busy: false,
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
  watch: {
      images(val) {
          this.imagesArray = _.map(val, 'path')
      },
      uuid(val) {
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
    async getImagesPublication() {
        if(this.uuid) {
            this.busy = true
            let url = "/api/images/publication/" + this.uuid;
            try {
                var response = await axios.get(url)
                this.images = response.data;
                console.log(response.data)
            } catch(error) {
                console.log(error);
            }
            this.busy = false
        }
    },
    async getImages() {
        this.busy = true
        let url = "/api/images";
        try {
            let response = await axios.get(url)
            this.images = response.data;
        } catch (error) {
            console.log(error);
        }
        this.busy = false
    },
    async destroy(uuid) {
      this.busy = true
      let url = "/api/destroy/images/" + uuid;
      try {
          let response = await axios.get(url)
          let index = _.findIndex(this.images, {'uuid': uuid})
          this.images.splice(index, 1);
      } catch (error) {
          console.log(error);
      }
      this.busy = false
    },
  },
};
</script>
<style>
</style>
