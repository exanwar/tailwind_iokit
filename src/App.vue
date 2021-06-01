<template>
  <div class="bg-gray-200 dark:bg-gray-900">
    <div class="container">
      <nav-bar></nav-bar>
    </div>
    <div class="">
      <home-hero></home-hero>
    </div>
    <div class="pb-80">
      <home-partners></home-partners>
    </div>
    <div class="py-20 bg-gray-200">
      <pricing-chart class="-mt-96"></pricing-chart>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import HomeHero from "./components/HomeHero";
import HomePartners from "./components/HomePartners";
import PricingChart from "./components/PricingChart";
export default {
  setup() {
    return {};
  },
  components: {
    NavBar,
    HomeHero,
    HomePartners,
    PricingChart,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
