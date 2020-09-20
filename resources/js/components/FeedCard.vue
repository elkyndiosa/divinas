<template>
  <v-col cols="6" md="4" lg="3">
    <v-hover v-slot:default="{ hover }">
        <base-card :height="250" class="base-card" :elevation="hover ? 20 : 2" v-if="value != ''">
            <v-img
                :src="'/uploads/images/'+JSON.parse(value.imgages_path)[0]"
                height="65%"
                width="100%"
                
                class="white"
                style="cursor: pointer; "
                @click="showPublication(value.uuid)"
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
            <v-card-text class="m-0 py-1 px-3" @click="showPublication(value.uuid)" style="cursor: pointer">
                <v-toolbar class="px-0" flat dense color="white" style="height: min-content !important;">
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
            </v-card-text>
            <v-card-actions class="m-0 py-0" style="height: 16px !important;">
                <v-btn
                    v-if="canEdit"
                    :disabled="busy"
                    @click="destroy(value.uuid)"
                    small
                    class="my-4"
                    color="red"
                    icon
                >
                    <v-icon class="material-icons">delete</v-icon>
                </v-btn>
                <v-btn
                    v-if="canEdit"
                    @click="show(value.uuid)"
                    small
                    class="my-4 mx-1"
                    color="success"
                    icon
                >
                    <v-icon small class="material-icons">edit</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click="!isFavorite ? addFavorities(value) : removeFavorities(value)"
                    :color="isFavorite ? 'primary' : 'grey lighten-1'"
                >
                    <v-icon class="material-icons">favorite</v-icon>
                </v-btn>
            </v-card-actions>
        </base-card>
    </v-hover>
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
    return {
        busy: false
    };
  },
  mounted(){
    //console.log(this.value.user)
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

    canEdit() {
        if(!this.user)
            return false
        if(this.value.user_id != this.user.id)
            return false
        return true
    }

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
    async destroy(uuid) {
        this.busy = true
        let url = '/api/publication/'+uuid
        try {
            let response = await axios.delete(url)
            this.$emit('reload', true)
        } catch( error) {
            console.log(error)
            this.busy = false
        }
    },
    show(uuid) {
        this.$router.push({
            name: 'publication-edit',
            params: {
                uuid: uuid,
            }
        })
    }
  },
};
</script>

<style>
.v-image__image {
  background-size: auto 100% !important;
  transition: 0.3s linear;
}
.v-toolbar, .v-toolbar__content{
  height: min-content;
}

</style>

