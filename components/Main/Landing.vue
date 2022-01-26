<template>
  <div class="container-xxl mrl-prl-0">
    <b-container fluid class="mrl-prl-0">
      <b-row class="appslider mrl-prl-0">
        <b-col class="appslider mrl-prl-0">
          <!-- App Description -->
          <div class="appslider-desc app-shadow w-100 h-100 rounded-60 p-5">
            <h1 class="font-weight-bold mb-3">Furniture for every taste!</h1>
            <ul class="pl-0 text-black app-desc">
              <li v-for="(item, index) of descriptionList" :key="index">
                {{ item }}
              </li>
            </ul>
            <ul class="pl-0 mb-0 list-unstyled" v-if="!mobile">
              <li>
                <nuxt-link
                  class="desc-link app-shadow el-bg-color text-white"
                  :to="{ name: 'catalog' }"
                >
                  Go To Catalog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="desc-link app-shadow app-color bg-white"
                  :to="{ name: 'articals' }"
                >
                  Enter article list
                </nuxt-link>
              </li>
            </ul>
          </div>

          <!-- App Slider -->
          <div class="appslider-slider rounded-60 h-100">
            <b-carousel
              id="app-carousel"
              :interval="4000"
              class="h-100"
              v-model="slide"
              controls
              indicators
              fade
              background="#ababab"
              style="text-shadow: 1px 1px 2px #333"
            >
              <b-carousel-slide
                v-for="(img, index) in images"
                :key="index"
                :img-src="img"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      default: [
        'https://via.placeholder.com/468x300.png/999/000/?text=The+slider+have+no+images',
      ],
    },
  },

  data() {
    return {
      descriptionList: [
        'Hoodies, hot cups and thermoses',
        'Christmas toys, key chains',
        'Beginning of the list of things that you can',
      ],
      slide: 0,
      mobile: null,
    }
  },

  mounted() {
    this.mobile = this.$screens.mobile()
  },
}
</script>

<style lang="scss">
$app-color: #ff9900 !default;

.carousel-inner,
.carousel-item,
img {
  height: 100%;
  min-height: 100%;
}
.carousel-control-next {
  opacity: 1;
  background: linear-gradient(270deg, rgba(#000, 0.5) 0%, rgba(#000, 0) 100%);
  &:hover,
  &:focus {
    opacity: 1;
  }
  &-icon {
    background-image: url('/icons/next.svg');
    height: 2rem;
  }
}
.carousel-control-prev {
  opacity: 0;
  user-select: none;
  // cursor: default;
  z-index: -1;
  &:hover,
  &:focus {
    opacity: 0;
  }
}
.carousel-indicators {
  margin-left: 55%;
  margin-bottom: 2rem;
  .active {
    background-color: $app-color;
  }
}
.appslider {
  position: relative;
  &-desc {
    position: absolute;
    color: white;
    z-index: 100;
    max-width: 45%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }
  &-slider {
    height: 500px;
    min-height: 500px;
    max-height: 500px;
  }
}

@media screen and (max-width: 720px) {
  .mrl-prl-0 {
    margin-right: 0;
    margin-left: 0;
    padding-right: 0;
    padding-left: 0;
  }
  .appslider-desc {
    min-width: 100% !important;
    max-width: 100% !important;
    padding-top: 6rem !important;
    height: 60% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .appslider-slider {
    height: 65vh;
    min-height: 65vh;
    max-height: 65vh;
  }
  .carousel-indicators {
    margin-left: 15%;
    // margin-bottom: 2rem;
  }
  .carousel-control-next-icon {
    margin-top: 25rem;
  }
}
</style>

<style lang="scss" scoped>
$app-color: #ff9900 !default;

ul.app-desc {
  list-style: none;
  li {
    position: relative;
    padding-left: 0.7rem;
    color: white;

    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: $app-color;
      border-radius: 50%;
      position: absolute;
      top: 12px;
      left: 0;
    }
  }
}

.desc-link {
  display: block;
  margin-top: 1.2rem;
  padding: 1.3rem 0;
  border-radius: 60px;
  text-align: center;
  font-weight: bold;
  // border: 2px solid $app-color;
  box-sizing: border-box;
  &:hover {
    text-decoration: none;
  }
}
</style>
