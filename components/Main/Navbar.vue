<template>
  <div class="app-bg-color">
    <b-navbar toggleable="md" class="container-xxl py-4">
      <b-container fluid>
        <b-navbar-brand class="mr-0">
          <nuxt-link :to="{ name: 'index' }">
            <p class="h4 font-weight-bold text-uppercase">nuxt e-commerce</p>
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="(link, index) in navbarLinks" :key="index">
            <nuxt-link :to="{ name: link.routeName }">
              {{ link.linkName }}
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="text-black call-request font-size-22">
            <a href="http://www.github.com/moataz9" target="_blank" rel="noopener noreferrer">
              moataz9 github
            </a>
          </div>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarLinks: [
        { routeName: 'catalog', linkName: 'Catalog' },
        { routeName: 'delivery', linkName: 'Delivery' },
        { routeName: 'conditions', linkName: 'Conditions' },
        { routeName: 'contacts', linkName: 'Contacts' },
      ],
    }
  },
}
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
  a {
    color: #000 !important;
    &:hover {
      color: #000 !important;
      text-decoration: none;
    }
  }
}
</style>
