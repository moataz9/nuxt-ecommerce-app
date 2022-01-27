<template>
  <div>
    <MainNavbar class="less-md-none" v-if="!mobile" />
    <MobileNavbar class="more-md-none" v-else/>
    <MainSearch class="less-md-none" v-if="!mobile" />
    <MobileWidgets class="more-md-none" v-else />

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

<style>
@media (max-width: 720px) {
  .less-md-none {
    display: none;
  }
}
@media (min-width: 720px) {
  .more-md-none {
    display: none;
  }
}
</style>
