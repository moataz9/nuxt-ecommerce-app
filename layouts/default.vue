<template>
  <div>
    <MainNavbar v-if="!mobile" />
    <MobileNavbar v-else/>
    <MainSearch v-if="!mobile" />
    <MobileWidgets v-else />

    <AppSidebar />
    <div v-if="mobile && $route.name != 'index'" style="height: 4.7rem;"></div>
    <Nuxt />
    <MainFooter />
    <div v-if="mobile" style="height: 3rem;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
    }
  },
  mounted() {
    this.mobile = this.$screens.mobile()
  },
}
</script>

<style></style>
