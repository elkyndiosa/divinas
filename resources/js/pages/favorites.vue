<template >
  <div>
    <h4 class="text-center text-h4 mt-16 pt-10">Tus publicaciones favoritas</h4>
    <v-row v-if="issetFavorite" class="ma-0">

    <feed-card
      v-for="(item, index) in publications" :key="index"
        :size="3"
        :value="item"
        @addFavorities="addFavorities"
      />
    </v-row>
    <v-row v-else class="ma-0 d-flex justify-center mt-16">
      <h4 class="text-center">No tienes publicaciones favoritas! vuelve a la pagina inicial y agrega!</h4>
    </v-row>
</div>
</template>
<script>
export default {
  components:{
    FeedCard: () => import("../components/FeedCard"),
  },
  data() {
    return {
    publications: []
    };
  },
  created(){
    this.publications = this.$store.state.favorities;
  },
  destroyed(){},
  computed: {
    issetFavorite() {
      var favorties = this.$store.state.favorities;
        if (favorties.length >= 1) {
          return true;
        }
        return false;
    },
  },
  methods: {
    // removeFavorities(uuid) {
    //   var favorities = this.$store.state.favorities;
    //   var a = favorities.indexOf(uuid);
    //   favorities.splice(a, 1);
    //   const parsed = JSON.stringify(this.$store.state.favorities);
    //   localStorage.favorities = parsed;
    //   let url = "/api/decrement/favorites/" + this.value.user.uuid;
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((rerro) => {
    //       console.log(error);
    //     });
    // },
  },
};
</script>
<style>
</style>