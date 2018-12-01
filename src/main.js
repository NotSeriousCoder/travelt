import Vue from 'vue'
// App组件来自这里
// import Welcome from './pages/home/Welcome.vue'
import Home from './pages/home/Home.vue'
// 这个是路由
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'stys/reset.css'
import 'stys/border.css'
import 'stys/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

// 将名为App的组件挂载到id为app的节点上
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: hh => hh(Home)
})
// .$mount('#app')