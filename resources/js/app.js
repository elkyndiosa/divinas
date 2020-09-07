require('./configAxios');
window.Vue = require('vue');
Vue.component('Application', require('./Application.vue').default);
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