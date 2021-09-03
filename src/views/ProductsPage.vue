<template>
  <div>
      <h2>Available products</h2>
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
  name: 'ProductsPage'
}
</script>
