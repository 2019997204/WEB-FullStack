import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

const Login = () => import('./views/Login.vue')
const Reg = () => import('./views/Reg.vue')
const Forget = () => import('./views/Forget.vue')
const Index = () => import('./views/channels/index.vue')
const Template1 = () => import('./views/channels/template1.vue')

Vue.use(Router)

export default new Router({
  // linkActiveClass: 'layui-this',
  linkExactActiveClass: 'layui-this',
  routes: [{
      path: '/',
      component: Home,
      children: [{
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: '/index/:catalog',
          name: 'catalog',
          component: Template1
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
      beforeEnter: (to, from, next) => {
        if (from.name === 'login') {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    }
  ]
})
