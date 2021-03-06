import Vue from 'vue'
import Router from 'vue-router'
import Chou from '../components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'
import Hi1 from '@/components/hi1.vue'
import Hi2 from '@/components/hi2.vue'
import Error from '@components/Error.vue'
import { component } from 'vue/types/umd'


Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'n chou sha ',
      component:Chou
    },
    {
      path: '*',
      component: Error
    },
    {
      path:'/hi',
      name:'chou n za di ',
      component:Hi,
      children:[
        {
          path:'hi1',
          component:Hi1
        },
        {
          path:'hi2',
          component:Hi2,
          alias: 'wn'
        },
      ]
    },
    {
      path: '/abc',
      component: Error,
      beforeEnter: (to, from, next) => {
        console.log('我进入了404页面');
        console.log(to);
        console.log(from);
        next()
      }
    }
  ]
})
