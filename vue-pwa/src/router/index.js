import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Hello from '@/components/Hello'
import MessageList from '@/components/MessageList'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/msg',
      name: 'MessageList',
      component: MessageList,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('hello')
  } else {
    next();
  }
})

export default router
