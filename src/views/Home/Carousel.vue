<template>
  <div class="wizard-container">
    <transition-group name="list" tag="div" class="w-full">
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
