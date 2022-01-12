<template>
  <div class="app-bg-color">
    <b-navbar toggleable="md" class="container-xxl py-4">
      <b-navbar-brand class="mr-0">
        <nuxt-link :to="{ name: 'index' }">
          <b-img src="/images/logo.svg" />
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Catalog</b-nav-item>
        <b-nav-item href="#">Delivery</b-nav-item>
        <b-nav-item href="#">Conditions</b-nav-item>
        <b-nav-item href="#">Contacts</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class="text-black call-request font-size-22">
          + 20 102 456 7890 <span>/</span> + 20 102 456 7890
          <p class="text-right mb-0">Request a call</p>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$secondary-font-color: #d7d7d7;
$third-font-color: #dcdcdc;

.call-request {
  font-weight: 500;
  span,
  p {
    font-size: 1rem;
  }
  span {
    color: $third-font-color;
  }
  p {
    color: $secondary-font-color;
  }
}
.nav-link {
  color: #000 !important;
  &:hover {
    color: #000 !important;
  }
}
</style>
