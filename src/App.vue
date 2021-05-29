<template>
  <div class="bg-gray-200 dark:bg-gray-900">
    <nav-bar></nav-bar>
    <home-hero></home-hero>
    <home-partners></home-partners>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import HomeHero from "./components/HomeHero";
import HomePartners from "./components/HomePartners";
export default {
  setup() {
    return {};
  },
  components: {
    NavBar,
    HomeHero,
    HomePartners,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
