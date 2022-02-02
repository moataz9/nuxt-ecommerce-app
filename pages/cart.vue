<template>
  <div>
    <!-- Popular items -->
    <div class="container-xxl">
      <b-container fluid>
        <b-row cols="1" class="mt-4">
          <!-- main col one -->
          <b-col lg="7">
            <b-row cols="1">
              <b-col cols="12" class="d-flex justify-content-between pr-5">
                <h2>cart Items</h2>
                <h3>
                  <nuxt-link class="app-color" :to="{ name: 'index' }">
                    Insert Items
                  </nuxt-link>
                </h3>
              </b-col>
              <b-col v-for="item in cartItems" :key="item.itemId" class="mt-4">
                <AppItem
                  :itemId="item.itemId"
                  :imagePath="item.imagePath"
                  :itemName="item.itemName"
                  :description="item.description"
                  :price="parseFloat(item.price)"
                  :discount="parseFloat(item.discount)"
                  :currency="item.currency"
                  cartDesign
                />
              </b-col>
              <b-col v-if="!cartItems.length">
                <p class="position-relative h4" style="z-index: 1; top: 2rem">
                  There is no items in the cart
                </p>
                <b-img fluid src="/cart-empty.png" alt="no items in cart" class="mt-n5" />
              </b-col>
            </b-row>
            <b-row v-if="cartItems.length">
              <h4 class="ml-auto py-4 mr-2">
                <strong>Total Price:</strong> &nbsp; {{ getCartReceipt }} $
              </h4>
            </b-row>
          </b-col>
          <!-- main col two -->
          <b-col lg="5">
            <b-row cols="1">
              <b-col>
                <h3>Suggested items</h3>
              </b-col>
              <b-col v-for="item in getPopularItems" :key="item.itemId" class="mt-4">
                <AppItem
                  :itemId="item.id"
                  :imagePath="item.image"
                  :itemName="item.name"
                  :description="item.description"
                  :price="parseFloat(item.price.priceValue)"
                  :discount="parseFloat(item.discountPercentage)"
                  :currency="item.price.currency"
                  cartDesign
                />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  asyncData({ store }) {
    return { cartItems: store.state.cart.cartItems }
  },
  computed: {
    ...mapGetters('items', ['getPopularItems']),
    ...mapGetters('cart', ['getCartReceipt']),
  },
}
</script>

<style></style>
