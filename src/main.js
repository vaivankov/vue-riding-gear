import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyA0W2i7rY42lUns0-oEstuFB_kqjqpuhUE",
      authDomain: "vue-riding-gear-25b94.firebaseapp.com",
      databaseURL: "https://vue-riding-gear-25b94.firebaseio.com",
      projectId: "vue-riding-gear-25b94",
      storageBucket: "vue-riding-gear-25b94.appspot.com",
      messagingSenderId: "4798221070",
      appId: "1:4798221070:web:c034c41784d51f0647a55f"
    };
    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
