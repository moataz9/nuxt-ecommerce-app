export default (app, inject) => {
  inject('screens', { mobile })
  /**
   * @description check for mobile to tablet screens
   * @return {boolean} true if screen size is less than tablet atherwise false
   */
  function mobile() {
    let checkScreen = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 720) {
        return true
      }
      return false
    }
    window.onresize = checkScreen
    return checkScreen()
  }
}
