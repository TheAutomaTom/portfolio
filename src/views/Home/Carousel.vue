<template>
  <div class="carousel">
    <!-- Nav Left -->
    <div @click="car$.Skip('Left')" class="nav-button-l">
      <svg width="300" height="200" class="nav-button-icon">
        <!-- <polygon points="0,0 0,100 20,50 " style="fill: white" /> -->
        <polygon points="0,50, 20,100 20,0 " style="fill: white" />
        &lt;
      </svg>
    </div>

    <!-- Timer  -->

    <input
      type="range"
      min="1"
      max="100"
      :value="car$.Progress"
      class="col-center-top carousel-timer-progress-indicator"
      style="width: 100%"
    />

    <!-- Content -->
    <transition-group name="list" tag="div" class="col-center-bottom">
      <component
        :is="car$.Renderables[car$.IndexToRender].name"
        :key="car$.Renderables[car$.IndexToRender].id"
      />
    </transition-group>

    <!-- Nav Right -->
    <div @click="car$.Skip('Right')" class="nav-button-r">
      <svg width="300" height="200" class="nav-button-icon">
        <polygon points="0,0 0,100 20,50" style="fill: white" />
        &gt;
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { useCarouselState } from "../../state/CarouselState";
const car$ = useCarouselState();

const test = (x: string) => {
  console.log(x);
};
</script>
<style scoped lang="scss">
.carousel {
  @apply w-full overflow-hidden grid grid-rows-2 grid-cols-3;
  grid-template-rows: /*Row 1= timer*/ auto 1fr;
  grid-template-columns: 5em 1fr 5em;
}

.nav-button {
  @apply flex;
  grid-row: 2;
  width: 5em;
  opacity: 0%;
  z-index: 1000;
}

.nav-button:hover {
  opacity: 30%;
}

.nav-button-icon {
  display: block;
  margin-top: 12em;
  margin-bottom: auto;
  margin-left: 1.8em;
}

svg.nav-button-icon {
}

.nav-button-l {
  @extend .nav-button;
  grid-column: 1;
  background: linear-gradient(
    340deg,
    rgba(2, 0, 36, 0) 30%,
    rgba(0, 0, 0, 0.8169468470982143) 100%
  );
}

.nav-button-r {
  @extend .nav-button;
  grid-column: 3;

  background: linear-gradient(
    20deg,
    rgba(2, 0, 36, 0) 30%,
    rgba(0, 0, 0, 0.8169468470982143) 100%
  );
}

.col-center-top {
  @apply w-full;
  height: 300px;
  grid-row: 1;
  grid-column: 2;
  z-index: 1000;
  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
}

.col-center-bottom {
  @apply w-full mx-0 my-0;
  grid-row: 2;
  grid-column: 2;
  @media (max-width: 800px) {
    grid-column: 1 / 4;
  }
}

// carousel-timer-progress-indicator (created from slider input)...
.carousel-timer-progress-indicator::-webkit-slider-thumb {
  @apply bg-gray-500;
  grid-row: 1;
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 3em; /* Set a specific slider handle width */
  height: 0.25em; /* Slider handle height */
}
input[type="range"] {
  grid-row: 1;
  top: 0;
  width: 100%;
  height: 0.25em;
  opacity: 50%;
}
input[type="range"]::-moz-range-thumb {
  grid-row: 1;
  @apply bg-gray-500;
  width: 3em;
  height: 0.25em; /* Slider handle height */
  outline: none;
  border: none;
  appearance: none;
}
.carousel-timer-progress-indicator {
  grid-row: 1;
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
// entering...
.list-enter-from {
  opacity: 0.3;
  transform: translateX(12px);
  z-index: 100;
}
.list-enter-active {
  transition: all 0.6s ease-out;
}
.list-enter-to {
  opacity: 1;
}

// leaving...
.list-leave-from {
  @apply absolute max-w-xl;
  opacity: 0;
  z-index: -100;
}

.list-leave-active {
  transition: all 0.6s ease-in;
}
.list-leave-to {
  @apply absolute max-w-xl;
  opacity: 0;
  // transform: translateX(-200px), translateY(1200px);
}
</style>
