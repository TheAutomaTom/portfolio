<template>
  <div class="carousel-wrapper">
    <input
      type="range"
      min="1"
      max="100"
      :value="car$.Progress"
      class="progress-bar w-full"
    />
    <transition-group name="list" tag="div" class="mx-5">
      <component
        :is="car$.Renderables[car$.IndexToRender].name"
        :key="car$.Renderables[car$.IndexToRender].id"
        class="carousel-item"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCarouselState } from "../../state/CarouselState";
const car$ = useCarouselState();
</script>
<style scoped lang="scss">
.carousel-wrapper {
  @apply grid grid-rows-2 w-full;
  grid-template-rows: auto 1fr;
}
.progress-bar::-webkit-slider-thumb {
  @apply bg-teal-800;
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 3em; /* Set a specific slider handle width */
  height: 0.25em; /* Slider handle height */
}
.progress-bar {
  -webkit-appearance: none;
  width: 100%;
  height: 0.25em;
  background: var(--background-color);
  outline: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.carousel-item {
  @apply absolute w-full max-w-4xl m-0;
  width: 100%;
  transform: translateX(-15px);
}

// Transitions
.list-enter-active {
  transition: all 1.5s ease;
}
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(10px);
  z-index: 100;
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
  z-index: 0;
}
</style>
