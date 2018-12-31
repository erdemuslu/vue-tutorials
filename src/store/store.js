import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: 'Algun'
  },
  getters: {
    sayHello: (state) => {
      return `Welcome, ${state.firstName}`
    }
  },
  mutations: {
    changeName (state, payload) {
      state.firstName = payload
    }
  },
  actions: {
    changeName ({ commit }, payload) {
      commit('changeName', payload)
    }
  }
})
