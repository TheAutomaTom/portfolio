<template>
  <div>
    <Carousel />

    <div class="w-full max-w-xl m-auto mt-6">
      <router-link :to="'/ThePerfectNumberInput'"
        ><h4><i class="pi px-1 pi-briefcase"></i>"The Perfect Number Input"</h4>
      </router-link>
      <div class="ml-6">
        <span class="mb-1"
          ><em> Formatting data for literary expectations can be tricky. </em>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./Home/Carousel.vue";
</script>
<style scoped lang="scss"></style>
