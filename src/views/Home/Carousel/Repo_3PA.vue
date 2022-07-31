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

      <!-- DESC -->
      <div class="footer-wrapper">
        <h1 class="px-3">Third Party Animal 🌹</h1>
        <div class="px-5">
          <p>
            CSV cruncher focussed on extracting meaningful assertions from
            public voter records.
          </p>

          <div class="flex flex-wrap mt-3">
            <a href="https://github.com/TheAutomaTom/third-party-animal"
              ><h3>REPOSITORY</h3></a
            >
            <span class="chip">.Net WebApi</span>
            <span class="chip">C# 9</span>
            <span class="chip">EF Core</span>
            <span class="chip">MS Sql Server</span>
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
  @apply absolute bottom-0 w-full py-8 px-3;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(22, 27, 34, 0.95) 40%,
    rgba(22, 27, 34, 0.8) 80%,
    rgba(22, 27, 34, 0) 100%
  );
}

.chip {
  @apply bg-yellow-200 rounded-full px-2 mx-2;
  color: black;
  font-family: monospace;
}
</style>
