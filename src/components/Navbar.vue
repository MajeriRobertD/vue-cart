<template>
<div>
<b-navbar> 

  <b-nav>
    <b-nav-item class="h1 mb-2" active><b-icon-bullseye style="color: black;"> </b-icon-bullseye></b-nav-item>
  </b-nav>

  <b-navbar-nav class="ml-auto">
    <b-nav-item>
        <h5>Items: <b-badge>{{total}}</b-badge> </h5>
    </b-nav-item>
      </b-navbar-nav>

</b-navbar>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
   computed: {
    ...mapState({
      counter: state => state.cart.counter}),
    ...mapGetters('cart', {
      total: 'cartQuantity'
    })
  },
  name:'Navbar'
}
</script>
