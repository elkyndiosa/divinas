<template>
  <v-col cols="6" md="4" lg="3">
    <base-card :height="480" outlined v-if="value != ''">
        <img
            :src="'/uploads/images/'+JSON.parse(value.imgages_path)"
            height="40%"
            width="100%"
            gradient="rgba(0, 0, 0, .12), rgba(0, 0, 0, .12)"
            contain
        />
        <v-card-title @click="showPublication(value.uuid)" style="cursor: pointer">
            <v-row class="fill-height text-right ma-0">
            <v-col cols="12">
                <v-col cols="12" class="d-flex justify-space-between pa-0">
                <v-icon
                    class="material-icons"
                    color="yellow"
                    v-if="value.user.status == 1"
                >verified_user</v-icon>
                <div v-else class="my-3"></div>
                </v-col>

                <p class="text-h6">{{value.user.name}}</p>
                <h3 class="title font-weight-bold mb-2">{{ value.title }}</h3>

                <div class="caption">
                <p>Publicado:</p>
                <span>{{moment(value.created_at).startOf('hour').format('DD-MMMM-YYYY')}}</span>
                </div>
            </v-col>
            </v-row>
        </v-card-title>
        <v-card-actions class="pa-0" style="position:absolute;bottom:0px;width:100%;">
            <v-col cols="12" class="pa-0 d-flex justify-content-end">
            <v-spacer></v-spacer>
            <v-btn
                fab
                text
                @click="!isFavorite ? addFavorities(value) : removeFavorities(value)"
                :color="isFavorite ? 'primary' : 'grey lighten-1'"
            >
                <v-icon class="material-icons">favorite</v-icon>
            </v-btn>
            </v-col>
        </v-card-actions>
    </base-card>
  </v-col>
</template>

<script>
// import VueMoment from 'vue-moment';
import moment from "moment";
Vue.prototype.moment = moment;

export default {
  components: {
    BaseCard: () => import("./base/Card"),
  },
  name: "FeedCard",

  props: {
    size: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  mounted(){
    console.log(this.value)
  },
  computed: {
    isFavorite() {
      var favorties = this.$store.state.favorities;
      for (let index = 0; index < favorties.length; index++) {
        if (favorties[index].uuid == this.value.uuid) {
          return true;
        }
      }
      return false;
    },

  },
  methods: {
    showPublication(uuid) {
      this.$router.push("/publication/" + uuid);
    },
    addFavorities(uuid) {
      this.$store.state.favorities.push(uuid);
      const parsed = JSON.stringify(this.$store.state.favorities);
      localStorage.favorities = parsed;
      // api/increment/favorites/{uuid}
      let url = "/api/increment/favorites/" + this.value.user.uuid;
      axios
        .get(url)
        .then((response) => {
          console.log(response);
        })
        .catch((rerro) => {
          console.log(error);
        });
    },
    removeFavorities(uuid) {
      var favorities = this.$store.state.favorities;
      var a = favorities.indexOf(uuid);
      favorities.splice(a, 1);
      const parsed = JSON.stringify(this.$store.state.favorities);
      localStorage.favorities = parsed;
      let url = "/api/decrement/favorites/" + this.value.user.uuid;
      axios
        .get(url)
        .then((response) => {
          console.log(response);
        })
        .catch((rerro) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
