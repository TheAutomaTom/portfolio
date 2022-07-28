<template>
  <div id="root" class="app-wrapper">
    <!-- Modal ------------------------------------------------------->
    <!-- Header ------------------------------------------------------>
    <Header />
    <div class="grid grid-rows-2" style="grid-template-rows: 3em 1fr" />
    <div class="buffer-header" />
    <!-- Content ------------------------------------------------------>
    <div class="content-wrapper">
      <Content class="content">
        <template v-slot:content>
          <router-view />
        </template>
      </Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Header from "./components/app/Header.vue";

//Tailwind Cheat sheet: { sm: "300px", md: "768px", lg: "976px", xl: "1440px" }
let isMobile = ref(window.innerWidth < 767.5);
let mobileClass = ref(isMobile.value ? "px-7" : "");
const onResize = (e: Event) => {
  isMobile.value = window.innerWidth < 767.5;
  mobileClass.value = isMobile.value ? "px-7" : "";
};

onMounted(() => {
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<style scoped lang="scss">
.app-wrapper {
  @apply w-full;
}
.buffer-header {
  @apply w-full;
}
$footer-height: 15em;
.content-wrapper {
  @apply w-full flex justify-center;
  padding-bottom: $footer-height;
}
.content {
  @apply w-full max-w-2xl flex;
}
.footer-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-height;
}
</style>
