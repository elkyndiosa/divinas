<template >
  <v-container fluid>
    <v-row justify="center">
        <v-col cols="12" md="4" order="1" order-md="2">
        <v-card
            class="mt-8 elevation-10 pt-16 pb-6 d-flex justify-center ma-auto"
        >
            <v-avatar
            size="170"
            color="red"
            style="position: absolute;top: -50px; border-radius: 50%;"
            class="elevation-10"
            >
            <img
                style="backg"
                v-if="user.image_profile != null"
                :src="'/uploads/images/'+user.image_profile"
                alt="alt"
            />
            <span v-else class="white--text text-h1 text-uppercase">{{user.name[0]}}</span>
            </v-avatar>
            <v-btn
            style="position: absolute; top: 80px; right: 40px;"
            small
            fab
            color="primary"
            @click="dialogSelectImageProfile= true"
            >
            <v-icon color="white" class="material-icons">camera_enhance</v-icon>
            </v-btn>
            <v-card-text class="text-center mt-16">
            <h4 class="text-h3 font-weight-light mb-3 black--text">{{dataUser.name}}</h4>
            <h6
                class="text-subtitle-1 mb-1 grey--text"
            >{{dataUser.nick == null ? 'No has ingresado tu Alias' : dataUser.nick }} (Alias)</h6>
            <p
                class="font-weight-light grey--text"
            >{{dataUser.description == null ? 'No has ingresado tu descripcion personal. Completa tu perfil' : dataUser.description }}</p>
            <router-link :to="{name: 'publications'}" exact>
                <v-btn color="primary" rounded class="mr-0">Publicar Anuncio</v-btn>
            </router-link>
            </v-card-text>
        </v-card>
        <v-dialog v-model="dialogSelectImageProfile" max-width="800">
            <image-select type="profile" @updateImageProfile="updateImageProfile">></image-select>
        </v-dialog>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  components: {
    ImageSelect: () => import("../components/ImagesSelect.vue"),
  },
  data() {
    return {
      e1: 1,
      autoUpdate: true,
      services: [],
      isLoading: false,
      isUpdating: false,
      servicesSelect: [],
      name: 'Midnight Crew',
      texteMessaje: '',
      messaje: false,
      dataUser: {},
      dataAdd: {
        input: null,
        output: null,
        every_single_day: false,
        input_day: "Lunes",
        output_day: "Lunes",
        every_day: false,
      },
      dialogSelectImageProfile: false,
      menu: false,
      menu2: false,
      days: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Vienes",
        "Sabado",
        "Domingo",
      ],
      cities: ["medellin", "envigado"],
      barrios: [
        "barrio1",
        "barrio2",
        "barrio3",
        "barrio4",
        "barrio5",
        "barrio6",
      ],
    };
  },
  created() {
    this.fillDataUser();
    this.getCitiesAndBarrios();
    if (this.user.time_id != null) {
      this.getTimesUsers();
    }
    this.getServices();
  },
  computed: {
    citiesData() {
      return JSON.parse(JSON.stringify(this.cities));
    },
    barriosByCities() {
      for (var i = 0; i < this.cities.length; i++) {
        if (this.cities[i].id == this.dataUser.city_id) {
          return this.cities[i].barrios;
        }
      }
    },
  },
    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
  methods: {
    remove(item) {
      console.log(item)
      var newIntem = JSON.parse(JSON.stringify(item))
      console.log(newIntem)

        // const index = this.servicesSelect.indexOf(newIntem.id)
        for(var i=0; i< this.servicesSelect.length; i++) {
            if(this.servicesSelect[i].id == newIntem.id) {
              this.servicesSelect.splice(i, 1);
              // delete this.servicesSelect[i]
              console.log('existe')
              return
            }
        }
      },
    fillDataUser() {
      this.dataUser = this.user;
    },
    update() {
      this.dataUser.dataAdd = this.dataAdd;
      this.dataUser.services = this.servicesSelect;
      var url = "/api/user/" + this.user.uuid;
      axios
        .put(url, this.dataUser)
        .then((response) => {
          this.texteMessaje = "Actualizacion exitosa";
          this.messaje = true;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCitiesAndBarrios() {
      var url = "/api/cities";
      axios
        .get(url)
        .then((response) => {
          this.cities = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTimesUsers() {
      var url = "api/time/" + this.user.time_id;

      axios
        .get(url)
        .then((response) => {
          this.dataAdd = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getServices() {
      var url = "/api/services";
      axios
        .get(url)
        .then((response) => {
          console.log(typeof(response.data.servicesUser))
            this.services = response.data.services;
            this.servicesSelect = response.data.servicesUser;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateImageProfile(nameProfileImage) {
      this.user.image_profile = nameProfileImage;
      this.dialogSelectImageProfile = false;
    },
  },
};
</script>
<style>
.icon-card {
  position: absolute;
  left: 20px;
  bottom: 20px;
}
.icon-card i {
  font-size: 100px !important;
}
.card-elevation {
  position: relative;
  top: -70px;
}
</style>
