// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let app;

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBuQsZBp0bTxXiwtrgOp2pWFPp-zle8CiE",
  authDomain: "up-2-movie.firebaseapp.com",
  databaseURL: "https://up-2-movie.firebaseio.com",
  projectId: "up-2-movie",
  storageBucket: "",
  messagingSenderId: "970638759471"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {

    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})

