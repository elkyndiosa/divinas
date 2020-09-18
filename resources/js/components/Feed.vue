<template>
  <v-container id="scroll-target">
    <v-row justify="center" class="fill-height">
        <v-col cols="12">
            <slot />
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
            <h4 class="text-center text-h4 full-width" v-text="isHome ? 'Las mejores prepagos de la ciudad' : 'Tus Favoritas' "></h4>
        </v-col>
        <v-col cols="12" sm="10" md="8" v-if="isHome">
            <v-form @submit.prevent="search">
                <v-row justify="center">
                    <v-col cols="12" md="6">
                        <v-select
                            :items="cities.list"
                            item-text="name"
                            item-value="id"
                            v-model="city"
                            label="Ciudad"
                            :readonly="cities.busy"
                            :loading="cities.busy"
                            outlined
                            hide-details
                            dense
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select
                            :items="barrios"
                            item-text="name"
                            item-value="id"
                            v-model="barrio"
                            :readonly="cities.busy"
                            :loading="cities.busy"
                            no-data-text="No hay barrio para la ciudad seleccionada."
                            label="Barrio"
                            hide-details
                            outlined
                            dense
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select
                            hide-details
                            dense
                            outlined
                            label="Edad"
                            :items="ageList"
                            v-model="age"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select
                            hide-details
                            dense outlined
                            label="Precio"
                            v-model="price"
                            :items="priceList"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-select
                            hide-details
                            outlined
                            chips
                            multiple
                            dense
                            item-text="name"
                            item-value="id"
                            v-model="servicesSelect"
                            label="Servicios"
                            :items="services.list"
                            :loading="services.busy"
                            :readonly="services.busy"
                        ></v-select>
                    </v-col>
                    <v-col class="d-flex justify-center pa-0" cols="12">
                        <v-checkbox
                        label="Solo prefiles verificados"
                        v-model="status"
                        ></v-checkbox>
                    </v-col>
                    <v-col class="d-flex pa-0 mb-8" cols="12">
                        <v-btn
                            color="primary"
                            large
                            class="px-16 py-4 ma-auto text-subtitle-2"
                            rounded
                            type="submit"
                            :disabled="scroller.getting"
                            :loading="scroller.getting"
                        >
                            Filtrar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
        <v-col cols="12" md="10" v-if="isHome">
            <v-toolbar flat dense>
                <v-spacer></v-spacer>
                <v-toolbar-title class="text-h4">
                    Chica de la Semana
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-row v-if="weekGirl.busy">
                <v-col cols="12" md="6">
                    <v-card flat>
                        <v-skeleton-loader
                            type="image"
                            class="mx-auto"
                        ></v-skeleton-loader>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card flat>
                        <v-skeleton-loader
                            type="article"
                            class="mx-auto"
                            height="100"
                        ></v-skeleton-loader>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col cols="12" md="6">
                    <v-card flat>
                        <v-img
                            :src="'/uploads/images/'+week.image"
                            aspect-ratio="1"
                            class="grey lighten-2"
                            width="500"
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
                <v-col cols="12" md="6">
                    <v-card flat>
                        <v-card-title class="text-h5">
                            {{ week.name }}
                        </v-card-title>
                        <v-card-text>
                            <p class="black--text text-none text-justify text-body-1" style="line-height: 25px;">
                                {{ week.description }}
                            </p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                @click="showWeek"
                            >
                                Ver
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
        </v-col>
      <v-col cols="12">
        <div
            id="scroller"
            v-infinite-scroll="getPublications"
            infinite-scroll-disabled="noGet"
            infinite-scroll-distance="100"
        >
            <v-row>
                <feed-card
                    v-for="(item, index) in publications" :key="index"
                    :size="3"
                    :value="item"
                    @addFavorities="addFavorities"
                    @reload="getPublications"
                />
            </v-row>
            <v-row justify="center" v-if="!scroller.getting && searched && publications.length == 0">
                <h4 class="text-h4">
                    No hay resultados
                </h4>
            </v-row>
            <v-row justify="center" class="mt-4" v-if="scroller.getting">
                <v-col cols="8" sm="6" md="4">
                    <v-progress-linear
                        color="primary"
                        indeterminate
                    ></v-progress-linear>
                </v-col>
            </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Feed",
  components: {
    FeedCard: () => import("../components/FeedCard"),
  },
  data: () => ({
    layout: [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
    publications: [],
    status: false,
    searched: false,
    scroller: {
        page: 1,
        last_page: 0,
        getting: false,
        ready: false,
    },
    weekGirl: {
        busy: false,
        data: {}
    },
    barrio: null,
    city: null,
    cities: {
        busy: false,
        list: [],
    },
    servicesSelect: [],
    services: {
        busy: false,
        list: [],
    },
    ageList: [
        {
            text: 'Entre 18 y 25',
            value: '18-25'
        },
        {
            text: 'Entre 26 y 35',
            value: '26-35'
        },
        {
            text: 'Entre 36 y 45',
            value: '36-45'
        },
    ],
    age: null,
    price: null,
    priceList: [
        {
            text: 'Entre 10 y 30',
            value: '10-30'
        },
        {
            text: 'Entre 30 y 70',
            value: '30-70'
        },
        {
            text: 'Entre 70 y 100',
            value: '70-100'
        },
        {
            text: 'Entre 100 y 120',
            value: '100-120'
        },
    ],
    busy: false,
  }),
  computed: {
    noGet() {
        let scroll = this.scroller
        if(scroll.getting || scroll.ready)
            return true
        return false
    },
    barrios() {
        let index = _.findIndex(this.cities.list, {'id': this.city})
        let city = this.cities.list[index]
        if(city)
            return city.barrios
        return []
    },
    isHome() {
      if (this.$router.history.current.name == "favorites") {
        return false;
      } else if (this.$router.history.current.name == "home") {
        return true;
      }
    },
    week() {
        let data = {
            name: this.weekGirl.data.name,
            description: this.weekGirl.data.description,
            uuid: this.weekGirl.data.uuid
        }

        if(this.weekGirl.data.imgages_path) {
            data.image = JSON.parse(this.weekGirl.data.imgages_path)[0]
        }

        return data
    }
  },
  created() {
    this.getWeek()
    this.getCitiesList()
    this.getServices()
  },
  methods: {
    async getPublications(){
        this.scroller.getting = true
        let url =  '/api/publication'
        let params = await this.getParams()
        try {
            var response = await axios.get(url, {
                params: params
            })
            let list  = response.data.list
            this.publications.push(...list.data)
            this.scroller.last_page = list.last_page
            this.scroller.page += 1
            if(list.current_page >= list.last_page) {
                this.scroller.ready = true
            }

        } catch(error) {
            console.log(error);
        }
        this.scroller.getting = false
        this.searched = true
    },

    async search() {
        this.searched = false
        this.scroller.ready = true
        this.publications = []
        this.scroller.page = 1
        this.$vuetify.goTo(9999, 10)
        this.$nextTick(() => {
            this.scroller.ready = false
        })
    },
    async getWeek() {
        this.weekGirl.busy = true
        let url = '/api/get-week'
        try {
            let response = await axios.get(url)
            this.weekGirl.data = response.data.week
        } catch(error) {
            console.log(error.response.data);
        }
        this.weekGirl.busy = false
    },

    async getCitiesList() {
        this.cities.busy = true
        let url = "/api/cities"
        try {
            let response = await axios.get(url)
            this.cities.list = response.data.cities
        } catch (error) {
            console.log(error)
        }
        this.cities.busy = false
    },

    async getServices() {
        this.services.busy = true
        let url = '/api/services'
        try {
            let response = await axios.get(url)
            this.services.list = response.data.services
        } catch (error) {
            console
        }
        this.services.busy = false
    },

    addFavorities(uuid){
        this.$emit("addFavorities", uuid);
    },

    getParams() {
        let params = {
            page: this.scroller.page
        }

        if(this.status)
            params.status = this.status
        if(this.age)
            params.age = this.age
        if(this.city)
            params.city = this.city
        if(this.barrio)
            params.barrio = this.barrio
        if(this.price)
            params.price = this.price

        if(this.servicesSelect.length > 0)
            params.services = _.join(this.servicesSelect, '-')

        return params
    },

    showWeek() {
        let uuid = this.week.uuid
        this.$router.push("/publication/" + uuid);
    },

  },
  watch: {
  },
};
</script>
