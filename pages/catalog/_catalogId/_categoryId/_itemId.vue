<template>
  <div>
    <div class="container-xxl">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <AppNavigation :path="$route.path" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-row no-gutters cols="4">
              <b-col cols="12">
                <b-img src="/images/item/jars.png" fluid height="300"></b-img>
              </b-col>
            </b-row>
            <b-row cols="4">
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-1.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-2.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-3.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-5.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-4.png" fluid />
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <h4 class="font-weight-bold">{{ itemName }}</h4>
            <p>
              <span class="font-weight-bold">Art. {{ itemArt }}</span>
              <span class="app-secondary-color">/ On Order as {{ lastOrderDate }}</span>
            </p>
            <p class="app-secondary-color">{{ description }}</p>
            <h4 class="h3 font-weight-bold">{{ price }}</h4>
            <b-btn-group class="d-block mt-3">
              <b-button
                variant="warning"
                class="custom-btn rounded-pill text-white font-weight-bold el-bg-color border-0 w-75 d-inline-block py-3"
                >Add to Cart +</b-button
              >
              <b-button
                variant="warning"
                class="custom-btn rounded-circle bg-transparent app-shadow p-3 border-0 d-inline-block ml-2"
                ><b-img src="/icons/star.svg"></b-img
              ></b-button>
              <b-button
                variant="warning"
                class="custom-btn rounded-circle bg-transparent app-shadow p-3 border-0 d-inline-block ml-2"
                ><b-img src="/icons/highRate.svg"></b-img
              ></b-button>
            </b-btn-group>
            <p class="mt-5 app-secondary-color">{{ fullDescription }}</p>
            <p class="border-top py-2">
              <span class="font-weight-bold">Color :</span> {{ itemColor }} &rightarrow;
            </p>
            <p class="border-top py-2 font-weight-bold">
              <a href="#"> Read more about product &rightarrow; </a>
            </p>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <b-col>
            <h2 class="h1 font-weight-bold">Also ordered with this product</h2>
          </b-col>
        </b-row>
        <b-row cols-xl="4">
          <b-col v-for="(item, index) in popularItems()" :key="index">
            <AppItem
              :imagePath="item.image"
              :itemName="item.name"
              :description="item.description"
              :price="item.price.priceValue"
              :discount="item.discount"
              :currency="item.price.currency"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import items from '@/data/items.json'

export default {
  data() {
    return {
      items,
      itemName: 'VINTER 2020 VINTER 2020',
      itemArt: '890.321.44',
      lastOrderDate: '4/04/2022',
      description:
        'Jar with lid and tray, 5 pcs., glass stopper jars and boxes will help organize convenient storage.',
      fullDescription:
        'These jars and boxes will help organize convenient storage of various small things. You can move the containers at any time if you need the items stored in them, not only in the bathroom.',
      price: '$62,392.31',
      itemColor: 'Black',
    }
  },
  methods: {
    popularItems() {
      return this.items.filter(item => {
        return item.popular === true
      })
    },
  },
}
</script>

<style scoped lang="scss">
$app-color: #ff9900 !default;
.custom-btn {
  &:hover,
  &:active,
  &:focus {
    background: $app-color;
  }
}
</style>
