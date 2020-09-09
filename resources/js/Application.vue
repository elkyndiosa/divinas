<template>
    <v-app>
      <navegation/>
        <transition name='slide-page' mode='out-in'>
              <router-view :key="$route.fullPath"></router-view>
        </transition>
    </v-app>
</template>

<script>
import navegation from './components/NavegationComponent.vue'
export default {
    components:{
      navegation
    },
    watch: {
        '$route'(to, from) {
            let title = to.meta.title
            if(title) {
                document.title = 'Divinas Prepagos | '+title
            } else {
                document.title = 'Divinas Prepagos'
            }
        }
    }
};
</script>
<style>
  /* STYLES FOR EFECTS */
.slide-page-enter-active, .slide-page-leave-active{
  transition: all .5s;
}
.slide-page-leave-to{
  transform: translateX(-50px);
  opacity: 0;
}
.slide-page-enter{
  transform: translateX(50px);
  opacity: 0;
}
.slide-page-enter-to, .slide-page-leave{
  opacity: 1;
}
</style>
