export default {
  getCartItems(state) {
    return state.cartItems
  },
  getCartItemsCount(state) {
    return state.cartItems.length
  },
  getSingleCartItemCount: state => id => {
    // if (state.cartItems.length) {
    // }
    let currentItem = state.cartItems.find(cartItem => {
      return cartItem.itemId == id
    })
    return currentItem ? currentItem.itemCount : 1
  },
}
