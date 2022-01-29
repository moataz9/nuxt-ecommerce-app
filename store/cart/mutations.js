export default {
  addItem(state, item) {
    let currnetItem = state.cartItems.find(customItem => {
      return customItem.itemId == item.itemId
    })
    if (!currnetItem) {
      state.cartItems.push(item)
    } else {
      currnetItem.itemCount = item.itemCount
    }
  },
}
