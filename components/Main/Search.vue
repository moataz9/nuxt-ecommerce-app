<template>
  <div class="container-xxl py-4">
    <b-container fluid class="d-flex justify-content-between align-items-center">
      <div>
        <img
          class="humburger-icon"
          v-b-toggle.app-sidebar
          src="/icons/hamburger.svg"
          alt="humburger-icon"
        />
      </div>

      <b-form class="w-50 search">
        <button class="search-btn">
          <img src="/icons/search.svg" alt="search" />
        </button>
        <b-form-input
          class="custom-form-control px-5"
          v-model="search"
          placeholder="What do you want to find?"
        />
      </b-form>

      <div>
        <nuxt-link class="app-color font-size-18" :to="{ name: 'index' }">
          insert shopping list
        </nuxt-link>
      </div>

      <ul class="app-icons mb-0">
        <!-- popular products -->
        <li>
          <nuxt-link :to="{ name: 'popular' }">
            <img src="/icons/star.svg" alt="star" />
          </nuxt-link>
        </li>
        <!-- in cart -->
        <li class="cart">
          <nuxt-link :to="{ name: 'cart' }">
            <span class="cart-count app-color">{{ checkCartCount() }}</span>
            <img src="/icons/cart.svg" alt="cart" />
          </nuxt-link>
        </li>
        <!-- user login -->
        <li>
          <nuxt-link :to="{ name: 'login' }">
            <img src="/icons/user.svg" alt="user" />
          </nuxt-link>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      cartCount: 100,
    }
  },
  methods: {
    checkCartCount() {
      return this.cartCount > 99 ? '99+' : this.cartCount
    },
  },
}
</script>

<style lang="scss" scoped>
$app-shadow: inset 0px 0px 10px rgba(#000, 0.05);

.humburger-icon {
  width: 30px;
}
.app-icons {
  padding-left: 0;
  li {
    display: inline-block;
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
}
.cart {
  position: relative;
  &-count {
    position: absolute;
    z-index: 1;
    font-size: 12px;
    font-weight: bold;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.search {
  position: relative;
  &-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    border: none;
    background-color: transparent;
    padding: 0;
    width: 23px;
    height: 23px;
    // opacity: 0.6;
    img {
      max-width: 100%;
      margin-top: -6px;
    }
  }
}
.custom-form-control {
  box-shadow: $app-shadow;
  border-radius: 30px;
  padding: 1.7rem;
  border: none;
  &:focus {
    border-color: #eee;
    outline: 0;
    // box-shadow: 0 0 0 0.2rem rgba(159, 183, 228, 0.25);
    background: linear-gradient(98.34deg, #ffffff 0%, #ffffff 100%);
    box-shadow: inset 0px 0px 5px rgba(255, 153, 0, 0.3);
    &::placeholder {
      opacity: 0;
    }
  }
}
</style>
