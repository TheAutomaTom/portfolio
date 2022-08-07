<template>
  <div class="test-container">
    <div class="nav-button-l bg-orange-300">Left</div>

    <div class="col-center-top bg-purple-500">Center-Top</div>
    <div class="col-center-bottom bg-green-500">
      <img
        class="w-full max-w-fit"
        src="../assets/imgs/Animation_card.png"
        alt="Animation"
      />
    </div>

    <div class="nav-button-r bg-blue-400">Right</div>
  </div>
</template>

<script setup lang="ts">
//
</script>
<style scoped lang="scss">
.test-container {
  @apply w-full overflow-hidden grid grid-rows-2 grid-cols-3;
  grid-template-rows: /*Row 1= timer*/ auto 1fr;
  grid-template-columns: 5em 1fr 5em;
}

.nav-button {
  width: 5em;
  grid-row: 1 / 3;
  z-index: 1000;
  opacity: 30%;
  @media (max-width: 800px) {
    grid-row: 2;
  }
}
.nav-button-l {
  @extend .nav-button;
  grid-column: 1;
  @media (max-width: 800px) {
  }
}
.nav-button-r {
  @extend .nav-button;
  grid-column: 3;
  @media (max-width: 800px) {
  }
}

.col-center-top {
  @apply w-full;
  grid-column: 2;
  grid-row: 1;
  opacity: 50%;
  z-index: 1000;
  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
}

.col-center-bottom {
  @apply w-full m-0;
  //grid-row: span 1 / 2;
  grid-row: 2;
  grid-column: 2;
  @media (max-width: 800px) {
    grid-column: 1 / 4;
  }
}
</style>
