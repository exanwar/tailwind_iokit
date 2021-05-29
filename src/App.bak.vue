<template>
  <div class="bg-gray-200 dark:bg-gray-900 shadow-lg">
    <div class="flex justify-evenly items-center h-20 mr-10">
      <div class="">
        <img
          alt="Vue logo"
          src="./assets/logo.png"
          class="h-16 w-16 rounded-full"
        />
      </div>
      <div class="flex justify-between">
        <router-link to="/">
          <div class="flex flex-col">
            <span
              class="
                rounded-2xl
                cursor-pointer
                text-xl
                font-extrabold
                tracking-wide
                font-gray-900
                dark:text-gray-200
                px-2.5
                py-1
                hover:bg-green-700
                hover:text-gray-200
              "
              >Home</span
            >
            <span class="mt-1.5 mx-2.5 h-1 w-14 bg-green-700"></span>
          </div>
        </router-link>
        <router-link to="/about">
          <div
            class="
              rounded-3xl
              cursor-pointer
              text-xl
              font-semibold
              tracking-wide
              text-gray-700
              dark:text-gray-200
              px-2.5
              py-1
              hover:bg-green-700
              hover:text-gray-200
            "
          >
            About
          </div>
        </router-link>
      </div>

      <div class="">
        <MoonIcon
          class="h-6 w-6 text-gray-900 cursor-pointer"
          v-if="lightMode"
          @click="switchDarkAndLight"
        />
        <SunIcon
          class="h-6 w-6 text-gray-200 cursor-pointer"
          v-else
          @click="switchDarkAndLight"
        />
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { MoonIcon, SunIcon } from "@heroicons/vue/outline";
export default {
  components: {
    MoonIcon,
    SunIcon,
  },
  data() {
    return {
      lightMode: true,
    };
  },
  methods: {
    switchDarkAndLight() {
      if (!this.lightMode) {
        document.body.classList.remove("dark");
        this.lightMode = true;
      } else {
        document.body.classList.add("dark");
        this.lightMode = false;
      }
    },
  },
};
</script>
<style lang="scss"></style>
