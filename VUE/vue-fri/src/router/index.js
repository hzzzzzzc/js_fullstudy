import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Index',
    component:()=> import('@/views/index')
  },
  {
    path: '/item',
    name: 'item',
    component: ()=> import('@/views/item')
  },
  {
    path: '/score',
    name: 'score',
    component: ()=> import('@/views/score')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router