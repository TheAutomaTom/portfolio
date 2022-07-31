<template>
  <div id="root" class="app-wrapper">
    <!-- Modal ------------------------------------------------------->
    <!-- Header ------------------------------------------------------>
    <Header />
    <div class="grid grid-rows-2" style="grid-template-rows: 3em 1fr">
      <p-hr class="buffer-header" />
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
import Footer from "./components/app/Footer.vue";
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
  height: 3em;
}
$footer-height: 2em;
.content-wrapper {
  @apply flex justify-center;
  padding-bottom: $footer-height;
}
.content {
  @apply w-full max-w-4xl flex;
}
.footer-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-height;
}
</style>
