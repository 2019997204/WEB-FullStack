import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
// method 1 to zh-CN
// import zh from 'vee-validate/dist/locale/zh_CN'

// method 2 to zh-CN
import './local/index'

Vue.use(VeeValidate)
// method 1 to zh-CN
// Validator.localize('zh-CN', zh)

// method 2 to zh-CN
const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
