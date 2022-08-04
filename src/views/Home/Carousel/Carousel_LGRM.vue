<template>
  <div class="w-full absolute">
    <!-- Hero -->
    <span
      class="title-chip bg-sky-900"
      style="top: 37%; transform: rotate(0deg)"
      >Android &amp; iOS&nbsp;Apps</span
    >
    <img
      class="w-full"
      src="../../../assets/imgs/LGRM_card.png"
      alt="Mobile apps"
    />

    <!-- Content -->
    <div class="carousel-info-wrapper">
      <!-- Title -->
      <h1>Lean&nbsp;&amp; Green Recipe&nbsp;Machine</h1>

      <!-- Description -->
      <div class="mb-3">
        <p>
          Xamarin.Forms mobile app released on Android and iOS. Useful recipe
          maker for my friend's "Optavia" health-coaching program.
        </p>
        <p-hr />
      </div>

      <div class="carousel-footer-wrapper">
        <!-- Links -->
        <div class="carousel-links-wrapper">
          <link-with-icon
            url="https://play.google.com/store/apps/details?id=com.TomgCo.LGRM.android"
            icon="pi-android"
            label="Play Store"
          />
          <link-with-icon url="" icon="pi-apple" label="Apple Store" />
        </div>
        <!-- Tags -->
        <div class="carousel-chip-wrapper">
          <span class="tag-chip">Xamarin.Form</span>
          <span class="tag-chip">C#</span>
          <span class="tag-chip">Sql Lite</span>
          <span class="tag-chip">Android</span>
          <span class="tag-chip">iOS</span>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>
<script lang="ts">
export default { name: "Carousel_LGRM" };
</script>
<style scoped lang="scss"></style>
