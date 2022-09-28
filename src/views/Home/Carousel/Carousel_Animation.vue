<template>
  <div class="w-full max-w-4xl">
    <!-- Hero -->
    <div class="hero-overlay">
      <span class="title-chip bg-violet-900">Fun Stuff</span>
      <img
        class="carousel-hero"
        alt="Animation"
        src="https://www.surrealitycheck.org/images/hero_animation.jpg"
        />
        <!-- src="../../../assets/imgs/Animation_card.png" -->
      </div>

    <!-- Content -->
    <div class="carousel-info-wrapper">
      <!-- Title -->
      <h1>Animation &amp; 3D&nbsp;Modelling</h1>

      <!-- Description -->
      <div class="mb-3">
        <p>
          <em class="text-neutral-400">
            All preparation for that ground-breaking independent game release.
          </em>
        </p>
        <hr />
      </div>

      <div class="carousel-footer-wrapper">
        <!-- Links -->
        <div class="carousel-links-wrapper">
          <link-with-icon
            url="https://www.youtube.com/channel/UC6hVaKQ7j7WcKOpjwJ87Wfw/videos"
            icon="pi-youtube"
            label="YOUTUBE CHANNEL"
          />
        </div>
        <!-- Tags -->
        <div class="carousel-chip-wrapper">
          <span class="tag-chip">3dsMax</span>
          <span class="tag-chip">Z-Brush</span>
          <span class="tag-chip">Premier Pro</span>
        </div>
      </div>

      <!--  -->
      <hr class="mt-4" />
    </div>
  </div>
</template>
<script lang="ts">
export default { name: "Carousel_Animation" };
</script>
