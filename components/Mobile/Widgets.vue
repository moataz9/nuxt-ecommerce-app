<template>
  <div class="mobile-widgets">
      <ul class="app-icons mobile-widgets-container mb-0">
        <!-- insert shopping list -->
        <li>
          <nuxt-link class="app-color font-size-18" :to="{ name: 'index' }">
            insert shopping list
          </nuxt-link>
        </li>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style lang="scss">
.app-icons {
  padding-left: 0;
  li {
    display: inline-block;
  }
}
.mobile-widgets {
  background-color: #fff;
  padding: 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  border-radius: 30px 30px 0 0;
  border-top: 2px solid #ccc;
  &-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
</style>
