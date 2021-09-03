<template>
<div>
<b-navbar  type='dark' class="navbar p-1 mb-2"> 
  <b-navbar-brand type='button'  @click="goHome" class="ml-3">logo</b-navbar-brand>

  <b-navbar-nav class="ml-auto">
    <b-nav-item class="mr-4 mt-1" @click="goProducts">Products</b-nav-item>
    <b-nav-item class="mr-3"> 
        <h5><b-icon-cart4> </b-icon-cart4> <b-badge>{{total}}</b-badge> </h5>
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
  methods: {
    goHome(){

      this.$router.push('/').catch(err => {
    // Ignore the vuex err regarding  navigating to the page they are already on.
    if (
      err.name !== 'NavigationDuplicated' &&
      !err.message.includes('Avoided redundant navigation to current location')
    ) {
      // But print any other errors to the console
      logError(err);
    }
  });
    },
    goProducts(){
      this.$router.push('/products').catch(err => {
    // Ignore the vuex err regarding  navigating to the page they are already on.
    if (
      err.name !== 'NavigationDuplicated' &&
      !err.message.includes('Avoided redundant navigation to current location')
    ) {
      // But print any other errors to the console
      logError(err);
    }
  });

    }
  },
  name:'Navbar',
}
</script>
<style scoped>
.navbar{
  background-color: #2c3e50;
}
</style>
