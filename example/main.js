import Vue from 'vue'
import OtterUI from '../src/index.js'
// import '@/otter-ui/index.css'
import './assets/common.css'
import App from './App.vue'
import router from './router'

Vue.use(OtterUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
