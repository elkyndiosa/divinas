<template >
  <div class="mt-16 d-flex justify-center flex-wrap">
    <v-col cols="12" md="6" lg="4" v-for="(item, index) in data" :key="index">
      <v-card :color="item.color" dark elevation="8" min-height="300">
        <v-card-title class="headline d-flex justify-end">{{item.title}}</v-card-title>
        <v-card-title class="text-h1 font-weight-bold d-flex justify-end">{{item.subtitle}}</v-card-title>
        <div class="icon-card"><v-icon class="material-icons" :color="item.iconColor">{{item.icon}}</v-icon></div>
      </v-card>
    </v-col>
  </div>
</template>
<script>

export default {
  components: {
  },
   data() {
    return {
      views: '',
      clicks: '',
      favorites: '',
      data:[
      {
        color: '#00cae3 ',
        title: 'Vistas de perfil',
        subtitle: "",
        icon:'timeline',
        iconColor: '#f2f2f2'
      },
      {
        color: '#4caf50',
        title: 'Clics en Whatsapp',
        subtitle: "",
        icon:'touch_app',
        iconColor: '#f2f2f2'
      },
      {
        color: '#e91e63',
        title: 'Favorita',
        subtitle: "",
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
    getData(){
      let url = '/api/data';
      axios.get(url).then(response =>{
        this.data[0].subtitle = response.data.views;
        this.data[1].subtitle = response.data.click_whatsapp;
        this.data[2].subtitle = response.data.favorites;
      }).catch(rerro => {
        console.log(error)
      })
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