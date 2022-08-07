<template>
  <div class="carousel-wrapper">
    <div class="skip-button" />

    <div class="w-full">
      <div class="carousel-timer-progress-indicator">
        <input type="range" min="1" max="100" :value="car$.Progress" />
      </div>

      <transition-group name="list" tag="div" class="mx-5">
        <component
          :is="car$.Renderables[car$.IndexToRender].name"
          :key="car$.Renderables[car$.IndexToRender].id"
          class="carousel-item"
        />
      </transition-group>
    </div>

    <div class="skip-button" style="grid-column: 3" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCarouselState } from "../../state/CarouselState";
const car$ = useCarouselState();
</script>
<style scoped lang="scss">
.carousel-wrapper {
  @apply w-full overflow-hidden grid grid-rows-2;
  grid-template-rows: /*Row 1= timer*/ auto 1fr;

  @apply grid grid-cols-3;
  grid-template-columns: 5em 1fr 5em;
  @media (max-width: 500px) {
    @apply grid-cols-1;
    grid-template-columns: 1fr;
  }
}
.carousel-item {
  @apply absolute w-full max-w-4xl m-0;
  width: 100%;
  transform: translateX(-15px);

  grid-column: 2;
  @media (max-width: 500px) {
    grid-column: 1;
  }
}

.skip-button {
  @apply bg-blue-600;

  grid-row: 2;
  width: 5em;
  height: 5em;
}

// carousel-timer-progress-indicator (created from slider input)...
.carousel-timer-progress-indicator::-webkit-slider-thumb {
  @apply bg-gray-500;
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 3em; /* Set a specific slider handle width */
  height: 0.25em; /* Slider handle height */
}
input[type="range"]::-moz-range-thumb {
  @apply bg-gray-500;
  height: 0.25em; /* Slider handle height */
  width: 3em;
  outline: none;
  border: none;
  appearance: none;
}
.carousel-timer-progress-indicator {
  //grid-column: 2;
  // @media (max-width: 500px) {
  //   grid-column: 1;
  // }

  -webkit-appearance: none;
  width: 100%;
  height: 0.25em;
  background: var(--background-color);
  outline: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
// ...carousel-timer-progress-indicator

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
