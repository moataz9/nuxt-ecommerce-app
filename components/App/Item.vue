<template>
  <div
    class="item rounded-30 py-4 h-100"
    :class="{ 'horizontal border-bottom rounded-0': cartDesign }"
  >
    <div :class="`${cartDesign ? 'cart-design' : ''} item-img px-1`">
      <img :src="imagePath" :alt="itemName" />
    </div>

    <section :class="{ 'w-75': cartDesign }">
      <div class="item-info" :class="`${!cartDesign ? 'px-4' : ''}`">
        <p v-if="discount" class="item-info_discount m-0">{{ discount }}%</p>
        <br v-else />
        <h5 class="item-info_name">{{ itemName }}</h5>
        <h6 class="item-info_desc">{{ description }}</h6>
      </div>

      <div class="item-pricing" :class="`${!cartDesign ? 'px-4' : ''}`">
        <p v-if="discount" class="item-pricing_old">
          <s> {{ price.toFixed(2) }} {{ currency }} </s>
        </p>
        <!-- {{ price.toFixed(2) }} -->
        <p class="item-pricing_new">{{ actualPrice }} {{ currency }}</p>
      </div>
    </section>

    <div class="item-cart" :class="{ 'cart-design': cartDesign, 'px-4': !cartDesign }">
      <div class="item-cart-count">
        <div style="width: 5rem; text-align: right">
          <img
            style="cursor: pointer; user-select: none"
            src="/icons/minus.svg"
            @click="itemCount--"
            v-show="itemCount > 1"
            draggable="false"
          />
          <input
            class="text-center d-inline-block border-0"
            style="width: 30px"
            type="text"
            v-model.number="itemCount"
          />
          <img
            style="cursor: pointer; user-select: none"
            src="/icons/plus.svg"
            @click="itemCount++"
            draggable="false"
          />
        </div>
      </div>

      <b-button
        size="sm"
        variant="warning"
        class="item-cart_plus ml-auto"
        @click="addItemToCart()"
      >
        <img v-if="!inCart" src="/icons/cart-plus.svg" draggable="false" alt="" />
        <img v-else src="/icons/check.svg" draggable="false" alt="" />
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    cartDesign: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      itemCount: null,
      inCart: false,
    }
  },
  computed: {
    ...mapGetters('cart', ['getSingleCartItemCount']),
    actualPrice() {
      let fPrice = this.discount ? this.newPrice() : this.price
      return fPrice.toFixed(2)
    },
  },
  mounted() {
    let singleItemCount = this.getSingleCartItemCount(this.itemId)
    this.itemCount = singleItemCount
    if (singleItemCount) {
      this.inCart = true
    }
  },
  watch: {
    itemCount(val) {
      if (val !== this.getSingleCartItemCount(this.itemId)) {
        this.inCart = false
      }
    },
  },
  methods: {
    newPrice() {
      if (this.discount > 0 && this.discount < 100) {
        return this.price - this.price * (this.discount / 100)
      }
    },
    addItemToCart() {
      if (!this.itemCount) return
      this.$store.commit('cart/addItem', {
        itemId: this.itemId,
        imagePath: this.imagePath,
        itemName: this.itemName,
        description: this.description,
        price: this.price,
        discount: this.discount,
        currency: this.currency,
        itemCount: this.itemCount,
        finalPrice: this.actualPrice * this.itemCount,
      })
      this.inCart = true
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
  &.horizontal {
    flex-direction: row;
  }
  @media (max-width: 720px) {
    &:not(.horizontal) {
      box-shadow: $app-shadow;
    }
  }
  &:not(.horizontal):hover {
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
    &.cart-design {
      max-height: 100%;
      height: auto;
    }
    img {
      width: 100%;
      max-height: 100%;
    }
  }
  &-info {
    &_discount {
      color: red;
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
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
  &-cart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    transform: translateY(156%);
    transition: transform 0.5s ease;
    &.cart-design {
      flex-direction: column;
      align-items: flex-start;
      transform: translateY(0);
    }
    @media (max-width: 720px) {
      transform: translateY(0);
    }
    input:focus {
      box-shadow: $app-shadow;
      outline: none;
      border-radius: 10px;
    }
    &_plus {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: $app-color;
      border: none;
      &:focus,
      &:active {
        border: none;
      }
      img {
        width: 105%;
      }
    }
  }
}
</style>
