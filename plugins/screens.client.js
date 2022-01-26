export default (app, inject) => {
  inject('screens', { mobile })

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
