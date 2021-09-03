/* eslint-disable */
const state = () => ({
    counter:0,
    items:[]
})

const getters = {
    cartQuantity: (state) => {
      let quantity = 0
      for(let item of state.items){
        quantity+= item.quantity
      }
      return quantity
    },
    cartProducts: (state) => {
        return state.items
    }
}


const actions = {
    increment({commit}) {
        commit("incrementQuantity")
    },
    decrement({commit}){
      commit("decrementQuantity")
    },
    addProductToCart({state, commit}, id){

      const cartItem = state.items.find(item => item.id === id)
      if(!cartItem){
        
        commit('pushProductToCart', {id:id})
      
      }else{
        commit('incrementItemQuantity', cartItem)
      }


    }
}

const mutations = {
  incrementQuantity(state) {
      state.counter++
  },
  decrementQuantity(state) {
    state.counter--
  },
  pushProductToCart(state, {id}){
    state.items.push({id, quantity:1})
  },
  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
