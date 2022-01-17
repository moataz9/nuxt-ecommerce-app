<template>
  <div class="app-shadow rounded-30 py-4 px-5 h-100">
    <div style="height: 150px">
      <b-img fluid :src="imagePath" :alt="categoryName" />
    </div>
    <h6 class="mb-0 mt-4">{{ categoryName }}</h6>
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
  },
}
</script>
