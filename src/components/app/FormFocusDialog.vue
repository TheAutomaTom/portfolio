This is is the dynamic interview's user-facing display
<template>
  <div class="dialog-wrapper">
    <button @click="focus$.IsActive = false">
      <i class="pi px-1 pi-times-circle" />
    </button>

    <div v-for="el in focus$.ToRender">
      <li>
        <component
          :is="el.name"
          :key="el.id"
          :parameters="el.parameters"
        />
      </li>
    </div>

 </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFormFocusModule } from "../../state/FormFocusModule";
import InputString from "../dynamics/form_focus/InputString.vue";
import DynamicTest from "../dynamics/form_focus/DynamicTest.vue";
const focus$ = useFormFocusModule();

</script>
<style lang="scss">
.dialog-wrapper {
  @apply bg-teal-600 w-full max-w-4xl h-full flex justify-around;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20000;
}
.dialog-feature-wrapper {
  @apply bg-teal-400;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
