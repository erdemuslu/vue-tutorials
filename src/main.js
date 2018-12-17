import Vue from 'vue'
import App from './App'

// define vue config
Vue.config.productionTip = false

const vueApp = new Vue({
  render: createElement => createElement(App)
})

vueApp.$mount('#app')
