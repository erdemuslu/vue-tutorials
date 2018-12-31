import Vue from 'vue'
import App from './App'
import store from './store/store'

// define vue config
Vue.config.productionTip = false

const vueApp = new Vue({
  store,
  render: createElement => createElement(App)
})

vueApp.$mount('#app')
