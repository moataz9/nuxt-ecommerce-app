<template>
  <b-sidebar id="app-sidebar" body-class="bg-white" header-class="bg-white" class="pl-5">
    <template #header="{ hide }">
      <div>
        <span @click="hide" class="blur-effect"></span>
        <nuxt-link to="/" class="h4 font-weight-bold text-uppercase">
          Nuxt e-commerce
        </nuxt-link>
        <button @click="hide" class="border-0 bg-transparent ml-2 h2 pt-1">&times;</button>
      </div>
    </template>
    <div class="px-3 py-2">
      <ul class="list-unstyled">
        <li v-for="(link, index) in sidebarLinks" :key="index" class="mt-3">
          <nuxt-link :to="link.route" class="h5 font-weight-bold">{{ link.route }}</nuxt-link>
        </li>
      </ul>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  data() {
    return {
      sidebarLinks: [
        { name: 'Catalog', route: 'catalog' },
        { name: 'In Stocks', route: 'in_stock' },
        { name: 'Discounts', route: 'discounts' },
        { name: 'Popular', route: 'popular' },
        { name: 'Services', route: 'services' },
        { name: 'Login', route: 'login' },
      ],
    }
  },
}
</script>