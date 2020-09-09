import Vue from 'vue'
import VueRouter from 'vue-router'

const search=()=>import('@/views/search')

Vue.use(VueRouter)

  const routes = [
    {
      path:'/search',
      name:'search', //虽然name很少用上，不过还是加上吧。
      component: search
    }
  ]

const router = new VueRouter({
  linkActiveClass:'active', //点击时添加的类名名称
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
