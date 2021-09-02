/* eslint-disable */
const state = () => ({
    counter:0
})

const getters = {
    cartQuantity: (state) => {
        return state.counter
    }
}


const actions = {
    increment({commit}) {
        commit("incrementQuantity")
    },
    decrement({commit}){
      commit("decrementQuantity")
    }
}

const mutations = {
  incrementQuantity(state) {
      state.counter++
  },
  decrementQuantity(state) {
    state.counter--
}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
