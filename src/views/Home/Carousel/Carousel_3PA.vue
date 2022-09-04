<template>
  <div class="w-full max-w-4xl">
    <!-- Hero -->
    <div class="hero-overlay">
      <span class="title-chip bg-red-800">Data Engineering</span>
      <img
        class="carousel-hero"
        src="../../../assets/imgs/3PA_logo_sm.jpg"
        alt="Third Party Animal"
      />
    </div>

    <!-- Content -->
    <div class="carousel-info-wrapper">
      <!-- Title -->
      <h1>Third&nbsp;Party Animal&nbsp;🌹</h1>

      <!-- Description -->
      <div class="mb-3">
        <p>
          <em class="text-neutral-400">
            CSV cruncher focussed on extracting meaningful assertions from
            public voter records.
          </em>
        </p>
        <hr />
      </div>

      <div class="carousel-footer-wrapper">
        <!-- Links -->
        <div class="carousel-links-wrapper">
          <link-with-icon
            url="https://github.com/TheAutomaTom/third-party-animal"
            icon="pi-github"
            label="REPOSITORY"
          />
        </div>
        <!-- Tags -->
        <div class="carousel-chip-wrapper">
          <span class="tag-chip">.Net WebApi</span>
          <span class="tag-chip">C# </span>
          <span class="tag-chip">EF Core</span>
          <span class="tag-chip">MS Sql Server</span>
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
