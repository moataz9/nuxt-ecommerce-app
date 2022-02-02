export default {
  getCartItems(state) {
    return state.cartItems
  },
  getCartItemsCount(state) {
    return state.cartItems.length
  },
  getSingleCartItemCount: state => id => {
    let currentItem = state.cartItems.find(cartItem => {
      return cartItem.itemId == id
    })
    return currentItem ? currentItem.itemCount : 0
  },
  getCartReceipt(state) {
    return state.cartItems.reduce((acc, curr) => {
      return acc + curr.finalPrice
    }, 0)
  },
}
