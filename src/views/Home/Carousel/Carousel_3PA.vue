<template>
  <div class="w-full absolute">
    <!-- Hero -->
    <span class="title-chip" style="top: 3%; background-color: crimson"
      >Date Engineering</span
    >
    <img
      class="w-full"
      src="../../../assets/imgs/3PA_logo_sm.png"
      alt="Third Party Animal"
    />

    <!-- Content -->
    <div class="carousel-info-wrapper">
      <!-- Title -->
      <h1>Third&nbsp;Party Animal&nbsp;🌹</h1>

      <!-- Description -->
      <div class="mb-3">
        <p>
          CSV cruncher focussed on extracting meaningful assertions from public
          voter records.
        </p>
        <p-hr />
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
