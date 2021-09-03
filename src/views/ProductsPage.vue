<template>
  <div>
      <h2>Available products</h2>
        <b-container class="mt-4">
          <b-row v-for="(row, index) in groupedProducts" v-bind:key="index">
            <b-col  md="6" xs="12" sm="12" lg="6" xl="4" v-for="item in row" v-bind:key="item.id">
              <b-card 
                v-bind:title="item.name"
                v-bind:img-src="item.img"
                img-alt="products"
                img-top
                tag="article"
                style="max-width: 20rem; "
                class="myCard mb-2"
                > 

                <b-card-text>
                  Price: <span class="dollarSign">{{item.price}}$</span>
                </b-card-text>
                <b-button class="buyButton" variant="info" @click="addProductToCart(item.id)">ADD TO CART</b-button>


              

              </b-card>
            </b-col>


          </b-row>  

        </b-container>
        
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import {products} from '../../data/products'
import chunk from 'lodash/chunk'

export default {
  computed: {
    ...mapState({
      counter: state => state.cart.counter,
      items: state => state.cart.items}),
    ...mapGetters('cart', {
      total: 'cartQuantity',
      theItems: 'cartProducts'
    }),
    groupedProducts(){
      return chunk(products,3)

    }
  },
  methods: mapActions('cart', ['increment', 'decrement', 'addProductToCart']),
  name: 'ProductsPage'
}
</script>

<style >
  /* .dollarSign{
    color:green;
  } */
  .buyButton{
    background-color: #2c3e50 ;
  }
  
  .myCard img{
    height:25rem;
    
  }
</style>
