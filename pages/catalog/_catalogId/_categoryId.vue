<template>
  <div class="container-xxl">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <AppNavigation :path="$route.path" />
        </b-col>
      </b-row>
      <b-row class="row-cols-xl-4">
        <b-col v-for="wardrobe in wardrobes" :key="wardrobe.id">
          <MainCategory :imagePath="wardrobe.image" :categoryName="wardrobe.name" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import wardrobes from '@/data/wardrobes.json'
export default {
  data() {
    return {
      wardrobes,
    }
  },
}
</script>

<style></style>
