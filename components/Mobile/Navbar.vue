<template>
  <div class="mobile-navbar">
    <b-container fluid class="mobile-navbar-container">
      <b-button v-b-toggle.app-sidebar class="bg-transparent border-0 p-0 mt-n1">
        <b-img src="/icons/hamburger.svg" height="30" width="30"></b-img>
      </b-button>
      <div class="mt-2">
        <nuxt-link to="/">
          <p class="h4 font-weight-bold text-uppercase">nuxt e-commerce</p>
        </nuxt-link>
      </div>
      <b-button class="bg-transparent border-0 p-0">
        <b-img src="/icons/search.svg" height="30" width="30"></b-img>
      </b-button>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mobile-navbar {
  background-color: #fff;
  width: 100vw;
  height: 4.5rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-radius: 0 0 30px 30px;
  border-bottom: 2px solid #ccc;
  &-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
