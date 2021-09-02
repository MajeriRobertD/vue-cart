<template>
  <div>
      <h1>vue counter: {{total}} </h1>
      <button @click="decrement">decrement </button>
      <button v-on:click="increment"> increment </button>
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
