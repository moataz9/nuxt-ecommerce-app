<template>
  <div class="rounded-60 h-100">
    <!-- :interval="4000" -->
    <b-carousel
      id="app-carousel"
      class="h-100"
      v-model="slide"
      controls
      indicators
      fade
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(item, index) in 5"
        :key="index"
        :img-src="`https://picsum.photos/1024/480/?image=5${item}`"
        :caption="`image ${item}`"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
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
.carousel-indicators .active {
  background-color: $app-color;
}
</style>
