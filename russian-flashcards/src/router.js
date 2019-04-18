import Vue from 'vue'
import Router from 'vue-router'
import Words from './views/Words.vue'
import Phrases from './views/Phrases.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'words',
      component: Words
    },
    {
      path: '/words',
      name: 'words',
      component: Words
    },
    {
      path: '/phrases',
      name: 'phrases',
      component: Phrases
    },
  ]
})
