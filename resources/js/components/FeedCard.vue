<template>
  <v-col cols="6" md="4" lg="3">
    <base-card :height="350" outlined v-if="value != ''">
        <v-img
            :src="'/uploads/images/'+JSON.parse(value.imgages_path)[0]"
            height="40%"
            width="100%"
            contain
        />
        <v-card-text @click="showPublication(value.uuid)" style="cursor: pointer">
            <v-toolbar flat dense color="white">
                <v-icon
                    class="material-icons"
                    color="yellow"
                    v-if="value.status == 1"
                >
                    verified_user
                </v-icon>
                <v-spacer></v-spacer>
                <v-toolbar-title>
                    {{value.name}}
                </v-toolbar-title>
            </v-toolbar>
            <p class="text-end" style="width: 100%;">
                <strong>Publicado:</strong>
                <br/>
                <span>{{moment(value.created_at).startOf('hour').format('DD-MMMM-YYYY')}}</span>
            </p>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                fab
                text
                @click="!isFavorite ? addFavorities(value) : removeFavorities(value)"
                :color="isFavorite ? 'primary' : 'grey lighten-1'"
            >
                <v-icon class="material-icons">favorite</v-icon>
            </v-btn>
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
