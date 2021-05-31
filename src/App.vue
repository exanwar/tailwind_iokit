<template>
  <div class="bg-gray-200 dark:bg-gray-900">
    <nav-bar></nav-bar>
    <home-hero></home-hero>
    <home-partners></home-partners>

    <div class="mx-w-md mx-auto mt-10 pb-12">
      <pricing-chart></pricing-chart>
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
