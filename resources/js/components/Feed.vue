<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>
      <v-col class="d-flex justify-center">
        <h4 class="text-center text-h4 full-width" v-text="isHome ? 'Las mejores prepagos de la ciudad' : 'Tus Favoritas' "></h4>
      </v-col>
      <v-row class="d-flex justify-center px-4 px-md-14" v-if="isHome">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select hide-details dense outlined label="Barrio"></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select hide-details dense outlined label="Edad"></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select hide-details dense outlined label="Servicios"></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select hide-details dense outlined label="Precio"></v-select>
        </v-col>
        <v-col class="d-flex justify-center pa-0" cols="12">
          <v-checkbox label="Solo prefiles verificados"></v-checkbox>
        </v-col>
        <v-col class="d-flex pa-0 mb-8" cols="12">
          <v-btn
            color="primary"
            dark
            large
            class="text-capitalize px-16 py-4 ma-auto text-subtitle-2"
            rounded
          >Filtrar</v-btn>
        </v-col>
      </v-row>
      <v-progress-linear
        indeterminate
        color="primary"
        v-if="busy"
      ></v-progress-linear>
      <v-col cols="12" v-else>
        <v-row>
            <feed-card
                v-for="(item, index) in publications" :key="index"
                :size="3"
                :value="item"
                @addFavorities="addFavorities"
                @reload="getPublications"
            />
        </v-row>
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
    page: 1,
    publications: [],
    busy: false,
  }),
  computed: {
    pages() {
      return Math.ceil(this.articles.length / 11);
    },
    paginatedArticles() {
      const start = (this.page - 1) * 11;
      const stop = this.page * 11;

      return this.articles.slice(start, stop);
    },
    isHome() {
      if (this.$router.history.current.name == "favorites") {
        return false;
      } else if (this.$router.history.current.name == "home") {
        return true;
      }
    },
  },
  created() {
    this.getPublications();
  },
  methods: {
    async getPublications(){
        this.busy = true
        var url =  '/api/publication/';
        try {
            var response = await axios.get(url)
            this.publications = response.data;
        } catch(error) {
            console.log(error.response.data);
        }
        this.busy = false
    },
    addFavorities(uuid){
        this.$emit("addFavorities", uuid);
    }
  },
  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
