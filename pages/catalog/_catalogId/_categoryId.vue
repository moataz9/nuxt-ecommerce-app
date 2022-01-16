<template>
  <div>
    <AppNavigation :path="$route.path" />
    <!-- catalog id is {{ $route.params.catalogId }} <br />
    category id is {{ $route.params.categoryId }} <br>
    full Path is {{ $route.fullPath }} <br>
    Path is {{ $route.path }} <br> -->
    <!-- <ul>
      <li v-for="route in currentRoute()" :key="route">{{ route }} </li>
    </ul> -->

  </div>
</template>

<script>
export default {
  methods: {
  },
}
</script>

<style></style>
