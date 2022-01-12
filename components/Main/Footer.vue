<template>
  <footer class="app-bg-color mt-4">
    <div class="container-xxl">
      <b-container fluid>
        <b-row class="py-4">
          <b-col cols="12">
            <b-img src="/images/logo.svg" alt="logo"></b-img>
          </b-col>
        </b-row>
        <b-row class="row-cols-xl-4">
          <!--  -->
          <b-col>
            <h3 class="font-weight-bold">information</h3>
            <p>All rights reserved © 2015 online store AIKEA.BY Belarus.</p>
            <address>
              UNP 191828159 IE Pareiko V.S., registration number in the
              commercial register 158299
            </address>
            <p>Privacy Policy</p>
          </b-col>
          <!--  -->
          <b-col>
            <h3 class="font-weight-bold">Menu</h3>
            <ul
              v-for="(linkArr, i) in footerLinks"
              :key="i"
              class="pl-0 list-unstyled"
            >
              <li
                v-for="(linkInfo, index) in linkArr"
                :key="index"
                class="d-inline-block"
              >
                <nuxt-link :to="{ name: linkInfo.routeName }">
                  {{ linkInfo.name }}
                </nuxt-link>
              </li>
            </ul>
          </b-col>
          <b-col>
            <h3 class="font-weight-bold">Contacts</h3>
            <ul class="pl-0 list-unstyled">
              <li>Minsk</li>
              <li>
                <address>St. Pervomaiskaya, D. 1, Apt. 43</address>
              </li>
              <li>
                <a href="tel:+"> + 375 434 847 28 84 </a>
              </li>
              <li>
                <a href="tel:+"> + 375 448 473 09 48 </a>
              </li>
              <li>
                <a href="mailto:#"> ikeaekspress@gmail.com </a>
              </li>
            </ul>
          </b-col>
          <b-col>
            <ul class="list-unstyled pl-0">
              <li>
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
          { routeName: 'in-stock', name: 'Products in stock' },
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
          { routeName: 'shoping-list', name: 'Shopping List' },
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

<style></style>
