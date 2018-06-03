// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

import { faHeart } from '@fortawesome/fontawesome-free-solid'
import fontawesome from '@fortawesome/fontawesome'
fontawesome.library.add(faHeart)

Vue.config.productionTip = false

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

