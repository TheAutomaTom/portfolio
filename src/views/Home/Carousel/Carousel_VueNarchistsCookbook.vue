<template>
  <div class="w-full absolute">
    <!-- Hero -->
    <span class="title-chip">Front-End User Interfaces</span>
    <img
      class="w-full"
      src="../../../assets/imgs/Vue_Logo.png"
      alt="Front-End User Interfaces"
    />

    <!-- Content -->
    <div class="carousel-info-wrapper">
      <!-- Title -->
      <h1>The&nbsp;Vue-Narchists' Cookbook&nbsp;Ⓐ</h1>

      <!-- Description -->
      <div class="mb-3">
        <p>Specialized front-end solutions in Vue.js 3</p>
        <p-hr />
      </div>

      <div class="carousel-footer-wrapper">
        <!-- Links -->
        <div class="carousel-links-wrapper">
          <link-with-icon
            url="https://github.com/TheAutomaTom/The-Vue-Narchists-Cookbook"
            icon="pi-github"
            label="REPOSITORY"
          />
          <link-with-icon
            url="https://www.surrealitycheck.org/The-Vue-Narchists-Cookbook/"
            icon="pi-external-link"
            label="LIVE SITE"
          />
        </div>
        <!-- Tags -->
        <div class="carousel-chip-wrapper">
          <span class="tag-chip bg-cyan-800">Vue.js 3</span>
          <span class="tag-chip bg-cyan-800">Typescript</span>
          <span class="tag-chip bg-cyan-800">Pinia</span>
          <span class="tag-chip bg-cyan-800">Router</span>
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
export default { name: "Carousel_3PA" };
</script>
<style scoped lang="scss"></style>
