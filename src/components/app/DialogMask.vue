<template>
  <div class="dialog-wrapper">
    <div class="dialog-feature-wrapper">
      <label for="dummy1">First Name</label>
      <input id="dummy1" v-model="dummy1" />
    </div>
    <div class="dialog-feature-wrapper">
      <label for="dummy2">Whatever Name</label>
      <input id="dummy2" v-model="dummy2" />
    </div>
    <button @click="focus$.IsActive = false">X</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useInputFocusState } from "../../state/InputFocusState";
const focus$ = useInputFocusState();

var dummy1 = ref("");
var dummy2 = ref("");
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
