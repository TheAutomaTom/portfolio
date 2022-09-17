This is is the dynamic interview's user-facing display
<template>
  <div class="dialog-wrapper">
    <button @click="focus$.IsActive = false">
      <i class="pi px-1 pi-times-circle" />
    </button>
    Word...
    
    <div v-for="el in focus$.ToRender">
      <li>
        <component
          :is="DynamicTest"
          
        />
      </li>
    </div> 


    ... word.
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
  background-color: rgba(117, 190, 218, 0.5);
  z-index: 20000;
}
.dialog-feature-wrapper {
  @apply bg-teal-400;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
