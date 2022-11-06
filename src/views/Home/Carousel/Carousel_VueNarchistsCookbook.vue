<template>
  <div class="w-full max-w-4xl">
    <!-- Hero -->
    <div class="hero-overlay">
      <span class="title-chip bg-violet-900"> Front-End User Interfaces </span>
      <img
        class="carousel-hero"
        alt="Front-End User Interfaces"
        src="https://www.surrealitycheck.org/images/hero_vuenarchist.jpg"
        />
    </div>

    <!-- Content -->
    <div class="carousel-info-wrapper">
      <!-- Title -->
      <h1>The&nbsp;Vue-Narchists' Cookbook&nbsp;Ⓐ</h1>

      <!-- Description -->
      <div class="mb-3">
        <p>
          <em class="text-neutral-400"
            >Specialized front-end solutions in Vue.js 3</em
          >
        </p>
        <hr />
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
      <hr class="mt-4" />
    </div>
  </div>
</template>
<script lang="ts">
export default { name: "Carousel_3PA" };
</script>
