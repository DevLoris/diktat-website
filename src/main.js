import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import lax from 'lax.js'

Vue.config.productionTip = false
Vue.prototype.$lax = lax;
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')