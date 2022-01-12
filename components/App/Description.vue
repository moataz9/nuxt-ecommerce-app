<template>
  <div class="app-shadow w-100 h-100 rounded-60 p-5">
    <h1 class="font-weight-bold mb-3">Furniture for every taste!</h1>
    <ul class="pl-0 text-black app-desc">
      <li v-for="(item, index) of descriptionList" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul class="pl-0 mb-0 list-unstyled">
      <li>
        <nuxt-link class="desc-link app-shadow el-bg-color text-white" :to="{ name: 'catalog' }">
          Go To Catalog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="desc-link app-shadow app-color" :to="{ name: 'articals' }">
          Enter article list
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptionList: [
        'Hoodies, hot cups and thermoses',
        'Christmas toys, key chains',
        'Beginning of the list of things that you can',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$app-color: #ff9900 !default;

ul.app-desc {
  list-style: none;
  li {
    position: relative;
    padding-left: 0.7rem;

    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: $app-color;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
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
