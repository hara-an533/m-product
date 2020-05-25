import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    redirect: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //to 到哪里去
  //from 从哪里来
  //next 放行 
  // let isLogin=window.sessionStorage.getItem('token');
  // if(isLogin==nul){
  //   router.push({path:'/login'})
  // }
  if (to.path === '/login') return next()
  let token = window.sessionStorage.getItem('token');
  console.log(token)
  if (!token) return next('/login')
  next(error)
})

export default router
