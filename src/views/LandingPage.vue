<template>
  <div>
      <h2>vue counter {{total}} </h2>
      <b-button pill variant='danger' @click="decrement">decrement </b-button>
      <b-button pill variant='success' v-on:click="increment"> increment </b-button>
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
