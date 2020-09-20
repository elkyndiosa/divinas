require('./configAxios');
window.Vue = require('vue')
Vue.component('Application', require('./Application.vue').default);

import InfiniteScroll from 'vue-infinite-scroll';
import VueVideoPlayer from 'vue-video-player';

Vue.use(VueVideoPlayer)
Vue.use(InfiniteScroll);

// plugins
import router from './plugins/router.js'
import vuetify from './plugins/vuetify.js'
import store from './plugins/store.js'

import auth from './mixins/auth';
Vue.mixin(auth);

const app = new Vue({
    router,
    store,
    vuetify,
    el: "#app",
    template: `<Application/>`,
});
export { app };
