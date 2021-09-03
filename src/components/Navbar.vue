<template>
<div>
<b-navbar  type='dark' class="navbar p-1 mb-2"> 
  <b-navbar-brand type='button'  @click="goHome" class="ml-3">logo</b-navbar-brand>

  <b-navbar-nav class="ml-auto">
    <b-nav-item class="mr-4 mt-1" @click="goProducts">Products</b-nav-item>
    <b-nav-item class="mr-3"> 
        <h5><b-icon-cart4  v-b-modal.modal-1> </b-icon-cart4> <b-badge>{{total}}</b-badge> </h5>
    </b-nav-item>
      </b-navbar-nav>

</b-navbar>
  <b-modal ok-only hide-footer id="modal-1" title="Your shopping cart">
    <p v-if="items.length === 0" class="my-4">Empty cart! <b-icon-emoji-frown> </b-icon-emoji-frown> <br> Go back and add some products!</p>
    <p v-else class="my-4"><b-icon-emoji-sunglasses> </b-icon-emoji-sunglasses> Here are your products:</p>
    <b-list-group> 
      <b-list-group-item  class="d-flex justify-content-between align-items-center" v-for="item in items" v-bind:key="item.id" >
          ID: {{item.id}}
         <div> 
           Quantity:
         <b-badge  variant="success" >{{item.quantity}}</b-badge>
         </div>
         </b-list-group-item>
    </b-list-group>
    <div class="d-flex flex-row-reverse"> 
     <b-button class="mt-3 ml-2 justify-content-end" variant="success"  @click="()=>{$bvModal.hide('modal-1'); emptyCart()}">Check out</b-button>
     <b-button class="mt-3 justify-content-end"  @click="$bvModal.hide('modal-1')">Cancel</b-button>
    </div>
  </b-modal>
</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
   computed: {
    ...mapState({
      counter: state => state.cart.counter}),
    ...mapGetters('cart', {
      total: 'cartQuantity',
      items: 'cartProducts'
    })
  },
  methods: {
    ...mapActions('cart',['emptyCart']),
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
