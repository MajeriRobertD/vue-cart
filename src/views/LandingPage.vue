<template>
  <div>
     <h1> Hero Page stuff and a catchy phrase </h1>
     <h2> If you wanna buy products go to the products page (click Products in the top right corner) </h2>
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
