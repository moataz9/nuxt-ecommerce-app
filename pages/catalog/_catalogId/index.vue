<template>
  <div class="container-xxl">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <AppNavigation :path="$route.path" />
        </b-col>
      </b-row>
    </b-container>
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
