<template>
  <div>
    <!-- Hero -->
    <div class="w-full absolute">
      <h2 class="title-chip">Data Engineering</h2>
      <img
        class="w-full"
        alt="user header"
        src="../../../assets/imgs/3PA_logo_sm.png"
      />

      <!-- Content -->
      <div class="footer-wrapper">
        <!-- Title -->
        <h1>Third Party Animal 🌹</h1>

        <!-- Description -->
        <div class="mb-3">
          <p>
            CSV cruncher focussed on extracting meaningful assertions from
            public voter records.
          </p>
          <p-hr />
        </div>

        <div class="carousel-footer-wrapper">
          <div class="carousel-link-wrapper">
            <a href="https://github.com/TheAutomaTom/third-party-animal"
              ><h3 class="mx-2">
                <i class="pi pi-github px-1"></i>REPOSITORY
              </h3></a
            >
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
  </div>
</template>

<script setup lang="ts">
//
</script>
<script lang="ts">
export default { name: "Carousel_3PA" };
</script>
<style scoped lang="scss">
.carousel-footer-wrapper {
  @apply flex flex-wrap items-center;
  vertical-align: middle;
}
.carousel-link-wrapper {
  @apply flex flex-wrap;
  @media (max-width: 500px) {
    @apply w-full justify-center;
  }
}
.carousel-chip-wrapper {
  @apply flex flex-wrap flex-grow justify-end;
  @media (max-width: 500px) {
    @apply w-full justify-center;
  }
}
</style>
