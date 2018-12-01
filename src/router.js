import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // 这里定义了路由节点
  routes: []
})


// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   // ------------------这里为什么跟下面的写法有区别呢？最下面解答
//   component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
//   // component: About
// }, {
//   path: '/',
//   name: 'home',
//   component: Home
// }

// 组件指向的两种方式：
// 1.先import后使用
//   import Home from './views/Home.vue'
//   component: Home
// 2.使用的时候再import
//   component: () => import('./views/About.vue')