import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blue.darken4,
        secondary: colors.blue.darken3,
        accent: colors.indigo.base,
      },
      dark: {
        primary: colors.blueGrey.darken4,
        secondary: colors.blueGrey.darken3,
        accent: colors.indigo.base,
      },
    },
  },
})
