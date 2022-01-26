<template>
  <div>
    <MainLanding :images="sliderImages" />

    <div class="container-xxl">
      <b-container fluid>
        <b-row class="mt-4">
          <b-col cols="12">
            <h2>
              Popular Categories
              <nuxt-link class="h6" :to="{ name: 'popular' }">
                All Categories &RightArrow;
              </nuxt-link>
            </h2>
          </b-col>
        </b-row>

        <b-row cols="2" cols-md="4" cols-xl="5">
          <b-col
            v-for="category in categories.slice(0, 10)"
            :key="category.id"
            class="text-center mt-4"
          >
            <MainCategory :imagePath="category.image" :categoryName="category.name" />
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col cols="12">
            <h2>
              Discounts
              <nuxt-link class="h6" :to="{ name: 'popular' }">
                All items &RightArrow;
              </nuxt-link>
            </h2>
          </b-col>
        </b-row>

        <b-row cols="2" cols-md="4">
          <b-col v-for="item in items.slice(0, 12)" :key="item.id" class="mt-4">
            <AppItem
              :imagePath="item.image"
              :itemName="item.name"
              :description="item.description"
              :price="parseFloat(item.price.priceValue)"
              :discount="parseFloat(item.discountPercentage)"
              :currency="item.price.currency"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import categories from '@/data/categories.json'
import items from '@/data/items.json'

export default {
  name: 'Home',
  data() {
    return {
      categories,
      items,
      sliderImages: [
        '/images/slider/kitchen-1.jpg',
        '/images/slider/sofas-2.jpg',
        '/images/slider/Storage-order.jpg',
        '/images/slider/Storage-order-2.jpg',
      ],
    }
  },
}
</script>
