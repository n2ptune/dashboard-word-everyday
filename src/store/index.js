import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isViewSidebar: true
  },
  mutations: {
    handleViewSidebar(state) {
      state.isViewSidebar = !state.isViewSidebar
    }
  },
  actions: {},
  modules: {}
})
