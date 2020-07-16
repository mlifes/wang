import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getter'

Vue.use(Vuex)

const state = {
  app: {},
  user: {},
  home: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production'
})
