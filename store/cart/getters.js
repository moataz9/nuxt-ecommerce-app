export default {
  getCartItems(state) {
    console.log('getters is called')
    // return 'Getters is called'
    return state.cartItems
  },
}
