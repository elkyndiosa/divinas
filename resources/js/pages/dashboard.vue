<template >
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6" lg="4" v-for="(item, index) in data" :key="index">
                <v-card :color="item.color" dark>
                    <v-card-title>
                        <v-spacer></v-spacer>
                        {{item.title}}
                    </v-card-title>
                    <v-card-title>
                        <v-spacer></v-spacer>
                        <v-progress-circular
                            v-if="busy"
                            color="white"
                            indeterminate
                        ></v-progress-circular>
                        <h1 class="font-weight" v-else>
                            {{item.subtitle}}
                        </h1>
                    </v-card-title>
                    <v-card-actions>
                        <v-icon
                            class="material-icons"
                            :color="item.iconColor"
                            x-large
                        >
                            {{item.icon}}
                        </v-icon>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
  components: {
  },
   data() {
    return {
      busy: false,
      data:[
      {
        color: '#00cae3 ',
        title: 'Vistas de perfil',
        subtitle: 0,
        icon:'timeline',
        iconColor: '#f2f2f2'
      },
      {
        color: '#4caf50',
        title: 'Clics en Whatsapp',
        subtitle: 0,
        icon:'touch_app',
        iconColor: '#f2f2f2'
      },
      {
        color: '#e91e63',
        title: 'Favorita',
        subtitle: 0,
        icon:'favorite',
        iconColor: '#f2f2f2'
      }
    ]
    };
  },
  created() {
    this.getData();
  },
  destroyed() {},
  computed: {},
  methods: {
    async getData(){
      this.busy = true
      let url = '/api/data';
      try {
          let response = await axios.get(url)
          this.data[0].subtitle = response.data.views;
          this.data[1].subtitle = response.data.click_whatsapp;
          this.data[2].subtitle = response.data.favorites;
      } catch(error) {
            ErrorHandler.render(error)
      }
      this.busy = false
    }
  },
};
</script>
<style>
  .icon-card{
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
  .icon-card i{
      font-size: 100px !important;
  }

</style>
