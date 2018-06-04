import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Dashboard from '@/components/Dashboard'
import MyMovies from '@/components/MyMovies'
import NewMovies from '@/components/NewMovies'
import MyActors from '@/components/MyActors'
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
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/mymovies',
            name: 'MyMovies',
            component: MyMovies,
            meta: {
                requiresAuth: true,
                limit: false
            }
        },
        {
            path: '/myactors',
            name: 'MyActors',
            component: MyActors,
            meta: {
                requiresAuth: true,
                limit: false
            }
        },
        {
            path: '/newmovies',
            name: 'NewMovies',
            component: NewMovies,
            meta: {
                requiresAuth: true,
                limit: false
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
    next('dashboard')
  } else {
    next();
  }
})

export default router
