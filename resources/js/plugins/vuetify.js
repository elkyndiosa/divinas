import Vue from 'vue';
import Vuetify from 'vuetify/'
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)
const VuetifyConfig = {
    /**
     * @Icons Settings
     * Config which icon pack you'll use
     */
    icons: {
        iconfont: 'md'
    },
    /**
     * @Theme Settings
     * Set up all your theme aplication settings
     */
    theme: {
        themes: {
            light:{
              primary: colors.red.darken4, // #E53935
              secondary: colors.red.lighten4, // #FFCDD2
              accent: colors.black, // #000000
            }
          },
    }
}

export default new Vuetify(VuetifyConfig);