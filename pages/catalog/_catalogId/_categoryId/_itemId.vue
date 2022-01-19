<template>
  <div>
    <div class="container-xxl">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <AppNavigation :path="$route.path" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-row no-gutters cols="4">
              <b-col cols="12">
                <b-img src="/images/item/jars.png" fluid height="300"></b-img>
              </b-col>
            </b-row>
            <b-row cols="4">
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-1.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-2.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-3.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-5.png" fluid />
                </div>
              </b-col>
              <b-col>
                <div class="p-1">
                  <b-img src="/images/item/jars-4.png" fluid />
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="border"> </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
