import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

module.exports = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
    ],
})
