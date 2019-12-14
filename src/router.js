import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld'
import Leonard from './components/Leonard'
import Raptors from './components/Raptors'
import Shoot from './components/Shoot'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/techlead',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/leonard',
            name: 'Leonard',
            component: Leonard
        },
        {
            path: '/shoot',
            name: 'Shoot',
            component: Shoot
        },
        {
            path: '/raptors',
            name: 'Raptors',
            component: Raptors
        },
        {
            path: '/blazers',
            name: 'HelloWorld',
            component: HelloWorld
        },
    ]
})