<template>
  <div>
      <h2>Press some buttons</h2>
      <b-button pill variant='danger' @click="decrement"><b-icon-arrow-down></b-icon-arrow-down>decrement </b-button>
      <b-button pill variant='success' v-on:click="increment"><b-icon-arrow-up></b-icon-arrow-up> increment </b-button>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      counter: state => state.cart.counter}),
    ...mapGetters('cart', {
      total: 'cartQuantity'
    })
  },
  methods: mapActions('cart', ['increment', 'decrement']),
  name: 'LandingPage'
}
</script>
