<template>
  <div id="root" class="app-wrapper">
    <!-- Modal ------------------------------------------------------->
    <!-- Header ------------------------------------------------------>
    <Header />
    <div class="layout-wrapper">
      <div class="header-buffer" />
      <!-- Content ------------------------------------------------------>
      <div class="content-wrapper">
        <Content class="content">
          <template v-slot:content>
            <router-view />
          </template>
        </Content>
      </div>
    </div>
    <!-- Footer ------------------------------------------------------>
    <!-- <Footer class="footer-wrapper" /> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Content from "./components/app/Content.vue";
import Header from "./components/app/Header.vue";
import DialogMask from "./components/app/DialogMask.vue";

//Tailwind Cheat sheet: { sm: "300px", md: "768px", lg: "976px", xl: "1440px" }
// let isMobile = ref(window.innerWidth < 767.5);
// let mobileClass = ref(isMobile.value ? "px-7" : "");
// const onResize = (e: Event) => {
//   isMobile.value = window.innerWidth < 767.5;
//   mobileClass.value = isMobile.value ? "px-7" : "";
// };

// onMounted(() => {
//   window.addEventListener("resize", onResize);
// });
// onUnmounted(() => {
//   window.removeEventListener("resize", onResize);
// });
// function handleScroll() {
//   app.IsScrolled = window.scrollY > 0;
// }
</script>

<style scoped lang="scss">
.app-wrapper {
  @apply w-full;
}
.layout-wrapper {
  @apply grid grid-rows-2;
  //Note: Row 1 is the header height
  grid-template-rows: 2.25em 1fr;
  @media (max-width: 500px) {
    grid-template-rows: 4.5em 1fr;
  }
}
.header-buffer {
  @apply w-full h-9;
  @media (max-width: 500px) {
    @apply h-16;
  }
}
$footer-height: 2em;
.content-wrapper {
  @apply flex justify-center;
  padding-bottom: $footer-height;
}
.content {
  @apply w-full h-full max-w-4xl flex;
}
.footer-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-height;
}
</style>
