<template>
  <div>
    <h3 class="pl-4">Android and iOS Apps</h3>

    <!-- IMAGE -->

    <div class="w-full absolute">
      <img
        class="w-full"
        alt="user header"
        src="../../../assets/imgs/LGRM_card.png"
      />

      <!-- Footer -->
      <div class="footer-wrapper">
        <!-- Title -->
        <h1>The Lean & Green Recipe Machine</h1>

        <div>
          <!-- Description -->
          <div class-mb-3>
            <p>
              Xamarin.Forms mobile app released on Android and iOS. Useful
              recipe maker for my friend's "Optavia" health-coaching program.
            </p>
          </div>
          <!-- Links & Tags -->
          <div>
            <p-hr />
            <div class="flex flex-wrap justify-center py-3">
              <a
                class="mx-3"
                href="https://play.google.com/store/apps/details?id=com.TomgCo.LGRM.android"
                ><h3><i class="pi pi-android px-1"></i>Play Store</h3></a
              >
              <a href=""
                ><h3><i class="pi pi-apple px-1"></i>Apple Store</h3></a
              >
            </div>
            <!-- Tags -->
            <div class="chip-wrapper">
              <span class="chip">Xamarin.Form</span>
              <span class="chip">C#</span>
              <span class="chip">Sql Lite</span>
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
export default { name: "Repo_LGRM" };
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
  @apply rounded-full px-2 py-1 mx-1 my-2 text-sm font-bold;
  font-family: monospace;
  color: var(--primary-color-text);
  background-color: var(--primary-color);
}
</style>
