// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Firebase from 'firebase'
import VueFire from 'vuefire'
Vue.use(VueFire)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

import { faHeart } from '@fortawesome/fontawesome-free-solid'
import fontawesome from '@fortawesome/fontawesome'
fontawesome.library.add(faHeart)

Vue.config.productionTip = false



const config = {
  apiKey: "AIzaSyBuQsZBp0bTxXiwtrgOp2pWFPp-zle8CiE",
  authDomain: "up-2-movie.firebaseapp.com",
  databaseURL: "https://up-2-movie.firebaseio.com",
  projectId: "up-2-movie",
  storageBucket: "",
  messagingSenderId: "970638759471"
};
Firebase.initializeApp(config)

export let app;
export const db = Firebase.database();

export const userRef = db.ref('user')
export const favoriteFilmsRef = db.ref('films')


Firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })

  }


})

