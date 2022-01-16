<template>
  <div>
    <client-only>
      <ul class="navigation" v-if="routes">
        <li class="navigation-item" v-for="(route, index) of routes" :key="index">
          <nuxt-link :to="route.routePath">
            {{ route.itemName }}
          </nuxt-link>
        </li>
      </ul>
    </client-only>
    <h2>{{ routes[routes.length - 1].itemName }}</h2>
  </div>
</template>

<script>
import catalogs from '@/data/catalogs.json'
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      routes: [],
      catalogs,
    }
  },
  created() {
    // get routesPath from path like /catalog/2/1
    let routesPath = this.path.split('/').slice(1)
    // 1. catalog
    this.routes[0] = { itemName: routesPath[0], routePath: `/${routesPath[0]}` }
    if (routesPath[1]) {
      const catalogName = this.findCatalogById(routesPath[1]).name
      // 2. catalog Name
      this.routes[1] = {
        itemName: catalogName,
        routePath: `/${routesPath[0]}/${routesPath[1]}`,
      }
    }
    if (routesPath[2]) {
      const categoryName = this.findCategoryById(routesPath[1], routesPath[2]).categoryName
      // 3. category name
      this.routes[2] = {
        itemName: categoryName,
        routePath: `/${routesPath[0]}/${routesPath[1]}/${routesPath[2]}`,
      }
    }
  },
  methods: {
    findCatalogById(id) {
      return this.catalogs.find(catalog => {
        return catalog.id == id
      })
    },
    findCategoryById(catalogId, categoryId) {
      return this.findCatalogById(catalogId).categories.find(category => {
        return category.categoryId == categoryId
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  list-style: none;
  padding-left: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ccc;
  &-item {
    display: inline-block;
    font-size: 14px;
    &:not(:last-of-type) {
      padding-right: 5px;
      border-right: 2px solid #ccc;
      margin-right: 5px;
    }
  }
}
</style>
