<template>
  <div>
    <h3 class="pl-4">Vue 3 UIs</h3>

    <!-- IMAGE -->

    <div class="w-full absolute">
      <img
        class="w-full"
        alt="user header"
        src="../../../assets/imgs/Vue_Logo.png"
      />

      <!-- Footer -->
      <div class="footer-wrapper">
        <!-- Title -->
        <h1>The Vue-Narchists' Cookbook</h1>

        <div>
          <!-- Description -->
          <div class-mb-3>
            <p>Specialized front-end solutions in Vue.js 3</p>
          </div>
          <!-- Links & Tags -->
          <div>
            <p-hr />
            <div class="flex flex-wrap justify-center py-3">
              <a
                class="mx-3"
                href="https://github.com/TheAutomaTom/The-Vue-Narchists-Cookbook"
                ><h3><i class="pi pi-github px-1"></i>REPOSITORY</h3></a
              >
              <a
                class="mx-3"
                href="https://www.surrealitycheck.org/The-Vue-Narchists-Cookbook/"
                ><h3><i class="pi pi-external-link px-1"></i>LIVE SITE</h3></a
              >
            </div>
            <!-- Tags -->
            <div class="chip-wrapper">
              <span class="chip">Vue.js 3</span>
              <span class="chip">Typescript</span>
              <span class="chip">Pinia</span>
              <span class="chip">Router</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>
<script lang="ts">
export default { name: "Carousel_VueNarchistsCookbook" };
</script>
<style scoped lang="scss">
.footer-wrapper {
  @apply absolute bottom-0 w-full px-9 py-5 mt-10;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(22, 27, 34, 0.95) 80%,
    rgba(22, 27, 34, 0.8) 90%,
    rgba(22, 27, 34, 0) 100%
  );
}

.chip-wrapper {
  @apply flex flex-wrap justify-end;
}
.chip {
  @apply rounded-full px-2 py-1 mx-1 my-2 text-sm font-bold
  bg-green-400;
  font-family: monospace;
  color: var(--primary-color-text);
  // background-color: var(--primary-color);
}
</style>
