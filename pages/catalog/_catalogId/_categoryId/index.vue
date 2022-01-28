<template>
  <div class="container-xxl">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <AppNavigation :path="$route.path" />
        </b-col>
      </b-row>
      <b-row cols="2" cols-md="3" cols-xl="4">
        <b-col v-for="wardrobe in wardrobes" :key="wardrobe.id" class="mb-4">
          <nuxt-link :to="`${$route.path}/${wardrobe.id}`">
          <!-- <nuxt-link :to="{
            name: 'catalog-catalogId-categoryId-itemId'
          }"></nuxt-link> -->
            <MainCategory
              :imagePath="wardrobe.image"
              :categoryName="wardrobe.name"
              :shadow="false"
            />
          </nuxt-link>
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
