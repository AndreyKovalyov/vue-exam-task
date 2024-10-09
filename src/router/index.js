import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/input-task',
      name: 'InputTask',
      component: () => import('../components/InputTask.vue'),
    },
    {
      path: '/slider-task',
      name: 'SliderTask',
      component: () => import('../components/SliderTask.vue'),
    }
  ]
})
