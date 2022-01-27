<template>
  <div class="item rounded-30 py-4 h-100">
    <div class="item-img px-1">
      <img :src="imagePath" :alt="itemName" />
    </div>

    <div class="item-info px-4">
      <p v-if="discount" class="item-info_discount m-0">{{ discount }}%</p>
      <br v-else />
      <h5 class="item-info_name">{{ itemName }}</h5>
      <h6 class="item-info_desc">{{ description }}</h6>
    </div>

    <div class="item-pricing px-4">
      <p v-if="discount" class="item-pricing_old">
        <s> {{ price.toFixed(2) }} {{ currency }} </s>
      </p>
      <!-- {{ price.toFixed(2) }} -->
      <p class="item-pricing_new">
        {{ discount ? newPrice().toFixed(2) : price.toFixed(2) }} {{ currency }}
      </p>
    </div>

    <div class="item-cart px-4">
      <div class="item-cart-count">
        <img
          style="cursor: pointer; user-select: none"
          src="/icons/plus.svg"
          @click="itemCount++"
          draggable="false"
        />
        <!-- <span class="px-2 d-inline-block">{{ itemCount }}</span> -->
        <input
          class="text-center d-inline-block border-0"
          style="width: 30px"
          type="text"
          :value="itemCount"
        />
        <img
          style="cursor: pointer; user-select: none"
          src="/icons/minus.svg"
          @click="itemCount--"
          draggable="false"
        />
      </div>

      <b-button
        size="sm"
        variant="warning"
        class="item-cart_plus"
        @click="addItemToCart(itemId, itemCount)"
      >
        <img src="/icons/cart-plus.svg" draggable="false" alt="" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemId: {
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
    },
    currency: {
      type: String,
      required: true,
    },
    // itemCount: {
    //   type: Number,
    //   required: false,
    //   default: 1,
    // },
  },
  data() {
    return {
      selectedItem: null,
      itemCount: 1
      // options: [
      //   { value: null, text: '1 pc', disabled: true },
      //   { value: 2, text: '2 pc' },
      //   { value: 3, text: '3 pc' },
      //   { value: 4, text: '4 pc' },
      //   { value: 5, text: '5 pc' },
      // ],
    }
  },
  methods: {
    newPrice() {
      if (this.discount > 0 && this.discount < 100) {
        return this.price - this.price * (this.discount / 100)
      }
    },
    addItemToCart(id, count) {
      this.$store.commit('cart/addItem', { id, count })
    },
  },
}
</script>

<style lang="scss" scoped>
$app-shadow: inset 0px 0px 10px rgba(#000, 0.05);
$app-color: #ff9900 !default;

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 720px) {
    box-shadow: $app-shadow;
  }
  &:hover {
    box-shadow: $app-shadow;
    transition: all 0.3s ease-in-out;
    .item-cart {
      transform: translateY(0);
    }
  }
  &-img {
    height: 300px;
    max-height: 300px;
    text-align: center;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
  &-info {
    &_discount {
      color: red;
      // font: 16px bold;
      font-weight: bold;
      margin-top: 0;
    }
    &_name {
      font-weight: 600;
    }
    &_desc {
      font-style: italic;
    }
  }
  &-pricing {
    &_old,
    &_new {
      margin-bottom: 0;
    }
    &_old {
      font-size: 14px;
      color: #7d7d7d;
    }
    &_new {
      font-size: 30px;
      font-weight: bold;
    }
  }
  &-cart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    // margin-top: -0.6rem;
    transform: translateY(155%);
    transition: transform 0.5s ease;
    @media (max-width: 720px) {
      transform: translateY(0);
    }
    &_plus {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: $app-color;
      border: none;
      img {
        width: 110%;
      }
    }
  }
}
</style>
