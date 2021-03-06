import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('@/views/StarNotes.vue'),
    meta: {
      title: '舔狗日记'
    }
  },
  {
    path: '/StarBanner',
    name: 'StarBanner',
    component: () => import ('@/views/StarBanner.vue'),
    meta: {
      title: '舔狗日记'
    }
  },
  {
    path: '/StarLogin',
    name: 'StarLogin',
    component: () => import ('@/views/StarLogin.vue'),
    meta: {
      title: '舔狗日记'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
