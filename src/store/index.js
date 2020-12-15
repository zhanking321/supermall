import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  cartList: [],
}

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})

export default store
