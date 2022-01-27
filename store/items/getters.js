export default {
  getPopularItems(state) {
    return state.appItems.filter(item => item.popular === true)
  },
  getDiscountsItems(state) {
    return state.appItems.filter(item => item.discountPercentage > 0)
  },
}
