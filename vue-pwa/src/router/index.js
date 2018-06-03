import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MessageList from '@/components/MessageList'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/msg',
            name: 'MessageList',
            component: MessageList
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
    ]
})
