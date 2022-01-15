<template>
  <div>
    {{ catalogName() }}
    {{ $route.name }} <br />
    {{ $route.params.catalogId }}
    {{ $route.params.categoryId }}
  </div>
</template>

<script>
import catalogs from '@/data/catalogs.json'
export default {
  data() {
    return {
      catalogs,
    }
  },
  methods: {
    catalogName() {
      return this.catalogs.find(catalog => {
        return catalog.id === +this.$route.params.catalogId
      }).name
    },
  },
}
</script>

<style></style>
