/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LandingPage from '@/views/LandingPage'
import ProductsPage from '@/views/ProductsPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    }

  ]
})
