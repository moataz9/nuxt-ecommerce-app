<template>
  <div class="container-xxl">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <h1>catalog Page</h1>
        </b-col>
      </b-row>
      <b-row class="row-cols-xl-4">
        <b-col v-for="catalog in catalogs" :key="catalog.id">
          <div class="p-1">
            <b-img
              height="300"
              fluid
              :src="catalog.image"
              class="rounded-lg"
            ></b-img>
            <h5 class="pl-4 font-weight-bold mt-2">
              <nuxt-link
                :to="{
                  name: 'catalog-catalogId',
                  params: { catalogId: `${catalog.id}` },
                }"
              >
                {{ catalog.name }}
              </nuxt-link>
            </h5>
            <ul class="list-unstyled pl-4">
              <li
                class="my-4"
                v-for="category in catalog.categories"
                :key="category.categoryId"
              >
                <nuxt-link
                  class="text-black text-decoration-none"
                  :to="{
                    name: 'catalog-catalogId-categoryId',
                    params: {
                      catalogId: `${catalog.id}`,
                      categoryId: `${category.categoryId}`,
                    },
                  }"
                >
                  {{ category.categoryName }}
                </nuxt-link>
              </li>
            </ul>
          </div>
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
}
</script>

<style></style>
