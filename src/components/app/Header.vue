<template>
  <!-- <header :class="app$.IsScrolled ? 'shadow' : ''"> -->
  <header>
    <div class="header-wrapper">
      <!--=== Left Aligned ===---------------------------->
      <div class="header-left">
        <router-link class="px-3" :to="'/'"
          ><h1 style="font-family: Alegreya">Thomas Grossi</h1></router-link
        >
      </div>

      <!--=== Right Aligned ===---------------------------->
      <div class="header-right">
        <router-link class="px-3" :to="'/'"
          >Design&nbsp;&amp;&nbsp;Execution as&nbsp;Fine&nbsp;Art</router-link
        >
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @apply w-full h-12
          flex justify-center items-center;
}
.header-wrapper {
  @apply w-full max-w-7xl flex px-1 absolute top-0;
  background-color: var(--background-color);
  border-bottom: 1px solid grey;
}
.header-left {
  @apply flex flex-col justify-center;
}
.header-right {
  @apply flex flex-grow flex-row-reverse;
}
</style>
