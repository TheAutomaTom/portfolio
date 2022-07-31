<template>
  <div>
    <h3>Data Engineering</h3>

    <!-- IMAGE -->

    <div class="w-full absolute">
      <img
        class="w-full"
        alt="user header"
        src="../../../assets/imgs/3PA_logo_sm.png"
      />

      <!-- Footer -->
      <div class="footer-wrapper">
        <!-- Title -->
        <h1>Third Party Animal 🌹</h1>

        <div>
          <!-- Description -->
          <div class-mb-3>
            <p>
              CSV cruncher focussed on extracting meaningful assertions from
              public voter records.
            </p>
          </div>
          <!-- Links & Tags -->
          <div>
            <p-hr />
            <div class="flex flex-wrap justify-center py-3">
              <a href="https://github.com/TheAutomaTom/third-party-animal"
                ><h3><i class="pi pi-github px-1"></i>REPOSITORY</h3></a
              >
            </div>
            <!-- Tags -->
            <div class="chip-wrapper">
              <span class="chip">.Net WebApi</span>
              <span class="chip">C# 9</span>
              <span class="chip">EF Core</span>
              <span class="chip">MS Sql Server</span>
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
export default { name: "Repo-3PA" };
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
  @apply flex flex-wrap mt-3 justify-end;
}
.chip {
  @apply rounded-full px-3 py-1 mx-2 text-sm font-bold;
  font-family: monospace;
  color: var(--primary-color-text);
  background-color: var(--primary-color);
}
</style>
