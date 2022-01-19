<template>
  <div :class="shadow ? `app-shadow rounded-30 py-4 px-2 h-100` : ''">
    <div style="height: 150px">
      <b-img fluid :src="imagePath" :alt="categoryName" :class="!shadow ? 'rounded-sm' : ''" />
    </div>
    <h5 class="mb-0 mt-4">{{ categoryName }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    shadow: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>
