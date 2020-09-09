<template >
  <div class="mt-16 d-flex justify-center flex-wrap">
    <v-col cols="12" class="d-flex justify-center grey lighten-3 mb-6 mx-6" color="grey darken-1">
      <v-form style="width:100%">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step editable :complete="e1 > 1" step="1">Datos Personales</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable :complete="e1 > 2" step="2">Servicios y Horarios</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step editable step="3">Imagenes</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" color="white">
                <v-row class="d-flex justify-center flex-wrap">
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="dataUser.name"
                      label="Nombre de Usuario"
                      class="purple-input"
                      outlined
                      dense
                    />
                  </v-col>

                  <v-col cols="12" md="6" class="mt-0 pt-0">
                    <v-text-field
                      v-model="dataUser.nikc"
                      class="purple-input"
                      label="Tu Alias"
                      outlined
                      dense
                    />
                  </v-col>

                  <v-col cols="12" md="6" class="mt-0 pt-0">
                    <v-text-field
                      v-model="dataUser.email"
                      label="Correor Electronico"
                      class="purple-input"
                      outlined
                      dense
                    />
                  </v-col>

                  <v-col cols="12" md="6" class="mt-0 pt-0">
                    <v-text-field
                      v-model="dataUser.phone"
                      label="Telefono"
                      class="purple-input"
                      outlined
                      dense
                    />
                  </v-col>
                  <v-col cols="12" md="6" class="mt-0 pt-0">
                    <v-text-field
                      v-model="dataUser.whatsapp"
                      label="Whatsapp"
                      class="purple-input"
                      outlined
                      dense
                    />
                  </v-col>

                  <v-col cols="12" md="6" class="mt-0 pt-0">
                    <v-text-field
                      v-model="dataUser.years"
                      label="Edad"
                      class="purple-input"
                      type="number"
                      outlined
                      dense
                    />
                  </v-col>
                  <v-col cols="6" sm="6" class="mt-0 pt-0">
                    <v-select
                      :items="cities"
                      item-text="name"
                      item-value="id"
                      v-model="dataUser.city_id"
                      label="Ciudad"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="6" sm="6" class="mt-0 pt-0">
                    <v-select
                      :items="barriosByCities"
                      item-text="name"
                      item-value="id"
                      v-model="dataUser.barrio_id"
                      label="Barrio"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="6" md="3" class="mt-0 pt-0">
                    <v-text-field
                      v-model="dataUser.weight"
                      label="Peso"
                      class="purple-input"
                      type="number"
                      outlined
                      dense
                    />
                  </v-col>
                  <v-col cols="6" md="3" class="mt-0 pt-0">
                    <v-text-field
                      v-model="dataUser.height"
                      label="Estatura"
                      class="purple-input"
                      type="number"
                      outlined
                      dense
                    />
                  </v-col>
                  <v-col cols="6" sm="3" class="text-h6 font-weight-bold d-flex justify-center">
                    <v-checkbox
                      v-model="dataUser.delivery"
                      label="Realizo Domicilios"
                      outlined
                      dense
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="6" sm="3" class="text-h6 font-weight-bold d-flex justify-center">
                    <v-checkbox v-model="dataUser.have_site" outlined dense label="Tienes Sitios"></v-checkbox>
                  </v-col>
                </v-row>
              </v-card>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
              </v-col>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" color="white">
                <v-row class="d-flex justify-center flex-wrap">
                  <v-col cols="12" class="mt-0 py-0">
                    <v-textarea
                      class="purple-input"
                      label="Sobre mi"
                      outlined
                      dense
                      v-model="dataUser.description"
                      value="Soy una persona muy apasionada por complacer..."
                    />
                  </v-col>
                  <v-col cols="12" class="mt-0 py-0">
                    <v-autocomplete
                      v-model="servicesSelect"
                      :disabled="isUpdating"
                      :items="services"
                      chips
                      color="blue-grey lighten-2"
                      label="Mis servicios son: "
                      multiple
                      class="px-3 pb-12"
                      :loading="isLoading"
                      clearable
                      return-object
                      hide-details
                      hide-selected
                      outlined
                      item-text="name"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          close
                          @click="data.select"
                          @click:close="remove(data.item)"
                        >{{ data.item.name }}</v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template>
                          <v-list-item-content>
                            <v-list-item-title v-html="data.item.name"></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="12" sm="4" class="mt-0 py-0">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="dataAdd.input"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dataAdd.input"
                          label="Picker in menu"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          dense
                        ></v-text-field>
                      </template>

                      <v-time-picker v-if="menu" v-model="dataAdd.input" full-width>
                        <v-spacer></v-spacer>
                        <v-btn outlined text color="primary" @click="menu = false">Cancelar</v-btn>
                        <v-btn color="primary" @click="$refs.menu.save(dataAdd.input)">OK</v-btn>
                      </v-time-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="4" class="mt-0 py-0">
                    <v-menu
                      ref="menu2"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="dataAdd.output"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dataAdd.output"
                          label="Picker in menu2"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          dense
                          outlined
                        ></v-text-field>
                      </template>
                      <v-time-picker v-if="menu2" v-model="dataAdd.output" full-width>
                        <v-spacer></v-spacer>
                        <v-btn outlined text color="primary" @click="menu = false">Cancelar</v-btn>
                        <v-btn color="primary" @click="$refs.menu2.save(dataAdd.output)">OK</v-btn>
                      </v-time-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="4" class="text-h6 font-weight-bold d-flex justify-center py-0">
                    <v-checkbox v-model="dataAdd.every_single_day" label="Todo el dia"></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="4" class="mt-0 py-0">
                    <v-select
                      v-model="dataAdd.input_day"
                      :items="days"
                      label="De"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="4" class="mt-0 py-0">
                    <v-select
                      v-model="dataAdd.output_day"
                      :items="days"
                      label="A"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="4" class="text-h6 font-weight-bold d-flex justify-center py-0">
                    <v-checkbox v-model="dataAdd.every_day" label="Todos los dias"></v-checkbox>
                  </v-col>
                  <v-col cols="12" md="6" class="mt-0 py-0">
                    <v-text-field
                      v-model="price"
                      label="Valor por hora"
                      class="purple-input"
                      type="number"
                      :rules="rules"
                      outlined
                      dense
                    />
                  </v-col>
                </v-row>
              </v-card>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
              </v-col>
            </v-stepper-content>

            <v-stepper-content style="width:100%" step="3">
              <v-card class="mb-12" color="white" style="width:100%">
                <v-col cols="12">
                  <vue-dropzone
                    ref="myVueDropzone"
                    id="dropzone"
                    :options="dropzoneOptions"
                    @vdropzone-success="cleanFiles()"
                  ></vue-dropzone>
                </v-col>

                <v-row class="d-flex justify-center">
                  <gallery :key="galleryKey" :userData="user" :uuid="user.uuid" search="allUser"></gallery>
                </v-row>
              </v-card>

              <v-col cols="12" class="text-right">
                <v-btn
                  color="primary"
                  class="mr-0 text-capitalize"
                  @click="update()"
                >Crear Publicacion</v-btn>
              </v-col>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-form>
    </v-col>
    <v-col cols="12" class="d-flex flex-wrap">
      <feed-card @reload="getPublication" v-for="(item, index) in publications" :key="index" :size="3" :value="item" />
    </v-col>
        <v-snackbar
      v-model="messaje"
      timeout="4000"
    >
      {{ texteMessaje }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="messaje = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    FeedCard: () => import("../components/FeedCard.vue"),
    FormPublication: () => import("../components/FormPublication.vue"),
    Gallery: () => import("../components/publication/ImageComponent.vue"),
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      galleryKey: 0,

      dropzoneOptions: {
        url: "/api/upload/image",
        thumbnailHeight: 150,
        maxFilesize: 2,
        headers: {
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
            .content,
        },
        dictDefaultMessage: "Click para buscar una imagen o arrastre aqui",
      },

      layout: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      publicationForm: false,
      renderUpload: true,
      page: 1,
      e1: 1,
      autoUpdate: true,
      services: [],
      isLoading: false,
      isUpdating: false,
      servicesSelect: [],
      name: "Midnight Crew",
      texteMessaje: "",
      messaje: false,
      price: '',
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
      publications: [],
      data: [
        {
          color: "#00cae3 ",
          title: "Vistas de perfil",
          subtitle: 49,
          lastDate: "date",
          icon: "timeline",
          iconColor: "#f2f2f2",
        },
        {
          color: "#4caf50",
          title: "Clics en Whatsapp",
          subtitle: 78,
          lastDate: "date",
          icon: "touch_app",
          iconColor: "#f2f2f2",
        },
        {
          color: "#e91e63",
          title: "Favorita",
          subtitle: 8,
          lastDate: "date",
          icon: "favorite",
          iconColor: "#f2f2f2",
        },
      ],
    };
  },
  created() {
    this.getPublication();
    this.fillDataUser();
    this.getCitiesAndBarrios();
    if (this.user.time_id != null) {
      this.getTimesUsers();
    }
    this.getServices();
  },

  destroyed() {},
  computed: {
    pages() {
      return Math.ceil(this.articles.length / 11);
    },
    paginatedArticles() {
      const start = (this.page - 1) * 11;
      const stop = this.page * 11;
      return this.articles.slice(start, stop);
    },
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
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },
  methods: {
    cleanFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
      this.galleryKey += 1;
    },
    getPublication() {
      var url = "/api/publications/" + this.user.uuid;
      axios
        .get(url)
        .then((response) => {
          this.publications = response.data;
          for (let index = 0; index < this.publications.length; index++) {
            this.publications[index].user = this.user;
          }
          console.log(this.publications);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    updatePublication() {
      console.log("updated");
    },
    remove(item) {
      console.log(item);
      var newIntem = JSON.parse(JSON.stringify(item));
      console.log(newIntem);

      // const index = this.servicesSelect.indexOf(newIntem.id)
      for (var i = 0; i < this.servicesSelect.length; i++) {
        if (this.servicesSelect[i].id == newIntem.id) {
          this.servicesSelect.splice(i, 1);
          // delete this.servicesSelect[i]
          console.log("existe");
          return;
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
      this.dataUser.price = this.price;
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
          console.log(typeof response.data.servicesUser);
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
  watch: {
    page() {
      window.scrollTo(0, 0);
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
</style>
