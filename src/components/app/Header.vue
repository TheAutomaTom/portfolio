<template>
  <header>
    <div class="header-wrapper">
      <div class="header-left">
        <h1>Thomas Grossi</h1>
      </div>
      <div class="header-right">
        <h4>Design&nbsp;&amp;&nbsp;Execution as&nbsp;Fine&nbsp;Art</h4>
      </div>
    </div>
  </header>
</template>

<!-- <script setup lang="ts"></script> -->

<style scoped lang="scss">
header {
  @apply fixed flex w-full justify-center;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--background-color);
  border-bottom: 1px theme("colors.gray.500") solid;
}
.header-wrapper {
  @apply w-full max-w-7xl grid 
  grid-rows-1 grid-cols-2
  px-5;
  @media (max-width: 500px) {
    @apply grid-rows-2;
  }
}
.header-left {
  @apply col-span-1;
  vertical-align: middle;
  @media (max-width: 500px) {
    @apply col-span-2;
    text-align: center;
  }
}
.header-right {
  @apply col-span-1 pt-1;
  vertical-align: middle;
  text-align: end;
  @media (max-width: 500px) {
    @apply col-span-2 row-start-2 pt-0;
    text-align: center;
  }
}
</style>
