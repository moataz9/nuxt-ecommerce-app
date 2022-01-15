<template>
  <footer class="app-bg-color mt-4 py-4">
    <div class="container-xxl">
      <b-container fluid>
        <b-row class="pb-4">
          <b-col cols="12">
            <b-img src="/images/logo.svg" alt="logo"></b-img>
          </b-col>
        </b-row>
        <b-row class="row-cols-1 row-cols-md-2 row-cols-xl-4">
          <!--  -->
          <b-col>
            <div class="pr-5">
              <h4 class="footer-title">information</h4>
              <div class="footer-info">
                <p>All rights reserved © 2015 online store AIKEA.BY Belarus.</p>
                <address>
                  UNP 191828159 IE Pareiko V.S., registration number in the
                  commercial register 158299
                </address>
                <p class="mt-4">Privacy Policy</p>
              </div>
            </div>
          </b-col>
          <!--  -->
          <b-col>
            <div class="pr-5">
              <h4 class="footer-title">Menu</h4>
              <ul
                v-for="(linkArr, i) in footerLinks"
                :key="i"
                class="footer-links"
              >
                <li
                  v-for="(linkInfo, index) in linkArr"
                  :key="index"
                  class="footer-links_link"
                >
                  <nuxt-link
                    class="text-decoration-none"
                    :to="{ name: linkInfo.routeName }"
                  >
                    {{ linkInfo.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </b-col>
          <!--  -->
          <b-col>
            <h4 class="footer-title">Contacts</h4>
            <ul class="pl-0 list-unstyled footer-info">
              <li>
                <address>
                  Minsk <br />
                  St. Pervomaiskaya, D. 1, Apt. 43
                </address>
              </li>
              <li>
                <a href="tel:+"> + 375 434 847 28 84 </a>
              </li>
              <li>
                <a href="tel:+"> + 375 448 473 09 48 </a>
              </li>
              <li class="mt-5">
                <a
                  href="mailto:moatazsamir9.in.khir99@gmail.com"
                  class="text-decoration-none"
                  title="real email to contact moataz"
                >
                  moatazsamir9.in.khir99@gmail.com
                </a>
              </li>
            </ul>
          </b-col>
          <!--  -->
          <b-col>
            <ul
              class="list-unstyled pl-0 d-flex justify-content-end flex-column h-100"
            >
              <li class="my-3">
                <b-img src="/images/social/instegram.png"></b-img>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        [
          { routeName: 'index', name: 'Home' },
          { routeName: 'catalog', name: 'Catalog' },
          { routeName: 'in_stock', name: 'Products in stock' },
        ],
        [
          { routeName: 'discounts', name: 'Discounts' },
          { routeName: 'popular', name: 'Popular' },
          { routeName: 'inspiration', name: 'Inspiration' },
        ],
        [
          { routeName: 'delivery', name: 'Delivery' },
          { routeName: 'services', name: 'Services' },
          { routeName: 'conditions', name: 'Conditions' },
        ],
        [
          { routeName: 'contacts', name: 'Contacts' },
          { routeName: 'insert', name: 'Insert' },
          { routeName: 'shoping_list', name: 'Shopping List' },
        ],
        [
          { routeName: 'cart', name: 'Cart' },
          { routeName: 'login', name: 'Personal account' },
          { routeName: 'favorites', name: 'Favorites' },
        ],
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$app-color: #ff9900 !default;

.footer {
  &-title {
    font-weight: bold;
    font-size: 1rem;
  }
  &-info {
    font-size: 14px;
  }
  &-links {
    font-size: 14px;
    list-style: none;
    padding-left: 0;
    &_link {
      display: inline-block;
      line-height: 1rem;
      &:not(:last-of-type) {
        border-right: 1px solid #ccc;
        padding-right: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>
